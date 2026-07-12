// Force scroll to top on refresh and disable browser scroll restoration
if (history.scrollRestoration) {
  history.scrollRestoration = 'manual';
}
window.scrollTo(0, 0);

document.addEventListener("DOMContentLoaded", () => {
  // Restore scroll to top on DOM load to be sure
  window.scrollTo(0, 0);
  if (window.lenis) {
    window.lenis.scrollTo(0, { immediate: true });
  }

  // 2. PAGE EXIT TRANSITIONS (FADE OUT ON LINK CLICK)
  document.querySelectorAll("a").forEach(link => {
    const href = link.getAttribute("href");
    const target = link.getAttribute("target");
    
    // Process only internal navigation links
    if (href && (href.startsWith("/") || href.startsWith("./") || href.endsWith(".html")) && target !== "_blank" && !href.startsWith("mailto:") && !href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        gsap.to("body", {
          opacity: 0,
          duration: 0.5,
          ease: "power1.inOut",
          onComplete: () => {
            window.location.href = href;
          }
        });
      });
    }
  });

  // 3. INITIALIZE LENIS SMOOTH SCROLL
  try {
    if (typeof Lenis !== "undefined") {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
      });
      window.lenis = lenis;

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  } catch (e) {
    console.error("Lenis Smooth Scroll failed to initialize:", e);
  }

  // 4. INITIALIZE COMPONENTS
  initLogoWallCycle();
  initModalSystem();
  initFooterYear();
  initBannerClose();
  initWorkFilters();
  initContactTrail();
  initAccordionSystem();
});

// ACCORDION SYSTEM FOR FAQ
function initAccordionSystem() {
  document.querySelectorAll('.accordion_component').forEach(acc => {
    const btn = acc.querySelector('.accordion_toggle_button');
    const contentWrap = acc.querySelector('.accordion_content_wrap');
    if (!btn || !contentWrap) return;

    // Initially hide content wrap
    gsap.set(contentWrap, { height: 0, display: 'none' });

    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';

      // Close other accordions in the same list
      if (!isExpanded) {
        const parent = acc.closest('.accordion_wrap') || acc.parentElement;
        parent.querySelectorAll('.accordion_component').forEach(otherAcc => {
          const otherBtn = otherAcc.querySelector('.accordion_toggle_button');
          const otherContent = otherAcc.querySelector('.accordion_content_wrap');
          if (otherBtn && otherContent && otherBtn !== btn && otherBtn.getAttribute('aria-expanded') === 'true') {
            otherBtn.setAttribute('aria-expanded', 'false');
            gsap.to(otherContent, {
              height: 0,
              duration: 0.35,
              ease: "power2.out",
              onComplete: () => {
                otherContent.style.display = 'none';
              }
            });
          }
        });
      }

      // Toggle this accordion
      btn.setAttribute('aria-expanded', !isExpanded);
      if (!isExpanded) {
        contentWrap.style.display = 'block';
        gsap.fromTo(contentWrap, 
          { height: 0 }, 
          { height: 'auto', duration: 0.4, ease: "power2.out" }
        );
      } else {
        gsap.to(contentWrap, {
          height: 0,
          duration: 0.35,
          ease: "power2.out",
          onComplete: () => {
            contentWrap.style.display = 'none';
          }
        });
      }
    });
  });
}

// CONTACT PAGE IMAGE CURSOR TRAIL
function initContactTrail() {
  const container = document.querySelector('.trail-list');
  if (!container) return;

  const items = container.querySelectorAll('.trail-item');
  if (!items.length) return;

  let currentIndex = 0;
  let lastPos = { x: 0, y: 0 };
  const threshold = 90; // px distance threshold to trigger next image

  // Set initial state for trail items
  items.forEach(item => {
    gsap.set(item, { opacity: 0, scale: 0.8, xPercent: -50, yPercent: -50, pointerEvents: 'none' });
  });

  window.addEventListener('mousemove', (e) => {
    const distance = Math.hypot(e.clientX - lastPos.x, e.clientY - lastPos.y);

    if (distance > threshold) {
      const item = items[currentIndex];
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.killTweensOf(item);
      
      // Set to cursor position with random rotation
      gsap.set(item, {
        x: x,
        y: y,
        scale: 0.8,
        opacity: 0,
        rotation: Math.random() * 24 - 12
      });

      // Quick fade-in
      gsap.to(item, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        ease: "power1.out"
      });

      // Soft slide down, scale down, and fade out
      gsap.to(item, {
        opacity: 0,
        scale: 0.75,
        y: y + 60,
        duration: 0.9,
        delay: 0.25,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(item, { opacity: 0 });
        }
      });

      currentIndex = (currentIndex + 1) % items.length;
      lastPos = { x: e.clientX, y: e.clientY };
    }
  });
}

