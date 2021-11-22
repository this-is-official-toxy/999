const _0x3dd73c = _0x299c;
(function (_0x2e5932, _0x434e49) {
  const _0x16209a = _0x299c,
    _0x3ec089 = _0x2e5932();
  while (!![]) {
    try {
      const _0x126341 =
        (-parseInt(_0x16209a(0x151)) / 0x1) *
          (-parseInt(_0x16209a(0x170)) / 0x2) +
        (-parseInt(_0x16209a(0x15f)) / 0x3) *
          (-parseInt(_0x16209a(0x178)) / 0x4) +
        (-parseInt(_0x16209a(0x15a)) / 0x5) *
          (parseInt(_0x16209a(0x180)) / 0x6) +
        (parseInt(_0x16209a(0x167)) / 0x7) *
          (-parseInt(_0x16209a(0x175)) / 0x8) +
        (-parseInt(_0x16209a(0x15e)) / 0x9) *
          (parseInt(_0x16209a(0x16e)) / 0xa) +
        (-parseInt(_0x16209a(0x183)) / 0xb) *
          (parseInt(_0x16209a(0x150)) / 0xc) +
        (parseInt(_0x16209a(0x188)) / 0xd) * (parseInt(_0x16209a(0x172)) / 0xe);
      if (_0x126341 === _0x434e49) break;
      else _0x3ec089["push"](_0x3ec089["shift"]());
    } catch (_0x25f6dc) {
      _0x3ec089["push"](_0x3ec089["shift"]());
    }
  }
})(_0x4653, 0xcba86);
function _0x4653() {
  const _0x39ad41 = [
    "delete",
    "9UtgJcB",
    "110445RqLkIz",
    "sendMessage",
    "key",
    "mp4Audio",
    "sendVideo",
    "audio",
    "url",
    "composing",
    "2023574SLwfit",
    "sendUnread",
    "sendRead",
    "timestamp",
    "./Base",
    "height",
    "jid",
    "5413930PLgrkI",
    "sendReply",
    "20kGjPcF",
    "data",
    "28LuvdWm",
    "sendVideoAsGif",
    "download",
    "16JbfbwP",
    "hasOwnProperty",
    "deleteMessage",
    "164TAZucJ",
    "sendAudio",
    "updatePresence",
    "message",
    "reply_message",
    "sendVideoAsViewonce",
    "./ReplyMessage",
    "sendImageAsViewonce",
    "12VpSmMQ",
    "sendOnline",
    "@adiwajshing/baileys",
    "6556IODeds",
    "fromMe",
    "contextInfo",
    "low",
    "object",
    "5141669pQjyku",
    "width",
    "unavailable",
    "sendImage",
    "text",
    "chatRead",
    "messageTimestamp",
    "video",
    "split",
    "recording",
    "gif",
    "client",
    "2316TyEgPK",
    "37871uNJTaJ",
    "sendOffline",
    "mediaKey",
    "videoMessage",
    "mimetype",
    "caption",
    "sendAudioAsVoice",
    "remoteJid",
    "_patch",
    "1525960PAUrCL",
    "image",
    "./Message",
  ];
  _0x4653 = function () {
    return _0x39ad41;
  };
  return _0x4653();
}
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x3dd73c(
    0x182
  )),
  Base = require(_0x3dd73c(0x16b)),
  Message = require(_0x3dd73c(0x15c)),
  ReplyMessage = require(_0x3dd73c(0x17e));
