"use client";

import { useEffect, useState } from "react";
import getData from "./lib/fetch";

export default function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData("https://api.quotable.io/random");
        setQuote(data);
      } catch (error) {
        console.error("Error fetching quote:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="font-bold text-4xl mb-10">Quotes</h1>
      <div className="bg-white p-8 rounded-lg shadow-lg w-2/3">
        <img className="w-24 mb-4 mx-auto" src="/quote.png" alt="quote" />
        <div className="text-center">
          <p className="text-lg font-semibold mb-2">{quote.content}</p>
          <hr className="my-4 w-1/3 mx-auto border-t border-gray-300" />
          <p className="text-sm text-gray-600">{quote.author}</p>
        </div>
      </div>
    </div>
  );
}
