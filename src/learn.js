import gsap from "gsap";

const titles = document.querySelectorAll("h3");

titles.forEach((title) => {
  const anchor = title.querySelector("a");
  title.addEventListener("mouseenter", () => {
    gsap.to(anchor, {
      visibility: "visible",
      duration: 0.5,
    });
    anchor.addEventListener("mouseenter", () => {
      gsap.to(anchor, {
        color: "#148576",
        duration: 0,
      });
    });
    anchor.addEventListener("mouseleave", () => {
      gsap.to(anchor, { color: "black", duration: 0 });
    });
  });
  title.addEventListener("mouseleave", () => {
    gsap.to(anchor, {
      visibility: "hidden",
      duration: 0.5,
    });
  });
});
