document.addEventListener("DOMContentLoaded", () => {
  // Check motion preferences
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1. GSAP Scroll Trigger Entrance Animations for Social Grid Cards
  if (!prefersReducedMotion) {
    gsap.from(".reel_slot, .post_slot", {
      opacity: 0,
      y: 60,
      duration: 0.8,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".social_feed_contain",
        start: "top 80%"
      }
    });

    gsap.from(".social_magnetic_btn", {
      opacity: 0,
      scale: 0.8,
      y: 20,
      duration: 0.6,
      stagger: 0.1,
      ease: "back.out(1.7)",
      scrollTrigger: {
        trigger: ".social_magnetic_container",
        start: "top 90%"
      }
    });
  }

  // 2. Magnetic Hover Pull Effect on Social Links
  const magneticBtns = document.querySelectorAll(".social_magnetic_btn");
  if (!prefersReducedMotion) {
    magneticBtns.forEach(btn => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        // Mouse coordinate delta relative to button center
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        // Pull slightly towards mouse (30% power)
        gsap.to(btn, {
          x: x * 0.3,
          y: y * 0.3,
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      btn.addEventListener("mouseleave", () => {
        gsap.to(btn, {
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "elastic.out(1.2, 0.4)",
          overwrite: "auto"
        });
      });
    });
  }

  // 3. Card 3D Tilt Effect on Mouse Move
  const cards = document.querySelectorAll(".reel_slot, .post_slot");
  if (!prefersReducedMotion) {
    cards.forEach(card => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Max 12 degrees rotation
        const rotateY = ((x / rect.width) - 0.5) * 12;
        const rotateX = (0.5 - (y / rect.height)) * 12;

        gsap.to(card, {
          rotateX: rotateX,
          rotateY: rotateY,
          scale3d: 1.02,
          boxShadow: "0 20px 40px rgba(0, 31, 56, 0.15)",
          duration: 0.3,
          ease: "power2.out",
          overwrite: "auto"
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(card, {
          rotateX: 0,
          rotateY: 0,
          scale3d: 1,
          boxShadow: "0 10px 20px rgba(0, 31, 56, 0.05)",
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto"
        });
      });
    });
  }

  // 4. Like button particle confetti trigger
  const heartBtns = document.querySelectorAll(".social_card_like_btn, .post_slot_like_btn");
  heartBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();

      // Check if already liked to prevent double count
      const isLiked = btn.classList.contains("is-liked");
      const countEl = btn.querySelector(".like_count");
      
      if (!isLiked) {
        btn.classList.add("is-liked");
        let currentCount = parseInt(countEl.textContent.replace(/,/g, ''));
        countEl.textContent = (currentCount + 1).toLocaleString();
        
        // Visual pop effect on button
        gsap.fromTo(btn.querySelectorAll("svg"), 
          { scale: 0.8 }, 
          { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1, ease: "back.out(2)" }
        );
        
        // Confetti explosion
        createConfetti(e.clientX, e.clientY);
      } else {
        // Unlike toggle
        btn.classList.remove("is-liked");
        let currentCount = parseInt(countEl.textContent.replace(/,/g, ''));
        countEl.textContent = (currentCount - 1).toLocaleString();
      }
    });
  });

  // Confetti Explosion Builder
  function createConfetti(x, y) {
    const colors = ["#DFCA9F", "#F6E3B9", "#FFEFCB", "#FFFCC7", "#FF5E5E", "#FFA8A8", "#FFD700"];
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.left = "0";
    container.style.top = "0";
    container.style.width = "100vw";
    container.style.height = "100vh";
    container.style.pointerEvents = "none";
    container.style.zIndex = "99999";
    document.body.appendChild(container);

    const particleCount = prefersReducedMotion ? 4 : 20;

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.style.position = "absolute";
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.width = `${Math.random() * 8 + 4}px`;
      particle.style.height = `${Math.random() * 8 + 4}px`;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.borderRadius = Math.random() > 0.5 ? "50%" : "0%";
      container.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const velocity = Math.random() * 100 + 50;
      const tx = Math.cos(angle) * velocity;
      // Gravity / height arc simulation
      const ty = Math.sin(angle) * velocity - 60;

      gsap.to(particle, {
        x: tx,
        y: ty,
        rotation: Math.random() * 360,
        opacity: 0,
        scale: 0.2,
        duration: Math.random() * 0.6 + 0.6,
        ease: "power2.out",
        onComplete: () => {
          particle.remove();
          if (container.children.length === 0) {
            container.remove();
          }
        }
      });
    }
  }
});
