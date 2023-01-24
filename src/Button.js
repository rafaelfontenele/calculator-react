import handleClick from './App';    

const Button = (props) => {
    return <>
        <button className={props.classes} onClick={( (event) => { handleClick(event.target.innerText)})}>{props.text}</button>
      </>
    }




export default Button;