const textInput = document.querySelector("#validation-input");
const checkingHandler = (event) => {
    textInput.value = event.currentTarget.value.trim();

    if (textInput.value.trim().length === parseInt(event.currentTarget.dataset.length)) {
        textInput.classList.add("valid"); 
        textInput.classList.remove("invalid");
    } else {
        textInput.classList.add("invalid"); 
        textInput.classList.remove("valid");
    }
}

textInput.addEventListener("blur", checkingHandler);