"use client";
import Navbar from "@/app/components/navbar";
import React, { useState } from "react";
interface itemsProps{
    id:number;
    delta:number;
}

export default function UserProducts() {
  const header = ["Product", "Price", "Quantity", "Total"];
  const header2 = ["Home", "Shopping Cart"];

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Field Tractor Model 3455",
      color: "Red",
      image: "/tractor.png", // Replace with actual image paths
      price: 445.78,
      quantity: 1,
    },
    {
      id: 2,
      name: "Field Tractor Model 3455",
      color: "Red",
      image: "/tractor.png",
      price: 445.78,
      quantity: 1,
    },
  ]);

  const handleQuantityChange = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div className="container mx-auto text-gray-600 bg-white h-screen pb-10">
      <Navbar />
      <div className="flex justify-center items-center gap-10  p-10">
        {
            header2.map((item,index) =>(
                <h2 key={index} className="text-xl text-gray-800 font-semibold">{item}</h2>
            ))
        }

      </div>

      <div className="flex justify-between items-center px-6 py-4 border-b font-bold text-gray-600">
        {header.map((item, index) => (
          <div
            key={index}
            className={`flex-1 text-center ${
              item === "Product" ? "text-left" : ""
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      {/* Product Rows */}
      <div className="px-6 py-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border-b pb-4 mb-4"
          >
            {/* Product */}
            <div className="flex flex-1 items-center text-left">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">{item.name}</h2>
                <p className="text-gray-600">Color: {item.color}</p>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 underline mt-2"
                >
                  Remove
                </button>
              </div>
            </div>

            {/* Price */}
            <p className="flex-1 text-center font-medium">
              ${item.price.toFixed(2)}
            </p>

            {/* Quantity */}
            <div className="flex flex-1 justify-center items-center space-x-2">
              <button
                onClick={() => handleQuantityChange(item.id, -1)}
                className="bg-gray-200 px-2 rounded"
              >
                -
              </button>
              <p className="w-8 text-center">{item.quantity}</p>
              <button
                onClick={() => handleQuantityChange(item.id, 1)}
                className="bg-gray-200 px-2 rounded"
              >
                +
              </button>
            </div>

            {/* Total */}
            <p className="flex-1 text-center font-medium">
              ${(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
