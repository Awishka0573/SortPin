import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { title: "Hi, please can someone help me to get the sortpin license, i enter my email but nothing is sent to me", comments: 0 },
  { title: "How can I see save counter?", comments: 0 },
  { title: "Apple 2024 macbookair 13 inch laptop with m3 chip", comments: 0 },
  { title: "hello guys", comments: 0 },
  { title: "new feature", comments: 0 },
  { title: "mugs", comments: 0 },
  { title: "Enhance Your Home Security with the Blink Outdoor 4 Floodlight Camera", comments: 0 },
  { title: "Sony game", comments: 0 },
  { title: "Marketing", comments: 0 },
  { title: "Shapewear", comments: 0 },
  { title: "Art and Antiques", comments: 0 },
  { title: "зимний женский комбинезон", comments: 0 },
  { title: "deurloos75@gmail.com…i need a cell tech..mobile willing to service onsite…", comments: 0 },
  { title: "pinterest", comments: 0 },
  { title: "Деньги в долг онлайн", comments: 0 },
  { title: "nội thất nhà ở", comments: 0 },
  { title: "Outbound Link Clicks", comments: 0 },
  { title: "الربح من الانترنت", comments: 0 },
  { title: "emagrecimento", comments: 0 },
  { title: "âfaf", comments: 0 },
  { title: "Готові рецепти", comments: 0 },
  { title: "smoothe", comments: 1 },
  { title: "smoothe recpis", comments: 0 },
  { title: "pinterest", comments: 0 },
  { title: "MSA", comments: 0 },
  { title: "Low sugar in life", comments: 0 },
  { title: "Ice Bath", comments: 0 },
];

const FeatureRequests = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="https://www.sortpin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.974adfe7.png&w=2048&q=75"
                alt="Logo"
                className="h-12 w-12 object-contain rounded-md"
              />
              <span className="text-xl font-bold text-gray-900">SortPin</span>
            </Link>
            
            {/* Navigation Links */}
            <div className="flex items-center space-x-2 md:space-x-4">
              <a 
                href="#" 
                className="hidden md:inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Roadmap
              </a>
              <a 
                href="#" 
                className="hidden md:inline-block text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Feedback
              </a>
              <button className="px-3 md:px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors duration-200 text-sm md:text-base">
                Login
              </button>
              <button className="px-3 md:px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200 text-sm md:text-base">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <section className="flex justify-center py-10 px-4">
        <div className="w-full max-w-6xl bg-white shadow-sm rounded-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 border border-gray-200">

          {/* Left Sidebar */}
          <aside className="hidden md:block md:w-1/4 w-full bg-gray-50 p-4 rounded-lg border border-gray-100">
            <h2 className="text-gray-800 font-semibold text-lg mb-3">BOARDS</h2>
            <div className="text-pink-600 font-medium bg-pink-50 px-4 py-2 rounded-md">
              Feature Requests
            </div>
            <p className="text-xs text-gray-400 mt-3">Powered by Canny</p>
          </aside>

          {/* Main Section */}
          <main className="md:w-2/4 w-full">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">Feature Requests</h1>

            {/* Post Form */}
            <div className="border border-gray-200 rounded-xl p-4 mb-6">
              <input
                type="text"
                placeholder="Short, descriptive title"
                className="w-full border-b border-gray-300 pb-2 mb-3 focus:outline-none focus:border-pink-500 text-sm text-gray-800"
              />
              <textarea
                placeholder="Any additional details..."
                className="w-full border border-gray-200 rounded-md p-3 focus:outline-none focus:border-pink-500 text-sm resize-none h-24"
              ></textarea>
              <div className="flex justify-end gap-3 mt-3">
                <button className="px-4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100 transition-colors duration-200">
                  Cancel
                </button>
                <button className="px-5 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-200">
                  Create Post
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="flex justify-between items-center mb-3">
              <p className="text-gray-700 text-sm">
                Showing <span className="font-semibold">Trending</span> posts
              </p>
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:border-pink-500"
              />
            </div>
          </main>

          {/* Right Side Scrollable Posts */}
          <aside className="hidden md:block md:w-1/4 w-full border border-gray-100 rounded-lg p-4 overflow-y-auto max-h-[75vh] bg-gray-50">
            {posts.map((post, index) => (
              <div
                key={index}
                className="mb-4 bg-white rounded-md p-3 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <h3 className="text-gray-800 text-sm font-medium leading-snug">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                  <span>💬 {post.comments}</span>
                  <button className="bg-gray-100 px-2 py-1 rounded hover:bg-gray-200 transition-colors duration-200">
                    ↑
                  </button>
                </div>
              </div>
            ))}
          </aside>
        </div>
      </section>
    </div>
  );
};

export default FeatureRequests;