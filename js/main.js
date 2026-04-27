// CONTACT FORM MODAL
function openContactModal() {
  document.getElementById('contactOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeContactModal(e) {
  if (e && e.target !== document.getElementById('contactOverlay') && !e.target.classList.contains('modal-close')) return;
  document.getElementById('contactOverlay').classList.remove('open');
  document.body.style.overflow = '';
}

function submitContactForm(e) {
  e.preventDefault();
  document.getElementById('contactForm').style.display = 'none';
  document.getElementById('contactSuccess').classList.add('visible');
  setTimeout(function() {
    closeContactModal();
    setTimeout(function() {
      document.getElementById('contactForm').style.display = '';
      document.getElementById('contactForm').reset();
      document.getElementById('contactSuccess').classList.remove('visible');
    }, 500);
  }, 3000);
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeContactModal();
    closeModal();
  }
});

// SERVICE DATA
var services = [
  {
    title: "Prevenzione e Difesa",
    subtitle: "Crisis & Security Management",
    img: "images/prevenzione-e-difesa.jpg",
    html: '<p>La Dynamism S.r.l. è in grado, grazie ai propri Dirigenti Qualificati, di analizzare, programmare e valutare l\'efficacia della sicurezza per la tua Azienda attraverso test di vulnerabilità mirati e approfonditi.</p><p>Il nostro approccio prevede un\'analisi completa delle infrastrutture fisiche e tecnologiche, individuando criticità e punti deboli prima che possano essere sfruttati.</p><div class="modal-divider"></div><ul><li>Analisi e valutazione dei rischi aziendali</li><li>Test di vulnerabilità per aziende e residenze private</li><li>Aggiornamento protocolli di emergenza secondo le ultime tecnologie</li><li>Innalzamento dei livelli di sicurezza attiva e passiva</li><li>Consulenza continuativa per il mantenimento degli standard</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  },
  {
    title: "Bonifiche Ambientali",
    subtitle: "Ricerca Strumentazioni Elettroniche e Microspie",
    img: "images/bonifiche-ambientali.jpg",
    html: '<p>Il servizio di bonifica ambientale è finalizzato alla salvaguardia del patrimonio economico, scientifico e tecnologico, sia personale che aziendale. Utilizziamo strumenti di ultima generazione per garantire risultati certi e affidabili.</p><p>Il nostro team è specializzato nel monitoraggio, valorizzazione e gestione di impianti tecnologici, sistemi di allarme, videosorveglianza, telecontrollo e ascolto.</p><div class="modal-divider"></div><ul><li>Ricerca di microfoni e dispositivi di ascolto nascosti</li><li>Individuazione di telecamere e sistemi di videosorveglianza occulti</li><li>Rilevazione di dispositivi di localizzazione GPS</li><li>Bonifica di uffici, sale riunioni, abitazioni e veicoli</li><li>Strumentazione di ultima generazione costantemente aggiornata</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  },
  {
    title: "Investigazioni Private",
    subtitle: "Servizi Investigativi Privati e Aziendali",
    img: "images/investigazioni-private.jpg",
    html: '<p>Nel mondo dell\'investigazione privata e aziendale, la Dynamism S.r.l. concentra la propria attenzione nel supportare e mettersi al servizio di numerosi Studi Legali sul territorio nazionale, fornendo al cliente gli strumenti necessari per raggiungere i propri obiettivi.</p><p>L\'obiettivo finale è sempre dichiarato nel conferimento investigativo, garantendo trasparenza e professionalità in ogni fase del lavoro.</p><div class="modal-divider"></div><ul><li>Investigazioni patrimoniali e commerciali</li><li>Supporto a studi legali su tutto il territorio nazionale</li><li>Indagini su infedeltà coniugale e affidamento minori</li><li>Investigazioni aziendali su dipendenti infedeli</li><li>Raccolta prove documentali e testimoniali</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  },
  {
    title: "Indagini Penali",
    subtitle: "Investigazioni di Carattere Penale",
    img: "images/indagini-penali.jpg",
    html: '<p>Le indagini di investigazione penale sono servizi rivolti verso persone o aziende che hanno sporto denuncia presso le autorità competenti. La Dynamism S.r.l. può ricevere incarico direttamente dalla Procura di competenza o procedere parallelamente per conto del cliente.</p><p>Le prove investigative penali rappresentano un elemento fondamentale in fase giudiziaria e devono essere raccolte con la massima cura e professionalità per garantirne la validità processuale.</p><div class="modal-divider"></div><ul><li>Incarichi diretti dalla Procura di competenza</li><li>Indagini parallele per conto del cliente</li><li>Raccolta di prove con validità processuale</li><li>Collaborazione con le autorità nella massima disponibilità</li><li>Supporto completo in tutte le fasi del procedimento giudiziario</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  },
  {
    title: "Portierato e Controllo",
    subtitle: "Addetti al Controllo, Portierato e Reception",
    img: "images/portierato-e-controllo.jpg",
    html: '<p>La Dynamism S.r.l. svolge servizi di controllo ed accoglienza in diverse localizzazioni sul territorio nazionale, mettendo a disposizione personale qualificato e abilitato alle normative che prevedono tale svolgimento.</p><p>Tutto il personale impiegato è in possesso delle certificazioni necessarie, tra cui abilitazione al primo soccorso e antincendio, garantendo un servizio sicuro e professionale.</p><div class="modal-divider"></div><ul><li>Controllo accessi e gestione visitatori</li><li>Servizio di reception e accoglienza qualificata</li><li>Portierato diurno e notturno</li><li>Personale abilitato Primo Soccorso e Antincendio</li><li>Copertura su tutto il territorio nazionale</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  },
  {
    title: "Controllo Minori",
    subtitle: "Servizio Dedicato alle Famiglie",
    img: "images/controllo-minori.jpg",
    html: '<p>Il Controllo Minori è un servizio rivolto alle famiglie che vogliono avere maggiori garanzie sulle frequentazioni e abitudini dei propri figli. In un\'epoca in cui i pericoli possono essere ovunque, offriamo un supporto discreto e professionale.</p><p>Il servizio può avvalersi anche di strumentazioni elettroniche personalizzate alle finalità specifiche. La riservatezza è elemento fondamentale per lo svolgimento di tali servizi e valore aggiunto per la salvaguardia della famiglia.</p><div class="modal-divider"></div><ul><li>Monitoraggio discreto delle frequentazioni</li><li>Verifica delle abitudini e degli spostamenti</li><li>Strumentazioni elettroniche personalizzate</li><li>Riservatezza assoluta a tutela della famiglia</li><li>Report dettagliati e documentati</li></ul><button class="modal-cta" onclick="closeModal()">Richiedi Consulenza</button>'
  }
];

// MODAL
function openModal(i) {
  var s = services[i];
  var o = document.getElementById('modalOverlay');
  document.getElementById('modalImg').src = s.img;
  document.getElementById('modalImg').alt = s.title;
  document.getElementById('modalBody').innerHTML =
    '<h2>' + s.title + '</h2>' +
    '<span class="modal-subtitle">' + s.subtitle + '</span>' +
    '<div class="modal-divider"></div>' +
    s.html;
  o.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modalOverlay') && !e.target.classList.contains('modal-close')) return;
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}


// PRELOADER
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hidden');
  }, 1200);
});

// MOBILE MENU
function toggleMenu() {
  var m = document.getElementById('mobileMenu');
  var b = document.getElementById('hamburger');
  m.classList.toggle('open');
  b.classList.toggle('active');
  document.body.style.overflow = m.classList.contains('open') ? 'hidden' : '';
}

// NAV SCROLL
var nav = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  nav.classList.toggle('scrolled', window.scrollY > 80);
});

