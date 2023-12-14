import "./Team.css";
import marc from "../../assets/marc1.png";
import james from "../../assets/james.png";
import thea from "../../assets/thea.png";
import tomas from "../../assets/tomas.png";
import alex from "../../assets/alex.png";
import janrey from "../../assets/janrey.png";

function Team() {
  return (
    <>
      <div className="about-us" id="about-us">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #e6d8e8",
          }}
        >
          <h2 id="title">MEET OUR TEAM</h2>
        </div>
        <p
          style={{
            marginTop: "1.7rem",
            textAlign: "center",
            padding: "0 10rem",
            opacity: 0.7,
          }}
        >
          We are senior high school students at Polytechnic University of the
          Philippines, our goal is to enhance the commuting experience for the
          103 million individuals who commute using the trains, making it one of
          the busiest transportation modes in the Philippines. With the help of
          Philippine Railway Information System (PRIS), we seek to reduce the
          lines forming inside train stations and enhance the commuting process.
        </p>
        <div className="team-container">
          <div className="col1">
            <img className="hov" src={thea} width="100%" />
            <div className="member-info">
              <h4>Althea Marie Mandi</h4>
              <p>Group Leader and Planner</p>
            </div>
          </div>

          <div className="col1">
            <img className="hov" src={marc} width="100%" />
            <div className="member-info">
              <h4 className="">Marc Lowel Castillo</h4>
              <p className="">Frontend and Backend Leader</p>
            </div>
          </div>

          <div className="col1">
            <img className="hov" src={tomas} width="100%" />
            <div className="member-info">
              <h4 className="">Tomas Lyndon Tabuyan</h4>
              <p className="">Frontend and Backend Assistant</p>
            </div>
          </div>

          <div className="col1">
            <img className="hov" src={james} width="100%" />
            <div className="member-info">
              <h4 className="">James Andrei Kalaw</h4>
              <p className="">Frontend and Backend Assistant</p>
            </div>
          </div>

          <div className="col1">
            <img className="hov" src={janrey} width="100%" />
            <div className="member-info">
              <h4 className="">Jan Rey Vargas</h4>
              <p>Backend Assistant and Image Editor</p>
            </div>
          </div>

          <div className="col1">
            <img className="hov" src={alex} width="100%" />
            <div className="member-info">
              <h4 className="">Alexandra Espanillo</h4>
              <p>Backend Assistant and Image Editor</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
