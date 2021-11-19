function _0xd9a6(_0x25732e, _0x2cc3d7) {
  const _0x2c243a = _0x2c24();
  return (
    (_0xd9a6 = function (_0xd9a6ed, _0x47ec51) {
      _0xd9a6ed = _0xd9a6ed - 0x150;
      let _0x50c1b0 = _0x2c243a[_0xd9a6ed];
      return _0x50c1b0;
    }),
    _0xd9a6(_0x25732e, _0x2cc3d7)
  );
}
const _0x4aff1c = _0xd9a6;
(function (_0x27f8a3, _0x4a8de1) {
  const _0x3ef29a = _0xd9a6,
    _0x4b52b4 = _0x27f8a3();
  while (!![]) {
    try {
      const _0x111b1c =
        (parseInt(_0x3ef29a(0x17b)) / 0x1) *
          (-parseInt(_0x3ef29a(0x154)) / 0x2) +
        (parseInt(_0x3ef29a(0x15d)) / 0x3) *
          (-parseInt(_0x3ef29a(0x18c)) / 0x4) +
        (-parseInt(_0x3ef29a(0x17e)) / 0x5) *
          (parseInt(_0x3ef29a(0x16f)) / 0x6) +
        (parseInt(_0x3ef29a(0x152)) / 0x7) *
          (-parseInt(_0x3ef29a(0x184)) / 0x8) +
        (-parseInt(_0x3ef29a(0x18b)) / 0x9) *
          (-parseInt(_0x3ef29a(0x159)) / 0xa) +
        -parseInt(_0x3ef29a(0x157)) / 0xb +
        (parseInt(_0x3ef29a(0x167)) / 0xc) * (parseInt(_0x3ef29a(0x182)) / 0xd);
      if (_0x111b1c === _0x4a8de1) break;
      else _0x4b52b4["push"](_0x4b52b4["shift"]());
    } catch (_0x16835d) {
      _0x4b52b4["push"](_0x4b52b4["shift"]());
    }
  }
})(_0x2c24, 0x9bcce);
const {
    MessageType,
    Mimetype,
    Presence,
    MessageOptions,
  } = require("@adiwajshing/baileys"),
  Base = require("./Base"),
  ReplyMessage = require(_0x4aff1c(0x16d));
