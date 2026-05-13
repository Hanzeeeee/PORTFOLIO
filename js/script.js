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

/* ── CHATBOT ── */
const chatResponses = {
  'hi':        'Hey there! 👋 How can I help you today?',
  'hello':     "Hello! I'm Christ's assistant. What would you like to know?",
  'skills':    'Christ is skilled in HTML/CSS (90%), JavaScript (82%), PHP (75%), Video Editing (95%), Photography (90%), and UI/UX Design (85%). Check the Skills page!',
  'contact':   'You can reach Christ at kagornigaw@gmail.com or +63 950 688 6467. He\'s based in Cebu City, PH.',
  'projects':  'Christ has worked on web systems, video editing, UI/UX design, and photography. Visit the Projects page!',
  'services':  'Services: Website Development, Video Editing, Photography, Photo Editing, and UI/UX Design. Click "Get Started" on any service!',
  'education': 'Christ is a BSIT student at University of Cebu (2023–2027). He graduated high school With Honors from Mandaue City Comprehensive NHS.',
  'hire':      'To hire Christ, email kagornigaw@gmail.com or use the Contact form. He usually responds within 24 hours!',
  'price':     'Plans start at ₱2,500/month (annual) or ₱3,500/month. Visit the Services page and click "Get Started" for pricing details.',
};
const defaultReplies = [
  'Great question! Email Christ directly at kagornigaw@gmail.com for more details.',
  'Try asking me about his skills, projects, services, education, or how to contact him!',
];
let defaultIdx = 0;

function toggleChat() {
  document.getElementById('chatbot')?.classList.toggle('open');
}

function sendChat() {
  const inp  = document.getElementById('chat-input');
  const msgs = document.getElementById('chat-msgs');
  const txt  = inp?.value.trim();
  if (!txt || !msgs) return;
  msgs.innerHTML += `<div class="chat-msg user">${txt}</div>`;
  inp.value = '';
  const key   = Object.keys(chatResponses).find(k => txt.toLowerCase().includes(k));
  const reply = key ? chatResponses[key] : defaultReplies[defaultIdx++ % defaultReplies.length];
  setTimeout(() => {
    msgs.innerHTML += `<div class="chat-msg bot">${reply}</div>`;
    msgs.scrollTop = msgs.scrollHeight;
  }, 700);
  msgs.scrollTop = msgs.scrollHeight;
}

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

/* ── SHARED CHATBOT HTML (injected by each page) ── */
function renderChatbot() {
  const el = document.getElementById('chatbot-widget');
  if (!el) return;
  el.innerHTML = `
    <button id="chatbot-btn" onclick="toggleChat()" title="Chat with assistant">💬</button>
    <div id="chatbot">
      <div class="chat-header">
        <div class="chat-dot"></div>
        <div class="chat-title">CHR ASSISTANT</div>
        <button onclick="toggleChat()" style="margin-left:auto;background:transparent;border:none;color:var(--text3);cursor:pointer;font-size:.9rem">✕</button>
      </div>
      <div class="chat-msgs" id="chat-msgs">
        <div class="chat-msg bot">Hey! 👋 I'm Christ's portfolio assistant. Ask me about his skills, services, or projects!</div>
      </div>
      <div class="chat-input-row">
        <input class="chat-input" id="chat-input" placeholder="Type a message..." onkeydown="if(event.key==='Enter')sendChat()">
        <button class="chat-send" onclick="sendChat()">→</button>
      </div>
    </div>
  `;
}

/* ── RUN ON DOM READY ── */
document.addEventListener('DOMContentLoaded', () => {
  renderFooter();
  renderChatbot();
  revealElements();
});
