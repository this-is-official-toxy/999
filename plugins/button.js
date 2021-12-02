let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');

WhatsAlexa.addCommand({pattern: 'button ?(.*)', fromMe: true, dontAddCommandList: true}, (async (message, match) => {

             const buttons = [
  {buttonId: 'Git', buttonText: {displayText: 'Git'}, type: 'hehe'},
  {buttonId: 'Owner', buttonText: {displayText: 'Owner'}, type: '.owner'}
]

const buttonMessage = {
    contentText: 'Its me Alexa 😎',
    footerText: '© WhatsAlexa, Made by TOXIC-DEVIL',
    buttons: buttons,
    headerType: 1
}

   await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)}));
