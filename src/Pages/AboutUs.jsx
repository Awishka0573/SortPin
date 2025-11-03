import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto text-gray-900 space-y-12">
        {/* About Us Heading */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-700">
            Sortpin is a dynamic and innovative browser extension designed to enhance your Pinterest experience. 
            Our mission is to provide you with powerful tools that unlock the hidden potential of Pinterest, making it easier 
            and more efficient for you to discover, organize, and engage with your favorite pins.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that Pinterest is a platform filled with inspiration, creativity, and valuable content. Our vision is 
            to empower Pinterest users to maximize their experience by providing them with the tools they need to unlock the 
            full potential of the platform.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2 text-lg">
            <li>
              <span className="font-semibold">Hidden Pin Data:</span> With Sortpin, you can uncover hidden pin data, 
              allowing you to gain insights into repins, comments, and the creation date of pins.
            </li>
            <li>
              <span className="font-semibold">Pin Discovery:</span> Discover the best-performing viral pins effortlessly 
              and keep them organized for future reference.
            </li>
            <li>
              <span className="font-semibold">Ad Filtering:</span> Sortpin simplifies your Pinterest experience by 
              filtering out ads, allowing you to focus on what matters most.
            </li>
            <li>
              <span className="font-semibold">Effortless Downloads:</span> Easily download images and videos, making it 
              convenient for you to save, share, or use them as inspiration.
            </li>
            <li>
              <span className="font-semibold">Discovering Boards:</span> Find boards to join and pin to without the need 
              for approval, streamlining your Pinterest participation.
            </li>
          </ul>
          <p className="text-gray-700 text-lg mt-4">
            At Sortpin, we are dedicated to providing you with a comprehensive and insightful Pinterest experience. We 
            are committed to continuously improving and expanding our features to meet the evolving needs of our users.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-700 text-lg">
            If you have questions, feedback, or inquiries about Sortpin, please don't hesitate to reach out to us at{" "}
            <a href="mailto:hey@sortpin.com" className="text-pink-600 font-semibold underline">
              hey@sortpin.com
            </a>.
          </p>
          <p className="text-gray-700 text-lg mt-2">Thank you for choosing Sortpin to enhance your Pinterest journey!</p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
