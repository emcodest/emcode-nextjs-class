// import Image from "next/image";
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Home() {
  const [nameIn, setNameIn] = useState("promise");
  const [listOfItems, setListOfItem] = useState(["Biro", "Pencil"]);
  
  useEffect(() => {
    setListOfItem((item) => [...item, "Crayon"]);
  }, []);

  const Login = () => {
    alert("Am here");
    setNameIn("emcode");
  };

  return (
    <div className="container">
      <h1>Real Home</h1>
      {nameIn}
      <div>
        <div>
          <Link href="/home">Go to next home</Link>
        </div>

        <button
          onClick={Login}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Click Me
        </button>
        <h1>List of items</h1>
        <div>
          {listOfItems.map((item) => (
            <div key={item} className="border">
              <h2>item : The {item}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
