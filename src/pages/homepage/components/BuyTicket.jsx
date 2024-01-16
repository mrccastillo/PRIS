import "../stylesheets/BuyTicket.css";

function BuyTicket({
  YellowTrain,
  BlueTrain,
  WhiteTrain,
  OrangeTrain,
  stationPicked,
  onPreviousPage,
}) {
  return (
    <div
      className="ticketing"
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        padding: "0",
        position: "relative",
      }}
    >
      <div className="buyticket-input-container">
        <div style={{ width: "100%" }}>
          <h2
            style={{
              borderBottom: "1px solid #9a89ac",
              padding: "1rem 0",
              width: "100%",
              color: "#615e64",
            }}
          >
            BUY A TICKET
          </h2>
          <form className="buy-a-ticket-form"></form>
        </div>
      </div>
      <div className="buyticket-railline-container">
        <div className="rail-lines buyticket-railline">
          <img
            src={
              stationPicked === "lrt1tbl"
                ? WhiteTrain
                : stationPicked === "lrt2tbl"
                ? YellowTrain
                : stationPicked === "mrt3tbl"
                ? BlueTrain
                : stationPicked === "pnrtbl" && OrangeTrain
            }
            className="train-pics"
            style={{ height: "17rem" }}
          />
          <h4 className="train-name">
            {stationPicked === "lrt1tbl"
              ? "Light Rail Transit (LRT-1)"
              : stationPicked === "lrt2tbl"
              ? "Light Rail Transit 2 (LRT-2)"
              : stationPicked === "mrt3tbl"
              ? "Metro Rail Transit 3 (MRT-3)"
              : stationPicked === "pnrtbl" && "Phil. National Railway (PNR)"}
          </h4>
        </div>
        <button className="go-back-button" onClick={onPreviousPage}>
          GO BACK
        </button>
      </div>
    </div>
  );
}

export default BuyTicket;
