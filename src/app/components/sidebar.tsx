export default function SideBar() {
    const options = [
        {
            title: 'Price',
            desc: ["Min", "Max"],
        },
        {
            title: "Year of Manufacture",
            desc: ["1950-2000", "2000-2005", "2005-2015", "2015-2024"]
        },
        {
            title: "Locations",
            desc: ["Africa", "Asia", "Europe"]
        },
        {
            title: "Condition",
            desc: ["New", "Used"]
        },
        {
            title: "Brand",
            desc: ["Deere", "Mahindra", "Sdf group", "Kubota", "Kuhn", "CNH Global Nv"]
        }
    ];

    return (
        <div>
            <div className="container mx-auto flex flex-col bg-white">
                <div className="flex flex-col gap-5">
                    {
                        options.slice(0, 1).map((option, index) => (
                            <div key={index} className="flex flex-col gap-5 w-cover">
                                <h2 className="text-xl font-semibold text-black">{option.title}</h2>
                                <div className="flex gap-5">
                                    {option.desc.map((descItem, i) => (
                                        <input
                                            key={i}
                                            type="text"
                                            placeholder={descItem}
                                            className="w-cover px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50 mb-2"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="flex flex-col gap-5">
                    {
                        options.slice(1).map((option, index) => (
                            <div key={index} className="flex flex-col gap-5 w-cover">
                                <h2 className="text-xl font-semibold text-black">{option.title}</h2>
                                <div className="flex flex-col gap-5">
                                    {option.desc.map((descItem, i) => (
                                        <div key={i} className="flex items-center">
                                            <input
                                                type="checkbox"
                                                className="w-4 h-4 text-green-500 focus:outline-none border-2 border-gray-300 rounded-full mr-2"
                                            />
                                            <span className="text-sm text-black">{descItem}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
