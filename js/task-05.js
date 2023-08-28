const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event)=> {
  textOutput.textContent = event.currentTarget.value.trim(); 
  if (textInput.value.trim() === "") {
    textOutput.textContent = "Anonymous";
  } else {
    
  }
}); 