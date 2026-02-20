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