document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Curated Projects Dataset (36 items) with balanced sizes (12 tall, 12 medium, 12 short)
  const projects = [
    {
      title: "Classical Orchestra Performance",
      category: "Film & Video",
      desc: "Multi-mic acoustic sound recording and dynamic concert cinematography for classical symphony.",
      img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Grand Library Dome",
      category: "Corporate",
      desc: "Architectural visual mapping and heritage documentation capturing grand library halls.",
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Reflective Campus Life",
      category: "Corporate",
      desc: "Editorial student profile campaign capturing reflective moments and campus textures.",
      img: "https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Baseball Diamond Pitch",
      category: "Film & Video",
      desc: "High-speed action tracking and commercial sports videography at prime stadiums.",
      img: "https://images.unsplash.com/photo-1471295263379-6ca29fc8a977?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Historical Library Corridor",
      category: "Corporate",
      desc: "Cinematic corporate video showcasing academic history and stone column corridors.",
      img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Academic Graduation Portrait",
      category: "Corporate",
      desc: "Curated student graduation portraits capturing milestones and positive highlights.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Outdoor Park Gathering",
      category: "Podcasts",
      desc: "On-site podcast recording and ambient sound capture at cultural park gatherings.",
      img: "https://images.unsplash.com/photo-1496024840928-4c417adf211d?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Stadium Baseball Batter",
      category: "Film & Video",
      desc: "Action sports tracking shots capturing players in mid-swing with high-speed setups.",
      img: "https://images.unsplash.com/photo-1544045093-c71d986c4387?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Skyline Field Landscape",
      category: "Rentals",
      desc: "Drone mapping and extreme perspective equipment rentals for outdoor tracking shoots.",
      img: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Urban City Walk",
      category: "Podcasts",
      desc: "Street interview audio setups and dynamic run-and-gun city vlogging production.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Graduate Senior Celebration",
      category: "Corporate",
      desc: "Social media visual campaigns documenting graduation day and positive campus energy.",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Pathways Walkway Hike",
      category: "Podcasts",
      desc: "Field sound recording and travel vlog production tracking hikers in remote settings.",
      img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80",
      sizeClass: "tall"
    },
    {
      title: "Amazon Commercial Campaign",
      category: "Film & Video",
      desc: "Full-scale commercial video production, casting, and lighting rigs for Amazon Festive launch.",
      img: "assets/images/line_production.png",
      sizeClass: "tall"
    },
    {
      title: "Groww Podcasting Series",
      category: "Podcasts",
      desc: "Acoustic pod-room design and multi-camera Sony FX6 setup for financial streams.",
      img: "assets/images/podcast_studio.png",
      sizeClass: "short"
    },
    {
      title: "Flipkart Festive Launch",
      category: "Film & Video",
      desc: "Cinematic commercial capturing festive energy with ARRI Alexa and Cooke prime lenses.",
      img: "assets/images/cinema_lenses.png",
      sizeClass: "tall"
    },
    {
      title: "Corporate Brand Narrative",
      category: "Corporate",
      desc: "Daylight executive interviews and documentary capturing milestones for major brands.",
      img: "assets/images/IMG_0153_converted.jpg",
      sizeClass: "tall"
    },
    {
      title: "NVL Documentary Shoot",
      category: "Film & Video",
      desc: "Cinematography and field audio recording across local northern India heritage locations.",
      img: "assets/images/cinema_camera.png",
      sizeClass: "short"
    },
    {
      title: "Cinema Gear Rentals",
      category: "Rentals",
      desc: "Certified cinema packages including ARRI Venice, RED Raptor, and spotlight kits.",
      img: "assets/images/studio_lighting.png",
      sizeClass: "short"
    },
    {
      title: "Lakmé Fashion Week Runway",
      category: "Film & Video",
      desc: "High-fashion runway coverage and designer collections showcase behind-the-scenes.",
      img: "GM images/home/latest work/lakmeFashionweek.jpeg",
      sizeClass: "tall"
    },
    {
      title: "NIFT Fashion Showcase",
      category: "Film & Video",
      desc: "Capturing creative runway designs, garments, and events for NIFT Delhi.",
      img: "GM images/home/latest work/nift.jpg",
      sizeClass: "tall"
    },
    {
      title: "Code Brown Campaign",
      category: "Film & Video",
      desc: "Commercial branding and visual advertising shoot delivered with high production value.",
      img: "GM images/home/latest work/codebrown.jpg",
      sizeClass: "tall"
    },
    {
      title: "Project DaVinci Documentary",
      category: "Corporate",
      desc: "Storytelling documentary capturing designer profiles and high-end craftsmanship.",
      img: "GM images/home/latest work/project_davinci.jpg",
      sizeClass: "medium"
    },
    {
      title: "BMW Vehicle Campaign",
      category: "Film & Video",
      desc: "High-speed tracking vehicle commercial utilizing specialized camera gimbal rigs.",
      img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
      sizeClass: "medium"
    },
    {
      title: "Nike Training Special",
      category: "Film & Video",
      desc: "High-contrast action tracking and dynamic gym lighting setups for Nike campaign.",
      img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80",
      sizeClass: "medium"
    },
    {
      title: "Telescope Astrophotography",
      category: "Film & Video",
      desc: "Astrophotography and starry-sky time-lapse production at high altitudes.",
      img: "GM images/home/latest work/telescope.jpg",
      sizeClass: "medium"
    },
    {
      title: "Project One Commercial",
      category: "Film & Video",
      desc: "Premium brand commercial featuring action tracking and dynamic post-production.",
      img: "GM images/home/latest work/project_1.jpg",
      sizeClass: "medium"
    },
    {
      title: "Sony Venice 2 Package",
      category: "Rentals",
      desc: "Premium Venice 2 camera bodies and anamorphic glass rentals with assistants.",
      img: "assets/images/sony_venice_2.png",
      sizeClass: "medium"
    },
    {
      title: "ARRI Skypanel Light Kit",
      category: "Rentals",
      desc: "Certified rental lights package featuring ARRI S60C softboxes and spotlight units.",
      img: "assets/images/arri_skypanel_s60c.png",
      sizeClass: "medium"
    },
    {
      title: "Red Raptor Cinema Rig",
      category: "Rentals",
      desc: "8K Red Raptor cinema systems, monitors, focus controls, and transmitters.",
      img: "assets/images/red_v_raptor.png",
      sizeClass: "medium"
    },
    {
      title: "Sound Devices Field Kit",
      category: "Rentals",
      desc: "Professional sound recorders and boom mic setups for outdoor location recordings.",
      img: "assets/images/sound_devices_833.png",
      sizeClass: "medium"
    },
    {
      title: "DJI Ronin 2 Gimbal",
      category: "Rentals",
      desc: "Heavy-duty camera gimbals, ready-rig kits, and vehicular mount setups.",
      img: "assets/images/dji_ronin_2.png",
      sizeClass: "medium"
    },
    {
      title: "Zeiss Supreme Prime Lenses",
      category: "Rentals",
      desc: "Vintage Zeiss prime lenses rental packages featuring fast apertures.",
      img: "assets/images/zeiss_supreme_primes.png",
      sizeClass: "medium"
    },
    {
      title: "Adidas Running Commercial",
      category: "Film & Video",
      desc: "Dynamic ATV tracking and action cinematography for running shoes launch.",
      img: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Mercedes Benz Heritage",
      category: "Corporate",
      desc: "Corporate milestones visual narrative filmed across European workshops.",
      img: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Airbnb Escape Promo",
      category: "Corporate",
      desc: "Daylight interior property filming and drone capture for Airbnb resorts.",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
      sizeClass: "short"
    },
    {
      title: "Google Workspace Promo",
      category: "Corporate",
      desc: "Creative brand marketing and digital lifestyle promo for Google Workspace.",
      img: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80",
      sizeClass: "medium"
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
