"use strict";
(self.webpackChunkevolvion = self.webpackChunkevolvion || []).push([
    [326], {
        710: (e, t, s) => {
            s.d(t, {
                A: () => g
            });
            var r = s(9379),
                i = s(45),
                n = s(5043),
                a = s(8387),
                o = s(8610),
                l = s(4535),
                d = s(6262),
                c = s(8206),
                p = s(2532),
                u = s(2372);

            function f(e) {
                return (0, u.Ay)("MuiAccordionDetails", e)
            }(0, p.A)("MuiAccordionDetails", ["root"]);
            var m = s(579);
            const h = ["className"],
                v = (0, l.Ay)("div", {
                    name: "MuiAccordionDetails",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        padding: t.spacing(1, 2, 2)
                    }
                }))),
                g = n.forwardRef((function(e, t) {
                    const s = (0, c.b)({
                            props: e,
                            name: "MuiAccordionDetails"
                        }),
                        {
                            className: n
                        } = s,
                        l = (0, i.A)(s, h),
                        d = s,
                        p = (e => {
                            const {
                                classes: t
                            } = e;
                            return (0, o.A)({
                                root: ["root"]
                            }, f, t)
                        })(d);
                    return (0, m.jsx)(v, (0, r.A)({
                        className: (0, a.A)(p.root, n),
                        ref: t,
                        ownerState: d
                    }, l))
                }))
        },
        3766: (e, t, s) => {
            s.d(t, {
                A: () => D
            });
            var r = s(9379),
                i = s(45),
                n = s(5043),
                a = s(8387),
                o = s(8610),
                l = s(4535),
                d = s(6262),
                c = s(8206),
                p = s(9998),
                u = s(3593),
                f = s(6240),
                m = s(4318),
                h = s(653),
                v = s(5849),
                g = s(2532),
                w = s(2372);

            function y(e) {
                return (0, w.Ay)("MuiCollapse", e)
            }(0, g.A)("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
            var b = s(579);
            const S = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"],
                x = ["ownerState"],
                T = (0, l.Ay)("div", {
                    name: "MuiCollapse",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: s
                        } = e;
                        return [t.root, t[s.orientation], "entered" === s.state && t.entered, "exited" === s.state && !s.in && "0px" === s.collapsedSize && t.hidden]
                    }
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        height: 0,
                        overflow: "hidden",
                        transition: t.transitions.create("height"),
                        variants: [{
                            props: {
                                orientation: "horizontal"
                            },
                            style: {
                                height: "auto",
                                width: 0,
                                transition: t.transitions.create("width")
                            }
                        }, {
                            props: {
                                state: "entered"
                            },
                            style: {
                                height: "auto",
                                overflow: "visible"
                            }
                        }, {
                            props: {
                                state: "entered",
                                orientation: "horizontal"
                            },
                            style: {
                                width: "auto"
                            }
                        }, {
                            props: e => {
                                let {
                                    ownerState: t
                                } = e;
                                return "exited" === t.state && !t.in && "0px" === t.collapsedSize
                            },
                            style: {
                                visibility: "hidden"
                            }
                        }]
                    }
                }))),
                E = (0, l.Ay)("div", {
                    name: "MuiCollapse",
                    slot: "Wrapper",
                    overridesResolver: (e, t) => t.wrapper
                })({
                    display: "flex",
                    width: "100%",
                    variants: [{
                        props: {
                            orientation: "horizontal"
                        },
                        style: {
                            width: "auto",
                            height: "100%"
                        }
                    }]
                }),
                M = (0, l.Ay)("div", {
                    name: "MuiCollapse",
                    slot: "WrapperInner",
                    overridesResolver: (e, t) => t.wrapperInner
                })({
                    width: "100%",
                    variants: [{
                        props: {
                            orientation: "horizontal"
                        },
                        style: {
                            width: "auto",
                            height: "100%"
                        }
                    }]
                }),
                C = n.forwardRef((function(e, t) {
                    const s = (0, c.b)({
                            props: e,
                            name: "MuiCollapse"
                        }),
                        {
                            addEndListener: l,
                            children: d,
                            className: g,
                            collapsedSize: w = "0px",
                            component: C,
                            easing: A,
                            in: P,
                            onEnter: I,
                            onEntered: k,
                            onEntering: L,
                            onExit: O,
                            onExited: _,
                            onExiting: z,
                            orientation: G = "vertical",
                            style: N,
                            timeout: D = m.p0.standard,
                            TransitionComponent: R = p.Ay
                        } = s,
                        B = (0, i.A)(s, S),
                        V = (0, r.A)((0, r.A)({}, s), {}, {
                            orientation: G,
                            collapsedSize: w
                        }),
                        j = (e => {
                            const {
                                orientation: t,
                                classes: s
                            } = e, r = {
                                root: ["root", "".concat(t)],
                                entered: ["entered"],
                                hidden: ["hidden"],
                                wrapper: ["wrapper", "".concat(t)],
                                wrapperInner: ["wrapperInner", "".concat(t)]
                            };
                            return (0, o.A)(r, y, s)
                        })(V),
                        F = (0, f.A)(),
                        H = (0, u.A)(),
                        W = n.useRef(null),
                        q = n.useRef(),
                        X = "number" === typeof w ? "".concat(w, "px") : w,
                        Y = "horizontal" === G,
                        U = Y ? "width" : "height",
                        K = n.useRef(null),
                        Z = (0, v.A)(t, K),
                        J = e => t => {
                            if (e) {
                                const s = K.current;
                                void 0 === t ? e(s) : e(s, t)
                            }
                        },
                        Q = () => W.current ? W.current[Y ? "clientWidth" : "clientHeight"] : 0,
                        $ = J(((e, t) => {
                            W.current && Y && (W.current.style.position = "absolute"), e.style[U] = X, I && I(e, t)
                        })),
                        ee = J(((e, t) => {
                            const s = Q();
                            W.current && Y && (W.current.style.position = "");
                            const {
                                duration: r,
                                easing: i
                            } = (0, h.c)({
                                style: N,
                                timeout: D,
                                easing: A
                            }, {
                                mode: "enter"
                            });
                            if ("auto" === D) {
                                const t = F.transitions.getAutoHeightDuration(s);
                                e.style.transitionDuration = "".concat(t, "ms"), q.current = t
                            } else e.style.transitionDuration = "string" === typeof r ? r : "".concat(r, "ms");
                            e.style[U] = "".concat(s, "px"), e.style.transitionTimingFunction = i, L && L(e, t)
                        })),
                        te = J(((e, t) => {
                            e.style[U] = "auto", k && k(e, t)
                        })),
                        se = J((e => {
                            e.style[U] = "".concat(Q(), "px"), O && O(e)
                        })),
                        re = J(_),
                        ie = J((e => {
                            const t = Q(),
                                {
                                    duration: s,
                                    easing: r
                                } = (0, h.c)({
                                    style: N,
                                    timeout: D,
                                    easing: A
                                }, {
                                    mode: "exit"
                                });
                            if ("auto" === D) {
                                const s = F.transitions.getAutoHeightDuration(t);
                                e.style.transitionDuration = "".concat(s, "ms"), q.current = s
                            } else e.style.transitionDuration = "string" === typeof s ? s : "".concat(s, "ms");
                            e.style[U] = X, e.style.transitionTimingFunction = r, z && z(e)
                        }));
                    return (0, b.jsx)(R, (0, r.A)((0, r.A)({ in: P,
                        onEnter: $,
                        onEntered: te,
                        onEntering: ee,
                        onExit: se,
                        onExited: re,
                        onExiting: ie,
                        addEndListener: e => {
                            "auto" === D && H.start(q.current || 0, e), l && l(K.current, e)
                        },
                        nodeRef: K,
                        timeout: "auto" === D ? null : D
                    }, B), {}, {
                        children: (e, t) => {
                            let {
                                ownerState: s
                            } = t, n = (0, i.A)(t, x);
                            return (0, b.jsx)(T, (0, r.A)((0, r.A)({
                                as: C,
                                className: (0, a.A)(j.root, g, {
                                    entered: j.entered,
                                    exited: !P && "0px" === X && j.hidden
                                }[e]),
                                style: (0, r.A)({
                                    [Y ? "minWidth" : "minHeight"]: X
                                }, N),
                                ref: Z,
                                ownerState: (0, r.A)((0, r.A)({}, V), {}, {
                                    state: e
                                })
                            }, n), {}, {
                                children: (0, b.jsx)(E, {
                                    ownerState: (0, r.A)((0, r.A)({}, V), {}, {
                                        state: e
                                    }),
                                    className: j.wrapper,
                                    ref: W,
                                    children: (0, b.jsx)(M, {
                                        ownerState: (0, r.A)((0, r.A)({}, V), {}, {
                                            state: e
                                        }),
                                        className: j.wrapperInner,
                                        children: d
                                    })
                                })
                            }))
                        }
                    }))
                }));
            C && (C.muiSupportAuto = !0);
            const A = C;
            var P = s(1596),
                I = s(8309),
                k = s(4516),
                L = s(4162);

            function O(e) {
                return (0, w.Ay)("MuiAccordion", e)
            }
            const _ = (0, g.A)("MuiAccordion", ["root", "heading", "rounded", "expanded", "disabled", "gutters", "region"]),
                z = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "slots", "slotProps", "TransitionComponent", "TransitionProps"],
                G = (0, l.Ay)(P.A, {
                    name: "MuiAccordion",
                    slot: "Root",
                    overridesResolver: (e, t) => {
                        const {
                            ownerState: s
                        } = e;
                        return [{
                            ["& .".concat(_.region)]: t.region
                        }, t.root, !s.square && t.rounded, !s.disableGutters && t.gutters]
                    }
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    const s = {
                        duration: t.transitions.duration.shortest
                    };
                    return {
                        position: "relative",
                        transition: t.transitions.create(["margin"], s),
                        overflowAnchor: "none",
                        "&::before": {
                            position: "absolute",
                            left: 0,
                            top: -1,
                            right: 0,
                            height: 1,
                            content: '""',
                            opacity: 1,
                            backgroundColor: (t.vars || t).palette.divider,
                            transition: t.transitions.create(["opacity", "background-color"], s)
                        },
                        "&:first-of-type": {
                            "&::before": {
                                display: "none"
                            }
                        },
                        ["&.".concat(_.expanded)]: {
                            "&::before": {
                                opacity: 0
                            },
                            "&:first-of-type": {
                                marginTop: 0
                            },
                            "&:last-of-type": {
                                marginBottom: 0
                            },
                            "& + &": {
                                "&::before": {
                                    display: "none"
                                }
                            }
                        },
                        ["&.".concat(_.disabled)]: {
                            backgroundColor: (t.vars || t).palette.action.disabledBackground
                        }
                    }
                })), (0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        variants: [{
                            props: e => !e.square,
                            style: {
                                borderRadius: 0,
                                "&:first-of-type": {
                                    borderTopLeftRadius: (t.vars || t).shape.borderRadius,
                                    borderTopRightRadius: (t.vars || t).shape.borderRadius
                                },
                                "&:last-of-type": {
                                    borderBottomLeftRadius: (t.vars || t).shape.borderRadius,
                                    borderBottomRightRadius: (t.vars || t).shape.borderRadius,
                                    "@supports (-ms-ime-align: auto)": {
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0
                                    }
                                }
                            }
                        }, {
                            props: e => !e.disableGutters,
                            style: {
                                ["&.".concat(_.expanded)]: {
                                    margin: "16px 0"
                                }
                            }
                        }]
                    }
                }))),
                N = (0, l.Ay)("h3", {
                    name: "MuiAccordion",
                    slot: "Heading",
                    overridesResolver: (e, t) => t.heading
                })({
                    all: "unset"
                }),
                D = n.forwardRef((function(e, t) {
                    const s = (0, c.b)({
                            props: e,
                            name: "MuiAccordion"
                        }),
                        {
                            children: l,
                            className: d,
                            defaultExpanded: p = !1,
                            disabled: u = !1,
                            disableGutters: f = !1,
                            expanded: m,
                            onChange: h,
                            square: v = !1,
                            slots: g = {},
                            slotProps: w = {},
                            TransitionComponent: y,
                            TransitionProps: S
                        } = s,
                        x = (0, i.A)(s, z),
                        [T, E] = (0, k.A)({
                            controlled: m,
                            default: p,
                            name: "Accordion",
                            state: "expanded"
                        }),
                        M = n.useCallback((e => {
                            E(!T), h && h(e, !T)
                        }), [T, h, E]),
                        [C, ...P] = n.Children.toArray(l),
                        _ = n.useMemo((() => ({
                            expanded: T,
                            disabled: u,
                            disableGutters: f,
                            toggle: M
                        })), [T, u, f, M]),
                        D = (0, r.A)((0, r.A)({}, s), {}, {
                            square: v,
                            disabled: u,
                            disableGutters: f,
                            expanded: T
                        }),
                        R = (e => {
                            const {
                                classes: t,
                                square: s,
                                expanded: r,
                                disabled: i,
                                disableGutters: n
                            } = e, a = {
                                root: ["root", !s && "rounded", r && "expanded", i && "disabled", !n && "gutters"],
                                heading: ["heading"],
                                region: ["region"]
                            };
                            return (0, o.A)(a, O, t)
                        })(D),
                        B = {
                            slots: (0, r.A)({
                                transition: y
                            }, g),
                            slotProps: (0, r.A)({
                                transition: S
                            }, w)
                        },
                        [V, j] = (0, L.A)("heading", {
                            elementType: N,
                            externalForwardedProps: B,
                            className: R.heading,
                            ownerState: D
                        }),
                        [F, H] = (0, L.A)("transition", {
                            elementType: A,
                            externalForwardedProps: B,
                            ownerState: D
                        });
                    return (0, b.jsxs)(G, (0, r.A)((0, r.A)({
                        className: (0, a.A)(R.root, d),
                        ref: t,
                        ownerState: D,
                        square: v
                    }, x), {}, {
                        children: [(0, b.jsx)(V, (0, r.A)((0, r.A)({}, j), {}, {
                            children: (0, b.jsx)(I.A.Provider, {
                                value: _,
                                children: C
                            })
                        })), (0, b.jsx)(F, (0, r.A)((0, r.A)({ in: T,
                            timeout: "auto"
                        }, H), {}, {
                            children: (0, b.jsx)("div", {
                                "aria-labelledby": C.props.id,
                                id: C.props["aria-controls"],
                                role: "region",
                                className: R.region,
                                children: P
                            })
                        }))]
                    }))
                }))
        },
        4014: () => {},
        4083: (e, t, s) => {
            s.d(t, {
                Ij: () => i
            });
            var r = s(8628);
            s(7713);

            function i(e) {
                let t, s, {
                    swiper: i,
                    extendParams: n,
                    on: a,
                    emit: o,
                    params: l
                } = e;
                i.autoplay = {
                    running: !1,
                    paused: !1,
                    timeLeft: 0
                }, n({
                    autoplay: {
                        enabled: !1,
                        delay: 3e3,
                        waitForTransition: !0,
                        disableOnInteraction: !1,
                        stopOnLastSlide: !1,
                        reverseDirection: !1,
                        pauseOnMouseEnter: !1
                    }
                });
                let d, c, p, u, f, m, h, v, g = l && l.autoplay ? l.autoplay.delay : 3e3,
                    w = l && l.autoplay ? l.autoplay.delay : 3e3,
                    y = (new Date).getTime();

                function b(e) {
                    i && !i.destroyed && i.wrapperEl && e.target === i.wrapperEl && (i.wrapperEl.removeEventListener("transitionend", b), v || e.detail && e.detail.bySwiperTouchMove || C())
                }
                const S = () => {
                        if (i.destroyed || !i.autoplay.running) return;
                        i.autoplay.paused ? c = !0 : c && (w = d, c = !1);
                        const e = i.autoplay.paused ? d : y + w - (new Date).getTime();
                        i.autoplay.timeLeft = e, o("autoplayTimeLeft", e, e / g), s = requestAnimationFrame((() => {
                            S()
                        }))
                    },
                    x = e => {
                        if (i.destroyed || !i.autoplay.running) return;
                        cancelAnimationFrame(s), S();
                        let r = "undefined" === typeof e ? i.params.autoplay.delay : e;
                        g = i.params.autoplay.delay, w = i.params.autoplay.delay;
                        const n = (() => {
                            let e;
                            if (e = i.virtual && i.params.virtual.enabled ? i.slides.find((e => e.classList.contains("swiper-slide-active"))) : i.slides[i.activeIndex], !e) return;
                            return parseInt(e.getAttribute("data-swiper-autoplay"), 10)
                        })();
                        !Number.isNaN(n) && n > 0 && "undefined" === typeof e && (r = n, g = n, w = n), d = r;
                        const a = i.params.speed,
                            l = () => {
                                i && !i.destroyed && (i.params.autoplay.reverseDirection ? !i.isBeginning || i.params.loop || i.params.rewind ? (i.slidePrev(a, !0, !0), o("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(i.slides.length - 1, a, !0, !0), o("autoplay")) : !i.isEnd || i.params.loop || i.params.rewind ? (i.slideNext(a, !0, !0), o("autoplay")) : i.params.autoplay.stopOnLastSlide || (i.slideTo(0, a, !0, !0), o("autoplay")), i.params.cssMode && (y = (new Date).getTime(), requestAnimationFrame((() => {
                                    x()
                                }))))
                            };
                        return r > 0 ? (clearTimeout(t), t = setTimeout((() => {
                            l()
                        }), r)) : requestAnimationFrame((() => {
                            l()
                        })), r
                    },
                    T = () => {
                        y = (new Date).getTime(), i.autoplay.running = !0, x(), o("autoplayStart")
                    },
                    E = () => {
                        i.autoplay.running = !1, clearTimeout(t), cancelAnimationFrame(s), o("autoplayStop")
                    },
                    M = (e, s) => {
                        if (i.destroyed || !i.autoplay.running) return;
                        clearTimeout(t), e || (h = !0);
                        const r = () => {
                            o("autoplayPause"), i.params.autoplay.waitForTransition ? i.wrapperEl.addEventListener("transitionend", b) : C()
                        };
                        if (i.autoplay.paused = !0, s) return m && (d = i.params.autoplay.delay), m = !1, void r();
                        const n = d || i.params.autoplay.delay;
                        d = n - ((new Date).getTime() - y), i.isEnd && d < 0 && !i.params.loop || (d < 0 && (d = 0), r())
                    },
                    C = () => {
                        i.isEnd && d < 0 && !i.params.loop || i.destroyed || !i.autoplay.running || (y = (new Date).getTime(), h ? (h = !1, x(d)) : x(), i.autoplay.paused = !1, o("autoplayResume"))
                    },
                    A = () => {
                        if (i.destroyed || !i.autoplay.running) return;
                        const e = (0, r.g)();
                        "hidden" === e.visibilityState && (h = !0, M(!0)), "visible" === e.visibilityState && C()
                    },
                    P = e => {
                        "mouse" === e.pointerType && (h = !0, v = !0, i.animating || i.autoplay.paused || M(!0))
                    },
                    I = e => {
                        "mouse" === e.pointerType && (v = !1, i.autoplay.paused && C())
                    };
                a("init", (() => {
                    i.params.autoplay.enabled && (i.params.autoplay.pauseOnMouseEnter && (i.el.addEventListener("pointerenter", P), i.el.addEventListener("pointerleave", I)), (0, r.g)().addEventListener("visibilitychange", A), T())
                })), a("destroy", (() => {
                    i.el && "string" !== typeof i.el && (i.el.removeEventListener("pointerenter", P), i.el.removeEventListener("pointerleave", I)), (0, r.g)().removeEventListener("visibilitychange", A), i.autoplay.running && E()
                })), a("_freeModeStaticRelease", (() => {
                    (u || h) && C()
                })), a("_freeModeNoMomentumRelease", (() => {
                    i.params.autoplay.disableOnInteraction ? E() : M(!0, !0)
                })), a("beforeTransitionStart", ((e, t, s) => {
                    !i.destroyed && i.autoplay.running && (s || !i.params.autoplay.disableOnInteraction ? M(!0, !0) : E())
                })), a("sliderFirstMove", (() => {
                    !i.destroyed && i.autoplay.running && (i.params.autoplay.disableOnInteraction ? E() : (p = !0, u = !1, h = !1, f = setTimeout((() => {
                        h = !0, u = !0, M(!0)
                    }), 200)))
                })), a("touchEnd", (() => {
                    if (!i.destroyed && i.autoplay.running && p) {
                        if (clearTimeout(f), clearTimeout(t), i.params.autoplay.disableOnInteraction) return u = !1, void(p = !1);
                        u && i.params.cssMode && C(), u = !1, p = !1
                    }
                })), a("slideChange", (() => {
                    !i.destroyed && i.autoplay.running && (m = !0)
                })), Object.assign(i.autoplay, {
                    start: T,
                    stop: E,
                    pause: M,
                    resume: C
                })
            }
        },
        4975: (e, t, s) => {
            s.d(t, {
                RC: () => ie,
                qr: () => ne
            });
            var r = s(9379),
                i = s(45),
                n = s(5043),
                a = s(8628),
                o = s(7713);
            let l, d, c;

            function p() {
                return l || (l = function() {
                    const e = (0, a.a)(),
                        t = (0, a.g)();
                    return {
                        smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
                        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
                    }
                }()), l
            }

            function u(e) {
                return void 0 === e && (e = {}), d || (d = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e;
                    const s = p(),
                        r = (0, a.a)(),
                        i = r.navigator.platform,
                        n = t || r.navigator.userAgent,
                        o = {
                            ios: !1,
                            android: !1
                        },
                        l = r.screen.width,
                        d = r.screen.height,
                        c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
                    let u = n.match(/(iPad).*OS\s([\d_]+)/);
                    const f = n.match(/(iPod)(.*OS\s([\d_]+))?/),
                        m = !u && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                        h = "Win32" === i;
                    let v = "MacIntel" === i;
                    return !u && v && s.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf("".concat(l, "x").concat(d)) >= 0 && (u = n.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), v = !1), c && !h && (o.os = "android", o.android = !0), (u || m || f) && (o.os = "ios", o.ios = !0), o
                }(e)), d
            }

            function f() {
                return c || (c = function() {
                    const e = (0, a.a)(),
                        t = u();
                    let s = !1;

                    function r() {
                        const t = e.navigator.userAgent.toLowerCase();
                        return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
                    }
                    if (r()) {
                        const t = String(e.navigator.userAgent);
                        if (t.includes("Version/")) {
                            const [e, r] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                            s = e < 16 || 16 === e && r < 2
                        }
                    }
                    const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                        n = r();
                    return {
                        isSafari: s || n,
                        needPerspectiveFix: s,
                        need3dFix: n || i && t.ios,
                        isWebView: i
                    }
                }()), c
            }
            var m = {
                on(e, t, s) {
                    const r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" !== typeof t) return r;
                    const i = s ? "unshift" : "push";
                    return e.split(" ").forEach((e => {
                        r.eventsListeners[e] || (r.eventsListeners[e] = []), r.eventsListeners[e][i](t)
                    })), r
                },
                once(e, t, s) {
                    const r = this;
                    if (!r.eventsListeners || r.destroyed) return r;
                    if ("function" !== typeof t) return r;

                    function i() {
                        r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                        for (var s = arguments.length, n = new Array(s), a = 0; a < s; a++) n[a] = arguments[a];
                        t.apply(r, n)
                    }
                    return i.__emitterProxy = t, r.on(e, i, s)
                },
                onAny(e, t) {
                    const s = this;
                    if (!s.eventsListeners || s.destroyed) return s;
                    if ("function" !== typeof e) return s;
                    const r = t ? "unshift" : "push";
                    return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[r](e), s
                },
                offAny(e) {
                    const t = this;
                    if (!t.eventsListeners || t.destroyed) return t;
                    if (!t.eventsAnyListeners) return t;
                    const s = t.eventsAnyListeners.indexOf(e);
                    return s >= 0 && t.eventsAnyListeners.splice(s, 1), t
                },
                off(e, t) {
                    const s = this;
                    return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e.split(" ").forEach((e => {
                        "undefined" === typeof t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach(((r, i) => {
                            (r === t || r.__emitterProxy && r.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1)
                        }))
                    })), s) : s
                },
                emit() {
                    const e = this;
                    if (!e.eventsListeners || e.destroyed) return e;
                    if (!e.eventsListeners) return e;
                    let t, s, r;
                    for (var i = arguments.length, n = new Array(i), a = 0; a < i; a++) n[a] = arguments[a];
                    "string" === typeof n[0] || Array.isArray(n[0]) ? (t = n[0], s = n.slice(1, n.length), r = e) : (t = n[0].events, s = n[0].data, r = n[0].context || e), s.unshift(r);
                    return (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
                        e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
                            e.apply(r, [t, ...s])
                        })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
                            e.apply(r, s)
                        }))
                    })), e
                }
            };
            const h = (e, t, s) => {
                t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
            };
            const v = (e, t, s) => {
                t && !e.classList.contains(s) ? e.classList.add(s) : !t && e.classList.contains(s) && e.classList.remove(s)
            };
            const g = (e, t) => {
                    if (!e || e.destroyed || !e.params) return;
                    const s = t.closest(e.isElement ? "swiper-slide" : ".".concat(e.params.slideClass));
                    if (s) {
                        let t = s.querySelector(".".concat(e.params.lazyPreloaderClass));
                        !t && e.isElement && (s.shadowRoot ? t = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)) : requestAnimationFrame((() => {
                            s.shadowRoot && (t = s.shadowRoot.querySelector(".".concat(e.params.lazyPreloaderClass)), t && t.remove())
                        }))), t && t.remove()
                    }
                },
                w = (e, t) => {
                    if (!e.slides[t]) return;
                    const s = e.slides[t].querySelector('[loading="lazy"]');
                    s && s.removeAttribute("loading")
                },
                y = e => {
                    if (!e || e.destroyed || !e.params) return;
                    let t = e.params.lazyPreloadPrevNext;
                    const s = e.slides.length;
                    if (!s || !t || t < 0) return;
                    t = Math.min(t, s);
                    const r = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                        i = e.activeIndex;
                    if (e.params.grid && e.params.grid.rows > 1) {
                        const s = i,
                            n = [s - t];
                        return n.push(...Array.from({
                            length: t
                        }).map(((e, t) => s + r + t))), void e.slides.forEach(((t, s) => {
                            n.includes(t.column) && w(e, s)
                        }))
                    }
                    const n = i + r - 1;
                    if (e.params.rewind || e.params.loop)
                        for (let a = i - t; a <= n + t; a += 1) {
                            const t = (a % s + s) % s;
                            (t < i || t > n) && w(e, t)
                        } else
                            for (let a = Math.max(i - t, 0); a <= Math.min(n + t, s - 1); a += 1) a !== i && (a > n || a < i) && w(e, a)
                };
            var b = {
                updateSize: function() {
                    const e = this;
                    let t, s;
                    const r = e.el;
                    t = "undefined" !== typeof e.params.width && null !== e.params.width ? e.params.width : r.clientWidth, s = "undefined" !== typeof e.params.height && null !== e.params.height ? e.params.height : r.clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt((0, o.q)(r, "padding-left") || 0, 10) - parseInt((0, o.q)(r, "padding-right") || 0, 10), s = s - parseInt((0, o.q)(r, "padding-top") || 0, 10) - parseInt((0, o.q)(r, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                        width: t,
                        height: s,
                        size: e.isHorizontal() ? t : s
                    }))
                },
                updateSlides: function() {
                    const e = this;

                    function t(t, s) {
                        return parseFloat(t.getPropertyValue(e.getDirectionLabel(s)) || 0)
                    }
                    const s = e.params,
                        {
                            wrapperEl: r,
                            slidesEl: i,
                            size: n,
                            rtlTranslate: a,
                            wrongRTL: l
                        } = e,
                        d = e.virtual && s.virtual.enabled,
                        c = d ? e.virtual.slides.length : e.slides.length,
                        p = (0, o.e)(i, ".".concat(e.params.slideClass, ", swiper-slide")),
                        u = d ? e.virtual.slides.length : p.length;
                    let f = [];
                    const m = [],
                        h = [];
                    let v = s.slidesOffsetBefore;
                    "function" === typeof v && (v = s.slidesOffsetBefore.call(e));
                    let g = s.slidesOffsetAfter;
                    "function" === typeof g && (g = s.slidesOffsetAfter.call(e));
                    const w = e.snapGrid.length,
                        y = e.slidesGrid.length;
                    let b = s.spaceBetween,
                        S = -v,
                        x = 0,
                        T = 0;
                    if ("undefined" === typeof n) return;
                    "string" === typeof b && b.indexOf("%") >= 0 ? b = parseFloat(b.replace("%", "")) / 100 * n : "string" === typeof b && (b = parseFloat(b)), e.virtualSize = -b, p.forEach((e => {
                        a ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    })), s.centeredSlides && s.cssMode && ((0, o.a)(r, "--swiper-centered-offset-before", ""), (0, o.a)(r, "--swiper-centered-offset-after", ""));
                    const E = s.grid && s.grid.rows > 1 && e.grid;
                    let M;
                    E ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
                    const C = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter((e => "undefined" !== typeof s.breakpoints[e].slidesPerView)).length > 0;
                    for (let A = 0; A < u; A += 1) {
                        let r;
                        if (M = 0, p[A] && (r = p[A]), E && e.grid.updateSlide(A, r, p), !p[A] || "none" !== (0, o.q)(r, "display")) {
                            if ("auto" === s.slidesPerView) {
                                C && (p[A].style[e.getDirectionLabel("width")] = "");
                                const i = getComputedStyle(r),
                                    n = r.style.transform,
                                    a = r.style.webkitTransform;
                                if (n && (r.style.transform = "none"), a && (r.style.webkitTransform = "none"), s.roundLengths) M = e.isHorizontal() ? (0, o.h)(r, "width", !0) : (0, o.h)(r, "height", !0);
                                else {
                                    const e = t(i, "width"),
                                        s = t(i, "padding-left"),
                                        n = t(i, "padding-right"),
                                        a = t(i, "margin-left"),
                                        o = t(i, "margin-right"),
                                        l = i.getPropertyValue("box-sizing");
                                    if (l && "border-box" === l) M = e + a + o;
                                    else {
                                        const {
                                            clientWidth: t,
                                            offsetWidth: i
                                        } = r;
                                        M = e + s + n + a + o + (i - t)
                                    }
                                }
                                n && (r.style.transform = n), a && (r.style.webkitTransform = a), s.roundLengths && (M = Math.floor(M))
                            } else M = (n - (s.slidesPerView - 1) * b) / s.slidesPerView, s.roundLengths && (M = Math.floor(M)), p[A] && (p[A].style[e.getDirectionLabel("width")] = "".concat(M, "px"));
                            p[A] && (p[A].swiperSlideSize = M), h.push(M), s.centeredSlides ? (S = S + M / 2 + x / 2 + b, 0 === x && 0 !== A && (S = S - n / 2 - b), 0 === A && (S = S - n / 2 - b), Math.abs(S) < .001 && (S = 0), s.roundLengths && (S = Math.floor(S)), T % s.slidesPerGroup === 0 && f.push(S), m.push(S)) : (s.roundLengths && (S = Math.floor(S)), (T - Math.min(e.params.slidesPerGroupSkip, T)) % e.params.slidesPerGroup === 0 && f.push(S), m.push(S), S = S + M + b), e.virtualSize += M + b, x = M, T += 1
                        }
                    }
                    if (e.virtualSize = Math.max(e.virtualSize, n) + g, a && l && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = "".concat(e.virtualSize + b, "px")), s.setWrapperSize && (r.style[e.getDirectionLabel("width")] = "".concat(e.virtualSize + b, "px")), E && e.grid.updateWrapperSize(M, f), !s.centeredSlides) {
                        const t = [];
                        for (let r = 0; r < f.length; r += 1) {
                            let i = f[r];
                            s.roundLengths && (i = Math.floor(i)), f[r] <= e.virtualSize - n && t.push(i)
                        }
                        f = t, Math.floor(e.virtualSize - n) - Math.floor(f[f.length - 1]) > 1 && f.push(e.virtualSize - n)
                    }
                    if (d && s.loop) {
                        const t = h[0] + b;
                        if (s.slidesPerGroup > 1) {
                            const r = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup),
                                i = t * s.slidesPerGroup;
                            for (let e = 0; e < r; e += 1) f.push(f[f.length - 1] + i)
                        }
                        for (let r = 0; r < e.virtual.slidesBefore + e.virtual.slidesAfter; r += 1) 1 === s.slidesPerGroup && f.push(f[f.length - 1] + t), m.push(m[m.length - 1] + t), e.virtualSize += t
                    }
                    if (0 === f.length && (f = [0]), 0 !== b) {
                        const t = e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
                        p.filter(((e, t) => !(s.cssMode && !s.loop) || t !== p.length - 1)).forEach((e => {
                            e.style[t] = "".concat(b, "px")
                        }))
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (b || 0)
                        })), e -= b;
                        const t = e > n ? e - n : 0;
                        f = f.map((e => e <= 0 ? -v : e > t ? t + g : e))
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        h.forEach((t => {
                            e += t + (b || 0)
                        })), e -= b;
                        const t = (s.slidesOffsetBefore || 0) + (s.slidesOffsetAfter || 0);
                        if (e + t < n) {
                            const s = (n - e - t) / 2;
                            f.forEach(((e, t) => {
                                f[t] = e - s
                            })), m.forEach(((e, t) => {
                                m[t] = e + s
                            }))
                        }
                    }
                    if (Object.assign(e, {
                            slides: p,
                            snapGrid: f,
                            slidesGrid: m,
                            slidesSizesGrid: h
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        (0, o.a)(r, "--swiper-centered-offset-before", "".concat(-f[0], "px")), (0, o.a)(r, "--swiper-centered-offset-after", "".concat(e.size / 2 - h[h.length - 1] / 2, "px"));
                        const t = -e.snapGrid[0],
                            s = -e.slidesGrid[0];
                        e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + s))
                    }
                    if (u !== c && e.emit("slidesLengthChange"), f.length !== w && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== y && e.emit("slidesGridLengthChange"), s.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !d && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        const t = "".concat(s.containerModifierClass, "backface-hidden"),
                            r = e.el.classList.contains(t);
                        u <= s.maxBackfaceHiddenSlides ? r || e.el.classList.add(t) : r && e.el.classList.remove(t)
                    }
                },
                updateAutoHeight: function(e) {
                    const t = this,
                        s = [],
                        r = t.virtual && t.params.virtual.enabled;
                    let i, n = 0;
                    "number" === typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                    const a = e => r ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
                    if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
                        if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
                            s.push(e)
                        }));
                        else
                            for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
                                const e = t.activeIndex + i;
                                if (e > t.slides.length && !r) break;
                                s.push(a(e))
                            } else s.push(a(t.activeIndex));
                    for (i = 0; i < s.length; i += 1)
                        if ("undefined" !== typeof s[i]) {
                            const e = s[i].offsetHeight;
                            n = e > n ? e : n
                        }(n || 0 === n) && (t.wrapperEl.style.height = "".concat(n, "px"))
                },
                updateSlidesOffset: function() {
                    const e = this,
                        t = e.slides,
                        s = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
                    for (let r = 0; r < t.length; r += 1) t[r].swiperSlideOffset = (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) - s - e.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    const t = this,
                        s = t.params,
                        {
                            slides: r,
                            rtlTranslate: i,
                            snapGrid: n
                        } = t;
                    if (0 === r.length) return;
                    "undefined" === typeof r[0].swiperSlideOffset && t.updateSlidesOffset();
                    let a = -e;
                    i && (a = e), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                    let o = s.spaceBetween;
                    "string" === typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" === typeof o && (o = parseFloat(o));
                    for (let l = 0; l < r.length; l += 1) {
                        const e = r[l];
                        let d = e.swiperSlideOffset;
                        s.cssMode && s.centeredSlides && (d -= r[0].swiperSlideOffset);
                        const c = (a + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + o),
                            p = (a - n[0] + (s.centeredSlides ? t.minTranslate() : 0) - d) / (e.swiperSlideSize + o),
                            u = -(a - d),
                            f = u + t.slidesSizesGrid[l],
                            m = u >= 0 && u <= t.size - t.slidesSizesGrid[l],
                            v = u >= 0 && u < t.size - 1 || f > 1 && f <= t.size || u <= 0 && f >= t.size;
                        v && (t.visibleSlides.push(e), t.visibleSlidesIndexes.push(l)), h(e, v, s.slideVisibleClass), h(e, m, s.slideFullyVisibleClass), e.progress = i ? -c : c, e.originalProgress = i ? -p : p
                    }
                },
                updateProgress: function(e) {
                    const t = this;
                    if ("undefined" === typeof e) {
                        const s = t.rtlTranslate ? -1 : 1;
                        e = t && t.translate && t.translate * s || 0
                    }
                    const s = t.params,
                        r = t.maxTranslate() - t.minTranslate();
                    let {
                        progress: i,
                        isBeginning: n,
                        isEnd: a,
                        progressLoop: o
                    } = t;
                    const l = n,
                        d = a;
                    if (0 === r) i = 0, n = !0, a = !0;
                    else {
                        i = (e - t.minTranslate()) / r;
                        const s = Math.abs(e - t.minTranslate()) < 1,
                            o = Math.abs(e - t.maxTranslate()) < 1;
                        n = s || i <= 0, a = o || i >= 1, s && (i = 0), o && (i = 1)
                    }
                    if (s.loop) {
                        const s = t.getSlideIndexByData(0),
                            r = t.getSlideIndexByData(t.slides.length - 1),
                            i = t.slidesGrid[s],
                            n = t.slidesGrid[r],
                            a = t.slidesGrid[t.slidesGrid.length - 1],
                            l = Math.abs(e);
                        o = l >= i ? (l - i) / a : (l + a - n) / a, o > 1 && (o -= 1)
                    }
                    Object.assign(t, {
                        progress: i,
                        progressLoop: o,
                        isBeginning: n,
                        isEnd: a
                    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), a && !d && t.emit("reachEnd toEdge"), (l && !n || d && !a) && t.emit("fromEdge"), t.emit("progress", i)
                },
                updateSlidesClasses: function() {
                    const e = this,
                        {
                            slides: t,
                            params: s,
                            slidesEl: r,
                            activeIndex: i
                        } = e,
                        n = e.virtual && s.virtual.enabled,
                        a = e.grid && s.grid && s.grid.rows > 1,
                        l = e => (0, o.e)(r, ".".concat(s.slideClass).concat(e, ", swiper-slide").concat(e))[0];
                    let d, c, p;
                    if (n)
                        if (s.loop) {
                            let t = i - e.virtual.slidesBefore;
                            t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), d = l('[data-swiper-slide-index="'.concat(t, '"]'))
                        } else d = l('[data-swiper-slide-index="'.concat(i, '"]'));
                    else a ? (d = t.find((e => e.column === i)), p = t.find((e => e.column === i + 1)), c = t.find((e => e.column === i - 1))) : d = t[i];
                    d && (a || (p = (0, o.r)(d, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && !p && (p = t[0]), c = (0, o.t)(d, ".".concat(s.slideClass, ", swiper-slide"))[0], s.loop && 0 === !c && (c = t[t.length - 1]))), t.forEach((e => {
                        v(e, e === d, s.slideActiveClass), v(e, e === p, s.slideNextClass), v(e, e === c, s.slidePrevClass)
                    })), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    const t = this,
                        s = t.rtlTranslate ? t.translate : -t.translate,
                        {
                            snapGrid: r,
                            params: i,
                            activeIndex: n,
                            realIndex: a,
                            snapIndex: o
                        } = t;
                    let l, d = e;
                    const c = e => {
                        let s = e - t.virtual.slidesBefore;
                        return s < 0 && (s = t.virtual.slides.length + s), s >= t.virtual.slides.length && (s -= t.virtual.slides.length), s
                    };
                    if ("undefined" === typeof d && (d = function(e) {
                            const {
                                slidesGrid: t,
                                params: s
                            } = e, r = e.rtlTranslate ? e.translate : -e.translate;
                            let i;
                            for (let n = 0; n < t.length; n += 1) "undefined" !== typeof t[n + 1] ? r >= t[n] && r < t[n + 1] - (t[n + 1] - t[n]) / 2 ? i = n : r >= t[n] && r < t[n + 1] && (i = n + 1) : r >= t[n] && (i = n);
                            return s.normalizeSlideIndex && (i < 0 || "undefined" === typeof i) && (i = 0), i
                        }(t)), r.indexOf(s) >= 0) l = r.indexOf(s);
                    else {
                        const e = Math.min(i.slidesPerGroupSkip, d);
                        l = e + Math.floor((d - e) / i.slidesPerGroup)
                    }
                    if (l >= r.length && (l = r.length - 1), d === n && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
                    if (d === n && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(d));
                    const p = t.grid && i.grid && i.grid.rows > 1;
                    let u;
                    if (t.virtual && i.virtual.enabled && i.loop) u = c(d);
                    else if (p) {
                        const e = t.slides.find((e => e.column === d));
                        let s = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(s) && (s = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(s / i.grid.rows)
                    } else if (t.slides[d]) {
                        const e = t.slides[d].getAttribute("data-swiper-slide-index");
                        u = e ? parseInt(e, 10) : d
                    } else u = d;
                    Object.assign(t, {
                        previousSnapIndex: o,
                        snapIndex: l,
                        previousRealIndex: a,
                        realIndex: u,
                        previousIndex: n,
                        activeIndex: d
                    }), t.initialized && y(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (a !== u && t.emit("realIndexChange"), t.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    const s = this,
                        r = s.params;
                    let i = e.closest(".".concat(r.slideClass, ", swiper-slide"));
                    !i && s.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
                        !i && e.matches && e.matches(".".concat(r.slideClass, ", swiper-slide")) && (i = e)
                    }));
                    let n, a = !1;
                    if (i)
                        for (let o = 0; o < s.slides.length; o += 1)
                            if (s.slides[o] === i) {
                                a = !0, n = o;
                                break
                            }
                    if (!i || !a) return s.clickedSlide = void 0, void(s.clickedIndex = void 0);
                    s.clickedSlide = i, s.virtual && s.params.virtual.enabled ? s.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : s.clickedIndex = n, r.slideToClickedSlide && void 0 !== s.clickedIndex && s.clickedIndex !== s.activeIndex && s.slideToClickedSlide()
                }
            };
            var S = {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    const {
                        params: t,
                        rtlTranslate: s,
                        translate: r,
                        wrapperEl: i
                    } = this;
                    if (t.virtualTranslate) return s ? -r : r;
                    if (t.cssMode) return r;
                    let n = (0, o.k)(i, e);
                    return n += this.cssOverflowAdjustment(), s && (n = -n), n || 0
                },
                setTranslate: function(e, t) {
                    const s = this,
                        {
                            rtlTranslate: r,
                            params: i,
                            wrapperEl: n,
                            progress: a
                        } = s;
                    let o, l = 0,
                        d = 0;
                    s.isHorizontal() ? l = r ? -e : e : d = e, i.roundLengths && (l = Math.floor(l), d = Math.floor(d)), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? l : d, i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -l : -d : i.virtualTranslate || (s.isHorizontal() ? l -= s.cssOverflowAdjustment() : d -= s.cssOverflowAdjustment(), n.style.transform = "translate3d(".concat(l, "px, ").concat(d, "px, ").concat(0, "px)"));
                    const c = s.maxTranslate() - s.minTranslate();
                    o = 0 === c ? 0 : (e - s.minTranslate()) / c, o !== a && s.updateProgress(e), s.emit("setTranslate", s.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, s, r, i) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === r && (r = !0);
                    const n = this,
                        {
                            params: a,
                            wrapperEl: l
                        } = n;
                    if (n.animating && a.preventInteractionOnTransition) return !1;
                    const d = n.minTranslate(),
                        c = n.maxTranslate();
                    let p;
                    if (p = r && e > d ? d : r && e < c ? c : e, n.updateProgress(p), a.cssMode) {
                        const e = n.isHorizontal();
                        if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                        else {
                            if (!n.support.smoothScroll) return (0, o.u)({
                                swiper: n,
                                targetPosition: -p,
                                side: e ? "left" : "top"
                            }), !0;
                            l.scrollTo({
                                [e ? "left" : "top"]: -p,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (n.setTransition(0), n.setTranslate(p), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionEnd"))) : (n.setTransition(t), n.setTranslate(p), s && (n.emit("beforeTransitionStart", t, i), n.emit("transitionStart")), n.animating || (n.animating = !0, n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd), n.onTranslateToWrapperTransitionEnd = null, delete n.onTranslateToWrapperTransitionEnd, n.animating = !1, s && n.emit("transitionEnd"))
                    }), n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))), !0
                }
            };

            function x(e) {
                let {
                    swiper: t,
                    runCallbacks: s,
                    direction: r,
                    step: i
                } = e;
                const {
                    activeIndex: n,
                    previousIndex: a
                } = t;
                let o = r;
                o || (o = n > a ? "next" : n < a ? "prev" : "reset"), t.emit("transition".concat(i)), s && "reset" === o ? t.emit("slideResetTransition".concat(i)) : s && n !== a && (t.emit("slideChangeTransition".concat(i)), "next" === o ? t.emit("slideNextTransition".concat(i)) : t.emit("slidePrevTransition".concat(i)))
            }
            var T = {
                slideTo: function(e, t, s, r, i) {
                    void 0 === e && (e = 0), void 0 === s && (s = !0), "string" === typeof e && (e = parseInt(e, 10));
                    const n = this;
                    let a = e;
                    a < 0 && (a = 0);
                    const {
                        params: l,
                        snapGrid: d,
                        slidesGrid: c,
                        previousIndex: p,
                        activeIndex: u,
                        rtlTranslate: m,
                        wrapperEl: h,
                        enabled: v
                    } = n;
                    if (!v && !r && !i || n.destroyed || n.animating && l.preventInteractionOnTransition) return !1;
                    "undefined" === typeof t && (t = n.params.speed);
                    const g = Math.min(n.params.slidesPerGroupSkip, a);
                    let w = g + Math.floor((a - g) / n.params.slidesPerGroup);
                    w >= d.length && (w = d.length - 1);
                    const y = -d[w];
                    if (l.normalizeSlideIndex)
                        for (let o = 0; o < c.length; o += 1) {
                            const e = -Math.floor(100 * y),
                                t = Math.floor(100 * c[o]),
                                s = Math.floor(100 * c[o + 1]);
                            "undefined" !== typeof c[o + 1] ? e >= t && e < s - (s - t) / 2 ? a = o : e >= t && e < s && (a = o + 1) : e >= t && (a = o)
                        }
                    if (n.initialized && a !== u) {
                        if (!n.allowSlideNext && (m ? y > n.translate && y > n.minTranslate() : y < n.translate && y < n.minTranslate())) return !1;
                        if (!n.allowSlidePrev && y > n.translate && y > n.maxTranslate() && (u || 0) !== a) return !1
                    }
                    let b;
                    a !== (p || 0) && s && n.emit("beforeSlideChangeStart"), n.updateProgress(y), b = a > u ? "next" : a < u ? "prev" : "reset";
                    const S = n.virtual && n.params.virtual.enabled;
                    if (!(S && i) && (m && -y === n.translate || !m && y === n.translate)) return n.updateActiveIndex(a), l.autoHeight && n.updateAutoHeight(), n.updateSlidesClasses(), "slide" !== l.effect && n.setTranslate(y), "reset" !== b && (n.transitionStart(s, b), n.transitionEnd(s, b)), !1;
                    if (l.cssMode) {
                        const e = n.isHorizontal(),
                            s = m ? y : -y;
                        if (0 === t) S && (n.wrapperEl.style.scrollSnapType = "none", n._immediateVirtual = !0), S && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                            h[e ? "scrollLeft" : "scrollTop"] = s
                        }))) : h[e ? "scrollLeft" : "scrollTop"] = s, S && requestAnimationFrame((() => {
                            n.wrapperEl.style.scrollSnapType = "", n._immediateVirtual = !1
                        }));
                        else {
                            if (!n.support.smoothScroll) return (0, o.u)({
                                swiper: n,
                                targetPosition: s,
                                side: e ? "left" : "top"
                            }), !0;
                            h.scrollTo({
                                [e ? "left" : "top"]: s,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    const x = f().isSafari;
                    return S && !i && x && n.isElement && n.virtual.update(!1, !1, a), n.setTransition(t), n.setTranslate(y), n.updateActiveIndex(a), n.updateSlidesClasses(), n.emit("beforeTransitionStart", t, r), n.transitionStart(s, b), 0 === t ? n.transitionEnd(s, b) : n.animating || (n.animating = !0, n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function(e) {
                        n && !n.destroyed && e.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd), n.onSlideToWrapperTransitionEnd = null, delete n.onSlideToWrapperTransitionEnd, n.transitionEnd(s, b))
                    }), n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e, t, s, r) {
                    if (void 0 === e && (e = 0), void 0 === s && (s = !0), "string" === typeof e) {
                        e = parseInt(e, 10)
                    }
                    const i = this;
                    if (i.destroyed) return;
                    "undefined" === typeof t && (t = i.params.speed);
                    const n = i.grid && i.params.grid && i.params.grid.rows > 1;
                    let a = e;
                    if (i.params.loop)
                        if (i.virtual && i.params.virtual.enabled) a += i.virtual.slidesBefore;
                        else {
                            let e;
                            if (n) {
                                const t = a * i.params.grid.rows;
                                e = i.slides.find((e => 1 * e.getAttribute("data-swiper-slide-index") === t)).column
                            } else e = i.getSlideIndexByData(a);
                            const t = n ? Math.ceil(i.slides.length / i.params.grid.rows) : i.slides.length,
                                {
                                    centeredSlides: s
                                } = i.params;
                            let o = i.params.slidesPerView;
                            "auto" === o ? o = i.slidesPerViewDynamic() : (o = Math.ceil(parseFloat(i.params.slidesPerView, 10)), s && o % 2 === 0 && (o += 1));
                            let l = t - e < o;
                            if (s && (l = l || e < Math.ceil(o / 2)), r && s && "auto" !== i.params.slidesPerView && !n && (l = !1), l) {
                                const r = s ? e < i.activeIndex ? "prev" : "next" : e - i.activeIndex - 1 < i.params.slidesPerView ? "next" : "prev";
                                i.loopFix({
                                    direction: r,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === r ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === r ? i.realIndex : void 0
                                })
                            }
                            if (n) {
                                const e = a * i.params.grid.rows;
                                a = i.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)).column
                            } else a = i.getSlideIndexByData(a)
                        }
                    return requestAnimationFrame((() => {
                        i.slideTo(a, t, s, r)
                    })), i
                },
                slideNext: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const r = this,
                        {
                            enabled: i,
                            params: n,
                            animating: a
                        } = r;
                    if (!i || r.destroyed) return r;
                    "undefined" === typeof e && (e = r.params.speed);
                    let o = n.slidesPerGroup;
                    "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (o = Math.max(r.slidesPerViewDynamic("current", !0), 1));
                    const l = r.activeIndex < n.slidesPerGroupSkip ? 1 : o,
                        d = r.virtual && n.virtual.enabled;
                    if (n.loop) {
                        if (a && !d && n.loopPreventsSliding) return !1;
                        if (r.loopFix({
                                direction: "next"
                            }), r._clientLeft = r.wrapperEl.clientLeft, r.activeIndex === r.slides.length - 1 && n.cssMode) return requestAnimationFrame((() => {
                            r.slideTo(r.activeIndex + l, e, t, s)
                        })), !0
                    }
                    return n.rewind && r.isEnd ? r.slideTo(0, e, t, s) : r.slideTo(r.activeIndex + l, e, t, s)
                },
                slidePrev: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const r = this,
                        {
                            params: i,
                            snapGrid: n,
                            slidesGrid: a,
                            rtlTranslate: o,
                            enabled: l,
                            animating: d
                        } = r;
                    if (!l || r.destroyed) return r;
                    "undefined" === typeof e && (e = r.params.speed);
                    const c = r.virtual && i.virtual.enabled;
                    if (i.loop) {
                        if (d && !c && i.loopPreventsSliding) return !1;
                        r.loopFix({
                            direction: "prev"
                        }), r._clientLeft = r.wrapperEl.clientLeft
                    }

                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    const u = p(o ? r.translate : -r.translate),
                        f = n.map((e => p(e))),
                        m = i.freeMode && i.freeMode.enabled;
                    let h = n[f.indexOf(u) - 1];
                    if ("undefined" === typeof h && (i.cssMode || m)) {
                        let e;
                        n.forEach(((t, s) => {
                            u >= t && (e = s)
                        })), "undefined" !== typeof e && (h = m ? n[e] : n[e > 0 ? e - 1 : e])
                    }
                    let v = 0;
                    if ("undefined" !== typeof h && (v = a.indexOf(h), v < 0 && (v = r.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (v = v - r.slidesPerViewDynamic("previous", !0) + 1, v = Math.max(v, 0))), i.rewind && r.isBeginning) {
                        const i = r.params.virtual && r.params.virtual.enabled && r.virtual ? r.virtual.slides.length - 1 : r.slides.length - 1;
                        return r.slideTo(i, e, t, s)
                    }
                    return i.loop && 0 === r.activeIndex && i.cssMode ? (requestAnimationFrame((() => {
                        r.slideTo(v, e, t, s)
                    })), !0) : r.slideTo(v, e, t, s)
                },
                slideReset: function(e, t, s) {
                    void 0 === t && (t = !0);
                    const r = this;
                    if (!r.destroyed) return "undefined" === typeof e && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, s)
                },
                slideToClosest: function(e, t, s, r) {
                    void 0 === t && (t = !0), void 0 === r && (r = .5);
                    const i = this;
                    if (i.destroyed) return;
                    "undefined" === typeof e && (e = i.params.speed);
                    let n = i.activeIndex;
                    const a = Math.min(i.params.slidesPerGroupSkip, n),
                        o = a + Math.floor((n - a) / i.params.slidesPerGroup),
                        l = i.rtlTranslate ? i.translate : -i.translate;
                    if (l >= i.snapGrid[o]) {
                        const e = i.snapGrid[o];
                        l - e > (i.snapGrid[o + 1] - e) * r && (n += i.params.slidesPerGroup)
                    } else {
                        const e = i.snapGrid[o - 1];
                        l - e <= (i.snapGrid[o] - e) * r && (n -= i.params.slidesPerGroup)
                    }
                    return n = Math.max(n, 0), n = Math.min(n, i.slidesGrid.length - 1), i.slideTo(n, e, t, s)
                },
                slideToClickedSlide: function() {
                    const e = this;
                    if (e.destroyed) return;
                    const {
                        params: t,
                        slidesEl: s
                    } = e, r = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
                    let i, n = e.getSlideIndexWhenGrid(e.clickedIndex);
                    const a = e.isElement ? "swiper-slide" : ".".concat(t.slideClass),
                        l = e.grid && e.params.grid && e.params.grid.rows > 1;
                    if (t.loop) {
                        if (e.animating) return;
                        i = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? e.slideToLoop(i) : n > (l ? (e.slides.length - r) / 2 - (e.params.grid.rows - 1) : e.slides.length - r) ? (e.loopFix(), n = e.getSlideIndex((0, o.e)(s, "".concat(a, '[data-swiper-slide-index="').concat(i, '"]'))[0]), (0, o.n)((() => {
                            e.slideTo(n)
                        }))) : e.slideTo(n)
                    } else e.slideTo(n)
                }
            };
            var E = {
                loopCreate: function(e, t) {
                    const s = this,
                        {
                            params: r,
                            slidesEl: i
                        } = s;
                    if (!r.loop || s.virtual && s.params.virtual.enabled) return;
                    const n = () => {
                            (0, o.e)(i, ".".concat(r.slideClass, ", swiper-slide")).forEach(((e, t) => {
                                e.setAttribute("data-swiper-slide-index", t)
                            }))
                        },
                        a = s.grid && r.grid && r.grid.rows > 1;
                    r.loopAddBlankSlides && (r.slidesPerGroup > 1 || a) && (() => {
                        const e = (0, o.e)(i, ".".concat(r.slideBlankClass));
                        e.forEach((e => {
                            e.remove()
                        })), e.length > 0 && (s.recalcSlides(), s.updateSlides())
                    })();
                    const l = r.slidesPerGroup * (a ? r.grid.rows : 1),
                        d = s.slides.length % l !== 0,
                        c = a && s.slides.length % r.grid.rows !== 0,
                        p = e => {
                            for (let t = 0; t < e; t += 1) {
                                const e = s.isElement ? (0, o.c)("swiper-slide", [r.slideBlankClass]) : (0, o.c)("div", [r.slideClass, r.slideBlankClass]);
                                s.slidesEl.append(e)
                            }
                        };
                    if (d) {
                        if (r.loopAddBlankSlides) {
                            p(l - s.slides.length % l), s.recalcSlides(), s.updateSlides()
                        } else(0, o.v)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        n()
                    } else if (c) {
                        if (r.loopAddBlankSlides) {
                            p(r.grid.rows - s.slides.length % r.grid.rows), s.recalcSlides(), s.updateSlides()
                        } else(0, o.v)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)");
                        n()
                    } else n();
                    s.loopFix({
                        slideRealIndex: e,
                        direction: r.centeredSlides ? void 0 : "next",
                        initial: t
                    })
                },
                loopFix: function(e) {
                    let {
                        slideRealIndex: t,
                        slideTo: s = !0,
                        direction: i,
                        setTranslate: n,
                        activeSlideIndex: a,
                        initial: l,
                        byController: d,
                        byMousewheel: c
                    } = void 0 === e ? {} : e;
                    const p = this;
                    if (!p.params.loop) return;
                    p.emit("beforeLoopFix");
                    const {
                        slides: u,
                        allowSlidePrev: f,
                        allowSlideNext: m,
                        slidesEl: h,
                        params: v
                    } = p, {
                        centeredSlides: g,
                        initialSlide: w
                    } = v;
                    if (p.allowSlidePrev = !0, p.allowSlideNext = !0, p.virtual && v.virtual.enabled) return s && (v.centeredSlides || 0 !== p.snapIndex ? v.centeredSlides && p.snapIndex < v.slidesPerView ? p.slideTo(p.virtual.slides.length + p.snapIndex, 0, !1, !0) : p.snapIndex === p.snapGrid.length - 1 && p.slideTo(p.virtual.slidesBefore, 0, !1, !0) : p.slideTo(p.virtual.slides.length, 0, !1, !0)), p.allowSlidePrev = f, p.allowSlideNext = m, void p.emit("loopFix");
                    let y = v.slidesPerView;
                    "auto" === y ? y = p.slidesPerViewDynamic() : (y = Math.ceil(parseFloat(v.slidesPerView, 10)), g && y % 2 === 0 && (y += 1));
                    const b = v.slidesPerGroupAuto ? y : v.slidesPerGroup;
                    let S = g ? Math.max(b, Math.ceil(y / 2)) : b;
                    S % b !== 0 && (S += b - S % b), S += v.loopAdditionalSlides, p.loopedSlides = S;
                    const x = p.grid && v.grid && v.grid.rows > 1;
                    u.length < y + S || "cards" === p.params.effect && u.length < y + 2 * S ? (0, o.v)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : x && "row" === v.grid.fill && (0, o.v)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    const T = [],
                        E = [],
                        M = x ? Math.ceil(u.length / v.grid.rows) : u.length,
                        C = l && M - w < y && !g;
                    let A = C ? w : p.activeIndex;
                    "undefined" === typeof a ? a = p.getSlideIndex(u.find((e => e.classList.contains(v.slideActiveClass)))) : A = a;
                    const P = "next" === i || !i,
                        I = "prev" === i || !i;
                    let k = 0,
                        L = 0;
                    const O = (x ? u[a].column : a) + (g && "undefined" === typeof n ? -y / 2 + .5 : 0);
                    if (O < S) {
                        k = Math.max(S - O, b);
                        for (let e = 0; e < S - O; e += 1) {
                            const t = e - Math.floor(e / M) * M;
                            if (x) {
                                const e = M - t - 1;
                                for (let t = u.length - 1; t >= 0; t -= 1) u[t].column === e && T.push(t)
                            } else T.push(M - t - 1)
                        }
                    } else if (O + y > M - S) {
                        L = Math.max(O - (M - 2 * S), b), C && (L = Math.max(L, y - M + w + 1));
                        for (let e = 0; e < L; e += 1) {
                            const t = e - Math.floor(e / M) * M;
                            x ? u.forEach(((e, s) => {
                                e.column === t && E.push(s)
                            })) : E.push(t)
                        }
                    }
                    if (p.__preventObserver__ = !0, requestAnimationFrame((() => {
                            p.__preventObserver__ = !1
                        })), "cards" === p.params.effect && u.length < y + 2 * S && (E.includes(a) && E.splice(E.indexOf(a), 1), T.includes(a) && T.splice(T.indexOf(a), 1)), I && T.forEach((e => {
                            u[e].swiperLoopMoveDOM = !0, h.prepend(u[e]), u[e].swiperLoopMoveDOM = !1
                        })), P && E.forEach((e => {
                            u[e].swiperLoopMoveDOM = !0, h.append(u[e]), u[e].swiperLoopMoveDOM = !1
                        })), p.recalcSlides(), "auto" === v.slidesPerView ? p.updateSlides() : x && (T.length > 0 && I || E.length > 0 && P) && p.slides.forEach(((e, t) => {
                            p.grid.updateSlide(t, e, p.slides)
                        })), v.watchSlidesProgress && p.updateSlidesOffset(), s)
                        if (T.length > 0 && I) {
                            if ("undefined" === typeof t) {
                                const e = p.slidesGrid[A],
                                    t = p.slidesGrid[A + k] - e;
                                c ? p.setTranslate(p.translate - t) : (p.slideTo(A + Math.ceil(k), 0, !1, !0), n && (p.touchEventsData.startTranslate = p.touchEventsData.startTranslate - t, p.touchEventsData.currentTranslate = p.touchEventsData.currentTranslate - t))
                            } else if (n) {
                                const e = x ? T.length / v.grid.rows : T.length;
                                p.slideTo(p.activeIndex + e, 0, !1, !0), p.touchEventsData.currentTranslate = p.translate
                            }
                        } else if (E.length > 0 && P)
                        if ("undefined" === typeof t) {
                            const e = p.slidesGrid[A],
                                t = p.slidesGrid[A - L] - e;
                            c ? p.setTranslate(p.translate - t) : (p.slideTo(A - L, 0, !1, !0), n && (p.touchEventsData.startTranslate = p.touchEventsData.startTranslate - t, p.touchEventsData.currentTranslate = p.touchEventsData.currentTranslate - t))
                        } else {
                            const e = x ? E.length / v.grid.rows : E.length;
                            p.slideTo(p.activeIndex - e, 0, !1, !0)
                        }
                    if (p.allowSlidePrev = f, p.allowSlideNext = m, p.controller && p.controller.control && !d) {
                        const e = {
                            slideRealIndex: t,
                            direction: i,
                            setTranslate: n,
                            activeSlideIndex: a,
                            byController: !0
                        };
                        Array.isArray(p.controller.control) ? p.controller.control.forEach((t => {
                            !t.destroyed && t.params.loop && t.loopFix((0, r.A)((0, r.A)({}, e), {}, {
                                slideTo: t.params.slidesPerView === v.slidesPerView && s
                            }))
                        })) : p.controller.control instanceof p.constructor && p.controller.control.params.loop && p.controller.control.loopFix((0, r.A)((0, r.A)({}, e), {}, {
                            slideTo: p.controller.control.params.slidesPerView === v.slidesPerView && s
                        }))
                    }
                    p.emit("loopFix")
                },
                loopDestroy: function() {
                    const e = this,
                        {
                            params: t,
                            slidesEl: s
                        } = e;
                    if (!t.loop || !s || e.virtual && e.params.virtual.enabled) return;
                    e.recalcSlides();
                    const r = [];
                    e.slides.forEach((e => {
                        const t = "undefined" === typeof e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
                        r[t] = e
                    })), e.slides.forEach((e => {
                        e.removeAttribute("data-swiper-slide-index")
                    })), r.forEach((e => {
                        s.append(e)
                    })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
                }
            };

            function M(e, t, s) {
                const r = (0, a.a)(),
                    {
                        params: i
                    } = e,
                    n = i.edgeSwipeDetection,
                    o = i.edgeSwipeThreshold;
                return !n || !(s <= o || s >= r.innerWidth - o) || "prevent" === n && (t.preventDefault(), !0)
            }

            function C(e) {
                const t = this,
                    s = (0, a.g)();
                let r = e;
                r.originalEvent && (r = r.originalEvent);
                const i = t.touchEventsData;
                if ("pointerdown" === r.type) {
                    if (null !== i.pointerId && i.pointerId !== r.pointerId) return;
                    i.pointerId = r.pointerId
                } else "touchstart" === r.type && 1 === r.targetTouches.length && (i.touchId = r.targetTouches[0].identifier);
                if ("touchstart" === r.type) return void M(t, r, r.targetTouches[0].pageX);
                const {
                    params: n,
                    touches: l,
                    enabled: d
                } = t;
                if (!d) return;
                if (!n.simulateTouch && "mouse" === r.pointerType) return;
                if (t.animating && n.preventInteractionOnTransition) return;
                !t.animating && n.cssMode && n.loop && t.loopFix();
                let c = r.target;
                if ("wrapper" === n.touchEventsTarget && !(0, o.w)(c, t.wrapperEl)) return;
                if ("which" in r && 3 === r.which) return;
                if ("button" in r && r.button > 0) return;
                if (i.isTouched && i.isMoved) return;
                const p = !!n.noSwipingClass && "" !== n.noSwipingClass,
                    u = r.composedPath ? r.composedPath() : r.path;
                p && r.target && r.target.shadowRoot && u && (c = u[0]);
                const f = n.noSwipingSelector ? n.noSwipingSelector : ".".concat(n.noSwipingClass),
                    m = !(!r.target || !r.target.shadowRoot);
                if (n.noSwiping && (m ? function(e, t) {
                        return void 0 === t && (t = this),
                            function t(s) {
                                if (!s || s === (0, a.g)() || s === (0, a.a)()) return null;
                                s.assignedSlot && (s = s.assignedSlot);
                                const r = s.closest(e);
                                return r || s.getRootNode ? r || t(s.getRootNode().host) : null
                            }(t)
                    }(f, c) : c.closest(f))) return void(t.allowClick = !0);
                if (n.swipeHandler && !c.closest(n.swipeHandler)) return;
                l.currentX = r.pageX, l.currentY = r.pageY;
                const h = l.currentX,
                    v = l.currentY;
                if (!M(t, r, h)) return;
                Object.assign(i, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = h, l.startY = v, i.touchStartTime = (0, o.f)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1);
                let g = !0;
                c.matches(i.focusableElements) && (g = !1, "SELECT" === c.nodeName && (i.isTouched = !1)), s.activeElement && s.activeElement.matches(i.focusableElements) && s.activeElement !== c && ("mouse" === r.pointerType || "mouse" !== r.pointerType && !c.matches(i.focusableElements)) && s.activeElement.blur();
                const w = g && t.allowTouchMove && n.touchStartPreventDefault;
                !n.touchStartForcePreventDefault && !w || c.isContentEditable || r.preventDefault(), n.freeMode && n.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", r)
            }

            function A(e) {
                const t = (0, a.g)(),
                    s = this,
                    r = s.touchEventsData,
                    {
                        params: i,
                        touches: n,
                        rtlTranslate: l,
                        enabled: d
                    } = s;
                if (!d) return;
                if (!i.simulateTouch && "mouse" === e.pointerType) return;
                let c, p = e;
                if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
                    if (null !== r.touchId) return;
                    if (p.pointerId !== r.pointerId) return
                }
                if ("touchmove" === p.type) {
                    if (c = [...p.changedTouches].find((e => e.identifier === r.touchId)), !c || c.identifier !== r.touchId) return
                } else c = p;
                if (!r.isTouched) return void(r.startMoving && r.isScrolling && s.emit("touchMoveOpposite", p));
                const u = c.pageX,
                    f = c.pageY;
                if (p.preventedByNestedSwiper) return n.startX = u, void(n.startY = f);
                if (!s.allowTouchMove) return p.target.matches(r.focusableElements) || (s.allowClick = !1), void(r.isTouched && (Object.assign(n, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f
                }), r.touchStartTime = (0, o.f)()));
                if (i.touchReleaseOnEdges && !i.loop)
                    if (s.isVertical()) {
                        if (f < n.startY && s.translate <= s.maxTranslate() || f > n.startY && s.translate >= s.minTranslate()) return r.isTouched = !1, void(r.isMoved = !1)
                    } else {
                        if (l && (u > n.startX && -s.translate <= s.maxTranslate() || u < n.startX && -s.translate >= s.minTranslate())) return;
                        if (!l && (u < n.startX && s.translate <= s.maxTranslate() || u > n.startX && s.translate >= s.minTranslate())) return
                    }
                if (t.activeElement && t.activeElement.matches(r.focusableElements) && t.activeElement !== p.target && "mouse" !== p.pointerType && t.activeElement.blur(), t.activeElement && p.target === t.activeElement && p.target.matches(r.focusableElements)) return r.isMoved = !0, void(s.allowClick = !1);
                r.allowTouchCallbacks && s.emit("touchMove", p), n.previousX = n.currentX, n.previousY = n.currentY, n.currentX = u, n.currentY = f;
                const m = n.currentX - n.startX,
                    h = n.currentY - n.startY;
                if (s.params.threshold && Math.sqrt(m ** 2 + h ** 2) < s.params.threshold) return;
                if ("undefined" === typeof r.isScrolling) {
                    let e;
                    s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? r.isScrolling = !1 : m * m + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(m)) / Math.PI, r.isScrolling = s.isHorizontal() ? e > i.touchAngle : 90 - e > i.touchAngle)
                }
                if (r.isScrolling && s.emit("touchMoveOpposite", p), "undefined" === typeof r.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (r.startMoving = !0)), r.isScrolling || "touchmove" === p.type && r.preventTouchMoveFromPointerMove) return void(r.isTouched = !1);
                if (!r.startMoving) return;
                s.allowClick = !1, !i.cssMode && p.cancelable && p.preventDefault(), i.touchMoveStopPropagation && !i.nested && p.stopPropagation();
                let v = s.isHorizontal() ? m : h,
                    g = s.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
                i.oneWayMovement && (v = Math.abs(v) * (l ? 1 : -1), g = Math.abs(g) * (l ? 1 : -1)), n.diff = v, v *= i.touchRatio, l && (v = -v, g = -g);
                const w = s.touchesDirection;
                s.swipeDirection = v > 0 ? "prev" : "next", s.touchesDirection = g > 0 ? "prev" : "next";
                const y = s.params.loop && !i.cssMode,
                    b = "next" === s.touchesDirection && s.allowSlideNext || "prev" === s.touchesDirection && s.allowSlidePrev;
                if (!r.isMoved) {
                    if (y && b && s.loopFix({
                            direction: s.swipeDirection
                        }), r.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
                        const e = new window.CustomEvent("transitionend", {
                            bubbles: !0,
                            cancelable: !0,
                            detail: {
                                bySwiperTouchMove: !0
                            }
                        });
                        s.wrapperEl.dispatchEvent(e)
                    }
                    r.allowMomentumBounce = !1, !i.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", p)
                }
                if ((new Date).getTime(), !1 !== i._loopSwapReset && r.isMoved && r.allowThresholdMove && w !== s.touchesDirection && y && b && Math.abs(v) >= 1) return Object.assign(n, {
                    startX: u,
                    startY: f,
                    currentX: u,
                    currentY: f,
                    startTranslate: r.currentTranslate
                }), r.loopSwapReset = !0, void(r.startTranslate = r.currentTranslate);
                s.emit("sliderMove", p), r.isMoved = !0, r.currentTranslate = v + r.startTranslate;
                let S = !0,
                    x = i.resistanceRatio;
                if (i.touchReleaseOnEdges && (x = 0), v > 0 ? (y && b && r.allowThresholdMove && r.currentTranslate > (i.centeredSlides ? s.minTranslate() - s.slidesSizesGrid[s.activeIndex + 1] - ("auto" !== i.slidesPerView && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.activeIndex + 1] + s.params.spaceBetween : 0) - s.params.spaceBetween : s.minTranslate()) && s.loopFix({
                        direction: "prev",
                        setTranslate: !0,
                        activeSlideIndex: 0
                    }), r.currentTranslate > s.minTranslate() && (S = !1, i.resistance && (r.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + r.startTranslate + v) ** x))) : v < 0 && (y && b && r.allowThresholdMove && r.currentTranslate < (i.centeredSlides ? s.maxTranslate() + s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween + ("auto" !== i.slidesPerView && s.slides.length - i.slidesPerView >= 2 ? s.slidesSizesGrid[s.slidesSizesGrid.length - 1] + s.params.spaceBetween : 0) : s.maxTranslate()) && s.loopFix({
                        direction: "next",
                        setTranslate: !0,
                        activeSlideIndex: s.slides.length - ("auto" === i.slidesPerView ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(i.slidesPerView, 10)))
                    }), r.currentTranslate < s.maxTranslate() && (S = !1, i.resistance && (r.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - r.startTranslate - v) ** x))), S && (p.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), s.allowSlidePrev || s.allowSlideNext || (r.currentTranslate = r.startTranslate), i.threshold > 0) {
                    if (!(Math.abs(v) > i.threshold || r.allowThresholdMove)) return void(r.currentTranslate = r.startTranslate);
                    if (!r.allowThresholdMove) return r.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, r.currentTranslate = r.startTranslate, void(n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY)
                }
                i.followFinger && !i.cssMode && ((i.freeMode && i.freeMode.enabled && s.freeMode || i.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), i.freeMode && i.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(r.currentTranslate), s.setTranslate(r.currentTranslate))
            }

            function P(e) {
                const t = this,
                    s = t.touchEventsData;
                let r, i = e;
                i.originalEvent && (i = i.originalEvent);
                if ("touchend" === i.type || "touchcancel" === i.type) {
                    if (r = [...i.changedTouches].find((e => e.identifier === s.touchId)), !r || r.identifier !== s.touchId) return
                } else {
                    if (null !== s.touchId) return;
                    if (i.pointerId !== s.pointerId) return;
                    r = i
                }
                if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(i.type)) {
                    if (!(["pointercancel", "contextmenu"].includes(i.type) && (t.browser.isSafari || t.browser.isWebView))) return
                }
                s.pointerId = null, s.touchId = null;
                const {
                    params: n,
                    touches: a,
                    rtlTranslate: l,
                    slidesGrid: d,
                    enabled: c
                } = t;
                if (!c) return;
                if (!n.simulateTouch && "mouse" === i.pointerType) return;
                if (s.allowTouchCallbacks && t.emit("touchEnd", i), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && n.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void(s.startMoving = !1);
                n.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                const p = (0, o.f)(),
                    u = p - s.touchStartTime;
                if (t.allowClick) {
                    const e = i.path || i.composedPath && i.composedPath();
                    t.updateClickedSlide(e && e[0] || i.target, e), t.emit("tap click", i), u < 300 && p - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", i)
                }
                if (s.lastClickTime = (0, o.f)(), (0, o.n)((() => {
                        t.destroyed || (t.allowClick = !0)
                    })), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff && !s.loopSwapReset || s.currentTranslate === s.startTranslate && !s.loopSwapReset) return s.isTouched = !1, s.isMoved = !1, void(s.startMoving = !1);
                let f;
                if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, f = n.followFinger ? l ? t.translate : -t.translate : -s.currentTranslate, n.cssMode) return;
                if (n.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                    currentPos: f
                });
                const m = f >= -t.maxTranslate() && !t.params.loop;
                let h = 0,
                    v = t.slidesSizesGrid[0];
                for (let o = 0; o < d.length; o += o < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                    const e = o < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                    "undefined" !== typeof d[o + e] ? (m || f >= d[o] && f < d[o + e]) && (h = o, v = d[o + e] - d[o]) : (m || f >= d[o]) && (h = o, v = d[d.length - 1] - d[d.length - 2])
                }
                let g = null,
                    w = null;
                n.rewind && (t.isBeginning ? w = n.virtual && n.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
                const y = (f - d[h]) / v,
                    b = h < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                if (u > n.longSwipesMs) {
                    if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                    "next" === t.swipeDirection && (y >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? g : h + b) : t.slideTo(h)), "prev" === t.swipeDirection && (y > 1 - n.longSwipesRatio ? t.slideTo(h + b) : null !== w && y < 0 && Math.abs(y) > n.longSwipesRatio ? t.slideTo(w) : t.slideTo(h))
                } else {
                    if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                    t.navigation && (i.target === t.navigation.nextEl || i.target === t.navigation.prevEl) ? i.target === t.navigation.nextEl ? t.slideTo(h + b) : t.slideTo(h) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : h + b), "prev" === t.swipeDirection && t.slideTo(null !== w ? w : h))
                }
            }

            function I() {
                const e = this,
                    {
                        params: t,
                        el: s
                    } = e;
                if (s && 0 === s.offsetWidth) return;
                t.breakpoints && e.setBreakpoint();
                const {
                    allowSlideNext: r,
                    allowSlidePrev: i,
                    snapGrid: n
                } = e, a = e.virtual && e.params.virtual.enabled;
                e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
                const o = a && t.loop;
                !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !a ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
                    e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
                }), 500)), e.allowSlidePrev = i, e.allowSlideNext = r, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
            }

            function k(e) {
                const t = this;
                t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
            }

            function L() {
                const e = this,
                    {
                        wrapperEl: t,
                        rtlTranslate: s,
                        enabled: r
                    } = e;
                if (!r) return;
                let i;
                e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
                const n = e.maxTranslate() - e.minTranslate();
                i = 0 === n ? 0 : (e.translate - e.minTranslate()) / n, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
            }

            function O(e) {
                const t = this;
                g(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
            }

            function _() {
                const e = this;
                e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
            }
            const z = (e, t) => {
                const s = (0, a.g)(),
                    {
                        params: r,
                        el: i,
                        wrapperEl: n,
                        device: o
                    } = e,
                    l = !!r.nested,
                    d = "on" === t ? "addEventListener" : "removeEventListener",
                    c = t;
                i && "string" !== typeof i && (s[d]("touchstart", e.onDocumentTouchStart, {
                    passive: !1,
                    capture: l
                }), i[d]("touchstart", e.onTouchStart, {
                    passive: !1
                }), i[d]("pointerdown", e.onTouchStart, {
                    passive: !1
                }), s[d]("touchmove", e.onTouchMove, {
                    passive: !1,
                    capture: l
                }), s[d]("pointermove", e.onTouchMove, {
                    passive: !1,
                    capture: l
                }), s[d]("touchend", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerup", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointercancel", e.onTouchEnd, {
                    passive: !0
                }), s[d]("touchcancel", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerout", e.onTouchEnd, {
                    passive: !0
                }), s[d]("pointerleave", e.onTouchEnd, {
                    passive: !0
                }), s[d]("contextmenu", e.onTouchEnd, {
                    passive: !0
                }), (r.preventClicks || r.preventClicksPropagation) && i[d]("click", e.onClick, !0), r.cssMode && n[d]("scroll", e.onScroll), r.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", I, !0) : e[c]("observerUpdate", I, !0), i[d]("load", e.onLoad, {
                    capture: !0
                }))
            };
            const G = (e, t) => e.grid && t.grid && t.grid.rows > 1;
            var N = {
                init: !0,
                direction: "horizontal",
                oneWayMovement: !1,
                swiperElementNodeName: "SWIPER-CONTAINER",
                touchEventsTarget: "wrapper",
                initialSlide: 0,
                speed: 300,
                cssMode: !1,
                updateOnWindowResize: !0,
                resizeObserver: !0,
                nested: !1,
                createElements: !1,
                eventsPrefix: "swiper",
                enabled: !0,
                focusableElements: "input, select, option, textarea, button, video, label",
                width: null,
                height: null,
                preventInteractionOnTransition: !1,
                userAgent: null,
                url: null,
                edgeSwipeDetection: !1,
                edgeSwipeThreshold: 20,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                breakpoints: void 0,
                breakpointsBase: "window",
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerGroup: 1,
                slidesPerGroupSkip: 0,
                slidesPerGroupAuto: !1,
                centeredSlides: !1,
                centeredSlidesBounds: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                normalizeSlideIndex: !0,
                centerInsufficientSlides: !1,
                watchOverflow: !0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                allowTouchMove: !0,
                threshold: 5,
                touchMoveStopPropagation: !1,
                touchStartPreventDefault: !0,
                touchStartForcePreventDefault: !1,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                resistance: !0,
                resistanceRatio: .85,
                watchSlidesProgress: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                loop: !1,
                loopAddBlankSlides: !0,
                loopAdditionalSlides: 0,
                loopPreventsSliding: !0,
                rewind: !1,
                allowSlidePrev: !0,
                allowSlideNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                noSwipingSelector: null,
                passiveListeners: !0,
                maxBackfaceHiddenSlides: 10,
                containerModifierClass: "swiper-",
                slideClass: "swiper-slide",
                slideBlankClass: "swiper-slide-blank",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideFullyVisibleClass: "swiper-slide-fully-visible",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                lazyPreloaderClass: "swiper-lazy-preloader",
                lazyPreloadPrevNext: 0,
                runCallbacksOnInit: !0,
                _emitClasses: !1
            };

            function D(e, t) {
                return function(s) {
                    void 0 === s && (s = {});
                    const r = Object.keys(s)[0],
                        i = s[r];
                    "object" === typeof i && null !== i ? (!0 === e[r] && (e[r] = {
                        enabled: !0
                    }), "navigation" === r && e[r] && e[r].enabled && !e[r].prevEl && !e[r].nextEl && (e[r].auto = !0), ["pagination", "scrollbar"].indexOf(r) >= 0 && e[r] && e[r].enabled && !e[r].el && (e[r].auto = !0), r in e && "enabled" in i ? ("object" !== typeof e[r] || "enabled" in e[r] || (e[r].enabled = !0), e[r] || (e[r] = {
                        enabled: !1
                    }), (0, o.x)(t, s)) : (0, o.x)(t, s)) : (0, o.x)(t, s)
                }
            }
            const R = {
                    eventsEmitter: m,
                    update: b,
                    translate: S,
                    transition: {
                        setTransition: function(e, t) {
                            const s = this;
                            s.params.cssMode || (s.wrapperEl.style.transitionDuration = "".concat(e, "ms"), s.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), s.emit("setTransition", e, t)
                        },
                        transitionStart: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: r
                                } = s;
                            r.cssMode || (r.autoHeight && s.updateAutoHeight(), x({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "Start"
                            }))
                        },
                        transitionEnd: function(e, t) {
                            void 0 === e && (e = !0);
                            const s = this,
                                {
                                    params: r
                                } = s;
                            s.animating = !1, r.cssMode || (s.setTransition(0), x({
                                swiper: s,
                                runCallbacks: e,
                                direction: t,
                                step: "End"
                            }))
                        }
                    },
                    slide: T,
                    loop: E,
                    grabCursor: {
                        setGrabCursor: function(e) {
                            const t = this;
                            if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                            const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                            t.isElement && (t.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                                t.__preventObserver__ = !1
                            }))
                        },
                        unsetGrabCursor: function() {
                            const e = this;
                            e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                                e.__preventObserver__ = !1
                            })))
                        }
                    },
                    events: {
                        attachEvents: function() {
                            const e = this,
                                {
                                    params: t
                                } = e;
                            e.onTouchStart = C.bind(e), e.onTouchMove = A.bind(e), e.onTouchEnd = P.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = L.bind(e)), e.onClick = k.bind(e), e.onLoad = O.bind(e), z(e, "on")
                        },
                        detachEvents: function() {
                            z(this, "off")
                        }
                    },
                    breakpoints: {
                        setBreakpoint: function() {
                            const e = this,
                                {
                                    realIndex: t,
                                    initialized: s,
                                    params: r,
                                    el: i
                                } = e,
                                n = r.breakpoints;
                            if (!n || n && 0 === Object.keys(n).length) return;
                            const l = (0, a.g)(),
                                d = "window" !== r.breakpointsBase && r.breakpointsBase ? "container" : r.breakpointsBase,
                                c = ["window", "container"].includes(r.breakpointsBase) || !r.breakpointsBase ? e.el : l.querySelector(r.breakpointsBase),
                                p = e.getBreakpoint(n, d, c);
                            if (!p || e.currentBreakpoint === p) return;
                            const u = (p in n ? n[p] : void 0) || e.originalParams,
                                f = G(e, r),
                                m = G(e, u),
                                h = e.params.grabCursor,
                                v = u.grabCursor,
                                g = r.enabled;
                            f && !m ? (i.classList.remove("".concat(r.containerModifierClass, "grid"), "".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()) : !f && m && (i.classList.add("".concat(r.containerModifierClass, "grid")), (u.grid.fill && "column" === u.grid.fill || !u.grid.fill && "column" === r.grid.fill) && i.classList.add("".concat(r.containerModifierClass, "grid-column")), e.emitContainerClasses()), h && !v ? e.unsetGrabCursor() : !h && v && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach((t => {
                                if ("undefined" === typeof u[t]) return;
                                const s = r[t] && r[t].enabled,
                                    i = u[t] && u[t].enabled;
                                s && !i && e[t].disable(), !s && i && e[t].enable()
                            }));
                            const w = u.direction && u.direction !== r.direction,
                                y = r.loop && (u.slidesPerView !== r.slidesPerView || w),
                                b = r.loop;
                            w && s && e.changeDirection(), (0, o.x)(e.params, u);
                            const S = e.params.enabled,
                                x = e.params.loop;
                            Object.assign(e, {
                                allowTouchMove: e.params.allowTouchMove,
                                allowSlideNext: e.params.allowSlideNext,
                                allowSlidePrev: e.params.allowSlidePrev
                            }), g && !S ? e.disable() : !g && S && e.enable(), e.currentBreakpoint = p, e.emit("_beforeBreakpoint", u), s && (y ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && x ? (e.loopCreate(t), e.updateSlides()) : b && !x && e.loopDestroy()), e.emit("breakpoint", u)
                        },
                        getBreakpoint: function(e, t, s) {
                            if (void 0 === t && (t = "window"), !e || "container" === t && !s) return;
                            let r = !1;
                            const i = (0, a.a)(),
                                n = "window" === t ? i.innerHeight : s.clientHeight,
                                o = Object.keys(e).map((e => {
                                    if ("string" === typeof e && 0 === e.indexOf("@")) {
                                        const t = parseFloat(e.substr(1));
                                        return {
                                            value: n * t,
                                            point: e
                                        }
                                    }
                                    return {
                                        value: e,
                                        point: e
                                    }
                                }));
                            o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
                            for (let a = 0; a < o.length; a += 1) {
                                const {
                                    point: e,
                                    value: n
                                } = o[a];
                                "window" === t ? i.matchMedia("(min-width: ".concat(n, "px)")).matches && (r = e) : n <= s.clientWidth && (r = e)
                            }
                            return r || "max"
                        }
                    },
                    checkOverflow: {
                        checkOverflow: function() {
                            const e = this,
                                {
                                    isLocked: t,
                                    params: s
                                } = e,
                                {
                                    slidesOffsetBefore: r
                                } = s;
                            if (r) {
                                const t = e.slides.length - 1,
                                    s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * r;
                                e.isLocked = e.size > s
                            } else e.isLocked = 1 === e.snapGrid.length;
                            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                        }
                    },
                    classes: {
                        addClasses: function() {
                            const e = this,
                                {
                                    classNames: t,
                                    params: s,
                                    rtl: r,
                                    el: i,
                                    device: n
                                } = e,
                                a = function(e, t) {
                                    const s = [];
                                    return e.forEach((e => {
                                        "object" === typeof e ? Object.keys(e).forEach((r => {
                                            e[r] && s.push(t + r)
                                        })) : "string" === typeof e && s.push(t + e)
                                    })), s
                                }(["initialized", s.direction, {
                                    "free-mode": e.params.freeMode && s.freeMode.enabled
                                }, {
                                    autoheight: s.autoHeight
                                }, {
                                    rtl: r
                                }, {
                                    grid: s.grid && s.grid.rows > 1
                                }, {
                                    "grid-column": s.grid && s.grid.rows > 1 && "column" === s.grid.fill
                                }, {
                                    android: n.android
                                }, {
                                    ios: n.ios
                                }, {
                                    "css-mode": s.cssMode
                                }, {
                                    centered: s.cssMode && s.centeredSlides
                                }, {
                                    "watch-progress": s.watchSlidesProgress
                                }], s.containerModifierClass);
                            t.push(...a), i.classList.add(...t), e.emitContainerClasses()
                        },
                        removeClasses: function() {
                            const {
                                el: e,
                                classNames: t
                            } = this;
                            e && "string" !== typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                        }
                    }
                },
                B = {};
            class V {
                constructor() {
                    let e, t;
                    for (var s = arguments.length, r = new Array(s), i = 0; i < s; i++) r[i] = arguments[i];
                    1 === r.length && r[0].constructor && "Object" === Object.prototype.toString.call(r[0]).slice(8, -1) ? t = r[0] : [e, t] = r, t || (t = {}), t = (0, o.x)({}, t), e && !t.el && (t.el = e);
                    const n = (0, a.g)();
                    if (t.el && "string" === typeof t.el && n.querySelectorAll(t.el).length > 1) {
                        const e = [];
                        return n.querySelectorAll(t.el).forEach((s => {
                            const r = (0, o.x)({}, t, {
                                el: s
                            });
                            e.push(new V(r))
                        })), e
                    }
                    const l = this;
                    l.__swiper__ = !0, l.support = p(), l.device = u({
                        userAgent: t.userAgent
                    }), l.browser = f(), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                    const d = {};
                    l.modules.forEach((e => {
                        e({
                            params: t,
                            swiper: l,
                            extendParams: D(t, d),
                            on: l.on.bind(l),
                            once: l.once.bind(l),
                            off: l.off.bind(l),
                            emit: l.emit.bind(l)
                        })
                    }));
                    const c = (0, o.x)({}, N, d);
                    return l.params = (0, o.x)({}, c, B, t), l.originalParams = (0, o.x)({}, l.params), l.passedParams = (0, o.x)({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach((e => {
                        l.on(e, l.params.on[e])
                    })), l.params && l.params.onAny && l.onAny(l.params.onAny), Object.assign(l, {
                        enabled: l.params.enabled,
                        el: e,
                        classNames: [],
                        slides: [],
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: () => "horizontal" === l.params.direction,
                        isVertical: () => "vertical" === l.params.direction,
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        previousTranslate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        cssOverflowAdjustment() {
                            return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                        },
                        allowSlideNext: l.params.allowSlideNext,
                        allowSlidePrev: l.params.allowSlidePrev,
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            focusableElements: l.params.focusableElements,
                            lastClickTime: 0,
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            startMoving: void 0,
                            pointerId: null,
                            touchId: null
                        },
                        allowClick: !0,
                        allowTouchMove: l.params.allowTouchMove,
                        touches: {
                            startX: 0,
                            startY: 0,
                            currentX: 0,
                            currentY: 0,
                            diff: 0
                        },
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), l.emit("_swiper"), l.params.init && l.init(), l
                }
                getDirectionLabel(e) {
                    return this.isHorizontal() ? e : {
                        width: "height",
                        "margin-top": "margin-left",
                        "margin-bottom ": "margin-right",
                        "margin-left": "margin-top",
                        "margin-right": "margin-bottom",
                        "padding-left": "padding-top",
                        "padding-right": "padding-bottom",
                        marginRight: "marginBottom"
                    }[e]
                }
                getSlideIndex(e) {
                    const {
                        slidesEl: t,
                        params: s
                    } = this, r = (0, o.e)(t, ".".concat(s.slideClass, ", swiper-slide")), i = (0, o.i)(r[0]);
                    return (0, o.i)(e) - i
                }
                getSlideIndexByData(e) {
                    return this.getSlideIndex(this.slides.find((t => 1 * t.getAttribute("data-swiper-slide-index") === e)))
                }
                getSlideIndexWhenGrid(e) {
                    return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
                }
                recalcSlides() {
                    const {
                        slidesEl: e,
                        params: t
                    } = this;
                    this.slides = (0, o.e)(e, ".".concat(t.slideClass, ", swiper-slide"))
                }
                enable() {
                    const e = this;
                    e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
                }
                disable() {
                    const e = this;
                    e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
                }
                setProgress(e, t) {
                    const s = this;
                    e = Math.min(Math.max(e, 0), 1);
                    const r = s.minTranslate(),
                        i = (s.maxTranslate() - r) * e + r;
                    s.translateTo(i, "undefined" === typeof t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses()
                }
                emitContainerClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
                    e.emit("_containerClasses", t.join(" "))
                }
                getSlideClasses(e) {
                    const t = this;
                    return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
                }
                emitSlidesClasses() {
                    const e = this;
                    if (!e.params._emitClasses || !e.el) return;
                    const t = [];
                    e.slides.forEach((s => {
                        const r = e.getSlideClasses(s);
                        t.push({
                            slideEl: s,
                            classNames: r
                        }), e.emit("_slideClass", s, r)
                    })), e.emit("_slideClasses", t)
                }
                slidesPerViewDynamic(e, t) {
                    void 0 === e && (e = "current"), void 0 === t && (t = !1);
                    const {
                        params: s,
                        slides: r,
                        slidesGrid: i,
                        slidesSizesGrid: n,
                        size: a,
                        activeIndex: o
                    } = this;
                    let l = 1;
                    if ("number" === typeof s.slidesPerView) return s.slidesPerView;
                    if (s.centeredSlides) {
                        let e, t = r[o] ? Math.ceil(r[o].swiperSlideSize) : 0;
                        for (let s = o + 1; s < r.length; s += 1) r[s] && !e && (t += Math.ceil(r[s].swiperSlideSize), l += 1, t > a && (e = !0));
                        for (let s = o - 1; s >= 0; s -= 1) r[s] && !e && (t += r[s].swiperSlideSize, l += 1, t > a && (e = !0))
                    } else if ("current" === e)
                        for (let d = o + 1; d < r.length; d += 1) {
                            (t ? i[d] + n[d] - i[o] < a : i[d] - i[o] < a) && (l += 1)
                        } else
                            for (let d = o - 1; d >= 0; d -= 1) {
                                i[o] - i[d] < a && (l += 1)
                            }
                    return l
                }
                update() {
                    const e = this;
                    if (!e || e.destroyed) return;
                    const {
                        snapGrid: t,
                        params: s
                    } = e;

                    function r() {
                        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
                            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    let i;
                    if (s.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
                            t.complete && g(e, t)
                        })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && e.updateAutoHeight();
                    else {
                        if (("auto" === s.slidesPerView || s.slidesPerView > 1) && e.isEnd && !s.centeredSlides) {
                            const t = e.virtual && s.virtual.enabled ? e.virtual.slides : e.slides;
                            i = e.slideTo(t.length - 1, 0, !1, !0)
                        } else i = e.slideTo(e.activeIndex, 0, !1, !0);
                        i || r()
                    }
                    s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
                }
                changeDirection(e, t) {
                    void 0 === t && (t = !0);
                    const s = this,
                        r = s.params.direction;
                    return e || (e = "horizontal" === r ? "vertical" : "horizontal"), e === r || "horizontal" !== e && "vertical" !== e || (s.el.classList.remove("".concat(s.params.containerModifierClass).concat(r)), s.el.classList.add("".concat(s.params.containerModifierClass).concat(e)), s.emitContainerClasses(), s.params.direction = e, s.slides.forEach((t => {
                        "vertical" === e ? t.style.width = "" : t.style.height = ""
                    })), s.emit("changeDirection"), t && s.update()), s
                }
                changeLanguageDirection(e) {
                    const t = this;
                    t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "rtl") : (t.el.classList.remove("".concat(t.params.containerModifierClass, "rtl")), t.el.dir = "ltr"), t.update())
                }
                mount(e) {
                    const t = this;
                    if (t.mounted) return !0;
                    let s = e || t.params.el;
                    if ("string" === typeof s && (s = document.querySelector(s)), !s) return !1;
                    s.swiper = t, s.parentNode && s.parentNode.host && s.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
                    const r = () => ".".concat((t.params.wrapperClass || "").trim().split(" ").join("."));
                    let i = (() => {
                        if (s && s.shadowRoot && s.shadowRoot.querySelector) {
                            return s.shadowRoot.querySelector(r())
                        }
                        return (0, o.e)(s, r())[0]
                    })();
                    return !i && t.params.createElements && (i = (0, o.c)("div", t.params.wrapperClass), s.append(i), (0, o.e)(s, ".".concat(t.params.slideClass)).forEach((e => {
                        i.append(e)
                    }))), Object.assign(t, {
                        el: s,
                        wrapperEl: i,
                        slidesEl: t.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : i,
                        hostEl: t.isElement ? s.parentNode.host : s,
                        mounted: !0,
                        rtl: "rtl" === s.dir.toLowerCase() || "rtl" === (0, o.q)(s, "direction"),
                        rtlTranslate: "horizontal" === t.params.direction && ("rtl" === s.dir.toLowerCase() || "rtl" === (0, o.q)(s, "direction")),
                        wrongRTL: "-webkit-box" === (0, o.q)(i, "display")
                    }), !0
                }
                init(e) {
                    const t = this;
                    if (t.initialized) return t;
                    if (!1 === t.mount(e)) return t;
                    t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
                    const s = [...t.el.querySelectorAll('[loading="lazy"]')];
                    return t.isElement && s.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), s.forEach((e => {
                        e.complete ? g(t, e) : e.addEventListener("load", (e => {
                            g(t, e.target)
                        }))
                    })), y(t), t.initialized = !0, y(t), t.emit("init"), t.emit("afterInit"), t
                }
                destroy(e, t) {
                    void 0 === e && (e = !0), void 0 === t && (t = !0);
                    const s = this,
                        {
                            params: r,
                            el: i,
                            wrapperEl: n,
                            slides: a
                        } = s;
                    return "undefined" === typeof s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), r.loop && s.loopDestroy(), t && (s.removeClasses(), i && "string" !== typeof i && i.removeAttribute("style"), n && n.removeAttribute("style"), a && a.length && a.forEach((e => {
                        e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
                    }))), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e => {
                        s.off(e)
                    })), !1 !== e && (s.el && "string" !== typeof s.el && (s.el.swiper = null), (0, o.y)(s)), s.destroyed = !0), null
                }
                static extendDefaults(e) {
                    (0, o.x)(B, e)
                }
                static get extendedDefaults() {
                    return B
                }
                static get defaults() {
                    return N
                }
                static installModule(e) {
                    V.prototype.__modules__ || (V.prototype.__modules__ = []);
                    const t = V.prototype.__modules__;
                    "function" === typeof e && t.indexOf(e) < 0 && t.push(e)
                }
                static use(e) {
                    return Array.isArray(e) ? (e.forEach((e => V.installModule(e))), V) : (V.installModule(e), V)
                }
            }
            Object.keys(R).forEach((e => {
                Object.keys(R[e]).forEach((t => {
                    V.prototype[t] = R[e][t]
                }))
            })), V.use([function(e) {
                let {
                    swiper: t,
                    on: s,
                    emit: r
                } = e;
                const i = (0, a.a)();
                let n = null,
                    o = null;
                const l = () => {
                        t && !t.destroyed && t.initialized && (r("beforeResize"), r("resize"))
                    },
                    d = () => {
                        t && !t.destroyed && t.initialized && r("orientationchange")
                    };
                s("init", (() => {
                    t.params.resizeObserver && "undefined" !== typeof i.ResizeObserver ? t && !t.destroyed && t.initialized && (n = new ResizeObserver((e => {
                        o = i.requestAnimationFrame((() => {
                            const {
                                width: s,
                                height: r
                            } = t;
                            let i = s,
                                n = r;
                            e.forEach((e => {
                                let {
                                    contentBoxSize: s,
                                    contentRect: r,
                                    target: a
                                } = e;
                                a && a !== t.el || (i = r ? r.width : (s[0] || s).inlineSize, n = r ? r.height : (s[0] || s).blockSize)
                            })), i === s && n === r || l()
                        }))
                    })), n.observe(t.el)) : (i.addEventListener("resize", l), i.addEventListener("orientationchange", d))
                })), s("destroy", (() => {
                    o && i.cancelAnimationFrame(o), n && n.unobserve && t.el && (n.unobserve(t.el), n = null), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
                }))
            }, function(e) {
                let {
                    swiper: t,
                    extendParams: s,
                    on: r,
                    emit: i
                } = e;
                const n = [],
                    l = (0, a.a)(),
                    d = function(e, s) {
                        void 0 === s && (s = {});
                        const r = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
                            if (t.__preventObserver__) return;
                            if (1 === e.length) return void i("observerUpdate", e[0]);
                            const s = function() {
                                i("observerUpdate", e[0])
                            };
                            l.requestAnimationFrame ? l.requestAnimationFrame(s) : l.setTimeout(s, 0)
                        }));
                        r.observe(e, {
                            attributes: "undefined" === typeof s.attributes || s.attributes,
                            childList: t.isElement || ("undefined" === typeof s.childList || s).childList,
                            characterData: "undefined" === typeof s.characterData || s.characterData
                        }), n.push(r)
                    };
                s({
                    observer: !1,
                    observeParents: !1,
                    observeSlideChildren: !1
                }), r("init", (() => {
                    if (t.params.observer) {
                        if (t.params.observeParents) {
                            const e = (0, o.b)(t.hostEl);
                            for (let t = 0; t < e.length; t += 1) d(e[t])
                        }
                        d(t.hostEl, {
                            childList: t.params.observeSlideChildren
                        }), d(t.wrapperEl, {
                            attributes: !1
                        })
                    }
                })), r("destroy", (() => {
                    n.forEach((e => {
                        e.disconnect()
                    })), n.splice(0, n.length)
                }))
            }]);
            const j = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

            function F(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
            }

            function H(e, t) {
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : F(t[s]) && F(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : H(e[s], t[s]) : e[s] = t[s]
                }))
            }

            function W(e) {
                return void 0 === e && (e = {}), e.navigation && "undefined" === typeof e.navigation.nextEl && "undefined" === typeof e.navigation.prevEl
            }

            function q(e) {
                return void 0 === e && (e = {}), e.pagination && "undefined" === typeof e.pagination.el
            }

            function X(e) {
                return void 0 === e && (e = {}), e.scrollbar && "undefined" === typeof e.scrollbar.el
            }

            function Y(e) {
                void 0 === e && (e = "");
                const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
                    s = [];
                return t.forEach((e => {
                    s.indexOf(e) < 0 && s.push(e)
                })), s.join(" ")
            }

            function U(e) {
                return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : "swiper-wrapper ".concat(e) : "swiper-wrapper"
            }
            const K = ["className", "tag", "wrapperTag", "children", "onSwiper"],
                Z = ["tag", "children", "className", "swiper", "zoom", "lazy", "virtualIndex", "swiperSlideIndex"];

            function J() {
                return J = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var s = arguments[t];
                        for (var r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r])
                    }
                    return e
                }, J.apply(this, arguments)
            }

            function Q(e) {
                return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
            }

            function $(e) {
                const t = [];
                return n.Children.toArray(e).forEach((e => {
                    Q(e) ? t.push(e) : e.props && e.props.children && $(e.props.children).forEach((e => t.push(e)))
                })), t
            }

            function ee(e) {
                const t = [],
                    s = {
                        "container-start": [],
                        "container-end": [],
                        "wrapper-start": [],
                        "wrapper-end": []
                    };
                return n.Children.toArray(e).forEach((e => {
                    if (Q(e)) t.push(e);
                    else if (e.props && e.props.slot && s[e.props.slot]) s[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        const r = $(e.props.children);
                        r.length > 0 ? r.forEach((e => t.push(e))) : s["container-end"].push(e)
                    } else s["container-end"].push(e)
                })), {
                    slides: t,
                    slots: s
                }
            }

            function te(e, t) {
                return "undefined" === typeof window ? (0, n.useEffect)(e, t) : (0, n.useLayoutEffect)(e, t)
            }
            const se = (0, n.createContext)(null),
                re = (0, n.createContext)(null),
                ie = (0, n.forwardRef)((function(e, t) {
                    let s = void 0 === e ? {} : e,
                        {
                            className: a,
                            tag: l = "div",
                            wrapperTag: d = "div",
                            children: c,
                            onSwiper: p
                        } = s,
                        u = (0, i.A)(s, K),
                        f = !1;
                    const [m, h] = (0, n.useState)("swiper"), [v, g] = (0, n.useState)(null), [w, y] = (0, n.useState)(!1), b = (0, n.useRef)(!1), S = (0, n.useRef)(null), x = (0, n.useRef)(null), T = (0, n.useRef)(null), E = (0, n.useRef)(null), M = (0, n.useRef)(null), C = (0, n.useRef)(null), A = (0, n.useRef)(null), P = (0, n.useRef)(null), {
                        params: I,
                        passedParams: k,
                        rest: L,
                        events: O
                    } = function(e, t) {
                        void 0 === e && (e = {}), void 0 === t && (t = !0);
                        const s = {
                                on: {}
                            },
                            r = {},
                            i = {};
                        H(s, N), s._emitClasses = !0, s.init = !1;
                        const n = {},
                            a = j.map((e => e.replace(/_/, ""))),
                            o = Object.assign({}, e);
                        return Object.keys(o).forEach((o => {
                            "undefined" !== typeof e[o] && (a.indexOf(o) >= 0 ? F(e[o]) ? (s[o] = {}, i[o] = {}, H(s[o], e[o]), H(i[o], e[o])) : (s[o] = e[o], i[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" === typeof e[o] ? t ? r["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : s.on["".concat(o[2].toLowerCase()).concat(o.substr(3))] = e[o] : n[o] = e[o])
                        })), ["navigation", "pagination", "scrollbar"].forEach((e => {
                            !0 === s[e] && (s[e] = {}), !1 === s[e] && delete s[e]
                        })), {
                            params: s,
                            passedParams: i,
                            rest: n,
                            events: r
                        }
                    }(u), {
                        slides: _,
                        slots: z
                    } = ee(c), G = () => {
                        y(!w)
                    };
                    Object.assign(I.on, {
                        _containerClasses(e, t) {
                            h(t)
                        }
                    });
                    const D = () => {
                        Object.assign(I.on, O), f = !0;
                        const e = (0, r.A)({}, I);
                        if (delete e.wrapperClass, x.current = new V(e), x.current.virtual && x.current.params.virtual.enabled) {
                            x.current.virtual.slides = _;
                            const e = {
                                cache: !1,
                                slides: _,
                                renderExternal: g,
                                renderExternalUpdate: !1
                            };
                            H(x.current.params.virtual, e), H(x.current.originalParams.virtual, e)
                        }
                    };
                    S.current || D(), x.current && x.current.on("_beforeBreakpoint", G);
                    return (0, n.useEffect)((() => () => {
                        x.current && x.current.off("_beforeBreakpoint", G)
                    })), (0, n.useEffect)((() => {
                        !b.current && x.current && (x.current.emitSlidesClasses(), b.current = !0)
                    })), te((() => {
                        if (t && (t.current = S.current), S.current) return x.current.destroyed && D(),
                            function(e, t) {
                                let {
                                    el: s,
                                    nextEl: r,
                                    prevEl: i,
                                    paginationEl: n,
                                    scrollbarEl: a,
                                    swiper: o
                                } = e;
                                W(t) && r && i && (o.params.navigation.nextEl = r, o.originalParams.navigation.nextEl = r, o.params.navigation.prevEl = i, o.originalParams.navigation.prevEl = i), q(t) && n && (o.params.pagination.el = n, o.originalParams.pagination.el = n), X(t) && a && (o.params.scrollbar.el = a, o.originalParams.scrollbar.el = a), o.init(s)
                            }({
                                el: S.current,
                                nextEl: M.current,
                                prevEl: C.current,
                                paginationEl: A.current,
                                scrollbarEl: P.current,
                                swiper: x.current
                            }, I), p && !x.current.destroyed && p(x.current), () => {
                                x.current && !x.current.destroyed && x.current.destroy(!0, !1)
                            }
                    }), []), te((() => {
                        !f && O && x.current && Object.keys(O).forEach((e => {
                            x.current.on(e, O[e])
                        }));
                        const e = function(e, t, s, r, i) {
                            const n = [];
                            if (!t) return n;
                            const a = e => {
                                n.indexOf(e) < 0 && n.push(e)
                            };
                            if (s && r) {
                                const e = r.map(i),
                                    t = s.map(i);
                                e.join("") !== t.join("") && a("children"), r.length !== s.length && a("children")
                            }
                            return j.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((s => {
                                if (s in e && s in t)
                                    if (F(e[s]) && F(t[s])) {
                                        const r = Object.keys(e[s]),
                                            i = Object.keys(t[s]);
                                        r.length !== i.length ? a(s) : (r.forEach((r => {
                                            e[s][r] !== t[s][r] && a(s)
                                        })), i.forEach((r => {
                                            e[s][r] !== t[s][r] && a(s)
                                        })))
                                    } else e[s] !== t[s] && a(s)
                            })), n
                        }(k, T.current, _, E.current, (e => e.key));
                        return T.current = k, E.current = _, e.length && x.current && !x.current.destroyed && function(e) {
                            let {
                                swiper: t,
                                slides: s,
                                passedParams: r,
                                changedParams: i,
                                nextEl: n,
                                prevEl: a,
                                scrollbarEl: l,
                                paginationEl: d
                            } = e;
                            const c = i.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                                {
                                    params: p,
                                    pagination: u,
                                    navigation: f,
                                    scrollbar: m,
                                    virtual: h,
                                    thumbs: v
                                } = t;
                            let g, w, y, b, S, x, T, E;
                            i.includes("thumbs") && r.thumbs && r.thumbs.swiper && !r.thumbs.swiper.destroyed && p.thumbs && (!p.thumbs.swiper || p.thumbs.swiper.destroyed) && (g = !0), i.includes("controller") && r.controller && r.controller.control && p.controller && !p.controller.control && (w = !0), i.includes("pagination") && r.pagination && (r.pagination.el || d) && (p.pagination || !1 === p.pagination) && u && !u.el && (y = !0), i.includes("scrollbar") && r.scrollbar && (r.scrollbar.el || l) && (p.scrollbar || !1 === p.scrollbar) && m && !m.el && (b = !0), i.includes("navigation") && r.navigation && (r.navigation.prevEl || a) && (r.navigation.nextEl || n) && (p.navigation || !1 === p.navigation) && f && !f.prevEl && !f.nextEl && (S = !0);
                            const M = e => {
                                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), p[e].prevEl = void 0, p[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), p[e].el = void 0, t[e].el = void 0))
                            };
                            i.includes("loop") && t.isElement && (p.loop && !r.loop ? x = !0 : !p.loop && r.loop ? T = !0 : E = !0), c.forEach((e => {
                                if (F(p[e]) && F(r[e])) Object.assign(p[e], r[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in r[e]) || r[e].enabled || M(e);
                                else {
                                    const t = r[e];
                                    !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? p[e] = r[e] : !1 === t && M(e)
                                }
                            })), c.includes("controller") && !w && t.controller && t.controller.control && p.controller && p.controller.control && (t.controller.control = p.controller.control), i.includes("children") && s && h && p.virtual.enabled ? (h.slides = s, h.update(!0)) : i.includes("virtual") && h && p.virtual.enabled && (s && (h.slides = s), h.update(!0)), i.includes("children") && s && p.loop && (E = !0), g && v.init() && v.update(!0);
                            w && (t.controller.control = p.controller.control), y && (!t.isElement || d && "string" !== typeof d || (d = document.createElement("div"), d.classList.add("swiper-pagination"), d.part.add("pagination"), t.el.appendChild(d)), d && (p.pagination.el = d), u.init(), u.render(), u.update()), b && (!t.isElement || l && "string" !== typeof l || (l = document.createElement("div"), l.classList.add("swiper-scrollbar"), l.part.add("scrollbar"), t.el.appendChild(l)), l && (p.scrollbar.el = l), m.init(), m.updateSize(), m.setTranslate()), S && (t.isElement && (n && "string" !== typeof n || (n = document.createElement("div"), n.classList.add("swiper-button-next"), (0, o.s)(n, t.hostEl.constructor.nextButtonSvg), n.part.add("button-next"), t.el.appendChild(n)), a && "string" !== typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-prev"), (0, o.s)(a, t.hostEl.constructor.prevButtonSvg), a.part.add("button-prev"), t.el.appendChild(a))), n && (p.navigation.nextEl = n), a && (p.navigation.prevEl = a), f.init(), f.update()), i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext), i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev), i.includes("direction") && t.changeDirection(r.direction, !1), (x || E) && t.loopDestroy(), (T || E) && t.loopCreate(), t.update()
                        }({
                            swiper: x.current,
                            slides: _,
                            passedParams: k,
                            changedParams: e,
                            nextEl: M.current,
                            prevEl: C.current,
                            scrollbarEl: P.current,
                            paginationEl: A.current
                        }), () => {
                            O && x.current && Object.keys(O).forEach((e => {
                                x.current.off(e, O[e])
                            }))
                        }
                    })), te((() => {
                        var e;
                        !(e = x.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
                    }), [v]), n.createElement(l, J({
                        ref: S,
                        className: Y("".concat(m).concat(a ? " ".concat(a) : ""))
                    }, L), n.createElement(re.Provider, {
                        value: x.current
                    }, z["container-start"], n.createElement(d, {
                        className: U(I.wrapperClass)
                    }, z["wrapper-start"], I.virtual ? function(e, t, s) {
                        if (!s) return null;
                        const r = e => {
                                let s = e;
                                return e < 0 ? s = t.length + e : s >= t.length && (s -= t.length), s
                            },
                            i = e.isHorizontal() ? {
                                [e.rtlTranslate ? "right" : "left"]: "".concat(s.offset, "px")
                            } : {
                                top: "".concat(s.offset, "px")
                            },
                            {
                                from: a,
                                to: o
                            } = s,
                            l = e.params.loop ? -t.length : 0,
                            d = e.params.loop ? 2 * t.length : t.length,
                            c = [];
                        for (let n = l; n < d; n += 1) n >= a && n <= o && c.push(t[r(n)]);
                        return c.map(((t, s) => n.cloneElement(t, {
                            swiper: e,
                            style: i,
                            key: t.props.virtualIndex || t.key || "slide-".concat(s)
                        })))
                    }(x.current, _, v) : _.map(((e, t) => n.cloneElement(e, {
                        swiper: x.current,
                        swiperSlideIndex: t
                    }))), z["wrapper-end"]), W(I) && n.createElement(n.Fragment, null, n.createElement("div", {
                        ref: C,
                        className: "swiper-button-prev"
                    }), n.createElement("div", {
                        ref: M,
                        className: "swiper-button-next"
                    })), X(I) && n.createElement("div", {
                        ref: P,
                        className: "swiper-scrollbar"
                    }), q(I) && n.createElement("div", {
                        ref: A,
                        className: "swiper-pagination"
                    }), z["container-end"]))
                }));
            ie.displayName = "Swiper";
            const ne = (0, n.forwardRef)((function(e, t) {
                let s = void 0 === e ? {} : e,
                    {
                        tag: r = "div",
                        children: a,
                        className: o = "",
                        swiper: l,
                        zoom: d,
                        lazy: c,
                        virtualIndex: p,
                        swiperSlideIndex: u
                    } = s,
                    f = (0, i.A)(s, Z);
                const m = (0, n.useRef)(null),
                    [h, v] = (0, n.useState)("swiper-slide"),
                    [g, w] = (0, n.useState)(!1);

                function y(e, t, s) {
                    t === m.current && v(s)
                }
                te((() => {
                    if ("undefined" !== typeof u && (m.current.swiperSlideIndex = u), t && (t.current = m.current), m.current && l) {
                        if (!l.destroyed) return l.on("_slideClass", y), () => {
                            l && l.off("_slideClass", y)
                        };
                        "swiper-slide" !== h && v("swiper-slide")
                    }
                })), te((() => {
                    l && m.current && !l.destroyed && v(l.getSlideClasses(m.current))
                }), [l]);
                const b = {
                        isActive: h.indexOf("swiper-slide-active") >= 0,
                        isVisible: h.indexOf("swiper-slide-visible") >= 0,
                        isPrev: h.indexOf("swiper-slide-prev") >= 0,
                        isNext: h.indexOf("swiper-slide-next") >= 0
                    },
                    S = () => "function" === typeof a ? a(b) : a;
                return n.createElement(r, J({
                    ref: m,
                    className: Y("".concat(h).concat(o ? " ".concat(o) : "")),
                    "data-swiper-slide-index": p,
                    onLoad: () => {
                        w(!0)
                    }
                }, f), d && n.createElement(se.Provider, {
                    value: b
                }, n.createElement("div", {
                    className: "swiper-zoom-container",
                    "data-swiper-zoom": "number" === typeof d ? d : void 0
                }, S(), c && !g && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                }))), !d && n.createElement(se.Provider, {
                    value: b
                }, S(), c && !g && n.createElement("div", {
                    className: "swiper-lazy-preloader"
                })))
            }));
            ne.displayName = "SwiperSlide"
        },
        6605: (e, t, s) => {
            s.d(t, {
                A: () => x
            });
            var r = s(9379),
                i = s(45),
                n = s(5043),
                a = s(8387),
                o = s(8610),
                l = s(4535),
                d = s(6262),
                c = s(8206),
                p = s(408),
                u = s(8309),
                f = s(2532),
                m = s(2372);

            function h(e) {
                return (0, m.Ay)("MuiAccordionSummary", e)
            }
            const v = (0, f.A)("MuiAccordionSummary", ["root", "expanded", "focusVisible", "disabled", "gutters", "contentGutters", "content", "expandIconWrapper"]);
            var g = s(579);
            const w = ["children", "className", "expandIcon", "focusVisibleClassName", "onClick"],
                y = (0, l.Ay)(p.A, {
                    name: "MuiAccordionSummary",
                    slot: "Root",
                    overridesResolver: (e, t) => t.root
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    const s = {
                        duration: t.transitions.duration.shortest
                    };
                    return {
                        display: "flex",
                        width: "100%",
                        minHeight: 48,
                        padding: t.spacing(0, 2),
                        transition: t.transitions.create(["min-height", "background-color"], s),
                        ["&.".concat(v.focusVisible)]: {
                            backgroundColor: (t.vars || t).palette.action.focus
                        },
                        ["&.".concat(v.disabled)]: {
                            opacity: (t.vars || t).palette.action.disabledOpacity
                        },
                        ["&:hover:not(.".concat(v.disabled, ")")]: {
                            cursor: "pointer"
                        },
                        variants: [{
                            props: e => !e.disableGutters,
                            style: {
                                ["&.".concat(v.expanded)]: {
                                    minHeight: 64
                                }
                            }
                        }]
                    }
                }))),
                b = (0, l.Ay)("span", {
                    name: "MuiAccordionSummary",
                    slot: "Content",
                    overridesResolver: (e, t) => t.content
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        textAlign: "start",
                        flexGrow: 1,
                        margin: "12px 0",
                        variants: [{
                            props: e => !e.disableGutters,
                            style: {
                                transition: t.transitions.create(["margin"], {
                                    duration: t.transitions.duration.shortest
                                }),
                                ["&.".concat(v.expanded)]: {
                                    margin: "20px 0"
                                }
                            }
                        }]
                    }
                }))),
                S = (0, l.Ay)("span", {
                    name: "MuiAccordionSummary",
                    slot: "ExpandIconWrapper",
                    overridesResolver: (e, t) => t.expandIconWrapper
                })((0, d.A)((e => {
                    let {
                        theme: t
                    } = e;
                    return {
                        display: "flex",
                        color: (t.vars || t).palette.action.active,
                        transform: "rotate(0deg)",
                        transition: t.transitions.create("transform", {
                            duration: t.transitions.duration.shortest
                        }),
                        ["&.".concat(v.expanded)]: {
                            transform: "rotate(180deg)"
                        }
                    }
                }))),
                x = n.forwardRef((function(e, t) {
                    const s = (0, c.b)({
                            props: e,
                            name: "MuiAccordionSummary"
                        }),
                        {
                            children: l,
                            className: d,
                            expandIcon: p,
                            focusVisibleClassName: f,
                            onClick: m
                        } = s,
                        v = (0, i.A)(s, w),
                        {
                            disabled: x = !1,
                            disableGutters: T,
                            expanded: E,
                            toggle: M
                        } = n.useContext(u.A),
                        C = (0, r.A)((0, r.A)({}, s), {}, {
                            expanded: E,
                            disabled: x,
                            disableGutters: T
                        }),
                        A = (e => {
                            const {
                                classes: t,
                                expanded: s,
                                disabled: r,
                                disableGutters: i
                            } = e, n = {
                                root: ["root", s && "expanded", r && "disabled", !i && "gutters"],
                                focusVisible: ["focusVisible"],
                                content: ["content", s && "expanded", !i && "contentGutters"],
                                expandIconWrapper: ["expandIconWrapper", s && "expanded"]
                            };
                            return (0, o.A)(n, h, t)
                        })(C);
                    return (0, g.jsxs)(y, (0, r.A)((0, r.A)({
                        focusRipple: !1,
                        disableRipple: !0,
                        disabled: x,
                        "aria-expanded": E,
                        className: (0, a.A)(A.root, d),
                        focusVisibleClassName: (0, a.A)(A.focusVisible, f),
                        onClick: e => {
                            M && M(e), m && m(e)
                        },
                        ref: t,
                        ownerState: C
                    }, v), {}, {
                        children: [(0, g.jsx)(b, {
                            className: A.content,
                            ownerState: C,
                            children: l
                        }), p && (0, g.jsx)(S, {
                            className: A.expandIconWrapper,
                            ownerState: C,
                            children: p
                        })]
                    }))
                }))
        },
        7713: (e, t, s) => {
            s.d(t, {
                a: () => c,
                b: () => b,
                c: () => h,
                e: () => u,
                f: () => a,
                h: () => S,
                i: () => y,
                k: () => o,
                n: () => n,
                q: () => w,
                r: () => g,
                s: () => x,
                t: () => v,
                u: () => p,
                v: () => m,
                w: () => f,
                x: () => d,
                y: () => i
            });
            var r = s(8628);

            function i(e) {
                const t = e;
                Object.keys(t).forEach((e => {
                    try {
                        t[e] = null
                    } catch (s) {}
                    try {
                        delete t[e]
                    } catch (s) {}
                }))
            }

            function n(e, t) {
                return void 0 === t && (t = 0), setTimeout(e, t)
            }

            function a() {
                return Date.now()
            }

            function o(e, t) {
                void 0 === t && (t = "x");
                const s = (0, r.a)();
                let i, n, a;
                const o = function(e) {
                    const t = (0, r.a)();
                    let s;
                    return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s
                }(e);
                return s.WebKitCSSMatrix ? (n = o.transform || o.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map((e => e.replace(",", "."))).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : (a = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = a.toString().split(",")), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
            }

            function l(e) {
                return "object" === typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
            }

            function d() {
                const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                    t = ["__proto__", "constructor", "prototype"];
                for (let r = 1; r < arguments.length; r += 1) {
                    const i = r < 0 || arguments.length <= r ? void 0 : arguments[r];
                    if (void 0 !== i && null !== i && (s = i, !("undefined" !== typeof window && "undefined" !== typeof window.HTMLElement ? s instanceof HTMLElement : s && (1 === s.nodeType || 11 === s.nodeType)))) {
                        const s = Object.keys(Object(i)).filter((e => t.indexOf(e) < 0));
                        for (let t = 0, r = s.length; t < r; t += 1) {
                            const r = s[t],
                                n = Object.getOwnPropertyDescriptor(i, r);
                            void 0 !== n && n.enumerable && (l(e[r]) && l(i[r]) ? i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r]) : !l(e[r]) && l(i[r]) ? (e[r] = {}, i[r].__swiper__ ? e[r] = i[r] : d(e[r], i[r])) : e[r] = i[r])
                        }
                    }
                }
                var s;
                return e
            }

            function c(e, t, s) {
                e.style.setProperty(t, s)
            }

            function p(e) {
                let {
                    swiper: t,
                    targetPosition: s,
                    side: i
                } = e;
                const n = (0, r.a)(),
                    a = -t.translate;
                let o, l = null;
                const d = t.params.speed;
                t.wrapperEl.style.scrollSnapType = "none", n.cancelAnimationFrame(t.cssModeFrameID);
                const c = s > a ? "next" : "prev",
                    p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                    u = () => {
                        o = (new Date).getTime(), null === l && (l = o);
                        const e = Math.max(Math.min((o - l) / d, 1), 0),
                            r = .5 - Math.cos(e * Math.PI) / 2;
                        let c = a + r * (s - a);
                        if (p(c, s) && (c = s), t.wrapperEl.scrollTo({
                                [i]: c
                            }), p(c, s)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
                            t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                                [i]: c
                            })
                        })), void n.cancelAnimationFrame(t.cssModeFrameID);
                        t.cssModeFrameID = n.requestAnimationFrame(u)
                    };
                u()
            }

            function u(e, t) {
                void 0 === t && (t = "");
                const s = (0, r.a)(),
                    i = [...e.children];
                return s.HTMLSlotElement && e instanceof HTMLSlotElement && i.push(...e.assignedElements()), t ? i.filter((e => e.matches(t))) : i
            }

            function f(e, t) {
                const s = (0, r.a)();
                let i = t.contains(e);
                if (!i && s.HTMLSlotElement && t instanceof HTMLSlotElement) {
                    i = [...t.assignedElements()].includes(e), i || (i = function(e, t) {
                        const s = [t];
                        for (; s.length > 0;) {
                            const t = s.shift();
                            if (e === t) return !0;
                            s.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                        }
                    }(e, t))
                }
                return i
            }

            function m(e) {
                try {
                    return void console.warn(e)
                } catch (t) {}
            }

            function h(e, t) {
                void 0 === t && (t = []);
                const s = document.createElement(e);
                return s.classList.add(...Array.isArray(t) ? t : function(e) {
                    return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
                }(t)), s
            }

            function v(e, t) {
                const s = [];
                for (; e.previousElementSibling;) {
                    const r = e.previousElementSibling;
                    t ? r.matches(t) && s.push(r) : s.push(r), e = r
                }
                return s
            }

            function g(e, t) {
                const s = [];
                for (; e.nextElementSibling;) {
                    const r = e.nextElementSibling;
                    t ? r.matches(t) && s.push(r) : s.push(r), e = r
                }
                return s
            }

            function w(e, t) {
                return (0, r.a)().getComputedStyle(e, null).getPropertyValue(t)
            }

            function y(e) {
                let t, s = e;
                if (s) {
                    for (t = 0; null !== (s = s.previousSibling);) 1 === s.nodeType && (t += 1);
                    return t
                }
            }

            function b(e, t) {
                const s = [];
                let r = e.parentElement;
                for (; r;) t ? r.matches(t) && s.push(r) : s.push(r), r = r.parentElement;
                return s
            }

            function S(e, t, s) {
                const i = (0, r.a)();
                return s ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
            }

            function x(e, t) {
                void 0 === t && (t = ""), "undefined" !== typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
                    createHTML: e => e
                }).createHTML(t) : e.innerHTML = t
            }
        },
        8293: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var r = s(9662),
                i = s(579);
            const n = (0, r.A)((0, i.jsx)("path", {
                d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
            }), "ExpandMore")
        },
        8309: (e, t, s) => {
            s.d(t, {
                A: () => r
            });
            const r = s(5043).createContext({})
        },
        8628: (e, t, s) => {
            function r(e) {
                return null !== e && "object" === typeof e && "constructor" in e && e.constructor === Object
            }

            function i(e, t) {
                void 0 === e && (e = {}), void 0 === t && (t = {});
                const s = ["__proto__", "constructor", "prototype"];
                Object.keys(t).filter((e => s.indexOf(e) < 0)).forEach((s => {
                    "undefined" === typeof e[s] ? e[s] = t[s] : r(t[s]) && r(e[s]) && Object.keys(t[s]).length > 0 && i(e[s], t[s])
                }))
            }
            s.d(t, {
                a: () => l,
                g: () => a
            });
            const n = {
                body: {},
                addEventListener() {},
                removeEventListener() {},
                activeElement: {
                    blur() {},
                    nodeName: ""
                },
                querySelector: () => null,
                querySelectorAll: () => [],
                getElementById: () => null,
                createEvent: () => ({
                    initEvent() {}
                }),
                createElement: () => ({
                    children: [],
                    childNodes: [],
                    style: {},
                    setAttribute() {},
                    getElementsByTagName: () => []
                }),
                createElementNS: () => ({}),
                importNode: () => null,
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                }
            };

            function a() {
                const e = "undefined" !== typeof document ? document : {};
                return i(e, n), e
            }
            const o = {
                document: n,
                navigator: {
                    userAgent: ""
                },
                location: {
                    hash: "",
                    host: "",
                    hostname: "",
                    href: "",
                    origin: "",
                    pathname: "",
                    protocol: "",
                    search: ""
                },
                history: {
                    replaceState() {},
                    pushState() {},
                    go() {},
                    back() {}
                },
                CustomEvent: function() {
                    return this
                },
                addEventListener() {},
                removeEventListener() {},
                getComputedStyle: () => ({
                    getPropertyValue: () => ""
                }),
                Image() {},
                Date() {},
                screen: {},
                setTimeout() {},
                clearTimeout() {},
                matchMedia: () => ({}),
                requestAnimationFrame: e => "undefined" === typeof setTimeout ? (e(), null) : setTimeout(e, 0),
                cancelAnimationFrame(e) {
                    "undefined" !== typeof setTimeout && clearTimeout(e)
                }
            };

            function l() {
                const e = "undefined" !== typeof window ? window : {};
                return i(e, o), e
            }
        }
    }
]);
//# sourceMappingURL=326.4a2dba2b.chunk.js.map