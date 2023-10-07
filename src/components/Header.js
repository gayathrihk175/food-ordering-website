import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

const Header = () => {

    const [text,setText] = useState("Log In");
    // let btnName = "Log In"
    console.log("Header re-rendered as a whole")

    return(
        <div className="header">
            <div className="logo-container">
                {/* <h2 className="logo">Food App</h2> */}
                <img src={LOGO_URL} alt="Logo of the website" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    {/* <button className="login-btn" onClick={()=>{btnName="Log Out";console.log(btnName)}}>{btnName}</button> */}
                    {/* <button className="login-btn" onClick={()=>setText("Log Out")}>{text}</button> */}
                    <button className="login-btn" onClick={()=>{text === "Log In" ? setText("Log Out") : setText("Log In")}}>{text}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;