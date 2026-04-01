function toggleProjects(id, btn) {
  const content = document.getElementById(id);
  const icon = btn.querySelector('.toggle-icon');
  content.classList.toggle('expanded');
  icon.classList.toggle('rotated');
}

const App = {
  init() {
    this.render();
    this.setupNavigation();
    this.setupScrollEffects();
    this.setupForm();
    this.setupBackToTop();
    this.setupMobileMenu();
    this.animateSections();
  },

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      ${Components.renderHeader(portfolioData)}
      ${Components.renderHero(portfolioData)}
      ${Components.renderAbout(portfolioData)}
      ${Components.renderSkills(portfolioData)}
      ${Components.renderExperience(portfolioData)}
      ${Components.renderEducation(portfolioData)}
      ${Components.renderProjects(portfolioData)}
      ${Components.renderReferences(portfolioData)}
      ${Components.renderContact(portfolioData)}
      ${Components.renderFooter(portfolioData)}
      ${Components.renderBackToTop()}
    `;
  },

  setupNavigation() {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        Utils.scrollToSection(targetId);
        document.getElementById('mainNav').classList.remove('open');
        document.getElementById('mobileMenuBtn').classList.remove('active');
      });
    });
  },

  setupMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mainNav = document.getElementById('mainNav');

    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      mainNav.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (!mainNav.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        mainNav.classList.remove('open');
        mobileMenuBtn.classList.remove('active');
      }
    });
  },

  setupScrollEffects() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section[id]');

    const handleScroll = Utils.throttle(() => {
      header.classList.toggle('scrolled', window.scrollY > 50);
      this.updateActiveNavLink(navLinks, sections);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
  },

  updateActiveNavLink(navLinks, sections) {
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  },

  animateSections() {
    const sections = document.querySelectorAll('section');
    Utils.animateOnScroll(sections);
  },

  setupForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      if (!Utils.validateEmail(data.email)) {
        this.showFormMessage('Please enter a valid email address.', 'error');
        return;
      }

      if (data.message.length < 10) {
        this.showFormMessage('Message must be at least 10 characters.', 'error');
        return;
      }

      submitBtn.innerHTML = 'Sending...';
      submitBtn.disabled = true;

      try {
        if (form.action.includes('formspree.io') && !form.action.includes('your-form-id')) {
          const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
          });
          
          if (response.ok) {
            this.showFormMessage('Thank you! Your message has been sent.', 'success');
            form.reset();
          } else {
            throw new Error('Network response was not ok');
          }
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000));
          this.showFormMessage('Demo mode: In production, this would send your message.', 'success');
          form.reset();
        }
      } catch (error) {
        this.showFormMessage('There was an error sending your message. Please try again.', 'error');
      } finally {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
      }
    });
  },

  showFormMessage(message, type) {
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();

    const form = document.getElementById('contactForm');
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.style.cssText = `
      padding: 12px 16px;
      border-radius: var(--radius-md);
      margin-bottom: 16px;
      font-weight: 500;
      ${type === 'success' ? 'background: #c6f6d5; color: #276749;' : 'background: #fed7d7; color: #c53030;'}
    `;
    messageEl.textContent = message;
    
    form.insertBefore(messageEl, form.firstChild);
    
    setTimeout(() => messageEl.remove(), 5000);
  },

  setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;

    const toggleVisibility = Utils.throttle(() => {
      backToTop.classList.toggle('visible', window.scrollY > 500);
    }, 100);

    window.addEventListener('scroll', toggleVisibility, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
};

document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
