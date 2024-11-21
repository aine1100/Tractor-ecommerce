import Image from "next/image";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";

export default function Login() {
    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-black">Welcome</h2>
                    <p className="text-md text-black">Choose your option</p>

                    <div className="flex flex-col gap-16">
                        <Dropdown
                            options={["Buyer", "Seller"]}
                            width="100%"
                            height="2.5rem"
                        />
                        <Button
                            href="/login"
                            text="Continue"
                            className="bg-green-400 p-4 rounded-full text-white"
                            width="100%"
                            height="50px"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
}
