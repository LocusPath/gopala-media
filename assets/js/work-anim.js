document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Cache elements
  const filterButtons = document.querySelectorAll(".g_filter_wrap");
  const gridItems = document.querySelectorAll(".work_cms_item");
  const countElement = document.querySelector('[fs-list-element="results-count"]');
  const emptyState = document.querySelector(".empty-state");

  // Modal elements
  const modalOverlay = document.getElementById("project-modal");
  const modalContent = document.querySelector(".project_modal_content");
  const modalTitle = document.querySelector(".project_modal_title");
  const modalCat = document.querySelector(".project_modal_cat");
  const modalDesc = document.querySelector(".project_modal_desc");
  const modalImg = document.querySelector(".project_modal_img");
  const modalClose = document.querySelector(".project_modal_close");

  /* ==========================================================================
     1. Entrance Scroll Animations
     ========================================================================== */
  if (prefersReducedMotion) {
    gsap.set(gridItems, { opacity: 1, y: 0 });
  } else {
    gsap.fromTo(gridItems,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".work_cms_list",
          start: "top 80%"
        }
      }
    );
  }

  /* ==========================================================================
     2. Interactive Filtering Logic (GSAP Stagger)
     ========================================================================== */
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active states
      filterButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filterValue = btn.getAttribute("data-service");
      
      // Separate matching and non-matching elements
      const toShow = [];
      const toHide = [];

      gridItems.forEach(item => {
        const service = item.getAttribute("data-service");
        if (filterValue === "all" || service === filterValue) {
          toShow.push(item);
        } else {
          toHide.push(item);
        }
      });

      // Update counter
      if (countElement) {
        countElement.textContent = toShow.length;
      }

      if (prefersReducedMotion) {
        toHide.forEach(item => item.style.display = "none");
        toShow.forEach(item => item.style.display = "block");
        emptyState.style.display = toShow.length === 0 ? "block" : "none";
      } else {
        // Animate out unselected cards
        const hideTimeline = gsap.timeline();
        if (toHide.length > 0) {
          hideTimeline.to(toHide, {
            opacity: 0,
            scale: 0.7,
            duration: 0.4,
            stagger: 0.04,
            ease: "power2.in",
            onComplete: () => {
              toHide.forEach(item => item.style.display = "none");
            }
          });
        }

        // Animate in selected cards
        hideTimeline.add(() => {
          toShow.forEach(item => {
            item.style.display = "block";
            gsap.set(item, { opacity: 0, scale: 0.7 });
          });

          // Empty state handling
          if (toShow.length === 0) {
            gsap.fromTo(emptyState, 
              { opacity: 0, display: "block" }, 
              { opacity: 1, duration: 0.4 }
            );
          } else {
            emptyState.style.display = "none";
            gsap.to(toShow, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.06,
              ease: "power2.out"
            });
          }
        });
      }
    });
  });

  /* ==========================================================================
     3. Project Detail Modal Expansion
     ========================================================================== */
  document.querySelectorAll(".work_card_back_btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // prevent card reflipping
      
      const title = btn.getAttribute("data-title");
      const category = btn.getAttribute("data-category");
      const desc = btn.getAttribute("data-desc");
      const img = btn.getAttribute("data-img");

      // Inject values
      if (modalTitle) modalTitle.textContent = title;
      if (modalCat) modalCat.textContent = category;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalImg) {
        modalImg.setAttribute("src", img);
        modalImg.setAttribute("alt", title);
      }

      // Open Modal
      modalOverlay.classList.add("is-active");
      document.body.style.overflow = "hidden"; // Freeze scroll

      if (window.lenis) {
        window.lenis.stop();
      }
    });
  });

  // Close modal helper
  const closeModal = () => {
    modalOverlay.classList.remove("is-active");
    document.body.style.overflow = ""; // Resume scroll

    if (window.lenis) {
      window.lenis.start();
    }
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  modalOverlay.addEventListener("click", (e) => {
    // If clicked on backdrop overlay (not content box)
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Escape key close listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay.classList.contains("is-active")) {
      closeModal();
    }
  });
});
