
//Email validation

function validateEmail() {
  const form = document.forms[0];
  const emailInput = document.querySelector("[data-email-input]");
  const errorSpan = document.querySelector("[data-error-span]");
  const errorIcon = document.querySelector("[data-error-icon]");
  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  form.addEventListener("submit" , (event) => {
     errorSpan.textContent = "";
     errorIcon.style.display = "none";
     
     if(!emailRegex.test(emailInput.value)) {
       errorSpan.textContent = "Please provide a valid email";
       errorIcon.style.display = "block";
     } 
  });
}

validateEmail();