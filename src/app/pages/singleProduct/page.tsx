import Navbar from "@/app/components/navbar";
import Image from "next/image";
import imageOne from "../../image/trac.png"
import Button from "@/app/components/button";
import Card2 from "@/app/components/card2";
import { FaCaretDown } from "react-icons/fa";
import Slider from "@/app/components/silder";
import Card from "@/app/components/singleCard";
import Footer from "@/app/components/footer";

export default function SingleProduct() {
    const productImages = [imageOne, imageOne, imageOne, imageOne]
    
    
    const text = [{
        name: "field tractor",
        price: "$5678",
        location: "kigali,Rwanda",
        description: ["Field-ready performance", "Durable build for extensive use", "reliable engine", "maintained regularly for optimal", "performance", "Made in Russian"],
        head: "history",
        content: "Lorem ipsum dolor sit amet, consectetur adip",
        care: "care",
        content2: "Lorem ipsum dolor sit amet, consectetur",
        icon:<FaCaretDown/>

    }]
    const card = [
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/tractor.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/tractor.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
    ]
    const tractor = [
        {
            title: "Tractors",
            head: "Description",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis."

        }
    ]
    return (
        <div className="bg-white flex flex-col gap-10 h-cover pb-10">


            <Navbar />
            <div className="container mx-auto flex gap-10 px-5 2xl:p-0 items-start">
                <div className="flex flex-col gap-5">
                    {
                        productImages.map((image, index) => (
                            <Image key={index} src={image} alt="Product Image" className=" w-16 h-16 rounded-md" />
                        ))
                    }


                </div>
                <Image src={imageOne} alt="this is tractor" className="  lg:w-[500px] lg:h-[450px] rounded-md" width={200} height={200} />
                {
                    text.map((item, index) => (
                        <div key={index} className="flex flex-col gap-3">
                            <p className="text-xl font-semibold text-black">{item.name}</p>
                            <p className="text-2xl font-bold text-black">{item.price}</p>
                            <p className="text-md font-medium text-gray-600">{item.location}</p>
                            {
                                item.description.map((desc, index) => (
                                    <p key={index} className="text-md font-medium text-gray-600">{desc}</p>
                                ))
                            }
                            <Button href="" text="Add to cart" className="bg-green-700 p-4 rounded-full text-md flex items-center justify-center" width="300px" height="45px" />
                            <Card2 description={item.head} icon={item.icon} explanation={item.content} />
                            <Card2 description={item.care} icon={item.icon} explanation={item.content2} />

                        </div>
                    ))
                }



            </div>
            <div className="flex gap-0 bg-green-900 bg-full">
                <Image src={imageOne} className="w-[45%] h-[600px] " alt="tractor " />
                <div className=" bg-cover h-[600px]  items-center"  >
                    {
                        tractor.map((item,index)=>(
                            <div className="flex flex-col gap-5 p-4 text-left  h-[600px]  justify-center"   key={index}>
                                <p className="text-xl font-semibold text-gray-300">{item.title}</p>
                                <h2  className="text-xl font-semibold text-yellow-500">{item.head}</h2>
                                <p className="md:w-[500px] text-gray-300">{item.description}</p>
                                <Button href="" text="Buy" className="bg-yellow-500 p-4 rounded-md text-md flex items-center justify-center" width="150px" height="45px" />


                            </div>
                        ))
                    }

                </div>

            </div>
            <div className="container flex gap-10  px-5 flex-wrap mx-auto">
                <div className="flex flex-col items-center justify-center gap-5">
                <h2 className="text-2xl text-left font-bold text-gray-800">People also loved </h2>
                <p className="text-center text-md text-gray-700 lg:max-w-[500px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                     Dolore aut harum, nesciunt doloribus esse sed nam optio minus facilis enim culpa aliquam quisquam ad tenetur, fugiat vero et, sint architecto.</p>
                     <Button href="" text="Buy now" className="bg-green-800 shadow-lg p-4 rounded-md text-md flex items-center justify-center" width="150px" height="45px" />

         

                </div>
                {/* <Slider/> */}
                <div className="flex justify-center flex-wrap items-center gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {card.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        company={item.company}
                        location={item.location}
                        classname="border-none rounded-md shadow-md text-gray-600"
                    />
                ))}
            </div>

                </div>
                <Footer/>

            </div>

        </div>
    )

}