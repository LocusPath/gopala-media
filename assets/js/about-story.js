document.addEventListener("DOMContentLoaded", () => {
gsap.registerPlugin(ScrollTrigger);
const activePath = document.getElementById("active-story-path");
if (!activePath) return;
const pathLength = activePath.getTotalLength();
let mm = gsap.matchMedia();
mm.add("(min-width: 768px)", () => {
const activePaths = document.querySelectorAll(".story_line_active_layer");
const leadDots = document.querySelectorAll(".story_lead_dot");
const startPoint = activePath.getPointAtLength(0);
activePaths.forEach(path => {
gsap.set(path, {
strokeDasharray: pathLength,
strokeDashoffset: pathLength
});
});
leadDots.forEach(dot => {
dot.setAttribute("cx", startPoint.x);
dot.setAttribute("cy", startPoint.y);
gsap.set(dot, { opacity: 1 });
});
gsap.set(".story_content", {
x: window.innerWidth / 2 - startPoint.x,
y: 80 - startPoint.y
});
gsap.to(".timeline_scroll_indicator", {
opacity: 0,
scrollTrigger: {
trigger: ".about_story_wrap",
start: "top top",
end: "+=150",
scrub: true
}
});
const xTo = gsap.quickTo(".story_content", "x", { duration: 0.8, ease: "power3.out" });
const yTo = gsap.quickTo(".story_content", "y", { duration: 0.8, ease: "power3.out" });
const tl = gsap.timeline({
scrollTrigger: {
trigger: ".about_story_wrap",
start: "top top",
end: "+=8000",
pin: true,
scrub: 1.2,
invalidateOnRefresh: true
}
});
tl.to(activePaths, {
strokeDashoffset: 0,
ease: "none",
duration: 1,
onUpdate: function() {
const progress = this.progress();
const currentDistance = progress * pathLength;
const point = activePath.getPointAtLength(currentDistance);
let centerY = window.innerHeight * 0.5;
if (progress < 0.15) {
const ratio = progress / 0.15;
centerY = gsap.utils.interpolate(80, window.innerHeight * 0.5, ratio);
}
xTo(window.innerWidth / 2 - point.x);
yTo(centerY - point.y);
if (progress > 0.002 && progress < 0.998) {
leadDots.forEach(dot => {
gsap.set(dot, { opacity: 1 });
dot.setAttribute("cx", point.x);
dot.setAttribute("cy", point.y);
});
} else {
leadDots.forEach(dot => gsap.set(dot, { opacity: 0 }));
}
toggleActive("milestone-1", "node-1", progress >= 0.11);
toggleActive("milestone-2", "node-2", progress >= 0.31);
toggleActive("milestone-3", "node-3", progress >= 0.53);
toggleActive("milestone-4", "node-4", progress >= 0.77);
toggleActive("milestone-5", "node-5", progress >= 0.98);
}
});
function toggleActive(cardId, nodeId, active) {
const card = document.getElementById(cardId);
const node = document.getElementById(nodeId);
const img = document.getElementById(cardId + "-img");
if (card) card.classList.toggle("active", active);
if (node) node.classList.toggle("active", active);
if (img) img.classList.toggle("active", active);
}
});
mm.add("(max-width: 767px)", () => {
const activePaths = document.querySelectorAll(".story_line_active_layer");
const leadDots = document.querySelectorAll(".story_lead_dot");
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
const milestones = ["milestone-1", "milestone-2", "milestone-3", "milestone-4", "milestone-5"];
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
ScrollTrigger.refresh();
});