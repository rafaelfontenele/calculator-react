let buffer = "0";
let previousOperator;
let maxInteger = "9";
let displayMaxLength = 13;
let maxBuffer = parseInt(maxInteger.repeat(displayMaxLength));
let totalValue = 0;



/*  

symbols =      ←    −  ×    ÷   +

*/

const display = document.querySelector('.display');

function buttonClick(value) {
    if (isNaN(value)) {        
        handleSymbol(value)

    } else{        
         /* handle max value(15 chars in display) */
        if (parseInt(buffer) > maxBuffer) {
            buffer = maxBuffer;
            totalValue = maxBuffer;
            previousOperator = null
        }

        handleNumber(value)
    }   
    
    display.innerText = buffer;


}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    } else{
        buffer += numberString;
    } 

}




function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0';
            totalValue = 0;
            previousOperator = null;
            return
        
        case '=':
            if (previousOperator == null) {
                return
            };
            doOperation(parseInt(buffer));
            previousOperator = Null;  
            buffer = totalValue;      
            totalValue = 0;
            break
            
        
        case '←':
            if (buffer.length == 1) {
                buffer = '0';
                totalValue = 0;
                return
            }
            else {
                buffer = buffer.slice(0, buffer.length - 1);
                return
            }
            break;
        

        case '+':
            
    }
}

function doOperation(intBuffer) {
    if (previousOperator == null){
        return
    }else {
        if (previousOperator = '+') {
            totalValue += buffer
        }
    }
    
}
    

function init() {
    document.querySelector('.calculator').addEventListener('click', function(event){
        buttonClick(event.target.innerText);
    })

}

init();