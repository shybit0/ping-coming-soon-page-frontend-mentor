const notifyButton = document.querySelector(".notify-btn");
const emailInput = document.querySelector("#user-email");
const emailErrorMsg = document.querySelector(".email-error");

notifyButton.addEventListener("click", (e) => {
    e.preventDefault();

    if(emailInput.value === ""){
        emailErrorMsg.textContent = '*"Whoops! It looks like you forgot to add your email"*';
        emailErrorMsg.classList.remove('hidden');
        return;
    }

    emailErrorMsg.textContent = "Please provide a valid email address";

    if(!emailInput.checkValidity()){
        emailErrorMsg.classList.remove('hidden');
    } else{
        emailErrorMsg.classList.add('hidden');
    }
});