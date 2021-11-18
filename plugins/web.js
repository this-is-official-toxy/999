let { newCommand } = require('../events');
let {MessageType} = require('@adiwajshing/baileys');
let TinyURL = require('tinyurl');
let fs = require('fs');
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('web');
let SLang = Language.getString('webss');

if (Config.WORKTYPE == 'private') {

    newCommand(
             {pattern: 'ping',
              private: true,
              deleteCommand: false,
              desc: Lang.PING_DESC},
              (async (message, match) => {

       var start = new Date().getTime();
       await message.client.sendMessage(message.jid, '```Measuring Ping!```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
       var end = new Date().getTime();

       await message.client.sendMessage(
         message.jid,'\n\n*Ping -* ```' + (end - start) + 'ms```\n\n', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    }));

    newCommand(
             {pattern: 'short ?(.*)',
              private: true,
              desc: Lang.URL},
             (async (message, match) => {

         if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});

         TinyURL.shorten(`${match[1]}`, async(res, err) => {
           if (err)
             await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});

             await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
         });
    }));
}
else if (Config.WORKTYPE == 'public') {
    
    newCommand(
             {pattern: 'ping',
              private: false,
              deleteCommand: false,
              desc: Lang.PING_DESC},
              (async (message, match) => {

       var start = new Date().getTime();
       await message.client.sendMessage(message.jid, '```Measuring Ping!```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
       var end = new Date().getTime();

       await message.client.sendMessage(
         message.jid,'\n\n*WhatsAlexa Ping -* ```' + (end - start) + 'ms```\n\n', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
    }));

    newCommand(
             {pattern: 'short ?(.*)',
              private: false,
              desc: Lang.URL},
             (async (message, match) => {

         if (match[1] === '') return await message.client.sendMessage(message.jid, SLang.LİNK, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});

         TinyURL.shorten(`${match[1]}`, async(res, err) => {
           if (err)
             await message.client.sendMessage(message.jid, '*#### Error! ####*\n\n' + '```' + err + '```', MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});

             await message.client.sendMessage(message.jid,`*Original Link:* ${match[1]}\n*Short Link:* ` + res, MessageType.text, {contextInfo: { forwardingScore: 49, isForwarded: true }, quoted: message.data});
         });
    }));
}
