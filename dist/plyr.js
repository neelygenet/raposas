"object" == typeof navigator && function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
}(this, (function () {
    "use strict";
    ! function () {
        if ("undefined" != typeof window) try {
            var e = new window.CustomEvent("test", {
                cancelable: !0
            });
            if (e.preventDefault(), !0 !== e.defaultPrevented) throw new Error("Could not prevent default")
        } catch (e) {
            var t = function (e, t) {
                var n, i;
                return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent("CustomEvent")).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i = n.preventDefault, n.preventDefault = function () {
                    i.call(this);
                    try {
                        Object.defineProperty(this, "defaultPrevented", {
                            get: function () {
                                return !0
                            }
                        })
                    } catch (e) {
                        this.defaultPrevented = !0
                    }
                }, n
            };
            t.prototype = window.Event.prototype, window.CustomEvent = t
        }
    }();
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = function (e) {
            return e && e.Math == Math && e
        },
        i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
            return this
        }() || Function("return this")(),
        r = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        o = !r((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        a = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        l = {
            f: s && !a.call({
                1: 2
            }, 1) ? function (e) {
                var t = s(this, e);
                return !!t && t.enumerable
            } : a
        },
        c = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        u = {}.toString,
        f = function (e) {
            return u.call(e).slice(8, -1)
        },
        d = "".split,
        h = r((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == f(e) ? d.call(e, "") : Object(e)
        } : Object,
        p = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        m = function (e) {
            return h(p(e))
        },
        g = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        v = function (e, t) {
            if (!g(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !g(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !g(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !g(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function (e, t) {
            return y.call(e, t)
        },
        w = i.document,
        k = g(w) && g(w.createElement),
        T = function (e) {
            return k ? w.createElement(e) : {}
        },
        S = !o && !r((function () {
            return 7 != Object.defineProperty(T("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        E = Object.getOwnPropertyDescriptor,
        A = {
            f: o ? E : function (e, t) {
                if (e = m(e), t = v(t, !0), S) try {
                    return E(e, t)
                } catch (e) {}
                if (b(e, t)) return c(!l.f.call(e, t), e[t])
            }
        },
        C = function (e) {
            if (!g(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        P = Object.defineProperty,
        x = {
            f: o ? P : function (e, t, n) {
                if (C(e), t = v(t, !0), C(n), S) try {
                    return P(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        O = o ? function (e, t, n) {
            return x.f(e, t, c(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        },
        I = function (e, t) {
            try {
                O(i, e, t)
            } catch (n) {
                i[e] = t
            }
            return t
        },
        j = "__core-js_shared__",
        L = i[j] || I(j, {}),
        N = Function.toString;
    "function" != typeof L.inspectSource && (L.inspectSource = function (e) {
        return N.call(e)
    });
    var R, M, _, U = L.inspectSource,
        D = i.WeakMap,
        F = "function" == typeof D && /native code/.test(U(D)),
        q = t((function (e) {
            (e.exports = function (e, t) {
                return L[e] || (L[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.7.0",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        H = 0,
        B = Math.random(),
        V = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++H + B).toString(36)
        },
        z = q("keys"),
        W = function (e) {
            return z[e] || (z[e] = V(e))
        },
        K = {},
        $ = i.WeakMap;
    if (F) {
        var Y = L.state || (L.state = new $),
            G = Y.get,
            X = Y.has,
            Q = Y.set;
        R = function (e, t) {
            return t.facade = e, Q.call(Y, e, t), t
        }, M = function (e) {
            return G.call(Y, e) || {}
        }, _ = function (e) {
            return X.call(Y, e)
        }
    } else {
        var J = W("state");
        K[J] = !0, R = function (e, t) {
            return t.facade = e, O(e, J, t), t
        }, M = function (e) {
            return b(e, J) ? e[J] : {}
        }, _ = function (e) {
            return b(e, J)
        }
    }
    var Z, ee = {
            set: R,
            get: M,
            has: _,
            enforce: function (e) {
                return _(e) ? M(e) : R(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!g(t) || (n = M(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        te = t((function (e) {
            var t = ee.get,
                n = ee.enforce,
                r = String(String).split("String");
            (e.exports = function (e, t, o, a) {
                var s, l = !!a && !!a.unsafe,
                    c = !!a && !!a.enumerable,
                    u = !!a && !!a.noTargetGet;
                "function" == typeof o && ("string" != typeof t || b(o, "name") || O(o, "name", t), (s = n(o)).source || (s.source = r.join("string" == typeof t ? t : ""))), e !== i ? (l ? !u && e[t] && (c = !0) : delete e[t], c ? e[t] = o : O(e, t, o)) : c ? e[t] = o : I(t, o)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && t(this).source || U(this)
            }))
        })),
        ne = i,
        ie = function (e) {
            return "function" == typeof e ? e : void 0
        },
        re = function (e, t) {
            return arguments.length < 2 ? ie(ne[e]) || ie(i[e]) : ne[e] && ne[e][t] || i[e] && i[e][t]
        },
        oe = Math.ceil,
        ae = Math.floor,
        se = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? ae : oe)(e)
        },
        le = Math.min,
        ce = function (e) {
            return e > 0 ? le(se(e), 9007199254740991) : 0
        },
        ue = Math.max,
        fe = Math.min,
        de = function (e, t) {
            var n = se(e);
            return n < 0 ? ue(n + t, 0) : fe(n, t)
        },
        he = function (e) {
            return function (t, n, i) {
                var r, o = m(t),
                    a = ce(o.length),
                    s = de(i, a);
                if (e && n != n) {
                    for (; a > s;)
                        if ((r = o[s++]) != r) return !0
                } else
                    for (; a > s; s++)
                        if ((e || s in o) && o[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        pe = {
            includes: he(!0),
            indexOf: he(!1)
        },
        me = pe.indexOf,
        ge = function (e, t) {
            var n, i = m(e),
                r = 0,
                o = [];
            for (n in i) !b(K, n) && b(i, n) && o.push(n);
            for (; t.length > r;) b(i, n = t[r++]) && (~me(o, n) || o.push(n));
            return o
        },
        ve = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ye = ve.concat("length", "prototype"),
        be = {
            f: Object.getOwnPropertyNames || function (e) {
                return ge(e, ye)
            }
        },
        we = {
            f: Object.getOwnPropertySymbols
        },
        ke = re("Reflect", "ownKeys") || function (e) {
            var t = be.f(C(e)),
                n = we.f;
            return n ? t.concat(n(e)) : t
        },
        Te = function (e, t) {
            for (var n = ke(t), i = x.f, r = A.f, o = 0; o < n.length; o++) {
                var a = n[o];
                b(e, a) || i(e, a, r(t, a))
            }
        },
        Se = /#|\.prototype\./,
        Ee = function (e, t) {
            var n = Ce[Ae(e)];
            return n == xe || n != Pe && ("function" == typeof t ? r(t) : !!t)
        },
        Ae = Ee.normalize = function (e) {
            return String(e).replace(Se, ".").toLowerCase()
        },
        Ce = Ee.data = {},
        Pe = Ee.NATIVE = "N",
        xe = Ee.POLYFILL = "P",
        Oe = Ee,
        Ie = A.f,
        je = function (e, t) {
            var n, r, o, a, s, l = e.target,
                c = e.global,
                u = e.stat;
            if (n = c ? i : u ? i[l] || I(l, {}) : (i[l] || {}).prototype)
                for (r in t) {
                    if (a = t[r], o = e.noTargetGet ? (s = Ie(n, r)) && s.value : n[r], !Oe(c ? r : l + (u ? "." : "#") + r, e.forced) && void 0 !== o) {
                        if (typeof a == typeof o) continue;
                        Te(a, o)
                    }(e.sham || o && o.sham) && O(a, "sham", !0), te(n, r, a, e)
                }
        },
        Le = !!Object.getOwnPropertySymbols && !r((function () {
            return !String(Symbol())
        })),
        Ne = Le && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        Re = Array.isArray || function (e) {
            return "Array" == f(e)
        },
        Me = function (e) {
            return Object(p(e))
        },
        _e = Object.keys || function (e) {
            return ge(e, ve)
        },
        Ue = o ? Object.defineProperties : function (e, t) {
            C(e);
            for (var n, i = _e(t), r = i.length, o = 0; r > o;) x.f(e, n = i[o++], t[n]);
            return e
        },
        De = re("document", "documentElement"),
        Fe = W("IE_PROTO"),
        qe = function () {},
        He = function (e) {
            return "<script>" + e + "</" + "script>"
        },
        Be = function () {
            try {
                Z = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Be = Z ? function (e) {
                e.write(He("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(Z) : ((t = T("iframe")).style.display = "none", De.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(He("document.F=Object")), e.close(), e.F);
            for (var n = ve.length; n--;) delete Be.prototype[ve[n]];
            return Be()
        };
    K[Fe] = !0;
    var Ve = Object.create || function (e, t) {
            var n;
            return null !== e ? (qe.prototype = C(e), n = new qe, qe.prototype = null, n[Fe] = e) : n = Be(), void 0 === t ? n : Ue(n, t)
        },
        ze = be.f,
        We = {}.toString,
        Ke = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        $e = {
            f: function (e) {
                return Ke && "[object Window]" == We.call(e) ? function (e) {
                    try {
                        return ze(e)
                    } catch (e) {
                        return Ke.slice()
                    }
                }(e) : ze(m(e))
            }
        },
        Ye = q("wks"),
        Ge = i.Symbol,
        Xe = Ne ? Ge : Ge && Ge.withoutSetter || V,
        Qe = function (e) {
            return b(Ye, e) || (Le && b(Ge, e) ? Ye[e] = Ge[e] : Ye[e] = Xe("Symbol." + e)), Ye[e]
        },
        Je = {
            f: Qe
        },
        Ze = x.f,
        et = function (e) {
            var t = ne.Symbol || (ne.Symbol = {});
            b(t, e) || Ze(t, e, {
                value: Je.f(e)
            })
        },
        tt = x.f,
        nt = Qe("toStringTag"),
        it = function (e, t, n) {
            e && !b(e = n ? e : e.prototype, nt) && tt(e, nt, {
                configurable: !0,
                value: t
            })
        },
        rt = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        ot = function (e, t, n) {
            if (rt(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t)
                    };
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        },
        at = Qe("species"),
        st = function (e, t) {
            var n;
            return Re(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Re(n.prototype) ? g(n) && null === (n = n[at]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        lt = [].push,
        ct = function (e) {
            var t = 1 == e,
                n = 2 == e,
                i = 3 == e,
                r = 4 == e,
                o = 6 == e,
                a = 5 == e || o;
            return function (s, l, c, u) {
                for (var f, d, p = Me(s), m = h(p), g = ot(l, c, 3), v = ce(m.length), y = 0, b = u || st, w = t ? b(s, v) : n ? b(s, 0) : void 0; v > y; y++)
                    if ((a || y in m) && (d = g(f = m[y], y, p), e))
                        if (t) w[y] = d;
                        else if (d) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return f;
                    case 6:
                        return y;
                    case 2:
                        lt.call(w, f)
                } else if (r) return !1;
                return o ? -1 : i || r ? r : w
            }
        },
        ut = {
            forEach: ct(0),
            map: ct(1),
            filter: ct(2),
            some: ct(3),
            every: ct(4),
            find: ct(5),
            findIndex: ct(6)
        },
        ft = ut.forEach,
        dt = W("hidden"),
        ht = "Symbol",
        pt = Qe("toPrimitive"),
        mt = ee.set,
        gt = ee.getterFor(ht),
        vt = Object.prototype,
        yt = i.Symbol,
        bt = re("JSON", "stringify"),
        wt = A.f,
        kt = x.f,
        Tt = $e.f,
        St = l.f,
        Et = q("symbols"),
        At = q("op-symbols"),
        Ct = q("string-to-symbol-registry"),
        Pt = q("symbol-to-string-registry"),
        xt = q("wks"),
        Ot = i.QObject,
        It = !Ot || !Ot.prototype || !Ot.prototype.findChild,
        jt = o && r((function () {
            return 7 != Ve(kt({}, "a", {
                get: function () {
                    return kt(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (e, t, n) {
            var i = wt(vt, t);
            i && delete vt[t], kt(e, t, n), i && e !== vt && kt(vt, t, i)
        } : kt,
        Lt = function (e, t) {
            var n = Et[e] = Ve(yt.prototype);
            return mt(n, {
                type: ht,
                tag: e,
                description: t
            }), o || (n.description = t), n
        },
        Nt = Ne ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof yt
        },
        Rt = function (e, t, n) {
            e === vt && Rt(At, t, n), C(e);
            var i = v(t, !0);
            return C(n), b(Et, i) ? (n.enumerable ? (b(e, dt) && e[dt][i] && (e[dt][i] = !1), n = Ve(n, {
                enumerable: c(0, !1)
            })) : (b(e, dt) || kt(e, dt, c(1, {})), e[dt][i] = !0), jt(e, i, n)) : kt(e, i, n)
        },
        Mt = function (e, t) {
            C(e);
            var n = m(t),
                i = _e(n).concat(Ft(n));
            return ft(i, (function (t) {
                o && !_t.call(n, t) || Rt(e, t, n[t])
            })), e
        },
        _t = function (e) {
            var t = v(e, !0),
                n = St.call(this, t);
            return !(this === vt && b(Et, t) && !b(At, t)) && (!(n || !b(this, t) || !b(Et, t) || b(this, dt) && this[dt][t]) || n)
        },
        Ut = function (e, t) {
            var n = m(e),
                i = v(t, !0);
            if (n !== vt || !b(Et, i) || b(At, i)) {
                var r = wt(n, i);
                return !r || !b(Et, i) || b(n, dt) && n[dt][i] || (r.enumerable = !0), r
            }
        },
        Dt = function (e) {
            var t = Tt(m(e)),
                n = [];
            return ft(t, (function (e) {
                b(Et, e) || b(K, e) || n.push(e)
            })), n
        },
        Ft = function (e) {
            var t = e === vt,
                n = Tt(t ? At : m(e)),
                i = [];
            return ft(n, (function (e) {
                !b(Et, e) || t && !b(vt, e) || i.push(Et[e])
            })), i
        };
    if (Le || (te((yt = function () {
            if (this instanceof yt) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = V(e),
                n = function (e) {
                    this === vt && n.call(At, e), b(this, dt) && b(this[dt], t) && (this[dt][t] = !1), jt(this, t, c(1, e))
                };
            return o && It && jt(vt, t, {
                configurable: !0,
                set: n
            }), Lt(t, e)
        }).prototype, "toString", (function () {
            return gt(this).tag
        })), te(yt, "withoutSetter", (function (e) {
            return Lt(V(e), e)
        })), l.f = _t, x.f = Rt, A.f = Ut, be.f = $e.f = Dt, we.f = Ft, Je.f = function (e) {
            return Lt(Qe(e), e)
        }, o && (kt(yt.prototype, "description", {
            configurable: !0,
            get: function () {
                return gt(this).description
            }
        }), te(vt, "propertyIsEnumerable", _t, {
            unsafe: !0
        }))), je({
            global: !0,
            wrap: !0,
            forced: !Le,
            sham: !Le
        }, {
            Symbol: yt
        }), ft(_e(xt), (function (e) {
            et(e)
        })), je({
            target: ht,
            stat: !0,
            forced: !Le
        }, {
            for: function (e) {
                var t = String(e);
                if (b(Ct, t)) return Ct[t];
                var n = yt(t);
                return Ct[t] = n, Pt[n] = t, n
            },
            keyFor: function (e) {
                if (!Nt(e)) throw TypeError(e + " is not a symbol");
                if (b(Pt, e)) return Pt[e]
            },
            useSetter: function () {
                It = !0
            },
            useSimple: function () {
                It = !1
            }
        }), je({
            target: "Object",
            stat: !0,
            forced: !Le,
            sham: !o
        }, {
            create: function (e, t) {
                return void 0 === t ? Ve(e) : Mt(Ve(e), t)
            },
            defineProperty: Rt,
            defineProperties: Mt,
            getOwnPropertyDescriptor: Ut
        }), je({
            target: "Object",
            stat: !0,
            forced: !Le
        }, {
            getOwnPropertyNames: Dt,
            getOwnPropertySymbols: Ft
        }), je({
            target: "Object",
            stat: !0,
            forced: r((function () {
                we.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (e) {
                return we.f(Me(e))
            }
        }), bt) {
        var qt = !Le || r((function () {
            var e = yt();
            return "[null]" != bt([e]) || "{}" != bt({
                a: e
            }) || "{}" != bt(Object(e))
        }));
        je({
            target: "JSON",
            stat: !0,
            forced: qt
        }, {
            stringify: function (e, t, n) {
                for (var i, r = [e], o = 1; arguments.length > o;) r.push(arguments[o++]);
                if (i = t, (g(t) || void 0 !== e) && !Nt(e)) return Re(t) || (t = function (e, t) {
                    if ("function" == typeof i && (t = i.call(this, e, t)), !Nt(t)) return t
                }), r[1] = t, bt.apply(null, r)
            }
        })
    }
    yt.prototype[pt] || O(yt.prototype, pt, yt.prototype.valueOf), it(yt, ht), K[dt] = !0;
    var Ht = x.f,
        Bt = i.Symbol;
    if (o && "function" == typeof Bt && (!("description" in Bt.prototype) || void 0 !== Bt().description)) {
        var Vt = {},
            zt = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof zt ? new Bt(e) : void 0 === e ? Bt() : Bt(e);
                return "" === e && (Vt[t] = !0), t
            };
        Te(zt, Bt);
        var Wt = zt.prototype = Bt.prototype;
        Wt.constructor = zt;
        var Kt = Wt.toString,
            $t = "Symbol(test)" == String(Bt("test")),
            Yt = /^Symbol\((.*)\)[^)]+$/;
        Ht(Wt, "description", {
            configurable: !0,
            get: function () {
                var e = g(this) ? this.valueOf() : this,
                    t = Kt.call(e);
                if (b(Vt, e)) return "";
                var n = $t ? t.slice(7, -1) : t.replace(Yt, "$1");
                return "" === n ? void 0 : n
            }
        }), je({
            global: !0,
            forced: !0
        }, {
            Symbol: zt
        })
    }
    et("iterator");
    var Gt = function (e, t) {
            var n = [][e];
            return !!n && r((function () {
                n.call(null, t || function () {
                    throw 1
                }, 1)
            }))
        },
        Xt = Object.defineProperty,
        Qt = {},
        Jt = function (e) {
            throw e
        },
        Zt = function (e, t) {
            if (b(Qt, e)) return Qt[e];
            t || (t = {});
            var n = [][e],
                i = !!b(t, "ACCESSORS") && t.ACCESSORS,
                a = b(t, 0) ? t[0] : Jt,
                s = b(t, 1) ? t[1] : void 0;
            return Qt[e] = !!n && !r((function () {
                if (i && !o) return !0;
                var e = {
                    length: -1
                };
                i ? Xt(e, 1, {
                    enumerable: !0,
                    get: Jt
                }) : e[1] = 1, n.call(e, a, s)
            }))
        },
        en = ut.forEach,
        tn = Gt("forEach"),
        nn = Zt("forEach"),
        rn = tn && nn ? [].forEach : function (e) {
            return en(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    je({
        target: "Array",
        proto: !0,
        forced: [].forEach != rn
    }, {
        forEach: rn
    });
    var on = pe.indexOf,
        an = [].indexOf,
        sn = !!an && 1 / [1].indexOf(1, -0) < 0,
        ln = Gt("indexOf"),
        cn = Zt("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    je({
        target: "Array",
        proto: !0,
        forced: sn || !ln || !cn
    }, {
        indexOf: function (e) {
            return sn ? an.apply(this, arguments) || 0 : on(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var un = Qe("unscopables"),
        fn = Array.prototype;
    null == fn[un] && x.f(fn, un, {
        configurable: !0,
        value: Ve(null)
    });
    var dn, hn, pn, mn = function (e) {
            fn[un][e] = !0
        },
        gn = {},
        vn = !r((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        yn = W("IE_PROTO"),
        bn = Object.prototype,
        wn = vn ? Object.getPrototypeOf : function (e) {
            return e = Me(e), b(e, yn) ? e[yn] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? bn : null
        },
        kn = Qe("iterator"),
        Tn = !1;
    [].keys && ("next" in (pn = [].keys()) ? (hn = wn(wn(pn))) !== Object.prototype && (dn = hn) : Tn = !0), null == dn && (dn = {}), b(dn, kn) || O(dn, kn, (function () {
        return this
    }));
    var Sn = {
            IteratorPrototype: dn,
            BUGGY_SAFARI_ITERATORS: Tn
        },
        En = Sn.IteratorPrototype,
        An = function () {
            return this
        },
        Cn = function (e, t, n) {
            var i = t + " Iterator";
            return e.prototype = Ve(En, {
                next: c(1, n)
            }), it(e, i, !1), gn[i] = An, e
        },
        Pn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function (n, i) {
                return C(n),
                    function (e) {
                        if (!g(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(i), t ? e.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0),
        xn = Sn.IteratorPrototype,
        On = Sn.BUGGY_SAFARI_ITERATORS,
        In = Qe("iterator"),
        jn = "keys",
        Ln = "values",
        Nn = "entries",
        Rn = function () {
            return this
        },
        Mn = function (e, t, n, i, r, o, a) {
            Cn(n, t, i);
            var s, l, c, u = function (e) {
                    if (e === r && m) return m;
                    if (!On && e in h) return h[e];
                    switch (e) {
                        case jn:
                        case Ln:
                        case Nn:
                            return function () {
                                return new n(this, e)
                            }
                    }
                    return function () {
                        return new n(this)
                    }
                },
                f = t + " Iterator",
                d = !1,
                h = e.prototype,
                p = h[In] || h["@@iterator"] || r && h[r],
                m = !On && p || u(r),
                g = "Array" == t && h.entries || p;
            if (g && (s = wn(g.call(new e)), xn !== Object.prototype && s.next && (wn(s) !== xn && (Pn ? Pn(s, xn) : "function" != typeof s[In] && O(s, In, Rn)), it(s, f, !0))), r == Ln && p && p.name !== Ln && (d = !0, m = function () {
                    return p.call(this)
                }), h[In] !== m && O(h, In, m), gn[t] = m, r)
                if (l = {
                        values: u(Ln),
                        keys: o ? m : u(jn),
                        entries: u(Nn)
                    }, a)
                    for (c in l)(On || d || !(c in h)) && te(h, c, l[c]);
                else je({
                    target: t,
                    proto: !0,
                    forced: On || d
                }, l);
            return l
        },
        _n = "Array Iterator",
        Un = ee.set,
        Dn = ee.getterFor(_n),
        Fn = Mn(Array, "Array", (function (e, t) {
            Un(this, {
                type: _n,
                target: m(e),
                index: 0,
                kind: t
            })
        }), (function () {
            var e = Dn(this),
                t = e.target,
                n = e.kind,
                i = e.index++;
            return !t || i >= t.length ? (e.target = void 0, {
                value: void 0,
                done: !0
            }) : "keys" == n ? {
                value: i,
                done: !1
            } : "values" == n ? {
                value: t[i],
                done: !1
            } : {
                value: [i, t[i]],
                done: !1
            }
        }), "values");
    gn.Arguments = gn.Array, mn("keys"), mn("values"), mn("entries");
    var qn = [].join,
        Hn = h != Object,
        Bn = Gt("join", ",");
    je({
        target: "Array",
        proto: !0,
        forced: Hn || !Bn
    }, {
        join: function (e) {
            return qn.call(m(this), void 0 === e ? "," : e)
        }
    });
    var Vn, zn, Wn = function (e, t, n) {
            var i = v(t);
            i in e ? x.f(e, i, c(0, n)) : e[i] = n
        },
        Kn = re("navigator", "userAgent") || "",
        $n = i.process,
        Yn = $n && $n.versions,
        Gn = Yn && Yn.v8;
    Gn ? zn = (Vn = Gn.split("."))[0] + Vn[1] : Kn && (!(Vn = Kn.match(/Edge\/(\d+)/)) || Vn[1] >= 74) && (Vn = Kn.match(/Chrome\/(\d+)/)) && (zn = Vn[1]);
    var Xn = zn && +zn,
        Qn = Qe("species"),
        Jn = function (e) {
            return Xn >= 51 || !r((function () {
                var t = [];
                return (t.constructor = {})[Qn] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Zn = Jn("slice"),
        ei = Zt("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        ti = Qe("species"),
        ni = [].slice,
        ii = Math.max;
    je({
        target: "Array",
        proto: !0,
        forced: !Zn || !ei
    }, {
        slice: function (e, t) {
            var n, i, r, o = m(this),
                a = ce(o.length),
                s = de(e, a),
                l = de(void 0 === t ? a : t, a);
            if (Re(o) && ("function" != typeof (n = o.constructor) || n !== Array && !Re(n.prototype) ? g(n) && null === (n = n[ti]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return ni.call(o, s, l);
            for (i = new(void 0 === n ? Array : n)(ii(l - s, 0)), r = 0; s < l; s++, r++) s in o && Wn(i, r, o[s]);
            return i.length = r, i
        }
    });
    var ri = {};
    ri[Qe("toStringTag")] = "z";
    var oi = "[object z]" === String(ri),
        ai = Qe("toStringTag"),
        si = "Arguments" == f(function () {
            return arguments
        }()),
        li = oi ? f : function (e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), ai)) ? n : si ? f(t) : "Object" == (i = f(t)) && "function" == typeof t.callee ? "Arguments" : i
        },
        ci = oi ? {}.toString : function () {
            return "[object " + li(this) + "]"
        };
    oi || te(Object.prototype, "toString", ci, {
        unsafe: !0
    });
    var ui = function () {
        var e = C(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function fi(e, t) {
        return RegExp(e, t)
    }
    var di = {
            UNSUPPORTED_Y: r((function () {
                var e = fi("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: r((function () {
                var e = fi("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        hi = RegExp.prototype.exec,
        pi = String.prototype.replace,
        mi = hi,
        gi = function () {
            var e = /a/,
                t = /b*/g;
            return hi.call(e, "a"), hi.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
        }(),
        vi = di.UNSUPPORTED_Y || di.BROKEN_CARET,
        yi = void 0 !== /()??/.exec("")[1];
    (gi || yi || vi) && (mi = function (e) {
        var t, n, i, r, o = this,
            a = vi && o.sticky,
            s = ui.call(o),
            l = o.source,
            c = 0,
            u = e;
        return a && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(o.lastIndex), o.lastIndex > 0 && (!o.multiline || o.multiline && "\n" !== e[o.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), yi && (n = new RegExp("^" + l + "$(?!\\s)", s)), gi && (t = o.lastIndex), i = hi.call(a ? n : o, u), a ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = o.lastIndex, o.lastIndex += i[0].length) : o.lastIndex = 0 : gi && i && (o.lastIndex = o.global ? i.index + i[0].length : t), yi && i && i.length > 1 && pi.call(i[0], n, (function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        })), i
    });
    var bi = mi;
    je({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== bi
    }, {
        exec: bi
    });
    var wi = "toString",
        ki = RegExp.prototype,
        Ti = ki.toString,
        Si = r((function () {
            return "/a/b" != Ti.call({
                source: "a",
                flags: "b"
            })
        })),
        Ei = Ti.name != wi;
    (Si || Ei) && te(RegExp.prototype, wi, (function () {
        var e = C(this),
            t = String(e.source),
            n = e.flags;
        return "/" + t + "/" + String(void 0 === n && e instanceof RegExp && !("flags" in ki) ? ui.call(e) : n)
    }), {
        unsafe: !0
    });
    var Ai = function (e) {
            return function (t, n) {
                var i, r, o = String(p(t)),
                    a = se(n),
                    s = o.length;
                return a < 0 || a >= s ? e ? "" : void 0 : (i = o.charCodeAt(a)) < 55296 || i > 56319 || a + 1 === s || (r = o.charCodeAt(a + 1)) < 56320 || r > 57343 ? e ? o.charAt(a) : i : e ? o.slice(a, a + 2) : r - 56320 + (i - 55296 << 10) + 65536
            }
        },
        Ci = {
            codeAt: Ai(!1),
            charAt: Ai(!0)
        },
        Pi = Ci.charAt,
        xi = "String Iterator",
        Oi = ee.set,
        Ii = ee.getterFor(xi);
    Mn(String, "String", (function (e) {
        Oi(this, {
            type: xi,
            string: String(e),
            index: 0
        })
    }), (function () {
        var e, t = Ii(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (e = Pi(n, i), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var ji = Qe("species"),
        Li = !r((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        Ni = "$0" === "a".replace(/./, "$0"),
        Ri = Qe("replace"),
        Mi = !!/./ [Ri] && "" === /./ [Ri]("a", "$0"),
        _i = !r((function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        Ui = function (e, t, n, i) {
            var o = Qe(e),
                a = !r((function () {
                    var t = {};
                    return t[o] = function () {
                        return 7
                    }, 7 != "" [e](t)
                })),
                s = a && !r((function () {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[ji] = function () {
                        return n
                    }, n.flags = "", n[o] = /./ [o]), n.exec = function () {
                        return t = !0, null
                    }, n[o](""), !t
                }));
            if (!a || !s || "replace" === e && (!Li || !Ni || Mi) || "split" === e && !_i) {
                var l = /./ [o],
                    c = n(o, "" [e], (function (e, t, n, i, r) {
                        return t.exec === bi ? a && !r ? {
                            done: !0,
                            value: l.call(t, n, i)
                        } : {
                            done: !0,
                            value: e.call(n, t, i)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: Ni,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Mi
                    }),
                    u = c[0],
                    f = c[1];
                te(String.prototype, e, u), te(RegExp.prototype, o, 2 == t ? function (e, t) {
                    return f.call(e, this, t)
                } : function (e) {
                    return f.call(e, this)
                })
            }
            i && O(RegExp.prototype[o], "sham", !0)
        },
        Di = Ci.charAt,
        Fi = function (e, t, n) {
            return t + (n ? Di(e, t).length : 1)
        },
        qi = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== f(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return bi.call(e, t)
        },
        Hi = Math.max,
        Bi = Math.min,
        Vi = Math.floor,
        zi = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Wi = /\$([$&'`]|\d\d?)/g;
    Ui("replace", 2, (function (e, t, n, i) {
        var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            o = i.REPLACE_KEEPS_$0,
            a = r ? "$" : "$0";
        return [function (n, i) {
            var r = p(this),
                o = null == n ? void 0 : n[e];
            return void 0 !== o ? o.call(n, r, i) : t.call(String(r), n, i)
        }, function (e, i) {
            if (!r && o || "string" == typeof i && -1 === i.indexOf(a)) {
                var l = n(t, e, this, i);
                if (l.done) return l.value
            }
            var c = C(e),
                u = String(this),
                f = "function" == typeof i;
            f || (i = String(i));
            var d = c.global;
            if (d) {
                var h = c.unicode;
                c.lastIndex = 0
            }
            for (var p = [];;) {
                var m = qi(c, u);
                if (null === m) break;
                if (p.push(m), !d) break;
                "" === String(m[0]) && (c.lastIndex = Fi(u, ce(c.lastIndex), h))
            }
            for (var g, v = "", y = 0, b = 0; b < p.length; b++) {
                m = p[b];
                for (var w = String(m[0]), k = Hi(Bi(se(m.index), u.length), 0), T = [], S = 1; S < m.length; S++) T.push(void 0 === (g = m[S]) ? g : String(g));
                var E = m.groups;
                if (f) {
                    var A = [w].concat(T, k, u);
                    void 0 !== E && A.push(E);
                    var P = String(i.apply(void 0, A))
                } else P = s(w, u, k, T, E, i);
                k >= y && (v += u.slice(y, k) + P, y = k + w.length)
            }
            return v + u.slice(y)
        }];

        function s(e, n, i, r, o, a) {
            var s = i + e.length,
                l = r.length,
                c = Wi;
            return void 0 !== o && (o = Me(o), c = zi), t.call(a, c, (function (t, a) {
                var c;
                switch (a.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(s);
                    case "<":
                        c = o[a.slice(1, -1)];
                        break;
                    default:
                        var u = +a;
                        if (0 === u) return t;
                        if (u > l) {
                            var f = Vi(u / 10);
                            return 0 === f ? t : f <= l ? void 0 === r[f - 1] ? a.charAt(1) : r[f - 1] + a.charAt(1) : t
                        }
                        c = r[u - 1]
                }
                return void 0 === c ? "" : c
            }))
        }
    }));
    var Ki = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Ui("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = p(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = C(e),
                o = String(this),
                a = r.lastIndex;
            Ki(a, 0) || (r.lastIndex = 0);
            var s = qi(r, o);
            return Ki(r.lastIndex, a) || (r.lastIndex = a), null === s ? -1 : s.index
        }]
    }));
    var $i = Qe("match"),
        Yi = function (e) {
            var t;
            return g(e) && (void 0 !== (t = e[$i]) ? !!t : "RegExp" == f(e))
        },
        Gi = Qe("species"),
        Xi = function (e, t) {
            var n, i = C(e).constructor;
            return void 0 === i || null == (n = C(i)[Gi]) ? t : rt(n)
        },
        Qi = [].push,
        Ji = Math.min,
        Zi = 4294967295,
        er = !r((function () {
            return !RegExp(Zi, "y")
        }));
    Ui("split", 2, (function (e, t, n) {
        var i;
        return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
            var i = String(p(this)),
                r = void 0 === n ? Zi : n >>> 0;
            if (0 === r) return [];
            if (void 0 === e) return [i];
            if (!Yi(e)) return t.call(i, e, r);
            for (var o, a, s, l = [], c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), u = 0, f = new RegExp(e.source, c + "g");
                (o = bi.call(f, i)) && !((a = f.lastIndex) > u && (l.push(i.slice(u, o.index)), o.length > 1 && o.index < i.length && Qi.apply(l, o.slice(1)), s = o[0].length, u = a, l.length >= r));) f.lastIndex === o.index && f.lastIndex++;
            return u === i.length ? !s && f.test("") || l.push("") : l.push(i.slice(u)), l.length > r ? l.slice(0, r) : l
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function (t, n) {
            var r = p(this),
                o = null == t ? void 0 : t[e];
            return void 0 !== o ? o.call(t, r, n) : i.call(String(r), t, n)
        }, function (e, r) {
            var o = n(i, e, this, r, i !== t);
            if (o.done) return o.value;
            var a = C(e),
                s = String(this),
                l = Xi(a, RegExp),
                c = a.unicode,
                u = (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.unicode ? "u" : "") + (er ? "y" : "g"),
                f = new l(er ? a : "^(?:" + a.source + ")", u),
                d = void 0 === r ? Zi : r >>> 0;
            if (0 === d) return [];
            if (0 === s.length) return null === qi(f, s) ? [s] : [];
            for (var h = 0, p = 0, m = []; p < s.length;) {
                f.lastIndex = er ? p : 0;
                var g, v = qi(f, er ? s : s.slice(p));
                if (null === v || (g = Ji(ce(f.lastIndex + (er ? 0 : p)), s.length)) === h) p = Fi(s, p, c);
                else {
                    if (m.push(s.slice(h, p)), m.length === d) return m;
                    for (var y = 1; y <= v.length - 1; y++)
                        if (m.push(v[y]), m.length === d) return m;
                    p = h = g
                }
            }
            return m.push(s.slice(h)), m
        }]
    }), !er);
    var tr = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    for (var nr in tr) {
        var ir = i[nr],
            rr = ir && ir.prototype;
        if (rr && rr.forEach !== rn) try {
            O(rr, "forEach", rn)
        } catch (e) {
            rr.forEach = rn
        }
    }
    var or = Qe("iterator"),
        ar = Qe("toStringTag"),
        sr = Fn.values;
    for (var lr in tr) {
        var cr = i[lr],
            ur = cr && cr.prototype;
        if (ur) {
            if (ur[or] !== sr) try {
                O(ur, or, sr)
            } catch (e) {
                ur[or] = sr
            }
            if (ur[ar] || O(ur, ar, lr), tr[lr])
                for (var fr in Fn)
                    if (ur[fr] !== Fn[fr]) try {
                        O(ur, fr, Fn[fr])
                    } catch (e) {
                        ur[fr] = Fn[fr]
                    }
        }
    }
    var dr = Qe("iterator"),
        hr = !r((function () {
            var e = new URL("b?a=1&b=2&c=3", "http://a"),
                t = e.searchParams,
                n = "";
            return e.pathname = "c%20d", t.forEach((function (e, i) {
                t.delete("b"), n += i + e
            })), !t.sort || "http://a/c%20d?a=1&c=3" !== e.href || "3" !== t.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !t[dr] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
        })),
        pr = function (e, t, n) {
            if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation");
            return e
        },
        mr = Object.assign,
        gr = Object.defineProperty,
        vr = !mr || r((function () {
            if (o && 1 !== mr({
                    b: 1
                }, mr(gr({}, "a", {
                    enumerable: !0,
                    get: function () {
                        gr(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                i = "abcdefghijklmnopqrst";
            return e[n] = 7, i.split("").forEach((function (e) {
                t[e] = e
            })), 7 != mr({}, e)[n] || _e(mr({}, t)).join("") != i
        })) ? function (e, t) {
            for (var n = Me(e), i = arguments.length, r = 1, a = we.f, s = l.f; i > r;)
                for (var c, u = h(arguments[r++]), f = a ? _e(u).concat(a(u)) : _e(u), d = f.length, p = 0; d > p;) c = f[p++], o && !s.call(u, c) || (n[c] = u[c]);
            return n
        } : mr,
        yr = function (e) {
            var t = e.return;
            if (void 0 !== t) return C(t.call(e)).value
        },
        br = function (e, t, n, i) {
            try {
                return i ? t(C(n)[0], n[1]) : t(n)
            } catch (t) {
                throw yr(e), t
            }
        },
        wr = Qe("iterator"),
        kr = Array.prototype,
        Tr = function (e) {
            return void 0 !== e && (gn.Array === e || kr[wr] === e)
        },
        Sr = Qe("iterator"),
        Er = function (e) {
            if (null != e) return e[Sr] || e["@@iterator"] || gn[li(e)]
        },
        Ar = function (e) {
            var t, n, i, r, o, a, s = Me(e),
                l = "function" == typeof this ? this : Array,
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                f = void 0 !== u,
                d = Er(s),
                h = 0;
            if (f && (u = ot(u, c > 2 ? arguments[2] : void 0, 2)), null == d || l == Array && Tr(d))
                for (n = new l(t = ce(s.length)); t > h; h++) a = f ? u(s[h], h) : s[h], Wn(n, h, a);
            else
                for (o = (r = d.call(s)).next, n = new l; !(i = o.call(r)).done; h++) a = f ? br(r, u, [i.value, h], !0) : i.value, Wn(n, h, a);
            return n.length = h, n
        },
        Cr = 2147483647,
        Pr = /[^\0-\u007E]/,
        xr = /[.\u3002\uFF0E\uFF61]/g,
        Or = "Overflow: input needs wider integers to process",
        Ir = Math.floor,
        jr = String.fromCharCode,
        Lr = function (e) {
            return e + 22 + 75 * (e < 26)
        },
        Nr = function (e, t, n) {
            var i = 0;
            for (e = n ? Ir(e / 700) : e >> 1, e += Ir(e / t); e > 455; i += 36) e = Ir(e / 35);
            return Ir(i + 36 * e / (e + 38))
        },
        Rr = function (e) {
            var t, n, i = [],
                r = (e = function (e) {
                    for (var t = [], n = 0, i = e.length; n < i;) {
                        var r = e.charCodeAt(n++);
                        if (r >= 55296 && r <= 56319 && n < i) {
                            var o = e.charCodeAt(n++);
                            56320 == (64512 & o) ? t.push(((1023 & r) << 10) + (1023 & o) + 65536) : (t.push(r), n--)
                        } else t.push(r)
                    }
                    return t
                }(e)).length,
                o = 128,
                a = 0,
                s = 72;
            for (t = 0; t < e.length; t++)(n = e[t]) < 128 && i.push(jr(n));
            var l = i.length,
                c = l;
            for (l && i.push("-"); c < r;) {
                var u = Cr;
                for (t = 0; t < e.length; t++)(n = e[t]) >= o && n < u && (u = n);
                var f = c + 1;
                if (u - o > Ir((Cr - a) / f)) throw RangeError(Or);
                for (a += (u - o) * f, o = u, t = 0; t < e.length; t++) {
                    if ((n = e[t]) < o && ++a > Cr) throw RangeError(Or);
                    if (n == o) {
                        for (var d = a, h = 36;; h += 36) {
                            var p = h <= s ? 1 : h >= s + 26 ? 26 : h - s;
                            if (d < p) break;
                            var m = d - p,
                                g = 36 - p;
                            i.push(jr(Lr(p + m % g))), d = Ir(m / g)
                        }
                        i.push(jr(Lr(d))), s = Nr(a, f, c == l), a = 0, ++c
                    }
                }++a, ++o
            }
            return i.join("")
        },
        Mr = function (e, t, n) {
            for (var i in t) te(e, i, t[i], n);
            return e
        },
        _r = function (e) {
            var t = Er(e);
            if ("function" != typeof t) throw TypeError(String(e) + " is not iterable");
            return C(t.call(e))
        },
        Ur = re("fetch"),
        Dr = re("Headers"),
        Fr = Qe("iterator"),
        qr = "URLSearchParams",
        Hr = "URLSearchParamsIterator",
        Br = ee.set,
        Vr = ee.getterFor(qr),
        zr = ee.getterFor(Hr),
        Wr = /\+/g,
        Kr = Array(4),
        $r = function (e) {
            return Kr[e - 1] || (Kr[e - 1] = RegExp("((?:%[\\da-f]{2}){" + e + "})", "gi"))
        },
        Yr = function (e) {
            try {
                return decodeURIComponent(e)
            } catch (t) {
                return e
            }
        },
        Gr = function (e) {
            var t = e.replace(Wr, " "),
                n = 4;
            try {
                return decodeURIComponent(t)
            } catch (e) {
                for (; n;) t = t.replace($r(n--), Yr);
                return t
            }
        },
        Xr = /[!'()~]|%20/g,
        Qr = {
            "!": "%21",
            "'": "%27",
            "(": "%28",
            ")": "%29",
            "~": "%7E",
            "%20": "+"
        },
        Jr = function (e) {
            return Qr[e]
        },
        Zr = function (e) {
            return encodeURIComponent(e).replace(Xr, Jr)
        },
        eo = function (e, t) {
            if (t)
                for (var n, i, r = t.split("&"), o = 0; o < r.length;)(n = r[o++]).length && (i = n.split("="), e.push({
                    key: Gr(i.shift()),
                    value: Gr(i.join("="))
                }))
        },
        to = function (e) {
            this.entries.length = 0, eo(this.entries, e)
        },
        no = function (e, t) {
            if (e < t) throw TypeError("Not enough arguments")
        },
        io = Cn((function (e, t) {
            Br(this, {
                type: Hr,
                iterator: _r(Vr(e).entries),
                kind: t
            })
        }), "Iterator", (function () {
            var e = zr(this),
                t = e.kind,
                n = e.iterator.next(),
                i = n.value;
            return n.done || (n.value = "keys" === t ? i.key : "values" === t ? i.value : [i.key, i.value]), n
        })),
        ro = function () {
            pr(this, ro, qr);
            var e, t, n, i, r, o, a, s, l, c = arguments.length > 0 ? arguments[0] : void 0,
                u = this,
                f = [];
            if (Br(u, {
                    type: qr,
                    entries: f,
                    updateURL: function () {},
                    updateSearchParams: to
                }), void 0 !== c)
                if (g(c))
                    if ("function" == typeof (e = Er(c)))
                        for (n = (t = e.call(c)).next; !(i = n.call(t)).done;) {
                            if ((a = (o = (r = _r(C(i.value))).next).call(r)).done || (s = o.call(r)).done || !o.call(r).done) throw TypeError("Expected sequence with length 2");
                            f.push({
                                key: a.value + "",
                                value: s.value + ""
                            })
                        } else
                            for (l in c) b(c, l) && f.push({
                                key: l,
                                value: c[l] + ""
                            });
                    else eo(f, "string" == typeof c ? "?" === c.charAt(0) ? c.slice(1) : c : c + "")
        },
        oo = ro.prototype;
    Mr(oo, {
        append: function (e, t) {
            no(arguments.length, 2);
            var n = Vr(this);
            n.entries.push({
                key: e + "",
                value: t + ""
            }), n.updateURL()
        },
        delete: function (e) {
            no(arguments.length, 1);
            for (var t = Vr(this), n = t.entries, i = e + "", r = 0; r < n.length;) n[r].key === i ? n.splice(r, 1) : r++;
            t.updateURL()
        },
        get: function (e) {
            no(arguments.length, 1);
            for (var t = Vr(this).entries, n = e + "", i = 0; i < t.length; i++)
                if (t[i].key === n) return t[i].value;
            return null
        },
        getAll: function (e) {
            no(arguments.length, 1);
            for (var t = Vr(this).entries, n = e + "", i = [], r = 0; r < t.length; r++) t[r].key === n && i.push(t[r].value);
            return i
        },
        has: function (e) {
            no(arguments.length, 1);
            for (var t = Vr(this).entries, n = e + "", i = 0; i < t.length;)
                if (t[i++].key === n) return !0;
            return !1
        },
        set: function (e, t) {
            no(arguments.length, 1);
            for (var n, i = Vr(this), r = i.entries, o = !1, a = e + "", s = t + "", l = 0; l < r.length; l++)(n = r[l]).key === a && (o ? r.splice(l--, 1) : (o = !0, n.value = s));
            o || r.push({
                key: a,
                value: s
            }), i.updateURL()
        },
        sort: function () {
            var e, t, n, i = Vr(this),
                r = i.entries,
                o = r.slice();
            for (r.length = 0, n = 0; n < o.length; n++) {
                for (e = o[n], t = 0; t < n; t++)
                    if (r[t].key > e.key) {
                        r.splice(t, 0, e);
                        break
                    } t === n && r.push(e)
            }
            i.updateURL()
        },
        forEach: function (e) {
            for (var t, n = Vr(this).entries, i = ot(e, arguments.length > 1 ? arguments[1] : void 0, 3), r = 0; r < n.length;) i((t = n[r++]).value, t.key, this)
        },
        keys: function () {
            return new io(this, "keys")
        },
        values: function () {
            return new io(this, "values")
        },
        entries: function () {
            return new io(this, "entries")
        }
    }, {
        enumerable: !0
    }), te(oo, Fr, oo.entries), te(oo, "toString", (function () {
        for (var e, t = Vr(this).entries, n = [], i = 0; i < t.length;) e = t[i++], n.push(Zr(e.key) + "=" + Zr(e.value));
        return n.join("&")
    }), {
        enumerable: !0
    }), it(ro, qr), je({
        global: !0,
        forced: !hr
    }, {
        URLSearchParams: ro
    }), hr || "function" != typeof Ur || "function" != typeof Dr || je({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            var t, n, i, r = [e];
            return arguments.length > 1 && (g(t = arguments[1]) && (n = t.body, li(n) === qr && ((i = t.headers ? new Dr(t.headers) : new Dr).has("content-type") || i.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"), t = Ve(t, {
                body: c(0, String(n)),
                headers: c(0, i)
            }))), r.push(t)), Ur.apply(this, r)
        }
    });
    var ao, so = {
            URLSearchParams: ro,
            getState: Vr
        },
        lo = Ci.codeAt,
        co = i.URL,
        uo = so.URLSearchParams,
        fo = so.getState,
        ho = ee.set,
        po = ee.getterFor("URL"),
        mo = Math.floor,
        go = Math.pow,
        vo = "Invalid scheme",
        yo = "Invalid host",
        bo = "Invalid port",
        wo = /[A-Za-z]/,
        ko = /[\d+-.A-Za-z]/,
        To = /\d/,
        So = /^(0x|0X)/,
        Eo = /^[0-7]+$/,
        Ao = /^\d+$/,
        Co = /^[\dA-Fa-f]+$/,
        Po = /[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,
        xo = /[\u0000\u0009\u000A\u000D #/:?@[\\]]/,
        Oo = /^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,
        Io = /[\u0009\u000A\u000D]/g,
        jo = function (e, t) {
            var n, i, r;
            if ("[" == t.charAt(0)) {
                if ("]" != t.charAt(t.length - 1)) return yo;
                if (!(n = No(t.slice(1, -1)))) return yo;
                e.host = n
            } else if (Ho(e)) {
                if (t = function (e) {
                        var t, n, i = [],
                            r = e.toLowerCase().replace(xr, ".").split(".");
                        for (t = 0; t < r.length; t++) n = r[t], i.push(Pr.test(n) ? "xn--" + Rr(n) : n);
                        return i.join(".")
                    }(t), Po.test(t)) return yo;
                if (null === (n = Lo(t))) return yo;
                e.host = n
            } else {
                if (xo.test(t)) return yo;
                for (n = "", i = Ar(t), r = 0; r < i.length; r++) n += Fo(i[r], Mo);
                e.host = n
            }
        },
        Lo = function (e) {
            var t, n, i, r, o, a, s, l = e.split(".");
            if (l.length && "" == l[l.length - 1] && l.pop(), (t = l.length) > 4) return e;
            for (n = [], i = 0; i < t; i++) {
                if ("" == (r = l[i])) return e;
                if (o = 10, r.length > 1 && "0" == r.charAt(0) && (o = So.test(r) ? 16 : 8, r = r.slice(8 == o ? 1 : 2)), "" === r) a = 0;
                else {
                    if (!(10 == o ? Ao : 8 == o ? Eo : Co).test(r)) return e;
                    a = parseInt(r, o)
                }
                n.push(a)
            }
            for (i = 0; i < t; i++)
                if (a = n[i], i == t - 1) {
                    if (a >= go(256, 5 - t)) return null
                } else if (a > 255) return null;
            for (s = n.pop(), i = 0; i < n.length; i++) s += n[i] * go(256, 3 - i);
            return s
        },
        No = function (e) {
            var t, n, i, r, o, a, s, l = [0, 0, 0, 0, 0, 0, 0, 0],
                c = 0,
                u = null,
                f = 0,
                d = function () {
                    return e.charAt(f)
                };
            if (":" == d()) {
                if (":" != e.charAt(1)) return;
                f += 2, u = ++c
            }
            for (; d();) {
                if (8 == c) return;
                if (":" != d()) {
                    for (t = n = 0; n < 4 && Co.test(d());) t = 16 * t + parseInt(d(), 16), f++, n++;
                    if ("." == d()) {
                        if (0 == n) return;
                        if (f -= n, c > 6) return;
                        for (i = 0; d();) {
                            if (r = null, i > 0) {
                                if (!("." == d() && i < 4)) return;
                                f++
                            }
                            if (!To.test(d())) return;
                            for (; To.test(d());) {
                                if (o = parseInt(d(), 10), null === r) r = o;
                                else {
                                    if (0 == r) return;
                                    r = 10 * r + o
                                }
                                if (r > 255) return;
                                f++
                            }
                            l[c] = 256 * l[c] + r, 2 != ++i && 4 != i || c++
                        }
                        if (4 != i) return;
                        break
                    }
                    if (":" == d()) {
                        if (f++, !d()) return
                    } else if (d()) return;
                    l[c++] = t
                } else {
                    if (null !== u) return;
                    f++, u = ++c
                }
            }
            if (null !== u)
                for (a = c - u, c = 7; 0 != c && a > 0;) s = l[c], l[c--] = l[u + a - 1], l[u + --a] = s;
            else if (8 != c) return;
            return l
        },
        Ro = function (e) {
            var t, n, i, r;
            if ("number" == typeof e) {
                for (t = [], n = 0; n < 4; n++) t.unshift(e % 256), e = mo(e / 256);
                return t.join(".")
            }
            if ("object" == typeof e) {
                for (t = "", i = function (e) {
                        for (var t = null, n = 1, i = null, r = 0, o = 0; o < 8; o++) 0 !== e[o] ? (r > n && (t = i, n = r), i = null, r = 0) : (null === i && (i = o), ++r);
                        return r > n && (t = i, n = r), t
                    }(e), n = 0; n < 8; n++) r && 0 === e[n] || (r && (r = !1), i === n ? (t += n ? ":" : "::", r = !0) : (t += e[n].toString(16), n < 7 && (t += ":")));
                return "[" + t + "]"
            }
            return e
        },
        Mo = {},
        _o = vr({}, Mo, {
            " ": 1,
            '"': 1,
            "<": 1,
            ">": 1,
            "`": 1
        }),
        Uo = vr({}, _o, {
            "#": 1,
            "?": 1,
            "{": 1,
            "}": 1
        }),
        Do = vr({}, Uo, {
            "/": 1,
            ":": 1,
            ";": 1,
            "=": 1,
            "@": 1,
            "[": 1,
            "\\": 1,
            "]": 1,
            "^": 1,
            "|": 1
        }),
        Fo = function (e, t) {
            var n = lo(e, 0);
            return n > 32 && n < 127 && !b(t, e) ? e : encodeURIComponent(e)
        },
        qo = {
            ftp: 21,
            file: null,
            http: 80,
            https: 443,
            ws: 80,
            wss: 443
        },
        Ho = function (e) {
            return b(qo, e.scheme)
        },
        Bo = function (e) {
            return "" != e.username || "" != e.password
        },
        Vo = function (e) {
            return !e.host || e.cannotBeABaseURL || "file" == e.scheme
        },
        zo = function (e, t) {
            var n;
            return 2 == e.length && wo.test(e.charAt(0)) && (":" == (n = e.charAt(1)) || !t && "|" == n)
        },
        Wo = function (e) {
            var t;
            return e.length > 1 && zo(e.slice(0, 2)) && (2 == e.length || "/" === (t = e.charAt(2)) || "\\" === t || "?" === t || "#" === t)
        },
        Ko = function (e) {
            var t = e.path,
                n = t.length;
            !n || "file" == e.scheme && 1 == n && zo(t[0], !0) || t.pop()
        },
        $o = function (e) {
            return "." === e || "%2e" === e.toLowerCase()
        },
        Yo = {},
        Go = {},
        Xo = {},
        Qo = {},
        Jo = {},
        Zo = {},
        ea = {},
        ta = {},
        na = {},
        ia = {},
        ra = {},
        oa = {},
        aa = {},
        sa = {},
        la = {},
        ca = {},
        ua = {},
        fa = {},
        da = {},
        ha = {},
        pa = {},
        ma = function (e, t, n, i) {
            var r, o, a, s, l, c = n || Yo,
                u = 0,
                f = "",
                d = !1,
                h = !1,
                p = !1;
            for (n || (e.scheme = "", e.username = "", e.password = "", e.host = null, e.port = null, e.path = [], e.query = null, e.fragment = null, e.cannotBeABaseURL = !1, t = t.replace(Oo, "")), t = t.replace(Io, ""), r = Ar(t); u <= r.length;) {
                switch (o = r[u], c) {
                    case Yo:
                        if (!o || !wo.test(o)) {
                            if (n) return vo;
                            c = Xo;
                            continue
                        }
                        f += o.toLowerCase(), c = Go;
                        break;
                    case Go:
                        if (o && (ko.test(o) || "+" == o || "-" == o || "." == o)) f += o.toLowerCase();
                        else {
                            if (":" != o) {
                                if (n) return vo;
                                f = "", c = Xo, u = 0;
                                continue
                            }
                            if (n && (Ho(e) != b(qo, f) || "file" == f && (Bo(e) || null !== e.port) || "file" == e.scheme && !e.host)) return;
                            if (e.scheme = f, n) return void(Ho(e) && qo[e.scheme] == e.port && (e.port = null));
                            f = "", "file" == e.scheme ? c = sa : Ho(e) && i && i.scheme == e.scheme ? c = Qo : Ho(e) ? c = ta : "/" == r[u + 1] ? (c = Jo, u++) : (e.cannotBeABaseURL = !0, e.path.push(""), c = da)
                        }
                        break;
                    case Xo:
                        if (!i || i.cannotBeABaseURL && "#" != o) return vo;
                        if (i.cannotBeABaseURL && "#" == o) {
                            e.scheme = i.scheme, e.path = i.path.slice(), e.query = i.query, e.fragment = "", e.cannotBeABaseURL = !0, c = pa;
                            break
                        }
                        c = "file" == i.scheme ? sa : Zo;
                        continue;
                    case Qo:
                        if ("/" != o || "/" != r[u + 1]) {
                            c = Zo;
                            continue
                        }
                        c = na, u++;
                        break;
                    case Jo:
                        if ("/" == o) {
                            c = ia;
                            break
                        }
                        c = fa;
                        continue;
                    case Zo:
                        if (e.scheme = i.scheme, o == ao) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query;
                        else if ("/" == o || "\\" == o && Ho(e)) c = ea;
                        else if ("?" == o) e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = "", c = ha;
                        else {
                            if ("#" != o) {
                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.path.pop(), c = fa;
                                continue
                            }
                            e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = pa
                        }
                        break;
                    case ea:
                        if (!Ho(e) || "/" != o && "\\" != o) {
                            if ("/" != o) {
                                e.username = i.username, e.password = i.password, e.host = i.host, e.port = i.port, c = fa;
                                continue
                            }
                            c = ia
                        } else c = na;
                        break;
                    case ta:
                        if (c = na, "/" != o || "/" != f.charAt(u + 1)) continue;
                        u++;
                        break;
                    case na:
                        if ("/" != o && "\\" != o) {
                            c = ia;
                            continue
                        }
                        break;
                    case ia:
                        if ("@" == o) {
                            d && (f = "%40" + f), d = !0, a = Ar(f);
                            for (var m = 0; m < a.length; m++) {
                                var g = a[m];
                                if (":" != g || p) {
                                    var v = Fo(g, Do);
                                    p ? e.password += v : e.username += v
                                } else p = !0
                            }
                            f = ""
                        } else if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e)) {
                            if (d && "" == f) return "Invalid authority";
                            u -= Ar(f).length + 1, f = "", c = ra
                        } else f += o;
                        break;
                    case ra:
                    case oa:
                        if (n && "file" == e.scheme) {
                            c = ca;
                            continue
                        }
                        if (":" != o || h) {
                            if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e)) {
                                if (Ho(e) && "" == f) return yo;
                                if (n && "" == f && (Bo(e) || null !== e.port)) return;
                                if (s = jo(e, f)) return s;
                                if (f = "", c = ua, n) return;
                                continue
                            }
                            "[" == o ? h = !0 : "]" == o && (h = !1), f += o
                        } else {
                            if ("" == f) return yo;
                            if (s = jo(e, f)) return s;
                            if (f = "", c = aa, n == oa) return
                        }
                        break;
                    case aa:
                        if (!To.test(o)) {
                            if (o == ao || "/" == o || "?" == o || "#" == o || "\\" == o && Ho(e) || n) {
                                if ("" != f) {
                                    var y = parseInt(f, 10);
                                    if (y > 65535) return bo;
                                    e.port = Ho(e) && y === qo[e.scheme] ? null : y, f = ""
                                }
                                if (n) return;
                                c = ua;
                                continue
                            }
                            return bo
                        }
                        f += o;
                        break;
                    case sa:
                        if (e.scheme = "file", "/" == o || "\\" == o) c = la;
                        else {
                            if (!i || "file" != i.scheme) {
                                c = fa;
                                continue
                            }
                            if (o == ao) e.host = i.host, e.path = i.path.slice(), e.query = i.query;
                            else if ("?" == o) e.host = i.host, e.path = i.path.slice(), e.query = "", c = ha;
                            else {
                                if ("#" != o) {
                                    Wo(r.slice(u).join("")) || (e.host = i.host, e.path = i.path.slice(), Ko(e)), c = fa;
                                    continue
                                }
                                e.host = i.host, e.path = i.path.slice(), e.query = i.query, e.fragment = "", c = pa
                            }
                        }
                        break;
                    case la:
                        if ("/" == o || "\\" == o) {
                            c = ca;
                            break
                        }
                        i && "file" == i.scheme && !Wo(r.slice(u).join("")) && (zo(i.path[0], !0) ? e.path.push(i.path[0]) : e.host = i.host), c = fa;
                        continue;
                    case ca:
                        if (o == ao || "/" == o || "\\" == o || "?" == o || "#" == o) {
                            if (!n && zo(f)) c = fa;
                            else if ("" == f) {
                                if (e.host = "", n) return;
                                c = ua
                            } else {
                                if (s = jo(e, f)) return s;
                                if ("localhost" == e.host && (e.host = ""), n) return;
                                f = "", c = ua
                            }
                            continue
                        }
                        f += o;
                        break;
                    case ua:
                        if (Ho(e)) {
                            if (c = fa, "/" != o && "\\" != o) continue
                        } else if (n || "?" != o)
                            if (n || "#" != o) {
                                if (o != ao && (c = fa, "/" != o)) continue
                            } else e.fragment = "", c = pa;
                        else e.query = "", c = ha;
                        break;
                    case fa:
                        if (o == ao || "/" == o || "\\" == o && Ho(e) || !n && ("?" == o || "#" == o)) {
                            if (".." === (l = (l = f).toLowerCase()) || "%2e." === l || ".%2e" === l || "%2e%2e" === l ? (Ko(e), "/" == o || "\\" == o && Ho(e) || e.path.push("")) : $o(f) ? "/" == o || "\\" == o && Ho(e) || e.path.push("") : ("file" == e.scheme && !e.path.length && zo(f) && (e.host && (e.host = ""), f = f.charAt(0) + ":"), e.path.push(f)), f = "", "file" == e.scheme && (o == ao || "?" == o || "#" == o))
                                for (; e.path.length > 1 && "" === e.path[0];) e.path.shift();
                            "?" == o ? (e.query = "", c = ha) : "#" == o && (e.fragment = "", c = pa)
                        } else f += Fo(o, Uo);
                        break;
                    case da:
                        "?" == o ? (e.query = "", c = ha) : "#" == o ? (e.fragment = "", c = pa) : o != ao && (e.path[0] += Fo(o, Mo));
                        break;
                    case ha:
                        n || "#" != o ? o != ao && ("'" == o && Ho(e) ? e.query += "%27" : e.query += "#" == o ? "%23" : Fo(o, Mo)) : (e.fragment = "", c = pa);
                        break;
                    case pa:
                        o != ao && (e.fragment += Fo(o, _o))
                }
                u++
            }
        },
        ga = function (e) {
            var t, n, i = pr(this, ga, "URL"),
                r = arguments.length > 1 ? arguments[1] : void 0,
                a = String(e),
                s = ho(i, {
                    type: "URL"
                });
            if (void 0 !== r)
                if (r instanceof ga) t = po(r);
                else if (n = ma(t = {}, String(r))) throw TypeError(n);
            if (n = ma(s, a, null, t)) throw TypeError(n);
            var l = s.searchParams = new uo,
                c = fo(l);
            c.updateSearchParams(s.query), c.updateURL = function () {
                s.query = String(l) || null
            }, o || (i.href = ya.call(i), i.origin = ba.call(i), i.protocol = wa.call(i), i.username = ka.call(i), i.password = Ta.call(i), i.host = Sa.call(i), i.hostname = Ea.call(i), i.port = Aa.call(i), i.pathname = Ca.call(i), i.search = Pa.call(i), i.searchParams = xa.call(i), i.hash = Oa.call(i))
        },
        va = ga.prototype,
        ya = function () {
            var e = po(this),
                t = e.scheme,
                n = e.username,
                i = e.password,
                r = e.host,
                o = e.port,
                a = e.path,
                s = e.query,
                l = e.fragment,
                c = t + ":";
            return null !== r ? (c += "//", Bo(e) && (c += n + (i ? ":" + i : "") + "@"), c += Ro(r), null !== o && (c += ":" + o)) : "file" == t && (c += "//"), c += e.cannotBeABaseURL ? a[0] : a.length ? "/" + a.join("/") : "", null !== s && (c += "?" + s), null !== l && (c += "#" + l), c
        },
        ba = function () {
            var e = po(this),
                t = e.scheme,
                n = e.port;
            if ("blob" == t) try {
                return new URL(t.path[0]).origin
            } catch (e) {
                return "null"
            }
            return "file" != t && Ho(e) ? t + "://" + Ro(e.host) + (null !== n ? ":" + n : "") : "null"
        },
        wa = function () {
            return po(this).scheme + ":"
        },
        ka = function () {
            return po(this).username
        },
        Ta = function () {
            return po(this).password
        },
        Sa = function () {
            var e = po(this),
                t = e.host,
                n = e.port;
            return null === t ? "" : null === n ? Ro(t) : Ro(t) + ":" + n
        },
        Ea = function () {
            var e = po(this).host;
            return null === e ? "" : Ro(e)
        },
        Aa = function () {
            var e = po(this).port;
            return null === e ? "" : String(e)
        },
        Ca = function () {
            var e = po(this),
                t = e.path;
            return e.cannotBeABaseURL ? t[0] : t.length ? "/" + t.join("/") : ""
        },
        Pa = function () {
            var e = po(this).query;
            return e ? "?" + e : ""
        },
        xa = function () {
            return po(this).searchParams
        },
        Oa = function () {
            var e = po(this).fragment;
            return e ? "#" + e : ""
        },
        Ia = function (e, t) {
            return {
                get: e,
                set: t,
                configurable: !0,
                enumerable: !0
            }
        };
    if (o && Ue(va, {
            href: Ia(ya, (function (e) {
                var t = po(this),
                    n = String(e),
                    i = ma(t, n);
                if (i) throw TypeError(i);
                fo(t.searchParams).updateSearchParams(t.query)
            })),
            origin: Ia(ba),
            protocol: Ia(wa, (function (e) {
                var t = po(this);
                ma(t, String(e) + ":", Yo)
            })),
            username: Ia(ka, (function (e) {
                var t = po(this),
                    n = Ar(String(e));
                if (!Vo(t)) {
                    t.username = "";
                    for (var i = 0; i < n.length; i++) t.username += Fo(n[i], Do)
                }
            })),
            password: Ia(Ta, (function (e) {
                var t = po(this),
                    n = Ar(String(e));
                if (!Vo(t)) {
                    t.password = "";
                    for (var i = 0; i < n.length; i++) t.password += Fo(n[i], Do)
                }
            })),
            host: Ia(Sa, (function (e) {
                var t = po(this);
                t.cannotBeABaseURL || ma(t, String(e), ra)
            })),
            hostname: Ia(Ea, (function (e) {
                var t = po(this);
                t.cannotBeABaseURL || ma(t, String(e), oa)
            })),
            port: Ia(Aa, (function (e) {
                var t = po(this);
                Vo(t) || ("" == (e = String(e)) ? t.port = null : ma(t, e, aa))
            })),
            pathname: Ia(Ca, (function (e) {
                var t = po(this);
                t.cannotBeABaseURL || (t.path = [], ma(t, e + "", ua))
            })),
            search: Ia(Pa, (function (e) {
                var t = po(this);
                "" == (e = String(e)) ? t.query = null: ("?" == e.charAt(0) && (e = e.slice(1)), t.query = "", ma(t, e, ha)), fo(t.searchParams).updateSearchParams(t.query)
            })),
            searchParams: Ia(xa),
            hash: Ia(Oa, (function (e) {
                var t = po(this);
                "" != (e = String(e)) ? ("#" == e.charAt(0) && (e = e.slice(1)), t.fragment = "", ma(t, e, pa)) : t.fragment = null
            }))
        }), te(va, "toJSON", (function () {
            return ya.call(this)
        }), {
            enumerable: !0
        }), te(va, "toString", (function () {
            return ya.call(this)
        }), {
            enumerable: !0
        }), co) {
        var ja = co.createObjectURL,
            La = co.revokeObjectURL;
        ja && te(ga, "createObjectURL", (function (e) {
            return ja.apply(co, arguments)
        })), La && te(ga, "revokeObjectURL", (function (e) {
            return La.apply(co, arguments)
        }))
    }

    function Na(e) {
        return (Na = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ra(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Ma(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function _a(e, t, n) {
        return t && Ma(e.prototype, t), n && Ma(e, n), e
    }

    function Ua(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function Da(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function Fa(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? Da(Object(n), !0).forEach((function (t) {
                Ua(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Da(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function qa(e, t) {
        if (null == e) return {};
        var n, i, r = function (e, t) {
            if (null == e) return {};
            var n, i, r = {},
                o = Object.keys(e);
            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
    }

    function Ha(e, t) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e))) return;
            var n = [],
                i = !0,
                r = !1,
                o = void 0;
            try {
                for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
            } catch (e) {
                r = !0, o = e
            } finally {
                try {
                    i || null == s.return || s.return()
                } finally {
                    if (r) throw o
                }
            }
            return n
        }(e, t) || Va(e, t) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Ba(e) {
        return function (e) {
            if (Array.isArray(e)) return za(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || Va(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Va(e, t) {
        if (e) {
            if ("string" == typeof e) return za(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? za(e, t) : void 0
        }
    }

    function za(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    it(ga, "URL"), je({
            global: !0,
            forced: !hr,
            sham: !o
        }, {
            URL: ga
        }),
        function (e) {
            var t = function () {
                    try {
                        return !!Symbol.iterator
                    } catch (e) {
                        return !1
                    }
                }(),
                n = function (e) {
                    var n = {
                        next: function () {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t && (n[Symbol.iterator] = function () {
                        return n
                    }), n
                },
                i = function (e) {
                    return encodeURIComponent(e).replace(/%20/g, "+")
                },
                r = function (e) {
                    return decodeURIComponent(String(e).replace(/\+/g, " "))
                };
            (function () {
                try {
                    var t = e.URLSearchParams;
                    return "a=1" === new t("?a=1").toString() && "function" == typeof t.prototype.set && "function" == typeof t.prototype.entries
                } catch (e) {
                    return !1
                }
            })() || function () {
                var r = function e(t) {
                        Object.defineProperty(this, "_entries", {
                            writable: !0,
                            value: {}
                        });
                        var n = Na(t);
                        if ("undefined" === n);
                        else if ("string" === n) "" !== t && this._fromString(t);
                        else if (t instanceof e) {
                            var i = this;
                            t.forEach((function (e, t) {
                                i.append(t, e)
                            }))
                        } else {
                            if (null === t || "object" !== n) throw new TypeError("Unsupported input's type for URLSearchParams");
                            if ("[object Array]" === Object.prototype.toString.call(t))
                                for (var r = 0; r < t.length; r++) {
                                    var o = t[r];
                                    if ("[object Array]" !== Object.prototype.toString.call(o) && 2 === o.length) throw new TypeError("Expected [string, any] as entry at index " + r + " of URLSearchParams's input");
                                    this.append(o[0], o[1])
                                } else
                                    for (var a in t) t.hasOwnProperty(a) && this.append(a, t[a])
                        }
                    },
                    o = r.prototype;
                o.append = function (e, t) {
                    e in this._entries ? this._entries[e].push(String(t)) : this._entries[e] = [String(t)]
                }, o.delete = function (e) {
                    delete this._entries[e]
                }, o.get = function (e) {
                    return e in this._entries ? this._entries[e][0] : null
                }, o.getAll = function (e) {
                    return e in this._entries ? this._entries[e].slice(0) : []
                }, o.has = function (e) {
                    return e in this._entries
                }, o.set = function (e, t) {
                    this._entries[e] = [String(t)]
                }, o.forEach = function (e, t) {
                    var n;
                    for (var i in this._entries)
                        if (this._entries.hasOwnProperty(i)) {
                            n = this._entries[i];
                            for (var r = 0; r < n.length; r++) e.call(t, n[r], i, this)
                        }
                }, o.keys = function () {
                    var e = [];
                    return this.forEach((function (t, n) {
                        e.push(n)
                    })), n(e)
                }, o.values = function () {
                    var e = [];
                    return this.forEach((function (t) {
                        e.push(t)
                    })), n(e)
                }, o.entries = function () {
                    var e = [];
                    return this.forEach((function (t, n) {
                        e.push([n, t])
                    })), n(e)
                }, t && (o[Symbol.iterator] = o.entries), o.toString = function () {
                    var e = [];
                    return this.forEach((function (t, n) {
                        e.push(i(n) + "=" + i(t))
                    })), e.join("&")
                }, e.URLSearchParams = r
            }();
            var o = e.URLSearchParams.prototype;
            "function" != typeof o.sort && (o.sort = function () {
                var e = this,
                    t = [];
                this.forEach((function (n, i) {
                    t.push([i, n]), e._entries || e.delete(i)
                })), t.sort((function (e, t) {
                    return e[0] < t[0] ? -1 : e[0] > t[0] ? 1 : 0
                })), e._entries && (e._entries = {});
                for (var n = 0; n < t.length; n++) this.append(t[n][0], t[n][1])
            }), "function" != typeof o._fromString && Object.defineProperty(o, "_fromString", {
                enumerable: !1,
                configurable: !1,
                writable: !1,
                value: function (e) {
                    if (this._entries) this._entries = {};
                    else {
                        var t = [];
                        this.forEach((function (e, n) {
                            t.push(n)
                        }));
                        for (var n = 0; n < t.length; n++) this.delete(t[n])
                    }
                    var i, o = (e = e.replace(/^\?/, "")).split("&");
                    for (n = 0; n < o.length; n++) i = o[n].split("="), this.append(r(i[0]), i.length > 1 ? r(i[1]) : "")
                }
            })
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e),
        function (e) {
            if (function () {
                    try {
                        var t = new e.URL("b", "http://a");
                        return t.pathname = "c d", "http://a/c%20d" === t.href && t.searchParams
                    } catch (e) {
                        return !1
                    }
                }() || function () {
                    var t = e.URL,
                        n = function (t, n) {
                            "string" != typeof t && (t = String(t)), n && "string" != typeof n && (n = String(n));
                            var i, r = document;
                            if (n && (void 0 === e.location || n !== e.location.href)) {
                                n = n.toLowerCase(), (i = (r = document.implementation.createHTMLDocument("")).createElement("base")).href = n, r.head.appendChild(i);
                                try {
                                    if (0 !== i.href.indexOf(n)) throw new Error(i.href)
                                } catch (e) {
                                    throw new Error("URL unable to set base " + n + " due to " + e)
                                }
                            }
                            var o = r.createElement("a");
                            o.href = t, i && (r.body.appendChild(o), o.href = o.href);
                            var a = r.createElement("input");
                            if (a.type = "url", a.value = t, ":" === o.protocol || !/:/.test(o.href) || !a.checkValidity() && !n) throw new TypeError("Invalid URL");
                            Object.defineProperty(this, "_anchorElement", {
                                value: o
                            });
                            var s = new e.URLSearchParams(this.search),
                                l = !0,
                                c = !0,
                                u = this;
                            ["append", "delete", "set"].forEach((function (e) {
                                var t = s[e];
                                s[e] = function () {
                                    t.apply(s, arguments), l && (c = !1, u.search = s.toString(), c = !0)
                                }
                            })), Object.defineProperty(this, "searchParams", {
                                value: s,
                                enumerable: !0
                            });
                            var f = void 0;
                            Object.defineProperty(this, "_updateSearchParams", {
                                enumerable: !1,
                                configurable: !1,
                                writable: !1,
                                value: function () {
                                    this.search !== f && (f = this.search, c && (l = !1, this.searchParams._fromString(this.search), l = !0))
                                }
                            })
                        },
                        i = n.prototype;
                    ["hash", "host", "hostname", "port", "protocol"].forEach((function (e) {
                        ! function (e) {
                            Object.defineProperty(i, e, {
                                get: function () {
                                    return this._anchorElement[e]
                                },
                                set: function (t) {
                                    this._anchorElement[e] = t
                                },
                                enumerable: !0
                            })
                        }(e)
                    })), Object.defineProperty(i, "search", {
                        get: function () {
                            return this._anchorElement.search
                        },
                        set: function (e) {
                            this._anchorElement.search = e, this._updateSearchParams()
                        },
                        enumerable: !0
                    }), Object.defineProperties(i, {
                        toString: {
                            get: function () {
                                var e = this;
                                return function () {
                                    return e.href
                                }
                            }
                        },
                        href: {
                            get: function () {
                                return this._anchorElement.href.replace(/\?$/, "")
                            },
                            set: function (e) {
                                this._anchorElement.href = e, this._updateSearchParams()
                            },
                            enumerable: !0
                        },
                        pathname: {
                            get: function () {
                                return this._anchorElement.pathname.replace(/(^\/?)/, "/")
                            },
                            set: function (e) {
                                this._anchorElement.pathname = e
                            },
                            enumerable: !0
                        },
                        origin: {
                            get: function () {
                                var e = {
                                        "http:": 80,
                                        "https:": 443,
                                        "ftp:": 21
                                    } [this._anchorElement.protocol],
                                    t = this._anchorElement.port != e && "" !== this._anchorElement.port;
                                return this._anchorElement.protocol + "//" + this._anchorElement.hostname + (t ? ":" + this._anchorElement.port : "")
                            },
                            enumerable: !0
                        },
                        password: {
                            get: function () {
                                return ""
                            },
                            set: function (e) {},
                            enumerable: !0
                        },
                        username: {
                            get: function () {
                                return ""
                            },
                            set: function (e) {},
                            enumerable: !0
                        }
                    }), n.createObjectURL = function (e) {
                        return t.createObjectURL.apply(t, arguments)
                    }, n.revokeObjectURL = function (e) {
                        return t.revokeObjectURL.apply(t, arguments)
                    }, e.URL = n
                }(), void 0 !== e.location && !("origin" in e.location)) {
                var t = function () {
                    return e.location.protocol + "//" + e.location.hostname + (e.location.port ? ":" + e.location.port : "")
                };
                try {
                    Object.defineProperty(e.location, "origin", {
                        get: t,
                        enumerable: !0
                    })
                } catch (n) {
                    setInterval((function () {
                        e.location.origin = t()
                    }), 100)
                }
            }
        }(void 0 !== e ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : e);
    var Wa = Qe("isConcatSpreadable"),
        Ka = 9007199254740991,
        $a = "Maximum allowed index exceeded",
        Ya = Xn >= 51 || !r((function () {
            var e = [];
            return e[Wa] = !1, e.concat()[0] !== e
        })),
        Ga = Jn("concat"),
        Xa = function (e) {
            if (!g(e)) return !1;
            var t = e[Wa];
            return void 0 !== t ? !!t : Re(e)
        };
    je({
        target: "Array",
        proto: !0,
        forced: !Ya || !Ga
    }, {
        concat: function (e) {
            var t, n, i, r, o, a = Me(this),
                s = st(a, 0),
                l = 0;
            for (t = -1, i = arguments.length; t < i; t++)
                if (Xa(o = -1 === t ? a : arguments[t])) {
                    if (l + (r = ce(o.length)) > Ka) throw TypeError($a);
                    for (n = 0; n < r; n++, l++) n in o && Wn(s, l, o[n])
                } else {
                    if (l >= Ka) throw TypeError($a);
                    Wn(s, l++, o)
                } return s.length = l, s
        }
    });
    var Qa = ut.filter,
        Ja = Jn("filter"),
        Za = Zt("filter");
    je({
        target: "Array",
        proto: !0,
        forced: !Ja || !Za
    }, {
        filter: function (e) {
            return Qa(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var es = ut.find,
        ts = "find",
        ns = !0,
        is = Zt(ts);
    ts in [] && Array(1).find((function () {
        ns = !1
    })), je({
        target: "Array",
        proto: !0,
        forced: ns || !is
    }, {
        find: function (e) {
            return es(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), mn(ts);
    var rs = Qe("iterator"),
        os = !1;
    try {
        var as = 0,
            ss = {
                next: function () {
                    return {
                        done: !!as++
                    }
                },
                return: function () {
                    os = !0
                }
            };
        ss[rs] = function () {
            return this
        }, Array.from(ss, (function () {
            throw 2
        }))
    } catch (e) {}
    var ls = function (e, t) {
            if (!t && !os) return !1;
            var n = !1;
            try {
                var i = {};
                i[rs] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(i)
            } catch (e) {}
            return n
        },
        cs = !ls((function (e) {
            Array.from(e)
        }));
    je({
        target: "Array",
        stat: !0,
        forced: cs
    }, {
        from: Ar
    });
    var us = pe.includes,
        fs = Zt("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    je({
        target: "Array",
        proto: !0,
        forced: !fs
    }, {
        includes: function (e) {
            return us(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), mn("includes");
    var ds = ut.map,
        hs = Jn("map"),
        ps = Zt("map");
    je({
        target: "Array",
        proto: !0,
        forced: !hs || !ps
    }, {
        map: function (e) {
            return ds(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ms = function (e, t, n) {
            var i, r;
            return Pn && "function" == typeof (i = t.constructor) && i !== n && g(r = i.prototype) && r !== n.prototype && Pn(e, r), e
        },
        gs = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        vs = "[" + gs + "]",
        ys = RegExp("^" + vs + vs + "*"),
        bs = RegExp(vs + vs + "*$"),
        ws = function (e) {
            return function (t) {
                var n = String(p(t));
                return 1 & e && (n = n.replace(ys, "")), 2 & e && (n = n.replace(bs, "")), n
            }
        },
        ks = {
            start: ws(1),
            end: ws(2),
            trim: ws(3)
        },
        Ts = be.f,
        Ss = A.f,
        Es = x.f,
        As = ks.trim,
        Cs = "Number",
        Ps = i.Number,
        xs = Ps.prototype,
        Os = f(Ve(xs)) == Cs,
        Is = function (e) {
            var t, n, i, r, o, a, s, l, c = v(e, !1);
            if ("string" == typeof c && c.length > 2)
                if (43 === (t = (c = As(c)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        i = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        i = 8, r = 55;
                        break;
                    default:
                        return +c
                }
                for (a = (o = c.slice(2)).length, s = 0; s < a; s++)
                    if ((l = o.charCodeAt(s)) < 48 || l > r) return NaN;
                return parseInt(o, i)
            }
            return +c
        };
    if (Oe(Cs, !Ps(" 0o1") || !Ps("0b1") || Ps("+0x1"))) {
        for (var js, Ls = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof Ls && (Os ? r((function () {
                    xs.valueOf.call(n)
                })) : f(n) != Cs) ? ms(new Ps(Is(t)), n, Ls) : Is(t)
            }, Ns = o ? Ts(Ps) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), Rs = 0; Ns.length > Rs; Rs++) b(Ps, js = Ns[Rs]) && !b(Ls, js) && Es(Ls, js, Ss(Ps, js));
        Ls.prototype = xs, xs.constructor = Ls, te(i, Cs, Ls)
    }
    var Ms = r((function () {
        _e(1)
    }));
    je({
        target: "Object",
        stat: !0,
        forced: Ms
    }, {
        keys: function (e) {
            return _e(Me(e))
        }
    });
    var _s = l.f,
        Us = function (e) {
            return function (t) {
                for (var n, i = m(t), r = _e(i), a = r.length, s = 0, l = []; a > s;) n = r[s++], o && !_s.call(i, n) || l.push(e ? [n, i[n]] : i[n]);
                return l
            }
        },
        Ds = {
            entries: Us(!0),
            values: Us(!1)
        },
        Fs = Ds.values;
    je({
        target: "Object",
        stat: !0
    }, {
        values: function (e) {
            return Fs(e)
        }
    });
    var qs = function (e) {
            if (Yi(e)) throw TypeError("The method doesn't accept regular expressions");
            return e
        },
        Hs = Qe("match"),
        Bs = function (e) {
            var t = /./;
            try {
                "/./" [e](t)
            } catch (n) {
                try {
                    return t[Hs] = !1, "/./" [e](t)
                } catch (e) {}
            }
            return !1
        };
    je({
        target: "String",
        proto: !0,
        forced: !Bs("includes")
    }, {
        includes: function (e) {
            return !!~String(p(this)).indexOf(qs(e), arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Vs = !r((function () {
            return Object.isExtensible(Object.preventExtensions({}))
        })),
        zs = t((function (e) {
            var t = x.f,
                n = V("meta"),
                i = 0,
                r = Object.isExtensible || function () {
                    return !0
                },
                o = function (e) {
                    t(e, n, {
                        value: {
                            objectID: "O" + ++i,
                            weakData: {}
                        }
                    })
                },
                a = e.exports = {
                    REQUIRED: !1,
                    fastKey: function (e, t) {
                        if (!g(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!b(e, n)) {
                            if (!r(e)) return "F";
                            if (!t) return "E";
                            o(e)
                        }
                        return e[n].objectID
                    },
                    getWeakData: function (e, t) {
                        if (!b(e, n)) {
                            if (!r(e)) return !0;
                            if (!t) return !1;
                            o(e)
                        }
                        return e[n].weakData
                    },
                    onFreeze: function (e) {
                        return Vs && a.REQUIRED && r(e) && !b(e, n) && o(e), e
                    }
                };
            K[n] = !0
        })),
        Ws = (zs.REQUIRED, zs.fastKey, zs.getWeakData, zs.onFreeze, function (e, t) {
            this.stopped = e, this.result = t
        }),
        Ks = function (e, t, n) {
            var i, r, o, a, s, l, c, u = n && n.that,
                f = !(!n || !n.AS_ENTRIES),
                d = !(!n || !n.IS_ITERATOR),
                h = !(!n || !n.INTERRUPTED),
                p = ot(t, u, 1 + f + h),
                m = function (e) {
                    return i && yr(i), new Ws(!0, e)
                },
                g = function (e) {
                    return f ? (C(e), h ? p(e[0], e[1], m) : p(e[0], e[1])) : h ? p(e, m) : p(e)
                };
            if (d) i = e;
            else {
                if ("function" != typeof (r = Er(e))) throw TypeError("Target is not iterable");
                if (Tr(r)) {
                    for (o = 0, a = ce(e.length); a > o; o++)
                        if ((s = g(e[o])) && s instanceof Ws) return s;
                    return new Ws(!1)
                }
                i = r.call(e)
            }
            for (l = i.next; !(c = l.call(i)).done;) {
                try {
                    s = g(c.value)
                } catch (e) {
                    throw yr(i), e
                }
                if ("object" == typeof s && s && s instanceof Ws) return s
            }
            return new Ws(!1)
        },
        $s = zs.getWeakData,
        Ys = ee.set,
        Gs = ee.getterFor,
        Xs = ut.find,
        Qs = ut.findIndex,
        Js = 0,
        Zs = function (e) {
            return e.frozen || (e.frozen = new el)
        },
        el = function () {
            this.entries = []
        },
        tl = function (e, t) {
            return Xs(e.entries, (function (e) {
                return e[0] === t
            }))
        };
    el.prototype = {
        get: function (e) {
            var t = tl(this, e);
            if (t) return t[1]
        },
        has: function (e) {
            return !!tl(this, e)
        },
        set: function (e, t) {
            var n = tl(this, e);
            n ? n[1] = t : this.entries.push([e, t])
        },
        delete: function (e) {
            var t = Qs(this.entries, (function (t) {
                return t[0] === e
            }));
            return ~t && this.entries.splice(t, 1), !!~t
        }
    };
    var nl = {
            getConstructor: function (e, t, n, i) {
                var r = e((function (e, o) {
                        pr(e, r, t), Ys(e, {
                            type: t,
                            id: Js++,
                            frozen: void 0
                        }), null != o && Ks(o, e[i], {
                            that: e,
                            AS_ENTRIES: n
                        })
                    })),
                    o = Gs(t),
                    a = function (e, t, n) {
                        var i = o(e),
                            r = $s(C(t), !0);
                        return !0 === r ? Zs(i).set(t, n) : r[i.id] = n, e
                    };
                return Mr(r.prototype, {
                    delete: function (e) {
                        var t = o(this);
                        if (!g(e)) return !1;
                        var n = $s(e);
                        return !0 === n ? Zs(t).delete(e) : n && b(n, t.id) && delete n[t.id]
                    },
                    has: function (e) {
                        var t = o(this);
                        if (!g(e)) return !1;
                        var n = $s(e);
                        return !0 === n ? Zs(t).has(e) : n && b(n, t.id)
                    }
                }), Mr(r.prototype, n ? {
                    get: function (e) {
                        var t = o(this);
                        if (g(e)) {
                            var n = $s(e);
                            return !0 === n ? Zs(t).get(e) : n ? n[t.id] : void 0
                        }
                    },
                    set: function (e, t) {
                        return a(this, e, t)
                    }
                } : {
                    add: function (e) {
                        return a(this, e, !0)
                    }
                }), r
            }
        },
        il = (t((function (e) {
            var t, n = ee.enforce,
                o = !i.ActiveXObject && "ActiveXObject" in i,
                a = Object.isExtensible,
                s = function (e) {
                    return function () {
                        return e(this, arguments.length ? arguments[0] : void 0)
                    }
                },
                l = e.exports = function (e, t, n) {
                    var o = -1 !== e.indexOf("Map"),
                        a = -1 !== e.indexOf("Weak"),
                        s = o ? "set" : "add",
                        l = i[e],
                        c = l && l.prototype,
                        u = l,
                        f = {},
                        d = function (e) {
                            var t = c[e];
                            te(c, e, "add" == e ? function (e) {
                                return t.call(this, 0 === e ? 0 : e), this
                            } : "delete" == e ? function (e) {
                                return !(a && !g(e)) && t.call(this, 0 === e ? 0 : e)
                            } : "get" == e ? function (e) {
                                return a && !g(e) ? void 0 : t.call(this, 0 === e ? 0 : e)
                            } : "has" == e ? function (e) {
                                return !(a && !g(e)) && t.call(this, 0 === e ? 0 : e)
                            } : function (e, n) {
                                return t.call(this, 0 === e ? 0 : e, n), this
                            })
                        };
                    if (Oe(e, "function" != typeof l || !(a || c.forEach && !r((function () {
                            (new l).entries().next()
                        }))))) u = n.getConstructor(t, e, o, s), zs.REQUIRED = !0;
                    else if (Oe(e, !0)) {
                        var h = new u,
                            p = h[s](a ? {} : -0, 1) != h,
                            m = r((function () {
                                h.has(1)
                            })),
                            v = ls((function (e) {
                                new l(e)
                            })),
                            y = !a && r((function () {
                                for (var e = new l, t = 5; t--;) e[s](t, t);
                                return !e.has(-0)
                            }));
                        v || ((u = t((function (t, n) {
                            pr(t, u, e);
                            var i = ms(new l, t, u);
                            return null != n && Ks(n, i[s], {
                                that: i,
                                AS_ENTRIES: o
                            }), i
                        }))).prototype = c, c.constructor = u), (m || y) && (d("delete"), d("has"), o && d("get")), (y || p) && d(s), a && c.clear && delete c.clear
                    }
                    return f[e] = u, je({
                        global: !0,
                        forced: u != l
                    }, f), it(u, e), a || n.setStrong(u, e, o), u
                }("WeakMap", s, nl);
            if (F && o) {
                t = nl.getConstructor(s, "WeakMap", !0), zs.REQUIRED = !0;
                var c = l.prototype,
                    u = c.delete,
                    f = c.has,
                    d = c.get,
                    h = c.set;
                Mr(c, {
                    delete: function (e) {
                        if (g(e) && !a(e)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new t), u.call(this, e) || i.frozen.delete(e)
                        }
                        return u.call(this, e)
                    },
                    has: function (e) {
                        if (g(e) && !a(e)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new t), f.call(this, e) || i.frozen.has(e)
                        }
                        return f.call(this, e)
                    },
                    get: function (e) {
                        if (g(e) && !a(e)) {
                            var i = n(this);
                            return i.frozen || (i.frozen = new t), f.call(this, e) ? d.call(this, e) : i.frozen.get(e)
                        }
                        return d.call(this, e)
                    },
                    set: function (e, i) {
                        if (g(e) && !a(e)) {
                            var r = n(this);
                            r.frozen || (r.frozen = new t), f.call(this, e) ? h.call(this, e, i) : r.frozen.set(e, i)
                        } else h.call(this, e, i);
                        return this
                    }
                })
            }
        })), ut.every),
        rl = Gt("every"),
        ol = Zt("every");
    je({
        target: "Array",
        proto: !0,
        forced: !rl || !ol
    }, {
        every: function (e) {
            return il(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), je({
        target: "Object",
        stat: !0,
        forced: Object.assign !== vr
    }, {
        assign: vr
    });
    var al = ks.trim;
    je({
        target: "String",
        proto: !0,
        forced: function (e) {
            return r((function () {
                return !!gs[e]() || "​᠎" != "​᠎" [e]() || gs[e].name !== e
            }))
        }("trim")
    }, {
        trim: function () {
            return al(this)
        }
    });
    var sl = ut.some,
        ll = Gt("some"),
        cl = Zt("some");
    je({
        target: "Array",
        proto: !0,
        forced: !ll || !cl
    }, {
        some: function (e) {
            return sl(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var ul = "".repeat || function (e) {
            var t = String(p(this)),
                n = "",
                i = se(e);
            if (i < 0 || i == 1 / 0) throw RangeError("Wrong number of repetitions");
            for (; i > 0;
                (i >>>= 1) && (t += t)) 1 & i && (n += t);
            return n
        },
        fl = 1..toFixed,
        dl = Math.floor,
        hl = function (e, t, n) {
            return 0 === t ? n : t % 2 == 1 ? hl(e, t - 1, n * e) : hl(e * e, t / 2, n)
        },
        pl = fl && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2) || "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0)) || !r((function () {
            fl.call({})
        }));
    je({
        target: "Number",
        proto: !0,
        forced: pl
    }, {
        toFixed: function (e) {
            var t, n, i, r, o = function (e) {
                    if ("number" != typeof e && "Number" != f(e)) throw TypeError("Incorrect invocation");
                    return +e
                }(this),
                a = se(e),
                s = [0, 0, 0, 0, 0, 0],
                l = "",
                c = "0",
                u = function (e, t) {
                    for (var n = -1, i = t; ++n < 6;) i += e * s[n], s[n] = i % 1e7, i = dl(i / 1e7)
                },
                d = function (e) {
                    for (var t = 6, n = 0; --t >= 0;) n += s[t], s[t] = dl(n / e), n = n % e * 1e7
                },
                h = function () {
                    for (var e = 6, t = ""; --e >= 0;)
                        if ("" !== t || 0 === e || 0 !== s[e]) {
                            var n = String(s[e]);
                            t = "" === t ? n : t + ul.call("0", 7 - n.length) + n
                        } return t
                };
            if (a < 0 || a > 20) throw RangeError("Incorrect fraction digits");
            if (o != o) return "NaN";
            if (o <= -1e21 || o >= 1e21) return String(o);
            if (o < 0 && (l = "-", o = -o), o > 1e-21)
                if (n = (t = function (e) {
                        for (var t = 0, n = e; n >= 4096;) t += 12, n /= 4096;
                        for (; n >= 2;) t += 1, n /= 2;
                        return t
                    }(o * hl(2, 69, 1)) - 69) < 0 ? o * hl(2, -t, 1) : o / hl(2, t, 1), n *= 4503599627370496, (t = 52 - t) > 0) {
                    for (u(0, n), i = a; i >= 7;) u(1e7, 0), i -= 7;
                    for (u(hl(10, i, 1), 0), i = t - 1; i >= 23;) d(1 << 23), i -= 23;
                    d(1 << i), u(1, 1), d(2), c = h()
                } else u(0, n), u(1 << -t, 0), c = h() + ul.call("0", a);
            return c = a > 0 ? l + ((r = c.length) <= a ? "0." + ul.call("0", a - r) + c : c.slice(0, r - a) + "." + c.slice(r - a)) : l + c
        }
    });
    var ml = Ds.entries;
    je({
        target: "Object",
        stat: !0
    }, {
        entries: function (e) {
            return ml(e)
        }
    }), je({
        target: "Number",
        stat: !0
    }, {
        isNaN: function (e) {
            return e != e
        }
    });
    var gl = A.f,
        vl = r((function () {
            gl(1)
        }));

    function yl(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function bl(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function wl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function kl(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? wl(Object(n), !0).forEach((function (t) {
                bl(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wl(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }
    je({
        target: "Object",
        stat: !0,
        forced: !o || vl,
        sham: !o
    }, {
        getOwnPropertyDescriptor: function (e, t) {
            return gl(m(e), t)
        }
    }), je({
        target: "Object",
        stat: !0,
        sham: !o
    }, {
        getOwnPropertyDescriptors: function (e) {
            for (var t, n, i = m(e), r = A.f, o = ke(i), a = {}, s = 0; o.length > s;) void 0 !== (n = r(i, t = o[s++])) && Wn(a, t, n);
            return a
        }
    }), Ui("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = p(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = C(e),
                o = String(this);
            if (!r.global) return qi(r, o);
            var a = r.unicode;
            r.lastIndex = 0;
            for (var s, l = [], c = 0; null !== (s = qi(r, o));) {
                var u = String(s[0]);
                l[c] = u, "" === u && (r.lastIndex = Fi(o, ce(r.lastIndex), a)), c++
            }
            return 0 === c ? null : l
        }]
    }));
    var Tl = {
        addCSS: !0,
        thumbWidth: 15,
        watch: !0
    };

    function Sl(e, t) {
        return function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }.call(e, t)
    }
    var El = function (e) {
            return null != e ? e.constructor : null
        },
        Al = function (e, t) {
            return !!(e && t && e instanceof t)
        },
        Cl = function (e) {
            return null == e
        },
        Pl = function (e) {
            return El(e) === Object
        },
        xl = function (e) {
            return El(e) === String
        },
        Ol = function (e) {
            return Array.isArray(e)
        },
        Il = function (e) {
            return Al(e, NodeList)
        },
        jl = xl,
        Ll = Ol,
        Nl = Il,
        Rl = function (e) {
            return Al(e, Element)
        },
        Ml = function (e) {
            return Al(e, Event)
        },
        _l = function (e) {
            return Cl(e) || (xl(e) || Ol(e) || Il(e)) && !e.length || Pl(e) && !Object.keys(e).length
        };

    function Ul(e, t) {
        if (1 > t) {
            var n = function (e) {
                var t = "".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
                return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
            }(t);
            return parseFloat(e.toFixed(n))
        }
        return Math.round(e / t) * t
    }
    var Dl, Fl, ql, Hl = function () {
            function e(t, n) {
                (function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                })(this, e), Rl(t) ? this.element = t : jl(t) && (this.element = document.querySelector(t)), Rl(this.element) && _l(this.element.rangeTouch) && (this.config = kl({}, Tl, {}, n), this.init())
            }
            return function (e, t, n) {
                t && yl(e.prototype, t), n && yl(e, n)
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
                    ["touchstart", "touchmove", "touchend"].forEach((function (e) {
                        t.element[n](e, (function (e) {
                            return t.set(e)
                        }), !1)
                    }))
                }
            }, {
                key: "get",
                value: function (t) {
                    if (!e.enabled || !Ml(t)) return null;
                    var n, i = t.target,
                        r = t.changedTouches[0],
                        o = parseFloat(i.getAttribute("min")) || 0,
                        a = parseFloat(i.getAttribute("max")) || 100,
                        s = parseFloat(i.getAttribute("step")) || 1,
                        l = i.getBoundingClientRect(),
                        c = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                    return 0 > (n = 100 / l.width * (r.clientX - l.left)) ? n = 0 : 100 < n && (n = 100), 50 > n ? n -= (100 - 2 * n) * c : 50 < n && (n += 2 * (n - 50) * c), o + Ul(n / 100 * (a - o), s)
                }
            }, {
                key: "set",
                value: function (t) {
                    e.enabled && Ml(t) && !t.target.disabled && (t.preventDefault(), t.target.value = this.get(t), function (e, t) {
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
                    if (_l(t) || jl(t) ? i = Array.from(document.querySelectorAll(jl(t) ? t : 'input[type="range"]')) : Rl(t) ? i = [t] : Nl(t) ? i = Array.from(t) : Ll(t) && (i = t.filter(Rl)), _l(i)) return null;
                    var r = kl({}, Tl, {}, n);
                    if (jl(t) && r.watch) {
                        var o = new MutationObserver((function (n) {
                            Array.from(n).forEach((function (n) {
                                Array.from(n.addedNodes).forEach((function (n) {
                                    Rl(n) && Sl(n, t) && new e(n, r)
                                }))
                            }))
                        }));
                        o.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        })
                    }
                    return i.map((function (t) {
                        return new e(t, n)
                    }))
                }
            }, {
                key: "enabled",
                get: function () {
                    return "ontouchstart" in document.documentElement
                }
            }]), e
        }(),
        Bl = i.Promise,
        Vl = Qe("species"),
        zl = function (e) {
            var t = re(e),
                n = x.f;
            o && t && !t[Vl] && n(t, Vl, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        },
        Wl = /(iphone|ipod|ipad).*applewebkit/i.test(Kn),
        Kl = "process" == f(i.process),
        $l = i.location,
        Yl = i.setImmediate,
        Gl = i.clearImmediate,
        Xl = i.process,
        Ql = i.MessageChannel,
        Jl = i.Dispatch,
        Zl = 0,
        ec = {},
        tc = "onreadystatechange",
        nc = function (e) {
            if (ec.hasOwnProperty(e)) {
                var t = ec[e];
                delete ec[e], t()
            }
        },
        ic = function (e) {
            return function () {
                nc(e)
            }
        },
        rc = function (e) {
            nc(e.data)
        },
        oc = function (e) {
            i.postMessage(e + "", $l.protocol + "//" + $l.host)
        };
    Yl && Gl || (Yl = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return ec[++Zl] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, Dl(Zl), Zl
    }, Gl = function (e) {
        delete ec[e]
    }, Kl ? Dl = function (e) {
        Xl.nextTick(ic(e))
    } : Jl && Jl.now ? Dl = function (e) {
        Jl.now(ic(e))
    } : Ql && !Wl ? (ql = (Fl = new Ql).port2, Fl.port1.onmessage = rc, Dl = ot(ql.postMessage, ql, 1)) : i.addEventListener && "function" == typeof postMessage && !i.importScripts && $l && "file:" !== $l.protocol && !r(oc) ? (Dl = oc, i.addEventListener("message", rc, !1)) : Dl = tc in T("script") ? function (e) {
        De.appendChild(T("script")).onreadystatechange = function () {
            De.removeChild(this), nc(e)
        }
    } : function (e) {
        setTimeout(ic(e), 0)
    });
    var ac, sc, lc, cc, uc, fc, dc, hc, pc = {
            set: Yl,
            clear: Gl
        },
        mc = A.f,
        gc = pc.set,
        vc = i.MutationObserver || i.WebKitMutationObserver,
        yc = i.document,
        bc = i.process,
        wc = i.Promise,
        kc = mc(i, "queueMicrotask"),
        Tc = kc && kc.value;
    Tc || (ac = function () {
        var e, t;
        for (Kl && (e = bc.domain) && e.exit(); sc;) {
            t = sc.fn, sc = sc.next;
            try {
                t()
            } catch (e) {
                throw sc ? cc() : lc = void 0, e
            }
        }
        lc = void 0, e && e.enter()
    }, !Wl && !Kl && vc && yc ? (uc = !0, fc = yc.createTextNode(""), new vc(ac).observe(fc, {
        characterData: !0
    }), cc = function () {
        fc.data = uc = !uc
    }) : wc && wc.resolve ? (dc = wc.resolve(void 0), hc = dc.then, cc = function () {
        hc.call(dc, ac)
    }) : cc = Kl ? function () {
        bc.nextTick(ac)
    } : function () {
        gc.call(i, ac)
    });
    var Sc, Ec, Ac, Cc, Pc = Tc || function (e) {
            var t = {
                fn: e,
                next: void 0
            };
            lc && (lc.next = t), sc || (sc = t, cc()), lc = t
        },
        xc = function (e) {
            var t, n;
            this.promise = new e((function (e, i) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = i
            })), this.resolve = rt(t), this.reject = rt(n)
        },
        Oc = {
            f: function (e) {
                return new xc(e)
            }
        },
        Ic = function (e, t) {
            if (C(e), g(t) && t.constructor === e) return t;
            var n = Oc.f(e);
            return (0, n.resolve)(t), n.promise
        },
        jc = function (e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        Lc = pc.set,
        Nc = Qe("species"),
        Rc = "Promise",
        Mc = ee.get,
        _c = ee.set,
        Uc = ee.getterFor(Rc),
        Dc = Bl,
        Fc = i.TypeError,
        qc = i.document,
        Hc = i.process,
        Bc = re("fetch"),
        Vc = Oc.f,
        zc = Vc,
        Wc = !!(qc && qc.createEvent && i.dispatchEvent),
        Kc = "function" == typeof PromiseRejectionEvent,
        $c = "unhandledrejection",
        Yc = Oe(Rc, (function () {
            if (!(U(Dc) !== String(Dc))) {
                if (66 === Xn) return !0;
                if (!Kl && !Kc) return !0
            }
            if (Xn >= 51 && /native code/.test(Dc)) return !1;
            var e = Dc.resolve(1),
                t = function (e) {
                    e((function () {}), (function () {}))
                };
            return (e.constructor = {})[Nc] = t, !(e.then((function () {})) instanceof t)
        })),
        Gc = Yc || !ls((function (e) {
            Dc.all(e).catch((function () {}))
        })),
        Xc = function (e) {
            var t;
            return !(!g(e) || "function" != typeof (t = e.then)) && t
        },
        Qc = function (e, t) {
            if (!e.notified) {
                e.notified = !0;
                var n = e.reactions;
                Pc((function () {
                    for (var i = e.value, r = 1 == e.state, o = 0; n.length > o;) {
                        var a, s, l, c = n[o++],
                            u = r ? c.ok : c.fail,
                            f = c.resolve,
                            d = c.reject,
                            h = c.domain;
                        try {
                            u ? (r || (2 === e.rejection && tu(e), e.rejection = 1), !0 === u ? a = i : (h && h.enter(), a = u(i), h && (h.exit(), l = !0)), a === c.promise ? d(Fc("Promise-chain cycle")) : (s = Xc(a)) ? s.call(a, f, d) : f(a)) : d(i)
                        } catch (e) {
                            h && !l && h.exit(), d(e)
                        }
                    }
                    e.reactions = [], e.notified = !1, t && !e.rejection && Zc(e)
                }))
            }
        },
        Jc = function (e, t, n) {
            var r, o;
            Wc ? ((r = qc.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), i.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, !Kc && (o = i["on" + e]) ? o(r) : e === $c && function (e, t) {
                var n = i.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        Zc = function (e) {
            Lc.call(i, (function () {
                var t, n = e.facade,
                    i = e.value;
                if (eu(e) && (t = jc((function () {
                        Kl ? Hc.emit("unhandledRejection", i, n) : Jc($c, n, i)
                    })), e.rejection = Kl || eu(e) ? 2 : 1, t.error)) throw t.value
            }))
        },
        eu = function (e) {
            return 1 !== e.rejection && !e.parent
        },
        tu = function (e) {
            Lc.call(i, (function () {
                var t = e.facade;
                Kl ? Hc.emit("rejectionHandled", t) : Jc("rejectionhandled", t, e.value)
            }))
        },
        nu = function (e, t, n) {
            return function (i) {
                e(t, i, n)
            }
        },
        iu = function (e, t, n) {
            e.done || (e.done = !0, n && (e = n), e.value = t, e.state = 2, Qc(e, !0))
        },
        ru = function (e, t, n) {
            if (!e.done) {
                e.done = !0, n && (e = n);
                try {
                    if (e.facade === t) throw Fc("Promise can't be resolved itself");
                    var i = Xc(t);
                    i ? Pc((function () {
                        var n = {
                            done: !1
                        };
                        try {
                            i.call(t, nu(ru, n, e), nu(iu, n, e))
                        } catch (t) {
                            iu(n, t, e)
                        }
                    })) : (e.value = t, e.state = 1, Qc(e, !1))
                } catch (t) {
                    iu({
                        done: !1
                    }, t, e)
                }
            }
        };
    Yc && (Dc = function (e) {
        pr(this, Dc, Rc), rt(e), Sc.call(this);
        var t = Mc(this);
        try {
            e(nu(ru, t), nu(iu, t))
        } catch (e) {
            iu(t, e)
        }
    }, (Sc = function (e) {
        _c(this, {
            type: Rc,
            done: !1,
            notified: !1,
            parent: !1,
            reactions: [],
            rejection: !1,
            state: 0,
            value: void 0
        })
    }).prototype = Mr(Dc.prototype, {
        then: function (e, t) {
            var n = Uc(this),
                i = Vc(Xi(this, Dc));
            return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = Kl ? Hc.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && Qc(n, !1), i.promise
        },
        catch: function (e) {
            return this.then(void 0, e)
        }
    }), Ec = function () {
        var e = new Sc,
            t = Mc(e);
        this.promise = e, this.resolve = nu(ru, t), this.reject = nu(iu, t)
    }, Oc.f = Vc = function (e) {
        return e === Dc || e === Ac ? new Ec(e) : zc(e)
    }, "function" == typeof Bl && (Cc = Bl.prototype.then, te(Bl.prototype, "then", (function (e, t) {
        var n = this;
        return new Dc((function (e, t) {
            Cc.call(n, e, t)
        })).then(e, t)
    }), {
        unsafe: !0
    }), "function" == typeof Bc && je({
        global: !0,
        enumerable: !0,
        forced: !0
    }, {
        fetch: function (e) {
            return Ic(Dc, Bc.apply(i, arguments))
        }
    }))), je({
        global: !0,
        wrap: !0,
        forced: Yc
    }, {
        Promise: Dc
    }), it(Dc, Rc, !1), zl(Rc), Ac = re(Rc), je({
        target: Rc,
        stat: !0,
        forced: Yc
    }, {
        reject: function (e) {
            var t = Vc(this);
            return t.reject.call(void 0, e), t.promise
        }
    }), je({
        target: Rc,
        stat: !0,
        forced: Yc
    }, {
        resolve: function (e) {
            return Ic(this, e)
        }
    }), je({
        target: Rc,
        stat: !0,
        forced: Gc
    }, {
        all: function (e) {
            var t = this,
                n = Vc(t),
                i = n.resolve,
                r = n.reject,
                o = jc((function () {
                    var n = rt(t.resolve),
                        o = [],
                        a = 0,
                        s = 1;
                    Ks(e, (function (e) {
                        var l = a++,
                            c = !1;
                        o.push(void 0), s++, n.call(t, e).then((function (e) {
                            c || (c = !0, o[l] = e, --s || i(o))
                        }), r)
                    })), --s || i(o)
                }));
            return o.error && r(o.value), n.promise
        },
        race: function (e) {
            var t = this,
                n = Vc(t),
                i = n.reject,
                r = jc((function () {
                    var r = rt(t.resolve);
                    Ks(e, (function (e) {
                        r.call(t, e).then(n.resolve, i)
                    }))
                }));
            return r.error && i(r.value), n.promise
        }
    });
    var ou, au = A.f,
        su = "".startsWith,
        lu = Math.min,
        cu = Bs("startsWith"),
        uu = !(cu || (ou = au(String.prototype, "startsWith"), !ou || ou.writable));
    je({
        target: "String",
        proto: !0,
        forced: !uu && !cu
    }, {
        startsWith: function (e) {
            var t = String(p(this));
            qs(e);
            var n = ce(lu(arguments.length > 1 ? arguments[1] : void 0, t.length)),
                i = String(e);
            return su ? su.call(t, i, n) : t.slice(n, n + i.length) === i
        }
    });
    var fu, du, hu, pu = function (e) {
            return null != e ? e.constructor : null
        },
        mu = function (e, t) {
            return Boolean(e && t && e instanceof t)
        },
        gu = function (e) {
            return null == e
        },
        vu = function (e) {
            return pu(e) === Object
        },
        yu = function (e) {
            return pu(e) === String
        },
        bu = function (e) {
            return pu(e) === Function
        },
        wu = function (e) {
            return Array.isArray(e)
        },
        ku = function (e) {
            return mu(e, NodeList)
        },
        Tu = function (e) {
            return gu(e) || (yu(e) || wu(e) || ku(e)) && !e.length || vu(e) && !Object.keys(e).length
        },
        Su = gu,
        Eu = vu,
        Au = function (e) {
            return pu(e) === Number && !Number.isNaN(e)
        },
        Cu = yu,
        Pu = function (e) {
            return pu(e) === Boolean
        },
        xu = bu,
        Ou = wu,
        Iu = ku,
        ju = function (e) {
            return null !== e && "object" === Na(e) && 1 === e.nodeType && "object" === Na(e.style) && "object" === Na(e.ownerDocument)
        },
        Lu = function (e) {
            return mu(e, Event)
        },
        Nu = function (e) {
            return mu(e, KeyboardEvent)
        },
        Ru = function (e) {
            return mu(e, TextTrack) || !gu(e) && yu(e.kind)
        },
        Mu = function (e) {
            return mu(e, Promise) && bu(e.then)
        },
        _u = function (e) {
            if (mu(e, window.URL)) return !0;
            if (!yu(e)) return !1;
            var t = e;
            e.startsWith("http://") && e.startsWith("https://") || (t = "http://".concat(e));
            try {
                return !Tu(new URL(t).hostname)
            } catch (e) {
                return !1
            }
        },
        Uu = Tu,
        Du = (fu = document.createElement("span"), du = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        }, hu = Object.keys(du).find((function (e) {
            return void 0 !== fu.style[e]
        })), !!Cu(hu) && du[hu]);

    function Fu(e, t) {
        setTimeout((function () {
            try {
                e.hidden = !0, e.offsetHeight, e.hidden = !1
            } catch (e) {}
        }), t)
    }
    var qu = {
            isIE: !!document.documentMode,
            isEdge: window.navigator.userAgent.includes("Edge"),
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        },
        Hu = function (e) {
            return function (t, n, i, r) {
                rt(n);
                var o = Me(t),
                    a = h(o),
                    s = ce(o.length),
                    l = e ? s - 1 : 0,
                    c = e ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (l in a) {
                            r = a[l], l += c;
                            break
                        }
                        if (l += c, e ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? l >= 0 : s > l; l += c) l in a && (r = n(r, a[l], l, o));
                return r
            }
        },
        Bu = {
            left: Hu(!1),
            right: Hu(!0)
        }.left,
        Vu = Gt("reduce"),
        zu = Zt("reduce", {
            1: 0
        });

    function Wu(e, t) {
        return t.split(".").reduce((function (e, t) {
            return e && e[t]
        }), e)
    }

    function Ku() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        if (!n.length) return e;
        var r = n.shift();
        return Eu(r) ? (Object.keys(r).forEach((function (t) {
            Eu(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, Ua({}, t, {})), Ku(e[t], r[t])) : Object.assign(e, Ua({}, t, r[t]))
        })), Ku.apply(void 0, [e].concat(n))) : e
    }

    function $u(e, t) {
        var n = e.length ? e : [e];
        Array.from(n).reverse().forEach((function (e, n) {
            var i = n > 0 ? t.cloneNode(!0) : t,
                r = e.parentNode,
                o = e.nextSibling;
            i.appendChild(e), o ? r.insertBefore(i, o) : r.appendChild(i)
        }))
    }

    function Yu(e, t) {
        ju(e) && !Uu(t) && Object.entries(t).filter((function (e) {
            var t = Ha(e, 2)[1];
            return !Su(t)
        })).forEach((function (t) {
            var n = Ha(t, 2),
                i = n[0],
                r = n[1];
            return e.setAttribute(i, r)
        }))
    }

    function Gu(e, t, n) {
        var i = document.createElement(e);
        return Eu(t) && Yu(i, t), Cu(n) && (i.innerText = n), i
    }

    function Xu(e, t, n, i) {
        ju(t) && t.appendChild(Gu(e, n, i))
    }

    function Qu(e) {
        Iu(e) || Ou(e) ? Array.from(e).forEach(Qu) : ju(e) && ju(e.parentNode) && e.parentNode.removeChild(e)
    }

    function Ju(e) {
        if (ju(e))
            for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
    }

    function Zu(e, t) {
        return ju(t) && ju(t.parentNode) && ju(e) ? (t.parentNode.replaceChild(e, t), e) : null
    }

    function ef(e, t) {
        if (!Cu(e) || Uu(e)) return {};
        var n = {},
            i = Ku({}, t);
        return e.split(",").forEach((function (e) {
            var t = e.trim(),
                r = t.replace(".", ""),
                o = t.replace(/[[\]]/g, "").split("="),
                a = Ha(o, 1)[0],
                s = o.length > 1 ? o[1].replace(/["']/g, "") : "";
            switch (t.charAt(0)) {
                case ".":
                    Cu(i.class) ? n.class = "".concat(i.class, " ").concat(r) : n.class = r;
                    break;
                case "#":
                    n.id = t.replace("#", "");
                    break;
                case "[":
                    n[a] = s
            }
        })), Ku(i, n)
    }

    function tf(e, t) {
        if (ju(e)) {
            var n = t;
            Pu(n) || (n = !e.hidden), e.hidden = n
        }
    }

    function nf(e, t, n) {
        if (Iu(e)) return Array.from(e).map((function (e) {
            return nf(e, t, n)
        }));
        if (ju(e)) {
            var i = "toggle";
            return void 0 !== n && (i = n ? "add" : "remove"), e.classList[i](t), e.classList.contains(t)
        }
        return !1
    }

    function rf(e, t) {
        return ju(e) && e.classList.contains(t)
    }

    function of (e, t) {
        var n = Element.prototype;
        return (n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.msMatchesSelector || function () {
            return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
    }

    function af(e) {
        return this.elements.container.querySelectorAll(e)
    }

    function sf(e) {
        return this.elements.container.querySelector(e)
    }

    function lf() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        ju(e) && (e.focus({
            preventScroll: !0
        }), t && nf(e, this.config.classNames.tabFocus))
    }
    je({
        target: "Array",
        proto: !0,
        forced: !Vu || !zu || !Kl && Xn > 79 && Xn < 83
    }, {
        reduce: function (e) {
            return Bu(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var cf, uf = {
            "audio/ogg": "vorbis",
            "audio/wav": "1",
            "video/webm": "vp8, vorbis",
            "video/mp4": "avc1.42E01E, mp4a.40.2",
            "video/ogg": "theora"
        },
        ff = {
            audio: "canPlayType" in document.createElement("audio"),
            video: "canPlayType" in document.createElement("video"),
            check: function (e, t, n) {
                var i = qu.isIPhone && n && ff.playsinline,
                    r = ff[e] || "html5" !== t;
                return {
                    api: r,
                    ui: r && ff.rangeInput && ("video" !== e || !qu.isIPhone || i)
                }
            },
            pip: !(qu.isIPhone || !xu(Gu("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Gu("video").disablePictureInPicture)),
            airplay: xu(window.WebKitPlaybackTargetAvailabilityEvent),
            playsinline: "playsInline" in document.createElement("video"),
            mime: function (e) {
                if (Uu(e)) return !1;
                var t = Ha(e.split("/"), 1)[0],
                    n = e;
                if (!this.isHTML5 || t !== this.type) return !1;
                Object.keys(uf).includes(n) && (n += '; codecs="'.concat(uf[e], '"'));
                try {
                    return Boolean(n && this.media.canPlayType(n).replace(/no/, ""))
                } catch (e) {
                    return !1
                }
            },
            textTracks: "textTracks" in document.createElement("video"),
            rangeInput: (cf = document.createElement("input"), cf.type = "range", "range" === cf.type),
            touch: "ontouchstart" in document.documentElement,
            transitions: !1 !== Du,
            reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
        },
        df = function () {
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

    function hf(e, t, n) {
        var i = this,
            r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (e && "addEventListener" in e && !Uu(t) && xu(n)) {
            var s = t.split(" "),
                l = a;
            df && (l = {
                passive: o,
                capture: a
            }), s.forEach((function (t) {
                i && i.eventListeners && r && i.eventListeners.push({
                    element: e,
                    type: t,
                    callback: n,
                    options: l
                }), e[r ? "addEventListener" : "removeEventListener"](t, n, l)
            }))
        }
    }

    function pf(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        hf.call(this, e, t, n, !0, i, r)
    }

    function mf(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 ? arguments[2] : void 0,
            i = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        hf.call(this, e, t, n, !1, i, r)
    }

    function gf(e) {
        var t = this,
            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 ? arguments[2] : void 0,
            r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
            o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            a = function a() {
                mf(e, n, a, r, o);
                for (var s = arguments.length, l = new Array(s), c = 0; c < s; c++) l[c] = arguments[c];
                i.apply(t, l)
            };
        hf.call(this, e, n, a, !0, r, o)
    }

    function vf(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (ju(e) && !Uu(t)) {
            var r = new CustomEvent(t, {
                bubbles: n,
                detail: Fa(Fa({}, i), {}, {
                    plyr: this
                })
            });
            e.dispatchEvent(r)
        }
    }

    function yf() {
        this && this.eventListeners && (this.eventListeners.forEach((function (e) {
            var t = e.element,
                n = e.type,
                i = e.callback,
                r = e.options;
            t.removeEventListener(n, i, r)
        })), this.eventListeners = [])
    }

    function bf() {
        var e = this;
        return new Promise((function (t) {
            return e.ready ? setTimeout(t, 0) : pf.call(e, e.elements.container, "ready", t)
        })).then((function () {}))
    }

    function wf(e) {
        Mu(e) && e.then(null, (function () {}))
    }

    function kf(e) {
        return !!(Ou(e) || Cu(e) && e.includes(":")) && (Ou(e) ? e : e.split(":")).map(Number).every(Au)
    }

    function Tf(e) {
        if (!Ou(e) || !e.every(Au)) return null;
        var t = Ha(e, 2),
            n = t[0],
            i = t[1],
            r = function e(t, n) {
                return 0 === n ? t : e(n, t % n)
            }(n, i);
        return [n / r, i / r]
    }

    function Sf(e) {
        var t = function (e) {
                return kf(e) ? e.split(":").map(Number) : null
            },
            n = t(e);
        if (null === n && (n = t(this.config.ratio)), null === n && !Uu(this.embed) && Ou(this.embed.ratio) && (n = this.embed.ratio), null === n && this.isHTML5) {
            var i = this.media;
            n = Tf([i.videoWidth, i.videoHeight])
        }
        return n
    }

    function Ef(e) {
        if (!this.isVideo) return {};
        var t = this.elements.wrapper,
            n = Sf.call(this, e),
            i = Ha(Ou(n) ? n : [0, 0], 2),
            r = 100 / i[0] * i[1];
        if (t.style.paddingBottom = "".concat(r, "%"), this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
            var o = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10),
                a = (o - r) / (o / 50);
            this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = "translateY(-".concat(a, "%)")
        } else this.isHTML5 && t.classList.toggle(this.config.classNames.videoFixedRatio, null !== n);
        return {
            padding: r,
            ratio: n
        }
    }
    var Af = {
        getSources: function () {
            var e = this;
            return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter((function (t) {
                var n = t.getAttribute("type");
                return !!Uu(n) || ff.mime.call(e, n)
            })) : []
        },
        getQualityOptions: function () {
            return this.config.quality.forced ? this.config.quality.options : Af.getSources.call(this).map((function (e) {
                return Number(e.getAttribute("size"))
            })).filter(Boolean)
        },
        setup: function () {
            if (this.isHTML5) {
                var e = this;
                e.options.speed = e.config.speed.options, Uu(this.config.ratio) || Ef.call(e), Object.defineProperty(e.media, "quality", {
                    get: function () {
                        var t = Af.getSources.call(e).find((function (t) {
                            return t.getAttribute("src") === e.source
                        }));
                        return t && Number(t.getAttribute("size"))
                    },
                    set: function (t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && xu(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                var n = Af.getSources.call(e).find((function (e) {
                                    return Number(e.getAttribute("size")) === t
                                }));
                                if (!n) return;
                                var i = e.media,
                                    r = i.currentTime,
                                    o = i.paused,
                                    a = i.preload,
                                    s = i.readyState,
                                    l = i.playbackRate;
                                e.media.src = n.getAttribute("src"), ("none" !== a || s) && (e.once("loadedmetadata", (function () {
                                    e.speed = l, e.currentTime = r, o || wf(e.play())
                                })), e.media.load())
                            }
                            vf.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            }
        },
        cancelRequests: function () {
            this.isHTML5 && (Qu(Af.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
        }
    };

    function Cf(e) {
        return Ou(e) ? e.filter((function (t, n) {
            return e.indexOf(t) === n
        })) : e
    }
    var Pf = x.f,
        xf = be.f,
        Of = ee.set,
        If = Qe("match"),
        jf = i.RegExp,
        Lf = jf.prototype,
        Nf = /a/g,
        Rf = /a/g,
        Mf = new jf(Nf) !== Nf,
        _f = di.UNSUPPORTED_Y;
    if (o && Oe("RegExp", !Mf || _f || r((function () {
            return Rf[If] = !1, jf(Nf) != Nf || jf(Rf) == Rf || "/a/i" != jf(Nf, "i")
        })))) {
        for (var Uf = function (e, t) {
                var n, i = this instanceof Uf,
                    r = Yi(e),
                    o = void 0 === t;
                if (!i && r && e.constructor === Uf && o) return e;
                Mf ? r && !o && (e = e.source) : e instanceof Uf && (o && (t = ui.call(e)), e = e.source), _f && (n = !!t && t.indexOf("y") > -1) && (t = t.replace(/y/g, ""));
                var a = ms(Mf ? new jf(e, t) : jf(e, t), i ? this : Lf, Uf);
                return _f && n && Of(a, {
                    sticky: n
                }), a
            }, Df = function (e) {
                e in Uf || Pf(Uf, e, {
                    configurable: !0,
                    get: function () {
                        return jf[e]
                    },
                    set: function (t) {
                        jf[e] = t
                    }
                })
            }, Ff = xf(jf), qf = 0; Ff.length > qf;) Df(Ff[qf++]);
        Lf.constructor = Uf, Uf.prototype = Lf, te(i, "RegExp", Uf)
    }

    function Hf(e) {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
        return Uu(e) ? e : e.toString().replace(/{(\d+)}/g, (function (e, t) {
            return n[t].toString()
        }))
    }
    zl("RegExp");
    var Bf = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
            return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), n.toString())
        },
        Vf = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return e.toString().replace(/\w\S*/g, (function (e) {
                return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
            }))
        };

    function zf() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            t = e.toString();
        return t = Bf(t, "-", " "), t = Bf(t, "_", " "), t = Vf(t), Bf(t, " ", "")
    }

    function Wf(e) {
        var t = document.createElement("div");
        return t.appendChild(e), t.innerHTML
    }
    var Kf = {
            pip: "PIP",
            airplay: "AirPlay",
            html5: "HTML5",
            vimeo: "Vimeo",
            youtube: "YouTube"
        },
        $f = function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if (Uu(e) || Uu(t)) return "";
            var n = Wu(t.i18n, e);
            if (Uu(n)) return Object.keys(Kf).includes(e) ? Kf[e] : "";
            var i = {
                "{seektime}": t.seekTime,
                "{title}": t.title
            };
            return Object.entries(i).forEach((function (e) {
                var t = Ha(e, 2),
                    i = t[0],
                    r = t[1];
                n = Bf(n, i, r)
            })), n
        },
        Yf = function () {
            function e(t) {
                var n = this;
                Ra(this, e), Ua(this, "get", (function (t) {
                    if (!e.supported || !n.enabled) return null;
                    var i = window.localStorage.getItem(n.key);
                    if (Uu(i)) return null;
                    var r = JSON.parse(i);
                    return Cu(t) && t.length ? r[t] : r
                })), Ua(this, "set", (function (t) {
                    if (e.supported && n.enabled && Eu(t)) {
                        var i = n.get();
                        Uu(i) && (i = {}), Ku(i, t), window.localStorage.setItem(n.key, JSON.stringify(i))
                    }
                })), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            return _a(e, null, [{
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

    function Gf(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise((function (n, i) {
            try {
                var r = new XMLHttpRequest;
                if (!("withCredentials" in r)) return;
                r.addEventListener("load", (function () {
                    if ("text" === t) try {
                        n(JSON.parse(r.responseText))
                    } catch (e) {
                        n(r.responseText)
                    } else n(r.response)
                })), r.addEventListener("error", (function () {
                    throw new Error(r.status)
                })), r.open("GET", e, !0), r.responseType = t, r.send()
            } catch (e) {
                i(e)
            }
        }))
    }

    function Xf(e, t) {
        if (Cu(e)) {
            var n = "cache",
                i = Cu(t),
                r = function () {
                    return null !== document.getElementById(t)
                },
                o = function (e, t) {
                    e.innerHTML = t, i && r() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!i || !r()) {
                var a = Yf.supported,
                    s = document.createElement("div");
                if (s.setAttribute("hidden", ""), i && s.setAttribute("id", t), a) {
                    var l = window.localStorage.getItem("".concat(n, "-").concat(t));
                    if (null !== l) {
                        var c = JSON.parse(l);
                        o(s, c.content)
                    }
                }
                Gf(e).then((function (e) {
                    Uu(e) || (a && window.localStorage.setItem("".concat(n, "-").concat(t), JSON.stringify({
                        content: e
                    })), o(s, e))
                })).catch((function () {}))
            }
        }
    }
    var Qf = Math.ceil,
        Jf = Math.floor;
    je({
        target: "Math",
        stat: !0
    }, {
        trunc: function (e) {
            return (e > 0 ? Jf : Qf)(e)
        }
    });
    var Zf = function (e) {
            return Math.trunc(e / 60 / 60 % 60, 10)
        },
        ed = function (e) {
            return Math.trunc(e / 60 % 60, 10)
        },
        td = function (e) {
            return Math.trunc(e % 60, 10)
        };

    function nd() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!Au(e)) return nd(void 0, t, n);
        var i = function (e) {
                return "0".concat(e).slice(-2)
            },
            r = Zf(e),
            o = ed(e),
            a = td(e);
        return r = t || r > 0 ? "".concat(r, ":") : "", "".concat(n && e > 0 ? "-" : "").concat(r).concat(i(o), ":").concat(i(a))
    }
    var id = {
        getIconUrl: function () {
            var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || qu.isIE && !window.svg4everybody;
            return {
                url: this.config.iconUrl,
                cors: e
            }
        },
        findElements: function () {
            try {
                return this.elements.controls = sf.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                    play: af.call(this, this.config.selectors.buttons.play),
                    pause: sf.call(this, this.config.selectors.buttons.pause),
                    restart: sf.call(this, this.config.selectors.buttons.restart),
                    rewind: sf.call(this, this.config.selectors.buttons.rewind),
                    fastForward: sf.call(this, this.config.selectors.buttons.fastForward),
                    mute: sf.call(this, this.config.selectors.buttons.mute),
                    pip: sf.call(this, this.config.selectors.buttons.pip),
                    airplay: sf.call(this, this.config.selectors.buttons.airplay),
                    settings: sf.call(this, this.config.selectors.buttons.settings),
                    captions: sf.call(this, this.config.selectors.buttons.captions),
                    fullscreen: sf.call(this, this.config.selectors.buttons.fullscreen)
                }, this.elements.progress = sf.call(this, this.config.selectors.progress), this.elements.inputs = {
                    seek: sf.call(this, this.config.selectors.inputs.seek),
                    volume: sf.call(this, this.config.selectors.inputs.volume)
                }, this.elements.display = {
                    buffer: sf.call(this, this.config.selectors.display.buffer),
                    currentTime: sf.call(this, this.config.selectors.display.currentTime),
                    duration: sf.call(this, this.config.selectors.display.duration)
                }, ju(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))), !0
            } catch (e) {
                return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
            }
        },
        createIcon: function (e, t) {
            var n = "http://www.w3.org/2000/svg",
                i = id.getIconUrl.call(this),
                r = "".concat(i.cors ? "" : i.url, "#").concat(this.config.iconPrefix),
                o = document.createElementNS(n, "svg");
            Yu(o, Ku(t, {
                "aria-hidden": "true",
                focusable: "false"
            }));
            var a = document.createElementNS(n, "use"),
                s = "".concat(r, "-").concat(e);
            return "href" in a && a.setAttributeNS("http://www.w3.org/1999/xlink", "href", s), a.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s), o.appendChild(a), o
        },
        createLabel: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = $f(e, this.config),
                i = Fa(Fa({}, t), {}, {
                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                });
            return Gu("span", i, n)
        },
        createBadge: function (e) {
            if (Uu(e)) return null;
            var t = Gu("span", {
                class: this.config.classNames.menu.value
            });
            return t.appendChild(Gu("span", {
                class: this.config.classNames.menu.badge
            }, e)), t
        },
        createButton: function (e, t) {
            var n = this,
                i = Ku({}, t),
                r = function () {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
                    return (e = zf(e)).charAt(0).toLowerCase() + e.slice(1)
                }(e),
                o = {
                    element: "button",
                    toggle: !1,
                    label: null,
                    icon: null,
                    labelPressed: null,
                    iconPressed: null
                };
            switch (["element", "icon", "label"].forEach((function (e) {
                Object.keys(i).includes(e) && (o[e] = i[e], delete i[e])
            })), "button" !== o.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some((function (e) {
                return e === n.config.classNames.control
            })) || Ku(i, {
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
                    i.class += " ".concat(this.config.classNames.control, "--overlaid"), r = "play", o.label = "play", o.icon = "play";
                    break;
                default:
                    Uu(o.label) && (o.label = r), Uu(o.icon) && (o.icon = e)
            }
            var a = Gu(o.element);
            return o.toggle ? (a.appendChild(id.createIcon.call(this, o.iconPressed, {
                class: "icon--pressed"
            })), a.appendChild(id.createIcon.call(this, o.icon, {
                class: "icon--not-pressed"
            })), a.appendChild(id.createLabel.call(this, o.labelPressed, {
                class: "label--pressed"
            })), a.appendChild(id.createLabel.call(this, o.label, {
                class: "label--not-pressed"
            }))) : (a.appendChild(id.createIcon.call(this, o.icon)), a.appendChild(id.createLabel.call(this, o.label))), Ku(i, ef(this.config.selectors.buttons[r], i)), Yu(a, i), "play" === r ? (Ou(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(a)) : this.elements.buttons[r] = a, a
        },
        createRange: function (e, t) {
            var n = Gu("input", Ku(ef(this.config.selectors.inputs[e]), {
                type: "range",
                min: 0,
                max: 100,
                step: .01,
                value: 0,
                autocomplete: "off",
                role: "slider",
                "aria-label": $f(e, this.config),
                "aria-valuemin": 0,
                "aria-valuemax": 100,
                "aria-valuenow": 0
            }, t));
            return this.elements.inputs[e] = n, id.updateRangeFill.call(this, n), Hl.setup(n), n
        },
        createProgress: function (e, t) {
            var n = Gu("progress", Ku(ef(this.config.selectors.display[e]), {
                min: 0,
                max: 100,
                value: 0,
                role: "progressbar",
                "aria-hidden": !0
            }, t));
            if ("volume" !== e) {
                n.appendChild(Gu("span", null, "0"));
                var i = {
                        played: "played",
                        buffer: "buffered"
                    } [e],
                    r = i ? $f(i, this.config) : "";
                n.innerText = "% ".concat(r.toLowerCase())
            }
            return this.elements.display[e] = n, n
        },
        createTime: function (e, t) {
            var n = ef(this.config.selectors.display[e], t),
                i = Gu("div", Ku(n, {
                    class: "".concat(n.class ? n.class : "", " ").concat(this.config.classNames.display.time, " ").trim(),
                    "aria-label": $f(e, this.config)
                }), "00:00");
            return this.elements.display[e] = i, i
        },
        bindMenuItemShortcuts: function (e, t) {
            var n = this;
            pf.call(this, e, "keydown keyup", (function (i) {
                if ([32, 38, 39, 40].includes(i.which) && (i.preventDefault(), i.stopPropagation(), "keydown" !== i.type)) {
                    var r, o = of (e, '[role="menuitemradio"]');
                    if (!o && [32, 39].includes(i.which)) id.showMenuPanel.call(n, t, !0);
                    else 32 !== i.which && (40 === i.which || o && 39 === i.which ? (r = e.nextElementSibling, ju(r) || (r = e.parentNode.firstElementChild)) : (r = e.previousElementSibling, ju(r) || (r = e.parentNode.lastElementChild)), lf.call(n, r, !0))
                }
            }), !1), pf.call(this, e, "keyup", (function (e) {
                13 === e.which && id.focusFirstMenuItem.call(n, null, !0)
            }))
        },
        createMenuItem: function (e) {
            var t = this,
                n = e.value,
                i = e.list,
                r = e.type,
                o = e.title,
                a = e.badge,
                s = void 0 === a ? null : a,
                l = e.checked,
                c = void 0 !== l && l,
                u = ef(this.config.selectors.inputs[r]),
                f = Gu("button", Ku(u, {
                    type: "button",
                    role: "menuitemradio",
                    class: "".concat(this.config.classNames.control, " ").concat(u.class ? u.class : "").trim(),
                    "aria-checked": c,
                    value: n
                })),
                d = Gu("span");
            d.innerHTML = o, ju(s) && d.appendChild(s), f.appendChild(d), Object.defineProperty(f, "checked", {
                enumerable: !0,
                get: function () {
                    return "true" === f.getAttribute("aria-checked")
                },
                set: function (e) {
                    e && Array.from(f.parentNode.children).filter((function (e) {
                        return of(e, '[role="menuitemradio"]')
                    })).forEach((function (e) {
                        return e.setAttribute("aria-checked", "false")
                    })), f.setAttribute("aria-checked", e ? "true" : "false")
                }
            }), this.listeners.bind(f, "click keyup", (function (e) {
                if (!Nu(e) || 32 === e.which) {
                    switch (e.preventDefault(), e.stopPropagation(), f.checked = !0, r) {
                        case "language":
                            t.currentTrack = Number(n);
                            break;
                        case "quality":
                            t.quality = n;
                            break;
                        case "speed":
                            t.speed = parseFloat(n)
                    }
                    id.showMenuPanel.call(t, "home", Nu(e))
                }
            }), r, !1), id.bindMenuItemShortcuts.call(this, f, r), i.appendChild(f)
        },
        formatTime: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!Au(e)) return e;
            var n = Zf(this.duration) > 0;
            return nd(e, n, t)
        },
        updateTimeDisplay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            ju(e) && Au(t) && (e.innerText = id.formatTime(t, n))
        },
        updateVolume: function () {
            this.supported.ui && (ju(this.elements.inputs.volume) && id.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), ju(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
        },
        setRange: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            ju(e) && (e.value = t, id.updateRangeFill.call(this, e))
        },
        updateProgress: function (e) {
            var t = this;
            if (this.supported.ui && Lu(e)) {
                var n = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        n = function (e, t) {
                            return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
                        }(this.currentTime, this.duration), "timeupdate" === e.type && id.setRange.call(this, this.elements.inputs.seek, n);
                        break;
                    case "playing":
                    case "progress":
                        ! function (e, n) {
                            var i = Au(n) ? n : 0,
                                r = ju(e) ? e : t.elements.display.buffer;
                            if (ju(r)) {
                                r.value = i;
                                var o = r.getElementsByTagName("span")[0];
                                ju(o) && (o.childNodes[0].nodeValue = i)
                            }
                        }(this.elements.display.buffer, 100 * this.buffered)
                }
            }
        },
        updateRangeFill: function (e) {
            var t = Lu(e) ? e.target : e;
            if (ju(t) && "range" === t.getAttribute("type")) {
                if ( of (t, this.config.selectors.inputs.seek)) {
                    t.setAttribute("aria-valuenow", this.currentTime);
                    var n = id.formatTime(this.currentTime),
                        i = id.formatTime(this.duration),
                        r = $f("seekLabel", this.config);
                    t.setAttribute("aria-valuetext", r.replace("{currentTime}", n).replace("{duration}", i))
                } else if ( of (t, this.config.selectors.inputs.volume)) {
                    var o = 100 * t.value;
                    t.setAttribute("aria-valuenow", o), t.setAttribute("aria-valuetext", "".concat(o.toFixed(1), "%"))
                } else t.setAttribute("aria-valuenow", t.value);
                qu.isWebkit && t.style.setProperty("--value", "".concat(t.value / t.max * 100, "%"))
            }
        },
        updateSeekTooltip: function (e) {
            var t = this;
            if (this.config.tooltips.seek && ju(this.elements.inputs.seek) && ju(this.elements.display.seekTooltip) && 0 !== this.duration) {
                var n = "".concat(this.config.classNames.tooltip, "--visible"),
                    i = function (e) {
                        return nf(t.elements.display.seekTooltip, n, e)
                    };
                if (this.touch) i(!1);
                else {
                    var r = 0,
                        o = this.elements.progress.getBoundingClientRect();
                    if (Lu(e)) r = 100 / o.width * (e.pageX - o.left);
                    else {
                        if (!rf(this.elements.display.seekTooltip, n)) return;
                        r = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                    }
                    r < 0 ? r = 0 : r > 100 && (r = 100), id.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * r), this.elements.display.seekTooltip.style.left = "".concat(r, "%"), Lu(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
                }
            }
        },
        timeUpdate: function (e) {
            var t = !ju(this.elements.display.duration) && this.config.invertTime;
            id.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || id.updateProgress.call(this, e)
        },
        durationUpdate: function () {
            if (this.supported.ui && (this.config.invertTime || !this.currentTime)) {
                if (this.duration >= Math.pow(2, 32)) return tf(this.elements.display.currentTime, !0), void tf(this.elements.progress, !0);
                ju(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                var e = ju(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && id.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && id.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), id.updateSeekTooltip.call(this)
            }
        },
        toggleMenuButton: function (e, t) {
            tf(this.elements.settings.buttons[e], !t)
        },
        updateSetting: function (e, t, n) {
            var i = this.elements.settings.panels[e],
                r = null,
                o = t;
            if ("captions" === e) r = this.currentTrack;
            else {
                if (r = Uu(n) ? this[e] : n, Uu(r) && (r = this.config[e].default), !Uu(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '".concat(r, "' for ").concat(e));
                if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '".concat(r, "' for ").concat(e))
            }
            if (ju(o) || (o = i && i.querySelector('[role="menu"]')), ju(o)) {
                this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML = id.getLabel.call(this, e, r);
                var a = o && o.querySelector('[value="'.concat(r, '"]'));
                ju(a) && (a.checked = !0)
            }
        },
        getLabel: function (e, t) {
            switch (e) {
                case "speed":
                    return 1 === t ? $f("normal", this.config) : "".concat(t, "&times;");
                case "quality":
                    if (Au(t)) {
                        var n = $f("qualityLabel.".concat(t), this.config);
                        return n.length ? n : "".concat(t, "p")
                    }
                    return Vf(t);
                case "captions":
                    return ad.getLabel.call(this);
                default:
                    return null
            }
        },
        setQualityMenu: function (e) {
            var t = this;
            if (ju(this.elements.settings.panels.quality)) {
                var n = "quality",
                    i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                Ou(e) && (this.options.quality = Cf(e).filter((function (e) {
                    return t.config.quality.options.includes(e)
                })));
                var r = !Uu(this.options.quality) && this.options.quality.length > 1;
                if (id.toggleMenuButton.call(this, n, r), Ju(i), id.checkMenu.call(this), r) {
                    var o = function (e) {
                        var n = $f("qualityBadge.".concat(e), t.config);
                        return n.length ? id.createBadge.call(t, n) : null
                    };
                    this.options.quality.sort((function (e, n) {
                        var i = t.config.quality.options;
                        return i.indexOf(e) > i.indexOf(n) ? 1 : -1
                    })).forEach((function (e) {
                        id.createMenuItem.call(t, {
                            value: e,
                            list: i,
                            type: n,
                            title: id.getLabel.call(t, "quality", e),
                            badge: o(e)
                        })
                    })), id.updateSetting.call(this, n, i)
                }
            }
        },
        setCaptionsMenu: function () {
            var e = this;
            if (ju(this.elements.settings.panels.captions)) {
                var t = "captions",
                    n = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    i = ad.getTracks.call(this),
                    r = Boolean(i.length);
                if (id.toggleMenuButton.call(this, t, r), Ju(n), id.checkMenu.call(this), r) {
                    var o = i.map((function (t, i) {
                        return {
                            value: i,
                            checked: e.captions.toggled && e.currentTrack === i,
                            title: ad.getLabel.call(e, t),
                            badge: t.language && id.createBadge.call(e, t.language.toUpperCase()),
                            list: n,
                            type: "language"
                        }
                    }));
                    o.unshift({
                        value: -1,
                        checked: !this.captions.toggled,
                        title: $f("disabled", this.config),
                        list: n,
                        type: "language"
                    }), o.forEach(id.createMenuItem.bind(this)), id.updateSetting.call(this, t, n)
                }
            }
        },
        setSpeedMenu: function () {
            var e = this;
            if (ju(this.elements.settings.panels.speed)) {
                var t = "speed",
                    n = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter((function (t) {
                    return t >= e.minimumSpeed && t <= e.maximumSpeed
                }));
                var i = !Uu(this.options.speed) && this.options.speed.length > 1;
                id.toggleMenuButton.call(this, t, i), Ju(n), id.checkMenu.call(this), i && (this.options.speed.forEach((function (i) {
                    id.createMenuItem.call(e, {
                        value: i,
                        list: n,
                        type: t,
                        title: id.getLabel.call(e, "speed", i)
                    })
                })), id.updateSetting.call(this, t, n))
            }
        },
        checkMenu: function () {
            var e = this.elements.settings.buttons,
                t = !Uu(e) && Object.values(e).some((function (e) {
                    return !e.hidden
                }));
            tf(this.elements.settings.menu, !t)
        },
        focusFirstMenuItem: function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            if (!this.elements.settings.popup.hidden) {
                var n = e;
                ju(n) || (n = Object.values(this.elements.settings.panels).find((function (e) {
                    return !e.hidden
                })));
                var i = n.querySelector('[role^="menuitem"]');
                lf.call(this, i, t)
            }
        },
        toggleMenu: function (e) {
            var t = this.elements.settings.popup,
                n = this.elements.buttons.settings;
            if (ju(t) && ju(n)) {
                var i = t.hidden,
                    r = i;
                if (Pu(e)) r = e;
                else if (Nu(e) && 27 === e.which) r = !1;
                else if (Lu(e)) {
                    var o = xu(e.composedPath) ? e.composedPath()[0] : e.target,
                        a = t.contains(o);
                    if (a || !a && e.target !== n && r) return
                }
                n.setAttribute("aria-expanded", r), tf(t, !r), nf(this.elements.container, this.config.classNames.menu.open, r), r && Nu(e) ? id.focusFirstMenuItem.call(this, null, !0) : r || i || lf.call(this, n, Nu(e))
            }
        },
        getMenuSize: function (e) {
            var t = e.cloneNode(!0);
            t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
            var n = t.scrollWidth,
                i = t.scrollHeight;
            return Qu(t), {
                width: n,
                height: i
            }
        },
        showMenuPanel: function () {
            var e = this,
                t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                i = this.elements.container.querySelector("#plyr-settings-".concat(this.id, "-").concat(t));
            if (ju(i)) {
                var r = i.parentNode,
                    o = Array.from(r.children).find((function (e) {
                        return !e.hidden
                    }));
                if (ff.transitions && !ff.reducedMotion) {
                    r.style.width = "".concat(o.scrollWidth, "px"), r.style.height = "".concat(o.scrollHeight, "px");
                    var a = id.getMenuSize.call(this, i),
                        s = function t(n) {
                            n.target === r && ["width", "height"].includes(n.propertyName) && (r.style.width = "", r.style.height = "", mf.call(e, r, Du, t))
                        };
                    pf.call(this, r, Du, s), r.style.width = "".concat(a.width, "px"), r.style.height = "".concat(a.height, "px")
                }
                tf(o, !0), tf(i, !1), id.focusFirstMenuItem.call(this, i, n)
            }
        },
        setDownloadUrl: function () {
            var e = this.elements.buttons.download;
            ju(e) && e.setAttribute("href", this.download)
        },
        create: function (e) {
            var t = this,
                n = id.bindMenuItemShortcuts,
                i = id.createButton,
                r = id.createProgress,
                o = id.createRange,
                a = id.createTime,
                s = id.setQualityMenu,
                l = id.setSpeedMenu,
                c = id.showMenuPanel;
            this.elements.controls = null, Ou(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
            var u = Gu("div", ef(this.config.selectors.controls.wrapper));
            this.elements.controls = u;
            var f = {
                class: "plyr__controls__item"
            };
            return Cf(Ou(this.config.controls) ? this.config.controls : []).forEach((function (s) {
                if ("restart" === s && u.appendChild(i.call(t, "restart", f)), "rewind" === s && u.appendChild(i.call(t, "rewind", f)), "play" === s && u.appendChild(i.call(t, "play", f)), "fast-forward" === s && u.appendChild(i.call(t, "fast-forward", f)), "progress" === s) {
                    var l = Gu("div", {
                            class: "".concat(f.class, " plyr__progress__container")
                        }),
                        d = Gu("div", ef(t.config.selectors.progress));
                    if (d.appendChild(o.call(t, "seek", {
                            id: "plyr-seek-".concat(e.id)
                        })), d.appendChild(r.call(t, "buffer")), t.config.tooltips.seek) {
                        var h = Gu("span", {
                            class: t.config.classNames.tooltip
                        }, "00:00");
                        d.appendChild(h), t.elements.display.seekTooltip = h
                    }
                    t.elements.progress = d, l.appendChild(t.elements.progress), u.appendChild(l)
                }
                if ("current-time" === s && u.appendChild(a.call(t, "currentTime", f)), "duration" === s && u.appendChild(a.call(t, "duration", f)), "mute" === s || "volume" === s) {
                    var p = t.elements.volume;
                    if (ju(p) && u.contains(p) || (p = Gu("div", Ku({}, f, {
                            class: "".concat(f.class, " plyr__volume").trim()
                        })), t.elements.volume = p, u.appendChild(p)), "mute" === s && p.appendChild(i.call(t, "mute")), "volume" === s && !qu.isIos) {
                        var m = {
                            max: 1,
                            step: .05,
                            value: t.config.volume
                        };
                        p.appendChild(o.call(t, "volume", Ku(m, {
                            id: "plyr-volume-".concat(e.id)
                        })))
                    }
                }
                if ("captions" === s && u.appendChild(i.call(t, "captions", f)), "settings" === s && !Uu(t.config.settings)) {
                    var g = Gu("div", Ku({}, f, {
                        class: "".concat(f.class, " plyr__menu").trim(),
                        hidden: ""
                    }));
                    g.appendChild(i.call(t, "settings", {
                        "aria-haspopup": !0,
                        "aria-controls": "plyr-settings-".concat(e.id),
                        "aria-expanded": !1
                    }));
                    var v = Gu("div", {
                            class: "plyr__menu__container",
                            id: "plyr-settings-".concat(e.id),
                            hidden: ""
                        }),
                        y = Gu("div"),
                        b = Gu("div", {
                            id: "plyr-settings-".concat(e.id, "-home")
                        }),
                        w = Gu("div", {
                            role: "menu"
                        });
                    b.appendChild(w), y.appendChild(b), t.elements.settings.panels.home = b, t.config.settings.forEach((function (i) {
                        var r = Gu("button", Ku(ef(t.config.selectors.buttons.settings), {
                            type: "button",
                            class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--forward"),
                            role: "menuitem",
                            "aria-haspopup": !0,
                            hidden: ""
                        }));
                        n.call(t, r, i), pf.call(t, r, "click", (function () {
                            c.call(t, i, !1)
                        }));
                        var o = Gu("span", null, $f(i, t.config)),
                            a = Gu("span", {
                                class: t.config.classNames.menu.value
                            });
                        a.innerHTML = e[i], o.appendChild(a), r.appendChild(o), w.appendChild(r);
                        var s = Gu("div", {
                                id: "plyr-settings-".concat(e.id, "-").concat(i),
                                hidden: ""
                            }),
                            l = Gu("button", {
                                type: "button",
                                class: "".concat(t.config.classNames.control, " ").concat(t.config.classNames.control, "--back")
                            });
                        l.appendChild(Gu("span", {
                            "aria-hidden": !0
                        }, $f(i, t.config))), l.appendChild(Gu("span", {
                            class: t.config.classNames.hidden
                        }, $f("menuBack", t.config))), pf.call(t, s, "keydown", (function (e) {
                            37 === e.which && (e.preventDefault(), e.stopPropagation(), c.call(t, "home", !0))
                        }), !1), pf.call(t, l, "click", (function () {
                            c.call(t, "home", !1)
                        })), s.appendChild(l), s.appendChild(Gu("div", {
                            role: "menu"
                        })), y.appendChild(s), t.elements.settings.buttons[i] = r, t.elements.settings.panels[i] = s
                    })), v.appendChild(y), g.appendChild(v), u.appendChild(g), t.elements.settings.popup = v, t.elements.settings.menu = g
                }
                if ("pip" === s && ff.pip && u.appendChild(i.call(t, "pip", f)), "airplay" === s && ff.airplay && u.appendChild(i.call(t, "airplay", f)), "download" === s) {
                    var k = Ku({}, f, {
                        element: "a",
                        href: t.download,
                        target: "_blank"
                    });
                    t.isHTML5 && (k.download = "");
                    var T = t.config.urls.download;
                    !_u(T) && t.isEmbed && Ku(k, {
                        icon: "logo-".concat(t.provider),
                        label: t.provider
                    }), u.appendChild(i.call(t, "download", k))
                }
                "fullscreen" === s && u.appendChild(i.call(t, "fullscreen", f))
            })), this.isHTML5 && s.call(this, Af.getQualityOptions.call(this)), l.call(this), u
        },
        inject: function () {
            var e = this;
            if (this.config.loadSprite) {
                var t = id.getIconUrl.call(this);
                t.cors && Xf(t.url, "sprite-plyr")
            }
            this.id = Math.floor(1e4 * Math.random());
            var n = null;
            this.elements.controls = null;
            var i = {
                    id: this.id,
                    seektime: this.config.seekTime,
                    title: this.config.title
                },
                r = !0;
            xu(this.config.controls) && (this.config.controls = this.config.controls.call(this, i)), this.config.controls || (this.config.controls = []), ju(this.config.controls) || Cu(this.config.controls) ? n = this.config.controls : (n = id.create.call(this, {
                id: this.id,
                seektime: this.config.seekTime,
                speed: this.speed,
                quality: this.quality,
                captions: ad.getLabel.call(this)
            }), r = !1);
            var o, a;
            if (r && Cu(this.config.controls) && (o = n, Object.entries(i).forEach((function (e) {
                    var t = Ha(e, 2),
                        n = t[0],
                        i = t[1];
                    o = Bf(o, "{".concat(n, "}"), i)
                })), n = o), Cu(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), ju(a) || (a = this.elements.container), a[ju(n) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", n), ju(this.elements.controls) || id.findElements.call(this), !Uu(this.elements.buttons)) {
                var s = function (t) {
                    var n = e.config.classNames.controlPressed;
                    Object.defineProperty(t, "pressed", {
                        enumerable: !0,
                        get: function () {
                            return rf(t, n)
                        },
                        set: function () {
                            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            nf(t, n, e)
                        }
                    })
                };
                Object.values(this.elements.buttons).filter(Boolean).forEach((function (e) {
                    Ou(e) || Iu(e) ? Array.from(e).filter(Boolean).forEach(s) : s(e)
                }))
            }
            if (qu.isEdge && Fu(a), this.config.tooltips.controls) {
                var l = this.config,
                    c = l.classNames,
                    u = l.selectors,
                    f = "".concat(u.controls.wrapper, " ").concat(u.labels, " .").concat(c.hidden),
                    d = af.call(this, f);
                Array.from(d).forEach((function (t) {
                    nf(t, e.config.classNames.hidden, !1), nf(t, e.config.classNames.tooltip, !0)
                }))
            }
        }
    };

    function rd(e) {
        var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
            n = e;
        if (t) {
            var i = document.createElement("a");
            i.href = n, n = i.href
        }
        try {
            return new URL(n)
        } catch (e) {
            return null
        }
    }

    function od(e) {
        var t = new URLSearchParams;
        return Eu(e) && Object.entries(e).forEach((function (e) {
            var n = Ha(e, 2),
                i = n[0],
                r = n[1];
            t.set(i, r)
        })), t
    }
    var ad = {
            setup: function () {
                if (this.supported.ui)
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !ff.textTracks) Ou(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && id.setCaptionsMenu.call(this);
                    else {
                        if (ju(this.elements.captions) || (this.elements.captions = Gu("div", ef(this.config.selectors.captions)), function (e, t) {
                                ju(e) && ju(t) && t.parentNode.insertBefore(e, t.nextSibling)
                            }(this.elements.captions, this.elements.wrapper)), qu.isIE && window.URL) {
                            var e = this.media.querySelectorAll("track");
                            Array.from(e).forEach((function (e) {
                                var t = e.getAttribute("src"),
                                    n = rd(t);
                                null !== n && n.hostname !== window.location.href.hostname && ["http:", "https:"].includes(n.protocol) && Gf(t, "blob").then((function (t) {
                                    e.setAttribute("src", window.URL.createObjectURL(t))
                                })).catch((function () {
                                    Qu(e)
                                }))
                            }))
                        }
                        var t = Cf((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map((function (e) {
                                return e.split("-")[0]
                            }))),
                            n = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                        if ("auto" === n) n = Ha(t, 1)[0];
                        var i = this.storage.get("captions");
                        if (Pu(i) || (i = this.config.captions.active), Object.assign(this.captions, {
                                toggled: !1,
                                active: i,
                                language: n,
                                languages: t
                            }), this.isHTML5) {
                            var r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                            pf.call(this, this.media.textTracks, r, ad.update.bind(this))
                        }
                        setTimeout(ad.update.bind(this), 0)
                    }
            },
            update: function () {
                var e = this,
                    t = ad.getTracks.call(this, !0),
                    n = this.captions,
                    i = n.active,
                    r = n.language,
                    o = n.meta,
                    a = n.currentTrackNode,
                    s = Boolean(t.find((function (e) {
                        return e.language === r
                    })));
                this.isHTML5 && this.isVideo && t.filter((function (e) {
                    return !o.get(e)
                })).forEach((function (t) {
                    e.debug.log("Track added", t), o.set(t, {
                        default: "showing" === t.mode
                    }), "showing" === t.mode && (t.mode = "hidden"), pf.call(e, t, "cuechange", (function () {
                        return ad.updateCues.call(e)
                    }))
                })), (s && this.language !== r || !t.includes(a)) && (ad.setLanguage.call(this, r), ad.toggle.call(this, i && s)), nf(this.elements.container, this.config.classNames.captions.enabled, !Uu(t)), Ou(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && id.setCaptionsMenu.call(this)
            },
            toggle: function (e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (this.supported.ui) {
                    var i = this.captions.toggled,
                        r = this.config.classNames.captions.active,
                        o = Su(e) ? !i : e;
                    if (o !== i) {
                        if (n || (this.captions.active = o, this.storage.set({
                                captions: o
                            })), !this.language && o && !n) {
                            var a = ad.getTracks.call(this),
                                s = ad.findTrack.call(this, [this.captions.language].concat(Ba(this.captions.languages)), !0);
                            return this.captions.language = s.language, void ad.set.call(this, a.indexOf(s))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = o), nf(this.elements.container, r, o), this.captions.toggled = o, id.updateSetting.call(this, "captions"), vf.call(this, this.media, o ? "captionsenabled" : "captionsdisabled")
                    }
                    setTimeout((function () {
                        o && t.captions.toggled && (t.captions.currentTrackNode.mode = "hidden")
                    }))
                }
            },
            set: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = ad.getTracks.call(this);
                if (-1 !== e)
                    if (Au(e))
                        if (e in n) {
                            if (this.captions.currentTrack !== e) {
                                this.captions.currentTrack = e;
                                var i = n[e],
                                    r = i || {},
                                    o = r.language;
                                this.captions.currentTrackNode = i, id.updateSetting.call(this, "captions"), t || (this.captions.language = o, this.storage.set({
                                    language: o
                                })), this.isVimeo && this.embed.enableTextTrack(o), vf.call(this, this.media, "languagechange")
                            }
                            ad.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && ad.updateCues.call(this)
                        } else this.debug.warn("Track not found", e);
                else this.debug.warn("Invalid caption argument", e);
                else ad.toggle.call(this, !1, t)
            },
            setLanguage: function (e) {
                var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                if (Cu(e)) {
                    var n = e.toLowerCase();
                    this.captions.language = n;
                    var i = ad.getTracks.call(this),
                        r = ad.findTrack.call(this, [n]);
                    ad.set.call(this, i.indexOf(r), t)
                } else this.debug.warn("Invalid language argument", e)
            },
            getTracks: function () {
                var e = this,
                    t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = Array.from((this.media || {}).textTracks || []);
                return n.filter((function (n) {
                    return !e.isHTML5 || t || e.captions.meta.has(n)
                })).filter((function (e) {
                    return ["captions", "subtitles"].includes(e.kind)
                }))
            },
            findTrack: function (e) {
                var t, n = this,
                    i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = ad.getTracks.call(this),
                    o = function (e) {
                        return Number((n.captions.meta.get(e) || {}).default)
                    },
                    a = Array.from(r).sort((function (e, t) {
                        return o(t) - o(e)
                    }));
                return e.every((function (e) {
                    return !(t = a.find((function (t) {
                        return t.language === e
                    })))
                })), t || (i ? a[0] : void 0)
            },
            getCurrentTrack: function () {
                return ad.getTracks.call(this)[this.currentTrack]
            },
            getLabel: function (e) {
                var t = e;
                return !Ru(t) && ff.textTracks && this.captions.toggled && (t = ad.getCurrentTrack.call(this)), Ru(t) ? Uu(t.label) ? Uu(t.language) ? $f("enabled", this.config) : e.language.toUpperCase() : t.label : $f("disabled", this.config)
            },
            updateCues: function (e) {
                if (this.supported.ui)
                    if (ju(this.elements.captions))
                        if (Su(e) || Array.isArray(e)) {
                            var t = e;
                            if (!t) {
                                var n = ad.getCurrentTrack.call(this);
                                t = Array.from((n || {}).activeCues || []).map((function (e) {
                                    return e.getCueAsHTML()
                                })).map(Wf)
                            }
                            var i = t.map((function (e) {
                                return e.trim()
                            })).join("\n");
                            if (i !== this.elements.captions.innerHTML) {
                                Ju(this.elements.captions);
                                var r = Gu("span", ef(this.config.selectors.caption));
                                r.innerHTML = i, this.elements.captions.appendChild(r), vf.call(this, this.media, "cuechange")
                            }
                        } else this.debug.warn("updateCues: Invalid input", e);
                else this.debug.warn("No captions element to render to")
            }
        },
        sd = {
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
                rewind: "Rewind {seektime}s",
                play: "Play",
                pause: "Pausar",
                fastForward: "Forward {seektime}s",
                seek: "Seek",
                seekLabel: "{currentTime} de {duration}",
                played: "Played",
                buffered: "Buffered",
                currentTime: "Momento atual",
                duration: "Duração",
                volume: "Volume",
                mute: "Mutar",
                unmute: "Desmutar",
                enableCaptions: "Habilitar legendas",
                disableCaptions: "Desabilitar legendas",
                download: "Download",
                enterFullscreen: "Entrar no modo tela cheia",
                exitFullscreen: "Sair do modo tela cheia",
                frameTitle: "Player de {title}",
                captions: "Legendas",
                settings: "Configurações",
                pip: "PIP",
                menuBack: "Voltar para o menu anterior",
                speed: "Velocidade",
                normal: "Normal",
                quality: "Qualidade",
                loop: "Loop",
                start: "Começar",
                end: "Fim",
                all: "Tudo",
                reset: "Reset",
                disabled: "Desabilitado",
                enabled: "Habilitado",
                advertisement: "Anúncio",
                qualityBadge: {
                    2160: "4K",
                    1440: "HD",
                    1080: "HD",
                    720: "HD",
                    576: "SD",
                    480: "SD"
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
        ld = "picture-in-picture",
        cd = "inline",
        ud = {
            html5: "html5",
            youtube: "youtube",
            vimeo: "vimeo"
        },
        fd = "audio",
        dd = "video";
    var hd = function () {},
        pd = function () {
            function e() {
                var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                Ra(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
            }
            return _a(e, [{
                key: "log",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.log, console) : hd
                }
            }, {
                key: "warn",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.warn, console) : hd
                }
            }, {
                key: "error",
                get: function () {
                    return this.enabled ? Function.prototype.bind.call(console.error, console) : hd
                }
            }]), e
        }(),
        md = function () {
            function e(t) {
                var n = this;
                Ra(this, e), Ua(this, "onChange", (function () {
                    if (n.enabled) {
                        var e = n.player.elements.buttons.fullscreen;
                        ju(e) && (e.pressed = n.active);
                        var t = n.target === n.player.media ? n.target : n.player.elements.container;
                        vf.call(n.player, t, n.active ? "enterfullscreen" : "exitfullscreen", !0)
                    }
                })), Ua(this, "toggleFallback", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (e ? n.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(n.scrollPosition.x, n.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", nf(n.target, n.player.config.classNames.fullscreen.fallback, e), qu.isIos) {
                        var t = document.head.querySelector('meta[name="viewport"]'),
                            i = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        var r = Cu(t.content) && t.content.includes(i);
                        e ? (n.cleanupViewport = !r, r || (t.content += ",".concat(i))) : n.cleanupViewport && (t.content = t.content.split(",").filter((function (e) {
                            return e.trim() !== i
                        })).join(","))
                    }
                    n.onChange()
                })), Ua(this, "trapFocus", (function (e) {
                    if (!qu.isIos && n.active && "Tab" === e.key && 9 === e.keyCode) {
                        var t = document.activeElement,
                            i = af.call(n.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                            r = Ha(i, 1)[0],
                            o = i[i.length - 1];
                        t !== o || e.shiftKey ? t === r && e.shiftKey && (o.focus(), e.preventDefault()) : (r.focus(), e.preventDefault())
                    }
                })), Ua(this, "update", (function () {
                    var t;
                    n.enabled ? (t = n.forceFallback ? "Fallback (forced)" : e.native ? "Native" : "Fallback", n.player.debug.log("".concat(t, " fullscreen enabled"))) : n.player.debug.log("Fullscreen not supported and fallback disabled");
                    nf(n.player.elements.container, n.player.config.classNames.fullscreen.enabled, n.enabled)
                })), Ua(this, "enter", (function () {
                    n.enabled && (qu.isIos && n.player.config.fullscreen.iosNative ? n.player.isVimeo ? n.player.embed.requestFullscreen() : n.target.webkitEnterFullscreen() : !e.native || n.forceFallback ? n.toggleFallback(!0) : n.prefix ? Uu(n.prefix) || n.target["".concat(n.prefix, "Request").concat(n.property)]() : n.target.requestFullscreen({
                        navigationUI: "hide"
                    }))
                })), Ua(this, "exit", (function () {
                    if (n.enabled)
                        if (qu.isIos && n.player.config.fullscreen.iosNative) n.target.webkitExitFullscreen(), wf(n.player.play());
                        else if (!e.native || n.forceFallback) n.toggleFallback(!1);
                    else if (n.prefix) {
                        if (!Uu(n.prefix)) {
                            var t = "moz" === n.prefix ? "Cancel" : "Exit";
                            document["".concat(n.prefix).concat(t).concat(n.property)]()
                        }
                    } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                })), Ua(this, "toggle", (function () {
                    n.active ? n.exit() : n.enter()
                })), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function (e, t) {
                    return (Element.prototype.closest || function () {
                        var e = this;
                        do {
                            if ( of .matches(e, t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    }).call(e, t)
                }(this.player.elements.container, t.config.fullscreen.container), pf.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : "".concat(this.prefix, "fullscreenchange"), (function () {
                    n.onChange()
                })), pf.call(this.player, this.player.elements.container, "dblclick", (function (e) {
                    ju(n.player.elements.controls) && n.player.elements.controls.contains(e.target) || n.player.listeners.proxy(e, n.toggle, "fullscreen")
                })), pf.call(this, this.player.elements.container, "keydown", (function (e) {
                    return n.trapFocus(e)
                })), this.update()
            }
            return _a(e, [{
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
                    if (!e.native || this.forceFallback) return rf(this.target, this.player.config.classNames.fullscreen.fallback);
                    var t = this.prefix ? document["".concat(this.prefix).concat(this.property, "Element")] : document.fullscreenElement;
                    return t && t.shadowRoot ? t === this.target.getRootNode().host : t === this.target
                }
            }, {
                key: "target",
                get: function () {
                    return qu.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
                }
            }], [{
                key: "native",
                get: function () {
                    return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
                }
            }, {
                key: "prefix",
                get: function () {
                    if (xu(document.exitFullscreen)) return "";
                    var e = "";
                    return ["webkit", "moz", "ms"].some((function (t) {
                        return !(!xu(document["".concat(t, "ExitFullscreen")]) && !xu(document["".concat(t, "CancelFullScreen")])) && (e = t, !0)
                    })), e
                }
            }, {
                key: "property",
                get: function () {
                    return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
                }
            }]), e
        }(),
        gd = Math.sign || function (e) {
            return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1
        };

    function vd(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        return new Promise((function (n, i) {
            var r = new Image,
                o = function () {
                    delete r.onload, delete r.onerror, (r.naturalWidth >= t ? n : i)(r)
                };
            Object.assign(r, {
                onload: o,
                onerror: o,
                src: e
            })
        }))
    }
    je({
        target: "Math",
        stat: !0
    }, {
        sign: gd
    });
    var yd = {
            addStyleHook: function () {
                nf(this.elements.container, this.config.selectors.container.replace(".", ""), !0), nf(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls: function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build: function () {
                var e = this;
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for ".concat(this.provider, " ").concat(this.type)), void yd.toggleNativeControls.call(this, !0);
                ju(this.elements.controls) || (id.inject.call(this), this.listeners.controls()), yd.toggleNativeControls.call(this), this.isHTML5 && ad.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, id.updateVolume.call(this), id.timeUpdate.call(this), yd.checkPlaying.call(this), nf(this.elements.container, this.config.classNames.pip.supported, ff.pip && this.isHTML5 && this.isVideo), nf(this.elements.container, this.config.classNames.airplay.supported, ff.airplay && this.isHTML5), nf(this.elements.container, this.config.classNames.isIos, qu.isIos), nf(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout((function () {
                    vf.call(e, e.media, "ready")
                }), 0), yd.setTitle.call(this), this.poster && yd.setPoster.call(this, this.poster, !1).catch((function () {})), this.config.duration && id.durationUpdate.call(this)
            },
            setTitle: function () {
                var e = $f("play", this.config);
                if (Cu(this.config.title) && !Uu(this.config.title) && (e += ", ".concat(this.config.title)), Array.from(this.elements.buttons.play || []).forEach((function (t) {
                        t.setAttribute("aria-label", e)
                    })), this.isEmbed) {
                    var t = sf.call(this, "iframe");
                    if (!ju(t)) return;
                    var n = Uu(this.config.title) ? "video" : this.config.title,
                        i = $f("frameTitle", this.config);
                    t.setAttribute("title", i.replace("{title}", n))
                }
            },
            togglePoster: function (e) {
                nf(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster: function (e) {
                var t = this,
                    n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                return n && this.poster ? Promise.reject(new Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), bf.call(this).then((function () {
                    return vd(e)
                })).catch((function (n) {
                    throw e === t.poster && yd.togglePoster.call(t, !1), n
                })).then((function () {
                    if (e !== t.poster) throw new Error("setPoster cancelled by later call to setPoster")
                })).then((function () {
                    return Object.assign(t.elements.poster.style, {
                        backgroundImage: "url('".concat(e, "')"),
                        backgroundSize: ""
                    }), yd.togglePoster.call(t, !0), e
                })))
            },
            checkPlaying: function (e) {
                var t = this;
                nf(this.elements.container, this.config.classNames.playing, this.playing), nf(this.elements.container, this.config.classNames.paused, this.paused), nf(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach((function (e) {
                    Object.assign(e, {
                        pressed: t.playing
                    }), e.setAttribute("aria-label", $f(t.playing ? "pause" : "play", t.config))
                })), Lu(e) && "timeupdate" === e.type || yd.toggleControls.call(this)
            },
            checkLoading: function (e) {
                var t = this;
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout((function () {
                    nf(t.elements.container, t.config.classNames.loading, t.loading), yd.toggleControls.call(t)
                }), this.loading ? 250 : 0)
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
                Object.values(Fa({}, this.media.style)).filter((function (e) {
                    return !Uu(e) && Cu(e) && e.startsWith("--plyr")
                })).forEach((function (t) {
                    e.elements.container.style.setProperty(t, e.media.style.getPropertyValue(t)), e.media.style.removeProperty(t)
                })), Uu(this.media.style) && this.media.removeAttribute("style")
            }
        },
        bd = function () {
            function e(t) {
                var n = this;
                Ra(this, e), Ua(this, "firstTouch", (function () {
                    var e = n.player,
                        t = e.elements;
                    e.touch = !0, nf(t.container, e.config.classNames.isTouch, !0)
                })), Ua(this, "setTabFocus", (function (e) {
                    var t = n.player,
                        i = t.elements;
                    if (clearTimeout(n.focusTimer), "keydown" !== e.type || 9 === e.which) {
                        "keydown" === e.type && (n.lastKeyDown = e.timeStamp);
                        var r, o = e.timeStamp - n.lastKeyDown <= 20;
                        if ("focus" !== e.type || o) r = t.config.classNames.tabFocus, nf(af.call(t, ".".concat(r)), r, !1), "focusout" !== e.type && (n.focusTimer = setTimeout((function () {
                            var e = document.activeElement;
                            i.container.contains(e) && nf(document.activeElement, t.config.classNames.tabFocus, !0)
                        }), 10))
                    }
                })), Ua(this, "global", (function () {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                        t = n.player;
                    t.config.keyboard.global && hf.call(t, window, "keydown keyup", n.handleKey, e, !1), hf.call(t, document.body, "click", n.toggleMenu, e), gf.call(t, document.body, "touchstart", n.firstTouch), hf.call(t, document.body, "keydown focus blur focusout", n.setTabFocus, e, !1, !0)
                })), Ua(this, "container", (function () {
                    var e = n.player,
                        t = e.config,
                        i = e.elements,
                        r = e.timers;
                    !t.keyboard.global && t.keyboard.focused && pf.call(e, i.container, "keydown keyup", n.handleKey, !1), pf.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", (function (t) {
                        var n = i.controls;
                        n && "enterfullscreen" === t.type && (n.pressed = !1, n.hover = !1);
                        var o = 0;
                        ["touchstart", "touchmove", "mousemove"].includes(t.type) && (yd.toggleControls.call(e, !0), o = e.touch ? 3e3 : 2e3), clearTimeout(r.controls), r.controls = setTimeout((function () {
                            return yd.toggleControls.call(e, !1)
                        }), o)
                    }));
                    var o = function (t) {
                            if (!t) return Ef.call(e);
                            var n = i.container.getBoundingClientRect(),
                                r = n.width,
                                o = n.height;
                            return Ef.call(e, "".concat(r, ":").concat(o))
                        },
                        a = function () {
                            clearTimeout(r.resized), r.resized = setTimeout(o, 50)
                        };
                    pf.call(e, i.container, "enterfullscreen exitfullscreen", (function (t) {
                        var n = e.fullscreen,
                            r = n.target,
                            s = n.usingNative;
                        if (r === i.container && (e.isEmbed || !Uu(e.config.ratio))) {
                            var l = "enterfullscreen" === t.type,
                                c = o(l);
                            c.padding;
                            ! function (t, n, i) {
                                if (e.isVimeo && !e.config.vimeo.premium) {
                                    var r = e.elements.wrapper.firstChild,
                                        o = Ha(t, 2)[1],
                                        a = Ha(Sf.call(e), 2),
                                        s = a[0],
                                        l = a[1];
                                    r.style.maxWidth = i ? "".concat(o / l * s, "px") : null, r.style.margin = i ? "0 auto" : null
                                }
                            }(c.ratio, 0, l), l && setTimeout((function () {
                                return Fu(i.container)
                            }), 100), s || (l ? pf.call(e, window, "resize", a) : mf.call(e, window, "resize", a))
                        }
                    }))
                })), Ua(this, "media", (function () {
                    var e = n.player,
                        t = e.elements;
                    if (pf.call(e, e.media, "timeupdate seeking seeked", (function (t) {
                            return id.timeUpdate.call(e, t)
                        })), pf.call(e, e.media, "durationchange loadeddata loadedmetadata", (function (t) {
                            return id.durationUpdate.call(e, t)
                        })), pf.call(e, e.media, "ended", (function () {
                            e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                        })), pf.call(e, e.media, "progress playing seeking seeked", (function (t) {
                            return id.updateProgress.call(e, t)
                        })), pf.call(e, e.media, "volumechange", (function (t) {
                            return id.updateVolume.call(e, t)
                        })), pf.call(e, e.media, "playing play pause ended emptied timeupdate", (function (t) {
                            return yd.checkPlaying.call(e, t)
                        })), pf.call(e, e.media, "waiting canplay seeked playing", (function (t) {
                            return yd.checkLoading.call(e, t)
                        })), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                        var i = sf.call(e, ".".concat(e.config.classNames.video));
                        if (!ju(i)) return;
                        pf.call(e, t.container, "click", (function (r) {
                            ([t.container, i].includes(r.target) || i.contains(r.target)) && (e.touch && e.config.hideControls || (e.ended ? (n.proxy(r, e.restart, "restart"), n.proxy(r, (function () {
                                wf(e.play())
                            }), "play")) : n.proxy(r, (function () {
                                wf(e.togglePlay())
                            }), "play")))
                        }))
                    }
                    e.supported.ui && e.config.disableContextMenu && pf.call(e, t.wrapper, "contextmenu", (function (e) {
                        e.preventDefault()
                    }), !1), pf.call(e, e.media, "volumechange", (function () {
                        e.storage.set({
                            volume: e.volume,
                            muted: e.muted
                        })
                    })), pf.call(e, e.media, "ratechange", (function () {
                        id.updateSetting.call(e, "speed"), e.storage.set({
                            speed: e.speed
                        })
                    })), pf.call(e, e.media, "qualitychange", (function (t) {
                        id.updateSetting.call(e, "quality", null, t.detail.quality)
                    })), pf.call(e, e.media, "ready qualitychange", (function () {
                        id.setDownloadUrl.call(e)
                    }));
                    var r = e.config.events.concat(["keyup", "keydown"]).join(" ");
                    pf.call(e, e.media, r, (function (n) {
                        var i = n.detail,
                            r = void 0 === i ? {} : i;
                        "error" === n.type && (r = e.media.error), vf.call(e, t.container, n.type, !0, r)
                    }))
                })), Ua(this, "proxy", (function (e, t, i) {
                    var r = n.player,
                        o = r.config.listeners[i],
                        a = !0;
                    xu(o) && (a = o.call(r, e)), !1 !== a && xu(t) && t.call(r, e)
                })), Ua(this, "bind", (function (e, t, i, r) {
                    var o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                        a = n.player,
                        s = a.config.listeners[r],
                        l = xu(s);
                    pf.call(a, e, t, (function (e) {
                        return n.proxy(e, i, r)
                    }), o && !l)
                })), Ua(this, "controls", (function () {
                    var e = n.player,
                        t = e.elements,
                        i = qu.isIE ? "change" : "input";
                    if (t.buttons.play && Array.from(t.buttons.play).forEach((function (t) {
                            n.bind(t, "click", (function () {
                                wf(e.togglePlay())
                            }), "play")
                        })), n.bind(t.buttons.restart, "click", e.restart, "restart"), n.bind(t.buttons.rewind, "click", (function () {
                            e.lastSeekTime = Date.now(), e.rewind()
                        }), "rewind"), n.bind(t.buttons.fastForward, "click", (function () {
                            e.lastSeekTime = Date.now(), e.forward()
                        }), "fastForward"), n.bind(t.buttons.mute, "click", (function () {
                            e.muted = !e.muted
                        }), "mute"), n.bind(t.buttons.captions, "click", (function () {
                            return e.toggleCaptions()
                        })), n.bind(t.buttons.download, "click", (function () {
                            vf.call(e, e.media, "download")
                        }), "download"), n.bind(t.buttons.fullscreen, "click", (function () {
                            e.fullscreen.toggle()
                        }), "fullscreen"), n.bind(t.buttons.pip, "click", (function () {
                            e.pip = "toggle"
                        }), "pip"), n.bind(t.buttons.airplay, "click", e.airplay, "airplay"), n.bind(t.buttons.settings, "click", (function (t) {
                            t.stopPropagation(), t.preventDefault(), id.toggleMenu.call(e, t)
                        }), null, !1), n.bind(t.buttons.settings, "keyup", (function (t) {
                            var n = t.which;
                            [13, 32].includes(n) && (13 !== n ? (t.preventDefault(), t.stopPropagation(), id.toggleMenu.call(e, t)) : id.focusFirstMenuItem.call(e, null, !0))
                        }), null, !1), n.bind(t.settings.menu, "keydown", (function (t) {
                            27 === t.which && id.toggleMenu.call(e, t)
                        })), n.bind(t.inputs.seek, "mousedown mousemove", (function (e) {
                            var n = t.progress.getBoundingClientRect(),
                                i = 100 / n.width * (e.pageX - n.left);
                            e.currentTarget.setAttribute("seek-value", i)
                        })), n.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", (function (t) {
                            var n = t.currentTarget,
                                i = t.keyCode ? t.keyCode : t.which,
                                r = "play-on-seeked";
                            if (!Nu(t) || 39 === i || 37 === i) {
                                e.lastSeekTime = Date.now();
                                var o = n.hasAttribute(r),
                                    a = ["mouseup", "touchend", "keyup"].includes(t.type);
                                o && a ? (n.removeAttribute(r), wf(e.play())) : !a && e.playing && (n.setAttribute(r, ""), e.pause())
                            }
                        })), qu.isIos) {
                        var r = af.call(e, 'input[type="range"]');
                        Array.from(r).forEach((function (e) {
                            return n.bind(e, i, (function (e) {
                                return Fu(e.target)
                            }))
                        }))
                    }
                    n.bind(t.inputs.seek, i, (function (t) {
                        var n = t.currentTarget,
                            i = n.getAttribute("seek-value");
                        Uu(i) && (i = n.value), n.removeAttribute("seek-value"), e.currentTime = i / n.max * e.duration
                    }), "seek"), n.bind(t.progress, "mouseenter mouseleave mousemove", (function (t) {
                        return id.updateSeekTooltip.call(e, t)
                    })), n.bind(t.progress, "mousemove touchmove", (function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startMove(t)
                    })), n.bind(t.progress, "mouseleave touchend click", (function () {
                        var t = e.previewThumbnails;
                        t && t.loaded && t.endMove(!1, !0)
                    })), n.bind(t.progress, "mousedown touchstart", (function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.startScrubbing(t)
                    })), n.bind(t.progress, "mouseup touchend", (function (t) {
                        var n = e.previewThumbnails;
                        n && n.loaded && n.endScrubbing(t)
                    })), qu.isWebkit && Array.from(af.call(e, 'input[type="range"]')).forEach((function (t) {
                        n.bind(t, "input", (function (t) {
                            return id.updateRangeFill.call(e, t.target)
                        }))
                    })), e.config.toggleInvert && !ju(t.display.duration) && n.bind(t.display.currentTime, "click", (function () {
                        0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, id.timeUpdate.call(e))
                    })), n.bind(t.inputs.volume, i, (function (t) {
                        e.volume = t.target.value
                    }), "volume"), n.bind(t.controls, "mouseenter mouseleave", (function (n) {
                        t.controls.hover = !e.touch && "mouseenter" === n.type
                    })), t.fullscreen && Array.from(t.fullscreen.children).filter((function (e) {
                        return !e.contains(t.container)
                    })).forEach((function (i) {
                        n.bind(i, "mouseenter mouseleave", (function (n) {
                            t.controls.hover = !e.touch && "mouseenter" === n.type
                        }))
                    })), n.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", (function (e) {
                        t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                    })), n.bind(t.controls, "focusin", (function () {
                        var i = e.config,
                            r = e.timers;
                        nf(t.controls, i.classNames.noTransition, !0), yd.toggleControls.call(e, !0), setTimeout((function () {
                            nf(t.controls, i.classNames.noTransition, !1)
                        }), 0);
                        var o = n.touch ? 3e3 : 4e3;
                        clearTimeout(r.controls), r.controls = setTimeout((function () {
                            return yd.toggleControls.call(e, !1)
                        }), o)
                    })), n.bind(t.inputs.volume, "wheel", (function (t) {
                        var n = t.webkitDirectionInvertedFromDevice,
                            i = Ha([t.deltaX, -t.deltaY].map((function (e) {
                                return n ? -e : e
                            })), 2),
                            r = i[0],
                            o = i[1],
                            a = Math.sign(Math.abs(r) > Math.abs(o) ? r : o);
                        e.increaseVolume(a / 50);
                        var s = e.media.volume;
                        (1 === a && s < 1 || -1 === a && s > 0) && t.preventDefault()
                    }), "volume", !1)
                })), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
            }
            return _a(e, [{
                key: "handleKey",
                value: function (e) {
                    var t = this.player,
                        n = t.elements,
                        i = e.keyCode ? e.keyCode : e.which,
                        r = "keydown" === e.type,
                        o = r && i === this.lastKey;
                    if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && Au(i)) {
                        if (r) {
                            var a = document.activeElement;
                            if (ju(a)) {
                                var s = t.config.selectors.editable;
                                if (a !== n.inputs.seek && of (a, s)) return;
                                if (32 === e.which && of (a, 'button, [role^="menuitem"]')) return
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
                                    o || wf(t.togglePlay());
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
                }
            }, {
                key: "toggleMenu",
                value: function (e) {
                    id.toggleMenu.call(this.player, e)
                }
            }]), e
        }(),
        wd = Jn("splice"),
        kd = Zt("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        Td = Math.max,
        Sd = Math.min,
        Ed = 9007199254740991,
        Ad = "Maximum allowed length exceeded";
    je({
        target: "Array",
        proto: !0,
        forced: !wd || !kd
    }, {
        splice: function (e, t) {
            var n, i, r, o, a, s, l = Me(this),
                c = ce(l.length),
                u = de(e, c),
                f = arguments.length;
            if (0 === f ? n = i = 0 : 1 === f ? (n = 0, i = c - u) : (n = f - 2, i = Sd(Td(se(t), 0), c - u)), c + n - i > Ed) throw TypeError(Ad);
            for (r = st(l, i), o = 0; o < i; o++)(a = u + o) in l && Wn(r, o, l[a]);
            if (r.length = i, n < i) {
                for (o = u; o < c - i; o++) s = o + n, (a = o + i) in l ? l[s] = l[a] : delete l[s];
                for (o = c; o > c - i + n; o--) delete l[o - 1]
            } else if (n > i)
                for (o = c - i; o > u; o--) s = o + n - 1, (a = o + i - 1) in l ? l[s] = l[a] : delete l[s];
            for (o = 0; o < n; o++) l[o + u] = arguments[o + 2];
            return l.length = c - i + n, r
        }
    });
    var Cd = t((function (e, t) {
        e.exports = function () {
            var e = function () {},
                t = {},
                n = {},
                i = {};

            function r(e, t) {
                e = e.push ? e : [e];
                var r, o, a, s = [],
                    l = e.length,
                    c = l;
                for (r = function (e, n) {
                        n.length && s.push(e), --c || t(s)
                    }; l--;) o = e[l], (a = n[o]) ? r(o, a) : (i[o] = i[o] || []).push(r)
            }

            function o(e, t) {
                if (e) {
                    var r = i[e];
                    if (n[e] = t, r)
                        for (; r.length;) r[0](e, t), r.splice(0, 1)
                }
            }

            function a(t, n) {
                t.call && (t = {
                    success: t
                }), n.length ? (t.error || e)(n) : (t.success || e)(t)
            }

            function s(t, n, i, r) {
                var o, a, l = document,
                    c = i.async,
                    u = (i.numRetries || 0) + 1,
                    f = i.before || e,
                    d = t.replace(/[\?|#].*$/, ""),
                    h = t.replace(/^(css|img)!/, "");
                r = r || 0, /(^css!|\.css$)/.test(d) ? ((a = l.createElement("link")).rel = "stylesheet", a.href = h, (o = "hideFocus" in a) && a.relList && (o = 0, a.rel = "preload", a.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(d) ? (a = l.createElement("img")).src = h : ((a = l.createElement("script")).src = t, a.async = void 0 === c || c), a.onload = a.onerror = a.onbeforeload = function (e) {
                    var l = e.type[0];
                    if (o) try {
                        a.sheet.cssText.length || (l = "e")
                    } catch (e) {
                        18 != e.code && (l = "e")
                    }
                    if ("e" == l) {
                        if ((r += 1) < u) return s(t, n, i, r)
                    } else if ("preload" == a.rel && "style" == a.as) return a.rel = "stylesheet";
                    n(t, l, e.defaultPrevented)
                }, !1 !== f(t, a) && l.head.appendChild(a)
            }

            function l(e, t, n) {
                var i, r, o = (e = e.push ? e : [e]).length,
                    a = o,
                    l = [];
                for (i = function (e, n, i) {
                        if ("e" == n && l.push(e), "b" == n) {
                            if (!i) return;
                            l.push(e)
                        }--o || t(l)
                    }, r = 0; r < a; r++) s(e[r], i, n)
            }

            function c(e, n, i) {
                var r, s;
                if (n && n.trim && (r = n), s = (r ? i : n) || {}, r) {
                    if (r in t) throw "LoadJS";
                    t[r] = !0
                }

                function c(t, n) {
                    l(e, (function (e) {
                        a(s, e), t && a({
                            success: t,
                            error: n
                        }, e), o(r, e)
                    }), s)
                }
                if (s.returnPromise) return new Promise(c);
                c()
            }
            return c.ready = function (e, t) {
                return r(e, (function (e) {
                    a(t, e)
                })), c
            }, c.done = function (e) {
                o(e, [])
            }, c.reset = function () {
                t = {}, n = {}, i = {}
            }, c.isDefined = function (e) {
                return e in t
            }, c
        }()
    }));

    function Pd(e) {
        return new Promise((function (t, n) {
            Cd(e, {
                success: t,
                error: n
            })
        }))
    }

    function xd(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vf.call(this, this.media, e ? "play" : "pause"))
    }
    var Od = {
        setup: function () {
            var e = this;
            nf(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, Ef.call(e), Eu(window.Vimeo) ? Od.ready.call(e) : Pd(e.config.urls.vimeo.sdk).then((function () {
                Od.ready.call(e)
            })).catch((function (t) {
                e.debug.warn("Vimeo SDK (player.js) failed to load", t)
            }))
        },
        ready: function () {
            var e = this,
                t = this,
                n = t.config.vimeo,
                i = n.premium,
                r = n.referrerPolicy,
                o = qa(n, ["premium", "referrerPolicy"]);
            i && Object.assign(o, {
                controls: !1,
                sidedock: !1
            });
            var a = od(Fa({
                    loop: t.config.loop.active,
                    autoplay: t.autoplay,
                    muted: t.muted,
                    gesture: "media",
                    playsinline: !this.config.fullscreen.iosNative
                }, o)),
                s = t.media.getAttribute("src");
            Uu(s) && (s = t.media.getAttribute(t.config.attributes.embed.id));
            var l, c = Uu(l = s) ? null : Au(Number(l)) ? l : l.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : l,
                u = Gu("iframe"),
                f = Hf(t.config.urls.vimeo.iframe, c, a);
            if (u.setAttribute("src", f), u.setAttribute("allowfullscreen", ""), u.setAttribute("allow", ["autoplay", "fullscreen", "picture-in-picture"].join("; ")), Uu(r) || u.setAttribute("referrerPolicy", r), i || !n.customControls) u.setAttribute("data-poster", t.poster), t.media = Zu(u, t.media);
            else {
                var d = Gu("div", {
                    class: t.config.classNames.embedContainer,
                    "data-poster": t.poster
                });
                d.appendChild(u), t.media = Zu(d, t.media)
            }
            n.customControls || Gf(Hf(t.config.urls.vimeo.api, f)).then((function (e) {
                !Uu(e) && e.thumbnail_url && yd.setPoster.call(t, e.thumbnail_url).catch((function () {}))
            })), t.embed = new window.Vimeo.Player(u, {
                autopause: t.config.autopause,
                muted: t.muted
            }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function () {
                return xd.call(t, !0), t.embed.play()
            }, t.media.pause = function () {
                return xd.call(t, !1), t.embed.pause()
            }, t.media.stop = function () {
                t.pause(), t.currentTime = 0
            };
            var h = t.media.currentTime;
            Object.defineProperty(t.media, "currentTime", {
                get: function () {
                    return h
                },
                set: function (e) {
                    var n = t.embed,
                        i = t.media,
                        r = t.paused,
                        o = t.volume,
                        a = r && !n.hasPlayed;
                    i.seeking = !0, vf.call(t, i, "seeking"), Promise.resolve(a && n.setVolume(0)).then((function () {
                        return n.setCurrentTime(e)
                    })).then((function () {
                        return a && n.pause()
                    })).then((function () {
                        return a && n.setVolume(o)
                    })).catch((function () {}))
                }
            });
            var p = t.config.speed.selected;
            Object.defineProperty(t.media, "playbackRate", {
                get: function () {
                    return p
                },
                set: function (e) {
                    t.embed.setPlaybackRate(e).then((function () {
                        p = e, vf.call(t, t.media, "ratechange")
                    })).catch((function () {
                        t.options.speed = [1]
                    }))
                }
            });
            var m = t.config.volume;
            Object.defineProperty(t.media, "volume", {
                get: function () {
                    return m
                },
                set: function (e) {
                    t.embed.setVolume(e).then((function () {
                        m = e, vf.call(t, t.media, "volumechange")
                    }))
                }
            });
            var g = t.config.muted;
            Object.defineProperty(t.media, "muted", {
                get: function () {
                    return g
                },
                set: function (e) {
                    var n = !!Pu(e) && e;
                    t.embed.setVolume(n ? 0 : t.config.volume).then((function () {
                        g = n, vf.call(t, t.media, "volumechange")
                    }))
                }
            });
            var v, y = t.config.loop;
            Object.defineProperty(t.media, "loop", {
                get: function () {
                    return y
                },
                set: function (e) {
                    var n = Pu(e) ? e : t.config.loop.active;
                    t.embed.setLoop(n).then((function () {
                        y = n
                    }))
                }
            }), t.embed.getVideoUrl().then((function (e) {
                v = e, id.setDownloadUrl.call(t)
            })).catch((function (t) {
                e.debug.warn(t)
            })), Object.defineProperty(t.media, "currentSrc", {
                get: function () {
                    return v
                }
            }), Object.defineProperty(t.media, "ended", {
                get: function () {
                    return t.currentTime === t.duration
                }
            }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then((function (n) {
                var i = Ha(n, 2),
                    r = i[0],
                    o = i[1];
                t.embed.ratio = [r, o], Ef.call(e)
            })), t.embed.setAutopause(t.config.autopause).then((function (e) {
                t.config.autopause = e
            })), t.embed.getVideoTitle().then((function (n) {
                t.config.title = n, yd.setTitle.call(e)
            })), t.embed.getCurrentTime().then((function (e) {
                h = e, vf.call(t, t.media, "timeupdate")
            })), t.embed.getDuration().then((function (e) {
                t.media.duration = e, vf.call(t, t.media, "durationchange")
            })), t.embed.getTextTracks().then((function (e) {
                t.media.textTracks = e, ad.setup.call(t)
            })), t.embed.on("cuechange", (function (e) {
                var n = e.cues,
                    i = (void 0 === n ? [] : n).map((function (e) {
                        return function (e) {
                            var t = document.createDocumentFragment(),
                                n = document.createElement("div");
                            return t.appendChild(n), n.innerHTML = e, t.firstChild.innerText
                        }(e.text)
                    }));
                ad.updateCues.call(t, i)
            })), t.embed.on("loaded", (function () {
                (t.embed.getPaused().then((function (e) {
                    xd.call(t, !e), e || vf.call(t, t.media, "playing")
                })), ju(t.embed.element) && t.supported.ui) && t.embed.element.setAttribute("tabindex", -1)
            })), t.embed.on("bufferstart", (function () {
                vf.call(t, t.media, "waiting")
            })), t.embed.on("bufferend", (function () {
                vf.call(t, t.media, "playing")
            })), t.embed.on("play", (function () {
                xd.call(t, !0), vf.call(t, t.media, "playing")
            })), t.embed.on("pause", (function () {
                xd.call(t, !1)
            })), t.embed.on("timeupdate", (function (e) {
                t.media.seeking = !1, h = e.seconds, vf.call(t, t.media, "timeupdate")
            })), t.embed.on("progress", (function (e) {
                t.media.buffered = e.percent, vf.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && vf.call(t, t.media, "canplaythrough"), t.embed.getDuration().then((function (e) {
                    e !== t.media.duration && (t.media.duration = e, vf.call(t, t.media, "durationchange"))
                }))
            })), t.embed.on("seeked", (function () {
                t.media.seeking = !1, vf.call(t, t.media, "seeked")
            })), t.embed.on("ended", (function () {
                t.media.paused = !0, vf.call(t, t.media, "ended")
            })), t.embed.on("error", (function (e) {
                t.media.error = e, vf.call(t, t.media, "error")
            })), n.customControls && setTimeout((function () {
                return yd.build.call(t)
            }), 0)
        }
    };

    function Id(e) {
        e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, vf.call(this, this.media, e ? "play" : "pause"))
    }

    function jd(e) {
        return e.noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0
    }
    var Ld = {
            setup: function () {
                var e = this;
                if (nf(this.elements.wrapper, this.config.classNames.embed, !0), Eu(window.YT) && xu(window.YT.Player)) Ld.ready.call(this);
                else {
                    var t = window.onYouTubeIframeAPIReady;
                    window.onYouTubeIframeAPIReady = function () {
                        xu(t) && t(), Ld.ready.call(e)
                    }, Pd(this.config.urls.youtube.sdk).catch((function (t) {
                        e.debug.warn("YouTube API failed to load", t)
                    }))
                }
            },
            getTitle: function (e) {
                var t = this;
                Gf(Hf(this.config.urls.youtube.api, e)).then((function (e) {
                    if (Eu(e)) {
                        var n = e.title,
                            i = e.height,
                            r = e.width;
                        t.config.title = n, yd.setTitle.call(t), t.embed.ratio = [r, i]
                    }
                    Ef.call(t)
                })).catch((function () {
                    Ef.call(t)
                }))
            },
            ready: function () {
                var e = this,
                    t = e.config.youtube,
                    n = e.media && e.media.getAttribute("id");
                if (Uu(n) || !n.startsWith("youtube-")) {
                    var i = e.media.getAttribute("src");
                    Uu(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
                    var r, o, a = Uu(r = i) ? null : r.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : r,
                        s = Gu("div", {
                            id: (o = e.provider, "".concat(o, "-").concat(Math.floor(1e4 * Math.random()))),
                            "data-poster": t.customControls ? e.poster : void 0
                        });
                    if (e.media = Zu(s, e.media), t.customControls) {
                        var l = function (e) {
                            return "https://i.ytimg.com/vi/".concat(a, "/").concat(e, "default.jpg")
                        };
                        vd(l("maxres"), 121).catch((function () {
                            return vd(l("sd"), 121)
                        })).catch((function () {
                            return vd(l("hq"))
                        })).then((function (t) {
                            return yd.setPoster.call(e, t.src)
                        })).then((function (t) {
                            t.includes("maxres") || (e.elements.poster.style.backgroundSize = "cover")
                        })).catch((function () {}))
                    }
                    e.embed = new window.YT.Player(e.media, {
                        videoId: a,
                        host: jd(t),
                        playerVars: Ku({}, {
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
                                    }, vf.call(e, e.media, "error")
                                }
                            },
                            onPlaybackRateChange: function (t) {
                                var n = t.target;
                                e.media.playbackRate = n.getPlaybackRate(), vf.call(e, e.media, "ratechange")
                            },
                            onReady: function (n) {
                                if (!xu(e.media.play)) {
                                    var i = n.target;
                                    Ld.getTitle.call(e, a), e.media.play = function () {
                                        Id.call(e, !0), i.playVideo()
                                    }, e.media.pause = function () {
                                        Id.call(e, !1), i.pauseVideo()
                                    }, e.media.stop = function () {
                                        i.stopVideo()
                                    }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                                        get: function () {
                                            return Number(i.getCurrentTime())
                                        },
                                        set: function (t) {
                                            e.paused && !e.embed.hasPlayed && e.embed.mute(), e.media.seeking = !0, vf.call(e, e.media, "seeking"), i.seekTo(t)
                                        }
                                    }), Object.defineProperty(e.media, "playbackRate", {
                                        get: function () {
                                            return i.getPlaybackRate()
                                        },
                                        set: function (e) {
                                            i.setPlaybackRate(e)
                                        }
                                    });
                                    var r = e.config.volume;
                                    Object.defineProperty(e.media, "volume", {
                                        get: function () {
                                            return r
                                        },
                                        set: function (t) {
                                            r = t, i.setVolume(100 * r), vf.call(e, e.media, "volumechange")
                                        }
                                    });
                                    var o = e.config.muted;
                                    Object.defineProperty(e.media, "muted", {
                                        get: function () {
                                            return o
                                        },
                                        set: function (t) {
                                            var n = Pu(t) ? t : o;
                                            o = n, i[n ? "mute" : "unMute"](), i.setVolume(100 * r), vf.call(e, e.media, "volumechange")
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
                                    e.options.speed = s.filter((function (t) {
                                        return e.config.speed.options.includes(t)
                                    })), e.supported.ui && t.customControls && e.media.setAttribute("tabindex", -1), vf.call(e, e.media, "timeupdate"), vf.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval((function () {
                                        e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && vf.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), vf.call(e, e.media, "canplaythrough"))
                                    }), 200), t.customControls && setTimeout((function () {
                                        return yd.build.call(e)
                                    }), 50)
                                }
                            },
                            onStateChange: function (n) {
                                var i = n.target;
                                switch (clearInterval(e.timers.playing), e.media.seeking && [1, 2].includes(n.data) && (e.media.seeking = !1, vf.call(e, e.media, "seeked")), n.data) {
                                    case -1:
                                        vf.call(e, e.media, "timeupdate"), e.media.buffered = i.getVideoLoadedFraction(), vf.call(e, e.media, "progress");
                                        break;
                                    case 0:
                                        Id.call(e, !1), e.media.loop ? (i.stopVideo(), i.playVideo()) : vf.call(e, e.media, "ended");
                                        break;
                                    case 1:
                                        t.customControls && !e.config.autoplay && e.media.paused && !e.embed.hasPlayed ? e.media.pause() : (Id.call(e, !0), vf.call(e, e.media, "playing"), e.timers.playing = setInterval((function () {
                                            vf.call(e, e.media, "timeupdate")
                                        }), 50), e.media.duration !== i.getDuration() && (e.media.duration = i.getDuration(), vf.call(e, e.media, "durationchange")));
                                        break;
                                    case 2:
                                        e.muted || e.embed.unMute(), Id.call(e, !1);
                                        break;
                                    case 3:
                                        vf.call(e, e.media, "waiting")
                                }
                                vf.call(e, e.elements.container, "statechange", !1, {
                                    code: n.data
                                })
                            }
                        }
                    })
                }
            }
        },
        Nd = {
            setup: function () {
                this.media ? (nf(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), nf(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && nf(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Gu("div", {
                    class: this.config.classNames.video
                }), $u(this.media, this.elements.wrapper), this.elements.poster = Gu("div", {
                    class: this.config.classNames.poster,
                    hidden: ""
                }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? Af.setup.call(this) : this.isYouTube ? Ld.setup.call(this) : this.isVimeo && Od.setup.call(this)) : this.debug.warn("No media element found!")
            }
        },
        Rd = function () {
            function e(t) {
                var n = this;
                Ra(this, e), Ua(this, "load", (function () {
                    n.enabled && (Eu(window.google) && Eu(window.google.ima) ? n.ready() : Pd(n.player.config.urls.googleIMA.sdk).then((function () {
                        n.ready()
                    })).catch((function () {
                        n.trigger("error", new Error("Google IMA SDK failed to load"))
                    })))
                })), Ua(this, "ready", (function () {
                    var e;
                    n.enabled || ((e = n).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), n.startSafetyTimer(12e3, "ready()"), n.managerPromise.then((function () {
                        n.clearSafetyTimer("onAdsManagerLoaded()")
                    })), n.listeners(), n.setupIMA()
                })), Ua(this, "setupIMA", (function () {
                    n.elements.container = Gu("div", {
                        class: n.player.config.classNames.ads
                    }), n.player.elements.container.appendChild(n.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(n.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(n.player.config.playsinline), n.elements.displayContainer = new google.ima.AdDisplayContainer(n.elements.container, n.player.media), n.loader = new google.ima.AdsLoader(n.elements.displayContainer), n.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, (function (e) {
                        return n.onAdsManagerLoaded(e)
                    }), !1), n.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function (e) {
                        return n.onAdError(e)
                    }), !1), n.requestAds()
                })), Ua(this, "requestAds", (function () {
                    var e = n.player.elements.container;
                    try {
                        var t = new google.ima.AdsRequest;
                        t.adTagUrl = n.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!n.player.muted), n.loader.requestAds(t)
                    } catch (e) {
                        n.onAdError(e)
                    }
                })), Ua(this, "pollCountdown", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (!e) return clearInterval(n.countdownTimer), void n.elements.container.removeAttribute("data-badge-text");
                    var t = function () {
                        var e = nd(Math.max(n.manager.getRemainingTime(), 0)),
                            t = "".concat($f("advertisement", n.player.config), " - ").concat(e);
                        n.elements.container.setAttribute("data-badge-text", t)
                    };
                    n.countdownTimer = setInterval(t, 100)
                })), Ua(this, "onAdsManagerLoaded", (function (e) {
                    if (n.enabled) {
                        var t = new google.ima.AdsRenderingSettings;
                        t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, n.manager = e.getAdsManager(n.player, t), n.cuePoints = n.manager.getCuePoints(), n.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, (function (e) {
                            return n.onAdError(e)
                        })), Object.keys(google.ima.AdEvent.Type).forEach((function (e) {
                            n.manager.addEventListener(google.ima.AdEvent.Type[e], (function (e) {
                                return n.onAdEvent(e)
                            }))
                        })), n.trigger("loaded")
                    }
                })), Ua(this, "addCuePoints", (function () {
                    Uu(n.cuePoints) || n.cuePoints.forEach((function (e) {
                        if (0 !== e && -1 !== e && e < n.player.duration) {
                            var t = n.player.elements.progress;
                            if (ju(t)) {
                                var i = 100 / n.player.duration * e,
                                    r = Gu("span", {
                                        class: n.player.config.classNames.cues
                                    });
                                r.style.left = "".concat(i.toString(), "%"), t.appendChild(r)
                            }
                        }
                    }))
                })), Ua(this, "onAdEvent", (function (e) {
                    var t = n.player.elements.container,
                        i = e.getAd(),
                        r = e.getAdData();
                    switch (function (e) {
                        vf.call(n.player, n.player.media, "ads".concat(e.replace(/_/g, "").toLowerCase()))
                    }(e.type), e.type) {
                        case google.ima.AdEvent.Type.LOADED:
                            n.trigger("loaded"), n.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                            break;
                        case google.ima.AdEvent.Type.STARTED:
                            n.manager.setVolume(n.player.volume);
                            break;
                        case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                            n.player.ended ? n.loadAds() : n.loader.contentComplete();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                            n.pauseContent();
                            break;
                        case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                            n.pollCountdown(), n.resumeContent();
                            break;
                        case google.ima.AdEvent.Type.LOG:
                            r.adError && n.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))
                    }
                })), Ua(this, "onAdError", (function (e) {
                    n.cancel(), n.player.debug.warn("Ads error", e)
                })), Ua(this, "listeners", (function () {
                    var e, t = n.player.elements.container;
                    n.player.on("canplay", (function () {
                        n.addCuePoints()
                    })), n.player.on("ended", (function () {
                        n.loader.contentComplete()
                    })), n.player.on("timeupdate", (function () {
                        e = n.player.currentTime
                    })), n.player.on("seeked", (function () {
                        var t = n.player.currentTime;
                        Uu(n.cuePoints) || n.cuePoints.forEach((function (i, r) {
                            e < i && i < t && (n.manager.discardAdBreak(), n.cuePoints.splice(r, 1))
                        }))
                    })), window.addEventListener("resize", (function () {
                        n.manager && n.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
                    }))
                })), Ua(this, "play", (function () {
                    var e = n.player.elements.container;
                    n.managerPromise || n.resumeContent(), n.managerPromise.then((function () {
                        n.manager.setVolume(n.player.volume), n.elements.displayContainer.initialize();
                        try {
                            n.initialized || (n.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), n.manager.start()), n.initialized = !0
                        } catch (e) {
                            n.onAdError(e)
                        }
                    })).catch((function () {}))
                })), Ua(this, "resumeContent", (function () {
                    n.elements.container.style.zIndex = "", n.playing = !1, wf(n.player.media.play())
                })), Ua(this, "pauseContent", (function () {
                    n.elements.container.style.zIndex = 3, n.playing = !0, n.player.media.pause()
                })), Ua(this, "cancel", (function () {
                    n.initialized && n.resumeContent(), n.trigger("error"), n.loadAds()
                })), Ua(this, "loadAds", (function () {
                    n.managerPromise.then((function () {
                        n.manager && n.manager.destroy(), n.managerPromise = new Promise((function (e) {
                            n.on("loaded", e), n.player.debug.log(n.manager)
                        })), n.initialized = !1, n.requestAds()
                    })).catch((function () {}))
                })), Ua(this, "trigger", (function (e) {
                    for (var t = arguments.length, i = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) i[r - 1] = arguments[r];
                    var o = n.events[e];
                    Ou(o) && o.forEach((function (e) {
                        xu(e) && e.apply(n, i)
                    }))
                })), Ua(this, "on", (function (e, t) {
                    return Ou(n.events[e]) || (n.events[e] = []), n.events[e].push(t), n
                })), Ua(this, "startSafetyTimer", (function (e, t) {
                    n.player.debug.log("Safety timer invoked from: ".concat(t)), n.safetyTimer = setTimeout((function () {
                        n.cancel(), n.clearSafetyTimer("startSafetyTimer()")
                    }), e)
                })), Ua(this, "clearSafetyTimer", (function (e) {
                    Su(n.safetyTimer) || (n.player.debug.log("Safety timer cleared from: ".concat(e)), clearTimeout(n.safetyTimer), n.safetyTimer = null)
                })), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                    container: null,
                    displayContainer: null
                }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((function (e, t) {
                    n.on("loaded", e), n.on("error", t)
                })), this.load()
            }
            return _a(e, [{
                key: "enabled",
                get: function () {
                    var e = this.config;
                    return this.player.isHTML5 && this.player.isVideo && e.enabled && (!Uu(e.publisherId) || _u(e.tagUrl))
                }
            }, {
                key: "tagUrl",
                get: function () {
                    var e = this.config;
                    if (_u(e.tagUrl)) return e.tagUrl;
                    var t = {
                        AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
                        AV_CHANNELID: "5a0458dc28a06145e4519d21",
                        AV_URL: window.location.hostname,
                        cb: Date.now(),
                        AV_WIDTH: 640,
                        AV_HEIGHT: 480,
                        AV_CDIM2: e.publisherId
                    };
                    return "".concat("https://go.aniview.com/api/adserver6/vast/", "?").concat(od(t))
                }
            }]), e
        }(),
        Md = ut.findIndex,
        _d = "findIndex",
        Ud = !0,
        Dd = Zt(_d);
    _d in [] && Array(1).findIndex((function () {
        Ud = !1
    })), je({
        target: "Array",
        proto: !0,
        forced: Ud || !Dd
    }, {
        findIndex: function (e) {
            return Md(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    }), mn(_d);
    var Fd = Math.min,
        qd = [].lastIndexOf,
        Hd = !!qd && 1 / [1].lastIndexOf(1, -0) < 0,
        Bd = Gt("lastIndexOf"),
        Vd = Zt("indexOf", {
            ACCESSORS: !0,
            1: 0
        }),
        zd = Hd || !Bd || !Vd ? function (e) {
            if (Hd) return qd.apply(this, arguments) || 0;
            var t = m(this),
                n = ce(t.length),
                i = n - 1;
            for (arguments.length > 1 && (i = Fd(i, se(arguments[1]))), i < 0 && (i = n + i); i >= 0; i--)
                if (i in t && t[i] === e) return i || 0;
            return -1
        } : qd;
    je({
        target: "Array",
        proto: !0,
        forced: zd !== [].lastIndexOf
    }, {
        lastIndexOf: zd
    });
    var Wd = function (e, t) {
            var n = {};
            return e > t.width / t.height ? (n.width = t.width, n.height = 1 / e * t.width) : (n.height = t.height, n.width = e * t.height), n
        },
        Kd = function () {
            function e(t) {
                var n = this;
                Ra(this, e), Ua(this, "load", (function () {
                    n.player.elements.display.seekTooltip && (n.player.elements.display.seekTooltip.hidden = n.enabled), n.enabled && n.getThumbnails().then((function () {
                        n.enabled && (n.render(), n.determineContainerAutoSizing(), n.loaded = !0)
                    }))
                })), Ua(this, "getThumbnails", (function () {
                    return new Promise((function (e) {
                        var t = n.player.config.previewThumbnails.src;
                        if (Uu(t)) throw new Error("Missing previewThumbnails.src config attribute");
                        var i = function () {
                            n.thumbnails.sort((function (e, t) {
                                return e.height - t.height
                            })), n.player.debug.log("Preview thumbnails", n.thumbnails), e()
                        };
                        if (xu(t)) t((function (e) {
                            n.thumbnails = e, i()
                        }));
                        else {
                            var r = (Cu(t) ? [t] : t).map((function (e) {
                                return n.getThumbnail(e)
                            }));
                            Promise.all(r).then(i)
                        }
                    }))
                })), Ua(this, "getThumbnail", (function (e) {
                    return new Promise((function (t) {
                        Gf(e).then((function (i) {
                            var r, o, a = {
                                frames: (r = i, o = [], r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function (e) {
                                    var t = {};
                                    e.split(/\r\n|\n|\r/).forEach((function (e) {
                                        if (Au(t.startTime)) {
                                            if (!Uu(e.trim()) && Uu(t.text)) {
                                                var n = e.trim().split("#xywh="),
                                                    i = Ha(n, 1);
                                                if (t.text = i[0], n[1]) {
                                                    var r = Ha(n[1].split(","), 4);
                                                    t.x = r[0], t.y = r[1], t.w = r[2], t.h = r[3]
                                                }
                                            }
                                        } else {
                                            var o = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                                            o && (t.startTime = 60 * Number(o[1] || 0) * 60 + 60 * Number(o[2]) + Number(o[3]) + Number("0.".concat(o[4])), t.endTime = 60 * Number(o[6] || 0) * 60 + 60 * Number(o[7]) + Number(o[8]) + Number("0.".concat(o[9])))
                                        }
                                    })), t.text && o.push(t)
                                })), o),
                                height: null,
                                urlPrefix: ""
                            };
                            a.frames[0].text.startsWith("/") || a.frames[0].text.startsWith("http://") || a.frames[0].text.startsWith("https://") || (a.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                            var s = new Image;
                            s.onload = function () {
                                a.height = s.naturalHeight, a.width = s.naturalWidth, n.thumbnails.push(a), t()
                            }, s.src = a.urlPrefix + a.frames[0].text
                        }))
                    }))
                })), Ua(this, "startMove", (function (e) {
                    if (n.loaded && Lu(e) && ["touchmove", "mousemove"].includes(e.type) && n.player.media.duration) {
                        if ("touchmove" === e.type) n.seekTime = n.player.media.duration * (n.player.elements.inputs.seek.value / 100);
                        else {
                            var t = n.player.elements.progress.getBoundingClientRect(),
                                i = 100 / t.width * (e.pageX - t.left);
                            n.seekTime = n.player.media.duration * (i / 100), n.seekTime < 0 && (n.seekTime = 0), n.seekTime > n.player.media.duration - 1 && (n.seekTime = n.player.media.duration - 1), n.mousePosX = e.pageX, n.elements.thumb.time.innerText = nd(n.seekTime)
                        }
                        n.showImageAtCurrentTime()
                    }
                })), Ua(this, "endMove", (function () {
                    n.toggleThumbContainer(!1, !0)
                })), Ua(this, "startScrubbing", (function (e) {
                    (Su(e.button) || !1 === e.button || 0 === e.button) && (n.mouseDown = !0, n.player.media.duration && (n.toggleScrubbingContainer(!0), n.toggleThumbContainer(!1, !0), n.showImageAtCurrentTime()))
                })), Ua(this, "endScrubbing", (function () {
                    n.mouseDown = !1, Math.ceil(n.lastTime) === Math.ceil(n.player.media.currentTime) ? n.toggleScrubbingContainer(!1) : gf.call(n.player, n.player.media, "timeupdate", (function () {
                        n.mouseDown || n.toggleScrubbingContainer(!1)
                    }))
                })), Ua(this, "listeners", (function () {
                    n.player.on("play", (function () {
                        n.toggleThumbContainer(!1, !0)
                    })), n.player.on("seeked", (function () {
                        n.toggleThumbContainer(!1)
                    })), n.player.on("timeupdate", (function () {
                        n.lastTime = n.player.media.currentTime
                    }))
                })), Ua(this, "render", (function () {
                    n.elements.thumb.container = Gu("div", {
                        class: n.player.config.classNames.previewThumbnails.thumbContainer
                    }), n.elements.thumb.imageContainer = Gu("div", {
                        class: n.player.config.classNames.previewThumbnails.imageContainer
                    }), n.elements.thumb.container.appendChild(n.elements.thumb.imageContainer);
                    var e = Gu("div", {
                        class: n.player.config.classNames.previewThumbnails.timeContainer
                    });
                    n.elements.thumb.time = Gu("span", {}, "00:00"), e.appendChild(n.elements.thumb.time), n.elements.thumb.container.appendChild(e), ju(n.player.elements.progress) && n.player.elements.progress.appendChild(n.elements.thumb.container), n.elements.scrubbing.container = Gu("div", {
                        class: n.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), n.player.elements.wrapper.appendChild(n.elements.scrubbing.container)
                })), Ua(this, "destroy", (function () {
                    n.elements.thumb.container && n.elements.thumb.container.remove(), n.elements.scrubbing.container && n.elements.scrubbing.container.remove()
                })), Ua(this, "showImageAtCurrentTime", (function () {
                    n.mouseDown ? n.setScrubbingContainerSize() : n.setThumbContainerSizeAndPos();
                    var e = n.thumbnails[0].frames.findIndex((function (e) {
                            return n.seekTime >= e.startTime && n.seekTime <= e.endTime
                        })),
                        t = e >= 0,
                        i = 0;
                    n.mouseDown || n.toggleThumbContainer(t), t && (n.thumbnails.forEach((function (t, r) {
                        n.loadedImages.includes(t.frames[e].text) && (i = r)
                    })), e !== n.showingThumb && (n.showingThumb = e, n.loadImage(i)))
                })), Ua(this, "loadImage", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = n.showingThumb,
                        i = n.thumbnails[e],
                        r = i.urlPrefix,
                        o = i.frames[t],
                        a = i.frames[t].text,
                        s = r + a;
                    if (n.currentImageElement && n.currentImageElement.dataset.filename === a) n.showImage(n.currentImageElement, o, e, t, a, !1), n.currentImageElement.dataset.index = t, n.removeOldImages(n.currentImageElement);
                    else {
                        n.loadingImage && n.usingSprites && (n.loadingImage.onload = null);
                        var l = new Image;
                        l.src = s, l.dataset.index = t, l.dataset.filename = a, n.showingThumbFilename = a, n.player.debug.log("Loading image: ".concat(s)), l.onload = function () {
                            return n.showImage(l, o, e, t, a, !0)
                        }, n.loadingImage = l, n.removeOldImages(l)
                    }
                })), Ua(this, "showImage", (function (e, t, i, r, o) {
                    var a = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5];
                    n.player.debug.log("Showing thumb: ".concat(o, ". num: ").concat(r, ". qual: ").concat(i, ". newimg: ").concat(a)), n.setImageSizeAndOffset(e, t), a && (n.currentImageContainer.appendChild(e), n.currentImageElement = e, n.loadedImages.includes(o) || n.loadedImages.push(o)), n.preloadNearby(r, !0).then(n.preloadNearby(r, !1)).then(n.getHigherQuality(i, e, t, o))
                })), Ua(this, "removeOldImages", (function (e) {
                    Array.from(n.currentImageContainer.children).forEach((function (t) {
                        if ("img" === t.tagName.toLowerCase()) {
                            var i = n.usingSprites ? 500 : 1e3;
                            if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                                t.dataset.deleting = !0;
                                var r = n.currentImageContainer;
                                setTimeout((function () {
                                    r.removeChild(t), n.player.debug.log("Removing thumb: ".concat(t.dataset.filename))
                                }), i)
                            }
                        }
                    }))
                })), Ua(this, "preloadNearby", (function (e) {
                    var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return new Promise((function (i) {
                        setTimeout((function () {
                            var r = n.thumbnails[0].frames[e].text;
                            if (n.showingThumbFilename === r) {
                                var o;
                                o = t ? n.thumbnails[0].frames.slice(e) : n.thumbnails[0].frames.slice(0, e).reverse();
                                var a = !1;
                                o.forEach((function (e) {
                                    var t = e.text;
                                    if (t !== r && !n.loadedImages.includes(t)) {
                                        a = !0, n.player.debug.log("Preloading thumb filename: ".concat(t));
                                        var o = n.thumbnails[0].urlPrefix + t,
                                            s = new Image;
                                        s.src = o, s.onload = function () {
                                            n.player.debug.log("Preloaded thumb filename: ".concat(t)), n.loadedImages.includes(t) || n.loadedImages.push(t), i()
                                        }
                                    }
                                })), a || i()
                            }
                        }), 300)
                    }))
                })), Ua(this, "getHigherQuality", (function (e, t, i, r) {
                    if (e < n.thumbnails.length - 1) {
                        var o = t.naturalHeight;
                        n.usingSprites && (o = i.h), o < n.thumbContainerHeight && setTimeout((function () {
                            n.showingThumbFilename === r && (n.player.debug.log("Showing higher quality thumb for: ".concat(r)), n.loadImage(e + 1))
                        }), 300)
                    }
                })), Ua(this, "toggleThumbContainer", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = n.player.config.classNames.previewThumbnails.thumbContainerShown;
                    n.elements.thumb.container.classList.toggle(i, e), !e && t && (n.showingThumb = null, n.showingThumbFilename = null)
                })), Ua(this, "toggleScrubbingContainer", (function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = n.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    n.elements.scrubbing.container.classList.toggle(t, e), e || (n.showingThumb = null, n.showingThumbFilename = null)
                })), Ua(this, "determineContainerAutoSizing", (function () {
                    (n.elements.thumb.imageContainer.clientHeight > 20 || n.elements.thumb.imageContainer.clientWidth > 20) && (n.sizeSpecifiedInCSS = !0)
                })), Ua(this, "setThumbContainerSizeAndPos", (function () {
                    if (n.sizeSpecifiedInCSS) {
                        if (n.elements.thumb.imageContainer.clientHeight > 20 && n.elements.thumb.imageContainer.clientWidth < 20) {
                            var e = Math.floor(n.elements.thumb.imageContainer.clientHeight * n.thumbAspectRatio);
                            n.elements.thumb.imageContainer.style.width = "".concat(e, "px")
                        } else if (n.elements.thumb.imageContainer.clientHeight < 20 && n.elements.thumb.imageContainer.clientWidth > 20) {
                            var t = Math.floor(n.elements.thumb.imageContainer.clientWidth / n.thumbAspectRatio);
                            n.elements.thumb.imageContainer.style.height = "".concat(t, "px")
                        }
                    } else {
                        var i = Math.floor(n.thumbContainerHeight * n.thumbAspectRatio);
                        n.elements.thumb.imageContainer.style.height = "".concat(n.thumbContainerHeight, "px"), n.elements.thumb.imageContainer.style.width = "".concat(i, "px")
                    }
                    n.setThumbContainerPos()
                })), Ua(this, "setThumbContainerPos", (function () {
                    var e = n.player.elements.progress.getBoundingClientRect(),
                        t = n.player.elements.container.getBoundingClientRect(),
                        i = n.elements.thumb.container,
                        r = t.left - e.left + 10,
                        o = t.right - e.left - i.clientWidth - 10,
                        a = n.mousePosX - e.left - i.clientWidth / 2;
                    a < r && (a = r), a > o && (a = o), i.style.left = "".concat(a, "px")
                })), Ua(this, "setScrubbingContainerSize", (function () {
                    var e = Wd(n.thumbAspectRatio, {
                            width: n.player.media.clientWidth,
                            height: n.player.media.clientHeight
                        }),
                        t = e.width,
                        i = e.height;
                    n.elements.scrubbing.container.style.width = "".concat(t, "px"), n.elements.scrubbing.container.style.height = "".concat(i, "px")
                })), Ua(this, "setImageSizeAndOffset", (function (e, t) {
                    if (n.usingSprites) {
                        var i = n.thumbContainerHeight / t.h;
                        e.style.height = "".concat(e.naturalHeight * i, "px"), e.style.width = "".concat(e.naturalWidth * i, "px"), e.style.left = "-".concat(t.x * i, "px"), e.style.top = "-".concat(t.y * i, "px")
                    }
                })), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            return _a(e, [{
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
                    return this.mouseDown ? Wd(this.thumbAspectRatio, {
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
        $d = {
            insertElements: function (e, t) {
                var n = this;
                Cu(t) ? Xu(e, this.media, {
                    src: t
                }) : Ou(t) && t.forEach((function (t) {
                    Xu(e, n.media, t)
                }))
            },
            change: function (e) {
                var t = this;
                Wu(e, "sources.length") ? (Af.cancelRequests.call(this), this.destroy.call(this, (function () {
                    t.options.quality = [], Qu(t.media), t.media = null, ju(t.elements.container) && t.elements.container.removeAttribute("class");
                    var n = e.sources,
                        i = e.type,
                        r = Ha(n, 1)[0],
                        o = r.provider,
                        a = void 0 === o ? ud.html5 : o,
                        s = r.src,
                        l = "html5" === a ? i : "div",
                        c = "html5" === a ? {} : {
                            src: s
                        };
                    Object.assign(t, {
                        provider: a,
                        type: i,
                        supported: ff.check(i, a, t.config.playsinline),
                        media: Gu(l, c)
                    }), t.elements.container.appendChild(t.media), Pu(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), Uu(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), yd.addStyleHook.call(t), t.isHTML5 && $d.insertElements.call(t, "source", n), t.config.title = e.title, Nd.setup.call(t), t.isHTML5 && Object.keys(e).includes("tracks") && $d.insertElements.call(t, "track", e.tracks), (t.isHTML5 || t.isEmbed && !t.supported.ui) && yd.build.call(t), t.isHTML5 && t.media.load(), Uu(e.previewThumbnails) || (Object.assign(t.config.previewThumbnails, e.previewThumbnails), t.previewThumbnails && t.previewThumbnails.loaded && (t.previewThumbnails.destroy(), t.previewThumbnails = null), t.config.previewThumbnails.enabled && (t.previewThumbnails = new Kd(t))), t.fullscreen.update()
                }), !0)) : this.debug.warn("Invalid source format")
            }
        };
    var Yd, Gd = function () {
        function e(t, n) {
            var i = this;
            if (Ra(this, e), Ua(this, "play", (function () {
                    return xu(i.media.play) ? (i.ads && i.ads.enabled && i.ads.managerPromise.then((function () {
                        return i.ads.play()
                    })).catch((function () {
                        return wf(i.media.play())
                    })), i.media.play()) : null
                })), Ua(this, "pause", (function () {
                    return i.playing && xu(i.media.pause) ? i.media.pause() : null
                })), Ua(this, "togglePlay", (function (e) {
                    return (Pu(e) ? e : !i.playing) ? i.play() : i.pause()
                })), Ua(this, "stop", (function () {
                    i.isHTML5 ? (i.pause(), i.restart()) : xu(i.media.stop) && i.media.stop()
                })), Ua(this, "restart", (function () {
                    i.currentTime = 0
                })), Ua(this, "rewind", (function (e) {
                    i.currentTime -= Au(e) ? e : i.config.seekTime
                })), Ua(this, "forward", (function (e) {
                    i.currentTime += Au(e) ? e : i.config.seekTime
                })), Ua(this, "increaseVolume", (function (e) {
                    var t = i.media.muted ? 0 : i.volume;
                    i.volume = t + (Au(e) ? e : 0)
                })), Ua(this, "decreaseVolume", (function (e) {
                    i.increaseVolume(-e)
                })), Ua(this, "airplay", (function () {
                    ff.airplay && i.media.webkitShowPlaybackTargetPicker()
                })), Ua(this, "toggleControls", (function (e) {
                    if (i.supported.ui && !i.isAudio) {
                        var t = rf(i.elements.container, i.config.classNames.hideControls),
                            n = void 0 === e ? void 0 : !e,
                            r = nf(i.elements.container, i.config.classNames.hideControls, n);
                        if (r && Ou(i.config.controls) && i.config.controls.includes("settings") && !Uu(i.config.settings) && id.toggleMenu.call(i, !1), r !== t) {
                            var o = r ? "controlshidden" : "controlsshown";
                            vf.call(i, i.media, o)
                        }
                        return !r
                    }
                    return !1
                })), Ua(this, "on", (function (e, t) {
                    pf.call(i, i.elements.container, e, t)
                })), Ua(this, "once", (function (e, t) {
                    gf.call(i, i.elements.container, e, t)
                })), Ua(this, "off", (function (e, t) {
                    mf(i.elements.container, e, t)
                })), Ua(this, "destroy", (function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (i.ready) {
                        var n = function () {
                            document.body.style.overflow = "", i.embed = null, t ? (Object.keys(i.elements).length && (Qu(i.elements.buttons.play), Qu(i.elements.captions), Qu(i.elements.controls), Qu(i.elements.wrapper), i.elements.buttons.play = null, i.elements.captions = null, i.elements.controls = null, i.elements.wrapper = null), xu(e) && e()) : (yf.call(i), Af.cancelRequests.call(i), Zu(i.elements.original, i.elements.container), vf.call(i, i.elements.original, "destroyed", !0), xu(e) && e.call(i.elements.original), i.ready = !1, setTimeout((function () {
                                i.elements = null, i.media = null
                            }), 200))
                        };
                        i.stop(), clearTimeout(i.timers.loading), clearTimeout(i.timers.controls), clearTimeout(i.timers.resized), i.isHTML5 ? (yd.toggleNativeControls.call(i, !0), n()) : i.isYouTube ? (clearInterval(i.timers.buffering), clearInterval(i.timers.playing), null !== i.embed && xu(i.embed.destroy) && i.embed.destroy(), n()) : i.isVimeo && (null !== i.embed && i.embed.unload().then(n), setTimeout(n, 200))
                    }
                })), Ua(this, "supports", (function (e) {
                    return ff.mime.call(i, e)
                })), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = ff.touch, this.media = t, Cu(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || Iu(this.media) || Ou(this.media)) && (this.media = this.media[0]), this.config = Ku({}, sd, e.defaults, n || {}, function () {
                    try {
                        return JSON.parse(i.media.getAttribute("data-plyr-config"))
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
                }, this.debug = new pd(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", ff), !Su(this.media) && ju(this.media))
                if (this.media.plyr) this.debug.warn("Target already setup");
                else if (this.config.enabled)
                if (ff.check().api) {
                    var r = this.media.cloneNode(!0);
                    r.autoplay = !1, this.elements.original = r;
                    var o = this.media.tagName.toLowerCase(),
                        a = null,
                        s = null;
                    switch (o) {
                        case "div":
                            if (a = this.media.querySelector("iframe"), ju(a)) {
                                if (s = rd(a.getAttribute("src")), this.provider = function (e) {
                                        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e) ? ud.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? ud.vimeo : null
                                    }(s.toString()), this.elements.container = this.media, this.media = a, this.elements.container.className = "", s.search.length) {
                                    var l = ["1", "true"];
                                    l.includes(s.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(s.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(s.searchParams.get("playsinline")), this.config.youtube.hl = s.searchParams.get("hl")) : this.config.playsinline = !0
                                }
                            } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                            if (Uu(this.provider) || !Object.values(ud).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                            this.type = dd;
                            break;
                        case "video":
                        case "audio":
                            this.type = o, this.provider = ud.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                            break;
                        default:
                            return void this.debug.error("Setup failed: unsupported type")
                    }
                    this.supported = ff.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new bd(this), this.storage = new Yf(this), this.media.plyr = this, ju(this.elements.container) || (this.elements.container = Gu("div", {
                        tabindex: 0
                    }), $u(this.media, this.elements.container)), yd.migrateStyles.call(this), yd.addStyleHook.call(this), Nd.setup.call(this), this.config.debug && pf.call(this, this.elements.container, this.config.events.join(" "), (function (e) {
                        i.debug.log("event: ".concat(e.type))
                    })), this.fullscreen = new md(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && yd.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new Rd(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", (function () {
                        return wf(i.play())
                    })), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new Kd(this))) : this.debug.error("Setup failed: no support")
                } else this.debug.error("Setup failed: no support");
            else this.debug.error("Setup failed: disabled by config");
            else this.debug.error("Setup failed: no suitable element passed")
        }
        return _a(e, [{
            key: "toggleCaptions",
            value: function (e) {
                ad.toggle.call(this, e, !1)
            }
        }, {
            key: "isHTML5",
            get: function () {
                return this.provider === ud.html5
            }
        }, {
            key: "isEmbed",
            get: function () {
                return this.isYouTube || this.isVimeo
            }
        }, {
            key: "isYouTube",
            get: function () {
                return this.provider === ud.youtube
            }
        }, {
            key: "isVimeo",
            get: function () {
                return this.provider === ud.vimeo
            }
        }, {
            key: "isVideo",
            get: function () {
                return this.type === dd
            }
        }, {
            key: "isAudio",
            get: function () {
                return this.type === fd
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
                    var t = Au(e) && e > 0;
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
                return Au(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
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
                    n = Au(t) && t !== 1 / 0 ? t : 0;
                return e || n
            }
        }, {
            key: "volume",
            set: function (e) {
                var t = e;
                Cu(t) && (t = Number(t)), Au(t) || (t = this.storage.get("volume")), Au(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !Uu(e) && this.muted && t > 0 && (this.muted = !1)
            },
            get: function () {
                return Number(this.media.volume)
            }
        }, {
            key: "muted",
            set: function (e) {
                var t = e;
                Pu(t) || (t = this.storage.get("muted")), Pu(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            },
            get: function () {
                return Boolean(this.media.muted)
            }
        }, {
            key: "hasAudio",
            get: function () {
                return !this.isHTML5 || (!!this.isAudio || (Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)))
            }
        }, {
            key: "speed",
            set: function (e) {
                var t = this,
                    n = null;
                Au(e) && (n = e), Au(n) || (n = this.storage.get("speed")), Au(n) || (n = this.config.speed.selected);
                var i = this.minimumSpeed,
                    r = this.maximumSpeed;
                n = function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 255;
                    return Math.min(Math.max(e, t), n)
                }(n, i, r), this.config.speed.selected = n, setTimeout((function () {
                    t.media.playbackRate = n
                }), 0)
            },
            get: function () {
                return Number(this.media.playbackRate)
            }
        }, {
            key: "minimumSpeed",
            get: function () {
                return this.isYouTube ? Math.min.apply(Math, Ba(this.options.speed)) : this.isVimeo ? .5 : .0625
            }
        }, {
            key: "maximumSpeed",
            get: function () {
                return this.isYouTube ? Math.max.apply(Math, Ba(this.options.speed)) : this.isVimeo ? 2 : 16
            }
        }, {
            key: "quality",
            set: function (e) {
                var t = this.config.quality,
                    n = this.options.quality;
                if (n.length) {
                    var i = [!Uu(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(Au),
                        r = !0;
                    if (!n.includes(i)) {
                        var o = function (e, t) {
                            return Ou(e) && e.length ? e.reduce((function (e, n) {
                                return Math.abs(n - t) < Math.abs(e - t) ? n : e
                            })) : null
                        }(n, i);
                        this.debug.warn("Unsupported quality option: ".concat(i, ", using ").concat(o, " instead")), i = o, r = !1
                    }
                    t.selected = i, this.media.quality = i, r && this.storage.set({
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
                var t = Pu(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            },
            get: function () {
                return Boolean(this.media.loop)
            }
        }, {
            key: "source",
            set: function (e) {
                $d.change.call(this, e)
            },
            get: function () {
                return this.media.currentSrc
            }
        }, {
            key: "download",
            get: function () {
                var e = this.config.urls.download;
                return _u(e) ? e : this.source
            },
            set: function (e) {
                _u(e) && (this.config.urls.download = e, id.setDownloadUrl.call(this))
            }
        }, {
            key: "poster",
            set: function (e) {
                this.isVideo ? yd.setPoster.call(this, e, !1).catch((function () {})) : this.debug.warn("Poster can only be set for video")
            },
            get: function () {
                return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
            }
        }, {
            key: "ratio",
            get: function () {
                if (!this.isVideo) return null;
                var e = Tf(Sf.call(this));
                return Ou(e) ? e.join(":") : e
            },
            set: function (e) {
                this.isVideo ? Cu(e) && kf(e) ? (this.config.ratio = e, Ef.call(this)) : this.debug.error("Invalid aspect ratio specified (".concat(e, ")")) : this.debug.warn("Aspect ratio can only be set for video")
            }
        }, {
            key: "autoplay",
            set: function (e) {
                var t = Pu(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            },
            get: function () {
                return Boolean(this.config.autoplay)
            }
        }, {
            key: "currentTrack",
            set: function (e) {
                ad.set.call(this, e, !1)
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
                ad.setLanguage.call(this, e, !1)
            },
            get: function () {
                return (ad.getCurrentTrack.call(this) || {}).language
            }
        }, {
            key: "pip",
            set: function (e) {
                if (ff.pip) {
                    var t = Pu(e) ? e : !this.pip;
                    xu(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? ld : cd), xu(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
                }
            },
            get: function () {
                return ff.pip ? Uu(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === ld : null
            }
        }], [{
            key: "supported",
            value: function (e, t, n) {
                return ff.check(e, t, n)
            }
        }, {
            key: "loadSprite",
            value: function (e, t) {
                return Xf(e, t)
            }
        }, {
            key: "setup",
            value: function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    i = null;
                return Cu(t) ? i = Array.from(document.querySelectorAll(t)) : Iu(t) ? i = Array.from(t) : Ou(t) && (i = t.filter(ju)), Uu(i) ? null : i.map((function (t) {
                    return new e(t, n)
                }))
            }
        }]), e
    }();
    return Gd.defaults = (Yd = sd, JSON.parse(JSON.stringify(Yd))), Gd
}));
