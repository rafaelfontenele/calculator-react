import './App.css';
import et from './et.jpg';
import { useState, useEffect} from 'react';



function App() {
  const MAX_LENGTH = 16;
  const [current, setCurrent] = useState(0);
  const [total, setTotal] = useState(0);



  function handleNumber(value) {
    alert(`number: ${value}`)
    if (!isNaN(value)) {
      if (current.toString().length < MAX_LENGTH) {
        setCurrent( (prev) => parseFloat(prev.toString() + value.toString()));
      }
    } else {
      ;
    }
  }

  function handleNotNumber(target) {
    alert(`not number: ${target}`);
  }

  function clearAll() {
    alert('cleeear');
  }
  


  const Button = (props) => {
    return <>
        <button className={props.classes} onClick={( (event) => { {props.function}(event.target.innerText)})}>{props.text}</button>
      </>
    }
  
  

  return (  
    <div className="App">
      <div className="calculator">
       <img className='et-logo' src={et}></img>

       <div className="display">{current}</div>

       <div className="calculator-row">
           <Button text= 'C' classes='calc-button double' function='clearAll'/>
            <Button text= '&larr;' classes='calc-button' function='handleNotNumber'/>
            <Button text= '&divide;' classes='calc-button' function='handleNotNumber'/>
        </div>

        <div className="calculator-row">
          <Button text= '7' classes='calc-button' function='handleNumber'/>
          <Button text= '8' classes='calc-button' function='handleNumber'/>
          <Button text= '9' classes='calc-button' function='handleNumber'/>
          <Button text= '&times;' classes='calc-button' function='handleNotNumber'/>
        </div>


        <div className="calculator-row">
          <Button text= '4' classes='calc-button' function='handleNumber'/>
          <Button text= '5' classes='calc-button' function='handleNumber'/>
          <Button text= '6' classes='calc-button' function='handleNumber'/>
          <Button text= '&minus;' classes='calc-button' function='handleNotNumber'/>
        </div>


        <div className="calculator-row">
            <Button text= '1' classes='calc-button' function='handleNumber'/>
            <Button text= '2' classes='calc-button' function='handleNumber'/>
            <Button text= '3' classes='calc-button' function='handleNumber'/>
            <Button text= '+' classes='calc-button' function='handleNotNumber'/>
        </div>


        <div className="calculator-row">
          <Button text= '0' classes='calc-button triple' function='handleNumber'/>
          <Button text= '=' classes='calc-button' function='handleNotNumber'/>
        </div>

       </div>  
    </div>
  );
}



  export default App;