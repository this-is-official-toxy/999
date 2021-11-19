function _0x1020(_0x2fca91, _0x3d7044) {
  const _0x7c2c6b = _0x7c2c();
  return (
    (_0x1020 = function (_0x10206b, _0x26b99c) {
      _0x10206b = _0x10206b - 0xd6;
      let _0x4782f5 = _0x7c2c6b[_0x10206b];
      return _0x4782f5;
    }),
    _0x1020(_0x2fca91, _0x3d7044)
  );
}
const _0x47e739 = _0x1020;
(function (_0x16032e, _0xa87ede) {
  const _0x1d4137 = _0x1020,
    _0x5cd3c = _0x16032e();
  while (!![]) {
    try {
      const _0x364fe0 =
        parseInt(_0x1d4137(0xe0)) / 0x1 +
        -parseInt(_0x1d4137(0xf1)) / 0x2 +
        parseInt(_0x1d4137(0xe2)) / 0x3 +
        (parseInt(_0x1d4137(0xde)) / 0x4) * (parseInt(_0x1d4137(0xdf)) / 0x5) +
        (parseInt(_0x1d4137(0xf3)) / 0x6) * (parseInt(_0x1d4137(0xd9)) / 0x7) +
        (parseInt(_0x1d4137(0xd6)) / 0x8) * (parseInt(_0x1d4137(0xd7)) / 0x9) +
        (parseInt(_0x1d4137(0xfc)) / 0xa) * (-parseInt(_0x1d4137(0x102)) / 0xb);
      if (_0x364fe0 === _0xa87ede) break;
      else _0x5cd3c["push"](_0x5cd3c["shift"]());
    } catch (_0x13c7c2) {
      _0x5cd3c["push"](_0x5cd3c["shift"]());
    }
  }
})(_0x7c2c, 0x4caee);
function _0x7c2c() {
  const _0x1dbce8 = [
    "unreadCount",
    "400rpzizk",
    "56223SlgJhS",
    "extendedTextMessage",
    "29407DUMnrM",
    "low",
    "hasOwnProperty",
    "updatePresence",
    "key",
    "4HqfBJa",
    "790820xBhMCm",
    "488557ZMpAHN",
    "image",
    "1789350oplcpg",
    "sendAudioAsVoice",
    "mp4Audio",
    "audio",
    "sendVideo",
    "timestamp",
    "object",
    "sendMessage",
    "jid",
    "sendUnread",
    "contextInfo",
    "unread",
    "./ReplyMessage",
    "message",
    "./Base",
    "517814GCTfWr",
    "data",
    "282KSURRf",
    "mpeg",
    "sendRecording",
    "messageTimestamp",
    "sendAudio",
    "unavailable",
    "available",
    "mention",
    "composing",
    "11799670UmuDvM",
    "text",
    "client",
    "sendTyping",
    "sendOffline",
    "chatRead",
    "11yGbdaj",
    "exports",
    "sendRead",
    "_patch",
    "recording",
    "remoteJid",
    "png",
    "gif",
    "reply_message",
    "sendReply",
    "mentionedJid",
    "fromMe",
  ];
  _0x7c2c = function () {
    return _0x1dbce8;
  };
  return _0x7c2c();
}
const {
    MessageType,
    Mimetype,
    Presence,
    MessageOptions,
  } = require("@adiwajshing/baileys"),
  Base = require(_0x47e739(0xf0)),
  ReplyMessage = require(_0x47e739(0xee));
