import { useState } from "react";
function FilterOptions({ onContinentClick, onDesignClick }) {
  const [activeContinent, setActiveContinent] = useState("");
  const [activeDesign, setActiveDesign] = useState("");

  const handleContinentClick = (continent) => {
    setActiveContinent(activeContinent === continent ? "" : continent);
    onContinentClick(activeContinent === continent ? "" : continent);
  };

  const handleDesignClick = (design) => {
    setActiveDesign(activeDesign === design ? "" : design);
    onDesignClick(activeDesign === design ? "" : design);
  };
  return (
    <>
      <div className="filters font-inter flex items-center  py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "Africa" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("Africa")}
        >
          Africa
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "Asia" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("Asia")}
        >
          Asia
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "Australia & Oceania"
              ? "bg-blue-500 text-white"
              : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("Australia & Oceania")}
        >
          Australia & Oceania
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "Europe" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("Europe")}
        >
          Europe
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "North America" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("North America")}
        >
          North America
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeContinent === "South America" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleContinentClick("South America")}
        >
          South America
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeDesign === "stripe" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleDesignClick("stripe")}
        >
          Color stripes
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeDesign === "stripeS" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleDesignClick("stripeS")}
        >
          Color stripes with Symbols
        </p>
      </div>
      <div className="filters flex items-center   py-3 px-1 cursor-pointer justify-between">
        <p
          className={`${
            activeDesign === "plain" ? "bg-blue-500 text-white" : "text-black"
          }  p-2 rounded`}
          onClick={() => handleDesignClick("plain")}
        >
          Plain Symbols
        </p>
      </div>
    </>
  );
}

export default FilterOptions;
