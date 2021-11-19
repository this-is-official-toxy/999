function _0x1692(_0x324b49, _0x454384) {
  const _0x360401 = _0x3604();
  return (
    (_0x1692 = function (_0x169239, _0x2f0b08) {
      _0x169239 = _0x169239 - 0x191;
      let _0xc8b89f = _0x360401[_0x169239];
      return _0xc8b89f;
    }),
    _0x1692(_0x324b49, _0x454384)
  );
}
const _0x343794 = _0x1692;
(function (_0x3ffab2, _0x1858ee) {
  const _0x65df4d = _0x1692,
    _0x5b63eb = _0x3ffab2();
  while (!![]) {
    try {
      const _0x370330 =
        -parseInt(_0x65df4d(0x1b8)) / 0x1 +
        parseInt(_0x65df4d(0x1b1)) / 0x2 +
        -parseInt(_0x65df4d(0x195)) / 0x3 +
        parseInt(_0x65df4d(0x1af)) / 0x4 +
        -parseInt(_0x65df4d(0x1c3)) / 0x5 +
        (parseInt(_0x65df4d(0x1c0)) / 0x6) *
          (parseInt(_0x65df4d(0x1b0)) / 0x7) +
        parseInt(_0x65df4d(0x19d)) / 0x8;
      if (_0x370330 === _0x1858ee) break;
      else _0x5b63eb["push"](_0x5b63eb["shift"]());
    } catch (_0x3c9896) {
      _0x5b63eb["push"](_0x5b63eb["shift"]());
    }
  }
})(_0x3604, 0xa7657);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x343794(
    0x198
  )),
  Base = require("./Base"),
  Message = require("./Message"),
  ReplyMessage = require(_0x343794(0x1bc));
