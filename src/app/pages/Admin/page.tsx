"use client";

import React from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaEllipsisV,
  FaList,
  FaGlobe,
  FaDumpsterFire,
  FaDatabase,
  FaSignOutAlt,
  FaHome,
} from "react-icons/fa";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import Sidebar2 from "@/app/components/buyerSiderbar";
import BarTop from "@/app/components/topbar";
import { FaGears, FaMessage, FaPeopleGroup, FaPerson } from "react-icons/fa6";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function Admin() {
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  // Full Sidebar Content
  const sidebarContent = [
    { icon: <FaHome />, name: "Dashboard" },
    { icon: <FaPeopleGroup />, name: "Products" },
    { icon: <FaList />, name: "Orders" },
    { icon: <FaGlobe />, name: "Shipment" },
    { icon: <FaMessage />, name: "Store Setting" },
    { icon: <FaDatabase />, name: "Exports" },
    { icon: <FaPerson />, name: "John Doe" },
    { icon: <FaGears />, name: "Setting" },
    { icon: <FaSignOutAlt />, name: "Log out" },
  ];

  // Data for Line Chart (Overall Sales)
  const salesData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        label: "Sales",
        data: [100, 200, 150, 250, 200, 300, 250, 400, 300, 350],
        borderColor: "#f59e0b",
        backgroundColor: "rgba(245, 158, 11, 0.2)",
        fill: true,
      },
    ],
  };

  const salesOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Order time data
  const orderTime = [
    { time: "Morning", percentage: "40%" },
    { time: "Afternoon", percentage: "32%" },
    { time: "Evening", percentage: "28%" },
  ];

  // Top countries data
  const topCountries = [
    { country: "India", flag: "🇮🇳", percentage: "16%" },
    { country: "United Kingdom", flag: "🇬🇧", percentage: "14%" },
    { country: "Rwanda", flag: "🇷🇼", percentage: "10%" },
  ];

  // Latest orders data
  const latestOrders = [
    { id: "#345", product: "Tractor 354", date: "Jan 12, 12:30pm", status: "Processing" },
    { id: "#345", product: "Hoe23", date: "Feb 3, 6:06pm", status: "Approved" },
    { id: "#556", product: "Ploughing tool", date: "Jan 12, 6:30pm", status: "Denied" },
    { id: "#578", product: "Wheelbarrow", date: "Feb 3, 6:06pm", status: "Completed" },
  ];

  return (
    <div className="flex bg-gray-100 h-screen lg:overflow-hidden">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-[200px] bg-white">
        <h1 className="text-xl p-4 text-center text-gray-700">Hello Tractor</h1>
        <div className="flex flex-col p-6 mt-10 gap-2 text-gray-700">
          {sidebarContent.map((item, index) => (
            <Sidebar2
              key={index}
              icon={item.icon}
              title={item.name}
              isActive={activeItem === item.name}
              onClick={() => setActiveItem(item.name)}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-[200px]">
        <BarTop />
        <div className="p-6 bg-gray-100 min-h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Overall Sales */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">Overall Sales</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-2xl font-bold text-gray-700">$2345.34</span>
                <span className="text-green-600 flex items-center">
                  <FaArrowUp className="mr-1" /> 12.45%
                </span>
              </div>
              <Line data={salesData} options={salesOptions} />
            </div>

            {/* Total Orders & Lifetime Value */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-2xl font-bold text-gray-700">$34567.7</span>
                <span className="text-red-600 flex items-center">
                  <FaArrowDown className="mr-1" /> -10.6%
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-700 mt-4">Lifetime Value</h3>
              <div className="flex justify-between items-center mt-2">
                <span className="text-2xl font-bold text-gray-700">$2345</span>
                <span className="text-green-600 flex items-center">
                  <FaArrowUp className="mr-1" /> 2.7%
                </span>
              </div>
            </div>

            {/* Top Countries */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">Top Countries</h3>
              <ul className="mt-4">
                {topCountries.map((country, index) => (
                  <li key={index} className="flex justify-between items-center py-2">
                    <span className="text-gray-700">
                      {country.flag} {country.country}
                    </span>
                    <span className="text-gray-700">{country.percentage}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Order Time & Latest Orders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            {/* Order Time */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">Order Time</h3>
              <ul className="mt-4">
                {orderTime.map((time, index) => (
                  <li key={index} className="flex justify-between py-2">
                    <span className="text-gray-700">{time.time}</span>
                    <span className="text-gray-700">{time.percentage}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Latest Orders */}
            <div className="bg-white p-4 rounded shadow">
              <h3 className="text-lg font-semibold text-gray-700">Latest Orders</h3>
              <table className="table-auto w-full mt-4 text-gray-700">
                <thead>
                  <tr>
                    <th className="text-left">Order Id</th>
                    <th className="text-left">Product</th>
                    <th className="text-left">Order Date</th>
                    <th className="text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {latestOrders.map((order, index) => (
                    <tr key={index} className="border-t">
                      <td>{order.id}</td>
                      <td>{order.product}</td>
                      <td>{order.date}</td>
                      <td>{order.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
