
symbols =      ←    −  ×    ÷   +



const buttonClick= (clickTarget) => {
    let mainValue = mainDisplay.textContent;
    let allValue = totalValue.textContent;
    let current;

    switch (clickTarget) {
        case 'C':
            updateMainDisplay(0);
            updateTotalValue(0);
        case '←':
            current = mainDisplay.textContent;
            if (current.length != 1) {
                updateMainDisplay(+current.slice(0,current.length - 1));
            } else {
                updateMainDisplay(0);
            }
            break
        case '÷':
            
        case '×':
            
        case '−':
            
        case '+':
            
        case '=':
            if (previousOperator != null) {
                doOperation(clickTarget);
            }
            break;
        default:
            current = mainDisplay.textContent;
            if (current == '0') {
                current = clickTarget
            } else {
                if (current.length < displayMaxLength) {
                current += clickTarget;
            }
        }
        updateMainDisplay(current);
    }
}

const doOperation = (n1, n2, operator) => {
    n1 = +n1;
    n2 = +n2;
    switch(operator){
    case '÷':
        return (n1 / n2);
    case '×':
        return (n1 * n2);
    case '−':
        return (n1 - n2);
    case '+':
        return (n1 + n2);
    default:
        return null

}


const updateTotalValue = (number) => {
    totalValue.textContent = `${number}`;
 }    
 
 const updateMainDisplay = (number) => {
    mainDisplay.textContent = `${number}`;
 }



    


    
    document.querySelector('.calculator').querySelectorAll('.calc-button').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })


    }