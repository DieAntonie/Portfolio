import { navigate, render } from "./router.js";

document.addEventListener("click", e => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    navigate(e.target.href.replace(location.origin, ""));
  }
});

window.addEventListener("popstate", render);

render();
