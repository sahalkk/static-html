import "./style.css";
import javascriptLogo from "/javascript.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton?.addEventListener("click", () => {
  mobileMenu?.classList.toggle("hidden");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !mobileMenuButton?.contains(e.target) &&
    !mobileMenu?.contains(e.target)
  ) {
    mobileMenu?.classList.add("hidden");
  }
});
