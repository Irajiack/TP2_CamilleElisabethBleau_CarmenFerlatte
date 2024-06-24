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
  
document.addEventListener('DOMContentLoaded', (event) => {
  const currentPageUrl = window.location.href;
  const links = document.querySelectorAll('a.nav-link'); // classe TailwindCss des liens du menu pour activer le lien courant

  links.forEach(link => {
    if (link.href === currentPageUrl) {
      link.classList.add('underline'); // classe TailwindCSS
    }
  });
});


// validate form

function validateForm() {
  const email = document.getElementById('email')
}

