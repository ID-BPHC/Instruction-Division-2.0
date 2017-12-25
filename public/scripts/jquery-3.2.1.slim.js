/*!
 * jQuery JavaScript Library v3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T19:00Z
 */
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    "use strict";

    function n(e, t) {
        t = t || z;
        var n = t.createElement("script");
        n.text = e, t.head.appendChild(n).parentNode.removeChild(n)
    }

    function r(e) {
        var t = !!e && "length" in e && e.length,
            n = ne.type(e);
        return "function" !== n && !ne.isWindow(e) && ("array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    function i(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }

    function o(e, t, n) {
        return ne.isFunction(t) ? ne.grep(e, function(e, r) {
            return !!t.call(e, r, e) !== n
        }) : t.nodeType ? ne.grep(e, function(e) {
            return e === t !== n
        }) : "string" != typeof t ? ne.grep(e, function(e) {
            return Q.call(t, e) > -1 !== n
        }) : de.test(t) ? ne.filter(t, e, n) : (t = ne.filter(t, e), ne.grep(e, function(e) {
            return Q.call(t, e) > -1 !== n && 1 === e.nodeType
        }))
    }

    function a(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }

    function u(e) {
        var t = {};
        return ne.each(e.match(me) || [], function(e, n) {
            t[n] = !0
        }), t
    }

    function s(e) {
        return e
    }

    function l(e) {
        throw e
    }

    function c(e, t, n, r) {
        var i;
        try {
            e && ne.isFunction(i = e.promise) ? i.call(e).done(t).fail(n) : e && ne.isFunction(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }

    function f() {
        z.removeEventListener("DOMContentLoaded", f), e.removeEventListener("load", f), ne.ready()
    }

    function d() {
        this.expando = ne.expando + d.uid++
    }

    function p(e) {
        return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : Ee.test(e) ? JSON.parse(e) : e)
    }

    function h(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
            if (r = "data-" + t.replace(Ne, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(r))) {
                try {
                    n = p(n)
                } catch (e) {}
                Te.set(e, t, n)
            } else n = void 0;
        return n
    }

    function g(e, t, n, r) {
        var i, o = 1,
            a = 20,
            u = r ? function() {
                return r.cur()
            } : function() {
                return ne.css(e, t, "")
            },
            s = u(),
            l = n && n[3] || (ne.cssNumber[t] ? "" : "px"),
            c = (ne.cssNumber[t] || "px" !== l && +s) && ke.exec(ne.css(e, t));
        if (c && c[3] !== l) {
            l = l || c[3], n = n || [], c = +s || 1;
            do {
                o = o || ".5", c /= o, ne.style(e, t, c + l)
            } while (o !== (o = u() / s) && 1 !== o && --a)
        }
        return n && (c = +c || +s || 0, i = n[1] ? c + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = c, r.end = i)), i
    }

    function v(e) {
        var t, n = e.ownerDocument,
            r = e.nodeName,
            i = je[r];
        return i || (t = n.body.appendChild(n.createElement(r)), i = ne.css(t, "display"), t.parentNode.removeChild(t), "none" === i && (i = "block"), je[r] = i, i)
    }

    function m(e, t) {
        for (var n, r, i = [], o = 0, a = e.length; o < a; o++) r = e[o], r.style && (n = r.style.display, t ? ("none" === n && (i[o] = Ce.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Se(r) && (i[o] = v(r))) : "none" !== n && (i[o] = "none", Ce.set(r, "display", n)));
        for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o]);
        return e
    }

    function y(e, t) {
        var n;
        return n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && i(e, t) ? ne.merge([e], n) : n
    }

    function b(e, t) {
        for (var n = 0, r = e.length; n < r; n++) Ce.set(e[n], "globalEval", !t || Ce.get(t[n], "globalEval"))
    }

    function x(e, t, n, r, i) {
        for (var o, a, u, s, l, c, f = t.createDocumentFragment(), d = [], p = 0, h = e.length; p < h; p++)
            if ((o = e[p]) || 0 === o)
                if ("object" === ne.type(o)) ne.merge(d, o.nodeType ? [o] : o);
                else if (Pe.test(o)) {
            for (a = a || f.appendChild(t.createElement("div")), u = (Oe.exec(o) || ["", ""])[1].toLowerCase(), s = He[u] || He._default, a.innerHTML = s[1] + ne.htmlPrefilter(o) + s[2], c = s[0]; c--;) a = a.lastChild;
            ne.merge(d, a.childNodes), a = f.firstChild, a.textContent = ""
        } else d.push(t.createTextNode(o));
        for (f.textContent = "", p = 0; o = d[p++];)
            if (r && ne.inArray(o, r) > -1) i && i.push(o);
            else if (l = ne.contains(o.ownerDocument, o), a = y(f.appendChild(o), "script"), l && b(a), n)
            for (c = 0; o = a[c++];) Fe.test(o.type || "") && n.push(o);
        return f
    }

    function w() {
        return !0
    }

    function C() {
        return !1
    }

    function T() {
        try {
            return z.activeElement
        } catch (e) {}
    }

    function E(e, t, n, r, i, o) {
        var a, u;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n, n = void 0);
            for (u in t) E(e, u, n, r, t[u], o);
            return e
        }
        if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = C;
        else if (!i) return e;
        return 1 === o && (a = i, i = function(e) {
            return ne().off(e), a.apply(this, arguments)
        }, i.guid = a.guid || (a.guid = ne.guid++)), e.each(function() {
            ne.event.add(this, t, i, r, n)
        })
    }

    function N(e, t) {
        return i(e, "table") && i(11 !== t.nodeType ? t : t.firstChild, "tr") ? ne(">tbody", e)[0] || e : e
    }

    function A(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function k(e) {
        var t = _e.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function D(e, t) {
        var n, r, i, o, a, u, s, l;
        if (1 === t.nodeType) {
            if (Ce.hasData(e) && (o = Ce.access(e), a = Ce.set(t, o), l = o.events)) {
                delete a.handle, a.events = {};
                for (i in l)
                    for (n = 0, r = l[i].length; n < r; n++) ne.event.add(t, i, l[i][n])
            }
            Te.hasData(e) && (u = Te.access(e), s = ne.extend({}, u), Te.set(t, s))
        }
    }

    function S(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && qe.test(e.type) ? t.checked = e.checked : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
    }

    function L(e, t, r, i) {
        t = V.apply([], t);
        var o, a, u, s, l, c, f = 0,
            d = e.length,
            p = d - 1,
            h = t[0],
            g = ne.isFunction(h);
        if (g || d > 1 && "string" == typeof h && !ee.checkClone && ze.test(h)) return e.each(function(n) {
            var o = e.eq(n);
            g && (t[0] = h.call(this, n, o.html())), L(o, t, r, i)
        });
        if (d && (o = x(t, e[0].ownerDocument, !1, e, i), a = o.firstChild, 1 === o.childNodes.length && (o = a), a || i)) {
            for (u = ne.map(y(o, "script"), A), s = u.length; f < d; f++) l = o, f !== p && (l = ne.clone(l, !0, !0), s && ne.merge(u, y(l, "script"))), r.call(e[f], l, f);
            if (s)
                for (c = u[u.length - 1].ownerDocument, ne.map(u, k), f = 0; f < s; f++) l = u[f], Fe.test(l.type || "") && !Ce.access(l, "globalEval") && ne.contains(c, l) && (l.src ? ne._evalUrl && ne._evalUrl(l.src) : n(l.textContent.replace(Ue, ""), c))
        }
        return e
    }

    function j(e, t, n) {
        for (var r, i = t ? ne.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || ne.cleanData(y(r)), r.parentNode && (n && ne.contains(r.ownerDocument, r) && b(y(r, "script")), r.parentNode.removeChild(r));
        return e
    }

    function q(e, t, n) {
        var r, i, o, a, u = e.style;
        return n = n || Qe(e), n && (a = n.getPropertyValue(t) || n[t], "" !== a || ne.contains(e.ownerDocument, e) || (a = ne.style(e, t)), !ee.pixelMarginRight() && Xe.test(a) && Ve.test(t) && (r = u.width, i = u.minWidth, o = u.maxWidth, u.minWidth = u.maxWidth = u.width = a, a = n.width, u.width = r, u.minWidth = i, u.maxWidth = o)), void 0 !== a ? a + "" : a
    }

    function O(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }

    function F(e) {
        if (e in et) return e;
        for (var t = e[0].toUpperCase() + e.slice(1), n = Ze.length; n--;)
            if ((e = Ze[n] + t) in et) return e
    }

    function H(e) {
        var t = ne.cssProps[e];
        return t || (t = ne.cssProps[e] = F(e) || e), t
    }

    function P(e, t, n) {
        var r = ke.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
    }

    function I(e, t, n, r, i) {
        var o, a = 0;
        for (o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0; o < 4; o += 2) "margin" === n && (a += ne.css(e, n + De[o], !0, i)), r ? ("content" === n && (a -= ne.css(e, "padding" + De[o], !0, i)), "margin" !== n && (a -= ne.css(e, "border" + De[o] + "Width", !0, i))) : (a += ne.css(e, "padding" + De[o], !0, i), "padding" !== n && (a += ne.css(e, "border" + De[o] + "Width", !0, i)));
        return a
    }

    function R(e, t, n) {
        var r, i = Qe(e),
            o = q(e, t, i),
            a = "border-box" === ne.css(e, "boxSizing", !1, i);
        return Xe.test(o) ? o : (r = a && (ee.boxSizingReliable() || o === e.style[t]), "auto" === o && (o = e["offset" + t[0].toUpperCase() + t.slice(1)]), (o = parseFloat(o) || 0) + I(e, t, n || (a ? "border" : "content"), r, i) + "px")
    }

    function B(e) {
        return (e.match(me) || []).join(" ")
    }

    function W(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function M(e, t, n, r) {
        var i;
        if (Array.isArray(t)) ne.each(t, function(t, i) {
            n || ut.test(e) ? r(e, i) : M(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
        });
        else if (n || "object" !== ne.type(t)) r(e, t);
        else
            for (i in t) M(e + "[" + i + "]", t[i], n, r)
    }
    var $ = [],
        z = e.document,
        _ = Object.getPrototypeOf,
        U = $.slice,
        V = $.concat,
        X = $.push,
        Q = $.indexOf,
        Y = {},
        G = Y.toString,
        K = Y.hasOwnProperty,
        J = K.toString,
        Z = J.call(Object),
        ee = {},
        te = "3.2.1 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector",
        ne = function(e, t) {
            return new ne.fn.init(e, t)
        },
        re = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        ie = /^-ms-/,
        oe = /-([a-z])/g,
        ae = function(e, t) {
            return t.toUpperCase()
        };
    ne.fn = ne.prototype = {
        jquery: te,
        constructor: ne,
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(e) {
            return null == e ? U.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            var t = ne.merge(this.constructor(), e);
            return t.prevObject = this, t
        },
        each: function(e) {
            return ne.each(this, e)
        },
        map: function(e) {
            return this.pushStack(ne.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: X,
        sort: $.sort,
        splice: $.splice
    }, ne.extend = ne.fn.extend = function() {
        var e, t, n, r, i, o, a = arguments[0] || {},
            u = 1,
            s = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[u] || {}, u++), "object" == typeof a || ne.isFunction(a) || (a = {}), u === s && (a = this, u--); u < s; u++)
            if (null != (e = arguments[u]))
                for (t in e) n = a[t], r = e[t], a !== r && (l && r && (ne.isPlainObject(r) || (i = Array.isArray(r))) ? (i ? (i = !1, o = n && Array.isArray(n) ? n : []) : o = n && ne.isPlainObject(n) ? n : {}, a[t] = ne.extend(l, o, r)) : void 0 !== r && (a[t] = r));
        return a
    }, ne.extend({
        expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === ne.type(e)
        },
        isWindow: function(e) {
            return null != e && e === e.window
        },
        isNumeric: function(e) {
            var t = ne.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        },
        isPlainObject: function(e) {
            var t, n;
            return !(!e || "[object Object]" !== G.call(e) || (t = _(e)) && ("function" != typeof(n = K.call(t, "constructor") && t.constructor) || J.call(n) !== Z))
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return !1;
            return !0
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Y[G.call(e)] || "object" : typeof e
        },
        globalEval: function(e) {
            n(e)
        },
        camelCase: function(e) {
            return e.replace(ie, "ms-").replace(oe, ae)
        },
        each: function(e, t) {
            var n, i = 0;
            if (r(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(re, "")
        },
        makeArray: function(e, t) {
            var n = t || [];
            return null != e && (r(Object(e)) ? ne.merge(n, "string" == typeof e ? [e] : e) : X.call(n, e)), n
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : Q.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
            return e.length = i, e
        },
        grep: function(e, t, n) {
            for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
            return r
        },
        map: function(e, t, n) {
            var i, o, a = 0,
                u = [];
            if (r(e))
                for (i = e.length; a < i; a++) null != (o = t(e[a], a, n)) && u.push(o);
            else
                for (a in e) null != (o = t(e[a], a, n)) && u.push(o);
            return V.apply([], u)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t], t = e, e = n), ne.isFunction(e)) return r = U.call(arguments, 2), i = function() {
                return e.apply(t || this, r.concat(U.call(arguments)))
            }, i.guid = e.guid = e.guid || ne.guid++, i
        },
        now: Date.now,
        support: ee
    }), "function" == typeof Symbol && (ne.fn[Symbol.iterator] = $[Symbol.iterator]), ne.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        Y["[object " + t + "]"] = t.toLowerCase()
    });
    var ue = function(e) {
        function t(e, t, n, r) {
            var i, o, a, u, s, c, d, p = t && t.ownerDocument,
                h = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== h && 9 !== h && 11 !== h) return n;
            if (!r && ((t ? t.ownerDocument || t : B) !== j && L(t), t = t || j, O)) {
                if (11 !== h && (s = ge.exec(e)))
                    if (i = s[1]) {
                        if (9 === h) {
                            if (!(a = t.getElementById(i))) return n;
                            if (a.id === i) return n.push(a), n
                        } else if (p && (a = p.getElementById(i)) && I(t, a) && a.id === i) return n.push(a), n
                    } else {
                        if (s[2]) return G.apply(n, t.getElementsByTagName(e)), n;
                        if ((i = s[3]) && x.getElementsByClassName && t.getElementsByClassName) return G.apply(n, t.getElementsByClassName(i)), n
                    }
                if (x.qsa && !_[e + " "] && (!F || !F.test(e))) {
                    if (1 !== h) p = t, d = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((u = t.getAttribute("id")) ? u = u.replace(be, xe) : t.setAttribute("id", u = R), c = E(e), o = c.length; o--;) c[o] = "#" + u + " " + f(c[o]);
                        d = c.join(","), p = ve.test(e) && l(t.parentNode) || t
                    }
                    if (d) try {
                        return G.apply(n, p.querySelectorAll(d)), n
                    } catch (e) {} finally {
                        u === R && t.removeAttribute("id")
                    }
                }
            }
            return A(e.replace(oe, "$1"), t, n, r)
        }

        function n() {
            function e(n, r) {
                return t.push(n + " ") > w.cacheLength && delete e[t.shift()], e[n + " "] = r
            }
            var t = [];
            return e
        }

        function r(e) {
            return e[R] = !0, e
        }

        function i(e) {
            var t = j.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = t
        }

        function a(e, t) {
            var n = t && e,
                r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function u(e) {
            return function(t) {
                return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && Ce(t) === e : t.disabled === e : "label" in t && t.disabled === e
            }
        }

        function s(e) {
            return r(function(t) {
                return t = +t, r(function(n, r) {
                    for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        function l(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }

        function c() {}

        function f(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r
        }

        function d(e, t, n) {
            var r = t.dir,
                i = t.next,
                o = i || r,
                a = n && "parentNode" === o,
                u = M++;
            return t.first ? function(t, n, i) {
                for (; t = t[r];)
                    if (1 === t.nodeType || a) return e(t, n, i);
                return !1
            } : function(t, n, s) {
                var l, c, f, d = [W, u];
                if (s) {
                    for (; t = t[r];)
                        if ((1 === t.nodeType || a) && e(t, n, s)) return !0
                } else
                    for (; t = t[r];)
                        if (1 === t.nodeType || a)
                            if (f = t[R] || (t[R] = {}), c = f[t.uniqueID] || (f[t.uniqueID] = {}), i && i === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((l = c[o]) && l[0] === W && l[1] === u) return d[2] = l[2];
                                if (c[o] = d, d[2] = e(t, n, s)) return !0
                            } return !1
            }
        }

        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--;)
                    if (!e[i](t, n, r)) return !1;
                return !0
            } : e[0]
        }

        function h(e, n, r) {
            for (var i = 0, o = n.length; i < o; i++) t(e, n[i], r);
            return r
        }

        function g(e, t, n, r, i) {
            for (var o, a = [], u = 0, s = e.length, l = null != t; u < s; u++)(o = e[u]) && (n && !n(o, r, i) || (a.push(o), l && t.push(u)));
            return a
        }

        function v(e, t, n, i, o, a) {
            return i && !i[R] && (i = v(i)), o && !o[R] && (o = v(o, a)), r(function(r, a, u, s) {
                var l, c, f, d = [],
                    p = [],
                    v = a.length,
                    m = r || h(t || "*", u.nodeType ? [u] : u, []),
                    y = !e || !r && t ? m : g(m, d, e, u, s),
                    b = n ? o || (r ? e : v || i) ? [] : a : y;
                if (n && n(y, b, u, s), i)
                    for (l = g(b, p), i(l, [], u, s), c = l.length; c--;)(f = l[c]) && (b[p[c]] = !(y[p[c]] = f));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (l = [], c = b.length; c--;)(f = b[c]) && l.push(y[c] = f);
                            o(null, b = [], l, s)
                        }
                        for (c = b.length; c--;)(f = b[c]) && (l = o ? J(r, f) : d[c]) > -1 && (r[l] = !(a[l] = f))
                    }
                } else b = g(b === a ? b.splice(v, b.length) : b), o ? o(null, a, b, s) : G.apply(a, b)
            })
        }

        function m(e) {
            for (var t, n, r, i = e.length, o = w.relative[e[0].type], a = o || w.relative[" "], u = o ? 1 : 0, s = d(function(e) {
                    return e === t
                }, a, !0), l = d(function(e) {
                    return J(t, e) > -1
                }, a, !0), c = [function(e, n, r) {
                    var i = !o && (r || n !== k) || ((t = n).nodeType ? s(e, n, r) : l(e, n, r));
                    return t = null, i
                }]; u < i; u++)
                if (n = w.relative[e[u].type]) c = [d(p(c), n)];
                else {
                    if (n = w.filter[e[u].type].apply(null, e[u].matches), n[R]) {
                        for (r = ++u; r < i && !w.relative[e[r].type]; r++);
                        return v(u > 1 && p(c), u > 1 && f(e.slice(0, u - 1).concat({
                            value: " " === e[u - 2].type ? "*" : ""
                        })).replace(oe, "$1"), n, u < r && m(e.slice(u, r)), r < i && m(e = e.slice(r)), r < i && f(e))
                    }
                    c.push(n)
                }
            return p(c)
        }

        function y(e, n) {
            var i = n.length > 0,
                o = e.length > 0,
                a = function(r, a, u, s, l) {
                    var c, f, d, p = 0,
                        h = "0",
                        v = r && [],
                        m = [],
                        y = k,
                        b = r || o && w.find.TAG("*", l),
                        x = W += null == y ? 1 : Math.random() || .1,
                        C = b.length;
                    for (l && (k = a === j || a || l); h !== C && null != (c = b[h]); h++) {
                        if (o && c) {
                            for (f = 0, a || c.ownerDocument === j || (L(c), u = !O); d = e[f++];)
                                if (d(c, a || j, u)) {
                                    s.push(c);
                                    break
                                }
                            l && (W = x)
                        }
                        i && ((c = !d && c) && p--, r && v.push(c))
                    }
                    if (p += h, i && h !== p) {
                        for (f = 0; d = n[f++];) d(v, m, a, u);
                        if (r) {
                            if (p > 0)
                                for (; h--;) v[h] || m[h] || (m[h] = Q.call(s));
                            m = g(m)
                        }
                        G.apply(s, m), l && !r && m.length > 0 && p + n.length > 1 && t.uniqueSort(s)
                    }
                    return l && (W = x, k = y), v
                };
            return i ? r(a) : a
        }
        var b, x, w, C, T, E, N, A, k, D, S, L, j, q, O, F, H, P, I, R = "sizzle" + 1 * new Date,
            B = e.document,
            W = 0,
            M = 0,
            $ = n(),
            z = n(),
            _ = n(),
            U = function(e, t) {
                return e === t && (S = !0), 0
            },
            V = {}.hasOwnProperty,
            X = [],
            Q = X.pop,
            Y = X.push,
            G = X.push,
            K = X.slice,
            J = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            },
            Z = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            ee = "[\\x20\\t\\r\\n\\f]",
            te = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ne = "\\[" + ee + "*(" + te + ")(?:" + ee + "*([*^$|!~]?=)" + ee + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + te + "))|)" + ee + "*\\]",
            re = ":(" + te + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ne + ")*)|.*)\\)|)",
            ie = new RegExp(ee + "+", "g"),
            oe = new RegExp("^" + ee + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ee + "+$", "g"),
            ae = new RegExp("^" + ee + "*," + ee + "*"),
            ue = new RegExp("^" + ee + "*([>+~]|" + ee + ")" + ee + "*"),
            se = new RegExp("=" + ee + "*([^\\]'\"]*?)" + ee + "*\\]", "g"),
            le = new RegExp(re),
            ce = new RegExp("^" + te + "$"),
            fe = {
                ID: new RegExp("^#(" + te + ")"),
                CLASS: new RegExp("^\\.(" + te + ")"),
                TAG: new RegExp("^(" + te + "|[*])"),
                ATTR: new RegExp("^" + ne),
                PSEUDO: new RegExp("^" + re),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ee + "*(even|odd|(([+-]|)(\\d*)n|)" + ee + "*(?:([+-]|)" + ee + "*(\\d+)|))" + ee + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + Z + ")$", "i"),
                needsContext: new RegExp("^" + ee + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ee + "*((?:-\\d)?\\d*)" + ee + "*\\)|)(?=[^-]|$)", "i")
            },
            de = /^(?:input|select|textarea|button)$/i,
            pe = /^h\d$/i,
            he = /^[^{]+\{\s*\[native \w/,
            ge = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ve = /[+~]/,
            me = new RegExp("\\\\([\\da-f]{1,6}" + ee + "?|(" + ee + ")|.)", "ig"),
            ye = function(e, t, n) {
                var r = "0x" + t - 65536;
                return r !== r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
            },
            be = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            xe = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            we = function() {
                L()
            },
            Ce = d(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            G.apply(X = K.call(B.childNodes), B.childNodes), X[B.childNodes.length].nodeType
        } catch (e) {
            G = {
                apply: X.length ? function(e, t) {
                    Y.apply(e, K.call(t))
                } : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++];);
                    e.length = n - 1
                }
            }
        }
        x = t.support = {}, T = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, L = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : B;
            return r !== j && 9 === r.nodeType && r.documentElement ? (j = r, q = j.documentElement, O = !T(j), B !== j && (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", we, !1) : n.attachEvent && n.attachEvent("onunload", we)), x.attributes = i(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), x.getElementsByTagName = i(function(e) {
                return e.appendChild(j.createComment("")), !e.getElementsByTagName("*").length
            }), x.getElementsByClassName = he.test(j.getElementsByClassName), x.getById = i(function(e) {
                return q.appendChild(e).id = R, !j.getElementsByName || !j.getElementsByName(R).length
            }), x.getById ? (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }) : (w.filter.ID = function(e) {
                var t = e.replace(me, ye);
                return function(e) {
                    var n = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }, w.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && O) {
                    var n, r, i, o = t.getElementById(e);
                    if (o) {
                        if ((n = o.getAttributeNode("id")) && n.value === e) return [o];
                        for (i = t.getElementsByName(e), r = 0; o = i[r++];)
                            if ((n = o.getAttributeNode("id")) && n.value === e) return [o]
                    }
                    return []
                }
            }), w.find.TAG = x.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : x.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var n, r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, w.find.CLASS = x.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && O) return t.getElementsByClassName(e)
            }, H = [], F = [], (x.qsa = he.test(j.querySelectorAll)) && (i(function(e) {
                q.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && F.push("[*^$]=" + ee + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || F.push("\\[" + ee + "*(?:value|" + Z + ")"), e.querySelectorAll("[id~=" + R + "-]").length || F.push("~="), e.querySelectorAll(":checked").length || F.push(":checked"), e.querySelectorAll("a#" + R + "+*").length || F.push(".#.+[+~]")
            }), i(function(e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = j.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && F.push("name" + ee + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && F.push(":enabled", ":disabled"), q.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && F.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), F.push(",.*:")
            })), (x.matchesSelector = he.test(P = q.matches || q.webkitMatchesSelector || q.mozMatchesSelector || q.oMatchesSelector || q.msMatchesSelector)) && i(function(e) {
                x.disconnectedMatch = P.call(e, "*"), P.call(e, "[s!='']:x"), H.push("!=", re)
            }), F = F.length && new RegExp(F.join("|")), H = H.length && new RegExp(H.join("|")), t = he.test(q.compareDocumentPosition), I = t || he.test(q.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e,
                    r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, U = t ? function(e, t) {
                if (e === t) return S = !0, 0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n || (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1, 1 & n || !x.sortDetached && t.compareDocumentPosition(e) === n ? e === j || e.ownerDocument === B && I(B, e) ? -1 : t === j || t.ownerDocument === B && I(B, t) ? 1 : D ? J(D, e) - J(D, t) : 0 : 4 & n ? -1 : 1)
            } : function(e, t) {
                if (e === t) return S = !0, 0;
                var n, r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    u = [e],
                    s = [t];
                if (!i || !o) return e === j ? -1 : t === j ? 1 : i ? -1 : o ? 1 : D ? J(D, e) - J(D, t) : 0;
                if (i === o) return a(e, t);
                for (n = e; n = n.parentNode;) u.unshift(n);
                for (n = t; n = n.parentNode;) s.unshift(n);
                for (; u[r] === s[r];) r++;
                return r ? a(u[r], s[r]) : u[r] === B ? -1 : s[r] === B ? 1 : 0
            }, j) : j
        }, t.matches = function(e, n) {
            return t(e, null, null, n)
        }, t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== j && L(e), n = n.replace(se, "='$1']"), x.matchesSelector && O && !_[n + " "] && (!H || !H.test(n)) && (!F || !F.test(n))) try {
                var r = P.call(e, n);
                if (r || x.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r
            } catch (e) {}
            return t(n, j, null, [e]).length > 0
        }, t.contains = function(e, t) {
            return (e.ownerDocument || e) !== j && L(e), I(e, t)
        }, t.attr = function(e, t) {
            (e.ownerDocument || e) !== j && L(e);
            var n = w.attrHandle[t.toLowerCase()],
                r = n && V.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !O) : void 0;
            return void 0 !== r ? r : x.attributes || !O ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }, t.escape = function(e) {
            return (e + "").replace(be, xe)
        }, t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, t.uniqueSort = function(e) {
            var t, n = [],
                r = 0,
                i = 0;
            if (S = !x.detectDuplicates, D = !x.sortStable && e.slice(0), e.sort(U), S) {
                for (; t = e[i++];) t === e[i] && (r = n.push(i));
                for (; r--;) e.splice(n[r], 1)
            }
            return D = null, e
        }, C = t.getText = function(e) {
            var t, n = "",
                r = 0,
                i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += C(e)
                } else if (3 === i || 4 === i) return e.nodeValue
            } else
                for (; t = e[r++];) n += C(t);
            return n
        }, w = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(me, ye), e[3] = (e[3] || e[4] || e[5] || "").replace(me, ye), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && le.test(n) && (t = E(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(me, ye).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = $[e + " "];
                    return t || (t = new RegExp("(^|" + ee + ")" + e + "(" + ee + "|$)")) && $(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(ie, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3),
                        a = "last" !== e.slice(-4),
                        u = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    } : function(t, n, s) {
                        var l, c, f, d, p, h, g = o !== a ? "nextSibling" : "previousSibling",
                            v = t.parentNode,
                            m = u && t.nodeName.toLowerCase(),
                            y = !s && !u,
                            b = !1;
                        if (v) {
                            if (o) {
                                for (; g;) {
                                    for (d = t; d = d[g];)
                                        if (u ? d.nodeName.toLowerCase() === m : 1 === d.nodeType) return !1;
                                    h = g = "only" === e && !h && "nextSibling"
                                }
                                return !0
                            }
                            if (h = [a ? v.firstChild : v.lastChild], a && y) {
                                for (d = v, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], b = p && l[2], d = p && v.childNodes[p]; d = ++p && d && d[g] || (b = p = 0) || h.pop();)
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [W, p, b];
                                        break
                                    }
                            } else if (y && (d = t, f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), l = c[e] || [], p = l[0] === W && l[1], b = p), !1 === b)
                                for (;
                                    (d = ++p && d && d[g] || (b = p = 0) || h.pop()) && ((u ? d.nodeName.toLowerCase() !== m : 1 !== d.nodeType) || !++b || (y && (f = d[R] || (d[R] = {}), c = f[d.uniqueID] || (f[d.uniqueID] = {}), c[e] = [W, b]), d !== t)););
                            return (b -= i) === r || b % r == 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = w.pseudos[e] || w.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[R] ? o(n) : o.length > 1 ? (i = [e, e, "", n], w.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), a = i.length; a--;) r = J(e, i[a]), e[r] = !(t[r] = i[a])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                        n = [],
                        i = N(e.replace(oe, "$1"));
                    return i[R] ? r(function(e, t, n, r) {
                        for (var o, a = i(e, null, r, []), u = e.length; u--;)(o = a[u]) && (e[u] = !(t[u] = o))
                    }) : function(e, r, o) {
                        return t[0] = e, i(t, null, o, n), t[0] = null, !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(me, ye),
                        function(t) {
                            return (t.textContent || t.innerText || C(t)).indexOf(e) > -1
                        }
                }),
                lang: r(function(e) {
                    return ce.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(me, ye).toLowerCase(),
                        function(t) {
                            var n;
                            do {
                                if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-")
                            } while ((t = t.parentNode) && 1 === t.nodeType);
                            return !1
                        }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === q
                },
                focus: function(e) {
                    return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: u(!1),
                disabled: u(!0),
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !w.pseudos.empty(e)
                },
                header: function(e) {
                    return pe.test(e.nodeName)
                },
                input: function(e) {
                    return de.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: s(function() {
                    return [0]
                }),
                last: s(function(e, t) {
                    return [t - 1]
                }),
                eq: s(function(e, t, n) {
                    return [n < 0 ? n + t : n]
                }),
                even: s(function(e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e
                }),
                odd: s(function(e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e
                }),
                lt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; --r >= 0;) e.push(r);
                    return e
                }),
                gt: s(function(e, t, n) {
                    for (var r = n < 0 ? n + t : n; ++r < t;) e.push(r);
                    return e
                })
            }
        }, w.pseudos.nth = w.pseudos.eq;
        for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                return "input" === t.nodeName.toLowerCase() && t.type === e
            }
        }(b);
        for (b in {
                submit: !0,
                reset: !0
            }) w.pseudos[b] = function(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }(b);
        return c.prototype = w.filters = w.pseudos, w.setFilters = new c, E = t.tokenize = function(e, n) {
            var r, i, o, a, u, s, l, c = z[e + " "];
            if (c) return n ? 0 : c.slice(0);
            for (u = e, s = [], l = w.preFilter; u;) {
                r && !(i = ae.exec(u)) || (i && (u = u.slice(i[0].length) || u), s.push(o = [])), r = !1, (i = ue.exec(u)) && (r = i.shift(), o.push({
                    value: r,
                    type: i[0].replace(oe, " ")
                }), u = u.slice(r.length));
                for (a in w.filter) !(i = fe[a].exec(u)) || l[a] && !(i = l[a](i)) || (r = i.shift(), o.push({
                    value: r,
                    type: a,
                    matches: i
                }), u = u.slice(r.length));
                if (!r) break
            }
            return n ? u.length : u ? t.error(e) : z(e, s).slice(0)
        }, N = t.compile = function(e, t) {
            var n, r = [],
                i = [],
                o = _[e + " "];
            if (!o) {
                for (t || (t = E(e)), n = t.length; n--;) o = m(t[n]), o[R] ? r.push(o) : i.push(o);
                o = _(e, y(i, r)), o.selector = e
            }
            return o
        }, A = t.select = function(e, t, n, r) {
            var i, o, a, u, s, c = "function" == typeof e && e,
                d = !r && E(e = c.selector || e);
            if (n = n || [], 1 === d.length) {
                if (o = d[0] = d[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === t.nodeType && O && w.relative[o[1].type]) {
                    if (!(t = (w.find.ID(a.matches[0].replace(me, ye), t) || [])[0])) return n;
                    c && (t = t.parentNode), e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !w.relative[u = a.type]);)
                    if ((s = w.find[u]) && (r = s(a.matches[0].replace(me, ye), ve.test(o[0].type) && l(t.parentNode) || t))) {
                        if (o.splice(i, 1), !(e = r.length && f(o))) return G.apply(n, r), n;
                        break
                    }
            }
            return (c || N(e, d))(r, t, !O, n, !t || ve.test(e) && l(t.parentNode) || t), n
        }, x.sortStable = R.split("").sort(U).join("") === R, x.detectDuplicates = !!S, L(), x.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(j.createElement("fieldset"))
        }), i(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), x.attributes && i(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(Z, function(e, t, n) {
            var r;
            if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }), t
    }(e);
    ne.find = ue, ne.expr = ue.selectors, ne.expr[":"] = ne.expr.pseudos, ne.uniqueSort = ne.unique = ue.uniqueSort, ne.text = ue.getText, ne.isXMLDoc = ue.isXML, ne.contains = ue.contains, ne.escapeSelector = ue.escape;
    var se = function(e, t, n) {
            for (var r = [], i = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;)
                if (1 === e.nodeType) {
                    if (i && ne(e).is(n)) break;
                    r.push(e)
                }
            return r
        },
        le = function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        },
        ce = ne.expr.match.needsContext,
        fe = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
        de = /^.[^:#\[\.,]*$/;
    ne.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ne.find.matchesSelector(r, e) ? [r] : [] : ne.find.matches(e, ne.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, ne.fn.extend({
        find: function(e) {
            var t, n, r = this.length,
                i = this;
            if ("string" != typeof e) return this.pushStack(ne(e).filter(function() {
                for (t = 0; t < r; t++)
                    if (ne.contains(i[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < r; t++) ne.find(e, i[t], n);
            return r > 1 ? ne.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(o(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(o(this, e || [], !0))
        },
        is: function(e) {
            return !!o(this, "string" == typeof e && ce.test(e) ? ne(e) : e || [], !1).length
        }
    });
    var pe, he = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (ne.fn.init = function(e, t, n) {
        var r, i;
        if (!e) return this;
        if (n = n || pe, "string" == typeof e) {
            if (!(r = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : he.exec(e)) || !r[1] && t) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof ne ? t[0] : t, ne.merge(this, ne.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : z, !0)), fe.test(r[1]) && ne.isPlainObject(t))
                    for (r in t) ne.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            return i = z.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
        }
        return e.nodeType ? (this[0] = e, this.length = 1, this) : ne.isFunction(e) ? void 0 !== n.ready ? n.ready(e) : e(ne) : ne.makeArray(e, this)
    }).prototype = ne.fn, pe = ne(z);
    var ge = /^(?:parents|prev(?:Until|All))/,
        ve = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ne.fn.extend({
        has: function(e) {
            var t = ne(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (ne.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, r = 0,
                i = this.length,
                o = [],
                a = "string" != typeof e && ne(e);
            if (!ce.test(e))
                for (; r < i; r++)
                    for (n = this[r]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && ne.find.matchesSelector(n, e))) {
                            o.push(n);
                            break
                        }
            return this.pushStack(o.length > 1 ? ne.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? Q.call(ne(e), this[0]) : Q.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(ne.uniqueSort(ne.merge(this.get(), ne(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), ne.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return se(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return se(e, "parentNode", n)
        },
        next: function(e) {
            return a(e, "nextSibling")
        },
        prev: function(e) {
            return a(e, "previousSibling")
        },
        nextAll: function(e) {
            return se(e, "nextSibling")
        },
        prevAll: function(e) {
            return se(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return se(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return se(e, "previousSibling", n)
        },
        siblings: function(e) {
            return le((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return le(e.firstChild)
        },
        contents: function(e) {
            return i(e, "iframe") ? e.contentDocument : (i(e, "template") && (e = e.content || e), ne.merge([], e.childNodes))
        }
    }, function(e, t) {
        ne.fn[e] = function(n, r) {
            var i = ne.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ne.filter(r, i)), this.length > 1 && (ve[e] || ne.uniqueSort(i), ge.test(e) && i.reverse()), this.pushStack(i)
        }
    });
    var me = /[^\x20\t\r\n\f]+/g;
    ne.Callbacks = function(e) {
        e = "string" == typeof e ? u(e) : ne.extend({}, e);
        var t, n, r, i, o = [],
            a = [],
            s = -1,
            l = function() {
                for (i = i || e.once, r = t = !0; a.length; s = -1)
                    for (n = a.shift(); ++s < o.length;) !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && (s = o.length, n = !1);
                e.memory || (n = !1), t = !1, i && (o = n ? [] : "")
            },
            c = {
                add: function() {
                    return o && (n && !t && (s = o.length - 1, a.push(n)), function t(n) {
                        ne.each(n, function(n, r) {
                            ne.isFunction(r) ? e.unique && c.has(r) || o.push(r) : r && r.length && "string" !== ne.type(r) && t(r)
                        })
                    }(arguments), n && !t && l()), this
                },
                remove: function() {
                    return ne.each(arguments, function(e, t) {
                        for (var n;
                            (n = ne.inArray(t, o, n)) > -1;) o.splice(n, 1), n <= s && s--
                    }), this
                },
                has: function(e) {
                    return e ? ne.inArray(e, o) > -1 : o.length > 0
                },
                empty: function() {
                    return o && (o = []), this
                },
                disable: function() {
                    return i = a = [], o = n = "", this
                },
                disabled: function() {
                    return !o
                },
                lock: function() {
                    return i = a = [], n || t || (o = n = ""), this
                },
                locked: function() {
                    return !!i
                },
                fireWith: function(e, n) {
                    return i || (n = n || [], n = [e, n.slice ? n.slice() : n], a.push(n), t || l()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!r
                }
            };
        return c
    }, ne.extend({
        Deferred: function(t) {
            var n = [
                    ["notify", "progress", ne.Callbacks("memory"), ne.Callbacks("memory"), 2],
                    ["resolve", "done", ne.Callbacks("once memory"), ne.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", ne.Callbacks("once memory"), ne.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                i = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return i.then(null, e)
                    },
                    pipe: function() {
                        var e = arguments;
                        return ne.Deferred(function(t) {
                            ne.each(n, function(n, r) {
                                var i = ne.isFunction(e[r[4]]) && e[r[4]];
                                o[r[1]](function() {
                                    var e = i && i.apply(this, arguments);
                                    e && ne.isFunction(e.promise) ? e.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[r[0] + "With"](this, i ? [e] : arguments)
                                })
                            }), e = null
                        }).promise()
                    },
                    then: function(t, r, i) {
                        function o(t, n, r, i) {
                            return function() {
                                var u = this,
                                    c = arguments,
                                    f = function() {
                                        var e, f;
                                        if (!(t < a)) {
                                            if ((e = r.apply(u, c)) === n.promise()) throw new TypeError("Thenable self-resolution");
                                            f = e && ("object" == typeof e || "function" == typeof e) && e.then, ne.isFunction(f) ? i ? f.call(e, o(a, n, s, i), o(a, n, l, i)) : (a++, f.call(e, o(a, n, s, i), o(a, n, l, i), o(a, n, s, n.notifyWith))) : (r !== s && (u = void 0, c = [e]), (i || n.resolveWith)(u, c))
                                        }
                                    },
                                    d = i ? f : function() {
                                        try {
                                            f()
                                        } catch (e) {
                                            ne.Deferred.exceptionHook && ne.Deferred.exceptionHook(e, d.stackTrace), t + 1 >= a && (r !== l && (u = void 0, c = [e]), n.rejectWith(u, c))
                                        }
                                    };
                                t ? d() : (ne.Deferred.getStackHook && (d.stackTrace = ne.Deferred.getStackHook()), e.setTimeout(d))
                            }
                        }
                        var a = 0;
                        return ne.Deferred(function(e) {
                            n[0][3].add(o(0, e, ne.isFunction(i) ? i : s, e.notifyWith)), n[1][3].add(o(0, e, ne.isFunction(t) ? t : s)), n[2][3].add(o(0, e, ne.isFunction(r) ? r : l))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? ne.extend(e, i) : i
                    }
                },
                o = {};
            return ne.each(n, function(e, t) {
                var a = t[2],
                    u = t[5];
                i[t[1]] = a.add, u && a.add(function() {
                    r = u
                }, n[3 - e][2].disable, n[0][2].lock), a.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = a.fireWith
            }), i.promise(o), t && t.call(o, o), o
        },
        when: function(e) {
            var t = arguments.length,
                n = t,
                r = Array(n),
                i = U.call(arguments),
                o = ne.Deferred(),
                a = function(e) {
                    return function(n) {
                        r[e] = this, i[e] = arguments.length > 1 ? U.call(arguments) : n, --t || o.resolveWith(r, i)
                    }
                };
            if (t <= 1 && (c(e, o.done(a(n)).resolve, o.reject, !t), "pending" === o.state() || ne.isFunction(i[n] && i[n].then))) return o.then();
            for (; n--;) c(i[n], a(n), o.reject);
            return o.promise()
        }
    });
    var ye = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    ne.Deferred.exceptionHook = function(t, n) {
        e.console && e.console.warn && t && ye.test(t.name) && e.console.warn("jQuery.Deferred exception: " + t.message, t.stack, n)
    }, ne.readyException = function(t) {
        e.setTimeout(function() {
            throw t
        })
    };
    var be = ne.Deferred();
    ne.fn.ready = function(e) {
        return be.then(e).catch(function(e) {
            ne.readyException(e)
        }), this
    }, ne.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --ne.readyWait : ne.isReady) || (ne.isReady = !0, !0 !== e && --ne.readyWait > 0 || be.resolveWith(z, [ne]))
        }
    }), ne.ready.then = be.then, "complete" === z.readyState || "loading" !== z.readyState && !z.documentElement.doScroll ? e.setTimeout(ne.ready) : (z.addEventListener("DOMContentLoaded", f), e.addEventListener("load", f));
    var xe = function(e, t, n, r, i, o, a) {
            var u = 0,
                s = e.length,
                l = null == n;
            if ("object" === ne.type(n)) {
                i = !0;
                for (u in n) xe(e, t, u, n[u], !0, o, a)
            } else if (void 0 !== r && (i = !0, ne.isFunction(r) || (a = !0), l && (a ? (t.call(e, r), t = null) : (l = t, t = function(e, t, n) {
                    return l.call(ne(e), n)
                })), t))
                for (; u < s; u++) t(e[u], n, a ? r : r.call(e[u], u, t(e[u], n)));
            return i ? e : l ? t.call(e) : s ? t(e[0], n) : o
        },
        we = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
    d.uid = 1, d.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, we(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var r, i = this.cache(e);
            if ("string" == typeof t) i[ne.camelCase(t)] = n;
            else
                for (r in t) i[ne.camelCase(r)] = t[r];
            return i
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ne.camelCase(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, r = e[this.expando];
            if (void 0 !== r) {
                if (void 0 !== t) {
                    Array.isArray(t) ? t = t.map(ne.camelCase) : (t = ne.camelCase(t), t = t in r ? [t] : t.match(me) || []), n = t.length;
                    for (; n--;) delete r[t[n]]
                }(void 0 === t || ne.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            var t = e[this.expando];
            return void 0 !== t && !ne.isEmptyObject(t)
        }
    };
    var Ce = new d,
        Te = new d,
        Ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Ne = /[A-Z]/g;
    ne.extend({
        hasData: function(e) {
            return Te.hasData(e) || Ce.hasData(e)
        },
        data: function(e, t, n) {
            return Te.access(e, t, n)
        },
        removeData: function(e, t) {
            Te.remove(e, t)
        },
        _data: function(e, t, n) {
            return Ce.access(e, t, n)
        },
        _removeData: function(e, t) {
            Ce.remove(e, t)
        }
    }), ne.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0],
                a = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = Te.get(o), 1 === o.nodeType && !Ce.get(o, "hasDataAttrs"))) {
                    for (n = a.length; n--;) a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = ne.camelCase(r.slice(5)), h(o, r, i[r])));
                    Ce.set(o, "hasDataAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                Te.set(this, e)
            }) : xe(this, function(t) {
                var n;
                if (o && void 0 === t) {
                    if (void 0 !== (n = Te.get(o, e))) return n;
                    if (void 0 !== (n = h(o, e))) return n
                } else this.each(function() {
                    Te.set(this, e, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(e) {
            return this.each(function() {
                Te.remove(this, e)
            })
        }
    }), ne.extend({
        queue: function(e, t, n) {
            var r;
            if (e) return t = (t || "fx") + "queue", r = Ce.get(e, t), n && (!r || Array.isArray(n) ? r = Ce.access(e, t, ne.makeArray(n)) : r.push(n)), r || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ne.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = ne._queueHooks(e, t),
                a = function() {
                    ne.dequeue(e, t)
                };
            "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return Ce.get(e, n) || Ce.access(e, n, {
                empty: ne.Callbacks("once memory").add(function() {
                    Ce.remove(e, [t + "queue", n])
                })
            })
        }
    }), ne.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? ne.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = ne.queue(this, e, t);
                ne._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && ne.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ne.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1,
                i = ne.Deferred(),
                o = this,
                a = this.length,
                u = function() {
                    --r || i.resolveWith(o, [o])
                };
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(n = Ce.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(u));
            return u(), i.promise(t)
        }
    });
    var Ae = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ke = new RegExp("^(?:([+-])=|)(" + Ae + ")([a-z%]*)$", "i"),
        De = ["Top", "Right", "Bottom", "Left"],
        Se = function(e, t) {
            return e = t || e, "none" === e.style.display || "" === e.style.display && ne.contains(e.ownerDocument, e) && "none" === ne.css(e, "display")
        },
        Le = function(e, t, n, r) {
            var i, o, a = {};
            for (o in t) a[o] = e.style[o], e.style[o] = t[o];
            i = n.apply(e, r || []);
            for (o in t) e.style[o] = a[o];
            return i
        },
        je = {};
    ne.fn.extend({
        show: function() {
            return m(this, !0)
        },
        hide: function() {
            return m(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                Se(this) ? ne(this).show() : ne(this).hide()
            })
        }
    });
    var qe = /^(?:checkbox|radio)$/i,
        Oe = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        Fe = /^$|\/(?:java|ecma)script/i,
        He = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
    He.optgroup = He.option, He.tbody = He.tfoot = He.colgroup = He.caption = He.thead, He.th = He.td;
    var Pe = /<|&#?\w+;/;
    ! function() {
        var e = z.createDocumentFragment(),
            t = e.appendChild(z.createElement("div")),
            n = z.createElement("input");
        n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), t.appendChild(n), ee.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", ee.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
    }();
    var Ie = z.documentElement,
        Re = /^key/,
        Be = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        We = /^([^.]*)(?:\.(.+)|)/;
    ne.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = Ce.get(e);
            if (v)
                for (n.handler && (o = n, n = o.handler, i = o.selector), i && ne.find.matchesSelector(Ie, i), n.guid || (n.guid = ne.guid++), (s = v.events) || (s = v.events = {}), (a = v.handle) || (a = v.handle = function(t) {
                        return void 0 !== ne && ne.event.triggered !== t.type ? ne.event.dispatch.apply(e, arguments) : void 0
                    }), t = (t || "").match(me) || [""], l = t.length; l--;) u = We.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p && (f = ne.event.special[p] || {}, p = (i ? f.delegateType : f.bindType) || p, f = ne.event.special[p] || {}, c = ne.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && ne.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (d = s[p]) || (d = s[p] = [], d.delegateCount = 0, f.setup && !1 !== f.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, c) : d.push(c), ne.event.global[p] = !0)
        },
        remove: function(e, t, n, r, i) {
            var o, a, u, s, l, c, f, d, p, h, g, v = Ce.hasData(e) && Ce.get(e);
            if (v && (s = v.events)) {
                for (t = (t || "").match(me) || [""], l = t.length; l--;)
                    if (u = We.exec(t[l]) || [], p = g = u[1], h = (u[2] || "").split(".").sort(), p) {
                        for (f = ne.event.special[p] || {}, p = (r ? f.delegateType : f.bindType) || p, d = s[p] || [], u = u[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = d.length; o--;) c = d[o], !i && g !== c.origType || n && n.guid !== c.guid || u && !u.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (d.splice(o, 1), c.selector && d.delegateCount--, f.remove && f.remove.call(e, c));
                        a && !d.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || ne.removeEvent(e, p, v.handle), delete s[p])
                    } else
                        for (p in s) ne.event.remove(e, p + t[l], n, r, !0);
                ne.isEmptyObject(s) && Ce.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, r, i, o, a, u = ne.event.fix(e),
                s = new Array(arguments.length),
                l = (Ce.get(this, "events") || {})[u.type] || [],
                c = ne.event.special[u.type] || {};
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
            if (u.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                for (a = ne.event.handlers.call(this, u, l), t = 0;
                    (i = a[t++]) && !u.isPropagationStopped();)
                    for (u.currentTarget = i.elem, n = 0;
                        (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();) u.rnamespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o, u.data = o.data, void 0 !== (r = ((ne.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, a, u = [],
                s = t.delegateCount,
                l = e.target;
            if (s && l.nodeType && !("click" === e.type && e.button >= 1))
                for (; l !== this; l = l.parentNode || this)
                    if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                        for (o = [], a = {}, n = 0; n < s; n++) r = t[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? ne(i, this).index(l) > -1 : ne.find(i, this, null, [l]).length), a[i] && o.push(r);
                        o.length && u.push({
                            elem: l,
                            handlers: o
                        })
                    }
            return l = this, s < t.length && u.push({
                elem: l,
                handlers: t.slice(s)
            }), u
        },
        addProp: function(e, t) {
            Object.defineProperty(ne.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: ne.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(e) {
            return e[ne.expando] ? e : new ne.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== T() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === T() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && i(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return i(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, ne.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, ne.Event = function(e, t) {
        if (!(this instanceof ne.Event)) return new ne.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? w : C, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && ne.extend(this, t), this.timeStamp = e && e.timeStamp || ne.now(), this[ne.expando] = !0
    }, ne.Event.prototype = {
        constructor: ne.Event,
        isDefaultPrevented: C,
        isPropagationStopped: C,
        isImmediatePropagationStopped: C,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = w, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = w, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = w, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ne.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && Re.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Be.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, ne.event.addProp), ne.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        ne.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this,
                    i = e.relatedTarget,
                    o = e.handleObj;
                return i && (i === r || ne.contains(r, i)) || (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
            }
        }
    }), ne.fn.extend({
        on: function(e, t, n, r) {
            return E(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return E(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj, ne(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
            if ("object" == typeof e) {
                for (i in e) this.off(i, t, e[i]);
                return this
            }
            return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = C), this.each(function() {
                ne.event.remove(this, e, n, t)
            })
        }
    });
    var Me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        $e = /<script|<style|<link/i,
        ze = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _e = /^true\/(.*)/,
        Ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    ne.extend({
        htmlPrefilter: function(e) {
            return e.replace(Me, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, a, u = e.cloneNode(!0),
                s = ne.contains(e.ownerDocument, e);
            if (!(ee.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ne.isXMLDoc(e)))
                for (a = y(u), o = y(e), r = 0, i = o.length; r < i; r++) S(o[r], a[r]);
            if (t)
                if (n)
                    for (o = o || y(e), a = a || y(u), r = 0, i = o.length; r < i; r++) D(o[r], a[r]);
                else D(e, u);
            return a = y(u, "script"), a.length > 0 && b(a, !s && y(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, r, i = ne.event.special, o = 0; void 0 !== (n = e[o]); o++)
                if (we(n)) {
                    if (t = n[Ce.expando]) {
                        if (t.events)
                            for (r in t.events) i[r] ? ne.event.remove(n, r) : ne.removeEvent(n, r, t.handle);
                        n[Ce.expando] = void 0
                    }
                    n[Te.expando] && (n[Te.expando] = void 0)
                }
        }
    }), ne.fn.extend({
        detach: function(e) {
            return j(this, e, !0)
        },
        remove: function(e) {
            return j(this, e)
        },
        text: function(e) {
            return xe(this, function(e) {
                return void 0 === e ? ne.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || N(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = N(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (ne.cleanData(y(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return ne.clone(this, e, t)
            })
        },
        html: function(e) {
            return xe(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !$e.test(e) && !He[(Oe.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = ne.htmlPrefilter(e);
                    try {
                        for (; n < r; n++) t = this[n] || {}, 1 === t.nodeType && (ne.cleanData(y(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return L(this, arguments, function(t) {
                var n = this.parentNode;
                ne.inArray(this, e) < 0 && (ne.cleanData(y(this)), n && n.replaceChild(t, this))
            }, e)
        }
    }), ne.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        ne.fn[e] = function(e) {
            for (var n, r = [], i = ne(e), o = i.length - 1, a = 0; a <= o; a++) n = a === o ? this : this.clone(!0), ne(i[a])[t](n), X.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var Ve = /^margin/,
        Xe = new RegExp("^(" + Ae + ")(?!px)[a-z%]+$", "i"),
        Qe = function(t) {
            var n = t.ownerDocument.defaultView;
            return n && n.opener || (n = e), n.getComputedStyle(t)
        };
    ! function() {
        function t() {
            if (u) {
                u.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", u.innerHTML = "", Ie.appendChild(a);
                var t = e.getComputedStyle(u);
                n = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, u.style.marginRight = "50%", i = "4px" === t.marginRight, Ie.removeChild(a), u = null
            }
        }
        var n, r, i, o, a = z.createElement("div"),
            u = z.createElement("div");
        u.style && (u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", ee.clearCloneStyle = "content-box" === u.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(u), ne.extend(ee, {
            pixelPosition: function() {
                return t(), n
            },
            boxSizingReliable: function() {
                return t(), r
            },
            pixelMarginRight: function() {
                return t(), i
            },
            reliableMarginLeft: function() {
                return t(), o
            }
        }))
    }();
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Ge = /^--/,
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Je = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ze = ["Webkit", "Moz", "ms"],
        et = z.createElement("div").style;
    ne.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = q(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, u = ne.camelCase(t),
                        s = Ge.test(t),
                        l = e.style;
                    if (s || (t = H(u)), a = ne.cssHooks[t] || ne.cssHooks[u], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    o = typeof n, "string" === o && (i = ke.exec(n)) && i[1] && (n = g(e, t, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (ne.cssNumber[u] ? "" : "px")), ee.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (s ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, u = ne.camelCase(t);
                return Ge.test(t) || (t = H(u)), a = ne.cssHooks[t] || ne.cssHooks[u], a && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = q(e, t, r)), "normal" === i && t in Je && (i = Je[t]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }), ne.each(["height", "width"], function(e, t) {
            ne.cssHooks[t] = {
                get: function(e, n, r) {
                    if (n) return !Ye.test(ne.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? R(e, t, r) : Le(e, Ke, function() {
                        return R(e, t, r)
                    })
                },
                set: function(e, n, r) {
                    var i, o = r && Qe(e),
                        a = r && I(e, t, r, "border-box" === ne.css(e, "boxSizing", !1, o), o);
                    return a && (i = ke.exec(n)) && "px" !== (i[3] || "px") && (e.style[t] = n, n = ne.css(e, t)), P(e, n, a)
                }
            }
        }), ne.cssHooks.marginLeft = O(ee.reliableMarginLeft, function(e, t) {
            if (t) return (parseFloat(q(e, "marginLeft")) || e.getBoundingClientRect().left - Le(e, {
                marginLeft: 0
            }, function() {
                return e.getBoundingClientRect().left
            })) + "px"
        }), ne.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            ne.cssHooks[e + t] = {
                expand: function(n) {
                    for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) i[e + De[r] + t] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, Ve.test(e) || (ne.cssHooks[e + t].set = P)
        }), ne.fn.extend({
            css: function(e, t) {
                return xe(this, function(e, t, n) {
                    var r, i, o = {},
                        a = 0;
                    if (Array.isArray(t)) {
                        for (r = Qe(e), i = t.length; a < i; a++) o[t[a]] = ne.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? ne.style(e, t, n) : ne.css(e, t)
                }, e, t, arguments.length > 1)
            }
        }), ne.fn.delay = function(t, n) {
            return t = ne.fx ? ne.fx.speeds[t] || t : t, n = n || "fx", this.queue(n, function(n, r) {
                var i = e.setTimeout(n, t);
                r.stop = function() {
                    e.clearTimeout(i)
                }
            })
        },
        function() {
            var e = z.createElement("input"),
                t = z.createElement("select"),
                n = t.appendChild(z.createElement("option"));
            e.type = "checkbox", ee.checkOn = "" !== e.value, ee.optSelected = n.selected, e = z.createElement("input"), e.value = "t", e.type = "radio", ee.radioValue = "t" === e.value
        }();
    var tt, nt = ne.expr.attrHandle;
    ne.fn.extend({
        attr: function(e, t) {
            return xe(this, ne.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ne.removeAttr(this, e)
            })
        }
    }), ne.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return void 0 === e.getAttribute ? ne.prop(e, t, n) : (1 === o && ne.isXMLDoc(e) || (i = ne.attrHooks[t.toLowerCase()] || (ne.expr.match.bool.test(t) ? tt : void 0)), void 0 !== n ? null === n ? void ne.removeAttr(e, t) : i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""), n) : i && "get" in i && null !== (r = i.get(e, t)) ? r : (r = ne.find.attr(e, t), null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ee.radioValue && "radio" === t && i(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r = 0,
                i = t && t.match(me);
            if (i && 1 === e.nodeType)
                for (; n = i[r++];) e.removeAttribute(n)
        }
    }), tt = {
        set: function(e, t, n) {
            return !1 === t ? ne.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, ne.each(ne.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = nt[t] || ne.find.attr;
        nt[t] = function(e, t, r) {
            var i, o, a = t.toLowerCase();
            return r || (o = nt[a], nt[a] = i, i = null != n(e, t, r) ? a : null, nt[a] = o), i
        }
    });
    var rt = /^(?:input|select|textarea|button)$/i,
        it = /^(?:a|area)$/i;
    ne.fn.extend({
        prop: function(e, t) {
            return xe(this, ne.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[ne.propFix[e] || e]
            })
        }
    }), ne.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ne.isXMLDoc(e) || (t = ne.propFix[t] || t, i = ne.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ne.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : rt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), ee.optSelected || (ne.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    }), ne.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        ne.propFix[this.toLowerCase()] = this
    }), ne.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (ne.isFunction(e)) return this.each(function(t) {
                ne(this).addClass(e.call(this, t, W(this)))
            });
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[s++];)
                    if (i = W(n), r = 1 === n.nodeType && " " + B(i) + " ") {
                        for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        u = B(r), i !== u && n.setAttribute("class", u)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, a, u, s = 0;
            if (ne.isFunction(e)) return this.each(function(t) {
                ne(this).removeClass(e.call(this, t, W(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(me) || []; n = this[s++];)
                    if (i = W(n), r = 1 === n.nodeType && " " + B(i) + " ") {
                        for (a = 0; o = t[a++];)
                            for (; r.indexOf(" " + o + " ") > -1;) r = r.replace(" " + o + " ", " ");
                        u = B(r), i !== u && n.setAttribute("class", u)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ne.isFunction(e) ? this.each(function(n) {
                ne(this).toggleClass(e.call(this, n, W(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0, i = ne(this), o = e.match(me) || []; t = o[r++];) i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else void 0 !== e && "boolean" !== n || (t = W(this), t && Ce.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Ce.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++];)
                if (1 === n.nodeType && (" " + B(W(n)) + " ").indexOf(t) > -1) return !0;
            return !1
        }
    });
    var ot = /\r/g;
    ne.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            return arguments.length ? (r = ne.isFunction(e), this.each(function(n) {
                var i;
                1 === this.nodeType && (i = r ? e.call(this, n, ne(this).val()) : e, null == i ? i = "" : "number" == typeof i ? i += "" : Array.isArray(i) && (i = ne.map(i, function(e) {
                    return null == e ? "" : e + ""
                })), (t = ne.valHooks[this.type] || ne.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i))
            })) : i ? (t = ne.valHooks[i.type] || ne.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(ot, "") : null == n ? "" : n) : void 0
        }
    }), ne.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ne.find.attr(e, "value");
                    return null != t ? t : B(ne.text(e))
                }
            },
            select: {
                get: function(e) {
                    var t, n, r, o = e.options,
                        a = e.selectedIndex,
                        u = "select-one" === e.type,
                        s = u ? null : [],
                        l = u ? a + 1 : o.length;
                    for (r = a < 0 ? l : u ? a : 0; r < l; r++)
                        if (n = o[r], (n.selected || r === a) && !n.disabled && (!n.parentNode.disabled || !i(n.parentNode, "optgroup"))) {
                            if (t = ne(n).val(), u) return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = ne.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ne.inArray(ne.valHooks.option.get(r), o) > -1) && (n = !0);
                    return n || (e.selectedIndex = -1), o
                }
            }
        }
    }), ne.each(["radio", "checkbox"], function() {
        ne.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = ne.inArray(ne(e).val(), t) > -1
            }
        }, ee.checkOn || (ne.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var at = /^(?:focusinfocus|focusoutblur)$/;
    ne.extend(ne.event, {
        trigger: function(t, n, r, i) {
            var o, a, u, s, l, c, f, d = [r || z],
                p = K.call(t, "type") ? t.type : t,
                h = K.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = u = r = r || z, 3 !== r.nodeType && 8 !== r.nodeType && !at.test(p + ne.event.triggered) && (p.indexOf(".") > -1 && (h = p.split("."), p = h.shift(), h.sort()), l = p.indexOf(":") < 0 && "on" + p, t = t[ne.expando] ? t : new ne.Event(p, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : ne.makeArray(n, [t]), f = ne.event.special[p] || {}, i || !f.trigger || !1 !== f.trigger.apply(r, n))) {
                if (!i && !f.noBubble && !ne.isWindow(r)) {
                    for (s = f.delegateType || p, at.test(s + p) || (a = a.parentNode); a; a = a.parentNode) d.push(a), u = a;
                    u === (r.ownerDocument || z) && d.push(u.defaultView || u.parentWindow || e)
                }
                for (o = 0;
                    (a = d[o++]) && !t.isPropagationStopped();) t.type = o > 1 ? s : f.bindType || p, c = (Ce.get(a, "events") || {})[t.type] && Ce.get(a, "handle"), c && c.apply(a, n), (c = l && a[l]) && c.apply && we(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());
                return t.type = p, i || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(d.pop(), n) || !we(r) || l && ne.isFunction(r[p]) && !ne.isWindow(r) && (u = r[l], u && (r[l] = null), ne.event.triggered = p, r[p](), ne.event.triggered = void 0, u && (r[l] = u)), t.result
            }
        },
        simulate: function(e, t, n) {
            var r = ne.extend(new ne.Event, n, {
                type: e,
                isSimulated: !0
            });
            ne.event.trigger(r, null, t)
        }
    }), ne.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                ne.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return ne.event.trigger(e, t, n, !0)
        }
    }), ne.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, t) {
        ne.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), ne.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), ee.focusin = "onfocusin" in e, ee.focusin || ne.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            ne.event.simulate(t, e.target, ne.event.fix(e))
        };
        ne.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this,
                    i = Ce.access(r, t);
                i || r.addEventListener(e, n, !0), Ce.access(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this,
                    i = Ce.access(r, t) - 1;
                i ? Ce.access(r, t, i) : (r.removeEventListener(e, n, !0), Ce.remove(r, t))
            }
        }
    });
    var ut = /\[\]$/,
        st = /\r?\n/g,
        lt = /^(?:submit|button|image|reset|file)$/i,
        ct = /^(?:input|select|textarea|keygen)/i;
    ne.param = function(e, t) {
        var n, r = [],
            i = function(e, t) {
                var n = ne.isFunction(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
        if (Array.isArray(e) || e.jquery && !ne.isPlainObject(e)) ne.each(e, function() {
            i(this.name, this.value)
        });
        else
            for (n in e) M(n, e[n], t, i);
        return r.join("&")
    }, ne.fn.extend({
        serialize: function() {
            return ne.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ne.prop(this, "elements");
                return e ? ne.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ne(this).is(":disabled") && ct.test(this.nodeName) && !lt.test(e) && (this.checked || !qe.test(e))
            }).map(function(e, t) {
                var n = ne(this).val();
                return null == n ? null : Array.isArray(n) ? ne.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(st, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(st, "\r\n")
                }
            }).get()
        }
    }), ne.fn.extend({
        wrapAll: function(e) {
            var t;
            return this[0] && (ne.isFunction(e) && (e = e.call(this[0])), t = ne(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(e) {
            return ne.isFunction(e) ? this.each(function(t) {
                ne(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ne(this),
                    n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ne.isFunction(e);
            return this.each(function(n) {
                ne(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                ne(this).replaceWith(this.childNodes)
            }), this
        }
    }), ne.expr.pseudos.hidden = function(e) {
        return !ne.expr.pseudos.visible(e)
    }, ne.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, ee.createHTMLDocument = function() {
        var e = z.implementation.createHTMLDocument("").body;
        return e.innerHTML = "<form></form><form></form>", 2 === e.childNodes.length
    }(), ne.parseHTML = function(e, t, n) {
        if ("string" != typeof e) return [];
        "boolean" == typeof t && (n = t, t = !1);
        var r, i, o;
        return t || (ee.createHTMLDocument ? (t = z.implementation.createHTMLDocument(""), r = t.createElement("base"), r.href = z.location.href, t.head.appendChild(r)) : t = z), i = fe.exec(e), o = !n && [], i ? [t.createElement(i[1])] : (i = x([e], t, o), o && o.length && ne(o).remove(), ne.merge([], i.childNodes))
    }, ne.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, a, u, s, l, c = ne.css(e, "position"),
                f = ne(e),
                d = {};
            "static" === c && (e.style.position = "relative"), u = f.offset(), o = ne.css(e, "top"), s = ne.css(e, "left"), l = ("absolute" === c || "fixed" === c) && (o + s).indexOf("auto") > -1, l ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(s) || 0), ne.isFunction(t) && (t = t.call(e, n, ne.extend({}, u))), null != t.top && (d.top = t.top - u.top + a), null != t.left && (d.left = t.left - u.left + i), "using" in t ? t.using.call(e, d) : f.css(d)
        }
    }, ne.fn.extend({
        offset: function(e) {
            if (arguments.length) return void 0 === e ? this : this.each(function(t) {
                ne.offset.setOffset(this, e, t)
            });
            var t, n, r, i, o = this[0];
            return o ? o.getClientRects().length ? (r = o.getBoundingClientRect(), t = o.ownerDocument, n = t.documentElement, i = t.defaultView, {
                top: r.top + i.pageYOffset - n.clientTop,
                left: r.left + i.pageXOffset - n.clientLeft
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                return "fixed" === ne.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), i(e[0], "html") || (r = e.offset()), r = {
                    top: r.top + ne.css(e[0], "borderTopWidth", !0),
                    left: r.left + ne.css(e[0], "borderLeftWidth", !0)
                }), {
                    top: t.top - r.top - ne.css(n, "marginTop", !0),
                    left: t.left - r.left - ne.css(n, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === ne.css(e, "position");) e = e.offsetParent;
                return e || Ie
            })
        }
    }), ne.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = "pageYOffset" === t;
        ne.fn[e] = function(r) {
            return xe(this, function(e, r, i) {
                var o;
                if (ne.isWindow(e) ? o = e : 9 === e.nodeType && (o = e.defaultView), void 0 === i) return o ? o[t] : e[r];
                o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : e[r] = i
            }, e, r, arguments.length)
        }
    }), ne.each(["top", "left"], function(e, t) {
        ne.cssHooks[t] = O(ee.pixelPosition, function(e, n) {
            if (n) return n = q(e, t), Xe.test(n) ? ne(e).position()[t] + "px" : n
        })
    }), ne.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        ne.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            ne.fn[r] = function(i, o) {
                var a = arguments.length && (n || "boolean" != typeof i),
                    u = n || (!0 === i || !0 === o ? "margin" : "border");
                return xe(this, function(t, n, i) {
                    var o;
                    return ne.isWindow(t) ? 0 === r.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === i ? ne.css(t, n, u) : ne.style(t, n, i, u)
                }, t, a ? i : void 0, a)
            }
        })
    }), ne.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), ne.holdReady = function(e) {
        e ? ne.readyWait++ : ne.ready(!0)
    }, ne.isArray = Array.isArray, ne.parseJSON = JSON.parse, ne.nodeName = i, "function" == typeof define && define.amd && define("jquery", [], function() {
        return ne
    });
    var ft = e.jQuery,
        dt = e.$;
    return ne.noConflict = function(t) {
        return e.$ === ne && (e.$ = dt), t && e.jQuery === ne && (e.jQuery = ft), ne
    }, t || (e.jQuery = e.$ = ne), ne
});