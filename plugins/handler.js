let {MessageType, GroupSettingChange, ChatModification, WAConnectionTest} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let fs = require('fs');
let Config = require('../config');
var pf = ''

WhatsAlexa.addCommand({pattern: `${pf} ?(.*)`, fromMe: true, desc: Lang.CLR_DESC}, (async (message, match) => {

if (match[0] === 'handler') {
     pf = 'handler'
} else if (match[0] === 'handlers') {
     pf = 'handlers'
} else if (match[0] === 'prefix') {
     pf = 'prefix'
} else {
     pf = 'handler'
}

    if (match[1].includes(',')) match[1].replace(',', '')

    if (match[1] === 'default') {
         await heroku.patch(baseURI + '/config-vars', { 
             body: { 
                  ['HANDLERS']: '^[!.#*]'
             } 
         });
         await message.sendReply('*✅️ Successfully Changed Prefix to !.#**');
    } else {
         await heroku.patch(baseURI + '/config-vars', { 
             body: { 
                  ['HANDLERS']: '^[' + match[1] + ']'
             } 
         });
         await message.sendReply('*✅️ Successfully Changed Prefix to ' match[1] + '*');
    }
}));
