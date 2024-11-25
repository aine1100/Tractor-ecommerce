import Link from "next/link"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"

export default function Footer(){
    const icons=[
        <FaFacebook/>,<FaInstagram/>,<FaTwitter/>
    ]
    const content=[
        "Home","Community","Buy","Explore"
    ]
    return(
        <div className="container mx-auto py-10 ">
            <div className="flex justify-between flex-wrap  ">
                <div className="flex flex-col gap-10">
                    <p className="text-gray-600 md:max-w-[500px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quidem praesentium rerum exercitationem eos consectetur odio ipsum, eaque iste omnis, voluptatem quis minima consequatur! Quisquam cum aut consequatur delectus repellendus!</p>
                    <div className="flex items-center gap-10 text-center ">
                    {
                        icons.map((icon,index)=>(
                            <div key={index} className="bg-green-800 flex text-xl items-center justify-center text-center rounded-full text-white w-10 h-10 leading-none">
                            {icon}
                        </div>
                        
                        ))
                    }

                    </div>

                </div>
                <div className="flex flex-col gap-10 font-medium">
                    {
                        content.map((item,index)=>(
                            <Link key={index} href="#" className="text-gray-600 hover:text-gray-800">{item}</Link>
                        ))
                    }

                </div>
                <div className="flex flex-col gap-10">
                    {
                        content.map((item,index)=>(
                            <Link key={index} href="#" className="text-gray-600 hover:text-gray-800">{item}</Link>
                        ))
                    }

                </div>
                <div className="flex flex-col gap-10">
                    {
                        content.map((item,index)=>(
                            <Link key={index} href="#" className="text-gray-600 hover:text-gray-800">{item}</Link>
                        ))
                    }

                </div>

            </div>

        </div>
    )
}