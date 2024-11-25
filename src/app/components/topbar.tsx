import SearchBar from "./search";

export default function BarTop() {
  return (
    <div className="w-full bg-white shadow-sm h-[100px] pt-5">
      <SearchBar placeholder="Search anything" className="bg-white lg:w-[400px] w-full border-none " />
    </div>
  );
}
