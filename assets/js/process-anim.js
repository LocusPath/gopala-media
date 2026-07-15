document.addEventListener("DOMContentLoaded", () => {
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
gsap.set(".gsap-reveal", { opacity: 1, y: 0 });
return;
}
const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
heroTl.from(".process_hero_title", {
opacity: 0,
y: 80,
duration: 1.2,
delay: 0.2
})
.from(".process_hero_desc", {
opacity: 0,
y: 30,
duration: 1.0
}, "-=0.8");
const steps = document.querySelectorAll(".process_step_item");
steps.forEach((step, index) => {
const isAlternate = step.classList.contains("is-alternate");
const content = step.querySelector(".process_step_content");
const visual = step.querySelector(".process_step_visual_wrap");
gsap.fromTo(content,
{ opacity: 0, x: isAlternate ? 50 : -50 },
{
opacity: 1,
x: 0,
duration: 0.8,
ease: "power2.out",
scrollTrigger: {
trigger: step,
start: "top 80%",
toggleActions: "play none none reverse"
}
}
);
gsap.fromTo(visual,
{ opacity: 0, x: isAlternate ? -50 : 50 },
{
opacity: 1,
x: 0,
duration: 0.8,
ease: "power2.out",
scrollTrigger: {
trigger: step,
start: "top 80%",
toggleActions: "play none none reverse"
}
}
);
const img = visual.querySelector(".process_step_img_box");
if (img) {
gsap.fromTo(img,
{ y: -30 },
{
y: 30,
ease: "none",
scrollTrigger: {
trigger: step,
start: "top bottom",
end: "bottom top",
scrub: true
}
}
);
}
});
gsap.fromTo(".process_timeline_line_fill",
{ height: "0%" },
{
height: "100%",
ease: "none",
scrollTrigger: {
trigger: ".process_timeline_wrap",
start: "top 40%",
end: "bottom 60%",
scrub: true
}
}
);
});