const _0x26100a = _0x18b1;
(function (_0x3e2981, _0x5e53fb) {
  const _0x316be8 = _0x18b1,
    _0xf645c0 = _0x3e2981();
  while (!![]) {
    try {
      const _0x21a31d =
        (-parseInt(_0x316be8(0xdc)) / 0x1) * (parseInt(_0x316be8(0xbe)) / 0x2) +
        (parseInt(_0x316be8(0xc0)) / 0x3) * (parseInt(_0x316be8(0xb5)) / 0x4) +
        parseInt(_0x316be8(0xc7)) / 0x5 +
        parseInt(_0x316be8(0xd2)) / 0x6 +
        (parseInt(_0x316be8(0xc6)) / 0x7) * (parseInt(_0x316be8(0xb1)) / 0x8) +
        (-parseInt(_0x316be8(0xc3)) / 0x9) *
          (-parseInt(_0x316be8(0xc2)) / 0xa) +
        (parseInt(_0x316be8(0xbf)) / 0xb) * (-parseInt(_0x316be8(0xb4)) / 0xc);
      if (_0x21a31d === _0x5e53fb) break;
      else _0xf645c0["push"](_0xf645c0["shift"]());
    } catch (_0x37afb0) {
      _0xf645c0["push"](_0xf645c0["shift"]());
    }
  }
})(_0xf615, 0xd77f8);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x26100a(
    0xca
  )),
  Base = require(_0x26100a(0xb7)),
  Image = require(_0x26100a(0xde));
