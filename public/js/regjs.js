if (typeof JSON !== "object") {
    JSON = {}
} (function() {
    function f(n) {
        return n < 10 ? "0" + n: n
    }
    if (typeof Date.prototype.toJSON !== "function") {
        Date.prototype.toJSON = function() {
            return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z": null
        };
        String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
            return this.valueOf()
        }
    }
    var cx, escapable, gap, indent, meta, rep;
    function quote(string) {
        escapable.lastIndex = 0;
        return escapable.test(string) ? '"' + string.replace(escapable,
        function(a) {
            var c = meta[a];
            return typeof c === "string" ? c: "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
        }) + '"': '"' + string + '"'
    }
    function str(key, holder) {
        var i, k, v, length, mind = gap,
        partial, value = holder[key];
        if (value && typeof value === "object" && typeof value.toJSON === "function") {
            value = value.toJSON(key)
        }
        if (typeof rep === "function") {
            value = rep.call(holder, key, value)
        }
        switch (typeof value) {
        case "string":
            return quote(value);
        case "number":
            return isFinite(value) ? String(value) : "null";
        case "boolean":
        case "null":
            return String(value);
        case "object":
            if (!value) {
                return "null"
            }
            gap += indent;
            partial = [];
            if (Object.prototype.toString.apply(value) === "[object Array]") {
                length = value.length;
                for (i = 0; i < length; i += 1) {
                    partial[i] = str(i, value) || "null"
                }
                v = partial.length === 0 ? "[]": gap ? "[\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "]": "[" + partial.join(",") + "]";
                gap = mind;
                return v
            }
            if (rep && typeof rep === "object") {
                length = rep.length;
                for (i = 0; i < length; i += 1) {
                    if (typeof rep[i] === "string") {
                        k = rep[i];
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": ": ":") + v)
                        }
                    }
                }
            } else {
                for (k in value) {
                    if (Object.prototype.hasOwnProperty.call(value, k)) {
                        v = str(k, value);
                        if (v) {
                            partial.push(quote(k) + (gap ? ": ": ":") + v)
                        }
                    }
                }
            }
            v = partial.length === 0 ? "{}": gap ? "{\n" + gap + partial.join(",\n" + gap) + "\n" + mind + "}": "{" + partial.join(",") + "}";
            gap = mind;
            return v
        }
    }
    if (typeof JSON.stringify !== "function") {
        escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        meta = {
            "\b": "\\b",
            "\t": "\\t",
            "\n": "\\n",
            "\f": "\\f",
            "\r": "\\r",
            '"': '\\"',
            "\\": "\\\\"
        };
        JSON.stringify = function(value, replacer, space) {
            var i;
            gap = "";
            indent = "";
            if (typeof space === "number") {
                for (i = 0; i < space; i += 1) {
                    indent += " "
                }
            } else {
                if (typeof space === "string") {
                    indent = space
                }
            }
            rep = replacer;
            if (replacer && typeof replacer !== "function" && (typeof replacer !== "object" || typeof replacer.length !== "number")) {
                throw new Error("JSON.stringify")
            }
            return str("", {
                "": value
            })
        }
    }
    if (typeof JSON.parse !== "function") {
        cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        JSON.parse = function(text, reviver) {
            var j;
            function walk(holder, key) {
                var k, v, value = holder[key];
                if (value && typeof value === "object") {
                    for (k in value) {
                        if (Object.prototype.hasOwnProperty.call(value, k)) {
                            v = walk(value, k);
                            if (v !== undefined) {
                                value[k] = v
                            } else {
                                delete value[k]
                            }
                        }
                    }
                }
                return reviver.call(holder, key, value)
            }
            text = String(text);
            cx.lastIndex = 0;
            if (cx.test(text)) {
                text = text.replace(cx,
                function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice( - 4)
                })
            }
            if (/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
                j = eval("(" + text + ")");
                return typeof reviver === "function" ? walk({
                    "": j
                },
                "") : j
            }
            throw new SyntaxError("JSON.parse")
        }
    }
} ());
if (!window.M) {
    window.M = {}
}
if (!window.Env) {
    window.Env = {}
}
if (!window.mLogImg) {
    window.mLogImg = []
}
function mxPageGuid() {}
mxPageGuid.generate = function() {
    var a = mxPageGuid._getRandomInt,
    c = mxPageGuid._hexAligner;
    return c(a(32), 8) + "-" + c(a(16), 4) + "-" + c(16384 | a(12), 4) + "-" + c(32768 | a(14), 4) + "-" + c(a(48), 12)
};
mxPageGuid._getRandomInt = function(a) {
    return 0 > a ? NaN: 30 >= a ? 0 | Math.random() * (1 << a) : 53 >= a ? (0 | 1073741824 * Math.random()) + 1073741824 * (0 | Math.random() * (1 << a - 30)) : NaN
};
mxPageGuid._getIntAligner = function(a) {
    return function(c, b) {
        for (var d = c.toString(a), e = b - d.length, f = "0"; 0 < e; e >>>= 1, f += f) {
            e & 1 && (d = f + d)
        }
        return d
    }
};
mxPageGuid._hexAligner = mxPageGuid._getIntAligner(16);
window.Env.uPageId = mxPageGuid.generate();
var xstringify = (function() {
    function b(d) { / ["\\\x00-\x1f]/.test(d)&&(d=d.replace(/["\\\x00 - \x1f] / g,
        function(f) {
            var e = c[f];
            if (e) {
                return e
            }
            e = f.charCodeAt();
            return "\\u00" + Math.floor(e / 16).toString(16) + (e % 16).toString(16)
        }));
        return d
    }
    var c = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    };
    return function(k) {
        switch (typeof k) {
        case "undefined":
            return "{}";
        case "number":
            return isFinite(k) ? String(k) : "null";
        case "string":
            return b(k);
        case "boolean":
            return String(k);
        default:
            if (k instanceof Array) {
                var j = ["["],
                a = k.length,
                m,
                i,
                h;
                for (i = 0; i < a; i++) {
                    switch (h = k[i], typeof h) {
                    case "undefined":
                    case "function":
                    case "unknown":
                        break;
                    default:
                        m && j.push(","),
                        j.push(xstringify(h)),
                        m = 1
                    }
                }
                j.push("]");
                return j.join("")
            }
            m = ["{"];
            i = xstringify;
            for (a in k) {
                if (Object.prototype.hasOwnProperty.call(k, a)) {
                    switch (h = k[a], typeof h) {
                    case "undefined":
                    case "unknown":
                    case "function":
                        break;
                    default:
                        j && m.push(","),
                        j = 1,
                        m.push('"' + i(a) + '":"' + i(h) + '"')
                    }
                }
            }
            m.push("}");
            return m.join("")
        }
    }
})();
var mfwSendLog = {};mfwSendLog._compelete = 0;mfwSendLog._receive = 0;mfwSendLog.sendByImg = function(g, b, j) {
    var h = new Image(1, 1),
    i = "mfw_" + Math.floor(2147483648 * Math.random()).toString(36);
    window.mLogImg[i] = h;
    h.onload = h.onerror = function() {
        h.onload = h.onerror = null;
        h = window.mLogImg[i] = null;
        if (typeof j == "function") {
            j()
        }
    };
    var f = String(new Date().getTime()) + String(Math.random());
    var a = g + "?" + b + "&len=" + b.length + "&_nocache=" + f + "&_method=img";
    h.src = a
};mfwSendLog.sendByBeacon = function(e, b, f) {
    var d = String(new Date().getTime()) + String(Math.random());
    var a = e + "?" + b + "&len=" + b.length + "&_nocache=" + d + "&_method=beacon";
    return window.navigator.sendBeacon ? window.navigator.sendBeacon(a) ? (f(), !0) : !1 : !1
};mfwSendLog.sendByPost = function(g, b, j) {
    var i = window.XMLHttpRequest;
    if (!i) {
        return ! 1
    }
    var h = new i;
    if (! ("withCredentials" in h)) {
        return ! 1
    }
    var f = String(new Date().getTime()) + String(Math.random());
    var a = g + "?" + b + "&len=" + b.length + "&_nocache=" + f + "&_method=post";
    h.open("POST", a, !0);
    h.withCredentials = !0;
    h.setRequestHeader("Content-Type", "text/plain");
    h.onreadystatechange = function() {
        4 == h.readyState && (j(), h = null)
    };
    h.send(null);
    return ! 0
};mfwSendLog.init = function(b, a, d) {
    d = d ||
    function() {};
    this.sendByBeacon(b, a, d) || this.sendByImg(b, a, d) || this.sendByPost(b, a, d)
};
var mfwPageEvent = (function() {
    return function(m, j, d, k) {
        var i = encodeURIComponent;
        var l = document.URL;
        var a = document.referrer;
        var n = parseInt(( + new Date()) / 1000, 10);
        m = i(m);
        j = i(j);
        l = i(l);
        a = i(a);
        d = i(xstringify(d));
        var h = Math.floor(2443463648 * Math.random());
        var g = window.Env.uPageId;
        if (m && j) {
            var e = "ac=" + m + "&ec=" + j + "&u=" + l + "&r=" + a + "&ar=" + d + "&t=" + n + "&pid=" + g + "&rn=" + h;
            var b = ("https:" == document.location.protocol ? "https://": "http://") + "tongji.mafengwo.cn/track_event.gif";
            mfwSendLog.init(b, e, k)
        }
    }
})(); (function() {
    var a = {
        _getFlash: function() {
            var d, e;
            if (window.ActiveXObject) {
                for (d = 12; d > 0; d--) {
                    try {
                        e = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + d);
                        return d + ".0"
                    } catch(f) {}
                }
            } else {
                if (navigator.plugins && navigator.plugins.length) {
                    for (d = 0; d < navigator.plugins.length; d++) {
                        if (navigator.plugins[d].name.indexOf("Shockwave Flash") != -1) {
                            return navigator.plugins[d].description.split(" ")[2]
                        }
                    }
                }
            }
            return "Not enabled"
        },
        _getCururl: function() {
            var b = document.URL;
            return encodeURIComponent(b)
        },
        _getDomain: function() {
            var b = "",
            d = window.location.hostname,
            c = d.replace(/\.(com|net|org|cn$)\.?.*/, "");
            if (c.lastIndexOf(".") == -1) {
                b = "." + d
            } else {
                c = c.substring(c.lastIndexOf("."));
                b = d.substring(d.lastIndexOf(c))
            }
            return b
        },
        _getRandomInt: function(c) {
            return 0 > c ? NaN: 30 >= c ? 0 | Math.random() * (1 << c) : 53 >= c ? (0 | 1073741824 * Math.random()) + 1073741824 * (0 | Math.random() * (1 << c - 30)) : NaN
        },
        _getWindowSize: function() {
            var c = -1,
            e = -1;
            "number" == typeof window.innerWidth ? (c = window.innerWidth, e = window.innerHeight) : document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight) ? (c = document.documentElement.clientWidth, e = document.documentElement.clientHeight) : document.body && (document.body.clientWidth || document.body.clientHeight) && (c = document.body.clientWidth, e = document.body.clientHeight);
            return c + "x" + e
        },
        _getScreenSize: function() {
            return screen ? screen.width + "x" + screen.height: "-1x-1"
        },
        _getSystemLang: function() {
            return navigator.userLanguage ? navigator.userLanguage: navigator.language ? navigator.language: navigator.browserLanguage ? navigator.browserLanguage: "unknown"
        },
        _getChartset: function() {
            var b;
            b = document.characterSet || document.charset || "unknown";
            return b
        },
        _includes: function(c, b) {
            return c.indexOf(b) !== -1
        },
        _setCookie: function(j, h, g) {
            var i = "";
            var e = this._getDomain();
            if (g) {
                i = new Date((new Date()).getTime() + g * 3600000);
                i = "; expires=" + i.toGMTString()
            }
            document.cookie = j + "=" + encodeURIComponent(h) + i + ";domain=" + e + ";path=/; "
        },
        _getCookie: function(f) {
            var h = "";
            var d = f + "=";
            if (document.cookie.length > 0) {
                var g = document.cookie.indexOf(d);
                if (g != -1) {
                    g += d.length;
                    var e = document.cookie.indexOf(";", g);
                    if (e == -1) {
                        e = document.cookie.length
                    }
                    h = decodeURIComponent(document.cookie.substring(g, e))
                }
            }
            return h
        },
        _getVisitn: function() {
            var b = this._getCookie("__mfwvn");
            if (isNaN(b)) {
                b = 0
            }
            return b
        },
        _getTimeOnPage: function() {
            var b = this._getCookie("__mfwlt");
            var c = parseInt(( + new Date()) / 1000, 10);
            if (isNaN(b)) {
                b = 0
            }
            var d = parseInt(c - b);
            this._setCookie("__mfwlt", c, 24 * 365);
            return d
        },
        _getVisitlv: function() {
            var c = this._getCookie("__mfwlv");
            var b = this._getVisitn();
            if (isNaN(c)) {
                c = 0
            }
            if (( + new Date() / 1000) - c > 7200) {
                c = parseInt( + new Date() / 1000, 10);
                b++;
                this._setCookie("__mfwlv", c, 24 * 365);
                this._setCookie("__mfwvn", b, 24 * 365)
            }
            return c
        },
        _getDevice: function(b) {
            if (/Windows Phone/i.test(b) || /WPDesktop/.test(b)) {
                return "Windows Phone"
            } else {
                if (/iPad/.test(b)) {
                    return "iPad"
                } else {
                    if (/iPod/.test(b)) {
                        return "iPod Touch"
                    } else {
                        if (/iPhone/.test(b)) {
                            return "iPhone"
                        } else {
                            if (/(BlackBerry|PlayBook|BB10)/i.test(b)) {
                                return "BlackBerry"
                            } else {
                                if (/Android/.test(b)) {
                                    return "Android"
                                } else {
                                    return "unknown"
                                }
                            }
                        }
                    }
                }
            }
        },
        _getOs: function(b) {
            if (/Windows/i.test(b)) {
                if (/Phone/.test(b) || /WPDesktop/.test(b)) {
                    return "Windows Phone"
                }
                return "Windows"
            } else {
                if (/(iPhone|iPad|iPod)/.test(b)) {
                    return "iOS"
                } else {
                    if (/Android/.test(b)) {
                        return "Android"
                    } else {
                        if (/(BlackBerry|PlayBook|BB10)/i.test(b)) {
                            return "BlackBerry"
                        } else {
                            if (/Mac/i.test(b)) {
                                return "Mac OS X"
                            } else {
                                if (/Linux/.test(b)) {
                                    return "Linux"
                                } else {
                                    return "unknown"
                                }
                            }
                        }
                    }
                }
            }
        },
        _getBrowser: function(c, d, b) {
            d = d || "";
            if (b || this._includes(c, " OPR/")) {
                if (this._includes(c, "Mini")) {
                    return "Opera Mini"
                }
                return "Opera"
            } else {
                if (/(BlackBerry|PlayBook|BB10)/i.test(c)) {
                    return "BlackBerry"
                } else {
                    if (this._includes(c, "IEMobile") || this._includes(c, "WPDesktop")) {
                        return "Internet Explorer Mobile"
                    } else {
                        if (this._includes(c, "Edge")) {
                            return "Microsoft Edge"
                        } else {
                            if (this._includes(c, "FBIOS")) {
                                return "Facebook Mobile"
                            } else {
                                if (this._includes(c, "Chrome")) {
                                    return "Chrome"
                                } else {
                                    if (this._includes(c, "CriOS")) {
                                        return "Chrome iOS"
                                    } else {
                                        if (this._includes(c, "FxiOS")) {
                                            return "Firefox iOS"
                                        } else {
                                            if (this._includes(d, "Apple")) {
                                                if (this._includes(c, "Mobile")) {
                                                    return "Mobile Safari"
                                                }
                                                return "Safari"
                                            } else {
                                                if (this._includes(c, "Android")) {
                                                    return "Android Mobile"
                                                } else {
                                                    if (this._includes(c, "Konqueror")) {
                                                        return "Konqueror"
                                                    } else {
                                                        if (this._includes(c, "Firefox")) {
                                                            return "Firefox"
                                                        } else {
                                                            if (this._includes(c, "MSIE") || this._includes(c, "Trident/")) {
                                                                return "Internet Explorer"
                                                            } else {
                                                                if (this._includes(c, "Gecko")) {
                                                                    return "Mozilla"
                                                                } else {
                                                                    return "unknown"
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        _browserVersion: function(g, h, b) {
            var d = this._getBrowser(g, h, b);
            var c = {
                "Internet Explorer Mobile": /rv:(\d+(\.\d+)?)/,
                "Microsoft Edge": /Edge\/(\d+(\.\d+)?)/,
                Chrome: /Chrome\/(\d+(\.\d+)?)/,
                "Chrome iOS": /CriOS\/(\d+(\.\d+)?)/,
                Safari: /Version\/(\d+(\.\d+)?)/,
                "Mobile Safari": /Version\/(\d+(\.\d+)?)/,
                Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                Firefox: /Firefox\/(\d+(\.\d+)?)/,
                "Firefox iOS": /FxiOS\/(\d+(\.\d+)?)/,
                Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                "Android Mobile": /android\s(\d+(\.\d+)?)/,
                "Internet Explorer": /(rv:|MSIE )(\d+(\.\d+)?)/,
                Mozilla: /rv:(\d+(\.\d+)?)/
            };
            var e = c[d];
            if (e === undefined) {
                return "unknown"
            }
            var f = g.match(e);
            if (!f) {
                return "unknown"
            }
            return parseFloat(f[f.length - 2])
        },
        _getPageId: function() {
            return window.Env.uPageId
        },
        _hasStandardBrowserEnviroment: function() {
            if (!window) {
                return "window"
            }
            if (!document) {
                return "document"
            }
            if (!navigator) {
                return "navigator"
            }
            if (!screen) {
                return "screen"
            }
        },
        _run: function() {
            if (this._hasStandardBrowserEnviroment()) {
                return false
            }
            var c = this._getParams();
            var b = ("https:" == document.location.protocol ? "https://": "http://") + "tongji.mafengwo.cn/stat_click.gif";
            mfwSendLog.sendByImg(b, c)
        },
        _getCliInfo: function() {
            var f = window.navigator;
            var e = f.userAgent;
            var g = this._getBrowser(e, f.vendor, window.opera);
            var d = this._browserVersion(e, f.vendor, window.opera);
            var b = this._getDevice(e);
            var c = this._getOs(e);
            return {
                brn: g,
                brv: d,
                dev: b,
                os: c
            }
        },
        _getParams: function() {
            var q = document,
            m = window.location,
            h = parseInt(( + new Date()) / 1000, 10);
            var x = "1.2";
            var o = encodeURIComponent(m.host) || "-";
            var g = encodeURIComponent(q.referrer) || "direct";
            var s = encodeURIComponent(q.title);
            var p = this._getWindowSize();
            var n = this._getScreenSize();
            var k = this._getSystemLang();
            var j = this._getRandomInt(32);
            var y = this._getCururl() || "-";
            var c = this._getFlash();
            var v = this._getVisitlv();
            var i = this._getVisitn() || "1";
            var u = this._getChartset();
            var f = this._getTimeOnPage() || "0";
            var b = this._getCliInfo();
            var e = window.Env.uPageId;
            var w = window.Env.salesId || "0";
            var r = "t=" + h + "&hn=" + o + "&u=" + y + "&r=" + g + "&lv=" + v + "&vn=" + i + "&ws=" + p + "&sc=" + n + "&sl=" + k + "&fl=" + c + "&cs=" + u + "&dt=" + s + "&sts=" + f + "&pid=" + e + "&brn=" + b.brn + "&brv=" + b.brv + "&dev=" + b.dev + "&os=" + b.os + "&sid=" + w + "&ver=" + x + "&rdm=" + j;
            return r
        }
    };
    if (!window.Env.statistics_loaded) {
        a._run();
        window.Env.statistics_loaded = true
    }
})();
var mfwCheckLogData = (function() {
    return function() {
        var e = encodeURIComponent;
        var c = parseInt(( + new Date()) / 1000, 10);
        var b = document.URL;
        var d = document.referrer;
        var a = {
            t: c,
            u: e(b),
            r: e(d),
            pid: window.Env.uPageId
        };
        return xstringify(a)
    }
})(); (function() {
    var c = {
        events: [],
        opening: parseInt(( + new Date()) / 1000, 10),
        scrolls: 0,
        clicks: 0,
        blurTime: 0,
        closing: 0,
        submitted: false
    };
    var b = {
        track: {
            focus: true,
            blur: true,
            click: true,
            scroll: true
        }
    };
    function d(f) {
        f = f || window.event;
        var e = {};
        e.type = f.type;
        e.timeStamp = parseInt( + new Date());
        c.events.push(e)
    }
    var a = {
        init: function(e) {
            for (var f in b.track) {
                if (b.track[f]) {
                    a.addEvent(window, f, d)
                }
            }
            a.addEvent(window, "beforeunload", a.save);
            a.addEvent(document, "pagehide", a.save);
            a.addEvent(window, "unload", a.save);
            a.addEvent(document, "click", a.saveClickArea);
            a.addEvent(window, "load", a.savePageLoadTime)
        },
        save: function() {
            if (c.submitted) {
                return
            }
            c.submitted = true;
            c.closing = parseInt(( + new Date()) / 1000, 10);
            c.events = a.compress(c.events);
            var g = xstringify,
            i = encodeURIComponent,
            h = (new Date()).getTimezoneOffset() / 60,
            k = c.closing - c.opening,
            j = k - c.blurTime,
            e = e || {};
            e = {
                scrolls: c.scrolls,
                clicks: c.clicks,
                opening: c.opening,
                closing: c.closing,
                time_on_page: k,
                time_focus: j,
                tz: h,
                referrer: i(document.referrer) || "direct"
            }; !! mfwPageEvent && mfwPageEvent("page_behavior", "page_behaviors", e)
        },
        compress: function() {
            var g = [],
            h = 0,
            e = 0,
            k = 0;
            for (var f = 0; f < c.events.length; f++) {
                var j = c.events[f];
                if (!j.timeStamp) {
                    return
                }
                if (j.type === "click") {
                    if (j.timeStamp - e > 1000) {
                        g.push(j);
                        c.clicks++
                    }
                    e = j.timeStamp
                } else {
                    if (j.type === "scroll") {
                        if (j.timeStamp - h > 1000) {
                            g.push(j);
                            c.scrolls++
                        }
                        h = j.timeStamp
                    } else {
                        if (j.type === "blur") {
                            if (k === 0) {
                                k = j.timeStamp
                            }
                            g.push(j)
                        } else {
                            if (j.type === "focus") {
                                if (k !== 0) {
                                    c.blurTime += parseInt((j.timeStamp - k) / 1000);
                                    k = 0
                                }
                                g.push(j)
                            }
                        }
                    }
                }
            }
            if (k !== 0) {
                c.blurTime += (c.closing - parseInt(k / 1000))
            }
            return g
        },
        addEvent: function(g, e, f) {
            if (document.attachEvent) {
                if (g) {
                    g.attachEvent("on" + e, f)
                } else {
                    window.attachEvent("on" + e, f)
                }
            } else {
                if (document.addEventListener) {
                    if (g) {
                        g.addEventListener(e, f, false)
                    } else {
                        window.addEventListener(e, f, false)
                    }
                }
            }
        },
        getClickStat: function(h) {
            if (!window.jQuery) {
                return {
                    cst: "",
                    csp: "",
                    csl: "",
                    csd: ""
                }
            }
            var f = $(h);
            var g = f.closest("[data-cs-t]").data("cs-t") || "";
            var i = f.closest("[data-cs-p]").data("cs-p") || "";
            var e = f.closest("[data-cs-l]").data("cs-l") || "";
            var j = f.closest("[data-cs-d]").data("cs-d") || "";
            return {
                cst: g,
                csp: i,
                csl: e,
                csd: j
            }
        },
        sortEvents: function(f, e) {
            if (!f.timeStamp) {
                return - 1
            }
            if (!e.timeStamp) {
                return 1
            }
            if (f.timeStamp < e.timeStamp) {
                return - 1
            }
            if (f.timeStamp >= e.timeStamp) {
                return 1
            }
        },
        getXpath: function(l) {
            var i = [];
            for (; l && l.nodeType == 1; l = l.parentNode) {
                var g = 0;
                for (var k = l.previousSibling; k; k = k.previousSibling) {
                    if (k.tagName == l.tagName) {++g
                    }
                }
                var h = l.tagName.toLowerCase();
                var j = (g ? "[" + (g + 1) + "]": "");
                i.splice(0, 0, h + j)
            }
            return i.length ? "/" + i.join("/") + "/": null
        },
        savePageLoadTime: function() {
            var e = 0;
            var i = window.performance || window.webkitPerformance;
            var h = {};
            if (i) {
                var g = i.timing;
                var f = new Date().getTime();
                h.loadPage = (f - g.navigationStart) / 1000;
                h.domReady = (g.domComplete - g.responseEnd) / 1000;
                h.connect = (g.connectEnd - g.connectStart) / 1000;
                h.request = (g.responseEnd - g.requestStart) / 1000;
                h.redirect = (g.redirectEnd - g.redirectStart) / 1000
            } !! mfwPageEvent && mfwPageEvent("default", "performance", h)
        },
        saveClickArea: function(m) {
            var r, u, s, l, w;
            if (!m) {
                m = window.event
            }
            r = m.srcElement || m.target || null;
            try {
                s = r.tagName.toLowerCase()
            } catch(m) {
                return
            }
            if (s && r.parentNode && r.parentNode.tagName) {
                l = r.parentNode.tagName.toLowerCase()
            }
            if (l && r.parentNode.parentNode && r.parentNode.parentNode.tagName) {
                var k = r.parentNode.parentNode.tagName;
                w = k ? k.toLowerCase() : ""
            }
            var q = 0;
            if ("a" == s || "input" == s || "button" == s || "object" == s || "embed" == s || "img" == s) {
                q = 1
            } else {
                if ("a" == l || "button" == l) {
                    q = 1;
                    r = r.parentNode
                } else {
                    if ("a" == w || "button" == w) {
                        q = 1;
                        r = r.parentNode.parentNode
                    }
                }
            }
            var j = j || {};
            if (q) {
                var p = "",
                v = "",
                e = encodeURIComponent;
                p = r.getAttribute("data-href") || r.href || "";
                if ("" == p) {
                    p = r.data
                }
                if ("" == v) {
                    v = r.getAttribute("title") || ""
                }
                var o = e(a.getXpath(r));
                var n = a.getClickStat(r);
                if (!n.csl || n.csl.length === 0) {
                    n.csl = p
                }
                if (!n.csd || n.csd.length === 0) {
                    n.csd = v
                }
                j = {
                    xpath: o,
                    lc: p,
                    text: n.csd ? "": v,
                    tagname: s || l,
                    referer: e(document.referrer) || "direct"
                };
                var i;
                if (window.jQuery) {
                    i = $.extend({},
                    j, n)
                } else {
                    i = j
                } !! mfwPageEvent && mfwPageEvent("default", "click_area", i)
            }
        }
    };
    a.init()
})();