const _0x551f82 = _0x4727;
(function (_0x2808c7, _0x1d0ca2) {
  const _0x573216 = _0x4727,
    _0x2b3c32 = _0x2808c7();
  while (!![]) {
    try {
      const _0x1fdab2 =
        (parseInt(_0x573216(0x173)) / 0x1) *
          (-parseInt(_0x573216(0x15c)) / 0x2) +
        parseInt(_0x573216(0x151)) / 0x3 +
        parseInt(_0x573216(0x15e)) / 0x4 +
        parseInt(_0x573216(0x14f)) / 0x5 +
        parseInt(_0x573216(0x15f)) / 0x6 +
        (parseInt(_0x573216(0x175)) / 0x7) *
          (parseInt(_0x573216(0x152)) / 0x8) +
        -parseInt(_0x573216(0x174)) / 0x9;
      if (_0x1fdab2 === _0x1d0ca2) break;
      else _0x2b3c32["push"](_0x2b3c32["shift"]());
    } catch (_0xdeb0aa) {
      _0x2b3c32["push"](_0x2b3c32["shift"]());
    }
  }
})(_0x1a9c, 0x20a17);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x551f82(
    0x162
  )),
  Base = require(_0x551f82(0x163)),
  Message = require(_0x551f82(0x164)),
  ReplyMessage = require("./ReplyMessage");
