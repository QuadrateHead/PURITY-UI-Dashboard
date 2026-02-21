const settingsBlock = document.querySelector(".stgbar")
function openSTG() {
   settingsBlock.classList.add("active");
}
function closeSTG() {
   settingsBlock.classList.remove("active");
}
const noticeBlock = document.querySelector(".notice")
function openNTC() {
   noticeBlock.classList.toggle("active");
}
const sideBar = document.querySelector(".sidebar")
function openSB() {
   sideBar.classList.toggle("active");
}
function closeSB(){
   sideBar.classList.remove("active");
}
function checkWindowSize() {
  // window.innerWidth gives you the current pixel width
  if (window.innerWidth >= 1200) {
    sideBar.classList.remove('active');
  }
}

// Check on page load
checkWindowSize();

// Check every time the window is resized
window.addEventListener('resize', checkWindowSize);