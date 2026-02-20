const links = document.querySelectorAll('.sidebar__page');
const currentPath = window.location.pathname;

links.forEach(link => {
   if (link.getAttribute('href') === currentPath){
      
      link.closest('.sidebar__deco').classList.add('current-page');
   }
});

