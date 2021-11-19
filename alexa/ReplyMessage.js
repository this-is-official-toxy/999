const _0x315259 = _0xf10c;
(function (_0x401ee4, _0x5b0887) {
  const _0x3c40e3 = _0xf10c,
    _0x387eb5 = _0x401ee4();
  while (!![]) {
    try {
      const _0x4efaf9 =
        parseInt(_0x3c40e3(0x1c8)) / 0x1 +
        (parseInt(_0x3c40e3(0x1c6)) / 0x2) *
          (-parseInt(_0x3c40e3(0x1d2)) / 0x3) +
        (-parseInt(_0x3c40e3(0x1de)) / 0x4) *
          (parseInt(_0x3c40e3(0x1ce)) / 0x5) +
        parseInt(_0x3c40e3(0x1dc)) / 0x6 +
        parseInt(_0x3c40e3(0x1a6)) / 0x7 +
        (-parseInt(_0x3c40e3(0x1dd)) / 0x8) *
          (parseInt(_0x3c40e3(0x1ca)) / 0x9) +
        -parseInt(_0x3c40e3(0x1cb)) / 0xa;
      if (_0x4efaf9 === _0x5b0887) break;
      else _0x387eb5["push"](_0x387eb5["shift"]());
    } catch (_0x57e550) {
      _0x387eb5["push"](_0x387eb5["shift"]());
    }
  }
})(_0x4aca, 0xe76db);
const { MessageType, Mimetype, Presence, MessageOptions } = require(_0x315259(
    0x1ba
  )),
  Base = require(_0x315259(0x1bc)),
  Image = require(_0x315259(0x1b9));
