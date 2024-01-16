import HomePage from "./pages/homepage/components/HomePage";
import Login from "./pages/login/Login";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  function loggedIn() {
    setIsLoggedIn(true);
  }

  return <>{isLoggedIn ? <HomePage /> : <Login isLoggedIn={loggedIn} />}</>;
}

export default App;
