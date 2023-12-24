import "./LoginRequired.css";

function LoginRequired({ onCloseModal }) {
  return (
    <>
      <div className="login-required-modal">
        <h4 className="login-required-header">
          Please Login To Use This Feature!
        </h4>
        <div className="button-container">
          <button className="--signup">LOG IN</button>
          <button className="--close" onClick={onCloseModal}>
            CLOSE
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default LoginRequired;
