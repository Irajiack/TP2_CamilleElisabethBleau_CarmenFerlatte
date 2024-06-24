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
  let email = document.getElementById('email').value;
  let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse courriel valide.");
    return false; // pour empêcher le formulaire de se soumettre
  }

  return true; // pour permettre le formulaire de se soumettre si le courriel est valide

}


