import { LOGO_URL } from "../utils/constants";
import {useState} from "react";
import {Link} from "react-router-dom";

const Header = () => {

    const [text,setText] = useState("Log In");
    // let btnName = "Log In"
    console.log("Header re-rendered as a whole")

    return(
        <>
            <div className="header">
            <div className="logo-container">
                {/* <h2 className="logo">Food App</h2> */}
                <img src={LOGO_URL} alt="Logo of the website" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    {/* <li><a href="/about">About Us</a></li> */}
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    {/* <button className="login-btn" onClick={()=>{btnName="Log Out";console.log(btnName)}}>{btnName}</button> */}
                    {/* <button className="login-btn" onClick={()=>setText("Log Out")}>{text}</button> */}
                    <button className="login-btn" onClick={()=>{text === "Log In" ? setText("Log Out") : setText("Log In")}}>{text}</button>
                </ul>
            </div>
            </div>
            {/* <Outlet/> */}
        </>
    )
}

export default Header;