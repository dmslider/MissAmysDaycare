// Shared nav HTML
function renderNav(activePage) {
  const pages = [
    { href: 'about.html', label: 'About' },
    { href: 'services.html', label: 'Services & Fees' },
    { href: 'daily-routine.html', label: 'Daily Routine' },
    { href: 'sen.html', label: 'SEN' },
    { href: 'gallery.html', label: 'Gallery' },
    { href: 'waiting-list.html', label: 'Waiting List' },
  ];

  const links = pages.map(p =>
    `<li><a href="${p.href}" class="${activePage === p.href ? 'active' : ''}">${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}">${p.label}</a>`
  ).join('');

  document.getElementById('nav-placeholder').innerHTML = `
    <nav>
      <a href="index.html" class="logo">
        <div class="logo-mark"><img src="MISSAMY_LOGO.png" alt="Miss Amy's Daycare Logo"></div>
        <div class="logo-text">
          <span>Miss Amy's Daycare</span>
          <span>Seek God · Grow in Knowledge</span>
        </div>
      </a>
      <ul class="nav-links">
        ${links}
        <li><a href="book-a-visit.html" class="nav-cta ${activePage === 'book-a-visit.html' ? 'active' : ''}">Book a Visit</a></li>
        <li><a href="https://wa.me/447700000000" target="_blank" class="nav-whatsapp">&#128172; WhatsApp</a></li>
      </ul>
      <button class="hamburger" onclick="toggleMobile()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
    <div class="mobile-menu" id="mobileMenu">
      ${mobileLinks}
      <a href="book-a-visit.html" style="color:var(--yellow-light)">Book a Visit</a>
      <a href="https://wa.me/447700000000" target="_blank" style="color:#25D366">&#128172; WhatsApp Us</a>
    </div>
    <a href="https://wa.me/447700000000" target="_blank" class="wa-float" title="Chat on WhatsApp" aria-label="WhatsApp">&#128172;</a>
  `;
}

// Shared footer HTML
function renderFooter() {
  document.getElementById('footer-placeholder').innerHTML = `
    <footer>
      <div class="footer-grid">
        <div class="footer-brand">
          <a href="index.html" class="footer-logo">
            <div class="footer-logo-mark"><img src="MISSAMY_LOGO.png" alt="Miss Amy's Daycare Logo"></div>
            <div class="footer-logo-text">
              <strong>Miss Amy's Daycare</strong>
              <span>Seek God · Grow in Knowledge</span>
            </div>
          </a>
          <p>A professional, Ofsted-registered early years setting in Surrey Quays, SE16 — nurturing children from 3 months to school age.</p>
          <div class="social-links">
            <a href="https://instagram.com/missAmysDaycare" target="_blank" class="social-btn" title="Instagram">&#128247;</a>
            <a href="https://facebook.com/missAmysDaycare" target="_blank" class="social-btn" title="Facebook">&#128077;</a>
            <a href="https://tiktok.com/@missAmysDaycare" target="_blank" class="social-btn" title="TikTok">&#127926;</a>
            <a href="https://wa.me/447700000000" target="_blank" class="social-btn" title="WhatsApp">&#128172;</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Setting</h4>
          <ul>
            <li><a href="about.html">About Miss Amy</a></li>
            <li><a href="services.html">Services &amp; Fees</a></li>
            <li><a href="daily-routine.html">Daily Routine</a></li>
            <li><a href="gallery.html">Gallery</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Parents</h4>
          <ul>
            <li><a href="book-a-visit.html">Book a Visit</a></li>
            <li><a href="waiting-list.html">Waiting List</a></li>
            <li><a href="sen.html">SEN &amp; Inclusion</a></li>
            <li><a href="index.html#testimonials">Reviews</a></li>
            <li><a href="index.html#faqs">FAQs</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="policies.html">Safeguarding Policy</a></li>
            <li><a href="policies.html#gdpr">Privacy &amp; GDPR</a></li>
            <li><a href="policies.html#complaints">Complaints Policy</a></li>
            <li><a href="policies.html#fees">Fees Policy</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&#169; 2025 Miss Amy's Daycare. All rights reserved.</span>
        <span>Surrey Quays, SE16 · Ofsted Registered · <a href="policies.html" style="color:inherit">Privacy Policy</a></span>
        <span style="color:rgba(255,255,255,0.2);font-size:11px;margin-left:auto;">Designed &amp; built by <a href="#" style="color:rgba(200,145,26,0.5);text-decoration:none;transition:color 0.2s;" onmouseover="this.style.color='#c8911a'" onmouseout="this.style.color='rgba(200,145,26,0.5)'">Solvvspace</a></span>
      </div>
    </footer>
  `;
}

// Mobile menu toggle
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Fade in observer
function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.08 });
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Form submit handler
function handleFormSubmit(e, successId) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  btn.textContent = 'Submitted successfully!';
  btn.style.background = '#4ade80';
  btn.style.color = '#065f46';
  btn.disabled = true;
  if (successId) {
    document.getElementById(successId).classList.add('show');
  }
}
