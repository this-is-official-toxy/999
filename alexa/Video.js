const _0x19601c = _0x4adf;
(function (_0x355581, _0x2a5e39) {
  const _0x2fc609 = _0x4adf,
    _0x3fe77b = _0x355581();
  while (!![]) {
    try {
      const _0x335602 =
        -parseInt(_0x2fc609(0x22a)) / 0x1 +
        (parseInt(_0x2fc609(0x22c)) / 0x2) *
          (-parseInt(_0x2fc609(0x21f)) / 0x3) +
        (-parseInt(_0x2fc609(0x1f7)) / 0x4) *
          (parseInt(_0x2fc609(0x209)) / 0x5) +
        -parseInt(_0x2fc609(0x22e)) / 0x6 +
        (-parseInt(_0x2fc609(0x200)) / 0x7) *
          (parseInt(_0x2fc609(0x201)) / 0x8) +
        parseInt(_0x2fc609(0x233)) / 0x9 +
        parseInt(_0x2fc609(0x218)) / 0xa;
      if (_0x335602 === _0x2a5e39) break;
      else _0x3fe77b["push"](_0x3fe77b["shift"]());
    } catch (_0x407dba) {
      _0x3fe77b["push"](_0x3fe77b["shift"]());
    }
  }
})(_0x3cfb, 0x87f78);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x19601c(
    0x216
  )),
  Base = require(_0x19601c(0x21d)),
  Message = require(_0x19601c(0x1ff)),
  ReplyMessage = require(_0x19601c(0x229));
