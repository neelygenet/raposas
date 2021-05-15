"object" == typeof navigator && function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, function () {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function n(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function i(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function a(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function r(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? o(Object(n), !0).forEach(function (t) {
                a(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }

    function s(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                var n = [],
                    i = !0,
                    a = !1,
                    o = void 0;
                try {
                    for (var r, s = e[Symbol.iterator](); !(i = (r = s.next()).done) && (n.push(r.value), !t || n.length !== t); i = !0);
                } catch (e) {
                    a = !0, o = e
                } finally {
                    try {
                        i || null == s.return || s.return()
                    } finally {
                        if (a) throw o
                    }
                }
                return n
            }
        }(e, t) || c(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e) {
        return function (e) {
            if (Array.isArray(e)) return u(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || c(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function c(e, t) {
        if (e) {
            if ("string" == typeof e) return u(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(e, t) : void 0
        }
    }

    function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }

    function d(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function h(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function m(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            })), n.push.apply(n, i)
        }
        return n
    }

    function p(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? m(Object(n), !0).forEach(function (t) {
                h(e, t, n[t])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            })
        }
        return e
    }
    var f = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };
    var g = function (e) {
            return null != e ? e.constructor : null
        },
        y = function (e, t) {
            return !!(e && t && e instanceof t)
        },
        b = function (e) {
            return g(e) === String
        },
        v = function (e) {
            return Array.isArray(e)
        },
        w = function (e) {
            return y(e, NodeList)
        },
        k = b,
        T = v,
        C = w,
        A = function (e) {
            return y(e, Element)
        },
        S = function (e) {
            return y(e, Event)
        },
        P = function (e) {
            return function (e) {
                return null == e
            }(e) || (b(e) || v(e) || w(e)) && !e.length || function (e) {
                return g(e) === Object
            }(e) && !Object.keys(e).length
        };
    var E, N, M, x = function () {
            function e(t, n) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), A(t) ? this.element = t : k(t) && (this.element = document.querySelector(t)), A(this.element) && P(this.element.rangeTouch) && (this.config = p({}, f, {}, n), this.init())
            }
            return function (e, t, n) {
                t && d(e.prototype, t), n && d(e, n)
            }(e, [{
                key: "init",
                value: function () {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                }
            }, {
                key: "destroy",
                value: function () {
                    e.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                }
            }, {
                key: "listeners",
                value: function (e) {
                    var t = this,
                        n = e ? "addEventListener" : "removeEventListener";
                    ["touchstart", "touchmove", "touchend"].forEach(function (e) {
                        t.element[n](e, function (e) {
                            return t.set(e)
                        }, !1)
                    })
                }
            }, {
                key: "get",
                value: function (t) {
                    if (!e.enabled || !S(t)) return null;
                    var n, i = t.target,
                        a = t.changedTouches[0],
                        o = parseFloat(i.getAttribute("min")) || 0,
                        r = parseFloat(i.getAttribute("max")) || 100,
                        s = parseFloat(i.getAttribute("step")) || 1,
                        l = i.getBoundingClientRect(),
                        c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (n = 100 / l.width * (a.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), o + function (e, t) {
                        if (1 > t) {
                            var n = function (e) {
                                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
                            }(t);
                            return parseFloat(e.toFixed(n))
                        }
                        return Math.round(e / t) * t
                    }(n / 100 * (r - o), s)
                }
            }, {
                key: "set",
                value: function (t) {
                    e.enabled && S(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
                        if (e && t) {
                            var n = new Event(t, {
                                bubbles: !0
                            });
                            e.dispatchEvent(n)
                        }
                    }(t.target, "touchend" === t.type ? "change" : "input"))
                }
            }], [{
                key: "setup",
                value: function (t) {
                    var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null;
                    if (P(t) || k(t) ? i = Array.from(document.querySelectorAll(k(t) ? t : 'input[type="range"]')) : A(t) ? i = [t] : C(t) ? i = Array.from(t) : T(t) && (i = t.filter(A)), P(i)) return null;
                    var a = p({}, f, {}, n);
                    k(t) && a.watch && new MutationObserver(function (n) {
                        Array.from(n).forEach(function (n) {
                            Array.from(n.addedNodes).forEach(function (n) {
                                A(n) && function (e, t) {
                                    return function () {
                                        return Array.from(document.querySelectorAll(t)).includes(this)
                                    }.call(e, t)
                                }(n, t) && new e(n, a)
                            })
                        })
                    }).observe(document.body, {
                        childList: !0,
                        subtree: !0
                    });
                    return i.map(function (t) {
                        return new e(t, n)
                    })
                }
            }, {
                key: "enabled",
                get: function () {
                    return "ontouchstart" in document.documentElement
                }
            }]), e
        }(),
        I = function (e) {
            return null != e ? e.constructor : null
        },
        L = function (e, t) {
            return Boolean(e && t && e instanceof t)
        },
        O = function (e) {
            return null == e
        },
        _ = function (e) {
            return I(e) === Object
        },
        j = function (e) {
            return I(e) === String
        },
        D = function (e) {
            return I(e) === Function
        },
        q = function (e) {
            return Array.isArray(e)
        },
        H = function (e) {
            return L(e, NodeList)
        },
        F = function (e) {
            return O(e) || (j(e) || q(e) || H(e)) && !e.length || _(e) && !Object.keys(e).length
        },
        R = O,
        V = _,
        B = function (e) {
            return I(e) === Number && !Number.isNaN(e)
        },
        U = j,
        W = function (e) {
            return I(e) === Boolean
        },
        z = D,
        K = q,
        Y = H,
        Q = function (t) {
            return null !== t && "object" === e(t) && 1 === t.nodeType && "object" === e(t.style) && "object" === e(t.ownerDocument)
        },
        X = function (e) {
            return L(e, Event)
        },
        $ = function (e) {
            return L(e, KeyboardEvent)
        },
        J = function (e) {
            return L(e, TextTrack) || !O(e) && j(e.kind)
        },
        G = function (e) {
            return L(e, Promise) && D(e.then)
        },
        Z = function (e) {
            if (L(e, window.URL)) return !0;
            if (!j(e)) return !1;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
            try {
                return !F(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        ee = F,
        te = (E = document.createElement("span"), N = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, M = Object.keys(N).find(function (e) {
            return void 0 !== E.style[e]
        }), !!U(M) && N[M]);

    function ne(e, t) {
        setTimeout(function () {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {}
        }, t)
    }
    var ie = {
        isIE: !!document.documentMode,
        isEdge: window.navigator.userAgent.includes("Edge"),
        isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
        isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
        isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
    };

    function ae(e, t) {
        return t.split(".").reduce(function (e, t) {
            return e && e[t]
        }, e)
    }

    function oe() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        if (!n.length) return e;
        var o = n.shift();
        return V(o) ? (Object.keys(o).forEach(function (t) {
            V(o[t]) ? (Object.keys(e).includes(t) || Object.assign(e, a({}, t, {})), oe(e[t], o[t])) : Object.assign(e, a({}, t, o[t]))
        }), oe.apply(void 0, [e].concat(n))) : e
    }

    function re(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach(function (e, n) {
            var i = n > 0 ? t.cloneNode(!0) : t,
                a = e.parentNode,
                o = e.nextSibling;
            i.appendChild(e), o ? a.insertBefore(i, o) : a.appendChild(i)
        })
    }

    function se(e, t) {
        Q(e) && !ee(t) && Object.entries(t).filter(function (e) {
            var t = s(e, 2)[1];
            return !R(t)
        }).forEach(function (t) {
            var n = s(t, 2),
                i = n[0],
                a = n[1];
            return e.setAttribute(i, a)
        })
    }

    function le(e, t, n) {
        var i = document.createElement(e);
        return V(t) && se(i, t), U(n) && (i.innerText = n), i
    }

    function ce(e, t, n, i) {
        Q(t) && t.appendChild(le(e, n, i))
    }

    function ue(e) {
        Y(e) || K(e) ? Array.from(e).forEach(ue) : Q(e) && Q(e.parentNode) && e.parentNode.removeChild(e)
    }

    function de(e) {
        if (Q(e))
            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function he(e, t) {
        return Q(t) && Q(t.parentNode) && Q(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function me(e, t) {
        if (!U(e) || ee(e)) return {};
        var n = {},
            i = oe({}, t);
        return e.split(",").forEach(function (e) {
            var t = e.trim(),
                a = t.replace(".", ""),
                o = t.replace(/[[\]]/g, "").split("="),
                r = s(o, 1)[0],
                l = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    U(i.class) ? n.class = "".concat(i.class, " ").concat(a) : n.class = a;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[r] = l
            }
        }), oe(i, n)
    }

    function pe(e, t) {
        if (Q(e)) {
            var n = t;
            W(n) || (n = !e.hidden), e.hidden = n
        }
    }

    function fe(e, t, n) {
        if (Y(e)) return Array.from(e).map(function (e) {
            return fe(e, t, n)
        });
        if (Q(e)) {
            var i = "toggle";
            return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
        }
        return !1
    }

    function ge(e, t) {
        return Q(e) && e.classList.contains(t)
    }

    function ye(e, t) {
        var n = Element.prototype;
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function be(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function ve(e) {
        return this.elements.container.querySelector(e)
    }

    function we() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        Q(e) && (e.focus({
            preventScroll: !0
        }), t && fe(e, this.config.classNames.tabFocus))
    }
    var ke, Te = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        Ce = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function (e, t, n) {
                var i = ie.isIPhone && n && Ce.playsinline,
                    a = Ce[e] || "html5" !== t;
                return {
                    api: a,
                    ui: a && Ce.rangeInput && ("video" !== e || !ie.isIPhone || i)
                }
            },
            pip: !(ie.isIPhone || !z(le("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || le("video").disablePictureInPicture)),
            airplay: z(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function (e) {
                if (ee(e)) return !1;
                var t = s(e.split("/"), 1)[0],
                    n = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(Te).includes(n) && (n += '; codecs="'.concat(Te[e], '"'));
                try {
                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (ke = document.createElement("input"), ke.type = "range", "range" === ke.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== te,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        Ae = function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        return e = !0, null
                    }
                });
                window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
            } catch (e) {}
            return e
        }();

    function Se(e, t, n) {
        var i = this,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            r = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !ee(t) && z(n)) {
            var s = t.split(" "),
                l = r;
            Ae && (l = {
                passive: o,
                capture: r
            }), s.forEach(function (t) {
                i && i.eventListeners && a && i.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: l
                }), e[a ? "addEventListener" : "removeEventListener"](t, n, l)
            })
        }
    }

    function Pe(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Se.call(this, e, t, n, !0, i, a)
    }

    function Ee(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Se.call(this, e, t, n, !1, i, a)
    }

    function Ne(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 ? arguments[2] : void 0,
            a = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        Se.call(this, e, n, function r() {
            Ee(e, n, r, a, o);
            for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
            i.apply(t, l)
        }, !0, a, o)
    }

    function Me(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (Q(e) && !ee(t)) {
            var a = new CustomEvent(t, {
                bubbles: n,
                detail: r(r({}, i), {}, {
                    plyr: this
                })
            });
            e.dispatchEvent(a)
        }
    }

    function xe(e) {
        G(e) && e.then(null, function () {})
    }

    function Ie(e) {
        return !!(K(e) || U(e) && e.includes(":")) && (K(e) ? e : e.split(":")).map(Number).every(B)
    }

    function Le(e) {
        if (!K(e) || !e.every(B)) return null;
        var t = s(e, 2),
            n = t[0],
            i = t[1],
            a = function e(t, n) {
                return 0 === n ? t : e(n, t % n)
            }(n, i);
        return [n / a, i / a]
    }

    function Oe(e) {
        var t = function (e) {
                return Ie(e) ? e.split(":").map(Number) : null
            },
            n = t(e);
        if (null === n && (n = t(this.config.ratio)), null === n && !ee(this.embed) && K(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
            var i = this.media;
            n = Le([i.videoWidth, i.videoHeight])
        }
        return n
    }

    function _e(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            n = Oe.call(this, e),
            i = s(K(n) ? n : [0, 0], 2),
            a = 100 / i[0] * i[1];
        if (t.style.paddingBottom = "".concat(a, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                r = (o - a) / (o / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(r, "%)")
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
        return {
            padding: a,
            ratio: n
        }
    }
    var je = {
        getSources: function () {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(function (t) {
                var n = t.getAttribute("type");
                return !!ee(n) || Ce.mime.call(e, n)
            }) : []
        },
        getQualityOptions: function () {
            return this.config.quality.forced ? this.config.quality.options : je.getSources.call(this).map(function (e) {
                return Number(e.getAttribute("size"))
            }).filter(Boolean)
        },
        setup: function () {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options, ee(this.config.ratio) || _e.call(e), Object.defineProperty(e.media, "quality", {
                    get: function () {
                        var t = je.getSources.call(e).find(function (t) {
                            return t.getAttribute("src") === e.source
                        });
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function (t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && z(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                var n = je.getSources.call(e).find(function (e) {
                                    return Number(e.getAttribute("size")) === t
                                });
                                if (!n) return;
                                var i = e.media,
                                    a = i.currentTime,
                                    o = i.paused,
                                    r = i.preload,
                                    s = i.readyState,
                                    l = i.playbackRate;
                                e.media.src = n.getAttribute("src"), ("none" !== r || s) && (e.once("loadedmetadata", function () {
                                    e.speed = l, e.currentTime = a, o || xe(e.play())
                                }), e.media.load())
                            }
                            Me.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function () {
            this.isHTML5 && (ue(je.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function De(e) {
        return K(e) ? e.filter(function (t, n) {
            return e.indexOf(t) === n
        }) : e
    }

    function qe(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return ee(e) ? e : e.toString().replace(/{(\d+)}/g, function (e, t) {
            return n[t].toString()
        })
    }
    var He = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), n.toString())
        },
        Fe = function () {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function (e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            })
        };

    function Re(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var Ve = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        Be = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (ee(e) || ee(t)) return "";
            var n = ae(t.i18n, e);
            if (ee(n)) return Object.keys(Ve).includes(e) ? Ve[e] : "";
            var i = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(i).forEach(function (e) {
                var t = s(e, 2),
                    i = t[0],
                    a = t[1];
                n = He(n, i, a)
            }), n
        },
        Ue = function () {
            function e(n) {
                var i = this;
                t(this, e), a(this, "get", function (t) {
                    if (!e.supported || !i.enabled) return null;
                    var n = window.localStorage.getItem(i.key);
                    if (ee(n)) return null;
                    var a = JSON.parse(n);
                    return U(t) && t.length ? a[t] : a
                }), a(this, "set", function (t) {
                    if (e.supported && i.enabled && V(t)) {
                        var n = i.get();
                        ee(n) && (n = {}), oe(n, t), window.localStorage.setItem(i.key, JSON.stringify(n))
                    }
                }), this.enabled = n.config.storage.enabled, this.key = n.config.storage.key
            }
            return i(e, null, [{
                key: "supported",
                get: function () {
                    try {
                        if (!("localStorage" in window)) return !1;
                        var e = "___test";
                        return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                    } catch (e) {
                        return !1
                    }
                }
            }]), e
        }();

    function We(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function (n, i) {
            try {
                var a = new XMLHttpRequest;
                if (!("withCredentials" in a)) return;
                a.addEventListener("load", function () {
                    if ("text" === t) try {
                        n(JSON.parse(a.responseText))
                    } catch (e) {
                        n(a.responseText)
                    } else n(a.response)
                }), a.addEventListener("error", function () {
                    throw new Error(a.status)
                }), a.open("GET", e, !0), a.responseType = t, a.send()
            } catch (e) {
                i(e)
            }
        })
    }

    function ze(e, t) {
        if (U(e)) {
            var n = "cache",
                i = U(t),
                a = function () {
                    return null !== document.getElementById(t)
                },
                o = function (e, t) {
                    e.innerHTML = t, i && a() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!i || !a()) {
                var r = Ue.supported,
                    s = document.createElement("div");
                if (s.setAttribute("hidden", ""), i && s.setAttribute("id", t), r) {
                    var l = window.localStorage.getItem("".concat(n, "-").concat(t));
                    if (null !== l) {
                        var c = JSON.parse(l);
                        o(s, c.content)
                    }
                }
                We(e).then(function (e) {
                    ee(e) || (r && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
                        content: e
                    })), o(s, e))
                }).catch(function () {})
            }
        }
    }
    var Ke = function (e) {
            return Math.trunc(e / 60 / 60 % 60, 10)
        },
        Ye = function (e) {
            return Math.trunc(e / 60 % 60, 10)
        },
        Qe = function (e) {
            return Math.trunc(e % 60, 10)
        };

    function Xe() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!B(e)) return Xe(void 0, t, n);
        var i = function (e) {
                return "0".concat(e).slice(-2)
            },
            a = Ke(e),
            o = Ye(e),
            r = Qe(e);
        return a = t || a > 0 ? "".concat(a, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(a).concat(i(o), ":").concat(i(r))
    }
    var $e = {
        getIconUrl: function () {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || ie.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function () {
            try {
                return this.elements.controls = ve.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: be.call(this, this.config.selectors.buttons.play),
                    pause: ve.call(this, this.config.selectors.buttons.pause),
                    restart: ve.call(this, this.config.selectors.buttons.restart),
                    rewind: ve.call(this, this.config.selectors.buttons.rewind),
                    fastForward: ve.call(this, this.config.selectors.buttons.fastForward),
                    mute: ve.call(this, this.config.selectors.buttons.mute),
                    pip: ve.call(this, this.config.selectors.buttons.pip),
                    airplay: ve.call(this, this.config.selectors.buttons.airplay),
                    settings: ve.call(this, this.config.selectors.buttons.settings),
                    captions: ve.call(this, this.config.selectors.buttons.captions),
                    fullscreen: ve.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = ve.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: ve.call(this, this.config.selectors.inputs.seek),
                    volume: ve.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: ve.call(this, this.config.selectors.display.buffer),
                    currentTime: ve.call(this, this.config.selectors.display.currentTime),
                    duration: ve.call(this, this.config.selectors.display.duration)
                }, Q(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function (e, t) {
            var n = "http://www.w3.org/2000/svg",
                i = $e.getIconUrl.call(this),
                a = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                o = document.createElementNS(n, "svg");
            se(o, oe(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            var r = document.createElementNS(n, "use"),
                s = "".concat(a, "-").concat(e);
            return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(r), o
        },
        createLabel: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = Be(e, this.config);
            return le("span", r(r({}, t), {}, {
                class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
            }), n)
        },
        createBadge: function (e) {
            if (ee(e)) return null;
            var t = le("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(le("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function (e, t) {
            var n = this,
                i = oe({}, t),
                a = function () {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                    return (e = function () {
                        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                        return e = He(e, "-", " "), e = He(e, "_", " "), e = Fe(e), He(e, " ", "")
                    }(e)).charAt(0).toLowerCase() + e.slice(1)
                }(e),
                o = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach(function (e) {
                Object.keys(i).includes(e) && (o[e] = i[e], delete i[e])
            }), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(function (e) {
                return e === n.config.classNames.control
            }) || oe(i, {
                class: "".concat(i.class, " ").concat(this.config.classNames.control)
            }) : i.class = this.config.classNames.control, e) {
                case "play":
                    o.toggle = !0, o.label = "play", o.labelPressed = "pause", o.icon = "play", o.iconPressed = "pause";
                    break;
                case "mute":
                    o.toggle = !0, o.label = "mute", o.labelPressed = "unmute", o.icon = "volume", o.iconPressed = "muted";
                    break;
                case "captions":
                    o.toggle = !0, o.label = "enableCaptions", o.labelPressed = "disableCaptions", o.icon = "captions-off", o.iconPressed = "captions-on";
                    break;
                case "fullscreen":
                    o.toggle = !0, o.label = "enterFullscreen", o.labelPressed = "exitFullscreen", o.icon = "enter-fullscreen", o.iconPressed = "exit-fullscreen";
                    break;
                case "play-large":
                    i.class += " ".concat(this.config.classNames.control, "--overlaid"), a = "play", o.label = "play", o.icon = "play";
                    break;
                default:
                    ee(o.label) && (o.label = a), ee(o.icon) && (o.icon = e)
            }
            var r = le(o.element);
            return o.toggle ? (r.appendChild($e.createIcon.call(this, o.iconPressed, {
                class: "icon--pressed"
            })), r.appendChild($e.createIcon.call(this, o.icon, {
                class: "icon--not-pressed"
            })), r.appendChild($e.createLabel.call(this, o.labelPressed, {
                class: "label--pressed"
            })), r.appendChild($e.createLabel.call(this, o.label, {
                class: "label--not-pressed"
            }))) : (r.appendChild($e.createIcon.call(this, o.icon)), r.appendChild($e.createLabel.call(this, o.label))), oe(i, me(this.config.selectors.buttons[a], i)), se(r, i), "play" === a ? (K(this.elements.buttons[a]) || (this.elements.buttons[a] = []), this.elements.buttons[a].push(r)) : this.elements.buttons[a] = r, r
        },
        createRange: function (e, t) {
            var n = le("input", oe(me(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": Be(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, $e.updateRangeFill.call(this, n), x.setup(n), n
        },
        createProgress: function (e, t) {
            var n = le("progress", oe(me(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(le("span", null, "0"));
                var i = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    a = i ? Be(i, this.config) : "";
                n.innerText = "% ".concat(a.toLowerCase())
            }
            return this.elements.display[e] = n, n
        },
        createTime: function (e, t) {
            var n = me(this.config.selectors.display[e], t),
                i = le("div", oe(n, {
                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                    "aria-label": Be(e, this.config)
                }), "00:00");
            return this.elements.display[e] = i, i
        },
        bindMenuItemShortcuts: function (e, t) {
            var n = this;
            Pe.call(this, e, "keydown keyup", function (i) {
                if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                    var a, o = ye(e, '[role="menuitemradio"]');
                    !o && [32, 39].includes(i.which) ? $e.showMenuPanel.call(n, t, !0) : 32 !== i.which && (40 === i.which || o && 39 === i.which ? (a = e.nextElementSibling, Q(a) || (a = e.parentNode.firstElementChild)) : (a = e.previousElementSibling, Q(a) || (a = e.parentNode.lastElementChild)), we.call(n, a, !0))
                }
            }, !1), Pe.call(this, e, "keyup", function (e) {
                13 === e.which && $e.focusFirstMenuItem.call(n, null, !0)
            })
        },
        createMenuItem: function (e) {
            var t = this,
                n = e.value,
                i = e.list,
                a = e.type,
                o = e.title,
                r = e.badge,
                s = void 0 === r ? null : r,
                l = e.checked,
                c = void 0 !== l && l,
                u = me(this.config.selectors.inputs[a]),
                d = le("button", oe(u, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                    "aria-checked": c,
                    value: n
                })),
                h = le("span");
            h.innerHTML = o, Q(s) && h.appendChild(s), d.appendChild(h), Object.defineProperty(d, "checked", {
                enumerable: !0,
                get: function () {
                    return "true" === d.getAttribute("aria-checked")
                },
                set: function (e) {
                    e && Array.from(d.parentNode.children).filter(function (e) {
                        return ye(e, '[role="menuitemradio"]')
                    }).forEach(function (e) {
                        return e.setAttribute("aria-checked", "false")
                    }), d.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(d, "click keyup", function (e) {
                if (!$(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), d.checked = !0, a) {
                        case "language":
                            t.currentTrack = Number(n);
                            break;
                        case "quality":
                            t.quality = n;
                            break;
                        case "speed":
                            t.speed = parseFloat(n)
                    }
                    $e.showMenuPanel.call(t, "home", $(e))
                }
            }, a, !1), $e.bindMenuItemShortcuts.call(this, d, a), i.appendChild(d)
        },
        formatTime: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            return B(e) ? Xe(e, Ke(this.duration) > 0, t) : e
        },
        updateTimeDisplay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            Q(e) && B(t) && (e.innerText = $e.formatTime(t, n))
        },
        updateVolume: function () {
            this.supported.ui && (Q(this.elements.inputs.volume) && $e.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), Q(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            Q(e) && (e.value = t, $e.updateRangeFill.call(this, e))
        },
        updateProgress: function (e) {
            var t = this;
            if (this.supported.ui && X(e)) {
                var n, i, a = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = this.currentTime, i = this.duration, a = 0 === n || 0 === i || Number.isNaN(n) || Number.isNaN(i) ? 0 : (n / i * 100).toFixed(2), "timeupdate" === e.type && $e.setRange.call(this, this.elements.inputs.seek, a);
                        break;
                    case "playing":
                    case "progress":
                        ! function (e, n) {
                            var i = B(n) ? n : 0,
                                a = Q(e) ? e : t.elements.display.buffer;
                            if (Q(a)) {
                                a.value = i;
                                var o = a.getElementsByTagName("span")[0];
                                Q(o) && (o.childNodes[0].nodeValue = i)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function (e) {
            var t = X(e) ? e.target : e;
            if (Q(t) && "range" === t.getAttribute("type")) {
                if (ye(t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = $e.formatTime(this.currentTime),
                        i = $e.formatTime(this.duration),
                        a = Be("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", a.replace("{currentTime}", n).replace("{duration}", i))
                } else if (ye(t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                ie.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function (e) {
            var t = this;
            if (this.config.tooltips.seek && Q(this.elements.inputs.seek) && Q(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                    i = function (e) {
                        return fe(t.elements.display.seekTooltip, n, e)
                    };
                if (this.touch) i(!1);
                else {
                    var a = 0,
                        o = this.elements.progress.getBoundingClientRect();
                    if (X(e)) a = 100 / o.width * (e.pageX - o.left);
                    else {
                        if (!ge(this.elements.display.seekTooltip, n)) return;
                        a = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    a < 0 ? a = 0 : a > 100 && (a = 100), $e.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * a), this.elements.display.seekTooltip.style.left = "".concat(a, "%"), X(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function (e) {
            var t = !Q(this.elements.display.duration) && this.config.invertTime;
            $e.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || $e.updateProgress.call(this, e)
        },
        durationUpdate: function () {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return pe(this.elements.display.currentTime, !0), void pe(this.elements.progress, !0);
                Q(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = Q(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && $e.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && $e.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), $e.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function (e, t) {
            pe(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function (e, t, n) {
            var i = this.elements.settings.panels[e],
                a = null,
                o = t;
            if ("captions" === e) a = this.currentTrack;
            else {
                if (a = ee(n) ? this[e] : n, ee(a) && (a = this.config[e].default), !ee(this.options[e]) && !this.options[e].includes(a)) return void this.debug.warn("Unsupported value of '".concat(a, "' for ").concat(e));
                if (!this.config[e].options.includes(a)) return void this.debug.warn("Disabled value of '".concat(a, "' for ").concat(e))
            }
            if (Q(o) || (o = i && i.querySelector('[role="menu"]')), Q(o)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = $e.getLabel.call(this, e, a);
                var r = o && o.querySelector('[value="'.concat(a, '"]'));
                Q(r) && (r.checked = !0)
            }
        },
        getLabel: function (e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? Be("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if (B(t)) {
                        var n = Be("qualityLabel.".concat(t), this.config);
                        return n.length ? n : "".concat(t, "p")
                    }
                    return Fe(t);
                case "captions":
                    return Ze.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function (e) {
            var t = this;
            if (Q(this.elements.settings.panels.quality)) {
                var n = "quality",
                    i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                K(e) && (this.options.quality = De(e).filter(function (e) {
                    return t.config.quality.options.includes(e)
                }));
                var a = !ee(this.options.quality) && this.options.quality.length > 1;
                if ($e.toggleMenuButton.call(this, n, a), de(i), $e.checkMenu.call(this), a) {
                    var o = function (e) {
                        var n = Be("qualityBadge.".concat(e), t.config);
                        return n.length ? $e.createBadge.call(t, n) : null
                    };
                    this.options.quality.sort(function (e, n) {
                        var i = t.config.quality.options;
                        return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                    }).forEach(function (e) {
                        $e.createMenuItem.call(t, {
                            value: e,
                            list: i,
                            type: n,
                            title: $e.getLabel.call(t, "quality", e),
                            badge: o(e)
                        })
                    }), $e.updateSetting.call(this, n, i)
                }
            }
        },
        setCaptionsMenu: function () {
            var e = this;
            if (Q(this.elements.settings.panels.captions)) {
                var t = "captions",
                    n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    i = Ze.getTracks.call(this),
                    a = Boolean(i.length);
                if ($e.toggleMenuButton.call(this, t, a), de(n), $e.checkMenu.call(this), a) {
                    var o = i.map(function (t, i) {
                        return {
                            value: i,
                            checked: e.captions.toggled && e.currentTrack === i,
                            title: Ze.getLabel.call(e, t),
                            badge: t.language && $e.createBadge.call(e, t.language.toUpperCase()),
                            list: n,
                            type: "language"
                        }
                    });
                    o.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: Be("disabled", this.config),
                        list: n,
                        type: "language"
                    }), o.forEach($e.createMenuItem.bind(this)), $e.updateSetting.call(this, t, n)
                }
            }
        },
        setSpeedMenu: function () {
            var e = this;
            if (Q(this.elements.settings.panels.speed)) {
                var t = "speed",
                    n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter(function (t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                });
                var i = !ee(this.options.speed) && this.options.speed.length > 1;
                $e.toggleMenuButton.call(this, t, i), de(n), $e.checkMenu.call(this), i && (this.options.speed.forEach(function (i) {
                    $e.createMenuItem.call(e, {
                        value: i,
                        list: n,
                        type: t,
                        title: $e.getLabel.call(e, "speed", i)
                    })
                }), $e.updateSetting.call(this, t, n))
            }
        },
        checkMenu: function () {
            var e = this.elements.settings.buttons,
                t = !ee(e) && Object.values(e).some(function (e) {
                    return !e.hidden
                });
            pe(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var n = e;
                Q(n) || (n = Object.values(this.elements.settings.panels).find(function (e) {
                    return !e.hidden
                }));
                var i = n.querySelector('[role^="menuitem"]');
                we.call(this, i, t)
            }
        },
        toggleMenu: function (e) {
            var t = this.elements.settings.popup,
                n = this.elements.buttons.settings;
            if (Q(t) && Q(n)) {
                var i = t.hidden,
                    a = i;
                if (W(e)) a = e;
                else if ($(e) && 27 === e.which) a = !1;
                else if (X(e)) {
                    var o = z(e.composedPath) ? e.composedPath()[0] : e.target,
                        r = t.contains(o);
                    if (r || !r && e.target !== n && a) return
                }
                n.setAttribute("aria-expanded", a), pe(t, !a), fe(this.elements.container, this.config.classNames.menu.open, a), a && $(e) ? $e.focusFirstMenuItem.call(this, null, !0) : a || i || we.call(this, n, $(e))
            }
        },
        getMenuSize: function (e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                i = t.scrollHeight;
            return ue(t), {
                width: n,
                height: i
            }
        },
        showMenuPanel: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (Q(i)) {
                var a = i.parentNode,
                    o = Array.from(a.children).find(function (e) {
                        return !e.hidden
                    });
                if (Ce.transitions && !Ce.reducedMotion) {
                    a.style.width = "".concat(o.scrollWidth, "px"), a.style.height = "".concat(o.scrollHeight, "px");
                    var r = $e.getMenuSize.call(this, i);
                    Pe.call(this, a, te, function t(n) {
                        n.target === a && ["width", "height"].includes(n.propertyName) && (a.style.width = "", a.style.height = "", Ee.call(e, a, te, t))
                    }), a.style.width = "".concat(r.width, "px"), a.style.height = "".concat(r.height, "px")
                }
                pe(o, !0), pe(i, !1), $e.focusFirstMenuItem.call(this, i, n)
            }
        },
        setDownloadUrl: function () {
            var e = this.elements.buttons.download;
            Q(e) && e.setAttribute("href", this.download)
        },
        create: function (e) {
            var t = this,
                n = $e.bindMenuItemShortcuts,
                i = $e.createButton,
                a = $e.createProgress,
                o = $e.createRange,
                r = $e.createTime,
                s = $e.setQualityMenu,
                l = $e.setSpeedMenu,
                c = $e.showMenuPanel;
            this.elements.controls = null, K(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            var u = le("div", me(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            var d = {
                class: "plyr__controls__item"
            };
            return De(K(this.config.controls) ? this.config.controls : []).forEach(function (s) {
                if ("restart" === s && u.appendChild(i.call(t, "restart", d)), "rewind" === s && u.appendChild(i.call(t, "rewind", d)), "play" === s && u.appendChild(i.call(t, "play", d)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", d)), "progress" === s) {
                    var l = le("div", {
                            class: "".concat(d.class, " plyr__progress__container")
                        }),
                        h = le("div", me(t.config.selectors.progress));
                    if (h.appendChild(o.call(t, "seek", {
                            id: "plyr-seek-".concat(e.id)
                        })), h.appendChild(a.call(t, "buffer")), t.config.tooltips.seek) {
                        var m = le("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        h.appendChild(m), t.elements.display.seekTooltip = m
                    }
                    t.elements.progress = h, l.appendChild(t.elements.progress), u.appendChild(l)
                }
                if ("current-time" === s && u.appendChild(r.call(t, "currentTime", d)), "duration" === s && u.appendChild(r.call(t, "duration", d)), "mute" === s || "volume" === s) {
                    var p = t.elements.volume;
                    if (Q(p) && u.contains(p) || (p = le("div", oe({}, d, {
                            class: "".concat(d.class, " plyr__volume").trim()
                        })), t.elements.volume = p, u.appendChild(p)), "mute" === s && p.appendChild(i.call(t, "mute")), "volume" === s && !ie.isIos) {
                        var f = {
                            max: 1,
                            step: .05,
                            value: t.config.volume
                        };
                        p.appendChild(o.call(t, "volume", oe(f, {
                            id: "plyr-volume-".concat(e.id)
                        })))
                    }
                }
                if ("captions" === s && u.appendChild(i.call(t, "captions", d)), "settings" === s && !ee(t.config.settings)) {
                    var g = le("div", oe({}, d, {
                        class: "".concat(d.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    g.appendChild(i.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var y = le("div", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-".concat(e.id),
                            hidden: ""
                        }),
                        b = le("div"),
                        v = le("div", {
                            id: "plyr-settings-".concat(e.id, "-home")
                        }),
                        w = le("div", {
                            role: "menu"
                        });
                    v.appendChild(w), b.appendChild(v), t.elements.settings.panels.home = v, t.config.settings.forEach(function (i) {
                        var a = le("button", oe(me(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        n.call(t, a, i), Pe.call(t, a, "click", function () {
                            c.call(t, i, !1)
                        });
                        var o = le("span", null, Be(i, t.config)),
                            r = le("span", {
                                class: t.config.classNames.menu.value
                            });
                        r.innerHTML = e[i], o.appendChild(r), a.appendChild(o), w.appendChild(a);
                        var s = le("div", {
                                id: "plyr-settings-".concat(e.id, "-").concat(i),
                                hidden: ""
                            }),
                            l = le("button", {
                                type: "button",
                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                            });
                        l.appendChild(le("span", {
                            "aria-hidden": !0
                        }, Be(i, t.config))), l.appendChild(le("span", {
                            class: t.config.classNames.hidden
                        }, Be("menuBack", t.config))), Pe.call(t, s, "keydown", function (e) {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                        }, !1), Pe.call(t, l, "click", function () {
                            c.call(t, "home", !1)
                        }), s.appendChild(l), s.appendChild(le("div", {
                            role: "menu"
                        })), b.appendChild(s), t.elements.settings.buttons[i] = a, t.elements.settings.panels[i] = s
                    }), y.appendChild(b), g.appendChild(y), u.appendChild(g), t.elements.settings.popup = y, t.elements.settings.menu = g
                }
                if ("pip" === s && Ce.pip && u.appendChild(i.call(t, "pip", d)), "airplay" === s && Ce.airplay && u.appendChild(i.call(t, "airplay", d)), "download" === s) {
                    var k = oe({}, d, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (k.download = "");
                    var T = t.config.urls.download;
                    !Z(T) && t.isEmbed && oe(k, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }), u.appendChild(i.call(t, "download", k))
                }
                "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", d))
            }), this.isHTML5 && s.call(this, je.getQualityOptions.call(this)), l.call(this), u
        },
        inject: function () {
            var e = this;
            if (this.config.loadSprite) {
                var t = $e.getIconUrl.call(this);
                t.cors && ze(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var i, a, o = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                r = !0;
            if (z(this.config.controls) && (this.config.controls = this.config.controls.call(this, o)), this.config.controls || (this.config.controls = []), Q(this.config.controls) || U(this.config.controls) ? n = this.config.controls : (n = $e.create.call(this, {
                    id: this.id,
                    seektime: this.config.seekTime,
                    speed: this.speed,
                    quality: this.quality,
                    captions: Ze.getLabel.call(this)
                }), r = !1), r && U(this.config.controls) && (i = n, Object.entries(o).forEach(function (e) {
                    var t = s(e, 2),
                        n = t[0],
                        a = t[1];
                    i = He(i, "{".concat(n, "}"), a)
                }), n = i), U(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), Q(a) || (a = this.elements.container), a[Q(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), Q(this.elements.controls) || $e.findElements.call(this), !ee(this.elements.buttons)) {
                var l = function (t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function () {
                            return ge(t, n)
                        },
                        set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            fe(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach(function (e) {
                    K(e) || Y(e) ? Array.from(e).filter(Boolean).forEach(l) : l(e)
                })
            }
            if (ie.isEdge && ne(a), this.config.tooltips.controls) {
                var c = this.config,
                    u = c.classNames,
                    d = c.selectors,
                    h = "".concat(d.controls.wrapper, " ").concat(d.labels, " .").concat(u.hidden),
                    m = be.call(this, h);
                Array.from(m).forEach(function (t) {
                    fe(t, e.config.classNames.hidden, !1), fe(t, e.config.classNames.tooltip, !0)
                })
            }
        }
    };

    function Je(e) {
        var t = e;
        if (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) {
            var n = document.createElement("a");
            n.href = t, t = n.href
        }
        try {
            return new URL(t)
        } catch (e) {
            return null
        }
    }

    function Ge(e) {
        var t = new URLSearchParams;
        return V(e) && Object.entries(e).forEach(function (e) {
            var n = s(e, 2),
                i = n[0],
                a = n[1];
            t.set(i, a)
        }), t
    }
    var Ze = {
            setup: function () {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !Ce.textTracks) K(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $e.setCaptionsMenu.call(this);
                    else {
                        if (Q(this.elements.captions) || (this.elements.captions = le("div", me(this.config.selectors.captions)), function (e, t) {
                                Q(e) && Q(t) && t.parentNode.insertBefore(e, t.nextSibling)
                            }(this.elements.captions, this.elements.wrapper)), ie.isIE && window.URL) {
                            var e = this.media.querySelectorAll("track");
                            Array.from(e).forEach(function (e) {
                                var t = e.getAttribute("src"),
                                    n = Je(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && We(t, "blob").then(function (t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                }).catch(function () {
                                    ue(e)
                                })
                            })
                        }
                        var t = De((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(function (e) {
                                return e.split("-")[0]
                            })),
                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        "auto" === n && (n = s(t, 1)[0]);
                        var i = this.storage.get("captions");
                        if (W(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: i,
                                language: n,
                                languages: t
                            }), this.isHTML5) {
                            var a = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            Pe.call(this, this.media.textTracks, a, Ze.update.bind(this))
                        }
                        setTimeout(Ze.update.bind(this), 0)
                    }
            },
            update: function () {
                var e = this,
                    t = Ze.getTracks.call(this, !0),
                    n = this.captions,
                    i = n.active,
                    a = n.language,
                    o = n.meta,
                    r = n.currentTrackNode,
                    s = Boolean(t.find(function (e) {
                        return e.language === a
                    }));
                this.isHTML5 && this.isVideo && t.filter(function (e) {
                    return !o.get(e)
                }).forEach(function (t) {
                    e.debug.log("Track added", t), o.set(t, {
                        default: "showing" === t.mode
                    }), "showing" === t.mode && (t.mode = "hidden"), Pe.call(e, t, "cuechange", function () {
                        return Ze.updateCues.call(e)
                    })
                }), (s && this.language !== a || !t.includes(r)) && (Ze.setLanguage.call(this, a), Ze.toggle.call(this, i && s)), fe(this.elements.container, this.config.classNames.captions.enabled, !ee(t)), K(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && $e.setCaptionsMenu.call(this)
            },
            toggle: function (e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var i = this.captions.toggled,
                        a = this.config.classNames.captions.active,
                        o = R(e) ? !i : e;
                    if (o !== i) {
                        if (n || (this.captions.active = o, this.storage.set({
                                captions: o
                            })), !this.language && o && !n) {
                            var r = Ze.getTracks.call(this),
                                s = Ze.findTrack.call(this, [this.captions.language].concat(l(this.captions.languages)), !0);
                            return this.captions.language = s.language, void Ze.set.call(this, r.indexOf(s))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), fe(this.elements.container, a, o), this.captions.toggled = o, $e.updateSetting.call(this, "captions"), Me.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                    }
                    setTimeout(function () {
                        o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                    })
                }
            },
            set: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = Ze.getTracks.call(this);
                if (-1 !== e)
                    if (B(e))
                        if (e in n) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var i = n[e],
                                    a = (i || {}).language;
                                this.captions.currentTrackNode = i, $e.updateSetting.call(this, "captions"), t || (this.captions.language = a, this.storage.set({
                                    language: a
                                })), this.isVimeo && this.embed.enableTextTrack(a), Me.call(this, this.media, "languagechange")
                            }
                            Ze.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && Ze.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else Ze.toggle.call(this, !1, t)
            },
            setLanguage: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (U(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var i = Ze.getTracks.call(this),
                        a = Ze.findTrack.call(this, [n]);
                    Ze.set.call(this, i.indexOf(a), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function () {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return Array.from((this.media || {}).textTracks || []).filter(function (n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                }).filter(function (e) {
                    return ["captions", "subtitles"].includes(e.kind)
                })
            },
            findTrack: function (e) {
                var t, n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    a = Ze.getTracks.call(this),
                    o = function (e) {
                        return Number((n.captions.meta.get(e) || {}).default)
                    },
                    r = Array.from(a).sort(function (e, t) {
                        return o(t) - o(e)
                    });
                return e.every(function (e) {
                    return !(t = r.find(function (t) {
                        return t.language === e
                    }))
                }), t || (i ? r[0] : void 0)
            },
            getCurrentTrack: function () {
                return Ze.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function (e) {
                var t = e;
                return !J(t) && Ce.textTracks && this.captions.toggled && (t = Ze.getCurrentTrack.call(this)), J(t) ? ee(t.label) ? ee(t.language) ? Be("enabled", this.config) : e.language.toUpperCase() : t.label : Be("disabled", this.config)
            },
            updateCues: function (e) {
                if (this.supported.ui)
                    if (Q(this.elements.captions))
                        if (R(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var n = Ze.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map(function (e) {
                                    return e.getCueAsHTML()
                                }).map(Re)
                            }
                            var i = t.map(function (e) {
                                return e.trim()
                            }).join("\n");
                            if (i !== this.elements.captions.innerHTML) {
                                de(this.elements.captions);
                                var a = le("span", me(this.config.selectors.caption));
                                a.innerHTML = i, this.elements.captions.appendChild(a), Me.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        et = {
            enabled: !0,
            title: "",
            debug: !1,
            autoplay: !1,
            autopause: !0,
            playsinline: !0,
            seekTime: 10,
            volume: 1,
            muted: !1,
            duration: null,
            displayDuration: !0,
            invertTime: !0,
            toggleInvert: !0,
            ratio: null,
            clickToPlay: !0,
            hideControls: !0,
            resetOnEnd: !1,
            disableContextMenu: !0,
            loadSprite: !0,
            iconPrefix: "plyr",
            iconUrl: "https://cdn.plyr.io/3.6.4/plyr.svg",
            blankVideo: "https://cdn.plyr.io/static/blank.mp4",
            quality: {
                default: 576,
                options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                forced: !1,
                onChange: null
            },
            loop: {
                active: !1
            },
            speed: {
                selected: 1,
                options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
            },
            keyboard: {
                focused: !0,
                global: !1
            },
            tooltips: {
                controls: !1,
                seek: !0
            },
            captions: {
                active: !1,
                language: "auto",
                update: !1
            },
            fullscreen: {
                enabled: !0,
                fallback: !0,
                iosNative: !1
            },
            storage: {
                enabled: !0,
                key: "plyr"
            },
            controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
            settings: ["captions", "quality", "speed"],
            i18n: {
                restart: "Recomeçar",
                rewind: "Retroceder {seektime}s",
                play: "Play",
                pause: "Pausar",
                fastForward: "Avançar {seektime}s",
                seek: "Procurar",
                seekLabel: "{currentTime} de {duration}",
                played: "Reproduzido",
                buffered: "Buffered",
                currentTime: "Tempo atual",
                duration: "Duração",
                volume: "Volume",
                mute: "Mutar",
                unmute: "Desmutar",
                enableCaptions: "Habilitar legendas",
                disableCaptions: "Desabilitar legendas",
                download: "Download",
                enterFullscreen: "Entrar no modo tela cheia",
                exitFullscreen: "Sair do modo tela cheia",
                frameTitle: "Player para {title}",
                captions: "Legendas",
                settings: "Configurações",
                pip: "PIP",
                menuBack: "Voltar para o menu anterior",
                speed: "Velocidade",
                normal: "Normal",
                quality: "Qualidade",
                loop: "Loop",
                start: "Começo",
                end: "Fim",
                all: "Tudo",
                reset: "Redefinir",
                disabled: "Desabilitado",
                enabled: "Habilitado",
                advertisement: "Ad",
                qualityBadge: {
                    2160: "4K",
                    1440: "1440p HD",
                    1080: "1080p HD",
                    720: "720p HD",
                    576: "576p SD",
                    480: "480p SD"
                }
            },
            urls: {
                download: null,
                vimeo: {
                    sdk: "https://player.vimeo.com/api/player.js",
                    iframe: "https://player.vimeo.com/video/{0}?{1}",
                    api: "https://vimeo.com/api/oembed.json?url={0}"
                },
                youtube: {
                    sdk: "https://www.youtube.com/iframe_api",
                    api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                },
                googleIMA: {
                    sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                }
            },
            listeners: {
                seek: null,
                play: null,
                pause: null,
                restart: null,
                rewind: null,
                fastForward: null,
                mute: null,
                volume: null,
                captions: null,
                download: null,
                fullscreen: null,
                pip: null,
                airplay: null,
                speed: null,
                quality: null,
                loop: null,
                language: null
            },
            events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
            selectors: {
                editable: "input, textarea, select, [contenteditable]",
                container: ".plyr",
                controls: {
                    container: null,
                    wrapper: ".plyr__controls"
                },
                labels: "[data-plyr]",
                buttons: {
                    play: '[data-plyr="play"]',
                    pause: '[data-plyr="pause"]',
                    restart: '[data-plyr="restart"]',
                    rewind: '[data-plyr="rewind"]',
                    fastForward: '[data-plyr="fast-forward"]',
                    mute: '[data-plyr="mute"]',
                    captions: '[data-plyr="captions"]',
                    download: '[data-plyr="download"]',
                    fullscreen: '[data-plyr="fullscreen"]',
                    pip: '[data-plyr="pip"]',
                    airplay: '[data-plyr="airplay"]',
                    settings: '[data-plyr="settings"]',
                    loop: '[data-plyr="loop"]'
                },
                inputs: {
                    seek: '[data-plyr="seek"]',
                    volume: '[data-plyr="volume"]',
                    speed: '[data-plyr="speed"]',
                    language: '[data-plyr="language"]',
                    quality: '[data-plyr="quality"]'
                },
                display: {
                    currentTime: ".plyr__time--current",
                    duration: ".plyr__time--duration",
                    buffer: ".plyr__progress__buffer",
                    loop: ".plyr__progress__loop",
                    volume: ".plyr__volume--display"
                },
                progress: ".plyr__progress",
                captions: ".plyr__captions",
                caption: ".plyr__caption"
            },
            classNames: {
                type: "plyr--{0}",
                provider: "plyr--{0}",
                video: "plyr__video-wrapper",
                embed: "plyr__video-embed",
                videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                embedContainer: "plyr__video-embed__container",
                poster: "plyr__poster",
                posterEnabled: "plyr__poster-enabled",
                ads: "plyr__ads",
                control: "plyr__control",
                controlPressed: "plyr__control--pressed",
                playing: "plyr--playing",
                paused: "plyr--paused",
                stopped: "plyr--stopped",
                loading: "plyr--loading",
                hover: "plyr--hover",
                tooltip: "plyr__tooltip",
                cues: "plyr__cues",
                hidden: "plyr__sr-only",
                hideControls: "plyr--hide-controls",
                isIos: "plyr--is-ios",
                isTouch: "plyr--is-touch",
                uiSupported: "plyr--full-ui",
                noTransition: "plyr--no-transition",
                display: {
                    time: "plyr__time"
                },
                menu: {
                    value: "plyr__menu__value",
                    badge: "plyr__badge",
                    open: "plyr--menu-open"
                },
                captions: {
                    enabled: "plyr--captions-enabled",
                    active: "plyr--captions-active"
                },
                fullscreen: {
                    enabled: "plyr--fullscreen-enabled",
                    fallback: "plyr--fullscreen-fallback"
                },
                pip: {
                    supported: "plyr--pip-supported",
                    active: "plyr--pip-active"
                },
                airplay: {
                    supported: "plyr--airplay-supported",
                    active: "plyr--airplay-active"
                },
                tabFocus: "plyr__tab-focus",
                previewThumbnails: {
                    thumbContainer: "plyr__preview-thumb",
                    thumbContainerShown: "plyr__preview-thumb--is-shown",
                    imageContainer: "plyr__preview-thumb__image-container",
                    timeContainer: "plyr__preview-thumb__time-container",
                    scrubbingContainer: "plyr__preview-scrubbing",
                    scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                }
            },
            attributes: {
                embed: {
                    provider: "data-plyr-provider",
                    id: "data-plyr-embed-id"
                }
            },
            ads: {
                enabled: !1,
                publisherId: "",
                tagUrl: ""
            },
            previewThumbnails: {
                enabled: !1,
                src: ""
            },
            vimeo: {
                byline: !1,
                portrait: !1,
                title: !1,
                speed: !0,
                transparent: !1,
                customControls: !0,
                referrerPolicy: null,
                premium: !1
            },
            youtube: {
                rel: 0,
                showinfo: 0,
                iv_load_policy: 3,
                modestbranding: 1,
                customControls: !0,
                noCookie: !1
            }
        },
        tt = "picture-in-picture",
        nt = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        it = "video",
        at = function () {},
        ot = function () {
            function e() {
                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                t(this, e), this.enabled = window.console && n, this.enabled && this.log("Debugging enabled")
            }
            return i(e, [{
                key: "log",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : at
                }
            }, {
                key: "warn",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : at
                }
            }, {
                key: "error",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : at
                }
            }]), e
        }(),
        rt = function () {
            function e(n) {
                var i = this;
                t(this, e), a(this, "onChange", function () {
                    if (i.enabled) {
                        var e = i.player.elements.buttons.fullscreen;
                        Q(e) && (e.pressed = i.active);
                        var t = i.target === i.player.media ? i.target : i.player.elements.container;
                        Me.call(i.player, t, i.active ? "enterfullscreen" : "exitfullscreen", !0)
                    }
                }), a(this, "toggleFallback", function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e ? i.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(i.scrollPosition.x, i.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", fe(i.target, i.player.config.classNames.fullscreen.fallback, e), ie.isIos) {
                        var t = document.head.querySelector('meta[name="viewport"]'),
                            n = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        var a = U(t.content) && t.content.includes(n);
                        e ? (i.cleanupViewport = !a, a || (t.content += ",".concat(n))) : i.cleanupViewport && (t.content = t.content.split(",").filter(function (e) {
                            return e.trim() !== n
                        }).join(","))
                    }
                    i.onChange()
                }), a(this, "trapFocus", function (e) {
                    if (!ie.isIos && i.active && "Tab" === e.key && 9 === e.keyCode) {
                        var t = document.activeElement,
                            n = be.call(i.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                            a = s(n, 1)[0],
                            o = n[n.length - 1];
                        t !== o || e.shiftKey ? t === a && e.shiftKey && (o.focus(), e.preventDefault()) : (a.focus(), e.preventDefault())
                    }
                }), a(this, "update", function () {
                    var t;
                    i.enabled ? (t = i.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", i.player.debug.log("".concat(t, " fullscreen enabled"))) : i.player.debug.log("Fullscreen not supported and fallback disabled"), fe(i.player.elements.container, i.player.config.classNames.fullscreen.enabled, i.enabled)
                }), a(this, "enter", function () {
                    i.enabled && (ie.isIos && i.player.config.fullscreen.iosNative ? i.player.isVimeo ? i.player.embed.requestFullscreen() : i.target.webkitEnterFullscreen() : !e.native || i.forceFallback ? i.toggleFallback(!0) : i.prefix ? ee(i.prefix) || i.target["".concat(i.prefix, "Request").concat(i.property)]() : i.target.requestFullscreen({
                        navigationUI: "hide"
                    }))
                }), a(this, "exit", function () {
                    if (i.enabled)
                        if (ie.isIos && i.player.config.fullscreen.iosNative) i.target.webkitExitFullscreen(), xe(i.player.play());
                        else if (!e.native || i.forceFallback) i.toggleFallback(!1);
                    else if (i.prefix) {
                        if (!ee(i.prefix)) {
                            var t = "moz" === i.prefix ? "Cancel" : "Exit";
                            document["".concat(i.prefix).concat(t).concat(i.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                }), a(this, "toggle", function () {
                    i.active ? i.exit() : i.enter()
                }), this.player = n, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === n.config.fullscreen.fallback, this.player.elements.fullscreen = n.config.fullscreen.container && function (e, t) {
                    return (Element.prototype.closest || function () {
                        var e = this;
                        do {
                            if (ye.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    }).call(e, t)
                }(this.player.elements.container, n.config.fullscreen.container), Pe.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), function () {
                    i.onChange()
                }), Pe.call(this.player, this.player.elements.container, "dblclick", function (e) {
                    Q(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.player.listeners.proxy(e, i.toggle, "fullscreen")
                }), Pe.call(this, this.player.elements.container, "keydown", function (e) {
                    return i.trapFocus(e)
                }), this.update()
            }
            return i(e, [{
                key: "usingNative",
                get: function () {
                    return e.native && !this.forceFallback
                }
            }, {
                key: "enabled",
                get: function () {
                    return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
                }
            }, {
                key: "active",
                get: function () {
                    if (!this.enabled) return !1;
                    if (!e.native || this.forceFallback) return ge(this.target, this.player.config.classNames.fullscreen.fallback);
                    var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                    return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                }
            }, {
                key: "target",
                get: function () {
                    return ie.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                }
            }], [{
                key: "native",
                get: function () {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function () {
                    if (z(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some(function (t) {
                        return !(!z(document["".concat(t, "ExitFullscreen")]) && !z(document["".concat(t, "CancelFullScreen")]) || (e = t, 0))
                    }), e
                }
            }, {
                key: "property",
                get: function () {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }();

    function st(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise(function (n, i) {
            var a = new Image,
                o = function () {
                    delete a.onload, delete a.onerror, (a.naturalWidth >= t ? n : i)(a)
                };
            Object.assign(a, {
                onload: o,
                onerror: o,
                src: e
            })
        })
    }
    var lt = {
            addStyleHook: function () {
                fe(this.elements.container, this.config.selectors.container.replace(".", ""), !0), fe(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function () {
                arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function () {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void lt.toggleNativeControls.call(this, !0);
                Q(this.elements.controls) || ($e.inject.call(this), this.listeners.controls()), lt.toggleNativeControls.call(this), this.isHTML5 && Ze.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, $e.updateVolume.call(this), $e.timeUpdate.call(this), lt.checkPlaying.call(this), fe(this.elements.container, this.config.classNames.pip.supported, Ce.pip && this.isHTML5 && this.isVideo), fe(this.elements.container, this.config.classNames.airplay.supported, Ce.airplay && this.isHTML5), fe(this.elements.container, this.config.classNames.isIos, ie.isIos), fe(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function () {
                    Me.call(e, e.media, "ready")
                }, 0), lt.setTitle.call(this), this.poster && lt.setPoster.call(this, this.poster, !1).catch(function () {}), this.config.duration && $e.durationUpdate.call(this)
            },
            setTitle: function () {
                var e = Be("play", this.config);
                if (U(this.config.title) && !ee(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach(function (t) {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    var t = ve.call(this, "iframe");
                    if (!Q(t)) return;
                    var n = ee(this.config.title) ? "video" : this.config.title,
                        i = Be("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", n))
                }
            },
            togglePoster: function (e) {
                fe(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function (e) {
                var t = this;
                return (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), function () {
                    var e = this;
                    return new Promise(function (t) {
                        return e.ready ? setTimeout(t, 0) : Pe.call(e, e.elements.container, "ready", t)
                    }).then(function () {})
                }.call(this).then(function () {
                    return st(e)
                }).catch(function (n) {
                    throw e === t.poster && lt.togglePoster.call(t, !1), n
                }).then(function () {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                }).then(function () {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), lt.togglePoster.call(t, !0), e
                }))
            },
            checkPlaying: function (e) {
                var t = this;
                fe(this.elements.container, this.config.classNames.playing, this.playing), fe(this.elements.container, this.config.classNames.paused, this.paused), fe(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(function (e) {
                    Object.assign(e, {
                        pressed: t.playing
                    }), e.setAttribute("aria-label", Be(t.playing ? "pause" : "play", t.config))
                }), X(e) && "timeupdate" === e.type || lt.toggleControls.call(this)
            },
            checkLoading: function (e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function () {
                    fe(t.elements.container, t.config.classNames.loading, t.loading), lt.toggleControls.call(t)
                }, this.loading ? 250 : 0)
            },
            toggleControls: function (e) {
                var t = this.elements.controls;
                if (t && this.config.hideControls) {
                    var n = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || n))
                }
            },
            migrateStyles: function () {
                var e = this;
                Object.values(r({}, this.media.style)).filter(function (e) {
                    return !ee(e) && U(e) && e.startsWith("--plyr")
                }).forEach(function (t) {
                    e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                }), ee(this.media.style) && this.media.removeAttribute("style")
            }
        },
        ct = function () {
            function e(n) {
                var i = this;
                t(this, e), a(this, "firstTouch", function () {
                    var e = i.player,
                        t = e.elements;
                    e.touch = !0, fe(t.container, e.config.classNames.isTouch, !0)
                }), a(this, "setTabFocus", function (e) {
                    var t = i.player,
                        n = t.elements;
                    if (clearTimeout(i.focusTimer), "keydown" !== e.type || 9 === e.which) {
                        "keydown" === e.type && (i.lastKeyDown = e.timeStamp);
                        var a, o = e.timeStamp - i.lastKeyDown <= 20;
                        ("focus" !== e.type || o) && (a = t.config.classNames.tabFocus, fe(be.call(t, ".".concat(a)), a, !1), "focusout" !== e.type && (i.focusTimer = setTimeout(function () {
                            var e = document.activeElement;
                            n.container.contains(e) && fe(document.activeElement, t.config.classNames.tabFocus, !0)
                        }, 10)))
                    }
                }), a(this, "global", function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = i.player;
                    t.config.keyboard.global && Se.call(t, window, "keydown keyup", i.handleKey, e, !1), Se.call(t, document.body, "click", i.toggleMenu, e), Ne.call(t, document.body, "touchstart", i.firstTouch), Se.call(t, document.body, "keydown focus blur focusout", i.setTabFocus, e, !1, !0)
                }), a(this, "container", function () {
                    var e = i.player,
                        t = e.config,
                        n = e.elements,
                        a = e.timers;
                    !t.keyboard.global && t.keyboard.focused && Pe.call(e, n.container, "keydown keyup", i.handleKey, !1), Pe.call(e, n.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", function (t) {
                        var i = n.controls;
                        i && "enterfullscreen" === t.type && (i.pressed = !1, i.hover = !1);
                        var o = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (lt.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(a.controls), a.controls = setTimeout(function () {
                            return lt.toggleControls.call(e, !1)
                        }, o)
                    });
                    var o = function (t) {
                            if (!t) return _e.call(e);
                            var i = n.container.getBoundingClientRect(),
                                a = i.width,
                                o = i.height;
                            return _e.call(e, "".concat(a, ":").concat(o))
                        },
                        r = function () {
                            clearTimeout(a.resized), a.resized = setTimeout(o, 50)
                        };
                    Pe.call(e, n.container, "enterfullscreen exitfullscreen", function (t) {
                        var i = e.fullscreen,
                            a = i.target,
                            l = i.usingNative;
                        if (a === n.container && (e.isEmbed || !ee(e.config.ratio))) {
                            var c = "enterfullscreen" === t.type,
                                u = o(c);
                            u.padding, ! function (t, n, i) {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                    var a = e.elements.wrapper.firstChild,
                                        o = s(t, 2)[1],
                                        r = s(Oe.call(e), 2),
                                        l = r[0],
                                        c = r[1];
                                    a.style.maxWidth = i ? "".concat(o / c * l, "px") : null, a.style.margin = i ? "0 auto" : null
                                }
                            }(u.ratio, 0, c), c && setTimeout(function () {
                                return ne(n.container)
                            }, 100), l || (c ? Pe.call(e, window, "resize", r) : Ee.call(e, window, "resize", r))
                        }
                    })
                }), a(this, "media", function () {
                    var e = i.player,
                        t = e.elements;
                    if (Pe.call(e, e.media, "timeupdate seeking seeked", function (t) {
                            return $e.timeUpdate.call(e, t)
                        }), Pe.call(e, e.media, "durationchange loadeddata loadedmetadata", function (t) {
                            return $e.durationUpdate.call(e, t)
                        }), Pe.call(e, e.media, "ended", function () {
                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                        }), Pe.call(e, e.media, "progress playing seeking seeked", function (t) {
                            return $e.updateProgress.call(e, t)
                        }), Pe.call(e, e.media, "volumechange", function (t) {
                            return $e.updateVolume.call(e, t)
                        }), Pe.call(e, e.media, "playing play pause ended emptied timeupdate", function (t) {
                            return lt.checkPlaying.call(e, t)
                        }), Pe.call(e, e.media, "waiting canplay seeked playing", function (t) {
                            return lt.checkLoading.call(e, t)
                        }), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                        var n = ve.call(e, ".".concat(e.config.classNames.video));
                        if (!Q(n)) return;
                        Pe.call(e, t.container, "click", function (a) {
                            ([t.container, n].includes(a.target) || n.contains(a.target)) && (e.touch && e.config.hideControls || (e.ended ? (i.proxy(a, e.restart, "restart"), i.proxy(a, function () {
                                xe(e.play())
                            }, "play")) : i.proxy(a, function () {
                                xe(e.togglePlay())
                            }, "play")))
                        })
                    }
                    e.supported.ui && e.config.disableContextMenu && Pe.call(e, t.wrapper, "contextmenu", function (e) {
                        e.preventDefault()
                    }, !1), Pe.call(e, e.media, "volumechange", function () {
                        e.storage.set({
                            volume: e.volume,
                            muted: e.muted
                        })
                    }), Pe.call(e, e.media, "ratechange", function () {
                        $e.updateSetting.call(e, "speed"), e.storage.set({
                            speed: e.speed
                        })
                    }), Pe.call(e, e.media, "qualitychange", function (t) {
                        $e.updateSetting.call(e, "quality", null, t.detail.quality)
                    }), Pe.call(e, e.media, "ready qualitychange", function () {
                        $e.setDownloadUrl.call(e)
                    });
                    var a = e.config.events.concat(["keyup", "keydown"]).join(" ");
                    Pe.call(e, e.media, a, function (n) {
                        var i = n.detail,
                            a = void 0 === i ? {} : i;
                        "error" === n.type && (a = e.media.error), Me.call(e, t.container, n.type, !0, a)
                    })
                }), a(this, "proxy", function (e, t, n) {
                    var a = i.player,
                        o = a.config.listeners[n],
                        r = !0;
                    z(o) && (r = o.call(a, e)), !1 !== r && z(t) && t.call(a, e)
                }), a(this, "bind", function (e, t, n, a) {
                    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        r = i.player,
                        s = r.config.listeners[a],
                        l = z(s);
                    Pe.call(r, e, t, function (e) {
                        return i.proxy(e, n, a)
                    }, o && !l)
                }), a(this, "controls", function () {
                    var e = i.player,
                        t = e.elements,
                        n = ie.isIE ? "change" : "input";
                    if (t.buttons.play && Array.from(t.buttons.play).forEach(function (t) {
                            i.bind(t, "click", function () {
                                xe(e.togglePlay())
                            }, "play")
                        }), i.bind(t.buttons.restart, "click", e.restart, "restart"), i.bind(t.buttons.rewind, "click", function () {
                            e.lastSeekTime = Date.now(), e.rewind()
                        }, "rewind"), i.bind(t.buttons.fastForward, "click", function () {
                            e.lastSeekTime = Date.now(), e.forward()
                        }, "fastForward"), i.bind(t.buttons.mute, "click", function () {
                            e.muted = !e.muted
                        }, "mute"), i.bind(t.buttons.captions, "click", function () {
                            return e.toggleCaptions()
                        }), i.bind(t.buttons.download, "click", function () {
                            Me.call(e, e.media, "download")
                        }, "download"), i.bind(t.buttons.fullscreen, "click", function () {
                            e.fullscreen.toggle()
                        }, "fullscreen"), i.bind(t.buttons.pip, "click", function () {
                            e.pip = "toggle"
                        }, "pip"), i.bind(t.buttons.airplay, "click", e.airplay, "airplay"), i.bind(t.buttons.settings, "click", function (t) {
                            t.stopPropagation(), t.preventDefault(), $e.toggleMenu.call(e, t)
                        }, null, !1), i.bind(t.buttons.settings, "keyup", function (t) {
                            var n = t.which;
                            [13, 32].includes(n) && (13 !== n ? (t.preventDefault(), t.stopPropagation(), $e.toggleMenu.call(e, t)) : $e.focusFirstMenuItem.call(e, null, !0))
                        }, null, !1), i.bind(t.settings.menu, "keydown", function (t) {
                            27 === t.which && $e.toggleMenu.call(e, t)
                        }), i.bind(t.inputs.seek, "mousedown mousemove", function (e) {
                            var n = t.progress.getBoundingClientRect(),
                                i = 100 / n.width * (e.pageX - n.left);
                            e.currentTarget.setAttribute("seek-value", i)
                        }), i.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", function (t) {
                            var n = t.currentTarget,
                                i = t.keyCode ? t.keyCode : t.which,
                                a = "play-on-seeked";
                            if (!$(t) || 39 === i || 37 === i) {
                                e.lastSeekTime = Date.now();
                                var o = n.hasAttribute(a),
                                    r = ["mouseup", "touchend", "keyup"].includes(t.type);
                                o && r ? (n.removeAttribute(a), xe(e.play())) : !r && e.playing && (n.setAttribute(a, ""), e.pause())
                            }
                        }), ie.isIos) {
                        var a = be.call(e, 'input[type="range"]');
                        Array.from(a).forEach(function (e) {
                            return i.bind(e, n, function (e) {
                                return ne(e.target)
                            })
                        })
                    }
                    i.bind(t.inputs.seek, n, function (t) {
                        var n = t.currentTarget,
                            i = n.getAttribute("seek-value");
                        ee(i) && (i = n.value), n.removeAttribute("seek-value"), e.currentTime = i / n.max * e.duration
                    }, "seek"), i.bind(t.progress, "mouseenter mouseleave mousemove", function (t) {
                        return $e.updateSeekTooltip.call(e, t)
                    }), i.bind(t.progress, "mousemove touchmove", function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startMove(t)
                    }), i.bind(t.progress, "mouseleave touchend click", function () {
                        var t = e.previewThumbnails;
                        t && t.loaded && t.endMove(!1, !0)
                    }), i.bind(t.progress, "mousedown touchstart", function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startScrubbing(t)
                    }), i.bind(t.progress, "mouseup touchend", function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.endScrubbing(t)
                    }), ie.isWebkit && Array.from(be.call(e, 'input[type="range"]')).forEach(function (t) {
                        i.bind(t, "input", function (t) {
                            return $e.updateRangeFill.call(e, t.target)
                        })
                    }), e.config.toggleInvert && !Q(t.display.duration) && i.bind(t.display.currentTime, "click", function () {
                        0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, $e.timeUpdate.call(e))
                    }), i.bind(t.inputs.volume, n, function (t) {
                        e.volume = t.target.value
                    }, "volume"), i.bind(t.controls, "mouseenter mouseleave", function (n) {
                        t.controls.hover = !e.touch && "mouseenter" === n.type
                    }), t.fullscreen && Array.from(t.fullscreen.children).filter(function (e) {
                        return !e.contains(t.container)
                    }).forEach(function (n) {
                        i.bind(n, "mouseenter mouseleave", function (n) {
                            t.controls.hover = !e.touch && "mouseenter" === n.type
                        })
                    }), i.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", function (e) {
                        t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                    }), i.bind(t.controls, "focusin", function () {
                        var n = e.config,
                            a = e.timers;
                        fe(t.controls, n.classNames.noTransition, !0), lt.toggleControls.call(e, !0), setTimeout(function () {
                            fe(t.controls, n.classNames.noTransition, !1)
                        }, 0);
                        var o = i.touch ? 3e3 : 4e3;
                        clearTimeout(a.controls), a.controls = setTimeout(function () {
                            return lt.toggleControls.call(e, !1)
                        }, o)
                    }), i.bind(t.inputs.volume, "wheel", function (t) {
                        var n = t.webkitDirectionInvertedFromDevice,
                            i = s([t.deltaX, -t.deltaY].map(function (e) {
                                return n ? -e : e
                            }), 2),
                            a = i[0],
                            o = i[1],
                            r = Math.sign(Math.abs(a) > Math.abs(o) ? a : o);
                        e.increaseVolume(r / 50);
                        var l = e.media.volume;
                        (1 === r && l < 1 || -1 === r && l > 0) && t.preventDefault()
                    }, "volume", !1)
                }), this.player = n, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return i(e, [{
                key: "handleKey",
                value: function (e) {
                    var t = this.player,
                        n = t.elements,
                        i = e.keyCode ? e.keyCode : e.which,
                        a = "keydown" === e.type,
                        o = a && i === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && B(i))
                        if (a) {
                            var r = document.activeElement;
                            if (Q(r)) {
                                var s = t.config.selectors.editable;
                                if (r !== n.inputs.seek && ye(r, s)) return;
                                if (32 === e.which && ye(r, 'button, [role^="menuitem"]')) return
                            }
                            switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(i) && (e.preventDefault(), e.stopPropagation()), i) {
                                case 48:
                                case 49:
                                case 50:
                                case 51:
                                case 52:
                                case 53:
                                case 54:
                                case 55:
                                case 56:
                                case 57:
                                    o || (t.currentTime = t.duration / 10 * (i - 48));
                                    break;
                                case 32:
                                case 75:
                                    o || xe(t.togglePlay());
                                    break;
                                case 38:
                                    t.increaseVolume(.1);
                                    break;
                                case 40:
                                    t.decreaseVolume(.1);
                                    break;
                                case 77:
                                    o || (t.muted = !t.muted);
                                    break;
                                case 39:
                                    t.forward();
                                    break;
                                case 37:
                                    t.rewind();
                                    break;
                                case 70:
                                    t.fullscreen.toggle();
                                    break;
                                case 67:
                                    o || t.toggleCaptions();
                                    break;
                                case 76:
                                    t.loop = !t.loop
                            }
                            27 === i && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = i
                        } else this.lastKey = null
                }
            }, {
                key: "toggleMenu",
                value: function (e) {
                    $e.toggleMenu.call(this.player, e)
                }
            }]), e
        }();
    "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var ut = function (e, t) {
        return function (e, t) {
            e.exports = function () {
                var e = function () {},
                    t = {},
                    n = {},
                    i = {};

                function a(e, t) {
                    if (e) {
                        var a = i[e];
                        if (n[e] = t, a)
                            for (; a.length;) a[0](e, t), a.splice(0, 1)
                    }
                }

                function o(t, n) {
                    t.call && (t = {
                        success: t
                    }), n.length ? (t.error || e)(n) : (t.success || e)(t)
                }

                function r(t, n, i, a) {
                    var o, s, l = document,
                        c = i.async,
                        u = (i.numRetries || 0) + 1,
                        d = i.before || e,
                        h = t.replace(/[\?|#].*$/, ""),
                        m = t.replace(/^(css|img)!/, "");
                    a = a || 0, /(^css!|\.css$)/.test(h) ? ((s = l.createElement("link")).rel = "stylesheet", s.href = m, (o = "hideFocus" in s) && s.relList && (o = 0, s.rel = "preload", s.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(h) ? (s = l.createElement("img")).src = m : ((s = l.createElement("script")).src = t, s.async = void 0 === c || c), s.onload = s.onerror = s.onbeforeload = function (e) {
                        var l = e.type[0];
                        if (o) try {
                            s.sheet.cssText.length || (l = "e")
                        } catch (e) {
                            18 != e.code && (l = "e")
                        }
                        if ("e" == l) {
                            if ((a += 1) < u) return r(t, n, i, a)
                        } else if ("preload" == s.rel && "style" == s.as) return s.rel = "stylesheet";
                        n(t, l, e.defaultPrevented)
                    }, !1 !== d(t, s) && l.head.appendChild(s)
                }

                function s(e, t, n) {
                    var i, a, o = (e = e.push ? e : [e]).length,
                        s = o,
                        l = [];
                    for (i = function (e, n, i) {
                            if ("e" == n && l.push(e), "b" == n) {
                                if (!i) return;
                                l.push(e)
                            }--o || t(l)
                        }, a = 0; a < s; a++) r(e[a], i, n)
                }

                function l(e, n, i) {
                    var r, l;
                    if (n && n.trim && (r = n), l = (r ? i : n) || {}, r) {
                        if (r in t) throw "LoadJS";
                        t[r] = !0
                    }

                    function c(t, n) {
                        s(e, function (e) {
                            o(l, e), t && o({
                                success: t,
                                error: n
                            }, e), a(r, e)
                        }, l)
                    }
                    if (l.returnPromise) return new Promise(c);
                    c()
                }
                return l.ready = function (e, t) {
                    return function (e, t) {
                        e = e.push ? e : [e];
                        var a, o, r, s = [],
                            l = e.length,
                            c = l;
                        for (a = function (e, n) {
                                n.length && s.push(e), --c || t(s)
                            }; l--;) o = e[l], (r = n[o]) ? a(o, r) : (i[o] = i[o] || []).push(a)
                    }(e, function (e) {
                        o(t, e)
                    }), l
                }, l.done = function (e) {
                    a(e, [])
                }, l.reset = function () {
                    t = {}, n = {}, i = {}
                }, l.isDefined = function (e) {
                    return e in t
                }, l
            }()
        }(t = {
            exports: {}
        }), t.exports
    }();

    function dt(e) {
        return new Promise(function (t, n) {
            ut(e, {
                success: t,
                error: n
            })
        })
    }

    function ht(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Me.call(this, this.media, e ? "play" : "pause"))
    }
    var mt = {
        setup: function () {
            var e = this;
            fe(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, _e.call(e), V(window.Vimeo) ? mt.ready.call(e) : dt(e.config.urls.vimeo.sdk).then(function () {
                mt.ready.call(e)
            }).catch(function (t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            })
        },
        ready: function () {
            var e = this,
                t = this,
                n = t.config.vimeo,
                i = n.premium,
                a = n.referrerPolicy,
                o = function (e, t) {
                    if (null == e) return {};
                    var n, i, a = function (e, t) {
                        if (null == e) return {};
                        var n, i, a = {},
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (a[n] = e[n]);
                        return a
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n])
                    }
                    return a
                }(n, ["premium", "referrerPolicy"]);
            i && Object.assign(o, {
                controls: !1,
                sidedock: !1
            });
            var l = Ge(r({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    muted: t.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }, o)),
                c = t.media.getAttribute("src");
            ee(c) && (c = t.media.getAttribute(t.config.attributes.embed.id));
            var u, d = ee(u = c) ? null : B(Number(u)) ? u : u.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : u,
                h = le("iframe"),
                m = qe(t.config.urls.vimeo.iframe, d, l);
            if (h.setAttribute("src", m), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture"].join("; ")), ee(a) || h.setAttribute("referrerPolicy", a), i || !n.customControls) h.setAttribute("data-poster", t.poster), t.media = he(h, t.media);
            else {
                var p = le("div", {
                    class: t.config.classNames.embedContainer,
                    "data-poster": t.poster
                });
                p.appendChild(h), t.media = he(p, t.media)
            }
            n.customControls || We(qe(t.config.urls.vimeo.api, m)).then(function (e) {
                !ee(e) && e.thumbnail_url && lt.setPoster.call(t, e.thumbnail_url).catch(function () {})
            }), t.embed = new window.Vimeo.Player(h, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
                return ht.call(t, !0), t.embed.play()
            }, t.media.pause = function () {
                return ht.call(t, !1), t.embed.pause()
            }, t.media.stop = function () {
                t.pause(), t.currentTime = 0
            };
            var f = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function () {
                    return f
                },
                set: function (e) {
                    var n = t.embed,
                        i = t.media,
                        a = t.paused,
                        o = t.volume,
                        r = a && !n.hasPlayed;
                    i.seeking = !0, Me.call(t, i, "seeking"), Promise.resolve(r && n.setVolume(0)).then(function () {
                        return n.setCurrentTime(e)
                    }).then(function () {
                        return r && n.pause()
                    }).then(function () {
                        return r && n.setVolume(o)
                    }).catch(function () {})
                }
            });
            var g = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function () {
                    return g
                },
                set: function (e) {
                    t.embed.setPlaybackRate(e).then(function () {
                        g = e, Me.call(t, t.media, "ratechange")
                    }).catch(function () {
                        t.options.speed = [1]
                    })
                }
            });
            var y = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function () {
                    return y
                },
                set: function (e) {
                    t.embed.setVolume(e).then(function () {
                        y = e, Me.call(t, t.media, "volumechange")
                    })
                }
            });
            var b = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function () {
                    return b
                },
                set: function (e) {
                    var n = !!W(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then(function () {
                        b = n, Me.call(t, t.media, "volumechange")
                    })
                }
            });
            var v, w = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function () {
                    return w
                },
                set: function (e) {
                    var n = W(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then(function () {
                        w = n
                    })
                }
            }), t.embed.getVideoUrl().then(function (e) {
                v = e, $e.setDownloadUrl.call(t)
            }).catch(function (t) {
                e.debug.warn(t)
            }), Object.defineProperty(t.media, "currentSrc", {
                get: function () {
                    return v
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function () {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function (n) {
                var i = s(n, 2),
                    a = i[0],
                    o = i[1];
                t.embed.ratio = [a, o], _e.call(e)
            }), t.embed.setAutopause(t.config.autopause).then(function (e) {
                t.config.autopause = e
            }), t.embed.getVideoTitle().then(function (n) {
                t.config.title = n, lt.setTitle.call(e)
            }), t.embed.getCurrentTime().then(function (e) {
                f = e, Me.call(t, t.media, "timeupdate")
            }), t.embed.getDuration().then(function (e) {
                t.media.duration = e, Me.call(t, t.media, "durationchange")
            }), t.embed.getTextTracks().then(function (e) {
                t.media.textTracks = e, Ze.setup.call(t)
            }), t.embed.on("cuechange", function (e) {
                var n = e.cues,
                    i = (void 0 === n ? [] : n).map(function (e) {
                        return function (e) {
                            var t = document.createDocumentFragment(),
                                n = document.createElement("div");
                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                        }(e.text)
                    });
                Ze.updateCues.call(t, i)
            }), t.embed.on("loaded", function () {
                t.embed.getPaused().then(function (e) {
                    ht.call(t, !e), e || Me.call(t, t.media, "playing")
                }), Q(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
            }), t.embed.on("bufferstart", function () {
                Me.call(t, t.media, "waiting")
            }), t.embed.on("bufferend", function () {
                Me.call(t, t.media, "playing")
            }), t.embed.on("play", function () {
                ht.call(t, !0), Me.call(t, t.media, "playing")
            }), t.embed.on("pause", function () {
                ht.call(t, !1)
            }), t.embed.on("timeupdate", function (e) {
                t.media.seeking = !1, f = e.seconds, Me.call(t, t.media, "timeupdate")
            }), t.embed.on("progress", function (e) {
                t.media.buffered = e.percent, Me.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && Me.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function (e) {
                    e !== t.media.duration && (t.media.duration = e, Me.call(t, t.media, "durationchange"))
                })
            }), t.embed.on("seeked", function () {
                t.media.seeking = !1, Me.call(t, t.media, "seeked")
            }), t.embed.on("ended", function () {
                t.media.paused = !0, Me.call(t, t.media, "ended")
            }), t.embed.on("error", function (e) {
                t.media.error = e, Me.call(t, t.media, "error")
            }), n.customControls && setTimeout(function () {
                return lt.build.call(t)
            }, 0)
        }
    };

    function pt(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, Me.call(this, this.media, e ? "play" : "pause"))
    }

    function ft(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var gt, yt = {
            setup: function () {
                var e = this;
                if (fe(this.elements.wrapper, this.config.classNames.embed, !0), V(window.YT) && z(window.YT.Player)) yt.ready.call(this);
                else {
                    var t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function () {
                        z(t) && t(), yt.ready.call(e)
                    }, dt(this.config.urls.youtube.sdk).catch(function (t) {
                        e.debug.warn("YouTube API failed to load", t)
                    })
                }
            },
            getTitle: function (e) {
                var t = this;
                We(qe(this.config.urls.youtube.api, e)).then(function (e) {
                    if (V(e)) {
                        var n = e.title,
                            i = e.height,
                            a = e.width;
                        t.config.title = n, lt.setTitle.call(t), t.embed.ratio = [a, i]
                    }
                    _e.call(t)
                }).catch(function () {
                    _e.call(t)
                })
            },
            ready: function () {
                var e = this,
                    t = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                if (ee(n) || !n.startsWith("youtube-")) {
                    var i = e.media.getAttribute("src");
                    ee(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                    var a, o, r = ee(a = i) ? null : a.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : a,
                        s = le("div", {
                            id: (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                    if (e.media = he(s, e.media), t.customControls) {
                        var l = function (e) {
                            return "https://i.ytimg.com/vi/".concat(r, "/").concat(e, "default.jpg")
                        };
                        st(l("maxres"), 121).catch(function () {
                            return st(l("sd"), 121)
                        }).catch(function () {
                            return st(l("hq"))
                        }).then(function (t) {
                            return lt.setPoster.call(e, t.src)
                        }).then(function (t) {
                            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                        }).catch(function () {})
                    }
                    e.embed = new window.YT.Player(e.media, {
                        videoId: r,
                        host: ft(t),
                        playerVars: oe({}, {
                            autoplay: e.config.autoplay ? 1 : 0,
                            hl: e.config.hl,
                            controls: e.supported.ui && t.customControls ? 0 : 1,
                            disablekb: 1,
                            playsinline: e.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: e.captions.active ? 1 : 0,
                            cc_lang_pref: e.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, t),
                        events: {
                            onError: function (t) {
                                if (!e.media.error) {
                                    var n = t.data,
                                        i = {
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        } [n] || "An unknown error occured";
                                    e.media.error = {
                                        code: n,
                                        message: i
                                    }, Me.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function (t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), Me.call(e, e.media, "ratechange")
                            },
                            onReady: function (n) {
                                if (!z(e.media.play)) {
                                    var i = n.target;
                                    yt.getTitle.call(e, r), e.media.play = function () {
                                        pt.call(e, !0), i.playVideo()
                                    }, e.media.pause = function () {
                                        pt.call(e, !1), i.pauseVideo()
                                    }, e.media.stop = function () {
                                        i.stopVideo()
                                    }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function () {
                                            return Number(i.getCurrentTime())
                                        },
                                        set: function (t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, Me.call(e, e.media, "seeking"), i.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function () {
                                            return i.getPlaybackRate()
                                        },
                                        set: function (e) {
                                            i.setPlaybackRate(e)
                                        }
                                    });
                                    var a = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function () {
                                            return a
                                        },
                                        set: function (t) {
                                            a = t, i.setVolume(100 * a), Me.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var o = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function () {
                                            return o
                                        },
                                        set: function (t) {
                                            var n = W(t) ? t : o;
                                            o = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * a), Me.call(e, e.media, "volumechange")
                                        }
                                    }), Object.defineProperty(e.media, "currentSrc", {
                                        get: function () {
                                            return i.getVideoUrl()
                                        }
                                    }), Object.defineProperty(e.media, "ended", {
                                        get: function () {
                                            return e.currentTime === e.duration
                                        }
                                    });
                                    var s = i.getAvailablePlaybackRates();
                                    e.options.speed = s.filter(function (t) {
                                        return e.config.speed.options.includes(t)
                                    }), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), Me.call(e, e.media, "timeupdate"), Me.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function () {
                                        e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && Me.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), Me.call(e, e.media, "canplaythrough"))
                                    }, 200), t.customControls && setTimeout(function () {
                                        return lt.build.call(e)
                                    }, 50)
                                }
                            },
                            onStateChange: function (n) {
                                var i = n.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, Me.call(e, e.media, "seeked")), n.data) {
                                    case -1:
                                        Me.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), Me.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        pt.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : Me.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (pt.call(e, !0), Me.call(e, e.media, "playing"), e.timers.playing = setInterval(function () {
                                            Me.call(e, e.media, "timeupdate")
                                        }, 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), Me.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), pt.call(e, !1);
                                        break;
                                    case 3:
                                        Me.call(e, e.media, "waiting")
                                }
                                Me.call(e, e.elements.container, "statechange", !1, {
                                    code: n.data
                                })
                            }
                        }
                    })
                }
            }
        },
        bt = {
            setup: function () {
                this.media ? (fe(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), fe(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && fe(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = le("div", {
                    class: this.config.classNames.video
                }), re(this.media, this.elements.wrapper), this.elements.poster = le("div", {
                    class: this.config.classNames.poster,
                    hidden: ""
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? je.setup.call(this) : this.isYouTube ? yt.setup.call(this) : this.isVimeo && mt.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        vt = function () {
            function e(n) {
                var i = this;
                t(this, e), a(this, "load", function () {
                    i.enabled && (V(window.google) && V(window.google.ima) ? i.ready() : dt(i.player.config.urls.googleIMA.sdk).then(function () {
                        i.ready()
                    }).catch(function () {
                        i.trigger("error", new Error("Google IMA SDK failed to load"))
                    }))
                }), a(this, "ready", function () {
                    var e;
                    i.enabled || ((e = i).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), i.startSafetyTimer(12e3, "ready()"), i.managerPromise.then(function () {
                        i.clearSafetyTimer("onAdsManagerLoaded()")
                    }), i.listeners(), i.setupIMA()
                }), a(this, "setupIMA", function () {
                    i.elements.container = le("div", {
                        class: i.player.config.classNames.ads
                    }), i.player.elements.container.appendChild(i.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(i.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(i.player.config.playsinline), i.elements.displayContainer = new google.ima.AdDisplayContainer(i.elements.container, i.player.media), i.loader = new google.ima.AdsLoader(i.elements.displayContainer), i.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function (e) {
                        return i.onAdsManagerLoaded(e)
                    }, !1), i.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                        return i.onAdError(e)
                    }, !1), i.requestAds()
                }), a(this, "requestAds", function () {
                    var e = i.player.elements.container;
                    try {
                        var t = new google.ima.AdsRequest;
                        t.adTagUrl = i.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!i.player.muted), i.loader.requestAds(t)
                    } catch (e) {
                        i.onAdError(e)
                    }
                }), a(this, "pollCountdown", function () {
                    if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(i.countdownTimer), void i.elements.container.removeAttribute("data-badge-text");
                    i.countdownTimer = setInterval(function () {
                        var e = Xe(Math.max(i.manager.getRemainingTime(), 0)),
                            t = "".concat(Be("advertisement", i.player.config), " - ").concat(e);
                        i.elements.container.setAttribute("data-badge-text", t)
                    }, 100)
                }), a(this, "onAdsManagerLoaded", function (e) {
                    if (i.enabled) {
                        var t = new google.ima.AdsRenderingSettings;
                        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, i.manager = e.getAdsManager(i.player, t), i.cuePoints = i.manager.getCuePoints(), i.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function (e) {
                            return i.onAdError(e)
                        }), Object.keys(google.ima.AdEvent.Type).forEach(function (e) {
                            i.manager.addEventListener(google.ima.AdEvent.Type[e], function (e) {
                                return i.onAdEvent(e)
                            })
                        }), i.trigger("loaded")
                    }
                }), a(this, "addCuePoints", function () {
                    ee(i.cuePoints) || i.cuePoints.forEach(function (e) {
                        if (0 !== e && -1 !== e && e < i.player.duration) {
                            var t = i.player.elements.progress;
                            if (Q(t)) {
                                var n = 100 / i.player.duration * e,
                                    a = le("span", {
                                        class: i.player.config.classNames.cues
                                    });
                                a.style.left = "".concat(n.toString(), "%"), t.appendChild(a)
                            }
                        }
                    })
                }), a(this, "onAdEvent", function (e) {
                    var t = i.player.elements.container,
                        n = e.getAd(),
                        a = e.getAdData();
                    switch (function (e) {
                        Me.call(i.player, i.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                    }(e.type), e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            i.trigger("loaded"), i.pollCountdown(!0), n.isLinear() || (n.width = t.offsetWidth, n.height = t.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            i.manager.setVolume(i.player.volume);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            i.player.ended ? i.loadAds() : i.loader.contentComplete();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            i.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            i.pollCountdown(), i.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.LOG:
                            a.adError && i.player.debug.warn("Non-fatal ad error: ".concat(a.adError.getMessage()))
                    }
                }), a(this, "onAdError", function (e) {
                    i.cancel(), i.player.debug.warn("Ads error", e)
                }), a(this, "listeners", function () {
                    var e, t = i.player.elements.container;
                    i.player.on("canplay", function () {
                        i.addCuePoints()
                    }), i.player.on("ended", function () {
                        i.loader.contentComplete()
                    }), i.player.on("timeupdate", function () {
                        e = i.player.currentTime
                    }), i.player.on("seeked", function () {
                        var t = i.player.currentTime;
                        ee(i.cuePoints) || i.cuePoints.forEach(function (n, a) {
                            e < n && n < t && (i.manager.discardAdBreak(), i.cuePoints.splice(a, 1))
                        })
                    }), window.addEventListener("resize", function () {
                        i.manager && i.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    })
                }), a(this, "play", function () {
                    var e = i.player.elements.container;
                    i.managerPromise || i.resumeContent(), i.managerPromise.then(function () {
                        i.manager.setVolume(i.player.volume), i.elements.displayContainer.initialize();
                        try {
                            i.initialized || (i.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), i.manager.start()), i.initialized = !0
                        } catch (e) {
                            i.onAdError(e)
                        }
                    }).catch(function () {})
                }), a(this, "resumeContent", function () {
                    i.elements.container.style.zIndex = "", i.playing = !1, xe(i.player.media.play())
                }), a(this, "pauseContent", function () {
                    i.elements.container.style.zIndex = 3, i.playing = !0, i.player.media.pause()
                }), a(this, "cancel", function () {
                    i.initialized && i.resumeContent(), i.trigger("error"), i.loadAds()
                }), a(this, "loadAds", function () {
                    i.managerPromise.then(function () {
                        i.manager && i.manager.destroy(), i.managerPromise = new Promise(function (e) {
                            i.on("loaded", e), i.player.debug.log(i.manager)
                        }), i.initialized = !1, i.requestAds()
                    }).catch(function () {})
                }), a(this, "trigger", function (e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++) n[a - 1] = arguments[a];
                    var o = i.events[e];
                    K(o) && o.forEach(function (e) {
                        z(e) && e.apply(i, n)
                    })
                }), a(this, "on", function (e, t) {
                    return K(i.events[e]) || (i.events[e] = []), i.events[e].push(t), i
                }), a(this, "startSafetyTimer", function (e, t) {
                    i.player.debug.log("Safety timer invoked from: ".concat(t)), i.safetyTimer = setTimeout(function () {
                        i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
                    }, e)
                }), a(this, "clearSafetyTimer", function (e) {
                    R(i.safetyTimer) || (i.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(i.safetyTimer), i.safetyTimer = null)
                }), this.player = n, this.config = n.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function (e, t) {
                    i.on("loaded", e), i.on("error", t)
                }), this.load()
            }
            return i(e, [{
                key: "enabled",
                get: function () {
                    var e = this.config;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!ee(e.publisherId) || Z(e.tagUrl))
                }
            }, {
                key: "tagUrl",
                get: function () {
                    var e = this.config;
                    if (Z(e.tagUrl)) return e.tagUrl;
                    var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(Ge(t))
                }
            }]), e
        }(),
        wt = function (e, t) {
            var n = {};
            return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
        },
        kt = function () {
            function e(n) {
                var i = this;
                t(this, e), a(this, "load", function () {
                    i.player.elements.display.seekTooltip && (i.player.elements.display.seekTooltip.hidden = i.enabled), i.enabled && i.getThumbnails().then(function () {
                        i.enabled && (i.render(), i.determineContainerAutoSizing(), i.loaded = !0)
                    })
                }), a(this, "getThumbnails", function () {
                    return new Promise(function (e) {
                        var t = i.player.config.previewThumbnails.src;
                        if (ee(t)) throw new Error("Missing previewThumbnails.src config attribute");
                        var n = function () {
                            i.thumbnails.sort(function (e, t) {
                                return e.height - t.height
                            }), i.player.debug.log("Preview thumbnails", i.thumbnails), e()
                        };
                        if (z(t)) t(function (e) {
                            i.thumbnails = e, n()
                        });
                        else {
                            var a = (U(t) ? [t] : t).map(function (e) {
                                return i.getThumbnail(e)
                            });
                            Promise.all(a).then(n)
                        }
                    })
                }), a(this, "getThumbnail", function (e) {
                    return new Promise(function (t) {
                        We(e).then(function (n) {
                            var a, o, r = {
                                frames: (a = n, o = [], a.split(/\r\n\r\n|\n\n|\r\r/).forEach(function (e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach(function (e) {
                                        if (B(t.startTime)) {
                                            if (!ee(e.trim()) && ee(t.text)) {
                                                var n = e.trim().split("#xywh="),
                                                    i = s(n, 1);
                                                if (t.text = i[0], n[1]) {
                                                    var a = s(n[1].split(","), 4);
                                                    t.x = a[0], t.y = a[1], t.w = a[2], t.h = a[3]
                                                }
                                            }
                                        } else {
                                            var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                            o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                        }
                                    }), t.text && o.push(t)
                                }), o),
                                height: null,
                                urlPrefix: ""
                            };
                            r.frames[0].text.startsWith("/") || r.frames[0].text.startsWith("http://") || r.frames[0].text.startsWith("https://") || (r.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            var l = new Image;
                            l.onload = function () {
                                r.height = l.naturalHeight, r.width = l.naturalWidth, i.thumbnails.push(r), t()
                            }, l.src = r.urlPrefix + r.frames[0].text
                        })
                    })
                }), a(this, "startMove", function (e) {
                    if (i.loaded && X(e) && ["touchmove", "mousemove"].includes(e.type) && i.player.media.duration) {
                        if ("touchmove" === e.type) i.seekTime = i.player.media.duration * (i.player.elements.inputs.seek.value / 100);
                        else {
                            var t = i.player.elements.progress.getBoundingClientRect(),
                                n = 100 / t.width * (e.pageX - t.left);
                            i.seekTime = i.player.media.duration * (n / 100), i.seekTime < 0 && (i.seekTime = 0), i.seekTime > i.player.media.duration - 1 && (i.seekTime = i.player.media.duration - 1), i.mousePosX = e.pageX, i.elements.thumb.time.innerText = Xe(i.seekTime)
                        }
                        i.showImageAtCurrentTime()
                    }
                }), a(this, "endMove", function () {
                    i.toggleThumbContainer(!1, !0)
                }), a(this, "startScrubbing", function (e) {
                    (R(e.button) || !1 === e.button || 0 === e.button) && (i.mouseDown = !0, i.player.media.duration && (i.toggleScrubbingContainer(!0), i.toggleThumbContainer(!1, !0), i.showImageAtCurrentTime()))
                }), a(this, "endScrubbing", function () {
                    i.mouseDown = !1, Math.ceil(i.lastTime) === Math.ceil(i.player.media.currentTime) ? i.toggleScrubbingContainer(!1) : Ne.call(i.player, i.player.media, "timeupdate", function () {
                        i.mouseDown || i.toggleScrubbingContainer(!1)
                    })
                }), a(this, "listeners", function () {
                    i.player.on("play", function () {
                        i.toggleThumbContainer(!1, !0)
                    }), i.player.on("seeked", function () {
                        i.toggleThumbContainer(!1)
                    }), i.player.on("timeupdate", function () {
                        i.lastTime = i.player.media.currentTime
                    })
                }), a(this, "render", function () {
                    i.elements.thumb.container = le("div", {
                        class: i.player.config.classNames.previewThumbnails.thumbContainer
                    }), i.elements.thumb.imageContainer = le("div", {
                        class: i.player.config.classNames.previewThumbnails.imageContainer
                    }), i.elements.thumb.container.appendChild(i.elements.thumb.imageContainer);
                    var e = le("div", {
                        class: i.player.config.classNames.previewThumbnails.timeContainer
                    });
                    i.elements.thumb.time = le("span", {}, "00:00"), e.appendChild(i.elements.thumb.time), i.elements.thumb.container.appendChild(e), Q(i.player.elements.progress) && i.player.elements.progress.appendChild(i.elements.thumb.container), i.elements.scrubbing.container = le("div", {
                        class: i.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), i.player.elements.wrapper.appendChild(i.elements.scrubbing.container)
                }), a(this, "destroy", function () {
                    i.elements.thumb.container && i.elements.thumb.container.remove(), i.elements.scrubbing.container && i.elements.scrubbing.container.remove()
                }), a(this, "showImageAtCurrentTime", function () {
                    i.mouseDown ? i.setScrubbingContainerSize() : i.setThumbContainerSizeAndPos();
                    var e = i.thumbnails[0].frames.findIndex(function (e) {
                            return i.seekTime >= e.startTime && i.seekTime <= e.endTime
                        }),
                        t = e >= 0,
                        n = 0;
                    i.mouseDown || i.toggleThumbContainer(t), t && (i.thumbnails.forEach(function (t, a) {
                        i.loadedImages.includes(t.frames[e].text) && (n = a)
                    }), e !== i.showingThumb && (i.showingThumb = e, i.loadImage(n)))
                }), a(this, "loadImage", function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = i.showingThumb,
                        n = i.thumbnails[e],
                        a = n.urlPrefix,
                        o = n.frames[t],
                        r = n.frames[t].text,
                        s = a + r;
                    if (i.currentImageElement && i.currentImageElement.dataset.filename === r) i.showImage(i.currentImageElement, o, e, t, r, !1), i.currentImageElement.dataset.index = t, i.removeOldImages(i.currentImageElement);
                    else {
                        i.loadingImage && i.usingSprites && (i.loadingImage.onload = null);
                        var l = new Image;
                        l.src = s, l.dataset.index = t, l.dataset.filename = r, i.showingThumbFilename = r, i.player.debug.log("Loading image: ".concat(s)), l.onload = function () {
                            return i.showImage(l, o, e, t, r, !0)
                        }, i.loadingImage = l, i.removeOldImages(l)
                    }
                }), a(this, "showImage", function (e, t, n, a, o) {
                    var r = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    i.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(a, ". qual: ").concat(n, ". newimg: ").concat(r)), i.setImageSizeAndOffset(e, t), r && (i.currentImageContainer.appendChild(e), i.currentImageElement = e, i.loadedImages.includes(o) || i.loadedImages.push(o)), i.preloadNearby(a, !0).then(i.preloadNearby(a, !1)).then(i.getHigherQuality(n, e, t, o))
                }), a(this, "removeOldImages", function (e) {
                    Array.from(i.currentImageContainer.children).forEach(function (t) {
                        if ("img" === t.tagName.toLowerCase()) {
                            var n = i.usingSprites ? 500 : 1e3;
                            if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                t.dataset.deleting = !0;
                                var a = i.currentImageContainer;
                                setTimeout(function () {
                                    a.removeChild(t), i.player.debug.log("Removing thumb: ".concat(t.dataset.filename))
                                }, n)
                            }
                        }
                    })
                }), a(this, "preloadNearby", function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise(function (n) {
                        setTimeout(function () {
                            var a = i.thumbnails[0].frames[e].text;
                            if (i.showingThumbFilename === a) {
                                var o;
                                o = t ? i.thumbnails[0].frames.slice(e) : i.thumbnails[0].frames.slice(0, e).reverse();
                                var r = !1;
                                o.forEach(function (e) {
                                    var t = e.text;
                                    if (t !== a && !i.loadedImages.includes(t)) {
                                        r = !0, i.player.debug.log("Preloading thumb filename: ".concat(t));
                                        var o = i.thumbnails[0].urlPrefix + t,
                                            s = new Image;
                                        s.src = o, s.onload = function () {
                                            i.player.debug.log("Preloaded thumb filename: ".concat(t)), i.loadedImages.includes(t) || i.loadedImages.push(t), n()
                                        }
                                    }
                                }), r || n()
                            }
                        }, 300)
                    })
                }), a(this, "getHigherQuality", function (e, t, n, a) {
                    if (e < i.thumbnails.length - 1) {
                        var o = t.naturalHeight;
                        i.usingSprites && (o = n.h), o < i.thumbContainerHeight && setTimeout(function () {
                            i.showingThumbFilename === a && (i.player.debug.log("Showing higher quality thumb for: ".concat(a)), i.loadImage(e + 1))
                        }, 300)
                    }
                }), a(this, "toggleThumbContainer", function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = i.player.config.classNames.previewThumbnails.thumbContainerShown;
                    i.elements.thumb.container.classList.toggle(n, e), !e && t && (i.showingThumb = null, i.showingThumbFilename = null)
                }), a(this, "toggleScrubbingContainer", function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = i.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    i.elements.scrubbing.container.classList.toggle(t, e), e || (i.showingThumb = null, i.showingThumbFilename = null)
                }), a(this, "determineContainerAutoSizing", function () {
                    (i.elements.thumb.imageContainer.clientHeight > 20 || i.elements.thumb.imageContainer.clientWidth > 20) && (i.sizeSpecifiedInCSS = !0)
                }), a(this, "setThumbContainerSizeAndPos", function () {
                    if (i.sizeSpecifiedInCSS) {
                        if (i.elements.thumb.imageContainer.clientHeight > 20 && i.elements.thumb.imageContainer.clientWidth < 20) {
                            var e = Math.floor(i.elements.thumb.imageContainer.clientHeight * i.thumbAspectRatio);
                            i.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                        } else if (i.elements.thumb.imageContainer.clientHeight < 20 && i.elements.thumb.imageContainer.clientWidth > 20) {
                            var t = Math.floor(i.elements.thumb.imageContainer.clientWidth / i.thumbAspectRatio);
                            i.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                        }
                    } else {
                        var n = Math.floor(i.thumbContainerHeight * i.thumbAspectRatio);
                        i.elements.thumb.imageContainer.style.height = "".concat(i.thumbContainerHeight, "px"), i.elements.thumb.imageContainer.style.width = "".concat(n, "px")
                    }
                    i.setThumbContainerPos()
                }), a(this, "setThumbContainerPos", function () {
                    var e = i.player.elements.progress.getBoundingClientRect(),
                        t = i.player.elements.container.getBoundingClientRect(),
                        n = i.elements.thumb.container,
                        a = t.left - e.left + 10,
                        o = t.right - e.left - n.clientWidth - 10,
                        r = i.mousePosX - e.left - n.clientWidth / 2;
                    r < a && (r = a), r > o && (r = o), n.style.left = "".concat(r, "px")
                }), a(this, "setScrubbingContainerSize", function () {
                    var e = wt(i.thumbAspectRatio, {
                            width: i.player.media.clientWidth,
                            height: i.player.media.clientHeight
                        }),
                        t = e.width,
                        n = e.height;
                    i.elements.scrubbing.container.style.width = "".concat(t, "px"), i.elements.scrubbing.container.style.height = "".concat(n, "px")
                }), a(this, "setImageSizeAndOffset", function (e, t) {
                    if (i.usingSprites) {
                        var n = i.thumbContainerHeight / t.h;
                        e.style.height = "".concat(e.naturalHeight * n, "px"), e.style.width = "".concat(e.naturalWidth * n, "px"), e.style.left = "-".concat(t.x * n, "px"), e.style.top = "-".concat(t.y * n, "px")
                    }
                }), this.player = n, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            return i(e, [{
                key: "enabled",
                get: function () {
                    return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
                }
            }, {
                key: "currentImageContainer",
                get: function () {
                    return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
                }
            }, {
                key: "usingSprites",
                get: function () {
                    return Object.keys(this.thumbnails[0].frames[0]).includes("w")
                }
            }, {
                key: "thumbAspectRatio",
                get: function () {
                    return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
                }
            }, {
                key: "thumbContainerHeight",
                get: function () {
                    return this.mouseDown ? wt(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    }).height : this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
                }
            }, {
                key: "currentImageElement",
                get: function () {
                    return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
                },
                set: function (e) {
                    this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
                }
            }]), e
        }(),
        Tt = {
            insertElements: function (e, t) {
                var n = this;
                U(t) ? ce(e, this.media, {
                    src: t
                }) : K(t) && t.forEach(function (t) {
                    ce(e, n.media, t)
                })
            },
            change: function (e) {
                var t = this;
                ae(e, "sources.length") ? (je.cancelRequests.call(this), this.destroy.call(this, function () {
                    t.options.quality = [], ue(t.media), t.media = null, Q(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        i = e.type,
                        a = s(n, 1)[0],
                        o = a.provider,
                        r = void 0 === o ? nt.html5 : o,
                        l = a.src,
                        c = "html5" === r ? i : "div",
                        u = "html5" === r ? {} : {
                            src: l
                        };
                    Object.assign(t, {
                        provider: r,
                        type: i,
                        supported: Ce.check(i, r, t.config.playsinline),
                        media: le(c, u)
                    }), t.elements.container.appendChild(t.media), W(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), ee(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), lt.addStyleHook.call(t), t.isHTML5 && Tt.insertElements.call(t, "source", n), t.config.title = e.title, bt.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && Tt.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && lt.build.call(t), t.isHTML5 && t.media.load(), ee(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new kt(t))), t.fullscreen.update()
                }, !0)) : this.debug.warn("Invalid source format")
            }
        },
        Ct = function () {
            function e(n, i) {
                var o = this;
                if (t(this, e), a(this, "play", function () {
                        return z(o.media.play) ? (o.ads && o.ads.enabled && o.ads.managerPromise.then(function () {
                            return o.ads.play()
                        }).catch(function () {
                            return xe(o.media.play())
                        }), o.media.play()) : null
                    }), a(this, "pause", function () {
                        return o.playing && z(o.media.pause) ? o.media.pause() : null
                    }), a(this, "togglePlay", function (e) {
                        return (W(e) ? e : !o.playing) ? o.play() : o.pause()
                    }), a(this, "stop", function () {
                        o.isHTML5 ? (o.pause(), o.restart()) : z(o.media.stop) && o.media.stop()
                    }), a(this, "restart", function () {
                        o.currentTime = 0
                    }), a(this, "rewind", function (e) {
                        o.currentTime -= B(e) ? e : o.config.seekTime
                    }), a(this, "forward", function (e) {
                        o.currentTime += B(e) ? e : o.config.seekTime
                    }), a(this, "increaseVolume", function (e) {
                        var t = o.media.muted ? 0 : o.volume;
                        o.volume = t + (B(e) ? e : 0)
                    }), a(this, "decreaseVolume", function (e) {
                        o.increaseVolume(-e)
                    }), a(this, "airplay", function () {
                        Ce.airplay && o.media.webkitShowPlaybackTargetPicker()
                    }), a(this, "toggleControls", function (e) {
                        if (o.supported.ui && !o.isAudio) {
                            var t = ge(o.elements.container, o.config.classNames.hideControls),
                                n = void 0 === e ? void 0 : !e,
                                i = fe(o.elements.container, o.config.classNames.hideControls, n);
                            if (i && K(o.config.controls) && o.config.controls.includes("settings") && !ee(o.config.settings) && $e.toggleMenu.call(o, !1), i !== t) {
                                var a = i ? "controlshidden" : "controlsshown";
                                Me.call(o, o.media, a)
                            }
                            return !i
                        }
                        return !1
                    }), a(this, "on", function (e, t) {
                        Pe.call(o, o.elements.container, e, t)
                    }), a(this, "once", function (e, t) {
                        Ne.call(o, o.elements.container, e, t)
                    }), a(this, "off", function (e, t) {
                        Ee(o.elements.container, e, t)
                    }), a(this, "destroy", function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (o.ready) {
                            var n = function () {
                                document.body.style.overflow = "", o.embed = null, t ? (Object.keys(o.elements).length && (ue(o.elements.buttons.play), ue(o.elements.captions), ue(o.elements.controls), ue(o.elements.wrapper), o.elements.buttons.play = null, o.elements.captions = null, o.elements.controls = null, o.elements.wrapper = null), z(e) && e()) : (function () {
                                    this && this.eventListeners && (this.eventListeners.forEach(function (e) {
                                        var t = e.element,
                                            n = e.type,
                                            i = e.callback,
                                            a = e.options;
                                        t.removeEventListener(n, i, a)
                                    }), this.eventListeners = [])
                                }.call(o), je.cancelRequests.call(o), he(o.elements.original, o.elements.container), Me.call(o, o.elements.original, "destroyed", !0), z(e) && e.call(o.elements.original), o.ready = !1, setTimeout(function () {
                                    o.elements = null, o.media = null
                                }, 200))
                            };
                            o.stop(), clearTimeout(o.timers.loading), clearTimeout(o.timers.controls), clearTimeout(o.timers.resized), o.isHTML5 ? (lt.toggleNativeControls.call(o, !0), n()) : o.isYouTube ? (clearInterval(o.timers.buffering), clearInterval(o.timers.playing), null !== o.embed && z(o.embed.destroy) && o.embed.destroy(), n()) : o.isVimeo && (null !== o.embed && o.embed.unload().then(n), setTimeout(n, 200))
                        }
                    }), a(this, "supports", function (e) {
                        return Ce.mime.call(o, e)
                    }), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = Ce.touch, this.media = n, U(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Y(this.media) || K(this.media)) && (this.media = this.media[0]), this.config = oe({}, et, e.defaults, i || {}, function () {
                        try {
                            return JSON.parse(o.media.getAttribute("data-plyr-config"))
                        } catch (e) {
                            return {}
                        }
                    }()), this.elements = {
                        container: null,
                        fullscreen: null,
                        captions: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            popup: null,
                            menu: null,
                            panels: {},
                            buttons: {}
                        }
                    }, this.captions = {
                        active: null,
                        currentTrack: -1,
                        meta: new WeakMap
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: []
                    }, this.debug = new ot(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", Ce), !R(this.media) && Q(this.media))
                    if (this.media.plyr) this.debug.warn("Target already setup");
                    else if (this.config.enabled)
                    if (Ce.check().api) {
                        var r = this.media.cloneNode(!0);
                        r.autoplay = !1, this.elements.original = r;
                        var s = this.media.tagName.toLowerCase(),
                            l = null,
                            c = null;
                        switch (s) {
                            case "div":
                                if (l = this.media.querySelector("iframe"), Q(l)) {
                                    if (c = Je(l.getAttribute("src")), this.provider = function (e) {
                                            return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? nt.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? nt.vimeo : null
                                        }(c.toString()), this.elements.container = this.media, this.media = l, this.elements.container.className = "", c.search.length) {
                                        var u = ["1", "true"];
                                        u.includes(c.searchParams.get("autoplay")) && (this.config.autoplay = !0), u.includes(c.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = u.includes(c.searchParams.get("playsinline")), this.config.youtube.hl = c.searchParams.get("hl")) : this.config.playsinline = !0
                                    }
                                } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                                if (ee(this.provider) || !Object.values(nt).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                                this.type = it;
                                break;
                            case "video":
                            case "audio":
                                this.type = s, this.provider = nt.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                                break;
                            default:
                                return void this.debug.error("Setup failed: unsupported type")
                        }
                        this.supported = Ce.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new ct(this), this.storage = new Ue(this), this.media.plyr = this, Q(this.elements.container) || (this.elements.container = le("div", {
                            tabindex: 0
                        }), re(this.media, this.elements.container)), lt.migrateStyles.call(this), lt.addStyleHook.call(this), bt.setup.call(this), this.config.debug && Pe.call(this, this.elements.container, this.config.events.join(" "), function (e) {
                            o.debug.log("event: ".concat(e.type))
                        }), this.fullscreen = new rt(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && lt.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new vt(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", function () {
                            return xe(o.play())
                        }), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new kt(this))) : this.debug.error("Setup failed: no support")
                    } else this.debug.error("Setup failed: no support");
                else this.debug.error("Setup failed: disabled by config");
                else this.debug.error("Setup failed: no suitable element passed")
            }
            return i(e, [{
                key: "toggleCaptions",
                value: function (e) {
                    Ze.toggle.call(this, e, !1)
                }
            }, {
                key: "isHTML5",
                get: function () {
                    return this.provider === nt.html5
                }
            }, {
                key: "isEmbed",
                get: function () {
                    return this.isYouTube || this.isVimeo
                }
            }, {
                key: "isYouTube",
                get: function () {
                    return this.provider === nt.youtube
                }
            }, {
                key: "isVimeo",
                get: function () {
                    return this.provider === nt.vimeo
                }
            }, {
                key: "isVideo",
                get: function () {
                    return this.type === it
                }
            }, {
                key: "isAudio",
                get: function () {
                    return "audio" === this.type
                }
            }, {
                key: "playing",
                get: function () {
                    return Boolean(this.ready && !this.paused && !this.ended)
                }
            }, {
                key: "paused",
                get: function () {
                    return Boolean(this.media.paused)
                }
            }, {
                key: "stopped",
                get: function () {
                    return Boolean(this.paused && 0 === this.currentTime)
                }
            }, {
                key: "ended",
                get: function () {
                    return Boolean(this.media.ended)
                }
            }, {
                key: "currentTime",
                set: function (e) {
                    if (this.duration) {
                        var t = B(e) && e > 0;
                        this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log("Seeking to ".concat(this.currentTime, " seconds"))
                    }
                },
                get: function () {
                    return Number(this.media.currentTime)
                }
            }, {
                key: "buffered",
                get: function () {
                    var e = this.media.buffered;
                    return B(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
                }
            }, {
                key: "seeking",
                get: function () {
                    return Boolean(this.media.seeking)
                }
            }, {
                key: "duration",
                get: function () {
                    var e = parseFloat(this.config.duration),
                        t = (this.media || {}).duration,
                        n = B(t) && t !== 1 / 0 ? t : 0;
                    return e || n
                }
            }, {
                key: "volume",
                set: function (e) {
                    var t = e;
                    U(t) && (t = Number(t)), B(t) || (t = this.storage.get("volume")), B(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !ee(e) && this.muted && t > 0 && (this.muted = !1)
                },
                get: function () {
                    return Number(this.media.volume)
                }
            }, {
                key: "muted",
                set: function (e) {
                    var t = e;
                    W(t) || (t = this.storage.get("muted")), W(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
                },
                get: function () {
                    return Boolean(this.media.muted)
                }
            }, {
                key: "hasAudio",
                get: function () {
                    return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
                }
            }, {
                key: "speed",
                set: function (e) {
                    var t = this,
                        n = null;
                    B(e) && (n = e), B(n) || (n = this.storage.get("speed")), B(n) || (n = this.config.speed.selected);
                    var i = this.minimumSpeed,
                        a = this.maximumSpeed;
                    n = function () {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                        return Math.min(Math.max(e, t), n)
                    }(n, i, a), this.config.speed.selected = n, setTimeout(function () {
                        t.media.playbackRate = n
                    }, 0)
                },
                get: function () {
                    return Number(this.media.playbackRate)
                }
            }, {
                key: "minimumSpeed",
                get: function () {
                    return this.isYouTube ? Math.min.apply(Math, l(this.options.speed)) : this.isVimeo ? .5 : .0625
                }
            }, {
                key: "maximumSpeed",
                get: function () {
                    return this.isYouTube ? Math.max.apply(Math, l(this.options.speed)) : this.isVimeo ? 2 : 16
                }
            }, {
                key: "quality",
                set: function (e) {
                    var t = this.config.quality,
                        n = this.options.quality;
                    if (n.length) {
                        var i = [!ee(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(B),
                            a = !0;
                        if (!n.includes(i)) {
                            var o = function (e, t) {
                                return K(e) && e.length ? e.reduce(function (e, n) {
                                    return Math.abs(n - t) < Math.abs(e - t) ? n : e
                                }) : null
                            }(n, i);
                            this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, a = !1
                        }
                        t.selected = i, this.media.quality = i, a && this.storage.set({
                            quality: i
                        })
                    }
                },
                get: function () {
                    return this.media.quality
                }
            }, {
                key: "loop",
                set: function (e) {
                    var t = W(e) ? e : this.config.loop.active;
                    this.config.loop.active = t, this.media.loop = t
                },
                get: function () {
                    return Boolean(this.media.loop)
                }
            }, {
                key: "source",
                set: function (e) {
                    Tt.change.call(this, e)
                },
                get: function () {
                    return this.media.currentSrc
                }
            }, {
                key: "download",
                get: function () {
                    var e = this.config.urls.download;
                    return Z(e) ? e : this.source
                },
                set: function (e) {
                    Z(e) && (this.config.urls.download = e, $e.setDownloadUrl.call(this))
                }
            }, {
                key: "poster",
                set: function (e) {
                    this.isVideo ? lt.setPoster.call(this, e, !1).catch(function () {}) : this.debug.warn("Poster can only be set for video")
                },
                get: function () {
                    return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
                }
            }, {
                key: "ratio",
                get: function () {
                    if (!this.isVideo) return null;
                    var e = Le(Oe.call(this));
                    return K(e) ? e.join(":") : e
                },
                set: function (e) {
                    this.isVideo ? U(e) && Ie(e) ? (this.config.ratio = e, _e.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
                }
            }, {
                key: "autoplay",
                set: function (e) {
                    var t = W(e) ? e : this.config.autoplay;
                    this.config.autoplay = t
                },
                get: function () {
                    return Boolean(this.config.autoplay)
                }
            }, {
                key: "currentTrack",
                set: function (e) {
                    Ze.set.call(this, e, !1)
                },
                get: function () {
                    var e = this.captions,
                        t = e.toggled,
                        n = e.currentTrack;
                    return t ? n : -1
                }
            }, {
                key: "language",
                set: function (e) {
                    Ze.setLanguage.call(this, e, !1)
                },
                get: function () {
                    return (Ze.getCurrentTrack.call(this) || {}).language
                }
            }, {
                key: "pip",
                set: function (e) {
                    if (Ce.pip) {
                        var t = W(e) ? e : !this.pip;
                        z(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? tt : "inline"), z(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                    }
                },
                get: function () {
                    return Ce.pip ? ee(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === tt : null
                }
            }], [{
                key: "supported",
                value: function (e, t, n) {
                    return Ce.check(e, t, n)
                }
            }, {
                key: "loadSprite",
                value: function (e, t) {
                    return ze(e, t)
                }
            }, {
                key: "setup",
                value: function (t) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        i = null;
                    return U(t) ? i = Array.from(document.querySelectorAll(t)) : Y(t) ? i = Array.from(t) : K(t) && (i = t.filter(Q)), ee(i) ? null : i.map(function (t) {
                        return new e(t, n)
                    })
                }
            }]), e
        }();
    return Ct.defaults = (gt = et, JSON.parse(JSON.stringify(gt))), Ct
});
