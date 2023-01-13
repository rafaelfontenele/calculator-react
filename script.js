class Calculator {
    constructor(mainDisplay, secDisplay) {
        this.mainDisplay = mainDisplay;
        this.secDisplay = secDisplay;
        this.previousOperator = null;
        this.currentOperator = null;
        this.reset();
    }

    reset() {
        this.mainDisplay = '';
        this.secDisplay = '';
    }

    backspace() {
        if (this.mainDisplay.textContent) {
            this.mainDisplay.textContent = mainDisplay.textContent.toString.slice(0,-1);
        }
    }
    append(number) {
        if (number = '.' && this.mainDisplay.textContent.contains('.')) {
            return
        } else {
            this.mainDisplay.textContent += number;
        }
    }

    updateDisplay() {

    }





}
//  symbols =      ←    −  ×    ÷   +


///  CONSTRUCTORs && event listeners
const calculator = document.querySelector
                            ('.calculator');

calcButtons = calculator.querySelectorAll
                                ('.calc-button');

calcButtons.forEach( btn => {
    btn.addEventListener('click', () => {
        buttonClick(btn.textContent.trim());
    }
})


const mainDisplay = document.querySelector('.display');
const secDisplay = document.querySelector('.total-display');

const calc = new Calculator(mainDisplay, secDisplay);


console.log(calc.mainDisplay);
