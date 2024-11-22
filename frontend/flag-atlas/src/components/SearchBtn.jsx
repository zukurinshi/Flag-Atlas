function SearchButton() {
  return (
    <div className="flex justify-end items-center relative w-full">
      <input type="text" className="w-80 bg-gray-100 p-4 rounded-md " placeholder="Enter country name"></input>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-6 absolute text-gray-400 right-4  "
      >
        <path
          fillRule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default SearchButton;