class Image extends Base {
  constructor(_0x261b5f, _0x2571a6) {
    const _0xdc1128 = _0x551f82;
    super(_0x261b5f);
    if (_0x2571a6) this[_0xdc1128(0x17e)](_0x2571a6);
  }
  [_0x551f82(0x17e)](_0x3a9bd1) {
    const _0xc4150f = _0x551f82;
    return (
      (this["id"] =
        _0x3a9bd1["key"]["id"] === undefined
          ? undefined
          : _0x3a9bd1[_0xc4150f(0x16f)]["id"]),
      (this[_0xc4150f(0x16c)] = _0x3a9bd1[_0xc4150f(0x16f)][_0xc4150f(0x183)]),
      (this[_0xc4150f(0x16a)] = _0x3a9bd1[_0xc4150f(0x16f)][_0xc4150f(0x16a)]),
      (this[_0xc4150f(0x182)] =
        _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x178)][_0xc4150f(0x182)] === null
          ? _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x178)]["caption"]
          : ""),
      (this[_0xc4150f(0x17b)] =
        _0x3a9bd1["message"][_0xc4150f(0x178)][_0xc4150f(0x17b)]),
      (this[_0xc4150f(0x177)] =
        typeof _0x3a9bd1["messageTimestamp"] === "object"
          ? _0x3a9bd1[_0xc4150f(0x150)]["low"]
          : _0x3a9bd1[_0xc4150f(0x150)]),
      (this[_0xc4150f(0x157)] =
        _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x178)]["mimetype"]),
      (this[_0xc4150f(0x158)] =
        _0x3a9bd1[_0xc4150f(0x15b)]["imageMessage"][_0xc4150f(0x158)]),
      (this[_0xc4150f(0x17d)] =
        _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x178)][_0xc4150f(0x17d)]),
      (this[_0xc4150f(0x15a)] =
        _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x178)][_0xc4150f(0x15a)]),
      (this[_0xc4150f(0x185)] = _0x3a9bd1),
      _0x3a9bd1[_0xc4150f(0x15b)]["imageMessage"][_0xc4150f(0x16e)](
        _0xc4150f(0x153)
      ) && _0x3a9bd1[_0xc4150f(0x15b)][_0xc4150f(0x153)][_0xc4150f(0x161)]
        ? (this["reply_message"] = new ReplyMessage(
            this[_0xc4150f(0x165)],
            _0x3a9bd1["message"]["imageMessage"]["contextInfo"]
          ))
        : (this["reply_message"] = ![]),
      super["_patch"](_0x3a9bd1)
    );
  }
  async [_0x551f82(0x167)]() {
    const _0x420290 = _0x551f82;
    return await this[_0x420290(0x165)][_0x420290(0x166)](
      this[_0x420290(0x16c)],
      { id: this["id"], remoteJid: this["jid"], fromMe: !![] }
    );
  }
  async ["sendReply"](_0x448bf9) {
    const _0xf8196b = _0x551f82;
    var _0x2c5402 = await this[_0xf8196b(0x165)][_0xf8196b(0x186)](
      this[_0xf8196b(0x16c)],
      _0x448bf9,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xf8196b(0x185)],
      }
    );
    return new Message(this[_0xf8196b(0x165)], _0x2c5402);
  }
  async [_0x551f82(0x186)](_0x4e81b0, _0x81b3f8, _0x3f7d42) {
    const _0x325b76 = _0x551f82;
    return await this[_0x325b76(0x165)]["sendMessage"](
      this[_0x325b76(0x16c)],
      _0x4e81b0,
      _0x81b3f8,
      _0x3f7d42
    );
  }
  async [_0x551f82(0x17f)](_0x530f7e) {
    const _0x433cae = _0x551f82;
    return await this[_0x433cae(0x165)][_0x433cae(0x186)](
      this[_0x433cae(0x16c)],
      _0x530f7e,
      MessageType[_0x433cae(0x180)],
      {
        mimetype: Mimetype[_0x433cae(0x171)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x433cae(0x185)],
      }
    );
  }
  async [_0x551f82(0x168)](_0x61d5db) {
    const _0x15aac5 = _0x551f82;
    return await this["client"]["sendMessage"](
      this[_0x15aac5(0x16c)],
      _0x61d5db,
      MessageType[_0x15aac5(0x176)],
      {
        mimetype: Mimetype["mpeg"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x15aac5(0x185)],
      }
    );
  }
  async ["sendVideoAsGif"](_0x32f862) {
    const _0x11247e = _0x551f82;
    return await this[_0x11247e(0x165)][_0x11247e(0x186)](
      this[_0x11247e(0x16c)],
      _0x32f862,
      MessageType[_0x11247e(0x176)],
      {
        mimetype: Mimetype[_0x11247e(0x15d)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x11247e(0x185)],
      }
    );
  }
  async ["sendAudio"](_0x31756c) {
    const _0x171306 = _0x551f82;
    return await this["client"][_0x171306(0x186)](
      this[_0x171306(0x16c)],
      _0x31756c,
      MessageType[_0x171306(0x159)],
      {
        mimetype: Mimetype[_0x171306(0x169)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x171306(0x185)],
      }
    );
  }
  async [_0x551f82(0x184)](_0x27d8db) {
    const _0x51ee49 = _0x551f82;
    return await this["client"][_0x51ee49(0x186)](
      this[_0x51ee49(0x16c)],
      _0x27d8db,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x51ee49(0x169)],
        ptt: !![],
        quoted: this[_0x51ee49(0x185)],
      }
    );
  }
  async [_0x551f82(0x156)]() {
    const _0x304eaf = _0x551f82;
    return await this[_0x304eaf(0x165)]["chatRead"](
      this["jid"],
      _0x304eaf(0x170)
    );
  }
  async [_0x551f82(0x155)]() {
    const _0x24779e = _0x551f82;
    return await this[_0x24779e(0x165)][_0x24779e(0x17a)](
      this["jid"],
      Presence["composing"]
    );
  }
  async [_0x551f82(0x16d)]() {
    const _0x369be2 = _0x551f82;
    return await this["client"][_0x369be2(0x17a)](
      this[_0x369be2(0x16c)],
      Presence[_0x369be2(0x16b)]
    );
  }
  async [_0x551f82(0x160)]() {
    const _0xf2e06a = _0x551f82;
    return await this[_0xf2e06a(0x165)][_0xf2e06a(0x17a)](
      this[_0xf2e06a(0x16c)],
      Presence[_0xf2e06a(0x17c)]
    );
  }
  async [_0x551f82(0x172)]() {
    const _0x46b726 = _0x551f82;
    return await this[_0x46b726(0x165)][_0x46b726(0x17a)](
      this[_0x46b726(0x16c)],
      Presence[_0x46b726(0x179)]
    );
  }
  async ["sendRead"]() {
    const _0x44f68e = _0x551f82;
    return await this[_0x44f68e(0x165)][_0x44f68e(0x181)](
      this[_0x44f68e(0x16c)]
    );
  }
  async ["download"](_0x5c7dfd = this["id"]) {
    const _0x946279 = _0x551f82;
    return (
      await this[_0x946279(0x165)]["downloadAndSaveMediaMessage"](
        this[_0x946279(0x185)],
        _0x5c7dfd
      ),
      this["id"] + "." + this["mimetype"][_0x946279(0x154)]("/")[0x1]
    );
  }
}
function _0x1a9c() {
  const _0x2b5a98 = [
    "imageMessage",
    "unavailable",
    "updatePresence",
    "url",
    "available",
    "width",
    "_patch",
    "sendImage",
    "image",
    "chatRead",
    "caption",
    "remoteJid",
    "sendAudioAsVoice",
    "data",
    "sendMessage",
    "564115cFrjLl",
    "messageTimestamp",
    "513210akUOka",
    "1395488TftHid",
    "contextInfo",
    "split",
    "sendTyping",
    "sendUnread",
    "mimetype",
    "height",
    "audio",
    "mediaKey",
    "message",
    "20778EIeDyM",
    "gif",
    "355744pXXyEe",
    "1363770HKWRwE",
    "sendOnline",
    "quotedMessage",
    "@adiwajshing/baileys",
    "./Base",
    "./Message",
    "client",
    "deleteMessage",
    "delete",
    "sendVideo",
    "mp4Audio",
    "fromMe",
    "recording",
    "jid",
    "sendRecording",
    "hasOwnProperty",
    "key",
    "unread",
    "png",
    "sendOffline",
    "22TornVW",
    "3711123JWZUvh",
    "7bsmLEY",
    "video",
    "timestamp",
  ];
  _0x1a9c = function () {
    return _0x2b5a98;
  };
  return _0x1a9c();
}
function _0x4727(_0x23c258, _0x16ef41) {
  const _0x1a9c72 = _0x1a9c();
  return (
    (_0x4727 = function (_0x4727b7, _0x8e5657) {
      _0x4727b7 = _0x4727b7 - 0x14f;
      let _0x34c5d9 = _0x1a9c72[_0x4727b7];
      return _0x34c5d9;
    }),
    _0x4727(_0x23c258, _0x16ef41)
  );
}
module["exports"] = Image;
