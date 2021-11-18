let simpleGit = require('simple-git');
let git = simpleGit();
let fs = require('fs');
let { newCommand } = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let Config = require('../config');
let exec = require('child_process').exec;
let Heroku = require('heroku-client');
let { PassThrough } = require('stream');
let heroku = new Heroku({ token: Config.HEROKU.API_KEY })
let Language = require('../language');
let Lang = Language.getString('updater');

newCommand(
         {pattern: 'update$',
          private: true,
          desc: Lang.UPDATER_DESC},
          (async (message, match) => {

    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    } else {
        var degisiklikler = Lang.NEW_UPDATE;
        commits['all'].map(
            (commit) => {
                degisiklikler += '▣ [' + commit.date.substring(0, 10) + ']: ' + commit.message + ' <' + commit.author_name + '>\n';
            }
        );
        
        await message.client.sendMessage(
            message.jid,
            degisiklikler + '```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    }
}));

newCommand(
         {pattern: 'update now$',
          private: true,
          desc: Lang.UPDATE_NOW_DESC},
          (async (message, match) => {

    await git.fetch();
    var commits = await git.log([Config.BRANCH + '..origin/' + Config.BRANCH]);
    if (commits.total === 0) {
        return await message.client.sendMessage(
            message.jid,
            Lang.UPDATE, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    } else {
        var guncelleme = await message.client.sendMessage(message.jid, Lang.UPDATING, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        if (Config.HEROKU.HEROKU) {
            try {
                var app = await heroku.get('/apps/' + Config.HEROKU.APP_NAME)
            } catch {
                return await message.client.sendMessage(
                    message.jid,Lang.INVALID_HEROKU, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            }

            git.fetch('upstream', Config.BRANCH);
            git.reset('hard', ['FETCH_HEAD']);

            var git_url = app.git_url.replace(
                "https://", "https://api:" + Config.HEROKU.API_KEY + "@"
            )
            
            try {
                await git.addRemote('heroku', git_url);
            } catch { console.log('🔴 WhatsAlexa: Invalid HEROKU_APP_NAME or HEROKU_API_KEY! Please check and correct it.'); }
            await git.push('heroku', Config.BRANCH);

            await message.client.sendMessage(
                message.jid,Lang.UPDATED, MessageType.text);

            await message.sendMessage(Lang.AFTER_UPDATE);
            
        } else {
            git.pull((async (err, update) => {
                if(update && update.summary.changes) {
                    await message.client.sendMessage(
                        message.jid,Lang.UPDATED_LOCAL, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
                    exec('npm install').stderr.pipe(process.stderr);
                } else if (err) {
                    await message.client.sendMessage(
                        message.jid,'*❌ An Heroku Error Occurred*\n*ERROR:* ```' + err + '```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
               }
            }));
            await guncelleme.delete();
        }
    }
}));
