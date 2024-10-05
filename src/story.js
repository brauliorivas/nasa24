import gsap from "gsap";

class InteractiveScreen {
  constructor(moment, effect, content) {
    this.moment = moment;
    this.effect = effect;
    this.content = content;
  }

  render(container) {
    container.replaceChildren();

    if (this.effect) {
      gsap.to(container, {
        translateX: "-50%",
        duration: 1,
      });
    }

    container.appendChild(document.createElement("div"));
  }
}

const video = document.getElementById("video");
let container;

const screens = [];

screens.push(new InteractiveScreen(3), true, "hello");

screens.sort((a, b) => a.moment - b.moment);

let currentScreenIndex = 0;
video.addEventListener("timeupdate", () => {
  const currentTime = video.currentTime;

  const nextScreen = screens[currentScreenIndex];
  const nextTime = nextScreen.moment;

  if (currentTime >= nextTime) {
    nextScreen.render(container);
    currentScreenIndex++;
  }
});

function handleOrientationChange() {
  if (window.matchMedia("(orientation: portrait)").matches) {
    container = document.getElementById("portrait-content");
  } else {
    container = document.getElementById("landscape-content");
  }
}

window.addEventListener("resize", handleOrientationChange);

handleOrientationChange();