function _0x18b1(_0x362b0a, _0x53f6a2) {
  const _0xf6158e = _0xf615();
  return (
    (_0x18b1 = function (_0x18b13d, _0x4f028b) {
      _0x18b13d = _0x18b13d - 0xaa;
      let _0x39d79d = _0xf6158e[_0x18b13d];
      return _0x39d79d;
    }),
    _0x18b1(_0x362b0a, _0x53f6a2)
  );
}
class ReplyMessage extends Base {
  constructor(_0x2ca51d, _0x4e328c) {
    const _0x138991 = _0x26100a;
    super(_0x2ca51d);
    if (_0x4e328c) this[_0x138991(0xdf)](_0x4e328c);
  }
  ["_patch"](_0x3bbd26) {
    const _0x77a0f5 = _0x26100a;
    (this["id"] = _0x3bbd26[_0x77a0f5(0xd3)]),
      (this["jid"] = _0x3bbd26["participant"]);
    if (
      _0x3bbd26[_0x77a0f5(0xdb)] &&
      _0x3bbd26[_0x77a0f5(0xdb)]["imageMessage"]
    )
      (this[_0x77a0f5(0xd4)] =
        _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd6)][_0x77a0f5(0xbc)] === null
          ? _0x3bbd26[_0x77a0f5(0xd4)][_0x77a0f5(0xd6)][_0x77a0f5(0xbc)]
          : ""),
        (this[_0x77a0f5(0xbc)] =
          _0x3bbd26["quotedMessage"][_0x77a0f5(0xd6)][_0x77a0f5(0xbc)] === null
            ? _0x3bbd26[_0x77a0f5(0xd4)][_0x77a0f5(0xd6)][_0x77a0f5(0xbc)]
            : ""),
        (this[_0x77a0f5(0xce)] =
          _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd6)][_0x77a0f5(0xce)]),
        (this[_0x77a0f5(0xaa)] =
          _0x3bbd26[_0x77a0f5(0xdb)]["imageMessage"][_0x77a0f5(0xaa)]),
        (this[_0x77a0f5(0xb3)] =
          _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd6)][_0x77a0f5(0xb3)]),
        (this[_0x77a0f5(0xd8)] =
          _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd6)][_0x77a0f5(0xd8)]),
        (this["mediaKey"] =
          _0x3bbd26["quotedMessage"][_0x77a0f5(0xd6)][_0x77a0f5(0xac)]),
        (this[_0x77a0f5(0xba)] = !![]),
        (this[_0x77a0f5(0xc5)] = ![]);
    else {
      if (
        _0x3bbd26[_0x77a0f5(0xdb)] &&
        _0x3bbd26[_0x77a0f5(0xdb)]["videoMessage"]
      )
        (this["message"] =
          _0x3bbd26["quotedMessage"][_0x77a0f5(0xd7)][_0x77a0f5(0xbc)] === null
            ? _0x3bbd26["message"]["videoMessage"]["caption"]
            : ""),
          (this[_0x77a0f5(0xbc)] =
            _0x3bbd26["quotedMessage"]["videoMessage"][_0x77a0f5(0xbc)] === null
              ? _0x3bbd26[_0x77a0f5(0xd4)][_0x77a0f5(0xd7)]["caption"]
              : ""),
          (this["url"] = _0x3bbd26[_0x77a0f5(0xdb)]["videoMessage"]["url"]),
          (this[_0x77a0f5(0xaa)] =
            _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd7)][_0x77a0f5(0xaa)]),
          (this[_0x77a0f5(0xb3)] =
            _0x3bbd26[_0x77a0f5(0xdb)]["videoMessage"][_0x77a0f5(0xb3)]),
          (this["width"] =
            _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd7)][_0x77a0f5(0xd8)]),
          (this[_0x77a0f5(0xac)] =
            _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xd7)]["mediaKey"]),
          (this[_0x77a0f5(0xc5)] = !![]);
      else
        _0x3bbd26[_0x77a0f5(0xdb)] &&
          _0x3bbd26[_0x77a0f5(0xdb)]["conversation"] &&
          ((this[_0x77a0f5(0xd4)] =
            _0x3bbd26[_0x77a0f5(0xdb)][_0x77a0f5(0xc4)]),
          (this[_0x77a0f5(0xdd)] = _0x3bbd26["quotedMessage"][_0x77a0f5(0xc4)]),
          (this[_0x77a0f5(0xba)] = ![]),
          (this[_0x77a0f5(0xc5)] = ![]));
    }
    return (
      (this[_0x77a0f5(0xda)] = _0x3bbd26), super[_0x77a0f5(0xdf)](_0x3bbd26)
    );
  }
  async [_0x26100a(0xab)]() {
    const _0xe35d66 = _0x26100a;
    return await this[_0xe35d66(0xae)]["deleteMessage"](this[_0xe35d66(0xe0)], {
      id: this["id"],
      remoteJid: this["jid"],
      fromMe: !![],
    });
  }
  async ["sendReply"](_0x20cec9) {
    const _0x4372ab = _0x26100a;
    var _0x19f2a4 = await this[_0x4372ab(0xae)][_0x4372ab(0xbb)](
      this[_0x4372ab(0xe0)],
      _0x20cec9,
      MessageType[_0x4372ab(0xdd)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x4372ab(0xda)],
      }
    );
    return new Message(this[_0x4372ab(0xae)], _0x19f2a4);
  }
  async [_0x26100a(0xbb)](_0x50ffa8, _0x590f7c, _0x50d0c0) {
    const _0x497fdd = _0x26100a;
    return await this[_0x497fdd(0xae)]["sendMessage"](
      this[_0x497fdd(0xe0)],
      _0x50ffa8,
      _0x590f7c,
      _0x50d0c0
    );
  }
  async [_0x26100a(0xcc)](_0x1f1f87, _0x377867) {
    const _0x32b51f = _0x26100a;
    return await this[_0x32b51f(0xae)][_0x32b51f(0xbb)](
      this[_0x32b51f(0xe0)],
      _0x1f1f87,
      MessageType[_0x32b51f(0xba)],
      {
        mimetype: Mimetype[_0x32b51f(0xb8)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x377867,
        quoted: this[_0x32b51f(0xda)],
      }
    );
  }
  async [_0x26100a(0xaf)](_0x2e24b8, _0x507e87) {
    const _0x5ace19 = _0x26100a;
    return await this[_0x5ace19(0xae)]["sendMessage"](
      this[_0x5ace19(0xe0)],
      _0x2e24b8,
      MessageType[_0x5ace19(0xba)],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x507e87,
        readViewOnce: !![],
        quoted: this[_0x5ace19(0xda)],
      }
    );
  }
  async ["sendVideo"](_0x393bc8, _0x4dd15b) {
    const _0x5714b7 = _0x26100a;
    return await this[_0x5714b7(0xae)]["sendMessage"](
      this["jid"],
      _0x393bc8,
      MessageType[_0x5714b7(0xc5)],
      {
        mimetype: Mimetype["mp4"],
        caption: _0x4dd15b,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x5714b7(0xda)],
      }
    );
  }
  async ["sendVideoAsViewonce"](_0xd75a53, _0x290688) {
    const _0x264309 = _0x26100a;
    return await this[_0x264309(0xae)]["sendMessage"](
      this["jid"],
      _0xd75a53,
      MessageType[_0x264309(0xc5)],
      {
        mimetype: Mimetype["mp4"],
        caption: _0x290688,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        readViewOnce: !![],
        quoted: this[_0x264309(0xda)],
      }
    );
  }
  async [_0x26100a(0xcb)](_0x242a2e, _0x3815e8) {
    const _0x4e3f19 = _0x26100a;
    return await this[_0x4e3f19(0xae)]["sendMessage"](
      this[_0x4e3f19(0xe0)],
      _0x242a2e,
      MessageType[_0x4e3f19(0xc5)],
      {
        mimetype: Mimetype["gif"],
        caption: _0x3815e8,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x4e3f19(0xda)],
      }
    );
  }
  async [_0x26100a(0xb9)](_0x127dc2) {
    const _0x35bc35 = _0x26100a;
    return await this[_0x35bc35(0xae)][_0x35bc35(0xbb)](
      this["jid"],
      _0x127dc2,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x35bc35(0xcf)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x35bc35(0xda)],
      }
    );
  }
  async [_0x26100a(0xb0)](_0x57bd37) {
    const _0x447a0f = _0x26100a;
    return await this["client"][_0x447a0f(0xbb)](
      this["jid"],
      _0x57bd37,
      MessageType[_0x447a0f(0xc8)],
      { mimetype: Mimetype["mp4Audio"], ptt: !![], quoted: this["data"] }
    );
  }
  async [_0x26100a(0xd1)]() {
    const _0x430659 = _0x26100a;
    return await this[_0x430659(0xae)][_0x430659(0xbd)](
      this["jid"],
      _0x430659(0xb2)
    );
  }
  async ["sendTyping"]() {
    const _0x18ae9b = _0x26100a;
    return await this[_0x18ae9b(0xae)][_0x18ae9b(0xad)](
      this[_0x18ae9b(0xe0)],
      Presence[_0x18ae9b(0xc1)]
    );
  }
  async [_0x26100a(0xcd)]() {
    const _0x4e504a = _0x26100a;
    return await this[_0x4e504a(0xae)]["updatePresence"](
      this[_0x4e504a(0xe0)],
      Presence[_0x4e504a(0xd0)]
    );
  }
  async [_0x26100a(0xd9)]() {
    const _0x7f5137 = _0x26100a;
    return await this["client"][_0x7f5137(0xad)](
      this[_0x7f5137(0xe0)],
      Presence["available"]
    );
  }
  async [_0x26100a(0xc9)]() {
    const _0x14c6b6 = _0x26100a;
    return await this[_0x14c6b6(0xae)][_0x14c6b6(0xad)](
      this[_0x14c6b6(0xe0)],
      Presence[_0x14c6b6(0xb6)]
    );
  }
  async ["sendRead"]() {
    const _0x4cf140 = _0x26100a;
    return await this[_0x4cf140(0xae)][_0x4cf140(0xbd)](this[_0x4cf140(0xe0)]);
  }
  async ["download"](_0x449f68 = this["id"]) {
    const _0xdae057 = _0x26100a;
    return this[_0xdae057(0xba)]
      ? (await this[_0xdae057(0xae)]["downloadAndSaveMediaMessage"](
          this[_0xdae057(0xda)][_0xdae057(0xdb)][_0xdae057(0xd6)],
          _0x449f68
        ),
        this["id"] + "." + this[_0xdae057(0xaa)][_0xdae057(0xd5)]("/")[0x1])
      : ![];
  }
}
function _0xf615() {
  const _0x304f2b = [
    "caption",
    "chatRead",
    "267352iaevqd",
    "62018urKhYD",
    "24HfvDPR",
    "composing",
    "304310IAVCKQ",
    "423nGKsto",
    "conversation",
    "video",
    "442834lXozwC",
    "8146975vRHOSc",
    "audio",
    "sendOffline",
    "@adiwajshing/baileys",
    "sendVideoAsGif",
    "sendImage",
    "sendRecording",
    "url",
    "mp4Audio",
    "recording",
    "sendUnread",
    "9247788wPaWOU",
    "stanzaId",
    "message",
    "split",
    "imageMessage",
    "videoMessage",
    "width",
    "sendOnline",
    "data",
    "quotedMessage",
    "6WXgrzg",
    "text",
    "./Image",
    "_patch",
    "jid",
    "mimetype",
    "delete",
    "mediaKey",
    "updatePresence",
    "client",
    "sendImageAsViewonce",
    "sendAudioAsVoice",
    "16Aujcpp",
    "unread",
    "height",
    "10116Lrdjzv",
    "855048WjoIVc",
    "unavailable",
    "./Base",
    "png",
    "sendAudio",
    "image",
    "sendMessage",
  ];
  _0xf615 = function () {
    return _0x304f2b;
  };
  return _0xf615();
}
module["exports"] = ReplyMessage;
