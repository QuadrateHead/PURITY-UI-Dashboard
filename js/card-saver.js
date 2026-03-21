const form = document.getElementById("paymentForm");
const displayHeading = document.getElementById("cardNum");

window.onload = function() {
    const savedCard = localStorage.getItem('userCardNumber');
    if (savedCard) {
        displayHeading.textContent = savedCard;
    }
};
form.addEventListener('submit', function(event){
   event.preventDefault();

   const masterCard = document.getElementById("cardNumMasterCard").value;
   const visaCard = document.getElementById("cardNumVisa").value;

   let finalNumber = ""
   if (masterCard !== "") {
        finalNumber = formatCardNumber(masterCard);
    } else if (visaCard !== "") {
        finalNumber = formatCardNumber(visaCard);
    } else {
        finalNumber = "7812 2139 0823 XXXX";
    }
    if(finalNumber !== ""){
      displayHeading.textContent = finalNumber;
      localStorage.setItem("userCardNumber", finalNumber);
    }
});

function formatCardNumber(num) {
    return num.toString().replace(/\d{4}(?=.)/g, '$& ');
}