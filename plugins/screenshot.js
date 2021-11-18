let { newCommand } = require('../events');
let {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
let fs = require('fs');
let axios = require('axios');
let request = require('request');
let got = require("got");
let Config = require('../config');
let Language = require('../language');
let Lang = Language.getString('webss');

var _0x277bff=_0x3447;function _0x3447(_0x4a6bd8,_0x3a14c1){var _0x56c708=_0x56c7();return _0x3447=function(_0x3447c0,_0x305a98){_0x3447c0=_0x3447c0-0x192;var _0x32236a=_0x56c708[_0x3447c0];return _0x32236a;},_0x3447(_0x4a6bd8,_0x3a14c1);}(function(_0x4b7f27,_0x2fbba0){var _0x5a8989=_0x3447,_0x537d7d=_0x4b7f27();while(!![]){try{var _0x5c17d9=-parseInt(_0x5a8989(0x198))/0x1*(parseInt(_0x5a8989(0x196))/0x2)+parseInt(_0x5a8989(0x194))/0x3+-parseInt(_0x5a8989(0x19d))/0x4+parseInt(_0x5a8989(0x195))/0x5+parseInt(_0x5a8989(0x199))/0x6+parseInt(_0x5a8989(0x193))/0x7+-parseInt(_0x5a8989(0x192))/0x8;if(_0x5c17d9===_0x2fbba0)break;else _0x537d7d['push'](_0x537d7d['shift']());}catch(_0x2cdf10){_0x537d7d['push'](_0x537d7d['shift']());}}}(_0x56c7,0x47de0));function _0x56c7(){var _0x3c0d9a=['4skZhbY','LANG','264028XAyQNU','539652xAUhZa','*നിങ്ങൾ\x20ഒരു\x20സാധുവായ\x20ലിങ്ക്\x20നൽകണം!*','*Anda\x20harus\x20memasukkan\x20Tautan\x20yang\x20Valid!*','*You\x20must\x20enter\x20a\x20Valid\x20Link!*','590140kxCYnW','3888672rSLIli','2456853UUIjGB','1410660KpznIN','2724510OBbSpi'];_0x56c7=function(){return _0x3c0d9a;};return _0x56c7();}var INVALID_URL='';if(Config[_0x277bff(0x197)]=='EN')INVALID_URL=_0x277bff(0x19c);if(Config[_0x277bff(0x197)]=='ML')INVALID_URL=_0x277bff(0x19a);if(Config[_0x277bff(0x197)]=='ID')INVALID_URL=_0x277bff(0x19b);

if (Config.WORKTYPE == 'private') {

    newCommand(
            {pattern: 'ss ?(.*)',
             private: true,
             desc: Lang.SS_DESC},
             (async (message, match) => {
        
    var _0x4f4dca=_0x53ee;(function(_0x36b938,_0x51de21){var _0x3b7aab=_0x53ee,_0x446ef6=_0x36b938();while(!![]){try{var _0x46cd07=parseInt(_0x3b7aab(0xfe))/0x1+-parseInt(_0x3b7aab(0xec))/0x2*(-parseInt(_0x3b7aab(0xf7))/0x3)+parseInt(_0x3b7aab(0xfa))/0x4+-parseInt(_0x3b7aab(0xfc))/0x5*(-parseInt(_0x3b7aab(0xfb))/0x6)+-parseInt(_0x3b7aab(0xfd))/0x7*(-parseInt(_0x3b7aab(0xf9))/0x8)+parseInt(_0x3b7aab(0xef))/0x9+-parseInt(_0x3b7aab(0xf1))/0xa;if(_0x46cd07===_0x51de21)break;else _0x446ef6['push'](_0x446ef6['shift']());}catch(_0x256716){_0x446ef6['push'](_0x446ef6['shift']());}}}(_0x1127,0x4eea2));function _0x53ee(_0x5d4894,_0x583bc0){var _0x112749=_0x1127();return _0x53ee=function(_0x53ee47,_0x19ebb1){_0x53ee47=_0x53ee47-0xea;var _0x129d42=_0x112749[_0x53ee47];return _0x129d42;},_0x53ee(_0x5d4894,_0x583bc0);}if(match[0x1]==='')return await message[_0x4f4dca(0xf0)](message[_0x4f4dca(0xf8)],Lang['LİNK'],MessageType[_0x4f4dca(0xed)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});if(!match[0x1][_0x4f4dca(0xf5)]('www'))return await message['sendMessage'](message[_0x4f4dca(0xf8)],INVALID_URL,MessageType[_0x4f4dca(0xed)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});function _0x1127(){var _0x1a4533=['includes','image','3PwreEt','jid','8728jYHqjB','409920iMTZNn','1602378kqVCfw','10VHmHgS','1141aIzvBE','217713NBJjGa','*Made\x20By\x20WhatsAlexa*','png','1023388vXKBkv','text','&output=image&file_type=png&wait_for_event=load','2818395sFWJoS','sendMessage','15337670fFnuib','https://shot.screenshotapi.net/screenshot?&url=','http','data'];_0x1127=function(){return _0x1a4533;};return _0x1127();}if(!match[0x1][_0x4f4dca(0xf5)](_0x4f4dca(0xf3)))return await message['sendMessage'](message[_0x4f4dca(0xf8)],INVALID_URL,MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});var webimage=await axios['get'](_0x4f4dca(0xf2)+match[0x1]+_0x4f4dca(0xee),{'responseType':'arraybuffer'});await message[_0x4f4dca(0xf0)](Buffer['from'](webimage['data']),MessageType[_0x4f4dca(0xf6)],{'mimetype':Mimetype[_0x4f4dca(0xeb)],'capion':_0x4f4dca(0xea),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});
        
    }));
}
else if (Config.WORKTYPE == 'public') {

    newCommand(
            {pattern: 'ss ?(.*)',
             private: false,
             desc: Lang.SS_DESC},
             (async (message, match) => {

    var _0x4f4dca=_0x53ee;(function(_0x36b938,_0x51de21){var _0x3b7aab=_0x53ee,_0x446ef6=_0x36b938();while(!![]){try{var _0x46cd07=parseInt(_0x3b7aab(0xfe))/0x1+-parseInt(_0x3b7aab(0xec))/0x2*(-parseInt(_0x3b7aab(0xf7))/0x3)+parseInt(_0x3b7aab(0xfa))/0x4+-parseInt(_0x3b7aab(0xfc))/0x5*(-parseInt(_0x3b7aab(0xfb))/0x6)+-parseInt(_0x3b7aab(0xfd))/0x7*(-parseInt(_0x3b7aab(0xf9))/0x8)+parseInt(_0x3b7aab(0xef))/0x9+-parseInt(_0x3b7aab(0xf1))/0xa;if(_0x46cd07===_0x51de21)break;else _0x446ef6['push'](_0x446ef6['shift']());}catch(_0x256716){_0x446ef6['push'](_0x446ef6['shift']());}}}(_0x1127,0x4eea2));function _0x53ee(_0x5d4894,_0x583bc0){var _0x112749=_0x1127();return _0x53ee=function(_0x53ee47,_0x19ebb1){_0x53ee47=_0x53ee47-0xea;var _0x129d42=_0x112749[_0x53ee47];return _0x129d42;},_0x53ee(_0x5d4894,_0x583bc0);}if(match[0x1]==='')return await message[_0x4f4dca(0xf0)](message[_0x4f4dca(0xf8)],Lang['LİNK'],MessageType[_0x4f4dca(0xed)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});if(!match[0x1][_0x4f4dca(0xf5)]('www'))return await message['sendMessage'](message[_0x4f4dca(0xf8)],INVALID_URL,MessageType[_0x4f4dca(0xed)],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});function _0x1127(){var _0x1a4533=['includes','image','3PwreEt','jid','8728jYHqjB','409920iMTZNn','1602378kqVCfw','10VHmHgS','1141aIzvBE','217713NBJjGa','*Made\x20By\x20WhatsAlexa*','png','1023388vXKBkv','text','&output=image&file_type=png&wait_for_event=load','2818395sFWJoS','sendMessage','15337670fFnuib','https://shot.screenshotapi.net/screenshot?&url=','http','data'];_0x1127=function(){return _0x1a4533;};return _0x1127();}if(!match[0x1][_0x4f4dca(0xf5)](_0x4f4dca(0xf3)))return await message['sendMessage'](message[_0x4f4dca(0xf8)],INVALID_URL,MessageType['text'],{'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message[_0x4f4dca(0xf4)]});var webimage=await axios['get'](_0x4f4dca(0xf2)+match[0x1]+_0x4f4dca(0xee),{'responseType':'arraybuffer'});await message[_0x4f4dca(0xf0)](Buffer['from'](webimage['data']),MessageType[_0x4f4dca(0xf6)],{'mimetype':Mimetype[_0x4f4dca(0xeb)],'capion':_0x4f4dca(0xea),'contextInfo':{'forwardingScore':0x31,'isForwarded':!![]},'quoted':message['data']});
        
    }));
}
