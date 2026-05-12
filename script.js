const cur=document.getElementById('cursor');
const trail=document.getElementById('cursor-trail');
document.addEventListener('mousemove',e=>{
  cur.style.left=e.clientX+'px';
  cur.style.top=e.clientY+'px';
  setTimeout(()=>{trail.style.left=e.clientX+'px';trail.style.top=e.clientY+'px'},60);
});

const pc=document.getElementById('particles');
for(let i=0;i<50;i++){
  const p=document.createElement('div');
  p.className='particle';
  p.style.left=Math.random()*100+'vw';
  p.style.animationDuration=(Math.random()*20+15)+'s';
  p.style.animationDelay=(-Math.random()*20)+'s';
  p.style.setProperty('--drift',(Math.random()*200-100)+'px');
  p.style.opacity=Math.random()*.4+.1;
  pc.appendChild(p);
}

setTimeout(()=>{
  document.getElementById('loading').classList.add('hide');
  setTimeout(()=>document.getElementById('loading').remove(),900);
  startTypewriter();
},2500);

window.addEventListener('scroll',()=>{
  const h=document.documentElement.scrollHeight-window.innerHeight;
  document.getElementById('scroll-prog').style.width=(window.scrollY/h*100)+'%';
  updateNav();
  revealElements();
  animateSkills();
});

function updateNav(){
  const sections=['home','about','projects','education','services','skills','contact'];
  sections.forEach(id=>{
    const el=document.getElementById(id);
    if(!el)return;
    const r=el.getBoundingClientRect();
    const link=document.querySelector(`[data-section="${id}"]`);
    if(link){
      if(r.top<=100&&r.bottom>=100)link.classList.add('active');
      else link.classList.remove('active');
    }
  });
}

function scrollTo(id){
  document.getElementById(id)?.scrollIntoView({behavior:'smooth'});
  return false;
}

function toggleMobileNav(){
  document.getElementById('mobile-nav').classList.toggle('open');
}

const roles=['Web Developer','Video Editor','UI/UX Designer','Photographer','Content Creator'];
let ri=0,ci=0,deleting=false;
function startTypewriter(){
  const el=document.getElementById('typewriter');
  if(!el)return;
  const curRole=roles[ri];
  if(!deleting){
    el.textContent=curRole.substring(0,ci+1);
    ci++;
    if(ci===curRole.length){deleting=true;setTimeout(startTypewriter,1800);return;}
  } else {
    el.textContent=curRole.substring(0,ci-1);
    ci--;
    if(ci===0){deleting=false;ri=(ri+1)%roles.length;}
  }
  setTimeout(startTypewriter,deleting?60:100);
}

function revealElements(){
  document.querySelectorAll('.reveal').forEach(el=>{
    const r=el.getBoundingClientRect();
    if(r.top<window.innerHeight-80)el.classList.add('visible');
  });
}
revealElements();

const projects=[
  {id:1,title:'Student Portal System',cat:'web',icon:'🌐',badge:'PHP / MySQL',desc:'Full-stack student information system with enrollment, grades, and attendance tracking.',tech:['PHP','MySQL','HTML/CSS','JavaScript'],status:'Academic Project'},
  {id:2,title:'PSITS Events Reel',cat:'video',icon:'🎬',badge:'Video Edit',desc:'Highlight reel for PSITS events including orientation, intramurals, and extravaganza.',tech:['Premiere Pro','After Effects'],status:'Organization Work'},
  {id:3,title:'E-Commerce UI Design',cat:'ui',icon:'🎨',badge:'UI/UX',desc:'Modern e-commerce dashboard UI with dark theme, product listings, and checkout flow.',tech:['Figma','Prototype'],status:'Freelance'},
  {id:4,title:'Event Photography — CESAFI',cat:'photo',icon:'📸',badge:'Photography',desc:'Event coverage photography for CESAFI Esports League tournament.',tech:['Photography','Lightroom'],status:'Organization Work'},
  {id:5,title:'WordPress Company Site',cat:'web',icon:'🌐',badge:'WordPress',desc:'Professional company website built with WordPress, custom theme, and SEO optimization.',tech:['WordPress','PHP','CSS'],status:'Freelance'},
  {id:6,title:'Esports Promo Video',cat:'video',icon:'🎬',badge:'Motion Graphics',desc:'Promotional video with motion graphics for UCMN MLBB Tournament.',tech:['Premiere Pro','After Effects','Illustrator'],status:'Freelance'},
  {id:7,title:'Portfolio UI Mockup',cat:'ui',icon:'🎨',badge:'UI Design',desc:'Personal portfolio redesign mockup with glassmorphism and dark neon aesthetic.',tech:['Figma','Adobe XD'],status:'Personal'},
  {id:8,title:'Portrait Photography',cat:'photo',icon:'📸',badge:'Portrait',desc:'Professional portrait photography for events, profiles, and promotional materials.',tech:['Photography','Lightroom','Photoshop'],status:'Freelance'},
  {id:9,title:'Java Inventory System',cat:'web',icon:'💻',badge:'Java',desc:'Desktop inventory management system built with Java for academic project.',tech:['Java','JavaFX','MySQL'],status:'Academic'},
];

