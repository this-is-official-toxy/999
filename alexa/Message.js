const _0x374a58 = _0x5c3d;
function _0x4337() {
  const _0x1277b1 = [
    "sendRead",
    "sendReply",
    "24uieCil",
    "unread",
    "object",
    "_patch",
    "sendTyping",
    "data",
    "sendOnline",
    "png",
    "*Made\x20by\x20WhatsAlexa*",
    "chatRead",
    "144jisuiG",
    "mention",
    "2740596VVtVmk",
    "sendAudio",
    "available",
    "message",
    "text",
    "composing",
    "recording",
    "./Base",
    "36372nrXllj",
    "remoteJid",
    "2041670LlQYci",
    "12mBGjnT",
    "63qXRxlS",
    "mp4Audio",
    "742144ZwSVZH",
    "999557XDGbeD",
    "updatePresence",
    "video",
    "@adiwajshing/baileys",
    "sendMessage",
    "messageTimestamp",
    "delete",
    "audio",
    "16008817FHkFzO",
    "477351XgeVaR",
    "sendUnread",
    "key",
    "fromMe",
    "timestamp",
    "exports",
    "contextInfo",
    "hasOwnProperty",
    "unreadCount",
    "quotedMessage",
    "10GgpwCX",
    "extendedTextMessage",
    "gif",
    "low",
    "conversation",
    "image",
    "client",
    "sendVideo",
    "jid",
    "mentionedJid",
    "sendImage",
  ];
  _0x4337 = function () {
    return _0x1277b1;
  };
  return _0x4337();
}
function _0x5c3d(_0x4c2655, _0x58a163) {
  const _0x4337eb = _0x4337();
  return (
    (_0x5c3d = function (_0x5c3d2c, _0x4dc0a1) {
      _0x5c3d2c = _0x5c3d2c - 0x11d;
      let _0x6748c9 = _0x4337eb[_0x5c3d2c];
      return _0x6748c9;
    }),
    _0x5c3d(_0x4c2655, _0x58a163)
  );
}
(function (_0x4b882c, _0x1ddd9b) {
  const _0x23da07 = _0x5c3d,
    _0x1122d2 = _0x4b882c();
  while (!![]) {
    try {
      const _0x21efeb =
        parseInt(_0x23da07(0x132)) / 0x1 +
        (parseInt(_0x23da07(0x152)) / 0x2) *
          (-parseInt(_0x23da07(0x12b)) / 0x3) +
        (parseInt(_0x23da07(0x123)) / 0x4) *
          (parseInt(_0x23da07(0x145)) / 0x5) +
        (parseInt(_0x23da07(0x121)) / 0x6) *
          (parseInt(_0x23da07(0x13b)) / 0x7) +
        -parseInt(_0x23da07(0x131)) / 0x8 +
        (-parseInt(_0x23da07(0x12f)) / 0x9) *
          (parseInt(_0x23da07(0x12d)) / 0xa) +
        (-parseInt(_0x23da07(0x13a)) / 0xb) *
          (parseInt(_0x23da07(0x12e)) / 0xc);
      if (_0x21efeb === _0x1ddd9b) break;
      else _0x1122d2["push"](_0x1122d2["shift"]());
    } catch (_0x565f12) {
      _0x1122d2["push"](_0x1122d2["shift"]());
    }
  }
})(_0x4337, 0xd7c03);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x374a58(
    0x135
  )),
  Base = require(_0x374a58(0x12a)),
  ReplyMessage = require("./ReplyMessage");
