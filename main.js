// Добавьте этот скрипт перед закрывающим тегом </body>
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navMenu = document.querySelector('.header__nav');
    
    burgerMenu.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      
      // Блокировка прокрутки при открытом меню
      if (navMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    });
    
    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('.header__nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  });