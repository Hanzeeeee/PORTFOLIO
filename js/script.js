/* ============================================================
   Christ Hanzen Rallos — Portfolio
   Shared JavaScript (runs on every page)
   ============================================================ */

/* ── CUSTOM CURSOR ── */
(function initCursor() {
  const cur = document.getElementById('cursor');
  const trail = document.getElementById('cursor-trail');
  if (!cur || !trail) return;
  document.addEventListener('mousemove', e => {
    cur.style.left = e.clientX + 'px';
    cur.style.top  = e.clientY + 'px';
    setTimeout(() => {
      trail.style.left = e.clientX + 'px';
      trail.style.top  = e.clientY + 'px';
    }, 60);
  });
})();

/* ── FLOATING PARTICLES ── */
(function initParticles() {
  const pc = document.getElementById('particles');
  if (!pc) return;
  for (let i = 0; i < 50; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + 'vw';
    p.style.animationDuration = (Math.random() * 20 + 15) + 's';
    p.style.animationDelay = (-Math.random() * 20) + 's';
    p.style.setProperty('--drift', (Math.random() * 200 - 100) + 'px');
    p.style.opacity = (Math.random() * 0.4 + 0.1).toString();
    pc.appendChild(p);
  }
})();

/* ── LOADING SCREEN ── */
function initLoading(callback) {
  const screen = document.getElementById('loading');
  if (!screen) { if (callback) callback(); return; }
  setTimeout(() => {
    screen.classList.add('hide');
    setTimeout(() => screen.remove(), 900);
    if (callback) callback();
  }, 2000);
}

/* ── SCROLL PROGRESS BAR ── */
(function initScrollProgress() {
  const bar = document.getElementById('scroll-prog');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.width = (window.scrollY / h * 100) + '%';
  });
})();

/* ── ACTIVE NAV LINK (highlight current page) ── */
(function highlightNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, #mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href && (href === page || (page === 'index.html' && href === 'index.html'))) {
      link.classList.add('active');
    }
  });
})();

/* ── MOBILE NAV TOGGLE ── */
function toggleMobileNav() {
  document.getElementById('mobile-nav').classList.toggle('open');
}

/* ── SCROLL REVEAL ── */
function revealElements() {
  document.querySelectorAll('.reveal').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealElements);
document.addEventListener('DOMContentLoaded', revealElements);

/* ── MODAL HELPERS ── */
function closeModal(id) {
  document.getElementById(id)?.classList.remove('show');
}

/* ── FLOWISE CHAT WIDGET ── */
// The official Flowise embed widget is loaded via each HTML page's module script.
// This frontend no longer uses the old local chat widget UI.

/* ── SHARED FOOTER HTML (injected by each page) ── */
function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  el.innerHTML = `
    <div class="footer-grid">
      <div>
        <div class="footer-logo">CHR<span style="color:var(--text3)">.</span></div>
        <div style="font-size:.82rem;color:var(--text2);line-height:1.7">
          Developer. Creator. Designer.<br>Building digital experiences with code and creativity.
        </div>
      </div>
      <div>
        <div class="footer-title">Navigation</div>
        <ul class="footer-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="projects.html">Projects</a></li>
          <li><a href="education.html">Education</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="skills.html">Skills</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Services</div>
        <ul class="footer-links">
          <li><a href="services.html">Website Development</a></li>
          <li><a href="services.html">Video Editing</a></li>
          <li><a href="services.html">Photography</a></li>
          <li><a href="services.html">Photo Editing</a></li>
          <li><a href="services.html">UI/UX Design</a></li>
        </ul>
      </div>
      <div>
        <div class="footer-title">Contact</div>
        <ul class="footer-links">
          <li><a href="mailto:kagornigaw@gmail.com">kagornigaw@gmail.com</a></li>
          <li><a href="tel:+639506886467">+63 950 688 6467</a></li>
          <li style="color:var(--text3);font-size:.82rem;padding:.2rem 0">Basak Mandaue, Cebu City</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2020 - 2030 Christ Hanzen Rallos. All rights reserved.</span>
      <span>Built with ❤ + ⚡</span>
    </div>
  `;
}

/* ── RUN ON DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
  revealElements();
});
