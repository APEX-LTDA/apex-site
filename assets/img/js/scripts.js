window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };
    

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

   

});

/*
document.querySelector('.btn-dark').addEventListener('click', function() {
    //document.body.classList.toggle('active');
    const ativar = document.getElementById("dark");

    ativar.innerHTML = '<link href="assets/css/dark.css" rel="stylesheet" />';
});;
*/

var imgLight = "assets/img/Apex.png";
var imgDark = "assets/img/apix2.png";
var img =  document.getElementById("logo");

function removerDark(botao) {
  
    botao.setAttribute("onclick","ativarDark(this);");

    const ativar = document.getElementById("dark");

    img.src = imgLight;
   
    ativar.innerHTML = '<link href="assets/css/estilo.css" rel="stylesheet" />';

}
  
function ativarDark(botao) {
 
    botao.setAttribute("onclick","removerDark(this);");

    const ativar = document.getElementById("dark");

    img.src = imgDark;

    ativar.innerHTML = '<link href="assets/css/dark.css" rel="stylesheet" />';


}


// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
    
  })()
