import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

function CountryDetail() {
  const { id } = useParams();
  const [countryDetail, setCountryDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/country-details/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setCountryDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching country details:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader loading={loading} size={50} color={"#3b85ff"} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <section>
      <div className="relative image-container">
        <img
          className="w-full object-cover"
          src={countryDetail.imageHD}
          alt={countryDetail.name}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 to-transparent" />

        <div className="absolute px-10 bottom-11 space-y-5 left-4 z-10">
          <h1 className="text-white tracking-wider font-oswald font-bold text-6xl">
            {countryDetail.name}
          </h1>
          <h4 className="text-white font-inter -tracking-wide font-thin text-2xl">
            {countryDetail.capital}
          </h4>
        </div>
      </div>
      </section>
      <section>
      <div className="px-28 py-12 text-gray-900 font-inter text-justify">
        <p className="text-xl">{countryDetail.location}</p>
        <br/>
        <h2 className="font-bold text-2xl">History</h2>
        <p className="text-xl">{countryDetail.history}</p>
        <br/>
        <h2 className="font-bold text-2xl">Economy</h2>
        <p className="text-xl">{countryDetail.economy}</p>
        <br/>
        <h2 className="font-bold text-2xl">Government</h2>
        <p className="text-xl">{countryDetail.government}</p>
        <br/>
        <h2 className="font-bold text-2xl">Language</h2>
        <p className="text-xl">{countryDetail.language}</p>
        <br/>
        <h2 className="font-bold text-2xl">Tourism</h2>
        <p className="text-xl">{countryDetail.tourism}</p>
        <br/>
        <h2 className="font-bold text-2xl">Population</h2>
        <p className="text-xl">{countryDetail.population}</p>
        <br/>
        <h2 className="font-bold text-2xl">Cuisine</h2>
        <p className="text-xl">{countryDetail.cuisine}</p>
      </div>
      </section>
    </motion.div>
  );
}

export default CountryDetail;
