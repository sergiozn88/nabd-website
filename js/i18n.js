window.NabdI18n = (function () {
  var STORAGE_KEY = "nabd-lang";
  var DEFAULT_LANG = "ar";

  var translations = {
    ar: {
      meta: {
        title: "نبض — نبض مجتمعك",
        description:
          "نبض — ذكاء مجتمعي لحيك. أبلغ عن المشكلات، تابع الحلول، وساهم في تحسين مدينتك.",
      },
      skip: "انتقل إلى المحتوى",
      brand: { home: "الصفحة الرئيسية لنبض", name: "نبض" },
      nav: {
        label: "التنقل الرئيسي",
        about: "عن نبض",
        features: "المزايا",
        process: "كيف يعمل",
        download: "تنزيل",
        menu: "القائمة",
      },
      lang: { switch: "تغيير اللغة", ar: "عربي", en: "English" },
      hero: {
        logoAria: "شعار نبض المتحرك",
        eyebrow: "ذكاء مجتمعي",
        title: "نبض مجتمعك",
        lead:
          "رصِد مشكلات حيك، تحقق مما يهم، وتابع كل بلاغ من لحظة الإرسال حتى الحل — معًا.",
        download: "تنزيل",
        watch: "شاهد الفيلم",
      },
      quote: {
        aria: "رسالة المهمة",
        text: "لكل مجتمع صوت. لا أحد يصغي.",
      },
      mission: {
        title: "نبض ليس تطبيق شكاوى",
        body:
          "بل أداة ذكاء مجتمعي يومية لتحسين مدينتك. يحوّل نبض بلاغات الحي إلى ذاكرة مشتركة، ومتابعة شفافة، وإجراءات يثق بها السكان.",
        values: {
          trustworthy: {
            label: "جدير بالثقة",
            desc: "بلاغات موثّقة وحالة واضحة في كل خطوة.",
          },
          memory: {
            label: "يحفظ الذاكرة",
            desc: "تبقى المشكلات ظاهرة حتى لا تختفي الأنماط.",
          },
          action: {
            label: "إجراء بنّاء",
            desc: "مصمّم لتوجيه المشكلات إلى الفرق القادرة على حلها.",
          },
          transparent: {
            label: "شفاف",
            desc: "متابعة مفتوحة من البلاغ إلى الحل.",
          },
          citizen: {
            label: "يركّز على المواطن",
            desc: "مُصمَّم حول من يعيشون في الحي.",
          },
        },
      },
      features: {
        title: "كل ما يحتاجه حيك",
        map: {
          title: "خريطة حيّة للحي",
          text: "استكشف بلاغات المجتمع على خريطة تفاعلية وافهم ما يجري من حولك.",
        },
        evidence: {
          title: "بلاغات مدعومة بالأدلة",
          text: "أرسل المشكلات مع صور وموقع حتى يحصل المشرفون وفرق المدينة على ما يلزمهم للتحرك.",
        },
        verify: {
          title: "تحقق مجتمعي",
          text: "يؤكد الجيران ما هو حقيقي، فيقل الضجيج وتقوى الثقة في كل بلاغ.",
        },
      },
      process: {
        title: "من البلاغ إلى الحل",
        lead:
          "مسار واضح يحوّل ملاحظتك اليومية إلى إجراء جماعي يمكن متابعته ومشاركته.",
        steps: {
          report: {
            title: "بلاغ",
            text: "لاحظ مشكلة في حيك وأرسلها مع دليل يثبتها.",
          },
          verify: {
            title: "تحقق",
            text: "يؤكد المجتمع ما هو واقعي قبل أن يُتخذ أي إجراء.",
          },
          route: {
            title: "توجيه",
            text: "تصل البلاغات الموثّقة إلى المشرفين والفرق البلدية المختصة.",
          },
          resolve: {
            title: "حل",
            text: "تابع سير المعالجة علنًا حتى يكتمل الإصلاح ويُتحقق منه.",
          },
        },
      },
      privacy: {
        title: "مجهول الهوية افتراضيًا.<br />وشفاف بالتصميم.",
        private: {
          title: "هوية محمية",
          text: "لا يظهر اسمك على الخريطة العامة إلا إذا اخترت ذلك.",
        },
        open: {
          title: "حالة مفتوحة",
          text: "لكل بلاغ مسار واضح — بلا صناديق سوداء.",
        },
        data: {
          title: "بيانات مسؤولة",
          text: "يُشارك الموقع فقط مع الفرق التي تحتاجه للاستجابة.",
        },
      },
      download: {
        title: "نبض. انضم إلى حيك.",
        lead: "حمّل نبض وساعد مدينتك على الإصغاء لما يهم.",
        appStore: "تنزيل من App Store",
        appStoreLabel: "تنزيل من",
        appStoreBrand: "App Store",
        playStore: "تنزيل من Google Play",
        playStoreLabel: "تنزيل من",
        playStoreBrand: "Google Play",
      },
      footer: {
        label: "تذييل الصفحة",
        copy: "نبض. جميع الحقوق محفوظة.",
      },
      legal: {
        privacyPolicy: "سياسة الخصوصية",
        termsOfUse: "شروط الاستخدام",
        backHome: "الرئيسية",
        viewPrivacy: "سياسة الخصوصية",
        viewTerms: "شروط الاستخدام",
      },
    },
    en: {
      meta: {
        title: "Nabd — The Pulse of Your Community",
        description:
          "Nabd — community intelligence for your neighborhood. Report issues, track resolution, and help improve your city.",
      },
      skip: "Skip to content",
      brand: { home: "Nabd home", name: "Nabd" },
      nav: {
        label: "Primary",
        about: "About",
        features: "Features",
        process: "How it works",
        download: "Download",
        menu: "Menu",
      },
      lang: { switch: "Change language", ar: "عربي", en: "English" },
      hero: {
        logoAria: "Nabd pulse logo animation",
        eyebrow: "Community intelligence",
        title: "The Pulse of Your Community",
        lead:
          "Spot local issues, verify what matters, and follow every report from submission to resolution — together.",
        download: "Download",
        watch: "Watch the film",
      },
      quote: {
        aria: "Mission statement",
        text: "Every community has a voice. No one is listening.",
      },
      mission: {
        title: "Nabd is not a complaints app",
        body:
          "It is community intelligence — a day-to-day tool for improving your city. Nabd turns neighborhood reports into shared memory, transparent progress, and action that residents can trust.",
        values: {
          trustworthy: {
            label: "Trustworthy",
            desc: "Verified reports and clear status at every step.",
          },
          memory: {
            label: "Memory-oriented",
            desc: "Issues stay visible so patterns don't disappear.",
          },
          action: {
            label: "Constructive action",
            desc: "Built to route problems to the teams who can fix them.",
          },
          transparent: {
            label: "Transparent",
            desc: "Open progress from report to resolution.",
          },
          citizen: {
            label: "Citizen-centred",
            desc: "Designed around the people who live in the neighborhood.",
          },
        },
      },
      features: {
        title: "Everything your neighborhood needs",
        map: {
          title: "Live neighborhood map",
          text: "Explore community reports on an interactive map and understand what is happening around you.",
        },
        evidence: {
          title: "Evidence-based reporting",
          text: "Submit issues with photos and location so moderators and city teams have what they need to act.",
        },
        verify: {
          title: "Community verification",
          text: "Neighbors confirm what is real, reducing noise and strengthening trust in every report.",
        },
      },
      process: {
        title: "From report to resolution",
        lead:
          "A clear path that turns everyday observations into collective action you can follow and share.",
        steps: {
          report: {
            title: "Report",
            text: "Spot an issue in your neighborhood and submit it with evidence.",
          },
          verify: {
            title: "Verify",
            text: "The community confirms what is real before it moves forward.",
          },
          route: {
            title: "Route",
            text: "Verified reports reach moderators and the right municipal teams.",
          },
          resolve: {
            title: "Resolve",
            text: "Track progress publicly until the fix is complete and verified.",
          },
        },
      },
      privacy: {
        title: "Anonymous by default.<br />Transparent by design.",
        private: {
          title: "Private identity",
          text: "Your name stays off the public map unless you choose otherwise.",
        },
        open: {
          title: "Open status",
          text: "Every report has a visible lifecycle — no black boxes.",
        },
        data: {
          title: "Responsible data",
          text: "Location is shared only with teams who need it to respond.",
        },
      },
      download: {
        title: "Pulse. Join your neighborhood.",
        lead: "Download Nabd and help your city listen to what matters.",
        appStore: "Download on the App Store",
        appStoreLabel: "Download on the",
        appStoreBrand: "App Store",
        playStore: "Get it on Google Play",
        playStoreLabel: "Get it on",
        playStoreBrand: "Google Play",
      },
      footer: {
        label: "Footer",
        copy: "Nabd. All rights reserved.",
      },
      legal: {
        privacyPolicy: "Privacy Policy",
        termsOfUse: "Terms of Use",
        backHome: "Home",
        viewPrivacy: "Privacy Policy",
        viewTerms: "Terms of Use",
      },
    },
  };

  function getNested(obj, path) {
    return path.split(".").reduce(function (acc, key) {
      return acc && acc[key] !== undefined ? acc[key] : null;
    }, obj);
  }

  function getStoredLang() {
    try {
      var params = new URLSearchParams(window.location.search);
      var urlLang = params.get("lang");
      if (urlLang && translations[urlLang]) return urlLang;
    } catch (error) {
      /* ignore */
    }

    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && translations[stored]) return stored;
    } catch (error) {
      /* ignore */
    }
    return DEFAULT_LANG;
  }

  function resolveLang(lang) {
    return translations[lang] ? lang : DEFAULT_LANG;
  }

  function applyLanguage(lang) {
    var resolved = resolveLang(lang);
    var strings = translations[resolved];

    document.documentElement.lang = resolved;
    document.documentElement.dir = resolved === "ar" ? "rtl" : "ltr";

    if (!document.body.classList.contains("legal-page-body")) {
      document.title = strings.meta.title;
    }

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", strings.meta.description);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      var value = getNested(strings, key);
      if (value !== null) el.textContent = value;
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      var value = getNested(strings, key);
      if (value !== null) el.innerHTML = value;
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      var spec = el.getAttribute("data-i18n-attr");
      spec.split(";").forEach(function (pair) {
        var parts = pair.split(":");
        if (parts.length !== 2) return;
        var attr = parts[0].trim();
        var key = parts[1].trim();
        var value = getNested(strings, key);
        if (value !== null) el.setAttribute(attr, value);
      });
    });

    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === resolved;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    try {
      localStorage.setItem(STORAGE_KEY, resolved);
    } catch (error) {
      /* ignore */
    }

    return resolved;
  }

  function initLanguageSwitcher(onChange) {
    document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (!lang) return;
        applyLanguage(lang);
        if (typeof onChange === "function") onChange(lang);
      });
    });
  }

  return {
    DEFAULT_LANG: DEFAULT_LANG,
    getStoredLang: getStoredLang,
    applyLanguage: applyLanguage,
    initLanguageSwitcher: initLanguageSwitcher,
  };
})();
