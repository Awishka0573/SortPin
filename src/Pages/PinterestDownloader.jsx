import React, { useState } from "react";

const PinterestDownloader = () => {
  const [url, setUrl] = useState("");
  const [message, setMessage] = useState("");
  const [openIndex, setOpenIndex] = useState(null); // for FAQ toggle

  const handleDownload = (e) => {
    e.preventDefault();
    if (!url.trim()) {
      setMessage("⚠️ Please enter a valid Pinterest URL or short link.");
      return;
    }
    setMessage("✅ Checking Pinterest data... (demo only)");
  };

  // FAQ data
  const faqs = [
    {
      q: "How does this Pinterest downloader work?",
      a: "This tool uses the Pinterest API to fetch data from the pin URL you provide. It then displays the available video, story, and images for easy downloading.",
    },
    {
      q: "Is this Pinterest downloader free to use?",
      a: "Yes, our Pinterest downloader is completely free to use. There are no hidden charges, subscriptions, or fees.",
    },
    {
      q: "What types of content can I download from Pinterest?",
      a: "You can download videos, stories, and images associated with Pinterest pins. Our tool displays all available content for the given pin URL.",
    },
    {
      q: "Is it legal to download content from Pinterest?",
      a: "While our tool facilitates downloading, it's crucial to respect copyright laws and Pinterest's terms of service. Only download content for personal use or with proper permissions from the content creator.",
    },
    {
      q: "Can I download multiple pins at once?",
      a: "Currently, our tool supports downloading content from one pin at a time. For multiple pins, you'll need to enter each URL separately.",
    },
    {
      q: "What should I do if the downloader isn't working?",
      a: "If you're experiencing issues, try refreshing the page or clearing your browser cache. Ensure you're using a valid Pinterest URL. If problems persist, please contact our support team.",
    },
    {
      q: "Can I use this tool on mobile devices?",
      a: "Yes, our Pinterest downloader is designed to work on both desktop and mobile devices. You can use it on your smartphone or tablet with a web browser.",
    },
    {
      q: "Do you store or share the content I download?",
      a: "No, we do not store or share any content you download using our tool. The process happens in real-time, and we don't keep any records of your downloads.",
    },
    {
      q: "Does this tool support multiple languages?",
      a: `Yes, our tool supports multiple languages. You can access it in: English, Español, اردو, Tiếng Việt, العربية, हिन्दी, Русский, Português, বাংলা, Français, Türkçe, Bahasa Indonesia, Deutsch, Українська, Filipino, Nederlands.`,
    },
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4">
      <div className="bg-white shadow-xl rounded-2xl w-full max-w-3xl p-8 text-center border border-gray-100">
        {/* Heading */}
        <h1 className="text-sm font-semibold text-pink-500 mb-2 tracking-wider">
          FREE ONLINE TOOL
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
          Pinterest Downloader for Videos, Images, and Stories
        </h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          Easily download high-resolution images, HD videos, and stories from Pinterest
          by simply pasting the URL below. Supports various Pinterest content types.
        </p>

        {/* Language selector and Made with */}
        <div className="flex justify-center items-center gap-3 mb-6 text-sm text-gray-500">
          <select className="border rounded-md px-3 py-1 focus:outline-none">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
          </select>
          <span>
            Made with ❤️ by{" "}
            <a
              href="#"
              className="text-pink-600 font-medium hover:underline"
            >
              SortPin.com
            </a>
          </span>
        </div>

        {/* URL Input */}
        <form
          onSubmit={handleDownload}
          className="flex flex-col sm:flex-row items-center gap-3 mb-4"
        >
          <input
            type="text"
            placeholder="e.g., https://www.pinterest.com/pin/123456789"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-pink-500 text-sm"
          />
          <button
            type="submit"
            className="bg-pink-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-600 transition-all"
          >
            Download
          </button>
        </form>

        {/* Message Box */}
        {message && (
          <div
            className={`text-sm mt-3 px-4 py-2 rounded-md ${
              message.includes("✅")
                ? "bg-green-50 text-green-700"
                : "bg-pink-50 text-pink-600"
            }`}
          >
            {message}
          </div>
        )}

        {/* Example URLs */}
        <div className="bg-pink-50 border border-pink-200 rounded-md mt-6 p-4 text-left text-sm text-gray-700">
          <p className="font-semibold mb-2">Example Pinterest URLs:</p>
          <ul className="list-disc list-inside text-gray-600">
            <li>https://www.pinterest.com/pin/510947520243497052/</li>
            <li>https://pin.it/1l8EjrXA</li>
          </ul>
          <div className="text-center mt-4">
            <button className="bg-pink-500 text-white px-5 py-2 rounded-md font-medium hover:bg-pink-600 transition-all">
              Try Demo Link
            </button>
          </div>
        </div>

        {/* Error Section */}
        <div className="mt-6 border border-pink-200 bg-white rounded-md text-center py-6">
          <h3 className="text-pink-600 font-semibold text-lg mb-2">
            ⚠️ No Pinterest Data Found
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Please enter a valid Pinterest URL or short link to get started.
          </p>
          <button className="bg-pink-500 text-white px-5 py-2 rounded-md font-medium hover:bg-pink-600 transition-all">
            Try a Demo Link
          </button>
        </div>

        {/* Quick Tip */}
        <div className="mt-6 bg-gray-50 border border-gray-200 rounded-md p-4 text-sm text-gray-600 text-left">
          <p className="font-semibold text-gray-700 mb-1">💡 Quick Tip</p>
          <p>
            You can use both full Pinterest URLs and shortened{" "}
            <code>pin.it</code> links. Our tool automatically expands short links for you.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full max-w-3xl mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="  rounded-xl divide-y divide-gray-200">
          {faqs.map((item, index) => (
            <div key={index} className="p-5">
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center text-left font-semibold text-gray-800 hover:text-pink-600 transition-all"
              >
                {item.q}
                <span className="text-pink-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PinterestDownloader;
