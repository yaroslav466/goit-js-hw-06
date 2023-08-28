
const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");
  

const onRange = () => {
   const fontSizeValue = fontSizeControl.value + 'px';
      textSpan.style.fontSize = fontSizeValue;
};

fontSizeControl.addEventListener("input", onRange)
onRange();

