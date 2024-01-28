import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import LoginBanner from "../../assets/login-banner.png";
import LoginTrain from "../../assets/login-train.png";
import "./Login.css";

function Login({ setLoggedIn }) {
  const [isInLogIn, setIsInLogIn] = useState(true);
  const [steps, setSteps] = useState(1);

  //controlled elements
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();
  async function handleLogin() {
    const user = {
      Contact_Number: contactNumber,
      User_Password: password,
    };

    try {
      const res = await axios.post("http://localhost:8080/api/login", user);
      if (res.data[1] === "Logged In!") {
        setIsInLogIn();
        localStorage.setItem("isLoggedIn", true.toString()); // Use strings for consistency
        setLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        navigate("/");
      }
    } catch (e) {
      setErrorMsg("Incorrect credentials");
    }
  }

  async function handleSignUp() {
    const createUser = {
      Contact_Number: contactNumber,
      User_Password: password,
      Username: username,
      First_Name: firstname,
      Last_Name: lastname,
      Email: email,
    };

    const res = await axios.post(
      "http://localhost:8080/api/signup",
      createUser
    );
    try {
      if (res.data[1] === "User Created") {
        setIsInLogIn();
        localStorage.setItem("isLoggedIn", true.toString()); // Use strings for consistency
        setLoggedIn(true);
        localStorage.setItem("user", JSON.stringify(res.data[0]));
        navigate("/");
      }
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
          {steps === 1 ? (
            <>
              <div className="input-container">
                <label className="login-label" htmlFor="phone-number">
                  Phone Number:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="phone-number"
                  value={contactNumber}
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
                  type="password"
                  className="login-input"
                  id="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>
              {errorMsg && (
                <p className="error-msg" style={{ marginTop: "1rem" }}>
                  {errorMsg}
                </p>
              )}
            </>
          ) : steps === 2 ? (
            <>
              <div className="input-container">
                <label className="login-label" htmlFor="first-name">
                  First Name:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="first-name"
                  value={firstname}
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label className="login-label" htmlFor="last-name">
                  Last Name:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="last-name"
                  value={lastname}
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                />
              </div>
              <div className="input-container">
                <label className="login-label" htmlFor="email">
                  E-mail:
                </label>
                <input
                  type="text"
                  className="login-input"
                  id="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
            </>
          ) : steps === 3 ? (
            <div className="input-container">
              <label className="login-label" htmlFor="username">
                Username:
              </label>
              <input
                type="text"
                className="login-input"
                id="username"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
              />
            </div>
          ) : null}
          {/* Added null for other steps */}
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
                setSteps(1);
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
                onClick={handleSignUp}
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
