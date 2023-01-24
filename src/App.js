import './App.css';
import et from './et.jpg';
import { useState, useEffect} from 'react';

//SYMBOLS ==      =   +   −     ×     ÷     ←

function App() {
  const MAX_LENGTH = 16; //  16
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);
  const [previousOperator, setPreviousOperator] = useState(null);



  function handleNumber(value) {
  //console.log(`number: ${value}`)
      if (current.toString().length < MAX_LENGTH) {
        setCurrent( (prev) => parseFloat(prev.toString() + value.toString()));
      } else {
        setCurrent( (prev) => ('999999999999999'));
      }
  }

  function handleClick(target) {
    if (!isNaN(target)) {
      handleNumber(target);
    } else {
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
        default:
          solveOperation();
          setPreviousOperator(target);
          alert(previousOperator);


      }
    }
  }

  function solveOperation() {
    if (!previousOperator) {
      return;
    }
    switch (previousOperator) {
      case (previousOperator == '+'):
        setTotal((prev) => (prev + current));
        break
      case (previousOperator == '-'):
        setTotal((prev) => (prev - current));
        break
      case (previousOperator == '×'):
        setTotal((prev) => (prev * current));
        break
      case (previousOperator == '÷'):
        //handleError( 0 division error);
        setTotal((prev) => (prev / current));
        break
      case (previousOperator == '')
    }
    
    setPreviousOperator(null);

  }

//SYMBOLS ==      =   +   −     ×     ÷     ←

  function clearAll() {
    console.log('clearAll');
    setCurrent(0);
    setTotal(0);
  }

  function backspace() {
    console.log('backspace')
    if (current.toString().length <= 1) {
      setCurrent(0);
    } else {
      let newVal = parseFloat(current.toString().slice(0, current.toString().length -1 ));
      setCurrent(newVal);
    }
    
  }

  function equals() {
  console.log('equals');
    if (!previousOperator) {
      return
    }
    solveOperation();
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
       <div style={
        {display:'flex',
        justifyContent:'end',
        fontSize:'40px'}
      }>{previousOperator ? previousOperator : 'Null'}</div>
      <div style={
        {display:'flex',
        justifyContent:'end',
        fontSize:'40px'}
      }>{total}</div>
       <div className="display">{current}</div>

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
          <Button text= '0' classes='calc-button triple' />
          <Button text= '=' classes='calc-button' />
        </div>

       </div>  
    </div>
  );
}



  export default App;

  //       <img className='et-logo' src={et}></img>
