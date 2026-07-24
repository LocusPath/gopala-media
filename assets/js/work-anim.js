document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Curated Projects Dataset (36 items) with balanced sizes (12 tall, 12 medium, 12 short)
  const projects = [
    {
      title: "Suspenseful Dali Mask Monologue",
      category: "Film & Video",
      desc: "A dramatic narrative scene featuring a character in a Dali mask sitting in a dark studio. High-contrast chiaroscuro lighting isolates the subject, creating a suspenseful and cinematic atmosphere.",
      img: "assets/images/work/IMG_1530.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinematic Crew Operation",
      category: "Film & Video",
      desc: "A moody, low-light studio shot of a production crew operating a handheld gimbal rig and fine-tuning lighting modifiers. The team coordinates closely to capture seamless motion sequences.",
      img: "assets/images/work/IMG_2358.jpg",
      sizeClass: "tall"
    },
    {
      title: "Netflix Campaign Activation",
      category: "Corporate",
      desc: "Immersive experiential marketing capture using advanced panoramic action cameras for Netflix India's promotional rollout.",
      img: "assets/images/work/IMG_5930.jpg",
      sizeClass: "medium"
    },
    {
      title: "Jib-Mounted Cine Package",
      category: "Rentals",
      desc: "A heavy-duty camera crane setup with a customized cinema rig, configured for dynamic low-angle tracking on location.",
      img: "assets/images/work/IMG_8204.jpg",
      sizeClass: "short"
    },
    {
      title: "Cinematic Location Shoot",
      category: "Film & Video",
      desc: "Behind-the-scenes production of a cinematic commercial project featuring high-end camera rigs and lighting setups.",
      img: "assets/images/work/A0619334-5777-4CD4-9E68-3499139B4F75.JPG",
      sizeClass: "tall"
    },
    {
      title: "Commercial Film Rigging",
      category: "Film & Video",
      desc: "On-set production capture showcasing camera operators and director monitoring live action sequences.",
      img: "assets/images/work/IMG_1426.jpg",
      sizeClass: "medium"
    },
    {
      title: "Editorial Campaign Production",
      category: "Corporate",
      desc: "High-end studio lookbook session featuring professional lighting, set decoration, and creative direction.",
      img: "assets/images/work/IMG_6846.jpg",
      sizeClass: "short"
    },
    {
      title: "Brand Storytelling Session",
      category: "Film & Video",
      desc: "Dynamic live action filming for a major commercial campaign with full production lighting and crew.",
      img: "assets/images/work/IMG_6849.jpg",
      sizeClass: "tall"
    },
    {
      title: "Cinematic Location Framing",
      category: "Film & Video",
      desc: "Capturing atmospheric scenes on location with specialized camera stabilization and prime lenses.",
      img: "assets/images/work/IMG_9123.jpg",
      sizeClass: "medium"
    },
    {
      title: "Studio Fashion Showcase",
      category: "Film & Video",
      desc: "A stylized fashion showcase featuring dramatic backdrops, custom studio lighting, and high-contrast color grading.",
      img: "assets/images/work/IMG_9429.jpg",
      sizeClass: "short"
    },
    {
      title: "Behind-the-Lens Commercial",
      category: "Film & Video",
      desc: "Professional crew in action operating cinema camera setups for an upscale brand video shoot.",
      img: "assets/images/work/IMG_9578.jpg",
      sizeClass: "tall"
    },
    {
      title: "Creative Direction Session",
      category: "Corporate",
      desc: "Collaborative scene work on set featuring precision camera movements and real-time director monitoring.",
      img: "assets/images/work/IMG_9605.jpg",
      sizeClass: "medium"
    },
    {
      title: "High-Impact Commercial Shoot",
      category: "Film & Video",
      desc: "On-location commercial filming capturing crisp visuals, organic textures, and dynamic camera angles.",
      img: "assets/images/work/IMG_9750.jpg",
      sizeClass: "short"
    },
    {
      title: "Signature Production Portfolio",
      category: "Rentals",
      desc: "A behind-the-scenes highlight of Gopala Media's production services and specialized cinema gear in action.",
      img: "assets/images/work/IMG_9894.JPG",
      sizeClass: "tall"
    },
    {
      title: "Compound Skincare Campaign",
      category: "Corporate",
      desc: "A high-contrast product advertisement showcasing Compound's premium skincare line against a striking monochromatic red background. Precise studio lighting emphasizes the clean contours of the bottles and minimalist packaging.",
      img: "assets/images/work/Compound.png",
      sizeClass: "tall"
    },
    {
      title: "Temple Heritage Documentary",
      category: "Film & Video",
      desc: "On-location filming at a historic South Indian temple, featuring a professional cinematographer capturing dynamic shoulder-mounted tracking shots. The bright daylight accentuates the intricate, colorful architecture of the towering gopuram.",
      img: "assets/images/work/IMG-20201129-WA0000.jpg",
      sizeClass: "medium"
    },
    {
      title: "Cinematic Crane Rigging",
      category: "Rentals",
      desc: "A professional cinema camera mounted on a heavy-duty jib arm for a low-light indoor sequence. The setup is designed for capturing smooth, sweeping crane movements to elevate narrative storytelling.",
      img: "assets/images/work/IMG_0051.jpg",
      sizeClass: "short"
    },
    {
      title: "Classic Velvet Portrait",
      category: "Film & Video",
      desc: "An elegant fashion portrait featuring a model in a black velvet gown posing against a deep crimson backdrop. High-contrast key lighting highlights the subject's expression and creates a classic, theatrical mood.",
      img: "assets/images/work/IMG_0153.jpg",
      sizeClass: "tall"
    },
    {
      title: "Satin Silhouette Spotlight",
      category: "Film & Video",
      desc: "A striking studio fashion shoot utilizing a custom triangular spotlight to frame a model in a deep blue satin gown. The geometric shadow-play adds a modern, high-fashion aesthetic to the editorial composition.",
      img: "assets/images/work/IMG_0178.jpg",
      sizeClass: "medium"
    },
    {
      title: "Crimson Elegance Studio Session",
      category: "Film & Video",
      desc: "A monochromatic studio portrait of a model in a red gown seamlessly blending into matching red drapes. Subtle directional light shapes the silhouette and highlights the luxurious drape of the fabric.",
      img: "assets/images/work/IMG_0212.jpg",
      sizeClass: "tall"
    },
    {
      title: "Cozy Cafe Scene Production",
      category: "Film & Video",
      desc: "Behind-the-scenes of a narrative cafe sequence, framed through the monitor of a high-end cinema camera. The warm ambient lighting and detailed set design establish an intimate, conversational atmosphere.",
      img: "assets/images/work/IMG_0531.jpg",
      sizeClass: "medium"
    },
    {
      title: "Multicamera Studio Broadcast",
      category: "Film & Video",
      desc: "A comprehensive look at a multi-camera commercial shoot inside a stylized cafe set. The configuration utilizes multiple synced cameras, overhead boom microphones, and softbox diffusers for broadcast-ready quality.",
      img: "assets/images/work/IMG_0535.jpg",
      sizeClass: "short"
    },
    {
      title: "Dreamscape Studio Set Design",
      category: "Rentals",
      desc: "A behind-the-scenes view of Locuspath's premium studio space configured for a surreal cloud-themed shoot. The spacious studio accommodates backdrops, extensive lighting arrays, and monitoring stations.",
      img: "assets/images/work/IMG_0797.jpg",
      sizeClass: "tall"
    },
    {
      title: "Cloud Nine Editorial Campaign",
      category: "Film & Video",
      desc: "A fashion editorial session capturing a model against a vivid cloud-and-sky backdrop. The handheld camera setup and rustic prop ladder combine to create a whimsical, dreamlike narrative.",
      img: "assets/images/work/IMG_0808.jpg",
      sizeClass: "medium"
    },
    {
      title: "Ethereal Starfield Projection",
      category: "Film & Video",
      desc: "A high-concept studio shoot featuring a model in a lace corset dress illuminated by a starry nebula projection. The overlay of light patterns creates a cosmic, ethereal aesthetic on the subject.",
      img: "assets/images/work/IMG_0815.JPG",
      sizeClass: "short"
    },
    {
      title: "Cosmic Projector Session",
      category: "Film & Video",
      desc: "Behind-the-scenes of a creative fashion campaign using digital projection to map galaxy textures onto models. The crew works with dynamic movement and angles to capture the interaction between light and fabric.",
      img: "assets/images/work/IMG_0824.JPG",
      sizeClass: "medium"
    },
    {
      title: "Savarkar Movie Press Conference",
      category: "Corporate",
      desc: "A talk-show stage set for a prominent movie promotion event. The production features multi-camera coverage, custom branding backdrops, and balanced studio lighting for media distribution.",
      img: "assets/images/work/IMG_1291.jpg",
      sizeClass: "tall"
    },
    {
      title: "Residential Drama Set",
      category: "Film & Video",
      desc: "On-location filming inside an upscale, classic living room set. The production team coordinates multiple cinema camera rigs and professional monitors to capture complex indoor blocking and dialogue.",
      img: "assets/images/work/IMG_1951.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Talk Show Broadcast",
      category: "Podcasts",
      desc: "A multi-camera talk show and podcast recording in a bright, modern lounge setting. The production is equipped with professional lavaliere microphones and cinema cameras for high-fidelity audio and video.",
      img: "assets/images/work/IMG_3001.jpg",
      sizeClass: "medium"
    },
    {
      title: "ARRI Alexa Cinema Package",
      category: "Rentals",
      desc: "A detailed close-up of an industry-standard ARRI Alexa cinema camera rigged with Tilta accessories on a warm-lit bar set. This configuration is optimized for high-end commercial and narrative film productions.",
      img: "assets/images/work/IMG_4613.jpg",
      sizeClass: "short"
    },
    {
      title: "High-Fashion Editorial Session",
      category: "Film & Video",
      desc: "A professional behind-the-scenes look at an editorial fashion shoot, highlighting advanced overhead softbox lighting and intricate styling.",
      img: "assets/images/work/IMG_5505.jpg",
      sizeClass: "medium"
    },
    {
      title: "Minimalist Summer Lookbook",
      category: "Film & Video",
      desc: "Capturing clean, contemporary styling on a minimalist white studio set with soft diffuse lighting and modern accent pieces.",
      img: "assets/images/work/IMG_5654.jpg",
      sizeClass: "short"
    },
    {
      title: "Indigo Earth Portraiture",
      category: "Film & Video",
      desc: "An evocative outdoor campaign juxtaposing vibrant indigo textiles against the organic texture of a towering clay wall.",
      img: "assets/images/work/IMG_5906.jpg",
      sizeClass: "tall"
    },
    {
      title: "Premium Cyclorama Lighting Rig",
      category: "Rentals",
      desc: "A fully configured professional studio space featuring high-output Aputure lighting and a seamless color-graded backdrop.",
      img: "assets/images/work/IMG_6082.jpg",
      sizeClass: "short"
    },
    {
      title: "Sony Cinema Line Masterclass",
      category: "Corporate",
      desc: "An interactive brand workshop presenting the capabilities of Sony's cinema ecosystem inside a sound-dampened studio facility.",
      img: "assets/images/work/IMG_6991.JPG",
      sizeClass: "medium"
    },
    {
      title: "Fortress Stage Multi-Cam Recording",
      category: "Film & Video",
      desc: "Behind-the-scenes of a live multi-camera concert production, set against the historic stone architecture of a night-lit fort.",
      img: "assets/images/work/IMG_8506.jpg",
      sizeClass: "tall"
    },
    {
      title: "Mehrangarh Sitar Session",
      category: "Film & Video",
      desc: "A cinematic capture of a classical sitar performance, framed against the majestic glowing facade of Jodhpur's heritage fort.",
      img: "assets/images/work/IMG_8512.jpg",
      sizeClass: "medium"
    },
    {
      title: "Nocturnal Folk Echoes",
      category: "Film & Video",
      desc: "Documenting traditional Rajasthani musicians in an intimate night performance with heritage monuments silhouetted in the distance.",
      img: "assets/images/work/IMG_8519.jpg",
      sizeClass: "short"
    },
    {
      title: "Telephoto Cine Lens Configuration",
      category: "Rentals",
      desc: "A professional low-light cine package paired with a premium G-Master telephoto lens for capturing distant details at night.",
      img: "assets/images/work/IMG_8540.jpg",
      sizeClass: "tall"
    },
    {
      title: "Studio Creator Portrait",
      category: "Corporate",
      desc: "A minimalist studio portrait session utilizing high-key lighting to capture expressive, clean personal branding headshots.",
      img: "assets/images/work/IMG_8799.jpg",
      sizeClass: "medium"
    },
    {
      title: "Origami Concept Editorial",
      category: "Film & Video",
      desc: "A high-fashion studio shoot incorporating oversized origami props, monitored live with a dual-screen camera configuration.",
      img: "assets/images/work/IMG_8806.jpg",
      sizeClass: "short"
    },
    {
      title: "Streetwear Lookbook Production",
      category: "Film & Video",
      desc: "Showcasing modern streetwear fashion against a seamless studio paper backdrop with natural palm-frond shadows.",
      img: "assets/images/work/IMG_9038.jpg",
      sizeClass: "tall"
    },
    {
      title: "Commercial Apparel Production",
      category: "Film & Video",
      desc: "A commercial lookbook shoot employing a dual softbox setup to capture vibrant, high-fidelity apparel details on a white backdrop.",
      img: "assets/images/work/IMG_9225.jpg",
      sizeClass: "medium"
    },
    {
      title: "Graphic Tee Detail Capture",
      category: "Film & Video",
      desc: "Behind-the-scenes view focusing on the fine print details of custom branded apparel during a studio fashion session.",
      img: "assets/images/work/IMG_9226.jpg",
      sizeClass: "short"
    },
    {
      title: "Narrative Set Design & Setup",
      category: "Film & Video",
      desc: "A multi-camera configuration on a custom interior set with a vibrant pink color scheme and professional key lighting.",
      img: "assets/images/work/IMG_9292.jpg",
      sizeClass: "tall"
    },
    {
      title: "Studio Narrative Performance",
      category: "Film & Video",
      desc: "Directing and capturing dramatic dialogue sequences on a stylized pink studio set utilizing multi-angle camera monitors.",
      img: "assets/images/work/IMG_9294.jpg",
      sizeClass: "medium"
    },
    {
      title: "Editorial Studio Session",
      category: "Rentals",
      desc: "A behind-the-scenes look at a fashion editorial shoot, highlighting our spacious white cyclorama wall and professional lighting setup.",
      img: "assets/images/work/IMG_9317.jpg",
      sizeClass: "short"
    },
    {
      title: "Macro Product Cinematography",
      category: "Film & Video",
      desc: "Capturing the intricate craftsmanship of a luxury timepiece using a specialized macro probe lens and precision dramatic lighting.",
      img: "assets/images/work/IMG_9425.jpg",
      sizeClass: "tall"
    },
    {
      title: "Lakme Fashion Week Runway",
      category: "Film & Video",
      desc: "High-end runway coverage at Lakme Fashion Week, capturing the fluid movement of designer collections under dramatic spotlights.",
      img: "assets/images/work/IMG_9657.jpg",
      sizeClass: "medium"
    },
    {
      title: "Avant-Garde Runway Showcase",
      category: "Film & Video",
      desc: "Dynamic multi-angle video production documenting the bold silhouettes and immersive runway designs of Lakme Fashion Week.",
      img: "assets/images/work/IMG_9659.jpg",
      sizeClass: "short"
    },
    {
      title: "The Sad Clown Editorial",
      category: "Film & Video",
      desc: "A fine-art portrait featuring a model in a vibrant patchwork outfit and expressive makeup, exploring the dramatic theatricality of character design.",
      img: "assets/images/work/IMG_9716 (1).jpg",
      sizeClass: "tall"
    },
    {
      title: "Theatrical Fashion Narrative",
      category: "Film & Video",
      desc: "A staged conceptual editorial pairing bold, pattern-rich wardrobe with expressive character makeup on a minimalist studio set.",
      img: "assets/images/work/IMG_9727.jpg",
      sizeClass: "medium"
    },
    {
      title: "NBA Runway Collaboration",
      category: "Film & Video",
      desc: "Live event coverage of the NBA 75 runway collaboration, combining sports heritage with street style under immersive stadium lighting.",
      img: "assets/images/work/IMG_9809.jpg",
      sizeClass: "short"
    },
    {
      title: "Studio Cyclorama Production",
      category: "Rentals",
      desc: "Behind-the-scenes of a minimalist portrait session, showcasing the versatility of our fully equipped white cyclorama studio for photographers.",
      img: "assets/images/work/IMG_9920.jpg",
      sizeClass: "tall"
    },
    {
      title: "Press Room Celebrity Coverage",
      category: "Corporate",
      desc: "Professional media coverage and high-profile press interviews captured at the Lakme Fashion Week media lounge.",
      img: "assets/images/work/IMG_9932.jpg",
      sizeClass: "medium"
    },
    {
      title: "Maison Margiela Campaign",
      category: "Film & Video",
      desc: "A clean, high-fashion campaign shoot highlighting minimal aesthetic styling and premium linen fabrics against a crisp white backdrop.",
      img: "assets/images/work/Maison Margiela.png",
      sizeClass: "short"
    },
    {
      title: "Media Pit Press Production",
      category: "Corporate",
      desc: "A behind-the-scenes capture of the high-energy media riser, equipped with professional telephoto gear for real-time event broadcasting.",
      img: "assets/images/work/PHOTO-2025-10-10-12-10-26.jpg",
      sizeClass: "medium"
    },
    {
      title: "Compound Skincare Catalog",
      category: "Corporate",
      desc: "High-end commercial brand photography for Compound skincare, focusing on product texture, minimalist packaging, and clean male grooming.",
      img: "assets/images/work/_DSF1225 copy 2.jpg",
      sizeClass: "tall"
    },
    {
      title: "Precision Binoculars Catalog",
      category: "Corporate",
      desc: "Sleek product catalog photography showcasing the textured details and ergonomic design of matte black binoculars against a neutral studio backdrop.",
      img: "assets/images/work/_DSF5765 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Draco Telescope Showcase",
      category: "Corporate",
      desc: "Studio commercial shoot for the Draco telescope, highlighting its clean lines and high-quality build on a stable professional tripod.",
      img: "assets/images/work/_DSF5771 copy 2.jpg",
      sizeClass: "medium"
    },
    {
      title: "Pegasus Telescope Campaign",
      category: "Corporate",
      desc: "Dramatic low-key studio lighting highlights the sleek metallic finish and premium optical components of the Pegasus telescope.",
      img: "assets/images/work/_DSF5894 copy.jpg",
      sizeClass: "short"
    },
    {
      title: "Optical Engineering Detail",
      category: "Corporate",
      desc: "Macro product photography emphasizing the branding, high-precision adjustment knobs, and fine materials of a modern telescope.",
      img: "assets/images/work/_DSF5914 copy.jpg",
      sizeClass: "tall"
    },
    {
      title: "Precision Finder Scope Close-up",
      category: "Corporate",
      desc: "A detailed product focus shot of an optical finder scope, showcasing metallic details and precision blue anodized adjustment rings.",
      img: "assets/images/work/_DSF5922 copy.jpg",
      sizeClass: "medium"
    },
    {
      title: "Summer Linen Editorial",
      category: "Film & Video",
      desc: "A bright, warm-toned lifestyle editorial featuring a model in a light linen shirt resting next to a rustic crate of fresh mangoes.",
      img: "assets/images/work/_DSF6079 copy.jpg",
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
      if (emptyState) emptyState.style.display = "block";
      grid.style.display = "none";
      return;
    } else {
      if (emptyState) emptyState.style.display = "none";
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
    if (prefersReducedMotion) return;

    if (colCount >= 2) {
      const cols = document.querySelectorAll(".gallery_column");
      if (cols.length === 0) return;

      // Define parallax speeds/offsets based on column count
      const speeds = colCount >= 4 ? [80, 30, -40, -10] : [40, -20];

      cols.forEach((col, idx) => {
        const startOffset = speeds[idx % speeds.length];
        
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
    } else {
      // Mobile single-column: fade-up each card individually as they scroll into view
      const cards = grid.querySelectorAll(".gallery_card");
      cards.forEach(card => {
        const trigger = gsap.fromTo(card,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 92%",
              toggleActions: "play none none reverse",
              invalidateOnRefresh: true
            }
          }
        );
        if (trigger.scrollTrigger) {
          scrollTriggers.push(trigger.scrollTrigger);
        }
      });
    }
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
