import { useState } from "react";
import { Link } from "react-router-dom";
import "./ForgotPassword.css";
import Button from "./Button";

function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (e) => {
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

        setError("");
        console.log("Correct");
    }
    return <div className="passLayout">
        <div className="forgotPasswordContainer">
            <h1>Reset Password</h1>
            <form className="resetPasswordForm" onSubmit={handleSubmit}>
                <label>Registered E-mail</label>
                <input type="text" placeholder="Enter your Registered E-mail" onChange={(e) => { setEmail(e.target.value); setError("") }}></input>
                {error && <p className="error">{error}</p>}
                <Button type="submit">Send Reset Link</Button>
                <Link to="/" className="goToSignIn">Back to Sign In</Link>
            </form>
        </div>
    </div>
}

export default ForgotPassword;