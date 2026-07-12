document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const menuToggle = document.getElementById("menuToggle");
  const siteNav = document.getElementById("siteNav");

  /* ---- Header solidifies once the page is scrolled ---- */
  const updateHeaderState = () => {
    if (header) header.classList.toggle("solid", window.scrollY > 40);
  };
  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState, { passive: true });

  /* ---- Mobile menu open/close ---- */
  const closeMenu = () => {
    siteNav.classList.remove("open");
    menuToggle.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  };
  const openMenu = () => {
    siteNav.classList.add("open");
    menuToggle.classList.add("active");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  };
  if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
      siteNav.classList.contains("open") ? closeMenu() : openMenu();
    });
    siteNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });
  }

  /* ---- Desktop "Services" dropdown ---- */
  const dropdownBtn = document.querySelector(".nav-dropdown-btn");
  const dropdownMenu = document.querySelector(".nav-dropdown-menu");
  if (dropdownBtn && dropdownMenu) {
    const closeDropdown = () => {
      dropdownMenu.classList.remove("open");
      dropdownBtn.setAttribute("aria-expanded", "false");
    };
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.contains("open");
      isOpen ? closeDropdown() : (dropdownMenu.classList.add("open"), dropdownBtn.setAttribute("aria-expanded", "true"));
    });
    document.addEventListener("click", (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) closeDropdown();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeDropdown();
    });
  }

  /* ---- Quote forms: submit without leaving the page ---- */
  document.querySelectorAll("form[data-quote-form]").forEach((quoteForm) => {
    quoteForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = quoteForm.querySelector('button[type="submit"]');
      const originalLabel = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = "Sending…";

      try {
        const response = await fetch(quoteForm.action, {
          method: "POST",
          body: new FormData(quoteForm),
          headers: { Accept: "application/json" },
        });
        if (!response.ok) throw new Error("Request failed");
        quoteForm.innerHTML = '<p class="form-success">Thanks — your request is in. Jace will reply within one business day.</p>';
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalLabel;
        alert("Something went wrong sending your request. Please call or text Jace directly — details are just below.");
      }
    });
  });

  /* ---- Simple lightbox for the projects gallery ---- */
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    const lightboxImg = document.getElementById("lightboxImg");
    const lightboxCaption = document.getElementById("lightboxCaption");
    const closeBtn = lightbox.querySelector(".lightbox-close");

    document.querySelectorAll("[data-lightbox-src]").forEach((card) => {
      card.setAttribute("role", "button");
      card.setAttribute("tabindex", "0");
      const open = () => {
        lightboxImg.src = card.getAttribute("data-lightbox-src");
        lightboxCaption.textContent = card.getAttribute("data-lightbox-caption") || "";
        lightbox.classList.add("open");
      };
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
    });

    const close = () => lightbox.classList.remove("open");
    closeBtn?.addEventListener("click", close);
    lightbox.addEventListener("click", (e) => { if (e.target === lightbox) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
  }
});
