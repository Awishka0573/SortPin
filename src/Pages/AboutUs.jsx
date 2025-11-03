import React from "react";
import { Mail } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-gray-800">
        {/* Top Heading */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            About <span className="text-pink-600">SortPin</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SortPin is a dynamic and innovative browser extension designed to
            enhance your Pinterest experience — helping you discover, organize,
            and engage with your favorite pins more efficiently.
          </p>
        </div>

        {/* Vision + What We Offer */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🌟 Our Vision
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We believe Pinterest is full of inspiration and creativity.
              Our vision is to empower users to unlock the platform’s full
              potential by offering tools that transform browsing into a
              powerful, insightful experience.
            </p>
          </div>

          {/* What We Offer */}
          <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-md transition">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              🚀 What We Offer
            </h2>
            <ul className="space-y-3 text-gray-700 leading-relaxed">
              <li>
                <span className="font-semibold text-gray-900">
                  Hidden Pin Data:
                </span>{" "}
                Gain insights into repins, comments, and creation dates.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Pin Discovery:
                </span>{" "}
                Effortlessly discover and organize viral pins.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Ad Filtering:
                </span>{" "}
                Enjoy distraction-free browsing by hiding promoted content.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Effortless Downloads:
                </span>{" "}
                Save images and videos instantly for inspiration or reuse.
              </li>
              <li>
                <span className="font-semibold text-gray-900">
                  Discovering Boards:
                </span>{" "}
                Find boards to join and pin to — no approval needed.
              </li>
            </ul>
          </div>
        </div>

        {/* Extra paragraph */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            At SortPin, we’re dedicated to continuously improving your Pinterest
            experience — helping you unlock creativity, save time, and stay
            inspired.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-white mt-16 p-8 rounded-2xl shadow-sm hover:shadow-md transition text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            💌 Contact Us
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto mb-4">
            Have questions, feedback, or ideas? We’d love to hear from you.
          </p>
          <a
            href="mailto:hey@sortpin.com"
            className="inline-flex items-center gap-2 text-pink-600 font-medium bg-pink-50 px-5 py-2.5 rounded-full hover:bg-pink-100 transition"
          >
            <Mail className="w-5 h-5" />
            hey@sortpin.com
          </a>
          <p className="text-gray-600 mt-4">
            Thank you for choosing SortPin to enhance your Pinterest journey!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