class Video extends Base {
  constructor(_0x35cdde, _0x253a09) {
    const _0x5794b3 = _0x3dd73c;
    super(_0x35cdde);
    if (_0x253a09) this[_0x5794b3(0x159)](_0x253a09);
  }
  ["_patch"](_0x25f6ab) {
    const _0x40bb7c = _0x3dd73c;
    return (
      (this["id"] =
        _0x25f6ab[_0x40bb7c(0x161)]["id"] === undefined
          ? undefined
          : _0x25f6ab[_0x40bb7c(0x161)]["id"]),
      (this["jid"] = _0x25f6ab[_0x40bb7c(0x161)][_0x40bb7c(0x158)]),
      (this[_0x40bb7c(0x184)] = _0x25f6ab["key"]["fromMe"]),
      (this["caption"] =
        _0x25f6ab[_0x40bb7c(0x17b)][_0x40bb7c(0x154)][_0x40bb7c(0x156)] === null
          ? _0x25f6ab[_0x40bb7c(0x17b)][_0x40bb7c(0x154)]["caption"]
          : ""),
      (this[_0x40bb7c(0x165)] = _0x25f6ab["message"][_0x40bb7c(0x154)]["url"]),
      (this[_0x40bb7c(0x16a)] =
        typeof _0x25f6ab[_0x40bb7c(0x18e)] === _0x40bb7c(0x187)
          ? _0x25f6ab[_0x40bb7c(0x18e)][_0x40bb7c(0x186)]
          : _0x25f6ab[_0x40bb7c(0x18e)]),
      (this["mimetype"] =
        _0x25f6ab["message"][_0x40bb7c(0x154)][_0x40bb7c(0x155)]),
      (this[_0x40bb7c(0x16c)] =
        _0x25f6ab[_0x40bb7c(0x17b)]["videoMessage"]["height"]),
      (this[_0x40bb7c(0x189)] =
        _0x25f6ab[_0x40bb7c(0x17b)]["videoMessage"][_0x40bb7c(0x189)]),
      (this[_0x40bb7c(0x153)] =
        _0x25f6ab[_0x40bb7c(0x17b)]["videoMessage"][_0x40bb7c(0x153)]),
      (this[_0x40bb7c(0x171)] = _0x25f6ab),
      _0x25f6ab["message"][_0x40bb7c(0x154)][_0x40bb7c(0x176)]("contextInfo") &&
      _0x25f6ab["message"][_0x40bb7c(0x185)]["quotedMessage"]
        ? (this[_0x40bb7c(0x17c)] = new ReplyMessage(
            this[_0x40bb7c(0x14f)],
            _0x25f6ab[_0x40bb7c(0x17b)][_0x40bb7c(0x154)][_0x40bb7c(0x185)]
          ))
        : (this[_0x40bb7c(0x17c)] = ![]),
      super[_0x40bb7c(0x159)](_0x25f6ab)
    );
  }
  async [_0x3dd73c(0x15d)]() {
    const _0x5b5100 = _0x3dd73c;
    return await this["client"][_0x5b5100(0x177)](this[_0x5b5100(0x16d)], {
      id: this["id"],
      remoteJid: this[_0x5b5100(0x16d)],
      fromMe: !![],
    });
  }
  async [_0x3dd73c(0x16f)](_0x48f428) {
    const _0x10552e = _0x3dd73c;
    var _0x24b81b = await this[_0x10552e(0x14f)]["sendMessage"](
      this[_0x10552e(0x16d)],
      _0x48f428,
      MessageType[_0x10552e(0x18c)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
    return new Message(this["client"], _0x24b81b);
  }
  async [_0x3dd73c(0x160)](_0x5e390e, _0x238802, _0x2006cc) {
    const _0x630b2a = _0x3dd73c;
    return await this[_0x630b2a(0x14f)][_0x630b2a(0x160)](
      this[_0x630b2a(0x16d)],
      _0x5e390e,
      _0x238802,
      _0x2006cc
    );
  }
  async [_0x3dd73c(0x18b)](_0x4bc98b, _0x4151ec) {
    const _0x5e9c85 = _0x3dd73c;
    return await this["client"][_0x5e9c85(0x160)](
      this[_0x5e9c85(0x16d)],
      _0x4bc98b,
      MessageType["image"],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x4151ec,
        quoted: this[_0x5e9c85(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x17f)](_0x8aaa16, _0x27bd3d) {
    const _0xb2ffa8 = _0x3dd73c;
    return await this[_0xb2ffa8(0x14f)]["sendMessage"](
      this[_0xb2ffa8(0x16d)],
      _0x8aaa16,
      MessageType[_0xb2ffa8(0x15b)],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x27bd3d,
        readViewOnce: !![],
        quoted: this[_0xb2ffa8(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x163)](_0x2f9012, _0x25ecd8) {
    const _0x14d9b4 = _0x3dd73c;
    return await this["client"][_0x14d9b4(0x160)](
      this["jid"],
      _0x2f9012,
      MessageType[_0x14d9b4(0x14b)],
      {
        mimetype: Mimetype["mp4"],
        caption: _0x25ecd8,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x14d9b4(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x17d)](_0x59f540, _0xf07d8a) {
    const _0x1a4a52 = _0x3dd73c;
    return await this["client"][_0x1a4a52(0x160)](
      this[_0x1a4a52(0x16d)],
      _0x59f540,
      MessageType[_0x1a4a52(0x14b)],
      {
        mimetype: Mimetype["mp4"],
        caption: _0xf07d8a,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        readViewOnce: !![],
        quoted: this[_0x1a4a52(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x173)](_0x163a75, _0x124c5e) {
    const _0x3c6c02 = _0x3dd73c;
    return await this[_0x3c6c02(0x14f)]["sendMessage"](
      this[_0x3c6c02(0x16d)],
      _0x163a75,
      MessageType[_0x3c6c02(0x14b)],
      {
        mimetype: Mimetype[_0x3c6c02(0x14e)],
        caption: _0x124c5e,
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x3dd73c(0x179)](_0x4c1def) {
    const _0x2d3f3d = _0x3dd73c;
    return await this[_0x2d3f3d(0x14f)][_0x2d3f3d(0x160)](
      this[_0x2d3f3d(0x16d)],
      _0x4c1def,
      MessageType[_0x2d3f3d(0x164)],
      {
        mimetype: Mimetype[_0x2d3f3d(0x162)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x2d3f3d(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x157)](_0x33c418) {
    const _0x726390 = _0x3dd73c;
    return await this[_0x726390(0x14f)][_0x726390(0x160)](
      this[_0x726390(0x16d)],
      _0x33c418,
      MessageType[_0x726390(0x164)],
      {
        mimetype: Mimetype[_0x726390(0x162)],
        ptt: !![],
        quoted: this[_0x726390(0x171)],
      }
    );
  }
  async [_0x3dd73c(0x168)]() {
    const _0x633e2b = _0x3dd73c;
    return await this[_0x633e2b(0x14f)][_0x633e2b(0x18d)](
      this["jid"],
      "unread"
    );
  }
  async ["sendTyping"]() {
    const _0x5dea16 = _0x3dd73c;
    return await this[_0x5dea16(0x14f)][_0x5dea16(0x17a)](
      this[_0x5dea16(0x16d)],
      Presence[_0x5dea16(0x166)]
    );
  }
  async ["sendRecording"]() {
    const _0x304844 = _0x3dd73c;
    return await this[_0x304844(0x14f)][_0x304844(0x17a)](
      this[_0x304844(0x16d)],
      Presence[_0x304844(0x14d)]
    );
  }
  async [_0x3dd73c(0x181)]() {
    const _0x27eca7 = _0x3dd73c;
    return await this["client"][_0x27eca7(0x17a)](
      this[_0x27eca7(0x16d)],
      Presence["available"]
    );
  }
  async [_0x3dd73c(0x152)]() {
    const _0x2c10e3 = _0x3dd73c;
    return await this[_0x2c10e3(0x14f)][_0x2c10e3(0x17a)](
      this[_0x2c10e3(0x16d)],
      Presence[_0x2c10e3(0x18a)]
    );
  }
  async [_0x3dd73c(0x169)]() {
    const _0x117da6 = _0x3dd73c;
    return await this[_0x117da6(0x14f)][_0x117da6(0x18d)](
      this[_0x117da6(0x16d)]
    );
  }
  async [_0x3dd73c(0x174)](_0x24cbdc = this["id"]) {
    const _0x41cb5a = _0x3dd73c;
    return (
      await this[_0x41cb5a(0x14f)]["downloadAndSaveMediaMessage"](
        this[_0x41cb5a(0x171)],
        _0x24cbdc
      ),
      this["id"] + "." + this["mimetype"][_0x41cb5a(0x14c)]("/")[0x1]
    );
  }
}
function _0x299c(_0x202907, _0x3657e9) {
  const _0x46530b = _0x4653();
  return (
    (_0x299c = function (_0x299c79, _0x251f33) {
      _0x299c79 = _0x299c79 - 0x14b;
      let _0xbf4d95 = _0x46530b[_0x299c79];
      return _0xbf4d95;
    }),
    _0x299c(_0x202907, _0x3657e9)
  );
}
module["exports"] = Video;
