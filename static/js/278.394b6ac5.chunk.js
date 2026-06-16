"use strict";
(self.webpackChunkevolvion = self.webpackChunkevolvion || []).push([
    [278], {
        653: (t, e, n) => {
            n.d(e, {
                c: () => a,
                q: () => o
            });
            const o = t => t.scrollTop;

            function a(t, e) {
                var n, o;
                const {
                    timeout: a,
                    easing: i,
                    style: r = {}
                } = t;
                return {
                    duration: null !== (n = r.transitionDuration) && void 0 !== n ? n : "number" === typeof a ? a : a[e.mode] || 0,
                    easing: null !== (o = r.transitionTimingFunction) && void 0 !== o ? o : "object" === typeof i ? i[e.mode] : i,
                    delay: r.transitionDelay
                }
            }
        },
        1596: (t, e, n) => {
            n.d(e, {
                A: () => A
            });
            var o = n(9379),
                a = n(45),
                i = n(5043),
                r = n(8387),
                s = n(8610),
                l = n(1546),
                u = n(4535),
                p = n(6240),
                c = n(6262),
                d = n(8206),
                v = n(3582),
                f = n(2532),
                h = n(2372);

            function E(t) {
                return (0, h.Ay)("MuiPaper", t)
            }(0, f.A)("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
            var x = n(579);
            const m = ["className", "component", "elevation", "square", "variant"],
                b = (0, u.Ay)("div", {
                    name: "MuiPaper",
                    slot: "Root",
                    overridesResolver: (t, e) => {
                        const {
                            ownerState: n
                        } = t;
                        return [e.root, e[n.variant], !n.square && e.rounded, "elevation" === n.variant && e["elevation".concat(n.elevation)]]
                    }
                })((0, c.A)((t => {
                    let {
                        theme: e
                    } = t;
                    return {
                        backgroundColor: (e.vars || e).palette.background.paper,
                        color: (e.vars || e).palette.text.primary,
                        transition: e.transitions.create("box-shadow"),
                        variants: [{
                            props: t => {
                                let {
                                    ownerState: e
                                } = t;
                                return !e.square
                            },
                            style: {
                                borderRadius: e.shape.borderRadius
                            }
                        }, {
                            props: {
                                variant: "outlined"
                            },
                            style: {
                                border: "1px solid ".concat((e.vars || e).palette.divider)
                            }
                        }, {
                            props: {
                                variant: "elevation"
                            },
                            style: {
                                boxShadow: "var(--Paper-shadow)",
                                backgroundImage: "var(--Paper-overlay)"
                            }
                        }]
                    }
                }))),
                A = i.forwardRef((function(t, e) {
                    var n;
                    const i = (0, d.b)({
                            props: t,
                            name: "MuiPaper"
                        }),
                        u = (0, p.A)(),
                        {
                            className: c,
                            component: f = "div",
                            elevation: h = 1,
                            square: A = !1,
                            variant: S = "elevation"
                        } = i,
                        k = (0, a.A)(i, m),
                        g = (0, o.A)((0, o.A)({}, i), {}, {
                            component: f,
                            elevation: h,
                            square: A,
                            variant: S
                        }),
                        y = (t => {
                            const {
                                square: e,
                                elevation: n,
                                variant: o,
                                classes: a
                            } = t, i = {
                                root: ["root", o, !e && "rounded", "elevation" === o && "elevation".concat(n)]
                            };
                            return (0, s.A)(i, E, a)
                        })(g);
                    return (0, x.jsx)(b, (0, o.A)((0, o.A)({
                        as: f,
                        ownerState: g,
                        className: (0, r.A)(y.root, c),
                        ref: e
                    }, k), {}, {
                        style: (0, o.A)((0, o.A)({}, "elevation" === S && (0, o.A)((0, o.A)({
                            "--Paper-shadow": (u.vars || u).shadows[h]
                        }, u.vars && {
                            "--Paper-overlay": null === (n = u.vars.overlays) || void 0 === n ? void 0 : n[h]
                        }), !u.vars && "dark" === u.palette.mode && {
                            "--Paper-overlay": "linear-gradient(".concat((0, l.X4)("#fff", (0, v.A)(h)), ", ").concat((0, l.X4)("#fff", (0, v.A)(h)), ")")
                        })), k.style)
                    }))
                }))
        },
        4516: (t, e, n) => {
            n.d(e, {
                A: () => o
            });
            const o = n(1052).A
        },
        6240: (t, e, n) => {
            n.d(e, {
                A: () => r
            });
            n(5043);
            var o = n(3898),
                a = n(5170),
                i = n(3375);

            function r() {
                const t = (0, o.A)(a.A);
                return t[i.A] || t
            }
        },
        9998: (t, e, n) => {
            n.d(e, {
                Ay: () => E
            });
            var o = n(8587),
                a = n(5540),
                i = n(5043),
                r = n(7950);
            const s = !1;
            var l = n(8726),
                u = "unmounted",
                p = "exited",
                c = "entering",
                d = "entered",
                v = "exiting",
                f = function(t) {
                    function e(e, n) {
                        var o;
                        o = t.call(this, e, n) || this;
                        var a, i = n && !n.isMounting ? e.enter : e.appear;
                        return o.appearStatus = null, e.in ? i ? (a = p, o.appearStatus = c) : a = d : a = e.unmountOnExit || e.mountOnEnter ? u : p, o.state = {
                            status: a
                        }, o.nextCallback = null, o
                    }(0, a.A)(e, t), e.getDerivedStateFromProps = function(t, e) {
                        return t.in && e.status === u ? {
                            status: p
                        } : null
                    };
                    var n = e.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(t) {
                        var e = null;
                        if (t !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== c && n !== d && (e = c) : n !== c && n !== d || (e = v)
                        }
                        this.updateStatus(!1, e)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var t, e, n, o = this.props.timeout;
                        return t = e = n = o, null != o && "number" !== typeof o && (t = o.exit, e = o.enter, n = void 0 !== o.appear ? o.appear : e), {
                            exit: t,
                            enter: e,
                            appear: n
                        }
                    }, n.updateStatus = function(t, e) {
                        if (void 0 === t && (t = !1), null !== e)
                            if (this.cancelNextCallback(), e === c) {
                                if (this.props.unmountOnExit || this.props.mountOnEnter) {
                                    var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this);
                                    n && function(t) {
                                        t.scrollTop
                                    }(n)
                                }
                                this.performEnter(t)
                            } else this.performExit();
                        else this.props.unmountOnExit && this.state.status === p && this.setState({
                            status: u
                        })
                    }, n.performEnter = function(t) {
                        var e = this,
                            n = this.props.enter,
                            o = this.context ? this.context.isMounting : t,
                            a = this.props.nodeRef ? [o] : [r.findDOMNode(this), o],
                            i = a[0],
                            l = a[1],
                            u = this.getTimeouts(),
                            p = o ? u.appear : u.enter;
                        !t && !n || s ? this.safeSetState({
                            status: d
                        }, (function() {
                            e.props.onEntered(i)
                        })) : (this.props.onEnter(i, l), this.safeSetState({
                            status: c
                        }, (function() {
                            e.props.onEntering(i, l), e.onTransitionEnd(p, (function() {
                                e.safeSetState({
                                    status: d
                                }, (function() {
                                    e.props.onEntered(i, l)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var t = this,
                            e = this.props.exit,
                            n = this.getTimeouts(),
                            o = this.props.nodeRef ? void 0 : r.findDOMNode(this);
                        e && !s ? (this.props.onExit(o), this.safeSetState({
                            status: v
                        }, (function() {
                            t.props.onExiting(o), t.onTransitionEnd(n.exit, (function() {
                                t.safeSetState({
                                    status: p
                                }, (function() {
                                    t.props.onExited(o)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onExited(o)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(t, e) {
                        e = this.setNextCallback(e), this.setState(t, e)
                    }, n.setNextCallback = function(t) {
                        var e = this,
                            n = !0;
                        return this.nextCallback = function(o) {
                            n && (n = !1, e.nextCallback = null, t(o))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(t, e) {
                        this.setNextCallback(e);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : r.findDOMNode(this),
                            o = null == t && !this.props.addEndListener;
                        if (n && !o) {
                            if (this.props.addEndListener) {
                                var a = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    i = a[0],
                                    s = a[1];
                                this.props.addEndListener(i, s)
                            }
                            null != t && setTimeout(this.nextCallback, t)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var t = this.state.status;
                        if (t === u) return null;
                        var e = this.props,
                            n = e.children,
                            a = (e.in, e.mountOnEnter, e.unmountOnExit, e.appear, e.enter, e.exit, e.timeout, e.addEndListener, e.onEnter, e.onEntering, e.onEntered, e.onExit, e.onExiting, e.onExited, e.nodeRef, (0, o.A)(e, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return i.createElement(l.A.Provider, {
                            value: null
                        }, "function" === typeof n ? n(t, a) : i.cloneElement(i.Children.only(n), a))
                    }, e
                }(i.Component);

            function h() {}
            f.contextType = l.A, f.propTypes = {}, f.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: h,
                onEntering: h,
                onEntered: h,
                onExit: h,
                onExiting: h,
                onExited: h
            }, f.UNMOUNTED = u, f.EXITED = p, f.ENTERING = c, f.ENTERED = d, f.EXITING = v;
            const E = f
        }
    }
]);
//# sourceMappingURL=278.394b6ac5.chunk.js.map