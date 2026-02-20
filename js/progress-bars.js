const progressBars = document.querySelectorAll(".bcc__progress-bar--value");
progressBars.forEach(bar => {
   val = bar.querySelector('p').innerText;
   bar.style.width = `${val}%`;
});

const graphsBars = document.querySelectorAll(".bcc__graph-item");
graphsBars.forEach(bar => {
   val = bar.querySelector('p').innerText;
   bar.style.height = `${val*153.5/490}px`;
   //bar.style.height = `${val}px`;
});

const cmpltnBars = document.querySelectorAll(".projects__t-cmpltn-bar--value");
cmpltnBars.forEach(bar => {
   val = bar.querySelector('p').innerText;
   bar.closest(".projects__t-gridcell--cmpltn").querySelector(".projects__t-cmpltn-per").innerText = val+"%";
   bar.style.width = `${val}%`;
   //bar.style.height = `${val}px`;
});



