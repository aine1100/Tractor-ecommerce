import Button from "@/app/components/button";
import Dropdown from "@/app/components/dropdown";
import Navbar from "@/app/components/navbar";

export default function Delivery() {
  const inputData = [
    { name: "First Name" },
    { name: "Second Name" },
    { name: "Address" },
    { name: "Phone Number" },
    { name: "City" },
    { name: "Postal Code" },
  ]; const inputData2 = [
    { name: "Card Number" },
    { name: "Expiration Date" },
    { name: "Security Code" },
    { name: "Card Holder Number" },
   
  ];

  return (
    <div className="container mx-auto text-gray-800 md:h-screen h-cover bg-white pb-10">
      <Navbar />
      <div className="grid md:grid-cols-2 grid-cols-1  md:gap-20 gap-5 items-center p-10">
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold text-xl">Delivery</h2>
          <Dropdown
            options={["Country/Region", "Rwanda", "Uganda", "Kenya", "Tanzania", "Burundi"]}
            width="300px"
            height="2.5rem"
          />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            {inputData.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item.name}
                className="w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
              />
            ))}
            <div className="flex gap-5 items-center ">
                <input type="checkbox" name="" id="" className="w-4 h-4 border-2 border-gray-600" />
                <p className="text-md font-semibold">Save this info for the future</p>

            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <h2 className="font-semibold text-xl">Payment</h2>
          <Dropdown
            options={["Choose payment", "Credit card", "Phone number", "Paypal"]}
            width="300px"
            height="2.5rem"
          />

          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            {inputData2.map((item, index) => (
              <input
                key={index}
                type="text"
                placeholder={item.name}
                className="w-[300px] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
              />
            ))}
            <div className="flex gap-5 items-center ">
                <input type="checkbox" name="" id="" className="w-4 h-4 border-2 border-gray-600" />
                <p className="text-md font-semibold">Save this info for the future</p>

            </div>
          </div>
        </div>
      </div>
      <Button text="Pay Now" width="300px" height="50px" href="" className="bg-green-800 text-white w-[150px] md:w-[300px] rounded-lg lg:mx-[35rem] mx-7 p-5"/>
    </div>
  );
}
