import Home from "./views/home.js";
import About from "./views/about.js";
import Projects from "./views/projects.js";
import Contact from "./views/contact.js";

const routes = {
  "/": Home,
  "/about": About,
  "/projects": Projects,
  "/contact": Contact
};

export async function navigate(path) {
  history.pushState({}, "", path);
  render();
}

export async function render() {
  const view = routes[location.pathname] || Home;
  const html = await view();
  document.getElementById("app").innerHTML = html;
}
