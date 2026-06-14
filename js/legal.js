(function () {
  function renderRelatedLinks(links) {
    if (!links || !links.length) return null;

    var nav = document.createElement("nav");
    nav.className = "legal-doc__related";
    nav.setAttribute("aria-label", "Related policies");

    links.forEach(function (item) {
      var a = document.createElement("a");
      a.href = item.href;
      a.textContent = item.label;
      nav.appendChild(a);
    });

    return nav;
  }

  function renderCallout(callout) {
    if (!callout) return null;

    var aside = document.createElement("aside");
    aside.className = "legal-doc__callout";

    if (callout.title) {
      var title = document.createElement("p");
      title.className = "legal-doc__callout-title";
      title.textContent = callout.title;
      aside.appendChild(title);
    }

    if (callout.body) {
      var body = document.createElement("p");
      body.textContent = callout.body;
      aside.appendChild(body);
    }

    if (callout.link) {
      var link = document.createElement("a");
      link.href = callout.link.href;
      link.textContent = callout.link.label;
      link.className = "legal-doc__callout-link";
      aside.appendChild(link);
    }

    return aside;
  }

  function renderLegalPage(docType) {
    var root = document.getElementById("legal-content");
    if (!root || !window.NabdLegalContent) return;

    var lang = window.NabdI18n
      ? window.NabdI18n.applyLanguage(window.NabdI18n.getStoredLang())
      : "ar";
    var content = window.NabdLegalContent[docType][lang];
    if (!content) return;

    document.title = content.title;

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", content.metaDescription);

    var pageTitle = document.getElementById("legal-page-title");
    if (pageTitle) pageTitle.textContent = content.pageTitle;

    var lastUpdated = document.getElementById("legal-last-updated");
    if (lastUpdated) lastUpdated.textContent = content.lastUpdated;

    var effective = document.getElementById("legal-effective");
    if (effective) effective.textContent = content.effective;

    var relatedNav = document.getElementById("legal-related-nav");
    if (relatedNav) {
      relatedNav.innerHTML = "";
      var related = renderRelatedLinks(content.relatedLinks);
      if (related) relatedNav.appendChild(related);
    }

    root.innerHTML = "";

    if (content.intro) {
      var intro = document.createElement("p");
      intro.className = "legal-doc__intro";
      intro.textContent = content.intro;
      root.appendChild(intro);
    }

    content.sections.forEach(function (section) {
      var block = document.createElement("section");
      block.className = "legal-doc__section";
      block.id = section.id;

      var heading = document.createElement("h2");
      heading.textContent = section.title;
      block.appendChild(heading);

      (section.paragraphs || []).forEach(function (text) {
        var p = document.createElement("p");
        p.textContent = text;
        block.appendChild(p);
      });

      if (section.list && section.list.length) {
        var list = document.createElement("ul");
        section.list.forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          list.appendChild(li);
        });
        block.appendChild(list);
      }

      if (section.steps && section.steps.length) {
        var steps = document.createElement("ol");
        steps.className = "legal-doc__steps";
        section.steps.forEach(function (item) {
          var li = document.createElement("li");
          li.textContent = item;
          steps.appendChild(li);
        });
        block.appendChild(steps);
      }

      if (section.after) {
        var after = document.createElement("p");
        after.textContent = section.after;
        block.appendChild(after);
      }

      var callout = renderCallout(section.callout);
      if (callout) block.appendChild(callout);

      root.appendChild(block);
    });
  }

  function initLegalPage(docType) {
    if (window.NabdI18n) {
      NabdI18n.applyLanguage(NabdI18n.getStoredLang());
      NabdI18n.initLanguageSwitcher(function (lang) {
        try {
          var url = new URL(window.location.href);
          url.searchParams.set("lang", lang);
          window.history.replaceState({}, "", url);
        } catch (error) {
          /* ignore */
        }
        renderLegalPage(docType);
      });
    }

    renderLegalPage(docType);

    if (window.initLogos) {
      window.initLogos();
    }

    var year = document.getElementById("year");
    if (year) year.textContent = String(new Date().getFullYear());
  }

  window.NabdLegalPage = {
    init: initLegalPage,
    render: renderLegalPage,
  };
})();
