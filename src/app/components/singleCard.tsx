import { FaAddressBook } from "react-icons/fa";
import Button from "./button";

interface CardProps {
    image?: string;
    name: string;
    price: string;
    company: string;
    location: string;
}

export default function Card({ image, name, price, company, location }: CardProps) {
    return (
        <div className="bg-white border-[1.5px] border-gray-400rounded-md flex flex-col gap-2 w-full h-full">
            <div className="flex justify-end items-start text-right px-2 py-1">
                <FaAddressBook className="text-gray-200 text-xl" />
            </div>

            <img src={image || "/hoe.png"} alt={name} className="w-full h-[300px] object-cover p-3 rounded-t-md" />
            
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-xl font-semibold text-black">{price}</p>
                </div>
                
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col gap-1">
                        <p className="text-sm text-gray-500">{company}</p>
                        <p className="text-sm text-gray-500">{location}</p>
                    </div>
                    
                    <Button text="Contact Seller" className="border-[1.5px] bg-green-900 rounded-md text-white  px-4 py-2" href="/" width="150px" height="40px" />
                </div>
            </div>
        </div>
    );
}
