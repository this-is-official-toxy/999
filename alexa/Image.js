const _0x25c92a = _0x4a94;
(function (_0x18a441, _0xc2a75a) {
  const _0x12689a = _0x4a94,
    _0x499eda = _0x18a441();
  while (!![]) {
    try {
      const _0x4af956 =
        (-parseInt(_0x12689a(0x9c)) / 0x1) *
          (-parseInt(_0x12689a(0xbf)) / 0x2) +
        -parseInt(_0x12689a(0x93)) / 0x3 +
        -parseInt(_0x12689a(0xa1)) / 0x4 +
        -parseInt(_0x12689a(0x9e)) / 0x5 +
        (parseInt(_0x12689a(0xa4)) / 0x6) * (-parseInt(_0x12689a(0xb3)) / 0x7) +
        (-parseInt(_0x12689a(0xa8)) / 0x8) * (parseInt(_0x12689a(0xb5)) / 0x9) +
        parseInt(_0x12689a(0xba)) / 0xa;
      if (_0x4af956 === _0xc2a75a) break;
      else _0x499eda["push"](_0x499eda["shift"]());
    } catch (_0xec7d9b) {
      _0x499eda["push"](_0x499eda["shift"]());
    }
  }
})(_0x1243, 0xea89e);
const {
    MessageType,
    Mimetype,
    Presence,
    MessageOptions,
  } = require("@adiwajshing/baileys"),
  Base = require(_0x25c92a(0x88)),
  Message = require(_0x25c92a(0x8d)),
  ReplyMessage = require(_0x25c92a(0xb0));
