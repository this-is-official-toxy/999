const _0x577f24 = _0x1da3;
function _0x5e35() {
  const _0x21f3ce = [
    "append",
    "26660Zsbexl",
    "new-image-url",
    "then",
    "input[name=\x22token\x22]",
    "createReadStream",
    "cheerio",
    "24283BlzCDe",
    "198932sUxYGP",
    "976SyrvRs",
    "new-image",
    "value",
    "multipart/form-data\x20boundary=",
    "519500ikepAB",
    "99ravWpn",
    "convert",
    "1015062CZJNWM",
    "file",
    "384355vdAjMd",
    "form-data",
    "post",
    "div#output\x20>\x20p.outfile\x20>\x20video\x20>\x20source",
    "src",
    "attr",
    "173030MgtEMe",
    "_boundary",
    "*Made\x20by\x20WhatsAlexa*",
    "input[name=\x22file\x22]",
    "177ypBbIx",
    "axios",
    "load",
    "token",
    "https:",
    "https://s6.ezgif.com/webp-to-mp4",
    "catch",
  ];
  _0x5e35 = function () {
    return _0x21f3ce;
  };
  return _0x5e35();
}
function _0x1da3(_0x313ecc, _0x3d9c5a) {
  const _0x5e3564 = _0x5e35();
  return (
    (_0x1da3 = function (_0x1da3ce, _0x2f4b3f) {
      _0x1da3ce = _0x1da3ce - 0x139;
      let _0xcc971e = _0x5e3564[_0x1da3ce];
      return _0xcc971e;
    }),
    _0x1da3(_0x313ecc, _0x3d9c5a)
  );
}
(function (_0x1e1f93, _0x3588b1) {
  const _0x43cec4 = _0x1da3,
    _0x5919e0 = _0x1e1f93();
  while (!![]) {
    try {
      const _0x978613 =
        parseInt(_0x43cec4(0x158)) / 0x1 +
        -parseInt(_0x43cec4(0x153)) / 0x2 +
        (parseInt(_0x43cec4(0x144)) / 0x3) *
          (parseInt(_0x43cec4(0x14c)) / 0x4) +
        -parseInt(_0x43cec4(0x13a)) / 0x5 +
        parseInt(_0x43cec4(0x15b)) / 0x6 +
        (parseInt(_0x43cec4(0x152)) / 0x7) *
          (-parseInt(_0x43cec4(0x154)) / 0x8) +
        (parseInt(_0x43cec4(0x159)) / 0x9) *
          (-parseInt(_0x43cec4(0x140)) / 0xa);
      if (_0x978613 === _0x3588b1) break;
      else _0x5919e0["push"](_0x5919e0["shift"]());
    } catch (_0x5998b3) {
      _0x5919e0["push"](_0x5919e0["shift"]());
    }
  }
})(_0x5e35, 0x474b8);
let cheerio = require(_0x577f24(0x151)),
  FormData = require(_0x577f24(0x13b)),
  axios = require(_0x577f24(0x145));
function sticker2Video(_0x26b239) {
  return new Promise(async (_0x102f46, _0x364741) => {
    const _0x43b2aa = _0x1da3,
      _0x17a1ca = new FormData();
    _0x17a1ca[_0x43b2aa(0x14b)](_0x43b2aa(0x14d), ""),
      _0x17a1ca[_0x43b2aa(0x14b)](
        _0x43b2aa(0x155),
        fs[_0x43b2aa(0x150)](_0x26b239)
      ),
      await axios({
        method: _0x43b2aa(0x13c),
        url: _0x43b2aa(0x149),
        data: _0x17a1ca,
        headers: {
          "Content-Type": _0x43b2aa(0x157) + _0x17a1ca[_0x43b2aa(0x141)],
        },
      })
        [_0x43b2aa(0x14e)](async ({ data: _0xf506d7 }) => {
          const _0x368a7e = _0x43b2aa,
            _0xcee5a9 = new FormData(),
            _0x7d81f4 = cheerio[_0x368a7e(0x146)](_0xf506d7),
            _0x13bd0f = _0x7d81f4(_0x368a7e(0x143))[_0x368a7e(0x13f)]("value"),
            _0x3a6478 = _0x7d81f4(_0x368a7e(0x14f))[_0x368a7e(0x13f)](
              _0x368a7e(0x156)
            ),
            _0x21b13c = _0x7d81f4(_0x368a7e(0x143))[_0x368a7e(0x13f)]("value"),
            _0x1e1fc4 = {
              file: _0x13bd0f,
              token: _0x3a6478,
              convert: _0x21b13c,
            };
          _0xcee5a9[_0x368a7e(0x14b)](
            _0x368a7e(0x139),
            _0x1e1fc4[_0x368a7e(0x139)]
          ),
            _0xcee5a9[_0x368a7e(0x14b)]("token", _0x1e1fc4[_0x368a7e(0x147)]),
            _0xcee5a9[_0x368a7e(0x14b)]("convert", _0x1e1fc4[_0x368a7e(0x15a)]),
            await axios({
              method: _0x368a7e(0x13c),
              url:
                "https://ezgif.com/webp-to-mp4/" + _0x1e1fc4[_0x368a7e(0x139)],
              data: _0xcee5a9,
              headers: {
                "Content-Type":
                  "multipart/form-data\x20boundary=" +
                  _0xcee5a9[_0x368a7e(0x141)],
              },
            })
              [_0x368a7e(0x14e)](({ data: _0x4f4cee }) => {
                const _0x3c5b96 = _0x368a7e,
                  _0x2b3409 = cheerio[_0x3c5b96(0x146)](_0x4f4cee),
                  _0x2fa084 =
                    _0x3c5b96(0x148) +
                    _0x2b3409(_0x3c5b96(0x13d))[_0x3c5b96(0x13f)](
                      _0x3c5b96(0x13e)
                    );
                _0x102f46({
                  status: !![],
                  message: _0x3c5b96(0x142),
                  result: _0x2fa084,
                });
              })
              [_0x368a7e(0x14a)](_0x364741);
        })
        [_0x43b2aa(0x14a)](_0x364741);
  });
}
