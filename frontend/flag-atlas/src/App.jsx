import React, { useEffect, useState } from "react";
import Card from "./components/Cards";
import Gallery from "./components/Gallery";
import SortButton from "./components/SortBtn";
function App() {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/country-details")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  return (
    <>
      <Gallery />
    </>
  );
}

export default App;
