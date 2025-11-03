import React from "react";

const TrustedCreators = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 md:px-6 lg:px-20 py-12 md:py-16 bg-white">
      {/* Left Image */}
      <div className="w-full md:w-1/2 mb-8 md:mb-10 lg:mb-0">
        <img
          src="https://images.unsplash.com/photo-1616469832424-6927678c6b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2850&q=80"
          alt="Pinterest App"
          className="rounded-2xl shadow-lg w-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 md:pl-8 lg:pl-12">
        <p className="text-pink-600 font-semibold mb-2 text-sm md:text-base">
          Great Addon with SortPin
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
          Trusted by thousands of creators worldwide
        </h2>
        <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
          SortPin empowers Pinterest users with data driven insights, simplifies
          discovery, and enhances downloads, all while streamlining the Pinterest
          experience with innovative features.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600">40,000+</h3>
            <p className="text-gray-600 text-xs md:text-sm">Creators on the platform</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600">170</h3>
            <p className="text-gray-600 text-xs md:text-sm">Languages and countries</p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-pink-600">15%</h3>
            <p className="text-gray-600 text-xs md:text-sm">Percentage increase monthly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCreators;