let currentFilter='all';
function renderProjects(){
  const grid=document.getElementById('projects-grid');
  const filtered=currentFilter==='all'?projects:projects.filter(p=>p.cat===currentFilter);
  grid.innerHTML=filtered.map(p=>`
    <div class="proj-card" onclick="openProject(${p.id})">
      <div class="proj-thumb">
        <div class="proj-thumb-icon">${p.icon}</div>
        <div class="proj-badge">${p.badge}</div>
      </div>
      <div class="proj-body">
        <div class="proj-title">${p.title}</div>
        <div class="proj-desc">${p.desc}</div>
        <div class="tag-row">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
        <div class="proj-links">
          <a class="proj-link" href="#" onclick="event.stopPropagation()">GitHub</a>
          <a class="proj-link" href="#" onclick="event.stopPropagation()">Live Demo</a>
        </div>
      </div>
    </div>
  `).join('');
}

function filterProjects(cat,btn){
  currentFilter=cat;
  document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderProjects();
}

function openProject(id){
  const p=projects.find(x=>x.id===id);
  document.getElementById('modal-content').innerHTML=`
    <div class="modal-badge">${p.badge}</div>
    <div class="modal-title">${p.icon} ${p.title}</div>
    <div class="modal-desc">${p.desc}</div>
    <div class="modal-subtitle">TECH STACK</div>
    <div class="tag-row">${p.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <div class="modal-status">STATUS: <span>${p.status}</span></div>
    <div class="modal-actions">
      <a class="btn btn-primary" href="#">GitHub →</a>
      <a class="btn btn-ghost" href="#">Live Demo →</a>
    </div>
  `;
  document.getElementById('project-modal').classList.add('show');
}

renderProjects();

const services=[
  {icon:'🌐',title:'Website Development',desc:'Professional websites using WordPress — custom themes, plugins, SEO, and ongoing maintenance.',tech:['WordPress','PHP','MySQL','HTML5','CSS3','JavaScript','jQuery']},
  {icon:'🎬',title:'Video Editing',desc:'High-quality video production for events, promos, social media, and corporate content.',tech:['Premiere Pro','After Effects','DaVinci Resolve']},
  {icon:'📸',title:'Photography',desc:'Professional photography for events, portraits, products, and promotional campaigns.',tech:['DSLR/Mirrorless','Lightroom','Photoshop']},
  {icon:'🖼',title:'Photo Editing',desc:'Advanced photo retouching, color grading, compositing, and graphic design.',tech:['Photoshop','Lightroom','Illustrator']},
  {icon:'🎨',title:'UI/UX Design',desc:'Modern, user-centered interface design with wireframes, prototypes, and design systems.',tech:['Figma','Adobe XD','Prototype']},
];

const svcGrid=document.getElementById('services-grid');
svcGrid.innerHTML=services.map(s=>`
  <div class="svc-card">
    <div class="svc-icon">${s.icon}</div>
    <div class="svc-title">${s.title}</div>
    <div class="svc-desc">${s.desc}</div>
    <div class="tech-tags">${s.tech.map(t=>`<span class="tag">${t}</span>`).join('')}</div>
    <button class="btn btn-primary" onclick="openPayment('${s.title}')">Get Started →</button>
  </div>
`).join('');

function openPayment(svc){
  document.getElementById('payment-content').innerHTML=`
    <div class="modal-badge">SERVICE PLAN</div>
    <div class="modal-title">${svc}</div>
    <div class="modal-desc">Choose a plan that works for you:</div>
    <div class="plan-grid">
      <div class="plan-card selected" id="plan-monthly" onclick="selectPlan('monthly')">
        <div class="plan-name">Monthly Plan</div>
        <div class="plan-price">₱3,500</div>
        <div class="plan-period">/ month</div>
        <div class="plan-feat">• Flexible commitment<br>• Cancel anytime<br>• Monthly revisions<br>• Email support</div>
      </div>
      <div class="plan-card" id="plan-annual" onclick="selectPlan('annual')">
        <div class="plan-name">Annual Plan</div>
        <div class="plan-price">₱2,500</div>
        <div class="plan-period">/ month (billed yearly)</div>
        <div class="plan-feat">• 29% savings<br>• Priority support<br>• Unlimited revisions<br>• Dedicated manager</div>
        <div class="plan-best">★ BEST VALUE</div>
      </div>
    </div>
    <button class="btn btn-primary" onclick="alert('This is a UI demo. Contact Christ at kagornigaw@gmail.com to proceed!')">⚡ Proceed to Checkout</button>
    <div class="modal-note">UI DEMO ONLY — Contact directly to arrange payment</div>
  `;
  document.getElementById('payment-modal').classList.add('show');
}

function selectPlan(plan){
  document.getElementById('plan-monthly').classList.toggle('selected',plan==='monthly');
  document.getElementById('plan-annual').classList.toggle('selected',plan==='annual');
}

function closeModal(id){document.getElementById(id).classList.remove('show');}

