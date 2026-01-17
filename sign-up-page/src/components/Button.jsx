import "./Button.css";

function Button({children,onClick,backgroundColor}){
    return <button onClick={onClick} className="signUpBtn" style={{backgroundColor:backgroundColor}}>{children}</button>
}

export default Button;