const _0x21c4f7 = _0x523e;
(function (_0x5a2d6, _0x5673b5) {
  const _0x10ff0e = _0x523e,
    _0x34d998 = _0x5a2d6();
  while (!![]) {
    try {
      const _0x2fde06 =
        (parseInt(_0x10ff0e(0x11a)) / 0x1) *
          (-parseInt(_0x10ff0e(0x12b)) / 0x2) +
        (-parseInt(_0x10ff0e(0x12a)) / 0x3) *
          (-parseInt(_0x10ff0e(0xff)) / 0x4) +
        (-parseInt(_0x10ff0e(0x119)) / 0x5) *
          (-parseInt(_0x10ff0e(0x110)) / 0x6) +
        -parseInt(_0x10ff0e(0x122)) / 0x7 +
        (parseInt(_0x10ff0e(0x139)) / 0x8) *
          (-parseInt(_0x10ff0e(0x124)) / 0x9) +
        (-parseInt(_0x10ff0e(0x103)) / 0xa) *
          (parseInt(_0x10ff0e(0x10f)) / 0xb) +
        (parseInt(_0x10ff0e(0x121)) / 0xc) * (parseInt(_0x10ff0e(0x128)) / 0xd);
      if (_0x2fde06 === _0x5673b5) break;
      else _0x34d998["push"](_0x34d998["shift"]());
    } catch (_0x2a6776) {
      _0x34d998["push"](_0x34d998["shift"]());
    }
  }
})(_0x1113, 0x61429);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x21c4f7(
    0x137
  )),
  Base = require("./Base"),
  ReplyMessage = require(_0x21c4f7(0x12d));