class Message extends Base {
  constructor(_0x4e1a88, _0x41b467) {
    const _0x1ffe0d = _0x374a58;
    super(_0x4e1a88);
    if (_0x41b467) this[_0x1ffe0d(0x155)](_0x41b467);
  }
  ["_patch"](_0x3a5eae) {
    const _0x172aee = _0x374a58;
    return (
      (this["id"] =
        _0x3a5eae["key"]["id"] === undefined
          ? undefined
          : _0x3a5eae["key"]["id"]),
      (this[_0x172aee(0x14d)] = _0x3a5eae[_0x172aee(0x13d)][_0x172aee(0x12c)]),
      (this[_0x172aee(0x13e)] = _0x3a5eae["key"][_0x172aee(0x13e)]),
      (this[_0x172aee(0x126)] =
        _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x146)] === null
          ? _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x149)]
          : _0x3a5eae[_0x172aee(0x126)]["extendedTextMessage"][
              _0x172aee(0x127)
            ]),
      (this[_0x172aee(0x143)] = _0x3a5eae[_0x172aee(0x143)]),
      (this[_0x172aee(0x13f)] =
        typeof _0x3a5eae[_0x172aee(0x137)] === _0x172aee(0x154)
          ? _0x3a5eae[_0x172aee(0x137)][_0x172aee(0x148)]
          : _0x3a5eae[_0x172aee(0x137)]),
      (this[_0x172aee(0x157)] = _0x3a5eae),
      _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x142)](_0x172aee(0x146)) &&
      _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x146)]["hasOwnProperty"](
        _0x172aee(0x141)
      ) === !![] &&
      _0x3a5eae[_0x172aee(0x126)]["extendedTextMessage"][_0x172aee(0x141)][
        _0x172aee(0x142)
      ](_0x172aee(0x144))
        ? (this["reply_message"] = new ReplyMessage(
            this[_0x172aee(0x14b)],
            _0x3a5eae[_0x172aee(0x126)]["extendedTextMessage"]["contextInfo"]
          ))
        : (this["reply_message"] = ![]),
      _0x3a5eae["message"][_0x172aee(0x142)](_0x172aee(0x146)) &&
      _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x146)]["hasOwnProperty"](
        "contextInfo"
      ) === !![] &&
      _0x3a5eae[_0x172aee(0x126)][_0x172aee(0x146)][_0x172aee(0x141)][
        _0x172aee(0x142)
      ](_0x172aee(0x14e))
        ? (this[_0x172aee(0x122)] =
            _0x3a5eae[_0x172aee(0x126)]["extendedTextMessage"][
              _0x172aee(0x141)
            ]["mentionedJid"])
        : (this[_0x172aee(0x122)] = ![]),
      super[_0x172aee(0x155)](_0x3a5eae)
    );
  }
  async [_0x374a58(0x138)]() {
    const _0x4b3e66 = _0x374a58;
    return await this[_0x4b3e66(0x14b)]["deleteMessage"](
      this[_0x4b3e66(0x14d)],
      { id: this["id"], remoteJid: this[_0x4b3e66(0x14d)], fromMe: !![] }
    );
  }
  async [_0x374a58(0x151)](_0x2807b8) {
    const _0x376e73 = _0x374a58;
    var _0x2233d1 = await this[_0x376e73(0x14b)][_0x376e73(0x136)](
      this[_0x376e73(0x14d)],
      _0x2807b8,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x376e73(0x157)],
      }
    );
    return new Message(this["client"], _0x2233d1);
  }
  async [_0x374a58(0x136)](_0x4c3e9e, _0x16bd84, _0xfbd144) {
    const _0x8ff145 = _0x374a58;
    return await this[_0x8ff145(0x14b)][_0x8ff145(0x136)](
      this["jid"],
      _0x4c3e9e,
      _0x16bd84,
      _0xfbd144
    );
  }
  async [_0x374a58(0x14f)](_0x3d61c9) {
    const _0x5db3ab = _0x374a58;
    return await this[_0x5db3ab(0x14b)][_0x5db3ab(0x136)](
      this[_0x5db3ab(0x14d)],
      _0x3d61c9,
      MessageType[_0x5db3ab(0x14a)],
      {
        mimetype: Mimetype[_0x5db3ab(0x11e)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x5db3ab(0x11f),
        quoted: this[_0x5db3ab(0x157)],
      }
    );
  }
  async [_0x374a58(0x14c)](_0x177159) {
    const _0x3c9bdc = _0x374a58;
    return await this[_0x3c9bdc(0x14b)][_0x3c9bdc(0x136)](
      this[_0x3c9bdc(0x14d)],
      _0x177159,
      MessageType[_0x3c9bdc(0x134)],
      {
        mimetype: Mimetype["mpeg"],
        caption: _0x3c9bdc(0x11f),
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x3c9bdc(0x157)],
      }
    );
  }
  async ["sendVideoAsGif"](_0x368d88) {
    const _0x499a8f = _0x374a58;
    return await this[_0x499a8f(0x14b)][_0x499a8f(0x136)](
      this[_0x499a8f(0x14d)],
      _0x368d88,
      MessageType[_0x499a8f(0x134)],
      {
        mimetype: Mimetype[_0x499a8f(0x147)],
        caption: _0x499a8f(0x11f),
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x499a8f(0x157)],
      }
    );
  }
  async [_0x374a58(0x124)](_0x5bd5f4) {
    const _0x2631fa = _0x374a58;
    return await this["client"]["sendMessage"](
      this["jid"],
      _0x5bd5f4,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x2631fa(0x130)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x2631fa(0x157)],
      }
    );
  }
  async ["sendAudioAsVoice"](_0x7b496b) {
    const _0x43a3b6 = _0x374a58;
    return await this[_0x43a3b6(0x14b)][_0x43a3b6(0x136)](
      this[_0x43a3b6(0x14d)],
      _0x7b496b,
      MessageType[_0x43a3b6(0x139)],
      {
        mimetype: Mimetype[_0x43a3b6(0x130)],
        ptt: !![],
        quoted: this[_0x43a3b6(0x157)],
      }
    );
  }
  async [_0x374a58(0x13c)]() {
    const _0x3d2248 = _0x374a58;
    return await this[_0x3d2248(0x14b)][_0x3d2248(0x120)](
      this[_0x3d2248(0x14d)],
      _0x3d2248(0x153)
    );
  }
  async [_0x374a58(0x156)]() {
    const _0x142675 = _0x374a58;
    return await this[_0x142675(0x14b)][_0x142675(0x133)](
      this[_0x142675(0x14d)],
      Presence[_0x142675(0x128)]
    );
  }
  async ["sendRecording"]() {
    const _0x10765b = _0x374a58;
    return await this[_0x10765b(0x14b)][_0x10765b(0x133)](
      this[_0x10765b(0x14d)],
      Presence[_0x10765b(0x129)]
    );
  }
  async [_0x374a58(0x11d)]() {
    const _0x303ab8 = _0x374a58;
    return await this[_0x303ab8(0x14b)][_0x303ab8(0x133)](
      this[_0x303ab8(0x14d)],
      Presence[_0x303ab8(0x125)]
    );
  }
  async ["sendOffline"]() {
    const _0x4785db = _0x374a58;
    return await this[_0x4785db(0x14b)][_0x4785db(0x133)](
      this[_0x4785db(0x14d)],
      Presence["unavailable"]
    );
  }
  async [_0x374a58(0x150)]() {
    const _0x4e737f = _0x374a58;
    return await this["client"][_0x4e737f(0x120)](this[_0x4e737f(0x14d)]);
  }
}
module[_0x374a58(0x140)] = Message;