class Message extends Base {
  constructor(_0x27f01c, _0x4f1ac3) {
    const _0x547f0e = _0x4aff1c;
    super(_0x27f01c);
    if (_0x4f1ac3) this[_0x547f0e(0x15c)](_0x4f1ac3);
  }
  [_0x4aff1c(0x15c)](_0x33afe7) {
    const _0x2f7c56 = _0x4aff1c;
    return (
      (this["id"] =
        _0x33afe7[_0x2f7c56(0x178)]["id"] === undefined
          ? undefined
          : _0x33afe7[_0x2f7c56(0x178)]["id"]),
      (this["jid"] = _0x33afe7[_0x2f7c56(0x178)][_0x2f7c56(0x173)]),
      (this[_0x2f7c56(0x17d)] = _0x33afe7[_0x2f7c56(0x178)][_0x2f7c56(0x17d)]),
      (this[_0x2f7c56(0x187)] =
        _0x33afe7["message"]["extendedTextMessage"] === null
          ? _0x33afe7[_0x2f7c56(0x187)]["conversation"]
          : _0x33afe7[_0x2f7c56(0x187)][_0x2f7c56(0x175)][_0x2f7c56(0x174)]),
      (this[_0x2f7c56(0x172)] = _0x33afe7[_0x2f7c56(0x172)]),
      (this[_0x2f7c56(0x162)] =
        typeof _0x33afe7[_0x2f7c56(0x170)] === "object"
          ? _0x33afe7[_0x2f7c56(0x170)][_0x2f7c56(0x17c)]
          : _0x33afe7["messageTimestamp"]),
      (this[_0x2f7c56(0x150)] = _0x33afe7),
      _0x33afe7[_0x2f7c56(0x187)][_0x2f7c56(0x153)](_0x2f7c56(0x175)) &&
      _0x33afe7[_0x2f7c56(0x187)]["extendedTextMessage"]["hasOwnProperty"](
        _0x2f7c56(0x160)
      ) === !![] &&
      _0x33afe7["message"][_0x2f7c56(0x175)]["contextInfo"][_0x2f7c56(0x153)](
        _0x2f7c56(0x18d)
      )
        ? (this["reply_message"] = new ReplyMessage(
            this[_0x2f7c56(0x163)],
            _0x33afe7["message"]["extendedTextMessage"]["contextInfo"]
          ))
        : (this[_0x2f7c56(0x18a)] = ![]),
      _0x33afe7[_0x2f7c56(0x187)][_0x2f7c56(0x153)](_0x2f7c56(0x175)) &&
      _0x33afe7["message"][_0x2f7c56(0x175)]["hasOwnProperty"](
        _0x2f7c56(0x160)
      ) === !![] &&
      _0x33afe7[_0x2f7c56(0x187)]["extendedTextMessage"][_0x2f7c56(0x160)][
        _0x2f7c56(0x153)
      ]("mentionedJid")
        ? (this[_0x2f7c56(0x171)] =
            _0x33afe7["message"]["extendedTextMessage"][_0x2f7c56(0x160)][
              _0x2f7c56(0x185)
            ])
        : (this[_0x2f7c56(0x171)] = ![]),
      super["_patch"](_0x33afe7)
    );
  }
  async [_0x4aff1c(0x16c)]() {
    const _0xdd54f2 = _0x4aff1c;
    return await this[_0xdd54f2(0x163)][_0xdd54f2(0x16b)](
      this[_0xdd54f2(0x180)],
      { id: this["id"], remoteJid: this[_0xdd54f2(0x180)], fromMe: !![] }
    );
  }
  async [_0x4aff1c(0x176)](_0x4cbf07) {
    const _0x109825 = _0x4aff1c;
    var _0x28b2d9 = await this[_0x109825(0x163)][_0x109825(0x16e)](
      this[_0x109825(0x180)],
      _0x4cbf07,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x109825(0x150)],
      }
    );
    return new Message(this[_0x109825(0x163)], _0x28b2d9);
  }
  async [_0x4aff1c(0x16e)](_0x4c1371, _0x34aef0, _0x13aca6) {
    const _0x1f991e = _0x4aff1c;
    return await this[_0x1f991e(0x163)][_0x1f991e(0x16e)](
      this[_0x1f991e(0x180)],
      _0x4c1371,
      _0x34aef0,
      _0x13aca6
    );
  }
  async [_0x4aff1c(0x164)](_0x2e631a) {
    const _0x329afc = _0x4aff1c;
    return await this[_0x329afc(0x163)]["sendMessage"](
      this[_0x329afc(0x180)],
      _0x2e631a,
      MessageType[_0x329afc(0x168)],
      {
        mimetype: Mimetype[_0x329afc(0x158)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x329afc(0x150)],
      }
    );
  }
  async [_0x4aff1c(0x181)](_0x4c0b60) {
    const _0x13d48a = _0x4aff1c;
    return await this["client"][_0x13d48a(0x16e)](
      this[_0x13d48a(0x180)],
      _0x4c0b60,
      MessageType["video"],
      {
        mimetype: Mimetype[_0x13d48a(0x15f)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x13d48a(0x150)],
      }
    );
  }
  async [_0x4aff1c(0x183)](_0x592212) {
    const _0x23ca95 = _0x4aff1c;
    return await this["client"]["sendMessage"](
      this[_0x23ca95(0x180)],
      _0x592212,
      MessageType[_0x23ca95(0x17a)],
      {
        mimetype: Mimetype[_0x23ca95(0x166)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x4aff1c(0x177)](_0x293e3e) {
    const _0x2a2ca4 = _0x4aff1c;
    return await this[_0x2a2ca4(0x163)]["sendMessage"](
      this[_0x2a2ca4(0x180)],
      _0x293e3e,
      MessageType[_0x2a2ca4(0x169)],
      {
        mimetype: Mimetype[_0x2a2ca4(0x189)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x2a2ca4(0x150)],
      }
    );
  }
  async [_0x4aff1c(0x15a)](_0x54509f) {
    const _0x4d069c = _0x4aff1c;
    return await this[_0x4d069c(0x163)][_0x4d069c(0x16e)](
      this[_0x4d069c(0x180)],
      _0x54509f,
      MessageType[_0x4d069c(0x169)],
      {
        mimetype: Mimetype[_0x4d069c(0x189)],
        ptt: !![],
        quoted: this[_0x4d069c(0x150)],
      }
    );
  }
  async ["sendUnread"]() {
    const _0x246afb = _0x4aff1c;
    return await this["client"][_0x246afb(0x179)](
      this[_0x246afb(0x180)],
      _0x246afb(0x186)
    );
  }
  async [_0x4aff1c(0x16a)]() {
    const _0x87ba6a = _0x4aff1c;
    return await this[_0x87ba6a(0x163)][_0x87ba6a(0x15b)](
      this[_0x87ba6a(0x180)],
      Presence[_0x87ba6a(0x155)]
    );
  }
  async [_0x4aff1c(0x188)]() {
    const _0x1daef5 = _0x4aff1c;
    return await this[_0x1daef5(0x163)][_0x1daef5(0x15b)](
      this[_0x1daef5(0x180)],
      Presence[_0x1daef5(0x17f)]
    );
  }
  async ["sendOnline"]() {
    const _0x5d4b65 = _0x4aff1c;
    return await this["client"][_0x5d4b65(0x15b)](
      this[_0x5d4b65(0x180)],
      Presence[_0x5d4b65(0x161)]
    );
  }
  async [_0x4aff1c(0x15e)]() {
    const _0x203a58 = _0x4aff1c;
    return await this[_0x203a58(0x163)]["updatePresence"](
      this[_0x203a58(0x180)],
      Presence[_0x203a58(0x151)]
    );
  }
  async [_0x4aff1c(0x156)]() {
    const _0x2f2791 = _0x4aff1c;
    return await this[_0x2f2791(0x163)][_0x2f2791(0x179)](
      this[_0x2f2791(0x180)]
    );
  }
}
function _0x2c24() {
  const _0x4615a1 = [
    "composing",
    "sendRead",
    "12083500SiSiwP",
    "png",
    "460850gVTttA",
    "sendAudioAsVoice",
    "updatePresence",
    "_patch",
    "16053mbIqiD",
    "sendOffline",
    "mpeg",
    "contextInfo",
    "available",
    "timestamp",
    "client",
    "sendImage",
    "exports",
    "gif",
    "137736iTahMb",
    "image",
    "audio",
    "sendTyping",
    "deleteMessage",
    "delete",
    "./ReplyMessage",
    "sendMessage",
    "3522huImmc",
    "messageTimestamp",
    "mention",
    "unreadCount",
    "remoteJid",
    "text",
    "extendedTextMessage",
    "sendReply",
    "sendAudio",
    "key",
    "chatRead",
    "video",
    "4wxZJPK",
    "low",
    "fromMe",
    "10435kZhOUj",
    "recording",
    "jid",
    "sendVideo",
    "4706LZAesL",
    "sendVideoAsGif",
    "426472OSGBRS",
    "mentionedJid",
    "unread",
    "message",
    "sendRecording",
    "mp4Audio",
    "reply_message",
    "207pvZXuO",
    "892ynKqFI",
    "quotedMessage",
    "data",
    "unavailable",
    "49PeazNH",
    "hasOwnProperty",
    "343414WSiSvs",
  ];
  _0x2c24 = function () {
    return _0x4615a1;
  };
  return _0x2c24();
}
module[_0x4aff1c(0x165)] = Message;
