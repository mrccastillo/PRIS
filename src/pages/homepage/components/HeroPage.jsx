import "../stylesheets/Heropage.css";

function HeroPage() {
  return (
    <>
      <div className="heropage" id="home">
        <div className="header-bg">
          <h1>
            PHILIPPINE
            <br />
            RAILWAY
            <br /> TICKETING
            <br />
            SYSTEM
          </h1>
        </div>
        <div className="content-container">
          <div className="contents">
            <h2>
              ANYWHERE
              <br />
              AWAITS
            </h2>
            <p>
              Embark on limitless adventures through the Philippines railway
              network, where anywhere awaits, and every journey is a gateway to
              new possibilities. Join us in exploring the diverse beauty of the
              NCR, one railway adventure at a time.
            </p>
          </div>
        </div>
        <div className="heropage-bg"></div>
      </div>
    </>
  );
}

export default HeroPage;
