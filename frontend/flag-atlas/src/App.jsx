import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import CountryDetail from "./pages/CountryDetails";

function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/country-details")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Gallery/>} />
        <Route path="/country_details/:id" element={<CountryDetail/>}/>
      </Routes>
    </>
  );
}

export default App;
