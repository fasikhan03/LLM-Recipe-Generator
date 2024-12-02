import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./signin";
import LandingPage from "./landing";
import SignupPage from "./signup";
import Newrecipe from "./newrecipe";
import Home from "./home";
import Profile from "./profile";
import Explore from "./explore";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <>
              <LandingPage />
            </>
          }
        />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/newrecipe" element={<Newrecipe />} />
        <Route path="/feed" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </Router>
  );
}

export default App;
