(function(t) {
    function e(e) {
        for (var r, i, l = e[0], u = e[1], n = e[2], c = 0, h = []; c < l.length; c++) i = l[c], Object.prototype.hasOwnProperty.call(o, i) && o[i] && h.push(o[i][0]), o[i] = 0;
        for (r in u) Object.prototype.hasOwnProperty.call(u, r) && (t[r] = u[r]);
        p && p(e);
        while (h.length) h.shift()();
        return a.push.apply(a, n || []), s()
    }

    function s() {
        for (var t, e = 0; e < a.length; e++) {
            for (var s = a[e], r = !0, l = 1; l < s.length; l++) {
                var u = s[l];
                0 !== o[u] && (r = !1)
            }
            r && (a.splice(e--, 1), t = i(i.s = s[0]))
        }
        return t
    }
    var r = {},
        o = {
            app: 0
        },
        a = [];

    function i(e) {
        if (r[e]) return r[e].exports;
        var s = r[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(s.exports, s, s.exports, i), s.l = !0, s.exports
    }
    i.m = t, i.c = r, i.d = function(t, e, s) {
        i.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: s
        })
    }, i.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, i.t = function(t, e) {
        if (1 & e && (t = i(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var s = Object.create(null);
        if (i.r(s), Object.defineProperty(s, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var r in t) i.d(s, r, function(e) {
                return t[e]
            }.bind(null, r));
        return s
    }, i.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return i.d(e, "a", e), e
    }, i.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, i.p = "/";
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var n = 0; n < l.length; n++) e(l[n]);
    var p = u;
    a.push([0, "chunk-vendors"]), s()
})({
    0: function(t, e, s) {
        t.exports = s("56d7")
    },
    "56d7": function(t, e, s) {
        "use strict";
        s.r(e);
        s("e260"), s("e6cf"), s("cca6"), s("a79d");
        var r = s("2b0e"),
            o = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-app", [s("v-main", [s("HelloWorld")], 1)], 1)
            },
            a = [],
            i = function() {
                var t = this,
                    e = t.$createElement,
                    s = t._self._c || e;
                return s("v-container", [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("h1", {
                    staticClass: "display-2 font-weight-bold mt-2 text-center mb-3"
                }, [t._v("GITHUB USER DASHBOARD")])]), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-text-field", {
                    attrs: {
                        "hide-details": "",
                        "prepend-icon": "mdi-magnify",
                        "single-line": "",
                        "full-width": "",
                        prefix: "https://api.github.com/users/"
                    },
                    model: {
                        value: t.user,
                        callback: function(e) {
                            t.user = e
                        },
                        expression: "user"
                    }
                }), t.alert.active ? s("v-alert", {
                    attrs: {
                        dense: "",
                        text: "",
                        type: t.alert.type
                    }
                }, [t._v(" " + t._s(t.alert.msg) + " ")]) : t._e()], 1), s("v-col", {
                    attrs: {
                        cols: "12"
                    }
                }, [s("v-btn", {
                    staticClass: "pa-0 ma-0",
                    attrs: {
                        small: "",
                        color: "primary",
                        block: ""
                    },
                    on: {
                        click: t.searchOn
                    }
                }, [t._v("Search")])], 1), s("v-col", {
                    attrs: {
                        cols: "4"
                    }
                }, [t.result ? s("v-card", {
                    staticClass: "text-center"
                }, [s("v-card-text", [s("h5", [t._v("Name"), s("br")]), s("h2", [t._v(t._s(t.result.name))])])], 1) : t._e(), t.result ? s("v-card", [s("v-row", [s("v-col", {
                    attrs: {
                        cols: "6"
                    }
                }, [s("v-avatar", {
                    staticClass: "ml-4",
                    attrs: {
                        tile: "",
                        size: "110"
                    }
                }, [s("v-img", {
                    attrs: {
                        src: t.result.avatar_url
                    }
                })], 1)], 1), s("v-col", {
                    staticClass: "mr-2",
                    attrs: {
                        cols: "5"
                    }
                }, [s("h4", {
                    staticClass: "subtitle-1"
                }, [t._v("Public Repos: " + t._s(t.result.public_repos))]), s("v-divider"), s("h4", {
                    staticClass: "subtitle-1"
                }, [t._v("Public Gists: " + t._s(t.result.public_gists))]), s("v-divider"), s("h4", {
                    staticClass: "subtitle-1"
                }, [t._v("Last Update: " + t._s(t.result.updated_at))])], 1)], 1)], 1) : t._e(), t.result ? s("v-card", {
                    staticClass: "text-center"
                }, [s("v-card-text", [s("h5", [t._v("Followers")]), s("h2", [t._v(t._s(t.result.followers))])])], 1) : t._e(), t.result ? s("v-card", {
                    staticClass: "text-center"
                }, [s("v-card-text", [s("h5", [t._v("Joined At")]), s("h2", [t._v(t._s(t.result.created_at))])])], 1) : t._e()], 1), s("v-col", {
                    attrs: {
                        cols: "8"
                    }
                }, [s("v-card", [s("div", {
                    attrs: {
                        id: "repoChart"
                    }
                }, [s("apexchart", {
                    attrs: {
                        type: "line",
                        height: "325",
                        options: t.repoChartOptions,
                        series: t.repoCountSeries
                    }
                })], 1)])], 1), s("v-col", {
                    attrs: {
                        cols: "4"
                    }
                }, [s("v-card", [s("div", {
                    attrs: {
                        id: "langChart"
                    }
                }, [s("apexchart", {
                    attrs: {
                        type: "polarArea",
                        width: "380",
                        options: t.langChartOptions,
                        series: t.langCount
                    }
                })], 1)])], 1), s("v-col", {
                    attrs: {
                        cols: "8"
                    }
                }, [s("v-card", [s("div", {
                    attrs: {
                        id: "chart"
                    }
                }, [s("apexchart", {
                    attrs: {
                        type: "treemap",
                        height: "380",
                        options: t.eventChartOptions,
                        series: t.eventCountSeries
                    }
                })], 1)])], 1), s("v-col", {
                    staticClass: "mt-8",
                    attrs: {
                        cols: "12"
                    }
                }, [s("h5", [t._v("Data Source: "), s("a", {
                    attrs: {
                        href: "https://docs.github.com/en/rest",
                        target: "/blank"
                    }
                }, [t._v("Github Rest API")]), t._v(" | Made From: "), s("a", {
                    attrs: {
                        href: "https://vuejs.org/",
                        target: "_blank"
                    }
                }, [t._v("Vue JS")]), t._v(" and "), s("a", {
                    attrs: {
                        href: "https://apexcharts.com/",
                        target: "_blank"
                    }
                }, [t._v("ApexChart")])])])], 1)], 1)
            },
            l = [],
            u = (s("d3b7"), s("159b"), s("b64b"), s("1321")),
            n = s.n(u),
            p = s("bc3a"),
            c = s.n(p),
            h = {
                name: "HelloWorld",
                components: {
                    apexchart: n.a
                },
                data: function() {
                    return {
                        user: "",
                        result: {},
                        eventCount: [],
                        eventCountSeries: [{
                            data: []
                        }],
                        langCount: [],
                        repoCount: [],
                        repoCountSeries: [{
                            name: "Repositories",
                            data: []
                        }],
                        alert: {
                            active: !1,
                            type: "",
                            msg: ""
                        },
                        eventChartOptions: {
                            legend: {
                                show: !0
                            },
                            chart: {
                                height: 350,
                                type: "treemap"
                            },
                            title: {
                                text: "Events By Size",
                                align: "center"
                            },
                            dataLabels: {
                                enabled: !0,
                                style: {
                                    fontSize: "12px"
                                },
                                formatter: function(t, e) {
                                    return [t, e.value]
                                },
                                offsetY: -4
                            },
                            plotOptions: {
                                treemap: {
                                    enableShades: !0,
                                    shadeIntensity: .5,
                                    reverseNegativeShade: !0,
                                    colorScale: {
                                        ranges: [{
                                            from: -6,
                                            to: 0,
                                            color: "#CD363A"
                                        }, {
                                            from: .001,
                                            to: 6,
                                            color: "#52B12C"
                                        }]
                                    }
                                }
                            }
                        },
                        langChartOptions: {
                            chart: {
                                width: 380,
                                type: "polarArea"
                            },
                            labels: [],
                            title: {
                                text: "Languages Frequently Used",
                                align: "center"
                            },
                            fill: {
                                opacity: 1
                            },
                            stroke: {
                                width: 1,
                                colors: void 0
                            },
                            yaxis: {
                                show: !1
                            },
                            legend: {
                                show: !0,
                                position: "bottom"
                            },
                            plotOptions: {
                                polarArea: {
                                    rings: {
                                        strokeWidth: 0
                                    },
                                    spokes: {
                                        strokeWidth: 0
                                    }
                                }
                            },
                            theme: {
                                monochrome: {
                                    enabled: !1,
                                    shadeTo: "light",
                                    shadeIntensity: .6
                                }
                            }
                        },
                        repoChartOptions: {
                            legend: {
                                show: !0
                            },
                            chart: {
                                height: 350,
                                type: "line",
                                zoom: {
                                    enabled: !1
                                }
                            },
                            dataLabels: {
                                enabled: !0
                            },
                            stroke: {
                                curve: "straight"
                            },
                            title: {
                                text: "Rpositories each Year",
                                align: "center"
                            },
                            grid: {
                                row: {
                                    colors: ["#f3f3f3", "transparent"],
                                    opacity: .5
                                }
                            },
                            xaxis: {
                                categories: []
                            }
                        }
                    }
                },
                methods: {
                    clearData: function() {
                        this.eventCountSeries[0].data = [], this.eventCount = [], this.langCount = [], this.repoCount = [], this.repoChartOptions.xaxis.categories = []
                    },
                    searchOn: function() {
                        var t = this;
                        c.a.get("https://api.github.com/users/" + this.user).then((function(e) {
                            t.result = e.data, t.clearData(), t.alert.active = !0, t.alert.msg = "We got " + e.data.login + ". Here you go!", t.alert.type = "success", c.a.get("https://api.github.com/users/" + t.user + "/events").then((function(e) {
                                var s = {};
                                e.data.forEach((function(t) {
                                    s[t.type] = (s[t.type] || 0) + 1
                                })), Object.keys(s).forEach((function(e) {
                                    t.eventCount.push({
                                        x: e,
                                        y: s[e]
                                    })
                                })), t.eventCountSeries = [{
                                    data: t.eventCount
                                }]
                            })), c.a.get("https://api.github.com/users/" + t.user + "/repos").then((function(e) {
                                var s = {},
                                    r = {};
                                e.data.forEach((function(t) {
                                    var e = t.created_at.substr(0, 4);
                                    s[t.language] = (s[t.language] || 0) + 1, r[e] = (r[e] || 0) + 1
                                })), Object.keys(s).forEach((function(e, r) {
                                    t.langCount.push(s[e]), t.langChartOptions.labels[r] = e
                                })), Object.keys(r).forEach((function(e) {
                                    t.repoCount.push({
                                        x: e,
                                        y: r[e]
                                    }), t.repoChartOptions.xaxis.categories.push(e)
                                })), t.repoCountSeries = [{
                                    data: t.repoCount
                                }]
                            })), console.log(t.langChartOptions.labels)
                        })).catch((function(e) {
                            t.alert.active = !0, t.alert.msg = e.message, t.alert.type = "error", t.result = {}, console.log(e)
                        })).finally((function() {
                            setTimeout((function() {
                                t.alert.active = !1, t.alert.msg = "", t.alert.type = ""
                            }), 3e3)
                        }))
                    }
                }
            },
            g = h,
            b = s("2877"),
            d = s("6544"),
            _ = s.n(d),
            m = s("0798"),
            v = s("8212"),
            f = s("8336"),
            w = s("b0af"),
            y = s("99d9"),
            x = s("62ad"),
            C = s("a523"),
            j = s("ce7e"),
            O = s("adda"),
            T = s("0fd9"),
            S = s("8654"),
            M = Object(b["a"])(g, i, l, !1, null, null, null),
            k = M.exports;
        _()(M, {
            VAlert: m["a"],
            VAvatar: v["a"],
            VBtn: f["a"],
            VCard: w["a"],
            VCardText: y["a"],
            VCol: x["a"],
            VContainer: C["a"],
            VDivider: j["a"],
            VImg: O["a"],
            VRow: T["a"],
            VTextField: S["a"]
        });
        var V = {
                name: "App",
                components: {
                    HelloWorld: k
                },
                data: function() {
                    return {}
                }
            },
            z = V,
            A = s("7496"),
            D = s("f6c4"),
            Z = Object(b["a"])(z, o, a, !1, null, null, null),
            N = Z.exports;
        _()(Z, {
            VApp: A["a"],
            VMain: D["a"]
        });
        var U = s("f309");
        r["a"].use(U["a"]);
        var Q = new U["a"]({}),
            E = (s("b0c0"), s("2f62"));
        r["a"].use(E["a"]);
        var L = new E["a"].Store({
                state: {
                    count: 0,
                    users: [{
                        login: "fabpot",
                        id: 47313,
                        node_id: "MDQ6VXNlcjQ3MzEz",
                        avatar_url: "https://avatars.githubusercontent.com/u/47313?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/fabpot",
                        html_url: "https://github.com/fabpot",
                        followers_url: "https://api.github.com/users/fabpot/followers",
                        following_url: "https://api.github.com/users/fabpot/following{/other_user}",
                        gists_url: "https://api.github.com/users/fabpot/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/fabpot/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/fabpot/subscriptions",
                        organizations_url: "https://api.github.com/users/fabpot/orgs",
                        repos_url: "https://api.github.com/users/fabpot/repos",
                        events_url: "https://api.github.com/users/fabpot/events{/privacy}",
                        received_events_url: "https://api.github.com/users/fabpot/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Fabien Potencier",
                        company: "Symfony/Blackfire",
                        blog: "http://fabien.potencier.org/",
                        location: "Lille, France",
                        email: null,
                        hireable: null,
                        bio: null,
                        twitter_username: "fabpot",
                        public_repos: 57,
                        public_gists: 12,
                        followers: 12050,
                        following: 0,
                        created_at: "2009-01-17T13:42:51Z",
                        updated_at: "2021-11-26T10:06:12Z"
                    }, {
                        login: "andrew",
                        id: 1060,
                        node_id: "MDQ6VXNlcjEwNjA=",
                        avatar_url: "https://avatars.githubusercontent.com/u/1060?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/andrew",
                        html_url: "https://github.com/andrew",
                        followers_url: "https://api.github.com/users/andrew/followers",
                        following_url: "https://api.github.com/users/andrew/following{/other_user}",
                        gists_url: "https://api.github.com/users/andrew/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/andrew/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/andrew/subscriptions",
                        organizations_url: "https://api.github.com/users/andrew/orgs",
                        repos_url: "https://api.github.com/users/andrew/repos",
                        events_url: "https://api.github.com/users/andrew/events{/privacy}",
                        received_events_url: "https://api.github.com/users/andrew/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Andrew Nesbitt",
                        company: "@octobox ",
                        blog: "https://nesbitt.io",
                        location: "UK",
                        email: null,
                        hireable: null,
                        bio: "Software engineer and researcher",
                        twitter_username: "teabass",
                        public_repos: 305,
                        public_gists: 192,
                        followers: 2826,
                        following: 3156,
                        created_at: "2008-02-27T11:39:22Z",
                        updated_at: "2021-12-05T06:39:34Z"
                    }, {
                        login: "taylorotwell",
                        id: 463230,
                        node_id: "MDQ6VXNlcjQ2MzIzMA==",
                        avatar_url: "https://avatars.githubusercontent.com/u/463230?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/taylorotwell",
                        html_url: "https://github.com/taylorotwell",
                        followers_url: "https://api.github.com/users/taylorotwell/followers",
                        following_url: "https://api.github.com/users/taylorotwell/following{/other_user}",
                        gists_url: "https://api.github.com/users/taylorotwell/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/taylorotwell/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/taylorotwell/subscriptions",
                        organizations_url: "https://api.github.com/users/taylorotwell/orgs",
                        repos_url: "https://api.github.com/users/taylorotwell/repos",
                        events_url: "https://api.github.com/users/taylorotwell/events{/privacy}",
                        received_events_url: "https://api.github.com/users/taylorotwell/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Taylor Otwell",
                        company: "Laravel",
                        blog: "http://laravel.com",
                        location: "Little Rock, AR",
                        email: null,
                        hireable: null,
                        bio: "Creator of @laravel.",
                        twitter_username: null,
                        public_repos: 25,
                        public_gists: 9,
                        followers: 24130,
                        following: 1,
                        created_at: "2010-11-01T20:15:30Z",
                        updated_at: "2021-12-31T12:42:04Z"
                    }, {
                        login: "egoist",
                        id: 8784712,
                        node_id: "MDQ6VXNlcjg3ODQ3MTI=",
                        avatar_url: "https://avatars.githubusercontent.com/u/8784712?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/egoist",
                        html_url: "https://github.com/egoist",
                        followers_url: "https://api.github.com/users/egoist/followers",
                        following_url: "https://api.github.com/users/egoist/following{/other_user}",
                        gists_url: "https://api.github.com/users/egoist/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/egoist/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/egoist/subscriptions",
                        organizations_url: "https://api.github.com/users/egoist/orgs",
                        repos_url: "https://api.github.com/users/egoist/repos",
                        events_url: "https://api.github.com/users/egoist/events{/privacy}",
                        received_events_url: "https://api.github.com/users/egoist/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "EGOIST",
                        company: null,
                        blog: "https://egoist.sh",
                        location: "China",
                        email: null,
                        hireable: !0,
                        bio: "寻找远程工作",
                        twitter_username: "_egoistlily",
                        public_repos: 745,
                        public_gists: 160,
                        followers: 9390,
                        following: 25,
                        created_at: "2014-09-15T22:08:21Z",
                        updated_at: "2022-01-02T03:22:51Z"
                    }, {
                        login: "hugogiraudel",
                        id: 83495003,
                        node_id: "MDQ6VXNlcjgzNDk1MDAz",
                        avatar_url: "https://avatars.githubusercontent.com/u/83495003?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/hugogiraudel",
                        html_url: "https://github.com/hugogiraudel",
                        followers_url: "https://api.github.com/users/hugogiraudel/followers",
                        following_url: "https://api.github.com/users/hugogiraudel/following{/other_user}",
                        gists_url: "https://api.github.com/users/hugogiraudel/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/hugogiraudel/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/hugogiraudel/subscriptions",
                        organizations_url: "https://api.github.com/users/hugogiraudel/orgs",
                        repos_url: "https://api.github.com/users/hugogiraudel/repos",
                        events_url: "https://api.github.com/users/hugogiraudel/events{/privacy}",
                        received_events_url: "https://api.github.com/users/hugogiraudel/received_events",
                        type: "User",
                        site_admin: !1,
                        name: null,
                        company: null,
                        blog: "",
                        location: null,
                        email: null,
                        hireable: null,
                        bio: null,
                        twitter_username: null,
                        public_repos: 0,
                        public_gists: 0,
                        followers: 19,
                        following: 0,
                        created_at: "2021-05-01T09:12:32Z",
                        updated_at: "2021-05-01T09:12:32Z"
                    }, {
                        login: "ornicar",
                        id: 140370,
                        node_id: "MDQ6VXNlcjE0MDM3MA==",
                        avatar_url: "https://avatars.githubusercontent.com/u/140370?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/ornicar",
                        html_url: "https://github.com/ornicar",
                        followers_url: "https://api.github.com/users/ornicar/followers",
                        following_url: "https://api.github.com/users/ornicar/following{/other_user}",
                        gists_url: "https://api.github.com/users/ornicar/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/ornicar/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/ornicar/subscriptions",
                        organizations_url: "https://api.github.com/users/ornicar/orgs",
                        repos_url: "https://api.github.com/users/ornicar/repos",
                        events_url: "https://api.github.com/users/ornicar/events{/privacy}",
                        received_events_url: "https://api.github.com/users/ornicar/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Thibault Duplessis",
                        company: "lichess.org",
                        blog: "https://lichess.org",
                        location: "France",
                        email: null,
                        hireable: null,
                        bio: "Maker of lichess.org, a hippie communist chess server for drug fueled atheists.",
                        twitter_username: "ornicar",
                        public_repos: 397,
                        public_gists: 401,
                        followers: 4160,
                        following: 177,
                        created_at: "2009-10-15T20:28:03Z",
                        updated_at: "2021-12-28T06:33:35Z"
                    }, {
                        login: "bebraw",
                        id: 166921,
                        node_id: "MDQ6VXNlcjE2NjkyMQ==",
                        avatar_url: "https://avatars.githubusercontent.com/u/166921?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/bebraw",
                        html_url: "https://github.com/bebraw",
                        followers_url: "https://api.github.com/users/bebraw/followers",
                        following_url: "https://api.github.com/users/bebraw/following{/other_user}",
                        gists_url: "https://api.github.com/users/bebraw/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/bebraw/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/bebraw/subscriptions",
                        organizations_url: "https://api.github.com/users/bebraw/orgs",
                        repos_url: "https://api.github.com/users/bebraw/repos",
                        events_url: "https://api.github.com/users/bebraw/events{/privacy}",
                        received_events_url: "https://api.github.com/users/bebraw/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Juho Vepsäläinen",
                        company: "@SurviveJS",
                        blog: "https://survivejs.com/",
                        location: "Rautalampi, Finland",
                        email: null,
                        hireable: null,
                        bio: "I am behind the @survivejs effort.",
                        twitter_username: "bebraw",
                        public_repos: 190,
                        public_gists: 208,
                        followers: 2021,
                        following: 0,
                        created_at: "2009-12-13T11:49:45Z",
                        updated_at: "2021-08-02T14:50:09Z"
                    }, {
                        login: "nelsonic",
                        id: 194400,
                        node_id: "MDQ6VXNlcjE5NDQwMA==",
                        avatar_url: "https://avatars.githubusercontent.com/u/194400?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/nelsonic",
                        html_url: "https://github.com/nelsonic",
                        followers_url: "https://api.github.com/users/nelsonic/followers",
                        following_url: "https://api.github.com/users/nelsonic/following{/other_user}",
                        gists_url: "https://api.github.com/users/nelsonic/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/nelsonic/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/nelsonic/subscriptions",
                        organizations_url: "https://api.github.com/users/nelsonic/orgs",
                        repos_url: "https://api.github.com/users/nelsonic/repos",
                        events_url: "https://api.github.com/users/nelsonic/events{/privacy}",
                        received_events_url: "https://api.github.com/users/nelsonic/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Nelson",
                        company: "@dwyl",
                        blog: "https://dwyl.com",
                        location: "London",
                        email: null,
                        hireable: null,
                        bio: "Love learning code @dwyl \r\nSystematic about sharing all knowledge/skills. Learn something new every day. \r\nhttps://github.com/dwyl/?q=learn",
                        twitter_username: null,
                        public_repos: 301,
                        public_gists: 34,
                        followers: 3182,
                        following: 17808,
                        created_at: "2010-02-02T08:44:49Z",
                        updated_at: "2021-12-17T14:22:50Z"
                    }, {
                        login: "alexcrichton",
                        id: 64996,
                        node_id: "MDQ6VXNlcjY0OTk2",
                        avatar_url: "https://avatars.githubusercontent.com/u/64996?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/alexcrichton",
                        html_url: "https://github.com/alexcrichton",
                        followers_url: "https://api.github.com/users/alexcrichton/followers",
                        following_url: "https://api.github.com/users/alexcrichton/following{/other_user}",
                        gists_url: "https://api.github.com/users/alexcrichton/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/alexcrichton/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/alexcrichton/subscriptions",
                        organizations_url: "https://api.github.com/users/alexcrichton/orgs",
                        repos_url: "https://api.github.com/users/alexcrichton/repos",
                        events_url: "https://api.github.com/users/alexcrichton/events{/privacy}",
                        received_events_url: "https://api.github.com/users/alexcrichton/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "Alex Crichton",
                        company: null,
                        blog: "",
                        location: null,
                        email: null,
                        hireable: null,
                        bio: null,
                        twitter_username: null,
                        public_repos: 421,
                        public_gists: 1627,
                        followers: 3762,
                        following: 0,
                        created_at: "2009-03-19T19:31:50Z",
                        updated_at: "2021-12-14T20:03:54Z"
                    }, {
                        login: "jonathanong",
                        id: 643505,
                        node_id: "MDQ6VXNlcjY0MzUwNQ==",
                        avatar_url: "https://avatars.githubusercontent.com/u/643505?v=4",
                        gravatar_id: "",
                        url: "https://api.github.com/users/jonathanong",
                        html_url: "https://github.com/jonathanong",
                        followers_url: "https://api.github.com/users/jonathanong/followers",
                        following_url: "https://api.github.com/users/jonathanong/following{/other_user}",
                        gists_url: "https://api.github.com/users/jonathanong/gists{/gist_id}",
                        starred_url: "https://api.github.com/users/jonathanong/starred{/owner}{/repo}",
                        subscriptions_url: "https://api.github.com/users/jonathanong/subscriptions",
                        organizations_url: "https://api.github.com/users/jonathanong/orgs",
                        repos_url: "https://api.github.com/users/jonathanong/repos",
                        events_url: "https://api.github.com/users/jonathanong/events{/privacy}",
                        received_events_url: "https://api.github.com/users/jonathanong/received_events",
                        type: "User",
                        site_admin: !1,
                        name: "jongleberry",
                        company: "@houzz",
                        blog: "https://jongleberry.com",
                        location: "Los Angeles, CA",
                        email: null,
                        hireable: !0,
                        bio: "@expressjs @koajs @jshttp @pillarjs ",
                        twitter_username: "jongleberry",
                        public_repos: 59,
                        public_gists: 1,
                        followers: 2118,
                        following: 150,
                        created_at: "2011-02-28T21:36:17Z",
                        updated_at: "2021-12-30T17:03:40Z"
                    }],
                    heatmap: [],
                    repositories: [],
                    repositories_name: []
                },
                mutations: {
                    increment: function(t) {
                        t.count++
                    },
                    appendUser: function(t, e) {
                        t.users[e.id - 1] = e.user
                    },
                    removeuser: function(t, e) {
                        var s = e.id;
                        t.users[s - 1] = 0
                    },
                    heatmapLang: function(t) {
                        for (var e = 0; e < t.users.length; e++) {
                            var s = {},
                                r = t.users[e];
                            s["name"] = r.name, s["data"] = [{
                                x: "Followers",
                                y: r.followers
                            }, {
                                x: "Following",
                                y: r.following
                            }, {
                                x: "Public Repos",
                                y: r.public_repos
                            }, {
                                x: "Public Gist",
                                y: r.public_gists
                            }], t.heatmap[e] = s
                        }
                    },
                    getrepositories: function(t) {
                        for (var e = 0; e < t.users.length; e++) {
                            var s = t.users[e];
                            t.repositories[e] = s.public_repos, t.repositories_name[e] = s.login
                        }
                    }
                },
                actions: {
                    updateincrement: function(t) {
                        var e = t.commit;
                        e("increment")
                    },
                    removedata: function(t, e) {
                        var s = t.commit;
                        s("removeuser", e)
                    },
                    getLanguages: function(t) {
                        var e = t.commit;
                        e("heatmapLang")
                    },
                    getRepositories: function(t) {
                        var e = t.commit;
                        e("getrepositories")
                    }
                }
            }),
            P = L;
        r["a"].use(n.a), r["a"].component("apexchart", n.a), r["a"].config.productionTip = !1, new r["a"]({
            store: P,
            vuetify: Q,
            render: function(t) {
                return t(N)
            }
        }).$mount("#app")
    }
});
//# sourceMappingURL=app.c18c80f8.js.map
