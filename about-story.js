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
    const activePaths = document.querySelectorAll(".story_line_active_layer");
    const leadDots = document.querySelectorAll(".story_lead_dot");

    // Set initial SVG properties to hide active line
    activePaths.forEach(path => {
      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength
      });
    });

    // Snap lead dots to starting coordinate
    leadDots.forEach(dot => {
      dot.setAttribute("cx", startPoint.x);
      dot.setAttribute("cy", startPoint.y);
      gsap.set(dot, { opacity: 0 });
    });

    // Snap camera to start position (M 200, 200) immediately
    const startPoint = activePath.getPointAtLength(0);
    gsap.set(".story_content", {
      x: window.innerWidth / 2 - startPoint.x,
      y: window.innerHeight * 0.35 - startPoint.y
    });

    // Setup smooth quickTo targets for viewport translation (camera)
    const xTo = gsap.quickTo(".story_content", "x", { duration: 0.6, ease: "power2.out" });
    const yTo = gsap.quickTo(".story_content", "y", { duration: 0.6, ease: "power2.out" });

    // Create drawing animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_story_wrap",
        start: "top top",
        end: "+=5000", // Scrolling track length
        pin: true,
        scrub: 1, // Smooth scrubbing
        invalidateOnRefresh: true, // Recalculate on window resize
        onUpdate: (self) => {
          const progress = self.progress;

          // DYNAMIC CAMERA TRACKING: Query the exact coordinate at current path distance
          const currentDistance = progress * pathLength;
          const point = activePath.getPointAtLength(currentDistance);

          // Update viewport target to keep the active tip centered in screen
          xTo(window.innerWidth / 2 - point.x);
          yTo(window.innerHeight * 0.35 - point.y);

          // Track traveling glowing lead dots
          if (progress > 0.002 && progress < 0.998) {
            leadDots.forEach(dot => {
              gsap.set(dot, { opacity: 1 });
              dot.setAttribute("cx", point.x);
              dot.setAttribute("cy", point.y);
            });
          } else {
            leadDots.forEach(dot => gsap.set(dot, { opacity: 0 }));
          }

          // Active milestone states based on curve segment progress triggers
          toggleActive("milestone-1", "node-1", progress >= 0.18);
          toggleActive("milestone-2", "node-2", progress >= 0.38);
          toggleActive("milestone-3", "node-3", progress >= 0.58);
          toggleActive("milestone-4", "node-4", progress >= 0.78);
        }
      }
    });

    // Animate drawing path stroke layers linearly with scrub
    tl.to(activePaths, {
      strokeDashoffset: 0,
      ease: "none",
      duration: 1
    });

    // Helper to toggle active CSS classes
    function toggleActive(cardId, nodeId, active) {
      const card = document.getElementById(cardId);
      const node = document.getElementById(nodeId);
      if (card) card.classList.toggle("active", active);
      if (node) node.classList.toggle("active", active);
    }
  });

  // Mobile (max-width: 767px)
  mm.add("(max-width: 767px)", () => {
    const activePaths = document.querySelectorAll(".story_line_active_layer");
    const leadDots = document.querySelectorAll(".story_lead_dot");

    // Reset properties in case of resize transitions
    activePaths.forEach(path => {
      gsap.set(path, {
        strokeDasharray: "none",
        strokeDashoffset: "none"
      });
    });
    leadDots.forEach(dot => gsap.set(dot, { opacity: 0 }));

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

  // Refresh ScrollTrigger to sync coordinates
  ScrollTrigger.refresh();
});
