const _0x230e55 = _0x45d3;
(function (_0xe5490d, _0x1e22d3) {
  const _0x34e292 = _0x45d3,
    _0x21076d = _0xe5490d();
  while (!![]) {
    try {
      const _0x49eba4 =
        -parseInt(_0x34e292(0x160)) / 0x1 +
        -parseInt(_0x34e292(0x154)) / 0x2 +
        parseInt(_0x34e292(0x17c)) / 0x3 +
        -parseInt(_0x34e292(0x17d)) / 0x4 +
        parseInt(_0x34e292(0x168)) / 0x5 +
        parseInt(_0x34e292(0x187)) / 0x6 +
        parseInt(_0x34e292(0x16e)) / 0x7;
      if (_0x49eba4 === _0x1e22d3) break;
      else _0x21076d["push"](_0x21076d["shift"]());
    } catch (_0x2f4fd5) {
      _0x21076d["push"](_0x21076d["shift"]());
    }
  }
})(_0x640c, 0x2e8d2);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x230e55(
    0x183
  )),
  Base = require(_0x230e55(0x14f)),
  Message = require(_0x230e55(0x188)),
  ReplyMessage = require(_0x230e55(0x151));
class Image extends Base {
  constructor(_0x42ef02, _0x3729a2) {
    const _0x4c4a87 = _0x230e55;
    super(_0x42ef02);
    if (_0x3729a2) this[_0x4c4a87(0x161)](_0x3729a2);
  }
  [_0x230e55(0x161)](_0xdb5be9) {
    const _0x166594 = _0x230e55;
    return (
      (this["id"] =
        _0xdb5be9["key"]["id"] === undefined
          ? undefined
          : _0xdb5be9["key"]["id"]),
      (this["jid"] = _0xdb5be9[_0x166594(0x180)][_0x166594(0x155)]),
      (this["fromMe"] = _0xdb5be9["key"]["fromMe"]),
      (this[_0x166594(0x182)] =
        _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)]["caption"] === null
          ? _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)][_0x166594(0x182)]
          : ""),
      (this[_0x166594(0x177)] =
        _0xdb5be9["message"]["imageMessage"][_0x166594(0x177)]),
      (this[_0x166594(0x14e)] =
        typeof _0xdb5be9[_0x166594(0x178)] === "object"
          ? _0xdb5be9[_0x166594(0x178)][_0x166594(0x162)]
          : _0xdb5be9[_0x166594(0x178)]),
      (this[_0x166594(0x172)] =
        _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)][_0x166594(0x172)]),
      (this[_0x166594(0x175)] =
        _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)][_0x166594(0x175)]),
      (this["width"] = _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)]["width"]),
      (this[_0x166594(0x16b)] =
        _0xdb5be9[_0x166594(0x173)][_0x166594(0x156)]["mediaKey"]),
      (this[_0x166594(0x16f)] = _0xdb5be9),
      _0xdb5be9[_0x166594(0x173)]["imageMessage"][_0x166594(0x184)](
        "contextInfo"
      ) && _0xdb5be9[_0x166594(0x173)][_0x166594(0x189)][_0x166594(0x15b)]
        ? (this[_0x166594(0x16c)] = new ReplyMessage(
            this[_0x166594(0x16d)],
            _0xdb5be9[_0x166594(0x173)]["imageMessage"][_0x166594(0x189)]
          ))
        : (this[_0x166594(0x16c)] = ![]),
      super[_0x166594(0x161)](_0xdb5be9)
    );
  }
  async [_0x230e55(0x170)]() {
    const _0x154f77 = _0x230e55;
    return await this[_0x154f77(0x16d)][_0x154f77(0x17f)](this["jid"], {
      id: this["id"],
      remoteJid: this[_0x154f77(0x18a)],
      fromMe: !![],
    });
  }
  async [_0x230e55(0x15c)](_0x4e3ab9) {
    const _0x3607ea = _0x230e55;
    var _0x5b31d8 = await this[_0x3607ea(0x16d)][_0x3607ea(0x171)](
      this["jid"],
      _0x4e3ab9,
      MessageType[_0x3607ea(0x15f)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x3607ea(0x16f)],
      }
    );
    return new Message(this[_0x3607ea(0x16d)], _0x5b31d8);
  }
  async [_0x230e55(0x171)](_0x369362, _0x5d2b80, _0x39a688) {
    const _0x48ef3f = _0x230e55;
    return await this["client"][_0x48ef3f(0x171)](
      this[_0x48ef3f(0x18a)],
      _0x369362,
      _0x5d2b80,
      _0x39a688
    );
  }
  async [_0x230e55(0x150)](_0x34ebe0) {
    const _0x3db9d5 = _0x230e55;
    return await this[_0x3db9d5(0x16d)][_0x3db9d5(0x171)](
      this[_0x3db9d5(0x18a)],
      _0x34ebe0,
      MessageType[_0x3db9d5(0x169)],
      {
        mimetype: Mimetype[_0x3db9d5(0x166)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x3db9d5(0x179),
        quoted: this[_0x3db9d5(0x16f)],
      }
    );
  }
  async [_0x230e55(0x176)](_0x914c0b) {
    const _0x151106 = _0x230e55;
    return await this[_0x151106(0x16d)][_0x151106(0x171)](
      this[_0x151106(0x18a)],
      _0x914c0b,
      MessageType[_0x151106(0x18c)],
      {
        mimetype: Mimetype[_0x151106(0x16a)],
        caption: _0x151106(0x179),
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x230e55(0x15a)](_0x30ba2a) {
    const _0x3a63a0 = _0x230e55;
    return await this["client"][_0x3a63a0(0x171)](
      this[_0x3a63a0(0x18a)],
      _0x30ba2a,
      MessageType[_0x3a63a0(0x18c)],
      {
        mimetype: Mimetype[_0x3a63a0(0x17a)],
        caption: "*Made\x20by\x20WhatsAlexa*",
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x3a63a0(0x16f)],
      }
    );
  }
  async [_0x230e55(0x174)](_0x47e3c3) {
    const _0xf28cc9 = _0x230e55;
    return await this[_0xf28cc9(0x16d)]["sendMessage"](
      this[_0xf28cc9(0x18a)],
      _0x47e3c3,
      MessageType[_0xf28cc9(0x186)],
      {
        mimetype: Mimetype[_0xf28cc9(0x18d)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xf28cc9(0x16f)],
      }
    );
  }
  async [_0x230e55(0x17e)](_0x50b336) {
    const _0x50d762 = _0x230e55;
    return await this[_0x50d762(0x16d)][_0x50d762(0x171)](
      this[_0x50d762(0x18a)],
      _0x50b336,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x50d762(0x18d)],
        ptt: !![],
        quoted: this[_0x50d762(0x16f)],
      }
    );
  }
  async [_0x230e55(0x167)]() {
    const _0x5c9203 = _0x230e55;
    return await this[_0x5c9203(0x16d)][_0x5c9203(0x18b)](
      this["jid"],
      _0x5c9203(0x15e)
    );
  }
  async [_0x230e55(0x181)]() {
    const _0x29ae7e = _0x230e55;
    return await this[_0x29ae7e(0x16d)][_0x29ae7e(0x165)](
      this[_0x29ae7e(0x18a)],
      Presence[_0x29ae7e(0x17b)]
    );
  }
  async [_0x230e55(0x163)]() {
    const _0x17cfd2 = _0x230e55;
    return await this["client"][_0x17cfd2(0x165)](
      this["jid"],
      Presence[_0x17cfd2(0x158)]
    );
  }
  async [_0x230e55(0x14d)]() {
    const _0x282e67 = _0x230e55;
    return await this[_0x282e67(0x16d)][_0x282e67(0x165)](
      this[_0x282e67(0x18a)],
      Presence[_0x282e67(0x153)]
    );
  }
  async [_0x230e55(0x157)]() {
    const _0x3b7350 = _0x230e55;
    return await this["client"][_0x3b7350(0x165)](
      this[_0x3b7350(0x18a)],
      Presence[_0x3b7350(0x152)]
    );
  }
  async [_0x230e55(0x15d)]() {
    const _0x184bbb = _0x230e55;
    return await this[_0x184bbb(0x16d)]["chatRead"](this[_0x184bbb(0x18a)]);
  }
  async [_0x230e55(0x164)](_0x149227 = this["id"]) {
    const _0x5a3c52 = _0x230e55;
    return (
      await this["client"][_0x5a3c52(0x185)](this[_0x5a3c52(0x16f)], _0x149227),
      this["id"] + "." + this[_0x5a3c52(0x172)]["split"]("/")[0x1]
    );
  }
}
function _0x45d3(_0x30c139, _0x123359) {
  const _0x640c37 = _0x640c();
  return (
    (_0x45d3 = function (_0x45d389, _0x286cfb) {
      _0x45d389 = _0x45d389 - 0x14d;
      let _0x11a976 = _0x640c37[_0x45d389];
      return _0x11a976;
    }),
    _0x45d3(_0x30c139, _0x123359)
  );
}
function _0x640c() {
  const _0x134ff6 = [
    "sendVideo",
    "url",
    "messageTimestamp",
    "*Made\x20by\x20WhatsAlexa*",
    "gif",
    "composing",
    "550758SVuyzu",
    "115888PFrazc",
    "sendAudioAsVoice",
    "deleteMessage",
    "key",
    "sendTyping",
    "caption",
    "@adiwajshing/baileys",
    "hasOwnProperty",
    "downloadAndSaveMediaMessage",
    "audio",
    "1158264CSStMz",
    "./Message",
    "contextInfo",
    "jid",
    "chatRead",
    "video",
    "mp4Audio",
    "sendOnline",
    "timestamp",
    "./Base",
    "sendImage",
    "./ReplyMessage",
    "unavailable",
    "available",
    "132690GWXVhA",
    "remoteJid",
    "imageMessage",
    "sendOffline",
    "recording",
    "exports",
    "sendVideoAsGif",
    "quotedMessage",
    "sendReply",
    "sendRead",
    "unread",
    "text",
    "182943rulqKV",
    "_patch",
    "low",
    "sendRecording",
    "download",
    "updatePresence",
    "png",
    "sendUnread",
    "93125fviZFG",
    "image",
    "mpeg",
    "mediaKey",
    "reply_message",
    "client",
    "515753FzoARk",
    "data",
    "delete",
    "sendMessage",
    "mimetype",
    "message",
    "sendAudio",
    "height",
  ];
  _0x640c = function () {
    return _0x134ff6;
  };
  return _0x640c();
}
module[_0x230e55(0x159)] = Image;
