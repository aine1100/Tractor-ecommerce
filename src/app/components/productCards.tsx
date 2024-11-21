import Card from "./singleCard";

export default function ProductCard() {
    const card = [
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
        {
            image: "/hoe.png",
            name: "Field Hoe S",
            price: "$2000",
            company: "Deere",
            location: "Africa",
        },
    ];

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-0">
                {card.map((item, index) => (
                    <Card
                        key={index}
                        image={item.image}
                        name={item.name}
                        price={item.price}
                        company={item.company}
                        location={item.location}
                    />
                ))}
            </div>
        </div>
    );
}