// WORK PAGE CMS FILTERING
function initWorkFilters() {
  const filterForm = document.querySelector('.work_form');
  if (!filterForm) return;

  const filters = filterForm.querySelectorAll('.g_filter_wrap');
  const items = document.querySelectorAll('.work_cms_item, .journal_cms_item');
  const resultsCount = filterForm.querySelector('[fs-list-element="results-count"]');

  function updateResultsCount() {
    if (resultsCount) {
      const visibleCount = Array.from(items).filter(item => item.style.display !== 'none').length;
      resultsCount.textContent = visibleCount;
    }
  }

  filters.forEach(filter => {
    filter.addEventListener('click', (e) => {
      // Deactivate all filters
      filters.forEach(f => f.classList.remove('is-active'));
      // Activate this filter
      filter.classList.add('is-active');

      const radio = filter.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const service = filter.getAttribute('data-service');

      items.forEach(item => {
        const itemService = item.getAttribute('data-service');
        if (service === 'all' || itemService === service) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Stagger animate filtered results in
      const visibleItems = Array.from(items).filter(item => item.style.display !== 'none');
      if (visibleItems.length) {
        gsap.fromTo(visibleItems, 
          { opacity: 0, y: "1.5rem" }, 
          { opacity: 1, y: "0rem", duration: 0.5, ease: "power2.out", stagger: 0.05 }
        );
      }

      updateResultsCount();
    });
  });

  updateResultsCount();
}

// LOGO CYCLING SYSTEM (Sliding continuous logo swapping)
function initLogoWallCycle() {
  const loopDelay = 1.5;   // Swap every 1.5 seconds
  const duration  = 0.9;   // Slide duration

  document.querySelectorAll('.logo-wall').forEach(root => {
    const list   = root.querySelector('[data-logo-wall-list]');
    if (!list) return;
    const items  = Array.from(list.querySelectorAll('[data-logo-wall-item]'));
    if (!items.length) return;

    const shuffleFront = root.getAttribute('data-logo-wall-shuffle') !== 'false';
    const originalTargets = items
      .map(item => item.querySelector('[data-logo-wall-target]'))
      .filter(Boolean);

    let visibleItems   = [];
    let visibleCount   = 0;
    let pool           = [];
    let pattern        = [];
    let patternIndex   = 0;
    let tl;

    function isVisible(el) {
      return window.getComputedStyle(el).display !== 'none';
    }

    function shuffleArray(arr) {
      const a = arr.slice();
      for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
      }
      return a;
    }

    function setup() {
      if (tl) {
        tl.kill();
      }
      visibleItems = items.filter(isVisible);
      visibleCount = visibleItems.length;
      if (!visibleCount) return;

      pattern = shuffleArray(
        Array.from({ length: visibleCount }, (_, i) => i)
      );
      patternIndex = 0;

      // Remove current logo wall targets to rebuild dynamically
      items.forEach(item => {
        item.querySelectorAll('[data-logo-wall-target]').forEach(old => old.remove());
      });

      pool = originalTargets.map(n => n.cloneNode(true));

      let front, rest;
      if (shuffleFront) {
        const shuffledAll = shuffleArray(pool);
        front = shuffledAll.slice(0, visibleCount);
        rest  = shuffledAll.slice(visibleCount);
      } else {
        front = pool.slice(0, visibleCount);
        rest  = shuffleArray(pool.slice(visibleCount));
      }
      pool = front.concat(rest);

      for (let i = 0; i < visibleCount; i++) {
        const parent =
          visibleItems[i].querySelector('[data-logo-wall-target-parent]') ||
          visibleItems[i];
        parent.appendChild(pool.shift());
      }

      tl = gsap.timeline({ repeat: -1 });
      tl.call(swapNext);
      tl.to({}, { duration: loopDelay });
      tl.play();
    }

    function swapNext() {
      const nowCount = items.filter(isVisible).length;
      if (nowCount !== visibleCount) {
        setup();
        return;
      }
      if (!pool.length) return;

      const idx = pattern[patternIndex % visibleCount];
      patternIndex++;

      const container = visibleItems[idx];
      const parent =
        container.querySelector('[data-logo-wall-target-parent]') ||
        container;
      
      const existing = parent.querySelectorAll('[data-logo-wall-target]');
      if (existing.length > 1) return;

      const current  = parent.querySelector('[data-logo-wall-target]');
      const incoming = pool.shift();

      const isUp = Math.random() > 0.5;
      const startY = isUp ? 50 : -50;
      const endY = isUp ? -50 : 50;

      gsap.set(incoming, { yPercent: startY, autoAlpha: 0 });
      parent.appendChild(incoming);

      if (current) {
        gsap.to(current, {
          yPercent: endY,
          autoAlpha: 0,
          duration,
          ease: "expo.inOut",
          onComplete: () => {
            current.remove();
            pool.push(current);
          }
        });
      }

      gsap.to(incoming, {
        yPercent: 0,
        autoAlpha: 1,
        duration,
        delay: 0.1,
        ease: "expo.inOut"
      });
    }

    setup();

    // ScrollTrigger to play/pause logo cycle when section enters/leaves screen
    if (typeof ScrollTrigger !== 'undefined') {
      ScrollTrigger.create({
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        onEnter:     () => tl && tl.play(),
        onLeave:     () => tl && tl.pause(),
        onEnterBack: () => tl && tl.play(),
        onLeaveBack: () => tl && tl.pause()
      });
    }

    document.addEventListener('visibilitychange', () => {
      if (tl) {
        document.hidden ? tl.pause() : tl.play();
      }
    });

    // Re-setup on resize to adapt column counts
    window.addEventListener("resize", () => {
      const newVisibleCount = items.filter(isVisible).length;
      if (newVisibleCount !== visibleCount) {
        setup();
      }
    });
  });
}

// MODAL WAITLIST POPUP SYSTEM
function initModalSystem() {
  document.querySelectorAll('.modal_dialog').forEach(modal => {
    const triggerId = modal.getAttribute('data-modal-target');
    const closeElements = modal.querySelectorAll('[data-modal-close], .modal_backdrop');

    // Trigger buttons
    document.querySelectorAll(`[data-modal-trigger="${triggerId}"]`).forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modal);
      });
    });

    // Close actions
    closeElements.forEach(el => {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        closeModal(modal);
      });
    });

    // ESC key support
    modal.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeModal(modal);
    });

    // Handle form submit state
    const form = modal.querySelector('form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const successMessage = modal.querySelector('.success-message');
        if (successMessage) {
          form.style.display = "none";
          successMessage.style.display = "flex";
        }
      });
    }
  });
}

