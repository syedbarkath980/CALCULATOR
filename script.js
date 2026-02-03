let numberButtons = document.querySelectorAll(".numBtn")
let operatorButtons = document.querySelectorAll(".opBtn")
let equalButton = document.querySelector(".eqBtn")
let display = document.querySelector(".calc-input")

let firstNumbers = "";
let secondNumbers = "";
let operator = "";
let calculationDone = false;

numberButtons.forEach((nBtn) => {
    nBtn.addEventListener('click', () => {
        if (calculationDone) {
            display.value = 0
            calculationDone = false
        }
        if (operator === "") {
            firstNumbers += nBtn.textContent
            display.value = firstNumbers
            console.log((firstNumbers));
        }
        else {
            secondNumbers += nBtn.textContent
            display.value += " " + secondNumbers

            console.log((secondNumbers));
        }
    })
})

operatorButtons.forEach((opBtn) => {
    opBtn.addEventListener('click', () => {
        operator = opBtn.textContent
        display.value += " " + operator

        console.log((operator));

    })
})

// numberButtons.forEach((nBtn2) => {
//     nBtn2.addEventListener('click', () => {
//         secondNumbers += nBtn2.textContent
//         console.log((secondNumbers));

//     })
// })

equalButton.addEventListener('click', () => {
    firstNumbers = Number(firstNumbers)
    secondNumbers = Number(secondNumbers)

    if (operator === "+") {
        display.value = (firstNumbers + secondNumbers)
    }
    if (operator === "-") {
        display.value = (firstNumbers - secondNumbers)
    }
    if (operator === "x") {
        display.value = (firstNumbers * secondNumbers)
    }
    if (operator === "/") {
        display.value = (firstNumbers / secondNumbers)
    }

    firstNumbers = ""
    secondNumbers = ""
    operator = ""
    calculationDone = true
})


/* Improvements to be added:
1. Keyboard Input
2. Decimal Numbers
*/