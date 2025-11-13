const typeWriter = document.getElementById("typing-text");
let isFirst = true;
let isDefault = true;

document.addEventListener("keypress", (event) => {
    let pressedKey = event.key;
    console.log(pressedKey, typeWriter.textContent);

    if (isFirst) {
        isFirst = false;
        isDefault = false;
        typeWriter.classList.remove("inactive");
        typeWriter.textContent = pressedKey;
    } else {
        typeWriter.textContent += pressedKey;
    }
 });

document.addEventListener("keydown", (e) => {
    let backKey = e.key; 
    if (backKey === "Backspace" &&  !isDefault) {
        let slicedValue = typeWriter.textContent.slice(0, -1)
        typeWriter.textContent = slicedValue;
        if (typeWriter.textContent.length == 0) {
            typeWriter.textContent = "Start typing here..."
            isDefault = true;
            typeWriter.classList.add("inactive");
        }
    } else {
        console.log("Not important")
    }
});

