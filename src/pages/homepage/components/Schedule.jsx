import { useState } from "react";
import "../stylesheets/Schedule.css";

function Schedule() {
  const [isActive, setIsActive] = useState(1);

  return (
    <div className="schedule-container" id="schedule">
      <h2 className="schedule-header" style={{ marginBottom: "1.5rem" }}>
        SCHEDULE
      </h2>
      <p
        style={{
          textAlign: "center",
          borderBottom: "1px solid #00000025",
          paddingBottom: "1.5rem",
        }}
      >
        Select your station
      </p>
      <div className="train-schedule-container">
        <div className="train-schedule">
          <div className="choose-your-train-container">
            <div
              className={
                isActive === 1
                  ? "choose-train --1 --active"
                  : "choose-train --1"
              }
              onClick={() => {
                setIsActive(1);
              }}
            >
              <h4
                style={{
                  color: "white",
                  lineHeight: "3rem",
                  paddingRight: "1.5rem",
                }}
              >
                LRT 1
              </h4>
            </div>
            <div
              className={
                isActive === 2 ? "choose-train --active" : "choose-train "
              }
              onClick={() => {
                setIsActive(2);
              }}
            >
              <h4 style={{ color: "white", lineHeight: "3rem" }}>LRT 2</h4>
            </div>
            <div
              className={
                isActive === 3 ? "choose-train --active" : "choose-train "
              }
              onClick={() => {
                setIsActive(3);
              }}
            >
              <h4 style={{ color: "white", lineHeight: "3rem" }}>MRT 3</h4>
            </div>
            <div
              className={
                isActive === 4 ? "choose-train --active" : "choose-train "
              }
              onClick={() => {
                setIsActive(4);
              }}
            >
              <h4 style={{ color: "white", lineHeight: "3rem" }}>PNR</h4>
            </div>
          </div>
          <div className="map-schedule-container">
            <div className="schedule">
              <div className="time-container">
                <p className="time">WEEKDAYS: </p>
              </div>
              <div className="time-container">
                <p className="time">WEEKENDS:</p>
              </div>
            </div>
            <div className="map">
              <div className="time-container">
                <p className="time">
                  {isActive === 1
                    ? "5:00 AM - 9:30 PM"
                    : isActive === 2
                    ? "5:00 AM - 9:30 PM"
                    : isActive === 3
                    ? "4:59 AM - 9:10 PM"
                    : isActive === 4 && "12:00 AM - 7:30 PM"}
                </p>
              </div>
              <div className="time-container">
                <p className="time">
                  {isActive === 1
                    ? "5:00 AM - 9:10 PM"
                    : isActive === 2
                    ? "5:00 AM - 9:00 PM"
                    : isActive === 3
                    ? "12: AM - 11:00 PM"
                    : isActive === 4 && "12:00 AM - 7:30 PM"}
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="train-schedule">
          <select name="railway-schedule" className="schedule-select">
            <option value="">LRT 1</option>
            <option value="">LRT 2</option>
            <option value="">LRT 3</option>
            <option value="">PNR</option>
          </select>
          <h3>
            TRAIN SCHEDULE IN:
            <br />
            LRT 2
          </h3>
          <div className="schedule">
            <div className="weekdays">
              <p className="label">WEEKDAYS</p>
              <p className="label">5AM - 10PM</p>
            </div>
            <div className="weekends">
              <p className="label">WEEKENDS</p>
              <p className="label">5AM - 9PM</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Schedule;
