
/* -------- reveal on scroll (con script.js) -------- */
.reveal{ opacity:0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease }
.revealed{ opacity:1; transform: translateY(0) }
.delay-1{ transition-delay: .12s }
.delay-2{ transition-delay: .24s }

/* -------- responsive -------- */
@media (max-width: 980px){
  .hero-grid{ grid-template-columns: 1fr }
  .cards{ grid-template-columns: 1fr 1fr }
}
@media (max-width: 680px){
  nav a{ margin-left: 12px }
  .cards{ grid-template-columns: 1fr }
  .site-header .wrap{ height:68px }
  .brand{ font-size:18px }
  .btn.big{ width:100%; text-align:center }
}