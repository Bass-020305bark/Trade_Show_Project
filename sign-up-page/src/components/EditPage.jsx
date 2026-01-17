import './EditPage.css';

import Button from './Button';

export default function EditPage() {
    return (
        <form id='editPageContainer'>
            <h1>Profile</h1>
            <hr />
            <div className="inputField">
                <label for="fullName">Full Name *</label>
                <input type="text" id='fullName' placeholder='Enter your name' required />
            </div>
            <div className="inputField">
                <label for="email">Email *</label>
                <input type="email" id='email' placeholder='Enter your new Email' required />
            </div>
            <div className="inputField">
                <label for="password">Password *</label>
                <input type="password" id='password' placeholder='Enter new password' required />
            </div>
            <div className="inputField">
                <label for="phone">Phone (Optional)</label>
                <input type="number" id='phone' placeholder='Enter your phone number' required />
            </div>
            <div className="buttonsChoice">
                <Button backgroundColor={"#1E52BB"}>Save</Button>
                <Button backgroundColor={"#ebecef"}>Cancel</Button>
            </div>

        </form>
    );
}