class Image extends Base {
  constructor(_0x316df7, _0xbdb528) {
    const _0x22bd65 = _0x343794;
    super(_0x316df7);
    if (_0xbdb528) this[_0x22bd65(0x1a9)](_0xbdb528);
  }
  [_0x343794(0x1a9)](_0x9fb98) {
    const _0x342fc6 = _0x343794;
    return (
      (this["id"] =
        _0x9fb98[_0x342fc6(0x1b4)]["id"] === undefined
          ? undefined
          : _0x9fb98[_0x342fc6(0x1b4)]["id"]),
      (this["jid"] = _0x9fb98[_0x342fc6(0x1b4)][_0x342fc6(0x191)]),
      (this[_0x342fc6(0x1ca)] = _0x9fb98[_0x342fc6(0x1b4)]["fromMe"]),
      (this["caption"] =
        _0x9fb98["message"][_0x342fc6(0x1c2)][_0x342fc6(0x1c4)] === null
          ? _0x9fb98["message"]["imageMessage"][_0x342fc6(0x1c4)]
          : ""),
      (this[_0x342fc6(0x1bd)] =
        _0x9fb98[_0x342fc6(0x19a)][_0x342fc6(0x1c2)][_0x342fc6(0x1bd)]),
      (this[_0x342fc6(0x1ba)] =
        typeof _0x9fb98["messageTimestamp"] === _0x342fc6(0x1a5)
          ? _0x9fb98[_0x342fc6(0x1b7)][_0x342fc6(0x1ad)]
          : _0x9fb98["messageTimestamp"]),
      (this[_0x342fc6(0x19e)] =
        _0x9fb98["message"][_0x342fc6(0x1c2)]["mimetype"]),
      (this[_0x342fc6(0x19b)] =
        _0x9fb98[_0x342fc6(0x19a)][_0x342fc6(0x1c2)][_0x342fc6(0x19b)]),
      (this[_0x342fc6(0x1b6)] = _0x9fb98["message"]["imageMessage"]["width"]),
      (this[_0x342fc6(0x1a0)] =
        _0x9fb98[_0x342fc6(0x19a)]["imageMessage"][_0x342fc6(0x1a0)]),
      (this[_0x342fc6(0x1c8)] = _0x9fb98),
      _0x9fb98["message"][_0x342fc6(0x1c2)][_0x342fc6(0x197)](
        _0x342fc6(0x1ae)
      ) && _0x9fb98[_0x342fc6(0x19a)][_0x342fc6(0x1ae)][_0x342fc6(0x1c9)]
        ? (this[_0x342fc6(0x194)] = new ReplyMessage(
            this[_0x342fc6(0x1b3)],
            _0x9fb98["message"][_0x342fc6(0x1c2)][_0x342fc6(0x1ae)]
          ))
        : (this[_0x342fc6(0x194)] = ![]),
      super["_patch"](_0x9fb98)
    );
  }
  async [_0x343794(0x1aa)](_0x1ef8ac) {
    const _0x3c33dd = _0x343794;
    var _0x261340 = await this[_0x3c33dd(0x1b3)][_0x3c33dd(0x1be)](
      this["jid"],
      _0x1ef8ac,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
    return new Message(this[_0x3c33dd(0x1b3)], _0x261340);
  }
  async [_0x343794(0x1be)](_0x5c77dc, _0x2ee0a6, _0x3974de) {
    const _0xa2c6bc = _0x343794;
    return await this[_0xa2c6bc(0x1b3)][_0xa2c6bc(0x1be)](
      this[_0xa2c6bc(0x1bf)],
      _0x5c77dc,
      _0x2ee0a6,
      _0x3974de
    );
  }
  async [_0x343794(0x1c7)](_0x5a763c) {
    const _0x15767a = _0x343794;
    return await this[_0x15767a(0x1b3)]["sendMessage"](
      this[_0x15767a(0x1bf)],
      _0x5a763c,
      MessageType["image"],
      {
        mimetype: Mimetype[_0x15767a(0x1b5)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x15767a(0x1c8)],
      }
    );
  }
  async [_0x343794(0x1a2)](_0x2f4f49) {
    const _0x538b8b = _0x343794;
    return await this[_0x538b8b(0x1b3)][_0x538b8b(0x1be)](
      this[_0x538b8b(0x1bf)],
      _0x2f4f49,
      MessageType[_0x538b8b(0x19f)],
      {
        mimetype: Mimetype[_0x538b8b(0x1b2)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x538b8b(0x1c8)],
      }
    );
  }
  async [_0x343794(0x1a7)](_0x539b25) {
    const _0x8fd4d4 = _0x343794;
    return await this["client"][_0x8fd4d4(0x1be)](
      this["jid"],
      _0x539b25,
      MessageType[_0x8fd4d4(0x19f)],
      {
        mimetype: Mimetype[_0x8fd4d4(0x1ab)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x8fd4d4(0x1c8)],
      }
    );
  }
  async [_0x343794(0x193)](_0x53737e) {
    const _0x1dff83 = _0x343794;
    return await this[_0x1dff83(0x1b3)]["sendMessage"](
      this[_0x1dff83(0x1bf)],
      _0x53737e,
      MessageType[_0x1dff83(0x1c1)],
      {
        mimetype: Mimetype["mp4Audio"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x1dff83(0x1c8)],
      }
    );
  }
  async ["sendAudioAsVoice"](_0x1733cc) {
    const _0x480708 = _0x343794;
    return await this["client"][_0x480708(0x1be)](
      this[_0x480708(0x1bf)],
      _0x1733cc,
      MessageType[_0x480708(0x1c1)],
      {
        mimetype: Mimetype[_0x480708(0x1c6)],
        ptt: !![],
        quoted: this[_0x480708(0x1c8)],
      }
    );
  }
  async [_0x343794(0x1a8)]() {
    const _0x2776b1 = _0x343794;
    return await this[_0x2776b1(0x1b3)][_0x2776b1(0x1a4)](
      this[_0x2776b1(0x1bf)],
      _0x2776b1(0x1c5)
    );
  }
  async [_0x343794(0x192)]() {
    const _0x153742 = _0x343794;
    return await this[_0x153742(0x1b3)][_0x153742(0x1b9)](
      this["jid"],
      Presence[_0x153742(0x1a1)]
    );
  }
  async ["sendRecording"]() {
    const _0x20d799 = _0x343794;
    return await this[_0x20d799(0x1b3)][_0x20d799(0x1b9)](
      this[_0x20d799(0x1bf)],
      Presence[_0x20d799(0x1a3)]
    );
  }
  async [_0x343794(0x19c)]() {
    const _0x5d4635 = _0x343794;
    return await this[_0x5d4635(0x1b3)]["updatePresence"](
      this[_0x5d4635(0x1bf)],
      Presence["available"]
    );
  }
  async [_0x343794(0x1a6)]() {
    const _0x50de51 = _0x343794;
    return await this[_0x50de51(0x1b3)][_0x50de51(0x1b9)](
      this[_0x50de51(0x1bf)],
      Presence[_0x50de51(0x199)]
    );
  }
  async [_0x343794(0x1bb)]() {
    const _0x308e38 = _0x343794;
    return await this["client"][_0x308e38(0x1a4)](this[_0x308e38(0x1bf)]);
  }
  async [_0x343794(0x196)](_0x3315ef = this["id"]) {
    const _0x283da6 = _0x343794;
    return (
      await this[_0x283da6(0x1b3)]["downloadAndSaveMediaMessage"](
        this[_0x283da6(0x1c8)],
        _0x3315ef
      ),
      this["id"] + "." + this[_0x283da6(0x19e)][_0x283da6(0x1ac)]("/")[0x1]
    );
  }
}
function _0x3604() {
  const _0x165034 = [
    "mpeg",
    "client",
    "key",
    "png",
    "width",
    "messageTimestamp",
    "931305HZwgkN",
    "updatePresence",
    "timestamp",
    "sendRead",
    "./ReplyMessage",
    "url",
    "sendMessage",
    "jid",
    "35826lopPCC",
    "audio",
    "imageMessage",
    "5569185oMEVgs",
    "caption",
    "unread",
    "mp4Audio",
    "sendImage",
    "data",
    "quotedMessage",
    "fromMe",
    "remoteJid",
    "sendTyping",
    "sendAudio",
    "reply_message",
    "3248430ehIoie",
    "download",
    "hasOwnProperty",
    "@adiwajshing/baileys",
    "unavailable",
    "message",
    "height",
    "sendOnline",
    "16722752FFdIMz",
    "mimetype",
    "video",
    "mediaKey",
    "composing",
    "sendVideo",
    "recording",
    "chatRead",
    "object",
    "sendOffline",
    "sendVideoAsGif",
    "sendUnread",
    "_patch",
    "sendReply",
    "gif",
    "split",
    "low",
    "contextInfo",
    "98692kJWcul",
    "1113viurwO",
    "1498402kkyBHC",
  ];
  _0x3604 = function () {
    return _0x165034;
  };
  return _0x3604();
}
module["exports"] = Image;
