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


const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => 
{
  header.addEventListener("click", function () 
  {
      const accordionContent = header.parentElement.querySelector(".accordion-content");
      let accordionMaxHeight = accordionContent.style.maxHeight;

      if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) 
      {
        accordionContent.style.maxHeight = `${accordionContent.scrollHeight + 32}px`;
        header.querySelector(".fas").classList.remove("fa-chevrons-down");
        header.querySelector(".fas").classList.add("fa-chevrons-up");
        header.parentElement.classList.replace("bg-[#F1F4F6]", "bg-indigo-100");
      } 
      else 
      {
        accordionContent.style.maxHeight = `0px`;
        header.querySelector(".fas").classList.add("fa-chevrons-down");
        header.querySelector(".fas").classList.remove("fa-chevrons-up");
        header.parentElement.classList.replace("bg-indigo-100", "bg-[#F1F4F6]");
      }
  });
});

