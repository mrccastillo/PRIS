import "./LoginRequired.css";

function TicketConfirmationModal({ onCloseModal }) {
  return (
    <>
      <div className="login-required-modal">
        <h4 className="login-required-header">
          Your receipt has been added to our database!
        </h4>
        <div className="button-container">
          <button
            style={{ backgroundColor: "#ff00006b" }}
            onClick={onCloseModal}
          >
            CLOSE
          </button>
        </div>
      </div>
      <div className="overlay"></div>
    </>
  );
}

export default TicketConfirmationModal;