// NAV LINKS STAGGER
setTimeout(function() {
  var links = document.querySelectorAll('.nav-links a');
  links.forEach(function(l, i) {
    setTimeout(function() { l.classList.add('visible'); }, 1400 + i * 100);
  });
}, 0);

// CURSOR GLOW
var glow = document.getElementById('cursorGlow');
if (window.innerWidth > 768) {
  document.addEventListener('mousemove', function(e) {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
  });
}

// SCROLL REVEAL
var reveals = document.querySelectorAll('.reveal');
var observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      if (entry.target.classList.contains('stat')) {
        var num = entry.target.querySelector('.stat-num[data-target]');
        if (num && !num.dataset.animated) {
          animateCounter(num);
          num.dataset.animated = 'true';
        }
      }
      if (entry.target.classList.contains('section-label')) {
        entry.target.classList.add('line-active');
      }
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

reveals.forEach(function(r) { observer.observe(r); });

// COUNTER
function animateCounter(el) {
  var target = parseInt(el.dataset.target);
  var suffix = el.dataset.suffix || '';
  var startTime = null;
  function step(ts) {
    if (!startTime) startTime = ts;
    var p = Math.min((ts - startTime) / 1500, 1);
    el.textContent = Math.floor((1 - Math.pow(1 - p, 3)) * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

// PARALLAX
var pBg = document.getElementById('parallaxBg');
window.addEventListener('scroll', function() {
  if (pBg) {
    var r = pBg.parentElement.getBoundingClientRect();
    pBg.style.transform = 'translateY(' + r.top * 0.3 + 'px)';
  }
});
