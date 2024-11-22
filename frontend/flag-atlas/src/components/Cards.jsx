import { useEffect, useState } from "react";

function Card({ sort, selectedLetter, selectedContinent, selectedDesign }) {
  const [flags, setFlags] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/country-details")
      .then((res) => res.json())
      .then((data) => setFlags(data));
  }, []);

  // Filter by letter
  let filteredFlags = selectedLetter 
    ? flags.filter((flag) => flag.name.startsWith(selectedLetter))
    : flags;

  // Filter by continent
  filteredFlags = selectedContinent 
    ? filteredFlags.filter((flag) => flag.continent === selectedContinent)
    : filteredFlags;

  // Filter by design
  filteredFlags = selectedDesign 
    ? filteredFlags.filter((flag) => flag.design === selectedDesign)
    : filteredFlags;

  // Sort logic
  const alphabetical = sort ? [...filteredFlags].reverse() : filteredFlags;

  return (
    <>
      {alphabetical.map((flag) => (
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
      ))}
    </>
  );
}

export default Card;