import { Link } from "react-router-dom";
import "./navbar.scss";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);
  const user = true;

  return (
    <nav>
      <div className="left">

        <Link to="/" className="logo">
          <img src="/logo.png" alt="LamaEstate" />
          <span>LamaEstate</span>
        </Link>
        <Link to="/" className="text-[red]">Home</Link>
        <Link to="/about">About</Link>
        <Link to="">Contact</Link>
        <Link to=""></Link>

        <a href="/">Agents</a>
      </div>
      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>John Dog</span>
            <Link to="/profile" className="profile ">
              <div className="notification ">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="/">Sign in</a>
            <a href="/" className="register">
              Sign up
            </a>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => {
              setOpen((preVal) => !preVal);
              console.log(open)
            }}
          />
        </div>
        {
        open &&
        <div className={`   
          ${open ? "menu active" : "menu"}
        
        
        `  }>
          <a href="/" >Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Sign in</a>
          <a href="/">Sign up</a>
        </div>}
      </div>
    </nav>
  );
}

export default Navbar;
