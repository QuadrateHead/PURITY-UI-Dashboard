const sentinel = document.querySelector(".sentinel");
const navbar = document.getElementById("navbar");
document.addEventListener('DOMContentLoaded', () => {
   if (localStorage.getItem('isFixed') === 'active') {
      navbar.classList.add("fixed");
      document.querySelector(".stgbar__f-checkbox").checked = true;
   }
});
function navbarFixed() {
   navbar.classList.toggle("fixed");
   if (navbar.classList.contains("fixed")) {
      localStorage.setItem("isFixed", "active")
   } else {
      localStorage.removeItem("isFixed")
   }
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
      else {
         // Sticky вернулся в статическое положение
         navbar.classList.remove('is-stuck');
         console.log('Sticky normal');
      }
   },
   { threshold: 0 }
);
observer.observe(sentinel);
