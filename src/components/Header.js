import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useOnlineStatus from "./../utils/useOnlineStatus";

const Header = () => {
  const [text, setText] = useState("Log In");
  const onlineStatus = useOnlineStatus();
  console.log("Header re-rendered as a whole");

  return (
    <div className="shadow-md fixed top-0 left-0 z-50 w-full opacity-100 bg-white">
      <div className="flex justify-between">
        <div>
          <img className="w-32" src={LOGO_URL} alt="Logo of the website" />
        </div>
        <div className="nav-items">
          <ul className="flex p-4 m-4">
            <li className="m-3 text-xl font-serif">
              Online Status : {onlineStatus ? "✅" : "🔴"}
            </li>
            <li className="m-3 text-xl font-serif">
              <Link to="/">Home</Link>
            </li>
            <li className="m-3 text-xl font-serif">
              <Link to="/about">About Us</Link>
            </li>
            <li className="m-3 text-xl font-serif">
              <Link to="/contact">Contact Us</Link>
            </li>
            <li className="m-3 text-xl font-serif">
              <Link to="/grocery">Grocery</Link>
            </li>
            <li className="m-3 text-xl font-serif">
              <Link to="/cart">Cart</Link>
            </li>
            <button
              className="bg-orange-500 text-white rounded-xl py-1 px-7 text-xl font-serif"
              onClick={() => {
                text === "Log In" ? setText("Log Out") : setText("Log In");
              }}
            >
              {text}
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
