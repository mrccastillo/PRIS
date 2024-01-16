import { useState } from "react";
// import Logo from "../../assets/logo.png";
import "./Nav.css";

function Nav() {
  const [isNavScrolled, setIsNavScrolled] = useState(true);
  const changeNavStyle = () => {
    if (window.scrollY > 0) {
      setIsNavScrolled(false);
    } else setIsNavScrolled(true);
  };

  window.addEventListener("scroll", changeNavStyle);

  return (
    <nav className={isNavScrolled ? "nav" : "nav nav-active"}>
      <div className="logo-navlinks-container">
        <div className="logo"></div>
        <div className="navlinks-container">
          <a className="navlink" href="#home">
            HOME
          </a>
          <a className="navlink" href="#schedule">
            SCHEDULE
          </a>
          <a className="navlink" href="#ticketing">
            TICKET SERVICES
          </a>
          <a className="navlink" href="#about-us">
            ABOUT US
          </a>
          <a className="navlink" href="#contact">
            CONTACTS
          </a>
        </div>
      </div>
      <div className="user-login-createaccount-container">
        <button className="btn --login">LOG IN</button>
        <button className="btn --signup">SIGN UP</button>
      </div>
    </nav>
  );
}

export default Nav;
