document.addEventListener("DOMContentLoaded", () => {
  // Register GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  const activePath = document.getElementById("active-story-path");
  if (!activePath) return;

  // Calculate total path length
  const pathLength = activePath.getTotalLength();

  // Set initial SVG properties to hide the active line
  gsap.set(activePath, {
    strokeDasharray: pathLength,
    strokeDashoffset: pathLength
  });

  // Animate drawing of the path driven by scroll position
  gsap.to(activePath, {
    strokeDashoffset: 0,
    ease: "none",
    scrollTrigger: {
      trigger: ".story_timeline",
      start: "top 30%",
      end: "bottom 75%",
      scrub: 1.2, // Smooth scrubbing
      onUpdate: (self) => {
        // Option to trigger nodes dynamically based on path progress if needed
      }
    }
  });

  // Milestone mapping with their corresponding node circles
  const milestones = [
    { id: "milestone-1", node: "node-1" },
    { id: "milestone-2", node: "node-2" },
    { id: "milestone-3", node: "node-3" },
    { id: "milestone-4", node: "node-4" }
  ];

  milestones.forEach((item) => {
    const card = document.getElementById(item.id);
    const circleNode = document.getElementById(item.node);

    if (card && circleNode) {
      ScrollTrigger.create({
        trigger: card,
        start: "top 70%", // Triggers when the milestone card is 70% from the top of the viewport
        onEnter: () => {
          card.classList.add("active");
          circleNode.classList.add("active");
        },
        onLeaveBack: () => {
          card.classList.remove("active");
          circleNode.classList.remove("active");
        }
      });
    }
  });

  // Refresh ScrollTrigger to ensure all markers are aligned correctly after layout load
  ScrollTrigger.refresh();
});
