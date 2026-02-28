const chars = document.querySelectorAll(".upps-downs-char");
chars.forEach(char => {
   if (char.textContent == "+"){
      char.closest(".upps-downs").classList.add("upps-downs--upps");
   }
   else{
      char.closest(".upps-downs").classList.add("upps-downs--downs");
   }
});

const statuses = document.querySelectorAll(".projects__t-status-a-value");
statuses.forEach(state => {
   if (state.textContent === "Online"){
      state.style.backgroundColor = "#48bb78";  
   }
   else if(state.textContent === "Offline"){
      state.style.color = "var(--status-text)"; 
      state.style.backgroundColor = "var(--status-bg)"; 
   }
});