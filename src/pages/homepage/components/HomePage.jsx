import Nav from "../../nav/Nav";
import Team from "../../aboutuspage/Team";
import HeroPage from "./HeroPage";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Ticketing from "./Ticketing";

function HomePage() {
  return (
    <div>
      <Nav />
      <HeroPage />
      <Schedule />
      <Ticketing />
      <Team />
      <Contact />
    </div>
  );
}

export default HomePage;
