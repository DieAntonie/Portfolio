const Icons = {
  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
  location: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
  download: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
  external: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>`,
  code: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
  cloud: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>`,
  terminal: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  database: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"/></svg>`,
  tool: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
  degree: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>`,
  certification: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>`,
  chevronUp: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/></svg>`,
  menu: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"/></svg>`,
  close: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>`,
  folder: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"/></svg>`,
  send: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>`
};

const Components = {
  renderHeader(data) {
    return `
      <header class="header" id="header">
        <div class="container">
          <div class="header-content">
            <a href="#" class="logo">${data.personal.name.split(' ')[0]}<span>.</span></a>
            <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
            <nav id="mainNav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#references">References</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>
    `;
  },

  renderHero(data) {
    return `
      <section class="hero" id="hero">
        <div class="container">
          <div class="hero-content">
            <div class="hero-text">
              <h1>${data.personal.name}</h1>
              <p class="subtitle">${data.personal.title}</p>
              <p class="tagline">Building scalable solutions since 2012</p>
              <div class="hero-buttons">
                <a href="#contact" class="btn">${Icons.email} Get in Touch</a>
                <a href="${data.personal.resumeUrl}" class="btn btn-outline" download>${Icons.download} Download CV</a>
              </div>
              <div class="contact-links">
                <a href="mailto:${data.personal.email}" class="contact-link">${Icons.email} ${data.personal.email}</a>
                <a href="tel:${data.personal.phone.replace(/\D/g, '')}" class="contact-link">${Icons.phone} ${data.personal.phone}</a>
              </div>
              <div class="contact-links">
                <a href="${data.personal.linkedin}" target="_blank" rel="noopener" class="contact-link">${Icons.linkedin} LinkedIn</a>
                <a href="${data.personal.github}" target="_blank" rel="noopener" class="contact-link">${Icons.github} GitHub</a>
              </div>
            </div>
            <div class="hero-image">
              <div class="headshot-container">
                <div class="headshot-ring"></div>
                <img src="${data.personal.headshot}" alt="${data.personal.name}" class="headshot" onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 200 200%22><rect fill=%22%231a365d%22 width=%22200%22 height=%22200%22/><text x=%2250%25%22 y=%2255%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2248%22>${Utils.getInitials(data.personal.name)}</text></svg>'">
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  renderAbout(data) {
    return `
      <section class="about" id="about">
        <div class="container">
          <div class="section-header">
            <h2>About Me</h2>
            <p>Professional value proposition and career highlights</p>
          </div>
          <div class="about-content">
            <p class="about-text">${data.statement}</p>
          </div>
        </div>
      </section>
    `;
  },

  renderSkills(data) {
    const categoryIcons = {
      'Cloud & DevOps': Icons.cloud,
      'Languages': Icons.code,
      'Frameworks': Icons.terminal,
      'Databases': Icons.database,
      'Tools & Practices': Icons.tool
    };

    const skillCategories = data.skills.map(skill => `
      <div class="skill-category">
        <h3>${categoryIcons[skill.category] || Icons.tool} ${skill.category}</h3>
        <div class="skill-tags">
          ${skill.items.map(item => `<span class="skill-tag">${item}</span>`).join('')}
        </div>
      </div>
    `).join('');

    return `
      <section class="skills" id="skills">
        <div class="container">
          <div class="section-header">
            <h2>Technical Skills</h2>
            <p>Expertise across cloud, development, and operations</p>
          </div>
          <div class="skills-grid">
            ${skillCategories}
          </div>
        </div>
      </section>
    `;
  },

  renderExperience(data) {
    const timelineItems = data.experience.map(exp => `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <span class="timeline-date">${Utils.formatDateRange(exp.startDate, exp.endDate)}</span>
        <div class="timeline-content">
          <h3>${exp.title}</h3>
          <p class="company">${exp.company}</p>
          <p class="location">${Icons.location} ${exp.location}</p>
          <p>${exp.description}</p>
          <ul class="timeline-highlights">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      </div>
    `).join('');

    return `
      <section class="experience" id="experience">
        <div class="container">
          <div class="section-header">
            <h2>Professional Experience</h2>
            <p>Over a decade of delivering impactful solutions</p>
          </div>
          <div class="timeline">
            ${timelineItems}
          </div>
        </div>
      </section>
    `;
  },

  renderEducation(data) {
    const educationCards = data.education.map(edu => {
      const icon = edu.type === 'degree' ? Icons.degree : Icons.certification;
      const className = edu.type === 'degree' ? 'degree' : 'certification';
      
      return `
        <div class="education-card ${className}">
          ${icon}
          <h3>${edu.title}</h3>
          <p class="institution">${edu.institution}</p>
          <p class="year">${edu.year}</p>
          ${edu.gpa ? `<p class="details">GPA: ${edu.gpa}</p>` : ''}
          ${edu.honors ? `<span class="honors">${edu.honors}</span>` : ''}
          ${edu.credentialId ? `<p class="credential-id">${edu.credentialId}</p>` : ''}
        </div>
      `;
    }).join('');

    return `
      <section class="education" id="education">
        <div class="container">
          <div class="section-header">
            <h2>Education & Certifications</h2>
            <p>Academic foundation and professional credentials</p>
          </div>
          <div class="education-grid">
            ${educationCards}
          </div>
        </div>
      </section>
    `;
  },

  renderProjects(data) {
    const projectCards = data.projects.map(project => `
      <article class="project-card">
        <div class="project-image">
          ${Icons.folder}
        </div>
        <div class="project-content">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
          </div>
          <div class="project-links">
            ${project.demoUrl ? `<a href="${project.demoUrl}" target="_blank" rel="noopener">${Icons.external} Live Demo</a>` : ''}
            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" rel="noopener" class="secondary">${Icons.github} Source</a>` : ''}
          </div>
        </div>
      </article>
    `).join('');

    return `
      <section class="projects" id="projects">
        <div class="container">
          <div class="section-header">
            <h2>Project Showcase</h2>
            <p>Selected work demonstrating technical expertise</p>
          </div>
          <div class="projects-grid">
            ${projectCards}
          </div>
        </div>
      </section>
    `;
  },

  renderReferences(data) {
    const referenceCards = data.references.map(ref => `
      <div class="reference-card">
        <blockquote>"${ref.quote}"</blockquote>
        <div class="reference-author">
          <div class="reference-avatar">${Utils.getInitials(ref.name)}</div>
          <div class="reference-info">
            <h4>${ref.name}</h4>
            <p>${ref.title}</p>
          </div>
        </div>
      </div>
    `).join('');

    return `
      <section class="references" id="references">
        <div class="container">
          <div class="section-header">
            <h2>Professional References</h2>
            <p>What colleagues and leaders say</p>
          </div>
          <div class="references-grid">
            ${referenceCards}
          </div>
        </div>
      </section>
    `;
  },

  renderContact(data) {
    return `
      <section class="contact" id="contact">
        <div class="container">
          <div class="section-header">
            <h2>Get in Touch</h2>
            <p>Let's discuss how I can contribute to your team</p>
          </div>
          <div class="contact-grid">
            <div class="contact-info">
              <h3>Contact Information</h3>
              <p>I'm currently ${data.contact.availability.toLowerCase()}. ${data.contact.responseTime}.</p>
              <div class="contact-methods">
                <div class="contact-method">
                  <div class="contact-method-icon">${Icons.email}</div>
                  <div>
                    <h4>Email</h4>
                    <p>${data.personal.email}</p>
                  </div>
                </div>
                <div class="contact-method">
                  <div class="contact-method-icon">${Icons.phone}</div>
                  <div>
                    <h4>Phone</h4>
                    <p>${data.personal.phone}</p>
                  </div>
                </div>
                <div class="contact-method">
                  <div class="contact-method-icon">${Icons.location}</div>
                  <div>
                    <h4>Location</h4>
                    <p>${data.personal.location}</p>
                  </div>
                </div>
                <div class="contact-method">
                  <div class="contact-method-icon">${Icons.linkedin}</div>
                  <div>
                    <h4>LinkedIn</h4>
                    <p>Connect with me</p>
                  </div>
                </div>
              </div>
            </div>
            <form class="contact-form" id="contactForm" action="${data.contact.formEndpoint}" method="POST">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name">
                </div>
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="your@email.com">
                </div>
              </div>
              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required placeholder="How can I help?">
              </div>
              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" required placeholder="Tell me about your project or opportunity..."></textarea>
              </div>
              <div class="form-submit">
                <button type="submit" class="btn">${Icons.send} Send Message</button>
                <span class="availability">${data.contact.availability}</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    `;
  },

  renderFooter(data) {
    return `
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-logo">${data.personal.name.split(' ')[0]}<span>.</span></div>
            <div class="footer-links">
              <a href="${data.personal.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
              <a href="${data.personal.github}" target="_blank" rel="noopener">GitHub</a>
              <a href="${data.personal.resumeUrl}" download>Resume</a>
            </div>
          </div>
          <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} ${data.personal.name}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;
  },

  renderBackToTop() {
    return `
      <button class="back-to-top" id="backToTop" aria-label="Back to top">
        ${Icons.chevronUp}
      </button>
    `;
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = Components;
}
