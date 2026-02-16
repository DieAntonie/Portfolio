export default async function Projects() {
  console.log("Rendering Projects view");
  const res = await fetch("/api/projects");
  const projects = await res.json();

  return `
    <h1>Projects</h1>
    ${projects.map(p => `
      <div class="project">
        <h3>${p.name}</h3>
        <p>${p.description}</p>
      </div>
    `).join("")}
  `;
}