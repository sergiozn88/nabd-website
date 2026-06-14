(function () {
  var LOGO_PATH =
    "M10,60 H30 L35,55 L45,8 L55,72 L62,50 L68,60 H80 C80,60 110,60 110,40 C110,20 90,20 90,40 C90,60 110,80 110,80";
  var STROKE_COLOR = "#C8372D";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initLogos() {
    document.querySelectorAll(".nabd-logo").forEach(function (svg) {
      var size = Number(svg.dataset.size || 160);
      var animate = svg.dataset.animate === "true" && !reducedMotion;
      var stroke = svg.dataset.stroke || STROKE_COLOR;
      var height = size * (90 / 120);

      svg.setAttribute("viewBox", "0 0 120 90");
      svg.setAttribute("width", String(size));
      svg.setAttribute("height", String(height));
      svg.setAttribute("fill", "none");
      svg.innerHTML =
        '<path class="nabd-logo__path" d="' +
        LOGO_PATH +
        '" stroke="' +
        stroke +
        '" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" />' +
        '<circle class="nabd-logo__dot" cx="110" cy="80" r="2.5" fill="' +
        stroke +
        '" />';

      var path = svg.querySelector(".nabd-logo__path");
      var length = path.getTotalLength();
      svg.style.setProperty("--path-length", String(length));

      if (animate) {
        svg.classList.add("nabd-logo--animated");
      } else {
        svg.classList.add("nabd-logo--static");
      }
    });
  }

  function initHeroReveal() {
    var hero = document.querySelector(".hero");
    if (!hero) return;

    if (reducedMotion) {
      hero.classList.add("is-ready");
      return;
    }

    window.setTimeout(function () {
      hero.classList.add("is-ready");
    }, window.matchMedia("(max-width: 48rem)").matches ? 900 : 2600);
  }

  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;

    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.getElementById("site-nav");
    if (!toggle || !nav) return;

    var setOpen = function (isOpen) {
      nav.classList.toggle("is-open", isOpen);
      toggle.classList.toggle("is-active", isOpen);
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
      document.body.classList.toggle("nav-open", isOpen);
    };

    toggle.addEventListener("click", function () {
      setOpen(!nav.classList.contains("is-open"));
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setOpen(false);
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") setOpen(false);
    });
  }

  function initScrollReveal() {
    if (reducedMotion) {
      document.querySelectorAll(".reveal").forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }

    var items = document.querySelectorAll(".reveal");
    if (!items.length || !("IntersectionObserver" in window)) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initActiveNav() {
    var navLinks = document.querySelectorAll(
      '.site-nav a[href^="#"]:not(.site-nav__cta)'
    );
    var sections = [];

    navLinks.forEach(function (link) {
      var id = link.getAttribute("href").slice(1);
      var section = document.getElementById(id);
      if (section) {
        sections.push({ id: id, link: link, section: section });
      }
    });

    if (!sections.length) return;

    sections.sort(function (a, b) {
      return a.section.offsetTop - b.section.offsetTop;
    });

    function getMarker() {
      var headerHeight = parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-height")
      );
      return (headerHeight || 72) + window.innerHeight * 0.22;
    }

    function updateActiveNav() {
      var marker = getMarker();
      var active = null;

      sections.forEach(function (item) {
        if (item.section.getBoundingClientRect().top <= marker) {
          active = item;
        }
      });

      sections.forEach(function (item) {
        item.link.classList.toggle("is-active", item === active);
      });
    }

    updateActiveNav();
    window.addEventListener("scroll", updateActiveNav, { passive: true });
    window.addEventListener("resize", updateActiveNav);
  }

  var year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());

  if (window.NabdI18n) {
    NabdI18n.applyLanguage(NabdI18n.getStoredLang());
    NabdI18n.initLanguageSwitcher();
  }

  initLogos();
  initHeroReveal();
  initHeaderScroll();
  initMobileNav();
  initScrollReveal();
  initActiveNav();
})();
