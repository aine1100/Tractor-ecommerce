import Image from "next/image";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import ProgressBar from "../../components/progress";
import { FaAppStore, FaGoogle, FaVoicemail } from "react-icons/fa";
import Link from "next/link";

export default function ForgotPassword() {
    

    const inputData = [
        {
            name: "First Name",
        },
        {
            name: "Second Name",
        },{
            name: "Email Address",
        }
    ];

    return (
        <div className="flex justify-center items-center bg-gray-100 h-screen">
            <div className=" container mx-auto bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
                <div className="flex flex-col gap-6">
                    <h2 className="text-2xl font-bold text-black">Forgot Password</h2>

                   
                    {
                        inputData.map((name, index) => (
                            <input
                                key={index}
                                type="text"
                                placeholder={name.name}
                                className="w-full px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
                            />
                        ))
                    }


                    <Button href="" text="Send confirmation email" className="bg-green-700 p-4 rounded-full text-md flex items-center justify-center" width="100%" height="50px" />
                   
                </div>
            </div>
        </div>
    );
}
