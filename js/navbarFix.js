const sentinel = document.querySelector(".sentinel");
const navbar = document.getElementById("navbar");
function navbarFixed() {
   navbar.classList.toggle("fixed");
}
//!Bug with state of is-stuck when fixed class switch//
const observer = new IntersectionObserver(
   ([entry]) => {
      if (!navbar.classList.contains("fixed")) return;
      if (!entry.isIntersecting) {
         // Sticky активировался
         navbar.classList.add('is-stuck');
         console.log('Sticky fixed');
      } 
      else{
         // Sticky вернулся в статическое положение
         navbar.classList.remove('is-stuck');
         console.log('Sticky normal');
      }
   },
   { threshold: 0 }
);
observer.observe(sentinel);
