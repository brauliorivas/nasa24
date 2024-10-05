import gsap from "gsap";

const template = document.createElement("template");
template.innerHTML = `
<style>
a {
  color: inherit;
  text-decoration: inherit;
}
.menu-button {
  position: absolute;
  top: 8%;
  left: 8%;
  background: none;
  border: none;
  width: fit-content;
  height: fit-content;
  display: inline-block;
  z-index: 3;
}

.menu-button-svg {
  width: 30px;
  height: 30px;
}

.menu-button:hover {
  cursor: pointer;
}

#navbar {
  position: absolute;
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fef5ea;
  left: -100vw;
  z-index: 2;
}

.nav-button {
    width: 90%;
  margin: 20px auto;
  background-color: transparent;
  border: none;
  font-family: "SharpGrotesk";
  font-size: 1rem;
  color: #ffb819;
  
}

    .nav-button > a {
display: flex;
  flex-direction: row;
  align-items: center;
        justify-content: space-between;}

@media (min-width: 1024px) {
    .nav-button {
        width: 50%;
    }}
.down-arrow {
  max-width: 40px;
  height: 40px;
}

#close-menu {
  display: none;
}
    </style>

<button class="menu-button" id="close-menu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="200"
        height="200"
        viewBox="0 0 16 16"
        fill="#000000"
        id="close-svg"
        class="menu-button-svg"
      >
        <path
          fill-rule="evenodd"
          d="M4.28 3.22a.75.75 0 0 0-1.06 1.06L6.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06L8 9.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L9.06 8l3.72-3.72a.75.75 0 0 0-1.06-1.06L8 6.94L4.28 3.22Z"
          clip-rule="evenodd"
        />
      </svg>
    </button>
    <button class="menu-button" id="open-menu">
      <svg
        width="24px"
        height="24px"
        stroke-width="3"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        id="open-svg"
        class="menu-button-svg"
        stroke="#ffffff"
      >
        <path d="M3 5H21" stroke-linecap="round" stroke-linejoin="round"></path>
        <path
          d="M3 12H21"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <path
          d="M3 19H21"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </svg>
    </button>
    <nav id="navbar">
<button class="nav-button">
        <a href="index.html">
          <h2>Home</h2>
        <svg
          class="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="undefined"
          height="undefined"
          viewBox="0 0 2048 2048"
          fill="#ffb819"
        >
          <path
            d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"
          />
        </svg>
    </a>
      </button>
      <button class="nav-button">
        <a href="story.html">
          <h2>Story</h2>
        <svg
          class="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="undefined"
          height="undefined"
          viewBox="0 0 2048 2048"
          fill="#ffb819"
        >
          <path
            d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"
          />
        </svg>
    </a>
      </button>
      <button class="nav-button">
        <a href="learn.html">
          <h2>Learn</h2>
        <svg
          class="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="undefined"
          height="undefined"
          viewBox="0 0 2048 2048"
          fill="#ffb819"
        >
          <path
            d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"
          />
        </svg>
    </a>
      </button>
      <button class="nav-button">
        <a href="game.html">
          <h2>Game: Carbon Footprint</h2>
        <svg
          class="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="undefined"
          height="undefined"
          viewBox="0 0 2048 2048"
          fill="#ffb819"
        >
          <path
            d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"
          />
        </svg>
    </a>
      </button>
      <button class="nav-button">
        <a href="about.html">
          <h2>About Us</h2>
        <svg
          class="down-arrow"
          xmlns="http://www.w3.org/2000/svg"
          width="undefined"
          height="undefined"
          viewBox="0 0 2048 2048"
          fill="#ffb819"
        >
          <path
            d="m1965 1101l-941 941l-941-941l90-90l787 787V0h128v1798l787-787l90 90z"
          />
        </svg>
    </a>
      </button>
    </nav>
`;
class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.baseColor = this.getAttribute("base");
    this.alternateColor = this.getAttribute("alter");
  }

  connectedCallback() {
    const navbar = this.shadowRoot.getElementById("navbar");
    const openNavbar = this.shadowRoot.getElementById("open-menu");
    const openSvg = this.shadowRoot.getElementById("open-svg");
    const closeNavbar = this.shadowRoot.getElementById("close-menu");
    gsap.to(openSvg, {
      stroke: this.baseColor,
      duration: 0,
    });
    openNavbar.addEventListener("mouseenter", () => {
      gsap.to(openSvg, {
        stroke: this.alternateColor,
      });
      gsap.to(navbar, {
        translateX: "15%",
      });
    });
    let removeNavbar = true;
    openNavbar.addEventListener("mouseleave", () => {
      gsap.to(openSvg, {
        stroke: this.baseColor,
      });
      if (removeNavbar) {
        gsap.to(navbar, {
          translateX: "-15%",
          duration: 1,
        });
      }
    });
    openNavbar.addEventListener("click", () => {
      removeNavbar = false;
      gsap.to(openNavbar, {
        display: "none",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(navbar, {
        translateX: "100%",
        duration: 1,
      });
      gsap.to(closeNavbar, {
        display: "block",
        delay: 0.5,
        duration: 0.5,
        ease: "power1.inOut",
      });
    });
    closeNavbar.addEventListener("click", () => {
      removeNavbar = true;
      gsap.to(closeNavbar, {
        display: "none",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(navbar, {
        translateX: "-100%",
        duration: 1,
      });
      gsap.to(openNavbar, {
        display: "block",
        delay: 0.5,
        duration: 0.5,
        stroke: this.baseColor,
        ease: "power1.inOut",
      });
    });

    const navButtons = this.shadowRoot.querySelectorAll(".nav-button");
    navButtons.forEach((button) => {
      const arrow = button.querySelector(".down-arrow");
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          color: "#000000",
          duration: 0,
        });
        gsap.to(arrow, {
          fill: "#000000",
          duration: 0,
        });
        gsap.to(arrow, {
          y: 100,
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 0,
          onComplete: () => {
            gsap.set(arrow, { y: -100 });
            gsap.to(arrow, {
              y: 0,
              duration: 0.5,
              ease: "power1.inOut",
              opacity: 1,
            });
          },
        });
        button.addEventListener("mouseleave", () => {
          gsap.to(button, {
            color: "#ffb819",
            duration: 0,
          });
          gsap.to(arrow, {
            fill: "#ffb819",
            duration: 0,
          });
        });
      });
    });
  }
}

customElements.define("nav-bar", Navbar);
