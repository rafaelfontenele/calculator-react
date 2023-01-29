import './App.css';
import et from './et.jpg';
import { useState, useEffect} from 'react';

//SYMBOLS ==      =   +   −     ×     ÷     ←             −

function App() {
  const MAX_LENGTH = 16; //  16
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [previousOperator, setPreviousOperator] = useState(null);


  function handleNumberAndDot(value) {
  //console.log(`number: ${value}`)
  if (value.toString() === '.') { ///check if dot already in string
    if (current.toString().includes('.')){
      return;
    }
    
  }
  if (current.toString().length >= MAX_LENGTH) { //check if string reached max length
    return;
  }
  if (current == 0) { //if current is 0, then make it the value instead of appending the value to current number
    setCurrent(value);
    return
  }
  setCurrent((prev) => prev.toString() + value.toString());
  return

}

  function handleClick(target) {
    if (!isNaN(target) || target==='.') {
      handleNumberAndDot(target);
      return;
    } 

      switch(target) {
        
        case 'C':
          clearAll();
          break;
        
        case '←':
          backspace();
          break
        
        case '=':
          equals();
          break        
          
          default:    //clicked on operations

          handleOperation(target);
          



      }
    }

function handleOperation(target) {
    if (!previousOperator) {
      
      if (parseFloat(total) === 0) {
        setTotal(current);
        setCurrent(0);
        setPreviousOperator(target);
        return
      }

      if (parseFloat(current) === 0) {
        setPreviousOperator(target);
        return
      }

      setTotal(current);
      setCurrent(0);
      setPreviousOperator(target);
      return
    }

    if (parseFloat(current) === 0) {
      setPreviousOperator(target);
      return
    }

    equals();

    setPreviousOperator(target);
}
  

function errorAnimation() {
  alert('Cannot divide by 0.');
}
//SYMBOLS ==      =   +   −     ×     ÷     ←  

  function solveOperation() {
    let fTotal = parseFloat(total);
    let fCurrent = parseFloat(current);
    if (!previousOperator) {
      return;
    }
      if (previousOperator === '+'){
        return fTotal + fCurrent;
      }

      if (previousOperator == '−') {
        return fTotal- fCurrent;
      }

      if (previousOperator === '×'){
        return (fTotal* fCurrent);
      }

      if (previousOperator === '÷') {
        if (fCurrent === 0){
           return 'error';
        }
        return (fTotal / fCurrent)
      }
     
}

  function equals() {
  console.log('equals');
    if (!previousOperator) {
      setTotal(parseFloat(current));
      setCurrent(0);
      return
    }
    if (parseFloat(current) === 0) {
      errorAnimation()
      return
    }
    let result = solveOperation();
    if (result == 'error') return errorAnimation();
    console.log(`result = ${result}`);
    setTotal(result);
    setCurrent(0);
    setPreviousOperator(null);
  }



  function clearAll() {
    console.log('clearAll');
    setCurrent(0);
    setTotal(0);
    setPreviousOperator(null);
  }

  function backspace() {
    console.log('backspace')
    if (current.toString().length <= 1) {
      setCurrent(0);
    } else {
      let newVal = (current.toString().slice(0, current.toString().length -1 ));
      setCurrent(newVal);
    }
    
  }

  const Button = (props) => {
    return <>
        <button className={props.classes} 
        onClick={(event) => handleClick(event.target.innerText)}
        >{props.text}</button>
      </>
    }
  
  

  return (  
    <div className="App">

      <div className="calculator">
       <div className="display">
      
      <div style={
        {display:'flex',
        justifyContent:'end',
        fontSize:'20px',
      gap:'5px'}
      }>
        
        {(total < 0) ? `(${total})` : total} 
      
      <span style={
        {fontSize:'15px',
      alignSelf:'center'}
      }>{previousOperator || ''}</span></div>
        
        {current}
        </div>

       <div className="calculator-row">
           <Button text= 'C' classes='calc-button double' />
            <Button text= '&larr;' classes='calc-button' />
            <Button text= '&divide;' classes='calc-button' />
        </div>

        <div className="calculator-row">
          <Button text= '7' classes='calc-button' />
          <Button text= '8' classes='calc-button' />
          <Button text= '9' classes='calc-button' />
          <Button text= '&times;' classes='calc-button' />
        </div>


        <div className="calculator-row">
          <Button text= '4' classes='calc-button' />
          <Button text= '5' classes='calc-button' />
          <Button text= '6' classes='calc-button' />
          <Button text= '&minus;' classes='calc-button' />
        </div>


        <div className="calculator-row">
            <Button text= '1' classes='calc-button' />
            <Button text= '2' classes='calc-button' />
            <Button text= '3' classes='calc-button' />
            <Button text= '+' classes='calc-button' />
        </div>


        <div className="calculator-row">
          <Button text= '0' classes='calc-button double-zero' />
        <Button text= '.' classes='calc-button' />
          <Button text= '=' classes='calc-button' />
        </div>

       </div>  
    </div>
  );
}


  export default App;

  //       <img className='et-logo' src={et}></img>
