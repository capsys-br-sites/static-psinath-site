// ==========================================================================
// JAVASCRIPT - SITE NATHALIA MELO (PSICÓLOGA)
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualizar ano no rodapé automaticamente
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Menu Mobile Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const icon = mobileToggle.querySelector('i');
      if (icon) {
        if (navMenu.classList.contains('open')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-xmark');
        } else {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      }
    });

    // Fechar menu mobile ao clicar em um link
    navMenu.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        const icon = mobileToggle.querySelector('i');
        if (icon) {
          icon.classList.remove('fa-xmark');
          icon.classList.add('fa-bars');
        }
      });
    });
  }

  // 3. FAQ Accordion (Perguntas Frequentes)
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Fecha todos os outros itens para um comportamento sanfona limpo
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
      });

      // Alterna o item clicado
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 4. Efeito de Sombra e Redução no Header ao Rolar
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.08)';
    } else {
      header.style.boxShadow = 'none';
    }
  });
});
