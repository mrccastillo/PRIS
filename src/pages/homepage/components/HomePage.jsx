import Nav from "../../nav/Nav";
import Team from "../../aboutuspage/Team";
import HeroPage from "./HeroPage";
import Schedule from "./Schedule";
function HomePage() {
  return (
    <div>
      <Nav />
      <HeroPage />
      <Schedule />
      <Team />
    </div>
  );
}

export default HomePage;
