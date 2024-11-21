import { FaSearch } from 'react-icons/fa';

export default function SearchBar({ placeholder = "field..." }) {
  return (
    <div className="w-full  max-w-md mx-auto">
      <div className="flex container mx-auto rounded-full p-1 items-center border border-gray-300 ">
        <input
          type="text"
          placeholder={placeholder}
          className="w-full p-1 text-sm text-black placeholder:text-gray-500 focus:outline-none"
        />
        <button className="p-2 text-gray-500 hover:text-gray-700">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}