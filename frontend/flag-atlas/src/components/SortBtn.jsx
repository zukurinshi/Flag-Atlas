function SortButton({toggleSort,isReversed}) {
    const reverse = "(Z-A)";
    const alphabetical = "(A-Z)";
    const isAlphabetical = isReversed?alphabetical:reverse;
  return (
    <div onClick={toggleSort} className="flex items-center hover:bg-gray-100  py-3 px-2 border rounded-md shadow-sm cursor-pointer justify-between">
      <p>Sort {isAlphabetical}</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="size-4"
      >
        <path
          fillRule="evenodd"
          d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
}

export default SortButton;
