import Image from "next/image";
import Dropdown from "../../components/dropdown";
import Button from "../../components/button";
import ProgressBar from "../../components/progress";
import { FaAppStore, FaGoogle } from "react-icons/fa";
import Link from "next/link";

export default function SignUp() {
  const buttons = [
    {
      icon: <FaAppStore />,
      name: "Sign up with Apple",
    },
    {
      icon: <FaGoogle />,
      name: "Sign up with Google",
    },
  ];

  const inputData = [
    { name: "First Name" },
    { name: "Second Name" },
    { name: "Email Address" },
    { name: "Phone Number" },
    { name: "Password" },
    { name: "Confirm Password" },
  ];

  return (
    <div className="flex justify-center items-center bg-gray-100 h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full sm:w-96">
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-black">Create Account</h2>

          {/* Sign-up buttons */}
          <div className="flex flex-col gap-5">
            {buttons.map((button, index) => (
              <Button
                key={index}
                href=""
                text={button.name}
                className="bg-white text-gray-400 p-4 rounded-md border-[1.5px] border-gray-400 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                width="100%"
                height="50px"
                icon={button.icon}
              />
            ))}
          </div>

          {/* Separator */}
          <div className="flex gap-2 items-center justify-center">
            <div className="w-[100px] h-[1px] bg-gray-300"></div>
            <p className="text-black font-semibold text-xl">or</p>
            <div className="w-[100px] h-[1px] bg-gray-300"></div>
          </div>

          {/* Input Fields */}
          <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
            {inputData.map((field, index) => (
              <input
                key={index}
                type="text"
                placeholder={field.name}
                className="w-full sm:w-[100%] px-4 py-2 text-sm text-black placeholder:text-gray-500 focus:outline-none border border-gray-300 rounded-md shadow-sm focus:border-green-500 hover:bg-gray-50"
              />
            ))}
          </div>

          {/* Submit Button */}
          <Button
            href=""
            text="Create an Account"
            className="bg-green-700 text-white p-4 rounded-full text-md flex items-center justify-center"
            width="100%"
            height="50px"
          />

          {/* Already have an account */}
          <p className="text-black text-md text-center">
            Already have an account?{" "}
            <Link href="" className="text-md text-green-700">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