class ReplyMessage extends Base {
  constructor(_0x531858, _0x4a483e) {
    const _0x3c9c39 = _0x315259;
    super(_0x531858);
    if (_0x4a483e) this[_0x3c9c39(0x1a9)](_0x4a483e);
  }
  [_0x315259(0x1a9)](_0x2ed3fd) {
    const _0x5dc13c = _0x315259;
    (this["id"] = _0x2ed3fd[_0x5dc13c(0x1a8)]),
      (this[_0x5dc13c(0x1d4)] = _0x2ed3fd[_0x5dc13c(0x1c2)]);
    if (
      _0x2ed3fd["quotedMessage"] &&
      _0x2ed3fd[_0x5dc13c(0x1c4)]["imageMessage"]
    )
      (this[_0x5dc13c(0x1c0)] =
        _0x2ed3fd["quotedMessage"][_0x5dc13c(0x1d1)][_0x5dc13c(0x1ad)] === null
          ? _0x2ed3fd[_0x5dc13c(0x1c0)]["imageMessage"][_0x5dc13c(0x1ad)]
          : ""),
        (this[_0x5dc13c(0x1ad)] =
          _0x2ed3fd[_0x5dc13c(0x1c4)]["imageMessage"]["caption"] === null
            ? _0x2ed3fd[_0x5dc13c(0x1c0)][_0x5dc13c(0x1d1)][_0x5dc13c(0x1ad)]
            : ""),
        (this["url"] = _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1d1)]["url"]),
        (this["mimetype"] =
          _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1d1)][_0x5dc13c(0x1c1)]),
        (this[_0x5dc13c(0x1be)] =
          _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1d1)][_0x5dc13c(0x1be)]),
        (this[_0x5dc13c(0x1b3)] =
          _0x2ed3fd["quotedMessage"][_0x5dc13c(0x1d1)]["width"]),
        (this["mediaKey"] =
          _0x2ed3fd["quotedMessage"][_0x5dc13c(0x1d1)][_0x5dc13c(0x1d0)]),
        (this[_0x5dc13c(0x1da)] = !![]),
        (this["video"] = ![]);
    else {
      if (
        _0x2ed3fd[_0x5dc13c(0x1c4)] &&
        _0x2ed3fd[_0x5dc13c(0x1c4)]["videoMessage"]
      )
        (this[_0x5dc13c(0x1c0)] =
          _0x2ed3fd["quotedMessage"]["videoMessage"][_0x5dc13c(0x1ad)] === null
            ? _0x2ed3fd[_0x5dc13c(0x1c0)]["videoMessage"][_0x5dc13c(0x1ad)]
            : ""),
          (this[_0x5dc13c(0x1ad)] =
            _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1b0)]["caption"] === null
              ? _0x2ed3fd[_0x5dc13c(0x1c0)][_0x5dc13c(0x1b0)][_0x5dc13c(0x1ad)]
              : ""),
          (this["url"] = _0x2ed3fd[_0x5dc13c(0x1c4)]["videoMessage"]["url"]),
          (this["mimetype"] =
            _0x2ed3fd[_0x5dc13c(0x1c4)]["videoMessage"][_0x5dc13c(0x1c1)]),
          (this[_0x5dc13c(0x1be)] =
            _0x2ed3fd["quotedMessage"]["videoMessage"][_0x5dc13c(0x1be)]),
          (this[_0x5dc13c(0x1b3)] =
            _0x2ed3fd["quotedMessage"][_0x5dc13c(0x1b0)][_0x5dc13c(0x1b3)]),
          (this[_0x5dc13c(0x1d0)] =
            _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1b0)][_0x5dc13c(0x1d0)]),
          (this[_0x5dc13c(0x1d7)] = !![]);
      else
        _0x2ed3fd["quotedMessage"] &&
          _0x2ed3fd[_0x5dc13c(0x1c4)]["conversation"] &&
          ((this[_0x5dc13c(0x1c0)] =
            _0x2ed3fd[_0x5dc13c(0x1c4)][_0x5dc13c(0x1ab)]),
          (this[_0x5dc13c(0x1a7)] =
            _0x2ed3fd[_0x5dc13c(0x1c4)]["conversation"]),
          (this["image"] = ![]),
          (this[_0x5dc13c(0x1d7)] = ![]));
    }
    return (
      (this[_0x5dc13c(0x1c5)] = _0x2ed3fd), super[_0x5dc13c(0x1a9)](_0x2ed3fd)
    );
  }
  async [_0x315259(0x1d3)]() {
    const _0x1d4d0f = _0x315259;
    return await this[_0x1d4d0f(0x1cd)][_0x1d4d0f(0x1bb)](this["jid"], {
      id: this["id"],
      remoteJid: this["jid"],
      fromMe: !![],
    });
  }
  async [_0x315259(0x1aa)](_0x12371b) {
    const _0x11874f = _0x315259;
    var _0x100d36 = await this[_0x11874f(0x1cd)]["sendMessage"](
      this[_0x11874f(0x1d4)],
      _0x12371b,
      MessageType["text"],
      {
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x11874f(0x1c5)],
      }
    );
    return new Message(this["client"], _0x100d36);
  }
  async [_0x315259(0x1d6)](_0x178087, _0x45b6a0, _0x41c787) {
    const _0x3c85e7 = _0x315259;
    return await this[_0x3c85e7(0x1cd)]["sendMessage"](
      this[_0x3c85e7(0x1d4)],
      _0x178087,
      _0x45b6a0,
      _0x41c787
    );
  }
  async [_0x315259(0x1b8)](_0x386710) {
    const _0x4aa301 = _0x315259;
    return await this[_0x4aa301(0x1cd)][_0x4aa301(0x1d6)](
      this[_0x4aa301(0x1d4)],
      _0x386710,
      MessageType[_0x4aa301(0x1da)],
      {
        mimetype: Mimetype["png"],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        caption: _0x4aa301(0x1d5),
        quoted: this[_0x4aa301(0x1c5)],
      }
    );
  }
  async [_0x315259(0x1db)](_0x4265b2) {
    const _0x245942 = _0x315259;
    return await this[_0x245942(0x1cd)][_0x245942(0x1d6)](
      this[_0x245942(0x1d4)],
      _0x4265b2,
      MessageType[_0x245942(0x1d7)],
      {
        mimetype: Mimetype[_0x245942(0x1b7)],
        caption: "*Made\x20by\x20WhatsAlexa*",
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this["data"],
      }
    );
  }
  async [_0x315259(0x1c7)](_0x2ff3c9) {
    const _0x23e6ab = _0x315259;
    return await this[_0x23e6ab(0x1cd)][_0x23e6ab(0x1d6)](
      this[_0x23e6ab(0x1d4)],
      _0x2ff3c9,
      MessageType[_0x23e6ab(0x1d7)],
      {
        mimetype: Mimetype[_0x23e6ab(0x1ae)],
        caption: _0x23e6ab(0x1d5),
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x23e6ab(0x1c5)],
      }
    );
  }
  async ["sendAudio"](_0x2c7edb) {
    const _0x13f3c5 = _0x315259;
    return await this["client"]["sendMessage"](
      this[_0x13f3c5(0x1d4)],
      _0x2c7edb,
      MessageType[_0x13f3c5(0x1b4)],
      {
        mimetype: Mimetype[_0x13f3c5(0x1b5)],
        contextInfo: { forwardingScore: 0x31, isForwarded: !![] },
        quoted: this[_0x13f3c5(0x1c5)],
      }
    );
  }
  async ["sendAudioAsVoice"](_0x1413e5) {
    const _0xe30e10 = _0x315259;
    return await this[_0xe30e10(0x1cd)]["sendMessage"](
      this["jid"],
      _0x1413e5,
      MessageType[_0xe30e10(0x1b4)],
      {
        mimetype: Mimetype[_0xe30e10(0x1b5)],
        ptt: !![],
        quoted: this[_0xe30e10(0x1c5)],
      }
    );
  }
  async [_0x315259(0x1cf)]() {
    const _0x269e35 = _0x315259;
    return await this[_0x269e35(0x1cd)][_0x269e35(0x1d8)](
      this[_0x269e35(0x1d4)],
      _0x269e35(0x1ac)
    );
  }
  async [_0x315259(0x1cc)]() {
    const _0x3a9f47 = _0x315259;
    return await this[_0x3a9f47(0x1cd)][_0x3a9f47(0x1af)](
      this["jid"],
      Presence["composing"]
    );
  }
  async ["sendRecording"]() {
    const _0x3e295e = _0x315259;
    return await this[_0x3e295e(0x1cd)]["updatePresence"](
      this["jid"],
      Presence["recording"]
    );
  }
  async [_0x315259(0x1bf)]() {
    const _0x56e40a = _0x315259;
    return await this[_0x56e40a(0x1cd)][_0x56e40a(0x1af)](
      this[_0x56e40a(0x1d4)],
      Presence[_0x56e40a(0x1c9)]
    );
  }
  async [_0x315259(0x1b6)]() {
    const _0x9475f8 = _0x315259;
    return await this[_0x9475f8(0x1cd)][_0x9475f8(0x1af)](
      this[_0x9475f8(0x1d4)],
      Presence[_0x9475f8(0x1bd)]
    );
  }
  async ["sendRead"]() {
    const _0x301e08 = _0x315259;
    return await this[_0x301e08(0x1cd)][_0x301e08(0x1d8)](
      this[_0x301e08(0x1d4)]
    );
  }
  async [_0x315259(0x1d9)](_0x335da9 = this["id"]) {
    const _0x697768 = _0x315259;
    return this[_0x697768(0x1da)]
      ? (await this[_0x697768(0x1cd)][_0x697768(0x1c3)](
          this[_0x697768(0x1c5)][_0x697768(0x1c4)][_0x697768(0x1d1)],
          _0x335da9
        ),
        this["id"] + "." + this[_0x697768(0x1c1)][_0x697768(0x1b2)]("/")[0x1])
      : ![];
  }
}
function _0x4aca() {
  const _0x48cdbb = [
    "11247072msvaHT",
    "696040beavoa",
    "524olliDb",
    "4554158ZVMFsB",
    "text",
    "stanzaId",
    "_patch",
    "sendReply",
    "conversation",
    "unread",
    "caption",
    "gif",
    "updatePresence",
    "videoMessage",
    "exports",
    "split",
    "width",
    "audio",
    "mp4Audio",
    "sendOffline",
    "mpeg",
    "sendImage",
    "./Image",
    "@adiwajshing/baileys",
    "deleteMessage",
    "./Base",
    "unavailable",
    "height",
    "sendOnline",
    "message",
    "mimetype",
    "participant",
    "downloadAndSaveMediaMessage",
    "quotedMessage",
    "data",
    "3452818udRKQi",
    "sendVideoAsGif",
    "733553yNcaFg",
    "available",
    "9PyaLra",
    "931790khvvTo",
    "sendTyping",
    "client",
    "15425MbUBxc",
    "sendUnread",
    "mediaKey",
    "imageMessage",
    "3TizlHl",
    "delete",
    "jid",
    "*Made\x20by\x20WhatsAlexa*",
    "sendMessage",
    "video",
    "chatRead",
    "download",
    "image",
    "sendVideo",
  ];
  _0x4aca = function () {
    return _0x48cdbb;
  };
  return _0x4aca();
}
function _0xf10c(_0x83a159, _0x19338c) {
  const _0x4aca6e = _0x4aca();
  return (
    (_0xf10c = function (_0xf10c4d, _0x3f4a88) {
      _0xf10c4d = _0xf10c4d - 0x1a6;
      let _0x40122a = _0x4aca6e[_0xf10c4d];
      return _0x40122a;
    }),
    _0xf10c(_0x83a159, _0x19338c)
  );
}
module[_0x315259(0x1b1)] = ReplyMessage;
