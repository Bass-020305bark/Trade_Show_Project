import './Signup.css'
import Button from './Button';

export default function SignUpPage() {
    return (
        <form id='signUpContainer'>
            <h1 id='title'>Sign Up</h1>
            <p id='titleDescription'>Join us by filling in the details below</p>

            <div className='inputField'>
                <label for="fullName">Full Name</label>
                <input type="text" id='fullName' placeholder='Enter your full name' required />
            </div>
            <div className='inputField'>
                <label for="email">Email</label>
                <input type="email" id='email' placeholder='Enter your email' required />
            </div>
            <div className='inputField'>
                <label for="password">Password</label>
                <input type="password" id='password' placeholder='Create a password' required />
            </div>
            <div className='inputField'>
                <label for="confirmPassword">Confirm Password</label>
                <input type="password" id='confirmPassword' placeholder='Confirm your Password' required />
            </div>

            <div id='termAndConditionBox'>
                <input type="checkbox" id='termsAndCondition' required />
                <label for="termsAndCondition">I agree the <a>Terms & Privacy Policy</a></label>
            </div>

            <Button backgroundColor={"#1E52BB"} >Sign Up</Button>

            <p id='signInPage'>Already have an account? <a>Sign In</a></p>

        </form>
    );
}