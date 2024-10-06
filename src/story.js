import gsap from "gsap";

const video = document.getElementById("video");
const landscape = document.getElementById("landscape");
const closeButton = document.getElementById("close-landscape");
const continuePortraitButton = document.getElementById("continue-portrait");

class InteractiveScreen {
  constructor(moment, contentId) {
    this.moment = moment;
    this.contentId = contentId;
  }

  render(container) {
    container.replaceChildren();
    const content = document.getElementById(this.contentId);
    content.style.display = "flex";
    container.appendChild(content);
  }
}

let i = 0;

const screens = [];
screens.push(new InteractiveScreen(9, "1"));
screens.push(new InteractiveScreen(27, "2"));
screens.push(new InteractiveScreen(47, "3"));
screens.push(new InteractiveScreen(60 + 28, "4"));
screens.push(new InteractiveScreen(60 * 2 + 30, "5"));
screens.push(new InteractiveScreen(60 * 3 + 53, "6"));

screens.sort((a, b) => a.moment - b.moment);

video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;

  if (i === screens.length) {
    return;
  }
  const nextScreen = screens[i];
  const nextTime = nextScreen.moment;

  if (currentTime >= nextTime) {
    const container = getContentContainer();
    renderScreen(nextScreen, container);
    i++;
  }
});

function getContentContainer() {
  let container;
  if (window.matchMedia("(orientation: portrait)").matches) {
    container = document.getElementById("portrait-content");
  } else {
    container = document.getElementById("landscape-content");
  }

  return container;
}

function renderScreen(screen, container) {
  screen.render(container);
  video.pause();

  if (window.matchMedia("(orientation: landscape)").matches) {
    gsap.to(landscape, {
      translateX: "-100%",
      duration: 1,
    });
  }
}

closeButton.addEventListener("click", () => {
  gsap.to(landscape, {
    translateX: "100%",
    duration: 1,
  });
  video.play();
});

continuePortraitButton.addEventListener("click", () => {
  video.play();
});
