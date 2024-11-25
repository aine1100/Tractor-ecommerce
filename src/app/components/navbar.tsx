"use client";
import { FaBars, FaTimes } from "react-icons/fa";
import Button from "./button";
import SearchBar from "./search";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navbar = [
    {
      logo: <FaHeart />,
      name: "Favorite",
    },
    {
      logo: <FaShoppingCart />,
      name: "Cart",
    },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-white shadow-sm">
      <div className="container flex justify-between items-center p-4 mx-auto">
        <Button
          className="bg-green-700 text-white rounded-md"
          text="Categories"
          icon={<FaBars />}
          width="160px"
          height="45px"
          href="/"
        />

        <SearchBar />

        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-600 text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-8">
          {navbar.map((item, index) => (
            <div key={index} className="flex gap-2 items-center justify-center">
              {item.logo}
              <p className="text-md text-black">{item.name}</p>
            </div>
          ))}
          <Image
            src="/tractor.png"
            className="rounded-full w-10 h-10"
            width={10}
            height={10}
            alt="user"
          />
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 bg-white shadow-lg p-4">
          {navbar.map((item, index) => (
            <div
              key={index}
              className="flex gap-2 items-center justify-start border-b pb-2"
            >
              {item.logo}
              <p className="text-md text-black">{item.name}</p>
            </div>
          ))}
          <div className="flex gap-2 items-center">
            <Image
              src="/tractor.png"
              className="rounded-full w-10 h-10"
              width={40}
              height={40}
              alt="user"
            />
            <p className="text-md text-black">Profile</p>
          </div>
        </div>
      )}
    </nav>
  );
}
