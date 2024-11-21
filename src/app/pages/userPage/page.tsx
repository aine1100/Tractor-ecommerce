import Button from "@/app/components/button";
import UserMessage from "@/app/components/message";
import Navbar from "@/app/components/navbar";
import ProductCard from "@/app/components/productCards";
import SearchBar from "@/app/components/search";
import SideBar from "@/app/components/sidebar";
import TextFIlter from "@/app/components/smallText";

export default function UserPage(){
   
    return(
        <div className="bg-white h-full text-black flex flex-col gap-10 pb-10 ">
            <Navbar/>
            <TextFIlter/>
            <div className=" container mx-auto flex gap-5">
            <SideBar/>
            <ProductCard/>
            <UserMessage/>
         


            </div>
            
            
          
            
        </div>
    )
}