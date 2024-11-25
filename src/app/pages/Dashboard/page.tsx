"use client";

import Image from "next/image";
import React from "react";
import Sidebar2 from "@/app/components/buyerSiderbar";
import {
  FaArrowUp,
  FaArrowRight,
  FaMessage,
  FaStar,
  FaLine,
  FaCircleDot,
  FaPeopleGroup,
  FaList,
  FaGlobe,
  FaDumpsterFire,
  FaDatabase,
  FaPerson,
  FaGears,
} from "react-icons/fa6";
import BarTop from "@/app/components/topbar";
import Link from "next/link";
import Dropdown from "@/app/components/dropdown";
import { FaEdit, FaHome, FaSignOutAlt } from "react-icons/fa";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function Seller() {
  const [activeItem, setActiveItem] = React.useState("Dashboard");

  const sidebarContent = [
    { icon: <FaHome />, name: "Dashboard" },
    { icon: <FaPeopleGroup />, name: "Customers" },
    { icon: <FaList />, name: "All Reports" },
    { icon: <FaGlobe />, name: "Geography" },
    { icon: <FaMessage />, name: "Conversations" },
    { icon: <FaDumpsterFire />, name: "Deals" },
    { icon: <FaDatabase />, name: "Exports" },
    { icon: <FaPerson />, name: "John Doe" },
    { icon: <FaGears />, name: "Setting" },
    { icon: <FaSignOutAlt />, name: "Log out" },
  ];

  const cardContent = [
    {
      title: "Sales",
      value: "15%",
      description: "Increase compared to last month",
      links: "Sales report",
    },
    {
      title: "Revenue",
      value: "20%",
      description: "Increase compared to last month",
      links: "Revenue report",
    },
    {
      title: "Orders",
      value: "12%",
      description: "Increase compared to last month",
      links: "Orders report",
    },
  ];

  const customers = [
    { image: "/hoe.png", name: "Chris Evans", country: "Romania" },
    { image: "/hoe.png", name: "Jane Doe", country: "Germany" },
    { image: "/hoe.png", name: "Robert Downey", country: "USA" },
  ];

  const barChartData = {
    labels: ["2021", "2022", "2023", "2023", "2024", "2025"],
    datasets: [
      {
        label: "Growth Percentage",
        data: [15, 20, 12, 25, 18, 30],
        backgroundColor: "rgba(21, 128, 61, 0.7)", // green-700 with transparency
        
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: {
        callbacks: {
          label: (context) => `${context.raw}% growth`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { stepSize: 5 },
      },
    },
  };

  const statistics=[
    {
    title:"Top month",
    data:"November"
  },
  {
    title:"Top Year",
    data:"2024"
  }
]

  return (
    <div className="flex bg-white text-gray-600 h-screen">
      {/* Sidebar */}
      <div className="w-[200px] bg-white">
        <h1 className="text-xl p-4 text-center">Hello Tractor</h1>
        <div className="flex flex-col p-6 md:mt-10 gap-2">
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
      <div className="flex-1 bg-gray-100">
        <BarTop />
        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 p-5 grid-cols-1 gap-4">
          {cardContent.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 text-left py-3 px-5 h-[220px] bg-white rounded-xl shadow-md"
            >
              <h1 className="text-xl font-semibold">{item.title}</h1>
              <div className="flex gap-5 items-center">
                <p className="text-[25px]">{item.value}</p>
                <FaArrowUp className="text-green-600 rotate-45" />
              </div>
              <p>{item.description}</p>
              <div className="flex gap-5 items-center">
                <Link href={item.links} className="text-yellow-400">
                  {item.links}
                </Link>
                <FaArrowRight className="text-yellow-400" />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-14">
          <div className="p-5 mx-5 rounded-lg bg-white w-[800px]">
            <div className="flex gap-[300px] items-center justify-center">
              <h2 className="text-xl font-semibold mb-5">Customers</h2>
              <Dropdown options={["Sort by newest", "Sort by date"]} />
            </div>
            <div className="grid grid-cols-1  gap-5 mt-5">
              {customers.map((customer, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-5 shadow-sm relative group"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={customer.image}
                      alt={customer.name}
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <p className="text-lg font-semibold">{customer.name}</p>
                      <p className="text-gray-500">{customer.country}</p>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 flex items-center gap-2 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaMessage className="text-gray-400 hover:text-blue-500" />
                    <FaStar className="text-gray-400 hover:text-yellow-400" />
                    <FaEdit className="text-gray-400 hover:text-green-500" />
                    <FaLine className="text-gray-400 hover:text-red-500" />
                    <FaCircleDot className="text-gray-400 hover:text-purple-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-start flex-1 gap-3">
            <div className="bg-white rounded-md w-[800px] h-[300px] p-7 text-start">
              <h2 className="text-xl font-semibold text-gray-600">Growth</h2>
              <Bar data={barChartData} options={barChartOptions} />
              <div className="flex gap-10 p-2">
                {
                    statistics.map((item, i) =>(
                        <div className="flex flex-col items-center justify-center gap-5 rounded-lg text-center bg-white  w-[500px] h-[120px]" key={i}>
                            <h1 className="text-gray-500 font-semibold text-xl">{item.title}</h1>
                            <h2 className="text-green-800 font-semibold text-xl">{item.data}</h2>

                        </div>
                    ))
                }

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
