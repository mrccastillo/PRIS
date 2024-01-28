import { useState } from "react";
import axios from "axios";
import "./UserModal.css";
import Transactions from "./Transactions";

function UserModal({
  onCloseUserModal,
  userID,
  username,
  firstname,
  lastname,
  email,
  contactNo,
  password,
  onSetTransactions,
}) {
  const [isUpdatePassOpen, setIsUpdatePassOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isChangePassSuccessful, setIsChangePassSuccessful] = useState();

  async function handleUpdatePass() {
    const updatePasswordData = {
      updatePass: newPassword,
      Contact_Number: contactNo,
    };

    if (oldPassword === newPassword && oldPassword === password) {
      setErrorMsg("Enter password different from your current password");
      setSuccessMsg("");
    } else if (oldPassword === "" && newPassword === "") {
      setErrorMsg("Please fill up the fields");
      setSuccessMsg("");
    } else if (oldPassword != password) {
      setErrorMsg("Your current password didn't match");
      setSuccessMsg("");
    } else {
      try {
        const res = await axios.patch(
          `http://localhost:8080/api/user/editpass/${userID}`,
          updatePasswordData
        );

        setSuccessMsg(
          "You have successfully updated your password! Please log in again to your account."
        );
        setErrorMsg("");
        setIsChangePassSuccessful(true);
      } catch (e) {
        setErrorMsg("Something wen't wrong");
        setSuccessMsg("");
      }
    }
  }

  function handleLogout() {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    location.reload();
  }

  return (
    <>
      <div className="user-modal">
        <h4
          style={{
            marginBottom: "1rem",
            color: "black",
            borderBottom: "1px solid #7026b682",
            paddingBottom: "0.5rem",
          }}
        >
          Hello, {username}!
        </h4>

        <div className="update-user-info-container">
          <div className="user-details">
            <p>User ID: {userID}</p>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Contact Number: {contactNo}</p>
          </div>
          {isUpdatePassOpen && (
            <div className="update-pass-container">
              <input
                style={{ marginBottom: "1rem" }}
                type="password"
                placeholder="Your current password"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                }}
              />
              <input
                style={{ marginBottom: "1rem" }}
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                }}
              />
              {errorMsg && <p className="error-msg">{errorMsg}</p>}
              {successMsg && <p className="success-msg">{successMsg}</p>}
            </div>
          )}
          <div style={{ marginTop: "1rem", padding: "0 1rem" }}>
            <button
              style={{
                width: "100%",
                backgroundColor: "#C5E1A5",
                borderRadius: "0.5rem",
              }}
              onClick={() => {
                onSetTransactions();
                onCloseUserModal();
              }}
            >
              See your transactions
            </button>
          </div>

          <div className="logout-button-container">
            {!isUpdatePassOpen && !isChangePassSuccessful ? (
              <>
                <button
                  className="update-pass-btn"
                  onClick={() => {
                    setIsUpdatePassOpen(!isUpdatePassOpen);
                  }}
                >
                  Update Password
                </button>
                <button
                  className="logout-btn"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log Out
                </button>
              </>
            ) : isUpdatePassOpen && !isChangePassSuccessful ? (
              <>
                <button
                  className="update-pass-btn"
                  onClick={() => {
                    handleUpdatePass();
                  }}
                >
                  Confirm
                </button>
                <button
                  className="logout-btn"
                  onClick={() => {
                    setIsUpdatePassOpen(!isUpdatePassOpen);
                  }}
                >
                  Back
                </button>
              </>
            ) : (
              isChangePassSuccessful && (
                <button
                  className="logout-btn"
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log Out
                </button>
              )
            )}
          </div>
        </div>
        <div className="close-btn" onClick={onCloseUserModal}>
          &times;
        </div>
      </div>
    </>
  );
}

export default UserModal;
