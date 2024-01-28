import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/components/HomePage";
import Login from "./pages/login/Login";
import { useState, useEffect } from "react";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Initialize the value in localStorage if needed
    if (localStorage.getItem("isLoggedIn") === null) {
      localStorage.setItem("isLoggedIn", "false"); // Use strings for consistency
    }

    // Retrieve the value from localStorage and convert it to a boolean
    const loggedInStatus = JSON.parse(localStorage.getItem("isLoggedIn"));
    setLoggedIn(loggedInStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage loggedIn={loggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
      </Routes>
    </Router>
  );
}

export default App;
