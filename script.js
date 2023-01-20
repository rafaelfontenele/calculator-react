class Calculator {
    constructor(mainDisplay) {
        this.mainDisplay = mainDisplay;
        //this.secDisplay = secDisplay;
        this.previousOperator = null;
        this.currentOperator = null;
        this.reset();
    }

    changeDisplay(text) {
        this.mainDisplay = text;
    }

    
    reset() {
        this.mainDisplay = '';
        this.secDisplay = '';
    }

    test() {
        alert(this.mainDisplay);
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
    
    
    handleClick(click) {
    }





}


//  symbols =      ←    −  ×    ÷   +


///  CONSTRUCTORs && event listeners
const calculator = document.querySelector('.calculator');
const mainDisplay = document.querySelector('.mainDisplay');
const secDisplay = document.querySelector('.secDisplay');
calcButtons = calculator.querySelectorAll('.calc-button');
const calc = new Calculator(mainDisplay);
calcButtons.forEach( btn => {
    btn.addEventListener('click', () => {
        calc.handleClick(btn.textContent.trim());
    })
})

mainDisplay.textContent = 'asdasd'
secDisplay.textContent = 'asdasd'