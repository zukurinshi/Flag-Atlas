import { useState } from "react";
import Card from "./Cards";
import SortButton from "./SortBtn";
import FilterButton from "./FilterBtn";
import FilterOptions from "./FilterOptions";
import StartingLetter from "./Letters";
import SearchButton from "./SearchBtn";
useState;

function Gallery() {
  const [selectedContinent, setSelectedContinent] = useState("");
  const [selectedDesign, setSelectedDesign] = useState("");
  const [isReversed, setIsReversed] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState("");
  const [onSearch,setOnSearch] = useState("");

  const handleSearch = () => {

  }

  const handleLetterClick = (letter) => {
    if(letter == ""){
      setSelectedContinent("");
      setSelectedDesign("");
      setSelectedLetter("");
    }
    else {
      setSelectedLetter(letter);
    }
  };

  const toggleSort = () => {
    setIsReversed(!isReversed);
  };

  const handleContinentClick = (continent) => {
    setSelectedContinent(setSelectedContinent === continent ? "":continent);
  };

  const handleDesignClick = (design) => {
    setSelectedDesign(setSelectedDesign === design? "":design);
  };

  return (
    <>
      <div className="sort-container space-x-3 px-12 pt-6 flex w-full ">
        <SortButton toggleSort={toggleSort} isReversed={isReversed} />
        <FilterOptions
          onContinentClick={handleContinentClick}
          onDesignClick={handleDesignClick}
        />
      </div>
      <div className="px-12 pt-6 items-center flex w-full">
        <StartingLetter onLetterClick={handleLetterClick} />
        <SearchButton />
      </div>
      <div className="gallery-container grid grid-cols-1 gap-y-12 gap-x-4 py-8 px-12 w-full md:grid md:grid-cols-2 lg:grid lg:grid-cols-4">
        <Card
          sort={isReversed}
          selectedLetter={selectedLetter}
          selectedContinent={selectedContinent}
          selectedDesign={selectedDesign}
        />
      </div>
    </>
  );
}

export default Gallery;