class Video extends Base {
  constructor(_0x1cdae6, _0x5eabf8) {
    const _0x50624e = _0x19601c;
    super(_0x1cdae6);
    if (_0x5eabf8) this[_0x50624e(0x1fa)](_0x5eabf8);
  }
  [_0x19601c(0x1fa)](_0x3b70fc) {
    const _0x2cf01c = _0x19601c;
    return (
      (this["id"] =
        _0x3b70fc["key"]["id"] === undefined
          ? undefined
          : _0x3b70fc[_0x2cf01c(0x1f2)]["id"]),
      (this["jid"] = _0x3b70fc[_0x2cf01c(0x1f2)][_0x2cf01c(0x210)]),
      (this["fromMe"] = _0x3b70fc[_0x2cf01c(0x1f2)][_0x2cf01c(0x20f)]),
      (this[_0x2cf01c(0x1fc)] =
        _0x3b70fc["message"][_0x2cf01c(0x1fd)][_0x2cf01c(0x1fc)] === null
          ? _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x1fc)]
          : ""),
      (this["url"] =
        _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x1f9)]),
      (this["timestamp"] =
        typeof _0x3b70fc[_0x2cf01c(0x1f3)] === _0x2cf01c(0x21b)
          ? _0x3b70fc[_0x2cf01c(0x1f3)][_0x2cf01c(0x217)]
          : _0x3b70fc[_0x2cf01c(0x1f3)]),
      (this[_0x2cf01c(0x22b)] =
        _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x22b)]),
      (this[_0x2cf01c(0x21c)] =
        _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x21c)]),
      (this[_0x2cf01c(0x235)] =
        _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x235)]),
      (this["mediaKey"] =
        _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x1fd)][_0x2cf01c(0x1f6)]),
      (this[_0x2cf01c(0x20c)] = _0x3b70fc),
      _0x3b70fc["message"][_0x2cf01c(0x1fd)][_0x2cf01c(0x21e)](
        _0x2cf01c(0x223)
      ) && _0x3b70fc[_0x2cf01c(0x1f5)][_0x2cf01c(0x223)][_0x2cf01c(0x20a)]
        ? (this[_0x2cf01c(0x204)] = new ReplyMessage(
            this[_0x2cf01c(0x20d)],
            _0x3b70fc["message"][_0x2cf01c(0x1fd)]["contextInfo"]
          ))
        : (this[_0x2cf01c(0x204)] = ![]),
      super["_patch"](_0x3b70fc)
    );
  }
  async [_0x19601c(0x208)]() {
    const _0x3419b6 = _0x19601c;
    return await this[_0x3419b6(0x20d)][_0x3419b6(0x225)](
      this[_0x3419b6(0x212)],
      { id: this["id"], remoteJid: this[_0x3419b6(0x212)], fromMe: !![] }
    );
  }
  async [_0x19601c(0x221)](_0x4515e8) {
    const _0x26ced9 = _0x19601c;
    var _0x9e6a5 = await this["client"][_0x26ced9(0x20b)](
      this["jid"],
      _0x4515e8,
      MessageType[_0x26ced9(0x1f4)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x26ced9(0x20c)],
      }
    );
    return new Message(this[_0x26ced9(0x20d)], _0x9e6a5);
  }
  async [_0x19601c(0x20b)](_0xb88827, _0xcdbdde, _0x15972d) {
    const _0x1fc3b5 = _0x19601c;
    return await this[_0x1fc3b5(0x20d)][_0x1fc3b5(0x20b)](
      this["jid"],
      _0xb88827,
      _0xcdbdde,
      _0x15972d
    );
  }
  async [_0x19601c(0x211)](_0x209136) {
    const _0x4cfbcd = _0x19601c;
    return await this[_0x4cfbcd(0x20d)]["sendMessage"](
      this["jid"],
      _0x209136,
      MessageType[_0x4cfbcd(0x1fb)],
      {
        mimetype: Mimetype[_0x4cfbcd(0x20e)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x4cfbcd(0x228),
        quoted: this[_0x4cfbcd(0x20c)],
      }
    );
  }
  async [_0x19601c(0x232)](_0x468ddb) {
    const _0x14d090 = _0x19601c;
    return await this["client"]["sendMessage"](
      this[_0x14d090(0x212)],
      _0x468ddb,
      MessageType[_0x14d090(0x222)],
      {
        mimetype: Mimetype[_0x14d090(0x219)],
        caption: "*Made\x20by\x20WhatsAlexa*",
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x14d090(0x20c)],
      }
    );
  }
  async [_0x19601c(0x1fe)](_0x3aac3e) {
    const _0x4d62e7 = _0x19601c;
    return await this[_0x4d62e7(0x20d)][_0x4d62e7(0x20b)](
      this[_0x4d62e7(0x212)],
      _0x3aac3e,
      MessageType[_0x4d62e7(0x222)],
      {
        mimetype: Mimetype[_0x4d62e7(0x215)],
        caption: _0x4d62e7(0x228),
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x19601c(0x227)](_0x4c8b24) {
    const _0x43779c = _0x19601c;
    return await this[_0x43779c(0x20d)][_0x43779c(0x20b)](
      this[_0x43779c(0x212)],
      _0x4c8b24,
      MessageType["audio"],
      {
        mimetype: Mimetype["mp4Audio"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x43779c(0x20c)],
      }
    );
  }
  async [_0x19601c(0x226)](_0x397c26) {
    const _0x17a9d6 = _0x19601c;
    return await this[_0x17a9d6(0x20d)]["sendMessage"](
      this[_0x17a9d6(0x212)],
      _0x397c26,
      MessageType[_0x17a9d6(0x22f)],
      { mimetype: Mimetype[_0x17a9d6(0x220)], ptt: !![], quoted: this["data"] }
    );
  }
  async [_0x19601c(0x234)]() {
    const _0x231a3b = _0x19601c;
    return await this[_0x231a3b(0x20d)][_0x231a3b(0x231)](
      this[_0x231a3b(0x212)],
      _0x231a3b(0x236)
    );
  }
  async [_0x19601c(0x214)]() {
    const _0xb7afd3 = _0x19601c;
    return await this[_0xb7afd3(0x20d)]["updatePresence"](
      this[_0xb7afd3(0x212)],
      Presence[_0xb7afd3(0x206)]
    );
  }
  async [_0x19601c(0x205)]() {
    const _0x3ffd8e = _0x19601c;
    return await this[_0x3ffd8e(0x20d)][_0x3ffd8e(0x21a)](
      this["jid"],
      Presence["recording"]
    );
  }
  async [_0x19601c(0x213)]() {
    const _0x1edce1 = _0x19601c;
    return await this[_0x1edce1(0x20d)][_0x1edce1(0x21a)](
      this[_0x1edce1(0x212)],
      Presence[_0x1edce1(0x22d)]
    );
  }
  async [_0x19601c(0x202)]() {
    const _0x352b5d = _0x19601c;
    return await this["client"][_0x352b5d(0x21a)](
      this[_0x352b5d(0x212)],
      Presence[_0x352b5d(0x207)]
    );
  }
  async [_0x19601c(0x203)]() {
    const _0x457d05 = _0x19601c;
    return await this[_0x457d05(0x20d)][_0x457d05(0x231)](
      this[_0x457d05(0x212)]
    );
  }
  async [_0x19601c(0x230)](_0xea5dd8 = this["id"]) {
    const _0x1f5d48 = _0x19601c;
    return (
      await this["client"][_0x1f5d48(0x224)](this[_0x1f5d48(0x20c)], _0xea5dd8),
      this["id"] + "." + this[_0x1f5d48(0x22b)][_0x1f5d48(0x1f8)]("/")[0x1]
    );
  }
}
function _0x4adf(_0x4938e7, _0x574a1d) {
  const _0x3cfb72 = _0x3cfb();
  return (
    (_0x4adf = function (_0x4adfd9, _0x57a2a8) {
      _0x4adfd9 = _0x4adfd9 - 0x1f2;
      let _0x8369fc = _0x3cfb72[_0x4adfd9];
      return _0x8369fc;
    }),
    _0x4adf(_0x4938e7, _0x574a1d)
  );
}
function _0x3cfb() {
  const _0x387b2d = [
    "client",
    "png",
    "fromMe",
    "remoteJid",
    "sendImage",
    "jid",
    "sendOnline",
    "sendTyping",
    "gif",
    "@adiwajshing/baileys",
    "low",
    "32179520RtTKWP",
    "mpeg",
    "updatePresence",
    "object",
    "height",
    "./Base",
    "hasOwnProperty",
    "448623izLtaQ",
    "mp4Audio",
    "sendReply",
    "video",
    "contextInfo",
    "downloadAndSaveMediaMessage",
    "deleteMessage",
    "sendAudioAsVoice",
    "sendAudio",
    "*Made\x20by\x20WhatsAlexa*",
    "./ReplyMessage",
    "226234wjZdlF",
    "mimetype",
    "10UdNAHi",
    "available",
    "4197948RnnlYS",
    "audio",
    "download",
    "chatRead",
    "sendVideo",
    "208998sPItLV",
    "sendUnread",
    "width",
    "unread",
    "key",
    "messageTimestamp",
    "text",
    "message",
    "mediaKey",
    "16qBwDoK",
    "split",
    "url",
    "_patch",
    "image",
    "caption",
    "videoMessage",
    "sendVideoAsGif",
    "./Message",
    "6675039uOawmA",
    "8hmkmbz",
    "sendOffline",
    "sendRead",
    "reply_message",
    "sendRecording",
    "composing",
    "unavailable",
    "delete",
    "71350GFGjZy",
    "quotedMessage",
    "sendMessage",
    "data",
  ];
  _0x3cfb = function () {
    return _0x387b2d;
  };
  return _0x3cfb();
}
module["exports"] = Video;
