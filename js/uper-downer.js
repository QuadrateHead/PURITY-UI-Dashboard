const chars = document.querySelectorAll(".upps-downs-char")
chars.forEach(char => {
   if (char.textContent == "+"){
      char.closest(".upps-downs").classList.add("upps-downs--upps")
   }
   else{
      char.closest(".upps-downs").classList.add("upps-downs--downs")
   }
});