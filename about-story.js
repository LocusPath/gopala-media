document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const activePath = document.getElementById("active-story-path");
  if (!activePath) return;

  const pathLength = activePath.getTotalLength();

  // Set up GSAP matchMedia to separate desktop and mobile experiences
  let mm = gsap.matchMedia();

  // Desktop (min-width: 768px)
  mm.add("(min-width: 768px)", () => {
    // Set initial SVG properties
    gsap.set(activePath, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength
    });

    // Set initial canvas position (centering the starting coordinate 200, 300)
    gsap.set(".story_content", {
      x: () => window.innerWidth / 2 - 200,
      y: () => window.innerHeight / 2 - 300
    });

    // Create camera-tracking timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_story_wrap",
        start: "top top",
        end: "+=3200", // Length of scrolling
        pin: true,
        scrub: 1, // Smooth scrolling scrubbing
        invalidateOnRefresh: true, // Recalculate offsets on window resize
        onUpdate: (self) => {
          const progress = self.progress;
          // Toggle milestone card and path circle node classes based on progress thresholds
          toggleActive("milestone-1", "node-1", progress >= 0.18);
          toggleActive("milestone-2", "node-2", progress >= 0.45);
          toggleActive("milestone-3", "node-3", progress >= 0.70);
          toggleActive("milestone-4", "node-4", progress >= 0.95);
        }
      }
    });

    // Helper to toggle active classes
    function toggleActive(cardId, nodeId, active) {
      const card = document.getElementById(cardId);
      const node = document.getElementById(nodeId);
      if (card) card.classList.toggle("active", active);
      if (node) node.classList.toggle("active", active);
    }

    // Phase 1 (Horizontal Pan): Pan camera to the right from x=200 to x=1400 (y remains centered at 300)
    tl.to(activePath, {
      strokeDashoffset: pathLength * 0.5,
      ease: "none",
      duration: 1
    }, 0);

    tl.to(".story_content", {
      x: () => window.innerWidth / 2 - 1400,
      ease: "none",
      duration: 1
    }, 0);

    // Phase 2 (Vertical Pan): Pan camera downwards from y=300 to y=1500 (x remains fixed at 1400)
    tl.to(activePath, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 1
    });

    tl.to(".story_content", {
      y: () => window.innerHeight / 2 - 1500,
      ease: "none",
      duration: 1
    }, "<"); // Run in parallel with the strokeDashoffset tween

  });

  // Mobile (max-width: 767px)
  mm.add("(max-width: 767px)", () => {
    // Reset properties in case of window resize transition from desktop
    gsap.set(activePath, {
      strokeDasharray: "none",
      strokeDashoffset: "none"
    });
    gsap.set(".story_content", {
      clearProps: "all"
    });

    // Simple scroll reveal for mobile stacked story cards
    const milestones = ["milestone-1", "milestone-2", "milestone-3", "milestone-4"];
    milestones.forEach((id) => {
      gsap.fromTo(`#${id}`, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: `#${id}`,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  });

  // Refresh ScrollTrigger to sync measurements
  ScrollTrigger.refresh();
});
