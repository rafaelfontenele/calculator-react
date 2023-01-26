import handleClick from './App';    

export default function Button({ classes, text }) {
    return <>
        <button className={props.classes} onClick={( (event) => { handleClick(event.target.innerText)})}>{props.text}</button>
      </>
    }


