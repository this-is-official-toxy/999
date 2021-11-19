function _0x3a77(_0x1b70de, _0x2b1bfd) {
  const _0x58121d = _0x5812();
  return (
    (_0x3a77 = function (_0x3a7715, _0x268186) {
      _0x3a7715 = _0x3a7715 - 0x14b;
      let _0x372257 = _0x58121d[_0x3a7715];
      return _0x372257;
    }),
    _0x3a77(_0x1b70de, _0x2b1bfd)
  );
}
const _0x4f6d48 = _0x3a77;
function _0x5812() {
  const _0x2c02f1 = [
    "image",
    "6217736WuoTyz",
    "available",
    "participant",
    "audio",
    "sendMessage",
    "imageMessage",
    "sendOnline",
    "chatRead",
    "unavailable",
    "mediaKey",
    "9FxfcCq",
    "sendVideoAsGif",
    "./Base",
    "48kEXThI",
    "conversation",
    "22244fSMLfn",
    "unread",
    "client",
    "text",
    "sendAudioAsVoice",
    "quotedMessage",
    "height",
    "sendTyping",
    "exports",
    "data",
    "6167819QklGjM",
    "sendUnread",
    "gif",
    "sendRead",
    "downloadAndSaveMediaMessage",
    "video",
    "mimetype",
    "_patch",
    "split",
    "download",
    "./Image",
    "composing",
    "sendImage",
    "4096890ljjKFU",
    "sendOffline",
    "mpeg",
    "url",
    "message",
    "197512rNwVBR",
    "deleteMessage",
    "videoMessage",
    "caption",
    "updatePresence",
    "30pQToDZ",
    "891348fRPqfM",
    "mp4Audio",
    "7414830ZeEMkb",
    "sendReply",
    "jid",
  ];
  _0x5812 = function () {
    return _0x2c02f1;
  };
  return _0x5812();
}
(function (_0x4fb849, _0x38dd98) {
  const _0x5712c6 = _0x3a77,
    _0x329f6d = _0x4fb849();
  while (!![]) {
    try {
      const _0x1fd197 =
        (parseInt(_0x5712c6(0x16f)) / 0x1) *
          (parseInt(_0x5712c6(0x171)) / 0x2) +
        parseInt(_0x5712c6(0x15c)) / 0x3 +
        (parseInt(_0x5712c6(0x156)) / 0x4) *
          (-parseInt(_0x5712c6(0x15b)) / 0x5) +
        -parseInt(_0x5712c6(0x151)) / 0x6 +
        -parseInt(_0x5712c6(0x17b)) / 0x7 +
        (parseInt(_0x5712c6(0x162)) / 0x8) *
          (parseInt(_0x5712c6(0x16c)) / 0x9) +
        parseInt(_0x5712c6(0x15e)) / 0xa;
      if (_0x1fd197 === _0x38dd98) break;
      else _0x329f6d["push"](_0x329f6d["shift"]());
    } catch (_0x794663) {
      _0x329f6d["push"](_0x329f6d["shift"]());
    }
  }
})(_0x5812, 0x77800);
const {
    MessageType,
    Mimetype,
    Presence,
    MessageOptions,
  } = require("@adiwajshing/baileys"),
  Base = require(_0x4f6d48(0x16e)),
  Image = require(_0x4f6d48(0x14e));
