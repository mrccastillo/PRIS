import { useState } from "react";
import axios from "axios";
import LoginBanner from "../../assets/login-banner.png";
import LoginTrain from "../../assets/login-train.png";
import "./Login.css";

function Login({ isLoggedIn }) {
  const [isInLogIn, setIsInLogIn] = useState(true);
  const [steps, setSteps] = useState(1);

  //controlled elements
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const user = {
      Contact_Number: contactNumber,
      User_Password: password,
    };

    try {
      const res = await axios.post("http://localhost:8080/api/login", user);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="login-page">
      <div className="login-signup-form">
        <div className="login-signup-header">
          <h3
            style={{
              color: "#FCC56B",
            }}
          >
            {isInLogIn ? " LOG IN TO YOUR ACCOUNT" : "CREATE AN ACCOUNT"}
          </h3>
          <p>
            Hey, enter your details to{" "}
            {isInLogIn ? " log in to your account" : "create an account"}
          </p>
        </div>
        <div className="login-signup-input-container">
          {steps <= 1 ? (
            <>
              <div className="input-container">
                <label className="login-label" htmlFor="phone-number">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="phone-number"
                  onChange={(e) => {
                    setContactNumber(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label className="login-label" htmlFor="password">
                  Password:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="password"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {!isInLogIn && (
                <div className="input-container">
                  <label className="login-label" htmlFor="confirm-password">
                    Confirm Password:
                  </label>
                  <input
                    type="text"
                    className="login-input"
                    id="confirm-password"
                  />
                </div>
              )}
            </>
          ) : steps === 2 ? (
            <>
              <div className="input-container">
                <label className="login-label" htmlFor="first-name">
                  First Name:
                </label>
                <input type="text" className="login-input" id="first-name" />
              </div>
              <div className="input-container">
                <label className="login-label" htmlFor="last-name">
                  Last Name:
                </label>
                <input type="text" className="login-input" id="last-name" />
              </div>
              <div className="input-container">
                <label className="login-label" htmlFor="email">
                  E-mail:
                </label>
                <input type="text" className="login-input" id="email" />
              </div>
            </>
          ) : (
            steps === 3 && (
              <div className="input-container">
                <label className="login-label" htmlFor="code">
                  Code:
                </label>
                <input type="text" className="login-input" id="code" />
              </div>
            )
          )}
        </div>
        <div className="login-signup-button-container">
          <p>
            {isInLogIn ? " Don't have an account?" : "Already have an account?"}{" "}
            <span
              style={{
                color: "white",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={() => {
                setIsInLogIn(!isInLogIn);
              }}
            >
              {isInLogIn ? " Sign Up" : "Log In"}
            </span>
          </p>
          {isInLogIn && (
            <button className="login-signup-button" onClick={handleLogin}>
              Log In
            </button>
          )}
          {!isInLogIn && steps === 3 ? (
            <>
              <button
                className="login-signup-button"
                onClick={() => {
                  setSteps((prev) => prev - 1);
                }}
              >
                Back
              </button>
              <button
                className="login-signup-button"
                style={{ marginLeft: "1rem" }}
              >
                Sign Up
              </button>
            </>
          ) : (
            !isInLogIn &&
            steps < 3 && (
              <>
                {steps > 1 && (
                  <button
                    className="login-signup-button"
                    onClick={() => {
                      setSteps((prev) => prev - 1);
                    }}
                    style={{ marginRight: "1rem" }}
                  >
                    Back
                  </button>
                )}

                <button
                  className="login-signup-button"
                  onClick={() => {
                    setSteps((prev) => prev + 1);
                    console.log(steps);
                  }}
                >
                  Next
                </button>
              </>
            )
          )}
        </div>
      </div>
      <img className="login-signup-banner" src={LoginBanner} />
      <img className="login-train" src={LoginTrain} alt="" />
    </div>
    // <div className="relative">
    //   <div className="absolute"></div>
    //   <div className="not-absolute"></div>
    // </div>
  );
}

export default Login;
