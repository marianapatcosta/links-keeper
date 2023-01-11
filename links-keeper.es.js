import './assets/index.14871683.css';
import sn, { memo as _t, forwardRef as hr, useRef as Fe, useState as ie, useCallback as ae, useEffect as pr, useMemo as Xt } from "react";
var Bo = {
  prefix: "fas",
  iconName: "blog",
  icon: [512, 512, [], "f781", "M192 32c0 17.7 14.3 32 32 32c123.7 0 224 100.3 224 224c0 17.7 14.3 32 32 32s32-14.3 32-32C512 128.9 383.1 0 224 0c-17.7 0-32 14.3-32 32zm0 96c0 17.7 14.3 32 32 32c70.7 0 128 57.3 128 128c0 17.7 14.3 32 32 32s32-14.3 32-32c0-106-86-192-192-192c-17.7 0-32 14.3-32 32zM96 144c0-26.5-21.5-48-48-48S0 117.5 0 144V368c0 79.5 64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144H128v96h16c26.5 0 48 21.5 48 48s-21.5 48-48 48s-48-21.5-48-48V144z"]
}, Ho = {
  prefix: "fas",
  iconName: "pen-to-square",
  icon: [512, 512, ["edit"], "f044", "M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"]
}, ei = Ho, ti = {
  prefix: "fas",
  iconName: "share-nodes",
  icon: [448, 512, ["share-alt"], "f1e0", "M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"]
}, ni = {
  prefix: "fas",
  iconName: "user",
  icon: [448, 512, [128100, 62144], "f007", "M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]
}, Yo = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM432 256c0 79.5-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144zM288 192c0 35.3-28.7 64-64 64c-11.5 0-22.3-3-31.6-8.4c-.2 2.8-.4 5.5-.4 8.4c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-2.8 0-5.6 .1-8.4 .4c5.3 9.3 8.4 20.1 8.4 31.6z"]
}, Uo = {
  prefix: "fas",
  iconName: "floppy-disk",
  icon: [448, 512, [128190, 128426, "save"], "f0c7", "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 416c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"]
}, Vo = Uo, ri = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Wo = {
  prefix: "fas",
  iconName: "envelope",
  icon: [512, 512, [128386, 9993, 61443], "f0e0", "M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]
}, Jo = {
  prefix: "fas",
  iconName: "cart-shopping",
  icon: [576, 512, [128722, "shopping-cart"], "f07a", "M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]
}, Go = {
  prefix: "fas",
  iconName: "mobile-screen",
  icon: [384, 512, ["mobile-android-alt"], "f3cf", "M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"]
}, Ko = {
  prefix: "fas",
  iconName: "download",
  icon: [512, 512, [], "f019", "M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zM432 456c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24z"]
}, qo = {
  prefix: "fas",
  iconName: "eye-dropper",
  icon: [512, 512, ["eye-dropper-empty", "eyedropper"], "f1fb", "M341.6 29.2L240.1 130.8l-9.4-9.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-9.4-9.4L482.8 170.4c39-39 39-102.2 0-141.1s-102.2-39-141.1 0zM55.4 323.3c-15 15-23.4 35.4-23.4 56.6v42.4L5.4 462.2c-8.5 12.7-6.8 29.6 4 40.4s27.7 12.5 40.4 4L89.7 480h42.4c21.2 0 41.6-8.4 56.6-23.4L309.4 335.9l-45.3-45.3L143.4 411.3c-3 3-7.1 4.7-11.3 4.7H96V379.9c0-4.2 1.7-8.3 4.7-11.3L221.4 247.9l-45.3-45.3L55.4 323.3z"]
}, Zo = {
  prefix: "fas",
  iconName: "house",
  icon: [576, 512, [127968, 63498, 63500, "home", "home-alt", "home-lg-alt"], "f015", "M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]
}, Xo = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z"]
}, Qo = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [512, 512, [], "f078", "M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, ai = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"]
}, $o = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, es = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, ts = {
  prefix: "fas",
  iconName: "briefcase",
  icon: [512, 512, [128188], "f0b1", "M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z"]
}, ns = {
  prefix: "fas",
  iconName: "graduation-cap",
  icon: [640, 512, [127891, "mortar-board"], "f19d", "M320 32c-8.1 0-16.1 1.4-23.7 4.1L15.8 137.4C6.3 140.9 0 149.9 0 160s6.3 19.1 15.8 22.6l57.9 20.9C57.3 229.3 48 259.8 48 291.9v28.1c0 28.4-10.8 57.7-22.3 80.8c-6.5 13-13.9 25.8-22.5 37.6C0 442.7-.9 448.3 .9 453.4s6 8.9 11.2 10.2l64 16c4.2 1.1 8.7 .3 12.4-2s6.3-6.1 7.1-10.4c8.6-42.8 4.3-81.2-2.1-108.7C90.3 344.3 86 329.8 80 316.5V291.9c0-30.2 10.2-58.7 27.9-81.5c12.9-15.5 29.6-28 49.2-35.7l157-61.7c8.2-3.2 17.5 .8 20.7 9s-.8 17.5-9 20.7l-157 61.7c-12.4 4.9-23.3 12.4-32.2 21.6l159.6 57.6c7.6 2.7 15.6 4.1 23.7 4.1s16.1-1.4 23.7-4.1L624.2 182.6c9.5-3.4 15.8-12.5 15.8-22.6s-6.3-19.1-15.8-22.6L343.7 36.1C336.1 33.4 328.1 32 320 32zM128 408c0 35.3 86 72 192 72s192-36.7 192-72L496.7 262.6 354.5 314c-11.1 4-22.8 6-34.5 6s-23.5-2-34.5-6L143.3 262.6 128 408z"]
};
function Qr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function R(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qr(Object(n), !0).forEach(function(r) {
      ce(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Qt(e) {
  return Qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Qt(e);
}
function rs(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $r(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
  }
}
function as(e, t, n) {
  return t && $r(e.prototype, t), n && $r(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function ce(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function gr(e, t) {
  return os(e) || cs(e, t) || ii(e, t) || fs();
}
function Rt(e) {
  return is(e) || ss(e) || ii(e) || ls();
}
function is(e) {
  if (Array.isArray(e))
    return Jn(e);
}
function os(e) {
  if (Array.isArray(e))
    return e;
}
function ss(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function cs(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, s;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0)
        ;
    } catch (c) {
      i = !0, s = c;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw s;
      }
    }
    return r;
  }
}
function ii(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Jn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Jn(e, t);
  }
}
function Jn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ls() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fs() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var ea = function() {
}, vr = {}, oi = {}, si = null, ci = {
  mark: ea,
  measure: ea
};
try {
  typeof window < "u" && (vr = window), typeof document < "u" && (oi = document), typeof MutationObserver < "u" && (si = MutationObserver), typeof performance < "u" && (ci = performance);
} catch {
}
var us = vr.navigator || {}, ta = us.userAgent, na = ta === void 0 ? "" : ta, ze = vr, ee = oi, ra = si, Dt = ci;
ze.document;
var Oe = !!ee.documentElement && !!ee.head && typeof ee.addEventListener == "function" && typeof ee.createElement == "function", li = ~na.indexOf("MSIE") || ~na.indexOf("Trident/"), jt, Ft, zt, Bt, Ht, Me = "___FONT_AWESOME___", Gn = 16, fi = "fa", ui = "svg-inline--fa", Ke = "data-fa-i2svg", Kn = "data-fa-pseudo-element", ds = "data-fa-pseudo-element-pending", br = "data-prefix", yr = "data-icon", aa = "fontawesome-i2svg", ms = "async", hs = ["HTML", "HEAD", "STYLE", "SCRIPT"], di = function() {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
}(), $ = "classic", ne = "sharp", wr = [$, ne];
function Mt(e) {
  return new Proxy(e, {
    get: function(n, r) {
      return r in n ? n[r] : n[$];
    }
  });
}
var Et = Mt((jt = {}, ce(jt, $, {
  fa: "solid",
  fas: "solid",
  "fa-solid": "solid",
  far: "regular",
  "fa-regular": "regular",
  fal: "light",
  "fa-light": "light",
  fat: "thin",
  "fa-thin": "thin",
  fad: "duotone",
  "fa-duotone": "duotone",
  fab: "brands",
  "fa-brands": "brands",
  fak: "kit",
  "fa-kit": "kit"
}), ce(jt, ne, {
  fa: "solid",
  fass: "solid",
  "fa-solid": "solid"
}), jt)), At = Mt((Ft = {}, ce(Ft, $, {
  solid: "fas",
  regular: "far",
  light: "fal",
  thin: "fat",
  duotone: "fad",
  brands: "fab",
  kit: "fak"
}), ce(Ft, ne, {
  solid: "fass"
}), Ft)), kt = Mt((zt = {}, ce(zt, $, {
  fab: "fa-brands",
  fad: "fa-duotone",
  fak: "fa-kit",
  fal: "fa-light",
  far: "fa-regular",
  fas: "fa-solid",
  fat: "fa-thin"
}), ce(zt, ne, {
  fass: "fa-solid"
}), zt)), ps = Mt((Bt = {}, ce(Bt, $, {
  "fa-brands": "fab",
  "fa-duotone": "fad",
  "fa-kit": "fak",
  "fa-light": "fal",
  "fa-regular": "far",
  "fa-solid": "fas",
  "fa-thin": "fat"
}), ce(Bt, ne, {
  "fa-solid": "fass"
}), Bt)), gs = /fa(s|r|l|t|d|b|k|ss)?[\-\ ]/, mi = "fa-layers-text", vs = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i, bs = Mt((Ht = {}, ce(Ht, $, {
  900: "fas",
  400: "far",
  normal: "far",
  300: "fal",
  100: "fat"
}), ce(Ht, ne, {
  900: "fass"
}), Ht)), hi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ys = hi.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), ws = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Je = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, Ct = /* @__PURE__ */ new Set();
Object.keys(At[$]).map(Ct.add.bind(Ct));
Object.keys(At[ne]).map(Ct.add.bind(Ct));
var Es = [].concat(wr, Rt(Ct), ["2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Je.GROUP, Je.SWAP_OPACITY, Je.PRIMARY, Je.SECONDARY]).concat(hi.map(function(e) {
  return "".concat(e, "x");
})).concat(ys.map(function(e) {
  return "w-".concat(e);
})), bt = ze.FontAwesomeConfig || {};
function As(e) {
  var t = ee.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function ks(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (ee && typeof ee.querySelector == "function") {
  var Cs = [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]];
  Cs.forEach(function(e) {
    var t = gr(e, 2), n = t[0], r = t[1], a = ks(As(n));
    a != null && (bt[r] = a);
  });
}
var pi = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fi,
  replacementClass: ui,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
bt.familyPrefix && (bt.cssPrefix = bt.familyPrefix);
var ot = R(R({}, pi), bt);
ot.autoReplaceSvg || (ot.observeMutations = !1);
var I = {};
Object.keys(pi).forEach(function(e) {
  Object.defineProperty(I, e, {
    enumerable: !0,
    set: function(n) {
      ot[e] = n, yt.forEach(function(r) {
        return r(I);
      });
    },
    get: function() {
      return ot[e];
    }
  });
});
Object.defineProperty(I, "familyPrefix", {
  enumerable: !0,
  set: function(t) {
    ot.cssPrefix = t, yt.forEach(function(n) {
      return n(I);
    });
  },
  get: function() {
    return ot.cssPrefix;
  }
});
ze.FontAwesomeConfig = I;
var yt = [];
function Ss(e) {
  return yt.push(e), function() {
    yt.splice(yt.indexOf(e), 1);
  };
}
var Ne = Gn, Se = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function xs(e) {
  if (!(!e || !Oe)) {
    var t = ee.createElement("style");
    t.setAttribute("type", "text/css"), t.innerHTML = e;
    for (var n = ee.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a], o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return ee.head.insertBefore(t, r), e;
  }
}
var Ts = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function St() {
  for (var e = 12, t = ""; e-- > 0; )
    t += Ts[Math.random() * 62 | 0];
  return t;
}
function ut(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Er(e) {
  return e.classList ? ut(e.classList) : (e.getAttribute("class") || "").split(" ").filter(function(t) {
    return t;
  });
}
function gi(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function _s(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, '="').concat(gi(e[n]), '" ');
  }, "").trim();
}
function cn(e) {
  return Object.keys(e || {}).reduce(function(t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Ar(e) {
  return e.size !== Se.size || e.x !== Se.x || e.y !== Se.y || e.rotate !== Se.rotate || e.flipX || e.flipY;
}
function Rs(e) {
  var t = e.transform, n = e.containerWidth, r = e.iconWidth, a = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), o = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(o, " ").concat(s)
  }, u = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: a,
    inner: c,
    path: u
  };
}
function Ms(e) {
  var t = e.transform, n = e.width, r = n === void 0 ? Gn : n, a = e.height, i = a === void 0 ? Gn : a, o = e.startCentered, s = o === void 0 ? !1 : o, c = "";
  return s && li ? c += "translate(".concat(t.x / Ne - r / 2, "em, ").concat(t.y / Ne - i / 2, "em) ") : s ? c += "translate(calc(-50% + ".concat(t.x / Ne, "em), calc(-50% + ").concat(t.y / Ne, "em)) ") : c += "translate(".concat(t.x / Ne, "em, ").concat(t.y / Ne, "em) "), c += "scale(".concat(t.size / Ne * (t.flipX ? -1 : 1), ", ").concat(t.size / Ne * (t.flipY ? -1 : 1), ") "), c += "rotate(".concat(t.rotate, "deg) "), c;
}
var Is = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function vi() {
  var e = fi, t = ui, n = I.cssPrefix, r = I.replacementClass, a = Is;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"), o = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    a = a.replace(i, ".".concat(n, "-")).replace(o, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return a;
}
var ia = !1;
function kn() {
  I.autoAddCss && !ia && (xs(vi()), ia = !0);
}
var Ps = {
  mixout: function() {
    return {
      dom: {
        css: vi,
        insertCss: kn
      }
    };
  },
  hooks: function() {
    return {
      beforeDOMElementCreation: function() {
        kn();
      },
      beforeI2svg: function() {
        kn();
      }
    };
  }
}, Ie = ze || {};
Ie[Me] || (Ie[Me] = {});
Ie[Me].styles || (Ie[Me].styles = {});
Ie[Me].hooks || (Ie[Me].hooks = {});
Ie[Me].shims || (Ie[Me].shims = []);
var ke = Ie[Me], bi = [], Os = function e() {
  ee.removeEventListener("DOMContentLoaded", e), $t = 1, bi.map(function(t) {
    return t();
  });
}, $t = !1;
Oe && ($t = (ee.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(ee.readyState), $t || ee.addEventListener("DOMContentLoaded", Os));
function Ls(e) {
  !Oe || ($t ? setTimeout(e, 0) : bi.push(e));
}
function It(e) {
  var t = e.tag, n = e.attributes, r = n === void 0 ? {} : n, a = e.children, i = a === void 0 ? [] : a;
  return typeof e == "string" ? gi(e) : "<".concat(t, " ").concat(_s(r), ">").concat(i.map(It).join(""), "</").concat(t, ">");
}
function oa(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ns = function(t, n) {
  return function(r, a, i, o) {
    return t.call(n, r, a, i, o);
  };
}, Cn = function(t, n, r, a) {
  var i = Object.keys(t), o = i.length, s = a !== void 0 ? Ns(n, a) : n, c, u, l;
  for (r === void 0 ? (c = 1, l = t[i[0]]) : (c = 0, l = r); c < o; c++)
    u = i[c], l = s(l, t[u], u, t);
  return l;
};
function Ds(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((a & 1023) << 10) + (i & 1023) + 65536) : (t.push(a), n--);
    } else
      t.push(a);
  }
  return t;
}
function qn(e) {
  var t = Ds(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function js(e, t) {
  var n = e.length, r = e.charCodeAt(t), a;
  return r >= 55296 && r <= 56319 && n > t + 1 && (a = e.charCodeAt(t + 1), a >= 56320 && a <= 57343) ? (r - 55296) * 1024 + a - 56320 + 65536 : r;
}
function sa(e) {
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n], a = !!r.icon;
    return a ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Zn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = n.skipHooks, a = r === void 0 ? !1 : r, i = sa(t);
  typeof ke.hooks.addPack == "function" && !a ? ke.hooks.addPack(e, sa(t)) : ke.styles[e] = R(R({}, ke.styles[e] || {}), i), e === "fas" && Zn("fa", t);
}
var Yt, Ut, Vt, nt = ke.styles, Fs = ke.shims, zs = (Yt = {}, ce(Yt, $, Object.values(kt[$])), ce(Yt, ne, Object.values(kt[ne])), Yt), kr = null, yi = {}, wi = {}, Ei = {}, Ai = {}, ki = {}, Bs = (Ut = {}, ce(Ut, $, Object.keys(Et[$])), ce(Ut, ne, Object.keys(Et[ne])), Ut);
function Hs(e) {
  return ~Es.indexOf(e);
}
function Ys(e, t) {
  var n = t.split("-"), r = n[0], a = n.slice(1).join("-");
  return r === e && a !== "" && !Hs(a) ? a : null;
}
var Ci = function() {
  var t = function(i) {
    return Cn(nt, function(o, s, c) {
      return o[c] = Cn(s, i, {}), o;
    }, {});
  };
  yi = t(function(a, i, o) {
    if (i[3] && (a[i[3]] = o), i[2]) {
      var s = i[2].filter(function(c) {
        return typeof c == "number";
      });
      s.forEach(function(c) {
        a[c.toString(16)] = o;
      });
    }
    return a;
  }), wi = t(function(a, i, o) {
    if (a[o] = o, i[2]) {
      var s = i[2].filter(function(c) {
        return typeof c == "string";
      });
      s.forEach(function(c) {
        a[c] = o;
      });
    }
    return a;
  }), ki = t(function(a, i, o) {
    var s = i[2];
    return a[o] = o, s.forEach(function(c) {
      a[c] = o;
    }), a;
  });
  var n = "far" in nt || I.autoFetchSvg, r = Cn(Fs, function(a, i) {
    var o = i[0], s = i[1], c = i[2];
    return s === "far" && !n && (s = "fas"), typeof o == "string" && (a.names[o] = {
      prefix: s,
      iconName: c
    }), typeof o == "number" && (a.unicodes[o.toString(16)] = {
      prefix: s,
      iconName: c
    }), a;
  }, {
    names: {},
    unicodes: {}
  });
  Ei = r.names, Ai = r.unicodes, kr = ln(I.styleDefault, {
    family: I.familyDefault
  });
};
Ss(function(e) {
  kr = ln(e.styleDefault, {
    family: I.familyDefault
  });
});
Ci();
function Cr(e, t) {
  return (yi[e] || {})[t];
}
function Us(e, t) {
  return (wi[e] || {})[t];
}
function Ge(e, t) {
  return (ki[e] || {})[t];
}
function Si(e) {
  return Ei[e] || {
    prefix: null,
    iconName: null
  };
}
function Vs(e) {
  var t = Ai[e], n = Cr("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Be() {
  return kr;
}
var Sr = function() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function ln(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.family, r = n === void 0 ? $ : n, a = Et[r][e], i = At[r][e] || At[r][a], o = e in ke.styles ? e : null;
  return i || o || null;
}
var ca = (Vt = {}, ce(Vt, $, Object.keys(kt[$])), ce(Vt, ne, Object.keys(kt[ne])), Vt);
function fn(e) {
  var t, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.skipLookups, a = r === void 0 ? !1 : r, i = (t = {}, ce(t, $, "".concat(I.cssPrefix, "-").concat($)), ce(t, ne, "".concat(I.cssPrefix, "-").concat(ne)), t), o = null, s = $;
  (e.includes(i[$]) || e.some(function(u) {
    return ca[$].includes(u);
  })) && (s = $), (e.includes(i[ne]) || e.some(function(u) {
    return ca[ne].includes(u);
  })) && (s = ne);
  var c = e.reduce(function(u, l) {
    var d = Ys(I.cssPrefix, l);
    if (nt[l] ? (l = zs[s].includes(l) ? ps[s][l] : l, o = l, u.prefix = l) : Bs[s].indexOf(l) > -1 ? (o = l, u.prefix = ln(l, {
      family: s
    })) : d ? u.iconName = d : l !== I.replacementClass && l !== i[$] && l !== i[ne] && u.rest.push(l), !a && u.prefix && u.iconName) {
      var m = o === "fa" ? Si(u.iconName) : {}, h = Ge(u.prefix, u.iconName);
      m.prefix && (o = null), u.iconName = m.iconName || h || u.iconName, u.prefix = m.prefix || u.prefix, u.prefix === "far" && !nt.far && nt.fas && !I.autoFetchSvg && (u.prefix = "fas");
    }
    return u;
  }, Sr());
  return (e.includes("fa-brands") || e.includes("fab")) && (c.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (c.prefix = "fad"), !c.prefix && s === ne && (nt.fass || I.autoFetchSvg) && (c.prefix = "fass", c.iconName = Ge(c.prefix, c.iconName) || c.iconName), (c.prefix === "fa" || o === "fa") && (c.prefix = Be() || "fas"), c;
}
var Ws = /* @__PURE__ */ function() {
  function e() {
    rs(this, e), this.definitions = {};
  }
  return as(e, [{
    key: "add",
    value: function() {
      for (var n = this, r = arguments.length, a = new Array(r), i = 0; i < r; i++)
        a[i] = arguments[i];
      var o = a.reduce(this._pullDefinitions, {});
      Object.keys(o).forEach(function(s) {
        n.definitions[s] = R(R({}, n.definitions[s] || {}), o[s]), Zn(s, o[s]);
        var c = kt[$][s];
        c && Zn(c, o[s]), Ci();
      });
    }
  }, {
    key: "reset",
    value: function() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function(n, r) {
      var a = r.prefix && r.iconName && r.icon ? {
        0: r
      } : r;
      return Object.keys(a).map(function(i) {
        var o = a[i], s = o.prefix, c = o.iconName, u = o.icon, l = u[2];
        n[s] || (n[s] = {}), l.length > 0 && l.forEach(function(d) {
          typeof d == "string" && (n[s][d] = u);
        }), n[s][c] = u;
      }), n;
    }
  }]), e;
}(), la = [], rt = {}, it = {}, Js = Object.keys(it);
function Gs(e, t) {
  var n = t.mixoutsTo;
  return la = e, rt = {}, Object.keys(it).forEach(function(r) {
    Js.indexOf(r) === -1 && delete it[r];
  }), la.forEach(function(r) {
    var a = r.mixout ? r.mixout() : {};
    if (Object.keys(a).forEach(function(o) {
      typeof a[o] == "function" && (n[o] = a[o]), Qt(a[o]) === "object" && Object.keys(a[o]).forEach(function(s) {
        n[o] || (n[o] = {}), n[o][s] = a[o][s];
      });
    }), r.hooks) {
      var i = r.hooks();
      Object.keys(i).forEach(function(o) {
        rt[o] || (rt[o] = []), rt[o].push(i[o]);
      });
    }
    r.provides && r.provides(it);
  }), n;
}
function Xn(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    r[a - 2] = arguments[a];
  var i = rt[e] || [];
  return i.forEach(function(o) {
    t = o.apply(null, [t].concat(r));
  }), t;
}
function qe(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var a = rt[e] || [];
  a.forEach(function(i) {
    i.apply(null, n);
  });
}
function Pe() {
  var e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return it[e] ? it[e].apply(null, t) : void 0;
}
function Qn(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName, n = e.prefix || Be();
  if (!!t)
    return t = Ge(n, t) || t, oa(xi.definitions, n, t) || oa(ke.styles, n, t);
}
var xi = new Ws(), Ks = function() {
  I.autoReplaceSvg = !1, I.observeMutations = !1, qe("noAuto");
}, qs = {
  i2svg: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Oe ? (qe("beforeI2svg", t), Pe("pseudoElements2svg", t), Pe("i2svg", t)) : Promise.reject("Operation requires a DOM of some kind.");
  },
  watch: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot;
    I.autoReplaceSvg === !1 && (I.autoReplaceSvg = !0), I.observeMutations = !0, Ls(function() {
      Xs({
        autoReplaceSvgRoot: n
      }), qe("watch", t);
    });
  }
}, Zs = {
  icon: function(t) {
    if (t === null)
      return null;
    if (Qt(t) === "object" && t.prefix && t.iconName)
      return {
        prefix: t.prefix,
        iconName: Ge(t.prefix, t.iconName) || t.iconName
      };
    if (Array.isArray(t) && t.length === 2) {
      var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1], r = ln(t[0]);
      return {
        prefix: r,
        iconName: Ge(r, n) || n
      };
    }
    if (typeof t == "string" && (t.indexOf("".concat(I.cssPrefix, "-")) > -1 || t.match(gs))) {
      var a = fn(t.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: a.prefix || Be(),
        iconName: Ge(a.prefix, a.iconName) || a.iconName
      };
    }
    if (typeof t == "string") {
      var i = Be();
      return {
        prefix: i,
        iconName: Ge(i, t) || t
      };
    }
  }
}, ve = {
  noAuto: Ks,
  config: I,
  dom: qs,
  parse: Zs,
  library: xi,
  findIconDefinition: Qn,
  toHtml: It
}, Xs = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = t.autoReplaceSvgRoot, r = n === void 0 ? ee : n;
  (Object.keys(ke.styles).length > 0 || I.autoFetchSvg) && Oe && I.autoReplaceSvg && ve.dom.i2svg({
    node: r
  });
};
function un(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map(function(r) {
        return It(r);
      });
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!!Oe) {
        var r = ee.createElement("div");
        return r.innerHTML = e.html, r.children;
      }
    }
  }), e;
}
function Qs(e) {
  var t = e.children, n = e.main, r = e.mask, a = e.attributes, i = e.styles, o = e.transform;
  if (Ar(o) && n.found && !r.found) {
    var s = n.width, c = n.height, u = {
      x: s / c / 2,
      y: 0.5
    };
    a.style = cn(R(R({}, i), {}, {
      "transform-origin": "".concat(u.x + o.x / 16, "em ").concat(u.y + o.y / 16, "em")
    }));
  }
  return [{
    tag: "svg",
    attributes: a,
    children: t
  }];
}
function $s(e) {
  var t = e.prefix, n = e.iconName, r = e.children, a = e.attributes, i = e.symbol, o = i === !0 ? "".concat(t, "-").concat(I.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: R(R({}, a), {}, {
        id: o
      }),
      children: r
    }]
  }];
}
function xr(e) {
  var t = e.icons, n = t.main, r = t.mask, a = e.prefix, i = e.iconName, o = e.transform, s = e.symbol, c = e.title, u = e.maskId, l = e.titleId, d = e.extra, m = e.watchable, h = m === void 0 ? !1 : m, w = r.found ? r : n, b = w.width, x = w.height, g = a === "fak", k = [I.replacementClass, i ? "".concat(I.cssPrefix, "-").concat(i) : ""].filter(function(X) {
    return d.classes.indexOf(X) === -1;
  }).filter(function(X) {
    return X !== "" || !!X;
  }).concat(d.classes).join(" "), v = {
    children: [],
    attributes: R(R({}, d.attributes), {}, {
      "data-prefix": a,
      "data-icon": i,
      class: k,
      role: d.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(b, " ").concat(x)
    })
  }, E = g && !~d.classes.indexOf("fa-fw") ? {
    width: "".concat(b / x * 16 * 0.0625, "em")
  } : {};
  h && (v.attributes[Ke] = ""), c && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(l || St())
    },
    children: [c]
  }), delete v.attributes.title);
  var p = R(R({}, v), {}, {
    prefix: a,
    iconName: i,
    main: n,
    mask: r,
    maskId: u,
    transform: o,
    symbol: s,
    styles: R(R({}, E), d.styles)
  }), N = r.found && n.found ? Pe("generateAbstractMask", p) || {
    children: [],
    attributes: {}
  } : Pe("generateAbstractIcon", p) || {
    children: [],
    attributes: {}
  }, U = N.children, te = N.attributes;
  return p.children = U, p.attributes = te, s ? $s(p) : Qs(p);
}
function fa(e) {
  var t = e.content, n = e.width, r = e.height, a = e.transform, i = e.title, o = e.extra, s = e.watchable, c = s === void 0 ? !1 : s, u = R(R(R({}, o.attributes), i ? {
    title: i
  } : {}), {}, {
    class: o.classes.join(" ")
  });
  c && (u[Ke] = "");
  var l = R({}, o.styles);
  Ar(a) && (l.transform = Ms({
    transform: a,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  var d = cn(l);
  d.length > 0 && (u.style = d);
  var m = [];
  return m.push({
    tag: "span",
    attributes: u,
    children: [t]
  }), i && m.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), m;
}
function ec(e) {
  var t = e.content, n = e.title, r = e.extra, a = R(R(R({}, r.attributes), n ? {
    title: n
  } : {}), {}, {
    class: r.classes.join(" ")
  }), i = cn(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return o.push({
    tag: "span",
    attributes: a,
    children: [t]
  }), n && o.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), o;
}
var Sn = ke.styles;
function $n(e) {
  var t = e[0], n = e[1], r = e.slice(4), a = gr(r, 1), i = a[0], o = null;
  return Array.isArray(i) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(I.cssPrefix, "-").concat(Je.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(I.cssPrefix, "-").concat(Je.SECONDARY),
        fill: "currentColor",
        d: i[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(I.cssPrefix, "-").concat(Je.PRIMARY),
        fill: "currentColor",
        d: i[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: i
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
var tc = {
  found: !1,
  width: 512,
  height: 512
};
function nc(e, t) {
  !di && !I.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function er(e, t) {
  var n = t;
  return t === "fa" && I.styleDefault !== null && (t = Be()), new Promise(function(r, a) {
    if (Pe("missingIconAbstract"), n === "fa") {
      var i = Si(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Sn[t] && Sn[t][e]) {
      var o = Sn[t][e];
      return r($n(o));
    }
    nc(e, t), r(R(R({}, tc), {}, {
      icon: I.showMissingIcons && e ? Pe("missingIconAbstract") || {} : {}
    }));
  });
}
var ua = function() {
}, tr = I.measurePerformance && Dt && Dt.mark && Dt.measure ? Dt : {
  mark: ua,
  measure: ua
}, vt = 'FA "6.2.1"', rc = function(t) {
  return tr.mark("".concat(vt, " ").concat(t, " begins")), function() {
    return Ti(t);
  };
}, Ti = function(t) {
  tr.mark("".concat(vt, " ").concat(t, " ends")), tr.measure("".concat(vt, " ").concat(t), "".concat(vt, " ").concat(t, " begins"), "".concat(vt, " ").concat(t, " ends"));
}, Tr = {
  begin: rc,
  end: Ti
}, qt = function() {
};
function da(e) {
  var t = e.getAttribute ? e.getAttribute(Ke) : null;
  return typeof t == "string";
}
function ac(e) {
  var t = e.getAttribute ? e.getAttribute(br) : null, n = e.getAttribute ? e.getAttribute(yr) : null;
  return t && n;
}
function ic(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(I.replacementClass);
}
function oc() {
  if (I.autoReplaceSvg === !0)
    return Zt.replace;
  var e = Zt[I.autoReplaceSvg];
  return e || Zt.replace;
}
function sc(e) {
  return ee.createElementNS("http://www.w3.org/2000/svg", e);
}
function cc(e) {
  return ee.createElement(e);
}
function _i(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = t.ceFn, r = n === void 0 ? e.tag === "svg" ? sc : cc : n;
  if (typeof e == "string")
    return ee.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function(o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return i.forEach(function(o) {
    a.appendChild(_i(o, {
      ceFn: r
    }));
  }), a;
}
function lc(e) {
  var t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
var Zt = {
  replace: function(t) {
    var n = t[0];
    if (n.parentNode)
      if (t[1].forEach(function(a) {
        n.parentNode.insertBefore(_i(a), n);
      }), n.getAttribute(Ke) === null && I.keepOriginalSource) {
        var r = ee.createComment(lc(n));
        n.parentNode.replaceChild(r, n);
      } else
        n.remove();
  },
  nest: function(t) {
    var n = t[0], r = t[1];
    if (~Er(n).indexOf(I.replacementClass))
      return Zt.replace(t);
    var a = new RegExp("".concat(I.cssPrefix, "-.*"));
    if (delete r[0].attributes.id, r[0].attributes.class) {
      var i = r[0].attributes.class.split(" ").reduce(function(s, c) {
        return c === I.replacementClass || c.match(a) ? s.toSvg.push(c) : s.toNode.push(c), s;
      }, {
        toNode: [],
        toSvg: []
      });
      r[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? n.removeAttribute("class") : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function(s) {
      return It(s);
    }).join(`
`);
    n.setAttribute(Ke, ""), n.innerHTML = o;
  }
};
function ma(e) {
  e();
}
function Ri(e, t) {
  var n = typeof t == "function" ? t : qt;
  if (e.length === 0)
    n();
  else {
    var r = ma;
    I.mutateApproach === ms && (r = ze.requestAnimationFrame || ma), r(function() {
      var a = oc(), i = Tr.begin("mutate");
      e.map(a), i(), n();
    });
  }
}
var _r = !1;
function Mi() {
  _r = !0;
}
function nr() {
  _r = !1;
}
var en = null;
function ha(e) {
  if (!!ra && !!I.observeMutations) {
    var t = e.treeCallback, n = t === void 0 ? qt : t, r = e.nodeCallback, a = r === void 0 ? qt : r, i = e.pseudoElementsCallback, o = i === void 0 ? qt : i, s = e.observeMutationsRoot, c = s === void 0 ? ee : s;
    en = new ra(function(u) {
      if (!_r) {
        var l = Be();
        ut(u).forEach(function(d) {
          if (d.type === "childList" && d.addedNodes.length > 0 && !da(d.addedNodes[0]) && (I.searchPseudoElements && o(d.target), n(d.target)), d.type === "attributes" && d.target.parentNode && I.searchPseudoElements && o(d.target.parentNode), d.type === "attributes" && da(d.target) && ~ws.indexOf(d.attributeName))
            if (d.attributeName === "class" && ac(d.target)) {
              var m = fn(Er(d.target)), h = m.prefix, w = m.iconName;
              d.target.setAttribute(br, h || l), w && d.target.setAttribute(yr, w);
            } else
              ic(d.target) && a(d.target);
        });
      }
    }), Oe && en.observe(c, {
      childList: !0,
      attributes: !0,
      characterData: !0,
      subtree: !0
    });
  }
}
function fc() {
  !en || en.disconnect();
}
function uc(e) {
  var t = e.getAttribute("style"), n = [];
  return t && (n = t.split(";").reduce(function(r, a) {
    var i = a.split(":"), o = i[0], s = i.slice(1);
    return o && s.length > 0 && (r[o] = s.join(":").trim()), r;
  }, {})), n;
}
function dc(e) {
  var t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "", a = fn(Er(e));
  return a.prefix || (a.prefix = Be()), t && n && (a.prefix = t, a.iconName = n), a.iconName && a.prefix || (a.prefix && r.length > 0 && (a.iconName = Us(a.prefix, e.innerText) || Cr(a.prefix, qn(e.innerText))), !a.iconName && I.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (a.iconName = e.firstChild.data)), a;
}
function mc(e) {
  var t = ut(e.attributes).reduce(function(a, i) {
    return a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a;
  }, {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return I.autoA11y && (n ? t["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(r || St()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function hc() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Se,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function pa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  }, n = dc(e), r = n.iconName, a = n.prefix, i = n.rest, o = mc(e), s = Xn("parseNodeAttributes", {}, e), c = t.styleParser ? uc(e) : [];
  return R({
    iconName: r,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: a,
    transform: Se,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: c,
      attributes: o
    }
  }, s);
}
var pc = ke.styles;
function Ii(e) {
  var t = I.autoReplaceSvg === "nest" ? pa(e, {
    styleParser: !1
  }) : pa(e);
  return ~t.extra.classes.indexOf(mi) ? Pe("generateLayersText", e, t) : Pe("generateSvgReplacementMutation", e, t);
}
var He = /* @__PURE__ */ new Set();
wr.map(function(e) {
  He.add("fa-".concat(e));
});
Object.keys(Et[$]).map(He.add.bind(He));
Object.keys(Et[ne]).map(He.add.bind(He));
He = Rt(He);
function ga(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Oe)
    return Promise.resolve();
  var n = ee.documentElement.classList, r = function(d) {
    return n.add("".concat(aa, "-").concat(d));
  }, a = function(d) {
    return n.remove("".concat(aa, "-").concat(d));
  }, i = I.autoFetchSvg ? He : wr.map(function(l) {
    return "fa-".concat(l);
  }).concat(Object.keys(pc));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(mi, ":not([").concat(Ke, "])")].concat(i.map(function(l) {
    return ".".concat(l, ":not([").concat(Ke, "])");
  })).join(", ");
  if (o.length === 0)
    return Promise.resolve();
  var s = [];
  try {
    s = ut(e.querySelectorAll(o));
  } catch {
  }
  if (s.length > 0)
    r("pending"), a("complete");
  else
    return Promise.resolve();
  var c = Tr.begin("onTree"), u = s.reduce(function(l, d) {
    try {
      var m = Ii(d);
      m && l.push(m);
    } catch (h) {
      di || h.name === "MissingIcon" && console.error(h);
    }
    return l;
  }, []);
  return new Promise(function(l, d) {
    Promise.all(u).then(function(m) {
      Ri(m, function() {
        r("active"), r("complete"), a("pending"), typeof t == "function" && t(), c(), l();
      });
    }).catch(function(m) {
      c(), d(m);
    });
  });
}
function gc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ii(e).then(function(n) {
    n && Ri([n], t);
  });
}
function vc(e) {
  return function(t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = (t || {}).icon ? t : Qn(t || {}), a = n.mask;
    return a && (a = (a || {}).icon ? a : Qn(a || {})), e(r, R(R({}, n), {}, {
      mask: a
    }));
  };
}
var bc = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = n.transform, a = r === void 0 ? Se : r, i = n.symbol, o = i === void 0 ? !1 : i, s = n.mask, c = s === void 0 ? null : s, u = n.maskId, l = u === void 0 ? null : u, d = n.title, m = d === void 0 ? null : d, h = n.titleId, w = h === void 0 ? null : h, b = n.classes, x = b === void 0 ? [] : b, g = n.attributes, k = g === void 0 ? {} : g, v = n.styles, E = v === void 0 ? {} : v;
  if (!!t) {
    var p = t.prefix, N = t.iconName, U = t.icon;
    return un(R({
      type: "icon"
    }, t), function() {
      return qe("beforeDOMElementCreation", {
        iconDefinition: t,
        params: n
      }), I.autoA11y && (m ? k["aria-labelledby"] = "".concat(I.replacementClass, "-title-").concat(w || St()) : (k["aria-hidden"] = "true", k.focusable = "false")), xr({
        icons: {
          main: $n(U),
          mask: c ? $n(c.icon) : {
            found: !1,
            width: null,
            height: null,
            icon: {}
          }
        },
        prefix: p,
        iconName: N,
        transform: R(R({}, Se), a),
        symbol: o,
        title: m,
        maskId: l,
        titleId: w,
        extra: {
          attributes: k,
          styles: E,
          classes: x
        }
      });
    });
  }
}, yc = {
  mixout: function() {
    return {
      icon: vc(bc)
    };
  },
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.treeCallback = ga, n.nodeCallback = gc, n;
      }
    };
  },
  provides: function(t) {
    t.i2svg = function(n) {
      var r = n.node, a = r === void 0 ? ee : r, i = n.callback, o = i === void 0 ? function() {
      } : i;
      return ga(a, o);
    }, t.generateSvgReplacementMutation = function(n, r) {
      var a = r.iconName, i = r.title, o = r.titleId, s = r.prefix, c = r.transform, u = r.symbol, l = r.mask, d = r.maskId, m = r.extra;
      return new Promise(function(h, w) {
        Promise.all([er(a, s), l.iconName ? er(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then(function(b) {
          var x = gr(b, 2), g = x[0], k = x[1];
          h([n, xr({
            icons: {
              main: g,
              mask: k
            },
            prefix: s,
            iconName: a,
            transform: c,
            symbol: u,
            maskId: d,
            title: i,
            titleId: o,
            extra: m,
            watchable: !0
          })]);
        }).catch(w);
      });
    }, t.generateAbstractIcon = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.transform, s = n.styles, c = cn(s);
      c.length > 0 && (a.style = c);
      var u;
      return Ar(o) && (u = Pe("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), r.push(u || i.icon), {
        children: r,
        attributes: a
      };
    };
  }
}, wc = {
  mixout: function() {
    return {
      layer: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.classes, i = a === void 0 ? [] : a;
        return un({
          type: "layer"
        }, function() {
          qe("beforeDOMElementCreation", {
            assembler: n,
            params: r
          });
          var o = [];
          return n(function(s) {
            Array.isArray(s) ? s.map(function(c) {
              o = o.concat(c.abstract);
            }) : o = o.concat(s.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(I.cssPrefix, "-layers")].concat(Rt(i)).join(" ")
            },
            children: o
          }];
        });
      }
    };
  }
}, Ec = {
  mixout: function() {
    return {
      counter: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.title, i = a === void 0 ? null : a, o = r.classes, s = o === void 0 ? [] : o, c = r.attributes, u = c === void 0 ? {} : c, l = r.styles, d = l === void 0 ? {} : l;
        return un({
          type: "counter",
          content: n
        }, function() {
          return qe("beforeDOMElementCreation", {
            content: n,
            params: r
          }), ec({
            content: n.toString(),
            title: i,
            extra: {
              attributes: u,
              styles: d,
              classes: ["".concat(I.cssPrefix, "-layers-counter")].concat(Rt(s))
            }
          });
        });
      }
    };
  }
}, Ac = {
  mixout: function() {
    return {
      text: function(n) {
        var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = r.transform, i = a === void 0 ? Se : a, o = r.title, s = o === void 0 ? null : o, c = r.classes, u = c === void 0 ? [] : c, l = r.attributes, d = l === void 0 ? {} : l, m = r.styles, h = m === void 0 ? {} : m;
        return un({
          type: "text",
          content: n
        }, function() {
          return qe("beforeDOMElementCreation", {
            content: n,
            params: r
          }), fa({
            content: n,
            transform: R(R({}, Se), i),
            title: s,
            extra: {
              attributes: d,
              styles: h,
              classes: ["".concat(I.cssPrefix, "-layers-text")].concat(Rt(u))
            }
          });
        });
      }
    };
  },
  provides: function(t) {
    t.generateLayersText = function(n, r) {
      var a = r.title, i = r.transform, o = r.extra, s = null, c = null;
      if (li) {
        var u = parseInt(getComputedStyle(n).fontSize, 10), l = n.getBoundingClientRect();
        s = l.width / u, c = l.height / u;
      }
      return I.autoA11y && !a && (o.attributes["aria-hidden"] = "true"), Promise.resolve([n, fa({
        content: n.innerHTML,
        width: s,
        height: c,
        transform: i,
        title: a,
        extra: o,
        watchable: !0
      })]);
    };
  }
}, kc = new RegExp('"', "ug"), va = [1105920, 1112319];
function Cc(e) {
  var t = e.replace(kc, ""), n = js(t, 0), r = n >= va[0] && n <= va[1], a = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: qn(a ? t[0] : t),
    isSecondary: r || a
  };
}
function ba(e, t) {
  var n = "".concat(ds).concat(t.replace(":", "-"));
  return new Promise(function(r, a) {
    if (e.getAttribute(n) !== null)
      return r();
    var i = ut(e.children), o = i.filter(function(U) {
      return U.getAttribute(Kn) === t;
    })[0], s = ze.getComputedStyle(e, t), c = s.getPropertyValue("font-family").match(vs), u = s.getPropertyValue("font-weight"), l = s.getPropertyValue("content");
    if (o && !c)
      return e.removeChild(o), r();
    if (c && l !== "none" && l !== "") {
      var d = s.getPropertyValue("content"), m = ~["Sharp"].indexOf(c[2]) ? ne : $, h = ~["Solid", "Regular", "Light", "Thin", "Duotone", "Brands", "Kit"].indexOf(c[2]) ? At[m][c[2].toLowerCase()] : bs[m][u], w = Cc(d), b = w.value, x = w.isSecondary, g = c[0].startsWith("FontAwesome"), k = Cr(h, b), v = k;
      if (g) {
        var E = Vs(b);
        E.iconName && E.prefix && (k = E.iconName, h = E.prefix);
      }
      if (k && !x && (!o || o.getAttribute(br) !== h || o.getAttribute(yr) !== v)) {
        e.setAttribute(n, v), o && e.removeChild(o);
        var p = hc(), N = p.extra;
        N.attributes[Kn] = t, er(k, h).then(function(U) {
          var te = xr(R(R({}, p), {}, {
            icons: {
              main: U,
              mask: Sr()
            },
            prefix: h,
            iconName: v,
            extra: N,
            watchable: !0
          })), X = ee.createElement("svg");
          t === "::before" ? e.insertBefore(X, e.firstChild) : e.appendChild(X), X.outerHTML = te.map(function(oe) {
            return It(oe);
          }).join(`
`), e.removeAttribute(n), r();
        }).catch(a);
      } else
        r();
    } else
      r();
  });
}
function Sc(e) {
  return Promise.all([ba(e, "::before"), ba(e, "::after")]);
}
function xc(e) {
  return e.parentNode !== document.head && !~hs.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Kn) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function ya(e) {
  if (!!Oe)
    return new Promise(function(t, n) {
      var r = ut(e.querySelectorAll("*")).filter(xc).map(Sc), a = Tr.begin("searchPseudoElements");
      Mi(), Promise.all(r).then(function() {
        a(), nr(), t();
      }).catch(function() {
        a(), nr(), n();
      });
    });
}
var Tc = {
  hooks: function() {
    return {
      mutationObserverCallbacks: function(n) {
        return n.pseudoElementsCallback = ya, n;
      }
    };
  },
  provides: function(t) {
    t.pseudoElements2svg = function(n) {
      var r = n.node, a = r === void 0 ? ee : r;
      I.searchPseudoElements && ya(a);
    };
  }
}, wa = !1, _c = {
  mixout: function() {
    return {
      dom: {
        unwatch: function() {
          Mi(), wa = !0;
        }
      }
    };
  },
  hooks: function() {
    return {
      bootstrap: function() {
        ha(Xn("mutationObserverCallbacks", {}));
      },
      noAuto: function() {
        fc();
      },
      watch: function(n) {
        var r = n.observeMutationsRoot;
        wa ? nr() : ha(Xn("mutationObserverCallbacks", {
          observeMutationsRoot: r
        }));
      }
    };
  }
}, Ea = function(t) {
  var n = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return t.toLowerCase().split(" ").reduce(function(r, a) {
    var i = a.toLowerCase().split("-"), o = i[0], s = i.slice(1).join("-");
    if (o && s === "h")
      return r.flipX = !0, r;
    if (o && s === "v")
      return r.flipY = !0, r;
    if (s = parseFloat(s), isNaN(s))
      return r;
    switch (o) {
      case "grow":
        r.size = r.size + s;
        break;
      case "shrink":
        r.size = r.size - s;
        break;
      case "left":
        r.x = r.x - s;
        break;
      case "right":
        r.x = r.x + s;
        break;
      case "up":
        r.y = r.y - s;
        break;
      case "down":
        r.y = r.y + s;
        break;
      case "rotate":
        r.rotate = r.rotate + s;
        break;
    }
    return r;
  }, n);
}, Rc = {
  mixout: function() {
    return {
      parse: {
        transform: function(n) {
          return Ea(n);
        }
      }
    };
  },
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-transform");
        return a && (n.transform = Ea(a)), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractTransformGrouping = function(n) {
      var r = n.main, a = n.transform, i = n.containerWidth, o = n.iconWidth, s = {
        transform: "translate(".concat(i / 2, " 256)")
      }, c = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "), u = "scale(".concat(a.size / 16 * (a.flipX ? -1 : 1), ", ").concat(a.size / 16 * (a.flipY ? -1 : 1), ") "), l = "rotate(".concat(a.rotate, " 0 0)"), d = {
        transform: "".concat(c, " ").concat(u, " ").concat(l)
      }, m = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, h = {
        outer: s,
        inner: d,
        path: m
      };
      return {
        tag: "g",
        attributes: R({}, h.outer),
        children: [{
          tag: "g",
          attributes: R({}, h.inner),
          children: [{
            tag: r.icon.tag,
            children: r.icon.children,
            attributes: R(R({}, r.icon.attributes), h.path)
          }]
        }]
      };
    };
  }
}, xn = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Aa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function Mc(e) {
  return e.tag === "g" ? e.children : [e];
}
var Ic = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-mask"), i = a ? fn(a.split(" ").map(function(o) {
          return o.trim();
        })) : Sr();
        return i.prefix || (i.prefix = Be()), n.mask = i, n.maskId = r.getAttribute("data-fa-mask-id"), n;
      }
    };
  },
  provides: function(t) {
    t.generateAbstractMask = function(n) {
      var r = n.children, a = n.attributes, i = n.main, o = n.mask, s = n.maskId, c = n.transform, u = i.width, l = i.icon, d = o.width, m = o.icon, h = Rs({
        transform: c,
        containerWidth: d,
        iconWidth: u
      }), w = {
        tag: "rect",
        attributes: R(R({}, xn), {}, {
          fill: "white"
        })
      }, b = l.children ? {
        children: l.children.map(Aa)
      } : {}, x = {
        tag: "g",
        attributes: R({}, h.inner),
        children: [Aa(R({
          tag: l.tag,
          attributes: R(R({}, l.attributes), h.path)
        }, b))]
      }, g = {
        tag: "g",
        attributes: R({}, h.outer),
        children: [x]
      }, k = "mask-".concat(s || St()), v = "clip-".concat(s || St()), E = {
        tag: "mask",
        attributes: R(R({}, xn), {}, {
          id: k,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        }),
        children: [w, g]
      }, p = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: v
          },
          children: Mc(m)
        }, E]
      };
      return r.push(p, {
        tag: "rect",
        attributes: R({
          fill: "currentColor",
          "clip-path": "url(#".concat(v, ")"),
          mask: "url(#".concat(k, ")")
        }, xn)
      }), {
        children: r,
        attributes: a
      };
    };
  }
}, Pc = {
  provides: function(t) {
    var n = !1;
    ze.matchMedia && (n = ze.matchMedia("(prefers-reduced-motion: reduce)").matches), t.missingIconAbstract = function() {
      var r = [], a = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      r.push({
        tag: "path",
        attributes: R(R({}, a), {}, {
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        })
      });
      var o = R(R({}, i), {}, {
        attributeName: "opacity"
      }), s = {
        tag: "circle",
        attributes: R(R({}, a), {}, {
          cx: "256",
          cy: "364",
          r: "28"
        }),
        children: []
      };
      return n || s.children.push({
        tag: "animate",
        attributes: R(R({}, i), {}, {
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        })
      }, {
        tag: "animate",
        attributes: R(R({}, o), {}, {
          values: "1;0;1;1;0;1;"
        })
      }), r.push(s), r.push({
        tag: "path",
        attributes: R(R({}, a), {}, {
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        }),
        children: n ? [] : [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
            values: "1;0;0;0;0;1;"
          })
        }]
      }), n || r.push({
        tag: "path",
        attributes: R(R({}, a), {}, {
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        }),
        children: [{
          tag: "animate",
          attributes: R(R({}, o), {}, {
            values: "0;0;1;1;0;0;"
          })
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: r
      };
    };
  }
}, Oc = {
  hooks: function() {
    return {
      parseNodeAttributes: function(n, r) {
        var a = r.getAttribute("data-fa-symbol"), i = a === null ? !1 : a === "" ? !0 : a;
        return n.symbol = i, n;
      }
    };
  }
}, Lc = [Ps, yc, wc, Ec, Ac, Tc, _c, Rc, Ic, Pc, Oc];
Gs(Lc, {
  mixoutsTo: ve
});
ve.noAuto;
ve.config;
ve.library;
ve.dom;
var rr = ve.parse;
ve.findIconDefinition;
ve.toHtml;
var Nc = ve.icon;
ve.layer;
ve.text;
ve.counter;
var z = { exports: {} }, Tn = { exports: {} }, K = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Dc() {
  if (ka)
    return K;
  ka = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
  function v(p) {
    if (typeof p == "object" && p !== null) {
      var N = p.$$typeof;
      switch (N) {
        case t:
          switch (p = p.type, p) {
            case c:
            case u:
            case r:
            case i:
            case a:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case s:
                case l:
                case w:
                case h:
                case o:
                  return p;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function E(p) {
    return v(p) === u;
  }
  return K.AsyncMode = c, K.ConcurrentMode = u, K.ContextConsumer = s, K.ContextProvider = o, K.Element = t, K.ForwardRef = l, K.Fragment = r, K.Lazy = w, K.Memo = h, K.Portal = n, K.Profiler = i, K.StrictMode = a, K.Suspense = d, K.isAsyncMode = function(p) {
    return E(p) || v(p) === c;
  }, K.isConcurrentMode = E, K.isContextConsumer = function(p) {
    return v(p) === s;
  }, K.isContextProvider = function(p) {
    return v(p) === o;
  }, K.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === t;
  }, K.isForwardRef = function(p) {
    return v(p) === l;
  }, K.isFragment = function(p) {
    return v(p) === r;
  }, K.isLazy = function(p) {
    return v(p) === w;
  }, K.isMemo = function(p) {
    return v(p) === h;
  }, K.isPortal = function(p) {
    return v(p) === n;
  }, K.isProfiler = function(p) {
    return v(p) === i;
  }, K.isStrictMode = function(p) {
    return v(p) === a;
  }, K.isSuspense = function(p) {
    return v(p) === d;
  }, K.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === r || p === u || p === i || p === a || p === d || p === m || typeof p == "object" && p !== null && (p.$$typeof === w || p.$$typeof === h || p.$$typeof === o || p.$$typeof === s || p.$$typeof === l || p.$$typeof === x || p.$$typeof === g || p.$$typeof === k || p.$$typeof === b);
  }, K.typeOf = v, K;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ca;
function jc() {
  return Ca || (Ca = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, a = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, u = e ? Symbol.for("react.concurrent_mode") : 60111, l = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, w = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, g = e ? Symbol.for("react.responder") : 60118, k = e ? Symbol.for("react.scope") : 60119;
    function v(T) {
      return typeof T == "string" || typeof T == "function" || T === r || T === u || T === i || T === a || T === d || T === m || typeof T == "object" && T !== null && (T.$$typeof === w || T.$$typeof === h || T.$$typeof === o || T.$$typeof === s || T.$$typeof === l || T.$$typeof === x || T.$$typeof === g || T.$$typeof === k || T.$$typeof === b);
    }
    function E(T) {
      if (typeof T == "object" && T !== null) {
        var we = T.$$typeof;
        switch (we) {
          case t:
            var Ze = T.type;
            switch (Ze) {
              case c:
              case u:
              case r:
              case i:
              case a:
              case d:
                return Ze;
              default:
                var Ve = Ze && Ze.$$typeof;
                switch (Ve) {
                  case s:
                  case l:
                  case w:
                  case h:
                  case o:
                    return Ve;
                  default:
                    return we;
                }
            }
          case n:
            return we;
        }
      }
    }
    var p = c, N = u, U = s, te = o, X = t, oe = l, he = r, pe = w, Q = h, le = n, Ae = i, ue = a, ye = d, Te = !1;
    function Le(T) {
      return Te || (Te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), A(T) || E(T) === c;
    }
    function A(T) {
      return E(T) === u;
    }
    function _(T) {
      return E(T) === s;
    }
    function M(T) {
      return E(T) === o;
    }
    function P(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function O(T) {
      return E(T) === l;
    }
    function j(T) {
      return E(T) === r;
    }
    function D(T) {
      return E(T) === w;
    }
    function F(T) {
      return E(T) === h;
    }
    function B(T) {
      return E(T) === n;
    }
    function J(T) {
      return E(T) === i;
    }
    function H(T) {
      return E(T) === a;
    }
    function fe(T) {
      return E(T) === d;
    }
    q.AsyncMode = p, q.ConcurrentMode = N, q.ContextConsumer = U, q.ContextProvider = te, q.Element = X, q.ForwardRef = oe, q.Fragment = he, q.Lazy = pe, q.Memo = Q, q.Portal = le, q.Profiler = Ae, q.StrictMode = ue, q.Suspense = ye, q.isAsyncMode = Le, q.isConcurrentMode = A, q.isContextConsumer = _, q.isContextProvider = M, q.isElement = P, q.isForwardRef = O, q.isFragment = j, q.isLazy = D, q.isMemo = F, q.isPortal = B, q.isProfiler = J, q.isStrictMode = H, q.isSuspense = fe, q.isValidElementType = v, q.typeOf = E;
  }()), q;
}
var Sa;
function Pi() {
  return Sa || (Sa = 1, function(e) {
    process.env.NODE_ENV === "production" ? e.exports = Dc() : e.exports = jc();
  }(Tn)), Tn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var _n, xa;
function Fc() {
  if (xa)
    return _n;
  xa = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var c = Object.getOwnPropertyNames(o).map(function(l) {
        return o[l];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(l) {
        u[l] = l;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return _n = a() ? Object.assign : function(i, o) {
    for (var s, c = r(i), u, l = 1; l < arguments.length; l++) {
      s = Object(arguments[l]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        u = e(s);
        for (var m = 0; m < u.length; m++)
          n.call(s, u[m]) && (c[u[m]] = s[u[m]]);
      }
    }
    return c;
  }, _n;
}
var Rn, Ta;
function Rr() {
  if (Ta)
    return Rn;
  Ta = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Rn = e, Rn;
}
var Mn, _a;
function Oi() {
  return _a || (_a = 1, Mn = Function.call.bind(Object.prototype.hasOwnProperty)), Mn;
}
var In, Ra;
function zc() {
  if (Ra)
    return In;
  Ra = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Rr(), n = {}, r = Oi();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function a(i, o, s, c, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var l in i)
        if (r(i, l)) {
          var d;
          try {
            if (typeof i[l] != "function") {
              var m = Error(
                (c || "React class") + ": " + s + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = i[l](o, l, c, s, null, t);
          } catch (w) {
            d = w;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var h = u ? u() : "";
            e(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, In = a, In;
}
var Pn, Ma;
function Bc() {
  if (Ma)
    return Pn;
  Ma = 1;
  var e = Pi(), t = Fc(), n = Rr(), r = Oi(), a = zc(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Pn = function(s, c) {
    var u = typeof Symbol == "function" && Symbol.iterator, l = "@@iterator";
    function d(A) {
      var _ = A && (u && A[u] || A[l]);
      if (typeof _ == "function")
        return _;
    }
    var m = "<<anonymous>>", h = {
      array: g("array"),
      bigint: g("bigint"),
      bool: g("boolean"),
      func: g("function"),
      number: g("number"),
      object: g("object"),
      string: g("string"),
      symbol: g("symbol"),
      any: k(),
      arrayOf: v,
      element: E(),
      elementType: p(),
      instanceOf: N,
      node: oe(),
      objectOf: te,
      oneOf: U,
      oneOfType: X,
      shape: pe,
      exact: Q
    };
    function w(A, _) {
      return A === _ ? A !== 0 || 1 / A === 1 / _ : A !== A && _ !== _;
    }
    function b(A, _) {
      this.message = A, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    b.prototype = Error.prototype;
    function x(A) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, M = 0;
      function P(j, D, F, B, J, H, fe) {
        if (B = B || m, H = H || F, fe !== n) {
          if (c) {
            var T = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw T.name = "Invariant Violation", T;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var we = B + ":" + F;
            !_[we] && M < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + H + "` prop on `" + B + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[we] = !0, M++);
          }
        }
        return D[F] == null ? j ? D[F] === null ? new b("The " + J + " `" + H + "` is marked as required " + ("in `" + B + "`, but its value is `null`.")) : new b("The " + J + " `" + H + "` is marked as required in " + ("`" + B + "`, but its value is `undefined`.")) : null : A(D, F, B, J, H);
      }
      var O = P.bind(null, !1);
      return O.isRequired = P.bind(null, !0), O;
    }
    function g(A) {
      function _(M, P, O, j, D, F) {
        var B = M[P], J = ue(B);
        if (J !== A) {
          var H = ye(B);
          return new b(
            "Invalid " + j + " `" + D + "` of type " + ("`" + H + "` supplied to `" + O + "`, expected ") + ("`" + A + "`."),
            { expectedType: A }
          );
        }
        return null;
      }
      return x(_);
    }
    function k() {
      return x(o);
    }
    function v(A) {
      function _(M, P, O, j, D) {
        if (typeof A != "function")
          return new b("Property `" + D + "` of component `" + O + "` has invalid PropType notation inside arrayOf.");
        var F = M[P];
        if (!Array.isArray(F)) {
          var B = ue(F);
          return new b("Invalid " + j + " `" + D + "` of type " + ("`" + B + "` supplied to `" + O + "`, expected an array."));
        }
        for (var J = 0; J < F.length; J++) {
          var H = A(F, J, O, j, D + "[" + J + "]", n);
          if (H instanceof Error)
            return H;
        }
        return null;
      }
      return x(_);
    }
    function E() {
      function A(_, M, P, O, j) {
        var D = _[M];
        if (!s(D)) {
          var F = ue(D);
          return new b("Invalid " + O + " `" + j + "` of type " + ("`" + F + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(A);
    }
    function p() {
      function A(_, M, P, O, j) {
        var D = _[M];
        if (!e.isValidElementType(D)) {
          var F = ue(D);
          return new b("Invalid " + O + " `" + j + "` of type " + ("`" + F + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(A);
    }
    function N(A) {
      function _(M, P, O, j, D) {
        if (!(M[P] instanceof A)) {
          var F = A.name || m, B = Le(M[P]);
          return new b("Invalid " + j + " `" + D + "` of type " + ("`" + B + "` supplied to `" + O + "`, expected ") + ("instance of `" + F + "`."));
        }
        return null;
      }
      return x(_);
    }
    function U(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function _(M, P, O, j, D) {
        for (var F = M[P], B = 0; B < A.length; B++)
          if (w(F, A[B]))
            return null;
        var J = JSON.stringify(A, function(fe, T) {
          var we = ye(T);
          return we === "symbol" ? String(T) : T;
        });
        return new b("Invalid " + j + " `" + D + "` of value `" + String(F) + "` " + ("supplied to `" + O + "`, expected one of " + J + "."));
      }
      return x(_);
    }
    function te(A) {
      function _(M, P, O, j, D) {
        if (typeof A != "function")
          return new b("Property `" + D + "` of component `" + O + "` has invalid PropType notation inside objectOf.");
        var F = M[P], B = ue(F);
        if (B !== "object")
          return new b("Invalid " + j + " `" + D + "` of type " + ("`" + B + "` supplied to `" + O + "`, expected an object."));
        for (var J in F)
          if (r(F, J)) {
            var H = A(F, J, O, j, D + "." + J, n);
            if (H instanceof Error)
              return H;
          }
        return null;
      }
      return x(_);
    }
    function X(A) {
      if (!Array.isArray(A))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var _ = 0; _ < A.length; _++) {
        var M = A[_];
        if (typeof M != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Te(M) + " at index " + _ + "."
          ), o;
      }
      function P(O, j, D, F, B) {
        for (var J = [], H = 0; H < A.length; H++) {
          var fe = A[H], T = fe(O, j, D, F, B, n);
          if (T == null)
            return null;
          T.data && r(T.data, "expectedType") && J.push(T.data.expectedType);
        }
        var we = J.length > 0 ? ", expected one of type [" + J.join(", ") + "]" : "";
        return new b("Invalid " + F + " `" + B + "` supplied to " + ("`" + D + "`" + we + "."));
      }
      return x(P);
    }
    function oe() {
      function A(_, M, P, O, j) {
        return le(_[M]) ? null : new b("Invalid " + O + " `" + j + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return x(A);
    }
    function he(A, _, M, P, O) {
      return new b(
        (A || "React class") + ": " + _ + " type `" + M + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + O + "`."
      );
    }
    function pe(A) {
      function _(M, P, O, j, D) {
        var F = M[P], B = ue(F);
        if (B !== "object")
          return new b("Invalid " + j + " `" + D + "` of type `" + B + "` " + ("supplied to `" + O + "`, expected `object`."));
        for (var J in A) {
          var H = A[J];
          if (typeof H != "function")
            return he(O, j, D, J, ye(H));
          var fe = H(F, J, O, j, D + "." + J, n);
          if (fe)
            return fe;
        }
        return null;
      }
      return x(_);
    }
    function Q(A) {
      function _(M, P, O, j, D) {
        var F = M[P], B = ue(F);
        if (B !== "object")
          return new b("Invalid " + j + " `" + D + "` of type `" + B + "` " + ("supplied to `" + O + "`, expected `object`."));
        var J = t({}, M[P], A);
        for (var H in J) {
          var fe = A[H];
          if (r(A, H) && typeof fe != "function")
            return he(O, j, D, H, ye(fe));
          if (!fe)
            return new b(
              "Invalid " + j + " `" + D + "` key `" + H + "` supplied to `" + O + "`.\nBad object: " + JSON.stringify(M[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(A), null, "  ")
            );
          var T = fe(F, H, O, j, D + "." + H, n);
          if (T)
            return T;
        }
        return null;
      }
      return x(_);
    }
    function le(A) {
      switch (typeof A) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !A;
        case "object":
          if (Array.isArray(A))
            return A.every(le);
          if (A === null || s(A))
            return !0;
          var _ = d(A);
          if (_) {
            var M = _.call(A), P;
            if (_ !== A.entries) {
              for (; !(P = M.next()).done; )
                if (!le(P.value))
                  return !1;
            } else
              for (; !(P = M.next()).done; ) {
                var O = P.value;
                if (O && !le(O[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Ae(A, _) {
      return A === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ue(A) {
      var _ = typeof A;
      return Array.isArray(A) ? "array" : A instanceof RegExp ? "object" : Ae(_, A) ? "symbol" : _;
    }
    function ye(A) {
      if (typeof A > "u" || A === null)
        return "" + A;
      var _ = ue(A);
      if (_ === "object") {
        if (A instanceof Date)
          return "date";
        if (A instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function Te(A) {
      var _ = ye(A);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function Le(A) {
      return !A.constructor || !A.constructor.name ? m : A.constructor.name;
    }
    return h.checkPropTypes = a, h.resetWarningCache = a.resetWarningCache, h.PropTypes = h, h;
  }, Pn;
}
var On, Ia;
function Hc() {
  if (Ia)
    return On;
  Ia = 1;
  var e = Rr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, On = function() {
    function r(o, s, c, u, l, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    r.isRequired = r;
    function a() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: a,
      element: r,
      elementType: r,
      instanceOf: a,
      node: r,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, On;
}
if (process.env.NODE_ENV !== "production") {
  var Yc = Pi(), Uc = !0;
  z.exports = Bc()(Yc.isElement, Uc);
} else
  z.exports = Hc()();
function Pa(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function De(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pa(Object(n), !0).forEach(function(r) {
      at(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pa(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function tn(e) {
  return tn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, tn(e);
}
function at(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Vc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Wc(e, t) {
  if (e == null)
    return {};
  var n = Vc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(e, r) || (n[r] = e[r]));
  }
  return n;
}
function ar(e) {
  return Jc(e) || Gc(e) || Kc(e) || qc();
}
function Jc(e) {
  if (Array.isArray(e))
    return ir(e);
}
function Gc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Kc(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return ir(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return ir(e, t);
  }
}
function ir(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function qc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zc(e) {
  var t, n = e.beat, r = e.fade, a = e.beatFade, i = e.bounce, o = e.shake, s = e.flash, c = e.spin, u = e.spinPulse, l = e.spinReverse, d = e.pulse, m = e.fixedWidth, h = e.inverse, w = e.border, b = e.listItem, x = e.flip, g = e.size, k = e.rotation, v = e.pull, E = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": a,
    "fa-bounce": i,
    "fa-shake": o,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": l,
    "fa-spin-pulse": u,
    "fa-pulse": d,
    "fa-fw": m,
    "fa-inverse": h,
    "fa-border": w,
    "fa-li": b,
    "fa-flip": x === !0,
    "fa-flip-horizontal": x === "horizontal" || x === "both",
    "fa-flip-vertical": x === "vertical" || x === "both"
  }, at(t, "fa-".concat(g), typeof g < "u" && g !== null), at(t, "fa-rotate-".concat(k), typeof k < "u" && k !== null && k !== 0), at(t, "fa-pull-".concat(v), typeof v < "u" && v !== null), at(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(E).map(function(p) {
    return E[p] ? p : null;
  }).filter(function(p) {
    return p;
  });
}
function Xc(e) {
  return e = e - 0, e === e;
}
function Li(e) {
  return Xc(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Qc = ["style"];
function $c(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function el(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), a = Li(n.slice(0, r)), i = n.slice(r + 1).trim();
    return a.startsWith("webkit") ? t[$c(a)] = i : t[a] = i, t;
  }, {});
}
function Ni(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return Ni(e, c);
  }), a = Object.keys(t.attributes || {}).reduce(function(c, u) {
    var l = t.attributes[u];
    switch (u) {
      case "class":
        c.attrs.className = l, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = el(l);
        break;
      default:
        u.indexOf("aria-") === 0 || u.indexOf("data-") === 0 ? c.attrs[u.toLowerCase()] = l : c.attrs[Li(u)] = l;
    }
    return c;
  }, {
    attrs: {}
  }), i = n.style, o = i === void 0 ? {} : i, s = Wc(n, Qc);
  return a.attrs.style = De(De({}, a.attrs.style), o), e.apply(void 0, [t.tag, De(De({}, a.attrs), s)].concat(ar(r)));
}
var Di = !1;
try {
  Di = process.env.NODE_ENV === "production";
} catch {
}
function tl() {
  if (!Di && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Oa(e) {
  if (e && tn(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (rr.icon)
    return rr.icon(e);
  if (e === null)
    return null;
  if (e && tn(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function Ln(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? at({}, e, t) : {};
}
var Ce = /* @__PURE__ */ sn.forwardRef(function(e, t) {
  var n = e.icon, r = e.mask, a = e.symbol, i = e.className, o = e.title, s = e.titleId, c = e.maskId, u = Oa(n), l = Ln("classes", [].concat(ar(Zc(e)), ar(i.split(" ")))), d = Ln("transform", typeof e.transform == "string" ? rr.transform(e.transform) : e.transform), m = Ln("mask", Oa(r)), h = Nc(u, De(De(De(De({}, l), d), m), {}, {
    symbol: a,
    title: o,
    titleId: s,
    maskId: c
  }));
  if (!h)
    return tl("Could not find icon", u), null;
  var w = h.abstract, b = {
    ref: t
  };
  return Object.keys(e).forEach(function(x) {
    Ce.defaultProps.hasOwnProperty(x) || (b[x] = e[x]);
  }), nl(w[0], b);
});
Ce.displayName = "FontAwesomeIcon";
Ce.propTypes = {
  beat: z.exports.bool,
  border: z.exports.bool,
  beatFade: z.exports.bool,
  bounce: z.exports.bool,
  className: z.exports.string,
  fade: z.exports.bool,
  flash: z.exports.bool,
  mask: z.exports.oneOfType([z.exports.object, z.exports.array, z.exports.string]),
  maskId: z.exports.string,
  fixedWidth: z.exports.bool,
  inverse: z.exports.bool,
  flip: z.exports.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: z.exports.oneOfType([z.exports.object, z.exports.array, z.exports.string]),
  listItem: z.exports.bool,
  pull: z.exports.oneOf(["right", "left"]),
  pulse: z.exports.bool,
  rotation: z.exports.oneOf([0, 90, 180, 270]),
  shake: z.exports.bool,
  size: z.exports.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: z.exports.bool,
  spinPulse: z.exports.bool,
  spinReverse: z.exports.bool,
  symbol: z.exports.oneOfType([z.exports.bool, z.exports.string]),
  title: z.exports.string,
  titleId: z.exports.string,
  transform: z.exports.oneOfType([z.exports.string, z.exports.object]),
  swapOpacity: z.exports.bool
};
Ce.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
};
var nl = Ni.bind(null, sn.createElement), rl = {
  prefix: "fab",
  iconName: "stack-overflow",
  icon: [384, 512, [], "f16c", "M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z"]
}, al = {
  prefix: "fab",
  iconName: "reddit",
  icon: [512, 512, [], "f1a1", "M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]
}, il = {
  prefix: "fab",
  iconName: "discord",
  icon: [640, 512, [], "f392", "M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]
}, La = {
  prefix: "fab",
  iconName: "apple",
  icon: [384, 512, [], "f179", "M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]
}, ol = {
  prefix: "fab",
  iconName: "shopify",
  icon: [448, 512, [], "e057", "M388.32,104.1a4.66,4.66,0,0,0-4.4-4c-2,0-37.23-.8-37.23-.8s-21.61-20.82-29.62-28.83V503.2L442.76,472S388.72,106.5,388.32,104.1ZM288.65,70.47a116.67,116.67,0,0,0-7.21-17.61C271,32.85,255.42,22,237,22a15,15,0,0,0-4,.4c-.4-.8-1.2-1.2-1.6-2C223.4,11.63,213,7.63,200.58,8c-24,.8-48,18-67.25,48.83-13.61,21.62-24,48.84-26.82,70.06-27.62,8.4-46.83,14.41-47.23,14.81-14,4.4-14.41,4.8-16,18-1.2,10-38,291.82-38,291.82L307.86,504V65.67a41.66,41.66,0,0,0-4.4.4S297.86,67.67,288.65,70.47ZM233.41,87.69c-16,4.8-33.63,10.4-50.84,15.61,4.8-18.82,14.41-37.63,25.62-50,4.4-4.4,10.41-9.61,17.21-12.81C232.21,54.86,233.81,74.48,233.41,87.69ZM200.58,24.44A27.49,27.49,0,0,1,215,28c-6.4,3.2-12.81,8.41-18.81,14.41-15.21,16.42-26.82,42-31.62,66.45-14.42,4.41-28.83,8.81-42,12.81C131.33,83.28,163.75,25.24,200.58,24.44ZM154.15,244.61c1.6,25.61,69.25,31.22,73.25,91.66,2.8,47.64-25.22,80.06-65.65,82.47-48.83,3.2-75.65-25.62-75.65-25.62l10.4-44s26.82,20.42,48.44,18.82c14-.8,19.22-12.41,18.81-20.42-2-33.62-57.24-31.62-60.84-86.86-3.2-46.44,27.22-93.27,94.47-97.68,26-1.6,39.23,4.81,39.23,4.81L221.4,225.39s-17.21-8-37.63-6.4C154.15,221,153.75,239.8,154.15,244.61ZM249.42,82.88c0-12-1.6-29.22-7.21-43.63,18.42,3.6,27.22,24,31.23,36.43Q262.63,78.68,249.42,82.88Z"]
}, sl = {
  prefix: "fab",
  iconName: "patreon",
  icon: [512, 512, [], "f3d9", "M512 194.8c0 101.3-82.4 183.8-183.8 183.8-101.7 0-184.4-82.4-184.4-183.8 0-101.6 82.7-184.3 184.4-184.3C429.6 10.5 512 93.2 512 194.8zM0 501.5h90v-491H0v491z"]
}, cl = {
  prefix: "fab",
  iconName: "spotify",
  icon: [496, 512, [], "f1bc", "M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]
}, ll = {
  prefix: "fab",
  iconName: "tiktok",
  icon: [448, 512, [], "e07b", "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"]
}, fl = {
  prefix: "fab",
  iconName: "linkedin",
  icon: [448, 512, [], "f08c", "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]
}, ul = {
  prefix: "fab",
  iconName: "twitch",
  icon: [512, 512, [], "f1e8", "M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]
}, dl = {
  prefix: "fab",
  iconName: "figma",
  icon: [384, 512, [], "f799", "M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z"]
}, ml = {
  prefix: "fab",
  iconName: "instagram",
  icon: [448, 512, [], "f16d", "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]
}, hl = {
  prefix: "fab",
  iconName: "whatsapp",
  icon: [448, 512, [], "f232", "M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]
}, pl = {
  prefix: "fab",
  iconName: "google-play",
  icon: [512, 512, [], "f3ab", "M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"]
}, gl = {
  prefix: "fab",
  iconName: "google-drive",
  icon: [512, 512, [], "f3aa", "M339 314.9L175.4 32h161.2l163.6 282.9H339zm-137.5 23.6L120.9 480h310.5L512 338.5H201.5zM154.1 67.4L0 338.5 80.6 480 237 208.8 154.1 67.4z"]
}, vl = {
  prefix: "fab",
  iconName: "github",
  icon: [496, 512, [], "f09b", "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]
}, bl = {
  prefix: "fab",
  iconName: "youtube",
  icon: [576, 512, [61802], "f167", "M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"]
}, yl = {
  prefix: "fab",
  iconName: "twitter",
  icon: [512, 512, [], "f099", "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"]
}, wl = {
  prefix: "fab",
  iconName: "dribbble",
  icon: [512, 512, [], "f17d", "M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"]
}, El = {
  prefix: "fab",
  iconName: "telegram",
  icon: [496, 512, [62462, "telegram-plane"], "f2c6", "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z"]
}, Al = {
  prefix: "fab",
  iconName: "mastodon",
  icon: [448, 512, [], "f4f6", "M433 179.11c0-97.2-63.71-125.7-63.71-125.7-62.52-28.7-228.56-28.4-290.48 0 0 0-63.72 28.5-63.72 125.7 0 115.7-6.6 259.4 105.63 289.1 40.51 10.7 75.32 13 103.33 11.4 50.81-2.8 79.32-18.1 79.32-18.1l-1.7-36.9s-36.31 11.4-77.12 10.1c-40.41-1.4-83-4.4-89.63-54a102.54 102.54 0 0 1-.9-13.9c85.63 20.9 158.65 9.1 178.75 6.7 56.12-6.7 105-41.3 111.23-72.9 9.8-49.8 9-121.5 9-121.5zm-75.12 125.2h-46.63v-114.2c0-49.7-64-51.6-64 6.9v62.5h-46.33V197c0-58.5-64-56.6-64-6.9v114.2H90.19c0-122.1-5.2-147.9 18.41-175 25.9-28.9 79.82-30.8 103.83 6.1l11.6 19.5 11.6-19.5c24.11-37.1 78.12-34.8 103.83-6.1 23.71 27.3 18.4 53 18.4 175z"]
};
const kl = "@links-keeper", ji = `${kl}:user-data`, Mr = [
  {
    label: "E-mail",
    value: "mail",
    icon: Wo
  },
  {
    label: "Phone",
    value: "phone",
    icon: Go
  },
  {
    label: "Portfolio",
    value: "portfolio",
    icon: ts
  },
  {
    label: "LinkedIn",
    value: "linkedin",
    icon: fl
  },
  {
    label: "WhatsApp",
    value: "whatsapp",
    icon: hl
  },
  {
    label: "Telegram",
    value: "telegram",
    icon: El
  },
  {
    label: "Discord",
    value: "discord",
    icon: il
  },
  {
    label: "Reddit",
    value: "reddit",
    icon: al
  },
  {
    label: "Instagram",
    value: "instagram",
    icon: ml
  },
  {
    label: "Twitter",
    value: "twitter",
    icon: yl
  },
  {
    label: "Figma",
    value: "figma",
    icon: dl
  },
  {
    label: "Dribbble",
    value: "dribbble",
    icon: wl
  },
  {
    label: "TikTok",
    value: "tiktok",
    icon: ll
  },
  {
    label: "Twitch",
    value: "twitch",
    icon: ul
  },
  {
    label: "Youtube",
    value: "youtube",
    icon: bl
  },
  {
    label: "GitHub",
    value: "github",
    icon: vl
  },
  {
    label: "Mastodon",
    value: "mastodon",
    icon: Al
  },
  {
    label: "StackOverflow",
    value: "stackoverflow",
    icon: rl
  },
  {
    label: "Patreon",
    value: "patreon",
    icon: sl
  },
  {
    label: "Blog",
    value: "blog",
    icon: Bo
  },
  {
    label: "Apple Store",
    value: "apple",
    icon: La
  },
  {
    label: "iTunes",
    value: "itunes",
    icon: La
  },
  {
    label: "Spotify",
    value: "spotify",
    icon: cl
  },
  {
    label: "Shopify",
    value: "shopify",
    icon: ol
  },
  {
    label: "Shop",
    value: "shop",
    icon: Jo
  },
  {
    label: "Play Store",
    value: "play.google",
    icon: pl
  },
  {
    label: "Google Drive",
    value: "drive.google",
    icon: gl
  },
  {
    label: "Other",
    value: "learn",
    icon: ns
  },
  {
    label: "Other",
    value: "home",
    icon: Zo
  },
  {
    label: "Other",
    value: "user",
    icon: ni
  }
], Cl = Mr.map(({ icon: e }) => e), Nn = {
  ENTER_KEY: "Enter",
  ESCAPE_KEY: "Escape",
  SPACE_KEY: " ",
  LEFT_ARROW_KEY: "ArrowLeft",
  UP_ARROW_KEY: "ArrowUp",
  RIGHT_ARROW_KEY: "ArrowRight",
  DOWN_ARROW_KEY: "ArrowDown"
}, Fi = ["jpg", ".jpeg", ".png", ".svg"], zi = async (e, t, n) => {
  if (!e)
    return;
  if (typeof navigator < "u" && !navigator.share)
    return navigator.clipboard.writeText(e), alert(`${e} was copied to clipboard!`);
  const r = {
    title: t || "Check this link!",
    text: n || "",
    url: e
  };
  try {
    await navigator.share(r);
  } catch {
    alert("It was not possible to share the link. Please try again.");
  }
}, or = (e) => /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/.test(e), sr = (e) => /^\w+([.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e), Na = (e) => /^(http|https):\/\//.test(e), Dn = (e) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(e), cr = (e) => /^data:image\/([a-zA-Z]*);base64,([^"]*)$/.test(e), Da = (e, t) => {
  let n = parseInt(e.slice(1, 3), 16), r = parseInt(e.slice(3, 5), 16), a = parseInt(e.slice(5, 7), 16);
  return n = Math.round((255 - n) * t) + n, r = Math.round((255 - r) * t) + r, a = Math.round((255 - a) * t) + a, `#${((1 << 24) + (n << 16) + (r << 8) + a).toString(16).slice(1)}`;
}, Sl = async (e) => {
  try {
    if (!e)
      return "";
    const t = await fetch(e), n = await t.arrayBuffer(), r = btoa(
      new Uint8Array(n).reduce(
        (a, i) => a + String.fromCharCode(i),
        ""
      )
    );
    return `data:${t.headers.get("Content-Type")};base64,${r}`;
  } catch (t) {
    return console.error(t), null;
  }
}, xl = () => typeof window < "u" && !!window.crypto && !!window.crypto.randomUUID ? window?.crypto?.randomUUID() : String(Date.now().toString(32) + Math.random().toString(16)).replace(
  /\./g,
  "-"
), Bi = () => "ontouchstart" in window || !!navigator.maxTouchPoints, Hi = "REQUIRE", Tl = "EMAIL", _l = "PHONE_NUMBER", Rl = "URL", Yi = "EMAIL_PHONE_NUMBER_URL", Ui = "ICON", jn = { type: Hi }, Ml = {
  type: Yi
}, Il = {
  type: Ui
}, Pl = (e, t) => {
  let n = !0;
  if (t.length === 0)
    return n;
  for (const r of t)
    r.type === Hi && (n = n && typeof e == "string" ? e.trim().length > 0 : !!e), r.type === Tl && (n = n && sr(e)), r.type === _l && (n = n && or(e)), r.type === Rl && (n = n && Na(e)), r.type === Yi && (n = n && (Na(e) || or(e) || sr(e))), r.type === Ui && (n = n && Cl.some(
      (a) => a.iconName === e.iconName
    ));
  return n;
}, Ol = "_button_1blhe_1", ja = {
  button: Ol,
  "button--primary": "_button--primary_1blhe_31",
  "button--secondary": "_button--secondary_1blhe_42",
  "button--action": "_button--action_1blhe_52"
};
var dn = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Ll() {
  if (Fa)
    return mt;
  Fa = 1;
  var e = sn, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, c, u) {
    var l, d = {}, m = null, h = null;
    u !== void 0 && (m = "" + u), c.key !== void 0 && (m = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (l in c)
      r.call(c, l) && !i.hasOwnProperty(l) && (d[l] = c[l]);
    if (s && s.defaultProps)
      for (l in c = s.defaultProps, c)
        d[l] === void 0 && (d[l] = c[l]);
    return { $$typeof: t, type: s, key: m, ref: h, props: d, _owner: a.current };
  }
  return mt.Fragment = n, mt.jsx = o, mt.jsxs = o, mt;
}
var ht = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var za;
function Nl() {
  return za || (za = 1, process.env.NODE_ENV !== "production" && function() {
    var e = sn, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), w = Symbol.iterator, b = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var y = w && f[w] || f[b];
      return typeof y == "function" ? y : null;
    }
    var g = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(f) {
      {
        for (var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), L = 1; L < y; L++)
          S[L - 1] = arguments[L];
        v("error", f, S);
      }
    }
    function v(f, y, S) {
      {
        var L = g.ReactDebugCurrentFrame, G = L.getStackAddendum();
        G !== "" && (y += "%s", S = S.concat([G]));
        var Z = S.map(function(V) {
          return String(V);
        });
        Z.unshift("Warning: " + y), Function.prototype.apply.call(console[f], console, Z);
      }
    }
    var E = !1, p = !1, N = !1, U = !1, te = !1, X;
    X = Symbol.for("react.module.reference");
    function oe(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === r || f === i || te || f === a || f === u || f === l || U || f === h || E || p || N || typeof f == "object" && f !== null && (f.$$typeof === m || f.$$typeof === d || f.$$typeof === o || f.$$typeof === s || f.$$typeof === c || f.$$typeof === X || f.getModuleId !== void 0));
    }
    function he(f, y, S) {
      var L = f.displayName;
      if (L)
        return L;
      var G = y.displayName || y.name || "";
      return G !== "" ? S + "(" + G + ")" : S;
    }
    function pe(f) {
      return f.displayName || "Context";
    }
    function Q(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case u:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case s:
            var y = f;
            return pe(y) + ".Consumer";
          case o:
            var S = f;
            return pe(S._context) + ".Provider";
          case c:
            return he(f, f.render, "ForwardRef");
          case d:
            var L = f.displayName || null;
            return L !== null ? L : Q(f.type) || "Memo";
          case m: {
            var G = f, Z = G._payload, V = G._init;
            try {
              return Q(V(Z));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, Ae = 0, ue, ye, Te, Le, A, _, M;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function O() {
      {
        if (Ae === 0) {
          ue = console.log, ye = console.info, Te = console.warn, Le = console.error, A = console.group, _ = console.groupCollapsed, M = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: P,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        Ae++;
      }
    }
    function j() {
      {
        if (Ae--, Ae === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, f, {
              value: ue
            }),
            info: le({}, f, {
              value: ye
            }),
            warn: le({}, f, {
              value: Te
            }),
            error: le({}, f, {
              value: Le
            }),
            group: le({}, f, {
              value: A
            }),
            groupCollapsed: le({}, f, {
              value: _
            }),
            groupEnd: le({}, f, {
              value: M
            })
          });
        }
        Ae < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var D = g.ReactCurrentDispatcher, F;
    function B(f, y, S) {
      {
        if (F === void 0)
          try {
            throw Error();
          } catch (G) {
            var L = G.stack.trim().match(/\n( *(at )?)/);
            F = L && L[1] || "";
          }
        return `
` + F + f;
      }
    }
    var J = !1, H;
    {
      var fe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new fe();
    }
    function T(f, y) {
      if (!f || J)
        return "";
      {
        var S = H.get(f);
        if (S !== void 0)
          return S;
      }
      var L;
      J = !0;
      var G = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Z;
      Z = D.current, D.current = null, O();
      try {
        if (y) {
          var V = function() {
            throw Error();
          };
          if (Object.defineProperty(V.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(V, []);
            } catch (_e) {
              L = _e;
            }
            Reflect.construct(f, [], V);
          } else {
            try {
              V.call();
            } catch (_e) {
              L = _e;
            }
            f.call(V.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_e) {
            L = _e;
          }
          f();
        }
      } catch (_e) {
        if (_e && L && typeof _e.stack == "string") {
          for (var Y = _e.stack.split(`
`), de = L.stack.split(`
`), re = Y.length - 1, se = de.length - 1; re >= 1 && se >= 0 && Y[re] !== de[se]; )
            se--;
          for (; re >= 1 && se >= 0; re--, se--)
            if (Y[re] !== de[se]) {
              if (re !== 1 || se !== 1)
                do
                  if (re--, se--, se < 0 || Y[re] !== de[se]) {
                    var Ee = `
` + Y[re].replace(" at new ", " at ");
                    return f.displayName && Ee.includes("<anonymous>") && (Ee = Ee.replace("<anonymous>", f.displayName)), typeof f == "function" && H.set(f, Ee), Ee;
                  }
                while (re >= 1 && se >= 0);
              break;
            }
        }
      } finally {
        J = !1, D.current = Z, j(), Error.prepareStackTrace = G;
      }
      var Qe = f ? f.displayName || f.name : "", Xr = Qe ? B(Qe) : "";
      return typeof f == "function" && H.set(f, Xr), Xr;
    }
    function we(f, y, S) {
      return T(f, !1);
    }
    function Ze(f) {
      var y = f.prototype;
      return !!(y && y.isReactComponent);
    }
    function Ve(f, y, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return T(f, Ze(f));
      if (typeof f == "string")
        return B(f);
      switch (f) {
        case u:
          return B("Suspense");
        case l:
          return B("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case c:
            return we(f.render);
          case d:
            return Ve(f.type, y, S);
          case m: {
            var L = f, G = L._payload, Z = L._init;
            try {
              return Ve(Z(G), y, S);
            } catch {
            }
          }
        }
      return "";
    }
    var Lt = Object.prototype.hasOwnProperty, zr = {}, Br = g.ReactDebugCurrentFrame;
    function Nt(f) {
      if (f) {
        var y = f._owner, S = Ve(f.type, f._source, y ? y.type : null);
        Br.setExtraStackFrame(S);
      } else
        Br.setExtraStackFrame(null);
    }
    function wo(f, y, S, L, G) {
      {
        var Z = Function.call.bind(Lt);
        for (var V in f)
          if (Z(f, V)) {
            var Y = void 0;
            try {
              if (typeof f[V] != "function") {
                var de = Error((L || "React class") + ": " + S + " type `" + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[V] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              Y = f[V](y, V, L, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (re) {
              Y = re;
            }
            Y && !(Y instanceof Error) && (Nt(G), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", L || "React class", S, V, typeof Y), Nt(null)), Y instanceof Error && !(Y.message in zr) && (zr[Y.message] = !0, Nt(G), k("Failed %s type: %s", S, Y.message), Nt(null));
          }
      }
    }
    var Eo = Array.isArray;
    function bn(f) {
      return Eo(f);
    }
    function Ao(f) {
      {
        var y = typeof Symbol == "function" && Symbol.toStringTag, S = y && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function ko(f) {
      try {
        return Hr(f), !1;
      } catch {
        return !0;
      }
    }
    function Hr(f) {
      return "" + f;
    }
    function Yr(f) {
      if (ko(f))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ao(f)), Hr(f);
    }
    var dt = g.ReactCurrentOwner, Co = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ur, Vr, yn;
    yn = {};
    function So(f) {
      if (Lt.call(f, "ref")) {
        var y = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function xo(f) {
      if (Lt.call(f, "key")) {
        var y = Object.getOwnPropertyDescriptor(f, "key").get;
        if (y && y.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function To(f, y) {
      if (typeof f.ref == "string" && dt.current && y && dt.current.stateNode !== y) {
        var S = Q(dt.current.type);
        yn[S] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(dt.current.type), f.ref), yn[S] = !0);
      }
    }
    function _o(f, y) {
      {
        var S = function() {
          Ur || (Ur = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function Ro(f, y) {
      {
        var S = function() {
          Vr || (Vr = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", y));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Mo = function(f, y, S, L, G, Z, V) {
      var Y = {
        $$typeof: t,
        type: f,
        key: y,
        ref: S,
        props: V,
        _owner: Z
      };
      return Y._store = {}, Object.defineProperty(Y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: L
      }), Object.defineProperty(Y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.freeze && (Object.freeze(Y.props), Object.freeze(Y)), Y;
    };
    function Io(f, y, S, L, G) {
      {
        var Z, V = {}, Y = null, de = null;
        S !== void 0 && (Yr(S), Y = "" + S), xo(y) && (Yr(y.key), Y = "" + y.key), So(y) && (de = y.ref, To(y, G));
        for (Z in y)
          Lt.call(y, Z) && !Co.hasOwnProperty(Z) && (V[Z] = y[Z]);
        if (f && f.defaultProps) {
          var re = f.defaultProps;
          for (Z in re)
            V[Z] === void 0 && (V[Z] = re[Z]);
        }
        if (Y || de) {
          var se = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          Y && _o(V, se), de && Ro(V, se);
        }
        return Mo(f, Y, de, G, L, dt.current, V);
      }
    }
    var wn = g.ReactCurrentOwner, Wr = g.ReactDebugCurrentFrame;
    function Xe(f) {
      if (f) {
        var y = f._owner, S = Ve(f.type, f._source, y ? y.type : null);
        Wr.setExtraStackFrame(S);
      } else
        Wr.setExtraStackFrame(null);
    }
    var En;
    En = !1;
    function An(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function Jr() {
      {
        if (wn.current) {
          var f = Q(wn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function Po(f) {
      {
        if (f !== void 0) {
          var y = f.fileName.replace(/^.*[\\\/]/, ""), S = f.lineNumber;
          return `

Check your code at ` + y + ":" + S + ".";
        }
        return "";
      }
    }
    var Gr = {};
    function Oo(f) {
      {
        var y = Jr();
        if (!y) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (y = `

Check the top-level render call using <` + S + ">.");
        }
        return y;
      }
    }
    function Kr(f, y) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = Oo(y);
        if (Gr[S])
          return;
        Gr[S] = !0;
        var L = "";
        f && f._owner && f._owner !== wn.current && (L = " It was passed a child from " + Q(f._owner.type) + "."), Xe(f), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, L), Xe(null);
      }
    }
    function qr(f, y) {
      {
        if (typeof f != "object")
          return;
        if (bn(f))
          for (var S = 0; S < f.length; S++) {
            var L = f[S];
            An(L) && Kr(L, y);
          }
        else if (An(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var G = x(f);
          if (typeof G == "function" && G !== f.entries)
            for (var Z = G.call(f), V; !(V = Z.next()).done; )
              An(V.value) && Kr(V.value, y);
        }
      }
    }
    function Lo(f) {
      {
        var y = f.type;
        if (y == null || typeof y == "string")
          return;
        var S;
        if (typeof y == "function")
          S = y.propTypes;
        else if (typeof y == "object" && (y.$$typeof === c || y.$$typeof === d))
          S = y.propTypes;
        else
          return;
        if (S) {
          var L = Q(y);
          wo(S, f.props, "prop", L, f);
        } else if (y.PropTypes !== void 0 && !En) {
          En = !0;
          var G = Q(y);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", G || "Unknown");
        }
        typeof y.getDefaultProps == "function" && !y.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function No(f) {
      {
        for (var y = Object.keys(f.props), S = 0; S < y.length; S++) {
          var L = y[S];
          if (L !== "children" && L !== "key") {
            Xe(f), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", L), Xe(null);
            break;
          }
        }
        f.ref !== null && (Xe(f), k("Invalid attribute `ref` supplied to `React.Fragment`."), Xe(null));
      }
    }
    function Zr(f, y, S, L, G, Z) {
      {
        var V = oe(f);
        if (!V) {
          var Y = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (Y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Po(G);
          de ? Y += de : Y += Jr();
          var re;
          f === null ? re = "null" : bn(f) ? re = "array" : f !== void 0 && f.$$typeof === t ? (re = "<" + (Q(f.type) || "Unknown") + " />", Y = " Did you accidentally export a JSX literal instead of a component?") : re = typeof f, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", re, Y);
        }
        var se = Io(f, y, S, G, Z);
        if (se == null)
          return se;
        if (V) {
          var Ee = y.children;
          if (Ee !== void 0)
            if (L)
              if (bn(Ee)) {
                for (var Qe = 0; Qe < Ee.length; Qe++)
                  qr(Ee[Qe], f);
                Object.freeze && Object.freeze(Ee);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qr(Ee, f);
        }
        return f === r ? No(se) : Lo(se), se;
      }
    }
    function Do(f, y, S) {
      return Zr(f, y, S, !0);
    }
    function jo(f, y, S) {
      return Zr(f, y, S, !1);
    }
    var Fo = jo, zo = Do;
    ht.Fragment = r, ht.jsx = Fo, ht.jsxs = zo;
  }()), ht;
}
(function(e) {
  process.env.NODE_ENV === "production" ? e.exports = Ll() : e.exports = Nl();
})(dn);
const Ba = dn.exports.Fragment, C = dn.exports.jsx, W = dn.exports.jsxs, me = ({
  label: e,
  icon: t,
  iconSize: n,
  additionalClass: r,
  buttonType: a = "primary",
  onClick: i,
  ...o
}) => {
  const s = (c) => {
    i && i(c);
  };
  return /* @__PURE__ */ W("button", {
    className: `${ja.button} ${ja[`button--${a}`]} ${r || ""} `,
    ...o,
    onClick: s,
    children: [!!t && /* @__PURE__ */ C(Ce, {
      icon: t,
      size: n,
      style: {
        marginRight: e ? "0.25rem" : "0"
      }
    }), !!e && e]
  });
}, Dl = "_input_1hj1y_1", jl = "_input__error_1hj1y_37", pt = {
  input: Dl,
  "input--error": "_input--error_1hj1y_34",
  input__error: jl
}, xt = _t(hr(({
  label: e,
  error: t,
  isInvalid: n = !1,
  additionalClass: r,
  ...a
}, i) => /* @__PURE__ */ W("div", {
  className: `${pt.input} ${n ? pt["input--error"] : ""} ${r || ""}`,
  children: [/* @__PURE__ */ W("label", {
    htmlFor: e,
    children: [!!e && /* @__PURE__ */ C("p", {
      children: e
    }), /* @__PURE__ */ C("input", {
      className: `${pt.input} ${n ? pt["input--error"] : ""}`,
      id: e,
      ref: i,
      ...a
    })]
  }), n && /* @__PURE__ */ C("p", {
    className: pt.input__error,
    children: t
  })]
}))), Fl = "_modal__overlay_1qtlt_1", zl = "_modal__content_1qtlt_11", Bl = "_modal__main_1qtlt_31", Hl = "_modal__footer_1qtlt_41", Yl = "_enter_1qtlt_1", Ul = "_exit_1qtlt_1", $e = {
  modal__overlay: Fl,
  modal__content: zl,
  "enter-mobile": "_enter-mobile_1qtlt_1",
  "modal__content--closing": "_modal__content--closing_1qtlt_27",
  "exit-mobile": "_exit-mobile_1qtlt_1",
  modal__main: Bl,
  modal__footer: Hl,
  "modal__bottom-bar": "_modal__bottom-bar_1qtlt_44",
  enter: Yl,
  exit: Ul
}, Ir = hr(({
  description: e = "",
  header: t,
  footer: n,
  children: r,
  additionalClass: a,
  isModalClosing: i = !1,
  onCloseModal: o,
  onCloseModalSuccess: s
}, c) => {
  const u = Fe(null), l = Fe(null), d = Bi(), m = 50, h = () => {
    i && s();
  }, w = (g) => {
    l.current = null, u.current = g.targetTouches[0].clientY;
  }, b = (g) => l.current = g.targetTouches[0].clientY, x = () => {
    if (u.current === null || l.current === null)
      return;
    u.current - l.current > m && o();
  };
  return /* @__PURE__ */ C("div", {
    className: `${$e.modal__overlay} ${a || ""}`,
    role: "dialog",
    "aria-labelledby": e,
    "aria-describedby": e,
    onClick: o,
    children: /* @__PURE__ */ W("div", {
      ref: c,
      className: `${$e.modal__content} ${i ? $e["modal__content--closing"] : ""}`,
      onAnimationEnd: h,
      onClick: (g) => g.stopPropagation(),
      onTouchStart: d ? w : () => null,
      onTouchMove: d ? b : () => null,
      onTouchEnd: d ? x : () => null,
      children: [!!t && /* @__PURE__ */ C("header", {
        children: t
      }), /* @__PURE__ */ C("main", {
        className: $e.modal__main,
        children: r
      }), (!!n || d) && /* @__PURE__ */ W("footer", {
        className: $e.modal__footer,
        children: [n, /* @__PURE__ */ C("div", {
          className: $e["modal__bottom-bar"]
        })]
      })]
    })
  });
}), Vl = "_select_qvnxu_1", Wl = "_select__header_qvnxu_7", Jl = "_select__options_qvnxu_48", Gl = "_select__error_qvnxu_98", We = {
  select: Vl,
  select__header: Wl,
  "select__header--expanded": "_select__header--expanded_qvnxu_38",
  "select__header--error": "_select__header--error_qvnxu_45",
  select__options: Jl,
  "select__options--expanded": "_select__options--expanded_qvnxu_89",
  select__error: Gl
}, Kl = ({
  label: e,
  error: t,
  additionalClass: n,
  options: r,
  selectedOption: a,
  disabled: i,
  isInvalid: o = !0,
  placeholder: s = "Select an option",
  onSelectCollapse: c,
  selectOption: u,
  ...l
}) => {
  const [d, m] = ie(!1), h = Fe(null), w = ae((g) => {
    d && !!c && c(), !i && m((k) => g ?? !k);
  }, [i, d, c]), b = (g) => {
    if (g.stopPropagation(), !i) {
      if (g.key === Nn.ESCAPE_KEY)
        return w(!1);
      if (g.key === Nn.ENTER_KEY)
        return w();
      if (g.key === Nn.SPACE_KEY)
        return w(!0);
    }
  }, x = (g) => {
    u(g), w(!1);
  };
  return pr(() => {
    const g = (k) => {
      const v = k.target;
      h.current && !h?.current.contains(v) && (k.preventDefault(), w(!1));
    };
    return document.addEventListener("mouseup", g), () => document.removeEventListener("mouseup", g);
  }, [h, w]), /* @__PURE__ */ W("div", {
    ref: h,
    className: `${We.select}  ${n || ""}`,
    onTouchStart: d ? (g) => g.stopPropagation() : () => null,
    onTouchMove: d ? (g) => g.stopPropagation() : () => null,
    onTouchEnd: d ? (g) => g.stopPropagation() : () => null,
    children: [/* @__PURE__ */ W("label", {
      htmlFor: e,
      children: [!!e && /* @__PURE__ */ C("p", {
        children: e
      }), /* @__PURE__ */ W("div", {
        className: `${We.select__header} ${d ? We["select__header--expanded"] : ""} ${o ? We["select__header--error"] : ""}`,
        role: "button",
        tabIndex: i ? -1 : 0,
        "aria-label": "Select an option",
        "aria-expanded": d,
        onClick: () => w(),
        onKeyDown: b,
        ...l,
        children: [a?.label || /* @__PURE__ */ C("p", {
          children: s
        }), /* @__PURE__ */ C(Ce, {
          icon: Qo
        })]
      }), /* @__PURE__ */ C("ul", {
        className: `${We.select__options} ${d ? We["select__options--expanded"] : ""}`,
        children: r.map((g) => /* @__PURE__ */ C("li", {
          value: g.value,
          "aria-label": `Select an option ${g.value}`,
          onClick: () => x(g),
          children: g.label
        }, `${e}-${g.value}`))
      })]
    }), o && /* @__PURE__ */ C("p", {
      className: We.select__error,
      children: t
    })]
  });
}, Vi = {
  "add-edit-link-modal": "_add-edit-link-modal_1sntw_1",
  "add-edit-link-modal__select-option": "_add-edit-link-modal__select-option_1sntw_18"
}, Ha = Mr.map((e) => ({
  value: e.value,
  icon: e.icon,
  label: /* @__PURE__ */ W("div", {
    className: Vi["add-edit-link-modal__select-option"],
    children: [/* @__PURE__ */ C(Ce, {
      icon: e.icon
    }), /* @__PURE__ */ C("p", {
      children: e.label
    })]
  })
})), ql = ({
  selectedLink: e,
  onAddLink: t,
  onEditLink: n,
  isModalClosing: r,
  onCloseModal: a,
  onCloseModalSuccess: i
}) => {
  const [o, s] = ie({
    value: e?.label || "",
    isValid: !!e?.label,
    isTouched: !1
  }), [c, u] = ie({
    value: e?.url || "https://",
    isValid: !!e?.url,
    isTouched: !1
  }), [l, d] = ie({
    value: e?.icon || null,
    isValid: !!e?.icon,
    isTouched: !1
  }), m = Xt(() => o.isValid && c.isValid && l.isValid, [o, c, l]), h = Xt(() => Ha.find((v) => v.icon.iconName === l?.value?.iconName), [l]), w = ae(() => {
    a();
  }, [a]), b = (v) => {
    const E = Mr.find((p) => v.toLowerCase().includes(p.value));
    E && d({
      value: E.icon,
      isValid: !0,
      isTouched: !0
    });
  }, x = ae((v, E, p) => {
    p((N) => ({
      ...N,
      value: v,
      isValid: Pl(v, E)
    })), typeof v == "string" && b(v);
  }, []), g = ae((v) => v((E) => ({
    ...E,
    isTouched: !0
  })), []), k = (v) => {
    if (v.preventDefault(), !m)
      return;
    const E = {
      id: e?.id || xl(),
      label: o.value,
      url: c.value,
      icon: l.value
    };
    (e ? n : t)(E), w();
  };
  return /* @__PURE__ */ C(Ir, {
    header: /* @__PURE__ */ C("h1", {
      children: `${e ? "Edit" : "Add"} link`
    }),
    additionalClass: Vi["add-edit-link-modal"],
    isModalClosing: r,
    onCloseModal: w,
    onCloseModalSuccess: i,
    children: /* @__PURE__ */ W("form", {
      onSubmit: k,
      children: [/* @__PURE__ */ C(xt, {
        required: !0,
        autoComplete: "off",
        label: "Title",
        placeholder: "e.g. My LinkedIn",
        value: o.value,
        isInvalid: o.isTouched && !o.isValid,
        error: "Please enter a title for the link!",
        onBlur: () => g(s),
        onChange: (v) => x(v.target.value, [jn], s)
      }), /* @__PURE__ */ C(xt, {
        required: !0,
        autoComplete: "off",
        label: "Link, e-mail or phone number",
        placeholder: "e.g. https://linkedin.com",
        value: c.value.toLowerCase(),
        isInvalid: c.isTouched && !c.isValid,
        error: "Please enter a valid URL, e-mail or phone number!",
        onBlur: () => g(u),
        onChange: (v) => x(v.target.value, [jn, Ml], u)
      }), /* @__PURE__ */ C(Kl, {
        label: "Icon",
        options: Ha,
        selectedOption: h,
        placeholder: "Select an icon",
        onSelectCollapse: () => g(d),
        selectOption: (v) => x(v.icon, [jn, Il], d),
        isInvalid: l.isTouched && !l.isValid,
        error: "Please select an icon!"
      }), /* @__PURE__ */ C(me, {
        disabled: !m,
        label: "Save new link",
        type: "submit",
        icon: Vo
      })]
    })
  });
}, Zl = "_avatar_1yxiv_1", Xl = {
  avatar: Zl
}, Wi = ({
  alt: e,
  src: t,
  additionalClass: n,
  ...r
}) => /* @__PURE__ */ C("img", {
  className: `${Xl.avatar} ${n || ""}`,
  alt: e,
  src: t,
  ...r
}), Ya = {
  "avatar-header": "_avatar-header_1w9fw_1",
  "avatar-header__actions": "_avatar-header__actions_1w9fw_12"
}, Ji = ({
  src: e,
  alt: t,
  heading: n,
  subHeading: r,
  additionalClass: a,
  children: i,
  ...o
}) => /* @__PURE__ */ W("div", {
  className: `${Ya["avatar-header"]} ${a || ""}`,
  children: [!!e && /* @__PURE__ */ C(Wi, {
    src: e,
    alt: t,
    ...o
  }), /* @__PURE__ */ W("div", {
    children: [!!n && /* @__PURE__ */ C("h1", {
      children: n
    }), !!r && /* @__PURE__ */ C("p", {
      children: r
    })]
  }), !!i && /* @__PURE__ */ C("div", {
    className: `${Ya["avatar-header__actions"]}`,
    children: i
  })]
}), Ql = {
  "colors-picker": "_colors-picker_13tm4_1"
}, $l = _t(({
  title: e = "Colors Settings",
  colors: t,
  onColorUpdate: n
}) => /* @__PURE__ */ W("details", {
  className: `${Ql["colors-picker"]}`,
  children: [/* @__PURE__ */ W("summary", {
    children: [/* @__PURE__ */ C(Ce, {
      icon: qo
    }), e]
  }), /* @__PURE__ */ C("div", {
    children: Object.entries(t).map(([r, a]) => /* @__PURE__ */ C(xt, {
      label: r,
      type: "color",
      value: a,
      name: r,
      onChange: n
    }, `color-${r}-input`))
  })]
})), Fn = {
  "confirmation-modal": "_confirmation-modal_1jwua_1",
  "confirmation-modal__main": "_confirmation-modal__main_1jwua_4",
  "confirmation-modal__footer": "_confirmation-modal__footer_1jwua_9"
}, Ua = ({
  title: e,
  question: t = "Are you sure?",
  isModalClosing: n,
  onConfirm: r,
  onCloseModal: a,
  onCloseModalSuccess: i
}) => {
  const o = ae(() => {
    r(), a();
  }, [a, r]);
  return /* @__PURE__ */ C(Ir, {
    additionalClass: Fn["confirmation-modal"],
    header: !!e && /* @__PURE__ */ C("h1", {
      children: e
    }),
    isModalClosing: n,
    footer: /* @__PURE__ */ W("div", {
      className: Fn["confirmation-modal__footer"],
      children: [/* @__PURE__ */ C(me, {
        "aria-label": "Click to cancel",
        label: "Cancel",
        title: "Cancel",
        buttonType: "secondary",
        onClick: a
      }), /* @__PURE__ */ C(me, {
        "aria-label": "Click to confirm",
        label: "Confirm",
        title: "Confirm",
        onClick: o
      })]
    }),
    onCloseModal: a,
    onCloseModalSuccess: i,
    children: /* @__PURE__ */ C("div", {
      className: Fn["confirmation-modal__main"],
      children: /* @__PURE__ */ C("p", {
        children: t
      })
    })
  });
}, ef = (e, t) => {
  const [n, r] = ie(!1);
  let a = Fe(null), i = Fe(null);
  return { isDragging: n, dragStart: (u) => {
    i.current = null, a.current = u;
  }, dragEnter: (u) => {
    i.current = u;
  }, drop: () => {
    if (r(!1), a.current === null || i === null)
      return;
    const u = [...e], [l] = u.splice(a.current, 1);
    u.splice(i.current, 0, l), t(u), a.current = null, i.current = null;
  } };
}, Gi = () => ({ getStoredItem: (r) => {
  const a = localStorage.getItem(r);
  return a ? JSON.parse(a) : void 0;
}, saveItemInStorage: (r, a) => {
  const i = JSON.stringify(a);
  localStorage.setItem(r, i);
}, removeStoredItem: (r) => {
  localStorage.removeItem(r);
} }), Ki = (e, t = "") => {
  const [n, r] = ie(""), a = Xt(() => n === "" ? e : e?.filter(({
    label: s
  }) => s.toLowerCase().includes(n)), [e, n]), i = (s) => r(s.toLowerCase()), o = !!e?.length && /* @__PURE__ */ C(Zu, {
    additionalClass: t,
    onSearch: i,
    onClear: () => r("")
  });
  return {
    filteredLinks: a,
    SearchLinks: o,
    isSearching: !!n
  };
}, Re = {
  "edit-user-profile-header": "_edit-user-profile-header_1mq1o_1",
  "edit-user-profile-header__top": "_edit-user-profile-header__top_1mq1o_14",
  "edit-user-profile-header__input": "_edit-user-profile-header__input_1mq1o_29",
  "edit-user-profile-header__actions": "_edit-user-profile-header__actions_1mq1o_32",
  "edit-user-profile-header__remove": "_edit-user-profile-header__remove_1mq1o_39",
  "edit-user-profile-header__no-avatar": "_edit-user-profile-header__no-avatar_1mq1o_47",
  "edit-user-profile-header__user": "_edit-user-profile-header__user_1mq1o_63",
  "edit-user-profile-header__error": "_edit-user-profile-header__error_1mq1o_67",
  "edit-user-profile-header__success": "_edit-user-profile-header__success_1mq1o_70"
}, tf = _t(({
  avatarUrl: e,
  username: t,
  onRemoveAvatar: n,
  onAvatarUpload: r,
  onChangeUsername: a,
  onSaveChanges: i,
  onDiscardChanges: o
}) => {
  const s = Fe(null);
  return /* @__PURE__ */ W("header", {
    className: `${Re["edit-user-profile-header"]}`,
    children: [/* @__PURE__ */ W("div", {
      className: Re["edit-user-profile-header__top"],
      children: [/* @__PURE__ */ W("button", {
        onClick: () => s.current?.click(),
        "aria-label": "Click to upload an avatar",
        children: [e ? /* @__PURE__ */ C(Wi, {
          src: e,
          alt: "user avatar"
        }) : /* @__PURE__ */ W("div", {
          className: Re["edit-user-profile-header__no-avatar"],
          children: [/* @__PURE__ */ C(Ce, {
            icon: ni,
            className: Re["edit-user-profile-header__user"]
          }), /* @__PURE__ */ C("p", {
            children: "Add avatar"
          })]
        }), /* @__PURE__ */ C("input", {
          type: "file",
          accept: Fi.join(","),
          ref: s,
          onChange: r
        })]
      }), /* @__PURE__ */ W("div", {
        className: `${Re["edit-user-profile-header__actions"]}`,
        children: [!!e && /* @__PURE__ */ C(me, {
          icon: ri,
          buttonType: "action",
          "aria-label": "Click to remove avatar",
          title: "Remove avatar",
          additionalClass: Re["edit-user-profile-header__remove"],
          onClick: n
        }), /* @__PURE__ */ W("div", {
          children: [/* @__PURE__ */ C(me, {
            "aria-label": "Click to discard the user profile changes'}",
            title: "Discard user profile changes",
            buttonType: "action",
            icon: $o,
            iconSize: "lg",
            additionalClass: Re["edit-user-profile-header__error"],
            onClick: o
          }), /* @__PURE__ */ C(me, {
            "aria-label": "Click to save the user profile changes'}",
            title: "Save user profile changes",
            buttonType: "action",
            icon: es,
            iconSize: "lg",
            additionalClass: Re["edit-user-profile-header__success"],
            onClick: i
          })]
        })]
      })]
    }), /* @__PURE__ */ C(xt, {
      autoComplete: "off",
      placeholder: "User's name",
      value: t,
      additionalClass: Re["edit-user-profile-header__input"],
      onChange: a
    })]
  });
}), nf = _t(({
  isModalClosing: e,
  modalType: t,
  selectedLink: n,
  addLink: r,
  deleteLink: a,
  editLink: i,
  onExitEditMode: o,
  onCloseModal: s,
  onCloseModalSuccess: c
}) => ({
  "add-edit-link": /* @__PURE__ */ C(ql, {
    selectedLink: n,
    onAddLink: r,
    onEditLink: i,
    isModalClosing: e,
    onCloseModal: s,
    onCloseModalSuccess: c
  }),
  "discard-confirmation": /* @__PURE__ */ C(Ua, {
    title: "Are you sure?",
    question: "Do you want to discard the changes?",
    isModalClosing: e,
    onConfirm: o,
    onCloseModal: s,
    onCloseModalSuccess: c
  }),
  "delete-link-confirmation": /* @__PURE__ */ C(Ua, {
    title: "Are you sure?",
    question: "Do you want to delete this link?",
    isModalClosing: e,
    onConfirm: a,
    onCloseModal: s,
    onCloseModalSuccess: c
  })
})[t]), zn = {
  "link-manager": "_link-manager_1f54x_1",
  "link-manager--draggable": "_link-manager--draggable_1f54x_19",
  "link-manager__actions": "_link-manager__actions_1f54x_30"
}, rf = ({
  link: e,
  additionalClass: t,
  draggable: n,
  dragStart: r,
  dragEnter: a,
  drop: i,
  onEditLink: o,
  onDeleteLink: s,
  ...c
}) => {
  const {
    label: u,
    icon: l
  } = e, d = Bi();
  return /* @__PURE__ */ W("div", {
    className: `${zn["link-manager"]}  ${n ? zn["link-manager--draggable"] : ""} ${t || ""}`,
    draggable: n,
    onDragStart: d ? () => null : () => r(),
    onDragEnter: d ? () => null : () => a(),
    onDragEnd: d ? () => null : i,
    ...c,
    children: [/* @__PURE__ */ W("div", {
      children: [/* @__PURE__ */ C(Ce, {
        icon: l,
        size: "lg",
        style: {
          marginRight: "0.5rem"
        }
      }), /* @__PURE__ */ C("p", {
        children: u
      })]
    }), /* @__PURE__ */ W("div", {
      className: `${zn["link-manager__actions"]}`,
      children: [/* @__PURE__ */ C(me, {
        icon: ei,
        buttonType: "action",
        "aria-label": `click to edit ${u} link`,
        title: `edit ${u}`,
        onClick: o
      }), /* @__PURE__ */ C(me, {
        icon: ri,
        buttonType: "action",
        "aria-label": `click to delete ${u} link`,
        title: `delete ${u}`,
        onClick: s
      })]
    })]
  });
}, af = {
  "no-links": "_no-links_12rio_1"
}, qi = ({
  sentence: e = "No links to display",
  additionalClass: t,
  showAddButton: n = !0,
  onAddNewLink: r
}) => /* @__PURE__ */ W("div", {
  className: `${af["no-links"]} ${t || ""}`,
  children: [/* @__PURE__ */ C("p", {
    children: e
  }), n && /* @__PURE__ */ C(me, {
    label: "Add new link",
    "aria-label": "Click to add new link",
    title: "Add new link",
    icon: ai,
    onClick: r
  })]
}), et = {
  "edit-user-profile": "_edit-user-profile_9t10u_1",
  "edit-user-profile__main": "_edit-user-profile__main_9t10u_5",
  "edit-user-profile__search": "_edit-user-profile__search_9t10u_11",
  "edit-user-profile__links": "_edit-user-profile__links_9t10u_15",
  "edit-user-profile__float-button": "_edit-user-profile__float-button_9t10u_20"
}, of = ({
  profile: e,
  colors: t,
  onExitEditMode: n
}) => {
  const {
    saveItemInStorage: r
  } = Gi(), [a, i] = ie(null), [o, s] = ie(!1), [c, u] = ie(null), [l, d] = ie(e?.links ? [...e.links] : []), [m, h] = ie(e?.avatarUrl || ""), [w, b] = ie(e?.username || ""), [x, g] = ie(t ? {
    ...t
  } : {
    primary: "",
    secondary: "",
    font: ""
  }), {
    filteredLinks: k,
    isSearching: v,
    SearchLinks: E
  } = Ki(l, et["edit-user-profile__search"]), p = ae(() => s(!0), []), N = ae(() => {
    s(!1), u(null), i(null);
  }, []), U = ae((M) => d([M, ...l]), [l]), te = ae((M) => {
    const P = l.map((O) => O.id === M.id ? M : O);
    d(P), u(null);
  }, [l]), X = ae(() => {
    if (!c)
      return;
    const M = l.filter(({
      id: P
    }) => P !== c.id);
    d(M), u(null);
  }, [l, c]), oe = ae(() => {
    r(ji, {
      profile: {
        links: l,
        avatarUrl: m,
        username: w
      },
      colors: x
    }), n();
  }, [m, w, x, l, r, n]), he = ae(() => i("discard-confirmation"), []), pe = () => {
    i("add-edit-link");
  }, Q = (M) => {
    u(M), i("add-edit-link");
  }, le = (M) => {
    u(M), i("delete-link-confirmation");
  }, Ae = ae((M) => b(M.target.value), []), ue = ae(() => h(""), []), ye = ae((M) => {
    if (!M.target.files)
      return;
    const P = M.target.files[0], O = `.${P.type.split("/").pop()}`.toLowerCase();
    if (!Fi.includes(O))
      return alert("The file type is invalid! Please upload an image!");
    const j = new FileReader();
    j.onloadend = () => {
      const D = j.result;
      if (!cr(D))
        return M.target.value = "", alert("The file is corrupted. Please upload a valid image!");
      h(D), M.target.value = "";
    }, j.readAsDataURL(P);
  }, []), Te = ae((M) => {
    const {
      value: P,
      name: O
    } = M.target;
    g((j) => ({
      ...j,
      [O]: P
    }));
  }, []), {
    dragStart: Le,
    dragEnter: A,
    drop: _
  } = ef(l, d);
  return /* @__PURE__ */ W("div", {
    className: `${et["edit-user-profile"]}`,
    children: [/* @__PURE__ */ C(tf, {
      avatarUrl: m,
      username: w,
      onAvatarUpload: ye,
      onChangeUsername: Ae,
      onSaveChanges: oe,
      onDiscardChanges: he,
      onRemoveAvatar: ue
    }), /* @__PURE__ */ W("main", {
      className: `${et["edit-user-profile__main"]}`,
      children: [/* @__PURE__ */ C($l, {
        colors: x,
        onColorUpdate: Te
      }), E, k?.length ? /* @__PURE__ */ C("div", {
        className: et["edit-user-profile__links"],
        children: k.map((M, P) => /* @__PURE__ */ C(rf, {
          link: M,
          draggable: !0,
          dragStart: () => Le(P),
          dragEnter: () => A(P),
          drop: _,
          onEditLink: () => Q(M),
          onDeleteLink: () => le(M)
        }, M.id))
      }) : /* @__PURE__ */ C(qi, {
        sentence: `No links to display. ${v ? "Please change search keywords." : ""}`,
        showAddButton: !v,
        onAddNewLink: pe,
        additionalClass: v ? "" : et["user-profile__no-links"]
      })]
    }), !!a && /* @__PURE__ */ C(nf, {
      isModalClosing: o,
      modalType: a,
      selectedLink: c,
      addLink: U,
      deleteLink: X,
      editLink: te,
      onExitEditMode: n,
      onCloseModal: p,
      onCloseModalSuccess: N
    }), !!l?.length && /* @__PURE__ */ C(me, {
      "aria-label": "Click to add new link",
      title: "Add new link",
      icon: ai,
      additionalClass: et["edit-user-profile__float-button"],
      onClick: pe
    })]
  });
}, sf = {
  "link-display": "_link-display_1re7w_1"
}, cf = ({
  link: e,
  additionalClass: t,
  onSelectLink: n,
  ...r
}) => {
  const {
    url: a,
    label: i,
    icon: o
  } = e, s = ae((c) => {
    c.preventDefault(), n();
  }, [n]);
  return /* @__PURE__ */ W("a", {
    target: "_blank",
    rel: "nofollow noopener noreferrer",
    href: a,
    className: `${sf["link-display"]} ${t || ""}`,
    "aria-label": `click to go to ${i}`,
    title: `go to ${i}`,
    ...r,
    children: [/* @__PURE__ */ C(Ce, {
      icon: o,
      size: "lg"
    }), /* @__PURE__ */ C("p", {
      children: i
    }), /* @__PURE__ */ C(me, {
      icon: Yo,
      onClick: s,
      "aria-label": `click to check ${i} link`,
      title: `check ${i}`
    })]
  });
}, lf = (e) => {
  const { getStoredItem: t } = Gi(), n = t(ji) || {}, r = e || n, a = Xt(() => {
    const i = {};
    if (!r.colors)
      return i;
    const { primary: o, secondary: s, font: c } = r.colors;
    return o && Dn(o) && (i["--primary-color"] = o), s && Dn(s) && (i["--secondary-color"] = s, i["--secondary-color90"] = Da(s, 0.9), i["--secondary-color80"] = Da(s, 0.8)), c && Dn(c) && (i["--font-color"] = c), i;
  }, [r.colors]);
  return { profile: r.profile, colors: r.colors, cssVars: a };
};
function ff(e, t) {
  if (e.match(/^[a-z]+:\/\//i))
    return e;
  if (e.match(/^\/\//))
    return window.location.protocol + e;
  if (e.match(/^[a-z]+:/i))
    return e;
  const n = document.implementation.createHTMLDocument(), r = n.createElement("base"), a = n.createElement("a");
  return n.head.appendChild(r), n.body.appendChild(a), t && (r.href = t), a.href = e, a.href;
}
const uf = (() => {
  let e = 0;
  const t = () => `0000${(Math.random() * 36 ** 4 << 0).toString(36)}`.slice(-4);
  return () => (e += 1, `u${t()}${e}`);
})();
function Ye(e) {
  const t = [];
  for (let n = 0, r = e.length; n < r; n++)
    t.push(e[n]);
  return t;
}
function nn(e, t) {
  const r = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
  return r ? parseFloat(r.replace("px", "")) : 0;
}
function df(e) {
  const t = nn(e, "border-left-width"), n = nn(e, "border-right-width");
  return e.clientWidth + t + n;
}
function mf(e) {
  const t = nn(e, "border-top-width"), n = nn(e, "border-bottom-width");
  return e.clientHeight + t + n;
}
function Zi(e, t = {}) {
  const n = t.width || df(e), r = t.height || mf(e);
  return { width: n, height: r };
}
function hf() {
  let e, t;
  try {
    t = process;
  } catch {
  }
  const n = t && t.env ? t.env.devicePixelRatio : null;
  return n && (e = parseInt(n, 10), Number.isNaN(e) && (e = 1)), e || window.devicePixelRatio || 1;
}
const ge = 16384;
function pf(e) {
  (e.width > ge || e.height > ge) && (e.width > ge && e.height > ge ? e.width > e.height ? (e.height *= ge / e.width, e.width = ge) : (e.width *= ge / e.height, e.height = ge) : e.width > ge ? (e.height *= ge / e.width, e.width = ge) : (e.width *= ge / e.height, e.height = ge));
}
function rn(e) {
  return new Promise((t, n) => {
    const r = new Image();
    r.decode = () => t(r), r.onload = () => t(r), r.onerror = n, r.crossOrigin = "anonymous", r.decoding = "async", r.src = e;
  });
}
async function gf(e) {
  return Promise.resolve().then(() => new XMLSerializer().serializeToString(e)).then(encodeURIComponent).then((t) => `data:image/svg+xml;charset=utf-8,${t}`);
}
async function vf(e, t, n) {
  const r = "http://www.w3.org/2000/svg", a = document.createElementNS(r, "svg"), i = document.createElementNS(r, "foreignObject");
  return a.setAttribute("width", `${t}`), a.setAttribute("height", `${n}`), a.setAttribute("viewBox", `0 0 ${t} ${n}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), a.appendChild(i), i.appendChild(e), gf(a);
}
function bf(e) {
  const t = e.getPropertyValue("content");
  return `${e.cssText} content: '${t.replace(/'|"/g, "")}';`;
}
function yf(e) {
  return Ye(e).map((t) => {
    const n = e.getPropertyValue(t), r = e.getPropertyPriority(t);
    return `${t}: ${n}${r ? " !important" : ""};`;
  }).join(" ");
}
function wf(e, t, n) {
  const r = `.${e}:${t}`, a = n.cssText ? bf(n) : yf(n);
  return document.createTextNode(`${r}{${a}}`);
}
function Va(e, t, n) {
  const r = window.getComputedStyle(e, n), a = r.getPropertyValue("content");
  if (a === "" || a === "none")
    return;
  const i = uf();
  try {
    t.className = `${t.className} ${i}`;
  } catch {
    return;
  }
  const o = document.createElement("style");
  o.appendChild(wf(i, n, r)), t.appendChild(o);
}
function Ef(e, t) {
  Va(e, t, ":before"), Va(e, t, ":after");
}
const Wa = "application/font-woff", Ja = "image/jpeg", Af = {
  woff: Wa,
  woff2: Wa,
  ttf: "application/font-truetype",
  eot: "application/vnd.ms-fontobject",
  png: "image/png",
  jpg: Ja,
  jpeg: Ja,
  gif: "image/gif",
  tiff: "image/tiff",
  svg: "image/svg+xml",
  webp: "image/webp"
};
function kf(e) {
  const t = /\.([^./]*?)$/g.exec(e);
  return t ? t[1] : "";
}
function Pr(e) {
  const t = kf(e).toLowerCase();
  return Af[t] || "";
}
function Cf(e) {
  return e.split(/,/)[1];
}
function lr(e) {
  return e.search(/^(data:)/) !== -1;
}
function Xi(e, t) {
  return `data:${t};base64,${e}`;
}
async function Qi(e, t, n) {
  const r = await fetch(e, t);
  if (r.status === 404)
    throw new Error(`Resource "${r.url}" not found`);
  const a = await r.blob();
  return new Promise((i, o) => {
    const s = new FileReader();
    s.onerror = o, s.onloadend = () => {
      try {
        i(n({ res: r, result: s.result }));
      } catch (c) {
        o(c);
      }
    }, s.readAsDataURL(a);
  });
}
const Bn = {};
function Sf(e, t, n) {
  let r = e.replace(/\?.*/, "");
  return n && (r = e), /ttf|otf|eot|woff2?/i.test(r) && (r = r.replace(/.*\//, "")), t ? `[${t}]${r}` : r;
}
async function Or(e, t, n) {
  const r = Sf(e, t, n.includeQueryParams);
  if (Bn[r] != null)
    return Bn[r];
  n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + new Date().getTime());
  let a;
  try {
    const i = await Qi(e, n.fetchRequestInit, ({ res: o, result: s }) => (t || (t = o.headers.get("Content-Type") || ""), Cf(s)));
    a = Xi(i, t);
  } catch (i) {
    a = n.imagePlaceholder || "";
    let o = `Failed to fetch resource: ${e}`;
    i && (o = typeof i == "string" ? i : i.message), o && console.warn(o);
  }
  return Bn[r] = a, a;
}
async function xf(e) {
  const t = e.toDataURL();
  return t === "data:," ? e.cloneNode(!1) : rn(t);
}
async function Tf(e, t) {
  if (e.currentSrc) {
    const i = document.createElement("canvas"), o = i.getContext("2d");
    i.width = e.clientWidth, i.height = e.clientHeight, o?.drawImage(e, 0, 0, i.width, i.height);
    const s = i.toDataURL();
    return rn(s);
  }
  const n = e.poster, r = Pr(n), a = await Or(n, r, t);
  return rn(a);
}
async function _f(e) {
  var t;
  try {
    if (!((t = e?.contentDocument) === null || t === void 0) && t.body)
      return await mn(e.contentDocument.body, {}, !0);
  } catch {
  }
  return e.cloneNode(!1);
}
async function Rf(e, t) {
  return e instanceof HTMLCanvasElement ? xf(e) : e instanceof HTMLVideoElement ? Tf(e, t) : e instanceof HTMLIFrameElement ? _f(e) : e.cloneNode(!1);
}
const Mf = (e) => e.tagName != null && e.tagName.toUpperCase() === "SLOT";
async function If(e, t, n) {
  var r;
  const a = Mf(e) && e.assignedNodes ? Ye(e.assignedNodes()) : Ye(((r = e.shadowRoot) !== null && r !== void 0 ? r : e).childNodes);
  return a.length === 0 || e instanceof HTMLVideoElement || await a.reduce((i, o) => i.then(() => mn(o, n)).then((s) => {
    s && t.appendChild(s);
  }), Promise.resolve()), t;
}
function Pf(e, t) {
  const n = t.style;
  if (!n)
    return;
  const r = window.getComputedStyle(e);
  r.cssText ? (n.cssText = r.cssText, n.transformOrigin = r.transformOrigin) : Ye(r).forEach((a) => {
    let i = r.getPropertyValue(a);
    a === "font-size" && i.endsWith("px") && (i = `${Math.floor(parseFloat(i.substring(0, i.length - 2))) - 0.1}px`), n.setProperty(a, i, r.getPropertyPriority(a));
  });
}
function Of(e, t) {
  e instanceof HTMLTextAreaElement && (t.innerHTML = e.value), e instanceof HTMLInputElement && t.setAttribute("value", e.value);
}
function Lf(e, t) {
  if (e instanceof HTMLSelectElement) {
    const n = t, r = Array.from(n.children).find((a) => e.value === a.getAttribute("value"));
    r && r.setAttribute("selected", "");
  }
}
function Nf(e, t) {
  return t instanceof Element && (Pf(e, t), Ef(e, t), Of(e, t), Lf(e, t)), t;
}
async function Df(e, t) {
  const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
  if (n.length === 0)
    return e;
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const s = n[i].getAttribute("xlink:href");
    if (s) {
      const c = e.querySelector(s), u = document.querySelector(s);
      !c && u && !r[s] && (r[s] = await mn(u, t, !0));
    }
  }
  const a = Object.values(r);
  if (a.length) {
    const i = "http://www.w3.org/1999/xhtml", o = document.createElementNS(i, "svg");
    o.setAttribute("xmlns", i), o.style.position = "absolute", o.style.width = "0", o.style.height = "0", o.style.overflow = "hidden", o.style.display = "none";
    const s = document.createElementNS(i, "defs");
    o.appendChild(s);
    for (let c = 0; c < a.length; c++)
      s.appendChild(a[c]);
    e.appendChild(o);
  }
  return e;
}
async function mn(e, t, n) {
  return !n && t.filter && !t.filter(e) ? null : Promise.resolve(e).then((r) => Rf(r, t)).then((r) => If(e, r, t)).then((r) => Nf(e, r)).then((r) => Df(r, t));
}
const $i = /url\((['"]?)([^'"]+?)\1\)/g, jf = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g, Ff = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
function zf(e) {
  const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
  return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g");
}
function Bf(e) {
  const t = [];
  return e.replace($i, (n, r, a) => (t.push(a), n)), t.filter((n) => !lr(n));
}
async function Hf(e, t, n, r, a) {
  try {
    const i = n ? ff(t, n) : t, o = Pr(t);
    let s;
    if (a) {
      const c = await a(i);
      s = Xi(c, o);
    } else
      s = await Or(i, o, r);
    return e.replace(zf(t), `$1${s}$3`);
  } catch {
  }
  return e;
}
function Yf(e, { preferredFontFormat: t }) {
  return t ? e.replace(Ff, (n) => {
    for (; ; ) {
      const [r, , a] = jf.exec(n) || [];
      if (!a)
        return "";
      if (a === t)
        return `src: ${r};`;
    }
  }) : e;
}
function eo(e) {
  return e.search($i) !== -1;
}
async function to(e, t, n) {
  if (!eo(e))
    return e;
  const r = Yf(e, n);
  return Bf(r).reduce((i, o) => i.then((s) => Hf(s, o, t, n)), Promise.resolve(r));
}
async function Uf(e, t) {
  var n;
  const r = (n = e.style) === null || n === void 0 ? void 0 : n.getPropertyValue("background");
  if (r) {
    const a = await to(r, null, t);
    e.style.setProperty("background", a, e.style.getPropertyPriority("background"));
  }
}
async function Vf(e, t) {
  if (!(e instanceof HTMLImageElement && !lr(e.src)) && !(e instanceof SVGImageElement && !lr(e.href.baseVal)))
    return;
  const n = e instanceof HTMLImageElement ? e.src : e.href.baseVal, r = await Or(n, Pr(n), t);
  await new Promise((a, i) => {
    e.onload = a, e.onerror = i;
    const o = e;
    o.decode && (o.decode = a), e instanceof HTMLImageElement ? (e.srcset = "", e.src = r) : e.href.baseVal = r;
  });
}
async function Wf(e, t) {
  const r = Ye(e.childNodes).map((a) => no(a, t));
  await Promise.all(r).then(() => e);
}
async function no(e, t) {
  e instanceof Element && (await Uf(e, t), await Vf(e, t), await Wf(e, t));
}
function Jf(e, t) {
  const { style: n } = e;
  t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
  const r = t.style;
  return r != null && Object.keys(r).forEach((a) => {
    n[a] = r[a];
  }), e;
}
const Ga = {};
async function Ka(e) {
  let t = Ga[e];
  if (t != null)
    return t;
  const r = await (await fetch(e)).text();
  return t = { url: e, cssText: r }, Ga[e] = t, t;
}
async function qa(e, t) {
  let n = e.cssText;
  const r = /url\(["']?([^"')]+)["']?\)/g, i = (n.match(/url\([^)]+\)/g) || []).map(async (o) => {
    let s = o.replace(r, "$1");
    return s.startsWith("https://") || (s = new URL(s, e.url).href), Qi(s, t.fetchRequestInit, ({ result: c }) => (n = n.replace(o, `url(${c})`), [o, c]));
  });
  return Promise.all(i).then(() => n);
}
function Za(e) {
  if (e == null)
    return [];
  const t = [], n = /(\/\*[\s\S]*?\*\/)/gi;
  let r = e.replace(n, "");
  const a = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
  for (; ; ) {
    const c = a.exec(r);
    if (c === null)
      break;
    t.push(c[0]);
  }
  r = r.replace(a, "");
  const i = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi, o = "((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", s = new RegExp(o, "gi");
  for (; ; ) {
    let c = i.exec(r);
    if (c === null) {
      if (c = s.exec(r), c === null)
        break;
      i.lastIndex = s.lastIndex;
    } else
      s.lastIndex = i.lastIndex;
    t.push(c[0]);
  }
  return t;
}
async function Gf(e, t) {
  const n = [], r = [];
  return e.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ye(a.cssRules || []).forEach((i, o) => {
          if (i.type === CSSRule.IMPORT_RULE) {
            let s = o + 1;
            const c = i.href, u = Ka(c).then((l) => qa(l, t)).then((l) => Za(l).forEach((d) => {
              try {
                a.insertRule(d, d.startsWith("@import") ? s += 1 : a.cssRules.length);
              } catch (m) {
                console.error("Error inserting rule from remote css", {
                  rule: d,
                  error: m
                });
              }
            })).catch((l) => {
              console.error("Error loading remote css", l.toString());
            });
            r.push(u);
          }
        });
      } catch (i) {
        const o = e.find((s) => s.href == null) || document.styleSheets[0];
        a.href != null && r.push(Ka(a.href).then((s) => qa(s, t)).then((s) => Za(s).forEach((c) => {
          o.insertRule(c, a.cssRules.length);
        })).catch((s) => {
          console.error("Error loading remote stylesheet", s.toString());
        })), console.error("Error inlining remote css file", i.toString());
      }
  }), Promise.all(r).then(() => (e.forEach((a) => {
    if ("cssRules" in a)
      try {
        Ye(a.cssRules || []).forEach((i) => {
          n.push(i);
        });
      } catch (i) {
        console.error(`Error while reading CSS rules from ${a.href}`, i.toString());
      }
  }), n));
}
function Kf(e) {
  return e.filter((t) => t.type === CSSRule.FONT_FACE_RULE).filter((t) => eo(t.style.getPropertyValue("src")));
}
async function qf(e, t) {
  if (e.ownerDocument == null)
    throw new Error("Provided element is not within a Document");
  const n = Ye(e.ownerDocument.styleSheets), r = await Gf(n, t);
  return Kf(r);
}
async function Zf(e, t) {
  const n = await qf(e, t);
  return (await Promise.all(n.map((a) => {
    const i = a.parentStyleSheet ? a.parentStyleSheet.href : null;
    return to(a.cssText, i, t);
  }))).join(`
`);
}
async function Xf(e, t) {
  const n = t.fontEmbedCSS != null ? t.fontEmbedCSS : t.skipFonts ? null : await Zf(e, t);
  if (n) {
    const r = document.createElement("style"), a = document.createTextNode(n);
    r.appendChild(a), e.firstChild ? e.insertBefore(r, e.firstChild) : e.appendChild(r);
  }
}
async function Qf(e, t = {}) {
  const { width: n, height: r } = Zi(e, t), a = await mn(e, t, !0);
  return await Xf(a, t), await no(a, t), Jf(a, t), await vf(a, n, r);
}
async function $f(e, t = {}) {
  const { width: n, height: r } = Zi(e, t), a = await Qf(e, t), i = await rn(a), o = document.createElement("canvas"), s = o.getContext("2d"), c = t.pixelRatio || hf(), u = t.canvasWidth || n, l = t.canvasHeight || r;
  return o.width = u * c, o.height = l * c, t.skipAutoScale || pf(o), o.style.width = `${u}`, o.style.height = `${l}`, t.backgroundColor && (s.fillStyle = t.backgroundColor, s.fillRect(0, 0, o.width, o.height)), s.drawImage(i, 0, 0, o.width, o.height), o;
}
async function eu(e, t = {}) {
  return (await $f(e, t)).toDataURL();
}
var Pt = {}, tu = function() {
  return typeof Promise == "function" && Promise.prototype && Promise.prototype.then;
}, ro = {}, be = {};
let Lr;
const nu = [
  0,
  26,
  44,
  70,
  100,
  134,
  172,
  196,
  242,
  292,
  346,
  404,
  466,
  532,
  581,
  655,
  733,
  815,
  901,
  991,
  1085,
  1156,
  1258,
  1364,
  1474,
  1588,
  1706,
  1828,
  1921,
  2051,
  2185,
  2323,
  2465,
  2611,
  2761,
  2876,
  3034,
  3196,
  3362,
  3532,
  3706
];
be.getSymbolSize = function(t) {
  if (!t)
    throw new Error('"version" cannot be null or undefined');
  if (t < 1 || t > 40)
    throw new Error('"version" should be in range from 1 to 40');
  return t * 4 + 17;
};
be.getSymbolTotalCodewords = function(t) {
  return nu[t];
};
be.getBCHDigit = function(e) {
  let t = 0;
  for (; e !== 0; )
    t++, e >>>= 1;
  return t;
};
be.setToSJISFunction = function(t) {
  if (typeof t != "function")
    throw new Error('"toSJISFunc" is not a valid function.');
  Lr = t;
};
be.isKanjiModeEnabled = function() {
  return typeof Lr < "u";
};
be.toSJIS = function(t) {
  return Lr(t);
};
var hn = {};
(function(e) {
  e.L = { bit: 1 }, e.M = { bit: 0 }, e.Q = { bit: 3 }, e.H = { bit: 2 };
  function t(n) {
    if (typeof n != "string")
      throw new Error("Param is not a string");
    switch (n.toLowerCase()) {
      case "l":
      case "low":
        return e.L;
      case "m":
      case "medium":
        return e.M;
      case "q":
      case "quartile":
        return e.Q;
      case "h":
      case "high":
        return e.H;
      default:
        throw new Error("Unknown EC Level: " + n);
    }
  }
  e.isValid = function(r) {
    return r && typeof r.bit < "u" && r.bit >= 0 && r.bit < 4;
  }, e.from = function(r, a) {
    if (e.isValid(r))
      return r;
    try {
      return t(r);
    } catch {
      return a;
    }
  };
})(hn);
function ao() {
  this.buffer = [], this.length = 0;
}
ao.prototype = {
  get: function(e) {
    const t = Math.floor(e / 8);
    return (this.buffer[t] >>> 7 - e % 8 & 1) === 1;
  },
  put: function(e, t) {
    for (let n = 0; n < t; n++)
      this.putBit((e >>> t - n - 1 & 1) === 1);
  },
  getLengthInBits: function() {
    return this.length;
  },
  putBit: function(e) {
    const t = Math.floor(this.length / 8);
    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++;
  }
};
var ru = ao;
function Ot(e) {
  if (!e || e < 1)
    throw new Error("BitMatrix size must be defined and greater than 0");
  this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e);
}
Ot.prototype.set = function(e, t, n, r) {
  const a = e * this.size + t;
  this.data[a] = n, r && (this.reservedBit[a] = !0);
};
Ot.prototype.get = function(e, t) {
  return this.data[e * this.size + t];
};
Ot.prototype.xor = function(e, t, n) {
  this.data[e * this.size + t] ^= n;
};
Ot.prototype.isReserved = function(e, t) {
  return this.reservedBit[e * this.size + t];
};
var au = Ot, io = {};
(function(e) {
  const t = be.getSymbolSize;
  e.getRowColCoords = function(r) {
    if (r === 1)
      return [];
    const a = Math.floor(r / 7) + 2, i = t(r), o = i === 145 ? 26 : Math.ceil((i - 13) / (2 * a - 2)) * 2, s = [i - 7];
    for (let c = 1; c < a - 1; c++)
      s[c] = s[c - 1] - o;
    return s.push(6), s.reverse();
  }, e.getPositions = function(r) {
    const a = [], i = e.getRowColCoords(r), o = i.length;
    for (let s = 0; s < o; s++)
      for (let c = 0; c < o; c++)
        s === 0 && c === 0 || s === 0 && c === o - 1 || s === o - 1 && c === 0 || a.push([i[s], i[c]]);
    return a;
  };
})(io);
var oo = {};
const iu = be.getSymbolSize, Xa = 7;
oo.getPositions = function(t) {
  const n = iu(t);
  return [
    [0, 0],
    [n - Xa, 0],
    [0, n - Xa]
  ];
};
var so = {};
(function(e) {
  e.Patterns = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
  };
  const t = {
    N1: 3,
    N2: 3,
    N3: 40,
    N4: 10
  };
  e.isValid = function(a) {
    return a != null && a !== "" && !isNaN(a) && a >= 0 && a <= 7;
  }, e.from = function(a) {
    return e.isValid(a) ? parseInt(a, 10) : void 0;
  }, e.getPenaltyN1 = function(a) {
    const i = a.size;
    let o = 0, s = 0, c = 0, u = null, l = null;
    for (let d = 0; d < i; d++) {
      s = c = 0, u = l = null;
      for (let m = 0; m < i; m++) {
        let h = a.get(d, m);
        h === u ? s++ : (s >= 5 && (o += t.N1 + (s - 5)), u = h, s = 1), h = a.get(m, d), h === l ? c++ : (c >= 5 && (o += t.N1 + (c - 5)), l = h, c = 1);
      }
      s >= 5 && (o += t.N1 + (s - 5)), c >= 5 && (o += t.N1 + (c - 5));
    }
    return o;
  }, e.getPenaltyN2 = function(a) {
    const i = a.size;
    let o = 0;
    for (let s = 0; s < i - 1; s++)
      for (let c = 0; c < i - 1; c++) {
        const u = a.get(s, c) + a.get(s, c + 1) + a.get(s + 1, c) + a.get(s + 1, c + 1);
        (u === 4 || u === 0) && o++;
      }
    return o * t.N2;
  }, e.getPenaltyN3 = function(a) {
    const i = a.size;
    let o = 0, s = 0, c = 0;
    for (let u = 0; u < i; u++) {
      s = c = 0;
      for (let l = 0; l < i; l++)
        s = s << 1 & 2047 | a.get(u, l), l >= 10 && (s === 1488 || s === 93) && o++, c = c << 1 & 2047 | a.get(l, u), l >= 10 && (c === 1488 || c === 93) && o++;
    }
    return o * t.N3;
  }, e.getPenaltyN4 = function(a) {
    let i = 0;
    const o = a.data.length;
    for (let c = 0; c < o; c++)
      i += a.data[c];
    return Math.abs(Math.ceil(i * 100 / o / 5) - 10) * t.N4;
  };
  function n(r, a, i) {
    switch (r) {
      case e.Patterns.PATTERN000:
        return (a + i) % 2 === 0;
      case e.Patterns.PATTERN001:
        return a % 2 === 0;
      case e.Patterns.PATTERN010:
        return i % 3 === 0;
      case e.Patterns.PATTERN011:
        return (a + i) % 3 === 0;
      case e.Patterns.PATTERN100:
        return (Math.floor(a / 2) + Math.floor(i / 3)) % 2 === 0;
      case e.Patterns.PATTERN101:
        return a * i % 2 + a * i % 3 === 0;
      case e.Patterns.PATTERN110:
        return (a * i % 2 + a * i % 3) % 2 === 0;
      case e.Patterns.PATTERN111:
        return (a * i % 3 + (a + i) % 2) % 2 === 0;
      default:
        throw new Error("bad maskPattern:" + r);
    }
  }
  e.applyMask = function(a, i) {
    const o = i.size;
    for (let s = 0; s < o; s++)
      for (let c = 0; c < o; c++)
        i.isReserved(c, s) || i.xor(c, s, n(a, c, s));
  }, e.getBestMask = function(a, i) {
    const o = Object.keys(e.Patterns).length;
    let s = 0, c = 1 / 0;
    for (let u = 0; u < o; u++) {
      i(u), e.applyMask(u, a);
      const l = e.getPenaltyN1(a) + e.getPenaltyN2(a) + e.getPenaltyN3(a) + e.getPenaltyN4(a);
      e.applyMask(u, a), l < c && (c = l, s = u);
    }
    return s;
  };
})(so);
var pn = {};
const je = hn, Wt = [
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  1,
  2,
  2,
  1,
  2,
  2,
  4,
  1,
  2,
  4,
  4,
  2,
  4,
  4,
  4,
  2,
  4,
  6,
  5,
  2,
  4,
  6,
  6,
  2,
  5,
  8,
  8,
  4,
  5,
  8,
  8,
  4,
  5,
  8,
  11,
  4,
  8,
  10,
  11,
  4,
  9,
  12,
  16,
  4,
  9,
  16,
  16,
  6,
  10,
  12,
  18,
  6,
  10,
  17,
  16,
  6,
  11,
  16,
  19,
  6,
  13,
  18,
  21,
  7,
  14,
  21,
  25,
  8,
  16,
  20,
  25,
  8,
  17,
  23,
  25,
  9,
  17,
  23,
  34,
  9,
  18,
  25,
  30,
  10,
  20,
  27,
  32,
  12,
  21,
  29,
  35,
  12,
  23,
  34,
  37,
  12,
  25,
  34,
  40,
  13,
  26,
  35,
  42,
  14,
  28,
  38,
  45,
  15,
  29,
  40,
  48,
  16,
  31,
  43,
  51,
  17,
  33,
  45,
  54,
  18,
  35,
  48,
  57,
  19,
  37,
  51,
  60,
  19,
  38,
  53,
  63,
  20,
  40,
  56,
  66,
  21,
  43,
  59,
  70,
  22,
  45,
  62,
  74,
  24,
  47,
  65,
  77,
  25,
  49,
  68,
  81
], Jt = [
  7,
  10,
  13,
  17,
  10,
  16,
  22,
  28,
  15,
  26,
  36,
  44,
  20,
  36,
  52,
  64,
  26,
  48,
  72,
  88,
  36,
  64,
  96,
  112,
  40,
  72,
  108,
  130,
  48,
  88,
  132,
  156,
  60,
  110,
  160,
  192,
  72,
  130,
  192,
  224,
  80,
  150,
  224,
  264,
  96,
  176,
  260,
  308,
  104,
  198,
  288,
  352,
  120,
  216,
  320,
  384,
  132,
  240,
  360,
  432,
  144,
  280,
  408,
  480,
  168,
  308,
  448,
  532,
  180,
  338,
  504,
  588,
  196,
  364,
  546,
  650,
  224,
  416,
  600,
  700,
  224,
  442,
  644,
  750,
  252,
  476,
  690,
  816,
  270,
  504,
  750,
  900,
  300,
  560,
  810,
  960,
  312,
  588,
  870,
  1050,
  336,
  644,
  952,
  1110,
  360,
  700,
  1020,
  1200,
  390,
  728,
  1050,
  1260,
  420,
  784,
  1140,
  1350,
  450,
  812,
  1200,
  1440,
  480,
  868,
  1290,
  1530,
  510,
  924,
  1350,
  1620,
  540,
  980,
  1440,
  1710,
  570,
  1036,
  1530,
  1800,
  570,
  1064,
  1590,
  1890,
  600,
  1120,
  1680,
  1980,
  630,
  1204,
  1770,
  2100,
  660,
  1260,
  1860,
  2220,
  720,
  1316,
  1950,
  2310,
  750,
  1372,
  2040,
  2430
];
pn.getBlocksCount = function(t, n) {
  switch (n) {
    case je.L:
      return Wt[(t - 1) * 4 + 0];
    case je.M:
      return Wt[(t - 1) * 4 + 1];
    case je.Q:
      return Wt[(t - 1) * 4 + 2];
    case je.H:
      return Wt[(t - 1) * 4 + 3];
    default:
      return;
  }
};
pn.getTotalCodewordsCount = function(t, n) {
  switch (n) {
    case je.L:
      return Jt[(t - 1) * 4 + 0];
    case je.M:
      return Jt[(t - 1) * 4 + 1];
    case je.Q:
      return Jt[(t - 1) * 4 + 2];
    case je.H:
      return Jt[(t - 1) * 4 + 3];
    default:
      return;
  }
};
var co = {}, gn = {};
const wt = new Uint8Array(512), an = new Uint8Array(256);
(function() {
  let t = 1;
  for (let n = 0; n < 255; n++)
    wt[n] = t, an[t] = n, t <<= 1, t & 256 && (t ^= 285);
  for (let n = 255; n < 512; n++)
    wt[n] = wt[n - 255];
})();
gn.log = function(t) {
  if (t < 1)
    throw new Error("log(" + t + ")");
  return an[t];
};
gn.exp = function(t) {
  return wt[t];
};
gn.mul = function(t, n) {
  return t === 0 || n === 0 ? 0 : wt[an[t] + an[n]];
};
(function(e) {
  const t = gn;
  e.mul = function(r, a) {
    const i = new Uint8Array(r.length + a.length - 1);
    for (let o = 0; o < r.length; o++)
      for (let s = 0; s < a.length; s++)
        i[o + s] ^= t.mul(r[o], a[s]);
    return i;
  }, e.mod = function(r, a) {
    let i = new Uint8Array(r);
    for (; i.length - a.length >= 0; ) {
      const o = i[0];
      for (let c = 0; c < a.length; c++)
        i[c] ^= t.mul(a[c], o);
      let s = 0;
      for (; s < i.length && i[s] === 0; )
        s++;
      i = i.slice(s);
    }
    return i;
  }, e.generateECPolynomial = function(r) {
    let a = new Uint8Array([1]);
    for (let i = 0; i < r; i++)
      a = e.mul(a, new Uint8Array([1, t.exp(i)]));
    return a;
  };
})(co);
const lo = co;
function Nr(e) {
  this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree);
}
Nr.prototype.initialize = function(t) {
  this.degree = t, this.genPoly = lo.generateECPolynomial(this.degree);
};
Nr.prototype.encode = function(t) {
  if (!this.genPoly)
    throw new Error("Encoder not initialized");
  const n = new Uint8Array(t.length + this.degree);
  n.set(t);
  const r = lo.mod(n, this.genPoly), a = this.degree - r.length;
  if (a > 0) {
    const i = new Uint8Array(this.degree);
    return i.set(r, a), i;
  }
  return r;
};
var ou = Nr, fo = {}, Ue = {}, Dr = {};
Dr.isValid = function(t) {
  return !isNaN(t) && t >= 1 && t <= 40;
};
var xe = {};
const uo = "[0-9]+", su = "[A-Z $%*+\\-./:]+";
let Tt = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";
Tt = Tt.replace(/u/g, "\\u");
const cu = "(?:(?![A-Z0-9 $%*+\\-./:]|" + Tt + `)(?:.|[\r
]))+`;
xe.KANJI = new RegExp(Tt, "g");
xe.BYTE_KANJI = new RegExp("[^A-Z0-9 $%*+\\-./:]+", "g");
xe.BYTE = new RegExp(cu, "g");
xe.NUMERIC = new RegExp(uo, "g");
xe.ALPHANUMERIC = new RegExp(su, "g");
const lu = new RegExp("^" + Tt + "$"), fu = new RegExp("^" + uo + "$"), uu = new RegExp("^[A-Z0-9 $%*+\\-./:]+$");
xe.testKanji = function(t) {
  return lu.test(t);
};
xe.testNumeric = function(t) {
  return fu.test(t);
};
xe.testAlphanumeric = function(t) {
  return uu.test(t);
};
(function(e) {
  const t = Dr, n = xe;
  e.NUMERIC = {
    id: "Numeric",
    bit: 1 << 0,
    ccBits: [10, 12, 14]
  }, e.ALPHANUMERIC = {
    id: "Alphanumeric",
    bit: 1 << 1,
    ccBits: [9, 11, 13]
  }, e.BYTE = {
    id: "Byte",
    bit: 1 << 2,
    ccBits: [8, 16, 16]
  }, e.KANJI = {
    id: "Kanji",
    bit: 1 << 3,
    ccBits: [8, 10, 12]
  }, e.MIXED = {
    bit: -1
  }, e.getCharCountIndicator = function(i, o) {
    if (!i.ccBits)
      throw new Error("Invalid mode: " + i);
    if (!t.isValid(o))
      throw new Error("Invalid version: " + o);
    return o >= 1 && o < 10 ? i.ccBits[0] : o < 27 ? i.ccBits[1] : i.ccBits[2];
  }, e.getBestModeForData = function(i) {
    return n.testNumeric(i) ? e.NUMERIC : n.testAlphanumeric(i) ? e.ALPHANUMERIC : n.testKanji(i) ? e.KANJI : e.BYTE;
  }, e.toString = function(i) {
    if (i && i.id)
      return i.id;
    throw new Error("Invalid mode");
  }, e.isValid = function(i) {
    return i && i.bit && i.ccBits;
  };
  function r(a) {
    if (typeof a != "string")
      throw new Error("Param is not a string");
    switch (a.toLowerCase()) {
      case "numeric":
        return e.NUMERIC;
      case "alphanumeric":
        return e.ALPHANUMERIC;
      case "kanji":
        return e.KANJI;
      case "byte":
        return e.BYTE;
      default:
        throw new Error("Unknown mode: " + a);
    }
  }
  e.from = function(i, o) {
    if (e.isValid(i))
      return i;
    try {
      return r(i);
    } catch {
      return o;
    }
  };
})(Ue);
(function(e) {
  const t = be, n = pn, r = hn, a = Ue, i = Dr, o = 1 << 12 | 1 << 11 | 1 << 10 | 1 << 9 | 1 << 8 | 1 << 5 | 1 << 2 | 1 << 0, s = t.getBCHDigit(o);
  function c(m, h, w) {
    for (let b = 1; b <= 40; b++)
      if (h <= e.getCapacity(b, w, m))
        return b;
  }
  function u(m, h) {
    return a.getCharCountIndicator(m, h) + 4;
  }
  function l(m, h) {
    let w = 0;
    return m.forEach(function(b) {
      const x = u(b.mode, h);
      w += x + b.getBitsLength();
    }), w;
  }
  function d(m, h) {
    for (let w = 1; w <= 40; w++)
      if (l(m, w) <= e.getCapacity(w, h, a.MIXED))
        return w;
  }
  e.from = function(h, w) {
    return i.isValid(h) ? parseInt(h, 10) : w;
  }, e.getCapacity = function(h, w, b) {
    if (!i.isValid(h))
      throw new Error("Invalid QR Code version");
    typeof b > "u" && (b = a.BYTE);
    const x = t.getSymbolTotalCodewords(h), g = n.getTotalCodewordsCount(h, w), k = (x - g) * 8;
    if (b === a.MIXED)
      return k;
    const v = k - u(b, h);
    switch (b) {
      case a.NUMERIC:
        return Math.floor(v / 10 * 3);
      case a.ALPHANUMERIC:
        return Math.floor(v / 11 * 2);
      case a.KANJI:
        return Math.floor(v / 13);
      case a.BYTE:
      default:
        return Math.floor(v / 8);
    }
  }, e.getBestVersionForData = function(h, w) {
    let b;
    const x = r.from(w, r.M);
    if (Array.isArray(h)) {
      if (h.length > 1)
        return d(h, x);
      if (h.length === 0)
        return 1;
      b = h[0];
    } else
      b = h;
    return c(b.mode, b.getLength(), x);
  }, e.getEncodedBits = function(h) {
    if (!i.isValid(h) || h < 7)
      throw new Error("Invalid QR Code version");
    let w = h << 12;
    for (; t.getBCHDigit(w) - s >= 0; )
      w ^= o << t.getBCHDigit(w) - s;
    return h << 12 | w;
  };
})(fo);
var mo = {};
const fr = be, ho = 1 << 10 | 1 << 8 | 1 << 5 | 1 << 4 | 1 << 2 | 1 << 1 | 1 << 0, du = 1 << 14 | 1 << 12 | 1 << 10 | 1 << 4 | 1 << 1, Qa = fr.getBCHDigit(ho);
mo.getEncodedBits = function(t, n) {
  const r = t.bit << 3 | n;
  let a = r << 10;
  for (; fr.getBCHDigit(a) - Qa >= 0; )
    a ^= ho << fr.getBCHDigit(a) - Qa;
  return (r << 10 | a) ^ du;
};
var po = {};
const mu = Ue;
function st(e) {
  this.mode = mu.NUMERIC, this.data = e.toString();
}
st.getBitsLength = function(t) {
  return 10 * Math.floor(t / 3) + (t % 3 ? t % 3 * 3 + 1 : 0);
};
st.prototype.getLength = function() {
  return this.data.length;
};
st.prototype.getBitsLength = function() {
  return st.getBitsLength(this.data.length);
};
st.prototype.write = function(t) {
  let n, r, a;
  for (n = 0; n + 3 <= this.data.length; n += 3)
    r = this.data.substr(n, 3), a = parseInt(r, 10), t.put(a, 10);
  const i = this.data.length - n;
  i > 0 && (r = this.data.substr(n), a = parseInt(r, 10), t.put(a, i * 3 + 1));
};
var hu = st;
const pu = Ue, Hn = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  " ",
  "$",
  "%",
  "*",
  "+",
  "-",
  ".",
  "/",
  ":"
];
function ct(e) {
  this.mode = pu.ALPHANUMERIC, this.data = e;
}
ct.getBitsLength = function(t) {
  return 11 * Math.floor(t / 2) + 6 * (t % 2);
};
ct.prototype.getLength = function() {
  return this.data.length;
};
ct.prototype.getBitsLength = function() {
  return ct.getBitsLength(this.data.length);
};
ct.prototype.write = function(t) {
  let n;
  for (n = 0; n + 2 <= this.data.length; n += 2) {
    let r = Hn.indexOf(this.data[n]) * 45;
    r += Hn.indexOf(this.data[n + 1]), t.put(r, 11);
  }
  this.data.length % 2 && t.put(Hn.indexOf(this.data[n]), 6);
};
var gu = ct, vu = function(t) {
  for (var n = [], r = t.length, a = 0; a < r; a++) {
    var i = t.charCodeAt(a);
    if (i >= 55296 && i <= 56319 && r > a + 1) {
      var o = t.charCodeAt(a + 1);
      o >= 56320 && o <= 57343 && (i = (i - 55296) * 1024 + o - 56320 + 65536, a += 1);
    }
    if (i < 128) {
      n.push(i);
      continue;
    }
    if (i < 2048) {
      n.push(i >> 6 | 192), n.push(i & 63 | 128);
      continue;
    }
    if (i < 55296 || i >= 57344 && i < 65536) {
      n.push(i >> 12 | 224), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    if (i >= 65536 && i <= 1114111) {
      n.push(i >> 18 | 240), n.push(i >> 12 & 63 | 128), n.push(i >> 6 & 63 | 128), n.push(i & 63 | 128);
      continue;
    }
    n.push(239, 191, 189);
  }
  return new Uint8Array(n).buffer;
};
const bu = vu, yu = Ue;
function lt(e) {
  this.mode = yu.BYTE, typeof e == "string" && (e = bu(e)), this.data = new Uint8Array(e);
}
lt.getBitsLength = function(t) {
  return t * 8;
};
lt.prototype.getLength = function() {
  return this.data.length;
};
lt.prototype.getBitsLength = function() {
  return lt.getBitsLength(this.data.length);
};
lt.prototype.write = function(e) {
  for (let t = 0, n = this.data.length; t < n; t++)
    e.put(this.data[t], 8);
};
var wu = lt;
const Eu = Ue, Au = be;
function ft(e) {
  this.mode = Eu.KANJI, this.data = e;
}
ft.getBitsLength = function(t) {
  return t * 13;
};
ft.prototype.getLength = function() {
  return this.data.length;
};
ft.prototype.getBitsLength = function() {
  return ft.getBitsLength(this.data.length);
};
ft.prototype.write = function(e) {
  let t;
  for (t = 0; t < this.data.length; t++) {
    let n = Au.toSJIS(this.data[t]);
    if (n >= 33088 && n <= 40956)
      n -= 33088;
    else if (n >= 57408 && n <= 60351)
      n -= 49472;
    else
      throw new Error(
        "Invalid SJIS character: " + this.data[t] + `
Make sure your charset is UTF-8`
      );
    n = (n >>> 8 & 255) * 192 + (n & 255), e.put(n, 13);
  }
};
var ku = ft, go = { exports: {} };
(function(e) {
  var t = {
    single_source_shortest_paths: function(n, r, a) {
      var i = {}, o = {};
      o[r] = 0;
      var s = t.PriorityQueue.make();
      s.push(r, 0);
      for (var c, u, l, d, m, h, w, b, x; !s.empty(); ) {
        c = s.pop(), u = c.value, d = c.cost, m = n[u] || {};
        for (l in m)
          m.hasOwnProperty(l) && (h = m[l], w = d + h, b = o[l], x = typeof o[l] > "u", (x || b > w) && (o[l] = w, s.push(l, w), i[l] = u));
      }
      if (typeof a < "u" && typeof o[a] > "u") {
        var g = ["Could not find a path from ", r, " to ", a, "."].join("");
        throw new Error(g);
      }
      return i;
    },
    extract_shortest_path_from_predecessor_list: function(n, r) {
      for (var a = [], i = r; i; )
        a.push(i), n[i], i = n[i];
      return a.reverse(), a;
    },
    find_path: function(n, r, a) {
      var i = t.single_source_shortest_paths(n, r, a);
      return t.extract_shortest_path_from_predecessor_list(
        i,
        a
      );
    },
    PriorityQueue: {
      make: function(n) {
        var r = t.PriorityQueue, a = {}, i;
        n = n || {};
        for (i in r)
          r.hasOwnProperty(i) && (a[i] = r[i]);
        return a.queue = [], a.sorter = n.sorter || r.default_sorter, a;
      },
      default_sorter: function(n, r) {
        return n.cost - r.cost;
      },
      push: function(n, r) {
        var a = { value: n, cost: r };
        this.queue.push(a), this.queue.sort(this.sorter);
      },
      pop: function() {
        return this.queue.shift();
      },
      empty: function() {
        return this.queue.length === 0;
      }
    }
  };
  e.exports = t;
})(go);
(function(e) {
  const t = Ue, n = hu, r = gu, a = wu, i = ku, o = xe, s = be, c = go.exports;
  function u(g) {
    return unescape(encodeURIComponent(g)).length;
  }
  function l(g, k, v) {
    const E = [];
    let p;
    for (; (p = g.exec(v)) !== null; )
      E.push({
        data: p[0],
        index: p.index,
        mode: k,
        length: p[0].length
      });
    return E;
  }
  function d(g) {
    const k = l(o.NUMERIC, t.NUMERIC, g), v = l(o.ALPHANUMERIC, t.ALPHANUMERIC, g);
    let E, p;
    return s.isKanjiModeEnabled() ? (E = l(o.BYTE, t.BYTE, g), p = l(o.KANJI, t.KANJI, g)) : (E = l(o.BYTE_KANJI, t.BYTE, g), p = []), k.concat(v, E, p).sort(function(U, te) {
      return U.index - te.index;
    }).map(function(U) {
      return {
        data: U.data,
        mode: U.mode,
        length: U.length
      };
    });
  }
  function m(g, k) {
    switch (k) {
      case t.NUMERIC:
        return n.getBitsLength(g);
      case t.ALPHANUMERIC:
        return r.getBitsLength(g);
      case t.KANJI:
        return i.getBitsLength(g);
      case t.BYTE:
        return a.getBitsLength(g);
    }
  }
  function h(g) {
    return g.reduce(function(k, v) {
      const E = k.length - 1 >= 0 ? k[k.length - 1] : null;
      return E && E.mode === v.mode ? (k[k.length - 1].data += v.data, k) : (k.push(v), k);
    }, []);
  }
  function w(g) {
    const k = [];
    for (let v = 0; v < g.length; v++) {
      const E = g[v];
      switch (E.mode) {
        case t.NUMERIC:
          k.push([
            E,
            { data: E.data, mode: t.ALPHANUMERIC, length: E.length },
            { data: E.data, mode: t.BYTE, length: E.length }
          ]);
          break;
        case t.ALPHANUMERIC:
          k.push([
            E,
            { data: E.data, mode: t.BYTE, length: E.length }
          ]);
          break;
        case t.KANJI:
          k.push([
            E,
            { data: E.data, mode: t.BYTE, length: u(E.data) }
          ]);
          break;
        case t.BYTE:
          k.push([
            { data: E.data, mode: t.BYTE, length: u(E.data) }
          ]);
      }
    }
    return k;
  }
  function b(g, k) {
    const v = {}, E = { start: {} };
    let p = ["start"];
    for (let N = 0; N < g.length; N++) {
      const U = g[N], te = [];
      for (let X = 0; X < U.length; X++) {
        const oe = U[X], he = "" + N + X;
        te.push(he), v[he] = { node: oe, lastCount: 0 }, E[he] = {};
        for (let pe = 0; pe < p.length; pe++) {
          const Q = p[pe];
          v[Q] && v[Q].node.mode === oe.mode ? (E[Q][he] = m(v[Q].lastCount + oe.length, oe.mode) - m(v[Q].lastCount, oe.mode), v[Q].lastCount += oe.length) : (v[Q] && (v[Q].lastCount = oe.length), E[Q][he] = m(oe.length, oe.mode) + 4 + t.getCharCountIndicator(oe.mode, k));
        }
      }
      p = te;
    }
    for (let N = 0; N < p.length; N++)
      E[p[N]].end = 0;
    return { map: E, table: v };
  }
  function x(g, k) {
    let v;
    const E = t.getBestModeForData(g);
    if (v = t.from(k, E), v !== t.BYTE && v.bit < E.bit)
      throw new Error('"' + g + '" cannot be encoded with mode ' + t.toString(v) + `.
 Suggested mode is: ` + t.toString(E));
    switch (v === t.KANJI && !s.isKanjiModeEnabled() && (v = t.BYTE), v) {
      case t.NUMERIC:
        return new n(g);
      case t.ALPHANUMERIC:
        return new r(g);
      case t.KANJI:
        return new i(g);
      case t.BYTE:
        return new a(g);
    }
  }
  e.fromArray = function(k) {
    return k.reduce(function(v, E) {
      return typeof E == "string" ? v.push(x(E, null)) : E.data && v.push(x(E.data, E.mode)), v;
    }, []);
  }, e.fromString = function(k, v) {
    const E = d(k, s.isKanjiModeEnabled()), p = w(E), N = b(p, v), U = c.find_path(N.map, "start", "end"), te = [];
    for (let X = 1; X < U.length - 1; X++)
      te.push(N.table[U[X]].node);
    return e.fromArray(h(te));
  }, e.rawSplit = function(k) {
    return e.fromArray(
      d(k, s.isKanjiModeEnabled())
    );
  };
})(po);
const vn = be, Yn = hn, Cu = ru, Su = au, xu = io, Tu = oo, ur = so, dr = pn, _u = ou, on = fo, Ru = mo, Mu = Ue, Un = po;
function Iu(e, t) {
  const n = e.size, r = Tu.getPositions(t);
  for (let a = 0; a < r.length; a++) {
    const i = r[a][0], o = r[a][1];
    for (let s = -1; s <= 7; s++)
      if (!(i + s <= -1 || n <= i + s))
        for (let c = -1; c <= 7; c++)
          o + c <= -1 || n <= o + c || (s >= 0 && s <= 6 && (c === 0 || c === 6) || c >= 0 && c <= 6 && (s === 0 || s === 6) || s >= 2 && s <= 4 && c >= 2 && c <= 4 ? e.set(i + s, o + c, !0, !0) : e.set(i + s, o + c, !1, !0));
  }
}
function Pu(e) {
  const t = e.size;
  for (let n = 8; n < t - 8; n++) {
    const r = n % 2 === 0;
    e.set(n, 6, r, !0), e.set(6, n, r, !0);
  }
}
function Ou(e, t) {
  const n = xu.getPositions(t);
  for (let r = 0; r < n.length; r++) {
    const a = n[r][0], i = n[r][1];
    for (let o = -2; o <= 2; o++)
      for (let s = -2; s <= 2; s++)
        o === -2 || o === 2 || s === -2 || s === 2 || o === 0 && s === 0 ? e.set(a + o, i + s, !0, !0) : e.set(a + o, i + s, !1, !0);
  }
}
function Lu(e, t) {
  const n = e.size, r = on.getEncodedBits(t);
  let a, i, o;
  for (let s = 0; s < 18; s++)
    a = Math.floor(s / 3), i = s % 3 + n - 8 - 3, o = (r >> s & 1) === 1, e.set(a, i, o, !0), e.set(i, a, o, !0);
}
function Vn(e, t, n) {
  const r = e.size, a = Ru.getEncodedBits(t, n);
  let i, o;
  for (i = 0; i < 15; i++)
    o = (a >> i & 1) === 1, i < 6 ? e.set(i, 8, o, !0) : i < 8 ? e.set(i + 1, 8, o, !0) : e.set(r - 15 + i, 8, o, !0), i < 8 ? e.set(8, r - i - 1, o, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, o, !0) : e.set(8, 15 - i - 1, o, !0);
  e.set(r - 8, 8, 1, !0);
}
function Nu(e, t) {
  const n = e.size;
  let r = -1, a = n - 1, i = 7, o = 0;
  for (let s = n - 1; s > 0; s -= 2)
    for (s === 6 && s--; ; ) {
      for (let c = 0; c < 2; c++)
        if (!e.isReserved(a, s - c)) {
          let u = !1;
          o < t.length && (u = (t[o] >>> i & 1) === 1), e.set(a, s - c, u), i--, i === -1 && (o++, i = 7);
        }
      if (a += r, a < 0 || n <= a) {
        a -= r, r = -r;
        break;
      }
    }
}
function Du(e, t, n) {
  const r = new Cu();
  n.forEach(function(c) {
    r.put(c.mode.bit, 4), r.put(c.getLength(), Mu.getCharCountIndicator(c.mode, e)), c.write(r);
  });
  const a = vn.getSymbolTotalCodewords(e), i = dr.getTotalCodewordsCount(e, t), o = (a - i) * 8;
  for (r.getLengthInBits() + 4 <= o && r.put(0, 4); r.getLengthInBits() % 8 !== 0; )
    r.putBit(0);
  const s = (o - r.getLengthInBits()) / 8;
  for (let c = 0; c < s; c++)
    r.put(c % 2 ? 17 : 236, 8);
  return ju(r, e, t);
}
function ju(e, t, n) {
  const r = vn.getSymbolTotalCodewords(t), a = dr.getTotalCodewordsCount(t, n), i = r - a, o = dr.getBlocksCount(t, n), s = r % o, c = o - s, u = Math.floor(r / o), l = Math.floor(i / o), d = l + 1, m = u - l, h = new _u(m);
  let w = 0;
  const b = new Array(o), x = new Array(o);
  let g = 0;
  const k = new Uint8Array(e.buffer);
  for (let U = 0; U < o; U++) {
    const te = U < c ? l : d;
    b[U] = k.slice(w, w + te), x[U] = h.encode(b[U]), w += te, g = Math.max(g, te);
  }
  const v = new Uint8Array(r);
  let E = 0, p, N;
  for (p = 0; p < g; p++)
    for (N = 0; N < o; N++)
      p < b[N].length && (v[E++] = b[N][p]);
  for (p = 0; p < m; p++)
    for (N = 0; N < o; N++)
      v[E++] = x[N][p];
  return v;
}
function Fu(e, t, n, r) {
  let a;
  if (Array.isArray(e))
    a = Un.fromArray(e);
  else if (typeof e == "string") {
    let u = t;
    if (!u) {
      const l = Un.rawSplit(e);
      u = on.getBestVersionForData(l, n);
    }
    a = Un.fromString(e, u || 40);
  } else
    throw new Error("Invalid data");
  const i = on.getBestVersionForData(a, n);
  if (!i)
    throw new Error("The amount of data is too big to be stored in a QR Code");
  if (!t)
    t = i;
  else if (t < i)
    throw new Error(
      `
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: ` + i + `.
`
    );
  const o = Du(t, n, a), s = vn.getSymbolSize(t), c = new Su(s);
  return Iu(c, t), Pu(c), Ou(c, t), Vn(c, n, 0), t >= 7 && Lu(c, t), Nu(c, o), isNaN(r) && (r = ur.getBestMask(
    c,
    Vn.bind(null, c, n)
  )), ur.applyMask(r, c), Vn(c, n, r), {
    modules: c,
    version: t,
    errorCorrectionLevel: n,
    maskPattern: r,
    segments: a
  };
}
ro.create = function(t, n) {
  if (typeof t > "u" || t === "")
    throw new Error("No input text");
  let r = Yn.M, a, i;
  return typeof n < "u" && (r = Yn.from(n.errorCorrectionLevel, Yn.M), a = on.from(n.version), i = ur.from(n.maskPattern), n.toSJISFunc && vn.setToSJISFunction(n.toSJISFunc)), Fu(t, a, r, i);
};
var vo = {}, jr = {};
(function(e) {
  function t(n) {
    if (typeof n == "number" && (n = n.toString()), typeof n != "string")
      throw new Error("Color should be defined as hex string");
    let r = n.slice().replace("#", "").split("");
    if (r.length < 3 || r.length === 5 || r.length > 8)
      throw new Error("Invalid hex color: " + n);
    (r.length === 3 || r.length === 4) && (r = Array.prototype.concat.apply([], r.map(function(i) {
      return [i, i];
    }))), r.length === 6 && r.push("F", "F");
    const a = parseInt(r.join(""), 16);
    return {
      r: a >> 24 & 255,
      g: a >> 16 & 255,
      b: a >> 8 & 255,
      a: a & 255,
      hex: "#" + r.slice(0, 6).join("")
    };
  }
  e.getOptions = function(r) {
    r || (r = {}), r.color || (r.color = {});
    const a = typeof r.margin > "u" || r.margin === null || r.margin < 0 ? 4 : r.margin, i = r.width && r.width >= 21 ? r.width : void 0, o = r.scale || 4;
    return {
      width: i,
      scale: i ? 4 : o,
      margin: a,
      color: {
        dark: t(r.color.dark || "#000000ff"),
        light: t(r.color.light || "#ffffffff")
      },
      type: r.type,
      rendererOpts: r.rendererOpts || {}
    };
  }, e.getScale = function(r, a) {
    return a.width && a.width >= r + a.margin * 2 ? a.width / (r + a.margin * 2) : a.scale;
  }, e.getImageWidth = function(r, a) {
    const i = e.getScale(r, a);
    return Math.floor((r + a.margin * 2) * i);
  }, e.qrToImageData = function(r, a, i) {
    const o = a.modules.size, s = a.modules.data, c = e.getScale(o, i), u = Math.floor((o + i.margin * 2) * c), l = i.margin * c, d = [i.color.light, i.color.dark];
    for (let m = 0; m < u; m++)
      for (let h = 0; h < u; h++) {
        let w = (m * u + h) * 4, b = i.color.light;
        if (m >= l && h >= l && m < u - l && h < u - l) {
          const x = Math.floor((m - l) / c), g = Math.floor((h - l) / c);
          b = d[s[x * o + g] ? 1 : 0];
        }
        r[w++] = b.r, r[w++] = b.g, r[w++] = b.b, r[w] = b.a;
      }
  };
})(jr);
(function(e) {
  const t = jr;
  function n(a, i, o) {
    a.clearRect(0, 0, i.width, i.height), i.style || (i.style = {}), i.height = o, i.width = o, i.style.height = o + "px", i.style.width = o + "px";
  }
  function r() {
    try {
      return document.createElement("canvas");
    } catch {
      throw new Error("You need to specify a canvas element");
    }
  }
  e.render = function(i, o, s) {
    let c = s, u = o;
    typeof c > "u" && (!o || !o.getContext) && (c = o, o = void 0), o || (u = r()), c = t.getOptions(c);
    const l = t.getImageWidth(i.modules.size, c), d = u.getContext("2d"), m = d.createImageData(l, l);
    return t.qrToImageData(m.data, i, c), n(d, u, l), d.putImageData(m, 0, 0), u;
  }, e.renderToDataURL = function(i, o, s) {
    let c = s;
    typeof c > "u" && (!o || !o.getContext) && (c = o, o = void 0), c || (c = {});
    const u = e.render(i, o, c), l = c.type || "image/png", d = c.rendererOpts || {};
    return u.toDataURL(l, d.quality);
  };
})(vo);
var bo = {};
const zu = jr;
function $a(e, t) {
  const n = e.a / 255, r = t + '="' + e.hex + '"';
  return n < 1 ? r + " " + t + '-opacity="' + n.toFixed(2).slice(1) + '"' : r;
}
function Wn(e, t, n) {
  let r = e + t;
  return typeof n < "u" && (r += " " + n), r;
}
function Bu(e, t, n) {
  let r = "", a = 0, i = !1, o = 0;
  for (let s = 0; s < e.length; s++) {
    const c = Math.floor(s % t), u = Math.floor(s / t);
    !c && !i && (i = !0), e[s] ? (o++, s > 0 && c > 0 && e[s - 1] || (r += i ? Wn("M", c + n, 0.5 + u + n) : Wn("m", a, 0), a = 0, i = !1), c + 1 < t && e[s + 1] || (r += Wn("h", o), o = 0)) : a++;
  }
  return r;
}
bo.render = function(t, n, r) {
  const a = zu.getOptions(n), i = t.modules.size, o = t.modules.data, s = i + a.margin * 2, c = a.color.light.a ? "<path " + $a(a.color.light, "fill") + ' d="M0 0h' + s + "v" + s + 'H0z"/>' : "", u = "<path " + $a(a.color.dark, "stroke") + ' d="' + Bu(o, i, a.margin) + '"/>', l = 'viewBox="0 0 ' + s + " " + s + '"', m = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + l + ' shape-rendering="crispEdges">' + c + u + `</svg>
`;
  return typeof r == "function" && r(null, m), m;
};
const Hu = tu, mr = ro, yo = vo, Yu = bo;
function Fr(e, t, n, r, a) {
  const i = [].slice.call(arguments, 1), o = i.length, s = typeof i[o - 1] == "function";
  if (!s && !Hu())
    throw new Error("Callback required as last argument");
  if (s) {
    if (o < 2)
      throw new Error("Too few arguments provided");
    o === 2 ? (a = n, n = t, t = r = void 0) : o === 3 && (t.getContext && typeof a > "u" ? (a = r, r = void 0) : (a = r, r = n, n = t, t = void 0));
  } else {
    if (o < 1)
      throw new Error("Too few arguments provided");
    return o === 1 ? (n = t, t = r = void 0) : o === 2 && !t.getContext && (r = n, n = t, t = void 0), new Promise(function(c, u) {
      try {
        const l = mr.create(n, r);
        c(e(l, t, r));
      } catch (l) {
        u(l);
      }
    });
  }
  try {
    const c = mr.create(n, r);
    a(null, e(c, t, r));
  } catch (c) {
    a(c);
  }
}
Pt.create = mr.create;
Pt.toCanvas = Fr.bind(null, yo.render);
Pt.toDataURL = Fr.bind(null, yo.renderToDataURL);
Pt.toString = Fr.bind(null, function(e, t, n) {
  return Yu.render(e, n);
});
const Uu = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJUAAACVCAIAAADewC8YAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH5gwcFw4JLcB3xgAAAAFvck5UAc+id5oAAFM8SURBVHjatb3pkhtJci0cW24AauE+01pMJun9n0kyabrJJllVAHKN9ftxEIcOFLtnvnvt5tjQ2EVUIjPCw5fjx921tdYYY4xxzllrnXP4T621Ugp/3lyllJu/WGuHYXh4ePj06dM//dM//fWvf318fLTWLstyOp2WZVFK7ff7h4eH/X5vjNm27Xw+z/Occ26aZhgG51wI4eXl5cuXL58/f356elqWxVp7OBw+fPjw6dOn9+/f7/f7nPPLy8vnz59//fXXz58/Pz8/z/McQlBKNU2z2+3evHnz6dOnX3755dOnTw8PD9badV3HccQzDMNwd3c3DINSal3XaZq2bTPGHA6Hx8fHw+Fgrd22bZqmdV35+b7vlVLLsuCZlVKHw+Hdu3cfP358+/btbrdTSs3z/PT09Pvvv3/79m2aplLKMAyHw6Ft2xjj09PTr7/++re//e3Lly8vLy/rusYY5fL+3XXOOadcUi6pqKhsNl1phtLunTHGWts0Tdu2Xde1bds0DTb1j+7LW+d6aa1xB2y//C3KAS6ISCml7/uccwjBWptzjjF67733McZSijGmaZqmafq+b5rGGIMPhxC2bcPHcs43L4/3jDFu27YsCyQSf8d+QNTwwNu2YR3xPHw2pVRKCa8/DMMwDH3fl1JKKSGEnHNKSWsdY8SOQnrWdYUkaa2xCFzMUoq1Fjdv23YYBmstHhtH5c/XuZSSS0kxhRh9iD5mn1VUNhqjlHZYqb7vd7vdfr/f7XZd12ELseKUArkll/vmHGMMIeCVsNb8xde/BUHpug7LhEXMOZdSvPdYZe99ztla2/d913W73a7veyz6tm3bts3zvK4rllIpdbMEKSXcahxHyAH2b9s2LDq+S2sNUUgpQZIoNFh97ETf9/v9vus6bDy2mb9+Pp9jjE3TKKXwpd57pRS2bbfbYauwf845rDPWzdUL4v7n65xSCiGu27as67T42cct6aJsMtpBKHa73cPDw+Pj4/39/X6/x0mScn1znvBDLNa6rtu2QZDbtuXZlb/Cw9e2LdQRVmqeZ+wK3h9LUErBu+12u8PhAO3KjYFyg/7BuuCRIONKqRDCPM/OOaxmCAH7rbXuui6E0HUd9jLGiEOAfVVK4cg2TZNzNsb0fT8MA/avbVvIyjzP3ns88/l8ptzgwqsNw4D901qnlKBLII5YIkgn/v531znGtPltmubTeXTnUU1r2VLOtmjjrLVd1+33+8fHx/fv3799+/b+/r7vexyRUq/Xm4GHhrUYx3Fd11IKzhZlSup3mFgIJl6AhzWEAKWHhcZi9X1/f39/d3eHz6eUYLGWZQkhYI+7rsPRxEHErpdSYF+XZYHS895DJXrvQwjYCWhC7Dp+jvtQJpxz3D/sPd6rlBJjhBhB91D94oRhb6h4Qwh4MKwz1PJ+v8fJhsz9+TrHmNZ1PZ3PXf+irYvqHNQWvIrKOJyJ3W53f3//9u3bjx8/Pjw8DMNgjMEJSynR0mCZ8M5aa+i0cRy7roMloEDJncMF4cXGdF0HqcRN1nXFX/Bd0GP7/f7u7u7u7q5tWxrIbdu4wVrrYRig+qSUYEchT7FeUGL4MPYSf3fOQQGs67quKxYUpxAOAfYDT47fwitv23Y8HvEXKPyu6w6Hg9YaAoczh3+i8cM33t3dPTw8HA4HyMQ/ss7LuvbDoLTxMc1bmkNZczJZX3xOHO37+3to0bZtoXmwWHBVeNOmXjg6UPFYMnxAnj954YGoQvGLUHd0mvDEkF8IKTThsix4Sfwr9o++Eu0xhIDeEA4WfgsaG5+Rzg7VMvYppYT7Y89oF7H9UBtKqW3bTqfT8/PzNE0pJefcfr+HEdntdtwM+e5Ysa7rsM53d3fwbv6Rde66Xiu9bv48zd15bmZvjdLFOKo1yNowDDB+uCl8CuksQEXAVEDPDMMAycUymXpxw+SJ5MvARoYQ6ON1XQf7lHPGHlP2cWLwizgi9Japf7BtOEnzPI/jCB8Vf/LX8bLYDKg+WIFxHK218CohPVhTfJ4Sib/AGE/TdDqd4MVgxbA9+/0eiwYjzY2kaHKd4Sj9I+vcdW0/XDRz2zTWWWOiztpJtx6miy4AHm6aJtgPnJi2baHZSikI5njSsZR4Q8aUTdPgxaAo4K/GGHH48BnuVtu2bdvS4FP6eDTxSYRWcG2ohOGnzPN8Pp+PxyPMMxeRO4e9wUHk0YwxIrDz3sMc9H1/OBzgDOOxsUM81tC38zxP0wQLp2oMCiO9risFBQYSawvljL/je//uOu92O1gG55y1zlhrtNHaaKXcjankcT6dTt+/f39+fj6fz/T3YNLv7u7g2lHDSFVGI4RXgkwh5KK/AzMAW4IPUIYgBAQTILMQDiiutm1hqhFxQ9XDu8FaYEdxsCDOIQRINE4tdh1vitOJZ8MJoJJHdI/VYCQ+juM4jvM8Y4fgheIV8HdeMUZsxo15ZrQAafhH1llr3bRtKVnjJtgsrZQW+0cthON8Pp+fn5+/fv16PB7necZ94RkjFsZZgezjEXETCQgwNMYKQrpTStM00fjBq6T2kG/LF5Z6D0DPu3fv3r17B+8G52aaJnwdFCkDfISApRTYP55CqGVc+FI+DxQDAk0oZLpR8zxjrRHq3MAI0lOThv91VA7Zgrb4R9YZMloUFkcrrbRSSmnHneN9VcWWoIheY1RKKagXij99XxnnAabCGYLTD1FFzAQZpN6bpom7yOfhckj/DX7N4XC4u7u7v7/HskJyAbnBHTscDnTroeKgsnBnSBh/Ag2BiJ5xPQ4ZTCl8RQjK6XQ6Ho94I9oLWrXdbofID+YAUnuDSXGdoY3+7jrv93vnmpRzzkWpqzDfyZviTaBwoOLneaaKx31xUwAltB83KgIyDvSBLgZWBL9IzXZB9lICSgKhRrSHe8rNQxgAdIMXQnsqTHzGOYfYmc4w3FdVMT8IFmEK/C7kHY+3LAvOB6JbwECIH7CpMOpYEET6cN3fvHnz5s0bICEIb7h/xFPw1lSh67rinn+4zjGmFEtR6hVG49SrS3rhcDfwNfhX/CeUOz6J7bkJXHD+2rbFe8IhQswkFT2tOt4T/oI8f7BbQAbwdVhxPiHQExwaIkE4ELSmWKxt2/h2OJpEAPBehNbwMNC6UAxwknGeoHIRJ8CKW2sBYH348OHDhw+EQdq2RXDyGpO6WedQr5+vc0q5FFXU6x38yf7931zUePQqm6aBwcMujuP4/Pw8jiMEDTvNLeHicv+IhtAPhEeHdcHhw9HBxf0j0Eo/BU/IYEYGjvJYyKAQcQudFIDDcC4AevAoY//ev3//8ePH9+/fv3nzBs65rnD2Tw3h//31k/1jSAA1iAv/JLUWE08/3UVqUYLCquJtsCiEehkUI8CQK4tbERXDtuGUTNOEzwOjoisIhwLeExEQrD7uiR8ymMEGyPCDpgG7DqUHOcMD8yDS36a7+ObNm7dv3yJNhugNDu1Pd+7/xzpba7TOl7X9g/2TzgLenwYZz6GqXWW4DYdQXUcgP71kvokaA8dLVegS387cDeE0id/jZFB1p5T2+z0ATImC4vBBOBilwHpBMeCLoJ3gclMDMw67sVUIlnDOJMRPJc+olCsj8TC5yLQa/8g6t23bwBDk8nqFnXT9JQiL4BEmve973ncYhsfHR8DKVFDyxCgBTcHBwZ8M8nAx6UMZlBaemQ1EwdSTOCXQoow3cASJWcBYAumnOwYrBU8HQgMLhz3DgaO9hwzRtWEwSqAYWRrpweIUMqCCdELC6ItJpYIVAFjz5+uMo9w0jYrRaK3U1Rb+SDLI/VNKMXiEF3QTV759+xZbCLdQX2dQiUBi7ZB+A4gF/QM1KH2fm4Qw3NFxHLEHAGVwOOj70QNkVAeHQimFIB2/y3MAqBqShKeCJkc+CI4rDwfOELE3AkDcRaLPkFRmFvEWMUZkLWCPqUh4CnGr3W5H3f4n6zwMQ9O2OZeqPS++jFLFcfm4hVgR/GfbtoCRXuM68I+hiNQrBJn5TMTsiEzh1h8OB/wKnD2CBtgSaEJm5pRS27YxK4QYg/Bb13XM92ILCVVjA6AwaW9Ap4A8IXbm/lG8AMPS8eHZVTXJJwMb2FEJJGHvof2YtqTCv1lnylbTNH++zlobbwLXuTqjyslFp5YDmo73ORwON7gqnw8LhOXGr1MesX9KKdBPsH/ws/kaAB5xGvATmjesi6pRI3aL+SOCKVB6NE5wGejyYHVkgg0OFAkWEgDDPYHv4GyRFcDAA4/H34ID4r1H6Mb8O9aHRBt6VdL8k3Ty5+s8DMMw7JrGQQBSSinFlHPBGirt5JPBHhBuhjaH7pJ5DboAjJPo+8HGEITD6gNIRMyEV+KWc1mxW9LrU5VAAOoDthlvDo8OX0SYEZqfXjE0IQ0k3BOA1DgTTL3ipVRNGu/3+yryGqEbFAPFCyeYZx37h6MMM4HDFEJAhggSyYsrBg/5766zteD+4LdW70MMMVVt7KT3DKwBMkjNQH0t/RS6JMi8MC0Ok4P9UxWWnKYJgTbZJTgH0Fo4bZAG6cRSDzPyk5kgPBUlD1+N5WCW/CZUZ7pf/hBMA1gd2GbYNiTKIY74Vyhz+lBINtHAA6iCbofaxJMMw0DFhteBQwQng/lbuc7Sacc6p5zXZR3H8zRV7s9F4rWjLDOTjnAKP5exrXR/abdu+BM0NoQToW1SSjiyWOIQArPwdBAIf0ivT8YSOC40dXhziD9ZMPgAM9rSKqtreAGuOb0PcCngsuPZdOUGAIiRgSz2DDIKJcQdwoo759Z1hQmUcQi+CI8KJs7f5angXZZ1PZ3O43he1yXEkEvRWmltnISF1nU9n885Z9z3JiqQt1bX/CXInRGXBCRp3pjDZNxTKmuIHgqiCwZqiJqVUlCqN6lKAJU8iBAL3Ir6WV8oJFFaSuCZ/CcoA4CrN9lmbDYxVbhFN0lzubv4Fip2Jtfo7ODU4i9/wl/iOhMfHqd5WZYQoipQsMZp6968eUOgCw4Fff0/x3tkkEfzwzQsdIgSeCNPgCQH4M3x7Tj32H7AFpR3+TzkWFDw6Zeu67rb7aCayAajcibrCSIL/UlsllxefBKeCB1CcpmYMabdJVkGX5orQVSGCnRrcVtsP24ixeVm/2RSCIhQzsVa07ZNn00yJSfrfvnlF6ijtl6kYP9UKKRoQDapFZG1QVqcyDV3WuoHyrWqWAP0NuBgrItSV0RTJoEZYtJvxIGG+bkhdXH/IO9wMg+Hg6n8YMQncKTJwAAmjn+C8idzFeePPpqMuMhpkwkHxtP7/R6f5/FgbuR1dunmT621tYB4StFG2Va1SW9ZeeX+/d//XXIguHM3lu9m56SjwYwa/ebdboclk7eSyVJ6EJL6jXMGAYLg0+FkRpuLoisZlz4k9m9ZFgJDNzg1vhT3R7oO2zbPMxB22CTsGWSL2oWEKywRDh8wuVJZIPg5/VIuFw4oVqlpGgiEVKo3MLL0vPhnyjnGFGLstthtwa3RLLEsyf3nf/7njVci15o3kvvH/ZaCQwyQwAfPH9QsUErya2T8oGoW9IYbwuCScT0xbiguYtDw44mBEXPS10QKMu0OhwPAGsgEvG56K9L2QCtQYUI3kMXD58Fjk/BBE0jUEAEJwgkJJdKW01OjJpBbkHNJOYeYdiF2a7CzL85Hvbn/+I//4LYTCiHzjnFCEQk5cr9JzMIdeJjgW8s3Yaoa6whgEy4DkEysxWvzhsfA4cMGQFAkaHdjX6nrdOVWk2qNf0KEB2YiPBfsNCE6qGXKJbx8EBrwAPDaQgg4wfgY9Q0hQLjfxEWhSFkRgZ8DZ2eqktAjQ2rKccolptyEqFyIaluSaYNy//zP/yy9W/qTYBlBR1HdSbj9Ao1XGc/X5GWptRiiwTaoWu2BwBy/hXsibIIQwGunc0iZ1SK/SJPz4yWvpV5XnjjzD8S3kLjAgvLEIxyCiqP2g/0jIAf3ihkPgg9cB5xO4Az4Uphk2iM6Nbt6MZDAMwByUoJpgdtf1l9rc/m/du/fv6eagiMHNUJhBOAkv5V8ZOpSQqD0vmSKh6Qg7z3jJ5w/vD9+F6ABPD1iK4wIGTkAVTocDjJUoC9DoJkEOEYX+AtVPbaNydVSyThYBMbsPDpIQcO7IViI8039VGqSElENuZ0IBJlyofDBnwKjB6cTcoZ3IfQfY8oFzPGyxbz6uHkffEgxuv1+T7+LIPo0TWDUoHqP2o+pJWwSXpuYZ67Ud+hPbCE0AG5OLi8ZA1Lvaa2xJTgZ0qQzIoTpQgYHrrx0OvAV0EjQDXRZISWS+fHaWZe5ScYGBL1QrchwUynFMIl3o7IB3guXahxH6Cp6K1hGOGsQLMilqqkoFqedTickJUpRRalcVMxl8WlZ47oFH7zjsYXKBqf46enp69ev3759uyG1ocyMxxGyTyVWao0BcW3GQ1wUiKFUOAQBmHSFSEJfQZeu64r9Q0ElLu4fadc4E8DA6Ojz/OEFybTAF1HxllcXD7EkyKAmBlILEIB3uNk/WAdyZ8jHwaHf7XalFERcspYTS4pdf3l5OR6PeC/YraJMKmqNZdtS8DHG6AgNSy7i77///vnzZ+wfYGhby5QI30F3waWkD0kEWcZ8En5jsHhjqxjeIW9ijEExIgIS7g0hSko0DxC+lCkquJdMUdGFGcfxdDrBBICuzzywfEgmoQhH6FpyhmdmmSAPNEEDYuUQZXwGzg7pyMzGsIgJd6AVG8cR5w/+sHPOusZYV5SWIbkjeH0+n3HsUMH85cuX79+/S6IK9JvU8kC8TKXY4vluIm5uravVpywBwcljAk9mRxHO45xBlol+0WhRceFPiBTDA8BjSVALqWAZueMQyBowYkPYXcgK3p1WAAE4EF1GLDhDkrRH5B1RCs4AFh1PxQQWsy44D6QTgoxz8eSBzzVNVla5ElRqknFBOSp3ELl///33L1++fPnyBYePikuGvbBS2EK6nZKLnQX9kMkdaj8sLqB9FscqpaDx4FKjFD3n/Pj4KN/whtJIAhLBUlB7gaKlWvWiKp6O40gnOdWiQIknEFpjQTJ4w1gK/MnMA58E2pK0eXmUKZe4c6pFM/JdoHVxf2xe9VwulW9d2w7D0LRd0dalkk1Ys22DcrgF9u/5+fnbt29fv379/v07LR+X/nA4PDw8oHCNmWWeHrr++Al9J3J8WcCIOyAMgp7hF8FISPovfWgsE94NJT/4CmhFnGlaaHJtJf6HdYdrzsgHHgSz1vCuIUM3YT6gL5kPkeEWFCNSuPR9tNYwfkzHl5qUViKpgvtAGyPdhv2DNFSV07Rt23adMk7HvGXT+uJcdHSa4bm8vLy8vLyg0QJuCqF+eHh4+/btu3fvHh8fh2GAJWfFOgFDCjV48rKwgQE+dhHRAvYAUQr8MRLamOJhYIuHPB6PTBtBhpielClGLjHxLXpVOPTzPMPlk+lfpJd1rXyHJsfBoqWQcS15GNgYLEiu5ZyAdpFNxH2YTZROL9YfD3Y6nVCOxDL/WrNYvdyCP1VRShXlZPIdMDw3n+7A/f39mzdvUDLy8PCAQybPO5QJHg4PClFinQddU0ZgzA1BIcsohYiXrXXizC6RMiRjBqmpuNkw6iyORUwJDc/dpaKTrDtYcVZOQ9MQepVAI11NOrrEu6FFZJ00DTZTngw5mM1Gu5XT6QTGCbUXXAOtTUxJmcZnta7Jbz7E6GSULZEzBnPUnKD1393d0WGh70OsGXlwCBpknPqk1OI/2mpJXQXgEmvBI60I4zldKfEyBYGHhNBIHneMkWVNqXLdcSsEyISsoPfgWMG7RgIdqQaZx1CCN8aYHfoDP8GTwN3DusH/grGX7073FSuJZcw5IxOObjUEDo0xpaicSwixWVbtmljMHMqyJO+D41pIj+PGnsOosLJGKcWwARqMfgo8YJlvgxCoSlyXRweLCHnHX5hkuE6dXIpg6I9IIAo1BszqQczJKYKSgHygpBZPxc4kcHRTSsjv0LOHHtaVZUPNj4CPQAkRPqK7eEjYCPRfYHKKqDRf6kbmmGYhplENx5py8t67tjOuzdptWW9ehZCcQLh/gEAUNwKeMsGkKhlEvaofkAkKBhW052wXAbOPR8cP2TiAWVYrLiOK+ZVgO+IkwTJB47GwFkE6NgP+iKmcawQb8FQREdHZwQMo0VZGpsAkgg/NzJCcC4WfyH46SLwQ10ZkyUoz9uFgUokYIfMqKefgfc7Z5WybXGwbi8tZl1IckeVcyd5GFFswl8SMSXpVMCbJW7JO5ybnZwTPGh4v7RwCEhwygvSsxJfPY2tlEzUEMmqqctERDxTBYMCXwhVihMMVBIeDxCfnHHxa7haT23g79m2Bz2xEjxgaeGBA/DBiRy4XnBq0oCC9GgJ0A0/iq+nTouIWhj5r65S2yThWbNBFxAvTx5XpDGy2qc03pNcAM3l/f09kWVqyJMoJGDKTrggPDfoEBwVvQrJCqbQRmcaDuWIAh8fGClpRZCSFmj9nqhLriwemoLDFDBEl7MG6rjwuAHewf3CnJXmAlBSsFXUbtoSRmEQBiW/EWj9FFHepZa3Wta7tddNZ5VJQbU7u5eVFgtQ03dyhImhIBHZlRpBUfooVvDhaO2ZWpYuE/ei6ruKzhcQLXPBLiT3KJJ/cRZwwQjNERnAFUXZbRJMz2duF2vsm/cnzzdANtDwKJQSXfflg51g+QT+Ozp2E94Bj4M5KVJXiF6E5abaapvEhlKKsc7bpim1ttkFnF4P7/Pkz3FZoIYgA/p5Ses2IfW3wpGPGsJd6A8BEqUQHSDEOPTxD1DMwCGOBHb3NG89Ni1YW8j+xmvBNoBuZE4bFhW/F9GkRvFDmMYBr44ZF1HgCgkHmkuUspRQEx+jnQso2GRL4T5YSEMni0adJJteScChXA08bYypKaWOVcUnbHJVF4uJ//ud/CG3QMNAbxn+SEkllIr1WUgrydQUXUWmsy1IvQgw4HDcpRrh50vuCMymLYJjEIIqmBTUNh5KROz4AhrGrTeSIyOMdJUWMpIJyTXmVUVYQbUnoau52O4SAsoiQmBGp2Tc5DXYjIRhy4exWv5IfLkoXpVNRWyzqQqLP7r/+67/oSeJA4PUoraiigImCnZDBBpUqrSNjI2Yyz+czsZibqh+lFPPdlHcGFUymEJKQADSEl5luyGlTe0vIl4LxTrW0ZbfbkfPoasM6+dX8dppwyApyAnwX+ClS61Bt5lpZIHnZPPT8AMFLyDQxT+oVWkHXNFqbXMrqU8i+5JhSijG5//7v/2a1KomqpMGjrgIXkFxTu8Cx7IEpYzqo9P2wecfj8Xg8Yp/YHwlLkHNmjF8EEYi56ZTSOI7H4/Hp6Qkt1mBrb4JrNvXj7uraYwX5L3w77kkqFDYMKKWunCgeRCw0th944cvLy/PzM/qHAKmQ2BvJ8JKjDUmluMiAHQoP9T1SLEgkII7vnNsNg3UupqLMtsastM8l55zcb7/9RoPBxIKu7CiWhpLzSgNGmA2ZLZnOpiPAPiQA0uL1RTmQEkeMEagKUAmQAV5eXmBNWcRMb9nU8gmcBjx/SgnUemoCQKymVvfI/hN4BagfHFDqTLwmKvefnp6A7JN48DqJz/wfThW2X8I9TGYBgMT+obMDpJkRKvwjeD1N26WclbFLyI0L1nitjfv+/Ts8YKwpYVbmYwkTMLuI7yPMw4VjybYRpR4s+pIQtiwlkXQjKaHee1gUAMTouoKk6E00hjSeEZXTkAPvvexSSVeLYB7EC9+Is8skFw4oFAw243g8ApnEW8v8BrHsUgowMCh8fBhuYFsbL0KwlmUhVMTYjJ5dqUz+ynxoEVmnrIp2ayjjGtslNE1w6PMmkyysQSH8wSPPND3ehH1RraAnMzWjRA27qtQ/uEU4xwRasVtYI/l1SFRBYijOzDTB5CAIeW298HN5QSjxi8TBSd3Am7Lcgll48nfY3IKyIiUVHnuMEeyTp6cnpHFkAo69hOleZUFWw4WvoxKuqqId+mG32+WiizZrSMMS+j60TbgEobAK0IQMyeVaQFqhzeA9ktZHTkdTL/uqIwzUFAk/eAemBolggQYgLQRUKJNhjMwkIxTnT4viejr3OKb7/R4keZwzyUZRoqqWWRFJw8VjSBAAcgn2A+QAaUV4/8fj8du3b9+/fwf1SGuNjzGswmIS5yy11IZrdcPe6Pu+RwjQ9bmokHLXdW138VecXGU+Iv4N7+9qJTEOk2ygJENAaQPkf9KPguOOc0AKJTxeJYijaJ1LXBhZ3FB73MnIr9S2HoCeJezOsJf1mKUWN5E5T/IcfXpJjbS18Q+FJtXWo/R4sStIPsA3nqbp+fn5+/fvLy8v0zTlyvzEJ8EKuCmrU6LOj/G7c44Nwu7u7nbD0HWta1xMWWsDGwB74IhavW5hziMl9y/X2gsokCjKpSTLQYu+drbysmGx8HNIa67MTHtdS07ghvAg3ZZce+hC5eKHh8NBOt8ypYe6ckiMqW3hWXVHrBWyBf12g9/myvpFVW0SVbJYBFLowGGA5sSX4qCznTIDdhK9abZkaSd79L158waRJRlDIXi/XWK1GKMDioPdJvolw1g6FMRzIU1MnzKwpVhBfrNgbUsOCKQB4qJqxSUWlNXlRN289+SzQNix00DdkJGndrq7u8MjkZvL3TW1pXxTGyPqWohDBi2WGLpdVTJSqi3JuXncVInsw41knMq8cfOjjP3SBx3Hjtxo6BUifDhLaJCJPlx3d3cVzErrus3zAtd/W1cfvHv37h27vQBRxfmzov5WiXbMsgaVCy1zs0H0nSUKpUW5Bpxj1hzR6sDOQdHBKyMnmAEDwwZjDFw7LNxut5PxE11QZg+YAaBQ0t+R3iwTEVB9EDL4dBKDJaYPRIIEJBYtEJqBZCAAY4tiWnf0Xpbyja7t2Lz3798/Pj7udjvrXEpp3fw8T9M8zfO8LuvmfQjR/fLLL41oKcEG8hJDInDOBCnyUhLTkkJ0wx+UQJSpdR6vU0V02aV3A4yD8RC8FeoGbiG9KphnKnCueBBd6PldzEbhxaXZ09f1t1BIdKqhJ5isZnqLQgNFRao4lBzqNyX3AlqENq9tWzThev/+PahGeOWMds3zMo3TAl5FRAl8dv/6r/8qoW4imVbM1aEGx+5CviD4kCASh+hSl1cUUCVqB/l12Bj497A3krBUaus5fIx8Z4nZvy7BZY/6GwwB9kbXFtW5Erql20yWyo06oXOhRWMMJg1oa8kYQ5B6d3f3+PjIPJGrrS5vEqtMoGKMz7t379BdGJsn6ATzWBmhqqhLR+V/+7d/I98Ubw6vl7obfxL/RDYZsBZkljlupluVYLLKlC8TUuq6DlSL3tBNbdp2w5MAGMScHxFXLLekvUrPCFgrfHo69OjVCTSZsT/NPBnQhNp5Smwt3iQCRWoWoAZdO6xD/WL/2KjqJiXJi2oAPDG5efR0xnGc52XZ/OpjykkbbZ11zrp/+Zd/AUx3Op3YmoSJCGwJvQPghHRS5HIz/5krr1cC6rY2GiqiCYmUQeZ6mAqQhGsjWLDQEDLBlMRoFrwqChvg0LOcAzOxlFJwvqCZ7+7ukmhDk0SHRMB+gCmSaJwGSJ3kKKJxuMClA+YCf55Q7c157boOj8Gk4P39PRu/2toMvzIKx3VbQ8xZ6Zi1KsVoY4xxf/nLX87nMzw6eiU4IjhtsOHwTqHlmNSwtRpPIv1sJwathf9EbvM1RkrwTNUiI5p9fKC7Hugif126EgCugLHh5RFpEM1CWIaiRhxi+OjwkpgcYMKEPD7ZFh57QPoo5BJeD2IDuCpAGxDwMLOIB4bzyXQ3DDNKrnBCqORw8gj8juPkQyhKa+uyaUKu80ceHx+VUsuy4IAXUYnJYhE8FpNH5ro5N54MGgxfDGcdSBsQS1154/wtxq1MJeJswT4Bd0ckQItIkrnslwMfCvIEZ4/PCSNNTYjDBLHo+x4HiGkv7A0AIEnCJLsui75ujBBY4AL+R0oJ8wPYiU7uGaEWPCrzNtZapuMJkKJXMaC44/E4zXOKSVtrXKdd65XbgoohOWBL+DX61jQ2Mu0nuRTper4IfkjvX9UJEnhPU1uoqD8g2sJHoI9HPBOiILFKbDl54sDsIcKgorCcFV8kc6FMFrpaNs0acSwx6wgQxrGZ+o2CgUDQFWJADJ3BEgDGFfikdFugMGGksH+IcZn/AXv95eXl6enp6en5PJ63dculWOdsk5XLUTkftQ/lB+BLmh5EXmIxps79IdAsOx0yFiYXVDL4yAAnzYJf0dRGKsRtWawlzzpkC84IYoaXlxcUaQCmwtnFkrGLMrBcmfFoan8ddV3AgOOLiIhmj5UV5CAx/LjhRFWEcsCWQJpvsqFZ9L6hj4Ob4ziSzAgjAh0OAR3H87qsKUWtgU8VlVIsOkadUv7RBvnGTSCZAEsMNI+McbY0g0WMtd2jdK9vwj6JcUOzDcNAJRZFtyJb6bxK9N9AMg9J8Kenp2/fviGjC5eScJ2EZI3gUoLHDjdbhiiQM5wMenpy8wi2QZHg/qT7MbONY5drCzfpZyLWZASFq6mdpQnBc/9YVsGuckoVh/CsabVts3Y5a5OV1uWqSYoESmytvSemIDNVuCA4gDTpWWCbqXNkKoNgBz1jzsjwovUlsQJoRZnznOcZWgW13UCNmzpjh1huW5tfw8mEa8cCMCwcXWUSqBhBcvNk/Z/3Hnfu+57kXfaJJMpPdh3eHV6M9LkYODLnhXgU9k/XRigSiGi7Du/VtJ22TSjGhBJ0anL4Sf9yfgeT41hrOR9TBq3MjuKxoEWx+oCdTC015gX/XnKZSm0pRf4Sd1rXQXUozGf2EcZV1VGQMH402LJCDKsMvxrfRbotEFRGdVttXw9RuDkWsCmsyJF5fFWbLaKAgRtMMeJxZ95NiZJ0WagmyUSks+x2u2G3b7tOmcYnZbYYlJ+T/tEd78Yjx+EghUseZy4Ki+1IniQUwKAQ9hlvDv8KMKDktJmfNRmEVFL2c60XkbwbkjC51tIRoMri3WIdP8CCCkiAqlQwYj1GdFAl/E+UI4oiTQYV4HmATCvjP5xgbDAakJKNoAWTGJ/Joj7kB4e4bft+2O12bdcrY20sQcUmKOdE/cNNOtjURklGVOmxz2ApBWuE17O1FgkyDttAOwE1Cz3TiZbn0kjwLxKzJ48UkfJrJsSNH0Hnk2marQ4phplB0WGu42fp3Jfr/qIkihkx9Ix8OBLvJIoNdgyoTVudaU2IgBOvYUdvEgPEm2j5WPwXY3RNo4rS+kff8lJUKRdj70gAJBRC8i4OMvk/N0x4JmhwRLDrfLFSGwsaQc0m3VgWVOTanV/SoiG5nKJA/1OeWiZ+oaPocFEx+joTmb1mcOz4dap2FFG1dWARNXnSpXKiYwt1DIc6SZcKA7q62mYSr89ela8bqyrRTwBMEfbDZYI3xLBt3tg15pyVWUOZ17Au3m/e0YOIYhgCySkw2pRHuG03HjmVp68d/2m9mdlgGSOljF5+roWGWms6iizuaut8LLmpsHz4Rj4MjpStY80YgJJkpSo9EM6wEk3tpNeaRcOTIFobkG9B6jBSH+wb8PXrV8ygUkpB8jbRfJ6+62tfhtwnAJm0Uz/CVu8Xs6SctHGpqDWUcYunNU1LckgW4xdkalvVnqeIrBnnwaLK6RI4HJJqQC1E4FuqNabNZEIHn5clVUY0Fi5ivAM8CNgGBA+dGFuvr3vKMFRlMEDUlIysJNroSRda6htqbK44dObLy8u3b99kuxXkv4DPwTtjidomJsRoQYNjQwtO8KJ3yo0PIcSUclE+psWn0edxK1NQ7uvXr9h2dgn+8QvCSpPDAnsAj5zQjKrkVIL0cAiJ4DBxKPEL2CFWT2G/5TbDWqjKW+Tnye8D4iM1pxWNm2QMylz8TT8Qtke+ORzyL1LLMekPcAvtOj5//vz7778DX2U80/f9y8sL+AZocACXGy9CQWGoAJ1P7xdOEwPKUlRKyYcwr2HawrilKag1GvflyxfeolT+BShDQbSzp6mTyXr2aTd1CBg8F1gaqTbxAYalCMWQkm1qEyQGfwjVoRsldoWPIa+GU8t+4TjfDFoQLyKJQZ1x05IAwJC+ruVgbllf9+csomksjx12DpuH/BTkCToJk0CJVNDwBzFMC3vGpCApUnAdfviVpcQQ122LOZfiU4wxxBBUTNZ9/fqVq0M5bWqbUdyR/APktFBug7Qy7JOtbXsIWlLY8TQ0SEA3Qm2KiqeUlHuqPirPG9S0EX16SKXlxpD6rmqZWVOneJBExBJDkpTIBcm1k5AS1RE8KPCh0GXly5cvv/3222+//YZGR2y3gkf1dcIWkEwaIOJcWnSlUaIMz9SC0KtDn5LfNjcvRakt5CUkE4qJRWntOA0TK8WHvonJ6H8jwY+0JDI1uTbAKpWFzhwQoUtSyqGocUCJz5GGzFYI9G6S6B0jO2fhAFH7QbDInKMVTKLnBHFaJYhYsTZMJqfd1cEfEtAgiAFvRW4eTx5pL7bWFuFlT6cTA3lSnJ2YYlhE4RV3WrqpMcatabSxuaiQlM8qFBt1iui/RH/sNRCjRAcBNqJ4fHxEgrgVY+Kt6NdIqiDL5ohUgcRA/JrQBl1zLeg9DN2AyMCvgU5u6mA49uvAz7E09HpudCPDXFYYka2Eb/S1wyWSq6zTwLNN08QWY1++fIHNI4xnrssqaFPKq04QLCaRGVCym6zoYq1/9Blvui7t0i5mlbTNdssu5DVfCMW0MXzbmywgqxQloeOGCo6LyAsUXa6N3UgwxOfpld0E8jenP4oJfPBmkaHGYxPhw/tzsPRrCFjCXX0dv65FSzp8nmUJJBXCvXLO+Tor+uvXr2jO+PT0RLRFknRlwotaBJo8iF52BBmgHliERRKQ+dHbWJdStDZd1x6U0a7VTVCtz1NwYPKk2uI4iS4iUDI4dpzsCssHSadEE3LD3pPjJU+ABJ8AJuHgGtEWAuLCMJS067YObsNjPDw8YFmj6Nx6w29A2h2Hgz4CYVLYS/hKiFkJxkIs8KXU1dZaJFRZQsaKuFz7A8EnJ8sk1GZYJGdIbMSJkaN0IHCKoANuElXOOeuapmls07l+Z/qo2i2Z9VKtSVezXNOq5MLhAh2YPFctepewwR/DCTx6EKP1GCAykQRjQxMrEw50B9i2Fc/A/cuivl5SaTnU+Xg8Mh+kKlcRjGyA7KVOuCV3JteJw/R34DQR2ZLN5YgJyOGbLMTFMzRNgxQHeQhbHTKlRAMPojBM3Eu7OOx2O+uapnVt1yvr+pztupbpB8grlRiNMJNnLLlnfA21pkUTcTyZrmRtCJ0WneHlESTZSRK9SfCiWYWOxYlhJSnVWhEjnAEYkpyCtAa2RM51jrXYCt5Wzpn1wLggB4hJxnFEA6VSiy7ydeMG2NH9fg/S5ocPH968eYP9W9cVkD0CeebIeB99PT6hrbNYJLDA9FPXddaavu+64VBMY7q0KXf22RFxZvDQ1aF6qg6PZ5aZZbr8Jhkk3eQQcC6RgmA+Gm6CEd2/2HPC1RYwuENX++8aUYYoH0DqnFAbRgNzYetDeei5Z3gYAsSsXfZiIrq/nqvW1qaSzGxjphl+cn9//+7duw8fPnz8+PHt27cYf4H9g+RBB5AbIIGnoV6tmGJURIGVraXhbdP2fd/vhmKaZFO/5aZp3TzPjEjoy2A7sfrmjwfpaNHfkvCVxLhzHZ0p9RuEg8gCecMy3jLXPYSkHcVNCMneoIik8EZR1MhYkJom1x4gOLvMHpPDKCMQYqdElA6HAymmfZ38/rZe2D+wioh4QKqYW4DLAywJtDNWR4zjaGrXmMsJqRntpmkb57J2xiCBoxzIfSy6IUKvBGNAJt8hszd5HHJntGgVwo0plXclSUTwuLyYw0dviOeVzDBqxXEcmQ/ho0bRWUZCmjf+7Y2lUGI2k6md+kytu3+NwTKJiJbA2AOAw0SaCPYSkVfXTZxYR0f4CRYdSAiQtufnZ3hhZGfDE1VKlZJTSrGU4AO2wkmSCOwBXfBUGezwzVAmQvKIq+2GuArluvJPxlsyRfwagE+1jWesPYRZzw/GLXQDoZx5nhlfkrD1GoaWIaCMCIsg5mA1dW24G2rvAPaSVDWVBidQuq+QP6nPJfVE/oVaitQC4CwoVQEYAkWFwxdq99tS+716DB10bvUpZH1aA0y2YxqdA5thsaCIINSgxjL7Sr+j1HY1MiGuRAsYVzsLcOF4WJkxUJXe6muTN+gQcAOxf0m0w4EYyX6IjDKJrllRfcmLGRWqBxyR3W6Xrnsv0vcm3RtgLOkqiCBBbZXoqCScMRsjKXFZFJUdDge4rG/evEFDYmDfMcZxHGERYQXXdbXnc85lXlbjGp/1uKbnaTufVodYmKAAzBIgV8AKqdZoyW64MOmlDotgRXUS44PZvY2aUybSaLQRKm11MjQpbjh/zD/kWv2L7vGk9LO8Eegr6mOx3EX0w2IIL6PpG7yNRjGK+l5VaRN0BSRbnr5+Eq19EBsgpiQhUdIAmtodlEgyqx3gD0snv2JAYZpm27TK2JD1HMppy8clOdadEu4qlUkHZAHrzkpJCDvKyRGGQ7tyivNNsVK+7mXOPBzriXFzOh0SLOVEYCbMcP7gFADM27YNYB5ZTGRJy7gqiWGENGbsr9pcd2vb6lD4dF3ImWsxIgQIDUmyGJHMNyU2BEHkGAYwKuhUS04X9K1kk5KL7b2f5lkrXbTJysSi12yWaOaor/gvpPqA7oAoDZYJYdmyLMfjEciC5LTLXgaNaB1I4aU2JsjCh6aKYFIwi/670pSGOlMX+plzBfDw2EJ8e6gdvZlRolsrWQEABGR/Y4Ls0ljSZJJIjtMfar9XWesjcWdiLjiIrONBDCNDSS0oskzdYAvneY4presaQowpx6xi0V45XxqvGnc8Hpnwpf+J5m8IHknfx16iHke6mgwGZC2rTBuxIT5ztpJ/LQ0Vo1olup2q2tuTDqGMzIqgQkEL4XDT8DD/XmprOxZ1EJcgscPUMvkips7drC9MJg4ZjjuJoAAWUD9GEh4TLKCellrLyFCHyiyLvooQESi2eV5yytu2rlvwMYVionLBdMn07vPnz7gXFpd9OO/v7/E1kh+dc4YeoOcpMR7J3YZizLUy7ybGsqJPz02MhYspAtlwiZg1caYi2sLSrDKukkob3h105g2/pqmtkgm1SyKPrXXC3Ei8I4bEoHyQsJykcYYQyLMyoqE0ErzDMJzPZwA0dAKgXQiokuwDgFavlzlTPqmgcjI6Oev+93//d7/fs4lczhm+LBQgSDiruFjYwOAMqwZDokTXn59mM3SljjPEoeNKkwBOPsoSiB5By5U6R4MYCh1CUkmhllE/xqQmC3exZDfJW1Nb9WDnWPlGMerqpB3G+K6OM7aizp0NYRlasKyXwkrXBt+CWAKbrWt7MqJ9uO26rpu/DH4PKeucVVZIzLtff/0Vm0yOrFLq/v6eRGmSDJicY7aFuTfIKWqiZBwm+ZmIarNolIuXJMXIiAmeODGsEMBrdLUZJtNG5ZqqRAgRewkGJm9LsjZhKoyEgzQwskSkC+8XZ6WIYV14Kh5HSbAjrM99ep1MpV2khcZSYAgBH4YlxM65fhgOh0NMqeRS4MKsIQeVlSlau2/fvskOgErUp8OG4TBJrMuIOltfO4HxyKPJMH4FDuHhcICS4aIX0cAFKh5JL64IWSe4D7m8MIqoVox1JkMRzcy4amw25mrPT7ajB79GpiRZnH6Ti0AiEK+5LAsjKDI56GZLOoHMl92ExfZ6+DksIoMTdT2U5cL3aZrD4aC1tsYa54xrlF3VFksyRbmL/xJFz3p+BzZAHiY8qHSr6Bay2oNaBaYFTfRgkNg/kmxuxkbYiSRKkOCzMH+EWA0qjkAUdTLWgjQOPiohbygSzjXBFB3sE+ejFDFUhgxHsNyA+Eh7CRMD3U5FLU2+pFEz++jE6GRsITw7mTwvouOKqe2h2q5ru77pOtt02o1q8sVnlaxjEKOvuegkusu4W6KaEqMJomOiJHA2tbURvG185nQ65ZyBrWD/tjqaZhgGCBMtJYQJYsF7yhy9PH9JtHOFTSLhE44JlBInZrVtyxJcKG02JUq1OpC0TLC/u1oKBGPfihFkobaoQgQiMQ0jxpWyaIQlSzypsgiLrjIWEwFS1w+26bXrVTOpOShfLuMO1PUMGQS2KGzgP8EmwbOAiWZnWcY6LC9uRFMxlkCytxnS3Iz9SRXEu3W1gSe0yqX6ZhjIWFE/q39n0rXUttT0iUwdDSWDPKwdOSaxtowmUmPFQGGZVNF19sxNVoSEVcCNsgqJnbMY/rOskJS7G6qxrkO56ru7EEPX72zTKdcW1+VmzXNw5MzIgIkxQ6nTs63oJ+zrDGK4T/RCpfmVWDtrJBAArLVHuMQ7sF44wU0dv0fGKYMHCTYGMVGO1Dx4IigKj6ItLM9ruu4GT7HDxuDOtrbGxq+HWgDNTAKfjbGBr7OiycNAoAXlQWxMia5p9IPwjUY0TJJkcwQ8rmliTE3ba9tk7ZJugpmiXt1PswF0+unuMxUC/RNjxOYBY4U/TYHFwcJ7Uuhg80MIVM6Sp5TrcFOMBSPDjotl6tTgKLq1ezHPz4q2kZu4KFXc7CwqZhpRHs11cHUGr6tTfRh009VkAkTXYU85Z3aCIrvihuOarmupTe23TMYw60CAjl76D+72ztmYkjYm5rLFvEQ1RzNH425ysDK3LpH4Royx0Fpje7hq3D9aIyK50qFQlfbZiZZukAB83Y3PVkRNCZUzL1iXUgtlmLST3jmRKjkXSsKwskacHJxGNJ0bhmGtI+GYqLlRgMyY35y8TvSqlEi6zJbY2rcECQNIJHv5YFZiLeJBirupa7i1rb/K/9HNk6qfqCZhAuB4Mi9frusEZDI2CyLsDb4HwAJvCxOor7v2kssLdbfV8XjYCWbIWOfB4DrV1ukIwOFTyHHa0kF1dYZ0EL2EEQKFEFguoypVyYraeRpRBjCcm8jkBtLCJAfhbMCZkPUe9Hhh+dgOpuGMZr9t2+aDjxHIl1JKOyv6ZOLMkpjLDBbruCSngQn+JBqVUTu9TnPfYP/Q7CxLlw6nFfNqsBOqNmdB7QH7DKba/5Tr3tRZUHDK6bOwEz5wZMYetDrQGfTXoeTVdUtLCCjeVDK+imCcsns1nEbqSenh60rMlHM5SRZVdYoKEzje+3lepnkep/k8zeOEMqUtxuAI+KJZF/s3mVoSLg0V3BzCx7yYWqPN17UvUxbzJUslGlnRwBrcOqwCFXURY4VlXpAUkii6vrZidBZzLjgKWpSTsXSGSW1aI+pt7B+1Jc4uaTVEEOkBUbVQPZJaF8UoBSym1M9k9bG6OorSV1tnKEPy1nUbx/F0Pp/HaZyX87RN07Ysm/fevebGAzyztYpVi6aJAAvQyIitPyAyQUzSls49IAa4iGRjSHWEK4qphlxcKgDenJA0s6n2us0m6+WTKKDNoqgfCgqhHhIp4BpBG9s6mIp+/A0fHgAsfX2eMGk4tGjVQ3AVb6RrwTun2LMdpsya6VqOBGkLMVRAYJrndVn8tl3W5If+JEMeIwe5iNBvMmGLcmFQm0mFk0Af4yFqdlcn3lCc5dgcdV2rgHvSJEgIg04j1A4urjIWQqYkIfKM8OQCAYLBbSlV5OGRUEKSR6oDeJPonksehkQVCBrTBJja9ZS5aznCqhEdHCj9qdbTGGO0UkUVVTD0FlbswstyXBFJSoBJZ3tdeQoZnz4/P5MXa6+nOnDXqX6lSPIo8BCzSIA6FtqY+0fGAyAVlsZ3ottsET1PWMhKfWVrZSG2ELE2npCZh1jLaKgYqJ9dnWLFxAWjRm4e4X6acKaEJMWSuWtZsGivR1PyOXEr51zXtv3Qx1yKscWEqP1abMv4wdXmvTCqrvaZSnV4EC3EJsYcEyOXGRxdKeLcdXm2GAmR6A6HG14o1JoTs0IkTR02iZN4ZcMp3g2QEJs+SnZzqTOUaWm2OlQA+4EjQvCFawocisG7DL2ZhYACI1aHV5Y2tastqaXTlGqNgKq9eyVjkU570zR9P+RSrGu7ITR90O0WzbLm6SK8xKwb0d471BkyMP7s90d2c64D0UgFIyeTYCB3i+HzjXVkDprAlREdYJOo/wNh68OHDx8+fHj37h3sNKwdGvfDFeLkW6mvUBEJuYTlY7TAb9Sik4kWdQEka0lwWa6vFdNxKU+SzY1fb2pX0lCbduHOTb1c7b8QbyaGKOUaN6ihabs+5maIut2Cbqaob4mLVrRDk85VFE19JJWKpuKmLkLV/uVJ1GNuYk6cqbMWSXjxYooVTamp7U1Blfzw4cNf/vKXT58+vX//Hsy5UgosGWj5UVTSMPWKDAPOH/Q/DkeudZ08VVQe5/OZCp/oNj0giiOz0FkUDkjLHWttG481oWDmRgiIQ4ExN0A9t21bvPg+rWuNaUrS7RTVbomOd5EaQ9IjlBiqysPKpLbMGdFua0E+JzEX1oIYoK0DO4hevqacQK53u93Dw8P79+8/fvz4l7/85a9//SvKDOBnYZ987XNCudGiaheeOmQC2LoR5aLYNigSvj4LuLEZCKhwuFE5hu3BZ7A+kAlKAPfP1JG8jKZIrJJkKqaxsH9sWFrdde2apu1627imNV1SfRfatnOSDELkrAj+ta1TIKW6J+mDzcas6HcuwWLoXp5mxun0FY0o45PYIJEaVIdw8z59+oTe7BztnHMmGsmCm5xzX4fn4MLzMCNjr0c+49eZgoi1SgibQXIDKwuhokstNMHWtnX4n3wjW0vM6U80dUoBbScn4iLNQgYzy+qNtX0/7A+p32nlOqMvFtoBZHs99iGLATWuDsXFxeQZT56p9URcd4affFycp1i7G+C3kHpOYloACRas/Hh8fPzw4cOnT5+oOeG8dLVJq/eeW4XKEls7sLDPAjgAYCqA1wXvVInRCJ2Y+cdEkqrlljLhJct6nXPQlnxrLZq1U13RyWK4hc+YSqSHZYE2QpCGNrUkHu72+1xK0dZ1JudaWfHp0yeYFrZJt7UPNR6a2obVUJA71j7dpHmZMyIwT50GNMjV8bbwNkkzLKXAHyEPEVrl8fERpXUfP3589+4dIN1ejLim+/fw8IB4ALvV9z3rdeG/IMMuG/GlWtjAAyHdE8YkjEfloAnYP4b/MniQ0MRNtEDjQrSF5UgMMKKolZzned02o3VMWRtnXNdpF4vNOZWS3S+//II3R+EoPGA8bnvdgRNqCuGEqr0Pud+x1nE3deoABBZOPD7s6hQy/KJSCqkoOAWmdpajTYW4AInHxZhBixZiONDwTnHs2JQCvw5GHWSIUAuMH9nJNwAKGS7kQtKc02fm/mG5mY2BZINGC6s2XM+yT7VanYgx6MjLsjBnbkQ9V0SBuDFt17X9rtgm6SbEmFJ2Hz58kOCTFa1rmtqBjf4FVE0UdcOSsVPECLYbGhbtosyqYLGwTyEEmB8OY2JMgp9gFeheFzHbPNWO4G/evGma5uHhIYhZ6DTtWCwgveTokdauKkufQQXdH1c7OTObyHVXoqlWEhWE0mcmSGZrTXmsYzAlzEZUmewhGAXRZz2s69Yui7JNMslvMYTgkF6SCXEjRs4zVqPzYutsPytGzTAqcqJj6Q2uxhejGNJLhHLLtbcS8pbwjGRsBGchiSbUMpR0zuF0plf9pnXl5jL7gREQMBNkddKvhvwxBehqF1MsuhWN3vnKDL2o/DlMBYqNIBk2DMOwS2XuEKzwdaaeZNEvy4JpY+u6unlK2mYT5jVv2+rI58RfrJjjdpMpZlxRrmmG3Alb6wLVNeecH8u1H0iuZVc0pXh/hApsDiQdeua4sWeUJ33dXPtGuzJZzwrQTUxgQJKdyIsW/cWb6/4hCLfBDWjqZD0ibZ0YUiFrBNlxBZqDZhU2RSpzGFeAJDA0PIJd1znXaKUCOvwbu0WVbTv6Ms+be3l5MWIYF6meXCZp0nki5fJRrps6jgahoRFd01iugG2QmTMCm8yB4PCxiworYGi3pAzRUyXiTOYcGXKYYiL7asLs0bZJUbNiWiFkCHlE7z0DLXqqbe1U1IhqW1nVTliKLrquZCKZxIczhbI//ByvXzflIus+xJCy3WI23RzVtET366+/SvKEjN64SfxT5tnpoTHGJ1XXiXZRVO4AlCWDgakPLD06hACSJ82ZqD+CWdYcMVzB5t3d3SGkYXBJFbLWmabwxdkUFSde9qtiQoOZcZLbEU0Sr6ChYd6RGRv4w5LgRJXG79Vimp6u9JxU50IMddKjEuNULxSelLcQzRaT6ZZs5i27v/3tb0zBdKKRphH9m15fRBN44WVCHSkjWyWz50QIAdvgazdcUNyR8Ze/cgNknOtFxz3XSiUQxeC/SJozUxmARtHrCmMxlWAbM97HWSTYzWoKFtZgiRA+OTGbgj1iyEKzooectHnSBsu1lc4tE+M4fyKMKTFGH6KKWUeVTF6L9UG5L1++UP8AJKRW/KPNU9f0S8Yx5N4wSmU2FeqF+BPMCaI9OC+E3r0YSk0wk52wWOMpk5z5elAknz+Lsdbo1YkZXRA1qApJ7aEqZlwEE0V+M6BUrTWaVsnMHwkDMnXwU6H/P7tKtV2q5FJyLrlkU7JyLy8vWEEEZIRaXO3W9/pbZTIP4ixpfbLjFy0rnVWC4LjVJjoMxzqBhwSFKFo6B9FpmfJra8vXG2VFn555JY7c4f6RG0ewSdWmDDIJx5l00G8os2JaWPIzKM2mUh2lD0i/3fysvSwTjXwXW2t68SHNiNA67ZwxTcrWluKANsGTJu3wdYwsN48CzhSaOOY/Og/nV00pyh80h8D7S1K25AvRM4S+UqIrnxVDtghw3KDwoTZowiEmS/qGTUq+Mp6NjDfZ3QessqvIurbjlQQyPBXUINOwdFuoNrjHPMeEaomiXGTrB/FX26Y1TZ9sW5LZVHYMxglBAW0y1wOYuegytyl5Fao6UeW60Q5T20X0sC51Ph25l6BisFcJNTAT39IwM6qTTvbN+buRD4lIES1Kok+53LxUJ9QT7YRpoJ9MZhj6KeDhmXeEyiFJta0tbrmG3Gz6YvBcJKPJ1P44NY8I6p5xztmmsbaJxriYLrGaE1NcgDYpMWZC5n2UaA+ia3eum9pG8l/ovLBSEM4bcc6dmJ9O/jJprE2dqyfVWqndvkztj3dzyv/E9tCPkCGQEVOfmLhWddwGMjiI2HgyGFdorRGVktTjaz8kANAs55T2CJE4G2xA+RFwYRqEOmNZ1xB8SslACOiWaOWUSBrQDWNOB/56EI2wma+yYvBC3/dytAfsHJQJMAs09rbWwtWUZEhbWyywwZ8XnbilsuIpkbkO5LZQXEgPgv6X3B5esZbDy6QrxZS6FJvHhsEoOIKU60onJx5Ntg75zWibDHwHII7cP9KIUInIuNPWrhDY4CMGkl+4XskUpW0qNiZjYjIxZkfTQgQIT4NCL8iIrGsCfQjmGjXg8nep3LF/wPspaIQ3JaATAslxM+ciMoJmi/tSKUPEHqnQIBl9HR+c6zxsI+aHM3SDtpCeGmNtGQZwECA4WrB8cBGkOTCiMJqmFKvR1uGb67oiGJD4C9+amoZ2Hf966X/58jKO47KsPoSci9XGpJhDSFqFZGIoV/0jVe3lF0JAr1kMhJGECQTL1JZt7ZAs74AngDBCymSTWqyUq+NrWJYg1Sw8Keb5GFeQ4xxrewwkZpGVlB68xAcAZXFyVRTz2WHymWMCyIn0G9OnqbZbRVuLm9oM6bvxNNPv1aLRvfx8rtXLuLlU7/g51O+leWmKugIOWmtVSi45pZJycX+09Ofz+fn5+evXr+g9I4tsEb0xbMrXg22zaFLHigVkAellsEmBBPVzbRePvCsbS9FAhtpmC2KLGyKCJG9fWjUa9YeHB455lLKI7QdKCRyfnjOVOZ5c1RSmVMsSH3+9l1wHaaqVAMolCngTkq117OuFonhB0ZxrGm2bpFxJ2pSidboK8ojxyBa25HWp2nMKxgBJ7VoaUyS0RvoMVARwL2wSmA2mlgGkOpWKwQBafLx9+/b9+/fYP5AkuIsyhWRro3iqcQmXk5rw+PgIt/5wOLDJFxMRnH0JZwTSSf++iEoziavBNkvsjQQwLWYoWlEjV0RhtK3tvaCWJPGc/iAWqqbb2rZtbdMWbX1WdstxiUsS8/9kqkjGTGwaj/3D5pGGlWpnuZv74DnglUCU8K9d193gn0xSY7GGYWCv7bdv3yJFEOoQ1lUMXpc3Ie1RLhkRr4eHh1R71JOl6EQnOiYIsxitbWvnF1snI7PyT/YJ4aZiX1lbJDebpw37wfx2rNNxSRwlaY9pgL4fuq7th6HveuOaVNTik5190Nuc1p/Mb+TZJ1kR28kgT5Y6wPd97b7Lg0guCRJpUUxboTdLsi/aWqE2AEfc1f4kMsmCz/+U+ahEgC95NLnWkikxZb6rjYtLKYAypNVkLIinYhoZv4V1p2eEXkd4fe4fx4Uw2QmoknEX9AGeR6Z9XO0vU+tG913faW23mM/zFvQ8BtWs8Sf79//oukkH2lpiA9FmgYtkixBPglADo2FeF0JwQ+vm9VOLRWpCU5u0SZAda2crZVQphSZAwNvYHkvyXEj9u7+/Jy4Po0B6IPN5tMdy/0DFwDEwtcwMJ9iJoejDbte4JuYyr9uWips3o7VS+if7x/VlGogIyw1T+Ebeb26CtcAJQGjIfBh3iEaekIcEwLjWONA308kkmkpaEflUuralpC/AUgqcNmIC0CLQK6m2CMTmhdo0nsqWsKSu7eJwNBHj+jqGimgLCQaQy5uJnHAV5YQ7XFb0GsWvtG2nlFq2bdl8Tslf+N3+x/5JIf2jmKmp7RBIFr5Jhahr94y6Cw+E9KwcdAOfEGhyqSNwi5hWVa7bwTTX7cRY18KkAawInBGyYOGIoWMJyTKE0BjzcXehJLNo/lUqtU6eeC0qH7CFLAnOovbY1vY3bJAmmzPiyYmlZVGz3teBWwChNh/mdfPeT/M8IRc9L44aRr2KmcDzwXLI+AH8BpLVXqeceHxLKUi4gAACVxAQvsTXackk9i/XTgmgi+4cC2uU6ImHAIPVz2i/iUHqADuYd4ULhmYYSlDBJFXuppJBiVzdDSBFbQyygZRmV5tQMTtNuXfXl+wfQu4a54ygt/c0zcBlTudxmrcfxTJy/5RSd3d30OZ41Zv4XfJFQx1FcXliUc/RiJ6q8plcbVrtxegGma+gM0wmFd0ibjDpEfnHkLxLE4GhDtZiP0860jgf7FEBk0bWHfUk+aubGPsuH+Mm3NRiboatHf+Z9WWUgs3Tr/hUFFC6o+wc0ve9UpgAnLdtnabpfDqdT6fxPM9LdOqa1YLNJyKAFPlr/OySZhoGa0yqjW1kfAP0C7ATglDm6qyo+PoxEiGEJGamGzFhLdUSS2pUGa2m64JVdJiVlTQAG2Md0iSrO9n8jKyWG/8QD1au2Vwy1lZKyQrhLNosdnKQb505AsGVZaQ4iKTh4LG72tGaiY6cUwh+WdZ5nkYY+2XZ1uxKKflibxIaG+jajJ0AVYgxIx9rbePcD9LH5daZ5koh01gH77Ds6nJEjNGV0iKLCEMIKWctGgpIJBDAWBAj+i76tg56IycKAb5sVMaSGgYMIQTvf0wa8N6zugWBBNzepnFYjcBeoCm5aw0Pp4Oekb+e5csGG4fDYV8bZuVcvEdpy5Zzql/XkkKHvzRtay3bPhIsXVBAvczLsq5+20JQLuecYgohbn5b13VZ167ru67V2jSXjHyTUkS7CsN4uW21NinlEPyyrsu6bpv3ITRNU4oy2jjX9P2w213mddfa9YQy0Hmez+NIPlKKSSlQGVp4hSln78Oyrlob74M2OoQwjdOyrDFemBm7YciXRbxMq0gpzfMMr7nt2uuMWuecMxcaQJnnHyNFUkpFKevcMOyg/40x5Qd1aj6fx3mZS85N0xpjfAjb5s2lX0OaF8SjbCvTamOcdfv9br/f7/b7fhjatrPOFaVCDNM8n46naRpjjNa6fuiHYeja1lirilKqKKVSTD54vegQo1Zq8/50Oh2Px9P5PI3TfMlvx5i0S7mEGNdtm6b5dD73w6CV7ofeGItpESnnXHBblZVSuagYcy7eXBDOcTyfT+dpnmKISukEw25h2HvnXMo5BL8WlXxYNz/NyzTP87ys6xZ8SDGlnLVWOpeUc4jJeK9nk3PxIUzT7JxV6lKTPY6jD8FYO+z29yk3bbttPoJskeLmw7yspRRrTNu1h/0BnOD9/oA3atvOGFtQlZnA6FpTLlqbpmmHYYe2ACFGk/W6bfO8nFFtNM+l5LbtUs5FqZTytm3G2gvDagWn1HZ9r43JuThnh2Hoh6FpWmOs0iqnHAqmHk8vx5fj8VQTMv1utx+GHsJxk/AyxpSSt82fz+fv35+QTliWxW8+xJSzdSkXH+Kyrqfz2PUvSpt18xcHTKmiSs5FEh8kfyIl5LEuSU6lijImxBRzyUUVrZWxylhVVMpq82FelvM4TdM4z8vmQy5FW+uUNgUConMpmw8hpmXdnButlXyWDE2ybV4bt9vvrWv2h0OF6NZ5nuM0+bBdOMFbm4tu+/4uJKVN0/Zd13X9oK3LRcWUfUwhRiyD0sa4pmm7tuubtlVaG2OXZRmn+TyOx/N5HAF/N+u2res27Jaug4pTYIYpY7q+N9b1KZWStTZN46xrc1EhxnXzSlut1Twv53F6OZ6fn5/n+TJ8mUTTGlJrrQ3+qhR8YD9N88vL8dv3p5fTeZqXLYSYSi7GpaJ8zNPi3XnU1vmYztPcdR30L7wtpVS5dD64bGI14NF7uCELtIG27erjGuLq0+pTE6IrKoY4zetpnF6O5/PpNM9LCD7norV1rVNKK1VSyikBq/vB0C1K6SowMIuEb7ph3w2HXHIMYVnWZhyLNluIZd1CyjGmVJRr/eqjjxn6sen6RqmsjI9p2cK0+nnd4ha2EGKeirbGNca1yriQirVu29bTNJ/G5XiezudzCNFa043LMEx937dd1zZttbDO2qZzXTeUXEpOOedUSklFLVvQ05KV2UICPn4ap+N5ej6ex3GMMQkKViPNv2TRhXA5uMfz+eV0npZ18zElk3VxUVmf1eyjmtaozvOWuvPcNo2xFgiNAFWK+M/Lg1aSSyhKdV1nWn9Y/Tj707x245K0tdYGH8bx/PJyxKz5S9MylL+4xlqriiox+KzW6OcZGb4tBJ9SLqpopbQxztqmabu+G/ph2A1D3zVta7RJKZpmTcosPtl5K3ZNagsll6S2WNZQ1pjXWHxUoRhrrWmy7XauW2zTF9uGvG4hbDHHMmXjsmmStmvMbdP4EI7n5Tgtp2k9jovfvFLFuaVt27Zru67ru37YDbvdbr/bodUo3iWm6L0P3kcftV/XkGaf+t4jWfZyno/TchyX02ne/IaorHGNc/ay5lprhf+polTJJSaUzG/zskzLNm/Bp5KKydq4bLqo7JZ02VJQ2xxKM3vrrNEG9/n5hX4kGaKWcinW2L5Y28XjEnbj0r5M2Xbjhurhy/4djy/TNIUQjTV91w2q6Y122ipVQjZLKOMaT9N2Os/zNK3bFkPMJSulLAbA9t1+t7+708m2utFKOWdd1q44VZwvbs62z6ZLxietijJbsUtU05bPS+gWX1xomhJj2ZL2ygbdROV8MUtQuaQtb9HM2bRRNUsobdvFFMfzfJy20xLOS1hXn3PSxju7NU3TdW0/+INPd9kk0xanSmMa65RWsZQ16WXLcGqMtd0S+m6z1voQzqflZdyOczgtfl23nLI22hpjjL00dcGiV91XRL/MLUQfok8lZJO0Ldq40gzRmKJszjZ4teZkjTImam3Un23fFaVUK2WdSbaYLTeTd8clu9McVd8v2ujgwzRNp/MJtjcnFPmpXbZ9Mk1TilLBh3kO58kfR38at2na1nWNF94NGivGLpQt26DbZH0yYShN06hSyubzFNSSzFZc0G00XTRaa70VN0d9WmM7etXOa7r0xloWf1rT5MsczZLskk2Kecs5mpDMGvQ4R9W2W855ntfTHE5bHr1aQ0mxKBWNKc7lNpQ+mq24YLZktqi7rbimVUqpGMKyhHn2y7KFGLTWbePb1ltrU4rTvJxmf9rSuJXVlxShY7Q2Uf8AIn/oORzBXHJKOeWSkonFZG2zccU4V9q9UjoZXbSJypisdTE6Aw1T6uc7WOoR1NWnMS7bkoz2xcwhH+etuJcldm2rtI4hLOs6o5WC30ournG9L4NXXZ9qAUdcl2WctnHy4xznNW9biVGVrJQq2hSXS6dy1DEaH8y6ZDf44lyjSvHBz7M/r3mKei0umDZarZX2pZmidktSp2VTzW5NjWtyKd5v07SelziGsiSzZhuzMkVHn9Mcgl6naJomgN4xz3H0ZU7GJxuzUqXorE3RjSpep2hiMj7obc1z70vTXDrXrGvtX3Dh2oSmCcbanNO2bhPvmW3M8A6LSq83j3uoSzGl6FxM0SprU7QpxinT/H+l4RteHtIirQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0xMi0yOFQyMzoxNDowOSswMDowMJVpD0cAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMTItMjhUMjM6MTQ6MDkrMDA6MDDkNLf7AAAAAElFTkSuQmCC", gt = {
  "qrcode-display": "_qrcode-display_1dcoc_1",
  "qrcode-display__image-wrapper": "_qrcode-display__image-wrapper_1dcoc_4",
  "qrcode-display__image": "_qrcode-display__image_1dcoc_4",
  "qrcode-display__placeholder": "_qrcode-display__placeholder_1dcoc_10",
  "qrcode-display__image--hidden": "_qrcode-display__image--hidden_1dcoc_19"
}, Vu = hr(({
  url: e,
  showUrl: t = !0
}, n) => {
  const [r, a] = ie(Uu), [i, o] = ie(!1), s = ae(() => or(e) ? `tel:${e}` : sr(e) ? `mailto:${e}` : e, [e]);
  return pr(() => {
    const c = s();
    Pt.toDataURL(c, {
      errorCorrectionLevel: "H",
      type: "image/jpeg",
      margin: 0
    }, (u, l) => {
      if (u)
        throw u;
      a(l);
    });
  }, [e, s]), /* @__PURE__ */ W("div", {
    className: gt["qrcode-display"],
    ref: n,
    children: [/* @__PURE__ */ W("div", {
      className: gt["qrcode-display__image-wrapper"],
      children: [!i && /* @__PURE__ */ C("div", {
        className: gt["qrcode-display__placeholder"]
      }), /* @__PURE__ */ C("img", {
        className: `${gt["qrcode-display__image"]} ${i ? "" : gt["qrcode-display__image--hidden"]}`,
        src: r,
        alt: `QR code for ${e}`,
        onLoad: () => o(!0)
      })]
    }), t && /* @__PURE__ */ C("p", {
      children: e
    })]
  });
}), Gt = {
  "qrcode-modal__header": "_qrcode-modal__header_gsenx_1",
  "qrcode-modal__header--printing": "_qrcode-modal__header--printing_gsenx_9",
  "qrcode-modal--printing": "_qrcode-modal--printing_gsenx_12"
}, Wu = ({
  avatarUrl: e,
  username: t,
  selectedLink: n,
  isModalClosing: r,
  onCloseModal: a,
  onCloseModalSuccess: i
}) => {
  const o = Fe(null), {
    url: s,
    label: c
  } = n || {}, [u, l] = ie(!1), [d, m] = ie(""), h = ae(async () => {
    if (!!o.current)
      try {
        l(!0);
        const b = window.matchMedia("(max-width: 480px)").matches, x = await eu(o.current, {
          quality: 1,
          pixelRatio: 1,
          style: {
            marginTop: b ? `-${o.current.offsetTop}px` : "0",
            borderRadius: "0",
            paddingBottom: "0.75rem 1rem"
          }
        }), g = document.createElement("a");
        g.download = `${t ? `${t}'s` : ""} ${c}.png`, g.href = x, g.click();
      } catch {
        alert("It was not possible to download the QR Code. Please try again.");
      } finally {
        l(!1);
      }
  }, [c, t]), w = ae(async () => {
    await zi(s, `Check the link to ${t ? `${t}'s` : ""} ${c}`, `Here is the link to ${t ? `${t}'s` : ""} ${c}`);
  }, [c, s, t]);
  return pr(() => {
    if (!!e) {
      if (cr(e))
        return m(e);
      Sl(e).then((b) => {
        !!b && cr(b) && m(b);
      });
    }
  }, [e]), s ? /* @__PURE__ */ C(Ir, {
    ref: d ? o : void 0,
    isModalClosing: r,
    additionalClass: `${Gt["qrcode-modal"]} ${u ? Gt["qrcode-modal--printing"] : ""}`,
    header: /* @__PURE__ */ C(Ji, {
      src: d || e,
      alt: `${t}'s avatar`,
      heading: t,
      subHeading: c,
      children: /* @__PURE__ */ W(Ba, {
        children: [/* @__PURE__ */ C(me, {
          "aria-label": "Click to download QR Code",
          title: "Download QR Code",
          buttonType: "action",
          icon: Ko,
          additionalClass: `${u && !!d ? Gt["qrcode-modal__header--printing"] : ""}`,
          onClick: h
        }), /* @__PURE__ */ C(me, {
          "aria-label": `Click to share ${s}`,
          title: "Share URL",
          buttonType: "action",
          icon: ti,
          additionalClass: `${u ? Gt["qrcode-modal__header--printing"] : ""}`,
          onClick: w
        })]
      })
    }),
    onCloseModal: a,
    onCloseModalSuccess: i,
    children: /* @__PURE__ */ C(Ba, {
      children: /* @__PURE__ */ C(Vu, {
        url: s,
        ref: d ? void 0 : o
      })
    })
  }) : null;
}, tt = {
  "user-profile": "_user-profile_r8ia3_1",
  "user-profile__header": "_user-profile__header_r8ia3_5",
  "user-profile__main": "_user-profile__main_r8ia3_8",
  "user-profile__search": "_user-profile__search_r8ia3_11",
  "user-profile__links": "_user-profile__links_r8ia3_15",
  "user-profile__no-links": "_user-profile__no-links_r8ia3_20"
}, Ju = ({
  profile: e,
  isStaticMode: t,
  onOpenEditMode: n
}) => {
  const [r, a] = ie(!1), [i, o] = ie(null), {
    avatarUrl: s,
    username: c,
    links: u
  } = e || {}, {
    filteredLinks: l,
    isSearching: d,
    SearchLinks: m
  } = Ki(u, tt["user-profile__search"]), h = ae(async () => {
    await zi(window.location.href, `Check ${c ? `${c}'s` : "this"} LinksKeeper!`, `Here is the link to ${c ? `${c}'s` : "this"} LinksKeeper!`);
  }, [c]), w = () => {
    a(!1), o(null);
  };
  return /* @__PURE__ */ W("div", {
    className: `${tt["user-profile"]}`,
    children: [/* @__PURE__ */ C("header", {
      className: `${tt["user-profile__header"]}`,
      children: /* @__PURE__ */ C(Ji, {
        src: s,
        alt: `${c}'s avatar`,
        heading: c,
        children: /* @__PURE__ */ C(me, {
          "aria-label": `Click to ${t ? "share" : "edit"}`,
          title: t ? "Share URL" : "Edit",
          buttonType: "action",
          icon: t ? ti : ei,
          onClick: t ? h : n
        })
      })
    }), /* @__PURE__ */ W("main", {
      className: `${tt["user-profile__main"]}`,
      children: [m, l?.length ? /* @__PURE__ */ C("div", {
        className: tt["user-profile__links"],
        children: l.map((b) => /* @__PURE__ */ C(cf, {
          link: b,
          onSelectLink: () => o(b)
        }, b.id))
      }) : /* @__PURE__ */ C(qi, {
        sentence: `No links to display
 ${d ? "Please change search keywords" : ""}`,
        showAddButton: !d,
        onAddNewLink: n,
        additionalClass: d ? "" : tt["user-profile__no-links"]
      })]
    }), !!i && /* @__PURE__ */ C(Wu, {
      selectedLink: i,
      isModalClosing: r,
      avatarUrl: s,
      username: c,
      onCloseModal: () => a(!0),
      onCloseModalSuccess: w
    })]
  });
}, Gu = {
  "links-keeper": "_links-keeper_1nmjq_1"
}, Qu = ({
  additionalClass: e,
  profile: t,
  colors: n
}) => {
  const r = !!t?.links?.length, {
    colors: a,
    profile: i,
    cssVars: o
  } = lf(r ? {
    profile: t,
    colors: n
  } : void 0), [s, c] = ie(!1);
  return /* @__PURE__ */ C("div", {
    className: `${Gu["links-keeper"]} ${e || ""}`,
    style: o,
    children: s ? /* @__PURE__ */ C(of, {
      profile: i,
      colors: a,
      onExitEditMode: () => c(!1)
    }) : /* @__PURE__ */ C(Ju, {
      profile: i,
      isStaticMode: r,
      onOpenEditMode: () => c(!0)
    })
  });
}, Ku = "_search_1gmla_1", qu = "_search__input_1gmla_7", Kt = {
  search: Ku,
  search__input: qu,
  "search__input--expanded": "_search__input--expanded_1gmla_25"
}, Zu = _t(({
  placeholder: e = "Search...",
  additionalClass: t,
  onSearch: n,
  onClear: r,
  ...a
}) => {
  const [i, o] = ie(!1), s = Fe(null), c = (l) => {
    i && (s.current.value = "", r && r()), o((d) => l ?? !d);
  }, u = (l) => {
    n(l.target.value);
  };
  return /* @__PURE__ */ W("div", {
    className: `${Kt.search} ${i ? Kt["search-expanded"] : ""} ${t || ""}`,
    children: [/* @__PURE__ */ C(
      xt,
      {
        ref: s,
        type: "search",
        placeholder: e,
        additionalClass: `${Kt.search__input} ${i ? Kt["search__input--expanded"] : ""}`,
        onChange: u,
        ...a
      }
    ), /* @__PURE__ */ C(me, {
      "aria-label": `Click to ${i ? "collapse" : "expand"} search box.`,
      title: `${i ? "Collapse" : "Expand"} search box`,
      buttonType: "action",
      icon: Xo,
      onClick: () => c()
    })]
  });
});
export {
  Qu as LinksKeeper
};
