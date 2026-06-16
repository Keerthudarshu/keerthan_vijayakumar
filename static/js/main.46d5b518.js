/*! For license information please see main.46d5b518.js.LICENSE.txt */
(() => {
    var e = {
            45: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var r = n(8587);

                function o(e, t) {
                    if (null == e) return {};
                    var n, o, i = (0, r.A)(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < a.length; o++) n = a[o], -1 === t.indexOf(n) && {}.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                    }
                    return i
                }
            },
            117: (e, t, n) => {
                "use strict";

                function r(e) {
                    if ("undefined" === typeof Proxy) return e;
                    const t = new Map;
                    return new Proxy((function() {
                        return e(...arguments)
                    }), {
                        get: (n, r) => "create" === r ? e : (t.has(r) || t.set(r, e(r)), t.get(r))
                    })
                }
                n.d(t, {
                    P: () => is
                });
                var o = n(9379);

                function i(e) {
                    return null !== e && "object" === typeof e && "function" === typeof e.start
                }
                var a = n(45);

                function s(e) {
                    const t = [{}, {}];
                    return null === e || void 0 === e || e.values.forEach(((e, n) => {
                        t[0][n] = e.get(), t[1][n] = e.getVelocity()
                    })), t
                }

                function l(e, t, n, r) {
                    if ("function" === typeof t) {
                        const [o, i] = s(r);
                        t = t(void 0 !== n ? n : e.custom, o, i)
                    }
                    if ("string" === typeof t && (t = e.variants && e.variants[t]), "function" === typeof t) {
                        const [o, i] = s(r);
                        t = t(void 0 !== n ? n : e.custom, o, i)
                    }
                    return t
                }

                function u(e, t, n) {
                    const r = e.getProps();
                    return l(r, t, void 0 !== n ? n : r.custom, e)
                }

                function c(e) {
                    let t;
                    return () => (void 0 === t && (t = e()), t)
                }
                const d = c((() => void 0 !== window.ScrollTimeline));
                class f {
                    constructor(e) {
                        this.stop = () => this.runAll("stop"), this.animations = e.filter(Boolean)
                    }
                    get finished() {
                        return Promise.all(this.animations.map((e => "finished" in e ? e.finished : e)))
                    }
                    getAll(e) {
                        return this.animations[0][e]
                    }
                    setAll(e, t) {
                        for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                    }
                    attachTimeline(e, t) {
                        const n = this.animations.map((n => d() && n.attachTimeline ? n.attachTimeline(e) : "function" === typeof t ? t(n) : void 0));
                        return () => {
                            n.forEach(((e, t) => {
                                e && e(), this.animations[t].stop()
                            }))
                        }
                    }
                    get time() {
                        return this.getAll("time")
                    }
                    set time(e) {
                        this.setAll("time", e)
                    }
                    get speed() {
                        return this.getAll("speed")
                    }
                    set speed(e) {
                        this.setAll("speed", e)
                    }
                    get startTime() {
                        return this.getAll("startTime")
                    }
                    get duration() {
                        let e = 0;
                        for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                        return e
                    }
                    runAll(e) {
                        this.animations.forEach((t => t[e]()))
                    }
                    flatten() {
                        this.runAll("flatten")
                    }
                    play() {
                        this.runAll("play")
                    }
                    pause() {
                        this.runAll("pause")
                    }
                    cancel() {
                        this.runAll("cancel")
                    }
                    complete() {
                        this.runAll("complete")
                    }
                }
                class h extends f {
                    then(e, t) {
                        return Promise.all(this.animations).then(e).catch(t)
                    }
                }

                function p(e, t) {
                    return e ? e[t] || e.default || e : void 0
                }
                const m = 2e4;

                function v(e) {
                    let t = 0;
                    let n = e.next(t);
                    for (; !n.done && t < m;) t += 50, n = e.next(t);
                    return t >= m ? 1 / 0 : t
                }

                function g(e) {
                    return "function" === typeof e
                }

                function y(e, t) {
                    e.timeline = t, e.onfinish = null
                }
                const b = e => Array.isArray(e) && "number" === typeof e[0],
                    w = {
                        linearEasing: void 0
                    };

                function x(e, t) {
                    const n = c(e);
                    return () => {
                        var e;
                        return null !== (e = w[t]) && void 0 !== e ? e : n()
                    }
                }
                const S = x((() => {
                        try {
                            document.createElement("div").animate({
                                opacity: 0
                            }, {
                                easing: "linear(0, 1)"
                            })
                        } catch (e) {
                            return !1
                        }
                        return !0
                    }), "linearEasing"),
                    E = (e, t, n) => {
                        const r = t - e;
                        return 0 === r ? 1 : (n - e) / r
                    },
                    k = function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                            r = "";
                        const o = Math.max(Math.round(t / n), 2);
                        for (let i = 0; i < o; i++) r += e(E(0, o - 1, i)) + ", ";
                        return "linear(".concat(r.substring(0, r.length - 2), ")")
                    };

                function A(e) {
                    return Boolean("function" === typeof e && S() || !e || "string" === typeof e && (e in T || S()) || b(e) || Array.isArray(e) && e.every(A))
                }
                const C = e => {
                        let [t, n, r, o] = e;
                        return "cubic-bezier(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(o, ")")
                    },
                    T = {
                        linear: "linear",
                        ease: "ease",
                        easeIn: "ease-in",
                        easeOut: "ease-out",
                        easeInOut: "ease-in-out",
                        circIn: C([0, .65, .55, 1]),
                        circOut: C([.55, 0, 1, .45]),
                        backIn: C([.31, .01, .66, -.59]),
                        backOut: C([.33, 1.53, .69, .99])
                    };

                function P(e, t) {
                    return e ? "function" === typeof e && S() ? k(e, t) : b(e) ? C(e) : Array.isArray(e) ? e.map((e => P(e, t) || T.easeOut)) : T[e] : void 0
                }
                const _ = {
                    x: !1,
                    y: !1
                };

                function F() {
                    return _.x || _.y
                }

                function R(e, t) {
                    const n = function(e, t, n) {
                            var r;
                            if (e instanceof EventTarget) return [e];
                            if ("string" === typeof e) {
                                let o = document;
                                t && (o = t.current);
                                const i = null !== (r = null === n || void 0 === n ? void 0 : n[e]) && void 0 !== r ? r : o.querySelectorAll(e);
                                return i ? Array.from(i) : []
                            }
                            return Array.from(e)
                        }(e),
                        r = new AbortController;
                    return [n, (0, o.A)((0, o.A)({
                        passive: !0
                    }, t), {}, {
                        signal: r.signal
                    }), () => r.abort()]
                }

                function D(e) {
                    return !("touch" === e.pointerType || F())
                }
                const L = (e, t) => !!t && (e === t || L(e, t.parentElement)),
                    M = e => "mouse" === e.pointerType ? "number" !== typeof e.button || e.button <= 0 : !1 !== e.isPrimary,
                    O = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
                const j = new WeakSet;

                function N(e) {
                    return t => {
                        "Enter" === t.key && e(t)
                    }
                }

                function V(e, t) {
                    e.dispatchEvent(new PointerEvent("pointer" + t, {
                        isPrimary: !0,
                        bubbles: !0
                    }))
                }

                function I(e) {
                    return M(e) && !F()
                }

                function z(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const [r, o, i] = R(e, n), a = e => {
                        const n = e.currentTarget;
                        if (!n || !I(e) || j.has(n)) return;
                        if (j.add(n), n.setPointerCapture && void 0 !== e.pointerId) try {
                            n.setPointerCapture(e.pointerId)
                        } catch (l) {}
                        const r = t(n, e),
                            i = (e, t) => {
                                if (n.removeEventListener("pointerup", a), n.removeEventListener("pointercancel", s), n.releasePointerCapture && void 0 !== e.pointerId) try {
                                    n.releasePointerCapture(e.pointerId)
                                } catch (l) {}
                                I(e) && j.has(n) && (j.delete(n), "function" === typeof r && r(e, {
                                    success: t
                                }))
                            },
                            a = e => {
                                const t = !!e.isTrusted && (r = e, o = n instanceof Element ? n.getBoundingClientRect() : {
                                    left: 0,
                                    top: 0,
                                    right: window.innerWidth,
                                    bottom: window.innerHeight
                                }, r.clientX < o.left || r.clientX > o.right || r.clientY < o.top || r.clientY > o.bottom);
                                var r, o;
                                i(e, !t && (!(n instanceof Element) || L(n, e.target)))
                            },
                            s = e => {
                                i(e, !1)
                            };
                        n.addEventListener("pointerup", a, o), n.addEventListener("pointercancel", s, o), n.addEventListener("lostpointercapture", s, o)
                    };
                    return r.forEach((e => {
                        let t = !1;
                        var r;
                        (e = n.useGlobalTarget ? window : e) instanceof HTMLElement && (t = !0, r = e, O.has(r.tagName) || -1 !== r.tabIndex || null !== e.getAttribute("tabindex") || (e.tabIndex = 0)), e.addEventListener("pointerdown", a, o), t && e.addEventListener("focus", (e => ((e, t) => {
                            const n = e.currentTarget;
                            if (!n) return;
                            const r = N((() => {
                                if (j.has(n)) return;
                                V(n, "down");
                                const e = N((() => {
                                    V(n, "up")
                                }));
                                n.addEventListener("keyup", e, t), n.addEventListener("blur", (() => V(n, "cancel")), t)
                            }));
                            n.addEventListener("keydown", r, t), n.addEventListener("blur", (() => n.removeEventListener("keydown", r)), t)
                        })(e, o)), o)
                    })), i
                }
                const B = e => 1e3 * e,
                    U = e => e / 1e3,
                    H = e => e;
                const W = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                    $ = new Set(W),
                    K = new Set(["width", "height", "top", "left", "right", "bottom", ...W]),
                    Y = e => Array.isArray(e),
                    q = !1,
                    Q = !1,
                    G = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"],
                    X = {
                        value: null,
                        addProjectionMetrics: null
                    };

                function Z(e, t) {
                    let n = !1,
                        r = !0;
                    const o = {
                            delta: 0,
                            timestamp: 0,
                            isProcessing: !1
                        },
                        i = () => n = !0,
                        a = G.reduce(((e, n) => (e[n] = function(e, t) {
                            let n = new Set,
                                r = new Set,
                                o = !1,
                                i = !1;
                            const a = new WeakSet;
                            let s = {
                                    delta: 0,
                                    timestamp: 0,
                                    isProcessing: !1
                                },
                                l = 0;

                            function u(t) {
                                a.has(t) && (c.schedule(t), e()), l++, t(s)
                            }
                            const c = {
                                schedule: function(e) {
                                    const t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2] && o ? n : r;
                                    return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] && a.add(e), t.has(e) || t.add(e), e
                                },
                                cancel: e => {
                                    r.delete(e), a.delete(e)
                                },
                                process: e => {
                                    s = e, o ? i = !0 : (o = !0, [n, r] = [r, n], n.forEach(u), t && X.value && X.value.frameloop[t].push(l), l = 0, n.clear(), o = !1, i && (i = !1, c.process(e)))
                                }
                            };
                            return c
                        }(i, t ? n : void 0), e)), {}),
                        {
                            read: s,
                            resolveKeyframes: l,
                            update: u,
                            preRender: c,
                            render: d,
                            postRender: f
                        } = a,
                        h = () => {
                            const i = Q ? o.timestamp : performance.now();
                            n = !1, Q || (o.delta = r ? 1e3 / 60 : Math.max(Math.min(i - o.timestamp, 40), 1)), o.timestamp = i, o.isProcessing = !0, s.process(o), l.process(o), u.process(o), c.process(o), d.process(o), f.process(o), o.isProcessing = !1, n && t && (r = !1, e(h))
                        },
                        p = G.reduce(((t, i) => {
                            const s = a[i];
                            return t[i] = function(t) {
                                let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                                return n || (n = !0, r = !0, o.isProcessing || e(h)), s.schedule(t, i, a)
                            }, t
                        }), {});
                    return {
                        schedule: p,
                        cancel: e => {
                            for (let t = 0; t < G.length; t++) a[G[t]].cancel(e)
                        },
                        state: o,
                        steps: a
                    }
                }
                const {
                    schedule: J,
                    cancel: ee,
                    state: te,
                    steps: ne
                } = Z("undefined" !== typeof requestAnimationFrame ? requestAnimationFrame : H, !0);
                let re;

                function oe() {
                    re = void 0
                }
                const ie = {
                    now: () => (void 0 === re && ie.set(te.isProcessing || Q ? te.timestamp : performance.now()), re),
                    set: e => {
                        re = e, queueMicrotask(oe)
                    }
                };

                function ae(e, t) {
                    -1 === e.indexOf(t) && e.push(t)
                }

                function se(e, t) {
                    const n = e.indexOf(t);
                    n > -1 && e.splice(n, 1)
                }
                class le {
                    constructor() {
                        this.subscriptions = []
                    }
                    add(e) {
                        return ae(this.subscriptions, e), () => se(this.subscriptions, e)
                    }
                    notify(e, t, n) {
                        const r = this.subscriptions.length;
                        if (r)
                            if (1 === r) this.subscriptions[0](e, t, n);
                            else
                                for (let o = 0; o < r; o++) {
                                    const r = this.subscriptions[o];
                                    r && r(e, t, n)
                                }
                    }
                    getSize() {
                        return this.subscriptions.length
                    }
                    clear() {
                        this.subscriptions.length = 0
                    }
                }

                function ue(e, t) {
                    return t ? e * (1e3 / t) : 0
                }
                const ce = {
                    current: void 0
                };
                class de {
                    constructor(e) {
                        var t = this;
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.version = "12.4.4", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = function(e) {
                            let n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                            const r = ie.now();
                            t.updatedAt !== r && t.setPrevFrameValue(), t.prev = t.current, t.setCurrent(e), t.current !== t.prev && t.events.change && t.events.change.notify(t.current), n && t.events.renderRequest && t.events.renderRequest.notify(t.current)
                        }, this.hasAnimated = !1, this.setCurrent(e), this.owner = n.owner
                    }
                    setCurrent(e) {
                        var t;
                        this.current = e, this.updatedAt = ie.now(), null === this.canTrackVelocity && void 0 !== e && (this.canTrackVelocity = (t = this.current, !isNaN(parseFloat(t))))
                    }
                    setPrevFrameValue() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.current;
                        this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt
                    }
                    onChange(e) {
                        return this.on("change", e)
                    }
                    on(e, t) {
                        this.events[e] || (this.events[e] = new le);
                        const n = this.events[e].add(t);
                        return "change" === e ? () => {
                            n(), J.read((() => {
                                this.events.change.getSize() || this.stop()
                            }))
                        } : n
                    }
                    clearListeners() {
                        for (const e in this.events) this.events[e].clear()
                    }
                    attach(e, t) {
                        this.passiveEffect = e, this.stopPassiveEffect = t
                    }
                    set(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        t && this.passiveEffect ? this.passiveEffect(e, this.updateAndNotify) : this.updateAndNotify(e, t)
                    }
                    setWithVelocity(e, t, n) {
                        this.set(t), this.prev = void 0, this.prevFrameValue = e, this.prevUpdatedAt = this.updatedAt - n
                    }
                    jump(e) {
                        let t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        this.updateAndNotify(e), this.prev = e, this.prevUpdatedAt = this.prevFrameValue = void 0, t && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                    }
                    get() {
                        return ce.current && ce.current.push(this), this.current
                    }
                    getPrevious() {
                        return this.prev
                    }
                    getVelocity() {
                        const e = ie.now();
                        if (!this.canTrackVelocity || void 0 === this.prevFrameValue || e - this.updatedAt > 30) return 0;
                        const t = Math.min(this.updatedAt - this.prevUpdatedAt, 30);
                        return ue(parseFloat(this.current) - parseFloat(this.prevFrameValue), t)
                    }
                    start(e) {
                        return this.stop(), new Promise((t => {
                            this.hasAnimated = !0, this.animation = e(t), this.events.animationStart && this.events.animationStart.notify()
                        })).then((() => {
                            this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                        }))
                    }
                    stop() {
                        this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                    }
                    isAnimating() {
                        return !!this.animation
                    }
                    clearAnimation() {
                        delete this.animation
                    }
                    destroy() {
                        this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                    }
                }

                function fe(e, t) {
                    return new de(e, t)
                }
                const he = ["transitionEnd", "transition"];

                function pe(e, t, n) {
                    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, fe(n))
                }
                const me = e => Boolean(e && e.getVelocity);

                function ve(e, t) {
                    const n = e.getValue("willChange");
                    if (r = n, Boolean(me(r) && r.add)) return n.add(t);
                    var r
                }
                const ge = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
                    ye = "data-" + ge("framerAppearId");

                function be(e) {
                    return e.props[ye]
                }
                const we = !1,
                    xe = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e;

                function Se(e, t, n, r) {
                    if (e === t && n === r) return H;
                    const o = t => function(e, t, n, r, o) {
                        let i, a, s = 0;
                        do {
                            a = t + (n - t) / 2, i = xe(a, r, o) - e, i > 0 ? n = a : t = a
                        } while (Math.abs(i) > 1e-7 && ++s < 12);
                        return a
                    }(t, 0, 1, e, n);
                    return e => 0 === e || 1 === e ? e : xe(o(e), t, r)
                }
                const Ee = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
                    ke = e => t => 1 - e(1 - t),
                    Ae = Se(.33, 1.53, .69, .99),
                    Ce = ke(Ae),
                    Te = Ee(Ce),
                    Pe = e => (e *= 2) < 1 ? .5 * Ce(e) : .5 * (2 - Math.pow(2, -10 * (e - 1))),
                    _e = e => 1 - Math.sin(Math.acos(e)),
                    Fe = ke(_e),
                    Re = Ee(_e),
                    De = e => /^0(?:[\0-\x08\x0E-\x1F!-\x2D\/-\x9F\xA1-\u167F\u1681-\u1FFF\u200B-\u2027\u202A-\u202E\u2030-\u205E\u2060-\u2FFF\u3001-\uD7FF\uE000-\uFEFE\uFF00-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+$/.test(e);
                const Le = (e, t, n) => n > t ? t : n < e ? e : n,
                    Me = {
                        test: e => "number" === typeof e,
                        parse: parseFloat,
                        transform: e => e
                    },
                    Oe = (0, o.A)((0, o.A)({}, Me), {}, {
                        transform: e => Le(0, 1, e)
                    }),
                    je = (0, o.A)((0, o.A)({}, Me), {}, {
                        default: 1
                    }),
                    Ne = e => Math.round(1e5 * e) / 1e5,
                    Ve = /-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/g;
                const Ie = /^(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))$/i,
                    ze = (e, t) => n => Boolean("string" === typeof n && Ie.test(n) && n.startsWith(e) || t && ! function(e) {
                        return null == e
                    }(n) && Object.prototype.hasOwnProperty.call(n, t)),
                    Be = (e, t, n) => r => {
                        if ("string" !== typeof r) return r;
                        const [o, i, a, s] = r.match(Ve);
                        return {
                            [e]: parseFloat(o),
                            [t]: parseFloat(i),
                            [n]: parseFloat(a),
                            alpha: void 0 !== s ? parseFloat(s) : 1
                        }
                    },
                    Ue = (0, o.A)((0, o.A)({}, Me), {}, {
                        transform: e => Math.round((e => Le(0, 255, e))(e))
                    }),
                    He = {
                        test: ze("rgb", "red"),
                        parse: Be("red", "green", "blue"),
                        transform: e => {
                            let {
                                red: t,
                                green: n,
                                blue: r,
                                alpha: o = 1
                            } = e;
                            return "rgba(" + Ue.transform(t) + ", " + Ue.transform(n) + ", " + Ue.transform(r) + ", " + Ne(Oe.transform(o)) + ")"
                        }
                    };
                const We = {
                        test: ze("#"),
                        parse: function(e) {
                            let t = "",
                                n = "",
                                r = "",
                                o = "";
                            return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), o = e.substring(4, 5), t += t, n += n, r += r, o += o), {
                                red: parseInt(t, 16),
                                green: parseInt(n, 16),
                                blue: parseInt(r, 16),
                                alpha: o ? parseInt(o, 16) / 255 : 1
                            }
                        },
                        transform: He.transform
                    },
                    $e = e => ({
                        test: t => "string" === typeof t && t.endsWith(e) && 1 === t.split(" ").length,
                        parse: parseFloat,
                        transform: t => "".concat(t).concat(e)
                    }),
                    Ke = $e("deg"),
                    Ye = $e("%"),
                    qe = $e("px"),
                    Qe = $e("vh"),
                    Ge = $e("vw"),
                    Xe = (0, o.A)((0, o.A)({}, Ye), {}, {
                        parse: e => Ye.parse(e) / 100,
                        transform: e => Ye.transform(100 * e)
                    }),
                    Ze = {
                        test: ze("hsl", "hue"),
                        parse: Be("hue", "saturation", "lightness"),
                        transform: e => {
                            let {
                                hue: t,
                                saturation: n,
                                lightness: r,
                                alpha: o = 1
                            } = e;
                            return "hsla(" + Math.round(t) + ", " + Ye.transform(Ne(n)) + ", " + Ye.transform(Ne(r)) + ", " + Ne(Oe.transform(o)) + ")"
                        }
                    },
                    Je = {
                        test: e => He.test(e) || We.test(e) || Ze.test(e),
                        parse: e => He.test(e) ? He.parse(e) : Ze.test(e) ? Ze.parse(e) : We.parse(e),
                        transform: e => "string" === typeof e ? e : e.hasOwnProperty("red") ? He.transform(e) : Ze.transform(e)
                    },
                    et = /(?:#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\))/gi;
                const tt = "number",
                    nt = "color",
                    rt = /var[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)|#[0-9a-f]{3,8}|(?:rgb|h[s\u017F]l)a?\((?:-?[\.0-9]+%?[\t-\r ,\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]+){2}-?[\.0-9]+%?[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:[,\/][\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)?(?:\b[0-9]+(?:\.[0-9]+)?|\.[0-9]+)?%?\)|-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)/gi;

                function ot(e) {
                    const t = e.toString(),
                        n = [],
                        r = {
                            color: [],
                            number: [],
                            var: []
                        },
                        o = [];
                    let i = 0;
                    const a = t.replace(rt, (e => (Je.test(e) ? (r.color.push(i), o.push(nt), n.push(Je.parse(e))) : e.startsWith("var(") ? (r.var.push(i), o.push("var"), n.push(e)) : (r.number.push(i), o.push(tt), n.push(parseFloat(e))), ++i, "${}"))).split("${}");
                    return {
                        values: n,
                        split: a,
                        indexes: r,
                        types: o
                    }
                }

                function it(e) {
                    return ot(e).values
                }

                function at(e) {
                    const {
                        split: t,
                        types: n
                    } = ot(e), r = t.length;
                    return e => {
                        let o = "";
                        for (let i = 0; i < r; i++)
                            if (o += t[i], void 0 !== e[i]) {
                                const t = n[i];
                                o += t === tt ? Ne(e[i]) : t === nt ? Je.transform(e[i]) : e[i]
                            }
                        return o
                    }
                }
                const st = e => "number" === typeof e ? 0 : e;
                const lt = {
                        test: function(e) {
                            var t, n;
                            return isNaN(e) && "string" === typeof e && ((null === (t = e.match(Ve)) || void 0 === t ? void 0 : t.length) || 0) + ((null === (n = e.match(et)) || void 0 === n ? void 0 : n.length) || 0) > 0
                        },
                        parse: it,
                        createTransformer: at,
                        getAnimatableNone: function(e) {
                            const t = it(e);
                            return at(e)(t.map(st))
                        }
                    },
                    ut = new Set(["brightness", "contrast", "saturate", "opacity"]);

                function ct(e) {
                    const [t, n] = e.slice(0, -1).split("(");
                    if ("drop-shadow" === t) return e;
                    const [r] = n.match(Ve) || [];
                    if (!r) return e;
                    const o = n.replace(r, "");
                    let i = ut.has(t) ? 1 : 0;
                    return r !== n && (i *= 100), t + "(" + i + o + ")"
                }
                const dt = /\b([\x2Da-z]*)\((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])*?\)/g,
                    ft = (0, o.A)((0, o.A)({}, lt), {}, {
                        getAnimatableNone: e => {
                            const t = e.match(dt);
                            return t ? t.map(ct).join(" ") : e
                        }
                    }),
                    ht = {
                        borderWidth: qe,
                        borderTopWidth: qe,
                        borderRightWidth: qe,
                        borderBottomWidth: qe,
                        borderLeftWidth: qe,
                        borderRadius: qe,
                        radius: qe,
                        borderTopLeftRadius: qe,
                        borderTopRightRadius: qe,
                        borderBottomRightRadius: qe,
                        borderBottomLeftRadius: qe,
                        width: qe,
                        maxWidth: qe,
                        height: qe,
                        maxHeight: qe,
                        top: qe,
                        right: qe,
                        bottom: qe,
                        left: qe,
                        padding: qe,
                        paddingTop: qe,
                        paddingRight: qe,
                        paddingBottom: qe,
                        paddingLeft: qe,
                        margin: qe,
                        marginTop: qe,
                        marginRight: qe,
                        marginBottom: qe,
                        marginLeft: qe,
                        backgroundPositionX: qe,
                        backgroundPositionY: qe
                    },
                    pt = {
                        rotate: Ke,
                        rotateX: Ke,
                        rotateY: Ke,
                        rotateZ: Ke,
                        scale: je,
                        scaleX: je,
                        scaleY: je,
                        scaleZ: je,
                        skew: Ke,
                        skewX: Ke,
                        skewY: Ke,
                        distance: qe,
                        translateX: qe,
                        translateY: qe,
                        translateZ: qe,
                        x: qe,
                        y: qe,
                        z: qe,
                        perspective: qe,
                        transformPerspective: qe,
                        opacity: Oe,
                        originX: Xe,
                        originY: Xe,
                        originZ: qe
                    },
                    mt = (0, o.A)((0, o.A)({}, Me), {}, {
                        transform: Math.round
                    }),
                    vt = (0, o.A)((0, o.A)((0, o.A)({}, ht), pt), {}, {
                        zIndex: mt,
                        size: qe,
                        fillOpacity: Oe,
                        strokeOpacity: Oe,
                        numOctaves: mt
                    }),
                    gt = (0, o.A)((0, o.A)({}, vt), {}, {
                        color: Je,
                        backgroundColor: Je,
                        outlineColor: Je,
                        fill: Je,
                        stroke: Je,
                        borderColor: Je,
                        borderTopColor: Je,
                        borderRightColor: Je,
                        borderBottomColor: Je,
                        borderLeftColor: Je,
                        filter: ft,
                        WebkitFilter: ft
                    }),
                    yt = e => gt[e];

                function bt(e, t) {
                    let n = yt(e);
                    return n !== ft && (n = lt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
                }
                const wt = new Set(["auto", "none", "0"]);
                const xt = e => e === Me || e === qe,
                    St = (e, t) => parseFloat(e.split(", ")[t]),
                    Et = (e, t) => (n, r) => {
                        let {
                            transform: o
                        } = r;
                        if ("none" === o || !o) return 0;
                        const i = o.match(/^matrix3d\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/);
                        if (i) return St(i[1], t); {
                            const t = o.match(/^matrix\(((?:[\0-\t\x0B\f\x0E-\u2027\u202A-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])+)\)$/);
                            return t ? St(t[1], e) : 0
                        }
                    },
                    kt = new Set(["x", "y", "z"]),
                    At = W.filter((e => !kt.has(e)));
                const Ct = {
                    width: (e, t) => {
                        let {
                            x: n
                        } = e, {
                            paddingLeft: r = "0",
                            paddingRight: o = "0"
                        } = t;
                        return n.max - n.min - parseFloat(r) - parseFloat(o)
                    },
                    height: (e, t) => {
                        let {
                            y: n
                        } = e, {
                            paddingTop: r = "0",
                            paddingBottom: o = "0"
                        } = t;
                        return n.max - n.min - parseFloat(r) - parseFloat(o)
                    },
                    top: (e, t) => {
                        let {
                            top: n
                        } = t;
                        return parseFloat(n)
                    },
                    left: (e, t) => {
                        let {
                            left: n
                        } = t;
                        return parseFloat(n)
                    },
                    bottom: (e, t) => {
                        let {
                            y: n
                        } = e, {
                            top: r
                        } = t;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    right: (e, t) => {
                        let {
                            x: n
                        } = e, {
                            left: r
                        } = t;
                        return parseFloat(r) + (n.max - n.min)
                    },
                    x: Et(4, 13),
                    y: Et(5, 14)
                };
                Ct.translateX = Ct.x, Ct.translateY = Ct.y;
                const Tt = new Set;
                let Pt = !1,
                    _t = !1;

                function Ft() {
                    if (_t) {
                        const e = Array.from(Tt).filter((e => e.needsMeasurement)),
                            t = new Set(e.map((e => e.element))),
                            n = new Map;
                        t.forEach((e => {
                            const t = function(e) {
                                const t = [];
                                return At.forEach((n => {
                                    const r = e.getValue(n);
                                    void 0 !== r && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0))
                                })), t
                            }(e);
                            t.length && (n.set(e, t), e.render())
                        })), e.forEach((e => e.measureInitialState())), t.forEach((e => {
                            e.render();
                            const t = n.get(e);
                            t && t.forEach((t => {
                                let [n, r] = t;
                                var o;
                                null === (o = e.getValue(n)) || void 0 === o || o.set(r)
                            }))
                        })), e.forEach((e => e.measureEndState())), e.forEach((e => {
                            void 0 !== e.suspendedScrollY && window.scrollTo(0, e.suspendedScrollY)
                        }))
                    }
                    _t = !1, Pt = !1, Tt.forEach((e => e.complete())), Tt.clear()
                }

                function Rt() {
                    Tt.forEach((e => {
                        e.readKeyframes(), e.needsMeasurement && (_t = !0)
                    }))
                }
                class Dt {
                    constructor(e, t, n, r, o) {
                        let i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...e], this.onComplete = t, this.name = n, this.motionValue = r, this.element = o, this.isAsync = i
                    }
                    scheduleResolve() {
                        this.isScheduled = !0, this.isAsync ? (Tt.add(this), Pt || (Pt = !0, J.read(Rt), J.resolveKeyframes(Ft))) : (this.readKeyframes(), this.complete())
                    }
                    readKeyframes() {
                        const {
                            unresolvedKeyframes: e,
                            name: t,
                            element: n,
                            motionValue: r
                        } = this;
                        for (let o = 0; o < e.length; o++)
                            if (null === e[o])
                                if (0 === o) {
                                    const o = null === r || void 0 === r ? void 0 : r.get(),
                                        i = e[e.length - 1];
                                    if (void 0 !== o) e[0] = o;
                                    else if (n && t) {
                                        const r = n.readValue(t, i);
                                        void 0 !== r && null !== r && (e[0] = r)
                                    }
                                    void 0 === e[0] && (e[0] = i), r && void 0 === o && r.set(e[0])
                                } else e[o] = e[o - 1]
                    }
                    setFinalKeyframe() {}
                    measureInitialState() {}
                    renderEndStyles() {}
                    measureEndState() {}
                    complete() {
                        this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Tt.delete(this)
                    }
                    cancel() {
                        this.isComplete || (this.isScheduled = !1, Tt.delete(this))
                    }
                    resume() {
                        this.isComplete || this.scheduleResolve()
                    }
                }
                let Lt = H,
                    Mt = H;
                const Ot = e => /^-?(?:[0-9]+(?:\.[0-9]+)?|\.[0-9]+)$/.test(e),
                    jt = e => t => "string" === typeof t && t.startsWith(e),
                    Nt = jt("--"),
                    Vt = jt("var(--"),
                    It = e => !!Vt(e) && zt.test(e.split("/*")[0].trim()),
                    zt = /var\(--(?:[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*|[\x2D0-9A-Z_a-z\u017F\u212A]+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*,(?:[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*(?:(?![\t-\r \(\)\xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uD800-\uDFFF\uFEFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*\((?:(?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])|\((?:(?![\(\)\uD800-\uDFFF])[^]|[\uD800-\uDBFF][\uDC00-\uDFFF])*\))*\))+[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*)\)$/i,
                    Bt = /^var\(--(?:([\x2D0-9A-Z_a-z]+)|([\x2D0-9A-Z_a-z]+), ?([ #%\(\),-\.0-9A-Za-z]+))\)/;

                function Ut(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    Mt(n <= 4, 'Max CSS variable fallback depth detected in property "'.concat(e, '". This may indicate a circular fallback dependency.'));
                    const [r, o] = function(e) {
                        const t = Bt.exec(e);
                        if (!t) return [, ];
                        const [, n, r, o] = t;
                        return ["--".concat(null !== n && void 0 !== n ? n : r), o]
                    }(e);
                    if (!r) return;
                    const i = window.getComputedStyle(t).getPropertyValue(r);
                    if (i) {
                        const e = i.trim();
                        return Ot(e) ? parseFloat(e) : e
                    }
                    return It(o) ? Ut(o, t, n + 1) : o
                }
                const Ht = e => t => t.test(e),
                    Wt = [Me, qe, Ye, Ke, Ge, Qe, {
                        test: e => "auto" === e,
                        parse: e => e
                    }],
                    $t = e => Wt.find(Ht(e));
                class Kt extends Dt {
                    constructor(e, t, n, r, o) {
                        super(e, t, n, r, o, !0)
                    }
                    readKeyframes() {
                        const {
                            unresolvedKeyframes: e,
                            element: t,
                            name: n
                        } = this;
                        if (!t || !t.current) return;
                        super.readKeyframes();
                        for (let s = 0; s < e.length; s++) {
                            let n = e[s];
                            if ("string" === typeof n && (n = n.trim(), It(n))) {
                                const r = Ut(n, t.current);
                                void 0 !== r && (e[s] = r), s === e.length - 1 && (this.finalKeyframe = n)
                            }
                        }
                        if (this.resolveNoneKeyframes(), !K.has(n) || 2 !== e.length) return;
                        const [r, o] = e, i = $t(r), a = $t(o);
                        if (i !== a)
                            if (xt(i) && xt(a))
                                for (let s = 0; s < e.length; s++) {
                                    const t = e[s];
                                    "string" === typeof t && (e[s] = parseFloat(t))
                                } else this.needsMeasurement = !0
                    }
                    resolveNoneKeyframes() {
                        const {
                            unresolvedKeyframes: e,
                            name: t
                        } = this, n = [];
                        for (let o = 0; o < e.length; o++)("number" === typeof(r = e[o]) ? 0 === r : null === r || "none" === r || "0" === r || De(r)) && n.push(o);
                        var r;
                        n.length && function(e, t, n) {
                            let r, o = 0;
                            for (; o < e.length && !r;) {
                                const t = e[o];
                                "string" === typeof t && !wt.has(t) && ot(t).values.length && (r = e[o]), o++
                            }
                            if (r && n)
                                for (const i of t) e[i] = bt(n, r)
                        }(e, n, t)
                    }
                    measureInitialState() {
                        const {
                            element: e,
                            unresolvedKeyframes: t,
                            name: n
                        } = this;
                        if (!e || !e.current) return;
                        "height" === n && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = Ct[n](e.measureViewportBox(), window.getComputedStyle(e.current)), t[0] = this.measuredOrigin;
                        const r = t[t.length - 1];
                        void 0 !== r && e.getValue(n, r).jump(r, !1)
                    }
                    measureEndState() {
                        var e;
                        const {
                            element: t,
                            name: n,
                            unresolvedKeyframes: r
                        } = this;
                        if (!t || !t.current) return;
                        const o = t.getValue(n);
                        o && o.jump(this.measuredOrigin, !1);
                        const i = r.length - 1,
                            a = r[i];
                        r[i] = Ct[n](t.measureViewportBox(), window.getComputedStyle(t.current)), null !== a && void 0 === this.finalKeyframe && (this.finalKeyframe = a), (null === (e = this.removedTransforms) || void 0 === e ? void 0 : e.length) && this.removedTransforms.forEach((e => {
                            let [n, r] = e;
                            t.getValue(n).set(r)
                        })), this.resolveNoneKeyframes()
                    }
                }
                const Yt = (e, t) => "zIndex" !== t && (!("number" !== typeof e && !Array.isArray(e)) || !("string" !== typeof e || !lt.test(e) && "0" !== e || e.startsWith("url(")));

                function qt(e, t, n, r) {
                    const o = e[0];
                    if (null === o) return !1;
                    if ("display" === t || "visibility" === t) return !0;
                    const i = e[e.length - 1],
                        a = Yt(o, t),
                        s = Yt(i, t);
                    return Lt(a === s, "You are trying to animate ".concat(t, ' from "').concat(o, '" to "').concat(i, '". ').concat(o, " is not an animatable value - to enable this animation set ").concat(o, " to a value animatable to ").concat(i, " via the `style` property.")), !(!a || !s) && (function(e) {
                        const t = e[0];
                        if (1 === e.length) return !0;
                        for (let n = 0; n < e.length; n++)
                            if (e[n] !== t) return !0
                    }(e) || ("spring" === n || g(n)) && r)
                }
                const Qt = e => null !== e;

                function Gt(e, t, n) {
                    let {
                        repeat: r,
                        repeatType: o = "loop"
                    } = t;
                    const i = e.filter(Qt),
                        a = r && "loop" !== o && r % 2 === 1 ? 0 : i.length - 1;
                    return a && void 0 !== n ? n : i[a]
                }
                const Xt = ["autoplay", "delay", "type", "repeat", "repeatDelay", "repeatType"];
                class Zt {
                    constructor(e) {
                        let {
                            autoplay: t = !0,
                            delay: n = 0,
                            type: r = "keyframes",
                            repeat: i = 0,
                            repeatDelay: s = 0,
                            repeatType: l = "loop"
                        } = e, u = (0, a.A)(e, Xt);
                        this.isStopped = !1, this.hasAttemptedResolve = !1, this.createdAt = ie.now(), this.options = (0, o.A)({
                            autoplay: t,
                            delay: n,
                            type: r,
                            repeat: i,
                            repeatDelay: s,
                            repeatType: l
                        }, u), this.updateFinishedPromise()
                    }
                    calcStartTime() {
                        return this.resolvedAt && this.resolvedAt - this.createdAt > 40 ? this.resolvedAt : this.createdAt
                    }
                    get resolved() {
                        return this._resolved || this.hasAttemptedResolve || (Rt(), Ft()), this._resolved
                    }
                    onKeyframesResolved(e, t) {
                        this.resolvedAt = ie.now(), this.hasAttemptedResolve = !0;
                        const {
                            name: n,
                            type: r,
                            velocity: i,
                            delay: a,
                            onComplete: s,
                            onUpdate: l,
                            isGenerator: u
                        } = this.options;
                        if (!u && !qt(e, n, r, i)) {
                            if (we || !a) return l && l(Gt(e, this.options, t)), s && s(), void this.resolveFinishedPromise();
                            this.options.duration = 0
                        }
                        const c = this.initPlayback(e, t);
                        !1 !== c && (this._resolved = (0, o.A)({
                            keyframes: e,
                            finalKeyframe: t
                        }, c), this.onPostResolved())
                    }
                    onPostResolved() {}
                    then(e, t) {
                        return this.currentFinishedPromise.then(e, t)
                    }
                    flatten() {
                        this.options.type = "keyframes", this.options.ease = "linear"
                    }
                    updateFinishedPromise() {
                        this.currentFinishedPromise = new Promise((e => {
                            this.resolveFinishedPromise = e
                        }))
                    }
                }
                const Jt = {
                        layout: 0,
                        mainThread: 0,
                        waapi: 0
                    },
                    en = (e, t, n) => e + (t - e) * n;

                function tn(e, t, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + 6 * (t - e) * n : n < .5 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
                }

                function nn(e, t) {
                    return n => n > 0 ? t : e
                }
                const rn = (e, t, n) => {
                        const r = e * e,
                            o = n * (t * t - r) + r;
                        return o < 0 ? 0 : Math.sqrt(o)
                    },
                    on = [We, He, Ze];

                function an(e) {
                    const t = (n = e, on.find((e => e.test(n))));
                    var n;
                    if (Lt(Boolean(t), "'".concat(e, "' is not an animatable color. Use the equivalent color code instead.")), !Boolean(t)) return !1;
                    let r = t.parse(e);
                    return t === Ze && (r = function(e) {
                        let {
                            hue: t,
                            saturation: n,
                            lightness: r,
                            alpha: o
                        } = e;
                        t /= 360, n /= 100, r /= 100;
                        let i = 0,
                            a = 0,
                            s = 0;
                        if (n) {
                            const e = r < .5 ? r * (1 + n) : r + n - r * n,
                                o = 2 * r - e;
                            i = tn(o, e, t + 1 / 3), a = tn(o, e, t), s = tn(o, e, t - 1 / 3)
                        } else i = a = s = r;
                        return {
                            red: Math.round(255 * i),
                            green: Math.round(255 * a),
                            blue: Math.round(255 * s),
                            alpha: o
                        }
                    }(r)), r
                }
                const sn = (e, t) => {
                        const n = an(e),
                            r = an(t);
                        if (!n || !r) return nn(e, t);
                        const i = (0, o.A)({}, n);
                        return e => (i.red = rn(n.red, r.red, e), i.green = rn(n.green, r.green, e), i.blue = rn(n.blue, r.blue, e), i.alpha = en(n.alpha, r.alpha, e), He.transform(i))
                    },
                    ln = (e, t) => n => t(e(n)),
                    un = function() {
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        return t.reduce(ln)
                    },
                    cn = new Set(["none", "hidden"]);

                function dn(e, t) {
                    return n => en(e, t, n)
                }

                function fn(e) {
                    return "number" === typeof e ? dn : "string" === typeof e ? It(e) ? nn : Je.test(e) ? sn : mn : Array.isArray(e) ? hn : "object" === typeof e ? Je.test(e) ? sn : pn : nn
                }

                function hn(e, t) {
                    const n = [...e],
                        r = n.length,
                        o = e.map(((e, n) => fn(e)(e, t[n])));
                    return e => {
                        for (let t = 0; t < r; t++) n[t] = o[t](e);
                        return n
                    }
                }

                function pn(e, t) {
                    const n = (0, o.A)((0, o.A)({}, e), t),
                        r = {};
                    for (const o in n) void 0 !== e[o] && void 0 !== t[o] && (r[o] = fn(e[o])(e[o], t[o]));
                    return e => {
                        for (const t in r) n[t] = r[t](e);
                        return n
                    }
                }
                const mn = (e, t) => {
                    const n = lt.createTransformer(t),
                        r = ot(e),
                        o = ot(t);
                    return r.indexes.var.length === o.indexes.var.length && r.indexes.color.length === o.indexes.color.length && r.indexes.number.length >= o.indexes.number.length ? cn.has(e) && !o.values.length || cn.has(t) && !r.values.length ? function(e, t) {
                        return cn.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
                    }(e, t) : un(hn(function(e, t) {
                        var n;
                        const r = [],
                            o = {
                                color: 0,
                                var: 0,
                                number: 0
                            };
                        for (let i = 0; i < t.values.length; i++) {
                            const a = t.types[i],
                                s = e.indexes[a][o[a]],
                                l = null !== (n = e.values[s]) && void 0 !== n ? n : 0;
                            r[i] = l, o[a]++
                        }
                        return r
                    }(r, o), o.values), n) : (Lt(!0, "Complex values '".concat(e, "' and '").concat(t, "' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")), nn(e, t))
                };

                function vn(e, t, n) {
                    if ("number" === typeof e && "number" === typeof t && "number" === typeof n) return en(e, t, n);
                    return fn(e)(e, t)
                }

                function gn(e, t, n) {
                    const r = Math.max(t - 5, 0);
                    return ue(n - e(r), t - r)
                }
                const yn = {
                        stiffness: 100,
                        damping: 10,
                        mass: 1,
                        velocity: 0,
                        duration: 800,
                        bounce: .3,
                        visualDuration: .3,
                        restSpeed: {
                            granular: .01,
                            default: 2
                        },
                        restDelta: {
                            granular: .005,
                            default: .5
                        },
                        minDuration: .01,
                        maxDuration: 10,
                        minDamping: .05,
                        maxDamping: 1
                    },
                    bn = .001;

                function wn(e) {
                    let t, n, {
                        duration: r = yn.duration,
                        bounce: o = yn.bounce,
                        velocity: i = yn.velocity,
                        mass: a = yn.mass
                    } = e;
                    Lt(r <= B(yn.maxDuration), "Spring duration must be 10 seconds or less");
                    let s = 1 - o;
                    s = Le(yn.minDamping, yn.maxDamping, s), r = Le(yn.minDuration, yn.maxDuration, U(r)), s < 1 ? (t = e => {
                        const t = e * s,
                            n = t * r,
                            o = t - i,
                            a = Sn(e, s),
                            l = Math.exp(-n);
                        return bn - o / a * l
                    }, n = e => {
                        const n = e * s * r,
                            o = n * i + i,
                            a = Math.pow(s, 2) * Math.pow(e, 2) * r,
                            l = Math.exp(-n),
                            u = Sn(Math.pow(e, 2), s);
                        return (-t(e) + bn > 0 ? -1 : 1) * ((o - a) * l) / u
                    }) : (t = e => Math.exp(-e * r) * ((e - i) * r + 1) - .001, n = e => Math.exp(-e * r) * (r * r * (i - e)));
                    const l = function(e, t, n) {
                        let r = n;
                        for (let o = 1; o < xn; o++) r -= e(r) / t(r);
                        return r
                    }(t, n, 5 / r);
                    if (r = B(r), isNaN(l)) return {
                        stiffness: yn.stiffness,
                        damping: yn.damping,
                        duration: r
                    }; {
                        const e = Math.pow(l, 2) * a;
                        return {
                            stiffness: e,
                            damping: 2 * s * Math.sqrt(a * e),
                            duration: r
                        }
                    }
                }
                const xn = 12;

                function Sn(e, t) {
                    return e * Math.sqrt(1 - t * t)
                }
                const En = ["duration", "bounce"],
                    kn = ["stiffness", "damping", "mass"];

                function An(e, t) {
                    return t.some((t => void 0 !== e[t]))
                }

                function Cn() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : yn.visualDuration,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : yn.bounce;
                    const n = "object" !== typeof e ? {
                        visualDuration: e,
                        keyframes: [0, 1],
                        bounce: t
                    } : e;
                    let {
                        restSpeed: r,
                        restDelta: i
                    } = n;
                    const a = n.keyframes[0],
                        s = n.keyframes[n.keyframes.length - 1],
                        l = {
                            done: !1,
                            value: a
                        },
                        {
                            stiffness: u,
                            damping: c,
                            mass: d,
                            duration: f,
                            velocity: h,
                            isResolvedFromDuration: p
                        } = function(e) {
                            let t = (0, o.A)({
                                velocity: yn.velocity,
                                stiffness: yn.stiffness,
                                damping: yn.damping,
                                mass: yn.mass,
                                isResolvedFromDuration: !1
                            }, e);
                            if (!An(e, kn) && An(e, En))
                                if (e.visualDuration) {
                                    const n = e.visualDuration,
                                        r = 2 * Math.PI / (1.2 * n),
                                        i = r * r,
                                        a = 2 * Le(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
                                    t = (0, o.A)((0, o.A)({}, t), {}, {
                                        mass: yn.mass,
                                        stiffness: i,
                                        damping: a
                                    })
                                } else {
                                    const n = wn(e);
                                    t = (0, o.A)((0, o.A)((0, o.A)({}, t), n), {}, {
                                        mass: yn.mass
                                    }), t.isResolvedFromDuration = !0
                                }
                            return t
                        }((0, o.A)((0, o.A)({}, n), {}, {
                            velocity: -U(n.velocity || 0)
                        })),
                        g = h || 0,
                        y = c / (2 * Math.sqrt(u * d)),
                        b = s - a,
                        w = U(Math.sqrt(u / d)),
                        x = Math.abs(b) < 5;
                    let S;
                    if (r || (r = x ? yn.restSpeed.granular : yn.restSpeed.default), i || (i = x ? yn.restDelta.granular : yn.restDelta.default), y < 1) {
                        const e = Sn(w, y);
                        S = t => {
                            const n = Math.exp(-y * w * t);
                            return s - n * ((g + y * w * b) / e * Math.sin(e * t) + b * Math.cos(e * t))
                        }
                    } else if (1 === y) S = e => s - Math.exp(-w * e) * (b + (g + w * b) * e);
                    else {
                        const e = w * Math.sqrt(y * y - 1);
                        S = t => {
                            const n = Math.exp(-y * w * t),
                                r = Math.min(e * t, 300);
                            return s - n * ((g + y * w * b) * Math.sinh(r) + e * b * Math.cosh(r)) / e
                        }
                    }
                    const E = {
                        calculatedDuration: p && f || null,
                        next: e => {
                            const t = S(e);
                            if (p) l.done = e >= f;
                            else {
                                let n = 0;
                                y < 1 && (n = 0 === e ? B(g) : gn(S, e, t));
                                const o = Math.abs(n) <= r,
                                    a = Math.abs(s - t) <= i;
                                l.done = o && a
                            }
                            return l.value = l.done ? s : t, l
                        },
                        toString: () => {
                            const e = Math.min(v(E), m),
                                t = k((t => E.next(e * t).value), e, 30);
                            return e + "ms " + t
                        }
                    };
                    return E
                }

                function Tn(e) {
                    let {
                        keyframes: t,
                        velocity: n = 0,
                        power: r = .8,
                        timeConstant: o = 325,
                        bounceDamping: i = 10,
                        bounceStiffness: a = 500,
                        modifyTarget: s,
                        min: l,
                        max: u,
                        restDelta: c = .5,
                        restSpeed: d
                    } = e;
                    const f = t[0],
                        h = {
                            done: !1,
                            value: f
                        },
                        p = e => void 0 === l ? u : void 0 === u || Math.abs(l - e) < Math.abs(u - e) ? l : u;
                    let m = r * n;
                    const v = f + m,
                        g = void 0 === s ? v : s(v);
                    g !== v && (m = g - f);
                    const y = e => -m * Math.exp(-e / o),
                        b = e => g + y(e),
                        w = e => {
                            const t = y(e),
                                n = b(e);
                            h.done = Math.abs(t) <= c, h.value = h.done ? g : n
                        };
                    let x, S;
                    const E = e => {
                        var t;
                        (t = h.value, void 0 !== l && t < l || void 0 !== u && t > u) && (x = e, S = Cn({
                            keyframes: [h.value, p(h.value)],
                            velocity: gn(b, e, h.value),
                            damping: i,
                            stiffness: a,
                            restDelta: c,
                            restSpeed: d
                        }))
                    };
                    return E(0), {
                        calculatedDuration: null,
                        next: e => {
                            let t = !1;
                            return S || void 0 !== x || (t = !0, w(e), E(e)), void 0 !== x && e >= x ? S.next(e - x) : (!t && w(e), h)
                        }
                    }
                }
                const Pn = Se(.42, 0, 1, 1),
                    _n = Se(0, 0, .58, 1),
                    Fn = Se(.42, 0, .58, 1),
                    Rn = {
                        linear: H,
                        easeIn: Pn,
                        easeInOut: Fn,
                        easeOut: _n,
                        circIn: _e,
                        circInOut: Re,
                        circOut: Fe,
                        backIn: Ce,
                        backInOut: Te,
                        backOut: Ae,
                        anticipate: Pe
                    },
                    Dn = e => {
                        if (b(e)) {
                            Mt(4 === e.length, "Cubic bezier arrays must contain four numerical values.");
                            const [t, n, r, o] = e;
                            return Se(t, n, r, o)
                        }
                        return "string" === typeof e ? (Mt(void 0 !== Rn[e], "Invalid easing type '".concat(e, "'")), Rn[e]) : e
                    };

                function Ln(e, t) {
                    let {
                        clamp: n = !0,
                        ease: r,
                        mixer: o
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    const i = e.length;
                    if (Mt(i === t.length, "Both input and output ranges must be the same length"), 1 === i) return () => t[0];
                    if (2 === i && t[0] === t[1]) return () => t[1];
                    const a = e[0] === e[1];
                    e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
                    const s = function(e, t, n) {
                            const r = [],
                                o = n || vn,
                                i = e.length - 1;
                            for (let a = 0; a < i; a++) {
                                let n = o(e[a], e[a + 1]);
                                if (t) {
                                    const e = Array.isArray(t) ? t[a] || H : t;
                                    n = un(e, n)
                                }
                                r.push(n)
                            }
                            return r
                        }(t, r, o),
                        l = s.length,
                        u = n => {
                            if (a && n < e[0]) return t[0];
                            let r = 0;
                            if (l > 1)
                                for (; r < e.length - 2 && !(n < e[r + 1]); r++);
                            const o = E(e[r], e[r + 1], n);
                            return s[r](o)
                        };
                    return n ? t => u(Le(e[0], e[i - 1], t)) : u
                }

                function Mn(e) {
                    const t = [0];
                    return function(e, t) {
                        const n = e[e.length - 1];
                        for (let r = 1; r <= t; r++) {
                            const o = E(0, t, r);
                            e.push(en(n, 1, o))
                        }
                    }(t, e.length - 1), t
                }

                function On(e) {
                    let {
                        duration: t = 300,
                        keyframes: n,
                        times: r,
                        ease: o = "easeInOut"
                    } = e;
                    const i = (e => Array.isArray(e) && "number" !== typeof e[0])(o) ? o.map(Dn) : Dn(o),
                        a = {
                            done: !1,
                            value: n[0]
                        },
                        s = function(e, t) {
                            return e.map((e => e * t))
                        }(r && r.length === n.length ? r : Mn(n), t),
                        l = Ln(s, n, {
                            ease: Array.isArray(i) ? i : (u = n, c = i, u.map((() => c || Fn)).splice(0, u.length - 1))
                        });
                    var u, c;
                    return {
                        calculatedDuration: t,
                        next: e => (a.value = l(e), a.done = e >= t, a)
                    }
                }
                const jn = e => {
                        const t = t => {
                            let {
                                timestamp: n
                            } = t;
                            return e(n)
                        };
                        return {
                            start: () => J.update(t, !0),
                            stop: () => ee(t),
                            now: () => te.isProcessing ? te.timestamp : ie.now()
                        }
                    },
                    Nn = {
                        decay: Tn,
                        inertia: Tn,
                        tween: On,
                        keyframes: On,
                        spring: Cn
                    },
                    Vn = e => e / 100;
                class In extends Zt {
                    constructor(e) {
                        super(e), this.holdTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.startTime = null, this.state = "idle", this.stop = () => {
                            if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                            this.teardown();
                            const {
                                onStop: e
                            } = this.options;
                            e && e()
                        };
                        const {
                            name: t,
                            motionValue: n,
                            element: r,
                            keyframes: o
                        } = this.options, i = (null === r || void 0 === r ? void 0 : r.KeyframeResolver) || Dt;
                        this.resolver = new i(o, ((e, t) => this.onKeyframesResolved(e, t)), t, n, r), this.resolver.scheduleResolve()
                    }
                    flatten() {
                        super.flatten(), this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
                    }
                    initPlayback(e) {
                        const {
                            type: t = "keyframes",
                            repeat: n = 0,
                            repeatDelay: r = 0,
                            repeatType: i,
                            velocity: a = 0
                        } = this.options, s = g(t) ? t : Nn[t] || On;
                        let l, u;
                        s !== On && "number" !== typeof e[0] && (l = un(Vn, vn(e[0], e[1])), e = [0, 100]);
                        const c = s((0, o.A)((0, o.A)({}, this.options), {}, {
                            keyframes: e
                        }));
                        "mirror" === i && (u = s((0, o.A)((0, o.A)({}, this.options), {}, {
                            keyframes: [...e].reverse(),
                            velocity: -a
                        }))), null === c.calculatedDuration && (c.calculatedDuration = v(c));
                        const {
                            calculatedDuration: d
                        } = c, f = d + r;
                        return {
                            generator: c,
                            mirroredGenerator: u,
                            mapPercentToKeyframes: l,
                            calculatedDuration: d,
                            resolvedDuration: f,
                            totalDuration: f * (n + 1) - r
                        }
                    }
                    onPostResolved() {
                        const {
                            autoplay: e = !0
                        } = this.options;
                        Jt.mainThread++, this.play(), "paused" !== this.pendingPlayState && e ? this.state = this.pendingPlayState : this.pause()
                    }
                    tick(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        const {
                            resolved: n
                        } = this;
                        if (!n) {
                            const {
                                keyframes: e
                            } = this.options;
                            return {
                                done: !0,
                                value: e[e.length - 1]
                            }
                        }
                        const {
                            finalKeyframe: r,
                            generator: o,
                            mirroredGenerator: i,
                            mapPercentToKeyframes: a,
                            keyframes: s,
                            calculatedDuration: l,
                            totalDuration: u,
                            resolvedDuration: c
                        } = n;
                        if (null === this.startTime) return o.next(0);
                        const {
                            delay: d,
                            repeat: f,
                            repeatType: h,
                            repeatDelay: p,
                            onUpdate: m
                        } = this.options;
                        this.speed > 0 ? this.startTime = Math.min(this.startTime, e) : this.speed < 0 && (this.startTime = Math.min(e - u / this.speed, this.startTime)), t ? this.currentTime = e : null !== this.holdTime ? this.currentTime = this.holdTime : this.currentTime = Math.round(e - this.startTime) * this.speed;
                        const v = this.currentTime - d * (this.speed >= 0 ? 1 : -1),
                            g = this.speed >= 0 ? v < 0 : v > u;
                        this.currentTime = Math.max(v, 0), "finished" === this.state && null === this.holdTime && (this.currentTime = u);
                        let y = this.currentTime,
                            b = o;
                        if (f) {
                            const e = Math.min(this.currentTime, u) / c;
                            let t = Math.floor(e),
                                n = e % 1;
                            !n && e >= 1 && (n = 1), 1 === n && t--, t = Math.min(t, f + 1);
                            Boolean(t % 2) && ("reverse" === h ? (n = 1 - n, p && (n -= p / c)) : "mirror" === h && (b = i)), y = Le(0, 1, n) * c
                        }
                        const w = g ? {
                            done: !1,
                            value: s[0]
                        } : b.next(y);
                        a && (w.value = a(w.value));
                        let {
                            done: x
                        } = w;
                        g || null === l || (x = this.speed >= 0 ? this.currentTime >= u : this.currentTime <= 0);
                        const S = null === this.holdTime && ("finished" === this.state || "running" === this.state && x);
                        return S && void 0 !== r && (w.value = Gt(s, this.options, r)), m && m(w.value), S && this.finish(), w
                    }
                    get duration() {
                        const {
                            resolved: e
                        } = this;
                        return e ? U(e.calculatedDuration) : 0
                    }
                    get time() {
                        return U(this.currentTime)
                    }
                    set time(e) {
                        e = B(e), this.currentTime = e, null !== this.holdTime || 0 === this.speed ? this.holdTime = e : this.driver && (this.startTime = this.driver.now() - e / this.speed)
                    }
                    get speed() {
                        return this.playbackSpeed
                    }
                    set speed(e) {
                        const t = this.playbackSpeed !== e;
                        this.playbackSpeed = e, t && (this.time = U(this.currentTime))
                    }
                    play() {
                        if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) return void(this.pendingPlayState = "running");
                        if (this.isStopped) return;
                        const {
                            driver: e = jn,
                            onPlay: t,
                            startTime: n
                        } = this.options;
                        this.driver || (this.driver = e((e => this.tick(e)))), t && t();
                        const r = this.driver.now();
                        null !== this.holdTime ? this.startTime = r - this.holdTime : this.startTime ? "finished" === this.state && (this.startTime = r) : this.startTime = null !== n && void 0 !== n ? n : this.calcStartTime(), "finished" === this.state && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start()
                    }
                    pause() {
                        var e;
                        this._resolved ? (this.state = "paused", this.holdTime = null !== (e = this.currentTime) && void 0 !== e ? e : 0) : this.pendingPlayState = "paused"
                    }
                    complete() {
                        "running" !== this.state && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null
                    }
                    finish() {
                        this.teardown(), this.state = "finished";
                        const {
                            onComplete: e
                        } = this.options;
                        e && e()
                    }
                    cancel() {
                        null !== this.cancelTime && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise()
                    }
                    teardown() {
                        this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel(), Jt.mainThread--
                    }
                    stopDriver() {
                        this.driver && (this.driver.stop(), this.driver = void 0)
                    }
                    sample(e) {
                        return this.startTime = 0, this.tick(e, !0)
                    }
                }
                const zn = new Set(["opacity", "clipPath", "filter", "transform"]);
                const Bn = c((() => Object.hasOwnProperty.call(Element.prototype, "animate"))),
                    Un = ["onComplete", "onUpdate", "motionValue", "element"],
                    Hn = ["motionValue", "onUpdate", "onComplete", "element"];
                const Wn = {
                    anticipate: Pe,
                    backInOut: Te,
                    circInOut: Re
                };
                class $n extends Zt {
                    constructor(e) {
                        super(e);
                        const {
                            name: t,
                            motionValue: n,
                            element: r,
                            keyframes: o
                        } = this.options;
                        this.resolver = new Kt(o, ((e, t) => this.onKeyframesResolved(e, t)), t, n, r), this.resolver.scheduleResolve()
                    }
                    initPlayback(e, t) {
                        let {
                            duration: n = 300,
                            times: r,
                            ease: i,
                            type: s,
                            motionValue: l,
                            name: u,
                            startTime: c
                        } = this.options;
                        if (!l.owner || !l.owner.current) return !1;
                        var d;
                        if ("string" === typeof i && S() && i in Wn && (i = Wn[i]), g((d = this.options).type) || "spring" === d.type || !A(d.ease)) {
                            const t = this.options,
                                {
                                    onComplete: l,
                                    onUpdate: u,
                                    motionValue: c,
                                    element: d
                                } = t,
                                f = (0, a.A)(t, Un),
                                h = function(e, t) {
                                    const n = new In((0, o.A)((0, o.A)({}, t), {}, {
                                        keyframes: e,
                                        repeat: 0,
                                        delay: 0,
                                        isGenerator: !0
                                    }));
                                    let r = {
                                        done: !1,
                                        value: e[0]
                                    };
                                    const i = [];
                                    let a = 0;
                                    for (; !r.done && a < 2e4;) r = n.sample(a), i.push(r.value), a += 10;
                                    return {
                                        times: void 0,
                                        keyframes: i,
                                        duration: a - 10,
                                        ease: "linear"
                                    }
                                }(e, f);
                            1 === (e = h.keyframes).length && (e[1] = e[0]), n = h.duration, r = h.times, i = h.ease, s = "keyframes"
                        }
                        const f = function(e, t, n) {
                            let {
                                delay: r = 0,
                                duration: o = 300,
                                repeat: i = 0,
                                repeatType: a = "loop",
                                ease: s = "easeInOut",
                                times: l
                            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            const u = {
                                [t]: n
                            };
                            l && (u.offset = l);
                            const c = P(s, o);
                            Array.isArray(c) && (u.easing = c), X.value && Jt.waapi++;
                            const d = e.animate(u, {
                                delay: r,
                                duration: o,
                                easing: Array.isArray(c) ? "linear" : c,
                                fill: "both",
                                iterations: i + 1,
                                direction: "reverse" === a ? "alternate" : "normal"
                            });
                            return X.value && d.finished.finally((() => {
                                Jt.waapi--
                            })), d
                        }(l.owner.current, u, e, (0, o.A)((0, o.A)({}, this.options), {}, {
                            duration: n,
                            times: r,
                            ease: i
                        }));
                        return f.startTime = null !== c && void 0 !== c ? c : this.calcStartTime(), this.pendingTimeline ? (y(f, this.pendingTimeline), this.pendingTimeline = void 0) : f.onfinish = () => {
                            const {
                                onComplete: n
                            } = this.options;
                            l.set(Gt(e, this.options, t)), n && n(), this.cancel(), this.resolveFinishedPromise()
                        }, {
                            animation: f,
                            duration: n,
                            times: r,
                            type: s,
                            ease: i,
                            keyframes: e
                        }
                    }
                    get duration() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return 0;
                        const {
                            duration: t
                        } = e;
                        return U(t)
                    }
                    get time() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return 0;
                        const {
                            animation: t
                        } = e;
                        return U(t.currentTime || 0)
                    }
                    set time(e) {
                        const {
                            resolved: t
                        } = this;
                        if (!t) return;
                        const {
                            animation: n
                        } = t;
                        n.currentTime = B(e)
                    }
                    get speed() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return 1;
                        const {
                            animation: t
                        } = e;
                        return t.playbackRate
                    }
                    set speed(e) {
                        const {
                            resolved: t
                        } = this;
                        if (!t) return;
                        const {
                            animation: n
                        } = t;
                        n.playbackRate = e
                    }
                    get state() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return "idle";
                        const {
                            animation: t
                        } = e;
                        return t.playState
                    }
                    get startTime() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return null;
                        const {
                            animation: t
                        } = e;
                        return t.startTime
                    }
                    attachTimeline(e) {
                        if (this._resolved) {
                            const {
                                resolved: t
                            } = this;
                            if (!t) return H;
                            const {
                                animation: n
                            } = t;
                            y(n, e)
                        } else this.pendingTimeline = e;
                        return H
                    }
                    play() {
                        if (this.isStopped) return;
                        const {
                            resolved: e
                        } = this;
                        if (!e) return;
                        const {
                            animation: t
                        } = e;
                        "finished" === t.playState && this.updateFinishedPromise(), t.play()
                    }
                    pause() {
                        const {
                            resolved: e
                        } = this;
                        if (!e) return;
                        const {
                            animation: t
                        } = e;
                        t.pause()
                    }
                    stop() {
                        if (this.resolver.cancel(), this.isStopped = !0, "idle" === this.state) return;
                        this.resolveFinishedPromise(), this.updateFinishedPromise();
                        const {
                            resolved: e
                        } = this;
                        if (!e) return;
                        const {
                            animation: t,
                            keyframes: n,
                            duration: r,
                            type: i,
                            ease: s,
                            times: l
                        } = e;
                        if ("idle" === t.playState || "finished" === t.playState) return;
                        if (this.time) {
                            const e = this.options,
                                {
                                    motionValue: t,
                                    onUpdate: u,
                                    onComplete: c,
                                    element: d
                                } = e,
                                f = (0, a.A)(e, Hn),
                                h = new In((0, o.A)((0, o.A)({}, f), {}, {
                                    keyframes: n,
                                    duration: r,
                                    type: i,
                                    ease: s,
                                    times: l,
                                    isGenerator: !0
                                })),
                                p = B(this.time);
                            t.setWithVelocity(h.sample(p - 10).value, h.sample(p).value, 10)
                        }
                        const {
                            onStop: u
                        } = this.options;
                        u && u(), this.cancel()
                    }
                    complete() {
                        const {
                            resolved: e
                        } = this;
                        e && e.animation.finish()
                    }
                    cancel() {
                        const {
                            resolved: e
                        } = this;
                        e && e.animation.cancel()
                    }
                    static supports(e) {
                        const {
                            motionValue: t,
                            name: n,
                            repeatDelay: r,
                            repeatType: o,
                            damping: i,
                            type: a
                        } = e;
                        if (!t || !t.owner || !(t.owner.current instanceof HTMLElement)) return !1;
                        const {
                            onUpdate: s,
                            transformTemplate: l
                        } = t.owner.getProps();
                        return Bn() && n && zn.has(n) && !s && !l && !r && "mirror" !== o && 0 !== i && "inertia" !== a
                    }
                }
                const Kn = {
                        type: "spring",
                        stiffness: 500,
                        damping: 25,
                        restSpeed: 10
                    },
                    Yn = {
                        type: "keyframes",
                        duration: .8
                    },
                    qn = {
                        type: "keyframes",
                        ease: [.25, .1, .35, 1],
                        duration: .3
                    },
                    Qn = (e, t) => {
                        let {
                            keyframes: n
                        } = t;
                        return n.length > 2 ? Yn : $.has(e) ? e.startsWith("scale") ? {
                            type: "spring",
                            stiffness: 550,
                            damping: 0 === n[1] ? 2 * Math.sqrt(550) : 30,
                            restSpeed: 10
                        } : Kn : qn
                    },
                    Gn = ["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"];
                const Xn = function(e, t, n) {
                        let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                            i = arguments.length > 4 ? arguments[4] : void 0,
                            s = arguments.length > 5 ? arguments[5] : void 0;
                        return l => {
                            const u = p(r, e) || {},
                                c = u.delay || r.delay || 0;
                            let {
                                elapsed: d = 0
                            } = r;
                            d -= B(c);
                            let f = (0, o.A)((0, o.A)({
                                keyframes: Array.isArray(n) ? n : [null, n],
                                ease: "easeOut",
                                velocity: t.getVelocity()
                            }, u), {}, {
                                delay: -d,
                                onUpdate: e => {
                                    t.set(e), u.onUpdate && u.onUpdate(e)
                                },
                                onComplete: () => {
                                    l(), u.onComplete && u.onComplete()
                                },
                                name: e,
                                motionValue: t,
                                element: s ? void 0 : i
                            });
                            (function(e) {
                                let {
                                    when: t,
                                    delay: n,
                                    delayChildren: r,
                                    staggerChildren: o,
                                    staggerDirection: i,
                                    repeat: s,
                                    repeatType: l,
                                    repeatDelay: u,
                                    from: c,
                                    elapsed: d
                                } = e, f = (0, a.A)(e, Gn);
                                return !!Object.keys(f).length
                            })(u) || (f = (0, o.A)((0, o.A)({}, f), Qn(e, f))), f.duration && (f.duration = B(f.duration)), f.repeatDelay && (f.repeatDelay = B(f.repeatDelay)), void 0 !== f.from && (f.keyframes[0] = f.from);
                            let m = !1;
                            if ((!1 === f.type || 0 === f.duration && !f.repeatDelay) && (f.duration = 0, 0 === f.delay && (m = !0)), (we || q) && (m = !0, f.duration = 0, f.delay = 0), m && !s && void 0 !== t.get()) {
                                const e = Gt(f.keyframes, u);
                                if (void 0 !== e) return J.update((() => {
                                    f.onUpdate(e), f.onComplete()
                                })), new h([])
                            }
                            return !s && $n.supports(f) ? new $n(f) : new In(f)
                        }
                    },
                    Zn = ["transition", "transitionEnd"];

                function Jn(e, t) {
                    let {
                        protectedKeys: n,
                        needsAnimating: r
                    } = e;
                    const o = n.hasOwnProperty(t) && !0 !== r[t];
                    return r[t] = !1, o
                }

                function er(e, t) {
                    let {
                        delay: n = 0,
                        transitionOverride: r,
                        type: i
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    var s;
                    let {
                        transition: l = e.getDefaultTransition(),
                        transitionEnd: c
                    } = t, d = (0, a.A)(t, Zn);
                    r && (l = r);
                    const f = [],
                        h = i && e.animationState && e.animationState.getState()[i];
                    for (const a in d) {
                        const t = e.getValue(a, null !== (s = e.latestValues[a]) && void 0 !== s ? s : null),
                            r = d[a];
                        if (void 0 === r || h && Jn(h, a)) continue;
                        const i = (0, o.A)({
                            delay: n
                        }, p(l || {}, a));
                        let u = !1;
                        if (window.MotionHandoffAnimation) {
                            const t = be(e);
                            if (t) {
                                const e = window.MotionHandoffAnimation(t, a, J);
                                null !== e && (i.startTime = e, u = !0)
                            }
                        }
                        ve(e, a), t.start(Xn(a, t, r, e.shouldReduceMotion && K.has(a) ? {
                            type: !1
                        } : i, e, u));
                        const c = t.animation;
                        c && f.push(c)
                    }
                    return c && Promise.all(f).then((() => {
                        J.update((() => {
                            c && function(e, t) {
                                let n = u(e, t) || {},
                                    {
                                        transitionEnd: r = {},
                                        transition: i = {}
                                    } = n,
                                    s = (0, a.A)(n, he);
                                s = (0, o.A)((0, o.A)({}, s), r);
                                for (const o in s) pe(e, o, (l = s[o], Y(l) ? l[l.length - 1] || 0 : l));
                                var l
                            }(e, c)
                        }))
                    })), f
                }

                function tr(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    var r;
                    const i = u(e, t, "exit" === n.type ? null === (r = e.presenceContext) || void 0 === r ? void 0 : r.custom : void 0);
                    let {
                        transition: a = e.getDefaultTransition() || {}
                    } = i || {};
                    n.transitionOverride && (a = n.transitionOverride);
                    const s = i ? () => Promise.all(er(e, i, n)) : () => Promise.resolve(),
                        l = e.variantChildren && e.variantChildren.size ? function() {
                            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                            const {
                                delayChildren: i = 0,
                                staggerChildren: s,
                                staggerDirection: l
                            } = a;
                            return function(e, t) {
                                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                    i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                                    a = arguments.length > 5 ? arguments[5] : void 0;
                                const s = [],
                                    l = (e.variantChildren.size - 1) * r,
                                    u = 1 === i ? function() {
                                        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                                    } : function() {
                                        return l - (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) * r
                                    };
                                return Array.from(e.variantChildren).sort(nr).forEach(((e, r) => {
                                    e.notify("AnimationStart", t), s.push(tr(e, t, (0, o.A)((0, o.A)({}, a), {}, {
                                        delay: n + u(r)
                                    })).then((() => e.notify("AnimationComplete", t))))
                                })), Promise.all(s)
                            }(e, t, i + r, s, l, n)
                        } : () => Promise.resolve(),
                        {
                            when: c
                        } = a;
                    if (c) {
                        const [e, t] = "beforeChildren" === c ? [s, l] : [l, s];
                        return e().then((() => t()))
                    }
                    return Promise.all([s(), l(n.delay)])
                }

                function nr(e, t) {
                    return e.sortNodePosition(t)
                }

                function rr(e, t) {
                    if (!Array.isArray(t)) return !1;
                    const n = t.length;
                    if (n !== e.length) return !1;
                    for (let r = 0; r < n; r++)
                        if (t[r] !== e[r]) return !1;
                    return !0
                }

                function or(e) {
                    return "string" === typeof e || Array.isArray(e)
                }
                const ir = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                    ar = ["initial", ...ir],
                    sr = ar.length;

                function lr(e) {
                    if (!e) return;
                    if (!e.isControllingVariants) {
                        const t = e.parent && lr(e.parent) || {};
                        return void 0 !== e.props.initial && (t.initial = e.props.initial), t
                    }
                    const t = {};
                    for (let n = 0; n < sr; n++) {
                        const r = ar[n],
                            o = e.props[r];
                        (or(o) || !1 === o) && (t[r] = o)
                    }
                    return t
                }
                const ur = ["transition", "transitionEnd"],
                    cr = [...ir].reverse(),
                    dr = ir.length;

                function fr(e) {
                    return t => Promise.all(t.map((t => {
                        let {
                            animation: n,
                            options: r
                        } = t;
                        return function(e, t) {
                            let n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (e.notify("AnimationStart", t), Array.isArray(t)) {
                                const o = t.map((t => tr(e, t, r)));
                                n = Promise.all(o)
                            } else if ("string" === typeof t) n = tr(e, t, r);
                            else {
                                const o = "function" === typeof t ? u(e, t, r.custom) : t;
                                n = Promise.all(er(e, o, r))
                            }
                            return n.then((() => {
                                e.notify("AnimationComplete", t)
                            }))
                        }(e, n, r)
                    })))
                }

                function hr(e) {
                    let t = fr(e),
                        n = vr(),
                        r = !0;
                    const s = t => (n, r) => {
                        var i;
                        const s = u(e, r, "exit" === t ? null === (i = e.presenceContext) || void 0 === i ? void 0 : i.custom : void 0);
                        if (s) {
                            const {
                                transition: e,
                                transitionEnd: t
                            } = s, r = (0, a.A)(s, ur);
                            n = (0, o.A)((0, o.A)((0, o.A)({}, n), r), t)
                        }
                        return n
                    };

                    function l(a) {
                        const {
                            props: l
                        } = e, c = lr(e.parent) || {}, d = [], f = new Set;
                        let h = {},
                            p = 1 / 0;
                        for (let t = 0; t < dr; t++) {
                            const u = cr[t],
                                m = n[u],
                                v = void 0 !== l[u] ? l[u] : c[u],
                                g = or(v),
                                y = u === a ? m.isActive : null;
                            !1 === y && (p = t);
                            let b = v === c[u] && v !== l[u] && g;
                            if (b && r && e.manuallyAnimateOnMount && (b = !1), m.protectedKeys = (0, o.A)({}, h), !m.isActive && null === y || !v && !m.prevProp || i(v) || "boolean" === typeof v) continue;
                            const w = pr(m.prevProp, v);
                            let x = w || u === a && m.isActive && !b && g || t > p && g,
                                S = !1;
                            const E = Array.isArray(v) ? v : [v];
                            let k = E.reduce(s(u), {});
                            !1 === y && (k = {});
                            const {
                                prevResolvedValues: A = {}
                            } = m, C = (0, o.A)((0, o.A)({}, A), k), T = t => {
                                x = !0, f.has(t) && (S = !0, f.delete(t)), m.needsAnimating[t] = !0;
                                const n = e.getValue(t);
                                n && (n.liveStyle = !1)
                            };
                            for (const e in C) {
                                const t = k[e],
                                    n = A[e];
                                if (h.hasOwnProperty(e)) continue;
                                let r = !1;
                                r = Y(t) && Y(n) ? !rr(t, n) : t !== n, r ? void 0 !== t && null !== t ? T(e) : f.add(e) : void 0 !== t && f.has(e) ? T(e) : m.protectedKeys[e] = !0
                            }
                            m.prevProp = v, m.prevResolvedValues = k, m.isActive && (h = (0, o.A)((0, o.A)({}, h), k)), r && e.blockInitialAnimation && (x = !1);
                            x && (!(b && w) || S) && d.push(...E.map((e => ({
                                animation: e,
                                options: {
                                    type: u
                                }
                            }))))
                        }
                        if (f.size) {
                            const t = {};
                            if ("boolean" !== typeof l.initial) {
                                const n = u(e, Array.isArray(l.initial) ? l.initial[0] : l.initial);
                                n && n.transition && (t.transition = n.transition)
                            }
                            f.forEach((n => {
                                const r = e.getBaseTarget(n),
                                    o = e.getValue(n);
                                o && (o.liveStyle = !0), t[n] = null !== r && void 0 !== r ? r : null
                            })), d.push({
                                animation: t
                            })
                        }
                        let m = Boolean(d.length);
                        return !r || !1 !== l.initial && l.initial !== l.animate || e.manuallyAnimateOnMount || (m = !1), r = !1, m ? t(d) : Promise.resolve()
                    }
                    return {
                        animateChanges: l,
                        setActive: function(t, r) {
                            var o;
                            if (n[t].isActive === r) return Promise.resolve();
                            null === (o = e.variantChildren) || void 0 === o || o.forEach((e => {
                                var n;
                                return null === (n = e.animationState) || void 0 === n ? void 0 : n.setActive(t, r)
                            })), n[t].isActive = r;
                            const i = l(t);
                            for (const e in n) n[e].protectedKeys = {};
                            return i
                        },
                        setAnimateFunction: function(n) {
                            t = n(e)
                        },
                        getState: () => n,
                        reset: () => {
                            n = vr(), r = !0
                        }
                    }
                }

                function pr(e, t) {
                    return "string" === typeof t ? t !== e : !!Array.isArray(t) && !rr(t, e)
                }

                function mr() {
                    return {
                        isActive: arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        protectedKeys: {},
                        needsAnimating: {},
                        prevResolvedValues: {}
                    }
                }

                function vr() {
                    return {
                        animate: mr(!0),
                        whileInView: mr(),
                        whileHover: mr(),
                        whileTap: mr(),
                        whileDrag: mr(),
                        whileFocus: mr(),
                        exit: mr()
                    }
                }
                class gr {
                    constructor(e) {
                        this.isMounted = !1, this.node = e
                    }
                    update() {}
                }
                let yr = 0;
                const br = {
                    animation: {
                        Feature: class extends gr {
                            constructor(e) {
                                super(e), e.animationState || (e.animationState = hr(e))
                            }
                            updateAnimationControlsSubscription() {
                                const {
                                    animate: e
                                } = this.node.getProps();
                                i(e) && (this.unmountControls = e.subscribe(this.node))
                            }
                            mount() {
                                this.updateAnimationControlsSubscription()
                            }
                            update() {
                                const {
                                    animate: e
                                } = this.node.getProps(), {
                                    animate: t
                                } = this.node.prevProps || {};
                                e !== t && this.updateAnimationControlsSubscription()
                            }
                            unmount() {
                                var e;
                                this.node.animationState.reset(), null === (e = this.unmountControls) || void 0 === e || e.call(this)
                            }
                        }
                    },
                    exit: {
                        Feature: class extends gr {
                            constructor() {
                                super(...arguments), this.id = yr++
                            }
                            update() {
                                if (!this.node.presenceContext) return;
                                const {
                                    isPresent: e,
                                    onExitComplete: t
                                } = this.node.presenceContext, {
                                    isPresent: n
                                } = this.node.prevPresenceContext || {};
                                if (!this.node.animationState || e === n) return;
                                const r = this.node.animationState.setActive("exit", !e);
                                t && !e && r.then((() => {
                                    t(this.id)
                                }))
                            }
                            mount() {
                                const {
                                    register: e,
                                    onExitComplete: t
                                } = this.node.presenceContext || {};
                                t && t(this.id), e && (this.unmount = e(this.id))
                            }
                            unmount() {}
                        }
                    }
                };

                function wr(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                        passive: !0
                    };
                    return e.addEventListener(t, n, r), () => e.removeEventListener(t, n)
                }

                function xr(e) {
                    return {
                        point: {
                            x: e.pageX,
                            y: e.pageY
                        }
                    }
                }

                function Sr(e, t, n, r) {
                    return wr(e, t, (e => t => M(t) && e(t, xr(t)))(n), r)
                }

                function Er(e) {
                    let {
                        top: t,
                        left: n,
                        right: r,
                        bottom: o
                    } = e;
                    return {
                        x: {
                            min: n,
                            max: r
                        },
                        y: {
                            min: t,
                            max: o
                        }
                    }
                }

                function kr(e) {
                    return e.max - e.min
                }

                function Ar(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5;
                    e.origin = r, e.originPoint = en(t.min, t.max, e.origin), e.scale = kr(n) / kr(t), e.translate = en(n.min, n.max, e.origin) - e.originPoint, (e.scale >= .9999 && e.scale <= 1.0001 || isNaN(e.scale)) && (e.scale = 1), (e.translate >= -.01 && e.translate <= .01 || isNaN(e.translate)) && (e.translate = 0)
                }

                function Cr(e, t, n, r) {
                    Ar(e.x, t.x, n.x, r ? r.originX : void 0), Ar(e.y, t.y, n.y, r ? r.originY : void 0)
                }

                function Tr(e, t, n) {
                    e.min = n.min + t.min, e.max = e.min + kr(t)
                }

                function Pr(e, t, n) {
                    e.min = t.min - n.min, e.max = e.min + kr(t)
                }

                function _r(e, t, n) {
                    Pr(e.x, t.x, n.x), Pr(e.y, t.y, n.y)
                }
                const Fr = () => ({
                    x: {
                        min: 0,
                        max: 0
                    },
                    y: {
                        min: 0,
                        max: 0
                    }
                });

                function Rr(e) {
                    return [e("x"), e("y")]
                }

                function Dr(e) {
                    return void 0 === e || 1 === e
                }

                function Lr(e) {
                    let {
                        scale: t,
                        scaleX: n,
                        scaleY: r
                    } = e;
                    return !Dr(t) || !Dr(n) || !Dr(r)
                }

                function Mr(e) {
                    return Lr(e) || Or(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
                }

                function Or(e) {
                    return jr(e.x) || jr(e.y)
                }

                function jr(e) {
                    return e && "0%" !== e
                }

                function Nr(e, t, n) {
                    return n + t * (e - n)
                }

                function Vr(e, t, n, r, o) {
                    return void 0 !== o && (e = Nr(e, o, r)), Nr(e, n, r) + t
                }

                function Ir(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        o = arguments.length > 4 ? arguments[4] : void 0;
                    e.min = Vr(e.min, t, n, r, o), e.max = Vr(e.max, t, n, r, o)
                }

                function zr(e, t) {
                    let {
                        x: n,
                        y: r
                    } = t;
                    Ir(e.x, n.translate, n.scale, n.originPoint), Ir(e.y, r.translate, r.scale, r.originPoint)
                }
                const Br = .999999999999,
                    Ur = 1.0000000000001;

                function Hr(e, t) {
                    e.min = e.min + t, e.max = e.max + t
                }

                function Wr(e, t, n, r) {
                    let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : .5;
                    Ir(e, t, n, en(e.min, e.max, o), r)
                }

                function $r(e, t) {
                    Wr(e.x, t.x, t.scaleX, t.scale, t.originX), Wr(e.y, t.y, t.scaleY, t.scale, t.originY)
                }

                function Kr(e, t) {
                    return Er(function(e, t) {
                        if (!t) return e;
                        const n = t({
                                x: e.left,
                                y: e.top
                            }),
                            r = t({
                                x: e.right,
                                y: e.bottom
                            });
                        return {
                            top: n.y,
                            left: n.x,
                            bottom: r.y,
                            right: r.x
                        }
                    }(e.getBoundingClientRect(), t))
                }

                function Yr(e) {
                    return e && "object" === typeof e && Object.prototype.hasOwnProperty.call(e, "current")
                }
                const qr = (e, t) => Math.abs(e - t);
                class Qr {
                    constructor(e, t) {
                        let {
                            transformPagePoint: n,
                            dragSnapToOrigin: r = !1
                        } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
                                if (!this.lastMoveEvent || !this.lastMoveEventInfo) return;
                                const e = Zr(this.lastMoveEventInfo, this.history),
                                    t = null !== this.startEvent,
                                    n = function(e, t) {
                                        const n = qr(e.x, t.x),
                                            r = qr(e.y, t.y);
                                        return Math.sqrt(n ** 2 + r ** 2)
                                    }(e.offset, {
                                        x: 0,
                                        y: 0
                                    }) >= 3;
                                if (!t && !n) return;
                                const {
                                    point: r
                                } = e, {
                                    timestamp: i
                                } = te;
                                this.history.push((0, o.A)((0, o.A)({}, r), {}, {
                                    timestamp: i
                                }));
                                const {
                                    onStart: a,
                                    onMove: s
                                } = this.handlers;
                                t || (a && a(this.lastMoveEvent, e), this.startEvent = this.lastMoveEvent), s && s(this.lastMoveEvent, e)
                            }, this.handlePointerMove = (e, t) => {
                                if (e.currentTarget instanceof Element && e.currentTarget.hasPointerCapture && void 0 !== e.pointerId) try {
                                    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return
                                } catch (n) {}
                                this.lastMoveEvent = e, this.lastMoveEventInfo = Gr(t, this.transformPagePoint), J.update(this.updatePoint, !0)
                            }, this.handlePointerUp = (e, t) => {
                                no(e, "release"), this.end();
                                const {
                                    onEnd: n,
                                    onSessionEnd: r,
                                    resumeAnimation: o
                                } = this.handlers;
                                if (this.dragSnapToOrigin && o && o(), !this.lastMoveEvent || !this.lastMoveEventInfo) return;
                                const i = Zr("pointercancel" === e.type || "lostpointercapture" === e.type ? this.lastMoveEventInfo : Gr(t, this.transformPagePoint), this.history);
                                this.startEvent && n && n(e, i), r && r(e, i)
                            }, !M(e)) return;
                        this.dragSnapToOrigin = r, this.handlers = t, this.transformPagePoint = n;
                        const i = Gr(xr(e), this.transformPagePoint),
                            {
                                point: a
                            } = i,
                            {
                                timestamp: s
                            } = te;
                        this.history = [(0, o.A)((0, o.A)({}, a), {}, {
                            timestamp: s
                        })];
                        const {
                            onSessionStart: l
                        } = t;
                        l && l(e, Zr(i, this.history)), no(e, "set"), this.removeListeners = un(Sr(e.currentTarget, "pointermove", this.handlePointerMove), Sr(e.currentTarget, "pointerup", this.handlePointerUp), Sr(e.currentTarget, "pointercancel", this.handlePointerUp), Sr(e.currentTarget, "lostpointercapture", this.handlePointerUp))
                    }
                    updateHandlers(e) {
                        this.handlers = e
                    }
                    end() {
                        this.removeListeners && this.removeListeners(), ee(this.updatePoint)
                    }
                }

                function Gr(e, t) {
                    return t ? {
                        point: t(e.point)
                    } : e
                }

                function Xr(e, t) {
                    return {
                        x: e.x - t.x,
                        y: e.y - t.y
                    }
                }

                function Zr(e, t) {
                    let {
                        point: n
                    } = e;
                    return {
                        point: n,
                        delta: Xr(n, eo(t)),
                        offset: Xr(n, Jr(t)),
                        velocity: to(t, .1)
                    }
                }

                function Jr(e) {
                    return e[0]
                }

                function eo(e) {
                    return e[e.length - 1]
                }

                function to(e, t) {
                    if (e.length < 2) return {
                        x: 0,
                        y: 0
                    };
                    let n = e.length - 1,
                        r = null;
                    const o = eo(e);
                    for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > B(t)));) n--;
                    if (!r) return {
                        x: 0,
                        y: 0
                    };
                    const i = U(o.timestamp - r.timestamp);
                    if (0 === i) return {
                        x: 0,
                        y: 0
                    };
                    const a = {
                        x: (o.x - r.x) / i,
                        y: (o.y - r.y) / i
                    };
                    return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a
                }

                function no(e, t) {
                    const n = "".concat(t, "PointerCapture");
                    if (e.currentTarget instanceof Element && n in e.currentTarget && void 0 !== e.pointerId) try {
                        e.currentTarget[n](e.pointerId)
                    } catch (r) {}
                }

                function ro(e, t, n) {
                    return {
                        min: void 0 !== t ? e.min + t : void 0,
                        max: void 0 !== n ? e.max + n - (e.max - e.min) : void 0
                    }
                }

                function oo(e, t) {
                    let n = t.min - e.min,
                        r = t.max - e.max;
                    return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), {
                        min: n,
                        max: r
                    }
                }
                const io = .35;

                function ao(e, t, n) {
                    return {
                        min: so(e, t),
                        max: so(e, n)
                    }
                }

                function so(e, t) {
                    return "number" === typeof e ? e : e[t] || 0
                }
                const lo = new WeakMap;
                class uo {
                    constructor(e) {
                        this.openDragLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                            x: 0,
                            y: 0
                        }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }, this.visualElement = e
                    }
                    start(e) {
                        let {
                            snapToCursor: t = !1
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        const {
                            presenceContext: n
                        } = this.visualElement;
                        if (n && !1 === n.isPresent) return;
                        const {
                            dragSnapToOrigin: r
                        } = this.getProps();
                        this.panSession = new Qr(e, {
                            onSessionStart: e => {
                                const {
                                    dragSnapToOrigin: n
                                } = this.getProps();
                                n ? this.pauseAnimation() : this.stopAnimation(), t && this.snapToCursor(xr(e).point)
                            },
                            onStart: (e, t) => {
                                const {
                                    drag: n,
                                    dragPropagation: r,
                                    onDragStart: o
                                } = this.getProps();
                                if (n && !r && (this.openDragLock && this.openDragLock(), this.openDragLock = "x" === (i = n) || "y" === i ? _[i] ? null : (_[i] = !0, () => {
                                        _[i] = !1
                                    }) : _.x || _.y ? null : (_.x = _.y = !0, () => {
                                        _.x = _.y = !1
                                    }), !this.openDragLock)) return;
                                var i;
                                this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Rr((e => {
                                    let t = this.getAxisMotionValue(e).get() || 0;
                                    if (Ye.test(t)) {
                                        const {
                                            projection: n
                                        } = this.visualElement;
                                        if (n && n.layout) {
                                            const r = n.layout.layoutBox[e];
                                            if (r) {
                                                t = kr(r) * (parseFloat(t) / 100)
                                            }
                                        }
                                    }
                                    this.originPoint[e] = t
                                })), o && J.postRender((() => o(e, t))), ve(this.visualElement, "transform");
                                const {
                                    animationState: a
                                } = this.visualElement;
                                a && a.setActive("whileDrag", !0)
                            },
                            onMove: (e, t) => {
                                const {
                                    dragPropagation: n,
                                    dragDirectionLock: r,
                                    onDirectionLock: o,
                                    onDrag: i
                                } = this.getProps();
                                if (!n && !this.openDragLock) return;
                                const {
                                    offset: a
                                } = t;
                                if (r && null === this.currentDirection) return this.currentDirection = function(e) {
                                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10,
                                        n = null;
                                    Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x");
                                    return n
                                }(a), void(null !== this.currentDirection && o && o(this.currentDirection));
                                this.updateAxis("x", t.point, a), this.updateAxis("y", t.point, a), this.visualElement.render(), i && i(e, t)
                            },
                            onSessionEnd: (e, t) => this.stop(e, t),
                            resumeAnimation: () => Rr((e => {
                                var t;
                                return "paused" === this.getAnimationState(e) && (null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.play())
                            }))
                        }, {
                            transformPagePoint: this.visualElement.getTransformPagePoint(),
                            dragSnapToOrigin: r
                        })
                    }
                    stop(e, t) {
                        const n = this.isDragging;
                        if (this.cancel(), !n) return;
                        const {
                            velocity: r
                        } = t;
                        this.startAnimation(r);
                        const {
                            onDragEnd: o
                        } = this.getProps();
                        o && J.postRender((() => o(e, t)))
                    }
                    cancel() {
                        this.isDragging = !1;
                        const {
                            projection: e,
                            animationState: t
                        } = this.visualElement;
                        e && (e.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                        const {
                            dragPropagation: n
                        } = this.getProps();
                        !n && this.openDragLock && (this.openDragLock(), this.openDragLock = null), t && t.setActive("whileDrag", !1)
                    }
                    updateAxis(e, t, n) {
                        const {
                            drag: r
                        } = this.getProps();
                        if (!n || !co(e, r, this.currentDirection)) return;
                        const o = this.getAxisMotionValue(e);
                        let i = this.originPoint[e] + n[e];
                        this.constraints && this.constraints[e] && (i = function(e, t, n) {
                            let {
                                min: r,
                                max: o
                            } = t;
                            return void 0 !== r && e < r ? e = n ? en(r, e, n.min) : Math.max(e, r) : void 0 !== o && e > o && (e = n ? en(o, e, n.max) : Math.min(e, o)), e
                        }(i, this.constraints[e], this.elastic[e])), o.set(i)
                    }
                    resolveConstraints() {
                        var e;
                        const {
                            dragConstraints: t,
                            dragElastic: n
                        } = this.getProps(), r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null === (e = this.visualElement.projection) || void 0 === e ? void 0 : e.layout, o = this.constraints;
                        t && Yr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : this.constraints = !(!t || !r) && function(e, t) {
                            let {
                                top: n,
                                left: r,
                                bottom: o,
                                right: i
                            } = t;
                            return {
                                x: ro(e.x, r, i),
                                y: ro(e.y, n, o)
                            }
                        }(r.layoutBox, t), this.elastic = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : io;
                            return !1 === e ? e = 0 : !0 === e && (e = io), {
                                x: ao(e, "left", "right"),
                                y: ao(e, "top", "bottom")
                            }
                        }(n), o !== this.constraints && r && this.constraints && !this.hasMutatedConstraints && Rr((e => {
                            !1 !== this.constraints && this.getAxisMotionValue(e) && (this.constraints[e] = function(e, t) {
                                const n = {};
                                return void 0 !== t.min && (n.min = t.min - e.min), void 0 !== t.max && (n.max = t.max - e.min), n
                            }(r.layoutBox[e], this.constraints[e]))
                        }))
                    }
                    resolveRefConstraints() {
                        const {
                            dragConstraints: e,
                            onMeasureDragConstraints: t
                        } = this.getProps();
                        if (!e || !Yr(e)) return !1;
                        const n = e.current;
                        Mt(null !== n, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                        const {
                            projection: r
                        } = this.visualElement;
                        if (!r || !r.layout) return !1;
                        const o = function(e, t, n) {
                            const r = Kr(e, n),
                                {
                                    scroll: o
                                } = t;
                            return o && (Hr(r.x, o.offset.x), Hr(r.y, o.offset.y)), r
                        }(n, r.root, this.visualElement.getTransformPagePoint());
                        let i = function(e, t) {
                            return {
                                x: oo(e.x, t.x),
                                y: oo(e.y, t.y)
                            }
                        }(r.layout.layoutBox, o);
                        if (t) {
                            const e = t(function(e) {
                                let {
                                    x: t,
                                    y: n
                                } = e;
                                return {
                                    top: n.min,
                                    right: t.max,
                                    bottom: n.max,
                                    left: t.min
                                }
                            }(i));
                            this.hasMutatedConstraints = !!e, e && (i = Er(e))
                        }
                        return i
                    }
                    startAnimation(e) {
                        const {
                            drag: t,
                            dragMomentum: n,
                            dragElastic: r,
                            dragTransition: i,
                            dragSnapToOrigin: a,
                            onDragTransitionEnd: s
                        } = this.getProps(), l = this.constraints || {}, u = Rr((s => {
                            if (!co(s, t, this.currentDirection)) return;
                            let u = l && l[s] || {};
                            a && (u = {
                                min: 0,
                                max: 0
                            });
                            const c = r ? 200 : 1e6,
                                d = r ? 40 : 1e7,
                                f = (0, o.A)((0, o.A)({
                                    type: "inertia",
                                    velocity: n ? e[s] : 0,
                                    bounceStiffness: c,
                                    bounceDamping: d,
                                    timeConstant: 750,
                                    restDelta: 1,
                                    restSpeed: 10
                                }, i), u);
                            return this.startAxisValueAnimation(s, f)
                        }));
                        return Promise.all(u).then(s)
                    }
                    startAxisValueAnimation(e, t) {
                        const n = this.getAxisMotionValue(e);
                        return ve(this.visualElement, e), n.start(Xn(e, n, 0, t, this.visualElement, !1))
                    }
                    stopAnimation() {
                        Rr((e => this.getAxisMotionValue(e).stop()))
                    }
                    pauseAnimation() {
                        Rr((e => {
                            var t;
                            return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.pause()
                        }))
                    }
                    getAnimationState(e) {
                        var t;
                        return null === (t = this.getAxisMotionValue(e).animation) || void 0 === t ? void 0 : t.state
                    }
                    getAxisMotionValue(e) {
                        const t = "_drag".concat(e.toUpperCase()),
                            n = this.visualElement.getProps(),
                            r = n[t];
                        return r || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0)
                    }
                    snapToCursor(e) {
                        Rr((t => {
                            const {
                                drag: n
                            } = this.getProps();
                            if (!co(t, n, this.currentDirection)) return;
                            const {
                                projection: r
                            } = this.visualElement, o = this.getAxisMotionValue(t);
                            if (r && r.layout) {
                                const {
                                    min: n,
                                    max: i
                                } = r.layout.layoutBox[t];
                                o.set(e[t] - en(n, i, .5))
                            }
                        }))
                    }
                    scalePositionWithinConstraints() {
                        if (!this.visualElement.current) return;
                        const {
                            drag: e,
                            dragConstraints: t
                        } = this.getProps(), {
                            projection: n
                        } = this.visualElement;
                        if (!Yr(t) || !n || !this.constraints) return;
                        this.stopAnimation();
                        const r = {
                            x: 0,
                            y: 0
                        };
                        Rr((e => {
                            const t = this.getAxisMotionValue(e);
                            if (t && !1 !== this.constraints) {
                                const n = t.get();
                                r[e] = function(e, t) {
                                    let n = .5;
                                    const r = kr(e),
                                        o = kr(t);
                                    return o > r ? n = E(t.min, t.max - r, e.min) : r > o && (n = E(e.min, e.max - o, t.min)), Le(0, 1, n)
                                }({
                                    min: n,
                                    max: n
                                }, this.constraints[e])
                            }
                        }));
                        const {
                            transformTemplate: o
                        } = this.visualElement.getProps();
                        this.visualElement.current.style.transform = o ? o({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), Rr((t => {
                            if (!co(t, e, null)) return;
                            const n = this.getAxisMotionValue(t),
                                {
                                    min: o,
                                    max: i
                                } = this.constraints[t];
                            n.set(en(o, i, r[t]))
                        }))
                    }
                    addListeners() {
                        if (!this.visualElement.current) return;
                        lo.set(this.visualElement, this);
                        const e = Sr(this.visualElement.current, "pointerdown", (e => {
                                const {
                                    drag: t,
                                    dragListener: n = !0
                                } = this.getProps();
                                t && n && this.start(e)
                            })),
                            t = () => {
                                const {
                                    dragConstraints: e
                                } = this.getProps();
                                Yr(e) && e.current && (this.constraints = this.resolveRefConstraints())
                            },
                            {
                                projection: n
                            } = this.visualElement,
                            r = n.addEventListener("measure", t);
                        n && !n.layout && (n.root && n.root.updateScroll(), n.updateLayout()), J.read(t);
                        const o = wr(window, "resize", (() => this.scalePositionWithinConstraints())),
                            i = n.addEventListener("didUpdate", (e => {
                                let {
                                    delta: t,
                                    hasLayoutChanged: n
                                } = e;
                                this.isDragging && n && (Rr((e => {
                                    const n = this.getAxisMotionValue(e);
                                    n && (this.originPoint[e] += t[e].translate, n.set(n.get() + t[e].translate))
                                })), this.visualElement.render())
                            }));
                        return () => {
                            o(), e(), r(), i && i()
                        }
                    }
                    getProps() {
                        const e = this.visualElement.getProps(),
                            {
                                drag: t = !1,
                                dragDirectionLock: n = !1,
                                dragPropagation: r = !1,
                                dragConstraints: i = !1,
                                dragElastic: a = io,
                                dragMomentum: s = !0
                            } = e;
                        return (0, o.A)((0, o.A)({}, e), {}, {
                            drag: t,
                            dragDirectionLock: n,
                            dragPropagation: r,
                            dragConstraints: i,
                            dragElastic: a,
                            dragMomentum: s
                        })
                    }
                }

                function co(e, t, n) {
                    return (!0 === t || t === e) && (null === n || n === e)
                }
                const fo = e => (t, n) => {
                    e && J.postRender((() => e(t, n)))
                };
                var ho = n(579),
                    po = n(5043),
                    mo = n(8917),
                    vo = n(2190);
                const go = (0, po.createContext)({}),
                    yo = {
                        hasAnimatedSinceResize: !0,
                        hasEverUpdated: !1
                    };

                function bo(e, t) {
                    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
                }
                const wo = {
                        correct: (e, t) => {
                            if (!t.target) return e;
                            if ("string" === typeof e) {
                                if (!qe.test(e)) return e;
                                e = parseFloat(e)
                            }
                            const n = bo(e, t.target.x),
                                r = bo(e, t.target.y);
                            return "".concat(n, "% ").concat(r, "%")
                        }
                    },
                    xo = {
                        correct: (e, t) => {
                            let {
                                treeScale: n,
                                projectionDelta: r
                            } = t;
                            const o = e,
                                i = lt.parse(e);
                            if (i.length > 5) return o;
                            const a = lt.createTransformer(e),
                                s = "number" !== typeof i[0] ? 1 : 0,
                                l = r.x.scale * n.x,
                                u = r.y.scale * n.y;
                            i[0 + s] /= l, i[1 + s] /= u;
                            const c = en(l, u, .5);
                            return "number" === typeof i[2 + s] && (i[2 + s] /= c), "number" === typeof i[3 + s] && (i[3 + s] /= c), a(i)
                        }
                    },
                    So = {};
                const {
                    schedule: Eo,
                    cancel: ko
                } = Z(queueMicrotask, !1);
                class Ao extends po.Component {
                    componentDidMount() {
                        const {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: n,
                            layoutId: r
                        } = this.props, {
                            projection: i
                        } = e;
                        ! function(e) {
                            for (const t in e) So[t] = e[t], Nt(t) && (So[t].isCSSVariable = !0)
                        }(To), i && (t.group && t.group.add(i), n && n.register && r && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", (() => {
                            this.safeToRemove()
                        })), i.setOptions((0, o.A)((0, o.A)({}, i.options), {}, {
                            onExitComplete: () => this.safeToRemove()
                        }))), yo.hasEverUpdated = !0
                    }
                    getSnapshotBeforeUpdate(e) {
                        const {
                            layoutDependency: t,
                            visualElement: n,
                            drag: r,
                            isPresent: o
                        } = this.props, i = n.projection;
                        return i ? (i.isPresent = o, r || e.layoutDependency !== t || void 0 === t ? i.willUpdate() : this.safeToRemove(), e.isPresent !== o && (o ? i.promote() : i.relegate() || J.postRender((() => {
                            const e = i.getStack();
                            e && e.members.length || this.safeToRemove()
                        }))), null) : null
                    }
                    componentDidUpdate() {
                        const {
                            projection: e
                        } = this.props.visualElement;
                        e && (e.root.didUpdate(), Eo.postRender((() => {
                            !e.currentAnimation && e.isLead() && this.safeToRemove()
                        })))
                    }
                    componentWillUnmount() {
                        const {
                            visualElement: e,
                            layoutGroup: t,
                            switchLayoutGroup: n
                        } = this.props, {
                            projection: r
                        } = e;
                        r && (r.scheduleCheckAfterUnmount(), t && t.group && t.group.remove(r), n && n.deregister && n.deregister(r))
                    }
                    safeToRemove() {
                        const {
                            safeToRemove: e
                        } = this.props;
                        e && e()
                    }
                    render() {
                        return null
                    }
                }

                function Co(e) {
                    const [t, n] = (0, mo.xQ)(), r = (0, po.useContext)(vo.L);
                    return (0, ho.jsx)(Ao, (0, o.A)((0, o.A)({}, e), {}, {
                        layoutGroup: r,
                        switchLayoutGroup: (0, po.useContext)(go),
                        isPresent: t,
                        safeToRemove: n
                    }))
                }
                const To = {
                    borderRadius: (0, o.A)((0, o.A)({}, wo), {}, {
                        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                    }),
                    borderTopLeftRadius: wo,
                    borderTopRightRadius: wo,
                    borderBottomLeftRadius: wo,
                    borderBottomRightRadius: wo,
                    boxShadow: xo
                };
                const Po = (e, t) => e.depth - t.depth;
                class _o {
                    constructor() {
                        this.children = [], this.isDirty = !1
                    }
                    add(e) {
                        ae(this.children, e), this.isDirty = !0
                    }
                    remove(e) {
                        se(this.children, e), this.isDirty = !0
                    }
                    forEach(e) {
                        this.isDirty && this.children.sort(Po), this.isDirty = !1, this.children.forEach(e)
                    }
                }

                function Fo(e, t) {
                    const n = ie.now(),
                        r = o => {
                            let {
                                timestamp: i
                            } = o;
                            const a = i - n;
                            a >= t && (ee(r), e(a - t))
                        };
                    return J.read(r, !0), () => ee(r)
                }

                function Ro(e) {
                    const t = me(e) ? e.get() : e;
                    return n = t, Boolean(n && "object" === typeof n && n.mix && n.toValue) ? t.toValue() : t;
                    var n
                }
                const Do = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                    Lo = Do.length,
                    Mo = e => "string" === typeof e ? parseFloat(e) : e,
                    Oo = e => "number" === typeof e || qe.test(e);

                function jo(e, t) {
                    return void 0 !== e[t] ? e[t] : e.borderRadius
                }
                const No = Io(0, .5, Fe),
                    Vo = Io(.5, .95, H);

                function Io(e, t, n) {
                    return r => r < e ? 0 : r > t ? 1 : n(E(e, t, r))
                }

                function zo(e, t) {
                    e.min = t.min, e.max = t.max
                }

                function Bo(e, t) {
                    zo(e.x, t.x), zo(e.y, t.y)
                }

                function Uo(e, t) {
                    e.translate = t.translate, e.scale = t.scale, e.originPoint = t.originPoint, e.origin = t.origin
                }

                function Ho(e, t, n, r, o) {
                    return e = Nr(e -= t, 1 / n, r), void 0 !== o && (e = Nr(e, 1 / o, r)), e
                }

                function Wo(e, t, n, r, o) {
                    let [i, a, s] = n;
                    ! function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .5,
                            o = arguments.length > 4 ? arguments[4] : void 0,
                            i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e,
                            a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : e;
                        Ye.test(t) && (t = parseFloat(t), t = en(a.min, a.max, t / 100) - a.min);
                        if ("number" !== typeof t) return;
                        let s = en(i.min, i.max, r);
                        e === i && (s -= t), e.min = Ho(e.min, t, n, s, o), e.max = Ho(e.max, t, n, s, o)
                    }(e, t[i], t[a], t[s], t.scale, r, o)
                }
                const $o = ["x", "scaleX", "originX"],
                    Ko = ["y", "scaleY", "originY"];

                function Yo(e, t, n, r) {
                    Wo(e.x, t, $o, n ? n.x : void 0, r ? r.x : void 0), Wo(e.y, t, Ko, n ? n.y : void 0, r ? r.y : void 0)
                }

                function qo(e) {
                    return 0 === e.translate && 1 === e.scale
                }

                function Qo(e) {
                    return qo(e.x) && qo(e.y)
                }

                function Go(e, t) {
                    return e.min === t.min && e.max === t.max
                }

                function Xo(e, t) {
                    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
                }

                function Zo(e, t) {
                    return Xo(e.x, t.x) && Xo(e.y, t.y)
                }

                function Jo(e) {
                    return kr(e.x) / kr(e.y)
                }

                function ei(e, t) {
                    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
                }
                class ti {
                    constructor() {
                        this.members = []
                    }
                    add(e) {
                        ae(this.members, e), e.scheduleRender()
                    }
                    remove(e) {
                        if (se(this.members, e), e === this.prevLead && (this.prevLead = void 0), e === this.lead) {
                            const e = this.members[this.members.length - 1];
                            e && this.promote(e)
                        }
                    }
                    relegate(e) {
                        const t = this.members.findIndex((t => e === t));
                        if (0 === t) return !1;
                        let n;
                        for (let r = t; r >= 0; r--) {
                            const e = this.members[r];
                            if (!1 !== e.isPresent) {
                                n = e;
                                break
                            }
                        }
                        return !!n && (this.promote(n), !0)
                    }
                    promote(e, t) {
                        const n = this.lead;
                        if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
                            n.instance && n.scheduleRender(), e.scheduleRender(), e.resumeFrom = n, t && (e.resumeFrom.preserveOpacity = !0), n.snapshot && (e.snapshot = n.snapshot, e.snapshot.latestValues = n.animationValues || n.latestValues), e.root && e.root.isUpdating && (e.isLayoutDirty = !0);
                            const {
                                crossfade: r
                            } = e.options;
                            !1 === r && n.hide()
                        }
                    }
                    exitAnimationComplete() {
                        this.members.forEach((e => {
                            const {
                                options: t,
                                resumingFrom: n
                            } = e;
                            t.onExitComplete && t.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete()
                        }))
                    }
                    scheduleRender() {
                        this.members.forEach((e => {
                            e.instance && e.scheduleRender(!1)
                        }))
                    }
                    removeLeadSnapshot() {
                        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                    }
                }
                const ni = {
                        nodes: 0,
                        calculatedTargetDeltas: 0,
                        calculatedProjections: 0
                    },
                    ri = ["", "X", "Y", "Z"],
                    oi = {
                        visibility: "hidden"
                    };
                let ii = 0;

                function ai(e, t, n, r) {
                    const {
                        latestValues: o
                    } = t;
                    o[e] && (n[e] = o[e], t.setStaticValue(e, 0), r && (r[e] = 0))
                }

                function si(e) {
                    if (e.hasCheckedOptimisedAppear = !0, e.root === e) return;
                    const {
                        visualElement: t
                    } = e.options;
                    if (!t) return;
                    const n = be(t);
                    if (window.MotionHasOptimisedAnimation(n, "transform")) {
                        const {
                            layout: t,
                            layoutId: r
                        } = e.options;
                        window.MotionCancelOptimisedAnimation(n, "transform", J, !(t || r))
                    }
                    const {
                        parent: r
                    } = e;
                    r && !r.hasCheckedOptimisedAppear && si(r)
                }

                function li(e) {
                    let {
                        attachResizeListener: t,
                        defaultParent: n,
                        measureScroll: r,
                        checkIsScrollRoot: i,
                        resetTransform: a
                    } = e;
                    return class {
                        constructor() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null === n || void 0 === n ? void 0 : n();
                            this.id = ii++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = {
                                x: 1,
                                y: 1
                            }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                                this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                            }, this.updateProjection = () => {
                                this.projectionUpdateScheduled = !1, X.value && (ni.nodes = ni.calculatedTargetDeltas = ni.calculatedProjections = 0), this.nodes.forEach(di), this.nodes.forEach(yi), this.nodes.forEach(bi), this.nodes.forEach(fi), X.addProjectionMetrics && X.addProjectionMetrics(ni)
                            }, this.resolvedRelativeTargetAt = 0, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = e, this.root = t ? t.root || t : this, this.path = t ? [...t.path, t] : [], this.parent = t, this.depth = t ? t.depth + 1 : 0;
                            for (let n = 0; n < this.path.length; n++) this.path[n].shouldResetTransform = !0;
                            this.root === this && (this.nodes = new _o)
                        }
                        addEventListener(e, t) {
                            return this.eventHandlers.has(e) || this.eventHandlers.set(e, new le), this.eventHandlers.get(e).add(t)
                        }
                        notifyListeners(e) {
                            const t = this.eventHandlers.get(e);
                            for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                            t && t.notify(...r)
                        }
                        hasListeners(e) {
                            return this.eventHandlers.has(e)
                        }
                        mount(e) {
                            let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this.root.hasTreeAnimated;
                            if (this.instance) return;
                            var r;
                            this.isSVG = (r = e) instanceof SVGElement && "svg" !== r.tagName, this.instance = e;
                            const {
                                layoutId: i,
                                layout: a,
                                visualElement: s
                            } = this.options;
                            if (s && !s.current && s.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), n && (a || i) && (this.isLayoutDirty = !0), t) {
                                let n;
                                const r = () => this.root.updateBlockedByResize = !1;
                                t(e, (() => {
                                    this.root.updateBlockedByResize = !0, n && n(), n = Fo(r, 250), yo.hasAnimatedSinceResize && (yo.hasAnimatedSinceResize = !1, this.nodes.forEach(gi))
                                }))
                            }
                            i && this.root.registerSharedNode(i, this), !1 !== this.options.animate && s && (i || a) && this.addEventListener("didUpdate", (e => {
                                let {
                                    delta: t,
                                    hasLayoutChanged: n,
                                    hasRelativeLayoutChanged: r,
                                    layout: i
                                } = e;
                                if (this.isTreeAnimationBlocked()) return this.target = void 0, void(this.relativeTarget = void 0);
                                const a = this.options.transition || s.getDefaultTransition() || Ai,
                                    {
                                        onLayoutAnimationStart: l,
                                        onLayoutAnimationComplete: u
                                    } = s.getProps(),
                                    c = !this.targetLayout || !Zo(this.targetLayout, i),
                                    d = !n && r;
                                if (this.options.layoutRoot || this.resumeFrom || d || n && (c || !this.currentAnimation)) {
                                    this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, d);
                                    const e = (0, o.A)((0, o.A)({}, p(a, "layout")), {}, {
                                        onPlay: l,
                                        onComplete: u
                                    });
                                    (s.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                                } else n || gi(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                                this.targetLayout = i
                            }))
                        }
                        unmount() {
                            this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                            const e = this.getStack();
                            e && e.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, ee(this.updateProjection)
                        }
                        blockUpdate() {
                            this.updateManuallyBlocked = !0
                        }
                        unblockUpdate() {
                            this.updateManuallyBlocked = !1
                        }
                        isUpdateBlocked() {
                            return this.updateManuallyBlocked || this.updateBlockedByResize
                        }
                        isTreeAnimationBlocked() {
                            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                        }
                        startUpdate() {
                            this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(wi), this.animationId++)
                        }
                        getTransformTemplate() {
                            const {
                                visualElement: e
                            } = this.options;
                            return e && e.getProps().transformTemplate
                        }
                        willUpdate() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) return void(this.options.onExitComplete && this.options.onExitComplete());
                            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && si(this), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty) return;
                            this.isLayoutDirty = !0;
                            for (let o = 0; o < this.path.length; o++) {
                                const e = this.path[o];
                                e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                            }
                            const {
                                layoutId: t,
                                layout: n
                            } = this.options;
                            if (void 0 === t && !n) return;
                            const r = this.getTransformTemplate();
                            this.prevTransformTemplateValue = r ? r(this.latestValues, "") : void 0, this.updateSnapshot(), e && this.notifyListeners("willUpdate")
                        }
                        update() {
                            this.updateScheduled = !1;
                            if (this.isUpdateBlocked()) return this.unblockUpdate(), this.clearAllSnapshots(), void this.nodes.forEach(pi);
                            this.isUpdating || this.nodes.forEach(mi), this.isUpdating = !1, this.nodes.forEach(vi), this.nodes.forEach(ui), this.nodes.forEach(ci), this.clearAllSnapshots();
                            const e = ie.now();
                            te.delta = Le(0, 1e3 / 60, e - te.timestamp), te.timestamp = e, te.isProcessing = !0, ne.update.process(te), ne.preRender.process(te), ne.render.process(te), te.isProcessing = !1
                        }
                        didUpdate() {
                            this.updateScheduled || (this.updateScheduled = !0, Eo.read(this.scheduleUpdate))
                        }
                        clearAllSnapshots() {
                            this.nodes.forEach(hi), this.sharedNodes.forEach(xi)
                        }
                        scheduleUpdateProjection() {
                            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, J.preRender(this.updateProjection, !1, !0))
                        }
                        scheduleCheckAfterUnmount() {
                            J.postRender((() => {
                                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                            }))
                        }
                        updateSnapshot() {
                            !this.snapshot && this.instance && (this.snapshot = this.measure(), !this.snapshot || kr(this.snapshot.measuredBox.x) || kr(this.snapshot.measuredBox.y) || (this.snapshot = void 0))
                        }
                        updateLayout() {
                            if (!this.instance) return;
                            if (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty) return;
                            if (this.resumeFrom && !this.resumeFrom.instance)
                                for (let n = 0; n < this.path.length; n++) {
                                    this.path[n].updateScroll()
                                }
                            const e = this.layout;
                            this.layout = this.measure(!1), this.layoutCorrected = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            }, this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                            const {
                                visualElement: t
                            } = this.options;
                            t && t.notify("LayoutMeasure", this.layout.layoutBox, e ? e.layoutBox : void 0)
                        }
                        updateScroll() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "measure",
                                t = Boolean(this.options.layoutScroll && this.instance);
                            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === e && (t = !1), t) {
                                const t = i(this.instance);
                                this.scroll = {
                                    animationId: this.root.animationId,
                                    phase: e,
                                    isRoot: t,
                                    offset: r(this.instance),
                                    wasRoot: this.scroll ? this.scroll.isRoot : t
                                }
                            }
                        }
                        resetTransform() {
                            if (!a) return;
                            const e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout,
                                t = this.projectionDelta && !Qo(this.projectionDelta),
                                n = this.getTransformTemplate(),
                                r = n ? n(this.latestValues, "") : void 0,
                                o = r !== this.prevTransformTemplateValue;
                            e && (t || Mr(this.latestValues) || o) && (a(this.instance, r), this.shouldResetTransform = !1, this.scheduleRender())
                        }
                        measure() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            const t = this.measurePageBox();
                            let n = this.removeElementScroll(t);
                            var r;
                            return e && (n = this.removeTransform(n)), Pi((r = n).x), Pi(r.y), {
                                animationId: this.root.animationId,
                                measuredBox: t,
                                layoutBox: n,
                                latestValues: {},
                                source: this.id
                            }
                        }
                        measurePageBox() {
                            var e;
                            const {
                                visualElement: t
                            } = this.options;
                            if (!t) return {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            const n = t.measureViewportBox();
                            if (!((null === (e = this.scroll) || void 0 === e ? void 0 : e.wasRoot) || this.path.some(Fi))) {
                                const {
                                    scroll: e
                                } = this.root;
                                e && (Hr(n.x, e.offset.x), Hr(n.y, e.offset.y))
                            }
                            return n
                        }
                        removeElementScroll(e) {
                            var t;
                            const n = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            if (Bo(n, e), null === (t = this.scroll) || void 0 === t ? void 0 : t.wasRoot) return n;
                            for (let r = 0; r < this.path.length; r++) {
                                const t = this.path[r],
                                    {
                                        scroll: o,
                                        options: i
                                    } = t;
                                t !== this.root && o && i.layoutScroll && (o.wasRoot && Bo(n, e), Hr(n.x, o.offset.x), Hr(n.y, o.offset.y))
                            }
                            return n
                        }
                        applyTransform(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            const n = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Bo(n, e);
                            for (let r = 0; r < this.path.length; r++) {
                                const e = this.path[r];
                                !t && e.options.layoutScroll && e.scroll && e !== e.root && $r(n, {
                                    x: -e.scroll.offset.x,
                                    y: -e.scroll.offset.y
                                }), Mr(e.latestValues) && $r(n, e.latestValues)
                            }
                            return Mr(this.latestValues) && $r(n, this.latestValues), n
                        }
                        removeTransform(e) {
                            const t = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            };
                            Bo(t, e);
                            for (let n = 0; n < this.path.length; n++) {
                                const e = this.path[n];
                                if (!e.instance) continue;
                                if (!Mr(e.latestValues)) continue;
                                Lr(e.latestValues) && e.updateSnapshot();
                                const r = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                };
                                Bo(r, e.measurePageBox()), Yo(t, e.latestValues, e.snapshot ? e.snapshot.layoutBox : void 0, r)
                            }
                            return Mr(this.latestValues) && Yo(t, this.latestValues), t
                        }
                        setTargetDelta(e) {
                            this.targetDelta = e, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                        }
                        setOptions(e) {
                            this.options = (0, o.A)((0, o.A)((0, o.A)({}, this.options), e), {}, {
                                crossfade: void 0 === e.crossfade || e.crossfade
                            })
                        }
                        clearMeasurements() {
                            this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                        }
                        forceRelativeParentToResolveTarget() {
                            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== te.timestamp && this.relativeParent.resolveTargetDelta(!0)
                        }
                        resolveTargetDelta() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            var t;
                            const n = this.getLead();
                            this.isProjectionDirty || (this.isProjectionDirty = n.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = n.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = n.isSharedProjectionDirty);
                            const r = Boolean(this.resumingFrom) || this !== n;
                            if (!(e || r && this.isSharedProjectionDirty || this.isProjectionDirty || (null === (t = this.parent) || void 0 === t ? void 0 : t.isProjectionDirty) || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize)) return;
                            const {
                                layout: o,
                                layoutId: i
                            } = this.options;
                            if (this.layout && (o || i)) {
                                if (this.resolvedRelativeTargetAt = te.timestamp, !this.targetDelta && !this.relativeTarget) {
                                    const e = this.getClosestProjectingParent();
                                    e && e.layout && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }, this.relativeTargetOrigin = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    }, _r(this.relativeTargetOrigin, this.layout.layoutBox, e.layout.layoutBox), Bo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                if (this.relativeTarget || this.targetDelta) {
                                    var a, s, l;
                                    if (this.target || (this.target = {
                                            x: {
                                                min: 0,
                                                max: 0
                                            },
                                            y: {
                                                min: 0,
                                                max: 0
                                            }
                                        }, this.targetWithTransforms = {
                                            x: {
                                                min: 0,
                                                max: 0
                                            },
                                            y: {
                                                min: 0,
                                                max: 0
                                            }
                                        }), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), a = this.target, s = this.relativeTarget, l = this.relativeParent.target, Tr(a.x, s.x, l.x), Tr(a.y, s.y, l.y)) : this.targetDelta ? (Boolean(this.resumingFrom) ? this.target = this.applyTransform(this.layout.layoutBox) : Bo(this.target, this.layout.layoutBox), zr(this.target, this.targetDelta)) : Bo(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                        this.attemptToResolveRelativeTarget = !1;
                                        const e = this.getClosestProjectingParent();
                                        e && Boolean(e.resumingFrom) === Boolean(this.resumingFrom) && !e.options.layoutScroll && e.target && 1 !== this.animationProgress ? (this.relativeParent = e, this.forceRelativeParentToResolveTarget(), this.relativeTarget = {
                                            x: {
                                                min: 0,
                                                max: 0
                                            },
                                            y: {
                                                min: 0,
                                                max: 0
                                            }
                                        }, this.relativeTargetOrigin = {
                                            x: {
                                                min: 0,
                                                max: 0
                                            },
                                            y: {
                                                min: 0,
                                                max: 0
                                            }
                                        }, _r(this.relativeTargetOrigin, this.target, e.target), Bo(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                    }
                                    X.value && ni.calculatedTargetDeltas++
                                }
                            }
                        }
                        getClosestProjectingParent() {
                            if (this.parent && !Lr(this.parent.latestValues) && !Or(this.parent.latestValues)) return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
                        }
                        isProjecting() {
                            return Boolean((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                        }
                        calcProjection() {
                            var e;
                            const t = this.getLead(),
                                n = Boolean(this.resumingFrom) || this !== t;
                            let r = !0;
                            if ((this.isProjectionDirty || (null === (e = this.parent) || void 0 === e ? void 0 : e.isProjectionDirty)) && (r = !1), n && (this.isSharedProjectionDirty || this.isTransformDirty) && (r = !1), this.resolvedRelativeTargetAt === te.timestamp && (r = !1), r) return;
                            const {
                                layout: o,
                                layoutId: i
                            } = this.options;
                            if (this.isTreeAnimating = Boolean(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !o && !i) return;
                            Bo(this.layoutCorrected, this.layout.layoutBox);
                            const a = this.treeScale.x,
                                s = this.treeScale.y;
                            ! function(e, t, n) {
                                let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                                const o = n.length;
                                if (!o) return;
                                let i, a;
                                t.x = t.y = 1;
                                for (let s = 0; s < o; s++) {
                                    i = n[s], a = i.projectionDelta;
                                    const {
                                        visualElement: o
                                    } = i.options;
                                    o && o.props.style && "contents" === o.props.style.display || (r && i.options.layoutScroll && i.scroll && i !== i.root && $r(e, {
                                        x: -i.scroll.offset.x,
                                        y: -i.scroll.offset.y
                                    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, zr(e, a)), r && Mr(i.latestValues) && $r(e, i.latestValues))
                                }
                                t.x < Ur && t.x > Br && (t.x = 1), t.y < Ur && t.y > Br && (t.y = 1)
                            }(this.layoutCorrected, this.treeScale, this.path, n), !t.layout || t.target || 1 === this.treeScale.x && 1 === this.treeScale.y || (t.target = t.layout.layoutBox, t.targetWithTransforms = {
                                x: {
                                    min: 0,
                                    max: 0
                                },
                                y: {
                                    min: 0,
                                    max: 0
                                }
                            });
                            const {
                                target: l
                            } = t;
                            l ? (this.projectionDelta && this.prevProjectionDelta ? (Uo(this.prevProjectionDelta.x, this.projectionDelta.x), Uo(this.prevProjectionDelta.y, this.projectionDelta.y)) : this.createProjectionDeltas(), Cr(this.projectionDelta, this.layoutCorrected, l, this.latestValues), this.treeScale.x === a && this.treeScale.y === s && ei(this.projectionDelta.x, this.prevProjectionDelta.x) && ei(this.projectionDelta.y, this.prevProjectionDelta.y) || (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", l)), X.value && ni.calculatedProjections++) : this.prevProjectionDelta && (this.createProjectionDeltas(), this.scheduleRender())
                        }
                        hide() {
                            this.isVisible = !1
                        }
                        show() {
                            this.isVisible = !0
                        }
                        scheduleRender() {
                            let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                            var t;
                            if (null === (t = this.options.visualElement) || void 0 === t || t.scheduleRender(), e) {
                                const e = this.getStack();
                                e && e.scheduleRender()
                            }
                            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                        }
                        createProjectionDeltas() {
                            this.prevProjectionDelta = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            }, this.projectionDelta = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            }, this.projectionDeltaWithTransform = {
                                x: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                },
                                y: {
                                    translate: 0,
                                    scale: 1,
                                    origin: 0,
                                    originPoint: 0
                                }
                            }
                        }
                        setAnimationOrigin(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            const n = this.snapshot,
                                r = n ? n.latestValues : {},
                                i = (0, o.A)({}, this.latestValues),
                                a = {
                                    x: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    },
                                    y: {
                                        translate: 0,
                                        scale: 1,
                                        origin: 0,
                                        originPoint: 0
                                    }
                                };
                            this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !t;
                            const s = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                },
                                l = (n ? n.source : void 0) !== (this.layout ? this.layout.source : void 0),
                                u = this.getStack(),
                                c = !u || u.members.length <= 1,
                                d = Boolean(l && !c && !0 === this.options.crossfade && !this.path.some(ki));
                            let f;
                            this.animationProgress = 0, this.mixTargetDelta = t => {
                                const n = t / 1e3;
                                var o, u, h, p, m, v;
                                Si(a.x, e.x, n), Si(a.y, e.y, n), this.setTargetDelta(a), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (_r(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox), h = this.relativeTarget, p = this.relativeTargetOrigin, m = s, v = n, Ei(h.x, p.x, m.x, v), Ei(h.y, p.y, m.y, v), f && (o = this.relativeTarget, u = f, Go(o.x, u.x) && Go(o.y, u.y)) && (this.isProjectionDirty = !1), f || (f = {
                                    x: {
                                        min: 0,
                                        max: 0
                                    },
                                    y: {
                                        min: 0,
                                        max: 0
                                    }
                                }), Bo(f, this.relativeTarget)), l && (this.animationValues = i, function(e, t, n, r, o, i) {
                                    o ? (e.opacity = en(0, void 0 !== n.opacity ? n.opacity : 1, No(r)), e.opacityExit = en(void 0 !== t.opacity ? t.opacity : 1, 0, Vo(r))) : i && (e.opacity = en(void 0 !== t.opacity ? t.opacity : 1, void 0 !== n.opacity ? n.opacity : 1, r));
                                    for (let a = 0; a < Lo; a++) {
                                        const o = "border".concat(Do[a], "Radius");
                                        let i = jo(t, o),
                                            s = jo(n, o);
                                        void 0 === i && void 0 === s || (i || (i = 0), s || (s = 0), 0 === i || 0 === s || Oo(i) === Oo(s) ? (e[o] = Math.max(en(Mo(i), Mo(s), r), 0), (Ye.test(s) || Ye.test(i)) && (e[o] += "%")) : e[o] = s)
                                    }(t.rotate || n.rotate) && (e.rotate = en(t.rotate || 0, n.rotate || 0, r))
                                }(i, r, this.latestValues, n, d, c)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = n
                            }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
                        }
                        startAnimation(e) {
                            this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (ee(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = J.update((() => {
                                yo.hasAnimatedSinceResize = !0, Jt.layout++, this.currentAnimation = function(e, t, n) {
                                    const r = me(e) ? e : fe(e);
                                    return r.start(Xn("", r, t, n)), r.animation
                                }(0, 1e3, (0, o.A)((0, o.A)({}, e), {}, {
                                    onUpdate: t => {
                                        this.mixTargetDelta(t), e.onUpdate && e.onUpdate(t)
                                    },
                                    onStop: () => {
                                        Jt.layout--
                                    },
                                    onComplete: () => {
                                        Jt.layout--, e.onComplete && e.onComplete(), this.completeAnimation()
                                    }
                                })), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                            }))
                        }
                        completeAnimation() {
                            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                            const e = this.getStack();
                            e && e.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                        }
                        finishAnimation() {
                            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                        }
                        applyTransformsToTarget() {
                            const e = this.getLead();
                            let {
                                targetWithTransforms: t,
                                target: n,
                                layout: r,
                                latestValues: o
                            } = e;
                            if (t && n && r) {
                                if (this !== e && this.layout && r && _i(this.options.animationType, this.layout.layoutBox, r.layoutBox)) {
                                    n = this.target || {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    };
                                    const t = kr(this.layout.layoutBox.x);
                                    n.x.min = e.target.x.min, n.x.max = n.x.min + t;
                                    const r = kr(this.layout.layoutBox.y);
                                    n.y.min = e.target.y.min, n.y.max = n.y.min + r
                                }
                                Bo(t, n), $r(t, o), Cr(this.projectionDeltaWithTransform, this.layoutCorrected, t, o)
                            }
                        }
                        registerSharedNode(e, t) {
                            this.sharedNodes.has(e) || this.sharedNodes.set(e, new ti);
                            this.sharedNodes.get(e).add(t);
                            const n = t.options.initialPromotionConfig;
                            t.promote({
                                transition: n ? n.transition : void 0,
                                preserveFollowOpacity: n && n.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : void 0
                            })
                        }
                        isLead() {
                            const e = this.getStack();
                            return !e || e.lead === this
                        }
                        getLead() {
                            var e;
                            const {
                                layoutId: t
                            } = this.options;
                            return t && (null === (e = this.getStack()) || void 0 === e ? void 0 : e.lead) || this
                        }
                        getPrevLead() {
                            var e;
                            const {
                                layoutId: t
                            } = this.options;
                            return t ? null === (e = this.getStack()) || void 0 === e ? void 0 : e.prevLead : void 0
                        }
                        getStack() {
                            const {
                                layoutId: e
                            } = this.options;
                            if (e) return this.root.sharedNodes.get(e)
                        }
                        promote() {
                            let {
                                needsReset: e,
                                transition: t,
                                preserveFollowOpacity: n
                            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const r = this.getStack();
                            r && r.promote(this, n), e && (this.projectionDelta = void 0, this.needsReset = !0), t && this.setOptions({
                                transition: t
                            })
                        }
                        relegate() {
                            const e = this.getStack();
                            return !!e && e.relegate(this)
                        }
                        resetSkewAndRotation() {
                            const {
                                visualElement: e
                            } = this.options;
                            if (!e) return;
                            let t = !1;
                            const {
                                latestValues: n
                            } = e;
                            if ((n.z || n.rotate || n.rotateX || n.rotateY || n.rotateZ || n.skewX || n.skewY) && (t = !0), !t) return;
                            const r = {};
                            n.z && ai("z", e, r, this.animationValues);
                            for (let o = 0; o < ri.length; o++) ai("rotate".concat(ri[o]), e, r, this.animationValues), ai("skew".concat(ri[o]), e, r, this.animationValues);
                            e.render();
                            for (const o in r) e.setStaticValue(o, r[o]), this.animationValues && (this.animationValues[o] = r[o]);
                            e.scheduleRender()
                        }
                        getProjectionStyles(e) {
                            var t, n;
                            if (!this.instance || this.isSVG) return;
                            if (!this.isVisible) return oi;
                            const r = {
                                    visibility: ""
                                },
                                o = this.getTransformTemplate();
                            if (this.needsReset) return this.needsReset = !1, r.opacity = "", r.pointerEvents = Ro(null === e || void 0 === e ? void 0 : e.pointerEvents) || "", r.transform = o ? o(this.latestValues, "") : "none", r;
                            const i = this.getLead();
                            if (!this.projectionDelta || !this.layout || !i.target) {
                                const t = {};
                                return this.options.layoutId && (t.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, t.pointerEvents = Ro(null === e || void 0 === e ? void 0 : e.pointerEvents) || ""), this.hasProjected && !Mr(this.latestValues) && (t.transform = o ? o({}, "") : "none", this.hasProjected = !1), t
                            }
                            const a = i.animationValues || i.latestValues;
                            this.applyTransformsToTarget(), r.transform = function(e, t, n) {
                                let r = "";
                                const o = e.x.translate / t.x,
                                    i = e.y.translate / t.y,
                                    a = (null === n || void 0 === n ? void 0 : n.z) || 0;
                                if ((o || i || a) && (r = "translate3d(".concat(o, "px, ").concat(i, "px, ").concat(a, "px) ")), 1 === t.x && 1 === t.y || (r += "scale(".concat(1 / t.x, ", ").concat(1 / t.y, ") ")), n) {
                                    const {
                                        transformPerspective: e,
                                        rotate: t,
                                        rotateX: o,
                                        rotateY: i,
                                        skewX: a,
                                        skewY: s
                                    } = n;
                                    e && (r = "perspective(".concat(e, "px) ").concat(r)), t && (r += "rotate(".concat(t, "deg) ")), o && (r += "rotateX(".concat(o, "deg) ")), i && (r += "rotateY(".concat(i, "deg) ")), a && (r += "skewX(".concat(a, "deg) ")), s && (r += "skewY(".concat(s, "deg) "))
                                }
                                const s = e.x.scale * t.x,
                                    l = e.y.scale * t.y;
                                return 1 === s && 1 === l || (r += "scale(".concat(s, ", ").concat(l, ")")), r || "none"
                            }(this.projectionDeltaWithTransform, this.treeScale, a), o && (r.transform = o(a, r.transform));
                            const {
                                x: s,
                                y: l
                            } = this.projectionDelta;
                            r.transformOrigin = "".concat(100 * s.origin, "% ").concat(100 * l.origin, "% 0"), i.animationValues ? r.opacity = i === this ? null !== (n = null !== (t = a.opacity) && void 0 !== t ? t : this.latestValues.opacity) && void 0 !== n ? n : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : r.opacity = i === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0;
                            for (const u in So) {
                                if (void 0 === a[u]) continue;
                                const {
                                    correct: e,
                                    applyTo: t,
                                    isCSSVariable: n
                                } = So[u], o = "none" === r.transform ? a[u] : e(a[u], i);
                                if (t) {
                                    const e = t.length;
                                    for (let n = 0; n < e; n++) r[t[n]] = o
                                } else n ? this.options.visualElement.renderState.vars[u] = o : r[u] = o
                            }
                            return this.options.layoutId && (r.pointerEvents = i === this ? Ro(null === e || void 0 === e ? void 0 : e.pointerEvents) || "" : "none"), r
                        }
                        clearSnapshot() {
                            this.resumeFrom = this.snapshot = void 0
                        }
                        resetTree() {
                            this.root.nodes.forEach((e => {
                                var t;
                                return null === (t = e.currentAnimation) || void 0 === t ? void 0 : t.stop()
                            })), this.root.nodes.forEach(pi), this.root.sharedNodes.clear()
                        }
                    }
                }

                function ui(e) {
                    e.updateLayout()
                }

                function ci(e) {
                    var t;
                    const n = (null === (t = e.resumeFrom) || void 0 === t ? void 0 : t.snapshot) || e.snapshot;
                    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
                        const {
                            layoutBox: t,
                            measuredBox: r
                        } = e.layout, {
                            animationType: o
                        } = e.options, i = n.source !== e.layout.source;
                        "size" === o ? Rr((e => {
                            const r = i ? n.measuredBox[e] : n.layoutBox[e],
                                o = kr(r);
                            r.min = t[e].min, r.max = r.min + o
                        })) : _i(o, n.layoutBox, t) && Rr((r => {
                            const o = i ? n.measuredBox[r] : n.layoutBox[r],
                                a = kr(t[r]);
                            o.max = o.min + a, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[r].max = e.relativeTarget[r].min + a)
                        }));
                        const a = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        };
                        Cr(a, t, n.layoutBox);
                        const s = {
                            x: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            },
                            y: {
                                translate: 0,
                                scale: 1,
                                origin: 0,
                                originPoint: 0
                            }
                        };
                        i ? Cr(s, e.applyTransform(r, !0), n.measuredBox) : Cr(s, t, n.layoutBox);
                        const l = !Qo(a);
                        let u = !1;
                        if (!e.resumeFrom) {
                            const r = e.getClosestProjectingParent();
                            if (r && !r.resumeFrom) {
                                const {
                                    snapshot: o,
                                    layout: i
                                } = r;
                                if (o && i) {
                                    const a = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    };
                                    _r(a, n.layoutBox, o.layoutBox);
                                    const s = {
                                        x: {
                                            min: 0,
                                            max: 0
                                        },
                                        y: {
                                            min: 0,
                                            max: 0
                                        }
                                    };
                                    _r(s, t, i.layoutBox), Zo(a, s) || (u = !0), r.options.layoutRoot && (e.relativeTarget = s, e.relativeTargetOrigin = a, e.relativeParent = r)
                                }
                            }
                        }
                        e.notifyListeners("didUpdate", {
                            layout: t,
                            snapshot: n,
                            delta: s,
                            layoutDelta: a,
                            hasLayoutChanged: l,
                            hasRelativeLayoutChanged: u
                        })
                    } else if (e.isLead()) {
                        const {
                            onExitComplete: t
                        } = e.options;
                        t && t()
                    }
                    e.options.transition = void 0
                }

                function di(e) {
                    X.value && ni.nodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = Boolean(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
                }

                function fi(e) {
                    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
                }

                function hi(e) {
                    e.clearSnapshot()
                }

                function pi(e) {
                    e.clearMeasurements()
                }

                function mi(e) {
                    e.isLayoutDirty = !1
                }

                function vi(e) {
                    const {
                        visualElement: t
                    } = e.options;
                    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform()
                }

                function gi(e) {
                    e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0
                }

                function yi(e) {
                    e.resolveTargetDelta()
                }

                function bi(e) {
                    e.calcProjection()
                }

                function wi(e) {
                    e.resetSkewAndRotation()
                }

                function xi(e) {
                    e.removeLeadSnapshot()
                }

                function Si(e, t, n) {
                    e.translate = en(t.translate, 0, n), e.scale = en(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint
                }

                function Ei(e, t, n, r) {
                    e.min = en(t.min, n.min, r), e.max = en(t.max, n.max, r)
                }

                function ki(e) {
                    return e.animationValues && void 0 !== e.animationValues.opacityExit
                }
                const Ai = {
                        duration: .45,
                        ease: [.4, 0, .1, 1]
                    },
                    Ci = e => "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e),
                    Ti = Ci("applewebkit/") && !Ci("chrome/") ? Math.round : H;

                function Pi(e) {
                    e.min = Ti(e.min), e.max = Ti(e.max)
                }

                function _i(e, t, n) {
                    return "position" === e || "preserve-aspect" === e && (r = Jo(t), o = Jo(n), i = .2, !(Math.abs(r - o) <= i));
                    var r, o, i
                }

                function Fi(e) {
                    var t;
                    return e !== e.root && (null === (t = e.scroll) || void 0 === t ? void 0 : t.wasRoot)
                }
                const Ri = li({
                        attachResizeListener: (e, t) => wr(e, "resize", t),
                        measureScroll: () => ({
                            x: document.documentElement.scrollLeft || document.body.scrollLeft,
                            y: document.documentElement.scrollTop || document.body.scrollTop
                        }),
                        checkIsScrollRoot: () => !0
                    }),
                    Di = {
                        current: void 0
                    },
                    Li = li({
                        measureScroll: e => ({
                            x: e.scrollLeft,
                            y: e.scrollTop
                        }),
                        defaultParent: () => {
                            if (!Di.current) {
                                const e = new Ri({});
                                e.mount(window), e.setOptions({
                                    layoutScroll: !0
                                }), Di.current = e
                            }
                            return Di.current
                        },
                        resetTransform: (e, t) => {
                            e.style.transform = void 0 !== t ? t : "none"
                        },
                        checkIsScrollRoot: e => Boolean("fixed" === window.getComputedStyle(e).position)
                    }),
                    Mi = {
                        pan: {
                            Feature: class extends gr {
                                constructor() {
                                    super(...arguments), this.removePointerDownListener = H
                                }
                                onPointerDown(e) {
                                    this.session = new Qr(e, this.createPanHandlers(), {
                                        transformPagePoint: this.node.getTransformPagePoint()
                                    })
                                }
                                createPanHandlers() {
                                    const {
                                        onPanSessionStart: e,
                                        onPanStart: t,
                                        onPan: n,
                                        onPanEnd: r
                                    } = this.node.getProps();
                                    return {
                                        onSessionStart: fo(e),
                                        onStart: fo(t),
                                        onMove: n,
                                        onEnd: (e, t) => {
                                            delete this.session, r && J.postRender((() => r(e, t)))
                                        }
                                    }
                                }
                                mount() {
                                    this.removePointerDownListener = Sr(this.node.current, "pointerdown", (e => this.onPointerDown(e)))
                                }
                                update() {
                                    this.session && this.session.updateHandlers(this.createPanHandlers())
                                }
                                unmount() {
                                    this.removePointerDownListener(), this.session && this.session.end()
                                }
                            }
                        },
                        drag: {
                            Feature: class extends gr {
                                constructor(e) {
                                    super(e), this.removeGroupControls = H, this.removeListeners = H, this.controls = new uo(e)
                                }
                                mount() {
                                    const {
                                        dragControls: e
                                    } = this.node.getProps();
                                    e && (this.removeGroupControls = e.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || H
                                }
                                unmount() {
                                    this.removeGroupControls(), this.removeListeners()
                                }
                            },
                            ProjectionNode: Li,
                            MeasureLayout: Co
                        }
                    };

                function Oi(e, t, n) {
                    const {
                        props: r
                    } = e;
                    e.animationState && r.whileHover && e.animationState.setActive("whileHover", "Start" === n);
                    const o = r["onHover" + n];
                    o && J.postRender((() => o(t, xr(t))))
                }

                function ji(e, t, n) {
                    const {
                        props: r
                    } = e;
                    if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
                    e.animationState && r.whileTap && e.animationState.setActive("whileTap", "Start" === n);
                    const o = r["onTap" + ("End" === n ? "" : n)];
                    o && J.postRender((() => o(t, xr(t))))
                }
                const Ni = ["root"],
                    Vi = new WeakMap,
                    Ii = new WeakMap,
                    zi = e => {
                        const t = Vi.get(e.target);
                        t && t(e)
                    },
                    Bi = e => {
                        e.forEach(zi)
                    };

                function Ui(e, t, n) {
                    const r = function(e) {
                        let {
                            root: t
                        } = e, n = (0, a.A)(e, Ni);
                        const r = t || document;
                        Ii.has(r) || Ii.set(r, {});
                        const i = Ii.get(r),
                            s = JSON.stringify(n);
                        return i[s] || (i[s] = new IntersectionObserver(Bi, (0, o.A)({
                            root: t
                        }, n))), i[s]
                    }(t);
                    return Vi.set(e, n), r.observe(e), () => {
                        Vi.delete(e), r.unobserve(e)
                    }
                }
                const Hi = {
                    some: 0,
                    all: 1
                };
                const Wi = {
                        inView: {
                            Feature: class extends gr {
                                constructor() {
                                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                                }
                                startObserver() {
                                    this.unmount();
                                    const {
                                        viewport: e = {}
                                    } = this.node.getProps(), {
                                        root: t,
                                        margin: n,
                                        amount: r = "some",
                                        once: o
                                    } = e, i = {
                                        root: t ? t.current : void 0,
                                        rootMargin: n,
                                        threshold: "number" === typeof r ? r : Hi[r]
                                    };
                                    return Ui(this.node.current, i, (e => {
                                        const {
                                            isIntersecting: t
                                        } = e;
                                        if (this.isInView === t) return;
                                        if (this.isInView = t, o && !t && this.hasEnteredView) return;
                                        t && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", t);
                                        const {
                                            onViewportEnter: n,
                                            onViewportLeave: r
                                        } = this.node.getProps(), i = t ? n : r;
                                        i && i(e)
                                    }))
                                }
                                mount() {
                                    this.startObserver()
                                }
                                update() {
                                    if ("undefined" === typeof IntersectionObserver) return;
                                    const {
                                        props: e,
                                        prevProps: t
                                    } = this.node, n = ["amount", "margin", "root"].some(function(e) {
                                        let {
                                            viewport: t = {}
                                        } = e, {
                                            viewport: n = {}
                                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        return e => t[e] !== n[e]
                                    }(e, t));
                                    n && this.startObserver()
                                }
                                unmount() {}
                            }
                        },
                        tap: {
                            Feature: class extends gr {
                                mount() {
                                    const {
                                        current: e
                                    } = this.node;
                                    e && (this.unmount = z(e, ((e, t) => (ji(this.node, t, "Start"), (e, t) => {
                                        let {
                                            success: n
                                        } = t;
                                        return ji(this.node, e, n ? "End" : "Cancel")
                                    })), {
                                        useGlobalTarget: this.node.props.globalTapTarget
                                    }))
                                }
                                unmount() {}
                            }
                        },
                        focus: {
                            Feature: class extends gr {
                                constructor() {
                                    super(...arguments), this.isActive = !1
                                }
                                onFocus() {
                                    let e = !1;
                                    try {
                                        e = this.node.current.matches(":focus-visible")
                                    } catch (t) {
                                        e = !0
                                    }
                                    e && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                                }
                                onBlur() {
                                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                                }
                                mount() {
                                    this.unmount = un(wr(this.node.current, "focus", (() => this.onFocus())), wr(this.node.current, "blur", (() => this.onBlur())))
                                }
                                unmount() {}
                            }
                        },
                        hover: {
                            Feature: class extends gr {
                                mount() {
                                    const {
                                        current: e
                                    } = this.node;
                                    e && (this.unmount = function(e, t) {
                                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                        const [r, o, i] = R(e, n), a = e => {
                                            if (!D(e)) return;
                                            const {
                                                target: n
                                            } = e, r = t(n, e);
                                            if ("function" !== typeof r || !n) return;
                                            const i = e => {
                                                D(e) && (r(e), n.removeEventListener("pointerleave", i))
                                            };
                                            n.addEventListener("pointerleave", i, o)
                                        };
                                        return r.forEach((e => {
                                            e.addEventListener("pointerenter", a, o)
                                        })), i
                                    }(e, ((e, t) => (Oi(this.node, t, "Start"), e => Oi(this.node, e, "End")))))
                                }
                                unmount() {}
                            }
                        }
                    },
                    $i = {
                        layout: {
                            ProjectionNode: Li,
                            MeasureLayout: Co
                        }
                    },
                    Ki = (0, po.createContext)({
                        strict: !1
                    });
                var Yi = n(1051);
                const qi = (0, po.createContext)({});

                function Qi(e) {
                    return i(e.animate) || ar.some((t => or(e[t])))
                }

                function Gi(e) {
                    return Boolean(Qi(e) || e.variants)
                }

                function Xi(e) {
                    const {
                        initial: t,
                        animate: n
                    } = function(e, t) {
                        if (Qi(e)) {
                            const {
                                initial: t,
                                animate: n
                            } = e;
                            return {
                                initial: !1 === t || or(t) ? t : void 0,
                                animate: or(n) ? n : void 0
                            }
                        }
                        return !1 !== e.inherit ? t : {}
                    }(e, (0, po.useContext)(qi));
                    return (0, po.useMemo)((() => ({
                        initial: t,
                        animate: n
                    })), [Zi(t), Zi(n)])
                }

                function Zi(e) {
                    return Array.isArray(e) ? e.join(" ") : e
                }
                var Ji = n(4735);
                const ea = {
                        animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                        exit: ["exit"],
                        drag: ["drag", "dragControls"],
                        focus: ["whileFocus"],
                        hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                        tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                        pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                        inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                        layout: ["layout", "layoutId"]
                    },
                    ta = {};
                for (const ss in ea) ta[ss] = {
                    isEnabled: e => ea[ss].some((t => !!e[t]))
                };
                const na = Symbol.for("motionComponentSymbol");

                function ra(e, t, n) {
                    return (0, po.useCallback)((r => {
                        r && e.onMount && e.onMount(r), t && (r ? t.mount(r) : t.unmount()), n && ("function" === typeof n ? n(r) : Yr(n) && (n.current = r))
                    }), [t])
                }
                var oa = n(9674),
                    ia = n(293);

                function aa(e, t, n, r, o) {
                    var i, a;
                    const {
                        visualElement: s
                    } = (0, po.useContext)(qi), l = (0, po.useContext)(Ki), u = (0, po.useContext)(oa.t), c = (0, po.useContext)(Yi.Q).reducedMotion, d = (0, po.useRef)(null);
                    r = r || l.renderer, !d.current && r && (d.current = r(e, {
                        visualState: t,
                        parent: s,
                        props: n,
                        presenceContext: u,
                        blockInitialAnimation: !!u && !1 === u.initial,
                        reducedMotionConfig: c
                    }));
                    const f = d.current,
                        h = (0, po.useContext)(go);
                    !f || f.projection || !o || "html" !== f.type && "svg" !== f.type || function(e, t, n, r) {
                        const {
                            layoutId: o,
                            layout: i,
                            drag: a,
                            dragConstraints: s,
                            layoutScroll: l,
                            layoutRoot: u
                        } = t;
                        e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : sa(e.parent)), e.projection.setOptions({
                            layoutId: o,
                            layout: i,
                            alwaysMeasureLayout: Boolean(a) || s && Yr(s),
                            visualElement: e,
                            animationType: "string" === typeof i ? i : "both",
                            initialPromotionConfig: r,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }(d.current, n, o, h);
                    const p = (0, po.useRef)(!1);
                    (0, po.useInsertionEffect)((() => {
                        f && p.current && f.update(n, u)
                    }));
                    const m = n[ye],
                        v = (0, po.useRef)(Boolean(m) && !(null === (i = window.MotionHandoffIsComplete) || void 0 === i ? void 0 : i.call(window, m)) && (null === (a = window.MotionHasOptimisedAnimation) || void 0 === a ? void 0 : a.call(window, m)));
                    return (0, ia.E)((() => {
                        f && (p.current = !0, window.MotionIsMounted = !0, f.updateFeatures(), Eo.render(f.render), v.current && f.animationState && f.animationState.animateChanges())
                    })), (0, po.useEffect)((() => {
                        f && (!v.current && f.animationState && f.animationState.animateChanges(), v.current && (queueMicrotask((() => {
                            var e;
                            null === (e = window.MotionHandoffMarkAsComplete) || void 0 === e || e.call(window, m)
                        })), v.current = !1))
                    })), f
                }

                function sa(e) {
                    if (e) return !1 !== e.options.allowProjection ? e.projection : sa(e.parent)
                }

                function la(e) {
                    let {
                        preloadedFeatures: t,
                        createVisualElement: n,
                        useRender: r,
                        useVisualState: i,
                        Component: a
                    } = e;
                    var s, l;

                    function u(e, t) {
                        let s;
                        const l = (0, o.A)((0, o.A)((0, o.A)({}, (0, po.useContext)(Yi.Q)), e), {}, {
                                layoutId: ua(e)
                            }),
                            {
                                isStatic: u
                            } = l,
                            c = Xi(e),
                            d = i(e, u);
                        if (!u && Ji.B) {
                            ! function() {
                                (0, po.useContext)(Ki).strict;
                                0
                            }();
                            const e = function(e) {
                                const {
                                    drag: t,
                                    layout: n
                                } = ta;
                                if (!t && !n) return {};
                                const r = (0, o.A)((0, o.A)({}, t), n);
                                return {
                                    MeasureLayout: (null === t || void 0 === t ? void 0 : t.isEnabled(e)) || (null === n || void 0 === n ? void 0 : n.isEnabled(e)) ? r.MeasureLayout : void 0,
                                    ProjectionNode: r.ProjectionNode
                                }
                            }(l);
                            s = e.MeasureLayout, c.visualElement = aa(a, d, l, n, e.ProjectionNode)
                        }
                        return (0, ho.jsxs)(qi.Provider, {
                            value: c,
                            children: [s && c.visualElement ? (0, ho.jsx)(s, (0, o.A)({
                                visualElement: c.visualElement
                            }, l)) : null, r(a, e, ra(d, c.visualElement, t), d, u, c.visualElement)]
                        })
                    }
                    t && function(e) {
                        for (const t in e) ta[t] = (0, o.A)((0, o.A)({}, ta[t]), e[t])
                    }(t), u.displayName = "motion.".concat("string" === typeof a ? a : "create(".concat(null !== (l = null !== (s = a.displayName) && void 0 !== s ? s : a.name) && void 0 !== l ? l : "", ")"));
                    const c = (0, po.forwardRef)(u);
                    return c[na] = a, c
                }

                function ua(e) {
                    let {
                        layoutId: t
                    } = e;
                    const n = (0, po.useContext)(vo.L).id;
                    return n && void 0 !== t ? n + "-" + t : t
                }

                function ca(e, t) {
                    let {
                        layout: n,
                        layoutId: r
                    } = t;
                    return $.has(e) || e.startsWith("origin") || (n || void 0 !== r) && (!!So[e] || "opacity" === e)
                }
                const da = (e, t) => t && "number" === typeof e ? t.transform(e) : e,
                    fa = {
                        x: "translateX",
                        y: "translateY",
                        z: "translateZ",
                        transformPerspective: "perspective"
                    },
                    ha = W.length;

                function pa(e, t, n) {
                    const {
                        style: r,
                        vars: o,
                        transformOrigin: i
                    } = e;
                    let a = !1,
                        s = !1;
                    for (const l in t) {
                        const e = t[l];
                        if ($.has(l)) a = !0;
                        else if (Nt(l)) o[l] = e;
                        else {
                            const t = da(e, vt[l]);
                            l.startsWith("origin") ? (s = !0, i[l] = t) : r[l] = t
                        }
                    }
                    if (t.transform || (a || n ? r.transform = function(e, t, n) {
                            let r = "",
                                o = !0;
                            for (let i = 0; i < ha; i++) {
                                const a = W[i],
                                    s = e[a];
                                if (void 0 === s) continue;
                                let l = !0;
                                if (l = "number" === typeof s ? s === (a.startsWith("scale") ? 1 : 0) : 0 === parseFloat(s), !l || n) {
                                    const e = da(s, vt[a]);
                                    l || (o = !1, r += "".concat(fa[a] || a, "(").concat(e, ") ")), n && (t[a] = e)
                                }
                            }
                            return r = r.trim(), n ? r = n(t, o ? "" : r) : o && (r = "none"), r
                        }(t, e.transform, n) : r.transform && (r.transform = "none")), s) {
                        const {
                            originX: e = "50%",
                            originY: t = "50%",
                            originZ: n = 0
                        } = i;
                        r.transformOrigin = "".concat(e, " ").concat(t, " ").concat(n)
                    }
                }
                const ma = () => ({
                    style: {},
                    transform: {},
                    transformOrigin: {},
                    vars: {}
                });

                function va(e, t, n) {
                    for (const r in t) me(t[r]) || ca(r, n) || (e[r] = t[r])
                }

                function ga(e, t) {
                    const n = {};
                    return va(n, e.style || {}, e), Object.assign(n, function(e, t) {
                        let {
                            transformTemplate: n
                        } = e;
                        return (0, po.useMemo)((() => {
                            const e = {
                                style: {},
                                transform: {},
                                transformOrigin: {},
                                vars: {}
                            };
                            return pa(e, t, n), Object.assign({}, e.vars, e.style)
                        }), [t])
                    }(e, t)), n
                }

                function ya(e, t) {
                    const n = {},
                        r = ga(e, t);
                    return e.drag && !1 !== e.dragListener && (n.draggable = !1, r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none", r.touchAction = !0 === e.drag ? "none" : "pan-".concat("x" === e.drag ? "y" : "x")), void 0 === e.tabIndex && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = r, n
                }
                const ba = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);

                function wa(e) {
                    return e.startsWith("while") || e.startsWith("drag") && "draggable" !== e || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || ba.has(e)
                }
                let xa = e => !wa(e);
                try {
                    (Sa = require("@emotion/is-prop-valid").default) && (xa = e => e.startsWith("on") ? !wa(e) : Sa(e))
                } catch (as) {}
                var Sa;
                const Ea = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

                function ka(e) {
                    return "string" === typeof e && !e.includes("-") && !!(Ea.indexOf(e) > -1 || /[A-Z]/.test(e))
                }
                const Aa = {
                        offset: "stroke-dashoffset",
                        array: "stroke-dasharray"
                    },
                    Ca = {
                        offset: "strokeDashoffset",
                        array: "strokeDasharray"
                    };

                function Ta(e, t, n) {
                    return "string" === typeof e ? e : qe.transform(t + n * e)
                }
                const Pa = ["attrX", "attrY", "attrScale", "originX", "originY", "pathLength", "pathSpacing", "pathOffset"];

                function _a(e, t, n, r) {
                    let {
                        attrX: o,
                        attrY: i,
                        attrScale: s,
                        originX: l,
                        originY: u,
                        pathLength: c,
                        pathSpacing: d = 1,
                        pathOffset: f = 0
                    } = t;
                    if (pa(e, (0, a.A)(t, Pa), r), n) return void(e.style.viewBox && (e.attrs.viewBox = e.style.viewBox));
                    e.attrs = e.style, e.style = {};
                    const {
                        attrs: h,
                        style: p,
                        dimensions: m
                    } = e;
                    h.transform && (m && (p.transform = h.transform), delete h.transform), m && (void 0 !== l || void 0 !== u || p.transform) && (p.transformOrigin = function(e, t, n) {
                        const r = Ta(t, e.x, e.width),
                            o = Ta(n, e.y, e.height);
                        return "".concat(r, " ").concat(o)
                    }(m, void 0 !== l ? l : .5, void 0 !== u ? u : .5)), void 0 !== o && (h.x = o), void 0 !== i && (h.y = i), void 0 !== s && (h.scale = s), void 0 !== c && function(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
                            r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            o = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
                        e.pathLength = 1;
                        const i = o ? Aa : Ca;
                        e[i.offset] = qe.transform(-r);
                        const a = qe.transform(t),
                            s = qe.transform(n);
                        e[i.array] = "".concat(a, " ").concat(s)
                    }(h, c, d, f, !1)
                }
                const Fa = () => (0, o.A)((0, o.A)({}, {
                        style: {},
                        transform: {},
                        transformOrigin: {},
                        vars: {}
                    }), {}, {
                        attrs: {}
                    }),
                    Ra = e => "string" === typeof e && "svg" === e.toLowerCase();

                function Da(e, t, n, r) {
                    const i = (0, po.useMemo)((() => {
                        const n = Fa();
                        return _a(n, t, Ra(r), e.transformTemplate), (0, o.A)((0, o.A)({}, n.attrs), {}, {
                            style: (0, o.A)({}, n.style)
                        })
                    }), [t]);
                    if (e.style) {
                        const t = {};
                        va(t, e.style, e), i.style = (0, o.A)((0, o.A)({}, t), i.style)
                    }
                    return i
                }

                function La() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (t, n, r, i, a) => {
                        let {
                            latestValues: s
                        } = i;
                        const l = (ka(t) ? Da : ya)(n, s, a, t),
                            u = function(e, t, n) {
                                const r = {};
                                for (const o in e) "values" === o && "object" === typeof e.values || (xa(o) || !0 === n && wa(o) || !t && !wa(o) || e.draggable && o.startsWith("onDrag")) && (r[o] = e[o]);
                                return r
                            }(n, "string" === typeof t, e),
                            c = t !== po.Fragment ? (0, o.A)((0, o.A)((0, o.A)({}, u), l), {}, {
                                ref: r
                            }) : {},
                            {
                                children: d
                            } = n,
                            f = (0, po.useMemo)((() => me(d) ? d.get() : d), [d]);
                        return (0, po.createElement)(t, (0, o.A)((0, o.A)({}, c), {}, {
                            children: f
                        }))
                    }
                }
                var Ma = n(4930);
                const Oa = ["transitionEnd", "transition"];
                const ja = e => (t, n) => {
                    const r = (0, po.useContext)(qi),
                        i = (0, po.useContext)(oa.t),
                        a = () => function(e, t, n, r) {
                            let {
                                scrapeMotionValuesFromProps: i,
                                createRenderState: a,
                                onUpdate: s
                            } = e;
                            const l = {
                                latestValues: Na(t, n, r, i),
                                renderState: a()
                            };
                            return s && (l.onMount = e => s((0, o.A)({
                                props: t,
                                current: e
                            }, l)), l.onUpdate = e => s(e)), l
                        }(e, t, r, i);
                    return n ? a() : (0, Ma.M)(a)
                };

                function Na(e, t, n, r) {
                    const o = {},
                        s = r(e, {});
                    for (const i in s) o[i] = Ro(s[i]);
                    let {
                        initial: u,
                        animate: c
                    } = e;
                    const d = Qi(e),
                        f = Gi(e);
                    t && f && !d && !1 !== e.inherit && (void 0 === u && (u = t.initial), void 0 === c && (c = t.animate));
                    let h = !!n && !1 === n.initial;
                    h = h || !1 === u;
                    const p = h ? c : u;
                    if (p && "boolean" !== typeof p && !i(p)) {
                        const t = Array.isArray(p) ? p : [p];
                        for (let n = 0; n < t.length; n++) {
                            const r = l(e, t[n]);
                            if (r) {
                                const {
                                    transitionEnd: e,
                                    transition: t
                                } = r, n = (0, a.A)(r, Oa);
                                for (const r in n) {
                                    let e = n[r];
                                    if (Array.isArray(e)) {
                                        e = e[h ? e.length - 1 : 0]
                                    }
                                    null !== e && (o[r] = e)
                                }
                                for (const r in e) o[r] = e[r]
                            }
                        }
                    }
                    return o
                }

                function Va(e, t, n) {
                    var r;
                    const {
                        style: o
                    } = e, i = {};
                    for (const a in o)(me(o[a]) || t.style && me(t.style[a]) || ca(a, e) || void 0 !== (null === (r = null === n || void 0 === n ? void 0 : n.getValue(a)) || void 0 === r ? void 0 : r.liveStyle)) && (i[a] = o[a]);
                    return i
                }
                const Ia = {
                    useVisualState: ja({
                        scrapeMotionValuesFromProps: Va,
                        createRenderState: ma
                    })
                };

                function za(e, t) {
                    try {
                        t.dimensions = "function" === typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                    } catch (n) {
                        t.dimensions = {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        }
                    }
                }

                function Ba(e, t, n, r) {
                    let {
                        style: o,
                        vars: i
                    } = t;
                    Object.assign(e.style, o, r && r.getProjectionStyles(n));
                    for (const a in i) e.style.setProperty(a, i[a])
                }
                const Ua = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);

                function Ha(e, t, n, r) {
                    Ba(e, t, void 0, r);
                    for (const o in t.attrs) e.setAttribute(Ua.has(o) ? o : ge(o), t.attrs[o])
                }

                function Wa(e, t, n) {
                    const r = Va(e, t, n);
                    for (const o in e)
                        if (me(e[o]) || me(t[o])) {
                            r[-1 !== W.indexOf(o) ? "attr" + o.charAt(0).toUpperCase() + o.substring(1) : o] = e[o]
                        }
                    return r
                }
                const $a = ["x", "y", "width", "height", "cx", "cy", "r"],
                    Ka = {
                        useVisualState: ja({
                            scrapeMotionValuesFromProps: Wa,
                            createRenderState: Fa,
                            onUpdate: e => {
                                let {
                                    props: t,
                                    prevProps: n,
                                    current: r,
                                    renderState: o,
                                    latestValues: i
                                } = e;
                                if (!r) return;
                                let a = !!t.drag;
                                if (!a)
                                    for (const l in i)
                                        if ($.has(l)) {
                                            a = !0;
                                            break
                                        }
                                if (!a) return;
                                let s = !n;
                                if (n)
                                    for (let l = 0; l < $a.length; l++) {
                                        const e = $a[l];
                                        t[e] !== n[e] && (s = !0)
                                    }
                                s && J.read((() => {
                                    za(r, o), J.render((() => {
                                        _a(o, i, Ra(r.tagName), t.transformTemplate), Ha(r, o)
                                    }))
                                }))
                            }
                        })
                    };

                function Ya(e, t) {
                    return function(n) {
                        let {
                            forwardMotionProps: r
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            forwardMotionProps: !1
                        };
                        const i = ka(n) ? Ka : Ia;
                        return la((0, o.A)((0, o.A)({}, i), {}, {
                            preloadedFeatures: e,
                            useRender: La(r),
                            createVisualElement: t,
                            Component: n
                        }))
                    }
                }
                const qa = {
                        current: null
                    },
                    Qa = {
                        current: !1
                    };
                const Ga = [...Wt, Je, lt],
                    Xa = new WeakMap;
                const Za = ["willChange"],
                    Ja = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
                class es {
                    scrapeMotionValuesFromProps(e, t, n) {
                        return {}
                    }
                    constructor(e) {
                        let {
                            parent: t,
                            props: n,
                            presenceContext: r,
                            reducedMotionConfig: i,
                            blockInitialAnimation: s,
                            visualState: l
                        } = e, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.KeyframeResolver = Dt, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                            this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                        }, this.renderScheduledAt = 0, this.scheduleRender = () => {
                            const e = ie.now();
                            this.renderScheduledAt < e && (this.renderScheduledAt = e, J.render(this.render, !1, !0))
                        };
                        const {
                            latestValues: c,
                            renderState: d,
                            onUpdate: f
                        } = l;
                        this.onUpdate = f, this.latestValues = c, this.baseTarget = (0, o.A)({}, c), this.initialValues = n.initial ? (0, o.A)({}, c) : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = i, this.options = u, this.blockInitialAnimation = Boolean(s), this.isControllingVariants = Qi(n), this.isVariantNode = Gi(n), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = Boolean(t && t.current);
                        const h = this.scrapeMotionValuesFromProps(n, {}, this),
                            {
                                willChange: p
                            } = h,
                            m = (0, a.A)(h, Za);
                        for (const o in m) {
                            const e = m[o];
                            void 0 !== c[o] && me(e) && e.set(c[o], !1)
                        }
                    }
                    mount(e) {
                        this.current = e, Xa.set(e, this), this.projection && !this.projection.instance && this.projection.mount(e), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach(((e, t) => this.bindToMotionValue(t, e))), Qa.current || function() {
                            if (Qa.current = !0, Ji.B)
                                if (window.matchMedia) {
                                    const e = window.matchMedia("(prefers-reduced-motion)"),
                                        t = () => qa.current = e.matches;
                                    e.addListener(t), t()
                                } else qa.current = !1
                        }(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || qa.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                    }
                    unmount() {
                        this.projection && this.projection.unmount(), ee(this.notifyUpdate), ee(this.render), this.valueSubscriptions.forEach((e => e())), this.valueSubscriptions.clear(), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
                        for (const e in this.events) this.events[e].clear();
                        for (const e in this.features) {
                            const t = this.features[e];
                            t && (t.unmount(), t.isMounted = !1)
                        }
                        this.current = null
                    }
                    bindToMotionValue(e, t) {
                        this.valueSubscriptions.has(e) && this.valueSubscriptions.get(e)();
                        const n = $.has(e);
                        n && this.onBindTransform && this.onBindTransform();
                        const r = t.on("change", (t => {
                                this.latestValues[e] = t, this.props.onUpdate && J.preRender(this.notifyUpdate), n && this.projection && (this.projection.isTransformDirty = !0)
                            })),
                            o = t.on("renderRequest", this.scheduleRender);
                        let i;
                        window.MotionCheckAppearSync && (i = window.MotionCheckAppearSync(this, e, t)), this.valueSubscriptions.set(e, (() => {
                            r(), o(), i && i(), t.owner && t.stop()
                        }))
                    }
                    sortNodePosition(e) {
                        return this.current && this.sortInstanceNodePosition && this.type === e.type ? this.sortInstanceNodePosition(this.current, e.current) : 0
                    }
                    updateFeatures() {
                        let e = "animation";
                        for (e in ta) {
                            const t = ta[e];
                            if (!t) continue;
                            const {
                                isEnabled: n,
                                Feature: r
                            } = t;
                            if (!this.features[e] && r && n(this.props) && (this.features[e] = new r(this)), this.features[e]) {
                                const t = this.features[e];
                                t.isMounted ? t.update() : (t.mount(), t.isMounted = !0)
                            }
                        }
                    }
                    triggerBuild() {
                        this.build(this.renderState, this.latestValues, this.props)
                    }
                    measureViewportBox() {
                        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : {
                            x: {
                                min: 0,
                                max: 0
                            },
                            y: {
                                min: 0,
                                max: 0
                            }
                        }
                    }
                    getStaticValue(e) {
                        return this.latestValues[e]
                    }
                    setStaticValue(e, t) {
                        this.latestValues[e] = t
                    }
                    update(e, t) {
                        (e.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = e, this.prevPresenceContext = this.presenceContext, this.presenceContext = t;
                        for (let n = 0; n < Ja.length; n++) {
                            const t = Ja[n];
                            this.propEventSubscriptions[t] && (this.propEventSubscriptions[t](), delete this.propEventSubscriptions[t]);
                            const r = e["on" + t];
                            r && (this.propEventSubscriptions[t] = this.on(t, r))
                        }
                        this.prevMotionValues = function(e, t, n) {
                            for (const r in t) {
                                const o = t[r],
                                    i = n[r];
                                if (me(o)) e.addValue(r, o);
                                else if (me(i)) e.addValue(r, fe(o, {
                                    owner: e
                                }));
                                else if (i !== o)
                                    if (e.hasValue(r)) {
                                        const t = e.getValue(r);
                                        !0 === t.liveStyle ? t.jump(o) : t.hasAnimated || t.set(o)
                                    } else {
                                        const t = e.getStaticValue(r);
                                        e.addValue(r, fe(void 0 !== t ? t : o, {
                                            owner: e
                                        }))
                                    }
                            }
                            for (const r in n) void 0 === t[r] && e.removeValue(r);
                            return t
                        }(this, this.scrapeMotionValuesFromProps(e, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue(), this.onUpdate && this.onUpdate(this)
                    }
                    getProps() {
                        return this.props
                    }
                    getVariant(e) {
                        return this.props.variants ? this.props.variants[e] : void 0
                    }
                    getDefaultTransition() {
                        return this.props.transition
                    }
                    getTransformPagePoint() {
                        return this.props.transformPagePoint
                    }
                    getClosestVariantNode() {
                        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                    }
                    addVariantChild(e) {
                        const t = this.getClosestVariantNode();
                        if (t) return t.variantChildren && t.variantChildren.add(e), () => t.variantChildren.delete(e)
                    }
                    addValue(e, t) {
                        const n = this.values.get(e);
                        t !== n && (n && this.removeValue(e), this.bindToMotionValue(e, t), this.values.set(e, t), this.latestValues[e] = t.get())
                    }
                    removeValue(e) {
                        this.values.delete(e);
                        const t = this.valueSubscriptions.get(e);
                        t && (t(), this.valueSubscriptions.delete(e)), delete this.latestValues[e], this.removeValueFromRenderState(e, this.renderState)
                    }
                    hasValue(e) {
                        return this.values.has(e)
                    }
                    getValue(e, t) {
                        if (this.props.values && this.props.values[e]) return this.props.values[e];
                        let n = this.values.get(e);
                        return void 0 === n && void 0 !== t && (n = fe(null === t ? void 0 : t, {
                            owner: this
                        }), this.addValue(e, n)), n
                    }
                    readValue(e, t) {
                        var n;
                        let r = void 0 === this.latestValues[e] && this.current ? null !== (n = this.getBaseTargetFromProps(this.props, e)) && void 0 !== n ? n : this.readValueFromInstance(this.current, e, this.options) : this.latestValues[e];
                        var o;
                        return void 0 !== r && null !== r && ("string" === typeof r && (Ot(r) || De(r)) ? r = parseFloat(r) : (o = r, !Ga.find(Ht(o)) && lt.test(t) && (r = bt(e, t))), this.setBaseTarget(e, me(r) ? r.get() : r)), me(r) ? r.get() : r
                    }
                    setBaseTarget(e, t) {
                        this.baseTarget[e] = t
                    }
                    getBaseTarget(e) {
                        var t;
                        const {
                            initial: n
                        } = this.props;
                        let r;
                        if ("string" === typeof n || "object" === typeof n) {
                            const o = l(this.props, n, null === (t = this.presenceContext) || void 0 === t ? void 0 : t.custom);
                            o && (r = o[e])
                        }
                        if (n && void 0 !== r) return r;
                        const o = this.getBaseTargetFromProps(this.props, e);
                        return void 0 === o || me(o) ? void 0 !== this.initialValues[e] && void 0 === r ? void 0 : this.baseTarget[e] : o
                    }
                    on(e, t) {
                        return this.events[e] || (this.events[e] = new le), this.events[e].add(t)
                    }
                    notify(e) {
                        if (this.events[e]) {
                            for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                            this.events[e].notify(...n)
                        }
                    }
                }
                class ts extends es {
                    constructor() {
                        super(...arguments), this.KeyframeResolver = Kt
                    }
                    sortInstanceNodePosition(e, t) {
                        return 2 & e.compareDocumentPosition(t) ? 1 : -1
                    }
                    getBaseTargetFromProps(e, t) {
                        return e.style ? e.style[t] : void 0
                    }
                    removeValueFromRenderState(e, t) {
                        let {
                            vars: n,
                            style: r
                        } = t;
                        delete n[e], delete r[e]
                    }
                    handleChildMotionValue() {
                        this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                        const {
                            children: e
                        } = this.props;
                        me(e) && (this.childSubscription = e.on("change", (e => {
                            this.current && (this.current.textContent = "".concat(e))
                        })))
                    }
                }
                class ns extends ts {
                    constructor() {
                        super(...arguments), this.type = "html", this.renderInstance = Ba
                    }
                    readValueFromInstance(e, t) {
                        if ($.has(t)) {
                            const e = yt(t);
                            return e && e.default || 0
                        } {
                            const r = (n = e, window.getComputedStyle(n)),
                                o = (Nt(t) ? r.getPropertyValue(t) : r[t]) || 0;
                            return "string" === typeof o ? o.trim() : o
                        }
                        var n
                    }
                    measureInstanceViewportBox(e, t) {
                        let {
                            transformPagePoint: n
                        } = t;
                        return Kr(e, n)
                    }
                    build(e, t, n) {
                        pa(e, t, n.transformTemplate)
                    }
                    scrapeMotionValuesFromProps(e, t, n) {
                        return Va(e, t, n)
                    }
                }
                class rs extends ts {
                    constructor() {
                        super(...arguments), this.type = "svg", this.isSVGTag = !1, this.measureInstanceViewportBox = Fr, this.updateDimensions = () => {
                            this.current && !this.renderState.dimensions && za(this.current, this.renderState)
                        }
                    }
                    getBaseTargetFromProps(e, t) {
                        return e[t]
                    }
                    readValueFromInstance(e, t) {
                        if ($.has(t)) {
                            const e = yt(t);
                            return e && e.default || 0
                        }
                        return t = Ua.has(t) ? t : ge(t), e.getAttribute(t)
                    }
                    scrapeMotionValuesFromProps(e, t, n) {
                        return Wa(e, t, n)
                    }
                    onBindTransform() {
                        this.current && !this.renderState.dimensions && J.postRender(this.updateDimensions)
                    }
                    build(e, t, n) {
                        _a(e, t, this.isSVGTag, n.transformTemplate)
                    }
                    renderInstance(e, t, n, r) {
                        Ha(e, t, 0, r)
                    }
                    mount(e) {
                        this.isSVGTag = Ra(e.tagName), super.mount(e)
                    }
                }
                const os = (e, t) => ka(e) ? new rs(t) : new ns(t, {
                        allowProjection: e !== po.Fragment
                    }),
                    is = r(Ya((0, o.A)((0, o.A)((0, o.A)((0, o.A)({}, br), Wi), Mi), $i), os))
            },
            293: (e, t, n) => {
                "use strict";
                n.d(t, {
                    E: () => o
                });
                var r = n(5043);
                const o = n(4735).B ? r.useLayoutEffect : r.useEffect
            },
            579: (e, t, n) => {
                "use strict";
                e.exports = n(1153)
            },
            1051: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Q: () => r
                });
                const r = (0, n(5043).createContext)({
                    transformPagePoint: e => e,
                    isStatic: !1,
                    reducedMotion: "never"
                })
            },
            1153: (e, t, n) => {
                "use strict";
                var r = n(5043),
                    o = Symbol.for("react.element"),
                    i = Symbol.for("react.fragment"),
                    a = Object.prototype.hasOwnProperty,
                    s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function u(e, t, n) {
                    var r, i = {},
                        u = null,
                        c = null;
                    for (r in void 0 !== n && (u = "" + n), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (c = t.ref), t) a.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: u,
                        ref: c,
                        props: i,
                        _owner: s.current
                    }
                }
                t.Fragment = i, t.jsx = u, t.jsxs = u
            },
            1675: (e, t, n) => {
                "use strict";
                n.d(t, {
                    BV: () => Ae,
                    Kd: () => it,
                    Zp: () => se,
                    g: () => le,
                    qh: () => Ee,
                    zy: () => oe
                });
                var r = n(45),
                    o = n(9379),
                    i = n(5043);
                n(3175);
                const a = ["page"],
                    s = ["page", "matches"],
                    l = ["onClick", "discover", "prefetch", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset", "viewTransition"],
                    u = ["aria-current", "caseSensitive", "className", "end", "style", "to", "viewTransition", "children"],
                    c = ["discover", "fetcherKey", "navigate", "reloadDocument", "replace", "state", "method", "action", "onSubmit", "relative", "preventScrollReset", "viewTransition"];
                var d = "popstate";

                function f() {
                    return b((function(e, t) {
                        let {
                            pathname: n,
                            search: r,
                            hash: o
                        } = e.location;
                        return v("", {
                            pathname: n,
                            search: r,
                            hash: o
                        }, t.state && t.state.usr || null, t.state && t.state.key || "default")
                    }), (function(e, t) {
                        return "string" === typeof t ? t : g(t)
                    }), null, arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {})
                }

                function h(e, t) {
                    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
                }

                function p(e, t) {
                    if (!e) {
                        "undefined" !== typeof console && console.warn(t);
                        try {
                            throw new Error(t)
                        } catch (n) {}
                    }
                }

                function m(e, t) {
                    return {
                        usr: e.state,
                        key: e.key,
                        idx: t
                    }
                }

                function v(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        r = arguments.length > 3 ? arguments[3] : void 0;
                    return (0, o.A)((0, o.A)({
                        pathname: "string" === typeof e ? e : e.pathname,
                        search: "",
                        hash: ""
                    }, "string" === typeof t ? y(t) : t), {}, {
                        state: n,
                        key: t && t.key || r || Math.random().toString(36).substring(2, 10)
                    })
                }

                function g(e) {
                    let {
                        pathname: t = "/",
                        search: n = "",
                        hash: r = ""
                    } = e;
                    return n && "?" !== n && (t += "?" === n.charAt(0) ? n : "?" + n), r && "#" !== r && (t += "#" === r.charAt(0) ? r : "#" + r), t
                }

                function y(e) {
                    let t = {};
                    if (e) {
                        let n = e.indexOf("#");
                        n >= 0 && (t.hash = e.substring(n), e = e.substring(0, n));
                        let r = e.indexOf("?");
                        r >= 0 && (t.search = e.substring(r), e = e.substring(0, r)), e && (t.pathname = e)
                    }
                    return t
                }

                function b(e, t, n) {
                    let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                        {
                            window: i = document.defaultView,
                            v5Compat: a = !1
                        } = r,
                        s = i.history,
                        l = "POP",
                        u = null,
                        c = f();

                    function f() {
                        return (s.state || {
                            idx: null
                        }).idx
                    }

                    function p() {
                        l = "POP";
                        let e = f(),
                            t = null == e ? null : e - c;
                        c = e, u && u({
                            action: l,
                            location: b.location,
                            delta: t
                        })
                    }

                    function y(e) {
                        let t = "null" !== i.location.origin ? i.location.origin : i.location.href,
                            n = "string" === typeof e ? e : g(e);
                        return n = n.replace(/ $/, "%20"), h(t, "No window.location.(origin|href) available to create URL for href: ".concat(n)), new URL(n, t)
                    }
                    null == c && (c = 0, s.replaceState((0, o.A)((0, o.A)({}, s.state), {}, {
                        idx: c
                    }), ""));
                    let b = {
                        get action() {
                            return l
                        },
                        get location() {
                            return e(i, s)
                        },
                        listen(e) {
                            if (u) throw new Error("A history only accepts one active listener");
                            return i.addEventListener(d, p), u = e, () => {
                                i.removeEventListener(d, p), u = null
                            }
                        },
                        createHref: e => t(i, e),
                        createURL: y,
                        encodeLocation(e) {
                            let t = y(e);
                            return {
                                pathname: t.pathname,
                                search: t.search,
                                hash: t.hash
                            }
                        },
                        push: function(e, t) {
                            l = "PUSH";
                            let r = v(b.location, e, t);
                            n && n(r, e), c = f() + 1;
                            let o = m(r, c),
                                d = b.createHref(r);
                            try {
                                s.pushState(o, "", d)
                            } catch (h) {
                                if (h instanceof DOMException && "DataCloneError" === h.name) throw h;
                                i.location.assign(d)
                            }
                            a && u && u({
                                action: l,
                                location: b.location,
                                delta: 1
                            })
                        },
                        replace: function(e, t) {
                            l = "REPLACE";
                            let r = v(b.location, e, t);
                            n && n(r, e), c = f();
                            let o = m(r, c),
                                i = b.createHref(r);
                            s.replaceState(o, "", i), a && u && u({
                                action: l,
                                location: b.location,
                                delta: 0
                            })
                        },
                        go: e => s.go(e)
                    };
                    return b
                }

                function w(e, t) {
                    return x(e, t, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "/", !1)
                }

                function x(e, t, n, r) {
                    let o = O(("string" === typeof t ? y(t) : t).pathname || "/", n);
                    if (null == o) return null;
                    let i = S(e);
                    ! function(e) {
                        e.sort(((e, t) => e.score !== t.score ? t.score - e.score : function(e, t) {
                            let n = e.length === t.length && e.slice(0, -1).every(((e, n) => e === t[n]));
                            return n ? e[e.length - 1] - t[t.length - 1] : 0
                        }(e.routesMeta.map((e => e.childrenIndex)), t.routesMeta.map((e => e.childrenIndex)))))
                    }(i);
                    let a = null;
                    for (let s = 0; null == a && s < i.length; ++s) {
                        let e = M(o);
                        a = D(i[s], e, r)
                    }
                    return a
                }

                function S(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                        o = (e, o, i) => {
                            let a = {
                                relativePath: void 0 === i ? e.path || "" : i,
                                caseSensitive: !0 === e.caseSensitive,
                                childrenIndex: o,
                                route: e
                            };
                            a.relativePath.startsWith("/") && (h(a.relativePath.startsWith(r), 'Absolute route path "'.concat(a.relativePath, '" nested under path "').concat(r, '" is not valid. An absolute child route path must start with the combined path of all its parent routes.')), a.relativePath = a.relativePath.slice(r.length));
                            let s = z([r, a.relativePath]),
                                l = n.concat(a);
                            e.children && e.children.length > 0 && (h(!0 !== e.index, 'Index routes must not have child routes. Please remove all child routes from route path "'.concat(s, '".')), S(e.children, t, l, s)), (null != e.path || e.index) && t.push({
                                path: s,
                                score: R(s, e.index),
                                routesMeta: l
                            })
                        };
                    return e.forEach(((e, t) => {
                        var n;
                        if ("" !== e.path && null !== (n = e.path) && void 0 !== n && n.includes("?"))
                            for (let r of E(e.path)) o(e, t, r);
                        else o(e, t)
                    })), t
                }

                function E(e) {
                    let t = e.split("/");
                    if (0 === t.length) return [];
                    let [n, ...r] = t, o = n.endsWith("?"), i = n.replace(/\?$/, "");
                    if (0 === r.length) return o ? [i, ""] : [i];
                    let a = E(r.join("/")),
                        s = [];
                    return s.push(...a.map((e => "" === e ? i : [i, e].join("/")))), o && s.push(...a), s.map((t => e.startsWith("/") && "" === t ? "/" : t))
                }
                var k = /^:[\w-]+$/,
                    A = 3,
                    C = 2,
                    T = 1,
                    P = 10,
                    _ = -2,
                    F = e => "*" === e;

                function R(e, t) {
                    let n = e.split("/"),
                        r = n.length;
                    return n.some(F) && (r += _), t && (r += C), n.filter((e => !F(e))).reduce(((e, t) => e + (k.test(t) ? A : "" === t ? T : P)), r)
                }

                function D(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        {
                            routesMeta: r
                        } = e,
                        o = {},
                        i = "/",
                        a = [];
                    for (let s = 0; s < r.length; ++s) {
                        let e = r[s],
                            l = s === r.length - 1,
                            u = "/" === i ? t : t.slice(i.length) || "/",
                            c = L({
                                path: e.relativePath,
                                caseSensitive: e.caseSensitive,
                                end: l
                            }, u),
                            d = e.route;
                        if (!c && l && n && !r[r.length - 1].route.index && (c = L({
                                path: e.relativePath,
                                caseSensitive: e.caseSensitive,
                                end: !1
                            }, u)), !c) return null;
                        Object.assign(o, c.params), a.push({
                            params: o,
                            pathname: z([i, c.pathname]),
                            pathnameBase: B(z([i, c.pathnameBase])),
                            route: d
                        }), "/" !== c.pathnameBase && (i = z([i, c.pathnameBase]))
                    }
                    return a
                }

                function L(e, t) {
                    "string" === typeof e && (e = {
                        path: e,
                        caseSensitive: !1,
                        end: !0
                    });
                    let [n, r] = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        p("*" === e || !e.endsWith("*") || e.endsWith("/*"), 'Route path "'.concat(e, '" will be treated as if it were "').concat(e.replace(/\*$/, "/*"), '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "').concat(e.replace(/\*$/, "/*"), '".'));
                        let r = [],
                            o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, ((e, t, n) => (r.push({
                                paramName: t,
                                isOptional: null != n
                            }), n ? "/?([^\\/]+)?" : "/([^\\/]+)")));
                        e.endsWith("*") ? (r.push({
                            paramName: "*"
                        }), o += "*" === e || "/*" === e ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : "" !== e && "/" !== e && (o += "(?:(?=\\/|$))");
                        let i = new RegExp(o, t ? void 0 : "i");
                        return [i, r]
                    }(e.path, e.caseSensitive, e.end), o = t.match(n);
                    if (!o) return null;
                    let i = o[0],
                        a = i.replace(/(.)\/+$/, "$1"),
                        s = o.slice(1);
                    return {
                        params: r.reduce(((e, t, n) => {
                            let {
                                paramName: r,
                                isOptional: o
                            } = t;
                            if ("*" === r) {
                                let e = s[n] || "";
                                a = i.slice(0, i.length - e.length).replace(/(.)\/+$/, "$1")
                            }
                            const l = s[n];
                            return e[r] = o && !l ? void 0 : (l || "").replace(/%2F/g, "/"), e
                        }), {}),
                        pathname: i,
                        pathnameBase: a,
                        pattern: e
                    }
                }

                function M(e) {
                    try {
                        return e.split("/").map((e => decodeURIComponent(e).replace(/\//g, "%2F"))).join("/")
                    } catch (t) {
                        return p(!1, 'The URL path "'.concat(e, '" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (').concat(t, ").")), e
                    }
                }

                function O(e, t) {
                    if ("/" === t) return e;
                    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
                    let n = t.endsWith("/") ? t.length - 1 : t.length,
                        r = e.charAt(n);
                    return r && "/" !== r ? null : e.slice(n) || "/"
                }

                function j(e, t, n, r) {
                    return "Cannot include a '".concat(e, "' character in a manually specified `to.").concat(t, "` field [").concat(JSON.stringify(r), "].  Please separate it out to the `to.").concat(n, '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.')
                }

                function N(e) {
                    return e.filter(((e, t) => 0 === t || e.route.path && e.route.path.length > 0))
                }

                function V(e) {
                    let t = N(e);
                    return t.map(((e, n) => n === t.length - 1 ? e.pathname : e.pathnameBase))
                }

                function I(e, t, n) {
                    let r, i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    "string" === typeof e ? r = y(e) : (r = (0, o.A)({}, e), h(!r.pathname || !r.pathname.includes("?"), j("?", "pathname", "search", r)), h(!r.pathname || !r.pathname.includes("#"), j("#", "pathname", "hash", r)), h(!r.search || !r.search.includes("#"), j("#", "search", "hash", r)));
                    let a, s = "" === e || "" === r.pathname,
                        l = s ? "/" : r.pathname;
                    if (null == l) a = n;
                    else {
                        let e = t.length - 1;
                        if (!i && l.startsWith("..")) {
                            let t = l.split("/");
                            for (;
                                ".." === t[0];) t.shift(), e -= 1;
                            r.pathname = t.join("/")
                        }
                        a = e >= 0 ? t[e] : "/"
                    }
                    let u = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/",
                                {
                                    pathname: n,
                                    search: r = "",
                                    hash: o = ""
                                } = "string" === typeof e ? y(e) : e,
                                i = n ? n.startsWith("/") ? n : function(e, t) {
                                    let n = t.replace(/\/+$/, "").split("/");
                                    return e.split("/").forEach((e => {
                                        ".." === e ? n.length > 1 && n.pop() : "." !== e && n.push(e)
                                    })), n.length > 1 ? n.join("/") : "/"
                                }(n, t) : t;
                            return {
                                pathname: i,
                                search: U(r),
                                hash: H(o)
                            }
                        }(r, a),
                        c = l && "/" !== l && l.endsWith("/"),
                        d = (s || "." === l) && n.endsWith("/");
                    return u.pathname.endsWith("/") || !c && !d || (u.pathname += "/"), u
                }
                var z = e => e.join("/").replace(/\/\/+/g, "/"),
                    B = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
                    U = e => e && "?" !== e ? e.startsWith("?") ? e : "?" + e : "",
                    H = e => e && "#" !== e ? e.startsWith("#") ? e : "#" + e : "";

                function W(e) {
                    return null != e && "number" === typeof e.status && "string" === typeof e.statusText && "boolean" === typeof e.internal && "data" in e
                }
                var $ = ["POST", "PUT", "PATCH", "DELETE"],
                    K = (new Set($), ["GET", ...$]);
                new Set(K), Symbol("ResetLoaderData");
                var Y = i.createContext(null);
                Y.displayName = "DataRouter";
                var q = i.createContext(null);
                q.displayName = "DataRouterState";
                var Q = i.createContext({
                    isTransitioning: !1
                });
                Q.displayName = "ViewTransition";
                var G = i.createContext(new Map);
                G.displayName = "Fetchers";
                var X = i.createContext(null);
                X.displayName = "Await";
                var Z = i.createContext(null);
                Z.displayName = "Navigation";
                var J = i.createContext(null);
                J.displayName = "Location";
                var ee = i.createContext({
                    outlet: null,
                    matches: [],
                    isDataRoute: !1
                });
                ee.displayName = "Route";
                var te = i.createContext(null);
                te.displayName = "RouteError";
                var ne = !0;

                function re() {
                    return null != i.useContext(J)
                }

                function oe() {
                    return h(re(), "useLocation() may be used only in the context of a <Router> component."), i.useContext(J).location
                }
                var ie = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";

                function ae(e) {
                    i.useContext(Z).static || i.useLayoutEffect(e)
                }

                function se() {
                    let {
                        isDataRoute: e
                    } = i.useContext(ee);
                    return e ? function() {
                        let {
                            router: e
                        } = ge("useNavigate"), t = be("useNavigate"), n = i.useRef(!1);
                        ae((() => {
                            n.current = !0
                        }));
                        let r = i.useCallback((async function(r) {
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            p(n.current, ie), n.current && ("number" === typeof r ? e.navigate(r) : await e.navigate(r, (0, o.A)({
                                fromRouteId: t
                            }, i)))
                        }), [e, t]);
                        return r
                    }() : function() {
                        h(re(), "useNavigate() may be used only in the context of a <Router> component.");
                        let e = i.useContext(Y),
                            {
                                basename: t,
                                navigator: n
                            } = i.useContext(Z),
                            {
                                matches: r
                            } = i.useContext(ee),
                            {
                                pathname: o
                            } = oe(),
                            a = JSON.stringify(V(r)),
                            s = i.useRef(!1);
                        ae((() => {
                            s.current = !0
                        }));
                        let l = i.useCallback((function(r) {
                            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            if (p(s.current, ie), !s.current) return;
                            if ("number" === typeof r) return void n.go(r);
                            let l = I(r, JSON.parse(a), o, "path" === i.relative);
                            null == e && "/" !== t && (l.pathname = "/" === l.pathname ? t : z([t, l.pathname])), (i.replace ? n.replace : n.push)(l, i.state, i)
                        }), [t, n, a, o, e]);
                        return l
                    }()
                }
                i.createContext(null);

                function le() {
                    let {
                        matches: e
                    } = i.useContext(ee), t = e[e.length - 1];
                    return t ? t.params : {}
                }

                function ue(e) {
                    let {
                        relative: t
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                        matches: n
                    } = i.useContext(ee), {
                        pathname: r
                    } = oe(), o = JSON.stringify(V(n));
                    return i.useMemo((() => I(e, JSON.parse(o), r, "path" === t)), [e, o, r, t])
                }

                function ce(e, t, n, r) {
                    h(re(), "useRoutes() may be used only in the context of a <Router> component.");
                    let {
                        navigator: a,
                        static: s
                    } = i.useContext(Z), {
                        matches: l
                    } = i.useContext(ee), u = l[l.length - 1], c = u ? u.params : {}, d = u ? u.pathname : "/", f = u ? u.pathnameBase : "/", m = u && u.route;
                    if (ne) {
                        let e = m && m.path || "";
                        Se(d, !m || e.endsWith("*") || e.endsWith("*?"), 'You rendered descendant <Routes> (or called `useRoutes()`) at "'.concat(d, '" (under <Route path="').concat(e, '">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won\'t match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="').concat(e, '"> to <Route path="').concat("/" === e ? "*" : "".concat(e, "/*"), '">.'))
                    }
                    let v, g = oe();
                    if (t) {
                        var b;
                        let e = "string" === typeof t ? y(t) : t;
                        h("/" === f || (null === (b = e.pathname) || void 0 === b ? void 0 : b.startsWith(f)), 'When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "'.concat(f, '" but pathname "').concat(e.pathname, '" was given in the `location` prop.')), v = e
                    } else v = g;
                    let x = v.pathname || "/",
                        S = x;
                    if ("/" !== f) {
                        let e = f.replace(/^\//, "").split("/");
                        S = "/" + x.replace(/^\//, "").split("/").slice(e.length).join("/")
                    }
                    let E = !s && n && n.matches && n.matches.length > 0 ? n.matches : w(e, {
                        pathname: S
                    });
                    ne && (p(m || null != E, 'No routes matched location "'.concat(v.pathname).concat(v.search).concat(v.hash, '" ')), p(null == E || void 0 !== E[E.length - 1].route.element || void 0 !== E[E.length - 1].route.Component || void 0 !== E[E.length - 1].route.lazy, 'Matched leaf route at location "'.concat(v.pathname).concat(v.search).concat(v.hash, '" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.')));
                    let k = me(E && E.map((e => Object.assign({}, e, {
                        params: Object.assign({}, c, e.params),
                        pathname: z([f, a.encodeLocation ? a.encodeLocation(e.pathname).pathname : e.pathname]),
                        pathnameBase: "/" === e.pathnameBase ? f : z([f, a.encodeLocation ? a.encodeLocation(e.pathnameBase).pathname : e.pathnameBase])
                    }))), l, n, r);
                    return t && k ? i.createElement(J.Provider, {
                        value: {
                            location: (0, o.A)({
                                pathname: "/",
                                search: "",
                                hash: "",
                                state: null,
                                key: "default"
                            }, v),
                            navigationType: "POP"
                        }
                    }, k) : k
                }

                function de() {
                    let e = we(),
                        t = W(e) ? "".concat(e.status, " ").concat(e.statusText) : e instanceof Error ? e.message : JSON.stringify(e),
                        n = e instanceof Error ? e.stack : null,
                        r = "rgba(200,200,200, 0.5)",
                        o = {
                            padding: "0.5rem",
                            backgroundColor: r
                        },
                        a = {
                            padding: "2px 4px",
                            backgroundColor: r
                        },
                        s = null;
                    return ne && (console.error("Error handled by React Router default ErrorBoundary:", e), s = i.createElement(i.Fragment, null, i.createElement("p", null, "\ud83d\udcbf Hey developer \ud83d\udc4b"), i.createElement("p", null, "You can provide a way better UX than this when your app throws errors by providing your own ", i.createElement("code", {
                        style: a
                    }, "ErrorBoundary"), " or", " ", i.createElement("code", {
                        style: a
                    }, "errorElement"), " prop on your route."))), i.createElement(i.Fragment, null, i.createElement("h2", null, "Unexpected Application Error!"), i.createElement("h3", {
                        style: {
                            fontStyle: "italic"
                        }
                    }, t), n ? i.createElement("pre", {
                        style: o
                    }, n) : null, s)
                }
                var fe = i.createElement(de, null),
                    he = class extends i.Component {
                        constructor(e) {
                            super(e), this.state = {
                                location: e.location,
                                revalidation: e.revalidation,
                                error: e.error
                            }
                        }
                        static getDerivedStateFromError(e) {
                            return {
                                error: e
                            }
                        }
                        static getDerivedStateFromProps(e, t) {
                            return t.location !== e.location || "idle" !== t.revalidation && "idle" === e.revalidation ? {
                                error: e.error,
                                location: e.location,
                                revalidation: e.revalidation
                            } : {
                                error: void 0 !== e.error ? e.error : t.error,
                                location: t.location,
                                revalidation: e.revalidation || t.revalidation
                            }
                        }
                        componentDidCatch(e, t) {
                            console.error("React Router caught the following error during render", e, t)
                        }
                        render() {
                            return void 0 !== this.state.error ? i.createElement(ee.Provider, {
                                value: this.props.routeContext
                            }, i.createElement(te.Provider, {
                                value: this.state.error,
                                children: this.props.component
                            })) : this.props.children
                        }
                    };

                function pe(e) {
                    let {
                        routeContext: t,
                        match: n,
                        children: r
                    } = e, o = i.useContext(Y);
                    return o && o.static && o.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = n.route.id), i.createElement(ee.Provider, {
                        value: t
                    }, r)
                }

                function me(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    if (null == e) {
                        if (!n) return null;
                        if (n.errors) e = n.matches;
                        else {
                            if (0 !== t.length || n.initialized || !(n.matches.length > 0)) return null;
                            e = n.matches
                        }
                    }
                    let r = e,
                        o = null === n || void 0 === n ? void 0 : n.errors;
                    if (null != o) {
                        let e = r.findIndex((e => e.route.id && void 0 !== (null === o || void 0 === o ? void 0 : o[e.route.id])));
                        h(e >= 0, "Could not find a matching route for errors on route IDs: ".concat(Object.keys(o).join(","))), r = r.slice(0, Math.min(r.length, e + 1))
                    }
                    let a = !1,
                        s = -1;
                    if (n)
                        for (let i = 0; i < r.length; i++) {
                            let e = r[i];
                            if ((e.route.HydrateFallback || e.route.hydrateFallbackElement) && (s = i), e.route.id) {
                                let {
                                    loaderData: t,
                                    errors: o
                                } = n, i = e.route.loader && !t.hasOwnProperty(e.route.id) && (!o || void 0 === o[e.route.id]);
                                if (e.route.lazy || i) {
                                    a = !0, r = s >= 0 ? r.slice(0, s + 1) : [r[0]];
                                    break
                                }
                            }
                        }
                    return r.reduceRight(((e, l, u) => {
                        let c, d = !1,
                            f = null,
                            h = null;
                        n && (c = o && l.route.id ? o[l.route.id] : void 0, f = l.route.errorElement || fe, a && (s < 0 && 0 === u ? (Se("route-fallback", !1, "No `HydrateFallback` element provided to render during initial hydration"), d = !0, h = null) : s === u && (d = !0, h = l.route.hydrateFallbackElement || null)));
                        let p = t.concat(r.slice(0, u + 1)),
                            m = () => {
                                let t;
                                return t = c ? f : d ? h : l.route.Component ? i.createElement(l.route.Component, null) : l.route.element ? l.route.element : e, i.createElement(pe, {
                                    match: l,
                                    routeContext: {
                                        outlet: e,
                                        matches: p,
                                        isDataRoute: null != n
                                    },
                                    children: t
                                })
                            };
                        return n && (l.route.ErrorBoundary || l.route.errorElement || 0 === u) ? i.createElement(he, {
                            location: n.location,
                            revalidation: n.revalidation,
                            component: f,
                            error: c,
                            children: m(),
                            routeContext: {
                                outlet: null,
                                matches: p,
                                isDataRoute: !0
                            }
                        }) : m()
                    }), null)
                }

                function ve(e) {
                    return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
                }

                function ge(e) {
                    let t = i.useContext(Y);
                    return h(t, ve(e)), t
                }

                function ye(e) {
                    let t = i.useContext(q);
                    return h(t, ve(e)), t
                }

                function be(e) {
                    let t = function(e) {
                            let t = i.useContext(ee);
                            return h(t, ve(e)), t
                        }(e),
                        n = t.matches[t.matches.length - 1];
                    return h(n.route.id, "".concat(e, ' can only be used on routes that contain a unique "id"')), n.route.id
                }

                function we() {
                    var e;
                    let t = i.useContext(te),
                        n = ye("useRouteError"),
                        r = be("useRouteError");
                    return void 0 !== t ? t : null === (e = n.errors) || void 0 === e ? void 0 : e[r]
                }
                var xe = {};

                function Se(e, t, n) {
                    t || xe[e] || (xe[e] = !0, p(!1, n))
                }
                i.memo((function(e) {
                    let {
                        routes: t,
                        future: n,
                        state: r
                    } = e;
                    return ce(t, void 0, r, n)
                }));

                function Ee(e) {
                    h(!1, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")
                }

                function ke(e) {
                    let {
                        basename: t = "/",
                        children: n = null,
                        location: r,
                        navigationType: o = "POP",
                        navigator: a,
                        static: s = !1
                    } = e;
                    h(!re(), "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");
                    let l = t.replace(/^\/*/, "/"),
                        u = i.useMemo((() => ({
                            basename: l,
                            navigator: a,
                            static: s,
                            future: {}
                        })), [l, a, s]);
                    "string" === typeof r && (r = y(r));
                    let {
                        pathname: c = "/",
                        search: d = "",
                        hash: f = "",
                        state: m = null,
                        key: v = "default"
                    } = r, g = i.useMemo((() => {
                        let e = O(c, l);
                        return null == e ? null : {
                            location: {
                                pathname: e,
                                search: d,
                                hash: f,
                                state: m,
                                key: v
                            },
                            navigationType: o
                        }
                    }), [l, c, d, f, m, v, o]);
                    return p(null != g, '<Router basename="'.concat(l, '"> is not able to match the URL "').concat(c).concat(d).concat(f, "\" because it does not start with the basename, so the <Router> won't render anything.")), null == g ? null : i.createElement(Z.Provider, {
                        value: u
                    }, i.createElement(J.Provider, {
                        children: n,
                        value: g
                    }))
                }

                function Ae(e) {
                    let {
                        children: t,
                        location: n
                    } = e;
                    return ce(Ce(t), n)
                }
                i.Component;

                function Ce(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = [];
                    return i.Children.forEach(e, ((e, r) => {
                        if (!i.isValidElement(e)) return;
                        let o = [...t, r];
                        if (e.type === i.Fragment) return void n.push.apply(n, Ce(e.props.children, o));
                        h(e.type === Ee, "[".concat("string" === typeof e.type ? e.type : e.type.name, "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>")), h(!e.props.index || !e.props.children, "An index route cannot have child routes.");
                        let a = {
                            id: e.props.id || o.join("-"),
                            caseSensitive: e.props.caseSensitive,
                            element: e.props.element,
                            Component: e.props.Component,
                            index: e.props.index,
                            path: e.props.path,
                            loader: e.props.loader,
                            action: e.props.action,
                            hydrateFallbackElement: e.props.hydrateFallbackElement,
                            HydrateFallback: e.props.HydrateFallback,
                            errorElement: e.props.errorElement,
                            ErrorBoundary: e.props.ErrorBoundary,
                            hasErrorBoundary: !0 === e.props.hasErrorBoundary || null != e.props.ErrorBoundary || null != e.props.errorElement,
                            shouldRevalidate: e.props.shouldRevalidate,
                            handle: e.props.handle,
                            lazy: e.props.lazy
                        };
                        e.props.children && (a.children = Ce(e.props.children, o)), n.push(a)
                    })), n
                }
                var Te = "get",
                    Pe = "application/x-www-form-urlencoded";

                function _e(e) {
                    return null != e && "string" === typeof e.tagName
                }
                var Fe = null;
                var Re = new Set(["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"]);

                function De(e) {
                    return null == e || Re.has(e) ? e : (p(!1, '"'.concat(e, '" is not a valid `encType` for `<Form>`/`<fetcher.Form>` and will default to "').concat(Pe, '"')), null)
                }

                function Le(e, t) {
                    let n, r, o, i, a;
                    if (_e(s = e) && "form" === s.tagName.toLowerCase()) {
                        let a = e.getAttribute("action");
                        r = a ? O(a, t) : null, n = e.getAttribute("method") || Te, o = De(e.getAttribute("enctype")) || Pe, i = new FormData(e)
                    } else if (function(e) {
                            return _e(e) && "button" === e.tagName.toLowerCase()
                        }(e) || function(e) {
                            return _e(e) && "input" === e.tagName.toLowerCase()
                        }(e) && ("submit" === e.type || "image" === e.type)) {
                        let a = e.form;
                        if (null == a) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
                        let s = e.getAttribute("formaction") || a.getAttribute("action");
                        if (r = s ? O(s, t) : null, n = e.getAttribute("formmethod") || a.getAttribute("method") || Te, o = De(e.getAttribute("formenctype")) || De(a.getAttribute("enctype")) || Pe, i = new FormData(a, e), ! function() {
                                if (null === Fe) try {
                                    new FormData(document.createElement("form"), 0), Fe = !1
                                } catch (e) {
                                    Fe = !0
                                }
                                return Fe
                            }()) {
                            let {
                                name: t,
                                type: n,
                                value: r
                            } = e;
                            if ("image" === n) {
                                let e = t ? "".concat(t, ".") : "";
                                i.append("".concat(e, "x"), "0"), i.append("".concat(e, "y"), "0")
                            } else t && i.append(t, r)
                        }
                    } else {
                        if (_e(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
                        n = Te, r = null, o = Pe, a = e
                    }
                    var s;
                    return i && "text/plain" === o && (a = i, i = void 0), {
                        action: r,
                        method: n.toLowerCase(),
                        encType: o,
                        formData: i,
                        body: a
                    }
                }

                function Me(e, t) {
                    if (!1 === e || null === e || "undefined" === typeof e) throw new Error(t)
                }
                async function Oe(e, t) {
                    if (e.id in t) return t[e.id];
                    try {
                        let n = await
                        import (e.module);
                        return t[e.id] = n, n
                    } catch (n) {
                        return console.error("Error loading route module `".concat(e.module, "`, reloading page...")), console.error(n), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise((() => {}))
                    }
                }

                function je(e) {
                    return null != e && "string" === typeof e.page
                }

                function Ne(e) {
                    return null != e && (null == e.href ? "preload" === e.rel && "string" === typeof e.imageSrcSet && "string" === typeof e.imageSizes : "string" === typeof e.rel && "string" === typeof e.href)
                }

                function Ve(e, t, n, r, o, i) {
                    let a = (e, t) => !n[t] || e.route.id !== n[t].route.id,
                        s = (e, t) => {
                            var r;
                            return n[t].pathname !== e.pathname || (null === (r = n[t].route.path) || void 0 === r ? void 0 : r.endsWith("*")) && n[t].params["*"] !== e.params["*"]
                        };
                    return "assets" === i ? t.filter(((e, t) => a(e, t) || s(e, t))) : "data" === i ? t.filter(((t, i) => {
                        let l = r.routes[t.route.id];
                        if (!l || !l.hasLoader) return !1;
                        if (a(t, i) || s(t, i)) return !0;
                        if (t.route.shouldRevalidate) {
                            var u;
                            let r = t.route.shouldRevalidate({
                                currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
                                currentParams: (null === (u = n[0]) || void 0 === u ? void 0 : u.params) || {},
                                nextUrl: new URL(e, window.origin),
                                nextParams: t.params,
                                defaultShouldRevalidate: !0
                            });
                            if ("boolean" === typeof r) return r
                        }
                        return !0
                    })) : []
                }

                function Ie(e, t) {
                    let {
                        includeHydrateFallback: n
                    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return r = e.map((e => {
                        let r = t.routes[e.route.id];
                        if (!r) return [];
                        let o = [r.module];
                        return r.clientActionModule && (o = o.concat(r.clientActionModule)), r.clientLoaderModule && (o = o.concat(r.clientLoaderModule)), n && r.hydrateFallbackModule && (o = o.concat(r.hydrateFallbackModule)), r.imports && (o = o.concat(r.imports)), o
                    })).flat(1), [...new Set(r)];
                    var r
                }

                function ze(e, t) {
                    let n = new Set,
                        r = new Set(t);
                    return e.reduce(((e, o) => {
                        if (t && !je(o) && "script" === o.as && o.href && r.has(o.href)) return e;
                        let i = JSON.stringify(function(e) {
                            let t = {},
                                n = Object.keys(e).sort();
                            for (let r of n) t[r] = e[r];
                            return t
                        }(o));
                        return n.has(i) || (n.add(i), e.push({
                            key: i,
                            link: o
                        })), e
                    }), [])
                }

                function Be(e) {
                    return {
                        __html: e
                    }
                }
                Symbol("SingleFetchRedirect");

                function Ue(e) {
                    let t = "string" === typeof e ? new URL(e, "undefined" === typeof window ? "server://singlefetch/" : window.location.origin) : e;
                    return "/" === t.pathname ? t.pathname = "_root.data" : t.pathname = "".concat(t.pathname.replace(/\/$/, ""), ".data"), t
                }
                i.Component;

                function He(e) {
                    let {
                        error: t,
                        isOutsideRemixApp: n
                    } = e;
                    console.error(t);
                    let r, o = i.createElement("script", {
                        dangerouslySetInnerHTML: {
                            __html: '\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '
                        }
                    });
                    if (W(t)) return i.createElement(We, {
                        title: "Unhandled Thrown Response!"
                    }, i.createElement("h1", {
                        style: {
                            fontSize: "24px"
                        }
                    }, t.status, " ", t.statusText), o);
                    if (t instanceof Error) r = t;
                    else {
                        let e = null == t ? "Unknown Error" : "object" === typeof t && "toString" in t ? t.toString() : JSON.stringify(t);
                        r = new Error(e)
                    }
                    return i.createElement(We, {
                        title: "Application Error!",
                        isOutsideRemixApp: n
                    }, i.createElement("h1", {
                        style: {
                            fontSize: "24px"
                        }
                    }, "Application Error"), i.createElement("pre", {
                        style: {
                            padding: "2rem",
                            background: "hsla(10, 50%, 50%, 0.1)",
                            color: "red",
                            overflow: "auto"
                        }
                    }, r.stack), o)
                }

                function We(e) {
                    var t;
                    let {
                        title: n,
                        renderScripts: r,
                        isOutsideRemixApp: o,
                        children: a
                    } = e, {
                        routeModules: s
                    } = Qe();
                    return null !== (t = s.root) && void 0 !== t && t.Layout && !o ? a : i.createElement("html", {
                        lang: "en"
                    }, i.createElement("head", null, i.createElement("meta", {
                        charSet: "utf-8"
                    }), i.createElement("meta", {
                        name: "viewport",
                        content: "width=device-width,initial-scale=1,viewport-fit=cover"
                    }), i.createElement("title", null, n)), i.createElement("body", null, i.createElement("main", {
                        style: {
                            fontFamily: "system-ui, sans-serif",
                            padding: "2rem"
                        }
                    }, a, r ? i.createElement(nt, null) : null)))
                }

                function $e(e) {
                    return !0 === e
                }

                function Ke() {
                    let e = i.useContext(Y);
                    return Me(e, "You must render this element inside a <DataRouterContext.Provider> element"), e
                }

                function Ye() {
                    let e = i.useContext(q);
                    return Me(e, "You must render this element inside a <DataRouterStateContext.Provider> element"), e
                }
                var qe = i.createContext(void 0);

                function Qe() {
                    let e = i.useContext(qe);
                    return Me(e, "You must render this element inside a <HydratedRouter> element"), e
                }

                function Ge(e, t) {
                    return n => {
                        e && e(n), n.defaultPrevented || t(n)
                    }
                }

                function Xe(e, t, n) {
                    if (n && !tt) return [e[0]];
                    if (t) {
                        let n = e.findIndex((e => void 0 !== t[e.route.id]));
                        return e.slice(0, n + 1)
                    }
                    return e
                }

                function Ze(e) {
                    let {
                        page: t
                    } = e, n = (0, r.A)(e, a), {
                        router: s
                    } = Ke(), l = i.useMemo((() => w(s.routes, t, s.basename)), [s.routes, t, s.basename]);
                    return l ? i.createElement(et, (0, o.A)({
                        page: t,
                        matches: l
                    }, n)) : null
                }

                function Je(e) {
                    let {
                        manifest: t,
                        routeModules: n
                    } = Qe(), [r, a] = i.useState([]);
                    return i.useEffect((() => {
                        let r = !1;
                        return async function(e, t, n) {
                            return ze((await Promise.all(e.map((async e => {
                                let r = t.routes[e.route.id];
                                if (r) {
                                    let e = await Oe(r, n);
                                    return e.links ? e.links() : []
                                }
                                return []
                            })))).flat(1).filter(Ne).filter((e => "stylesheet" === e.rel || "preload" === e.rel)).map((e => "stylesheet" === e.rel ? (0, o.A)((0, o.A)({}, e), {}, {
                                rel: "prefetch",
                                as: "style"
                            }) : (0, o.A)((0, o.A)({}, e), {}, {
                                rel: "prefetch"
                            }))))
                        }(e, t, n).then((e => {
                            r || a(e)
                        })), () => {
                            r = !0
                        }
                    }), [e, t, n]), r
                }

                function et(e) {
                    let {
                        page: t,
                        matches: n
                    } = e, a = (0, r.A)(e, s), l = oe(), {
                        manifest: u,
                        routeModules: c
                    } = Qe(), {
                        loaderData: d,
                        matches: f
                    } = Ye(), h = i.useMemo((() => Ve(t, n, f, u, l, "data")), [t, n, f, u, l]), p = i.useMemo((() => Ve(t, n, f, u, l, "assets")), [t, n, f, u, l]), m = i.useMemo((() => {
                        if (t === l.pathname + l.search + l.hash) return [];
                        let e = new Set,
                            r = !1;
                        if (n.forEach((t => {
                                var n;
                                let o = u.routes[t.route.id];
                                o && o.hasLoader && (!h.some((e => e.route.id === t.route.id)) && t.route.id in d && null !== (n = c[t.route.id]) && void 0 !== n && n.shouldRevalidate || o.hasClientLoader ? r = !0 : e.add(t.route.id))
                            })), 0 === e.size) return [];
                        let o = Ue(t);
                        return r && e.size > 0 && o.searchParams.set("_routes", n.filter((t => e.has(t.route.id))).map((e => e.route.id)).join(",")), [o.pathname + o.search]
                    }), [d, l, u, h, n, t, c]), v = i.useMemo((() => Ie(p, u)), [p, u]), g = Je(p);
                    return i.createElement(i.Fragment, null, m.map((e => i.createElement("link", (0, o.A)({
                        key: e,
                        rel: "prefetch",
                        as: "fetch",
                        href: e
                    }, a)))), v.map((e => i.createElement("link", (0, o.A)({
                        key: e,
                        rel: "modulepreload",
                        href: e
                    }, a)))), g.map((e => {
                        let {
                            key: t,
                            link: n
                        } = e;
                        return i.createElement("link", (0, o.A)({
                            key: t
                        }, n))
                    })))
                }
                qe.displayName = "FrameworkContext";
                var tt = !1;

                function nt(e) {
                    let {
                        manifest: t,
                        serverHandoffString: n,
                        isSpaMode: r,
                        ssr: a,
                        renderMeta: s
                    } = Qe(), {
                        router: l,
                        static: u,
                        staticContext: c
                    } = Ke(), {
                        matches: d
                    } = Ye(), f = $e(a);
                    s && (s.didRenderScripts = !0);
                    let h = Xe(d, null, r);
                    i.useEffect((() => {
                        tt = !0
                    }), []);
                    let p = i.useMemo((() => {
                            var r;
                            let a = c ? "window.__reactRouterContext = ".concat(n, ";").concat("window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());") : " ",
                                s = u ? "".concat(null !== (r = t.hmr) && void 0 !== r && r.runtime ? "import ".concat(JSON.stringify(t.hmr.runtime), ";") : "").concat(f ? "" : "import ".concat(JSON.stringify(t.url)), ";\n").concat(h.map(((e, n) => {
                                    let r = "route".concat(n),
                                        o = t.routes[e.route.id];
                                    Me(o, "Route ".concat(e.route.id, " not found in manifest"));
                                    let {
                                        clientActionModule: i,
                                        clientLoaderModule: a,
                                        hydrateFallbackModule: s,
                                        module: l
                                    } = o, u = [...i ? [{
                                        module: i,
                                        varName: "".concat(r, "_clientAction")
                                    }] : [], ...a ? [{
                                        module: a,
                                        varName: "".concat(r, "_clientLoader")
                                    }] : [], ...s ? [{
                                        module: s,
                                        varName: "".concat(r, "_HydrateFallback")
                                    }] : [], {
                                        module: l,
                                        varName: "".concat(r, "_main")
                                    }];
                                    return 1 === u.length ? "import * as ".concat(r, " from ").concat(JSON.stringify(l), ";") : [u.map((e => "import * as ".concat(e.varName, ' from "').concat(e.module, '";'))).join("\n"), "const ".concat(r, " = {").concat(u.map((e => "...".concat(e.varName))).join(","), "};")].join("\n")
                                })).join("\n"), "\n  ").concat(f ? "window.__reactRouterManifest = ".concat(JSON.stringify(function(e, t) {
                                    let n = new Set(t.state.matches.map((e => e.route.id))),
                                        r = t.state.location.pathname.split("/").filter(Boolean),
                                        i = ["/"];
                                    for (r.pop(); r.length > 0;) i.push("/".concat(r.join("/"))), r.pop();
                                    i.forEach((e => {
                                        let r = w(t.routes, e, t.basename);
                                        r && r.forEach((e => n.add(e.route.id)))
                                    }));
                                    let a = [...n].reduce(((t, n) => Object.assign(t, {
                                        [n]: e.routes[n]
                                    })), {});
                                    return (0, o.A)((0, o.A)({}, e), {}, {
                                        routes: a
                                    })
                                }(t, l), null, 2), ";") : "", "\n  window.__reactRouterRouteModules = {").concat(h.map(((e, t) => "".concat(JSON.stringify(e.route.id), ":route").concat(t))).join(","), "};\n\nimport(").concat(JSON.stringify(t.entry.module), ");") : " ";
                            return i.createElement(i.Fragment, null, i.createElement("script", (0, o.A)((0, o.A)({}, e), {}, {
                                suppressHydrationWarning: !0,
                                dangerouslySetInnerHTML: Be(a),
                                type: void 0
                            })), i.createElement("script", (0, o.A)((0, o.A)({}, e), {}, {
                                suppressHydrationWarning: !0,
                                dangerouslySetInnerHTML: Be(s),
                                type: "module",
                                async: !0
                            })))
                        }), []),
                        m = tt ? [] : t.entry.imports.concat(Ie(h, t, {
                            includeHydrateFallback: !0
                        }));
                    return tt ? null : i.createElement(i.Fragment, null, f ? null : i.createElement("link", {
                        rel: "modulepreload",
                        href: t.url,
                        crossOrigin: e.crossOrigin
                    }), i.createElement("link", {
                        rel: "modulepreload",
                        href: t.entry.module,
                        crossOrigin: e.crossOrigin
                    }), (v = m, [...new Set(v)]).map((t => i.createElement("link", {
                        key: t,
                        rel: "modulepreload",
                        href: t,
                        crossOrigin: e.crossOrigin
                    }))), p);
                    var v
                }

                function rt() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return e => {
                        t.forEach((t => {
                            "function" === typeof t ? t(e) : null != t && (t.current = e)
                        }))
                    }
                }
                var ot = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement;
                try {
                    ot && (window.__reactRouterVersion = "7.2.0")
                } catch (pt) {}

                function it(e) {
                    let {
                        basename: t,
                        children: n,
                        window: r
                    } = e, o = i.useRef();
                    null == o.current && (o.current = f({
                        window: r,
                        v5Compat: !0
                    }));
                    let a = o.current,
                        [s, l] = i.useState({
                            action: a.action,
                            location: a.location
                        }),
                        u = i.useCallback((e => {
                            i.startTransition((() => l(e)))
                        }), [l]);
                    return i.useLayoutEffect((() => a.listen(u)), [a, u]), i.createElement(ke, {
                        basename: t,
                        children: n,
                        location: s.location,
                        navigationType: s.action,
                        navigator: a
                    })
                }
                var at = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
                    st = i.forwardRef((function(e, t) {
                        let n, {
                                onClick: a,
                                discover: s = "render",
                                prefetch: u = "none",
                                relative: c,
                                reloadDocument: d,
                                replace: f,
                                state: m,
                                target: v,
                                to: y,
                                preventScrollReset: b,
                                viewTransition: w
                            } = e,
                            x = (0, r.A)(e, l),
                            {
                                basename: S
                            } = i.useContext(Z),
                            E = "string" === typeof y && at.test(y),
                            k = !1;
                        if ("string" === typeof y && E && (n = y, ot)) try {
                            let e = new URL(window.location.href),
                                t = y.startsWith("//") ? new URL(e.protocol + y) : new URL(y),
                                n = O(t.pathname, S);
                            t.origin === e.origin && null != n ? y = n + t.search + t.hash : k = !0
                        } catch (pt) {
                            p(!1, '<Link to="'.concat(y, '"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.'))
                        }
                        let A = function(e) {
                                let {
                                    relative: t
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                h(re(), "useHref() may be used only in the context of a <Router> component.");
                                let {
                                    basename: n,
                                    navigator: r
                                } = i.useContext(Z), {
                                    hash: o,
                                    pathname: a,
                                    search: s
                                } = ue(e, {
                                    relative: t
                                }), l = a;
                                return "/" !== n && (l = "/" === a ? n : z([n, a])), r.createHref({
                                    pathname: l,
                                    search: s,
                                    hash: o
                                })
                            }(y, {
                                relative: c
                            }),
                            [C, T, P] = function(e, t) {
                                let n = i.useContext(qe),
                                    [r, o] = i.useState(!1),
                                    [a, s] = i.useState(!1),
                                    {
                                        onFocus: l,
                                        onBlur: u,
                                        onMouseEnter: c,
                                        onMouseLeave: d,
                                        onTouchStart: f
                                    } = t,
                                    h = i.useRef(null);
                                i.useEffect((() => {
                                    if ("render" === e && s(!0), "viewport" === e) {
                                        let e = new IntersectionObserver((e => {
                                            e.forEach((e => {
                                                s(e.isIntersecting)
                                            }))
                                        }), {
                                            threshold: .5
                                        });
                                        return h.current && e.observe(h.current), () => {
                                            e.disconnect()
                                        }
                                    }
                                }), [e]), i.useEffect((() => {
                                    if (r) {
                                        let e = setTimeout((() => {
                                            s(!0)
                                        }), 100);
                                        return () => {
                                            clearTimeout(e)
                                        }
                                    }
                                }), [r]);
                                let p = () => {
                                        o(!0)
                                    },
                                    m = () => {
                                        o(!1), s(!1)
                                    };
                                return n ? "intent" !== e ? [a, h, {}] : [a, h, {
                                    onFocus: Ge(l, p),
                                    onBlur: Ge(u, m),
                                    onMouseEnter: Ge(c, p),
                                    onMouseLeave: Ge(d, m),
                                    onTouchStart: Ge(f, p)
                                }] : [!1, h, {}]
                            }(u, x),
                            _ = function(e) {
                                let {
                                    target: t,
                                    replace: n,
                                    state: r,
                                    preventScrollReset: o,
                                    relative: a,
                                    viewTransition: s
                                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, l = se(), u = oe(), c = ue(e, {
                                    relative: a
                                });
                                return i.useCallback((i => {
                                    if (function(e, t) {
                                            return 0 === e.button && (!t || "_self" === t) && ! function(e) {
                                                return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
                                            }(e)
                                        }(i, t)) {
                                        i.preventDefault();
                                        let t = void 0 !== n ? n : g(u) === g(c);
                                        l(e, {
                                            replace: t,
                                            state: r,
                                            preventScrollReset: o,
                                            relative: a,
                                            viewTransition: s
                                        })
                                    }
                                }), [u, l, c, n, r, t, e, o, a, s])
                            }(y, {
                                replace: f,
                                state: m,
                                target: v,
                                preventScrollReset: b,
                                relative: c,
                                viewTransition: w
                            });
                        let F = i.createElement("a", (0, o.A)((0, o.A)((0, o.A)({}, x), P), {}, {
                            href: n || A,
                            onClick: k || d ? a : function(e) {
                                a && a(e), e.defaultPrevented || _(e)
                            },
                            ref: rt(t, T),
                            target: v,
                            "data-discover": E || "render" !== s ? void 0 : "true"
                        }));
                        return C && !E ? i.createElement(i.Fragment, null, F, i.createElement(Ze, {
                            page: A
                        })) : F
                    }));
                st.displayName = "Link", i.forwardRef((function(e, t) {
                    let {
                        "aria-current": n = "page",
                        caseSensitive: a = !1,
                        className: s = "",
                        end: l = !1,
                        style: c,
                        to: d,
                        viewTransition: f,
                        children: p
                    } = e, m = (0, r.A)(e, u), v = ue(d, {
                        relative: m.relative
                    }), g = oe(), y = i.useContext(q), {
                        navigator: b,
                        basename: w
                    } = i.useContext(Z), x = null != y && function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            n = i.useContext(Q);
                        h(null != n, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");
                        let {
                            basename: r
                        } = ct("useViewTransitionState"), o = ue(e, {
                            relative: t.relative
                        });
                        if (!n.isTransitioning) return !1;
                        let a = O(n.currentLocation.pathname, r) || n.currentLocation.pathname,
                            s = O(n.nextLocation.pathname, r) || n.nextLocation.pathname;
                        return null != L(o.pathname, s) || null != L(o.pathname, a)
                    }(v) && !0 === f, S = b.encodeLocation ? b.encodeLocation(v).pathname : v.pathname, E = g.pathname, k = y && y.navigation && y.navigation.location ? y.navigation.location.pathname : null;
                    a || (E = E.toLowerCase(), k = k ? k.toLowerCase() : null, S = S.toLowerCase()), k && w && (k = O(k, w) || k);
                    const A = "/" !== S && S.endsWith("/") ? S.length - 1 : S.length;
                    let C, T = E === S || !l && E.startsWith(S) && "/" === E.charAt(A),
                        P = null != k && (k === S || !l && k.startsWith(S) && "/" === k.charAt(S.length)),
                        _ = {
                            isActive: T,
                            isPending: P,
                            isTransitioning: x
                        },
                        F = T ? n : void 0;
                    C = "function" === typeof s ? s(_) : [s, T ? "active" : null, P ? "pending" : null, x ? "transitioning" : null].filter(Boolean).join(" ");
                    let R = "function" === typeof c ? c(_) : c;
                    return i.createElement(st, (0, o.A)((0, o.A)({}, m), {}, {
                        "aria-current": F,
                        className: C,
                        ref: t,
                        style: R,
                        to: d,
                        viewTransition: f
                    }), "function" === typeof p ? p(_) : p)
                })).displayName = "NavLink";
                var lt = i.forwardRef(((e, t) => {
                    let {
                        discover: n = "render",
                        fetcherKey: a,
                        navigate: s,
                        reloadDocument: l,
                        replace: u,
                        state: d,
                        method: f = Te,
                        action: p,
                        onSubmit: m,
                        relative: v,
                        preventScrollReset: y,
                        viewTransition: b
                    } = e, w = (0, r.A)(e, c), x = ht(), S = function(e) {
                        let {
                            relative: t
                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                            basename: n
                        } = i.useContext(Z), r = i.useContext(ee);
                        h(r, "useFormAction must be used inside a RouteContext");
                        let [a] = r.matches.slice(-1), s = (0, o.A)({}, ue(e || ".", {
                            relative: t
                        })), l = oe();
                        if (null == e) {
                            s.search = l.search;
                            let e = new URLSearchParams(s.search),
                                t = e.getAll("index");
                            if (t.some((e => "" === e))) {
                                e.delete("index"), t.filter((e => e)).forEach((t => e.append("index", t)));
                                let n = e.toString();
                                s.search = n ? "?".concat(n) : ""
                            }
                        }
                        e && "." !== e || !a.route.index || (s.search = s.search ? s.search.replace(/^\?/, "?index&") : "?index");
                        "/" !== n && (s.pathname = "/" === s.pathname ? n : z([n, s.pathname]));
                        return g(s)
                    }(p, {
                        relative: v
                    }), E = "get" === f.toLowerCase() ? "get" : "post", k = "string" === typeof p && at.test(p);
                    return i.createElement("form", (0, o.A)((0, o.A)({
                        ref: t,
                        method: E,
                        action: S,
                        onSubmit: l ? m : e => {
                            if (m && m(e), e.defaultPrevented) return;
                            e.preventDefault();
                            let t = e.nativeEvent.submitter,
                                n = (null === t || void 0 === t ? void 0 : t.getAttribute("formmethod")) || f;
                            x(t || e.currentTarget, {
                                fetcherKey: a,
                                method: n,
                                navigate: s,
                                replace: u,
                                state: d,
                                relative: v,
                                preventScrollReset: y,
                                viewTransition: b
                            })
                        }
                    }, w), {}, {
                        "data-discover": k || "render" !== n ? void 0 : "true"
                    }))
                }));

                function ut(e) {
                    return "".concat(e, " must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.")
                }

                function ct(e) {
                    let t = i.useContext(Y);
                    return h(t, ut(e)), t
                }
                lt.displayName = "Form";
                var dt = 0,
                    ft = () => "__".concat(String(++dt), "__");

                function ht() {
                    let {
                        router: e
                    } = ct("useSubmit"), {
                        basename: t
                    } = i.useContext(Z), n = be("useRouteId");
                    return i.useCallback((async function(r) {
                        let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                action: i,
                                method: a,
                                encType: s,
                                formData: l,
                                body: u
                            } = Le(r, t);
                        if (!1 === o.navigate) {
                            let t = o.fetcherKey || ft();
                            await e.fetch(t, n, o.action || i, {
                                preventScrollReset: o.preventScrollReset,
                                formData: l,
                                body: u,
                                formMethod: o.method || a,
                                formEncType: o.encType || s,
                                flushSync: o.flushSync
                            })
                        } else await e.navigate(o.action || i, {
                            preventScrollReset: o.preventScrollReset,
                            formData: l,
                            body: u,
                            formMethod: o.method || a,
                            formEncType: o.encType || s,
                            replace: o.replace,
                            state: o.state,
                            fromRouteId: n,
                            flushSync: o.flushSync,
                            viewTransition: o.viewTransition
                        })
                    }), [e, t, n])
                }
                new TextEncoder
            },
            2190: (e, t, n) => {
                "use strict";
                n.d(t, {
                    L: () => r
                });
                const r = (0, n(5043).createContext)({})
            },
            2730: (e, t, n) => {
                "use strict";
                var r = n(5043),
                    o = n(8853);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var a = new Set,
                    s = {};

                function l(e, t) {
                    u(e, t), u(e + "Capture", t)
                }

                function u(e, t) {
                    for (s[e] = t, e = 0; e < t.length; e++) a.add(t[e])
                }
                var c = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = Object.prototype.hasOwnProperty,
                    f = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    h = {},
                    p = {};

                function m(e, t, n, r, o, i, a) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = a
                }
                var v = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    v[e] = new m(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    v[t] = new m(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    v[e] = new m(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    v[e] = new m(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    v[e] = new m(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    v[e] = new m(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    v[e] = new m(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    v[e] = new m(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    v[e] = new m(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var g = /[\-:]([a-z])/g;

                function y(e) {
                    return e[1].toUpperCase()
                }

                function b(e, t, n, r) {
                    var o = v.hasOwnProperty(t) ? v[t] : null;
                    (null !== o ? 0 !== o.type : r || !(2 < t.length) || "o" !== t[0] && "O" !== t[0] || "n" !== t[1] && "N" !== t[1]) && (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, o, r) && (n = null), r || null === o ? function(e) {
                        return !!d.call(p, e) || !d.call(h, e) && (f.test(e) ? p[e] = !0 : (h[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new m(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new m(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(g, y);
                    v[t] = new m(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), v.xlinkHref = new m("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    v[e] = new m(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    x = Symbol.for("react.element"),
                    S = Symbol.for("react.portal"),
                    E = Symbol.for("react.fragment"),
                    k = Symbol.for("react.strict_mode"),
                    A = Symbol.for("react.profiler"),
                    C = Symbol.for("react.provider"),
                    T = Symbol.for("react.context"),
                    P = Symbol.for("react.forward_ref"),
                    _ = Symbol.for("react.suspense"),
                    F = Symbol.for("react.suspense_list"),
                    R = Symbol.for("react.memo"),
                    D = Symbol.for("react.lazy");
                Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
                var L = Symbol.for("react.offscreen");
                Symbol.for("react.legacy_hidden"), Symbol.for("react.cache"), Symbol.for("react.tracing_marker");
                var M = Symbol.iterator;

                function O(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = M && e[M] || e["@@iterator"]) ? e : null
                }
                var j, N = Object.assign;

                function V(e) {
                    if (void 0 === j) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        j = t && t[1] || ""
                    }
                    return "\n" + j + e
                }
                var I = !1;

                function z(e, t) {
                    if (!e || I) return "";
                    I = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (u) {
                                    var r = u
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (u) {
                                    r = u
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (u) {
                                r = u
                            }
                            e()
                        }
                    } catch (u) {
                        if (u && r && "string" === typeof u.stack) {
                            for (var o = u.stack.split("\n"), i = r.stack.split("\n"), a = o.length - 1, s = i.length - 1; 1 <= a && 0 <= s && o[a] !== i[s];) s--;
                            for (; 1 <= a && 0 <= s; a--, s--)
                                if (o[a] !== i[s]) {
                                    if (1 !== a || 1 !== s)
                                        do {
                                            if (a--, 0 > --s || o[a] !== i[s]) {
                                                var l = "\n" + o[a].replace(" at new ", " at ");
                                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l
                                            }
                                        } while (1 <= a && 0 <= s);
                                    break
                                }
                        }
                    } finally {
                        I = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? V(e) : ""
                }

                function B(e) {
                    switch (e.tag) {
                        case 5:
                            return V(e.type);
                        case 16:
                            return V("Lazy");
                        case 13:
                            return V("Suspense");
                        case 19:
                            return V("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = z(e.type, !1);
                        case 11:
                            return e = z(e.type.render, !1);
                        case 1:
                            return e = z(e.type, !0);
                        default:
                            return ""
                    }
                }

                function U(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case E:
                            return "Fragment";
                        case S:
                            return "Portal";
                        case A:
                            return "Profiler";
                        case k:
                            return "StrictMode";
                        case _:
                            return "Suspense";
                        case F:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case T:
                            return (e.displayName || "Context") + ".Consumer";
                        case C:
                            return (e._context.displayName || "Context") + ".Provider";
                        case P:
                            var t = e.render;
                            return (e = e.displayName) || (e = "" !== (e = t.displayName || t.name || "") ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                        case R:
                            return null !== (t = e.displayName || null) ? t : U(e.type) || "Memo";
                        case D:
                            t = e._payload, e = e._init;
                            try {
                                return U(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function H(e) {
                    var t = e.type;
                    switch (e.tag) {
                        case 24:
                            return "Cache";
                        case 9:
                            return (t.displayName || "Context") + ".Consumer";
                        case 10:
                            return (t._context.displayName || "Context") + ".Provider";
                        case 18:
                            return "DehydratedFragment";
                        case 11:
                            return e = (e = t.render).displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                        case 7:
                            return "Fragment";
                        case 5:
                            return t;
                        case 4:
                            return "Portal";
                        case 3:
                            return "Root";
                        case 6:
                            return "Text";
                        case 16:
                            return U(t);
                        case 8:
                            return t === k ? "StrictMode" : "Mode";
                        case 22:
                            return "Offscreen";
                        case 12:
                            return "Profiler";
                        case 21:
                            return "Scope";
                        case 13:
                            return "Suspense";
                        case 19:
                            return "SuspenseList";
                        case 25:
                            return "TracingMarker";
                        case 1:
                        case 0:
                        case 17:
                        case 2:
                        case 14:
                        case 15:
                            if ("function" === typeof t) return t.displayName || t.name || null;
                            if ("string" === typeof t) return t
                    }
                    return null
                }

                function W(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "string":
                        case "undefined":
                        case "object":
                            return e;
                        default:
                            return ""
                    }
                }

                function $(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function K(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = $(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var o = n.get,
                                i = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return o.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, i.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function Y(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = $(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function q(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function Q(e, t) {
                    var n = t.checked;
                    return N({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function G(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = W(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function X(e, t) {
                    null != (t = t.checked) && b(e, "checked", t, !1)
                }

                function Z(e, t) {
                    X(e, t);
                    var n = W(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? ee(e, t.type, n) : t.hasOwnProperty("defaultValue") && ee(e, t.type, W(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function J(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function ee(e, t, n) {
                    "number" === t && q(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                var te = Array.isArray;

                function ne(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + W(n), t = null, o = 0; o < e.length; o++) {
                            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                            null !== t || e[o].disabled || (t = e[o])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function re(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return N({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function oe(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (te(n)) {
                                if (1 < n.length) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: W(n)
                    }
                }

                function ie(e, t) {
                    var n = W(t.value),
                        r = W(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function ae(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }

                function se(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function le(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? se(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ue, ce, de = (ce = function(e, t) {
                    if ("http://www.w3.org/2000/svg" !== e.namespaceURI || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((ue = ue || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ue.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ce(e, t)
                    }))
                } : ce);

                function fe(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var he = {
                        animationIterationCount: !0,
                        aspectRatio: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    pe = ["Webkit", "ms", "Moz", "O"];

                function me(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || he.hasOwnProperty(e) && he[e] ? ("" + t).trim() : t + "px"
                }

                function ve(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                o = me(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                        }
                }
                Object.keys(he).forEach((function(e) {
                    pe.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), he[t] = he[e]
                    }))
                }));
                var ge = N({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function ye(e, t) {
                    if (t) {
                        if (ge[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function be(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }
                var we = null;

                function xe(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Se = null,
                    Ee = null,
                    ke = null;

                function Ae(e) {
                    if (e = wo(e)) {
                        if ("function" !== typeof Se) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = So(t), Se(e.stateNode, e.type, t))
                    }
                }

                function Ce(e) {
                    Ee ? ke ? ke.push(e) : ke = [e] : Ee = e
                }

                function Te() {
                    if (Ee) {
                        var e = Ee,
                            t = ke;
                        if (ke = Ee = null, Ae(e), t)
                            for (e = 0; e < t.length; e++) Ae(t[e])
                    }
                }

                function Pe(e, t) {
                    return e(t)
                }

                function _e() {}
                var Fe = !1;

                function Re(e, t, n) {
                    if (Fe) return e(t, n);
                    Fe = !0;
                    try {
                        return Pe(e, t, n)
                    } finally {
                        Fe = !1, (null !== Ee || null !== ke) && (_e(), Te())
                    }
                }

                function De(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = So(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Le = !1;
                if (c) try {
                    var Me = {};
                    Object.defineProperty(Me, "passive", {
                        get: function() {
                            Le = !0
                        }
                    }), window.addEventListener("test", Me, Me), window.removeEventListener("test", Me, Me)
                } catch (ce) {
                    Le = !1
                }

                function Oe(e, t, n, r, o, i, a, s, l) {
                    var u = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, u)
                    } catch (c) {
                        this.onError(c)
                    }
                }
                var je = !1,
                    Ne = null,
                    Ve = !1,
                    Ie = null,
                    ze = {
                        onError: function(e) {
                            je = !0, Ne = e
                        }
                    };

                function Be(e, t, n, r, o, i, a, s, l) {
                    je = !1, Ne = null, Oe.apply(ze, arguments)
                }

                function Ue(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (4098 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function He(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function We(e) {
                    if (Ue(e) !== e) throw Error(i(188))
                }

                function $e(e) {
                    return null !== (e = function(e) {
                        var t = e.alternate;
                        if (!t) {
                            if (null === (t = Ue(e))) throw Error(i(188));
                            return t !== e ? null : e
                        }
                        for (var n = e, r = t;;) {
                            var o = n.return;
                            if (null === o) break;
                            var a = o.alternate;
                            if (null === a) {
                                if (null !== (r = o.return)) {
                                    n = r;
                                    continue
                                }
                                break
                            }
                            if (o.child === a.child) {
                                for (a = o.child; a;) {
                                    if (a === n) return We(o), e;
                                    if (a === r) return We(o), t;
                                    a = a.sibling
                                }
                                throw Error(i(188))
                            }
                            if (n.return !== r.return) n = o, r = a;
                            else {
                                for (var s = !1, l = o.child; l;) {
                                    if (l === n) {
                                        s = !0, n = o, r = a;
                                        break
                                    }
                                    if (l === r) {
                                        s = !0, r = o, n = a;
                                        break
                                    }
                                    l = l.sibling
                                }
                                if (!s) {
                                    for (l = a.child; l;) {
                                        if (l === n) {
                                            s = !0, n = a, r = o;
                                            break
                                        }
                                        if (l === r) {
                                            s = !0, r = a, n = o;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!s) throw Error(i(189))
                                }
                            }
                            if (n.alternate !== r) throw Error(i(190))
                        }
                        if (3 !== n.tag) throw Error(i(188));
                        return n.stateNode.current === n ? e : t
                    }(e)) ? Ke(e) : null
                }

                function Ke(e) {
                    if (5 === e.tag || 6 === e.tag) return e;
                    for (e = e.child; null !== e;) {
                        var t = Ke(e);
                        if (null !== t) return t;
                        e = e.sibling
                    }
                    return null
                }
                var Ye = o.unstable_scheduleCallback,
                    qe = o.unstable_cancelCallback,
                    Qe = o.unstable_shouldYield,
                    Ge = o.unstable_requestPaint,
                    Xe = o.unstable_now,
                    Ze = o.unstable_getCurrentPriorityLevel,
                    Je = o.unstable_ImmediatePriority,
                    et = o.unstable_UserBlockingPriority,
                    tt = o.unstable_NormalPriority,
                    nt = o.unstable_LowPriority,
                    rt = o.unstable_IdlePriority,
                    ot = null,
                    it = null;
                var at = Math.clz32 ? Math.clz32 : function(e) {
                        return e >>>= 0, 0 === e ? 32 : 31 - (st(e) / lt | 0) | 0
                    },
                    st = Math.log,
                    lt = Math.LN2;
                var ut = 64,
                    ct = 4194304;

                function dt(e) {
                    switch (e & -e) {
                        case 1:
                            return 1;
                        case 2:
                            return 2;
                        case 4:
                            return 4;
                        case 8:
                            return 8;
                        case 16:
                            return 16;
                        case 32:
                            return 32;
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return 4194240 & e;
                        case 4194304:
                        case 8388608:
                        case 16777216:
                        case 33554432:
                        case 67108864:
                            return 130023424 & e;
                        case 134217728:
                            return 134217728;
                        case 268435456:
                            return 268435456;
                        case 536870912:
                            return 536870912;
                        case 1073741824:
                            return 1073741824;
                        default:
                            return e
                    }
                }

                function ft(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return 0;
                    var r = 0,
                        o = e.suspendedLanes,
                        i = e.pingedLanes,
                        a = 268435455 & n;
                    if (0 !== a) {
                        var s = a & ~o;
                        0 !== s ? r = dt(s) : 0 !== (i &= a) && (r = dt(i))
                    } else 0 !== (a = n & ~o) ? r = dt(a) : 0 !== i && (r = dt(i));
                    if (0 === r) return 0;
                    if (0 !== t && t !== r && 0 === (t & o) && ((o = r & -r) >= (i = t & -t) || 16 === o && 0 !== (4194240 & i))) return t;
                    if (0 !== (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - at(t)), r |= e[n], t &= ~o;
                    return r
                }

                function ht(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 4:
                            return t + 250;
                        case 8:
                        case 16:
                        case 32:
                        case 64:
                        case 128:
                        case 256:
                        case 512:
                        case 1024:
                        case 2048:
                        case 4096:
                        case 8192:
                        case 16384:
                        case 32768:
                        case 65536:
                        case 131072:
                        case 262144:
                        case 524288:
                        case 1048576:
                        case 2097152:
                            return t + 5e3;
                        default:
                            return -1
                    }
                }

                function pt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function mt() {
                    var e = ut;
                    return 0 === (4194240 & (ut <<= 1)) && (ut = 64), e
                }

                function vt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function gt(e, t, n) {
                    e.pendingLanes |= t, 536870912 !== t && (e.suspendedLanes = 0, e.pingedLanes = 0), (e = e.eventTimes)[t = 31 - at(t)] = n
                }

                function yt(e, t) {
                    var n = e.entangledLanes |= t;
                    for (e = e.entanglements; n;) {
                        var r = 31 - at(n),
                            o = 1 << r;
                        o & t | e[r] & t && (e[r] |= t), n &= ~o
                    }
                }
                var bt = 0;

                function wt(e) {
                    return 1 < (e &= -e) ? 4 < e ? 0 !== (268435455 & e) ? 16 : 536870912 : 4 : 1
                }
                var xt, St, Et, kt, At, Ct = !1,
                    Tt = [],
                    Pt = null,
                    _t = null,
                    Ft = null,
                    Rt = new Map,
                    Dt = new Map,
                    Lt = [],
                    Mt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function Ot(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            Pt = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            _t = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            Ft = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            Rt.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            Dt.delete(t.pointerId)
                    }
                }

                function jt(e, t, n, r, o, i) {
                    return null === e || e.nativeEvent !== i ? (e = {
                        blockedOn: t,
                        domEventName: n,
                        eventSystemFlags: r,
                        nativeEvent: i,
                        targetContainers: [o]
                    }, null !== t && (null !== (t = wo(t)) && St(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
                }

                function Nt(e) {
                    var t = bo(e.target);
                    if (null !== t) {
                        var n = Ue(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = He(n))) return e.blockedOn = t, void At(e.priority, (function() {
                                    Et(n)
                                }))
                            } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function Vt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Qt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = wo(n)) && St(t), e.blockedOn = n, !1;
                        var r = new(n = e.nativeEvent).constructor(n.type, n);
                        we = r, n.target.dispatchEvent(r), we = null, t.shift()
                    }
                    return !0
                }

                function It(e, t, n) {
                    Vt(e) && n.delete(t)
                }

                function zt() {
                    Ct = !1, null !== Pt && Vt(Pt) && (Pt = null), null !== _t && Vt(_t) && (_t = null), null !== Ft && Vt(Ft) && (Ft = null), Rt.forEach(It), Dt.forEach(It)
                }

                function Bt(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, Ct || (Ct = !0, o.unstable_scheduleCallback(o.unstable_NormalPriority, zt)))
                }

                function Ut(e) {
                    function t(t) {
                        return Bt(t, e)
                    }
                    if (0 < Tt.length) {
                        Bt(Tt[0], e);
                        for (var n = 1; n < Tt.length; n++) {
                            var r = Tt[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== Pt && Bt(Pt, e), null !== _t && Bt(_t, e), null !== Ft && Bt(Ft, e), Rt.forEach(t), Dt.forEach(t), n = 0; n < Lt.length; n++)(r = Lt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < Lt.length && null === (n = Lt[0]).blockedOn;) Nt(n), null === n.blockedOn && Lt.shift()
                }
                var Ht = w.ReactCurrentBatchConfig,
                    Wt = !0;

                function $t(e, t, n, r) {
                    var o = bt,
                        i = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 1, Yt(e, t, n, r)
                    } finally {
                        bt = o, Ht.transition = i
                    }
                }

                function Kt(e, t, n, r) {
                    var o = bt,
                        i = Ht.transition;
                    Ht.transition = null;
                    try {
                        bt = 4, Yt(e, t, n, r)
                    } finally {
                        bt = o, Ht.transition = i
                    }
                }

                function Yt(e, t, n, r) {
                    if (Wt) {
                        var o = Qt(e, t, n, r);
                        if (null === o) Wr(e, t, r, qt, n), Ot(e, r);
                        else if (function(e, t, n, r, o) {
                                switch (t) {
                                    case "focusin":
                                        return Pt = jt(Pt, e, t, n, r, o), !0;
                                    case "dragenter":
                                        return _t = jt(_t, e, t, n, r, o), !0;
                                    case "mouseover":
                                        return Ft = jt(Ft, e, t, n, r, o), !0;
                                    case "pointerover":
                                        var i = o.pointerId;
                                        return Rt.set(i, jt(Rt.get(i) || null, e, t, n, r, o)), !0;
                                    case "gotpointercapture":
                                        return i = o.pointerId, Dt.set(i, jt(Dt.get(i) || null, e, t, n, r, o)), !0
                                }
                                return !1
                            }(o, e, t, n, r)) r.stopPropagation();
                        else if (Ot(e, r), 4 & t && -1 < Mt.indexOf(e)) {
                            for (; null !== o;) {
                                var i = wo(o);
                                if (null !== i && xt(i), null === (i = Qt(e, t, n, r)) && Wr(e, t, r, qt, n), i === o) break;
                                o = i
                            }
                            null !== o && r.stopPropagation()
                        } else Wr(e, t, r, null, n)
                    }
                }
                var qt = null;

                function Qt(e, t, n, r) {
                    if (qt = null, null !== (e = bo(e = xe(r))))
                        if (null === (t = Ue(e))) e = null;
                        else if (13 === (n = t.tag)) {
                        if (null !== (e = He(t))) return e;
                        e = null
                    } else if (3 === n) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return 3 === t.tag ? t.stateNode.containerInfo : null;
                        e = null
                    } else t !== e && (e = null);
                    return qt = e, null
                }

                function Gt(e) {
                    switch (e) {
                        case "cancel":
                        case "click":
                        case "close":
                        case "contextmenu":
                        case "copy":
                        case "cut":
                        case "auxclick":
                        case "dblclick":
                        case "dragend":
                        case "dragstart":
                        case "drop":
                        case "focusin":
                        case "focusout":
                        case "input":
                        case "invalid":
                        case "keydown":
                        case "keypress":
                        case "keyup":
                        case "mousedown":
                        case "mouseup":
                        case "paste":
                        case "pause":
                        case "play":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointerup":
                        case "ratechange":
                        case "reset":
                        case "resize":
                        case "seeked":
                        case "submit":
                        case "touchcancel":
                        case "touchend":
                        case "touchstart":
                        case "volumechange":
                        case "change":
                        case "selectionchange":
                        case "textInput":
                        case "compositionstart":
                        case "compositionend":
                        case "compositionupdate":
                        case "beforeblur":
                        case "afterblur":
                        case "beforeinput":
                        case "blur":
                        case "fullscreenchange":
                        case "focus":
                        case "hashchange":
                        case "popstate":
                        case "select":
                        case "selectstart":
                            return 1;
                        case "drag":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "mousemove":
                        case "mouseout":
                        case "mouseover":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "scroll":
                        case "toggle":
                        case "touchmove":
                        case "wheel":
                        case "mouseenter":
                        case "mouseleave":
                        case "pointerenter":
                        case "pointerleave":
                            return 4;
                        case "message":
                            switch (Ze()) {
                                case Je:
                                    return 1;
                                case et:
                                    return 4;
                                case tt:
                                case nt:
                                    return 16;
                                case rt:
                                    return 536870912;
                                default:
                                    return 16
                            }
                        default:
                            return 16
                    }
                }
                var Xt = null,
                    Zt = null,
                    Jt = null;

                function en() {
                    if (Jt) return Jt;
                    var e, t, n = Zt,
                        r = n.length,
                        o = "value" in Xt ? Xt.value : Xt.textContent,
                        i = o.length;
                    for (e = 0; e < r && n[e] === o[e]; e++);
                    var a = r - e;
                    for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
                    return Jt = o.slice(e, 1 < t ? 1 - t : void 0)
                }

                function tn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function nn() {
                    return !0
                }

                function rn() {
                    return !1
                }

                function on(e) {
                    function t(t, n, r, o, i) {
                        for (var a in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = i, this.currentTarget = null, e) e.hasOwnProperty(a) && (t = e[a], this[a] = t ? t(o) : o[a]);
                        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? nn : rn, this.isPropagationStopped = rn, this
                    }
                    return N(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = nn)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = nn)
                        },
                        persist: function() {},
                        isPersistent: nn
                    }), t
                }
                var an, sn, ln, un = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    cn = on(un),
                    dn = N({}, un, {
                        view: 0,
                        detail: 0
                    }),
                    fn = on(dn),
                    hn = N({}, dn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: An,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== ln && (ln && "mousemove" === e.type ? (an = e.screenX - ln.screenX, sn = e.screenY - ln.screenY) : sn = an = 0, ln = e), an)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    pn = on(hn),
                    mn = on(N({}, hn, {
                        dataTransfer: 0
                    })),
                    vn = on(N({}, dn, {
                        relatedTarget: 0
                    })),
                    gn = on(N({}, un, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    yn = N({}, un, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    bn = on(yn),
                    wn = on(N({}, un, {
                        data: 0
                    })),
                    xn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Sn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    En = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function kn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = En[e]) && !!t[e]
                }

                function An() {
                    return kn
                }
                var Cn = N({}, dn, {
                        key: function(e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = tn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: An,
                        charCode: function(e) {
                            return "keypress" === e.type ? tn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? tn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Tn = on(Cn),
                    Pn = on(N({}, hn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    _n = on(N({}, dn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: An
                    })),
                    Fn = on(N({}, un, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Rn = N({}, hn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Dn = on(Rn),
                    Ln = [9, 13, 27, 32],
                    Mn = c && "CompositionEvent" in window,
                    On = null;
                c && "documentMode" in document && (On = document.documentMode);
                var jn = c && "TextEvent" in window && !On,
                    Nn = c && (!Mn || On && 8 < On && 11 >= On),
                    Vn = String.fromCharCode(32),
                    In = !1;

                function zn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== Ln.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Bn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Un = !1;
                var Hn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Wn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!Hn[e.type] : "textarea" === t
                }

                function $n(e, t, n, r) {
                    Ce(r), 0 < (t = Kr(t, "onChange")).length && (n = new cn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Kn = null,
                    Yn = null;

                function qn(e) {
                    Vr(e, 0)
                }

                function Qn(e) {
                    if (Y(xo(e))) return e
                }

                function Gn(e, t) {
                    if ("change" === e) return t
                }
                var Xn = !1;
                if (c) {
                    var Zn;
                    if (c) {
                        var Jn = "oninput" in document;
                        if (!Jn) {
                            var er = document.createElement("div");
                            er.setAttribute("oninput", "return;"), Jn = "function" === typeof er.oninput
                        }
                        Zn = Jn
                    } else Zn = !1;
                    Xn = Zn && (!document.documentMode || 9 < document.documentMode)
                }

                function tr() {
                    Kn && (Kn.detachEvent("onpropertychange", nr), Yn = Kn = null)
                }

                function nr(e) {
                    if ("value" === e.propertyName && Qn(Yn)) {
                        var t = [];
                        $n(t, Yn, e, xe(e)), Re(qn, t)
                    }
                }

                function rr(e, t, n) {
                    "focusin" === e ? (tr(), Yn = n, (Kn = t).attachEvent("onpropertychange", nr)) : "focusout" === e && tr()
                }

                function or(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Qn(Yn)
                }

                function ir(e, t) {
                    if ("click" === e) return Qn(t)
                }

                function ar(e, t) {
                    if ("input" === e || "change" === e) return Qn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                };

                function lr(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++) {
                        var o = n[r];
                        if (!d.call(t, o) || !sr(e[o], t[o])) return !1
                    }
                    return !0
                }

                function ur(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function cr(e, t) {
                    var n, r = ur(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = ur(r)
                    }
                }

                function dr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? dr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function fr() {
                    for (var e = window, t = q(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = q((e = t.contentWindow).document)
                    }
                    return t
                }

                function hr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function pr(e) {
                    var t = fr(),
                        n = e.focusedElem,
                        r = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && dr(n.ownerDocument.documentElement, n)) {
                        if (null !== r && hr(n))
                            if (t = r.start, void 0 === (e = r.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var o = n.textContent.length,
                                i = Math.min(r.start, o);
                            r = void 0 === r.end ? i : Math.min(r.end, o), !e.extend && i > r && (o = r, r = i, i = o), o = cr(n, i);
                            var a = cr(n, r);
                            o && a && (1 !== e.rangeCount || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== a.node || e.focusOffset !== a.offset) && ((t = t.createRange()).setStart(o.node, o.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(a.node, a.offset)) : (t.setEnd(a.node, a.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var mr = c && "documentMode" in document && 11 >= document.documentMode,
                    vr = null,
                    gr = null,
                    yr = null,
                    br = !1;

                function wr(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    br || null == vr || vr !== q(r) || ("selectionStart" in (r = vr) && hr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, yr && lr(yr, r) || (yr = r, 0 < (r = Kr(gr, "onSelect")).length && (t = new cn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = vr)))
                }

                function xr(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var Sr = {
                        animationend: xr("Animation", "AnimationEnd"),
                        animationiteration: xr("Animation", "AnimationIteration"),
                        animationstart: xr("Animation", "AnimationStart"),
                        transitionend: xr("Transition", "TransitionEnd")
                    },
                    Er = {},
                    kr = {};

                function Ar(e) {
                    if (Er[e]) return Er[e];
                    if (!Sr[e]) return e;
                    var t, n = Sr[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in kr) return Er[e] = n[t];
                    return e
                }
                c && (kr = document.createElement("div").style, "AnimationEvent" in window || (delete Sr.animationend.animation, delete Sr.animationiteration.animation, delete Sr.animationstart.animation), "TransitionEvent" in window || delete Sr.transitionend.transition);
                var Cr = Ar("animationend"),
                    Tr = Ar("animationiteration"),
                    Pr = Ar("animationstart"),
                    _r = Ar("transitionend"),
                    Fr = new Map,
                    Rr = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

                function Dr(e, t) {
                    Fr.set(e, t), l(t, [e])
                }
                for (var Lr = 0; Lr < Rr.length; Lr++) {
                    var Mr = Rr[Lr];
                    Dr(Mr.toLowerCase(), "on" + (Mr[0].toUpperCase() + Mr.slice(1)))
                }
                Dr(Cr, "onAnimationEnd"), Dr(Tr, "onAnimationIteration"), Dr(Pr, "onAnimationStart"), Dr("dblclick", "onDoubleClick"), Dr("focusin", "onFocus"), Dr("focusout", "onBlur"), Dr(_r, "onTransitionEnd"), u("onMouseEnter", ["mouseout", "mouseover"]), u("onMouseLeave", ["mouseout", "mouseover"]), u("onPointerEnter", ["pointerout", "pointerover"]), u("onPointerLeave", ["pointerout", "pointerover"]), l("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), l("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), l("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), l("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), l("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Or = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    jr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Or));

                function Nr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, o, a, s, l, u) {
                            if (Be.apply(this, arguments), je) {
                                if (!je) throw Error(i(198));
                                var c = Ne;
                                je = !1, Ne = null, Ve || (Ve = !0, Ie = c)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Vr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.event;
                        r = r.listeners;
                        e: {
                            var i = void 0;
                            if (t)
                                for (var a = r.length - 1; 0 <= a; a--) {
                                    var s = r[a],
                                        l = s.instance,
                                        u = s.currentTarget;
                                    if (s = s.listener, l !== i && o.isPropagationStopped()) break e;
                                    Nr(o, s, u), i = l
                                } else
                                    for (a = 0; a < r.length; a++) {
                                        if (l = (s = r[a]).instance, u = s.currentTarget, s = s.listener, l !== i && o.isPropagationStopped()) break e;
                                        Nr(o, s, u), i = l
                                    }
                        }
                    }
                    if (Ve) throw e = Ie, Ve = !1, Ie = null, e
                }

                function Ir(e, t) {
                    var n = t[vo];
                    void 0 === n && (n = t[vo] = new Set);
                    var r = e + "__bubble";
                    n.has(r) || (Hr(t, e, 2, !1), n.add(r))
                }

                function zr(e, t, n) {
                    var r = 0;
                    t && (r |= 4), Hr(n, e, r, t)
                }
                var Br = "_reactListening" + Math.random().toString(36).slice(2);

                function Ur(e) {
                    if (!e[Br]) {
                        e[Br] = !0, a.forEach((function(t) {
                            "selectionchange" !== t && (jr.has(t) || zr(t, !1, e), zr(t, !0, e))
                        }));
                        var t = 9 === e.nodeType ? e : e.ownerDocument;
                        null === t || t[Br] || (t[Br] = !0, zr("selectionchange", !1, t))
                    }
                }

                function Hr(e, t, n, r) {
                    switch (Gt(t)) {
                        case 1:
                            var o = $t;
                            break;
                        case 4:
                            o = Kt;
                            break;
                        default:
                            o = Yt
                    }
                    n = o.bind(null, t, n, e), o = void 0, !Le || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: o
                    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                        passive: o
                    }) : e.addEventListener(t, n, !1)
                }

                function Wr(e, t, n, r, o) {
                    var i = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var a = r.tag;
                        if (3 === a || 4 === a) {
                            var s = r.stateNode.containerInfo;
                            if (s === o || 8 === s.nodeType && s.parentNode === o) break;
                            if (4 === a)
                                for (a = r.return; null !== a;) {
                                    var l = a.tag;
                                    if ((3 === l || 4 === l) && ((l = a.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o)) return;
                                    a = a.return
                                }
                            for (; null !== s;) {
                                if (null === (a = bo(s))) return;
                                if (5 === (l = a.tag) || 6 === l) {
                                    r = i = a;
                                    continue e
                                }
                                s = s.parentNode
                            }
                        }
                        r = r.return
                    }
                    Re((function() {
                        var r = i,
                            o = xe(n),
                            a = [];
                        e: {
                            var s = Fr.get(e);
                            if (void 0 !== s) {
                                var l = cn,
                                    u = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === tn(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = Tn;
                                        break;
                                    case "focusin":
                                        u = "focus", l = vn;
                                        break;
                                    case "focusout":
                                        u = "blur", l = vn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = vn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = pn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = mn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = _n;
                                        break;
                                    case Cr:
                                    case Tr:
                                    case Pr:
                                        l = gn;
                                        break;
                                    case _r:
                                        l = Fn;
                                        break;
                                    case "scroll":
                                        l = fn;
                                        break;
                                    case "wheel":
                                        l = Dn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = bn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = Pn
                                }
                                var c = 0 !== (4 & t),
                                    d = !c && "scroll" === e,
                                    f = c ? null !== s ? s + "Capture" : null : s;
                                c = [];
                                for (var h, p = r; null !== p;) {
                                    var m = (h = p).stateNode;
                                    if (5 === h.tag && null !== m && (h = m, null !== f && (null != (m = De(p, f)) && c.push($r(p, m, h)))), d) break;
                                    p = p.return
                                }
                                0 < c.length && (s = new l(s, u, null, n, o), a.push({
                                    event: s,
                                    listeners: c
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(s = "mouseover" === e || "pointerover" === e) || n === we || !(u = n.relatedTarget || n.fromElement) || !bo(u) && !u[mo]) && (l || s) && (s = o.window === o ? o : (s = o.ownerDocument) ? s.defaultView || s.parentWindow : window, l ? (l = r, null !== (u = (u = n.relatedTarget || n.toElement) ? bo(u) : null) && (u !== (d = Ue(u)) || 5 !== u.tag && 6 !== u.tag) && (u = null)) : (l = null, u = r), l !== u)) {
                                if (c = pn, m = "onMouseLeave", f = "onMouseEnter", p = "mouse", "pointerout" !== e && "pointerover" !== e || (c = Pn, m = "onPointerLeave", f = "onPointerEnter", p = "pointer"), d = null == l ? s : xo(l), h = null == u ? s : xo(u), (s = new c(m, p + "leave", l, n, o)).target = d, s.relatedTarget = h, m = null, bo(o) === r && ((c = new c(f, p + "enter", u, n, o)).target = h, c.relatedTarget = d, m = c), d = m, l && u) e: {
                                    for (f = u, p = 0, h = c = l; h; h = Yr(h)) p++;
                                    for (h = 0, m = f; m; m = Yr(m)) h++;
                                    for (; 0 < p - h;) c = Yr(c),
                                    p--;
                                    for (; 0 < h - p;) f = Yr(f),
                                    h--;
                                    for (; p--;) {
                                        if (c === f || null !== f && c === f.alternate) break e;
                                        c = Yr(c), f = Yr(f)
                                    }
                                    c = null
                                }
                                else c = null;
                                null !== l && qr(a, s, l, c, !1), null !== u && null !== d && qr(a, d, u, c, !0)
                            }
                            if ("select" === (l = (s = r ? xo(r) : window).nodeName && s.nodeName.toLowerCase()) || "input" === l && "file" === s.type) var v = Gn;
                            else if (Wn(s))
                                if (Xn) v = ar;
                                else {
                                    v = or;
                                    var g = rr
                                }
                            else(l = s.nodeName) && "input" === l.toLowerCase() && ("checkbox" === s.type || "radio" === s.type) && (v = ir);
                            switch (v && (v = v(e, r)) ? $n(a, v, n, o) : (g && g(e, s, r), "focusout" === e && (g = s._wrapperState) && g.controlled && "number" === s.type && ee(s, "number", s.value)), g = r ? xo(r) : window, e) {
                                case "focusin":
                                    (Wn(g) || "true" === g.contentEditable) && (vr = g, gr = r, yr = null);
                                    break;
                                case "focusout":
                                    yr = gr = vr = null;
                                    break;
                                case "mousedown":
                                    br = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    br = !1, wr(a, n, o);
                                    break;
                                case "selectionchange":
                                    if (mr) break;
                                case "keydown":
                                case "keyup":
                                    wr(a, n, o)
                            }
                            var y;
                            if (Mn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Un ? zn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (Nn && "ko" !== n.locale && (Un || "onCompositionStart" !== b ? "onCompositionEnd" === b && Un && (y = en()) : (Zt = "value" in (Xt = o) ? Xt.value : Xt.textContent, Un = !0)), 0 < (g = Kr(r, b)).length && (b = new wn(b, e, null, n, o), a.push({
                                event: b,
                                listeners: g
                            }), y ? b.data = y : null !== (y = Bn(n)) && (b.data = y))), (y = jn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Bn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (In = !0, Vn);
                                    case "textInput":
                                        return (e = t.data) === Vn && In ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Un) return "compositionend" === e || !Mn && zn(e, t) ? (e = en(), Jt = Zt = Xt = null, Un = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return Nn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Kr(r, "onBeforeInput")).length && (o = new wn("onBeforeInput", "beforeinput", null, n, o), a.push({
                                event: o,
                                listeners: r
                            }), o.data = y))
                        }
                        Vr(a, t)
                    }))
                }

                function $r(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Kr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var o = e,
                            i = o.stateNode;
                        5 === o.tag && null !== i && (o = i, null != (i = De(e, n)) && r.unshift($r(e, i, o)), null != (i = De(e, t)) && r.push($r(e, i, o))), e = e.return
                    }
                    return r
                }

                function Yr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function qr(e, t, n, r, o) {
                    for (var i = t._reactName, a = []; null !== n && n !== r;) {
                        var s = n,
                            l = s.alternate,
                            u = s.stateNode;
                        if (null !== l && l === r) break;
                        5 === s.tag && null !== u && (s = u, o ? null != (l = De(n, i)) && a.unshift($r(n, l, s)) : o || null != (l = De(n, i)) && a.push($r(n, l, s))), n = n.return
                    }
                    0 !== a.length && e.push({
                        event: t,
                        listeners: a
                    })
                }
                var Qr = /\r\n?/g,
                    Gr = /\u0000|\uFFFD/g;

                function Xr(e) {
                    return ("string" === typeof e ? e : "" + e).replace(Qr, "\n").replace(Gr, "")
                }

                function Zr(e, t, n) {
                    if (t = Xr(t), Xr(e) !== t && n) throw Error(i(425))
                }

                function Jr() {}
                var eo = null,
                    to = null;

                function no(e, t) {
                    return "textarea" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var ro = "function" === typeof setTimeout ? setTimeout : void 0,
                    oo = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    io = "function" === typeof Promise ? Promise : void 0,
                    ao = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof io ? function(e) {
                        return io.resolve(null).then(e).catch(so)
                    } : ro;

                function so(e) {
                    setTimeout((function() {
                        throw e
                    }))
                }

                function lo(e, t) {
                    var n = t,
                        r = 0;
                    do {
                        var o = n.nextSibling;
                        if (e.removeChild(n), o && 8 === o.nodeType)
                            if ("/$" === (n = o.data)) {
                                if (0 === r) return e.removeChild(o), void Ut(t);
                                r--
                            } else "$" !== n && "$?" !== n && "$!" !== n || r++;
                        n = o
                    } while (n);
                    Ut(t)
                }

                function uo(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break;
                        if (8 === t) {
                            if ("$" === (t = e.data) || "$!" === t || "$?" === t) break;
                            if ("/$" === t) return null
                        }
                    }
                    return e
                }

                function co(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var fo = Math.random().toString(36).slice(2),
                    ho = "__reactFiber$" + fo,
                    po = "__reactProps$" + fo,
                    mo = "__reactContainer$" + fo,
                    vo = "__reactEvents$" + fo,
                    go = "__reactListeners$" + fo,
                    yo = "__reactHandles$" + fo;

                function bo(e) {
                    var t = e[ho];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[mo] || n[ho]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = co(e); null !== e;) {
                                    if (n = e[ho]) return n;
                                    e = co(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function wo(e) {
                    return !(e = e[ho] || e[mo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function xo(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function So(e) {
                    return e[po] || null
                }
                var Eo = [],
                    ko = -1;

                function Ao(e) {
                    return {
                        current: e
                    }
                }

                function Co(e) {
                    0 > ko || (e.current = Eo[ko], Eo[ko] = null, ko--)
                }

                function To(e, t) {
                    ko++, Eo[ko] = e.current, e.current = t
                }
                var Po = {},
                    _o = Ao(Po),
                    Fo = Ao(!1),
                    Ro = Po;

                function Do(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Po;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var o, i = {};
                    for (o in n) i[o] = t[o];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = i), i
                }

                function Lo(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Mo() {
                    Co(Fo), Co(_o)
                }

                function Oo(e, t, n) {
                    if (_o.current !== Po) throw Error(i(168));
                    To(_o, t), To(Fo, n)
                }

                function jo(e, t, n) {
                    var r = e.stateNode;
                    if (t = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var o in r = r.getChildContext())
                        if (!(o in t)) throw Error(i(108, H(e) || "Unknown", o));
                    return N({}, n, r)
                }

                function No(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Po, Ro = _o.current, To(_o, e), To(Fo, Fo.current), !0
                }

                function Vo(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = jo(e, t, Ro), r.__reactInternalMemoizedMergedChildContext = e, Co(Fo), Co(_o), To(_o, e)) : Co(Fo), To(Fo, n)
                }
                var Io = null,
                    zo = !1,
                    Bo = !1;

                function Uo(e) {
                    null === Io ? Io = [e] : Io.push(e)
                }

                function Ho() {
                    if (!Bo && null !== Io) {
                        Bo = !0;
                        var e = 0,
                            t = bt;
                        try {
                            var n = Io;
                            for (bt = 1; e < n.length; e++) {
                                var r = n[e];
                                do {
                                    r = r(!0)
                                } while (null !== r)
                            }
                            Io = null, zo = !1
                        } catch (o) {
                            throw null !== Io && (Io = Io.slice(e + 1)), Ye(Je, Ho), o
                        } finally {
                            bt = t, Bo = !1
                        }
                    }
                    return null
                }
                var Wo = [],
                    $o = 0,
                    Ko = null,
                    Yo = 0,
                    qo = [],
                    Qo = 0,
                    Go = null,
                    Xo = 1,
                    Zo = "";

                function Jo(e, t) {
                    Wo[$o++] = Yo, Wo[$o++] = Ko, Ko = e, Yo = t
                }

                function ei(e, t, n) {
                    qo[Qo++] = Xo, qo[Qo++] = Zo, qo[Qo++] = Go, Go = e;
                    var r = Xo;
                    e = Zo;
                    var o = 32 - at(r) - 1;
                    r &= ~(1 << o), n += 1;
                    var i = 32 - at(t) + o;
                    if (30 < i) {
                        var a = o - o % 5;
                        i = (r & (1 << a) - 1).toString(32), r >>= a, o -= a, Xo = 1 << 32 - at(t) + o | n << o | r, Zo = i + e
                    } else Xo = 1 << i | n << o | r, Zo = e
                }

                function ti(e) {
                    null !== e.return && (Jo(e, 1), ei(e, 1, 0))
                }

                function ni(e) {
                    for (; e === Ko;) Ko = Wo[--$o], Wo[$o] = null, Yo = Wo[--$o], Wo[$o] = null;
                    for (; e === Go;) Go = qo[--Qo], qo[Qo] = null, Zo = qo[--Qo], qo[Qo] = null, Xo = qo[--Qo], qo[Qo] = null
                }
                var ri = null,
                    oi = null,
                    ii = !1,
                    ai = null;

                function si(e, t) {
                    var n = Ru(5, null, null, 0);
                    n.elementType = "DELETED", n.stateNode = t, n.return = e, null === (t = e.deletions) ? (e.deletions = [n], e.flags |= 16) : t.push(n)
                }

                function li(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, ri = e, oi = uo(t.firstChild), !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, ri = e, oi = null, !0);
                        case 13:
                            return null !== (t = 8 !== t.nodeType ? null : t) && (n = null !== Go ? {
                                id: Xo,
                                overflow: Zo
                            } : null, e.memoizedState = {
                                dehydrated: t,
                                treeContext: n,
                                retryLane: 1073741824
                            }, (n = Ru(18, null, null, 0)).stateNode = t, n.return = e, e.child = n, ri = e, oi = null, !0);
                        default:
                            return !1
                    }
                }

                function ui(e) {
                    return 0 !== (1 & e.mode) && 0 === (128 & e.flags)
                }

                function ci(e) {
                    if (ii) {
                        var t = oi;
                        if (t) {
                            var n = t;
                            if (!li(e, t)) {
                                if (ui(e)) throw Error(i(418));
                                t = uo(n.nextSibling);
                                var r = ri;
                                t && li(e, t) ? si(r, n) : (e.flags = -4097 & e.flags | 2, ii = !1, ri = e)
                            }
                        } else {
                            if (ui(e)) throw Error(i(418));
                            e.flags = -4097 & e.flags | 2, ii = !1, ri = e
                        }
                    }
                }

                function di(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    ri = e
                }

                function fi(e) {
                    if (e !== ri) return !1;
                    if (!ii) return di(e), ii = !0, !1;
                    var t;
                    if ((t = 3 !== e.tag) && !(t = 5 !== e.tag) && (t = "head" !== (t = e.type) && "body" !== t && !no(e.type, e.memoizedProps)), t && (t = oi)) {
                        if (ui(e)) throw hi(), Error(i(418));
                        for (; t;) si(e, t), t = uo(t.nextSibling)
                    }
                    if (di(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            oi = uo(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            oi = null
                        }
                    } else oi = ri ? uo(e.stateNode.nextSibling) : null;
                    return !0
                }

                function hi() {
                    for (var e = oi; e;) e = uo(e.nextSibling)
                }

                function pi() {
                    oi = ri = null, ii = !1
                }

                function mi(e) {
                    null === ai ? ai = [e] : ai.push(e)
                }
                var vi = w.ReactCurrentBatchConfig;

                function gi(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var o = r,
                                a = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === a ? t.ref : (t = function(e) {
                                var t = o.refs;
                                null === e ? delete t[a] : t[a] = e
                            }, t._stringRef = a, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function yi(e, t) {
                    throw e = Object.prototype.toString.call(t), Error(i(31, "[object Object]" === e ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
                }

                function bi(e) {
                    return (0, e._init)(e._payload)
                }

                function wi(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.deletions;
                            null === r ? (t.deletions = [n], t.flags |= 16) : r.push(n)
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function o(e, t) {
                        return (e = Lu(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags |= 2, n) : r : (t.flags |= 2, n) : (t.flags |= 1048576, n)
                    }

                    function s(t) {
                        return e && null === t.alternate && (t.flags |= 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Nu(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function u(e, t, n, r) {
                        var i = n.type;
                        return i === E ? d(e, t, n.props.children, r, n.key) : null !== t && (t.elementType === i || "object" === typeof i && null !== i && i.$$typeof === D && bi(i) === t.type) ? ((r = o(t, n.props)).ref = gi(e, t, n), r.return = e, r) : ((r = Mu(n.type, n.key, n.props, null, e.mode, r)).ref = gi(e, t, n), r.return = e, r)
                    }

                    function c(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Vu(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, r, i) {
                        return null === t || 7 !== t.tag ? ((t = Ou(n, e.mode, r, i)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function f(e, t, n) {
                        if ("string" === typeof t && "" !== t || "number" === typeof t) return (t = Nu("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case x:
                                    return (n = Mu(t.type, t.key, t.props, null, e.mode, n)).ref = gi(e, null, t), n.return = e, n;
                                case S:
                                    return (t = Vu(t, e.mode, n)).return = e, t;
                                case D:
                                    return f(e, (0, t._init)(t._payload), n)
                            }
                            if (te(t) || O(t)) return (t = Ou(t, e.mode, n, null)).return = e, t;
                            yi(e, t)
                        }
                        return null
                    }

                    function h(e, t, n, r) {
                        var o = null !== t ? t.key : null;
                        if ("string" === typeof n && "" !== n || "number" === typeof n) return null !== o ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case x:
                                    return n.key === o ? u(e, t, n, r) : null;
                                case S:
                                    return n.key === o ? c(e, t, n, r) : null;
                                case D:
                                    return h(e, t, (o = n._init)(n._payload), r)
                            }
                            if (te(n) || O(n)) return null !== o ? null : d(e, t, n, r, null);
                            yi(e, n)
                        }
                        return null
                    }

                    function p(e, t, n, r, o) {
                        if ("string" === typeof r && "" !== r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, o);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case x:
                                    return u(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case S:
                                    return c(t, e = e.get(null === r.key ? n : r.key) || null, r, o);
                                case D:
                                    return p(e, t, n, (0, r._init)(r._payload), o)
                            }
                            if (te(r) || O(r)) return d(t, e = e.get(n) || null, r, o, null);
                            yi(t, r)
                        }
                        return null
                    }

                    function m(o, i, s, l) {
                        for (var u = null, c = null, d = i, m = i = 0, v = null; null !== d && m < s.length; m++) {
                            d.index > m ? (v = d, d = null) : v = d.sibling;
                            var g = h(o, d, s[m], l);
                            if (null === g) {
                                null === d && (d = v);
                                break
                            }
                            e && d && null === g.alternate && t(o, d), i = a(g, i, m), null === c ? u = g : c.sibling = g, c = g, d = v
                        }
                        if (m === s.length) return n(o, d), ii && Jo(o, m), u;
                        if (null === d) {
                            for (; m < s.length; m++) null !== (d = f(o, s[m], l)) && (i = a(d, i, m), null === c ? u = d : c.sibling = d, c = d);
                            return ii && Jo(o, m), u
                        }
                        for (d = r(o, d); m < s.length; m++) null !== (v = p(d, o, m, s[m], l)) && (e && null !== v.alternate && d.delete(null === v.key ? m : v.key), i = a(v, i, m), null === c ? u = v : c.sibling = v, c = v);
                        return e && d.forEach((function(e) {
                            return t(o, e)
                        })), ii && Jo(o, m), u
                    }

                    function v(o, s, l, u) {
                        var c = O(l);
                        if ("function" !== typeof c) throw Error(i(150));
                        if (null == (l = c.call(l))) throw Error(i(151));
                        for (var d = c = null, m = s, v = s = 0, g = null, y = l.next(); null !== m && !y.done; v++, y = l.next()) {
                            m.index > v ? (g = m, m = null) : g = m.sibling;
                            var b = h(o, m, y.value, u);
                            if (null === b) {
                                null === m && (m = g);
                                break
                            }
                            e && m && null === b.alternate && t(o, m), s = a(b, s, v), null === d ? c = b : d.sibling = b, d = b, m = g
                        }
                        if (y.done) return n(o, m), ii && Jo(o, v), c;
                        if (null === m) {
                            for (; !y.done; v++, y = l.next()) null !== (y = f(o, y.value, u)) && (s = a(y, s, v), null === d ? c = y : d.sibling = y, d = y);
                            return ii && Jo(o, v), c
                        }
                        for (m = r(o, m); !y.done; v++, y = l.next()) null !== (y = p(m, o, v, y.value, u)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), s = a(y, s, v), null === d ? c = y : d.sibling = y, d = y);
                        return e && m.forEach((function(e) {
                            return t(o, e)
                        })), ii && Jo(o, v), c
                    }
                    return function e(r, i, a, l) {
                        if ("object" === typeof a && null !== a && a.type === E && null === a.key && (a = a.props.children), "object" === typeof a && null !== a) {
                            switch (a.$$typeof) {
                                case x:
                                    e: {
                                        for (var u = a.key, c = i; null !== c;) {
                                            if (c.key === u) {
                                                if ((u = a.type) === E) {
                                                    if (7 === c.tag) {
                                                        n(r, c.sibling), (i = o(c, a.props.children)).return = r, r = i;
                                                        break e
                                                    }
                                                } else if (c.elementType === u || "object" === typeof u && null !== u && u.$$typeof === D && bi(u) === c.type) {
                                                    n(r, c.sibling), (i = o(c, a.props)).ref = gi(r, c, a), i.return = r, r = i;
                                                    break e
                                                }
                                                n(r, c);
                                                break
                                            }
                                            t(r, c), c = c.sibling
                                        }
                                        a.type === E ? ((i = Ou(a.props.children, r.mode, l, a.key)).return = r, r = i) : ((l = Mu(a.type, a.key, a.props, null, r.mode, l)).ref = gi(r, i, a), l.return = r, r = l)
                                    }
                                    return s(r);
                                case S:
                                    e: {
                                        for (c = a.key; null !== i;) {
                                            if (i.key === c) {
                                                if (4 === i.tag && i.stateNode.containerInfo === a.containerInfo && i.stateNode.implementation === a.implementation) {
                                                    n(r, i.sibling), (i = o(i, a.children || [])).return = r, r = i;
                                                    break e
                                                }
                                                n(r, i);
                                                break
                                            }
                                            t(r, i), i = i.sibling
                                        }(i = Vu(a, r.mode, l)).return = r,
                                        r = i
                                    }
                                    return s(r);
                                case D:
                                    return e(r, i, (c = a._init)(a._payload), l)
                            }
                            if (te(a)) return m(r, i, a, l);
                            if (O(a)) return v(r, i, a, l);
                            yi(r, a)
                        }
                        return "string" === typeof a && "" !== a || "number" === typeof a ? (a = "" + a, null !== i && 6 === i.tag ? (n(r, i.sibling), (i = o(i, a)).return = r, r = i) : (n(r, i), (i = Nu(a, r.mode, l)).return = r, r = i), s(r)) : n(r, i)
                    }
                }
                var xi = wi(!0),
                    Si = wi(!1),
                    Ei = Ao(null),
                    ki = null,
                    Ai = null,
                    Ci = null;

                function Ti() {
                    Ci = Ai = ki = null
                }

                function Pi(e) {
                    var t = Ei.current;
                    Co(Ei), e._currentValue = t
                }

                function _i(e, t, n) {
                    for (; null !== e;) {
                        var r = e.alternate;
                        if ((e.childLanes & t) !== t ? (e.childLanes |= t, null !== r && (r.childLanes |= t)) : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
                        e = e.return
                    }
                }

                function Fi(e, t) {
                    ki = e, Ci = Ai = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (bs = !0), e.firstContext = null)
                }

                function Ri(e) {
                    var t = e._currentValue;
                    if (Ci !== e)
                        if (e = {
                                context: e,
                                memoizedValue: t,
                                next: null
                            }, null === Ai) {
                            if (null === ki) throw Error(i(308));
                            Ai = e, ki.dependencies = {
                                lanes: 0,
                                firstContext: e
                            }
                        } else Ai = Ai.next = e;
                    return t
                }
                var Di = null;

                function Li(e) {
                    null === Di ? Di = [e] : Di.push(e)
                }

                function Mi(e, t, n, r) {
                    var o = t.interleaved;
                    return null === o ? (n.next = n, Li(t)) : (n.next = o.next, o.next = n), t.interleaved = n, Oi(e, r)
                }

                function Oi(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }
                var ji = !1;

                function Ni(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null,
                            interleaved: null,
                            lanes: 0
                        },
                        effects: null
                    }
                }

                function Vi(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function Ii(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function zi(e, t, n) {
                    var r = e.updateQueue;
                    if (null === r) return null;
                    if (r = r.shared, 0 !== (2 & Pl)) {
                        var o = r.pending;
                        return null === o ? t.next = t : (t.next = o.next, o.next = t), r.pending = t, Oi(e, n)
                    }
                    return null === (o = r.interleaved) ? (t.next = t, Li(r)) : (t.next = o.next, o.next = t), r.interleaved = t, Oi(e, n)
                }

                function Bi(e, t, n) {
                    if (null !== (t = t.updateQueue) && (t = t.shared, 0 !== (4194240 & n))) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }

                function Ui(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var o = null,
                            i = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var a = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === i ? o = i = a : i = i.next = a, n = n.next
                            } while (null !== n);
                            null === i ? o = i = t : i = i.next = t
                        } else o = i = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: o,
                            lastBaseUpdate: i,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function Hi(e, t, n, r) {
                    var o = e.updateQueue;
                    ji = !1;
                    var i = o.firstBaseUpdate,
                        a = o.lastBaseUpdate,
                        s = o.shared.pending;
                    if (null !== s) {
                        o.shared.pending = null;
                        var l = s,
                            u = l.next;
                        l.next = null, null === a ? i = u : a.next = u, a = l;
                        var c = e.alternate;
                        null !== c && ((s = (c = c.updateQueue).lastBaseUpdate) !== a && (null === s ? c.firstBaseUpdate = u : s.next = u, c.lastBaseUpdate = l))
                    }
                    if (null !== i) {
                        var d = o.baseState;
                        for (a = 0, c = u = l = null, s = i;;) {
                            var f = s.lane,
                                h = s.eventTime;
                            if ((r & f) === f) {
                                null !== c && (c = c.next = {
                                    eventTime: h,
                                    lane: 0,
                                    tag: s.tag,
                                    payload: s.payload,
                                    callback: s.callback,
                                    next: null
                                });
                                e: {
                                    var p = e,
                                        m = s;
                                    switch (f = t, h = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(p = m.payload)) {
                                                d = p.call(h, d, f);
                                                break e
                                            }
                                            d = p;
                                            break e;
                                        case 3:
                                            p.flags = -65537 & p.flags | 128;
                                        case 0:
                                            if (null === (f = "function" === typeof(p = m.payload) ? p.call(h, d, f) : p) || void 0 === f) break e;
                                            d = N({}, d, f);
                                            break e;
                                        case 2:
                                            ji = !0
                                    }
                                }
                                null !== s.callback && 0 !== s.lane && (e.flags |= 64, null === (f = o.effects) ? o.effects = [s] : f.push(s))
                            } else h = {
                                eventTime: h,
                                lane: f,
                                tag: s.tag,
                                payload: s.payload,
                                callback: s.callback,
                                next: null
                            }, null === c ? (u = c = h, l = d) : c = c.next = h, a |= f;
                            if (null === (s = s.next)) {
                                if (null === (s = o.shared.pending)) break;
                                s = (f = s).next, f.next = null, o.lastBaseUpdate = f, o.shared.pending = null
                            }
                        }
                        if (null === c && (l = d), o.baseState = l, o.firstBaseUpdate = u, o.lastBaseUpdate = c, null !== (t = o.shared.interleaved)) {
                            o = t;
                            do {
                                a |= o.lane, o = o.next
                            } while (o !== t)
                        } else null === i && (o.shared.lanes = 0);
                        jl |= a, e.lanes = a, e.memoizedState = d
                    }
                }

                function Wi(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                o = r.callback;
                            if (null !== o) {
                                if (r.callback = null, r = n, "function" !== typeof o) throw Error(i(191, o));
                                o.call(r)
                            }
                        }
                }
                var $i = {},
                    Ki = Ao($i),
                    Yi = Ao($i),
                    qi = Ao($i);

                function Qi(e) {
                    if (e === $i) throw Error(i(174));
                    return e
                }

                function Gi(e, t) {
                    switch (To(qi, t), To(Yi, e), To(Ki, $i), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : le(null, "");
                            break;
                        default:
                            t = le(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    Co(Ki), To(Ki, t)
                }

                function Xi() {
                    Co(Ki), Co(Yi), Co(qi)
                }

                function Zi(e) {
                    Qi(qi.current);
                    var t = Qi(Ki.current),
                        n = le(t, e.type);
                    t !== n && (To(Yi, e), To(Ki, n))
                }

                function Ji(e) {
                    Yi.current === e && (Co(Ki), Co(Yi))
                }
                var ea = Ao(0);

                function ta(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (128 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var na = [];

                function ra() {
                    for (var e = 0; e < na.length; e++) na[e]._workInProgressVersionPrimary = null;
                    na.length = 0
                }
                var oa = w.ReactCurrentDispatcher,
                    ia = w.ReactCurrentBatchConfig,
                    aa = 0,
                    sa = null,
                    la = null,
                    ua = null,
                    ca = !1,
                    da = !1,
                    fa = 0,
                    ha = 0;

                function pa() {
                    throw Error(i(321))
                }

                function ma(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function va(e, t, n, r, o, a) {
                    if (aa = a, sa = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, oa.current = null === e || null === e.memoizedState ? Ja : es, e = n(r, o), da) {
                        a = 0;
                        do {
                            if (da = !1, fa = 0, 25 <= a) throw Error(i(301));
                            a += 1, ua = la = null, t.updateQueue = null, oa.current = ts, e = n(r, o)
                        } while (da)
                    }
                    if (oa.current = Za, t = null !== la && null !== la.next, aa = 0, ua = la = sa = null, ca = !1, t) throw Error(i(300));
                    return e
                }

                function ga() {
                    var e = 0 !== fa;
                    return fa = 0, e
                }

                function ya() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ua ? sa.memoizedState = ua = e : ua = ua.next = e, ua
                }

                function ba() {
                    if (null === la) {
                        var e = sa.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = la.next;
                    var t = null === ua ? sa.memoizedState : ua.next;
                    if (null !== t) ua = t, la = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (la = e).memoizedState,
                            baseState: la.baseState,
                            baseQueue: la.baseQueue,
                            queue: la.queue,
                            next: null
                        }, null === ua ? sa.memoizedState = ua = e : ua = ua.next = e
                    }
                    return ua
                }

                function wa(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function xa(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = la,
                        o = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== o) {
                            var s = o.next;
                            o.next = a.next, a.next = s
                        }
                        r.baseQueue = o = a, n.pending = null
                    }
                    if (null !== o) {
                        a = o.next, r = r.baseState;
                        var l = s = null,
                            u = null,
                            c = a;
                        do {
                            var d = c.lane;
                            if ((aa & d) === d) null !== u && (u = u.next = {
                                lane: 0,
                                action: c.action,
                                hasEagerState: c.hasEagerState,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
                            else {
                                var f = {
                                    lane: d,
                                    action: c.action,
                                    hasEagerState: c.hasEagerState,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === u ? (l = u = f, s = r) : u = u.next = f, sa.lanes |= d, jl |= d
                            }
                            c = c.next
                        } while (null !== c && c !== a);
                        null === u ? s = r : u.next = l, sr(r, t.memoizedState) || (bs = !0), t.memoizedState = r, t.baseState = s, t.baseQueue = u, n.lastRenderedState = r
                    }
                    if (null !== (e = n.interleaved)) {
                        o = e;
                        do {
                            a = o.lane, sa.lanes |= a, jl |= a, o = o.next
                        } while (o !== e)
                    } else null === o && (n.lanes = 0);
                    return [t.memoizedState, n.dispatch]
                }

                function Sa(e) {
                    var t = ba(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        o = n.pending,
                        a = t.memoizedState;
                    if (null !== o) {
                        n.pending = null;
                        var s = o = o.next;
                        do {
                            a = e(a, s.action), s = s.next
                        } while (s !== o);
                        sr(a, t.memoizedState) || (bs = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function Ea() {}

                function ka(e, t) {
                    var n = sa,
                        r = ba(),
                        o = t(),
                        a = !sr(r.memoizedState, o);
                    if (a && (r.memoizedState = o, bs = !0), r = r.queue, ja(Ta.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || null !== ua && 1 & ua.memoizedState.tag) {
                        if (n.flags |= 2048, Ra(9, Ca.bind(null, n, r, o, t), void 0, null), null === _l) throw Error(i(349));
                        0 !== (30 & aa) || Aa(n, t, o)
                    }
                    return o
                }

                function Aa(e, t, n) {
                    e.flags |= 16384, e = {
                        getSnapshot: t,
                        value: n
                    }, null === (t = sa.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, sa.updateQueue = t, t.stores = [e]) : null === (n = t.stores) ? t.stores = [e] : n.push(e)
                }

                function Ca(e, t, n, r) {
                    t.value = n, t.getSnapshot = r, Pa(t) && _a(e)
                }

                function Ta(e, t, n) {
                    return n((function() {
                        Pa(t) && _a(e)
                    }))
                }

                function Pa(e) {
                    var t = e.getSnapshot;
                    e = e.value;
                    try {
                        var n = t();
                        return !sr(e, n)
                    } catch (r) {
                        return !0
                    }
                }

                function _a(e) {
                    var t = Oi(e, 1);
                    null !== t && nu(t, e, 1, -1)
                }

                function Fa(e) {
                    var t = ya();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = {
                        pending: null,
                        interleaved: null,
                        lanes: 0,
                        dispatch: null,
                        lastRenderedReducer: wa,
                        lastRenderedState: e
                    }, t.queue = e, e = e.dispatch = qa.bind(null, sa, e), [t.memoizedState, e]
                }

                function Ra(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = sa.updateQueue) ? (t = {
                        lastEffect: null,
                        stores: null
                    }, sa.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function Da() {
                    return ba().memoizedState
                }

                function La(e, t, n, r) {
                    var o = ya();
                    sa.flags |= e, o.memoizedState = Ra(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function Ma(e, t, n, r) {
                    var o = ba();
                    r = void 0 === r ? null : r;
                    var i = void 0;
                    if (null !== la) {
                        var a = la.memoizedState;
                        if (i = a.destroy, null !== r && ma(r, a.deps)) return void(o.memoizedState = Ra(t, n, i, r))
                    }
                    sa.flags |= e, o.memoizedState = Ra(1 | t, n, i, r)
                }

                function Oa(e, t) {
                    return La(8390656, 8, e, t)
                }

                function ja(e, t) {
                    return Ma(2048, 8, e, t)
                }

                function Na(e, t) {
                    return Ma(4, 2, e, t)
                }

                function Va(e, t) {
                    return Ma(4, 4, e, t)
                }

                function Ia(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function za(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, Ma(4, 4, Ia.bind(null, t, e), n)
                }

                function Ba() {}

                function Ua(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ma(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ha(e, t) {
                    var n = ba();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ma(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Wa(e, t, n) {
                    return 0 === (21 & aa) ? (e.baseState && (e.baseState = !1, bs = !0), e.memoizedState = n) : (sr(n, t) || (n = mt(), sa.lanes |= n, jl |= n, e.baseState = !0), t)
                }

                function $a(e, t) {
                    var n = bt;
                    bt = 0 !== n && 4 > n ? n : 4, e(!0);
                    var r = ia.transition;
                    ia.transition = {};
                    try {
                        e(!1), t()
                    } finally {
                        bt = n, ia.transition = r
                    }
                }

                function Ka() {
                    return ba().memoizedState
                }

                function Ya(e, t, n) {
                    var r = tu(e);
                    if (n = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        }, Qa(e)) Ga(t, n);
                    else if (null !== (n = Mi(e, t, n, r))) {
                        nu(n, e, r, eu()), Xa(n, t, r)
                    }
                }

                function qa(e, t, n) {
                    var r = tu(e),
                        o = {
                            lane: r,
                            action: n,
                            hasEagerState: !1,
                            eagerState: null,
                            next: null
                        };
                    if (Qa(e)) Ga(t, o);
                    else {
                        var i = e.alternate;
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var a = t.lastRenderedState,
                                s = i(a, n);
                            if (o.hasEagerState = !0, o.eagerState = s, sr(s, a)) {
                                var l = t.interleaved;
                                return null === l ? (o.next = o, Li(t)) : (o.next = l.next, l.next = o), void(t.interleaved = o)
                            }
                        } catch (u) {}
                        null !== (n = Mi(e, t, o, r)) && (nu(n, e, r, o = eu()), Xa(n, t, r))
                    }
                }

                function Qa(e) {
                    var t = e.alternate;
                    return e === sa || null !== t && t === sa
                }

                function Ga(e, t) {
                    da = ca = !0;
                    var n = e.pending;
                    null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                }

                function Xa(e, t, n) {
                    if (0 !== (4194240 & n)) {
                        var r = t.lanes;
                        n |= r &= e.pendingLanes, t.lanes = n, yt(e, n)
                    }
                }
                var Za = {
                        readContext: Ri,
                        useCallback: pa,
                        useContext: pa,
                        useEffect: pa,
                        useImperativeHandle: pa,
                        useInsertionEffect: pa,
                        useLayoutEffect: pa,
                        useMemo: pa,
                        useReducer: pa,
                        useRef: pa,
                        useState: pa,
                        useDebugValue: pa,
                        useDeferredValue: pa,
                        useTransition: pa,
                        useMutableSource: pa,
                        useSyncExternalStore: pa,
                        useId: pa,
                        unstable_isNewReconciler: !1
                    },
                    Ja = {
                        readContext: Ri,
                        useCallback: function(e, t) {
                            return ya().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Ri,
                        useEffect: Oa,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, La(4194308, 4, Ia.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return La(4194308, 4, e, t)
                        },
                        useInsertionEffect: function(e, t) {
                            return La(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = ya();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = ya();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                                pending: null,
                                interleaved: null,
                                lanes: 0,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }, r.queue = e, e = e.dispatch = Ya.bind(null, sa, e), [r.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, ya().memoizedState = e
                        },
                        useState: Fa,
                        useDebugValue: Ba,
                        useDeferredValue: function(e) {
                            return ya().memoizedState = e
                        },
                        useTransition: function() {
                            var e = Fa(!1),
                                t = e[0];
                            return e = $a.bind(null, e[1]), ya().memoizedState = e, [t, e]
                        },
                        useMutableSource: function() {},
                        useSyncExternalStore: function(e, t, n) {
                            var r = sa,
                                o = ya();
                            if (ii) {
                                if (void 0 === n) throw Error(i(407));
                                n = n()
                            } else {
                                if (n = t(), null === _l) throw Error(i(349));
                                0 !== (30 & aa) || Aa(r, t, n)
                            }
                            o.memoizedState = n;
                            var a = {
                                value: n,
                                getSnapshot: t
                            };
                            return o.queue = a, Oa(Ta.bind(null, r, a, e), [e]), r.flags |= 2048, Ra(9, Ca.bind(null, r, a, n, t), void 0, null), n
                        },
                        useId: function() {
                            var e = ya(),
                                t = _l.identifierPrefix;
                            if (ii) {
                                var n = Zo;
                                t = ":" + t + "R" + (n = (Xo & ~(1 << 32 - at(Xo) - 1)).toString(32) + n), 0 < (n = fa++) && (t += "H" + n.toString(32)), t += ":"
                            } else t = ":" + t + "r" + (n = ha++).toString(32) + ":";
                            return e.memoizedState = t
                        },
                        unstable_isNewReconciler: !1
                    },
                    es = {
                        readContext: Ri,
                        useCallback: Ua,
                        useContext: Ri,
                        useEffect: ja,
                        useImperativeHandle: za,
                        useInsertionEffect: Na,
                        useLayoutEffect: Va,
                        useMemo: Ha,
                        useReducer: xa,
                        useRef: Da,
                        useState: function() {
                            return xa(wa)
                        },
                        useDebugValue: Ba,
                        useDeferredValue: function(e) {
                            return Wa(ba(), la.memoizedState, e)
                        },
                        useTransition: function() {
                            return [xa(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Ea,
                        useSyncExternalStore: ka,
                        useId: Ka,
                        unstable_isNewReconciler: !1
                    },
                    ts = {
                        readContext: Ri,
                        useCallback: Ua,
                        useContext: Ri,
                        useEffect: ja,
                        useImperativeHandle: za,
                        useInsertionEffect: Na,
                        useLayoutEffect: Va,
                        useMemo: Ha,
                        useReducer: Sa,
                        useRef: Da,
                        useState: function() {
                            return Sa(wa)
                        },
                        useDebugValue: Ba,
                        useDeferredValue: function(e) {
                            var t = ba();
                            return null === la ? t.memoizedState = e : Wa(t, la.memoizedState, e)
                        },
                        useTransition: function() {
                            return [Sa(wa)[0], ba().memoizedState]
                        },
                        useMutableSource: Ea,
                        useSyncExternalStore: ka,
                        useId: Ka,
                        unstable_isNewReconciler: !1
                    };

                function ns(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = N({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }

                function rs(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : N({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var os = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Ue(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            o = tu(e),
                            i = Ii(r, o);
                        i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = zi(e, i, o)) && (nu(t, e, o, r), Bi(t, e, o))
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = eu(),
                            o = tu(e),
                            i = Ii(r, o);
                        i.tag = 1, i.payload = t, void 0 !== n && null !== n && (i.callback = n), null !== (t = zi(e, i, o)) && (nu(t, e, o, r), Bi(t, e, o))
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = eu(),
                            r = tu(e),
                            o = Ii(n, r);
                        o.tag = 2, void 0 !== t && null !== t && (o.callback = t), null !== (t = zi(e, o, r)) && (nu(t, e, r, n), Bi(t, e, r))
                    }
                };

                function is(e, t, n, r, o, i, a) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, i, a) : !t.prototype || !t.prototype.isPureReactComponent || (!lr(n, r) || !lr(o, i))
                }

                function as(e, t, n) {
                    var r = !1,
                        o = Po,
                        i = t.contextType;
                    return "object" === typeof i && null !== i ? i = Ri(i) : (o = Lo(t) ? Ro : _o.current, i = (r = null !== (r = t.contextTypes) && void 0 !== r) ? Do(e, o) : Po), t = new t(n, i), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = os, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = i), t
                }

                function ss(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && os.enqueueReplaceState(t, t.state, null)
                }

                function ls(e, t, n, r) {
                    var o = e.stateNode;
                    o.props = n, o.state = e.memoizedState, o.refs = {}, Ni(e);
                    var i = t.contextType;
                    "object" === typeof i && null !== i ? o.context = Ri(i) : (i = Lo(t) ? Ro : _o.current, o.context = Do(e, i)), o.state = e.memoizedState, "function" === typeof(i = t.getDerivedStateFromProps) && (rs(e, t, i, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && os.enqueueReplaceState(o, o.state, null), Hi(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4194308)
                }

                function us(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += B(r), r = r.return
                        } while (r);
                        var o = n
                    } catch (i) {
                        o = "\nError generating stack: " + i.message + "\n" + i.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: o,
                        digest: null
                    }
                }

                function cs(e, t, n) {
                    return {
                        value: e,
                        source: null,
                        stack: null != n ? n : null,
                        digest: null != t ? t : null
                    }
                }

                function ds(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                var fs = "function" === typeof WeakMap ? WeakMap : Map;

                function hs(e, t, n) {
                    (n = Ii(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Wl || (Wl = !0, $l = r), ds(0, t)
                    }, n
                }

                function ps(e, t, n) {
                    (n = Ii(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var o = t.value;
                        n.payload = function() {
                            return r(o)
                        }, n.callback = function() {
                            ds(0, t)
                        }
                    }
                    var i = e.stateNode;
                    return null !== i && "function" === typeof i.componentDidCatch && (n.callback = function() {
                        ds(0, t), "function" !== typeof r && (null === Kl ? Kl = new Set([this]) : Kl.add(this));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }

                function ms(e, t, n) {
                    var r = e.pingCache;
                    if (null === r) {
                        r = e.pingCache = new fs;
                        var o = new Set;
                        r.set(t, o)
                    } else void 0 === (o = r.get(t)) && (o = new Set, r.set(t, o));
                    o.has(n) || (o.add(n), e = Au.bind(null, e, t, n), t.then(e, e))
                }

                function vs(e) {
                    do {
                        var t;
                        if ((t = 13 === e.tag) && (t = null === (t = e.memoizedState) || null !== t.dehydrated), t) return e;
                        e = e.return
                    } while (null !== e);
                    return null
                }

                function gs(e, t, n, r, o) {
                    return 0 === (1 & e.mode) ? (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, 1 === n.tag && (null === n.alternate ? n.tag = 17 : ((t = Ii(-1, 1)).tag = 2, zi(n, t, 1))), n.lanes |= 1), e) : (e.flags |= 65536, e.lanes = o, e)
                }
                var ys = w.ReactCurrentOwner,
                    bs = !1;

                function ws(e, t, n, r) {
                    t.child = null === e ? Si(t, null, n, r) : xi(t, e.child, n, r)
                }

                function xs(e, t, n, r, o) {
                    n = n.render;
                    var i = t.ref;
                    return Fi(t, o), r = va(e, t, n, r, i, o), n = ga(), null === e || bs ? (ii && n && ti(t), t.flags |= 1, ws(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ws(e, t, o))
                }

                function Ss(e, t, n, r, o) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Du(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Mu(n.type, null, r, t, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Es(e, t, i, r, o))
                    }
                    if (i = e.child, 0 === (e.lanes & o)) {
                        var a = i.memoizedProps;
                        if ((n = null !== (n = n.compare) ? n : lr)(a, r) && e.ref === t.ref) return Ws(e, t, o)
                    }
                    return t.flags |= 1, (e = Lu(i, r)).ref = t.ref, e.return = t, t.child = e
                }

                function Es(e, t, n, r, o) {
                    if (null !== e) {
                        var i = e.memoizedProps;
                        if (lr(i, r) && e.ref === t.ref) {
                            if (bs = !1, t.pendingProps = r = i, 0 === (e.lanes & o)) return t.lanes = e.lanes, Ws(e, t, o);
                            0 !== (131072 & e.flags) && (bs = !0)
                        }
                    }
                    return Cs(e, t, n, r, o)
                }

                function ks(e, t, n) {
                    var r = t.pendingProps,
                        o = r.children,
                        i = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode)
                        if (0 === (1 & t.mode)) t.memoizedState = {
                            baseLanes: 0,
                            cachePool: null,
                            transitions: null
                        }, To(Ll, Dl), Dl |= n;
                        else {
                            if (0 === (1073741824 & n)) return e = null !== i ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e,
                                cachePool: null,
                                transitions: null
                            }, t.updateQueue = null, To(Ll, Dl), Dl |= e, null;
                            t.memoizedState = {
                                baseLanes: 0,
                                cachePool: null,
                                transitions: null
                            }, r = null !== i ? i.baseLanes : n, To(Ll, Dl), Dl |= r
                        }
                    else null !== i ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, To(Ll, Dl), Dl |= r;
                    return ws(e, t, o, n), t.child
                }

                function As(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
                }

                function Cs(e, t, n, r, o) {
                    var i = Lo(n) ? Ro : _o.current;
                    return i = Do(t, i), Fi(t, o), n = va(e, t, n, r, i, o), r = ga(), null === e || bs ? (ii && r && ti(t), t.flags |= 1, ws(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~o, Ws(e, t, o))
                }

                function Ts(e, t, n, r, o) {
                    if (Lo(n)) {
                        var i = !0;
                        No(t)
                    } else i = !1;
                    if (Fi(t, o), null === t.stateNode) Hs(e, t), as(t, n, r), ls(t, n, r, o), r = !0;
                    else if (null === e) {
                        var a = t.stateNode,
                            s = t.memoizedProps;
                        a.props = s;
                        var l = a.context,
                            u = n.contextType;
                        "object" === typeof u && null !== u ? u = Ri(u) : u = Do(t, u = Lo(n) ? Ro : _o.current);
                        var c = n.getDerivedStateFromProps,
                            d = "function" === typeof c || "function" === typeof a.getSnapshotBeforeUpdate;
                        d || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== r || l !== u) && ss(t, a, r, u), ji = !1;
                        var f = t.memoizedState;
                        a.state = f, Hi(t, r, a, o), l = t.memoizedState, s !== r || f !== l || Fo.current || ji ? ("function" === typeof c && (rs(t, n, c, r), l = t.memoizedState), (s = ji || is(t, n, s, r, f, l, u)) ? (d || "function" !== typeof a.UNSAFE_componentWillMount && "function" !== typeof a.componentWillMount || ("function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount()), "function" === typeof a.componentDidMount && (t.flags |= 4194308)) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = l), a.props = r, a.state = l, a.context = u, r = s) : ("function" === typeof a.componentDidMount && (t.flags |= 4194308), r = !1)
                    } else {
                        a = t.stateNode, Vi(e, t), s = t.memoizedProps, u = t.type === t.elementType ? s : ns(t.type, s), a.props = u, d = t.pendingProps, f = a.context, "object" === typeof(l = n.contextType) && null !== l ? l = Ri(l) : l = Do(t, l = Lo(n) ? Ro : _o.current);
                        var h = n.getDerivedStateFromProps;
                        (c = "function" === typeof h || "function" === typeof a.getSnapshotBeforeUpdate) || "function" !== typeof a.UNSAFE_componentWillReceiveProps && "function" !== typeof a.componentWillReceiveProps || (s !== d || f !== l) && ss(t, a, r, l), ji = !1, f = t.memoizedState, a.state = f, Hi(t, r, a, o);
                        var p = t.memoizedState;
                        s !== d || f !== p || Fo.current || ji ? ("function" === typeof h && (rs(t, n, h, r), p = t.memoizedState), (u = ji || is(t, n, u, r, f, p, l) || !1) ? (c || "function" !== typeof a.UNSAFE_componentWillUpdate && "function" !== typeof a.componentWillUpdate || ("function" === typeof a.componentWillUpdate && a.componentWillUpdate(r, p, l), "function" === typeof a.UNSAFE_componentWillUpdate && a.UNSAFE_componentWillUpdate(r, p, l)), "function" === typeof a.componentDidUpdate && (t.flags |= 4), "function" === typeof a.getSnapshotBeforeUpdate && (t.flags |= 1024)) : ("function" !== typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = p), a.props = r, a.state = p, a.context = l, r = u) : ("function" !== typeof a.componentDidUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 4), "function" !== typeof a.getSnapshotBeforeUpdate || s === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024), r = !1)
                    }
                    return Ps(e, t, n, r, i, o)
                }

                function Ps(e, t, n, r, o, i) {
                    As(e, t);
                    var a = 0 !== (128 & t.flags);
                    if (!r && !a) return o && Vo(t, n, !1), Ws(e, t, i);
                    r = t.stateNode, ys.current = t;
                    var s = a && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && a ? (t.child = xi(t, e.child, null, i), t.child = xi(t, null, s, i)) : ws(e, t, s, i), t.memoizedState = r.state, o && Vo(t, n, !0), t.child
                }

                function _s(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Oo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Oo(0, t.context, !1), Gi(e, t.containerInfo)
                }

                function Fs(e, t, n, r, o) {
                    return pi(), mi(o), t.flags |= 256, ws(e, t, n, r), t.child
                }
                var Rs, Ds, Ls, Ms, Os = {
                    dehydrated: null,
                    treeContext: null,
                    retryLane: 0
                };

                function js(e) {
                    return {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null
                    }
                }

                function Ns(e, t, n) {
                    var r, o = t.pendingProps,
                        a = ea.current,
                        s = !1,
                        l = 0 !== (128 & t.flags);
                    if ((r = l) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), r ? (s = !0, t.flags &= -129) : null !== e && null === e.memoizedState || (a |= 1), To(ea, 1 & a), null === e) return ci(t), null !== (e = t.memoizedState) && null !== (e = e.dehydrated) ? (0 === (1 & t.mode) ? t.lanes = 1 : "$!" === e.data ? t.lanes = 8 : t.lanes = 1073741824, null) : (l = o.children, e = o.fallback, s ? (o = t.mode, s = t.child, l = {
                        mode: "hidden",
                        children: l
                    }, 0 === (1 & o) && null !== s ? (s.childLanes = 0, s.pendingProps = l) : s = ju(l, o, 0, null), e = Ou(e, o, n, null), s.return = t, e.return = t, s.sibling = e, t.child = s, t.child.memoizedState = js(n), t.memoizedState = Os, e) : Vs(t, l));
                    if (null !== (a = e.memoizedState) && null !== (r = a.dehydrated)) return function(e, t, n, r, o, a, s) {
                        if (n) return 256 & t.flags ? (t.flags &= -257, Is(e, t, s, r = cs(Error(i(422))))) : null !== t.memoizedState ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, o = t.mode, r = ju({
                            mode: "visible",
                            children: r.children
                        }, o, 0, null), (a = Ou(a, o, s, null)).flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, 0 !== (1 & t.mode) && xi(t, e.child, null, s), t.child.memoizedState = js(s), t.memoizedState = Os, a);
                        if (0 === (1 & t.mode)) return Is(e, t, s, null);
                        if ("$!" === o.data) {
                            if (r = o.nextSibling && o.nextSibling.dataset) var l = r.dgst;
                            return r = l, Is(e, t, s, r = cs(a = Error(i(419)), r, void 0))
                        }
                        if (l = 0 !== (s & e.childLanes), bs || l) {
                            if (null !== (r = _l)) {
                                switch (s & -s) {
                                    case 4:
                                        o = 2;
                                        break;
                                    case 16:
                                        o = 8;
                                        break;
                                    case 64:
                                    case 128:
                                    case 256:
                                    case 512:
                                    case 1024:
                                    case 2048:
                                    case 4096:
                                    case 8192:
                                    case 16384:
                                    case 32768:
                                    case 65536:
                                    case 131072:
                                    case 262144:
                                    case 524288:
                                    case 1048576:
                                    case 2097152:
                                    case 4194304:
                                    case 8388608:
                                    case 16777216:
                                    case 33554432:
                                    case 67108864:
                                        o = 32;
                                        break;
                                    case 536870912:
                                        o = 268435456;
                                        break;
                                    default:
                                        o = 0
                                }
                                0 !== (o = 0 !== (o & (r.suspendedLanes | s)) ? 0 : o) && o !== a.retryLane && (a.retryLane = o, Oi(e, o), nu(r, e, o, -1))
                            }
                            return mu(), Is(e, t, s, r = cs(Error(i(421))))
                        }
                        return "$?" === o.data ? (t.flags |= 128, t.child = e.child, t = Tu.bind(null, e), o._reactRetry = t, null) : (e = a.treeContext, oi = uo(o.nextSibling), ri = t, ii = !0, ai = null, null !== e && (qo[Qo++] = Xo, qo[Qo++] = Zo, qo[Qo++] = Go, Xo = e.id, Zo = e.overflow, Go = t), t = Vs(t, r.children), t.flags |= 4096, t)
                    }(e, t, l, o, r, a, n);
                    if (s) {
                        s = o.fallback, l = t.mode, r = (a = e.child).sibling;
                        var u = {
                            mode: "hidden",
                            children: o.children
                        };
                        return 0 === (1 & l) && t.child !== a ? ((o = t.child).childLanes = 0, o.pendingProps = u, t.deletions = null) : (o = Lu(a, u)).subtreeFlags = 14680064 & a.subtreeFlags, null !== r ? s = Lu(r, s) : (s = Ou(s, l, n, null)).flags |= 2, s.return = t, o.return = t, o.sibling = s, t.child = o, o = s, s = t.child, l = null === (l = e.child.memoizedState) ? js(n) : {
                            baseLanes: l.baseLanes | n,
                            cachePool: null,
                            transitions: l.transitions
                        }, s.memoizedState = l, s.childLanes = e.childLanes & ~n, t.memoizedState = Os, o
                    }
                    return e = (s = e.child).sibling, o = Lu(s, {
                        mode: "visible",
                        children: o.children
                    }), 0 === (1 & t.mode) && (o.lanes = n), o.return = t, o.sibling = null, null !== e && (null === (n = t.deletions) ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = o, t.memoizedState = null, o
                }

                function Vs(e, t) {
                    return (t = ju({
                        mode: "visible",
                        children: t
                    }, e.mode, 0, null)).return = e, e.child = t
                }

                function Is(e, t, n, r) {
                    return null !== r && mi(r), xi(t, e.child, null, n), (e = Vs(t, t.pendingProps.children)).flags |= 2, t.memoizedState = null, e
                }

                function zs(e, t, n) {
                    e.lanes |= t;
                    var r = e.alternate;
                    null !== r && (r.lanes |= t), _i(e.return, t, n)
                }

                function Bs(e, t, n, r, o) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: o
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o)
                }

                function Us(e, t, n) {
                    var r = t.pendingProps,
                        o = r.revealOrder,
                        i = r.tail;
                    if (ws(e, t, r.children, n), 0 !== (2 & (r = ea.current))) r = 1 & r | 2, t.flags |= 128;
                    else {
                        if (null !== e && 0 !== (128 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && zs(e, n, t);
                            else if (19 === e.tag) zs(e, n, t);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (To(ea, r), 0 === (1 & t.mode)) t.memoizedState = null;
                    else switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === ta(e) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), Bs(t, !1, o, n, i);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o;) {
                                if (null !== (e = o.alternate) && null === ta(e)) {
                                    t.child = o;
                                    break
                                }
                                e = o.sibling, o.sibling = n, n = o, o = e
                            }
                            Bs(t, !0, n, null, i);
                            break;
                        case "together":
                            Bs(t, !1, null, null, void 0);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function Hs(e, t) {
                    0 === (1 & t.mode) && null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2)
                }

                function Ws(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), jl |= t.lanes, 0 === (n & t.childLanes)) return null;
                    if (null !== e && t.child !== e.child) throw Error(i(153));
                    if (null !== t.child) {
                        for (n = Lu(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Lu(e, e.pendingProps)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function $s(e, t) {
                    if (!ii) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function Ks(e) {
                    var t = null !== e.alternate && e.alternate.child === e.child,
                        n = 0,
                        r = 0;
                    if (t)
                        for (var o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= 14680064 & o.subtreeFlags, r |= 14680064 & o.flags, o.return = e, o = o.sibling;
                    else
                        for (o = e.child; null !== o;) n |= o.lanes | o.childLanes, r |= o.subtreeFlags, r |= o.flags, o.return = e, o = o.sibling;
                    return e.subtreeFlags |= r, e.childLanes = n, t
                }

                function Ys(e, t, n) {
                    var r = t.pendingProps;
                    switch (ni(t), t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return Ks(t), null;
                        case 1:
                        case 17:
                            return Lo(t.type) && Mo(), Ks(t), null;
                        case 3:
                            return r = t.stateNode, Xi(), Co(Fo), Co(_o), ra(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (fi(t) ? t.flags |= 4 : null === e || e.memoizedState.isDehydrated && 0 === (256 & t.flags) || (t.flags |= 1024, null !== ai && (au(ai), ai = null))), Ds(e, t), Ks(t), null;
                        case 5:
                            Ji(t);
                            var o = Qi(qi.current);
                            if (n = t.type, null !== e && null != t.stateNode) Ls(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return Ks(t), null
                                }
                                if (e = Qi(Ki.current), fi(t)) {
                                    r = t.stateNode, n = t.type;
                                    var a = t.memoizedProps;
                                    switch (r[ho] = t, r[po] = a, e = 0 !== (1 & t.mode), n) {
                                        case "dialog":
                                            Ir("cancel", r), Ir("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Ir("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (o = 0; o < Or.length; o++) Ir(Or[o], r);
                                            break;
                                        case "source":
                                            Ir("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Ir("error", r), Ir("load", r);
                                            break;
                                        case "details":
                                            Ir("toggle", r);
                                            break;
                                        case "input":
                                            G(r, a), Ir("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!a.multiple
                                            }, Ir("invalid", r);
                                            break;
                                        case "textarea":
                                            oe(r, a), Ir("invalid", r)
                                    }
                                    for (var l in ye(n, a), o = null, a)
                                        if (a.hasOwnProperty(l)) {
                                            var u = a[l];
                                            "children" === l ? "string" === typeof u ? r.textContent !== u && (!0 !== a.suppressHydrationWarning && Zr(r.textContent, u, e), o = ["children", u]) : "number" === typeof u && r.textContent !== "" + u && (!0 !== a.suppressHydrationWarning && Zr(r.textContent, u, e), o = ["children", "" + u]) : s.hasOwnProperty(l) && null != u && "onScroll" === l && Ir("scroll", r)
                                        }
                                    switch (n) {
                                        case "input":
                                            K(r), J(r, a, !0);
                                            break;
                                        case "textarea":
                                            K(r), ae(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (r.onclick = Jr)
                                    }
                                    r = o, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    l = 9 === o.nodeType ? o : o.ownerDocument, "http://www.w3.org/1999/xhtml" === e && (e = se(n)), "http://www.w3.org/1999/xhtml" === e ? "script" === n ? ((e = l.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = l.createElement(n, {
                                        is: r.is
                                    }) : (e = l.createElement(n), "select" === n && (l = e, r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n), e[ho] = t, e[po] = r, Rs(e, t, !1, !1), t.stateNode = e;
                                    e: {
                                        switch (l = be(n, r), n) {
                                            case "dialog":
                                                Ir("cancel", e), Ir("close", e), o = r;
                                                break;
                                            case "iframe":
                                            case "object":
                                            case "embed":
                                                Ir("load", e), o = r;
                                                break;
                                            case "video":
                                            case "audio":
                                                for (o = 0; o < Or.length; o++) Ir(Or[o], e);
                                                o = r;
                                                break;
                                            case "source":
                                                Ir("error", e), o = r;
                                                break;
                                            case "img":
                                            case "image":
                                            case "link":
                                                Ir("error", e), Ir("load", e), o = r;
                                                break;
                                            case "details":
                                                Ir("toggle", e), o = r;
                                                break;
                                            case "input":
                                                G(e, r), o = Q(e, r), Ir("invalid", e);
                                                break;
                                            case "option":
                                            default:
                                                o = r;
                                                break;
                                            case "select":
                                                e._wrapperState = {
                                                    wasMultiple: !!r.multiple
                                                }, o = N({}, r, {
                                                    value: void 0
                                                }), Ir("invalid", e);
                                                break;
                                            case "textarea":
                                                oe(e, r), o = re(e, r), Ir("invalid", e)
                                        }
                                        for (a in ye(n, o), u = o)
                                            if (u.hasOwnProperty(a)) {
                                                var c = u[a];
                                                "style" === a ? ve(e, c) : "dangerouslySetInnerHTML" === a ? null != (c = c ? c.__html : void 0) && de(e, c) : "children" === a ? "string" === typeof c ? ("textarea" !== n || "" !== c) && fe(e, c) : "number" === typeof c && fe(e, "" + c) : "suppressContentEditableWarning" !== a && "suppressHydrationWarning" !== a && "autoFocus" !== a && (s.hasOwnProperty(a) ? null != c && "onScroll" === a && Ir("scroll", e) : null != c && b(e, a, c, l))
                                            }
                                        switch (n) {
                                            case "input":
                                                K(e), J(e, r, !1);
                                                break;
                                            case "textarea":
                                                K(e), ae(e);
                                                break;
                                            case "option":
                                                null != r.value && e.setAttribute("value", "" + W(r.value));
                                                break;
                                            case "select":
                                                e.multiple = !!r.multiple, null != (a = r.value) ? ne(e, !!r.multiple, a, !1) : null != r.defaultValue && ne(e, !!r.multiple, r.defaultValue, !0);
                                                break;
                                            default:
                                                "function" === typeof o.onClick && (e.onclick = Jr)
                                        }
                                        switch (n) {
                                            case "button":
                                            case "input":
                                            case "select":
                                            case "textarea":
                                                r = !!r.autoFocus;
                                                break e;
                                            case "img":
                                                r = !0;
                                                break e;
                                            default:
                                                r = !1
                                        }
                                    }
                                    r && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 512, t.flags |= 2097152)
                            }
                            return Ks(t), null;
                        case 6:
                            if (e && null != t.stateNode) Ms(e, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                if (n = Qi(qi.current), Qi(Ki.current), fi(t)) {
                                    if (r = t.stateNode, n = t.memoizedProps, r[ho] = t, (a = r.nodeValue !== n) && null !== (e = ri)) switch (e.tag) {
                                        case 3:
                                            Zr(r.nodeValue, n, 0 !== (1 & e.mode));
                                            break;
                                        case 5:
                                            !0 !== e.memoizedProps.suppressHydrationWarning && Zr(r.nodeValue, n, 0 !== (1 & e.mode))
                                    }
                                    a && (t.flags |= 4)
                                } else(r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[ho] = t, t.stateNode = r
                            }
                            return Ks(t), null;
                        case 13:
                            if (Co(ea), r = t.memoizedState, null === e || null !== e.memoizedState && null !== e.memoizedState.dehydrated) {
                                if (ii && null !== oi && 0 !== (1 & t.mode) && 0 === (128 & t.flags)) hi(), pi(), t.flags |= 98560, a = !1;
                                else if (a = fi(t), null !== r && null !== r.dehydrated) {
                                    if (null === e) {
                                        if (!a) throw Error(i(318));
                                        if (!(a = null !== (a = t.memoizedState) ? a.dehydrated : null)) throw Error(i(317));
                                        a[ho] = t
                                    } else pi(), 0 === (128 & t.flags) && (t.memoizedState = null), t.flags |= 4;
                                    Ks(t), a = !1
                                } else null !== ai && (au(ai), ai = null), a = !0;
                                if (!a) return 65536 & t.flags ? t : null
                            }
                            return 0 !== (128 & t.flags) ? (t.lanes = n, t) : ((r = null !== r) !== (null !== e && null !== e.memoizedState) && r && (t.child.flags |= 8192, 0 !== (1 & t.mode) && (null === e || 0 !== (1 & ea.current) ? 0 === Ml && (Ml = 3) : mu())), null !== t.updateQueue && (t.flags |= 4), Ks(t), null);
                        case 4:
                            return Xi(), Ds(e, t), null === e && Ur(t.stateNode.containerInfo), Ks(t), null;
                        case 10:
                            return Pi(t.type._context), Ks(t), null;
                        case 19:
                            if (Co(ea), null === (a = t.memoizedState)) return Ks(t), null;
                            if (r = 0 !== (128 & t.flags), null === (l = a.rendering))
                                if (r) $s(a, !1);
                                else {
                                    if (0 !== Ml || null !== e && 0 !== (128 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (l = ta(e))) {
                                                for (t.flags |= 128, $s(a, !1), null !== (r = l.updateQueue) && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; null !== n;) e = r, (a = n).flags &= 14680066, null === (l = a.alternate) ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, a.type = l.type, e = l.dependencies, a.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return To(ea, 1 & ea.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== a.tail && Xe() > Ul && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304)
                                }
                            else {
                                if (!r)
                                    if (null !== (e = ta(l))) {
                                        if (t.flags |= 128, r = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), $s(a, !0), null === a.tail && "hidden" === a.tailMode && !l.alternate && !ii) return Ks(t), null
                                    } else 2 * Xe() - a.renderingStartTime > Ul && 1073741824 !== n && (t.flags |= 128, r = !0, $s(a, !1), t.lanes = 4194304);
                                a.isBackwards ? (l.sibling = t.child, t.child = l) : (null !== (n = a.last) ? n.sibling = l : t.child = l, a.last = l)
                            }
                            return null !== a.tail ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = Xe(), t.sibling = null, n = ea.current, To(ea, r ? 1 & n | 2 : 1 & n), t) : (Ks(t), null);
                        case 22:
                        case 23:
                            return du(), r = null !== t.memoizedState, null !== e && null !== e.memoizedState !== r && (t.flags |= 8192), r && 0 !== (1 & t.mode) ? 0 !== (1073741824 & Dl) && (Ks(t), 6 & t.subtreeFlags && (t.flags |= 8192)) : Ks(t), null;
                        case 24:
                        case 25:
                            return null
                    }
                    throw Error(i(156, t.tag))
                }

                function qs(e, t) {
                    switch (ni(t), t.tag) {
                        case 1:
                            return Lo(t.type) && Mo(), 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 3:
                            return Xi(), Co(Fo), Co(_o), ra(), 0 !== (65536 & (e = t.flags)) && 0 === (128 & e) ? (t.flags = -65537 & e | 128, t) : null;
                        case 5:
                            return Ji(t), null;
                        case 13:
                            if (Co(ea), null !== (e = t.memoizedState) && null !== e.dehydrated) {
                                if (null === t.alternate) throw Error(i(340));
                                pi()
                            }
                            return 65536 & (e = t.flags) ? (t.flags = -65537 & e | 128, t) : null;
                        case 19:
                            return Co(ea), null;
                        case 4:
                            return Xi(), null;
                        case 10:
                            return Pi(t.type._context), null;
                        case 22:
                        case 23:
                            return du(), null;
                        default:
                            return null
                    }
                }
                Rs = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Ds = function() {}, Ls = function(e, t, n, r) {
                    var o = e.memoizedProps;
                    if (o !== r) {
                        e = t.stateNode, Qi(Ki.current);
                        var i, a = null;
                        switch (n) {
                            case "input":
                                o = Q(e, o), r = Q(e, r), a = [];
                                break;
                            case "select":
                                o = N({}, o, {
                                    value: void 0
                                }), r = N({}, r, {
                                    value: void 0
                                }), a = [];
                                break;
                            case "textarea":
                                o = re(e, o), r = re(e, r), a = [];
                                break;
                            default:
                                "function" !== typeof o.onClick && "function" === typeof r.onClick && (e.onclick = Jr)
                        }
                        for (c in ye(n, r), n = null, o)
                            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && null != o[c])
                                if ("style" === c) {
                                    var l = o[c];
                                    for (i in l) l.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== c && "children" !== c && "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && "autoFocus" !== c && (s.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
                        for (c in r) {
                            var u = r[c];
                            if (l = null != o ? o[c] : void 0, r.hasOwnProperty(c) && u !== l && (null != u || null != l))
                                if ("style" === c)
                                    if (l) {
                                        for (i in l) !l.hasOwnProperty(i) || u && u.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in u) u.hasOwnProperty(i) && l[i] !== u[i] && (n || (n = {}), n[i] = u[i])
                                    } else n || (a || (a = []), a.push(c, n)), n = u;
                            else "dangerouslySetInnerHTML" === c ? (u = u ? u.__html : void 0, l = l ? l.__html : void 0, null != u && l !== u && (a = a || []).push(c, u)) : "children" === c ? "string" !== typeof u && "number" !== typeof u || (a = a || []).push(c, "" + u) : "suppressContentEditableWarning" !== c && "suppressHydrationWarning" !== c && (s.hasOwnProperty(c) ? (null != u && "onScroll" === c && Ir("scroll", e), a || l === u || (a = [])) : (a = a || []).push(c, u))
                        }
                        n && (a = a || []).push("style", n);
                        var c = a;
                        (t.updateQueue = c) && (t.flags |= 4)
                    }
                }, Ms = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var Qs = !1,
                    Gs = !1,
                    Xs = "function" === typeof WeakSet ? WeakSet : Set,
                    Zs = null;

                function Js(e, t) {
                    var n = e.ref;
                    if (null !== n)
                        if ("function" === typeof n) try {
                            n(null)
                        } catch (r) {
                            ku(e, t, r)
                        } else n.current = null
                }

                function el(e, t, n) {
                    try {
                        n()
                    } catch (r) {
                        ku(e, t, r)
                    }
                }
                var tl = !1;

                function nl(e, t, n) {
                    var r = t.updateQueue;
                    if (null !== (r = null !== r ? r.lastEffect : null)) {
                        var o = r = r.next;
                        do {
                            if ((o.tag & e) === e) {
                                var i = o.destroy;
                                o.destroy = void 0, void 0 !== i && el(t, n, i)
                            }
                            o = o.next
                        } while (o !== r)
                    }
                }

                function rl(e, t) {
                    if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
                        var n = t = t.next;
                        do {
                            if ((n.tag & e) === e) {
                                var r = n.create;
                                n.destroy = r()
                            }
                            n = n.next
                        } while (n !== t)
                    }
                }

                function ol(e) {
                    var t = e.ref;
                    if (null !== t) {
                        var n = e.stateNode;
                        e.tag, e = n, "function" === typeof t ? t(e) : t.current = e
                    }
                }

                function il(e) {
                    var t = e.alternate;
                    null !== t && (e.alternate = null, il(t)), e.child = null, e.deletions = null, e.sibling = null, 5 === e.tag && (null !== (t = e.stateNode) && (delete t[ho], delete t[po], delete t[vo], delete t[go], delete t[yo])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
                }

                function al(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function sl(e) {
                    e: for (;;) {
                        for (; null === e.sibling;) {
                            if (null === e.return || al(e.return)) return null;
                            e = e.return
                        }
                        for (e.sibling.return = e.return, e = e.sibling; 5 !== e.tag && 6 !== e.tag && 18 !== e.tag;) {
                            if (2 & e.flags) continue e;
                            if (null === e.child || 4 === e.tag) continue e;
                            e.child.return = e, e = e.child
                        }
                        if (!(2 & e.flags)) return e.stateNode
                    }
                }

                function ll(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = Jr));
                    else if (4 !== r && null !== (e = e.child))
                        for (ll(e, t, n), e = e.sibling; null !== e;) ll(e, t, n), e = e.sibling
                }

                function ul(e, t, n) {
                    var r = e.tag;
                    if (5 === r || 6 === r) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (ul(e, t, n), e = e.sibling; null !== e;) ul(e, t, n), e = e.sibling
                }
                var cl = null,
                    dl = !1;

                function fl(e, t, n) {
                    for (n = n.child; null !== n;) hl(e, t, n), n = n.sibling
                }

                function hl(e, t, n) {
                    if (it && "function" === typeof it.onCommitFiberUnmount) try {
                        it.onCommitFiberUnmount(ot, n)
                    } catch (s) {}
                    switch (n.tag) {
                        case 5:
                            Gs || Js(n, t);
                        case 6:
                            var r = cl,
                                o = dl;
                            cl = null, fl(e, t, n), dl = o, null !== (cl = r) && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? e.parentNode.removeChild(n) : e.removeChild(n)) : cl.removeChild(n.stateNode));
                            break;
                        case 18:
                            null !== cl && (dl ? (e = cl, n = n.stateNode, 8 === e.nodeType ? lo(e.parentNode, n) : 1 === e.nodeType && lo(e, n), Ut(e)) : lo(cl, n.stateNode));
                            break;
                        case 4:
                            r = cl, o = dl, cl = n.stateNode.containerInfo, dl = !0, fl(e, t, n), cl = r, dl = o;
                            break;
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (!Gs && (null !== (r = n.updateQueue) && null !== (r = r.lastEffect))) {
                                o = r = r.next;
                                do {
                                    var i = o,
                                        a = i.destroy;
                                    i = i.tag, void 0 !== a && (0 !== (2 & i) || 0 !== (4 & i)) && el(n, t, a), o = o.next
                                } while (o !== r)
                            }
                            fl(e, t, n);
                            break;
                        case 1:
                            if (!Gs && (Js(n, t), "function" === typeof(r = n.stateNode).componentWillUnmount)) try {
                                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
                            } catch (s) {
                                ku(n, t, s)
                            }
                            fl(e, t, n);
                            break;
                        case 21:
                            fl(e, t, n);
                            break;
                        case 22:
                            1 & n.mode ? (Gs = (r = Gs) || null !== n.memoizedState, fl(e, t, n), Gs = r) : fl(e, t, n);
                            break;
                        default:
                            fl(e, t, n)
                    }
                }

                function pl(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new Xs), t.forEach((function(t) {
                            var r = Pu.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function ml(e, t) {
                    var n = t.deletions;
                    if (null !== n)
                        for (var r = 0; r < n.length; r++) {
                            var o = n[r];
                            try {
                                var a = e,
                                    s = t,
                                    l = s;
                                e: for (; null !== l;) {
                                    switch (l.tag) {
                                        case 5:
                                            cl = l.stateNode, dl = !1;
                                            break e;
                                        case 3:
                                        case 4:
                                            cl = l.stateNode.containerInfo, dl = !0;
                                            break e
                                    }
                                    l = l.return
                                }
                                if (null === cl) throw Error(i(160));
                                hl(a, s, o), cl = null, dl = !1;
                                var u = o.alternate;
                                null !== u && (u.return = null), o.return = null
                            } catch (c) {
                                ku(o, t, c)
                            }
                        }
                    if (12854 & t.subtreeFlags)
                        for (t = t.child; null !== t;) vl(t, e), t = t.sibling
                }

                function vl(e, t) {
                    var n = e.alternate,
                        r = e.flags;
                    switch (e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            if (ml(t, e), gl(e), 4 & r) {
                                try {
                                    nl(3, e, e.return), rl(3, e)
                                } catch (v) {
                                    ku(e, e.return, v)
                                }
                                try {
                                    nl(5, e, e.return)
                                } catch (v) {
                                    ku(e, e.return, v)
                                }
                            }
                            break;
                        case 1:
                            ml(t, e), gl(e), 512 & r && null !== n && Js(n, n.return);
                            break;
                        case 5:
                            if (ml(t, e), gl(e), 512 & r && null !== n && Js(n, n.return), 32 & e.flags) {
                                var o = e.stateNode;
                                try {
                                    fe(o, "")
                                } catch (v) {
                                    ku(e, e.return, v)
                                }
                            }
                            if (4 & r && null != (o = e.stateNode)) {
                                var a = e.memoizedProps,
                                    s = null !== n ? n.memoizedProps : a,
                                    l = e.type,
                                    u = e.updateQueue;
                                if (e.updateQueue = null, null !== u) try {
                                    "input" === l && "radio" === a.type && null != a.name && X(o, a), be(l, s);
                                    var c = be(l, a);
                                    for (s = 0; s < u.length; s += 2) {
                                        var d = u[s],
                                            f = u[s + 1];
                                        "style" === d ? ve(o, f) : "dangerouslySetInnerHTML" === d ? de(o, f) : "children" === d ? fe(o, f) : b(o, d, f, c)
                                    }
                                    switch (l) {
                                        case "input":
                                            Z(o, a);
                                            break;
                                        case "textarea":
                                            ie(o, a);
                                            break;
                                        case "select":
                                            var h = o._wrapperState.wasMultiple;
                                            o._wrapperState.wasMultiple = !!a.multiple;
                                            var p = a.value;
                                            null != p ? ne(o, !!a.multiple, p, !1) : h !== !!a.multiple && (null != a.defaultValue ? ne(o, !!a.multiple, a.defaultValue, !0) : ne(o, !!a.multiple, a.multiple ? [] : "", !1))
                                    }
                                    o[po] = a
                                } catch (v) {
                                    ku(e, e.return, v)
                                }
                            }
                            break;
                        case 6:
                            if (ml(t, e), gl(e), 4 & r) {
                                if (null === e.stateNode) throw Error(i(162));
                                o = e.stateNode, a = e.memoizedProps;
                                try {
                                    o.nodeValue = a
                                } catch (v) {
                                    ku(e, e.return, v)
                                }
                            }
                            break;
                        case 3:
                            if (ml(t, e), gl(e), 4 & r && null !== n && n.memoizedState.isDehydrated) try {
                                Ut(t.containerInfo)
                            } catch (v) {
                                ku(e, e.return, v)
                            }
                            break;
                        case 4:
                        default:
                            ml(t, e), gl(e);
                            break;
                        case 13:
                            ml(t, e), gl(e), 8192 & (o = e.child).flags && (a = null !== o.memoizedState, o.stateNode.isHidden = a, !a || null !== o.alternate && null !== o.alternate.memoizedState || (Bl = Xe())), 4 & r && pl(e);
                            break;
                        case 22:
                            if (d = null !== n && null !== n.memoizedState, 1 & e.mode ? (Gs = (c = Gs) || d, ml(t, e), Gs = c) : ml(t, e), gl(e), 8192 & r) {
                                if (c = null !== e.memoizedState, (e.stateNode.isHidden = c) && !d && 0 !== (1 & e.mode))
                                    for (Zs = e, d = e.child; null !== d;) {
                                        for (f = Zs = d; null !== Zs;) {
                                            switch (p = (h = Zs).child, h.tag) {
                                                case 0:
                                                case 11:
                                                case 14:
                                                case 15:
                                                    nl(4, h, h.return);
                                                    break;
                                                case 1:
                                                    Js(h, h.return);
                                                    var m = h.stateNode;
                                                    if ("function" === typeof m.componentWillUnmount) {
                                                        r = h, n = h.return;
                                                        try {
                                                            t = r, m.props = t.memoizedProps, m.state = t.memoizedState, m.componentWillUnmount()
                                                        } catch (v) {
                                                            ku(r, n, v)
                                                        }
                                                    }
                                                    break;
                                                case 5:
                                                    Js(h, h.return);
                                                    break;
                                                case 22:
                                                    if (null !== h.memoizedState) {
                                                        xl(f);
                                                        continue
                                                    }
                                            }
                                            null !== p ? (p.return = h, Zs = p) : xl(f)
                                        }
                                        d = d.sibling
                                    }
                                e: for (d = null, f = e;;) {
                                    if (5 === f.tag) {
                                        if (null === d) {
                                            d = f;
                                            try {
                                                o = f.stateNode, c ? "function" === typeof(a = o.style).setProperty ? a.setProperty("display", "none", "important") : a.display = "none" : (l = f.stateNode, s = void 0 !== (u = f.memoizedProps.style) && null !== u && u.hasOwnProperty("display") ? u.display : null, l.style.display = me("display", s))
                                            } catch (v) {
                                                ku(e, e.return, v)
                                            }
                                        }
                                    } else if (6 === f.tag) {
                                        if (null === d) try {
                                            f.stateNode.nodeValue = c ? "" : f.memoizedProps
                                        } catch (v) {
                                            ku(e, e.return, v)
                                        }
                                    } else if ((22 !== f.tag && 23 !== f.tag || null === f.memoizedState || f === e) && null !== f.child) {
                                        f.child.return = f, f = f.child;
                                        continue
                                    }
                                    if (f === e) break e;
                                    for (; null === f.sibling;) {
                                        if (null === f.return || f.return === e) break e;
                                        d === f && (d = null), f = f.return
                                    }
                                    d === f && (d = null), f.sibling.return = f.return, f = f.sibling
                                }
                            }
                            break;
                        case 19:
                            ml(t, e), gl(e), 4 & r && pl(e);
                        case 21:
                    }
                }

                function gl(e) {
                    var t = e.flags;
                    if (2 & t) {
                        try {
                            e: {
                                for (var n = e.return; null !== n;) {
                                    if (al(n)) {
                                        var r = n;
                                        break e
                                    }
                                    n = n.return
                                }
                                throw Error(i(160))
                            }
                            switch (r.tag) {
                                case 5:
                                    var o = r.stateNode;
                                    32 & r.flags && (fe(o, ""), r.flags &= -33), ul(e, sl(e), o);
                                    break;
                                case 3:
                                case 4:
                                    var a = r.stateNode.containerInfo;
                                    ll(e, sl(e), a);
                                    break;
                                default:
                                    throw Error(i(161))
                            }
                        }
                        catch (s) {
                            ku(e, e.return, s)
                        }
                        e.flags &= -3
                    }
                    4096 & t && (e.flags &= -4097)
                }

                function yl(e, t, n) {
                    Zs = e, bl(e, t, n)
                }

                function bl(e, t, n) {
                    for (var r = 0 !== (1 & e.mode); null !== Zs;) {
                        var o = Zs,
                            i = o.child;
                        if (22 === o.tag && r) {
                            var a = null !== o.memoizedState || Qs;
                            if (!a) {
                                var s = o.alternate,
                                    l = null !== s && null !== s.memoizedState || Gs;
                                s = Qs;
                                var u = Gs;
                                if (Qs = a, (Gs = l) && !u)
                                    for (Zs = o; null !== Zs;) l = (a = Zs).child, 22 === a.tag && null !== a.memoizedState ? Sl(o) : null !== l ? (l.return = a, Zs = l) : Sl(o);
                                for (; null !== i;) Zs = i, bl(i, t, n), i = i.sibling;
                                Zs = o, Qs = s, Gs = u
                            }
                            wl(e)
                        } else 0 !== (8772 & o.subtreeFlags) && null !== i ? (i.return = o, Zs = i) : wl(e)
                    }
                }

                function wl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        if (0 !== (8772 & t.flags)) {
                            var n = t.alternate;
                            try {
                                if (0 !== (8772 & t.flags)) switch (t.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Gs || rl(5, t);
                                        break;
                                    case 1:
                                        var r = t.stateNode;
                                        if (4 & t.flags && !Gs)
                                            if (null === n) r.componentDidMount();
                                            else {
                                                var o = t.elementType === t.type ? n.memoizedProps : ns(t.type, n.memoizedProps);
                                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                                            }
                                        var a = t.updateQueue;
                                        null !== a && Wi(t, a, r);
                                        break;
                                    case 3:
                                        var s = t.updateQueue;
                                        if (null !== s) {
                                            if (n = null, null !== t.child) switch (t.child.tag) {
                                                case 5:
                                                case 1:
                                                    n = t.child.stateNode
                                            }
                                            Wi(t, s, n)
                                        }
                                        break;
                                    case 5:
                                        var l = t.stateNode;
                                        if (null === n && 4 & t.flags) {
                                            n = l;
                                            var u = t.memoizedProps;
                                            switch (t.type) {
                                                case "button":
                                                case "input":
                                                case "select":
                                                case "textarea":
                                                    u.autoFocus && n.focus();
                                                    break;
                                                case "img":
                                                    u.src && (n.src = u.src)
                                            }
                                        }
                                        break;
                                    case 6:
                                    case 4:
                                    case 12:
                                    case 19:
                                    case 17:
                                    case 21:
                                    case 22:
                                    case 23:
                                    case 25:
                                        break;
                                    case 13:
                                        if (null === t.memoizedState) {
                                            var c = t.alternate;
                                            if (null !== c) {
                                                var d = c.memoizedState;
                                                if (null !== d) {
                                                    var f = d.dehydrated;
                                                    null !== f && Ut(f)
                                                }
                                            }
                                        }
                                        break;
                                    default:
                                        throw Error(i(163))
                                }
                                Gs || 512 & t.flags && ol(t)
                            } catch (h) {
                                ku(t, t.return, h)
                            }
                        }
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        if (null !== (n = t.sibling)) {
                            n.return = t.return, Zs = n;
                            break
                        }
                        Zs = t.return
                    }
                }

                function xl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        var n = t.sibling;
                        if (null !== n) {
                            n.return = t.return, Zs = n;
                            break
                        }
                        Zs = t.return
                    }
                }

                function Sl(e) {
                    for (; null !== Zs;) {
                        var t = Zs;
                        try {
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    var n = t.return;
                                    try {
                                        rl(4, t)
                                    } catch (l) {
                                        ku(t, n, l)
                                    }
                                    break;
                                case 1:
                                    var r = t.stateNode;
                                    if ("function" === typeof r.componentDidMount) {
                                        var o = t.return;
                                        try {
                                            r.componentDidMount()
                                        } catch (l) {
                                            ku(t, o, l)
                                        }
                                    }
                                    var i = t.return;
                                    try {
                                        ol(t)
                                    } catch (l) {
                                        ku(t, i, l)
                                    }
                                    break;
                                case 5:
                                    var a = t.return;
                                    try {
                                        ol(t)
                                    } catch (l) {
                                        ku(t, a, l)
                                    }
                            }
                        } catch (l) {
                            ku(t, t.return, l)
                        }
                        if (t === e) {
                            Zs = null;
                            break
                        }
                        var s = t.sibling;
                        if (null !== s) {
                            s.return = t.return, Zs = s;
                            break
                        }
                        Zs = t.return
                    }
                }
                var El, kl = Math.ceil,
                    Al = w.ReactCurrentDispatcher,
                    Cl = w.ReactCurrentOwner,
                    Tl = w.ReactCurrentBatchConfig,
                    Pl = 0,
                    _l = null,
                    Fl = null,
                    Rl = 0,
                    Dl = 0,
                    Ll = Ao(0),
                    Ml = 0,
                    Ol = null,
                    jl = 0,
                    Nl = 0,
                    Vl = 0,
                    Il = null,
                    zl = null,
                    Bl = 0,
                    Ul = 1 / 0,
                    Hl = null,
                    Wl = !1,
                    $l = null,
                    Kl = null,
                    Yl = !1,
                    ql = null,
                    Ql = 0,
                    Gl = 0,
                    Xl = null,
                    Zl = -1,
                    Jl = 0;

                function eu() {
                    return 0 !== (6 & Pl) ? Xe() : -1 !== Zl ? Zl : Zl = Xe()
                }

                function tu(e) {
                    return 0 === (1 & e.mode) ? 1 : 0 !== (2 & Pl) && 0 !== Rl ? Rl & -Rl : null !== vi.transition ? (0 === Jl && (Jl = mt()), Jl) : 0 !== (e = bt) ? e : e = void 0 === (e = window.event) ? 16 : Gt(e.type)
                }

                function nu(e, t, n, r) {
                    if (50 < Gl) throw Gl = 0, Xl = null, Error(i(185));
                    gt(e, n, r), 0 !== (2 & Pl) && e === _l || (e === _l && (0 === (2 & Pl) && (Nl |= n), 4 === Ml && su(e, Rl)), ru(e, r), 1 === n && 0 === Pl && 0 === (1 & t.mode) && (Ul = Xe() + 500, zo && Ho()))
                }

                function ru(e, t) {
                    var n = e.callbackNode;
                    ! function(e, t) {
                        for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i;) {
                            var a = 31 - at(i),
                                s = 1 << a,
                                l = o[a]; - 1 === l ? 0 !== (s & n) && 0 === (s & r) || (o[a] = ht(s, t)) : l <= t && (e.expiredLanes |= s), i &= ~s
                        }
                    }(e, t);
                    var r = ft(e, e === _l ? Rl : 0);
                    if (0 === r) null !== n && qe(n), e.callbackNode = null, e.callbackPriority = 0;
                    else if (t = r & -r, e.callbackPriority !== t) {
                        if (null != n && qe(n), 1 === t) 0 === e.tag ? function(e) {
                            zo = !0, Uo(e)
                        }(lu.bind(null, e)) : Uo(lu.bind(null, e)), ao((function() {
                            0 === (6 & Pl) && Ho()
                        })), n = null;
                        else {
                            switch (wt(r)) {
                                case 1:
                                    n = Je;
                                    break;
                                case 4:
                                    n = et;
                                    break;
                                case 16:
                                default:
                                    n = tt;
                                    break;
                                case 536870912:
                                    n = rt
                            }
                            n = _u(n, ou.bind(null, e))
                        }
                        e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function ou(e, t) {
                    if (Zl = -1, Jl = 0, 0 !== (6 & Pl)) throw Error(i(327));
                    var n = e.callbackNode;
                    if (Su() && e.callbackNode !== n) return null;
                    var r = ft(e, e === _l ? Rl : 0);
                    if (0 === r) return null;
                    if (0 !== (30 & r) || 0 !== (r & e.expiredLanes) || t) t = vu(e, r);
                    else {
                        t = r;
                        var o = Pl;
                        Pl |= 2;
                        var a = pu();
                        for (_l === e && Rl === t || (Hl = null, Ul = Xe() + 500, fu(e, t));;) try {
                            yu();
                            break
                        } catch (l) {
                            hu(e, l)
                        }
                        Ti(), Al.current = a, Pl = o, null !== Fl ? t = 0 : (_l = null, Rl = 0, t = Ml)
                    }
                    if (0 !== t) {
                        if (2 === t && (0 !== (o = pt(e)) && (r = o, t = iu(e, o))), 1 === t) throw n = Ol, fu(e, 0), su(e, r), ru(e, Xe()), n;
                        if (6 === t) su(e, r);
                        else {
                            if (o = e.current.alternate, 0 === (30 & r) && ! function(e) {
                                    for (var t = e;;) {
                                        if (16384 & t.flags) {
                                            var n = t.updateQueue;
                                            if (null !== n && null !== (n = n.stores))
                                                for (var r = 0; r < n.length; r++) {
                                                    var o = n[r],
                                                        i = o.getSnapshot;
                                                    o = o.value;
                                                    try {
                                                        if (!sr(i(), o)) return !1
                                                    } catch (s) {
                                                        return !1
                                                    }
                                                }
                                        }
                                        if (n = t.child, 16384 & t.subtreeFlags && null !== n) n.return = t, t = n;
                                        else {
                                            if (t === e) break;
                                            for (; null === t.sibling;) {
                                                if (null === t.return || t.return === e) return !0;
                                                t = t.return
                                            }
                                            t.sibling.return = t.return, t = t.sibling
                                        }
                                    }
                                    return !0
                                }(o) && (2 === (t = vu(e, r)) && (0 !== (a = pt(e)) && (r = a, t = iu(e, a))), 1 === t)) throw n = Ol, fu(e, 0), su(e, r), ru(e, Xe()), n;
                            switch (e.finishedWork = o, e.finishedLanes = r, t) {
                                case 0:
                                case 1:
                                    throw Error(i(345));
                                case 2:
                                case 5:
                                    xu(e, zl, Hl);
                                    break;
                                case 3:
                                    if (su(e, r), (130023424 & r) === r && 10 < (t = Bl + 500 - Xe())) {
                                        if (0 !== ft(e, 0)) break;
                                        if (((o = e.suspendedLanes) & r) !== r) {
                                            eu(), e.pingedLanes |= e.suspendedLanes & o;
                                            break
                                        }
                                        e.timeoutHandle = ro(xu.bind(null, e, zl, Hl), t);
                                        break
                                    }
                                    xu(e, zl, Hl);
                                    break;
                                case 4:
                                    if (su(e, r), (4194240 & r) === r) break;
                                    for (t = e.eventTimes, o = -1; 0 < r;) {
                                        var s = 31 - at(r);
                                        a = 1 << s, (s = t[s]) > o && (o = s), r &= ~a
                                    }
                                    if (r = o, 10 < (r = (120 > (r = Xe() - r) ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kl(r / 1960)) - r)) {
                                        e.timeoutHandle = ro(xu.bind(null, e, zl, Hl), r);
                                        break
                                    }
                                    xu(e, zl, Hl);
                                    break;
                                default:
                                    throw Error(i(329))
                            }
                        }
                    }
                    return ru(e, Xe()), e.callbackNode === n ? ou.bind(null, e) : null
                }

                function iu(e, t) {
                    var n = Il;
                    return e.current.memoizedState.isDehydrated && (fu(e, t).flags |= 256), 2 !== (e = vu(e, t)) && (t = zl, zl = n, null !== t && au(t)), e
                }

                function au(e) {
                    null === zl ? zl = e : zl.push.apply(zl, e)
                }

                function su(e, t) {
                    for (t &= ~Vl, t &= ~Nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - at(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function lu(e) {
                    if (0 !== (6 & Pl)) throw Error(i(327));
                    Su();
                    var t = ft(e, 0);
                    if (0 === (1 & t)) return ru(e, Xe()), null;
                    var n = vu(e, t);
                    if (0 !== e.tag && 2 === n) {
                        var r = pt(e);
                        0 !== r && (t = r, n = iu(e, r))
                    }
                    if (1 === n) throw n = Ol, fu(e, 0), su(e, t), ru(e, Xe()), n;
                    if (6 === n) throw Error(i(345));
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, xu(e, zl, Hl), ru(e, Xe()), null
                }

                function uu(e, t) {
                    var n = Pl;
                    Pl |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Pl = n) && (Ul = Xe() + 500, zo && Ho())
                    }
                }

                function cu(e) {
                    null !== ql && 0 === ql.tag && 0 === (6 & Pl) && Su();
                    var t = Pl;
                    Pl |= 1;
                    var n = Tl.transition,
                        r = bt;
                    try {
                        if (Tl.transition = null, bt = 1, e) return e()
                    } finally {
                        bt = r, Tl.transition = n, 0 === (6 & (Pl = t)) && Ho()
                    }
                }

                function du() {
                    Dl = Ll.current, Co(Ll)
                }

                function fu(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, oo(n)), null !== Fl)
                        for (n = Fl.return; null !== n;) {
                            var r = n;
                            switch (ni(r), r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && Mo();
                                    break;
                                case 3:
                                    Xi(), Co(Fo), Co(_o), ra();
                                    break;
                                case 5:
                                    Ji(r);
                                    break;
                                case 4:
                                    Xi();
                                    break;
                                case 13:
                                case 19:
                                    Co(ea);
                                    break;
                                case 10:
                                    Pi(r.type._context);
                                    break;
                                case 22:
                                case 23:
                                    du()
                            }
                            n = n.return
                        }
                    if (_l = e, Fl = e = Lu(e.current, null), Rl = Dl = t, Ml = 0, Ol = null, Vl = Nl = jl = 0, zl = Il = null, null !== Di) {
                        for (t = 0; t < Di.length; t++)
                            if (null !== (r = (n = Di[t]).interleaved)) {
                                n.interleaved = null;
                                var o = r.next,
                                    i = n.pending;
                                if (null !== i) {
                                    var a = i.next;
                                    i.next = o, r.next = a
                                }
                                n.pending = r
                            }
                        Di = null
                    }
                    return e
                }

                function hu(e, t) {
                    for (;;) {
                        var n = Fl;
                        try {
                            if (Ti(), oa.current = Za, ca) {
                                for (var r = sa.memoizedState; null !== r;) {
                                    var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next
                                }
                                ca = !1
                            }
                            if (aa = 0, ua = la = sa = null, da = !1, fa = 0, Cl.current = null, null === n || null === n.return) {
                                Ml = 1, Ol = t, Fl = null;
                                break
                            }
                            e: {
                                var a = e,
                                    s = n.return,
                                    l = n,
                                    u = t;
                                if (t = Rl, l.flags |= 32768, null !== u && "object" === typeof u && "function" === typeof u.then) {
                                    var c = u,
                                        d = l,
                                        f = d.tag;
                                    if (0 === (1 & d.mode) && (0 === f || 11 === f || 15 === f)) {
                                        var h = d.alternate;
                                        h ? (d.updateQueue = h.updateQueue, d.memoizedState = h.memoizedState, d.lanes = h.lanes) : (d.updateQueue = null, d.memoizedState = null)
                                    }
                                    var p = vs(s);
                                    if (null !== p) {
                                        p.flags &= -257, gs(p, s, l, 0, t), 1 & p.mode && ms(a, c, t), u = c;
                                        var m = (t = p).updateQueue;
                                        if (null === m) {
                                            var v = new Set;
                                            v.add(u), t.updateQueue = v
                                        } else m.add(u);
                                        break e
                                    }
                                    if (0 === (1 & t)) {
                                        ms(a, c, t), mu();
                                        break e
                                    }
                                    u = Error(i(426))
                                } else if (ii && 1 & l.mode) {
                                    var g = vs(s);
                                    if (null !== g) {
                                        0 === (65536 & g.flags) && (g.flags |= 256), gs(g, s, l, 0, t), mi(us(u, l));
                                        break e
                                    }
                                }
                                a = u = us(u, l),
                                4 !== Ml && (Ml = 2),
                                null === Il ? Il = [a] : Il.push(a),
                                a = s;do {
                                    switch (a.tag) {
                                        case 3:
                                            a.flags |= 65536, t &= -t, a.lanes |= t, Ui(a, hs(0, u, t));
                                            break e;
                                        case 1:
                                            l = u;
                                            var y = a.type,
                                                b = a.stateNode;
                                            if (0 === (128 & a.flags) && ("function" === typeof y.getDerivedStateFromError || null !== b && "function" === typeof b.componentDidCatch && (null === Kl || !Kl.has(b)))) {
                                                a.flags |= 65536, t &= -t, a.lanes |= t, Ui(a, ps(a, l, t));
                                                break e
                                            }
                                    }
                                    a = a.return
                                } while (null !== a)
                            }
                            wu(n)
                        } catch (w) {
                            t = w, Fl === n && null !== n && (Fl = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function pu() {
                    var e = Al.current;
                    return Al.current = Za, null === e ? Za : e
                }

                function mu() {
                    0 !== Ml && 3 !== Ml && 2 !== Ml || (Ml = 4), null === _l || 0 === (268435455 & jl) && 0 === (268435455 & Nl) || su(_l, Rl)
                }

                function vu(e, t) {
                    var n = Pl;
                    Pl |= 2;
                    var r = pu();
                    for (_l === e && Rl === t || (Hl = null, fu(e, t));;) try {
                        gu();
                        break
                    } catch (o) {
                        hu(e, o)
                    }
                    if (Ti(), Pl = n, Al.current = r, null !== Fl) throw Error(i(261));
                    return _l = null, Rl = 0, Ml
                }

                function gu() {
                    for (; null !== Fl;) bu(Fl)
                }

                function yu() {
                    for (; null !== Fl && !Qe();) bu(Fl)
                }

                function bu(e) {
                    var t = El(e.alternate, e, Dl);
                    e.memoizedProps = e.pendingProps, null === t ? wu(e) : Fl = t, Cl.current = null
                }

                function wu(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (32768 & t.flags)) {
                            if (null !== (n = Ys(n, t, Dl))) return void(Fl = n)
                        } else {
                            if (null !== (n = qs(n, t))) return n.flags &= 32767, void(Fl = n);
                            if (null === e) return Ml = 6, void(Fl = null);
                            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null
                        }
                        if (null !== (t = t.sibling)) return void(Fl = t);
                        Fl = t = e
                    } while (null !== t);
                    0 === Ml && (Ml = 5)
                }

                function xu(e, t, n) {
                    var r = bt,
                        o = Tl.transition;
                    try {
                        Tl.transition = null, bt = 1,
                            function(e, t, n, r) {
                                do {
                                    Su()
                                } while (null !== ql);
                                if (0 !== (6 & Pl)) throw Error(i(327));
                                n = e.finishedWork;
                                var o = e.finishedLanes;
                                if (null === n) return null;
                                if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                                e.callbackNode = null, e.callbackPriority = 0;
                                var a = n.lanes | n.childLanes;
                                if (function(e, t) {
                                        var n = e.pendingLanes & ~t;
                                        e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
                                        var r = e.eventTimes;
                                        for (e = e.expirationTimes; 0 < n;) {
                                            var o = 31 - at(n),
                                                i = 1 << o;
                                            t[o] = 0, r[o] = -1, e[o] = -1, n &= ~i
                                        }
                                    }(e, a), e === _l && (Fl = _l = null, Rl = 0), 0 === (2064 & n.subtreeFlags) && 0 === (2064 & n.flags) || Yl || (Yl = !0, _u(tt, (function() {
                                        return Su(), null
                                    }))), a = 0 !== (15990 & n.flags), 0 !== (15990 & n.subtreeFlags) || a) {
                                    a = Tl.transition, Tl.transition = null;
                                    var s = bt;
                                    bt = 1;
                                    var l = Pl;
                                    Pl |= 4, Cl.current = null,
                                        function(e, t) {
                                            if (eo = Wt, hr(e = fr())) {
                                                if ("selectionStart" in e) var n = {
                                                    start: e.selectionStart,
                                                    end: e.selectionEnd
                                                };
                                                else e: {
                                                    var r = (n = (n = e.ownerDocument) && n.defaultView || window).getSelection && n.getSelection();
                                                    if (r && 0 !== r.rangeCount) {
                                                        n = r.anchorNode;
                                                        var o = r.anchorOffset,
                                                            a = r.focusNode;
                                                        r = r.focusOffset;
                                                        try {
                                                            n.nodeType, a.nodeType
                                                        } catch (x) {
                                                            n = null;
                                                            break e
                                                        }
                                                        var s = 0,
                                                            l = -1,
                                                            u = -1,
                                                            c = 0,
                                                            d = 0,
                                                            f = e,
                                                            h = null;
                                                        t: for (;;) {
                                                            for (var p; f !== n || 0 !== o && 3 !== f.nodeType || (l = s + o), f !== a || 0 !== r && 3 !== f.nodeType || (u = s + r), 3 === f.nodeType && (s += f.nodeValue.length), null !== (p = f.firstChild);) h = f, f = p;
                                                            for (;;) {
                                                                if (f === e) break t;
                                                                if (h === n && ++c === o && (l = s), h === a && ++d === r && (u = s), null !== (p = f.nextSibling)) break;
                                                                h = (f = h).parentNode
                                                            }
                                                            f = p
                                                        }
                                                        n = -1 === l || -1 === u ? null : {
                                                            start: l,
                                                            end: u
                                                        }
                                                    } else n = null
                                                }
                                                n = n || {
                                                    start: 0,
                                                    end: 0
                                                }
                                            } else n = null;
                                            for (to = {
                                                    focusedElem: e,
                                                    selectionRange: n
                                                }, Wt = !1, Zs = t; null !== Zs;)
                                                if (e = (t = Zs).child, 0 !== (1028 & t.subtreeFlags) && null !== e) e.return = t, Zs = e;
                                                else
                                                    for (; null !== Zs;) {
                                                        t = Zs;
                                                        try {
                                                            var m = t.alternate;
                                                            if (0 !== (1024 & t.flags)) switch (t.tag) {
                                                                case 0:
                                                                case 11:
                                                                case 15:
                                                                case 5:
                                                                case 6:
                                                                case 4:
                                                                case 17:
                                                                    break;
                                                                case 1:
                                                                    if (null !== m) {
                                                                        var v = m.memoizedProps,
                                                                            g = m.memoizedState,
                                                                            y = t.stateNode,
                                                                            b = y.getSnapshotBeforeUpdate(t.elementType === t.type ? v : ns(t.type, v), g);
                                                                        y.__reactInternalSnapshotBeforeUpdate = b
                                                                    }
                                                                    break;
                                                                case 3:
                                                                    var w = t.stateNode.containerInfo;
                                                                    1 === w.nodeType ? w.textContent = "" : 9 === w.nodeType && w.documentElement && w.removeChild(w.documentElement);
                                                                    break;
                                                                default:
                                                                    throw Error(i(163))
                                                            }
                                                        } catch (x) {
                                                            ku(t, t.return, x)
                                                        }
                                                        if (null !== (e = t.sibling)) {
                                                            e.return = t.return, Zs = e;
                                                            break
                                                        }
                                                        Zs = t.return
                                                    }
                                            m = tl, tl = !1
                                        }(e, n), vl(n, e), pr(to), Wt = !!eo, to = eo = null, e.current = n, yl(n, e, o), Ge(), Pl = l, bt = s, Tl.transition = a
                                } else e.current = n;
                                if (Yl && (Yl = !1, ql = e, Ql = o), a = e.pendingLanes, 0 === a && (Kl = null), function(e) {
                                        if (it && "function" === typeof it.onCommitFiberRoot) try {
                                            it.onCommitFiberRoot(ot, e, void 0, 128 === (128 & e.current.flags))
                                        } catch (t) {}
                                    }(n.stateNode), ru(e, Xe()), null !== t)
                                    for (r = e.onRecoverableError, n = 0; n < t.length; n++) o = t[n], r(o.value, {
                                        componentStack: o.stack,
                                        digest: o.digest
                                    });
                                if (Wl) throw Wl = !1, e = $l, $l = null, e;
                                0 !== (1 & Ql) && 0 !== e.tag && Su(), a = e.pendingLanes, 0 !== (1 & a) ? e === Xl ? Gl++ : (Gl = 0, Xl = e) : Gl = 0, Ho()
                            }(e, t, n, r)
                    } finally {
                        Tl.transition = o, bt = r
                    }
                    return null
                }

                function Su() {
                    if (null !== ql) {
                        var e = wt(Ql),
                            t = Tl.transition,
                            n = bt;
                        try {
                            if (Tl.transition = null, bt = 16 > e ? 16 : e, null === ql) var r = !1;
                            else {
                                if (e = ql, ql = null, Ql = 0, 0 !== (6 & Pl)) throw Error(i(331));
                                var o = Pl;
                                for (Pl |= 4, Zs = e.current; null !== Zs;) {
                                    var a = Zs,
                                        s = a.child;
                                    if (0 !== (16 & Zs.flags)) {
                                        var l = a.deletions;
                                        if (null !== l) {
                                            for (var u = 0; u < l.length; u++) {
                                                var c = l[u];
                                                for (Zs = c; null !== Zs;) {
                                                    var d = Zs;
                                                    switch (d.tag) {
                                                        case 0:
                                                        case 11:
                                                        case 15:
                                                            nl(8, d, a)
                                                    }
                                                    var f = d.child;
                                                    if (null !== f) f.return = d, Zs = f;
                                                    else
                                                        for (; null !== Zs;) {
                                                            var h = (d = Zs).sibling,
                                                                p = d.return;
                                                            if (il(d), d === c) {
                                                                Zs = null;
                                                                break
                                                            }
                                                            if (null !== h) {
                                                                h.return = p, Zs = h;
                                                                break
                                                            }
                                                            Zs = p
                                                        }
                                                }
                                            }
                                            var m = a.alternate;
                                            if (null !== m) {
                                                var v = m.child;
                                                if (null !== v) {
                                                    m.child = null;
                                                    do {
                                                        var g = v.sibling;
                                                        v.sibling = null, v = g
                                                    } while (null !== v)
                                                }
                                            }
                                            Zs = a
                                        }
                                    }
                                    if (0 !== (2064 & a.subtreeFlags) && null !== s) s.return = a, Zs = s;
                                    else e: for (; null !== Zs;) {
                                        if (0 !== (2048 & (a = Zs).flags)) switch (a.tag) {
                                            case 0:
                                            case 11:
                                            case 15:
                                                nl(9, a, a.return)
                                        }
                                        var y = a.sibling;
                                        if (null !== y) {
                                            y.return = a.return, Zs = y;
                                            break e
                                        }
                                        Zs = a.return
                                    }
                                }
                                var b = e.current;
                                for (Zs = b; null !== Zs;) {
                                    var w = (s = Zs).child;
                                    if (0 !== (2064 & s.subtreeFlags) && null !== w) w.return = s, Zs = w;
                                    else e: for (s = b; null !== Zs;) {
                                        if (0 !== (2048 & (l = Zs).flags)) try {
                                            switch (l.tag) {
                                                case 0:
                                                case 11:
                                                case 15:
                                                    rl(9, l)
                                            }
                                        } catch (S) {
                                            ku(l, l.return, S)
                                        }
                                        if (l === s) {
                                            Zs = null;
                                            break e
                                        }
                                        var x = l.sibling;
                                        if (null !== x) {
                                            x.return = l.return, Zs = x;
                                            break e
                                        }
                                        Zs = l.return
                                    }
                                }
                                if (Pl = o, Ho(), it && "function" === typeof it.onPostCommitFiberRoot) try {
                                    it.onPostCommitFiberRoot(ot, e)
                                } catch (S) {}
                                r = !0
                            }
                            return r
                        } finally {
                            bt = n, Tl.transition = t
                        }
                    }
                    return !1
                }

                function Eu(e, t, n) {
                    e = zi(e, t = hs(0, t = us(n, t), 1), 1), t = eu(), null !== e && (gt(e, 1, t), ru(e, t))
                }

                function ku(e, t, n) {
                    if (3 === e.tag) Eu(e, e, n);
                    else
                        for (; null !== t;) {
                            if (3 === t.tag) {
                                Eu(t, e, n);
                                break
                            }
                            if (1 === t.tag) {
                                var r = t.stateNode;
                                if ("function" === typeof t.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Kl || !Kl.has(r))) {
                                    t = zi(t, e = ps(t, e = us(n, e), 1), 1), e = eu(), null !== t && (gt(t, 1, e), ru(t, e));
                                    break
                                }
                            }
                            t = t.return
                        }
                }

                function Au(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = eu(), e.pingedLanes |= e.suspendedLanes & n, _l === e && (Rl & n) === n && (4 === Ml || 3 === Ml && (130023424 & Rl) === Rl && 500 > Xe() - Bl ? fu(e, 0) : Vl |= n), ru(e, t)
                }

                function Cu(e, t) {
                    0 === t && (0 === (1 & e.mode) ? t = 1 : (t = ct, 0 === (130023424 & (ct <<= 1)) && (ct = 4194304)));
                    var n = eu();
                    null !== (e = Oi(e, t)) && (gt(e, t, n), ru(e, n))
                }

                function Tu(e) {
                    var t = e.memoizedState,
                        n = 0;
                    null !== t && (n = t.retryLane), Cu(e, n)
                }

                function Pu(e, t) {
                    var n = 0;
                    switch (e.tag) {
                        case 13:
                            var r = e.stateNode,
                                o = e.memoizedState;
                            null !== o && (n = o.retryLane);
                            break;
                        case 19:
                            r = e.stateNode;
                            break;
                        default:
                            throw Error(i(314))
                    }
                    null !== r && r.delete(t), Cu(e, n)
                }

                function _u(e, t) {
                    return Ye(e, t)
                }

                function Fu(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ru(e, t, n, r) {
                    return new Fu(e, t, n, r)
                }

                function Du(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Lu(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ru(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = 14680064 & e.flags, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Mu(e, t, n, r, o, a) {
                    var s = 2;
                    if (r = e, "function" === typeof e) Du(e) && (s = 1);
                    else if ("string" === typeof e) s = 5;
                    else e: switch (e) {
                        case E:
                            return Ou(n.children, o, a, t);
                        case k:
                            s = 8, o |= 8;
                            break;
                        case A:
                            return (e = Ru(12, n, t, 2 | o)).elementType = A, e.lanes = a, e;
                        case _:
                            return (e = Ru(13, n, t, o)).elementType = _, e.lanes = a, e;
                        case F:
                            return (e = Ru(19, n, t, o)).elementType = F, e.lanes = a, e;
                        case L:
                            return ju(n, o, a, t);
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case C:
                                    s = 10;
                                    break e;
                                case T:
                                    s = 9;
                                    break e;
                                case P:
                                    s = 11;
                                    break e;
                                case R:
                                    s = 14;
                                    break e;
                                case D:
                                    s = 16, r = null;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Ru(s, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
                }

                function Ou(e, t, n, r) {
                    return (e = Ru(7, e, r, t)).lanes = n, e
                }

                function ju(e, t, n, r) {
                    return (e = Ru(22, e, r, t)).elementType = L, e.lanes = n, e.stateNode = {
                        isHidden: !1
                    }, e
                }

                function Nu(e, t, n) {
                    return (e = Ru(6, e, null, t)).lanes = n, e
                }

                function Vu(e, t, n) {
                    return (t = Ru(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Iu(e, t, n, r, o) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = vt(0), this.expirationTimes = vt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = vt(0), this.identifierPrefix = r, this.onRecoverableError = o, this.mutableSourceEagerHydrationData = null
                }

                function zu(e, t, n, r, o, i, a, s, l) {
                    return e = new Iu(e, t, n, s, l), 1 === t ? (t = 1, !0 === i && (t |= 8)) : t = 0, i = Ru(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = {
                        element: r,
                        isDehydrated: n,
                        cache: null,
                        transitions: null,
                        pendingSuspenseBoundaries: null
                    }, Ni(i), e
                }

                function Bu(e) {
                    if (!e) return Po;
                    e: {
                        if (Ue(e = e._reactInternals) !== e || 1 !== e.tag) throw Error(i(170));
                        var t = e;do {
                            switch (t.tag) {
                                case 3:
                                    t = t.stateNode.context;
                                    break e;
                                case 1:
                                    if (Lo(t.type)) {
                                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                                        break e
                                    }
                            }
                            t = t.return
                        } while (null !== t);
                        throw Error(i(171))
                    }
                    if (1 === e.tag) {
                        var n = e.type;
                        if (Lo(n)) return jo(e, n, t)
                    }
                    return t
                }

                function Uu(e, t, n, r, o, i, a, s, l) {
                    return (e = zu(n, r, !0, e, 0, i, 0, s, l)).context = Bu(null), n = e.current, (i = Ii(r = eu(), o = tu(n))).callback = void 0 !== t && null !== t ? t : null, zi(n, i, o), e.current.lanes = o, gt(e, o, r), ru(e, r), e
                }

                function Hu(e, t, n, r) {
                    var o = t.current,
                        i = eu(),
                        a = tu(o);
                    return n = Bu(n), null === t.context ? t.context = n : t.pendingContext = n, (t = Ii(i, a)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), null !== (e = zi(o, t, a)) && (nu(e, o, a, i), Bi(e, o, a)), a
                }

                function Wu(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function $u(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function Ku(e, t) {
                    $u(e, t), (e = e.alternate) && $u(e, t)
                }
                El = function(e, t, n) {
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || Fo.current) bs = !0;
                        else {
                            if (0 === (e.lanes & n) && 0 === (128 & t.flags)) return bs = !1,
                                function(e, t, n) {
                                    switch (t.tag) {
                                        case 3:
                                            _s(t), pi();
                                            break;
                                        case 5:
                                            Zi(t);
                                            break;
                                        case 1:
                                            Lo(t.type) && No(t);
                                            break;
                                        case 4:
                                            Gi(t, t.stateNode.containerInfo);
                                            break;
                                        case 10:
                                            var r = t.type._context,
                                                o = t.memoizedProps.value;
                                            To(Ei, r._currentValue), r._currentValue = o;
                                            break;
                                        case 13:
                                            if (null !== (r = t.memoizedState)) return null !== r.dehydrated ? (To(ea, 1 & ea.current), t.flags |= 128, null) : 0 !== (n & t.child.childLanes) ? Ns(e, t, n) : (To(ea, 1 & ea.current), null !== (e = Ws(e, t, n)) ? e.sibling : null);
                                            To(ea, 1 & ea.current);
                                            break;
                                        case 19:
                                            if (r = 0 !== (n & t.childLanes), 0 !== (128 & e.flags)) {
                                                if (r) return Us(e, t, n);
                                                t.flags |= 128
                                            }
                                            if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), To(ea, ea.current), r) break;
                                            return null;
                                        case 22:
                                        case 23:
                                            return t.lanes = 0, ks(e, t, n)
                                    }
                                    return Ws(e, t, n)
                                }(e, t, n);
                            bs = 0 !== (131072 & e.flags)
                        }
                    else bs = !1, ii && 0 !== (1048576 & t.flags) && ei(t, Yo, t.index);
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            var r = t.type;
                            Hs(e, t), e = t.pendingProps;
                            var o = Do(t, _o.current);
                            Fi(t, n), o = va(null, t, r, e, o, n);
                            var a = ga();
                            return t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Lo(r) ? (a = !0, No(t)) : a = !1, t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, Ni(t), o.updater = os, t.stateNode = o, o._reactInternals = t, ls(t, r, e, n), t = Ps(null, t, r, !0, a, n)) : (t.tag = 0, ii && a && ti(t), ws(null, t, o, n), t = t.child), t;
                        case 16:
                            r = t.elementType;
                            e: {
                                switch (Hs(e, t), e = t.pendingProps, r = (o = r._init)(r._payload), t.type = r, o = t.tag = function(e) {
                                    if ("function" === typeof e) return Du(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === P) return 11;
                                        if (e === R) return 14
                                    }
                                    return 2
                                }(r), e = ns(r, e), o) {
                                    case 0:
                                        t = Cs(null, t, r, e, n);
                                        break e;
                                    case 1:
                                        t = Ts(null, t, r, e, n);
                                        break e;
                                    case 11:
                                        t = xs(null, t, r, e, n);
                                        break e;
                                    case 14:
                                        t = Ss(null, t, r, ns(r.type, e), n);
                                        break e
                                }
                                throw Error(i(306, r, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, o = t.pendingProps, Cs(e, t, r, o = t.elementType === r ? o : ns(r, o), n);
                        case 1:
                            return r = t.type, o = t.pendingProps, Ts(e, t, r, o = t.elementType === r ? o : ns(r, o), n);
                        case 3:
                            e: {
                                if (_s(t), null === e) throw Error(i(387));r = t.pendingProps,
                                o = (a = t.memoizedState).element,
                                Vi(e, t),
                                Hi(t, r, null, n);
                                var s = t.memoizedState;
                                if (r = s.element, a.isDehydrated) {
                                    if (a = {
                                            element: r,
                                            isDehydrated: !1,
                                            cache: s.cache,
                                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                                            transitions: s.transitions
                                        }, t.updateQueue.baseState = a, t.memoizedState = a, 256 & t.flags) {
                                        t = Fs(e, t, r, n, o = us(Error(i(423)), t));
                                        break e
                                    }
                                    if (r !== o) {
                                        t = Fs(e, t, r, n, o = us(Error(i(424)), t));
                                        break e
                                    }
                                    for (oi = uo(t.stateNode.containerInfo.firstChild), ri = t, ii = !0, ai = null, n = Si(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 4096, n = n.sibling
                                } else {
                                    if (pi(), r === o) {
                                        t = Ws(e, t, n);
                                        break e
                                    }
                                    ws(e, t, r, n)
                                }
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Zi(t), null === e && ci(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, s = o.children, no(r, o) ? s = null : null !== a && no(r, a) && (t.flags |= 32), As(e, t), ws(e, t, s, n), t.child;
                        case 6:
                            return null === e && ci(t), null;
                        case 13:
                            return Ns(e, t, n);
                        case 4:
                            return Gi(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = xi(t, null, r, n) : ws(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, o = t.pendingProps, xs(e, t, r, o = t.elementType === r ? o : ns(r, o), n);
                        case 7:
                            return ws(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return ws(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (r = t.type._context, o = t.pendingProps, a = t.memoizedProps, s = o.value, To(Ei, r._currentValue), r._currentValue = s, null !== a)
                                    if (sr(a.value, s)) {
                                        if (a.children === o.children && !Fo.current) {
                                            t = Ws(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (a = t.child) && (a.return = t); null !== a;) {
                                            var l = a.dependencies;
                                            if (null !== l) {
                                                s = a.child;
                                                for (var u = l.firstContext; null !== u;) {
                                                    if (u.context === r) {
                                                        if (1 === a.tag) {
                                                            (u = Ii(-1, n & -n)).tag = 2;
                                                            var c = a.updateQueue;
                                                            if (null !== c) {
                                                                var d = (c = c.shared).pending;
                                                                null === d ? u.next = u : (u.next = d.next, d.next = u), c.pending = u
                                                            }
                                                        }
                                                        a.lanes |= n, null !== (u = a.alternate) && (u.lanes |= n), _i(a.return, n, t), l.lanes |= n;
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else if (10 === a.tag) s = a.type === t.type ? null : a.child;
                                            else if (18 === a.tag) {
                                                if (null === (s = a.return)) throw Error(i(341));
                                                s.lanes |= n, null !== (l = s.alternate) && (l.lanes |= n), _i(s, n, t), s = a.sibling
                                            } else s = a.child;
                                            if (null !== s) s.return = a;
                                            else
                                                for (s = a; null !== s;) {
                                                    if (s === t) {
                                                        s = null;
                                                        break
                                                    }
                                                    if (null !== (a = s.sibling)) {
                                                        a.return = s.return, s = a;
                                                        break
                                                    }
                                                    s = s.return
                                                }
                                            a = s
                                        }
                                ws(e, t, o.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return o = t.type, r = t.pendingProps.children, Fi(t, n), r = r(o = Ri(o)), t.flags |= 1, ws(e, t, r, n), t.child;
                        case 14:
                            return o = ns(r = t.type, t.pendingProps), Ss(e, t, r, o = ns(r.type, o), n);
                        case 15:
                            return Es(e, t, t.type, t.pendingProps, n);
                        case 17:
                            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : ns(r, o), Hs(e, t), t.tag = 1, Lo(r) ? (e = !0, No(t)) : e = !1, Fi(t, n), as(t, r, o), ls(t, r, o, n), Ps(null, t, r, !0, e, n);
                        case 19:
                            return Us(e, t, n);
                        case 22:
                            return ks(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                };
                var Yu = "function" === typeof reportError ? reportError : function(e) {
                    console.error(e)
                };

                function qu(e) {
                    this._internalRoot = e
                }

                function Qu(e) {
                    this._internalRoot = e
                }

                function Gu(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
                }

                function Xu(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Zu() {}

                function Ju(e, t, n, r, o) {
                    var i = n._reactRootContainer;
                    if (i) {
                        var a = i;
                        if ("function" === typeof o) {
                            var s = o;
                            o = function() {
                                var e = Wu(a);
                                s.call(e)
                            }
                        }
                        Hu(t, a, e, o)
                    } else a = function(e, t, n, r, o) {
                        if (o) {
                            if ("function" === typeof r) {
                                var i = r;
                                r = function() {
                                    var e = Wu(a);
                                    i.call(e)
                                }
                            }
                            var a = Uu(t, r, e, 0, null, !1, 0, "", Zu);
                            return e._reactRootContainer = a, e[mo] = a.current, Ur(8 === e.nodeType ? e.parentNode : e), cu(), a
                        }
                        for (; o = e.lastChild;) e.removeChild(o);
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = Wu(l);
                                s.call(e)
                            }
                        }
                        var l = zu(e, 0, !1, null, 0, !1, 0, "", Zu);
                        return e._reactRootContainer = l, e[mo] = l.current, Ur(8 === e.nodeType ? e.parentNode : e), cu((function() {
                            Hu(t, l, n, r)
                        })), l
                    }(n, t, e, o, r);
                    return Wu(a)
                }
                Qu.prototype.render = qu.prototype.render = function(e) {
                    var t = this._internalRoot;
                    if (null === t) throw Error(i(409));
                    Hu(e, t, null, null)
                }, Qu.prototype.unmount = qu.prototype.unmount = function() {
                    var e = this._internalRoot;
                    if (null !== e) {
                        this._internalRoot = null;
                        var t = e.containerInfo;
                        cu((function() {
                            Hu(null, e, null, null)
                        })), t[mo] = null
                    }
                }, Qu.prototype.unstable_scheduleHydration = function(e) {
                    if (e) {
                        var t = kt();
                        e = {
                            blockedOn: null,
                            target: e,
                            priority: t
                        };
                        for (var n = 0; n < Lt.length && 0 !== t && t < Lt[n].priority; n++);
                        Lt.splice(n, 0, e), 0 === n && Nt(e)
                    }
                }, xt = function(e) {
                    switch (e.tag) {
                        case 3:
                            var t = e.stateNode;
                            if (t.current.memoizedState.isDehydrated) {
                                var n = dt(t.pendingLanes);
                                0 !== n && (yt(t, 1 | n), ru(t, Xe()), 0 === (6 & Pl) && (Ul = Xe() + 500, Ho()))
                            }
                            break;
                        case 13:
                            cu((function() {
                                var t = Oi(e, 1);
                                if (null !== t) {
                                    var n = eu();
                                    nu(t, e, 1, n)
                                }
                            })), Ku(e, 1)
                    }
                }, St = function(e) {
                    if (13 === e.tag) {
                        var t = Oi(e, 134217728);
                        if (null !== t) nu(t, e, 134217728, eu());
                        Ku(e, 134217728)
                    }
                }, Et = function(e) {
                    if (13 === e.tag) {
                        var t = tu(e),
                            n = Oi(e, t);
                        if (null !== n) nu(n, e, t, eu());
                        Ku(e, t)
                    }
                }, kt = function() {
                    return bt
                }, At = function(e, t) {
                    var n = bt;
                    try {
                        return bt = e, t()
                    } finally {
                        bt = n
                    }
                }, Se = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Z(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = So(r);
                                        if (!o) throw Error(i(90));
                                        Y(r), Z(r, o)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ie(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ne(e, !!n.multiple, t, !1)
                    }
                }, Pe = uu, _e = cu;
                var ec = {
                        usingClientEntryPoint: !1,
                        Events: [wo, xo, So, Ce, Te, uu]
                    },
                    tc = {
                        findFiberByHostInstance: bo,
                        bundleType: 0,
                        version: "18.3.1",
                        rendererPackageName: "react-dom"
                    },
                    nc = {
                        bundleType: tc.bundleType,
                        version: tc.version,
                        rendererPackageName: tc.rendererPackageName,
                        rendererConfig: tc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setErrorHandler: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: w.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = $e(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: tc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null,
                        reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var rc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!rc.isDisabled && rc.supportsFiber) try {
                        ot = rc.inject(nc), it = rc
                    } catch (ce) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ec, t.createPortal = function(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!Gu(t)) throw Error(i(200));
                    return function(e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                        return {
                            $$typeof: S,
                            key: null == r ? null : "" + r,
                            children: e,
                            containerInfo: t,
                            implementation: n
                        }
                    }(e, t, null, n)
                }, t.createRoot = function(e, t) {
                    if (!Gu(e)) throw Error(i(299));
                    var n = !1,
                        r = "",
                        o = Yu;
                    return null !== t && void 0 !== t && (!0 === t.unstable_strictMode && (n = !0), void 0 !== t.identifierPrefix && (r = t.identifierPrefix), void 0 !== t.onRecoverableError && (o = t.onRecoverableError)), t = zu(e, 1, !1, null, 0, n, 0, r, o), e[mo] = t.current, Ur(8 === e.nodeType ? e.parentNode : e), new qu(t)
                }, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw e = Object.keys(e).join(","), Error(i(268, e))
                    }
                    return e = null === (e = $e(t)) ? null : e.stateNode
                }, t.flushSync = function(e) {
                    return cu(e)
                }, t.hydrate = function(e, t, n) {
                    if (!Xu(t)) throw Error(i(200));
                    return Ju(null, e, t, !0, n)
                }, t.hydrateRoot = function(e, t, n) {
                    if (!Gu(e)) throw Error(i(405));
                    var r = null != n && n.hydratedSources || null,
                        o = !1,
                        a = "",
                        s = Yu;
                    if (null !== n && void 0 !== n && (!0 === n.unstable_strictMode && (o = !0), void 0 !== n.identifierPrefix && (a = n.identifierPrefix), void 0 !== n.onRecoverableError && (s = n.onRecoverableError)), t = Uu(t, null, e, 1, null != n ? n : null, o, 0, a, s), e[mo] = t.current, Ur(e), r)
                        for (e = 0; e < r.length; e++) o = (o = (n = r[e])._getVersion)(n._source), null == t.mutableSourceEagerHydrationData ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
                    return new Qu(t)
                }, t.render = function(e, t, n) {
                    if (!Xu(t)) throw Error(i(200));
                    return Ju(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!Xu(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (cu((function() {
                        Ju(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[mo] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = uu, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!Xu(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return Ju(e, t, n, !1, r)
                }, t.version = "18.3.1-next-f1338f8080-20240426"
            },
            2740: e => {
                "use strict";
                e.exports = function(e, t, n, r, o, i, a, s) {
                    if (!e) {
                        var l;
                        if (void 0 === t) l = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                        else {
                            var u = [n, r, o, i, a, s],
                                c = 0;
                            (l = new Error(t.replace(/%s/g, (function() {
                                return u[c++]
                            })))).name = "Invariant Violation"
                        }
                        throw l.framesToPop = 1, l
                    }
                }
            },
            3175: (e, t) => {
                "use strict";
                const n = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
                    r = /^[\u0021-\u003A\u003C-\u007E]*$/,
                    o = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
                    i = /^[\u0020-\u003A\u003D-\u007E]*$/,
                    a = Object.prototype.toString,
                    s = (() => {
                        const e = function() {};
                        return e.prototype = Object.create(null), e
                    })();

                function l(e, t, n) {
                    do {
                        const n = e.charCodeAt(t);
                        if (32 !== n && 9 !== n) return t
                    } while (++t < n);
                    return n
                }

                function u(e, t, n) {
                    for (; t > n;) {
                        const n = e.charCodeAt(--t);
                        if (32 !== n && 9 !== n) return t + 1
                    }
                    return n
                }

                function c(e) {
                    if (-1 === e.indexOf("%")) return e;
                    try {
                        return decodeURIComponent(e)
                    } catch (t) {
                        return e
                    }
                }
            },
            4202: (e, t) => {
                "use strict";
                var n = Symbol.for("react.element"),
                    r = Symbol.for("react.portal"),
                    o = Symbol.for("react.fragment"),
                    i = Symbol.for("react.strict_mode"),
                    a = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    u = Symbol.for("react.forward_ref"),
                    c = Symbol.for("react.suspense"),
                    d = Symbol.for("react.memo"),
                    f = Symbol.for("react.lazy"),
                    h = Symbol.iterator;
                var p = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = Object.assign,
                    v = {};

                function g(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || p
                }

                function y() {}

                function b(e, t, n) {
                    this.props = e, this.context = t, this.refs = v, this.updater = n || p
                }
                g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, g.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, y.prototype = g.prototype;
                var w = b.prototype = new y;
                w.constructor = b, m(w, g.prototype), w.isPureReactComponent = !0;
                var x = Array.isArray,
                    S = Object.prototype.hasOwnProperty,
                    E = {
                        current: null
                    },
                    k = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function A(e, t, r) {
                    var o, i = {},
                        a = null,
                        s = null;
                    if (null != t)
                        for (o in void 0 !== t.ref && (s = t.ref), void 0 !== t.key && (a = "" + t.key), t) S.call(t, o) && !k.hasOwnProperty(o) && (i[o] = t[o]);
                    var l = arguments.length - 2;
                    if (1 === l) i.children = r;
                    else if (1 < l) {
                        for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                        i.children = u
                    }
                    if (e && e.defaultProps)
                        for (o in l = e.defaultProps) void 0 === i[o] && (i[o] = l[o]);
                    return {
                        $$typeof: n,
                        type: e,
                        key: a,
                        ref: s,
                        props: i,
                        _owner: E.current
                    }
                }

                function C(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === n
                }
                var T = /\/+/g;

                function P(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function _(e, t, o, i, a) {
                    var s = typeof e;
                    "undefined" !== s && "boolean" !== s || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (s) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case n:
                                case r:
                                    l = !0
                            }
                    }
                    if (l) return a = a(l = e), e = "" === i ? "." + P(l, 0) : i, x(a) ? (o = "", null != e && (o = e.replace(T, "$&/") + "/"), _(a, t, o, "", (function(e) {
                        return e
                    }))) : null != a && (C(a) && (a = function(e, t) {
                        return {
                            $$typeof: n,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(a, o + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(T, "$&/") + "/") + e)), t.push(a)), 1;
                    if (l = 0, i = "" === i ? "." : i + ":", x(e))
                        for (var u = 0; u < e.length; u++) {
                            var c = i + P(s = e[u], u);
                            l += _(s, t, o, c, a)
                        } else if (c = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = h && e[h] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof c)
                            for (e = c.call(e), u = 0; !(s = e.next()).done;) l += _(s = s.value, t, o, c = i + P(s, u++), a);
                        else if ("object" === s) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                    return l
                }

                function F(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        o = 0;
                    return _(e, r, "", "", (function(e) {
                        return t.call(n, e, o++)
                    })), r
                }

                function R(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        (t = t()).then((function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                        }), (function(t) {
                            0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                        })), -1 === e._status && (e._status = 0, e._result = t)
                    }
                    if (1 === e._status) return e._result.default;
                    throw e._result
                }
                var D = {
                        current: null
                    },
                    L = {
                        transition: null
                    },
                    M = {
                        ReactCurrentDispatcher: D,
                        ReactCurrentBatchConfig: L,
                        ReactCurrentOwner: E
                    };

                function O() {
                    throw Error("act(...) is not supported in production builds of React.")
                }
                t.Children = {
                    map: F,
                    forEach: function(e, t, n) {
                        F(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return F(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return F(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                        return e
                    }
                }, t.Component = g, t.Fragment = o, t.Profiler = a, t.PureComponent = b, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = M, t.act = O, t.cloneElement = function(e, t, r) {
                    if (null === e || void 0 === e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                    var o = m({}, e.props),
                        i = e.key,
                        a = e.ref,
                        s = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (a = t.ref, s = E.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                        for (u in t) S.call(t, u) && !k.hasOwnProperty(u) && (o[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                    }
                    var u = arguments.length - 2;
                    if (1 === u) o.children = r;
                    else if (1 < u) {
                        l = Array(u);
                        for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                        o.children = l
                    }
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: i,
                        ref: a,
                        props: o,
                        _owner: s
                    }
                }, t.createContext = function(e) {
                    return (e = {
                        $$typeof: l,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null,
                        _defaultValue: null,
                        _globalName: null
                    }).Provider = {
                        $$typeof: s,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = A, t.createFactory = function(e) {
                    var t = A.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: u,
                        render: e
                    }
                }, t.isValidElement = C, t.lazy = function(e) {
                    return {
                        $$typeof: f,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: R
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: d,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.startTransition = function(e) {
                    var t = L.transition;
                    L.transition = {};
                    try {
                        e()
                    } finally {
                        L.transition = t
                    }
                }, t.unstable_act = O, t.useCallback = function(e, t) {
                    return D.current.useCallback(e, t)
                }, t.useContext = function(e) {
                    return D.current.useContext(e)
                }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                    return D.current.useDeferredValue(e)
                }, t.useEffect = function(e, t) {
                    return D.current.useEffect(e, t)
                }, t.useId = function() {
                    return D.current.useId()
                }, t.useImperativeHandle = function(e, t, n) {
                    return D.current.useImperativeHandle(e, t, n)
                }, t.useInsertionEffect = function(e, t) {
                    return D.current.useInsertionEffect(e, t)
                }, t.useLayoutEffect = function(e, t) {
                    return D.current.useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return D.current.useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return D.current.useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return D.current.useRef(e)
                }, t.useState = function(e) {
                    return D.current.useState(e)
                }, t.useSyncExternalStore = function(e, t, n) {
                    return D.current.useSyncExternalStore(e, t, n)
                }, t.useTransition = function() {
                    return D.current.useTransition()
                }, t.version = "18.3.1"
            },
            4391: (e, t, n) => {
                "use strict";
                var r = n(7950);
                t.createRoot = r.createRoot, t.hydrateRoot = r.hydrateRoot
            },
            4467: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var r = n(9526);

                function o(e, t, n) {
                    return (t = (0, r.A)(t)) in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }
            },
            4475: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => o
                });
                var r = n(579);

                function o(e) {
                    let {
                        children: t,
                        className: n = "",
                        colors: o = ["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"],
                        animationSpeed: i = 8,
                        showBorder: a = !1
                    } = e;
                    const s = {
                        backgroundImage: "linear-gradient(to right, ".concat(o.join(", "), ")"),
                        animationDuration: "".concat(i, "s")
                    };
                    return (0, r.jsxs)("div", {
                        className: "animated-gradient-text ".concat(n),
                        children: [a && (0, r.jsx)("div", {
                            className: "gradient-overlay",
                            style: s
                        }), (0, r.jsx)("div", {
                            className: "text-content",
                            style: s,
                            children: t
                        })]
                    })
                }
            },
            4735: (e, t, n) => {
                "use strict";
                n.d(t, {
                    B: () => r
                });
                const r = "undefined" !== typeof window
            },
            4930: (e, t, n) => {
                "use strict";
                n.d(t, {
                    M: () => o
                });
                var r = n(5043);

                function o(e) {
                    const t = (0, r.useRef)(null);
                    return null === t.current && (t.current = e()), t.current
                }
            },
            5043: (e, t, n) => {
                "use strict";
                e.exports = n(4202)
            },
            5627: (e, t, n) => {
                "use strict";
                n.d(t, {
                    e: () => s,
                    n: () => a
                });
                var r = n(5043),
                    o = n(1675);
                let i = 0;
                const a = () => {
                        (0, r.useEffect)((() => {
                            i += 1;
                            const e = document.body,
                                t = e.scrollHeight > window.innerHeight;
                            return 1 === i && (e.style.overflow = "hidden", t && (e.style.paddingRight = "17px")), () => {
                                i -= 1, 0 === i && (e.style.overflow = "auto", e.style.paddingRight = "0")
                            }
                        }), [])
                    },
                    s = () => {
                        const {
                            pathname: e
                        } = (0, o.zy)();
                        return (0, r.useEffect)((() => {
                            window.scrollTo(0, 0)
                        }), [e]), null
                    }
            },
            6366: e => {
                var t = "undefined" !== typeof Element,
                    n = "function" === typeof Map,
                    r = "function" === typeof Set,
                    o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

                function i(e, a) {
                    if (e === a) return !0;
                    if (e && a && "object" == typeof e && "object" == typeof a) {
                        if (e.constructor !== a.constructor) return !1;
                        var s, l, u, c;
                        if (Array.isArray(e)) {
                            if ((s = e.length) != a.length) return !1;
                            for (l = s; 0 !== l--;)
                                if (!i(e[l], a[l])) return !1;
                            return !0
                        }
                        if (n && e instanceof Map && a instanceof Map) {
                            if (e.size !== a.size) return !1;
                            for (c = e.entries(); !(l = c.next()).done;)
                                if (!a.has(l.value[0])) return !1;
                            for (c = e.entries(); !(l = c.next()).done;)
                                if (!i(l.value[1], a.get(l.value[0]))) return !1;
                            return !0
                        }
                        if (r && e instanceof Set && a instanceof Set) {
                            if (e.size !== a.size) return !1;
                            for (c = e.entries(); !(l = c.next()).done;)
                                if (!a.has(l.value[0])) return !1;
                            return !0
                        }
                        if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                            if ((s = e.length) != a.length) return !1;
                            for (l = s; 0 !== l--;)
                                if (e[l] !== a[l]) return !1;
                            return !0
                        }
                        if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                        if (e.valueOf !== Object.prototype.valueOf && "function" === typeof e.valueOf && "function" === typeof a.valueOf) return e.valueOf() === a.valueOf();
                        if (e.toString !== Object.prototype.toString && "function" === typeof e.toString && "function" === typeof a.toString) return e.toString() === a.toString();
                        if ((s = (u = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                        for (l = s; 0 !== l--;)
                            if (!Object.prototype.hasOwnProperty.call(a, u[l])) return !1;
                        if (t && e instanceof Element) return !1;
                        for (l = s; 0 !== l--;)
                            if (("_owner" !== u[l] && "__v" !== u[l] && "__o" !== u[l] || !e.$$typeof) && !i(e[u[l]], a[u[l]])) return !1;
                        return !0
                    }
                    return e !== e && a !== a
                }
                e.exports = function(e, t) {
                    try {
                        return i(e, t)
                    } catch (n) {
                        if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                        throw n
                    }
                }
            },
            7234: (e, t) => {
                "use strict";

                function n(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (; 0 < n;) {
                        var r = n - 1 >>> 1,
                            o = e[r];
                        if (!(0 < i(o, t))) break e;
                        e[r] = t, e[n] = o, n = r
                    }
                }

                function r(e) {
                    return 0 === e.length ? null : e[0]
                }

                function o(e) {
                    if (0 === e.length) return null;
                    var t = e[0],
                        n = e.pop();
                    if (n !== t) {
                        e[0] = n;
                        e: for (var r = 0, o = e.length, a = o >>> 1; r < a;) {
                            var s = 2 * (r + 1) - 1,
                                l = e[s],
                                u = s + 1,
                                c = e[u];
                            if (0 > i(l, n)) u < o && 0 > i(c, l) ? (e[r] = c, e[u] = n, r = u) : (e[r] = l, e[s] = n, r = s);
                            else {
                                if (!(u < o && 0 > i(c, n))) break e;
                                e[r] = c, e[u] = n, r = u
                            }
                        }
                    }
                    return t
                }

                function i(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var a = performance;
                    t.unstable_now = function() {
                        return a.now()
                    }
                } else {
                    var s = Date,
                        l = s.now();
                    t.unstable_now = function() {
                        return s.now() - l
                    }
                }
                var u = [],
                    c = [],
                    d = 1,
                    f = null,
                    h = 3,
                    p = !1,
                    m = !1,
                    v = !1,
                    g = "function" === typeof setTimeout ? setTimeout : null,
                    y = "function" === typeof clearTimeout ? clearTimeout : null,
                    b = "undefined" !== typeof setImmediate ? setImmediate : null;

                function w(e) {
                    for (var t = r(c); null !== t;) {
                        if (null === t.callback) o(c);
                        else {
                            if (!(t.startTime <= e)) break;
                            o(c), t.sortIndex = t.expirationTime, n(u, t)
                        }
                        t = r(c)
                    }
                }

                function x(e) {
                    if (v = !1, w(e), !m)
                        if (null !== r(u)) m = !0, L(S);
                        else {
                            var t = r(c);
                            null !== t && M(x, t.startTime - e)
                        }
                }

                function S(e, n) {
                    m = !1, v && (v = !1, y(C), C = -1), p = !0;
                    var i = h;
                    try {
                        for (w(n), f = r(u); null !== f && (!(f.expirationTime > n) || e && !_());) {
                            var a = f.callback;
                            if ("function" === typeof a) {
                                f.callback = null, h = f.priorityLevel;
                                var s = a(f.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof s ? f.callback = s : f === r(u) && o(u), w(n)
                            } else o(u);
                            f = r(u)
                        }
                        if (null !== f) var l = !0;
                        else {
                            var d = r(c);
                            null !== d && M(x, d.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        f = null, h = i, p = !1
                    }
                }
                "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
                var E, k = !1,
                    A = null,
                    C = -1,
                    T = 5,
                    P = -1;

                function _() {
                    return !(t.unstable_now() - P < T)
                }

                function F() {
                    if (null !== A) {
                        var e = t.unstable_now();
                        P = e;
                        var n = !0;
                        try {
                            n = A(!0, e)
                        } finally {
                            n ? E() : (k = !1, A = null)
                        }
                    } else k = !1
                }
                if ("function" === typeof b) E = function() {
                    b(F)
                };
                else if ("undefined" !== typeof MessageChannel) {
                    var R = new MessageChannel,
                        D = R.port2;
                    R.port1.onmessage = F, E = function() {
                        D.postMessage(null)
                    }
                } else E = function() {
                    g(F, 0)
                };

                function L(e) {
                    A = e, k || (k = !0, E())
                }

                function M(e, n) {
                    C = g((function() {
                        e(t.unstable_now())
                    }), n)
                }
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    m || p || (m = !0, L(S))
                }, t.unstable_forceFrameRate = function(e) {
                    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return h
                }, t.unstable_getFirstCallbackNode = function() {
                    return r(u)
                }, t.unstable_next = function(e) {
                    switch (h) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = h
                    }
                    var n = h;
                    h = t;
                    try {
                        return e()
                    } finally {
                        h = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = function() {}, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = h;
                    h = e;
                    try {
                        return t()
                    } finally {
                        h = n
                    }
                }, t.unstable_scheduleCallback = function(e, o, i) {
                    var a = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? a + i : a : i = a, e) {
                        case 1:
                            var s = -1;
                            break;
                        case 2:
                            s = 250;
                            break;
                        case 5:
                            s = 1073741823;
                            break;
                        case 4:
                            s = 1e4;
                            break;
                        default:
                            s = 5e3
                    }
                    return e = {
                        id: d++,
                        callback: o,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: s = i + s,
                        sortIndex: -1
                    }, i > a ? (e.sortIndex = i, n(c, e), null === r(u) && e === r(c) && (v ? (y(C), C = -1) : v = !0, M(x, i - a))) : (e.sortIndex = s, n(u, e), m || p || (m = !0, L(S))), e
                }, t.unstable_shouldYield = _, t.unstable_wrapCallback = function(e) {
                    var t = h;
                    return function() {
                        var n = h;
                        h = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            h = n
                        }
                    }
                }
            },
            7324: e => {
                e.exports = function(e, t, n, r) {
                    var o = n ? n.call(r, e, t) : void 0;
                    if (void 0 !== o) return !!o;
                    if (e === t) return !0;
                    if ("object" !== typeof e || !e || "object" !== typeof t || !t) return !1;
                    var i = Object.keys(e),
                        a = Object.keys(t);
                    if (i.length !== a.length) return !1;
                    for (var s = Object.prototype.hasOwnProperty.bind(t), l = 0; l < i.length; l++) {
                        var u = i[l];
                        if (!s(u)) return !1;
                        var c = e[u],
                            d = t[u];
                        if (!1 === (o = n ? n.call(r, c, d, u) : void 0) || void 0 === o && c !== d) return !1
                    }
                    return !0
                }
            },
            7937: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => i
                });
                n(5043);
                var r = n(117),
                    o = n(579);

                function i(e) {
                    let {
                        children: t,
                        fromY: n = 50,
                        toY: i = 0,
                        fromOpacity: a = 0,
                        toOpacity: s = 1,
                        duration: l = .5,
                        ease: u = "easeInOut",
                        delay: c = 0
                    } = e;
                    return (0, o.jsx)(r.P.div, {
                        initial: {
                            y: n,
                            opacity: a
                        },
                        animate: {
                            y: i,
                            opacity: s
                        },
                        transition: {
                            duration: l,
                            ease: u,
                            delay: "undefined" !== typeof window && window.innerWidth < 768 ? Math.min(c, .1) : c
                        },
                        children: t
                    })
                }
            },
            7950: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(2730)
            },
            8587: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    if (null == e) return {};
                    var n = {};
                    for (var r in e)
                        if ({}.hasOwnProperty.call(e, r)) {
                            if (-1 !== t.indexOf(r)) continue;
                            n[r] = e[r]
                        }
                    return n
                }
                n.d(t, {
                    A: () => r
                })
            },
            8853: (e, t, n) => {
                "use strict";
                e.exports = n(7234)
            },
            8917: (e, t, n) => {
                "use strict";
                n.d(t, {
                    xQ: () => i
                });
                var r = n(5043),
                    o = n(9674);

                function i() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    const t = (0, r.useContext)(o.t);
                    if (null === t) return [!0, null];
                    const {
                        isPresent: n,
                        onExitComplete: i,
                        register: a
                    } = t, s = (0, r.useId)();
                    (0, r.useEffect)((() => {
                        e && a(s)
                    }), [e]);
                    const l = (0, r.useCallback)((() => e && i && i(s)), [s, i, e]);
                    return !n && i ? [!1, l] : [!0]
                }
            },
            9367: (e, t, n) => {
                "use strict";
                n.d(t, {
                    mg: () => ie,
                    vd: () => Z
                });
                var r = n(45),
                    o = n(4467),
                    i = n(9379),
                    a = n(5043),
                    s = n(6366),
                    l = n.n(s),
                    u = n(2740),
                    c = n.n(u),
                    d = n(7324),
                    f = n.n(d);
                const h = ["children"],
                    p = ["children"];
                var m, v, g = (e => (e.BASE = "base", e.BODY = "body", e.HEAD = "head", e.HTML = "html", e.LINK = "link", e.META = "meta", e.NOSCRIPT = "noscript", e.SCRIPT = "script", e.STYLE = "style", e.TITLE = "title", e.FRAGMENT = "Symbol(react.fragment)", e))(g || {}),
                    y = {
                        rel: ["amphtml", "canonical", "alternate"]
                    },
                    b = {
                        type: ["application/ld+json"]
                    },
                    w = {
                        charset: "",
                        name: ["generator", "robots", "description"],
                        property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"]
                    },
                    x = Object.values(g),
                    S = {
                        accesskey: "accessKey",
                        charset: "charSet",
                        class: "className",
                        contenteditable: "contentEditable",
                        contextmenu: "contextMenu",
                        "http-equiv": "httpEquiv",
                        itemprop: "itemProp",
                        tabindex: "tabIndex"
                    },
                    E = Object.entries(S).reduce(((e, t) => {
                        let [n, r] = t;
                        return e[r] = n, e
                    }), {}),
                    k = "data-rh",
                    A = "defaultTitle",
                    C = "defer",
                    T = "encodeSpecialCharacters",
                    P = "onChangeClientState",
                    _ = "titleTemplate",
                    F = "prioritizeSeoTags",
                    R = (e, t) => {
                        for (let n = e.length - 1; n >= 0; n -= 1) {
                            const r = e[n];
                            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t]
                        }
                        return null
                    },
                    D = e => {
                        let t = R(e, "title");
                        const n = R(e, _);
                        if (Array.isArray(t) && (t = t.join("")), n && t) return n.replace(/%s/g, (() => t));
                        const r = R(e, A);
                        return t || r || void 0
                    },
                    L = e => R(e, P) || (() => {}),
                    M = (e, t) => t.filter((t => "undefined" !== typeof t[e])).map((t => t[e])).reduce(((e, t) => (0, i.A)((0, i.A)({}, e), t)), {}),
                    O = (e, t) => t.filter((e => "undefined" !== typeof e.base)).map((e => e.base)).reverse().reduce(((t, n) => {
                        if (!t.length) {
                            const r = Object.keys(n);
                            for (let o = 0; o < r.length; o += 1) {
                                const i = r[o].toLowerCase();
                                if (-1 !== e.indexOf(i) && n[i]) return t.concat(n)
                            }
                        }
                        return t
                    }), []),
                    j = (e, t, n) => {
                        const r = {};
                        return n.filter((t => {
                            return !!Array.isArray(t[e]) || ("undefined" !== typeof t[e] && (n = "Helmet: ".concat(e, ' should be of type "Array". Instead found type "').concat(typeof t[e], '"'), console && "function" === typeof console.warn && console.warn(n)), !1);
                            var n
                        })).map((t => t[e])).reverse().reduce(((e, n) => {
                            const o = {};
                            n.filter((e => {
                                let n;
                                const i = Object.keys(e);
                                for (let r = 0; r < i.length; r += 1) {
                                    const o = i[r],
                                        a = o.toLowerCase(); - 1 === t.indexOf(a) || "rel" === n && "canonical" === e[n].toLowerCase() || "rel" === a && "stylesheet" === e[a].toLowerCase() || (n = a), -1 === t.indexOf(o) || "innerHTML" !== o && "cssText" !== o && "itemprop" !== o || (n = o)
                                }
                                if (!n || !e[n]) return !1;
                                const a = e[n].toLowerCase();
                                return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][a] && (o[n][a] = !0, !0)
                            })).reverse().forEach((t => e.push(t)));
                            const a = Object.keys(o);
                            for (let t = 0; t < a.length; t += 1) {
                                const e = a[t],
                                    n = (0, i.A)((0, i.A)({}, r[e]), o[e]);
                                r[e] = n
                            }
                            return e
                        }), []).reverse()
                    },
                    N = (e, t) => {
                        if (Array.isArray(e) && e.length)
                            for (let n = 0; n < e.length; n += 1) {
                                if (e[n][t]) return !0
                            }
                        return !1
                    },
                    V = e => Array.isArray(e) ? e.join("") : e,
                    I = (e, t) => Array.isArray(e) ? e.reduce(((e, n) => (((e, t) => {
                        const n = Object.keys(e);
                        for (let r = 0; r < n.length; r += 1)
                            if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                        return !1
                    })(n, t) ? e.priority.push(n) : e.default.push(n), e)), {
                        priority: [],
                        default: []
                    }) : {
                        default: e,
                        priority: []
                    },
                    z = (e, t) => (0, i.A)((0, i.A)({}, e), {}, {
                        [t]: void 0
                    }),
                    B = ["noscript", "script", "style"],
                    U = function(e) {
                        return !1 === (!(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]) ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;")
                    },
                    H = e => Object.keys(e).reduce(((t, n) => {
                        const r = "undefined" !== typeof e[n] ? "".concat(n, '="').concat(e[n], '"') : "".concat(n);
                        return t ? "".concat(t, " ").concat(r) : r
                    }), ""),
                    W = function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce(((t, n) => (t[S[n] || n] = e[n], t)), t)
                    },
                    $ = (e, t) => t.map(((t, n) => {
                        const r = {
                            key: n,
                            [k]: !0
                        };
                        return Object.keys(t).forEach((e => {
                            const n = S[e] || e;
                            if ("innerHTML" === n || "cssText" === n) {
                                const e = t.innerHTML || t.cssText;
                                r.dangerouslySetInnerHTML = {
                                    __html: e
                                }
                            } else r[n] = t[e]
                        })), a.createElement(e, r)
                    })),
                    K = function(e, t) {
                        let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                        switch (e) {
                            case "title":
                                return {
                                    toComponent: () => ((e, t, n) => {
                                        const r = W(n, {
                                            key: t,
                                            [k]: !0
                                        });
                                        return [a.createElement("title", r, t)]
                                    })(0, t.title, t.titleAttributes),
                                    toString: () => ((e, t, n, r) => {
                                        const o = H(n),
                                            i = V(t);
                                        return o ? "<".concat(e, " ").concat(k, '="true" ').concat(o, ">").concat(U(i, r), "</").concat(e, ">") : "<".concat(e, " ").concat(k, '="true">').concat(U(i, r), "</").concat(e, ">")
                                    })(e, t.title, t.titleAttributes, n)
                                };
                            case "bodyAttributes":
                            case "htmlAttributes":
                                return {
                                    toComponent: () => W(t),
                                    toString: () => H(t)
                                };
                            default:
                                return {
                                    toComponent: () => $(e, t),
                                    toString: () => function(e, t) {
                                        let n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                                        return t.reduce(((t, r) => {
                                            const o = r,
                                                i = Object.keys(o).filter((e => !("innerHTML" === e || "cssText" === e))).reduce(((e, t) => {
                                                    const r = "undefined" === typeof o[t] ? t : "".concat(t, '="').concat(U(o[t], n), '"');
                                                    return e ? "".concat(e, " ").concat(r) : r
                                                }), ""),
                                                a = o.innerHTML || o.cssText || "",
                                                s = -1 === B.indexOf(e);
                                            return "".concat(t, "<").concat(e, " ").concat(k, '="true" ').concat(i).concat(s ? "/>" : ">".concat(a, "</").concat(e, ">"))
                                        }), "")
                                    }(e, t, n)
                                }
                        }
                    },
                    Y = e => {
                        const {
                            baseTag: t,
                            bodyAttributes: n,
                            encode: r = !0,
                            htmlAttributes: o,
                            noscriptTags: i,
                            styleTags: a,
                            title: s = "",
                            titleAttributes: l,
                            prioritizeSeoTags: u
                        } = e;
                        let {
                            linkTags: c,
                            metaTags: d,
                            scriptTags: f
                        } = e, h = {
                            toComponent: () => {},
                            toString: () => ""
                        };
                        return u && ({
                            priorityMethods: h,
                            linkTags: c,
                            metaTags: d,
                            scriptTags: f
                        } = (e => {
                            let {
                                metaTags: t,
                                linkTags: n,
                                scriptTags: r,
                                encode: o
                            } = e;
                            const i = I(t, w),
                                a = I(n, y),
                                s = I(r, b);
                            return {
                                priorityMethods: {
                                    toComponent: () => [...$("meta", i.priority), ...$("link", a.priority), ...$("script", s.priority)],
                                    toString: () => "".concat(K("meta", i.priority, o), " ").concat(K("link", a.priority, o), " ").concat(K("script", s.priority, o))
                                },
                                metaTags: i.default,
                                linkTags: a.default,
                                scriptTags: s.default
                            }
                        })(e)), {
                            priority: h,
                            base: K("base", t, r),
                            bodyAttributes: K("bodyAttributes", n, r),
                            htmlAttributes: K("htmlAttributes", o, r),
                            link: K("link", c, r),
                            meta: K("meta", d, r),
                            noscript: K("noscript", i, r),
                            script: K("script", f, r),
                            style: K("style", a, r),
                            title: K("title", {
                                title: s,
                                titleAttributes: l
                            }, r)
                        }
                    },
                    q = [],
                    Q = !("undefined" === typeof window || !window.document || !window.document.createElement),
                    G = class {
                        constructor(e, t) {
                            (0, o.A)(this, "instances", []), (0, o.A)(this, "canUseDOM", Q), (0, o.A)(this, "context", void 0), (0, o.A)(this, "value", {
                                setHelmet: e => {
                                    this.context.helmet = e
                                },
                                helmetInstances: {
                                    get: () => this.canUseDOM ? q : this.instances,
                                    add: e => {
                                        (this.canUseDOM ? q : this.instances).push(e)
                                    },
                                    remove: e => {
                                        const t = (this.canUseDOM ? q : this.instances).indexOf(e);
                                        (this.canUseDOM ? q : this.instances).splice(t, 1)
                                    }
                                }
                            }), this.context = e, this.canUseDOM = t || !1, t || (e.helmet = Y({
                                baseTag: [],
                                bodyAttributes: {},
                                encodeSpecialCharacters: !0,
                                htmlAttributes: {},
                                linkTags: [],
                                metaTags: [],
                                noscriptTags: [],
                                scriptTags: [],
                                styleTags: [],
                                title: "",
                                titleAttributes: {}
                            }))
                        }
                    },
                    X = a.createContext({}),
                    Z = (m = class e extends a.Component {
                        constructor(t) {
                            super(t), (0, o.A)(this, "helmetData", void 0), this.helmetData = new G(this.props.context || {}, e.canUseDOM)
                        }
                        render() {
                            return a.createElement(X.Provider, {
                                value: this.helmetData.value
                            }, this.props.children)
                        }
                    }, (0, o.A)(m, "canUseDOM", Q), m),
                    J = (e, t) => {
                        const n = document.head || document.querySelector("head"),
                            r = n.querySelectorAll("".concat(e, "[").concat(k, "]")),
                            o = [].slice.call(r),
                            i = [];
                        let a;
                        return t && t.length && t.forEach((t => {
                            const n = document.createElement(e);
                            for (const e in t)
                                if (Object.prototype.hasOwnProperty.call(t, e))
                                    if ("innerHTML" === e) n.innerHTML = t.innerHTML;
                                    else if ("cssText" === e) n.styleSheet ? n.styleSheet.cssText = t.cssText : n.appendChild(document.createTextNode(t.cssText));
                            else {
                                const r = e,
                                    o = "undefined" === typeof t[r] ? "" : t[r];
                                n.setAttribute(e, o)
                            }
                            n.setAttribute(k, "true"), o.some(((e, t) => (a = t, n.isEqualNode(e)))) ? o.splice(a, 1) : i.push(n)
                        })), o.forEach((e => {
                            var t;
                            return null === (t = e.parentNode) || void 0 === t ? void 0 : t.removeChild(e)
                        })), i.forEach((e => n.appendChild(e))), {
                            oldTags: o,
                            newTags: i
                        }
                    },
                    ee = (e, t) => {
                        const n = document.getElementsByTagName(e)[0];
                        if (!n) return;
                        const r = n.getAttribute(k),
                            o = r ? r.split(",") : [],
                            i = [...o],
                            a = Object.keys(t);
                        for (const s of a) {
                            const e = t[s] || "";
                            n.getAttribute(s) !== e && n.setAttribute(s, e), -1 === o.indexOf(s) && o.push(s);
                            const r = i.indexOf(s); - 1 !== r && i.splice(r, 1)
                        }
                        for (let s = i.length - 1; s >= 0; s -= 1) n.removeAttribute(i[s]);
                        o.length === i.length ? n.removeAttribute(k) : n.getAttribute(k) !== a.join(",") && n.setAttribute(k, a.join(","))
                    },
                    te = (e, t) => {
                        const {
                            baseTag: n,
                            bodyAttributes: r,
                            htmlAttributes: o,
                            linkTags: i,
                            metaTags: a,
                            noscriptTags: s,
                            onChangeClientState: l,
                            scriptTags: u,
                            styleTags: c,
                            title: d,
                            titleAttributes: f
                        } = e;
                        ee("body", r), ee("html", o), ((e, t) => {
                            "undefined" !== typeof e && document.title !== e && (document.title = V(e)), ee("title", t)
                        })(d, f);
                        const h = {
                                baseTag: J("base", n),
                                linkTags: J("link", i),
                                metaTags: J("meta", a),
                                noscriptTags: J("noscript", s),
                                scriptTags: J("script", u),
                                styleTags: J("style", c)
                            },
                            p = {},
                            m = {};
                        Object.keys(h).forEach((e => {
                            const {
                                newTags: t,
                                oldTags: n
                            } = h[e];
                            t.length && (p[e] = t), n.length && (m[e] = h[e].oldTags)
                        })), t && t(), l(e, p, m)
                    },
                    ne = null,
                    re = e => {
                        ne && cancelAnimationFrame(ne), e.defer ? ne = requestAnimationFrame((() => {
                            te(e, (() => {
                                ne = null
                            }))
                        })) : (te(e), ne = null)
                    },
                    oe = class extends a.Component {
                        constructor() {
                            super(...arguments), (0, o.A)(this, "rendered", !1)
                        }
                        shouldComponentUpdate(e) {
                            return !f()(e, this.props)
                        }
                        componentDidUpdate() {
                            this.emitChange()
                        }
                        componentWillUnmount() {
                            const {
                                helmetInstances: e
                            } = this.props.context;
                            e.remove(this), this.emitChange()
                        }
                        emitChange() {
                            const {
                                helmetInstances: e,
                                setHelmet: t
                            } = this.props.context;
                            let n = null;
                            const r = (o = e.get().map((e => {
                                const t = (0, i.A)({}, e.props);
                                return delete t.context, t
                            })), {
                                baseTag: O(["href"], o),
                                bodyAttributes: M("bodyAttributes", o),
                                defer: R(o, C),
                                encode: R(o, T),
                                htmlAttributes: M("htmlAttributes", o),
                                linkTags: j("link", ["rel", "href"], o),
                                metaTags: j("meta", ["name", "charset", "http-equiv", "property", "itemprop"], o),
                                noscriptTags: j("noscript", ["innerHTML"], o),
                                onChangeClientState: L(o),
                                scriptTags: j("script", ["src", "innerHTML"], o),
                                styleTags: j("style", ["cssText"], o),
                                title: D(o),
                                titleAttributes: M("titleAttributes", o),
                                prioritizeSeoTags: N(o, F)
                            });
                            var o;
                            Z.canUseDOM ? re(r) : Y && (n = Y(r)), t(n)
                        }
                        init() {
                            if (this.rendered) return;
                            this.rendered = !0;
                            const {
                                helmetInstances: e
                            } = this.props.context;
                            e.add(this), this.emitChange()
                        }
                        render() {
                            return this.init(), null
                        }
                    },
                    ie = (v = class extends a.Component {
                        shouldComponentUpdate(e) {
                            return !l()(z(this.props, "helmetData"), z(e, "helmetData"))
                        }
                        mapNestedChildrenToProps(e, t) {
                            if (!t) return null;
                            switch (e.type) {
                                case "script":
                                case "noscript":
                                    return {
                                        innerHTML: t
                                    };
                                case "style":
                                    return {
                                        cssText: t
                                    };
                                default:
                                    throw new Error("<".concat(e.type, " /> elements are self-closing and can not contain children. Refer to our API for more information."))
                            }
                        }
                        flattenArrayTypeChildren(e, t, n, r) {
                            return (0, i.A)((0, i.A)({}, t), {}, {
                                [e.type]: [...t[e.type] || [], (0, i.A)((0, i.A)({}, n), this.mapNestedChildrenToProps(e, r))]
                            })
                        }
                        mapObjectTypeChildren(e, t, n, r) {
                            switch (e.type) {
                                case "title":
                                    return (0, i.A)((0, i.A)({}, t), {}, {
                                        [e.type]: r,
                                        titleAttributes: (0, i.A)({}, n)
                                    });
                                case "body":
                                    return (0, i.A)((0, i.A)({}, t), {}, {
                                        bodyAttributes: (0, i.A)({}, n)
                                    });
                                case "html":
                                    return (0, i.A)((0, i.A)({}, t), {}, {
                                        htmlAttributes: (0, i.A)({}, n)
                                    });
                                default:
                                    return (0, i.A)((0, i.A)({}, t), {}, {
                                        [e.type]: (0, i.A)({}, n)
                                    })
                            }
                        }
                        mapArrayTypeChildrenToProps(e, t) {
                            let n = (0, i.A)({}, t);
                            return Object.keys(e).forEach((t => {
                                n = (0, i.A)((0, i.A)({}, n), {}, {
                                    [t]: e[t]
                                })
                            })), n
                        }
                        warnOnInvalidChildren(e, t) {
                            return c()(x.some((t => e.type === t)), "function" === typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types ".concat(x.join(", "), " are allowed. Helmet does not support rendering <").concat(e.type, "> elements. Refer to our API for more information.")), c()(!t || "string" === typeof t || Array.isArray(t) && !t.some((e => "string" !== typeof e)), "Helmet expects a string as a child of <".concat(e.type, ">. Did you forget to wrap your children in braces? ( <").concat(e.type, ">{``}</").concat(e.type, "> ) Refer to our API for more information.")), !0
                        }
                        mapChildrenToProps(e, t) {
                            let n = {};
                            return a.Children.forEach(e, (e => {
                                if (!e || !e.props) return;
                                const o = e.props,
                                    {
                                        children: i
                                    } = o,
                                    a = (0, r.A)(o, h),
                                    s = Object.keys(a).reduce(((e, t) => (e[E[t] || t] = a[t], e)), {});
                                let {
                                    type: l
                                } = e;
                                switch ("symbol" === typeof l ? l = l.toString() : this.warnOnInvalidChildren(e, i), l) {
                                    case "Symbol(react.fragment)":
                                        t = this.mapChildrenToProps(i, t);
                                        break;
                                    case "link":
                                    case "meta":
                                    case "noscript":
                                    case "script":
                                    case "style":
                                        n = this.flattenArrayTypeChildren(e, n, s, i);
                                        break;
                                    default:
                                        t = this.mapObjectTypeChildren(e, t, s, i)
                                }
                            })), this.mapArrayTypeChildrenToProps(n, t)
                        }
                        render() {
                            const e = this.props,
                                {
                                    children: t
                                } = e,
                                n = (0, r.A)(e, p);
                            let o = (0, i.A)({}, n),
                                {
                                    helmetData: s
                                } = n;
                            if (t && (o = this.mapChildrenToProps(t, o)), s && !(s instanceof G)) {
                                s = new G(s.context, !0), delete o.helmetData
                            }
                            return s ? a.createElement(oe, (0, i.A)((0, i.A)({}, o), {}, {
                                context: s.value
                            })) : a.createElement(X.Consumer, null, (e => a.createElement(oe, (0, i.A)((0, i.A)({}, o), {}, {
                                context: e
                            }))))
                        }
                    }, (0, o.A)(v, "defaultProps", {
                        defer: !0,
                        encodeSpecialCharacters: !0,
                        prioritizeSeoTags: !1
                    }), v)
            },
            9379: (e, t, n) => {
                "use strict";
                n.d(t, {
                    A: () => i
                });
                var r = n(4467);

                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t && (r = r.filter((function(t) {
                            return Object.getOwnPropertyDescriptor(e, t).enumerable
                        }))), n.push.apply(n, r)
                    }
                    return n
                }

                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(n), !0).forEach((function(t) {
                            (0, r.A)(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }
            },
            9526: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }

                function o(e) {
                    var t = function(e, t) {
                        if ("object" != r(e) || !e) return e;
                        var n = e[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var o = n.call(e, t || "default");
                            if ("object" != r(o)) return o;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === t ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == r(t) ? t : t + ""
                }
                n.d(t, {
                    A: () => o
                })
            },
            9674: (e, t, n) => {
                "use strict";
                n.d(t, {
                    t: () => r
                });
                const r = (0, n(5043).createContext)(null)
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var i = t[r] = {
            exports: {}
        };
        return e[r](i, i.exports, n), i.exports
    }
    n.m = e, n.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return n.d(t, {
            a: t
        }), t
    }, (() => {
        var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
        n.t = function(r, o) {
            if (1 & o && (r = this(r)), 8 & o) return r;
            if ("object" === typeof r && r) {
                if (4 & o && r.__esModule) return r;
                if (16 & o && "function" === typeof r.then) return r
            }
            var i = Object.create(null);
            n.r(i);
            var a = {};
            e = e || [null, t({}), t([]), t(t)];
            for (var s = 2 & o && r;
                "object" == typeof s && !~e.indexOf(s); s = t(s)) Object.getOwnPropertyNames(s).forEach((e => a[e] = () => r[e]));
            return a.default = () => r, n.d(i, a), i
        }
    })(), n.d = (e, t) => {
        for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, n.f = {}, n.e = e => Promise.all(Object.keys(n.f).reduce(((t, r) => (n.f[r](e, t), t)), [])), n.u = e => "static/js/" + e + "." + {
        18: "02ffb486",
        161: "b7d3a115",
        178: "d20dc529",
        278: "394b6ac5",
        326: "4a2dba2b",
        387: "f807b6b9",
        475: "1a18f0d3",
        546: "a363ac85",
        760: "52565ca9",
        774: "56f94ed8"
    }[e] + ".chunk.js", n.miniCssF = e => "static/css/" + e + "." + {
        18: "8dc1cc7f",
        161: "298084ff",
        178: "9e7e80a4",
        546: "fbc2fb44",
        760: "658bf701"
    }[e] + ".chunk.css", n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
        var e = {},
            t = "evolvion:";
        n.l = (r, o, i, a) => {
            if (e[r]) e[r].push(o);
            else {
                var s, l;
                if (void 0 !== i)
                    for (var u = document.getElementsByTagName("script"), c = 0; c < u.length; c++) {
                        var d = u[c];
                        if (d.getAttribute("src") == r || d.getAttribute("data-webpack") == t + i) {
                            s = d;
                            break
                        }
                    }
                s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, n.nc && s.setAttribute("nonce", n.nc), s.setAttribute("data-webpack", t + i), s.src = r), e[r] = [o];
                var f = (t, n) => {
                        s.onerror = s.onload = null, clearTimeout(h);
                        var o = e[r];
                        if (delete e[r], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((e => e(n))), t) return t(n)
                    },
                    h = setTimeout(f.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), l && document.head.appendChild(s)
            }
        }
    })(), n.r = e => {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.p = "/", (() => {
        if ("undefined" !== typeof document) {
            var e = e => new Promise(((t, r) => {
                    var o = n.miniCssF(e),
                        i = n.p + o;
                    if (((e, t) => {
                            for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                                var o = (a = n[r]).getAttribute("data-href") || a.getAttribute("href");
                                if ("stylesheet" === a.rel && (o === e || o === t)) return a
                            }
                            var i = document.getElementsByTagName("style");
                            for (r = 0; r < i.length; r++) {
                                var a;
                                if ((o = (a = i[r]).getAttribute("data-href")) === e || o === t) return a
                            }
                        })(o, i)) return t();
                    ((e, t, r, o, i) => {
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.type = "text/css", n.nc && (a.nonce = n.nc), a.onerror = a.onload = n => {
                            if (a.onerror = a.onload = null, "load" === n.type) o();
                            else {
                                var r = n && n.type,
                                    s = n && n.target && n.target.href || t,
                                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ": " + s + ")");
                                l.name = "ChunkLoadError", l.code = "CSS_CHUNK_LOAD_FAILED", l.type = r, l.request = s, a.parentNode && a.parentNode.removeChild(a), i(l)
                            }
                        }, a.href = t, r ? r.parentNode.insertBefore(a, r.nextSibling) : document.head.appendChild(a)
                    })(e, i, null, t, r)
                })),
                t = {
                    792: 0
                };
            n.f.miniCss = (n, r) => {
                t[n] ? r.push(t[n]) : 0 !== t[n] && {
                    18: 1,
                    161: 1,
                    178: 1,
                    546: 1,
                    760: 1
                }[n] && r.push(t[n] = e(n).then((() => {
                    t[n] = 0
                }), (e => {
                    throw delete t[n], e
                })))
            }
        }
    })(), (() => {
        var e = {
            792: 0
        };
        n.f.j = (t, r) => {
            var o = n.o(e, t) ? e[t] : void 0;
            if (0 !== o)
                if (o) r.push(o[2]);
                else {
                    var i = new Promise(((n, r) => o = e[t] = [n, r]));
                    r.push(o[2] = i);
                    var a = n.p + n.u(t),
                        s = new Error;
                    n.l(a, (r => {
                        if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                            var i = r && ("load" === r.type ? "missing" : r.type),
                                a = r && r.target && r.target.src;
                            s.message = "Loading chunk " + t + " failed.\n(" + i + ": " + a + ")", s.name = "ChunkLoadError", s.type = i, s.request = a, o[1](s)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, r) => {
                var o, i, a = r[0],
                    s = r[1],
                    l = r[2],
                    u = 0;
                if (a.some((t => 0 !== e[t]))) {
                    for (o in s) n.o(s, o) && (n.m[o] = s[o]);
                    if (l) l(n)
                }
                for (t && t(r); u < a.length; u++) i = a[u], n.o(e, i) && e[i] && e[i][0](), e[i] = 0
            },
            r = self.webpackChunkevolvion = self.webpackChunkevolvion || [];
        r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
    })(), (() => {
        "use strict";
        var e = n(5043),
            t = n(4391),
            r = n(1675),
            o = n(117);
        const i = "Navbar_navbar__AHaSr",
            a = "Navbar_navActive__dlNPs",
            s = "Navbar_gridLeft__bbOK5",
            l = "Navbar_gridRight__2NsPq",
            u = "Navbar_quoteBtn__IbJtY";
        var c = n(4475);

        function d() {
            const [t, n] = (0, e.useState)("undefined" !== typeof window ? window.innerWidth : 0);
            return (0, e.useEffect)((() => {
                function e() {
                    n(window.innerWidth)
                }
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), []), t
        }
        var f = n(579);

        function h(e) {
            let {
                alwaysShowText: t = !1
            } = e;
            const n = d() < 768;
            return (0, f.jsx)(f.Fragment, {
                children: (0, f.jsxs)("div", {
                    className: "logo",
                    children: [(0, f.jsx)("img", {
                        src: "/logo.png",
                        alt: "virtuososys logo"
                    }), (!n || t) && (0, f.jsx)(c.A, {
                        colors: ["#7e27ff", "#d0a0fc", "#7e27ff", "#d0a0fc", "#7e27ff"],
                        animationSpeed: 10,
                        showBorder: !1,
                        className: "custom-class",
                        children: "VIRTUOSOSYS"
                    })]
                })
            })
        }
        const p = function(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            const n = document.getElementById(e);
            if (n) {
                const e = n.offsetTop + t;
                window.scroll({
                    top: e,
                    behavior: "smooth"
                })
            }
        };

        function m() {
            const [t, n] = (0, e.useState)(window.innerWidth < 480), [c, m] = (0, e.useState)(window.innerWidth);
            (0, e.useEffect)((() => {
                const e = () => {
                    n(window.scrollY > 50)
                };
                return window.addEventListener("scroll", e), () => window.removeEventListener("scroll", e)
            }), []), (0, e.useEffect)((() => {
                const e = () => m(window.innerWidth);
                return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
            }), []);
            const v = (0, r.Zp)(),
                g = (0, r.zy)(),
                [y, b] = (0, e.useState)(g.pathname);
            (0, e.useEffect)((() => {
                b(g.pathname)
            }), [g.pathname]);
            const w = e => {
                    v(e)
                },
                x = d() < 480,
                S = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    "/" !== g.pathname ? v("/", {
                        state: {
                            scrollTo: {
                                id: e,
                                offset: t
                            }
                        }
                    }) : p(e, t)
                };
            return (0, f.jsxs)(o.P.div, {
                className: i,
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1,
                    margin: c < 700 ? "10px 5%" : c < 1e3 ? t ? "10px 12%" : "10px 5%" : c < 1200 ? t ? "10px 20%" : "10px 5%" : t ? "10px 25%" : "10px 7%",
                    padding: x || t ? "0 30px" : "0",
                    backdropFilter: x || t ? "blur(24px)" : "none",
                    backgroundColor: x || t ? "#00000080" : "rgba(0, 0, 0, 0)",
                    borderRadius: x || t ? "40px" : "0",
                    boxShadow: x || t ? "rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset, rgba(0, 0, 0, 0.16) 0px 2px 8px 0px" : "none",
                    transform: "none",
                    transformOrigin: "50% 50% 0px"
                },
                transition: {
                    duration: .3,
                    ease: "easeInOut"
                },
                children: [(0, f.jsx)("div", {
                    className: s,
                    children: (0, f.jsx)("a", {
                        href: "/",
                        children: (0, f.jsx)(o.P.div, {
                            animate: {
                                height: x || t ? "2rem" : "2.2rem"
                            },
                            transition: {
                                duration: .3
                            },
                            children: (0, f.jsx)(h, {})
                        })
                    })
                }), (0, f.jsxs)("ul", {
                    children: [(0, f.jsx)("li", {
                        className: "/" === y ? a : "",
                        children: (0, f.jsx)("a", {
                            href: "/",
                            children: (0, f.jsx)("h5", {
                                children: "Home"
                            })
                        })
                    }), (0, f.jsx)("li", {
                        onClick: () => S("about-section", -120),
                        style: {
                            display: c < 600 ? "none" : ""
                        },
                        children: (0, f.jsx)("h5", {
                            children: "About Us"
                        })
                    }), (0, f.jsx)("li", {
                        onClick: () => S("services-section", -30),
                        style: {
                            display: c < 400 ? "none" : ""
                        },
                        children: (0, f.jsx)("h5", {
                            children: "Services"
                        })
                    }), (0, f.jsx)("li", {
                        onClick: () => S("faq-section", 0),
                        style: {
                            display: c < 600 ? "none" : ""
                        },
                        children: (0, f.jsx)("h5", {
                            children: "FAQ"
                        })
                    }), (0, f.jsx)("li", {
                        onClick: () => w("/portfolio"),
                        className: "/portfolio" === y ? a : "",
                        children: (0, f.jsx)("h5", {
                            children: "Portfolio"
                        })
                    })]
                }), (0, f.jsx)("div", {
                    className: l,
                    children: (0, f.jsx)("button", {
                        className: u,
                        onClick: () => w("/contact-us"),
                        children: (0, f.jsxs)("h5", {
                            children: [" ", x ? "Quote" : "Get a quote", " "]
                        })
                    })
                })]
            })
        }
        const v = "Footer_footer__kXlYa",
            g = "Footer_topArea__nhv9P",
            y = "Footer_leftBlock__isbfA",
            b = "Footer_ctaCard__lbD5v",
            w = "Footer_navColumns__g8mIO",
            x = "Footer_divider__k7loG",
            S = "Footer_bottomBar__O-fPK",
            E = "Footer_socialLink__p-nyn";

        function k() {
            const e = (0, r.Zp)(),
                t = (0, r.zy)(),
                n = function(n) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    "/" !== t.pathname ? e("/", {
                        state: {
                            scrollTo: {
                                id: n,
                                offset: r
                            }
                        }
                    }) : p(n, r)
                };
            return (0, f.jsxs)("footer", {
                className: v,
                children: [(0, f.jsxs)("div", {
                    className: g,
                    children: [(0, f.jsxs)("div", {
                        className: y,
                        children: [(0, f.jsx)("a", {
                            href: "/",
                            style: {
                                height: "2.2rem",
                                width: "fit-content"
                            },
                            children: (0, f.jsx)(h, {
                                alwaysShowText: !0
                            })
                        }), (0, f.jsxs)("div", {
                            className: b,
                            children: [(0, f.jsx)("p", {
                                children: "Bring your website or mobile app to life"
                            }), (0, f.jsx)("a", {
                                href: "https://virtuososys.co/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: (0, f.jsxs)("button", {
                                    children: [" ", (0, f.jsx)("h5", {
                                        children: "Book a call"
                                    }), " "]
                                })
                            })]
                        })]
                    }), (0, f.jsxs)("div", {
                        className: w,
                        children: [(0, f.jsxs)("div", {
                            children: [(0, f.jsx)("h4", {
                                children: "Product"
                            }), (0, f.jsxs)("ul", {
                                children: [(0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsx)("h5", {
                                        onClick: () => {
                                            n("about-section", -120)
                                        },
                                        children: "About "
                                    }), " "]
                                }), (0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsx)("h5", {
                                        onClick: () => {
                                            n("services-section", -30)
                                        },
                                        children: "Services "
                                    }), " "]
                                }), (0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsx)("h5", {
                                        onClick: () => {
                                            n("reviews-section", -50)
                                        },
                                        children: "Testimonials "
                                    }), " "]
                                })]
                            })]
                        }), (0, f.jsxs)("div", {
                            children: [(0, f.jsx)("h4", {
                                children: "Company"
                            }), (0, f.jsx)("ul", {
                                children: (0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsx)("h5", {
                                        onClick: () => {
                                            n("faq-section", 0)
                                        },
                                        children: "FAQ "
                                    }), " "]
                                })
                            })]
                        }), (0, f.jsxs)("div", {
                            children: [(0, f.jsx)("h4", {
                                children: "Legal"
                            }), (0, f.jsxs)("ul", {
                                children: [(0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsxs)("a", {
                                        href: "/terms-of-use",
                                        target: "_blank",
                                        children: [" ", (0, f.jsx)("h5", {
                                            children: "Terms of Use"
                                        }), " "]
                                    }), " "]
                                }), (0, f.jsxs)("li", {
                                    children: [" ", (0, f.jsxs)("a", {
                                        href: "/privacy-policy",
                                        target: "_blank",
                                        children: [" ", (0, f.jsx)("h5", {
                                            children: "Privacy Policy"
                                        }), " "]
                                    }), " "]
                                })]
                            })]
                        })]
                    })]
                }), (0, f.jsx)("div", {
                    className: x
                }), (0, f.jsxs)("div", {
                    className: S,
                    children: [(0, f.jsx)("span", {
                        children: (0, f.jsx)("h5", {
                            children: "\xa9 2026 Virtuososys. All rights reserved."
                        })
                    }), (0, f.jsx)("a", {
                        href: "https://www.virtuososys.co/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: E,
                        children: (0, f.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 448 512",
                            children: (0, f.jsx)("path", {
                                d: "M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"
                            })
                        })
                    })]
                })]
            })
        }
        var A = n(7937),
            C = n(5627),
            T = n(9367),
            P = n(9379);

        function _() {
            return "undefined" !== typeof window
        }

        function F() {
            try {
                const e = "production";
                if ("development" === e || "test" === e) return "development"
            } catch (e) {}
            return "production"
        }

        function R() {
            return (_() ? window.vam : F()) || "production"
        }

        function D() {
            return "development" === R()
        }

        function L() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                debug: !0
            };
            var t;
            if (!_()) return;
            ! function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "auto";
                window.vam = "auto" !== e ? e : F()
            }(e.mode), window.va || (window.va = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                (window.vaq = window.vaq || []).push(t)
            }), e.beforeSend && (null == (t = window.va) || t.call(window, "beforeSend", e.beforeSend));
            const n = function(e) {
                return e.scriptSrc ? e.scriptSrc : D() ? "https://va.vercel-scripts.com/v1/script.debug.js" : e.basePath ? "".concat(e.basePath, "/insights/script.js") : "/_vercel/insights/script.js"
            }(e);
            if (document.head.querySelector('script[src*="'.concat(n, '"]'))) return;
            const r = document.createElement("script");
            r.src = n, r.defer = !0, r.dataset.sdkn = "@vercel/analytics" + (e.framework ? "/".concat(e.framework) : ""), r.dataset.sdkv = "1.5.0", e.disableAutoTrack && (r.dataset.disableAutoTrack = "1"), e.endpoint ? r.dataset.endpoint = e.endpoint : e.basePath && (r.dataset.endpoint = "".concat(e.basePath, "/insights")), e.dsn && (r.dataset.dsn = e.dsn), r.onerror = () => {
                const e = D() ? "Please check if any ad blockers are enabled and try again." : "Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.";
                console.log("[Vercel Web Analytics] Failed to load script from ".concat(n, ". ").concat(e))
            }, D() && !1 === e.debug && (r.dataset.debug = "false"), document.head.appendChild(r)
        }

        function M() {
            if ("undefined" !== typeof process) return {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Evolvion-io",
                REACT_APP_VERCEL_GIT_PROVIDER: "github",
                REACT_APP_VERCEL_PROJECT_ID: "prj_zHySLQRBy76PAVXh0SO0QfOJ8IC9",
                REACT_APP_VERCEL_GIT_PULL_REQUEST_ID: "",
                REACT_APP_VERCEL_BRANCH_URL: "evolvion-git-main-evolvion.vercel.app",
                REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Update README.md",
                REACT_APP_VERCEL_DEPLOYMENT_ID: "dpl_7saMejfG3aK34MZabYAfogxB6qdh",
                REACT_APP_VERCEL_GIT_REPO_SLUG: "front-end",
                REACT_APP_VERCEL_TARGET_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_SHA: "43bde716951f10b4e8b52bda7d22875b24292fb1",
                REACT_APP_VERCEL_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_REF: "main",
                REACT_APP_VERCEL_URL: "evolvion-mbhv2fhse-evolvion.vercel.app",
                REACT_APP_VERCEL_PROJECT_PRODUCTION_URL: "www.evolvion.io",
                REACT_APP_VERCEL_GIT_PREVIOUS_SHA: "",
                REACT_APP_VERCEL_GIT_REPO_ID: "932934851",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "Evolvion-io",
                REACT_APP_VERCEL_GIT_REPO_OWNER: "Evolvion-io"
            }.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
        }

        function O(t) {
            return (0, e.useEffect)((() => {
                var e;
                t.beforeSend && (null == (e = window.va) || e.call(window, "beforeSend", t.beforeSend))
            }), [t.beforeSend]), (0, e.useEffect)((() => {
                var e;
                L((0, P.A)((0, P.A)({
                    framework: t.framework || "react",
                    basePath: null !== (e = t.basePath) && void 0 !== e ? e : M()
                }, void 0 !== t.route && {
                    disableAutoTrack: !0
                }), t))
            }), []), (0, e.useEffect)((() => {
                t.route && t.path && function(e) {
                    let {
                        route: t,
                        path: n
                    } = e;
                    var r;
                    null == (r = window.va) || r.call(window, "pageview", {
                        route: t,
                        path: n
                    })
                }({
                    route: t.route,
                    path: t.path
                })
            }), [t.route, t.path]), null
        }

        function j() {
            return "development" === function() {
                try {
                    const e = "production";
                    if ("development" === e || "test" === e) return "development"
                } catch (e) {}
                return "production"
            }()
        }

        function N() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            var t;
            if ("undefined" === typeof window || null === e.route) return null;
            window.si || (window.si = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                (window.siq = window.siq || []).push(t)
            });
            const n = function(e) {
                return e.scriptSrc ? e.scriptSrc : j() ? "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js" : e.dsn ? "https://va.vercel-scripts.com/v1/speed-insights/script.js" : e.basePath ? "".concat(e.basePath, "/speed-insights/script.js") : "/_vercel/speed-insights/script.js"
            }(e);
            if (document.head.querySelector('script[src*="'.concat(n, '"]'))) return null;
            e.beforeSend && (null == (t = window.si) || t.call(window, "beforeSend", e.beforeSend));
            const r = document.createElement("script");
            return r.src = n, r.defer = !0, r.dataset.sdkn = "@vercel/speed-insights" + (e.framework ? "/".concat(e.framework) : ""), r.dataset.sdkv = "1.3.1", e.sampleRate && (r.dataset.sampleRate = e.sampleRate.toString()), e.route && (r.dataset.route = e.route), e.endpoint ? r.dataset.endpoint = e.endpoint : e.basePath && (r.dataset.endpoint = "".concat(e.basePath, "/speed-insights/vitals")), e.dsn && (r.dataset.dsn = e.dsn), j() && !1 === e.debug && (r.dataset.debug = "false"), r.onerror = () => {
                console.log("[Vercel Speed Insights] Failed to load script from ".concat(n, ". Please check if any content blockers are enabled and try again."))
            }, document.head.appendChild(r), {
                setRoute: e => {
                    r.dataset.route = null !== e && void 0 !== e ? e : void 0
                }
            }
        }

        function V() {
            if ("undefined" !== typeof process) return {
                NODE_ENV: "production",
                PUBLIC_URL: "",
                WDS_SOCKET_HOST: void 0,
                WDS_SOCKET_PATH: void 0,
                WDS_SOCKET_PORT: void 0,
                FAST_REFRESH: !0,
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_NAME: "Evolvion-io",
                REACT_APP_VERCEL_GIT_PROVIDER: "github",
                REACT_APP_VERCEL_PROJECT_ID: "prj_zHySLQRBy76PAVXh0SO0QfOJ8IC9",
                REACT_APP_VERCEL_GIT_PULL_REQUEST_ID: "",
                REACT_APP_VERCEL_BRANCH_URL: "evolvion-git-main-evolvion.vercel.app",
                REACT_APP_VERCEL_GIT_COMMIT_MESSAGE: "Update README.md",
                REACT_APP_VERCEL_DEPLOYMENT_ID: "dpl_7saMejfG3aK34MZabYAfogxB6qdh",
                REACT_APP_VERCEL_GIT_REPO_SLUG: "front-end",
                REACT_APP_VERCEL_TARGET_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_SHA: "43bde716951f10b4e8b52bda7d22875b24292fb1",
                REACT_APP_VERCEL_ENV: "production",
                REACT_APP_VERCEL_GIT_COMMIT_REF: "main",
                REACT_APP_VERCEL_URL: "evolvion-mbhv2fhse-evolvion.vercel.app",
                REACT_APP_VERCEL_PROJECT_PRODUCTION_URL: "www.evolvion.io",
                REACT_APP_VERCEL_GIT_PREVIOUS_SHA: "",
                REACT_APP_VERCEL_GIT_REPO_ID: "932934851",
                REACT_APP_VERCEL_GIT_COMMIT_AUTHOR_LOGIN: "Evolvion-io",
                REACT_APP_VERCEL_GIT_REPO_OWNER: "Evolvion-io"
            }.REACT_APP_VERCEL_OBSERVABILITY_BASEPATH
        }

        function I(t) {
            (0, e.useEffect)((() => {
                var e;
                t.beforeSend && (null == (e = window.si) || e.call(window, "beforeSend", t.beforeSend))
            }), [t.beforeSend]);
            const n = (0, e.useRef)(null);
            return (0, e.useEffect)((() => {
                if (n.current) t.route && n.current(t.route);
                else {
                    var e, r;
                    const o = N((0, P.A)({
                        framework: null !== (e = t.framework) && void 0 !== e ? e : "react",
                        basePath: null !== (r = t.basePath) && void 0 !== r ? r : V()
                    }, t));
                    o && (n.current = o.setRoute)
                }
            }), [t.route]), null
        }
        const z = (0, e.lazy)((() => Promise.all([n.e(475), n.e(278), n.e(326), n.e(760)]).then(n.bind(n, 5342)))),
            B = (0, e.lazy)((() => Promise.all([n.e(475), n.e(387), n.e(161)]).then(n.bind(n, 161)))),
            U = (0, e.lazy)((() => Promise.all([n.e(475), n.e(278), n.e(774), n.e(18)]).then(n.bind(n, 8018)))),
            H = (0, e.lazy)((() => n.e(546).then(n.bind(n, 4546)))),
            W = (0, e.lazy)((() => n.e(178).then(n.bind(n, 4178))));
        const $ = function() {
            return (0, f.jsxs)(T.vd, {
                children: [(0, f.jsxs)("div", {
                    className: "app-shell",
                    children: [(0, f.jsx)(C.e, {}), (0, f.jsx)(A.A, {
                        fromY: 40,
                        delay: 0,
                        duration: .35,
                        children: (0, f.jsx)(m, {})
                    }), (0, f.jsx)("main", {
                        className: "app-main",
                        children: (0, f.jsx)(e.Suspense, {
                            fallback: (0, f.jsx)("div", {
                                style: {
                                    minHeight: "100vh",
                                    background: "#010915"
                                }
                            }),
                            children: (0, f.jsxs)(r.BV, {
                                children: [(0, f.jsx)(r.qh, {
                                    path: "/",
                                    element: (0, f.jsx)(z, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "/portfolio",
                                    element: (0, f.jsx)(B, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "/portfolio/:slug",
                                    element: (0, f.jsx)(B, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "/contact-us",
                                    element: (0, f.jsx)(U, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "/privacy-policy",
                                    element: (0, f.jsx)(H, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "/terms-of-use",
                                    element: (0, f.jsx)(W, {})
                                }), (0, f.jsx)(r.qh, {
                                    path: "*",
                                    element: (0, f.jsx)(z, {})
                                })]
                            })
                        })
                    }), (0, f.jsx)(k, {})]
                }), (0, f.jsx)(O, {}), (0, f.jsx)(I, {})]
            })
        };
        t.createRoot(document.getElementById("root")).render((0, f.jsx)(e.StrictMode, {
            children: (0, f.jsx)(r.Kd, {
                children: (0, f.jsx)($, {})
            })
        }))
    })()
})();
//# sourceMappingURL=main.46d5b518.js.map