class ReplyMessage extends Base {
  constructor(_0x1ab10b, _0x4053d7) {
    const _0x28f01f = _0x4f6d48;
    super(_0x1ab10b);
    if (_0x4053d7) this[_0x28f01f(0x14b)](_0x4053d7);
  }
  [_0x4f6d48(0x14b)](_0xb32d) {
    const _0x4089b6 = _0x4f6d48;
    (this["id"] = _0xb32d["stanzaId"]),
      (this[_0x4089b6(0x160)] = _0xb32d[_0x4089b6(0x164)]);
    if (
      _0xb32d[_0x4089b6(0x176)] &&
      _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x167)]
    )
      (this[_0x4089b6(0x155)] =
        _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x167)]["caption"] === null
          ? _0xb32d[_0x4089b6(0x155)][_0x4089b6(0x167)][_0x4089b6(0x159)]
          : ""),
        (this[_0x4089b6(0x159)] =
          _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x167)][_0x4089b6(0x159)] === null
            ? _0xb32d[_0x4089b6(0x155)][_0x4089b6(0x167)][_0x4089b6(0x159)]
            : ""),
        (this[_0x4089b6(0x154)] =
          _0xb32d[_0x4089b6(0x176)]["imageMessage"][_0x4089b6(0x154)]),
        (this[_0x4089b6(0x181)] =
          _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x167)][_0x4089b6(0x181)]),
        (this["height"] = _0xb32d["quotedMessage"]["imageMessage"]["height"]),
        (this["width"] = _0xb32d["quotedMessage"][_0x4089b6(0x167)]["width"]),
        (this[_0x4089b6(0x16b)] =
          _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x167)][_0x4089b6(0x16b)]),
        (this["image"] = !![]),
        (this[_0x4089b6(0x180)] = ![]);
    else {
      if (
        _0xb32d[_0x4089b6(0x176)] &&
        _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x158)]
      )
        (this[_0x4089b6(0x155)] =
          _0xb32d["quotedMessage"]["videoMessage"][_0x4089b6(0x159)] === null
            ? _0xb32d[_0x4089b6(0x155)][_0x4089b6(0x158)]["caption"]
            : ""),
          (this[_0x4089b6(0x159)] =
            _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x158)][_0x4089b6(0x159)] ===
            null
              ? _0xb32d["message"][_0x4089b6(0x158)][_0x4089b6(0x159)]
              : ""),
          (this["url"] =
            _0xb32d[_0x4089b6(0x176)]["videoMessage"][_0x4089b6(0x154)]),
          (this[_0x4089b6(0x181)] =
            _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x158)]["mimetype"]),
          (this[_0x4089b6(0x177)] =
            _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x158)]["height"]),
          (this["width"] = _0xb32d["quotedMessage"][_0x4089b6(0x158)]["width"]),
          (this[_0x4089b6(0x16b)] =
            _0xb32d[_0x4089b6(0x176)]["videoMessage"][_0x4089b6(0x16b)]),
          (this["video"] = !![]);
      else
        _0xb32d[_0x4089b6(0x176)] &&
          _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x170)] &&
          ((this[_0x4089b6(0x155)] =
            _0xb32d[_0x4089b6(0x176)][_0x4089b6(0x170)]),
          (this[_0x4089b6(0x174)] = _0xb32d[_0x4089b6(0x176)]["conversation"]),
          (this[_0x4089b6(0x161)] = ![]),
          (this[_0x4089b6(0x180)] = ![]));
    }
    return (this["data"] = _0xb32d), super[_0x4089b6(0x14b)](_0xb32d);
  }
  async ["delete"]() {
    const _0x1a0de0 = _0x4f6d48;
    return await this[_0x1a0de0(0x173)][_0x1a0de0(0x157)](
      this[_0x1a0de0(0x160)],
      { id: this["id"], remoteJid: this[_0x1a0de0(0x160)], fromMe: !![] }
    );
  }
  async [_0x4f6d48(0x15f)](_0x4b1cdd) {
    const _0xe38a30 = _0x4f6d48;
    var _0x4ae4d2 = await this[_0xe38a30(0x173)][_0xe38a30(0x166)](
      this[_0xe38a30(0x160)],
      _0x4b1cdd,
      MessageType[_0xe38a30(0x174)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xe38a30(0x17a)],
      }
    );
    return new Message(this["client"], _0x4ae4d2);
  }
  async [_0x4f6d48(0x166)](_0x55c51f, _0xbf9b64, _0x3bf951) {
    const _0x38f673 = _0x4f6d48;
    return await this[_0x38f673(0x173)][_0x38f673(0x166)](
      this["jid"],
      _0x55c51f,
      _0xbf9b64,
      _0x3bf951
    );
  }
  async [_0x4f6d48(0x150)](_0x5867ae) {
    const _0x4ad4d0 = _0x4f6d48;
    return await this[_0x4ad4d0(0x173)]["sendMessage"](
      this[_0x4ad4d0(0x160)],
      _0x5867ae,
      MessageType["image"],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x4ad4d0(0x17a)],
      }
    );
  }
  async ["sendVideo"](_0x2b3f92) {
    const _0x8c2cfd = _0x4f6d48;
    return await this["client"][_0x8c2cfd(0x166)](
      this[_0x8c2cfd(0x160)],
      _0x2b3f92,
      MessageType[_0x8c2cfd(0x180)],
      {
        mimetype: Mimetype[_0x8c2cfd(0x153)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x8c2cfd(0x17a)],
      }
    );
  }
  async [_0x4f6d48(0x16d)](_0x412c7b) {
    const _0xe1c304 = _0x4f6d48;
    return await this["client"]["sendMessage"](
      this[_0xe1c304(0x160)],
      _0x412c7b,
      MessageType[_0xe1c304(0x180)],
      {
        mimetype: Mimetype[_0xe1c304(0x17d)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0xe1c304(0x17a)],
      }
    );
  }
  async ["sendAudio"](_0x49eb52) {
    const _0x325c32 = _0x4f6d48;
    return await this[_0x325c32(0x173)]["sendMessage"](
      this["jid"],
      _0x49eb52,
      MessageType[_0x325c32(0x165)],
      {
        mimetype: Mimetype[_0x325c32(0x15d)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x325c32(0x17a)],
      }
    );
  }
  async [_0x4f6d48(0x175)](_0x9ddaf2) {
    const _0x4e099e = _0x4f6d48;
    return await this["client"][_0x4e099e(0x166)](
      this[_0x4e099e(0x160)],
      _0x9ddaf2,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x4e099e(0x15d)],
        ptt: !![],
        quoted: this[_0x4e099e(0x17a)],
      }
    );
  }
  async [_0x4f6d48(0x17c)]() {
    const _0x517bae = _0x4f6d48;
    return await this[_0x517bae(0x173)][_0x517bae(0x169)](
      this[_0x517bae(0x160)],
      _0x517bae(0x172)
    );
  }
  async [_0x4f6d48(0x178)]() {
    const _0x325837 = _0x4f6d48;
    return await this["client"][_0x325837(0x15a)](
      this[_0x325837(0x160)],
      Presence[_0x325837(0x14f)]
    );
  }
  async ["sendRecording"]() {
    const _0xbda930 = _0x4f6d48;
    return await this[_0xbda930(0x173)][_0xbda930(0x15a)](
      this["jid"],
      Presence["recording"]
    );
  }
  async [_0x4f6d48(0x168)]() {
    const _0x4145e8 = _0x4f6d48;
    return await this["client"][_0x4145e8(0x15a)](
      this[_0x4145e8(0x160)],
      Presence[_0x4145e8(0x163)]
    );
  }
  async [_0x4f6d48(0x152)]() {
    const _0x80519e = _0x4f6d48;
    return await this[_0x80519e(0x173)][_0x80519e(0x15a)](
      this["jid"],
      Presence[_0x80519e(0x16a)]
    );
  }
  async [_0x4f6d48(0x17e)]() {
    const _0x127101 = _0x4f6d48;
    return await this[_0x127101(0x173)][_0x127101(0x169)](
      this[_0x127101(0x160)]
    );
  }
  async [_0x4f6d48(0x14d)](_0x332aa8 = this["id"]) {
    const _0xc354ab = _0x4f6d48;
    return this[_0xc354ab(0x161)]
      ? (await this[_0xc354ab(0x173)][_0xc354ab(0x17f)](
          this[_0xc354ab(0x17a)][_0xc354ab(0x176)]["imageMessage"],
          _0x332aa8
        ),
        this["id"] + "." + this[_0xc354ab(0x181)][_0xc354ab(0x14c)]("/")[0x1])
      : ![];
  }
}
module[_0x4f6d48(0x179)] = ReplyMessage;
