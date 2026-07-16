document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Curated Projects Dataset (36 items) with balanced sizes (12 tall, 12 medium, 12 short)
  const projects = [
    {
      title: "Production Campaign 1",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG-20201129-WA0000.jpg",
      sizeClass: "tall"
    },
    {
      title: "Cinema Equipment Rental 2",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_0153.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Audio Session 3",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_0178.jpg",
      sizeClass: "short"
    },
    {
      title: "Corporate Branding Showcase 4",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_0208.jpg",
      sizeClass: "tall"
    },
    {
      title: "Production Campaign 5",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_0211.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinema Equipment Rental 6",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_0212.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Audio Session 7",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_0531.jpg",
      sizeClass: "tall"
    },
    {
      title: "Corporate Branding Showcase 8",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_0535.jpg",
      sizeClass: "medium"
    },
    {
      title: "Production Campaign 9",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_0797.jpg",
      sizeClass: "short"
    },
    {
      title: "Cinema Equipment Rental 10",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_0808.jpg",
      sizeClass: "tall"
    },
    {
      title: "Studio Audio Session 11",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_0815.JPG",
      sizeClass: "medium"
    },
    {
      title: "Corporate Branding Showcase 12",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_0822.JPG",
      sizeClass: "short"
    },
    {
      title: "Production Campaign 13",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_0824.JPG",
      sizeClass: "tall"
    },
    {
      title: "Cinema Equipment Rental 14",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_0828.JPG",
      sizeClass: "medium"
    },
    {
      title: "Studio Audio Session 15",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_1001 2.jpg",
      sizeClass: "short"
    },
    {
      title: "Corporate Branding Showcase 16",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_1004.jpg",
      sizeClass: "tall"
    },
    {
      title: "Production Campaign 17",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_4613.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinema Equipment Rental 18",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_5503.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Audio Session 19",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_5505.jpg",
      sizeClass: "tall"
    },
    {
      title: "Corporate Branding Showcase 20",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_5654.jpg",
      sizeClass: "medium"
    },
    {
      title: "Production Campaign 21",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_5863.jpg",
      sizeClass: "short"
    },
    {
      title: "Cinema Equipment Rental 22",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_5906.jpg",
      sizeClass: "tall"
    },
    {
      title: "Studio Audio Session 23",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_6219.jpg",
      sizeClass: "medium"
    },
    {
      title: "Corporate Branding Showcase 24",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_6225.jpg",
      sizeClass: "short"
    },
    {
      title: "Production Campaign 25",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_6991.JPG",
      sizeClass: "tall"
    },
    {
      title: "Cinema Equipment Rental 26",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_8506.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Audio Session 27",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_8512.jpg",
      sizeClass: "short"
    },
    {
      title: "Corporate Branding Showcase 28",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_8519.jpg",
      sizeClass: "tall"
    },
    {
      title: "Production Campaign 29",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_8540.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinema Equipment Rental 30",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_8799.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Audio Session 31",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_8806.jpg",
      sizeClass: "tall"
    },
    {
      title: "Corporate Branding Showcase 32",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_9038.jpg",
      sizeClass: "medium"
    },
    {
      title: "Production Campaign 33",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_9225.jpg",
      sizeClass: "short"
    },
    {
      title: "Cinema Equipment Rental 34",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_9226.jpg",
      sizeClass: "tall"
    },
    {
      title: "Studio Audio Session 35",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_9292.jpg",
      sizeClass: "medium"
    },
    {
      title: "Corporate Branding Showcase 36",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_9294.jpg",
      sizeClass: "short"
    },
    {
      title: "Production Campaign 37",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_9317.jpg",
      sizeClass: "tall"
    },
    {
      title: "Cinema Equipment Rental 38",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_9657.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Audio Session 39",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_9659.jpg",
      sizeClass: "short"
    },
    {
      title: "Corporate Branding Showcase 40",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_9716 (1).jpg",
      sizeClass: "tall"
    },
    {
      title: "Production Campaign 41",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_9727.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinema Equipment Rental 42",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/IMG_9809.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Audio Session 43",
      category: "Podcasts",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/IMG_9920.jpg",
      sizeClass: "tall"
    },
    {
      title: "Corporate Branding Showcase 44",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/IMG_9932.jpg",
      sizeClass: "medium"
    },
    {
      title: "Production Campaign 45",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/IMG_9973.jpg",
      sizeClass: "short"
    },
    {
      title: "Fine Art Curation Gallery",
      category: "Corporate",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/PHOTO-2025-10-10-12-10-26.jpg",
      sizeClass: "medium"
    },
    {
      title: "Product Launch Campaign",
      category: "Film & Video",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/WhatsApp Image 2026-01-08 at 11.09.56 AM.jpeg",
      sizeClass: "short"
    },
    {
      title: "Corporate Branding Showcase 48",
      category: "Corporate",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/_DSF1225 copy 2.jpg",
      sizeClass: "short"
    },
    {
      title: "Runway Collection Showcase",
      category: "Film & Video",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/_DSF5765 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Model Editorial Profile",
      category: "Corporate",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/_DSF5771 copy 2.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Lighting Prep",
      category: "Rentals",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/_DSF5894 copy.jpg",
      sizeClass: "short"
    },
    {
      title: "Behind The Scenes Crew",
      category: "Film & Video",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/_DSF5914 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Wardrobe Styling",
      category: "Corporate",
      desc: "Professional film and video production campaign showcasing cinematic creative execution.",
      img: "assets/images/work/_DSF5922 copy.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinema Equipment Rental 54",
      category: "Rentals",
      desc: "Certified high-end cinema equipment package configured for professional camera crews.",
      img: "assets/images/work/_DSF6079 copy.jpg",
      sizeClass: "short"
    },
    {
      title: "Live Fashion Show Broadcast",
      category: "Film & Video",
      desc: "High-fidelity acoustics recording, editing, and sound engineering session.",
      img: "assets/images/work/_DSF6084 copy.jpg",
      sizeClass: "short"
    },
    {
      title: "Commercial Production",
      category: "Film & Video",
      desc: "Daylight brand narrative interviews and executive corporate profiles.",
      img: "assets/images/work/akshay.jpeg",
      sizeClass: "tall"
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
