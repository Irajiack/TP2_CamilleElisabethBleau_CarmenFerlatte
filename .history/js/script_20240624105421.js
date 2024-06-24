  // menu toggle

  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    const closeIcon = document.querySelector('.close-icon');

    menuToggle.addEventListener('click', function () {
      menu.classList.toggle('hidden');
      menuIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
  });


// active-link
  
document.addEventListener('DomContentLoaded', (event) => {
  const currentPageUrl = window.location.href;
  const links = document.querySelectorAll('a');

  links.forEach(link =)
  }
