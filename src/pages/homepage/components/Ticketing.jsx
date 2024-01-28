import { useState } from "react";
import "../stylesheets/Ticketing.css";
import WhiteTrain from "../../../assets/whitetrain.png";
import YellowTrain from "../../../assets/yellowtrain.png";
import BlueTrain from "../../../assets/bluetrain.png";
import OrangeTrain from "../../../assets/orangetrain.png";
import Star from "../../../assets/star.png";
import BuyTicket from "./BuyTicket";
import LoginRequired from "../../Modals/LoginRequired";

function Ticketing({ user }) {
  const [stationPicked, setStationPicked] = useState();

  function onCloseModal() {
    setStationPicked("");
  }

  return (
    <>
      {user && stationPicked ? (
        <BuyTicket
          YellowTrain={YellowTrain}
          WhiteTrain={WhiteTrain}
          BlueTrain={BlueTrain}
          OrangeTrain={OrangeTrain}
          stationPicked={stationPicked}
          onPreviousPage={onCloseModal}
          user={user[0]}
        />
      ) : (
        <div className="ticketing" id="ticketing">
          <div className="ticketing-overlay"></div>
          <div className="ticket-title">
            <img className="star --1" src={Star} />
            <h2 style={{ color: "white" }}>PICK A TRAIN LINE</h2>
            <img className="star --2" src={Star} />
          </div>

          <div className="railways">
            <div
              className="rail-lines"
              onClick={() => {
                setStationPicked("lrt1tbl");
              }}
            >
              <img src={WhiteTrain} className="train-pics" />
              <div className="train-name-container">
                <h4 className="train-name">Light Rail Transit 1 (LRT-1)</h4>
              </div>
            </div>

            <div
              className="rail-lines"
              onClick={() => {
                setStationPicked("lrt2tbl");
              }}
            >
              <img src={YellowTrain} className="train-pics" />
              <div className="train-name-container">
                <h4 className="train-name">Light Rail Transit 2 (LRT-2)</h4>
              </div>
            </div>

            <div
              className="rail-lines"
              onClick={() => {
                setStationPicked("mrt3tbl");
              }}
            >
              <img src={BlueTrain} className="train-pics" />
              <div className="train-name-container">
                <h4 className="train-name">Metro Rail Transit 3 (MRT-3)</h4>
              </div>
            </div>

            <div
              className="rail-lines"
              onClick={() => {
                setStationPicked("pnrtbl");
              }}
            >
              <img src={OrangeTrain} className="train-pics" />
              <div className="train-name-container">
                <h4 className="train-name">Phil. National Railway (PNR)</h4>
              </div>
            </div>
          </div>
        </div>
      )}
      {!user && stationPicked && <LoginRequired onCloseModal={onCloseModal} />}
    </>
  );
}

export default Ticketing;
