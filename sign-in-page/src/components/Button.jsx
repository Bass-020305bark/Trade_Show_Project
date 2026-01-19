import "./Button.css";

function Button ({children, onClick, type}) {
    return <button type={type} onClick={onClick} className="signInBtn">{children}</button>
}

export default Button;