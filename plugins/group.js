let {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
let WhatsAlexa = require('../events');
let Config = require('../config');
let FilterDb = require('./sql/filters');
let Language = require('../language');
let FLang = Language.getString('filters');
let Lang = Language.getString('admin');
let td = Config.WORKTYPE == 'public' ? false : true
let isMe = Config.WORKTYPE == 'public' ? 'message.data.participant' : 'message.client.user.jid'
let NAM = Config.WORKTYPE == 'public' ? Lang.YOURE_NOT_ADMIN : Lang.IM_NOT_ADMIN

 async function checkAdmin(message, user = isMe) {
   if (Config.WORKTYPE == 'public') {
        var grup = await message.client.groupMetadata(message.jid);
        var sonuc = grup['participants'].map((member) => {     
            if (member.jid.split("@")[0] == user.split("@")[0] && member.isAdmin) return true; else; return false;
        });
        return sonuc.includes(true);
   } else {
        var grup = await message.client.groupMetadata(message.jid);
        var sonuc = grup['participants'].map((member) => {
            if (member.id.split('@')[0] === user.split('@')[0] && member.isAdmin) return true; else; return false;
        });
        return sonuc.includes(true);
    }
}

WhatsAlexa.addCommand({pattern: 'kick ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.BAN_DESC}, (async (message, match) => {  
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    if (Config.BANMSG == 'default') {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + '```, ' + Lang.BANNED + '```', MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupRemove(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.BANMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupRemove(message.jid, message.mention);
        } else {
            return await message.sendReply(Lang.GIVE_ME_USER);
        }
    }
}));

WhatsAlexa.addCommand({pattern: 'add(?: |$)(.*)', fromMe: td, onlyGroup: true, desc: Lang.ADD_DESC}, (async (message, match) => {  
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    if (match[1] !== '') {
        match[1].split(' ').map(async (user) => {
            await message.client.groupAdd(message.jid, [user + "@s.whatsapp.net"]);
            await message.sendReply('```' + user + ' ' + Lang.ADDED +'```');
        });
    } else {
        return await message.sendReply(Lang.GIVE_ME_USER);
    }
}));

WhatsAlexa.addCommand({pattern: 'promote ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.PROMOTE_DESC}, (async (message, match) => {    
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    if (Config.PROMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.PROMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.client.sendMessage(message.jid,Lang.GIVE_ME_USER,MessageType.text);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkAdmin(message, message.reply_message.data.participant);
            if (checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupMakeAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkAdmin(message, user);
                if (checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_PROMOTED, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.PROMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupMakeAdmin(message.jid, message.mention);
        } else {
            return await message.sendReply(Lang.GIVE_ME_USER);
        }
    }
}));

WhatsAlexa.addCommand({pattern: 'demote ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.DEMOTE_DESC}, (async (message, match) => {    
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    if (Config.DEMOTEMSG == 'default') {
        if (message.reply_message !== false) {
            var checkAlready = await checkAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Lang.DEMOTED, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.sendReply(Lang.GIVE_ME_USER);
        }
    }
    else {
        if (message.reply_message !== false) {
            var checkAlready = await checkAdmin(message, message.reply_message.data.participant.split('@')[0]);
            if (!checkAlready) {
                return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
            }

            await message.client.sendMessage(message.jid,'@' + message.reply_message.data.participant.split('@')[0] + Config.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: [message.reply_message.data.participant]}});
            await message.client.groupDemoteAdmin(message.jid, [message.reply_message.data.participant]);
        } else if (message.reply_message === false && message.mention !== false) {
            var etiketler = '';
            message.mention.map(async (user) => {
                var checkAlready = await checkAdmin(message, user);
                if (!checkAlready) {
                    return await message.client.sendMessage(message.jid,Lang.ALREADY_NOT_ADMIN, MessageType.text);
                }

                etiketler += '@' + user.split('@')[0] + ',';
            });

            await message.client.sendMessage(message.jid,etiketler + Config.DEMOTEMSG, MessageType.text, {contextInfo: {mentionedJid: message.mention}});
            await message.client.groupDemoteAdmin(message.jid, message.mention);
        } else {
            return await message.sendReply(Lang.GIVE_ME_USER);
        }
    }
}));

WhatsAlexa.addCommand({pattern: 'closegc ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.MUTE_DESC}, (async (message, match) => {    
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, true);
    await message.sendReply(Lang.MUTED);
}));

WhatsAlexa.addCommand({pattern: 'opengc ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.UNMUTE_DESC}, (async (message, match) => {    
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);

    await message.client.groupSettingChange(message.jid, GroupSettingChange.messageSend, false);
    await message.sendReply(Lang.UNMUTED);
}));

WhatsAlexa.addCommand({pattern: 'linkgc ?(.*)', fromMe: td, onlyGroup: true, desc: Lang.INVITE_DESC}, (async (message, match) => {    
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);
    
    var invite = await message.client.groupInviteCode(message.jid);
    await message.sendReply(Lang.INVITE + ' https://chat.whatsapp.com/' + invite);
}));

WhatsAlexa.addCommand({pattern: 'revoke ?(.*)', onlyGroup: true, fromMe: td, desc: Lang.REVOKE_DESC}, (async (message, match) => {
    var im = await checkAdmin(message)
    if (!im) return await message.sendReply(NAM)
    await message.client.revokeInvite(message.jid)
    await message.sendReply(Lang.SUC_REVOKED)
}))

WhatsAlexa.addCommand({pattern: 'setgcname ?(.*)', onlyGroup: true, fromMe: true, desc: Lang.SET_NAME_DESC}, (async (message, match) => {
    var im = await checkAdmin(message);
    if (!im) return await message.sendReply(NAM);
    
    if (match[1] === '') return await message.sendReply(Lang.S_NEED_WORD);
    await message.client.groupUpdateSubject(message.jid, match[1]);
    await message.sendReply(Lang.SUC_SNAME + '```' + match[1] + '```');
    }
));

module.exports = {
    checkImAdmin: checkAdmin
};