function openModal(modal) {
  modal.showModal();
  const inner = modal.querySelector('.modal_inner');
  const backdrop = modal.querySelector('.modal_backdrop');
  const successMessage = modal.querySelector('.success-message');
  const form = modal.querySelector('form');

  if (form) form.style.display = "flex";
  if (successMessage) successMessage.style.display = "none";

  gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3, ease: "power1.out" });
  gsap.fromTo(inner, { opacity: 0, y: "4rem" }, { opacity: 1, y: "0rem", duration: 0.4, ease: "power2.out" });

  if (window.lenis) window.lenis.stop();
  else document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  const inner = modal.querySelector('.modal_inner');
  const backdrop = modal.querySelector('.modal_backdrop');

  gsap.to(backdrop, { opacity: 0, duration: 0.3, ease: "power1.out" });
  gsap.to(inner, {
    opacity: 0,
    y: "4rem",
    duration: 0.3,
    ease: "power1.out",
    onComplete: () => {
      modal.close();
      if (window.lenis) window.lenis.start();
      else document.body.style.overflow = "";
    }
  });
}

// DYNAMIC FOOTER YEAR
function initFooterYear() {
  document.querySelectorAll("[data-dynamic-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

// CLOSE REGION ANNOUNCEMENT BANNER
function initBannerClose() {
  document.querySelectorAll(".nav_banner_close_wrap").forEach(btn => {
    btn.addEventListener("click", () => {
      const banner = btn.closest(".nav_banner_wrap");
      if (banner) {
        gsap.to(banner, {
          height: 0,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          onComplete: () => {
            banner.style.display = "none";
          }
        });
        
        // Slide fixed navigation header to the top
        document.querySelectorAll(".nav_component").forEach(nav => {
          gsap.to(nav, {
            top: "1.75rem",
            duration: 0.4,
            ease: "power2.out"
          });
        });
      }
    });
  });
}
