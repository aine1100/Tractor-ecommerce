import { FaBars } from "react-icons/fa";
import Button from "./button";
import SearchBar from "./search";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function Navbar(){
    const navbar=[
        {
            logo:<FaHeart/>,
            name:"Favorite"
        },{
            logo:<FaShoppingCart/>,
            name:"Cart"
        }
    ]
    return(
        <nav className="bg-white shadow-sm">
            <div className="container flex justify-between items-center p-4 mx-auto ">
                <Button className="bg-green-700 text-white rounded-md" text="Categories" icon={<FaBars/>} width="160px" height="45px" href="/" />
                <SearchBar/>
               <div className="flex items-center  justify-center gap-8">
               {  navbar.map((item,index)=>(
                  <div key={index} className="flex gap-2 items-center justify-center">
                    {item.logo}
                    <p className="text-md text-black">{item.name}</p>

                  </div>
                ))}
                <Image src="/tractor.png" className="rounded-full w-10 h-10" width={10} height={10} alt="user" />
               </div>

            </div>
        </nav>
    )
}