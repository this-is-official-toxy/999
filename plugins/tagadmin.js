let { newCommand } = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('tagall');

if (Config.WORKTYPE == 'private') {
    
    newCommand(
             {pattern: 'tagadmin$',
              private: true,
              desc: Lang.TAGADMİN},
              (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '🔴 @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    newCommand(
             {pattern: 'tagadmin$',
              private: false,
              desc: Lang.TAGADMİN},
              (async (message, match) => {

        let grup = await message.client.groupMetadata(message.jid);
        var jids = [];
        mesaj = '';
        grup['participants'].map(async (uye) => {
            if (uye.isAdmin) {
                mesaj += '🔴 @' + uye.id.split('@')[0] + '\n';
                jids.push(uye.id.replace('c.us', 's.whatsapp.net'));
            }
        });
        await message.client.sendMessage(message.jid,mesaj, MessageType.extendedText, {contextInfo: {mentionedJid: jids}, previewType: 0})
    }));
}
