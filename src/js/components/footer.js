import { elem } from "./utils.js";

const footerSoc = elem(".footer-social").children;

for (let i = 0; i < footerSoc.length; i++) {
  const element = footerSoc[i];
  element.classList.contains("chevron-left") ||
  element.classList.contains("chevron-right")
    ? (element.style.display = "none")
    : "";
}

elem('#to-top-btn').addEventListener('click', () => {
	window.scrollTo(0, 0);
});



