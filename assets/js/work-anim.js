document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Curated Projects Dataset (36 items) with balanced sizes (12 tall, 12 medium, 12 short)
  const projects = [
    {
      title: "Commercial Production",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/akshay.jpeg",
      sizeClass: "tall"
    },
    {
      title: "Corporate Brand Story",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG-20201129-WA0000.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinematic Portrait Shoot",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_0535.jpg",
      sizeClass: "short"
    },
    {
      title: "On-Set Live Directing",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_0797.jpg",
      sizeClass: "tall"
    },
    {
      title: "Camera Rig Operation",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_0808.jpg",
      sizeClass: "medium"
    },
    {
      title: "Sony Cine Gear Setup",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_0824.JPG",
      sizeClass: "short"
    },
    {
      title: "ARRI Master Prime Prep",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_0828.JPG",
      sizeClass: "tall"
    },
    {
      title: "Vocal Podcast Recording",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_1004.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Production Session",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_4613.jpg",
      sizeClass: "short"
    },
    {
      title: "Product Commercial Shoot",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_5503.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Set Lighting",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_5654.jpg",
      sizeClass: "medium"
    },
    {
      title: "Fashion Editorial Profile",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_5863.jpg",
      sizeClass: "short"
    },
    {
      title: "Documentary Video Shoot",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_5906.jpg",
      sizeClass: "tall"
    },
    {
      title: "Sound Mixer Field Recorder",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_6219.jpg",
      sizeClass: "medium"
    },
    {
      title: "Gimbal Stabilizer Rig",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_6991.JPG",
      sizeClass: "short"
    },
    {
      title: "Interview Audio Setup",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_8540.jpg",
      sizeClass: "tall"
    },
    {
      title: "Runway Fashion Spotlight",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_8799.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Podcasting Series",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_8806.jpg",
      sizeClass: "short"
    },
    {
      title: "Camera Operator Behind Scenes",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9225.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Team Collaboration",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9226.jpg",
      sizeClass: "medium"
    },
    {
      title: "Commercial Video Production",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9292.jpg",
      sizeClass: "short"
    },
    {
      title: "Acoustic Pod-Room Prep",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9317.jpg",
      sizeClass: "tall"
    },
    {
      title: "Brand Launch Editorial",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9659.jpg",
      sizeClass: "medium"
    },
    {
      title: "Corporate Milestone Record",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9727.jpg",
      sizeClass: "short"
    },
    {
      title: "Fashion Campaign Shoot",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9809.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Direction Portrait",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9920.jpg",
      sizeClass: "medium"
    },
    {
      title: "On-Location Sound Curation",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9932.jpg",
      sizeClass: "short"
    },
    {
      title: "Multi-Mic Podcast Recording",
      category: "Podcasts",
      desc: "Professional podcasts production showcasing premium execution and creative excellence.",
      img: "assets/images/work/IMG_9973.jpg",
      sizeClass: "tall"
    },
    {
      title: "Fine Art Curation Gallery",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/PHOTO-2025-10-10-12-10-26.jpg",
      sizeClass: "medium"
    },
    {
      title: "Product Launch Campaign",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/WhatsApp Image 2026-01-08 at 11.09.56 AM.jpeg",
      sizeClass: "short"
    },
    {
      title: "Runway Collection Showcase",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF5765 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Model Editorial Profile",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF5771 copy 2.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Lighting Prep",
      category: "Rentals",
      desc: "Professional rentals production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF5894 copy.jpg",
      sizeClass: "short"
    },
    {
      title: "Behind The Scenes Crew",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF5914 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Wardrobe Styling",
      category: "Corporate",
      desc: "Professional corporate production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF5922 copy.jpg",
      sizeClass: "medium"
    },
    {
      title: "Live Fashion Show Broadcast",
      category: "Film & Video",
      desc: "Professional film & video production showcasing premium execution and creative excellence.",
      img: "assets/images/work/_DSF6084 copy.jpg",
      sizeClass: "short"
    }
  ];

  // State
  let currentFilter = "all";
  let filteredProjects = [...projects];
  let scrollTriggers = [];

  // Elements
  const grid = document.getElementById("gallery-grid");
  const filterButtons = document.querySelectorAll(".g_filter_wrap");
  const countElement = document.querySelector('[fs-list-element="results-count"]');
  const emptyState = document.querySelector(".empty-state");

  // Modal elements
  const modalOverlay = document.getElementById("project-modal");
  const modalTitle = document.querySelector(".project_modal_title");
  const modalCat = document.querySelector(".project_modal_cat");
  const modalDesc = document.querySelector(".project_modal_desc");
  const modalImg = document.querySelector(".project_modal_img");
  const modalClose = document.querySelector(".project_modal_close");

  // Create a single card element
  function createCardHTML(project) {
    const card = document.createElement("div");
    card.className = `gallery_card is-${project.sizeClass}`;
    
    card.innerHTML = `
      <img src="${project.img}" alt="${project.title}" class="gallery_img" loading="lazy" />
      <div class="gallery_overlay">
        <span class="gallery_category">${project.category}</span>
        <h4 class="gallery_title">${project.title}</h4>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openProjectModal(project);
    });
    
    return card;
  }

  // Align the bottom of all columns perfectly on a single line
  function alignColumnBottoms(columns, colCount) {
    if (colCount < 2) return;

    // Reset all last card custom heights first
    columns.forEach(col => {
      const lastCard = col.querySelector(".gallery_card:last-child");
      if (lastCard) {
        lastCard.style.height = "";
      }
    });

    // Calculate sum height of cards in each column based on size classes
    const heights = columns.map(col => {
      let h = 0;
      col.querySelectorAll(".gallery_card").forEach(card => {
        if (card.classList.contains("is-tall")) h += 480;
        else if (card.classList.contains("is-medium")) h += 380;
        else if (card.classList.contains("is-short")) h += 280;
        h += 36; // gap height (2.25rem = 36px)
      });
      return h;
    });

    const maxHeight = Math.max(...heights);

    // Stretch the last card in shorter columns to align the bottoms
    columns.forEach((col, idx) => {
      const diff = maxHeight - heights[idx];
      if (diff > 5) {
        const lastCard = col.querySelector(".gallery_card:last-child");
        if (lastCard) {
          let baseHeight = 380; // default medium
          if (lastCard.classList.contains("is-tall")) baseHeight = 480;
          else if (lastCard.classList.contains("is-short")) baseHeight = 280;

          lastCard.style.height = `${baseHeight + diff}px`;
        }
      }
    });
  }

  // Render projects distributed vertically in columns and align bottoms
  function renderGalleryGrid(items) {
    grid.innerHTML = "";
    
    // Clear old ScrollTriggers to prevent memory leaks and lag
    scrollTriggers.forEach(trigger => trigger.kill());
    scrollTriggers = [];

    if (items.length === 0) {
      emptyState.style.display = "block";
      grid.style.display = "none";
      return;
    } else {
      emptyState.style.display = "grid";
      grid.style.display = "grid";
    }

    // Determine number of columns based on screen width
    let colCount = 4;
    if (window.innerWidth <= 600) {
      colCount = 1;
    } else if (window.innerWidth <= 1024) {
      colCount = 2;
    }

    // Create column divs
    const columns = [];
    for (let i = 0; i < colCount; i++) {
      const colEl = document.createElement("div");
      colEl.className = "gallery_column";
      grid.appendChild(colEl);
      columns.push(colEl);
    }

    // Track visual heights of each column to balance them greedily
    const colHeights = new Array(colCount).fill(0);

    // Distribute projects greedily into the shortest column
    items.forEach((project) => {
      // Find the index of the shortest column
      let shortestColIdx = 0;
      let minHeight = colHeights[0];
      for (let i = 1; i < colCount; i++) {
        if (colHeights[i] < minHeight) {
          minHeight = colHeights[i];
          shortestColIdx = i;
        }
      }
      
      const cardEl = createCardHTML(project);
      columns[shortestColIdx].appendChild(cardEl);
      
      // Update column height track using size weights
      let weight = 380; // default medium
      if (project.sizeClass === "tall") weight = 480;
      else if (project.sizeClass === "short") weight = 280;
      
      colHeights[shortestColIdx] += weight + 36;
    });

    // Make column bottom edges align perfectly in a single line
    alignColumnBottoms(columns, colCount);

    // Initialize GSAP Parallax scrolling on columns
    setTimeout(() => {
      initColumnParallax(colCount);
    }, 100);
  }

  // Setup GSAP Column Parallax: animates from offset to 0 (perfect alignment at bottom)
  function initColumnParallax(colCount) {
    if (prefersReducedMotion || colCount < 4) {
      // Disable parallax on mobile/tablet
      return;
    }

    const cols = document.querySelectorAll(".gallery_column");
    if (cols.length < 4) return;

    // Define parallax speeds/offsets for each of the 4 columns
    const speeds = [80, 30, -40, -10];

    cols.forEach((col, idx) => {
      const startOffset = speeds[idx % 4];
      
      const trigger = gsap.fromTo(col, 
        { y: startOffset }, // starts offset to create wavy look
        {
          y: 0, // ends perfectly aligned at the bottom of the page!
          ease: "none",
          scrollTrigger: {
            trigger: grid,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true,
            invalidateOnRefresh: true
          }
        }
      );

      // Keep track of trigger
      if (trigger.scrollTrigger) {
        scrollTriggers.push(trigger.scrollTrigger);
      }
    });
  }

  // Modal open helper
  function openProjectModal(item) {
    if (modalTitle) modalTitle.textContent = item.title;
    if (modalCat) modalCat.textContent = item.category;
    if (modalDesc) modalDesc.textContent = item.desc;
    if (modalImg) {
      modalImg.setAttribute("src", item.img);
      modalImg.setAttribute("alt", item.title);
    }

    modalOverlay.classList.add("is-active");
    document.body.style.overflow = "hidden"; // Freeze scroll

    if (window.lenis) {
      window.lenis.stop();
    }
  }

  // Close modal helper
  const closeModal = () => {
    modalOverlay.classList.remove("is-active");
    document.body.style.overflow = ""; // Resume scroll

    if (window.lenis) {
      window.lenis.start();
    }
  };

  if (modalClose) modalClose.addEventListener("click", closeModal);
  
  if (modalOverlay) {
    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modalOverlay && modalOverlay.classList.contains("is-active")) {
      closeModal();
    }
  });

  // Category filtering
  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      filterButtons.forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      currentFilter = btn.getAttribute("data-service");
      
      // Filter list
      if (currentFilter === "all") {
        filteredProjects = [...projects];
      } else {
        filteredProjects = projects.filter(p => p.category === currentFilter);
      }

      // Update count
      if (countElement) {
        countElement.textContent = filteredProjects.length;
      }

      // Fade out grid, swap items, fade in
      if (!prefersReducedMotion) {
        gsap.to(grid, {
          opacity: 0,
          scale: 0.98,
          duration: 0.25,
          onComplete: () => {
            renderGalleryGrid(filteredProjects);
            gsap.to(grid, { opacity: 1, scale: 1, duration: 0.4 });
          }
        });
      } else {
        renderGalleryGrid(filteredProjects);
      }
    });
  });

  // Re-adjust column distribution on window resize
  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      renderGalleryGrid(filteredProjects);
    }, 150);
  });

  // Initial load
  if (countElement) {
    countElement.textContent = filteredProjects.length;
  }
  renderGalleryGrid(filteredProjects);
});
