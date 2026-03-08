/* ===== Tenex Italy — Main JS ===== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Grid Wipe Loader --- */
  const gridWipe = document.querySelector('.grid-wipe');
  if (gridWipe) {
    const blocks = gridWipe.querySelectorAll('.block');
    gsap.to(blocks, {
      opacity: 0,
      scale: 0.5,
      duration: 0.4,
      stagger: { amount: 0.6, from: 'random' },
      ease: 'power2.in',
      delay: 0.3,
      onComplete: () => {
        document.body.classList.add('loaded');
      }
    });
  }

  /* --- Nav scroll --- */
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  /* --- Hamburger --- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  /* --- Hero word-by-word stagger --- */
  const heroH1 = document.querySelector('.hero h1');
  if (heroH1) {
    const words = heroH1.querySelectorAll('.word');
    gsap.to(words, {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.12,
      ease: 'power3.out',
      delay: 1.2
    });
  }

  /* --- Hero subtitle + body fade in --- */
  const heroEls = document.querySelectorAll('.hero-eyebrow, .hero-rule, .hero-subtitle, .hero-body, .hero .btn');
  if (heroEls.length) {
    gsap.from(heroEls, {
      opacity: 0,
      y: 30,
      duration: 0.8,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 2
    });
  }

  /* --- Hero stats bar fade in --- */
  const heroStatsBar = document.querySelector('.hero-stats-bar');
  if (heroStatsBar) {
    gsap.from(heroStatsBar, {
      opacity: 0,
      y: 20,
      duration: 0.8,
      ease: 'power2.out',
      delay: 2.8
    });
  }

  /* --- Scroll-triggered animations --- */
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    /* Bento cards entrance */
    document.querySelectorAll('.bento-card').forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    /* Steps entrance */
    document.querySelectorAll('.step').forEach((step, i) => {
      gsap.from(step, {
        opacity: 0,
        x: -30,
        duration: 0.6,
        delay: i * 0.1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: step,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    /* AI scary cards */
    document.querySelectorAll('.ai-scary-card').forEach(card => {
      gsap.from(card, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });

    /* Stats band numbers */
    document.querySelectorAll('.stats-band-item').forEach(item => {
      gsap.from(item, {
        opacity: 0,
        y: 30,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      });
    });

    /* Disruption type-in effect */
    const disruptionText = document.querySelector('.disruption-text');
    if (disruptionText) {
      const originalText = disruptionText.textContent;
      disruptionText.innerHTML = '';
      [...originalText].forEach(char => {
        const span = document.createElement('span');
        span.classList.add('type-char');
        span.textContent = char;
        disruptionText.appendChild(span);
      });
      gsap.to('.disruption-text .type-char', {
        opacity: 1,
        stagger: 0.008,
        ease: 'none',
        scrollTrigger: {
          trigger: '.disruption',
          start: 'top 70%',
          end: 'bottom 60%',
          scrub: 1
        }
      });
    }

    /* Generic fade-in for sections */
    document.querySelectorAll('.faq-header, .testimonials-header, .cta-inner, .ai-scary-headline, .pe-split, .prefooter-cta, .page-hero, .page-section').forEach(el => {
      gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  /* --- FAQ Accordion --- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const answer = item.querySelector('.faq-answer');
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-answer').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* --- Swiper testimonials (mobile only) --- */
  if (typeof Swiper !== 'undefined') {
    new Swiper('.testimonials-mobile .swiper', {
      slidesPerView: 1,
      spaceBetween: 24,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      }
    });
  }

});
