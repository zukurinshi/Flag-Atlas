import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import CountryDetail from "./pages/CountryDetails";
import NavBar from "./components/NavBar";
import WorldMap from "./pages/WorldMap";
import FlagHistory from "./pages/FlagHistory"
import Quiz from "./pages/Quiz";

function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/country-details")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/country_details/:id" element={<CountryDetail />} />
        <Route path="/world_map" element={<WorldMap />}/>
        <Route path="/flag_history" element={<FlagHistory />}/>
      </Routes>
    </>
  );
}

export default App;
