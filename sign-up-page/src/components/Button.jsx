import "./Button.css";

function Button({children,onClick,backgroundColor,type}){
    return <button onClick={onClick} type={type} className="signUpBtn" style={{backgroundColor:backgroundColor}}>{children}</button>
}

export default Button;