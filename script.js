// Año dinámico en el footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.querySelector('.nav__toggle');
const menu = document.querySelector('.nav__menu');
toggle?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
});

// Cerrar menú al hacer click en un link (mobile)
menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => menu.classList.remove('is-open'));
});

// Animación reveal con IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => io.observe(el));

// Scroll suave para anclas internas
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const href = link.getAttribute('href');
    if(href && href.length > 1){
      e.preventDefault();
      const to = document.querySelector(href);
      to?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', href);
    }
  });
});
