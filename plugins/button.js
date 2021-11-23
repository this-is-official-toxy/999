let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');

WhatsAlexa.addCommand({pattern: 'button ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

const buttonMessage = {
contentText: "Hi",
footerText: "Its Me",
buttons: "HOW ARE YOU",
headerType: "#alive"
}
     await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage);
    }
}));
