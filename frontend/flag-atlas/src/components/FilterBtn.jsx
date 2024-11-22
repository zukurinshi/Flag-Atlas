function FilterButton() {
  return (
    <div className="filter-container flex items-center w-auto  border rounded-md shadow-sm cursor-pointer justify-between relative">
      <select defaultValue="" className="appearance-none w-full py-3 px-2 bg-transparent outline-none cursor-pointer">
        <option value="" disabled hidden>Filter</option>
        <option value="" disabled >Continent:</option>
        <option value="Africa" >Africa</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia & Oceania</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value=""></option>
      </select>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute right-2 pointer-events-none"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        />
      </svg>
    </div>
  );
}

export default FilterButton;
