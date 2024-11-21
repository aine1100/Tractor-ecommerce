import Image from "next/image";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import ProgressBar from "../../components/progress";
import { FaAppStore, FaGoogle, FaVoicemail } from "react-icons/fa";
import Link from "next/link";

export default function SignUp() {
    const buttons = [
        {
            icon: <FaAppStore />,
            name: "sign up with apple"
        }, {
            icon: <FaGoogle />,
            name: "sign up with google"
        }
    ];

    const inputData = [
        { name: "first Name" },
        { name: "second Name" },
        { name: "email Address" },
        { name: "phone Number" },
        { name: "password" },
        { name: "confirm password" }
    ];

    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-black">Create account</h2>

                    <div className="flex flex-col gap-5">
                        {
                            buttons.map((button, index) => (
                                <Button
                                    key={index}
                                    href=""
                                    text={button.name}
                                    className="bg-white text-gray-400 p-4 rounded-md border-[1.5px] border-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    width="100%"
                                    height="50px"
                                    icon={button.icon}
                                />
                            ))
                        }
                    </div>

                    <div className="flex gap-2 items-center justify-start">
                        <div className="w-[190px] rounded-md border-[1.5px] border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
                        <p className="text-black font-semibold text-xl">or</p>
                        <div className="w-[190px] rounded-md border-[1.5px] border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"></div>
                    </div>

                    {/* Name inputs */}
                    <div className="flex gap-5">
                        {
                            inputData.slice(0, 2).map((name, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={name.name}
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
                                />
                            ))
                        }
                    </div>

                    {/* Email and phone number inputs */}
                    <div className="flex gap-5">
                        {
                            inputData.slice(2, 4).map((name, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={name.name}
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
                                />
                            ))
                        }
                    </div>

                    {/* Password and Confirm Password inputs */}
                    <div className="flex gap-5">
                        {
                            inputData.slice(4).map((name, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    placeholder={name.name}
                                    className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
                                />
                            ))
                        }
                    </div>

                    

                    <Button href="" text="Create an account" className="bg-green-700 p-4 rounded-full text-md flex items-center justify-center" width="100%" height="50px" />
                    <p className="text-black text-md text-center">
                        already have an account? <Link href="" className=" text-md text-green-700">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
