const numbers = document.querySelectorAll(".number")
const calculatorScreen = document.querySelector('.calculator-screen')

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const updateScreen = (number) => {
    calculatorScreen.value = number
}

const inputNumber = (number) => {
    //currentNumber += number
    if (currentNumber === '0') {
        currentNumber = number
    }else{
        currentNumber += number
    }
}

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        console.log(event.target.innerText)
        inputNumber(event.target.innerText)
        updateScreen(currentNumber)

    })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        console.log(event.target.innerText)
        inputOperator(event.target.innerText)
    })
})

const inputOperator = (operator) => {
    if(calculationOperator === ''){
    prevNumber = currentNumber
    }

    calculationOperator = operator
    currentNumber = '0'
}

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click', () => {
    console.log('equal button is pressed')
    calculate()
    updateScreen(currentNumber)
    console.log(currentNumber)
})

const calculate = () => {
    let result = ''
    switch(calculationOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber)
            break
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber)
            break
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber)
            break
        case "÷":
            result = parseFloat(prevNumber) / parseFloat(currentNumber)
            break
        default:
            return
    }
currentNumber = result
calculationOperator = '0'
}

const clearBtn = document.querySelector(".all-clear")

clearBtn.addEventListener('click', (event) => {
    console.log(event.target.innerText)
    claerAll()
    updateScreen(currentNumber)
})

const claerAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}


const decimal = document.querySelector('.decimal')

decimal.addEventListener('click', (event) => {
    console.log(event.target.innerText)
    inputDecimal(event.target.innerText)
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')) {
        return
    }
    currentNumber += dot
}