import { useState } from "react";

function StartingLetter({ onLetterClick }) {
  const [selectedLetter, setSelectedLetter] = useState("");
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

  const handleClick = (letter) => {
    setSelectedLetter(letter);
    onLetterClick(letter);
  };

  const handleAllClick = () => {
    setSelectedLetter("");
    onLetterClick("");
  };

  return (
    <div className="flex font-inter space-x-3 w-full">
      <p
        onClick={handleAllClick}
        className={`cursor-pointer  ${
          selectedLetter == "" ? "font-bold text-red-500" : ""
        }hover:underline `}
      >
        All
      </p>
      {letters.split("").map((letter) => (
        <p
          key={letter}
          onClick={() => {
            handleClick(letter);
          }}
          className={`cursor-pointer ${
            selectedLetter == letter ? " font-bold text-red-600" : ""
          }hover:underline`}
        >
          {letter}
        </p>
      ))}
    </div>
  );
}

export default StartingLetter;