class Message extends Base {
  constructor(_0x2b4702, _0x3ddfa4) {
    const _0x2cb575 = _0x47e739;
    super(_0x2b4702);
    if (_0x3ddfa4) this[_0x2cb575(0x105)](_0x3ddfa4);
  }
  ["_patch"](_0x180053) {
    const _0x39958e = _0x47e739;
    return (
      (this["id"] =
        _0x180053["key"]["id"] === undefined
          ? undefined
          : _0x180053[_0x39958e(0xdd)]["id"]),
      (this[_0x39958e(0xea)] = _0x180053[_0x39958e(0xdd)][_0x39958e(0x107)]),
      (this[_0x39958e(0x10d)] = _0x180053[_0x39958e(0xdd)]["fromMe"]),
      (this["message"] =
        _0x180053[_0x39958e(0xef)][_0x39958e(0xd8)] === null
          ? _0x180053[_0x39958e(0xef)]["conversation"]
          : _0x180053[_0x39958e(0xef)]["extendedTextMessage"][_0x39958e(0xfd)]),
      (this[_0x39958e(0x10e)] = _0x180053[_0x39958e(0x10e)]),
      (this[_0x39958e(0xe7)] =
        typeof _0x180053["messageTimestamp"] === _0x39958e(0xe8)
          ? _0x180053[_0x39958e(0xf6)][_0x39958e(0xda)]
          : _0x180053["messageTimestamp"]),
      (this[_0x39958e(0xf2)] = _0x180053),
      _0x180053[_0x39958e(0xef)]["hasOwnProperty"](_0x39958e(0xd8)) &&
      _0x180053[_0x39958e(0xef)][_0x39958e(0xd8)][_0x39958e(0xdb)](
        _0x39958e(0xec)
      ) === !![] &&
      _0x180053[_0x39958e(0xef)][_0x39958e(0xd8)][_0x39958e(0xec)][
        _0x39958e(0xdb)
      ]("quotedMessage")
        ? (this[_0x39958e(0x10a)] = new ReplyMessage(
            this[_0x39958e(0xfe)],
            _0x180053["message"]["extendedTextMessage"][_0x39958e(0xec)]
          ))
        : (this[_0x39958e(0x10a)] = ![]),
      _0x180053[_0x39958e(0xef)][_0x39958e(0xdb)](_0x39958e(0xd8)) &&
      _0x180053[_0x39958e(0xef)]["extendedTextMessage"]["hasOwnProperty"](
        "contextInfo"
      ) === !![] &&
      _0x180053[_0x39958e(0xef)]["extendedTextMessage"][_0x39958e(0xec)][
        _0x39958e(0xdb)
      ]("mentionedJid")
        ? (this[_0x39958e(0xfa)] =
            _0x180053["message"][_0x39958e(0xd8)][_0x39958e(0xec)][
              _0x39958e(0x10c)
            ])
        : (this[_0x39958e(0xfa)] = ![]),
      super[_0x39958e(0x105)](_0x180053)
    );
  }
  async [_0x47e739(0x10b)](_0x445825) {
    const _0x181dcf = _0x47e739;
    var _0x3f85b6 = await this["client"][_0x181dcf(0xe9)](
      this[_0x181dcf(0xea)],
      _0x445825,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x181dcf(0xf2)],
      }
    );
    return new Message(this["client"], _0x3f85b6);
  }
  async [_0x47e739(0xe9)](_0x38ff91, _0x5eeb93, _0x171ba6) {
    const _0xea45ff = _0x47e739;
    return await this[_0xea45ff(0xfe)][_0xea45ff(0xe9)](
      this[_0xea45ff(0xea)],
      _0x38ff91,
      _0x5eeb93,
      _0x171ba6
    );
  }
  async ["sendImage"](_0x8c3189) {
    const _0x140e3e = _0x47e739;
    return await this["client"]["sendMessage"](
      this["jid"],
      _0x8c3189,
      MessageType[_0x140e3e(0xe1)],
      {
        mimetype: Mimetype[_0x140e3e(0x108)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x140e3e(0xf2)],
      }
    );
  }
  async [_0x47e739(0xe6)](_0x24667e) {
    const _0x14623d = _0x47e739;
    return await this[_0x14623d(0xfe)]["sendMessage"](
      this[_0x14623d(0xea)],
      _0x24667e,
      MessageType["video"],
      {
        mimetype: Mimetype[_0x14623d(0xf4)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x14623d(0xf2)],
      }
    );
  }
  async ["sendVideoAsGif"](_0x10751d) {
    const _0x59defa = _0x47e739;
    return await this[_0x59defa(0xfe)]["sendMessage"](
      this[_0x59defa(0xea)],
      _0x10751d,
      MessageType["video"],
      {
        mimetype: Mimetype[_0x59defa(0x109)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x59defa(0xf2)],
      }
    );
  }
  async [_0x47e739(0xf7)](_0x2df869) {
    const _0x43abe2 = _0x47e739;
    return await this[_0x43abe2(0xfe)][_0x43abe2(0xe9)](
      this[_0x43abe2(0xea)],
      _0x2df869,
      MessageType[_0x43abe2(0xe5)],
      {
        mimetype: Mimetype[_0x43abe2(0xe4)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x43abe2(0xf2)],
      }
    );
  }
  async [_0x47e739(0xe3)](_0xe0b953) {
    const _0x1e0123 = _0x47e739;
    return await this[_0x1e0123(0xfe)][_0x1e0123(0xe9)](
      this[_0x1e0123(0xea)],
      _0xe0b953,
      MessageType[_0x1e0123(0xe5)],
      {
        mimetype: Mimetype[_0x1e0123(0xe4)],
        ptt: !![],
        quoted: this[_0x1e0123(0xf2)],
      }
    );
  }
  async [_0x47e739(0xeb)]() {
    const _0x5093b3 = _0x47e739;
    return await this[_0x5093b3(0xfe)][_0x5093b3(0x101)](
      this["jid"],
      _0x5093b3(0xed)
    );
  }
  async [_0x47e739(0xff)]() {
    const _0x4809ec = _0x47e739;
    return await this[_0x4809ec(0xfe)][_0x4809ec(0xdc)](
      this[_0x4809ec(0xea)],
      Presence[_0x4809ec(0xfb)]
    );
  }
  async [_0x47e739(0xf5)]() {
    const _0x4fb412 = _0x47e739;
    return await this[_0x4fb412(0xfe)][_0x4fb412(0xdc)](
      this[_0x4fb412(0xea)],
      Presence[_0x4fb412(0x106)]
    );
  }
  async ["sendOnline"]() {
    const _0x4c2587 = _0x47e739;
    return await this["client"][_0x4c2587(0xdc)](
      this[_0x4c2587(0xea)],
      Presence[_0x4c2587(0xf9)]
    );
  }
  async [_0x47e739(0x100)]() {
    const _0x5ca49b = _0x47e739;
    return await this[_0x5ca49b(0xfe)][_0x5ca49b(0xdc)](
      this["jid"],
      Presence[_0x5ca49b(0xf8)]
    );
  }
  async [_0x47e739(0x104)]() {
    const _0x3b82d6 = _0x47e739;
    return await this[_0x3b82d6(0xfe)][_0x3b82d6(0x101)](this[_0x3b82d6(0xea)]);
  }
}
module[_0x47e739(0x103)] = Message;
