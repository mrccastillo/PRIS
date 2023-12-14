import "../stylesheets/Schedule.css";
function Schedule() {
  return (
    <div className="schedule-container" id="schedule">
      <h2 className="schedule-header">SCHEDULE</h2>
      <div className="train-schedule-container">
        <div className="train-schedule">
          <select name="railway-schedule" id="">
            <option value="">LRT 1</option>
            <option value="">LRT 2</option>
            <option value="">LRT 3</option>
            <option value="">PNR</option>
          </select>
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
