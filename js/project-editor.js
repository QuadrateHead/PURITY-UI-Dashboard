function openPE() {
   document.querySelector(".prjct-input").classList.add("active");
   document.getElementById("prjct-input-backdrop").classList.add("active");
   document.body.classList.toggle('no-scroll');
}
function closePE(){
   document.querySelector(".prjct-input").classList.remove("active");
   document.getElementById("prjct-input-backdrop").classList.remove("active");
   document.body.classList.remove('no-scroll');
}

const form = document.querySelector('.prjct-input__mmbrs');
const input = document.getElementById('membersInput');
const arrow = form.querySelector('.prjct-input__mmbrs-arrow')
const options = form.querySelectorAll('.prjct-input__mmbrs-optn');
arrow.addEventListener('click', () => {
  form.classList.toggle('open');
});



options.forEach(option => {
   option.addEventListener('click', () => {
      input.value = option.querySelector(".prjct-input__mmbrs-name").textContent;
      form.classList.remove('open');
   });
});


document.addEventListener('click', (e) => {
   if(!form.contains(e.target)){
      form.classList.remove('open');
   }
});
document.querySelector(".prjct-input").addEventListener("submit", (e) =>{
   e.preventDefault();
   const name = document.getElementById("nameOfProject").value;
   const desc = document.getElementById("descOfProject").value;
   const number = document.querySelector(".prfl-projects__cards").childElementCount;
   //let member = document.getElementById("membersInput").value;
   const block = `<div class="prfl-projects__card">
               <div class="prfl-projects__img-block">
                  <img src="img/images/profile-projects/huy-phan-HqLcI0Dyl4o-unsplash 1.png" alt="" class="prfl-projects__img">
               </div>
               <div class="prfl-projects__content">
                  <p class="prfl-projects__num">Project #${number}</p>
                  <h2 class="prfl-projects__title main-text">${name}</h2>
                  <p class="prfl-projects__subtitle muted-text--small">${desc}</p>
                  <div class="prfl-projects__footer">
                     <button class="prfl-projects__view-all">View All</button>
                     <div class="prfl-projects__avatars-group">
                        <span class="prfl-projects__avatars-span">
                           <img src="img/images/project-members/Person Photo 16.png" alt="" class="prfl-projects__avatars-img">
                        </span>
                        <span class="prfl-projects__avatars-span">
                           <img src="img/images/project-members/Person Photo 14.png" alt="" class="prfl-projects__avatars-img">
                        </span>
                        <span class="prfl-projects__avatars-span">
                           <img src="img/images/project-members/Person Photo 23.png" alt="" class="prfl-projects__avatars-img">
                        </span>
                        <span class="prfl-projects__avatars-span">
                           <img src="img/images/project-members/Elipse 5.png" alt="" class="prfl-projects__avatars-img">
                        </span>
                     </div>
                  </div>
               </div>
            </div>      
   `
   document.querySelector(".prfl-projects__cards").insertAdjacentHTML("beforeend", block);
   form.classList.remove('open');
});

