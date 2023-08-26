
const fontSizeControl = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

fontSizeControl.addEventListener("input", () => {
    const min = parseInt(fontSizeControl.min);  
    const max = parseInt(fontSizeControl.max);
    const rangeValue = parseInt(fontSizeControl.value);
    const fontSize = 16 + ((rangeValue - min) / (max - min)) * 80 + "px";
     textSpan.style.fontSize = fontSize;
});

