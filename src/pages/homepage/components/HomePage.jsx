import { useState, useEffect } from "react";
import Nav from "../../nav/Nav";
import Team from "../../aboutuspage/Team";
import HeroPage from "./HeroPage";
import Schedule from "./Schedule";
import Contact from "./Contact";
import Ticketing from "./Ticketing";

function HomePage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setLoggedIn(isLoggedIn === "true");

    //get the logged-in user info
    if (isLoggedIn === "true") {
      const getUser = localStorage.getItem("user");
      const parsedUser = JSON.parse(getUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    console.log("loggedIn:", loggedIn);
  }, [loggedIn]);

  useEffect(() => {
    console.log("user:", user);
  }, [user]);

  return (
    <div>
      <Nav user={user} />
      <HeroPage />
      <Schedule />
      <Ticketing user={user} />
      <Team />
      <Contact />
    </div>
  );
}

export default HomePage;
