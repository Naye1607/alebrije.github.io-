function funcionNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className ="topnav";
    }
}

// Mostrar el botón cuando el usuario hace scroll hacia abajo
window.onscroll = function() {
    scrollFunction();
   };
   function scrollFunction() {
    const btn = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
   }



   // Función para volver arriba
   function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    const btn = document.getElementById("topBtn");
  
    // Añadir clase que activa la animación
    btn.classList.add("girando");
  
    // Scroll hacia arriba
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  
  
   }





   function toggleMenu() {
     const menu = document.getElementById("mobileMenu");
     menu.classList.toggle("visible");
   }

   // Cierra el menú al hacer clic en un enlace
   document.querySelectorAll('.mobile-menu a').forEach(link => {
     link.addEventListener('click', () => {
       document.getElementById("mobileMenu").classList.remove("visible");
     });
   });



    // Función para volver arriba
  function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;

   const btn = document.getElementById("topBtn");

   // Añadir clase que activa la animación
   btn.classList.add("girando");

   // Scroll hacia arriba
   window.scrollTo({
     top: 0,
     behavior: "smooth"
   });





   

   


   


  }
