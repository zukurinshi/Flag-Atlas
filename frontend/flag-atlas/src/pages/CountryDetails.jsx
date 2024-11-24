import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const { id } = useParams(); // Get the ID from the URL
  const [countryDetail, setCountryDetail] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/country-details/${id}`) // Fetch data for this specific country
      .then((res) => res.json())
      .then((data) => setCountryDetail(data))
      .catch((error) => console.error("Error fetching country details:", error));
  }, [id]);

  if (!countryDetail) {
    return <p>Loading...</p>; // Show loading state while fetching
  }

  return (
    <>
      <h1>This is the country detail for {countryDetail.name}</h1>
      <img src={`http://localhost:3000/images/${countryDetail.imageUrl}`} alt={countryDetail.name} />
    </>
  );
}

export default CountryDetail;