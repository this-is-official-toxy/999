let { newCommand } = require('../events');
let {MessageType,Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let ffmpeg = require('fluent-ffmpeg');
let {execFile} = require('child_process');
let cwebp = require('cwebp-bin');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('unvoice');

if (Config.WORKTYPE == 'private') {

    newCommand(
             {pattern: 'unvoice',
              private: true,
              desc: Lang.UV_DESC},
              (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UV_REPLY, MesssageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var downloading = await message.client.sendMessage(message.jid,Lang.UV_PROC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .format('mp3')
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
    newCommand(
             {pattern: 'unaudio',
              private: true,
              desc: Lang.UA_DESC},
             (async (message, match) => {    

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UA_REPLY, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var downloading = await message.client.sendMessage(message.jid,Lang.UA_PROC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
else if (Config.WORKTYPE == 'public') {

    newCommand(
             {pattern: 'unvoice',
              private: false,
              desc: Lang.UV_DESC},
              (async (message, match) => {   

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UV_REPLY, MesssageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var downloading = await message.client.sendMessage(message.jid,Lang.UV_PROC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .format('mp3')
            .save('output.mp3')
            .on('end', async () => {
                await message.sendMessage(fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: true, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
    
    newCommand(
             {pattern: 'unaudio',
              private: false,
              desc: Lang.UA_DESC},
             (async (message, match) => {

        if (message.reply_message === false) return await message.client.sendMessage(message.jid, Lang.UA_REPLY, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var downloading = await message.client.sendMessage(message.jid,Lang.UA_PROC,MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
        var location = await message.client.downloadAndSaveMediaMessage({
            key: {
                remoteJid: message.reply_message.jid,
                id: message.reply_message.id
            },
            message: message.reply_message.data.quotedMessage
        });

        ffmpeg(location)
            .withNoVideo()
            .save('output.mp3')
            .on('end', async () => {
                await message.client.sendMessage(message.jid, fs.readFileSync('output.mp3'), MessageType.audio, {mimetype: Mimetype.mp4Audio, ptt: false, contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
            });
        return await message.client.deleteMessage(message.jid, {id: downloading.key.id, remoteJid: message.jid, fromMe: true})
    }));
}