class Message extends Base {
  constructor(_0x464a10, _0x111dcd) {
    super(_0x464a10);
    if (_0x111dcd) this["_patch"](_0x111dcd);
  }
  [_0x21c4f7(0x12e)](_0x4260b7) {
    const _0x4f2a1a = _0x21c4f7;
    return (
      (this["id"] =
        _0x4260b7[_0x4f2a1a(0x109)]["id"] === undefined
          ? undefined
          : _0x4260b7[_0x4f2a1a(0x109)]["id"]),
      (this[_0x4f2a1a(0x120)] = _0x4260b7[_0x4f2a1a(0x109)]["remoteJid"]),
      (this[_0x4f2a1a(0x131)] = _0x4260b7["key"][_0x4f2a1a(0x131)]),
      (this[_0x4f2a1a(0x116)] =
        _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x11d)] === null
          ? _0x4260b7[_0x4f2a1a(0x116)]["conversation"]
          : _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x11d)][_0x4f2a1a(0x118)]),
      (this["unreadCount"] = _0x4260b7[_0x4f2a1a(0x11e)]),
      (this[_0x4f2a1a(0x12f)] =
        typeof _0x4260b7[_0x4f2a1a(0x11f)] === "object"
          ? _0x4260b7[_0x4f2a1a(0x11f)][_0x4f2a1a(0x10a)]
          : _0x4260b7["messageTimestamp"]),
      (this[_0x4f2a1a(0x130)] = _0x4260b7),
      _0x4260b7[_0x4f2a1a(0x116)]["hasOwnProperty"](_0x4f2a1a(0x11d)) &&
      _0x4260b7["message"][_0x4f2a1a(0x11d)]["hasOwnProperty"](
        _0x4f2a1a(0x114)
      ) === !![] &&
      _0x4260b7["message"][_0x4f2a1a(0x11d)][_0x4f2a1a(0x114)][
        _0x4f2a1a(0x105)
      ](_0x4f2a1a(0x111))
        ? (this[_0x4f2a1a(0x100)] = new ReplyMessage(
            this[_0x4f2a1a(0x138)],
            _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x11d)][_0x4f2a1a(0x114)]
          ))
        : (this["reply_message"] = ![]),
      _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x105)]("extendedTextMessage") &&
      _0x4260b7["message"]["extendedTextMessage"][_0x4f2a1a(0x105)](
        _0x4f2a1a(0x114)
      ) === !![] &&
      _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x11d)][_0x4f2a1a(0x114)][
        _0x4f2a1a(0x105)
      ](_0x4f2a1a(0x113))
        ? (this[_0x4f2a1a(0x127)] =
            _0x4260b7[_0x4f2a1a(0x116)][_0x4f2a1a(0x11d)][_0x4f2a1a(0x114)][
              "mentionedJid"
            ])
        : (this["mention"] = ![]),
      super[_0x4f2a1a(0x12e)](_0x4260b7)
    );
  }
  async [_0x21c4f7(0x10e)]() {
    const _0x481e90 = _0x21c4f7;
    return await this[_0x481e90(0x138)][_0x481e90(0x129)](this["jid"], {
      id: this["id"],
      remoteJid: this[_0x481e90(0x120)],
      fromMe: !![],
    });
  }
  async [_0x21c4f7(0x104)](_0x142a75) {
    const _0x31181f = _0x21c4f7;
    var _0x5ad1ff = await this[_0x31181f(0x138)][_0x31181f(0x10b)](
      this[_0x31181f(0x120)],
      _0x142a75,
      MessageType[_0x31181f(0x118)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
    return new Message(this["client"], _0x5ad1ff);
  }
  async [_0x21c4f7(0x10b)](_0x22d422, _0x11bc81, _0x30529c) {
    const _0x33b33a = _0x21c4f7;
    return await this[_0x33b33a(0x138)][_0x33b33a(0x10b)](
      this[_0x33b33a(0x120)],
      _0x22d422,
      _0x11bc81,
      _0x30529c
    );
  }
  async ["sendImage"](_0x3cc09c, _0x5b2235) {
    const _0x155722 = _0x21c4f7;
    return await this["client"]["sendMessage"](
      this[_0x155722(0x120)],
      _0x3cc09c,
      MessageType["image"],
      {
        mimetype: Mimetype[_0x155722(0x123)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x5b2235,
        quoted: this[_0x155722(0x130)],
      }
    );
  }
  async [_0x21c4f7(0x132)](_0x350082, _0x5b0f1a) {
    const _0xa10842 = _0x21c4f7;
    return await this[_0xa10842(0x138)][_0xa10842(0x10b)](
      this[_0xa10842(0x120)],
      _0x350082,
      MessageType[_0xa10842(0x134)],
      {
        mimetype: Mimetype[_0xa10842(0x123)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x5b0f1a,
        readViewOnce: !![],
        quoted: this[_0xa10842(0x130)],
      }
    );
  }
  async ["sendVideo"](_0x35801b, _0x53b144) {
    const _0x2cd33 = _0x21c4f7;
    return await this[_0x2cd33(0x138)][_0x2cd33(0x10b)](
      this[_0x2cd33(0x120)],
      _0x35801b,
      MessageType["video"],
      {
        mimetype: Mimetype[_0x2cd33(0x117)],
        caption: _0x53b144,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x2cd33(0x130)],
      }
    );
  }
  async [_0x21c4f7(0x115)](_0x1727f6, _0x1f6498) {
    const _0x4a6026 = _0x21c4f7;
    return await this[_0x4a6026(0x138)][_0x4a6026(0x10b)](
      this[_0x4a6026(0x120)],
      _0x1727f6,
      MessageType[_0x4a6026(0x11c)],
      {
        mimetype: Mimetype[_0x4a6026(0x117)],
        caption: _0x1f6498,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        readViewOnce: !![],
        quoted: this["data"],
      }
    );
  }
  async [_0x21c4f7(0x107)](_0x3da1f1, _0x3b132a) {
    const _0x518119 = _0x21c4f7;
    return await this["client"]["sendMessage"](
      this["jid"],
      _0x3da1f1,
      MessageType[_0x518119(0x11c)],
      {
        mimetype: Mimetype[_0x518119(0x10d)],
        caption: _0x3b132a,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x518119(0x130)],
      }
    );
  }
  async [_0x21c4f7(0x133)](_0x515cd6) {
    const _0xfbcc67 = _0x21c4f7;
    return await this[_0xfbcc67(0x138)][_0xfbcc67(0x10b)](
      this[_0xfbcc67(0x120)],
      _0x515cd6,
      MessageType[_0xfbcc67(0x125)],
      {
        mimetype: Mimetype["mp4Audio"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xfbcc67(0x130)],
      }
    );
  }
  async [_0x21c4f7(0x101)](_0x157ecd) {
    const _0x165b65 = _0x21c4f7;
    return await this[_0x165b65(0x138)][_0x165b65(0x10b)](
      this[_0x165b65(0x120)],
      _0x157ecd,
      MessageType[_0x165b65(0x125)],
      {
        mimetype: Mimetype[_0x165b65(0x112)],
        ptt: !![],
        quoted: this[_0x165b65(0x130)],
      }
    );
  }
  async [_0x21c4f7(0x135)]() {
    const _0x439baf = _0x21c4f7;
    return await this[_0x439baf(0x138)][_0x439baf(0x10c)](
      this["jid"],
      _0x439baf(0x102)
    );
  }
  async [_0x21c4f7(0x12c)]() {
    const _0x37f09c = _0x21c4f7;
    return await this[_0x37f09c(0x138)][_0x37f09c(0x126)](
      this[_0x37f09c(0x120)],
      Presence[_0x37f09c(0x13a)]
    );
  }
  async [_0x21c4f7(0x106)]() {
    const _0x2dedb9 = _0x21c4f7;
    return await this[_0x2dedb9(0x138)][_0x2dedb9(0x126)](
      this[_0x2dedb9(0x120)],
      Presence["recording"]
    );
  }
  async [_0x21c4f7(0x108)]() {
    const _0x2fd50b = _0x21c4f7;
    return await this[_0x2fd50b(0x138)][_0x2fd50b(0x126)](
      this[_0x2fd50b(0x120)],
      Presence["available"]
    );
  }
  async [_0x21c4f7(0x136)]() {
    const _0x271ce6 = _0x21c4f7;
    return await this[_0x271ce6(0x138)][_0x271ce6(0x126)](
      this[_0x271ce6(0x120)],
      Presence["unavailable"]
    );
  }
  async ["sendRead"]() {
    const _0x3516ae = _0x21c4f7;
    return await this[_0x3516ae(0x138)]["chatRead"](this[_0x3516ae(0x120)]);
  }
}
function _0x1113() {
  const _0x46cfc6 = [
    "_patch",
    "timestamp",
    "data",
    "fromMe",
    "sendImageAsViewonce",
    "sendAudio",
    "image",
    "sendUnread",
    "sendOffline",
    "@adiwajshing/baileys",
    "client",
    "5448OLDetL",
    "composing",
    "789980yemJSL",
    "reply_message",
    "sendAudioAsVoice",
    "unread",
    "10hRvckY",
    "sendReply",
    "hasOwnProperty",
    "sendRecording",
    "sendVideoAsGif",
    "sendOnline",
    "key",
    "low",
    "sendMessage",
    "chatRead",
    "gif",
    "delete",
    "6817657cHNJqX",
    "12ENXAbU",
    "quotedMessage",
    "mp4Audio",
    "mentionedJid",
    "contextInfo",
    "sendVideoAsViewonce",
    "message",
    "mp4",
    "text",
    "230655XBbeoX",
    "101699bkLwIr",
    "exports",
    "video",
    "extendedTextMessage",
    "unreadCount",
    "messageTimestamp",
    "jid",
    "1236czbPcq",
    "878535ZPMbcy",
    "png",
    "3789fbBhte",
    "audio",
    "updatePresence",
    "mention",
    "82017opQZZs",
    "deleteMessage",
    "12QPxWqE",
    "2ANGGId",
    "sendTyping",
    "./ReplyMessage",
  ];
  _0x1113 = function () {
    return _0x46cfc6;
  };
  return _0x1113();
}
function _0x523e(_0x47e77f, _0x35e365) {
  const _0x111350 = _0x1113();
  return (
    (_0x523e = function (_0x523ee3, _0x2fde36) {
      _0x523ee3 = _0x523ee3 - 0xff;
      let _0x5a3bba = _0x111350[_0x523ee3];
      return _0x5a3bba;
    }),
    _0x523e(_0x47e77f, _0x35e365)
  );
}
module[_0x21c4f7(0x11b)] = Message;
