import { easeIn, easeInOut, motion } from "framer-motion";
import "./Team.css";
import marc from "../../assets/marc1.png";
import james from "../../assets/james1.png";
import thea from "../../assets/thea1.png";
import tomas from "../../assets/tomas1.png";
import alex from "../../assets/alex1.png";
import janrey from "../../assets/janrey1.png";
import Particle from "../homepage/components/Particle";

function Team() {
  return (
    <>
      <Particle />
      <div className="about-us" id="about-us">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            borderBottom: "1px solid #3e3f9634",
          }}
        >
          <h2 id="title">MEET OUR TEAM</h2>
        </div>
        <p
          style={{
            marginTop: "2rem",
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
          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={thea} width="100%" />
            <div className="member-info">
              <div className="back">
                <a href="https://www.facebook.com/Eya.madxsz" target="_blank">
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4>Althea Marie Mandi</h4>
                <p>Group Leader and Planner</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={marc} width="100%" />
            <div className="member-info">
              <div className="back">
                <a
                  href="https://www.facebook.com/marclowel.castillo"
                  target="_blank"
                >
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4 className="">Marc Lowel Castillo</h4>
                <p className="">Frontend and Backend Leader</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={tomas} width="100%" />
            <div className="member-info">
              <div className="back">
                <a href="https://www.facebook.com/Tomas22106" target="_blank">
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4 className="">Tomas Lyndon Tabuyan</h4>
                <p className="">Frontend and Backend Assistant</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={james} width="100%" />
            <div className="member-info">
              <div className="back">
                <a
                  href="https://www.facebook.com/james.kalaw.75"
                  target="_blank"
                >
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4 className="">James Andrei Kalaw</h4>
                <p className="">Frontend and Backend Assistant</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={janrey} width="100%" />
            <div className="member-info">
              <div className="back">
                <a
                  href="https://www.facebook.com/janrey.vargas.35"
                  target="_blank"
                >
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4 className="">Jan Rey Vargas</h4>
                <p>Backend Assistant and Image Editor</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2, ease: easeIn }}
            // viewport={{ once: true }}
            className="col1"
          >
            <img className="hov" src={alex} width="100%" />
            <div className="member-info">
              <div className="back">
                <a href="https://www.facebook.com/aysabelala" target="_blank">
                  <div
                    style={{ width: "2.5rem", height: "2.5rem" }}
                    className="icons fb"
                  ></div>
                </a>
                <div
                  style={{ width: "2.3rem", height: "2.3rem" }}
                  className="icons x"
                ></div>
                <div
                  style={{ width: "2.5rem", height: "2.5rem" }}
                  className="icons ig"
                ></div>
              </div>
              <div className="front">
                <h4 className="">Alexandra Espanillo</h4>
                <p>Backend Assistant and Image Editor</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Team;
