"use strict"; (self.webpackChunk = self.webpackChunk || []).push([[278], {
  5832 : function(e, t, n) {
    n(8665),
    n(5086),
    n(9193),
    n(9979),
    n(4602);
    var o, r = n(8513),
    a = n(6768),
    i = n(9661),
    c = n(1078),
    s = n(5349),
    l = n(7932),
    u = n(9068),
    d = n(7182),
    m = n(8668),
    p = n(8159),
    g = n(4035),
    f = n(1176),
    v = n(9922),
    y = n(5857),
    h = n.n(y),
    b = n(8481),
    w = n(210),
    k = n(6970),
    L = n(1335),
    S = n(3835),
    A = n(4406),
    q = n(4978),
    E = n(7441),
    x = n(6984),
    T = n(3373),
    z = n(4011),
    P = n(1315),
    I = n(9392),
    R = n(8857),
    C = n(1781),
    M = n(448),
    B = n(1137),
    N = n(150),
    _ = n(3488),
    V = n(3635),
    O = n(4837),
    j = n(2917),
    D = n(1373),
    H = n(9418),
    F = n(6333),
    U = n(3691),
    Y = n(1454),
    J = n(1347);
    b.A.version = "3.14.1",
    (o = b.A).component("accordion", w.A),
    o.component("alert", k.A),
    o.component("cover", L.A),
    o.component("drop", S.A),
    o.component("dropdown", S.A),
    o.component("formCustom", A.A),
    o.component("grid", q.A),
    o.component("heightMatch", E.A),
    o.component("heightViewport", x.A),
    o.component("icon", T.Ay),
    o.component("img", z.A),
    o.component("leader", P.A),
    o.component("margin", I.A),
    o.component("modal", R.A),
    o.component("nav", C.A),
    o.component("navbar", M.A),
    o.component("offcanvas", B.A),
    o.component("overflowAuto", N.A),
    o.component("responsive", _.A),
    o.component("scroll", V.A),
    o.component("scrollspy", O.A),
    o.component("scrollspyNav", j.A),
    o.component("sticky", D.A),
    o.component("svg", H.A),
    o.component("switcher", F.A),
    o.component("tab", U.A),
    o.component("toggle", Y.A),
    o.component("video", J.A),
    o.component("close", T.Rl),
    o.component("marker", T.Rl),
    o.component("navbarToggleIcon", T.Rl),
    o.component("overlayIcon", T.Rl),
    o.component("paginationNext", T.Rl),
    o.component("paginationPrevious", T.Rl),
    o.component("searchIcon", T.Rl),
    o.component("slidenavNext", T.Rl),
    o.component("slidenavPrevious", T.Rl),
    o.component("spinner", T.Rl),
    o.component("totop", T.Rl);
    var W = b.A;
    W.component("countdown", a.A),
    W.component("filter", i.A),
    W.component("lightbox", c.A),
    W.component("lightboxPanel", s.A),
    W.component("notification", l.A),
    W.component("parallax", u.A),
    W.component("slider", d.A),
    W.component("sliderParallax", m.A),
    W.component("slideshow", p.A),
    W.component("slideshowParallax", m.A),
    W.component("sortable", g.A),
    W.component("tooltip", f.A),
    W.component("upload", v.A),
    (0, r.A)(W),
    W.use(h());
    var X = W,
    K = (n(8379),
    function() {
      var e = document.querySelector(".hero-slideshow");
      b.A.slideshow(e, {
        autoplay: !0,
        finite: !1,
        minHeight: 600,
        maxHeight: 600,
        animation: "push",
        pauseOnHover: !0
      })
    }),
    Z = function() {
      document.querySelectorAll(".hero-slideshow").forEach((function(e) {
        var t = e.querySelectorAll(".hero-slideshow-nav li");
        t.length > 1 && t.forEach((function(e) {
          e.style.setProperty("width", "calc(100%/".concat(t.length, ")"))
        }))
      }))
    },
    G = n(5027),
    Q = function() {
      new G.Ay(".marketAndApplicationSwiper", {
        loop: !1,
        updateOnWindowResize: !0,
        breakpoints: {
          300 : {
            loopedSlides: 1,
            slidesPerView: "auto",
            centeredSlides: !0,
            loop: !0,
            spaceBetween: 10
          },
          1200 : {
            slidesPerView: 12,
            spaceBetween: 10,
            loop: !1,
            centeredSlides: !1
          }
        }
      })
    },
    $ = function() {
      document.querySelectorAll(".marketAndApplicationSwiper .swiper-slide").forEach((function(e) {
        return e.classList.remove("swiper-slide-active")
      }))
    },
    ee = function() {
      document.body.addEventListener("mouseover", (function(e) {
        e.target && e.target.classList.contains("swiper-slide") &&
        function(e) {
          $(),
          e.target.classList.add("swiper-slide-active")
        } (e)
      })),
      document.body.addEventListener("mouseout", (function(e) {
        e.target && e.target.classList.contains("swiper-slide") &&
        function(e) {
          $(),
          e.target.classList.remove("swiper-slide-active")
        } (e)
      }))
    };
    n(7452),
    n(115),
    n(475);
    function te(e, t, n, o, r, a, i) {
      try {
        var c = e[a](i),
        s = c.value
      } catch(e) {
        return void n(e)
      }
      c.done ? t(s) : Promise.resolve(s).then(o, r)
    }
    var ne = null,
    oe = "desktop",
    re = document.getElementById("ENV"),
    ae = re ? JSON.parse(re.textContent) : null,
    ie = [],
    ce = function() {
      document.querySelectorAll(".menu-loader").forEach((function(e) {
        e.remove()
      }))
    },
    se = function(e) {
      var t = document.createElement("div");
      t.classList.add("menu-loader"),
      t.classList.add("uk-text-primary"),
      t.classList.add("uk-align-center"),
      t.classList.add("uk-text-center"),
      t.setAttribute("uk-spinner", "ratio: 2"),
      e.appendChild(t)
    },
    le = function() {
      var e, t = (e = regeneratorRuntime.mark((function e() {
        var t, n;
        return regeneratorRuntime.wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            return t = "".concat(ae.MEGA_MENU_API_URL, "/").concat(oe, "/").concat(ne, "/").concat(ie.length ? ie.join("/") : ""),
            e.next = 3,
            fetch(t);
          case 3:
            return n = e.sent,
            e.next = 6,
            n.json();
          case 6:
            return e.abrupt("return", e.sent);
          case 7:
          case "end":
            return e.stop()
          }
        }), e)
      })),
      function() {
        var t = this,
        n = arguments;
        return new Promise((function(o, r) {
          var a = e.apply(t, n);
          function i(e) {
            te(a, o, r, i, c, "next", e)
          }
          function c(e) {
            te(a, o, r, i, c, "throw", e)
          }
          i(void 0)
        }))
      });
      return function() {
        return t.apply(this, arguments)
      }
    } (),
    ue = function(e) {
      var t = e.getAttribute("data-parent-menu");
      t && document.querySelector(".".concat(t)).classList.add("uk-hidden")
    },
    de = function(e) {
      e.closest(".".concat(ne)).querySelector(".mega-menu-primary").classList.add("uk-hidden")
    },
    me = function(e) {
      ie = [];
      var t = document.querySelector(".".concat(e, " .mega-menu-primary"));
      t && t.classList.remove("uk-hidden"),
      document.querySelectorAll(".mega-menu-submenu").forEach((function(e) {
        e.classList.add("uk-hidden")
      }))
    },
    pe = function() {
      var e, t;
      document.body.addEventListener("click", (function(e) {
        if (e.target && e.target.classList.contains("mega-menu-back")) {
          var t = e.target,
          n = t.getAttribute("data-title");
          ie.pop(),
          t.closest(".mega-menu-submenu").classList.add("uk-hidden"),
          n !== ne ? document.querySelector(".".concat(ne, " .").concat(n)).classList.toggle("uk-hidden") : document.querySelector(".".concat(ne, " .mega-menu-primary")).classList.toggle("uk-hidden"),
          e.preventDefault()
        }
        if (e.target && e.target.classList.contains("has-submenu")) {
          var o = e.target;
          if (de(o), ue(o), document.querySelector(".".concat(ne, " .").concat(o.getAttribute("data-menu")))) {
            var r = o.getAttribute("data-menu");
            ie.push(o.getAttribute("data-menu")),
            document.querySelector(".".concat(r)).classList.toggle("uk-hidden")
          } else {
            var a = document.querySelector(".".concat(ne, " > .uk-container"));
            ie.push(o.getAttribute("data-menu")),
            se(a),
            le().then((function(e) {
              var t = (new DOMParser).parseFromString(e.menu, "text/html").getRootNode();
              a.appendChild(t.body),
              ce()
            }))
          }
          e.preventDefault()
        }
        e.target.classList.contains("menu-is-open") && document.querySelector(".open-mega-menu.mega-menu-active").click()
      })),
      e = document.querySelectorAll(".open-mega-menu:not(.esg-home-link)"),
      t = document.querySelector(".nav-header"),
      e.length && e.forEach((function(n) {
        n.addEventListener("click", (function(n) {
          console.log(n.keyCode);
          var o = n.target.getAttribute("data-title");
          t.classList.contains("uk-position-top") && (t.classList.toggle("nav-header--white"), t.classList.toggle("nav-header--primary")),
          null !== ne && ne !== o && (me(o), e.forEach((function(e) {
            e.classList.remove("mega-menu-active"),
            e.setAttribute("aria-expanded", "false")
          })), t.classList.add("nav-header--white"), t.classList.remove("nav-header--primary"), document.querySelectorAll(".mega-menu").forEach((function(e) {
            e.classList.remove("mega-menu--enable"),
            e.classList.remove("focused"),
            e.setAttribute("aria-expanded", "false")
          }))),
          document.querySelectorAll(".mega-menu--enable").length ? (document.querySelector("html").classList.remove("overlay-menu"), document.querySelector("body").classList.remove("menu-is-open"), me(o)) : (document.querySelector("html").classList.add("overlay-menu"), document.querySelector("body").classList.add("menu-is-open")),
          n.target.classList.toggle("mega-menu-active"),
          n.target.setAttribute("aria-expanded", "true" === n.target.getAttribute("aria-expanded") ? "false": "true"),
          document.querySelector(".".concat(o)).classList.toggle("mega-menu--enable"),
          document.querySelector(".".concat(o)).classList.remove("focused"),
          ne = o,
          document.querySelector(".mega-menu--enable.".concat(ne)).classList.contains("focusable") && (document.querySelector(".mega-menu--enable.".concat(ne)).classList.add("focused"), document.querySelector(".mega-menu--enable.focused").focus({
            focusVisible: !0
          })),
          oe = "desktop",
          n.preventDefault()
        }))
      })),
      document.querySelectorAll(".close-mega-menu").forEach((function(e) {
        e.addEventListener("click", (function(e) {
          document.querySelector(".".concat(ne)).classList.toggle("mega-menu--enable"),
          document.querySelector(".".concat(ne)).classList.remove("focused"),
          document.querySelector("html").classList.remove("overlay-menu"),
          document.querySelector("body").classList.remove("menu-is-open"),
          ie = [],
          e.preventDefault()
        }))
      }))
    },
    ge = (n(7136),
    function() {
      return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw(n|u)|c55\/|capi|ccwa|cdm|cell|chtm|cldc|cmd|co(mp|nd)|craw|da(it|ll|ng)|dbte|dcs|devi|dica|dmob|do(c|p)o|ds(12|d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(|_)|g1 u|g560|gene|gf5|gmo|go(\.w|od)|gr(ad|un)|haie|hcit|hd(m|p|t)|hei|hi(pt|ta)|hp( i|ip)|hsc|ht(c(| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i(20|go|ma)|i230|iac( ||\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|[a-w])|libw|lynx|m1w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|mcr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|([1-8]|c))|phil|pire|pl(ay|uc)|pn2|po(ck|rt|se)|prox|psio|ptg|qaa|qc(07|12|21|32|60|[2-7]|i)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h|oo|p)|sdk\/|se(c(|0|1)|47|mc|nd|ri)|sgh|shar|sie(|m)|sk0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h|v|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl|tdg|tel(i|m)|tim|tmo|to(pl|sh)|ts(70|m|m3|m5)|tx9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas|your|zeto|zte/i.test(navigator.userAgent.substr(0, 4))
    }),
    fe = function() {
      var e = !1;
      return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0),
      e
    };
    function ve(e, t, n, o, r, a, i) {
      try {
        var c = e[a](i),
        s = c.value
      } catch(e) {
        return void n(e)
      }
      c.done ? t(s) : Promise.resolve(s).then(o, r)
    }
    var ye, he, be, we, ke = !1,
    Le = function() {
      var e, t = (e = regeneratorRuntime.mark((function e() {
        var t, o, r;
        return regeneratorRuntime.wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            if (! (t = document.querySelectorAll(".product-chart")) || ke) {
              e.next = 8;
              break
            }
            return e.next = 4,
            n.e(781).then(n.t.bind(n, 4162, 23));
          case 4:
            o = e.sent,
            r = o.
          default,
            Se(t, r),
            ke = !0;
          case 8:
          case "end":
            return e.stop()
          }
        }), e)
      })),
      function() {
        var t = this,
        n = arguments;
        return new Promise((function(o, r) {
          var a = e.apply(t, n);
          function i(e) {
            ve(a, o, r, i, c, "next", e)
          }
          function c(e) {
            ve(a, o, r, i, c, "throw", e)
          }
          i(void 0)
        }))
      });
      return function() {
        return t.apply(this, arguments)
      }
    } (),
    Se = function(e, t) {
      var n = {
        fill: {
          type: "gradient",
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 1,
            opacityTo: 1,
            type: "horizontal",
            colorStops: [{
              offset: 0,
              color: "#03fca0",
              opacity: 1
            },
            {
              offset: 20,
              color: "#07fcbd",
              opacity: 1
            },
            {
              offset: 60,
              color: "#0dfce2",
              opacity: 1
            },
            {
              offset: 100,
              color: "#05fbf8",
              opacity: 1
            }]
          }
        },
        chart: {
          height: 350,
          type: "bar",
          animations: {
            enabled: !1
          },
          toolbar: {
            show: !1
          },
          zoom: {
            enabled: !1
          }
        },
        tooltip: {
          enabled: !1
        },
        plotOptions: {
          bar: {
            horizontal: !0,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: !0,
          formatter: function(e) {
            return e
          },
          offsetX: 35,
          style: {
            fontSize: "12px",
            colors: ["#304758"]
          }
        },
        xaxis: {
          type: "category",
          position: "bottom",
          axisBorder: {
            show: !1
          },
          axisTicks: {
            show: !1
          },
          tooltip: {
            enabled: !1
          }
        },
        yaxis: {
          axisBorder: {
            show: !1
          },
          axisTicks: {
            show: !1
          },
          labels: {
            show: !0,
            formatter: function(e) {
              return e
            }
          }
        }
      },
      o = {
        plotOptions: {
          bar: {
            barHeight: "20%",
            horizontal: !0
          }
        },
        xaxis: {
          labels: {
            show: !1
          }
        },
        yaxis: {
          type: "category",
          position: "left",
          axisBorder: {
            show: !1
          },
          axisTicks: {
            show: !1
          },
          tooltip: {
            enabled: !1
          }
        },
        dataLabels: {
          offsetY: 0,
          offsetX: 20
        }
      },
      r = [];
      e.forEach((function(e) {
        var o, a, i, c, s = JSON.parse(document.getElementById(e.getAttribute("data-serie")).textContent);
        n.series = [s],
        n.plotOptions.bar.columnWidth = (o = 400, a = s.data.length, i = 15, c = Math.round(i / (o / a) * 100), "".concat(c, "%"));
        var l = new t(e, n);
        l.render(),
        r.push(l)
      })),
      ge() && r.forEach((function(e) {
        e.updateOptions(o).then((function(e) {
          return console.log(e)
        }))
      }))
    },
    Ae = (n(4009),
    function(e) {
      ye = new YT.Player(e, {
        videoId: e.getAttribute("id"),
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          playsinline: 1,
          autoplay: 0,
          loop: 0,
          controls: 1,
          showinfo: 0,
          autohide: 0,
          rel: 0,
          iv_load_policy: 3,
          cc_load_policy: 0,
          fs: 0,
          disablekb: 1,
          origin: window.location.host
        },
        events: {
          onReady: function(e) {
            e.target.playVideo()
          },
          onError: qe
        }
      })
    }),
    qe = function(e) {
      100 == e.data && console.log("Errore nel caricamento del video")
    },
    Ee = function() {
      var e = !0;
      b.A.util.on(".uk-switcher > *", "show", (function(t) {
        if (!e) {
          var n = t.target.getBoundingClientRect().top;
          window.scrollBy(0, n - 160)
        }
        e = !1
      }))
    },
    xe = function() {
      if (document.querySelector(".widget-footer")) {
        var e = document.querySelector(".widget-footer");
        if (e.querySelector(".return-to-top")) {
          var t = e.querySelector(".return-to-top");
          window.addEventListener("scroll", (function() {
            window.scrollY >= 150 ? (e.classList.remove("uk-hidden"), e.classList.add("uk-visible")) : (e.classList.remove("uk-visible"), e.classList.add("uk-hidden"))
          })),
          t.addEventListener("click", (function(e) {
            e.preventDefault(),
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            })
          }))
        }
      }
    },
    Te = function() {
      document.querySelector(".change-region button") && document.querySelector(".change-region button").addEventListener("click", (function(e) {
        document.querySelector(".change-region-dropdown").classList.toggle("uk-open"),
        document.querySelector(".change-region-dropdown").classList.toggle("focused"),
        e.currentTarget.classList.toggle("dropdown-active"),
        document.querySelector(".change-region-dropdown").classList.contains("uk-open") ? (e.currentTarget.setAttribute("aria-expanded", "true"), document.querySelector(".change-region-dropdown").focus(), document.querySelector(".change-region-dropdown").classList.add("focused"), document.querySelectorAll(".mega-menu").forEach((function(e) {
          e.classList.contains("focused") && (e.classList.remove("focused"), document.querySelector("html").classList.remove("overlay-menu"), document.querySelector("body").classList.remove("menu-is-open"), document.querySelector(".nav-header").classList.remove("nav-header--white"), document.querySelector(".nav-header").classList.add("nav-header--primary"), e.classList.remove("mega-menu--enable"))
        })), document.querySelectorAll(".open-mega-menu").forEach((function(e) {
          e.classList.remove("mega-menu-active"),
          e.setAttribute("aria-expanded", "false")
        }))) : e.currentTarget.setAttribute("aria-expanded", "false")
      }))
    },
    ze = function() {
      document.querySelectorAll(".uk-tab-custom") && document.querySelectorAll(".uk-tab-custom").forEach((function(e) {
        e.querySelectorAll("a").length > 5 && e.classList.add("uk-tab-custom--scroll")
      }))
    },
    Pe = function() {
      b.A.util.on(".modal-video", "hidden", (function(e) {
        var t = e.target.querySelector("video"),
        n = e.target.querySelector(".iframe");
        t && (t.pause(), t.currentTime = 0),
        n && ye.destroy()
      })),
      b.A.util.on(".modal-video", "shown", (function(e) {
        var t = e.target.querySelector("video"),
        n = e.target.querySelector(".iframe");
        t && (t.play(), t.currentTime = 0),
        n &&
        function(e) {
          if ("undefined" == typeof YT || void 0 === YT.Player) {
            var t = document.createElement("script");
            t.src = "https://www.youtube.com/iframe_api";
            var n = document.getElementsByTagName("script")[0];
            n.parentNode.insertBefore(t, n),
            window.onYouTubeIframeAPIReady = function() {
              Ae(e)
            }
          } else Ae(e)
        } (n)
      }))
    },
    Ie = function() {
      var e = document.querySelector(".toggle-element");
      e && e.addEventListener("click", (function(e) {
        e.target.classList.toggle("open")
      }))
    },
    Re = function() {
      var e = document.querySelector(".toggle-description-elapsed");
      e && e.addEventListener("click", (function(e) {
        e.preventDefault();
        var t = e.target,
        n = t.getAttribute("data-close-text"),
        o = t.getAttribute("data-open-text");
        t.classList.contains("open") ? (t.innerText = o, t.classList.remove("open")) : (t.innerText = n, t.classList.add("open")),
        t.parentNode.querySelector("p").classList.toggle("description-elapsed")
      }))
    },
    Ce = function() {
      var e = document.querySelector(".toggle-self-elapsed");
      e && e.addEventListener("click", (function(e) {
        e.preventDefault(),
        e.target.classList.toggle("description-elapsed")
      }))
    },
    Me = function() {
      var e = document.querySelectorAll(".show-more-elements");
      e && e.forEach((function(e) {
        e.addEventListener("click", (function(e) {
          e.preventDefault();
          var t = e.target;
          t.classList.contains("open") ? t.classList.remove("open") : (t.classList.add("uk-hidden"), t.classList.add("open"));
          var n = t.getAttribute("data-target");
          document.getElementById(n).classList.remove("uk-hidden")
        }))
      }))
    },
    Be = (n(3534), n(590), n(4216), 0),
    Ne = !1,
    _e = !0,
    Ve = !1,
    Oe = 0,
    je = "",
    De = !1,
    He = 0,
    Fe = 0,
    Ue = function() {
      ge() || Xe();
      var e = ""; ! 1 === De ? (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:10; left:50%; bottom: 10px; height: 40px; width: 40px; background-image: url(' + je + 'control_play.svg); background-size: contain; background-repeat: no-repeat;"></div>', e += '<div style="position: absolute; z-index:10;  left:10px; top: 10px; height: 30px; width: 30px; background-image: url(' + je + 'gliph_rotate.svg); background-size: contain; background-repeat: no-repeat;"></div>', e += '<div id="btnFullScreenRotazione2d" style="cursor:pointer; position: absolute; z-index:10;  right:10px; top: 10px; height: 40px; width: 40px; background-image: url(' + je + 'control_maximize.svg); background-size: cover; background-repeat: no-repeat;"></div>') : (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:10; left:45%; bottom: 10px; height: 40px; width: 40px; background-image: url(' + je + 'control_play.svg); background-size: cover; background-repeat: no-repeat;"></div>', e += '<div style="position: absolute; z-index:10; left:10px; top: 10px; height: 30px; width: 30px; background-image: url(' + je + 'gliph_rotate.svg); background-size: contain; background-repeat: no-repeat;"></div>'),
      he.insertAdjacentHTML("beforeend", e),
      document.addEventListener("click", (function(e) {
        e.target && "btnPlayPausaRotazione2d" === e.target.id && We()
      })),
      document.addEventListener("click", (function(e) {
        e.target && "btnFullScreenRotazione2d" === e.target.id && Je()
      }))
    },
    Ye = function(e) {
      return e.parentElement.removeChild(e)
    },
    Je = function() {
      var e = document.querySelector("#btnFullScreenRotazione2d"),
      t = document.querySelector("body");
      if (Ve) {
        var n = Ye(he);
        he.style.position = "relative",
        he.style.top = "",
        he.style.left = "",
        he.style.zIndex = "",
        be.appendChild(n),
        e.style.backgroundImage = "url(" + je + "control_maximize.svg)",
        t.style.overflowY = "",
        Ve = !1
      } else {
        var o = Ye(he);
        he.style.position = "absolute",
        he.style.top = "0",
        he.style.left = "0",
        he.style.zIndex = "1000",
        t.appendChild(o),
        e.style.backgroundImage = "url(" + je + "control_minimize.svg)",
        t.style.overflowY = "hidden",
        Ve = !0
      }
    },
    We = function() {
      var e = document.getElementById("btnPlayPausaRotazione2d");
      Oe ? (e.style.backgroundImage = "url(" + je + "control_play.svg)", _e = !1, Oe = !1, we.pause()) : (e.style.backgroundImage = "url(" + je + "control_pause.svg)", _e = !0, Oe = !0, we.play())
    },
    Xe = function() {
      var e = document.getElementById("imgPrincipale");
      e.style.cursor = "pointer",
      document.addEventListener("touchend", (function() {
        Ne = !1
      })),
      document.addEventListener("touchstart", (function() {
        Ne = !0
      })),
      document.addEventListener("mousedown", (function() {
        Ne = !0
      })),
      document.addEventListener("mouseup", (function() {
        Ne = !1
      })),
      e.addEventListener("touchstart", (function(e) {
        var t = e.touches[0] || e.changedTouches[0];
        Be = t.pageX,
        _e && (Oe = !1, we.pause())
      })),
      e.addEventListener("mousedown", (function(e) {
        Be = e.pageX,
        _e && (Oe = !1, we.pause())
      })),
      e.addEventListener("touchmove", (function(e) {
        var t = document.getElementById("btnPlayPausaRotazione2d");
        _e && Ne && (_e = !1, Oe = !1, we.pause(), t.style.backgroundImage = "url(" + je + "control_play.svg)"),
        Ke((e.touches[0] || e.changedTouches[0]).pageX)
      })),
      e.addEventListener("mousemove", (function(e) {
        var t = document.getElementById("btnPlayPausaRotazione2d");
        _e && Ne && (_e = !1, Oe = !1, we.pause(), t.style.backgroundImage = "url(" + je + "control_play.svg)"),
        Ke(e.pageX)
      }))
    },
    Ke = function(e) {
      if (!0 === Ne) {
        var t = Be - e,
        n = !1; (t > 1 || t < -1) && (He += .01 * t, Be = e, n = !0),
        !0 === n && (He < 0 ? He = Fe: He > Fe && (He = 0), we.currentTime = He)
      }
    },
    Ze = function() {
      var e = document.getElementById("contRotazione");
      e && (document.querySelectorAll("input[type='radio'].js-shop-alternative").forEach((function(t) {
        t.checked && t.dataset.video && (e.dataset.video = t.dataset.video)
      })),
      function(e, t, n) {
        ge() && (De = !0),
        (he = document.getElementById(e)).style.position = "relative",
        he.style.backgroundColor = "white",
        he.style.height = "100%",
        he.style.width = "100%",
        he.style.float = "right",
        he.innerHTML = "",
        be = he.parentNode,
        je = "/" !== n[n.length - 1] ? n + "/": n;
        var o = "";
        o += '<video id="imgPrincipale" playsinline muted loop draggable="false" style="width: 100%; height: 100%; object-fit: contain; user-drag: none;">',
        o += '<source src="' + t + '" type="video/mp4">',
        o += "Your browser does not support the video tag.",
        o += "</video>",
        he.insertAdjacentHTML("beforeend", o),
        (we = document.getElementById("imgPrincipale")).controls = !1,
        we.addEventListener("loadedmetadata", (function() {
          Fe = we.duration,
          setInterval((function() {
            _e && Oe && (He = we.currentTime)
          }), 50),
          Ue()
        })),
        document.addEventListener("dragstart", (function(e) {
          if ("video" == e.target.nodeName.toLowerCase()) return ! 1
        }))
      } ("contRotazione", e.dataset.video, "/build/images/rotator"))
    };
    function Ge(e) {
      return Ge = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ?
      function(e) {
        return typeof e
      }: function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol": typeof e
      },
      Ge(e)
    }
    var Qe = function() {
      var e = document.querySelector(".product-top-mobile-cta .uk-button-show-more");
      e && e.addEventListener("click", (function() {
        document.querySelector(".product-top-mobile-cta-show-more").classList.toggle("uk-hidden")
      }))
    },
    $e = function() {
      var e = function(e) {
        var t = e.querySelector('input[type="radio"]').getAttribute("data-url"),
        n = e.querySelector('input[type="radio"]').getAttribute("data-image"),
        o = e.querySelector('input[type="radio"]').getAttribute("data-video"); (t && "undefined" !== Ge(t) && "" !== t && document.querySelector(".sticky-product-info .uk-button-primary").setAttribute("href", t), n && "undefined" !== Ge(n) && "" !== n) && document.querySelectorAll("picture.js-product-main-image").forEach((function(e) {
          e.querySelectorAll("source").forEach((function(e) {
            return e.srcset = n
          }));
          var t = e.querySelector("img");
          t && (t.src = n)
        }));
        if (o && "undefined" !== Ge(o) && "" !== o) {
          var r = document.querySelector("#contRotazione"),
          a = r.querySelector("video#imgPrincipale");
          r.dataset.video = a,
          r.innerHTML = "",
          Ze()
        }
      };
      document.querySelectorAll(".select-series .custom-radio").forEach((function(t) {
        t.addEventListener("click", (function(t) {
          var n = t.currentTarget;
          n && n.classList.contains("custom-radio") && (document.querySelectorAll(".select-series .custom-radio").forEach((function(e) {
            e.classList.remove("uk-active"),
            e.querySelector("input").checked = !1
          })), n.querySelector("input").checked = !0, n.classList.add("uk-active"), e(n))
        }))
      })),
      document.querySelectorAll(".select-series .custom-radio").forEach((function(t) {
        t.querySelector("input[type='radio']:checked") && e(t)
      }))
    };
    function et(e, t, n, o, r, a, i) {
      try {
        var c = e[a](i),
        s = c.value
      } catch(e) {
        return void n(e)
      }
      c.done ? t(s) : Promise.resolve(s).then(o, r)
    }
    function tt(e) {
      return function() {
        var t = this,
        n = arguments;
        return new Promise((function(o, r) {
          var a = e.apply(t, n);
          function i(e) {
            et(a, o, r, i, c, "next", e)
          }
          function c(e) {
            et(a, o, r, i, c, "throw", e)
          }
          i(void 0)
        }))
      }
    }
    var nt = [{
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [{
        saturation: 36
      },
      {
        color: "#000000"
      },
      {
        lightness: 40
      }]
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [{
        visibility: "on"
      },
      {
        color: "#000000"
      },
      {
        lightness: 16
      }]
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [{
        visibility: "off"
      }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 20
      }]
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 17
      },
      {
        weight: 1.2
      }]
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 20
      }]
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 21
      }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 17
      }]
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 29
      },
      {
        weight: .2
      }]
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 18
      }]
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 16
      }]
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 19
      }]
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{
        color: "#000000"
      },
      {
        lightness: 17
      }]
    }],
    ot = document.getElementById("ENV"),
    rt = ot ? JSON.parse(ot.textContent) : null,
    at = function() {
      b.A.util.on(".switcher-contacts", "shown",
      function() {
        var e = tt(regeneratorRuntime.mark((function e(t) {
          var o;
          return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
              if (! (o = t.target.querySelector(".plants-maps"))) {
                e.next = 5;
                break
              }
              if (o.classList.contains("map-loaded")) {
                e.next = 5;
                break
              }
              return e.next = 5,
              n.e(10).then(n.bind(n, 5010)).then((function(e) {
                ct(e.Loader, o.getAttribute("data-json"), o),
                o.classList.add("map-loaded")
              }));
            case 5:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } ())
    },
    it = function() {
      b.A.util.on(".switcher-sales", "shown",
      function() {
        var e = tt(regeneratorRuntime.mark((function e(t) {
          var o;
          return regeneratorRuntime.wrap((function(e) {
            for (;;) switch (e.prev = e.next) {
            case 0:
              if (! (o = t.target.querySelector(".contacts-maps"))) {
                e.next = 5;
                break
              }
              if (o.classList.contains("map-loaded")) {
                e.next = 5;
                break
              }
              return e.next = 5,
              n.e(10).then(n.bind(n, 5010)).then((function(e) {
                ct(e.Loader, o.getAttribute("data-json"), o),
                o.classList.add("map-loaded")
              }));
            case 5:
            case "end":
              return e.stop()
            }
          }), e)
        })));
        return function(t) {
          return e.apply(this, arguments)
        }
      } ())
    },
    ct = function(e, t, n) {
      var o, r = [];
      new e({
        apiKey: rt.MAP_API_KEY,
        version: "weekly"
      }).load().then((function(e) {
        var a = document.getElementById(t),
        i = a ? JSON.parse(a.textContent) : [];
        if (0 !== i.length) {
          var c = {
            zoom: 3,
            mapTypeId: e.maps.MapTypeId.ROADMAP,
            styles: nt,
            zoomControl: !0,
            mapTypeControl: !1,
            scaleControl: !1,
            streetViewControl: !1,
            rotateControl: !1,
            fullscreenControl: !0,
            center: new e.maps.LatLng(44.197569, 10.714303)
          };
          o = new e.maps.Map(n, c);
          for (var s = 0; s < i.length; s++) {
            var l = i[s],
            u = new e.maps.InfoWindow({
              content: l.description
            }),
            d = new e.maps.Marker({
              position: new e.maps.LatLng(l.latitude, l.longitude),
              map: o,
              icon: "/images/ico-map-marker.png",
              title: l.title,
              infowindow: u
            });
            r.push(d),
            st(o, d, e, r)
          }
        }
      }))
    },
    st = function(e, t, n, o) {
      n.maps.event.addListener(t, "click", (function() {
        lt(e, o),
        this.infowindow.open(e, this)
      }))
    },
    lt = function(e, t) {
      t.forEach((function(t) {
        t.infowindow.close(e, t)
      }))
    },
    ut = function(e) {
      e.preventDefault();
      var t = e.currentTarget.closest("form");
      if (!t.checkValidity()) {
        var n = t.querySelector(":is(input, select, textarea):invalid").getBoundingClientRect().top;
        window.scrollBy(0, n - 200)
      }
    },
    dt = function() {
      document.querySelectorAll('form.contact-form button[data-action="submit"]').forEach((function(e) {
        e.addEventListener("click", ut)
      }))
    },
    mt = function() {
      rt && (at(), it()),
      dt(),
      gt(),
      pt()
    },
    pt = function() {
      if (document.querySelector(".form-switcher")) {
        var e = b.A.switcher(".form-switcher");
        document.querySelector(".select-form").addEventListener("change", (function(t) {
          var n = parseInt(t.target.value);
          e.show(n)
        }))
      }
    },
    gt = function() {
      document.querySelectorAll(".custom-switcher .custom-switcher-button").forEach((function(e) {
        e.addEventListener("click", (function(e) {
          e.currentTarget.classList.toggle("active"),
          ft()
        }))
      })),
      document.querySelectorAll(".card-contact-toggler").forEach((function(e) {
        e.addEventListener("click", (function(e) {
          var t = e.target,
          n = t.getAttribute("data-show-label"),
          o = t.getAttribute("data-hide-label");
          t.classList.contains("uk-active") ? (t.querySelector("span").innerText = n, t.classList.remove("uk-active")) : (t.querySelector("span").innerText = o, t.classList.add("uk-active")),
          t.parentNode.parentNode.querySelector(".card-office-contact-list").classList.toggle("card-office-contact-list-visible")
        }))
      }))
    },
    ft = function() {
      document.querySelectorAll(".custom-switcher-toggle").forEach((function(e) {
        e.setAttribute("hidden", "")
      })),
      vt()
    },
    vt = function() {
      document.querySelectorAll(".custom-switcher .custom-switcher-button.active").length ? document.querySelectorAll(".custom-switcher .custom-switcher-button.active").forEach((function(e) {
        var t = e.getAttribute("data-toggle");
        document.querySelector(t).removeAttribute("hidden")
      })) : document.querySelectorAll(".custom-switcher-toggle").forEach((function(e) {
        e.removeAttribute("hidden")
      }))
    },
    yt = (n(5195), []),
    ht = [],
    bt = document.querySelector(".history-swiper-list-prev"),
    wt = document.querySelector(".history-swiper-list-next"),
    kt = document.querySelector(".history-container-tab"),
    Lt = document.querySelector(".history-tab-title"),
    St = 0,
    At = function() {
      document.querySelectorAll(".history-slider .uk-panel .uk-link-reset").forEach((function(e) {
        e.addEventListener("click", (function(t) {
          t.preventDefault();
          var n = t.target;
          if (n === e) {
            var o = n.closest(".swiper-slide"),
            r = n.closest(".uk-panel");
            document.querySelectorAll(".history-slider .uk-panel.uk-open").forEach((function(e) {
              r !== e && e.classList.remove("uk-open")
            })),
            r.classList.contains("uk-open") ? r.classList.remove("uk-open") : r.classList.add("uk-open");
            var a = Array.from(n.closest(".swiper-wrapper").children).indexOf(o); - 1 !== a && !ht[St].destroyed && ht[St].slideTo(a)
          }
        }))
      }))
    },
    qt = function() {
      yt[0].on("slideChange", (function(e) {
        return b.A.switcher(kt).show(e.activeIndex)
      }))
    },
    Et = function() {
      b.A.switcher(kt, {
        swiping: !1,
        connect: ".history-container"
      }),
      b.A.util.on(document.querySelector(".history-container"), "show", (function(e) {
        var t = e.target,
        n = t.getAttribute("data-slide");
        Lt.innerHTML = t.innerHTML,
        yt[0].slideTo(n)
      }))
    },
    xt = function() {
      var e = document.querySelectorAll(".history-slider");
      ht = [],
      e.forEach((function(e, t) {
        var n = e;
        n.classList.add("swiper-slider-" + t);
        var o = n.getAttribute("data-slide") ? Number(n.getAttribute("data-slide")) : 2,
        r = new G.Ay(".swiper-slider-" + t, {
          slidesPerView: o > 3 ? 3.5 : 3,
          nested: !0
        });
        ht.push(r)
      }))
    },
    Tt = function() {
      bt.addEventListener("click", (function(e) {
        e.preventDefault();
        var t = yt[0],
        n = t.activeIndex,
        o = ht[n];
        o.isBeginning ? (t.slideTo(t.activeIndex - 1), St = t.activeIndex, b.A.switcher(kt).show(St)) : o.slidePrev()
      })),
      wt.addEventListener("click", (function(e) {
        e.preventDefault();
        var t = yt[0],
        n = t.activeIndex,
        o = ht[n];
        o.isEnd ? (t.slideTo(t.activeIndex + 1), St = t.activeIndex, b.A.switcher(kt).show(St)) : o.slideNext()
      }))
    },
    zt = function() {
      document.querySelectorAll(".history-swiper-image").forEach((function(e, t) {
        e.classList.add("swiper-history-image-" + t);
        var n = new G.Ay(".swiper-history-image-" + t, {
          on: {
            slideChange: function(e) {
              return Pt(e)
            },
            init: function(e) {
              return Pt(e)
            }
          },
          autoHeight: !0,
          breakpoints: {
            300 : {
              slidesPerView: 1,
              allowTouchMove: !0
            },
            992 : {
              slidesPerView: 1.1,
              allowTouchMove: !1
            }
          }
        });
        yt.push(n)
      }))
    },
    Pt = function(e) {
      if (ge() && "selcom" != document.body.dataset.theme) {
        ht.forEach((function(e) {
          e.initialized && e.destroy()
        }));
        var t = e.realIndex,
        n = e.slides[t].querySelector("img").clientHeight,
        o = e.slides[t].querySelector("img").clientWidth,
        r = e.slides[t].querySelector(".history-container").clientHeight;
        e.wrapperEl.style.height = "".concat(r + (o - n), "px")
      }
    },
    It = function() {
      window.addEventListener("scroll", (function() {
        var e = window.scrollY;
        this.document.addEventListener("click", (function(t) { (t.target.classList.contains("history-link") || t.target.matches('[class*="history-swiper-list"]') || t.target.closest("button").matches('[class*="history-swiper-list"]')) && window.scrollTo(e, e)
        }))
      }))
    },
    Rt = function() {
      b.A.util.on(".sticky-product-info", "active", (function(e) {
        e.target.querySelectorAll(".select-series small").forEach((function(e) {
          e.classList.add("uk-hidden")
        }))
      })),
      b.A.util.on(".sticky-product-info", "inactive", (function(e) {
        e.target.querySelectorAll(".select-series small").forEach((function(e) {
          e.classList.remove("uk-hidden")
        }))
      }))
    },
    Ct = function() {
      var e = b.A.slideshow(document.querySelector(".product-top [uk-slideshow]"));
      ge() && (e.draggable = !0)
    },
    Mt = function() {
      var e = document.querySelector(".sticky-prod-end") || document.querySelector(".footer"),
      t = document.querySelector(".sticky-product-info");
      if (t) {
        var n = e.offsetTop - t.offsetTop - 1.5 * t.clientHeight;
        b.A.sticky(t, {
          offset: 160,
          media: "@m",
          end: n
        })
      }
    },
    Bt = function(e) {
      var t = e.currentTarget.closest("div").querySelector("[data-sheet-modal-title]").innerHTML,
      n = e.currentTarget.closest("div").querySelector("[data-sheet-modal-description]").innerHTML;
      document.querySelector("html").classList.add("overlay-menu", "overlay-menu--force"),
      document.querySelector("body").classList.add("menu-is-open"),
      document.querySelector(".sheet-modal-title").innerHTML = t,
      document.querySelector(".sheet-modal-description").innerHTML = n,
      document.querySelector(".sheet-modal").classList.add("sheet-modal--open")
    },
    Nt = function() {
      document.querySelector("html").classList.remove("overlay-menu", "overlay-menu--force"),
      document.querySelector("body").classList.remove("menu-is-open"),
      document.querySelector(".sheet-modal").classList.remove("sheet-modal--open")
    },
    _t = (n(785), n(933), n(4095), n(173), n(6048), n(7371)),
    Vt = n.n(_t);
    function Ot(e, t, n, o, r, a, i) {
      try {
        var c = e[a](i),
        s = c.value
      } catch(e) {
        return void n(e)
      }
      c.done ? t(s) : Promise.resolve(s).then(o, r)
    }
    function jt(e) {
      return function() {
        var t = this,
        n = arguments;
        return new Promise((function(o, r) {
          var a = e.apply(t, n);
          function i(e) {
            Ot(a, o, r, i, c, "next", e)
          }
          function c(e) {
            Ot(a, o, r, i, c, "throw", e)
          }
          i(void 0)
        }))
      }
    }
    var Dt, Ht = 1,
    Ft = document.getElementById("ENV"),
    Ut = Ft ? JSON.parse(Ft.textContent) : null,
    Yt = function() {
      if (document.forms["search-with-filter"]) {
        var e = window.location.search,
        t = new URLSearchParams(e),
        n = t.get("category"),
        o = t.get("q");
        null !== n && (document.querySelector('#search-with-filter [name="category"]').value = n),
        null !== o && (Dt ? (Dt.addOption({
          label: o,
          text: o
        }), Dt.addItem(o)) : document.querySelector('#search-with-filter [name="q"]').value = o),
        null === o && null === n || Wt({
          page: 1,
          category: n || "",
          q: o,
          country: document.forms["search-with-filter"].querySelector('[name="country"]').value
        })
      }
    },
    Jt = function() {
      var e = document.querySelectorAll(".search-bar-autocomplete-input");
      e && e.forEach((function(e) {
        var t;
        Dt = new(Vt())(e, {
          valueField: "label",
          labelField: "label",
          searchField: ["label"],
          persist: !1,
          create: !1,
          load: (t = jt(regeneratorRuntime.mark((function e(t, n) {
            var o, r, a;
            return regeneratorRuntime.wrap((function(e) {
              for (;;) switch (e.prev = e.next) {
              case 0:
                return r = null === (o = document.forms["search-bar"]) || void 0 === o ? void 0 : o.querySelector('[name="country"]').value,
                a = Ut.SEARCH_KEYWORD_API_URL + "?q=" + encodeURIComponent(t) + "&country=" + r,
                e.next = 4,
                fetch(a).then((function(e) {
                  return e.json()
                })).then((function(e) {
                  n(e.records)
                })).
                catch((function() {
                  n()
                }));
              case 4:
              case "end":
                return e.stop()
              }
            }), e)
          }))),
          function(e, n) {
            return t.apply(this, arguments)
          }),
          render: {
            option: function(e, t) {
              return "<div>" + t(e.label) + "</div>"
            }
          }
        })
      }))
    },
    Wt = function(e) {
      Gt(),
      Qt(e).then((function(t) {
        var n;
        Ht = null !== (n = e.page) && void 0 !== n ? n: 1,
        Zt(t.result),
        document.querySelector(".search-results-number").innerHTML = t.total_count,
        document.querySelector(".uk-pagination").innerHTML = function(e, t) {
          var n = "",
          o = t - 1,
          r = t + 1;
          if (t > 1 && (n += '<li ><a href="#" class="prev-search"><span uk-pagination-previous></span></a></li>'), e < 6) for (var a = 1; a <= e; a++) n += '<li class="' + (t == a ? "uk-active": "no") + '"><a href="#" class="page-search" data-page="' + a + '">' + a + "</a></li>";
          else {
            t > 2 && (n += '<li class=""><a href="#" class="page-search" data-page="1">1</a></li>', t > 3 && (n += '<li class=""><a href="#">...</a></li>')),
            1 === t ? r += 2 : 2 === t && (r += 1),
            t === e ? o -= 2 : t === e - 1 && (o -= 1);
            for (var i = o; i <= r; i++) 0 === i && (i += 1),
            i > e || (n += '<li class="' + (t == i ? "uk-active": "no") + '"><a href="#" class="page-search" data-page="' + i + '">' + i + "</a></li>");
            t < e - 1 && (t < e - 2 && (n += '<li class=""><a href="#">...</a></li>'), n += '<li class=""><a href="#" class="page-search" data-page="' + e + '">' + e + "</a></li>")
          }
          return t < e && (n += '<li ><a href="#" class="next-search"><span uk-pagination-next></span></a></li>'),
          n + ""
        } (t.total_pages, Ht)
      }))
    },
    Xt = function() {
      var e = document.forms["search-with-filter"];
      e && e.addEventListener("submit", (function(t) {
        t.preventDefault(),
        Wt({
          page: 1,
          category: e.querySelector('[name="category"]').value,
          q: e.querySelector('[name="q"]').value,
          country: e.querySelector('[name="country"]').value
        })
      }))
    },
    Kt = function() {
      document.querySelector(".uk-pagination") && document.body.addEventListener("click", (function(e) {
        var t, n, o, r, a, i, c, s, l, u = e.target;
        u && u.classList.contains("prev-search") && (e.preventDefault(), Wt({
          page: Ht - 1,
          category: null === (t = document.forms["search-with-filter"]) || void 0 === t ? void 0 : t.querySelector('[name="category"]').value,
          q: null === (n = document.forms["search-with-filter"]) || void 0 === n ? void 0 : n.querySelector('[name="q"]').value,
          country: null === (o = document.forms["search-with-filter"]) || void 0 === o ? void 0 : o.querySelector('[name="country"]').value
        }));
        u && u.classList.contains("next-search") && (e.preventDefault(), Wt({
          page: Ht + 1,
          category: null === (r = document.forms["search-with-filter"]) || void 0 === r ? void 0 : r.querySelector('[name="category"]').value,
          q: null === (a = document.forms["search-with-filter"]) || void 0 === a ? void 0 : a.querySelector('[name="q"]').value,
          country: null === (i = document.forms["search-with-filter"]) || void 0 === i ? void 0 : i.querySelector('[name="country"]').value
        }));
        u && u.classList.contains("page-search") && (e.preventDefault(), Wt({
          page: Number(u.getAttribute("data-page")),
          category: null === (c = document.forms["search-with-filter"]) || void 0 === c ? void 0 : c.querySelector('[name="category"]').value,
          q: null === (s = document.forms["search-with-filter"]) || void 0 === s ? void 0 : s.querySelector('[name="q"]').value,
          country: null === (l = document.forms["search-with-filter"]) || void 0 === l ? void 0 : l.querySelector('[name="country"]').value
        }))
      }))
    },
    Zt = function(e) {
      var t = document.getElementById("card-search-image"),
      n = document.getElementById("card-search-only-text"),
      o = document.getElementById("card-no-results-found"),
      r = t.innerHTML,
      a = n.innerHTML,
      i = o.innerHTML,
      c = "";
      document.querySelectorAll(".search-result-remove").forEach((function(e) {
        e.remove()
      })),
      e.length > 0 ? (Object.entries(e).forEach((function(e) {
        "" !== e[1].image ? c += r.replace(/%url%/g, e[1].url ? e[1].url: "#").replace(/%image%/g, e[1].image).replace(/%title%/g, e[1].title).replace(/%description%/g, e[1].description) : c += a.replace(/%url%/g, e[1].url ? e[1].url: "#").replace(/%title%/g, e[1].title).replace(/%description%/g, e[1].description)
      })), document.getElementById("search-results").innerHTML = c, document.querySelector(".search-results-container .uk-text-lead").classList.remove("uk-hidden")) : (document.getElementById("search-results").innerHTML = i, document.querySelector(".search-results-container .uk-text-lead").classList.add("uk-hidden"))
    },
    Gt = function() {
      var e = document.createElement("div");
      e.setAttribute("uk-spinner", ""),
      document.getElementById("search-results").appendChild(e)
    },
    Qt = function() {
      var e = jt(regeneratorRuntime.mark((function e(t) {
        var n;
        return regeneratorRuntime.wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            return e.next = 2,
            fetch(Ut.SEARCH_API_URL + "?" + new URLSearchParams(t).toString());
          case 2:
            if ((n = e.sent).ok) {
              e.next = 5;
              break
            }
            throw new Error("HTTP error! status: ".concat(n.status));
          case 5:
            return e.next = 7,
            n.json();
          case 7:
            return e.abrupt("return", e.sent);
          case 8:
          case "end":
            return e.stop()
          }
        }), e)
      })));
      return function(t) {
        return e.apply(this, arguments)
      }
    } (),
    $t = function(e, t, n) {
      ".".concat(window.location.pathname) === n && e.closest("div").classList.add("uk-active")
    };
    n(8636);
    function en(e, t, n, o, r, a, i) {
      try {
        var c = e[a](i),
        s = c.value
      } catch(e) {
        return void n(e)
      }
      c.done ? t(s) : Promise.resolve(s).then(o, r)
    }
    var tn = document.getElementById("ENV"),
    nn = tn ? JSON.parse(tn.textContent) : null,
    on = [],
    rn = function() {
      b.A.util.on("#offcanvas-nav-primary", "shown", (function() {
        on = []
      })),
      on.forEach((function(e) {
        b.A.util.on("#".concat(e), "hidden", (function() {
          on = []
        }))
      })),
      an()
    },
    an = function() {
      document.body.addEventListener("click", (function(e) {
        var t = e.target;
        t && t.hasAttribute("data-uk-toggle") && null !== t.closest(".subnav-mobile-top") && on.pop(),
        t && t.hasAttribute("data-uk-toggle") && !t.classList.contains("uk-navbar-toggle") && (t.closest(".subnav-mobile-top") || (on.push(un(t)), document.getElementById(un(t)) || (cn(t.closest(".nav-mobile")), ln().then((function(e) {
          var n = (new DOMParser).parseFromString(e.menu, "text/html").getRootNode();
          document.getElementById("offcanvas-nav-primary").insertAdjacentElement("afterend", n.body),
          sn(),
          b.A.offcanvas(document.getElementById(un(t))).show()
        })))))
      }))
    },
    cn = function(e) {
      var t = document.createElement("div");
      t.classList.add("menu-loader-mobile"),
      t.classList.add("uk-background-secondary"),
      t.classList.add("uk-position-cover");
      var n = document.createElement("div");
      n.classList.add("uk-flex"),
      n.classList.add("uk-flex-center"),
      n.classList.add("uk-flex-middle"),
      n.classList.add("uk-height-1-1"),
      n.classList.add("uk-text-primary"),
      n.setAttribute("uk-spinner", "ratio: 2"),
      t.appendChild(n),
      e.appendChild(t)
    },
    sn = function() {
      document.querySelector(".menu-loader-mobile").remove()
    },
    ln = function() {
      var e, t = (e = regeneratorRuntime.mark((function e() {
        var t, n;
        return regeneratorRuntime.wrap((function(e) {
          for (;;) switch (e.prev = e.next) {
          case 0:
            return t = "".concat(nn.MEGA_MENU_API_URL, "/mobile/").concat(on.length ? on.join("/") : ""),
            e.next = 3,
            fetch(t);
          case 3:
            return n = e.sent,
            e.next = 6,
            n.json();
          case 6:
            return e.abrupt("return", e.sent);
          case 7:
          case "end":
            return e.stop()
          }
        }), e)
      })),
      function() {
        var t = this,
        n = arguments;
        return new Promise((function(o, r) {
          var a = e.apply(t, n);
          function i(e) {
            en(a, o, r, i, c, "next", e)
          }
          function c(e) {
            en(a, o, r, i, c, "throw", e)
          }
          i(void 0)
        }))
      });
      return function() {
        return t.apply(this, arguments)
      }
    } (),
    un = function(e) {
      return e.getAttribute("data-uk-toggle").match(/#([\s\S]*)$/)[1]
    };
    n(4913),
    n(8741);
    function dn(e, t) {
      var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
      if (!n) {
        if (Array.isArray(e) || (n = function(e, t) {
          if (!e) return;
          if ("string" == typeof e) return mn(e, t);
          var n = Object.prototype.toString.call(e).slice(8, -1);
          "Object" === n && e.constructor && (n = e.constructor.name);
          if ("Map" === n || "Set" === n) return Array.from(e);
          if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return mn(e, t)
        } (e)) || t && e && "number" == typeof e.length) {
          n && (e = n);
          var o = 0,
          r = function() {};
          return {
            s: r,
            n: function() {
              return o >= e.length ? {
                done: !0
              }: {
                done: !1,
                value: e[o++]
              }
            },
            e: function(e) {
              throw e
            },
            f: r
          }
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
      }
      var a, i = !0,
      c = !1;
      return {
        s: function() {
          n = n.call(e)
        },
        n: function() {
          var e = n.next();
          return i = e.done,
          e
        },
        e: function(e) {
          c = !0,
          a = e
        },
        f: function() {
          try {
            i || null == n.
            return || n.
            return ()
          } finally {
            if (c) throw a
          }
        }
      }
    }
    function mn(e, t) { (null == t || t > e.length) && (t = e.length);
      for (var n = 0,
      o = new Array(t); n < t; n++) o[n] = e[n];
      return o
    }
    var pn = document.body.getAttribute("data-theme"),
    gn = [],
    fn = "/images/ico-map-marker.png",
    vn = document.getElementById("ENV"),
    yn = vn ? JSON.parse(vn.textContent) : null,
    hn = null;
    null != pn && "selcom" == pn && (fn = "/images/ico-map-marker-selcom.svg");
    var bn, wn, kn, Ln = function() {
      var e = document.querySelector(".plants-maps-gallery");
      e && (e.classList.contains("map-loaded") || n.e(10).then(n.bind(n, 5010)).then((function(t) {
        Sn(t.Loader, e.getAttribute("data-json"), e),
        e.classList.add("map-loaded")
      }))),
      Rn()
    },
    Sn = function(e, t, n) {
      var o, r = [];
      new e({
        apiKey: yn.MAP_API_KEY,
        version: "weekly"
      }).load().then((function(e) {
        var a = document.getElementById(t),
        i = a ? JSON.parse(a.textContent) : [];
        if (0 !== i.length) {
          var c = {
            zoom: 2,
            mapTypeId: e.maps.MapTypeId.ROADMAP,
            styles: gn,
            zoomControl: !0,
            mapTypeControl: !1,
            scaleControl: !1,
            streetViewControl: !1,
            rotateControl: !1,
            fullscreenControl: !0,
            center: new e.maps.LatLng(44.197569, 10.714303)
          };
          o = new e.maps.Map(n, c);
          var s, l = dn(i);
          try {
            for (l.s(); ! (s = l.n()).done;) {
              var u = s.value,
              d = new e.maps.Marker({
                position: new e.maps.LatLng(u.latitude, u.longitude),
                map: o,
                icon: fn,
                title: JSON.stringify(u.info)
              });
              r.push(d),
              An(d)
            }
          } catch(e) {
            l.e(e)
          } finally {
            l.f()
          }
        }
      }))
    },
    An = function(e) {
      var t = JSON.parse(e.title);
      e.addListener("click", (function() {
        t.gallery.length ? (En(), xn(t.gallery)) : qn(),
        Cn(t.address, t.phone, t.title),
        b.A.modal(document.getElementById("modal-plants-maps-gallery")).show()
      }))
    },
    qn = function() {
      var e = document.getElementById("modal-plants-maps-gallery");
      e.classList.remove("uk-modal-container"),
      e.querySelector(".uk-modal-body").classList.add("uk-hidden"),
      e.querySelector(".uk-modal-footer [uk-grid]").classList.remove("uk-child-width-1-2"),
      e.querySelector(".uk-modal-footer [uk-grid]").classList.add("uk-child-width-1-1")
    },
    En = function() {
      var e = document.getElementById("modal-plants-maps-gallery");
      e.classList.add("uk-modal-container"),
      e.querySelector(".uk-modal-body").classList.remove("uk-hidden"),
      e.querySelector(".uk-modal-footer [uk-grid]").classList.remove("uk-child-width-1-1"),
      e.querySelector(".uk-modal-footer [uk-grid]").classList.add("uk-child-width-1-2")
    },
    xn = function(e) {
      hn = new G.Ay(".plants-maps-gallery-swiper", {
        modules: [G.cx, G.Ze, G.dF],
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: !0,
          dragSize: 70
        },
        slidesPerView: 1,
        preloadImages: !1,
        lazy: !0,
        on: {
          slideChange: function(e) {
            var t = e.slides[e.realIndex].querySelector("video");
            t ? (In(), t.currentTime = 0, t.play()) : In()
          }
        }
      }),
      Object.entries(e).forEach((function(e) {
        var t = e[1],
        n = document.createElement("div");
        if (n.classList.add("swiper-slide"), Pn(t)) {
          var o = Tn(t),
          r = document.createElement("div");
          r.classList.add("swiper-lazy-preloader"),
          n.appendChild(o),
          n.appendChild(r),
          hn.appendSlide(n)
        } else {
          var a = zn(t);
          a.addEventListener("canplay", (function() {
            n.appendChild(a),
            hn.appendSlide(n)
          }))
        }
      })),
      hn.update()
    },
    Tn = function(e) {
      var t = document.createElement("img");
      return t.setAttribute("src", e),
      t.setAttribute("uk-img", ""),
      t.setAttribute("alt", "gallery"),
      t.setAttribute("loading", "lazy"),
      t.classList.add("uk-width-expand"),
      t.classList.add("swiper-lazy"),
      t
    },
    zn = function(e) {
      var t = document.createElement("video");
      return t.src = e,
      t.setAttribute("muted", ""),
      t.controls = !0,
      t.setAttribute("uk-video", "autoplay: inview"),
      t
    },
    Pn = function(e) {
      return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e)
    },
    In = function() {
      document.querySelectorAll(".plants-maps-gallery-swiper .swiper-slide video").forEach((function(e) {
        e.interval = 0,
        e.pause()
      }))
    },
    Rn = function() {
      b.A.util.on("#modal-plants-maps-gallery", "hide", (function() {
        document.querySelectorAll(".plants-maps-gallery-swiper .swiper-slide").forEach((function(e) {
          e.remove()
        })),
        null !== hn && hn.destroy()
      }))
    },
    Cn = function(e, t, n) {
      var o = document.getElementById("modal-plants-maps-gallery"),
      r = o.querySelector(".pmg-address"),
      a = o.querySelector(".pmg-phone"),
      i = o.querySelector(".uk-modal-header"),
      c = o.querySelector(".uk-modal-footer > .uk-grid > :nth-child(1)"),
      s = o.querySelector(".uk-modal-footer > .uk-grid > :nth-child(2)");
      r.innerHTML = "",
      a.innerHTML = "",
      i.innerHTML = "",
      null !== n && (i.innerHTML = n),
      c.classList.add("uk-hidden"),
      null !== e && "" !== e && (c.classList.remove("uk-hidden"), r.innerHTML = e),
      s.classList.add("uk-hidden"),
      null !== t && "" !== t && (s.classList.remove("uk-hidden"), a.innerHTML = t)
    },
    Mn = function(e) {
      e.scrollLeft += 50
    },
    Bn = function(e) {
      e.scrollLeft -= 50
    },
    Nn = function() {
      var e = document.querySelectorAll(".matrix-cards-wrapper");
      e && e.forEach((function(e) {
        e.addEventListener("click", (function(e) {
          var t = e.currentTarget;
          t.classList.contains("open") || document.querySelectorAll(".matrix-cards-wrapper.open").forEach((function(e) {
            e.classList.remove("open")
          })),
          t.classList.toggle("open")
        }))
      }))
    },
    _n = function(e) {
      e.querySelectorAll(".uk-card").forEach((function(t) {
        var n = t.cloneNode(!0);
        n.classList.add("uk-hidden@m", "uk-margin-top"),
        e.appendChild(n)
      }))
    },
    Vn = (n(17),
    function(e) {
      e.addEventListener("change", (function(e) {
        var t = Array.from(document.querySelectorAll("[data-download-category]")); (t.forEach((function(e) {
          return e.removeAttribute("style")
        })), e.target.value) && t.filter((function(t) {
          return t.dataset.downloadCategory !== e.target.value
        })).forEach((function(e) {
          return e.style.display = "none"
        }))
      }))
    }),
    On = document.getElementById("ENV"),
    jn = On ? JSON.parse(On.textContent) : null,
    Dn = function() {
      jn.REQUEST_DOCUMENT_ID && (location.href = "/" + jn.REQUEST_DOCUMENT_LOCALE + "/documentdownload/" + jn.REQUEST_DOCUMENT_ID)
    },
    Hn = function() {
      b.A.util.on(".documentDownloadLink", "click", (function(e) {
        var t = e.target.getAttribute("data-uniquestring"),
        n = e.target.getAttribute("data-documentid"),
        o = e.target.getAttribute("data-documentlanguage");
        document.querySelector("#userRegistrationForm" + t + " .requestDocumentId") && (document.querySelector("#userRegistrationForm" + t + " .requestDocumentId").setAttribute("value", n), document.querySelector("#userRegistrationForm" + t + " .requestDocumentLanguage").setAttribute("value", o), document.querySelector("#form-download-documents" + t).removeAttribute("hidden"), document.querySelector("#section-form-download-documents" + t).removeAttribute("hidden"))
      }))
    },
    Fn = n(4692),
    Un = n.n(Fn),
    Yn = 0,
    Jn = !1,
    Wn = !0,
    Xn = !1,
    Kn = !0,
    Zn = "",
    Gn = !1,
    Qn = 0,
    $n = 0,
    eo = function() {
      var e = document.getElementById("contRotazione");
      e && (document.querySelectorAll("input[type='radio'].js-shop-alternative").forEach((function(t) {
        t.checked && t.dataset.video && (e.dataset.video = t.dataset.video)
      })),
      function(e, t, n) {
        console.log(fe),
        (bn = Un()("#" + e)).css("position", "relative"),
        bn.css("background-color", "white"),
        bn.css("height", "100%"),
        bn.css("width", "100%"),
        bn.empty(),
        wn = bn.parent(),
        Zn = "/" !== n[n.length - 1] ? n + "/": n;
        var o = "";
        o += '<video id="imgPrincipale" playsinline autoplay muted loop draggable="false" style="width: 100%; height: 100%; object-fit: contain; user-drag: none;">',
        o += '<source src="' + t + '" type="video/mp4">',
        o += "Your browser does not support the video tag.",
        o += "</video>",
        bn.append(o),
        (kn = document.getElementById("imgPrincipale")).controls = !1,
        kn.addEventListener("loadedmetadata", (function() {
          $n = kn.duration,
          setInterval((function() {
            Wn && Kn && (Qn = kn.currentTime)
          }), 50),
          function() {
            Un()("#contLoading").remove(),
            Un()("#imgPrincipale").css("cursor", "pointer"),
            Un()(document).bind("touchend", (function() {
              Jn = !1
            })),
            Un()(document).bind("touchstart", (function() {
              Jn = !0
            })),
            Un()(document).mousedown((function() {
              Jn = !0
            })).mouseup((function() {
              Jn = !1
            })),
            Un()("#imgPrincipale").bind("touchstart ", (function(e) {
              var t = e.originalEvent.touches[0] || e.originalEvent.changedTouches[0];
              Yn = t.pageX,
              Wn && (Kn = !1, kn.pause())
            })),
            Un()("#imgPrincipale").mousedown((function(e) {
              Yn = e.pageX,
              Wn && (Kn = !1, kn.pause())
            })),
            Un()(document).bind("touchend", (function() {
              Wn && (Kn = !0, kn.play())
            })),
            Un()(document).mouseup((function() {
              Wn && (Kn = !0, kn.play())
            })),
            Un()("#imgPrincipale").bind("touchmove", (function(e) {
              Wn && Jn && (Wn = !1, Kn = !1, kn.pause(), Un()("#btnPlayPausaRotazione2d").css("background-image", "url(" + Zn + "ico-play.png)")),
              to((e.originalEvent.touches[0] || e.originalEvent.changedTouches[0]).pageX)
            })),
            Un()("#imgPrincipale").mousemove((function(e) {
              Wn && Jn && (Wn = !1, Kn = !1, kn.pause(), Un()("#btnPlayPausaRotazione2d").css("background-image", "url(" + Zn + "ico-play.png)")),
              to(e.pageX)
            }));
            var e = ""; ! 1 === Gn ? (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:1000; left:10px; bottom: 10px; height: 50px; width: 50px; background-image: url(' + Zn + 'ico-pause.png); background-size: cover;"></div>', e += '<div style="position: absolute; z-index:1000;  right:10px; top: 10px; height: 70px; width: 70px; background-image: url(' + Zn + 'ico-rotate.png); background-size: cover;"></div>', e += '<div id="btnFullScreenRotazione2d" style="cursor:pointer; position: absolute; z-index:1000;  right:10px; bottom: 10px; height: 50px; width: 50px; background-image: url(' + Zn + 'ico-zoom.png); background-size: cover;"></div>') : (e += '<div id="btnPlayPausaRotazione2d" style="cursor:pointer; position: absolute; z-index:1000; right:10px; bottom: 10px; height: 50px; width: 50px; background-image: url(' + Zn + 'ico-pause.png); background-size: cover;"></div>', e += '<div style="position: absolute; z-index:1000; right:10px; top: 10px; height: 70px; width: 70px; background-image: url(' + Zn + 'ico-rotate_mobile.png); background-size: cover;"></div>');
            bn.append(e),
            Un()("#btnPlayPausaRotazione2d").click((function() {
              Kn ? (Un()("#btnPlayPausaRotazione2d").css("background-image", "url(" + Zn + "ico-play.png)"), Wn = !1, Kn = !1, kn.pause()) : (Un()("#btnPlayPausaRotazione2d").css("background-image", "url(" + Zn + "ico-pause.png)"), Wn = !0, Kn = !0, kn.play())
            })),
            Un()("#btnFullScreenRotazione2d").click((function() {
              var e;
              e = null,
              Xn ? (e = bn.detach(), bn.css("position", "relative").css("top", "").css("left", "").css("z-index", ""), wn.append(e), Un()("#btnFullScreenRotazione2d").css("background-image", "url(" + Zn + "ico-zoom.png)"), Un()("body").css("overflow-y", ""), Xn = !1) : (e = bn.detach(), bn.css("position", "absolute").css("top", Un()(window).scrollTop() + "px").css("left", "0px").css("z-index", "100"), Un()("body").append(e), Un()("#btnFullScreenRotazione2d").css("background-image", "url(" + Zn + "ico-zoom_meno.png)"), Un()("body").css("overflow-y", "hidden"), Xn = !0)
            }))
          } ()
        })),
        Un()(document).on("dragstart", (function(e) {
          if ("video" == e.target.nodeName.toLowerCase()) return ! 1
        }))
      } ("contRotazione", e.dataset.video, "/build/images/rotator"))
    };
    function to(e) {
      if (!0 === Jn) {
        var t = Yn - e,
        n = !1; (t > 1 || t < -1) && (Qn += .01 * t, Yn = e, n = !0),
        !0 === n && (Qn < 0 ? Qn = $n: Qn > $n && (Qn = 0), kn.currentTime = Qn)
      }
    }
    var no = function() {
      window.onkeydown = function(e) {
        if (27 == e.keyCode) {
          var t = document.querySelectorAll(".focusable"),
          n = document.querySelectorAll("[data-focus]");
          t.forEach((function(e) {
            e.classList.contains("focused") && (e.classList.remove("focused"), e.classList.contains("mega-menu") && (document.querySelector("html").classList.remove("overlay-menu"), document.querySelector("body").classList.remove("menu-is-open"), document.querySelector(".nav-header").classList.contains("uk-position-top") && (document.querySelector(".nav-header").classList.remove("nav-header--white"), document.querySelector(".nav-header").classList.add("nav-header--primary")), e.classList.remove("mega-menu--enable")), e.classList.contains("uk-dropdown") && e.classList.remove("uk-open"), n.forEach((function(e) { (e.classList.contains("mega-menu-active") || e.classList.contains("dropdown-active")) && (e.setAttribute("aria-expanded", "false"), e.focus(), e.classList.contains("mega-menu-active") && e.classList.remove("mega-menu-active"), e.classList.contains("dropdown-active") && e.classList.remove("dropdown-active"))
            })))
          }))
        }
      }
    },
    oo = window.dataLayer || [],
    ro = function() {
      b.A.util.on(".esg-card-icon.gtm_event_track a.uk-button", "click", (function(e) {
        oo.push({
          event: e.target.getAttribute("data-gtm-eventname"),
          contact_name: e.target.getAttribute("data-gtm-contactname")
        })
      }))
    },
    ao = function() {
      document.querySelectorAll(".ext-accordion--hz").forEach((function(e) {
        var t = e.querySelectorAll("li");
        e.style.opacity = 1;
        var n = 0,
        o = [];
        t.forEach((function(e) {
          e.classList.contains("uk-open") || (n += e.offsetWidth);
          var t = e.querySelector(".uk-accordion-content > div").getBoundingClientRect().height;
          o.push(t)
        })),
        e.style.height = Math.max.apply(Math, o) + 150 + "px";
        var r = 0;
        r = window.innerWidth > 1140 ? n + 63 : n + 53,
        t.forEach((function(t) {
          var n = t.querySelector(".uk-accordion-content");
          if (n) {
            var o = e.offsetWidth - parseInt(r);
            n.style.width = parseInt(o) + "px"
          }
        }))
      }))
    },
    io = (n(7746), n(3148), n(4989),
    function() {
      var e = document.getElementsByName("contactCategory"),
      t = document.getElementsByName("sector"),
      n = document.getElementsByName("subSector");
      e.length && t.length && n.length && (b.A.util.on(e, "change", (function(e) {
        var t = e.target.closest("form"),
        n = t.querySelector('select[name="sector"]'),
        o = t.querySelector('select[name="subSector"]');
        if (n && o) {
          var r = e.target.value;
          Array.from(n.options).forEach((function(e, t) {
            0 !== t && (e.style.display = "none", r && e.className.includes(r) && (e.style.display = "block"))
          })),
          n.selectedIndex = 0,
          n.value = "",
          n.dispatchEvent(new Event("change", {
            bubbles: !0
          })),
          o.selectedIndex = 0,
          o.value = "",
          o.dispatchEvent(new Event("change", {
            bubbles: !0
          }))
        }
      })), b.A.util.on(t, "change", (function(e) {
        var t = e.target.closest("form"),
        n = t.querySelector('select[name="contactCategory"]'),
        o = t.querySelector('select[name="subSector"]');
        if (n && o) {
          var r = e.target.value,
          a = n.options[n.selectedIndex],
          i = a ? a.getAttribute("data-marketcode") : null;
          Array.from(o.options).forEach((function(e, t) {
            r && 0 !== t && (e.style.display = "none", (e.className.includes(r) && !i || e.className.includes(r) && i && e.value.startsWith(i)) && (e.style.display = "block"))
          })),
          o.selectedIndex = 0,
          o.value = "",
          o.dispatchEvent(new Event("change", {
            bubbles: !0
          }))
        }
      })))
    });
    Promise.all([]).then((function() {
      var e, t, o, r, a, i, c, s, l, u;
      n.g.UIkit = X,
      (e = document.querySelectorAll(".scrollable-uk-tab-custom")).length && e.forEach((function(e) {
        var t = e.querySelector(".uk-tab-custom");
        if (t.children.length > 5) {
          e.classList.add("enabled");
          var n = e.querySelector('a[data-direction="next"]'),
          o = e.querySelector('a[data-direction="prev"]');
          n.addEventListener("click", (function(e) {
            e.preventDefault(),
            Mn(t)
          })),
          o.addEventListener("click", (function(e) {
            e.preventDefault(),
            Bn(t)
          }))
        } else e.classList.add("disabled")
      })),
      window.addEventListener("load", (function() {
        document.querySelectorAll(".navigable-tab").forEach((function(e) {
          var t = e.getAttribute("data-navigable-tab");
          e.querySelectorAll("a").forEach((function(e) {
            var n = e.getAttribute("href");
            $t(e, t, n)
          }))
        }))
      })),
      t = document.querySelector("[data-sheet-modal]"),
      o = document.querySelector(".sheet-modal-close"),
      r = document.querySelector(".sheet-modal-close-icon"),
      t && (t.addEventListener("click", (function(e) {
        Bt(e)
      })), o.addEventListener("click", (function() {
        Nt()
      })), r.addEventListener("click", (function() {
        Nt()
      }))),
      mt(),
      document.querySelectorAll(".slider-video").forEach((function(e, t) {
        var n = e;
        n.classList.add("swiper-slider-" + t);
        var o = n.getAttribute("data-slide") ? Number(n.getAttribute("data-slide")) : 2;
        new G.Ay(".swiper-slider-" + t, {
          modules: [G.Ze, G.Vx],
          direction: "horizontal",
          slidesPerView: o > 3 ? 3.5 : 3,
          spaceBetween: 20,
          navigation: {
            nextEl: ".card-slider-next",
            prevEl: ".card-slider-prev"
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: !0,
            dragSize: 70
          },
          breakpoints: {
            320 : {
              slidesPerView: 1.5
            },
            768 : {
              slidesPerView: o > 3 ? 3.5 : 3
            }
          }
        })
      })),
      K(),
      Z(),
      Q(),
      ee(),
      $(),
      pe(),
      rn(),
      Le(),
      document.querySelectorAll(".card-slider").forEach((function(e, t) {
        var n = e;
        n.classList.add("swiper-slider-" + t);
        var o = n.getAttribute("drag-size") ? Number(n.getAttribute("drag-size")) : 50,
        r = !!n.getAttribute("free-mode") && n.getAttribute("free-mode"),
        a = !!n.getAttribute("loop") && n.getAttribute("loop"),
        i = n.getAttribute("data-group") ? Number(n.getAttribute("data-group")) : 2,
        c = n.getAttribute("data-slide") ? Number(n.getAttribute("data-slide")) : 2;
        new G.Ay(".swiper-slider-" + t, {
          modules: [G.Ze, G.Vx],
          direction: "horizontal",
          loop: a,
          freeMode: r,
          slidesPerGroup: i,
          slidesPerView: c,
          spaceBetween: 20,
          watchOverflow: !0,
          navigation: {
            nextEl: ".card-slider-next",
            prevEl: ".card-slider-prev"
          },
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: !0,
            dragSize: o
          },
          breakpoints: {
            320 : {
              slidesPerView: 2
            },
            768 : {
              slidesPerView: c
            }
          },
          on: {
            lock: function(e) {
              var t, n;
              null != e && null !== (t = e.navigation) && void 0 !== t && t.prevEl && null != e && null !== (n = e.navigation) && void 0 !== n && n.nextEl && e.navigation.prevEl.classList.contains("swiper-button-lock") && e.navigation.nextEl.classList.contains("swiper-button-lock") && (e.navigation.prevEl.classList.add("swiper-button-hidden"), e.navigation.nextEl.classList.add("swiper-button-hidden"))
            },
            unlock: function(e) {
              var t, n;
              null != e && null !== (t = e.navigation) && void 0 !== t && t.prevEl && null != e && null !== (n = e.navigation) && void 0 !== n && n.nextEl && (e.navigation.prevEl.classList.remove("swiper-button-hidden"), e.navigation.nextEl.classList.remove("swiper-button-hidden"))
            }
          }
        })
      })),
      document.querySelectorAll(".card-slider-prev", (function(e) {
        e.addEventListener("click", (function(e) {
          var t = e.target.getAttribute("data-slide-index");
          console.log(".card-slider-prev", t)
        }))
      })),
      Re(),
      Ie(),
      Me(),
      Pe(),
      ze(),
      Te(),
      xe(),
      Ce(),
      Ee(),
      document.querySelectorAll(".gallery-slider").forEach((function(e, t) {
        e.classList.add("swiper-gallery-slider-" + t),
        new G.Ay(".swiper-gallery-slider-" + t, {
          modules: [G.Ze],
          direction: "horizontal",
          loop: !1,
          freeMode: !1,
          slidesPerView: 1,
          scrollbar: {
            el: ".swiper-scrollbar",
            draggable: !0,
            dragSize: 100
          }
        })
      })),
      b.A.util.on(".product-top-mobile-cta", "active", (function() {
        console.log("active")
      })),
      Qe(),
      $e(),
      a = document.querySelector(".swiper-card-content-next"),
      i = document.querySelector(".swiper-card-content-prev"),
      c = new G.Ay(".swiper-card-image", {
        allowTouchMove: !1
      }),
      (s = new G.Ay(".swiper-card-content", {
        modules: [G.Ze],
        scrollbar: {
          el: ".swiper-scrollbar",
          draggable: !0,
          dragSize: 90
        },
        breakpoints: {
          320 : {
            slidesPerView: 1.3,
            spaceBetween: 10
          },
          768 : {
            slidesPerView: 1
          }
        }
      })).on("slideChange", (function(e) {
        c.slideTo(e.realIndex)
      })),
      a && i && (a.addEventListener("click", (function(e) {
        e.preventDefault(),
        s.slideNext()
      })), i.addEventListener("click", (function(e) {
        e.preventDefault(),
        s.slidePrev()
      }))),
      document.querySelector(".history-container") && (xt(), zt(), Et(), Tt(), qt(), At(), It()),
      Rt(),
      Mt(),
      Ct(),
      Jt(),
      Kt(),
      Yt(),
      Xt(),
      yn && Ln(),
      ge() && Nn(),
      (l = document.querySelector(".contact-locator")) && _n(l),
      (u = document.querySelector("select[data-filter-downloads]")) && Vn(u),
      document.querySelectorAll(".ext-slider").forEach((function(e) {
        var t, n, o = {};
        e.classList.contains("default-sizes") ? (t = 1e3, n = 4.5, o = {
          320 : {
            slidesPerView: 1.5
          },
          768 : {
            slidesPerView: 2.5
          },
          992 : {
            slidesPerView: 3.5
          },
          1400 : {
            slidesPerView: 4.5
          }
        }) : (t = 1500, n = 3, o = {
          320 : {
            slidesPerView: 1.5
          },
          768 : {
            slidesPerView: 2
          },
          992 : {
            slidesPerView: 3
          }
        }),
        new G.Ay(e, {
          modules: [G.Vx, G.Ij],
          slidesPerView: n,
          centeredSlides: !0,
          speed: t,
          centerInsufficientSlides: !0,
          spaceBetween: 40,
          loop: !0,
          autoplay: {
            delay: 5e3
          },
          breakpoints: o,
          navigation: {
            nextEl: ".uk-position-center-right",
            prevEl: ".uk-position-center-left"
          },
          clickable: !0
        })
      })),
      Dn(),
      Hn(),
      eo(),
      no(),
      ro(),
      document.addEventListener("DOMContentLoaded", (function() {
        setTimeout((function() {
          window.innerWidth > 800 ? ao() : document.querySelectorAll(".ext-accordion--hz").forEach((function(e) {
            e.setAttribute("uk-accordion", "animation:false")
          }))
        }), 1e3)
      })),
      window.addEventListener("resize", (function() {
        setTimeout((function() {
          window.innerWidth > 800 ? ao() : document.querySelectorAll(".ext-accordion--hz").forEach((function(e) {
            e.setAttribute("uk-accordion", "animation:false")
          }))
        }), 1e3)
      })),
      io()
    }))
  }
},
function(e) {
  e.O(0, [466], (function() {
    return t = 5832,
    e(e.s = t);
    var t
  }));
  e.O()
}]);