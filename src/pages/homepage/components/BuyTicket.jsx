import { useState } from "react";
import TicketConfirmationModal from "../../Modals/TicketConfirmationModal";
import axios from "axios";
import "../stylesheets/BuyTicket.css";

function BuyTicket({
  YellowTrain,
  BlueTrain,
  WhiteTrain,
  OrangeTrain,
  stationPicked,
  onPreviousPage,
  user,
}) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();
  const [isDiscounted, setIsDiscounted] = useState();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [ticketPrice, setTicketPrice] = useState();
  const [origin, setOrigin] = useState("");
  const [trainData, setTrainData] = useState();
  const [isAddedToTransaction, setIsAddedToTransaction] = useState(false);
  /*  http://localhost:8080/api/trainfares/lrt1tbl/To_EDSA/1  /:railway/:to/:from*/
  async function handleConfirmStations() {
    console.log(to);
    console.log(from);
    try {
      const res = await axios.get(
        `http://localhost:8080/api/trainfares/${stationPicked}/${from}`
      );
      const data = res.data[0];
      setTrainData(data);
      console.log(trainData);
      setOrigin(trainData.Station);
      let basePrice = trainData[to];
      console.log(basePrice);
      if (isDiscounted == 1 && isDiscounted == 2 && isDiscounted == 3) {
        let discountedPrice = basePrice - basePrice * 0.2;
        setTicketPrice(discountedPrice);
      } else {
        setTicketPrice(basePrice);
      }
      setIsConfirmed(true);
    } catch (e) {
      console.log(e);
    }
  }

  async function addToTransactions() {
    let today = new Date().toISOString().slice(0, 10);
    const discountType =
      isDiscounted == 0
        ? "None"
        : isDiscounted == 1
        ? "Student"
        : isDiscounted == 2
        ? "PWD"
        : isDiscounted == 3 && "Senior Citizen";

    const values = {
      UserID: user.UserID,
      TransactDate: today,
      Fname: user.FName,
      Lname: user.LName,
      RailwayID: trainData.Railway_ID,
      OriginStation: origin,
      To_Station: to,
      ContactNo: user.ContactNo,
      Fare: ticketPrice,
      DiscountType: discountType,
      PaymentMethod: paymentMethod,
    };
    console.log(values);
    try {
      const res = await axios.post(
        "http://localhost:8080/api/transaction",
        values
      );
      console.log(res);
      setIsAddedToTransaction(true);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
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
            {!isConfirmed && (
              <h2
                style={{
                  borderBottom: "1px solid #9a89ac",
                  padding: "1rem 0",
                  width: "100%",
                  color: "#fff",
                }}
              >
                BUY A TICKET
              </h2>
            )}

            <div
              className="buy-a-ticket-form"
              style={{
                backgroundColor: isConfirmed && "#ffffff",
                display: isConfirmed && "flex",
                flexDirection: isConfirmed && "column",
                justifyContent: isConfirmed && "space-between",
              }}
            >
              {isConfirmed ? (
                <>
                  <h3
                    style={{
                      fontSize: "2.2rem",
                      borderBottom: "1px solid #7026b682",
                      paddingBottom: "0.5rem",
                    }}
                  >
                    RAIL TICKET RECEIPT
                  </h3>
                  <div className="receipt-info">
                    <p style={{ fontSize: "1.1rem" }}>
                      <b>PASSENGER INFO</b>
                    </p>
                    <p>Name: {user.FName}</p>
                    <p>Age: {user.LName}</p>
                    <p>From: {origin}</p>
                    <p>To: {to}</p>
                    <p>
                      Discount Type:{" "}
                      {isDiscounted == 0
                        ? "None"
                        : isDiscounted == 1
                        ? "Student"
                        : isDiscounted == 2
                        ? "PWD"
                        : isDiscounted == 3 && "Senior Citizen"}
                    </p>
                    <p>Payment Method: {paymentMethod}</p>
                    <p>Ticket Price: P{ticketPrice}</p>
                  </div>
                  <div className="receipt-btn-container">
                    <button
                      className="update-pass-btn"
                      onClick={addToTransactions}
                    >
                      Confirm Receipt
                    </button>
                    <button className="logout-btn" onClick={onPreviousPage}>
                      Back
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3
                    style={{
                      fontSize: "2.2rem",
                      marginBottom: "1rem",
                      color: "white",
                    }}
                  >
                    {stationPicked === "lrt1tbl"
                      ? "LRT 1"
                      : stationPicked === "lrt2tbl"
                      ? "LRT 2"
                      : stationPicked === "mrt3tbl"
                      ? "MRT 3"
                      : stationPicked === "pnrtbl" && "PNR"}
                  </h3>
                  <div className="selection-container">
                    <div className="select-container">
                      <label htmlFor="">From</label>
                      <select
                        value={from}
                        onChange={(e) => {
                          setFrom(e.target.value);
                        }}
                      >
                        <option value="0">-- Select Station --</option>
                        {stationPicked === "lrt1tbl" && (
                          <>
                            <option value="1">Baclaran</option>
                            <option value="2">EDSA</option>
                            <option value="3">Libertad</option>
                            <option value="4">Gil Puyat</option>
                            <option value="5">Vito_Cruz</option>
                            <option value="6">Quirino Avenue</option>
                            <option value="7">Pedro Gil</option>
                            <option value="8">United Nations</option>
                            <option value="9">Central Terminal</option>
                            <option value="10">Carriedo</option>
                            <option value="11">Doroteo Jose</option>
                            <option value="12">Bambang</option>
                            <option value="13">Tayuman</option>
                            <option value="14">Blumentritt</option>
                            <option value="15">Abad Santos</option>
                            <option value="16">R. Papa</option>
                            <option value="17">5th Avenue</option>
                            <option value="18">Monumento</option>
                            <option value="19">Balintawak</option>
                            <option value="20">Fernando Poe Jr.</option>
                          </>
                        )}
                        {stationPicked === "mrt3tbl" && (
                          <>
                            <option value="1">North Avenue</option>
                            <option value="2">Quezon Avenue</option>
                            <option value="3">GMA Kamuning</option>
                            <option value="4">Araneta Center Cubao</option>
                            <option value="5">Annapolis Santolan</option>
                            <option value="6">Ortigas</option>
                            <option value="7">Shaw Boulevard</option>
                            <option value="8">Boni</option>
                            <option value="9">Guadalupe</option>
                            <option value="10">Buendia</option>
                            <option value="11">Ayala</option>
                            <option value="12">Magallanes</option>
                            <option value="13">Taft Avenue</option>
                          </>
                        )}
                        {stationPicked === "pnrtbl" && (
                          <>
                            <option value="1">To_Tutuban</option>
                            <option value="2">To_Blumentritt</option>
                            <option value="3">To_Laon_Laan</option>
                            <option value="4">To_España</option>
                            <option value="5">To_StaMesa</option>
                            <option value="6">To_Pandacan</option>
                            <option value="7">To_Paco</option>
                            <option value="8">To_San_Andres</option>
                            <option value="9">To_Vito_Cruz</option>
                            <option value="10">To_Buendia</option>
                            <option value="11">To_Pasay_Road</option>
                            <option value="12">To_EDSA</option>
                            <option value="13">To_Nichols</option>
                            <option value="14">To_FTI</option>
                            <option value="15">To_Bicutan</option>
                            <option value="16">To_Sucat</option>
                            <option value="17">To_Alabang</option>
                            <option value="18">To_Muntinlupa</option>
                            <option value="29">To_San_Pedro</option>
                            <option value="20">To_Pacita_Main_Gate</option>
                            <option value="21">To_Golden_City_1</option>
                            <option value="22">To_Biñan</option>
                            <option value="23">To_StaRosa</option>
                            <option value="24">To_Cabuyao</option>
                            <option value="25">To_Mamatid</option>
                            <option value="26">To_Calamba</option>
                          </>
                        )}
                        {stationPicked === "lrt2tbl" && (
                          <>
                            <option value="1">Recto</option>
                            <option value="2">Legarda</option>
                            <option value="3">Pureza</option>
                            <option value="4">V. Mapa</option>
                            <option value="5">J. Ruiz</option>
                            <option value="6">Gilmore</option>
                            <option value="7">Betty Go Belmonte</option>
                            <option value="8">Araneta Center Cubao</option>
                            <option value="9">Anonas</option>
                            <option value="10">Katipunan</option>
                            <option value="11">Santolan</option>
                            <option value="12">Marikina</option>
                            <option value="13">Antipolo</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="select-container">
                      <label htmlFor="">To</label>
                      <select
                        value={to}
                        onChange={(e) => {
                          setTo(e.target.value);
                        }}
                      >
                        <option value="0">-- Select Station --</option>
                        {stationPicked === "lrt1tbl" && (
                          <>
                            <option value="To_Baclaran">Baclaran</option>
                            <option value="To_EDSA">EDSA</option>
                            <option value="To_Libertad">Libertad</option>
                            <option value="To_Gil_Puyat">Gil Puyat</option>
                            <option value="To_Vito_Cruz">Vito_Cruz</option>
                            <option value="To_QuirinoAvenue">
                              Quirino Avenue
                            </option>
                            <option value="To_Pedro_Gil">Pedro Gil</option>
                            <option value="To_United_Nations">
                              United Nations
                            </option>
                            <option value="To_Central_Terminal">
                              Central Terminal
                            </option>
                            <option value="To_Carriedo">Carriedo</option>
                            <option value="To_Doroteo_Jose">
                              Doroteo Jose
                            </option>
                            <option value="To_Bambang">Bambang</option>
                            <option value="To_Tayuman">Tayuman</option>
                            <option value="To_Blumentritt">Blumentritt</option>
                            <option value="To_Abad_Santos">Abad Santos</option>
                            <option value="To_R_Papa">R. Papa</option>
                            <option value="To_5th_Avenue">5th Avenue</option>
                            <option value="To_Monumento">Monumento</option>
                            <option value="To_Balintawak">Balintawak</option>
                            <option value="To_Fernando_Poe_Jr">
                              Fernando Poe Jr.
                            </option>
                          </>
                        )}
                        {stationPicked === "mrt3tbl" && (
                          <>
                            <option value="to_NorthAvenue">North Avenue</option>
                            <option value="to_QuezonAvenue">
                              Quezon Avenue
                            </option>
                            <option value="to_GMA_Kamuning">
                              GMA Kamuning
                            </option>
                            <option value="to_Araneta_Center_Cubao">
                              Araneta Center Cubao
                            </option>
                            <option value="to_SantolanAnnapolis">
                              Annapolis Santolan
                            </option>
                            <option value="to_Ortigas">Ortigas</option>
                            <option value="to_ShawBoulevard">
                              Shaw Boulevard
                            </option>
                            <option value="to_Boni">Boni</option>
                            <option value="to_Guadalupe">Guadalupe</option>
                            <option value="to_Buendia">Buendia</option>
                            <option value="to_Ayala">Ayala</option>
                            <option value="to_Magallanes">Magallanes</option>
                            <option value="to_TaftAvenue">Taft Avenue</option>
                          </>
                        )}
                        {stationPicked === "pnrtbl" && (
                          <>
                            <option value="To_Tutuban">Tutuban</option>
                            <option value="To_Blumentritt">
                              To_Blumentritt
                            </option>
                            <option value="To_Laon_Laan">Laon Laan</option>
                            <option value="To_España">España</option>
                            <option value="To_StaMesa">StaMesa</option>
                            <option value="To_Pandacan">Pandacan</option>
                            <option value="To_Paco">Paco</option>
                            <option value="To_San_Andres">San Andres</option>
                            <option value="To_Vito_Cruz">Vito Cruz</option>
                            <option value="To_Buendia">TBuendia</option>
                            <option value="To_Pasay_Road">Pasay Road</option>
                            <option value="To_EDSA">EDSA</option>
                            <option value="To_Nichols">Nichols</option>
                            <option value="To_FTI">FTI</option>
                            <option value="To_Bicutan">Bicutan</option>
                            <option value="To_Sucat">Sucat</option>
                            <option value="To_Alabang">Alabang</option>
                            <option value="To_Muntinlupa">Muntinlupa</option>
                            <option value="To_San_Pedro">San Pedro</option>
                            <option value="To_Pacita_Main_Gate">
                              Pacita Main Gate
                            </option>
                            <option value="To_Golden_City_1">
                              Golden City 1
                            </option>
                            <option value="To_Biñan">Biñan</option>
                            <option value="To_StaRosa">StaRosa</option>
                            <option value="To_Cabuyao">Cabuyao</option>
                            <option value="To_Mamatid">Mamatid</option>
                            <option value="To_Calamba">Calamba</option>
                          </>
                        )}
                        {stationPicked === "lrt2tbl" && (
                          <>
                            <option value="To_Recto">Recto</option>
                            <option value="To_Legarda">Legarda</option>
                            <option value="To_Pureza">Pureza</option>
                            <option value="To_Vmapa">V. Mapa</option>
                            <option value="To_Jruiz">J. Ruiz</option>
                            <option value="To_Gilmore">Gilmore</option>
                            <option value="To_Betty_Go_Belmonte">
                              Betty Go Belmonte
                            </option>
                            <option value="To_Araneta_Cubao">
                              Araneta Center Cubao
                            </option>
                            <option value="To_Anonas">Anonas</option>
                            <option value="To_Katipunan">Katipunan</option>
                            <option value="To_Santolan">Santolan</option>
                            <option value="To_Marikina">Marikina</option>
                            <option value="To_Antipolo">Antipolo</option>
                          </>
                        )}
                      </select>
                    </div>
                    <div className="select-container">
                      <label htmlFor="">Discount</label>
                      <select
                        value={isDiscounted}
                        onChange={(e) => {
                          setIsDiscounted(e.target.value);
                        }}
                      >
                        <option value="n/a">-- Select Discount Type --</option>
                        <option value="0">None</option>
                        <option value="1">Student</option>
                        <option value="2">PWD</option>
                        <option value="3">Senior Citizen</option>
                      </select>
                    </div>
                    <div className="select-container">
                      <label htmlFor="">Payment Method</label>
                      <select
                        value={paymentMethod}
                        onChange={(e) => {
                          setPaymentMethod(e.target.value);
                        }}
                      >
                        <option value="0">-- Select a Payment Method --</option>
                        <option value="GCash">Gcash</option>
                        <option value="Shopee Pay">Shopee Pay</option>
                        <option value="Grab Pay">Grab Pay</option>
                        <option value="Paymaya">Paymaya</option>
                        <option value="Online Banking">Online Banking</option>
                      </select>
                    </div>
                  </div>
                  <button
                    className="buy-ticket-confirm-btn"
                    onClick={handleConfirmStations}
                  >
                    Confirm
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
        {!isConfirmed && (
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
                  : stationPicked === "pnrtbl" &&
                    "Phil. National Railway (PNR)"}
              </h4>
            </div>
            <button className="go-back-button" onClick={onPreviousPage}>
              GO BACK
            </button>
          </div>
        )}
        <div className="ticketing-overlay"></div>
      </div>
      {isAddedToTransaction && (
        <TicketConfirmationModal
          onCloseModal={() => {
            location.reload();
          }}
        />
      )}
    </>
  );
}

export default BuyTicket;
