import { useState } from "react";
import "../stylesheets/Ticketing.css";
import WhiteTrain from "../../../assets/whitetrain.png";
import YellowTrain from "../../../assets/yellowtrain.png";
import BlueTrain from "../../../assets/bluetrain.png";
import OrangeTrain from "../../../assets/orangetrain.png";
import YellowLine from "../../../assets/yellowline.png";
import Star from "../../../assets/star.png";

function Ticketing() {
  return (
    <div className="ticketing" id="ticketing">
      <div className="ticket-title">
        <img className="star --1" src={Star} />
        <h2>PICK A TRAIN LINE</h2>
        <img className="star --2" src={Star} />
      </div>

      <div className="railways">
        <div className="rail-lines">
          <img src={WhiteTrain} className="train-pics" />
          <h4 className="train-name">Light Rail Transit 1 (LRT-1)</h4>
        </div>

        <div className="rail-lines">
          <img src={YellowTrain} className="train-pics" />
          <h4 className="train-name">Light Rail Transit 2 (LRT-2)</h4>
        </div>

        <div className="rail-lines">
          <img src={BlueTrain} className="train-pics" />
          <h4 className="train-name">Metro Rail Transit 3 (MRT-3)</h4>
        </div>

        <div className="rail-lines">
          <img src={OrangeTrain} className="train-pics" />
          <h4 className="train-name">Phil. National Railway (PNR)</h4>
        </div>
      </div>
    </div>
  );
}

export default Ticketing;
