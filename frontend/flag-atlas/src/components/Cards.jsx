import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Card({ sort, selectedLetter, selectedContinent, selectedDesign }) {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/country-details")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);


  let filteredFlags = selectedLetter 
    ? flags.filter((flag) => flag.name.startsWith(selectedLetter))
    : flags;

 
  filteredFlags = selectedContinent 
    ? filteredFlags.filter((flag) => flag.continent === selectedContinent)
    : filteredFlags;


  filteredFlags = selectedDesign 
    ? filteredFlags.filter((flag) => flag.design === selectedDesign)
    : filteredFlags;


  const alphabetical = sort ? [...filteredFlags].reverse() : filteredFlags;

  return (
    <>
      {alphabetical.map((flag) => (
        <Link to={`/country_details/${flag.id}`}>
        <div
          key={flag.id}
          className="cursor-pointer font-montserrat transition ease-in-out duration-500 hover:-translate-y-4"
        >
          <img
            src={`http://localhost:3000/images/${flag.imageUrl}`}
            alt={flag.name}
            title={flag.name}
            className="object-cover w-full h-72 shadow-md "
          />
          <h2 className="text-lg text-center font-semibold mt-4">
            {flag.name}
          </h2>
        </div>
        </Link>
      ))}
    </>
  );
}

export default Card;