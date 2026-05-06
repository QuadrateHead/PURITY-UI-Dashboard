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

const block = document.querySelector('.prjct-input__mmbrs');
const input = document.getElementById('membersInput');
const arrow = block.querySelector('.prjct-input__mmbrs-arrow')
const options = block.querySelectorAll('.prjct-input__mmbrs-optn');
arrow.addEventListener('click', () => {
  block.classList.toggle('open');
});



options.forEach(option => {
   option.addEventListener('click', () => {
      input.value = option.querySelector(".prjct-input__mmbrs-name").textContent;
      block.classList.remove('open');
   });
});


document.addEventListener('click', (e) => {
   if(!block.contains(e.target)){
      block.classList.remove('open');
   }
});