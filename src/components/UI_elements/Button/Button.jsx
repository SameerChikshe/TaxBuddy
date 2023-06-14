import "./Button.scss";

const Button = (props)=>{
    return(
        <div className={`sign ${ props.className ? props.className : ""}`}>{props.name}</div>
    )
}

export default Button