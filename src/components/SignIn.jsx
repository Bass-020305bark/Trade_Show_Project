import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";
import Button from "./Button";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (email === "") {
            setError("Email is required");
            return;
        }

        const regex = /^[a-z0-9]+@[a-z0-9]+\.[a-z]{2,}$/
        if (!regex.test(email)) {
            setError("Enter a valid email");
            return;
        }

        if (password === "") {
            setError("Password is required");
            return;
        }

        if (password.length < 8) {
            setError("Password must be at least contains 8 characters");
            return;
        }

        setError("");
        
        try{
            const response = await fetch("http://localhost:8080/TradeShow/LoginServlet", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (data.statusCode === 200) {
                navigate("/dashBoard");
            } else {
                setError(data.message);
            }
            
        } catch (err) {
            setError("Technical Issue");
        }
    }

    return <div className="layout">
        <div className="signInContainer">
            <h1>Sign In</h1>
            <p>Welcome back! Log In Continue</p>
            <form className="signInForm" onSubmit={handleSubmit}>
                <label>E-mail</label>
                <input type="text" placeholder="Enter your E-mail" value={email} onChange={(e) => { setEmail(e.target.value); setError("") }} />
                <label>Password</label>
                <input type="password" placeholder="Enter your password" value={password} onChange={(e) => { setPassword(e.target.value); setError("") }} />
                {error && <p className="error">{error}</p>}
                <Button type="submit">Sign In</Button>
                <Link to="/dashBoard" className="forgotpassword">Forgot Password?</Link>
                <hr />
                <p className="signUpParagraph">Don't have an account? <span><a href="" className="signUpLink">Sign Up</a></span></p>
            </form>
        </div>
    </div>
}

export default SignIn;