import React from "react";
import { FaChrome } from "react-icons/fa";

const GetStart = () => {
  return (
    <section className="min-h-40 py-8 md:py-10 flex items-center justify-center px-4 bg-pink-700">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl text-white font-bold mb-4 md:mb-6">
          Get started today
        </h1>

        <p className="text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 leading-relaxed">
          It's time to take control of your Pins. Download the extension and
          <br />
          start using it today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center gap-2 bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
            Add to Chrome - It's Free <FaChrome size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStart;
