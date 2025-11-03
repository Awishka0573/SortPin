import { Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
  <footer className="bg-pink-50 border-t border-pink-600 py-10 min-h-40">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="flex flex-col items-start space-y-4">
          <img
            src="https://www.sortpin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.974adfe7.png&w=2048&q=75" 
            alt="Logo"
            className="w-12 h-12"
          />
          <p className="text-gray-600 text-sm">
            Unlock hidden data, filter ads, and simplify Pinterest usage with Sortpin
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col space-y-3 text-sm text-gray-700">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Refund Policy</a>
          <a href="#">Disclaimer</a>
          <a href="#">Pinterest Downloader</a>
        </div>

        {/* Right Section */}
        <div className="flex flex-col space-y-3 text-sm text-gray-700">
          <a href="#">User Guide</a>
          <a href="#">About Us</a>
          <a href="#">Affiliate Program</a>
          <a href="#">How to Cancel Your Subscription</a>
          <a href="#">How to Manage Your Licenses and Devices</a>
        </div>
      </div>

      <div className="border-t mt-10 pt-6 pr-5 text-right text-sm text-gray-500">
        © Copyright 2025. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
