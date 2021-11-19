const _0x396bb2 = _0x2634;
(function (_0x22ad8d, _0x37716f) {
  const _0x4b238b = _0x2634,
    _0x582f09 = _0x22ad8d();
  while (!![]) {
    try {
      const _0x120b15 =
        -parseInt(_0x4b238b(0x118)) / 0x1 +
        parseInt(_0x4b238b(0x103)) / 0x2 +
        (parseInt(_0x4b238b(0x11a)) / 0x3) *
          (parseInt(_0x4b238b(0x113)) / 0x4) +
        parseInt(_0x4b238b(0x108)) / 0x5 +
        (-parseInt(_0x4b238b(0xf2)) / 0x6) * (parseInt(_0x4b238b(0xff)) / 0x7) +
        -parseInt(_0x4b238b(0x11f)) / 0x8 +
        parseInt(_0x4b238b(0x115)) / 0x9;
      if (_0x120b15 === _0x37716f) break;
      else _0x582f09["push"](_0x582f09["shift"]());
    } catch (_0x2c351) {
      _0x582f09["push"](_0x582f09["shift"]());
    }
  }
})(_0x8d19, 0x7db1b);
function _0x2634(_0x17fc1d, _0x1ae3c1) {
  const _0x8d1947 = _0x8d19();
  return (
    (_0x2634 = function (_0x263418, _0x53df23) {
      _0x263418 = _0x263418 - 0xea;
      let _0x1c8ff7 = _0x8d1947[_0x263418];
      return _0x1c8ff7;
    }),
    _0x2634(_0x17fc1d, _0x1ae3c1)
  );
}
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x396bb2(
    0x106
  )),
  Base = require(_0x396bb2(0x123)),
  Message = require("./Message"),
  ReplyMessage = require("./ReplyMessage");