const progSkills=[
  {name:'HTML / CSS',pct:90},{name:'JavaScript',pct:82},{name:'PHP',pct:75},{name:'Java',pct:70},{name:'Python',pct:65},{name:'C / C#',pct:60},{name:'React',pct:75},
];
const creativeSkills=[
  {name:'Video Editing',pct:95},{name:'Photography',pct:90},{name:'UI/UX Design',pct:85},{name:'Photo Editing',pct:88},{name:'Graphic Design',pct:80},{name:'Leadership',pct:85},
];

function renderSkills(arr,id){
  document.getElementById(id).innerHTML=arr.map(s=>`
    <div class="skill-bar-wrap">
      <div class="skill-bar-header"><span class="skill-name">${s.name}</span><span class="skill-pct">${s.pct}%</span></div>
      <div class="skill-track"><div class="skill-fill" data-pct="${s.pct}"></div></div>
    </div>
  `).join('');
}
renderSkills(progSkills,'prog-skills');
renderSkills(creativeSkills,'creative-skills');

let skillsAnimated=false;
function animateSkills(){
  if(skillsAnimated)return;
  const section=document.getElementById('skills-section');
  if(!section)return;
  const r=section.getBoundingClientRect();
  if(r.top<window.innerHeight-100){
    skillsAnimated=true;
    document.querySelectorAll('.skill-fill').forEach(el=>{
      el.style.width=el.dataset.pct+'%';
    });
  }
}

const faqs=[
  {q:"What's your typical response time?",a:"I usually respond to emails within 24 hours during business days. For urgent matters, feel free to reach out via phone."},
  {q:"Do you work on weekends?",a:"I'm available for urgent matters on weekends, but prefer to discuss project details and agreements during weekdays for better communication."},
  {q:"What types of projects do you take on?",a:"I work on web applications, WordPress sites, video editing, photography, UI/UX design, and full-stack development projects of various sizes."},
  {q:"Do you offer consulting services?",a:"Yes, I provide technical consulting, code reviews for existing projects, and creative direction for multimedia content. Let's talk!"},
];

document.getElementById('faq-list').innerHTML=faqs.map((f,i)=>`
  <div class="faq-item" id="faq-${i}">
    <div class="faq-q" onclick="toggleFaq(${i})">
      <span>${f.q}</span>
      <span class="faq-chevron">▾</span>
    </div>
    <div class="faq-a"><div class="faq-a-text">${f.a}</div></div>
  </div>
`).join('');

function toggleFaq(i){
  document.querySelector(`#faq-${i}`).classList.toggle('open');
}

function sendMsg(){
  const name=document.getElementById('contact-name').value;
  const email=document.getElementById('contact-email').value;
  if(!name||!email){alert('Please fill in your name and email.');return;}
  document.getElementById('msg-success').style.display='block';
  ['contact-name','contact-email','contact-subject','contact-msg'].forEach(id=>document.getElementById(id).value='');
  setTimeout(()=>document.getElementById('msg-success').style.display='none',4000);
}

const chatResponses={
  'hi':['Hey there! 👋 How can I help you today?'],
  'hello':['Hello! I\'m Christ\'s assistant. What would you like to know?'],
  'skills':['Christ is skilled in: HTML/CSS, JavaScript, PHP, Java, Python, React, Video Editing (95%), Photography, and UI/UX Design. Check the Skills section!'],
  'contact':['You can reach Christ at kagornigaw@gmail.com or +63 950 688 6467. He\'s based in Cebu City, PH.'],
  'projects':['Christ has worked on web systems, video editing, UI/UX design, and photography. Check the Projects section!'],
  'services':['Services include: Website Development, Video Editing, Photography, Photo Editing, and UI/UX Design. Click "Get Started" on any service card!'],
  'education':['Christ is currently a BSIT student at University of Cebu (2023-2027). He graduated high school with honors from Mandaue City Comprehensive NHS.'],
  'hire':['To hire Christ, send an email to kagornigaw@gmail.com or use the Contact form. He usually responds within 24 hours!'],
};
const defaultReply=['That\'s a great question! You can email Christ directly at kagornigaw@gmail.com for more details.','Try asking me about his skills, projects, services, or how to contact him!'];

function toggleChat(){
  document.getElementById('chatbot').classList.toggle('open');
}

function sendChat(){
  const inp=document.getElementById('chat-input');
  const msgs=document.getElementById('chat-msgs');
  const txt=inp.value.trim();
  if(!txt)return;
  msgs.innerHTML+=`<div class="chat-msg user">${txt}</div>`;
  inp.value='';
  const key=Object.keys(chatResponses).find(k=>txt.toLowerCase().includes(k));
  const reply=key?chatResponses[key][0]:defaultReply[Math.floor(Math.random()*defaultReply.length)];
  setTimeout(()=>{
    msgs.innerHTML+=`<div class="chat-msg bot">${reply}</div>`;
    msgs.scrollTop=msgs.scrollHeight;
  },700);
  msgs.scrollTop=msgs.scrollHeight;
}

