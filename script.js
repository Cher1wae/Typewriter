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
















const cars = ["bmw", "audi", "volkswagon"];
let index = 0;

// cars.forEach((car, i) => {
//     logger(car, i)
// }) 

for(let car of cars){
cars[index] = car[0].toUpperCase() + car.slice(1);
index ++;
    // logger(car);
}
console.log(cars);

// // for(let i = 0; i < cars.length; i++){
// //     let car = cars[i]
// //     logger(car, i);
// // }

// function logger(item, index) {
//     console.log("A tasks was performed on: " + item);
//     console.log("At position: " + index);
// }

//  CAPITALIZE THE FIRST LETTER OF THE CAR IN THE ARRAY  CARS USING THE THREE LISTED LOOP METHODS


// design using html and css a page that display a list of your available stocks.