import { useState } from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";
import SignIn from "./SignIn";
import Button from "./Button";

function Dashboard () {
    const [showDropdown, setShowDropdown] = useState(false);
    return (
        <div className="container">
            <div className="menu">
            <Link to="/Dashboard" className="homePage"><img src="" alt="" height="110px" width="120px"/></Link>
                <ul className="menuList">
                    <li>My Folders</li>
                </ul>
            </div>
            <div className="main">
                <div className="mainHeader">
                    <div className="upload">
                        <Button onClick={()=>setShowDropdown(!showDropdown)}>Upload</Button>
                        {showDropdown && (
                            <div className="uploadDropdown">
                                <div className="dropdownItem">Create File</div>
                                <div className="dropdownItem">Upload File</div>
                                <div className="dropdownItem">Create Folder</div>
                                <div className="dropdownItem">Upload Folder</div>
                            </div>
                        )}
                    </div>
                </div>
                <div className="filesArea">
                    Files will be shown here
                </div>
            </div>
        </div>
    )
}

export default Dashboard;