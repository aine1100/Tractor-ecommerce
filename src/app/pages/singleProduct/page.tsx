import Navbar from "@/app/components/navbar";
import Image from "next/image";
import imageOne from "../../image/trac.png"
import Button from "@/app/components/button";
import Card2 from "@/app/components/card2";

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
        content2: "Lorem ipsum dolor sit amet, consectetur"

    }]
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
            <div className="container mx-auto flex gap-10  items-start">
                <div className="flex flex-col gap-5">
                    {
                        productImages.map((image, index) => (
                            <Image key={index} src={image} alt="Product Image" className=" w-16 h-16 rounded-md" />
                        ))
                    }


                </div>
                <Image src={imageOne} alt="this is tractor" className="w-[500px] h-[450px] rounded-md" width={200} height={200} />
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
                            <Card2 description={item.head} icon="+" explanation={item.content} />
                            <Card2 description={item.care} icon="+" explanation={item.content2} />

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

        </div>
    )

}