import "../stylesheets/Schedule.css";
function Schedule() {
  return (
    <div className="schedule-container" id="schedule">
      <h2 className="schedule-header">SCHEDULE</h2>
      <div className="train-schedule-container">
        <div className="train-schedule">
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
        </div>
        <div className="blob">
          <h2 className="blob-text">
            CHOOSE
            <br />
            YOUR
            <br />
            STATION
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
