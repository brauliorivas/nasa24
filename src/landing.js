import gsap from "gsap";

const goArrowContainer = document.getElementById("go-arrow-container");
const goArrow = document.getElementById("go-arrow");
goArrowContainer.addEventListener("mouseenter", () => {
  const tl = gsap.timeline();

  tl.to(goArrow, {
    x: 100,
    duration: 0.5,
    ease: "power1.inOut",
    onComplete: () => {
      gsap.set(goArrow, { x: -100 });
      gsap.to(goArrow, { x: 0, duration: 0.5, ease: "power1.inOut" });
    },
  });
});
