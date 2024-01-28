import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserModal from "../Modals/UserModal";
import Transactions from "../Modals/Transactions";
import "./Nav.css";

function Nav({ user }) {
  const [seeTransactions, setSeeTransactions] = useState(false);
  const [isNavScrolled, setIsNavScrolled] = useState(true);
  const [isUserPicClicked, setIsUserPicClicked] = useState(false);
  const changeNavStyle = () => {
    if (window.scrollY > 0) {
      setIsNavScrolled(false);
    } else setIsNavScrolled(true);
  };

  useEffect(() => {
    console.log("user fron nav:", user);
  }, [user]);

  window.addEventListener("scroll", changeNavStyle);

  return (
    <nav className={isNavScrolled ? "nav" : "nav-active"}>
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
        {/* <Link to="/"></Link> */}
        {user ? (
          <div
            className={
              isNavScrolled ? "user-pic user-black" : "user-pic user-white"
            }
            onClick={() => {
              setIsUserPicClicked(!isUserPicClicked);
            }}
          ></div>
        ) : (
          <>
            <Link to="/login">
              {" "}
              <button className="btn --login">LOG IN</button>
            </Link>
            <Link to="/login">
              <button className="btn --signup">SIGN UP</button>
            </Link>
          </>
        )}
      </div>
      {isUserPicClicked && (
        <>
          <UserModal
            onCloseUserModal={() => {
              setIsUserPicClicked(!isUserPicClicked);
            }}
            userID={user[0].UserID}
            username={user[0].Username}
            firstname={user[0].FName}
            lastname={user[0].LName}
            email={user[0].Email}
            contactNo={user[0].ContactNo}
            password={user[0].UserPassword}
            onSetTransactions={() => {
              setSeeTransactions(true);
            }}
          />
          <div className="overlay"></div>
        </>
      )}
      {seeTransactions && (
        <>
          <Transactions
            userID={user[0].UserID}
            username={user[0].Username}
            firstname={user[0].FName}
            lastname={user[0].LName}
            email={user[0].Email}
            contactNo={user[0].ContactNo}
            password={user[0].UserPassword}
            // onSetTransactions={() => {
            //   setSeeTransactions(true);
            // }}
            onCloseTransactionModal={() => {
              setSeeTransactions(false);
            }}
          />
        </>
      )}
    </nav>
  );
}

export default Nav;