function _0x4a94(_0x317453, _0x1127ba) {
  const _0x124317 = _0x1243();
  return (
    (_0x4a94 = function (_0x4a9434, _0x2e7afb) {
      _0x4a9434 = _0x4a9434 - 0x84;
      let _0x4060b3 = _0x124317[_0x4a9434];
      return _0x4060b3;
    }),
    _0x4a94(_0x317453, _0x1127ba)
  );
}
class Image extends Base {
  constructor(_0x383fe5, _0x1eb0f0) {
    const _0x2580c8 = _0x25c92a;
    super(_0x383fe5);
    if (_0x1eb0f0) this[_0x2580c8(0x9f)](_0x1eb0f0);
  }
  [_0x25c92a(0x9f)](_0x2c15fd) {
    const _0x192a64 = _0x25c92a;
    return (
      (this["id"] =
        _0x2c15fd["key"]["id"] === undefined
          ? undefined
          : _0x2c15fd[_0x192a64(0x86)]["id"]),
      (this["jid"] = _0x2c15fd[_0x192a64(0x86)]["remoteJid"]),
      (this["fromMe"] = _0x2c15fd[_0x192a64(0x86)][_0x192a64(0xb1)]),
      (this[_0x192a64(0xbb)] =
        _0x2c15fd["message"]["imageMessage"]["caption"] === null
          ? _0x2c15fd[_0x192a64(0x90)][_0x192a64(0xa0)][_0x192a64(0xbb)]
          : ""),
      (this[_0x192a64(0x85)] =
        _0x2c15fd["message"]["imageMessage"][_0x192a64(0x85)]),
      (this["timestamp"] =
        typeof _0x2c15fd[_0x192a64(0xac)] === "object"
          ? _0x2c15fd[_0x192a64(0xac)][_0x192a64(0x87)]
          : _0x2c15fd[_0x192a64(0xac)]),
      (this[_0x192a64(0x84)] =
        _0x2c15fd[_0x192a64(0x90)][_0x192a64(0xa0)][_0x192a64(0x84)]),
      (this[_0x192a64(0x8a)] =
        _0x2c15fd["message"][_0x192a64(0xa0)][_0x192a64(0x8a)]),
      (this[_0x192a64(0xb2)] =
        _0x2c15fd["message"]["imageMessage"][_0x192a64(0xb2)]),
      (this[_0x192a64(0xa2)] =
        _0x2c15fd[_0x192a64(0x90)]["imageMessage"]["mediaKey"]),
      (this[_0x192a64(0xb8)] = _0x2c15fd),
      _0x2c15fd[_0x192a64(0x90)][_0x192a64(0xa0)][_0x192a64(0xb6)](
        "contextInfo"
      ) && _0x2c15fd[_0x192a64(0x90)][_0x192a64(0x89)][_0x192a64(0x94)]
        ? (this[_0x192a64(0x97)] = new ReplyMessage(
            this[_0x192a64(0x9d)],
            _0x2c15fd[_0x192a64(0x90)][_0x192a64(0xa0)][_0x192a64(0x89)]
          ))
        : (this[_0x192a64(0x97)] = ![]),
      super[_0x192a64(0x9f)](_0x2c15fd)
    );
  }
  async [_0x25c92a(0x96)]() {
    const _0x1f0807 = _0x25c92a;
    return await this[_0x1f0807(0x9d)]["deleteMessage"](this[_0x1f0807(0x9a)], {
      id: this["id"],
      remoteJid: this[_0x1f0807(0x9a)],
      fromMe: !![],
    });
  }
  async [_0x25c92a(0xab)](_0x54a64c) {
    const _0x3f5bd3 = _0x25c92a;
    var _0x4f96bd = await this["client"][_0x3f5bd3(0xa6)](
      this["jid"],
      _0x54a64c,
      MessageType[_0x3f5bd3(0xaa)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x3f5bd3(0xb8)],
      }
    );
    return new Message(this[_0x3f5bd3(0x9d)], _0x4f96bd);
  }
  async [_0x25c92a(0xa6)](_0x57c45f, _0x5a4118, _0x56535c) {
    const _0x54018a = _0x25c92a;
    return await this[_0x54018a(0x9d)]["sendMessage"](
      this[_0x54018a(0x9a)],
      _0x57c45f,
      _0x5a4118,
      _0x56535c
    );
  }
  async [_0x25c92a(0xa3)](_0x50b62c, _0x38d9b6) {
    const _0x3aca8d = _0x25c92a;
    return await this[_0x3aca8d(0x9d)][_0x3aca8d(0xa6)](
      this[_0x3aca8d(0x9a)],
      _0x50b62c,
      MessageType["image"],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x38d9b6,
        quoted: this["data"],
      }
    );
  }
  async ["sendImageAsViewonce"](_0x3e080b, _0x120c90) {
    const _0x5af00c = _0x25c92a;
    return await this[_0x5af00c(0x9d)][_0x5af00c(0xa6)](
      this[_0x5af00c(0x9a)],
      _0x3e080b,
      MessageType["image"],
      {
        mimetype: Mimetype[_0x5af00c(0x8b)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x120c90,
        readViewOnce: !![],
        quoted: this["data"],
      }
    );
  }
  async [_0x25c92a(0xb7)](_0x4d3677, _0x33dfd7) {
    const _0xb87eb0 = _0x25c92a;
    return await this[_0xb87eb0(0x9d)][_0xb87eb0(0xa6)](
      this[_0xb87eb0(0x9a)],
      _0x4d3677,
      MessageType["video"],
      {
        mimetype: Mimetype["mp4"],
        caption: _0x33dfd7,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xb87eb0(0xb8)],
      }
    );
  }
  async ["sendVideoAsViewonce"](_0xd238bb, _0x5e4fad) {
    const _0x2f78ee = _0x25c92a;
    return await this[_0x2f78ee(0x9d)]["sendMessage"](
      this[_0x2f78ee(0x9a)],
      _0xd238bb,
      MessageType[_0x2f78ee(0xbd)],
      {
        mimetype: Mimetype[_0x2f78ee(0xbe)],
        caption: _0x5e4fad,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        readViewOnce: !![],
        quoted: this[_0x2f78ee(0xb8)],
      }
    );
  }
  async ["sendVideoAsGif"](_0x4b767d, _0x3b3985) {
    const _0x2b635f = _0x25c92a;
    return await this[_0x2b635f(0x9d)][_0x2b635f(0xa6)](
      this[_0x2b635f(0x9a)],
      _0x4b767d,
      MessageType["video"],
      {
        mimetype: Mimetype["gif"],
        caption: _0x3b3985,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x25c92a(0x91)](_0x57a58a) {
    const _0x48abce = _0x25c92a;
    return await this["client"][_0x48abce(0xa6)](
      this["jid"],
      _0x57a58a,
      MessageType[_0x48abce(0xa5)],
      {
        mimetype: Mimetype["mp4Audio"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x48abce(0xb8)],
      }
    );
  }
  async [_0x25c92a(0xb4)](_0x3c1a69) {
    const _0x3cc221 = _0x25c92a;
    return await this[_0x3cc221(0x9d)][_0x3cc221(0xa6)](
      this["jid"],
      _0x3c1a69,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x3cc221(0x8e)],
        ptt: !![],
        quoted: this[_0x3cc221(0xb8)],
      }
    );
  }
  async ["sendUnread"]() {
    const _0x5ca7e2 = _0x25c92a;
    return await this[_0x5ca7e2(0x9d)]["chatRead"](
      this[_0x5ca7e2(0x9a)],
      _0x5ca7e2(0x92)
    );
  }
  async [_0x25c92a(0x8c)]() {
    const _0xca3fe3 = _0x25c92a;
    return await this[_0xca3fe3(0x9d)][_0xca3fe3(0xa7)](
      this["jid"],
      Presence[_0xca3fe3(0xaf)]
    );
  }
  async [_0x25c92a(0x95)]() {
    const _0x5083a4 = _0x25c92a;
    return await this[_0x5083a4(0x9d)][_0x5083a4(0xa7)](
      this[_0x5083a4(0x9a)],
      Presence["recording"]
    );
  }
  async [_0x25c92a(0xae)]() {
    const _0x18a195 = _0x25c92a;
    return await this[_0x18a195(0x9d)][_0x18a195(0xa7)](
      this[_0x18a195(0x9a)],
      Presence["available"]
    );
  }
  async [_0x25c92a(0x99)]() {
    const _0x223a1d = _0x25c92a;
    return await this["client"]["updatePresence"](
      this[_0x223a1d(0x9a)],
      Presence[_0x223a1d(0xb9)]
    );
  }
  async [_0x25c92a(0x9b)]() {
    const _0x3354d5 = _0x25c92a;
    return await this[_0x3354d5(0x9d)][_0x3354d5(0xad)](this[_0x3354d5(0x9a)]);
  }
  async [_0x25c92a(0xbc)](_0x48e3d5 = this["id"]) {
    const _0x531c0d = _0x25c92a;
    return (
      await this["client"][_0x531c0d(0x98)](this[_0x531c0d(0xb8)], _0x48e3d5),
      this["id"] + "." + this[_0x531c0d(0x84)][_0x531c0d(0xa9)]("/")[0x1]
    );
  }
}
function _0x1243() {
  const _0x11f0be = [
    "sendReply",
    "messageTimestamp",
    "chatRead",
    "sendOnline",
    "composing",
    "./ReplyMessage",
    "fromMe",
    "width",
    "7dbxNUZ",
    "sendAudioAsVoice",
    "4554ZeaWrC",
    "hasOwnProperty",
    "sendVideo",
    "data",
    "unavailable",
    "30484490WBvsNf",
    "caption",
    "download",
    "video",
    "mp4",
    "216304ZaeqLd",
    "mimetype",
    "url",
    "key",
    "low",
    "./Base",
    "contextInfo",
    "height",
    "png",
    "sendTyping",
    "./Message",
    "mp4Audio",
    "exports",
    "message",
    "sendAudio",
    "unread",
    "716259XWUBjS",
    "quotedMessage",
    "sendRecording",
    "delete",
    "reply_message",
    "downloadAndSaveMediaMessage",
    "sendOffline",
    "jid",
    "sendRead",
    "4IweLcm",
    "client",
    "5772345WcnlzH",
    "_patch",
    "imageMessage",
    "673076CleuPk",
    "mediaKey",
    "sendImage",
    "461628ZBQxkM",
    "audio",
    "sendMessage",
    "updatePresence",
    "13944alaXjk",
    "split",
    "text",
  ];
  _0x1243 = function () {
    return _0x11f0be;
  };
  return _0x1243();
}
module[_0x25c92a(0x8f)] = Image;