function _0x8d19() {
  const _0x4949bd = [
    "6078JCqacy",
    "messageTimestamp",
    "sendTyping",
    "sendAudioAsVoice",
    "sendMessage",
    "sendRecording",
    "url",
    "hasOwnProperty",
    "_patch",
    "sendUnread",
    "text",
    "delete",
    "mimetype",
    "6258RQuSru",
    "height",
    "videoMessage",
    "downloadAndSaveMediaMessage",
    "1709856mYCsSe",
    "sendRead",
    "gif",
    "@adiwajshing/baileys",
    "contextInfo",
    "536050YBXMvW",
    "sendImage",
    "data",
    "mp4Audio",
    "updatePresence",
    "mediaKey",
    "object",
    "png",
    "chatRead",
    "quotedMessage",
    "caption",
    "224rQaKba",
    "timestamp",
    "8156520RYLZIg",
    "sendOffline",
    "exports",
    "367981hmbehl",
    "video",
    "22434SSTgpa",
    "unread",
    "audio",
    "message",
    "jid",
    "3989920kiEAiV",
    "deleteMessage",
    "fromMe",
    "sendOnline",
    "./Base",
    "unavailable",
    "sendVideoAsGif",
    "remoteJid",
    "sendReply",
    "reply_message",
    "width",
    "composing",
    "available",
    "key",
    "client",
  ];
  _0x8d19 = function () {
    return _0x4949bd;
  };
  return _0x8d19();
}
class Video extends Base {
  constructor(_0x1020c8, _0x1d310d) {
    super(_0x1020c8);
    if (_0x1d310d) this["_patch"](_0x1d310d);
  }
  [_0x396bb2(0xfa)](_0x46a14f) {
    const _0x49f598 = _0x396bb2;
    return (
      (this["id"] =
        _0x46a14f[_0x49f598(0xf0)]["id"] === undefined
          ? undefined
          : _0x46a14f[_0x49f598(0xf0)]["id"]),
      (this[_0x49f598(0x11e)] = _0x46a14f["key"][_0x49f598(0xea)]),
      (this["fromMe"] = _0x46a14f["key"][_0x49f598(0x121)]),
      (this[_0x49f598(0x112)] =
        _0x46a14f["message"]["videoMessage"][_0x49f598(0x112)] === null
          ? _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)]["caption"]
          : ""),
      (this[_0x49f598(0xf8)] =
        _0x46a14f[_0x49f598(0x11d)]["videoMessage"][_0x49f598(0xf8)]),
      (this[_0x49f598(0x114)] =
        typeof _0x46a14f[_0x49f598(0xf3)] === _0x49f598(0x10e)
          ? _0x46a14f[_0x49f598(0xf3)]["low"]
          : _0x46a14f["messageTimestamp"]),
      (this[_0x49f598(0xfe)] =
        _0x46a14f["message"]["videoMessage"]["mimetype"]),
      (this[_0x49f598(0x100)] =
        _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)][_0x49f598(0x100)]),
      (this[_0x49f598(0xed)] =
        _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)]["width"]),
      (this[_0x49f598(0x10d)] =
        _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)][_0x49f598(0x10d)]),
      (this[_0x49f598(0x10a)] = _0x46a14f),
      _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)][_0x49f598(0xf9)](
        "contextInfo"
      ) && _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x107)][_0x49f598(0x111)]
        ? (this[_0x49f598(0xec)] = new ReplyMessage(
            this[_0x49f598(0xf1)],
            _0x46a14f[_0x49f598(0x11d)][_0x49f598(0x101)]["contextInfo"]
          ))
        : (this[_0x49f598(0xec)] = ![]),
      super[_0x49f598(0xfa)](_0x46a14f)
    );
  }
  async [_0x396bb2(0xfd)]() {
    const _0x15287b = _0x396bb2;
    return await this["client"][_0x15287b(0x120)](this[_0x15287b(0x11e)], {
      id: this["id"],
      remoteJid: this[_0x15287b(0x11e)],
      fromMe: !![],
    });
  }
  async [_0x396bb2(0xeb)](_0x1b33cb) {
    const _0x2f5698 = _0x396bb2;
    var _0x17f6df = await this[_0x2f5698(0xf1)]["sendMessage"](
      this[_0x2f5698(0x11e)],
      _0x1b33cb,
      MessageType[_0x2f5698(0xfc)],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x2f5698(0x10a)],
      }
    );
    return new Message(this[_0x2f5698(0xf1)], _0x17f6df);
  }
  async [_0x396bb2(0xf6)](_0xb9697, _0x4b4b67, _0x2f9724) {
    const _0x74bae1 = _0x396bb2;
    return await this[_0x74bae1(0xf1)]["sendMessage"](
      this[_0x74bae1(0x11e)],
      _0xb9697,
      _0x4b4b67,
      _0x2f9724
    );
  }
  async [_0x396bb2(0x109)](_0x22485e) {
    const _0x3754dc = _0x396bb2;
    return await this[_0x3754dc(0xf1)][_0x3754dc(0xf6)](
      this["jid"],
      _0x22485e,
      MessageType["image"],
      {
        mimetype: Mimetype[_0x3754dc(0x10f)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x3754dc(0x10a)],
      }
    );
  }
  async ["sendVideo"](_0x4be69a) {
    const _0x11b8ff = _0x396bb2;
    return await this[_0x11b8ff(0xf1)]["sendMessage"](
      this[_0x11b8ff(0x11e)],
      _0x4be69a,
      MessageType[_0x11b8ff(0x119)],
      {
        mimetype: Mimetype["mpeg"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x11b8ff(0x10a)],
      }
    );
  }
  async [_0x396bb2(0x125)](_0x15d90e) {
    const _0x14cc76 = _0x396bb2;
    return await this[_0x14cc76(0xf1)]["sendMessage"](
      this[_0x14cc76(0x11e)],
      _0x15d90e,
      MessageType[_0x14cc76(0x119)],
      {
        mimetype: Mimetype[_0x14cc76(0x105)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x14cc76(0x10a)],
      }
    );
  }
  async ["sendAudio"](_0x5e7474) {
    const _0x132743 = _0x396bb2;
    return await this[_0x132743(0xf1)][_0x132743(0xf6)](
      this[_0x132743(0x11e)],
      _0x5e7474,
      MessageType["audio"],
      {
        mimetype: Mimetype[_0x132743(0x10b)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x132743(0x10a)],
      }
    );
  }
  async [_0x396bb2(0xf5)](_0x56dc28) {
    const _0x1addf8 = _0x396bb2;
    return await this["client"][_0x1addf8(0xf6)](
      this["jid"],
      _0x56dc28,
      MessageType[_0x1addf8(0x11c)],
      {
        mimetype: Mimetype[_0x1addf8(0x10b)],
        ptt: !![],
        quoted: this[_0x1addf8(0x10a)],
      }
    );
  }
  async [_0x396bb2(0xfb)]() {
    const _0x5d3d1d = _0x396bb2;
    return await this[_0x5d3d1d(0xf1)][_0x5d3d1d(0x110)](
      this["jid"],
      _0x5d3d1d(0x11b)
    );
  }
  async [_0x396bb2(0xf4)]() {
    const _0x5efaf1 = _0x396bb2;
    return await this["client"]["updatePresence"](
      this[_0x5efaf1(0x11e)],
      Presence[_0x5efaf1(0xee)]
    );
  }
  async [_0x396bb2(0xf7)]() {
    const _0x38636a = _0x396bb2;
    return await this[_0x38636a(0xf1)]["updatePresence"](
      this["jid"],
      Presence["recording"]
    );
  }
  async [_0x396bb2(0x122)]() {
    const _0xff48d1 = _0x396bb2;
    return await this[_0xff48d1(0xf1)][_0xff48d1(0x10c)](
      this[_0xff48d1(0x11e)],
      Presence[_0xff48d1(0xef)]
    );
  }
  async [_0x396bb2(0x116)]() {
    const _0x12fad2 = _0x396bb2;
    return await this[_0x12fad2(0xf1)][_0x12fad2(0x10c)](
      this[_0x12fad2(0x11e)],
      Presence[_0x12fad2(0x124)]
    );
  }
  async [_0x396bb2(0x104)]() {
    const _0x3e8ec2 = _0x396bb2;
    return await this["client"][_0x3e8ec2(0x110)](this[_0x3e8ec2(0x11e)]);
  }
  async ["download"](_0x322629 = this["id"]) {
    const _0x57fc56 = _0x396bb2;
    return (
      await this[_0x57fc56(0xf1)][_0x57fc56(0x102)](this["data"], _0x322629),
      this["id"] + "." + this["mimetype"]["split"]("/")[0x1]
    );
  }
}
module[_0x396bb2(0x117)] = Video;
