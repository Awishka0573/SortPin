import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is SortPin?",
    answer:
      "SortPin is a browser extension designed to enhance your Pinterest experience by providing additional features and functionalities.",
  },
  {
    question: "What features does SortPin offer?",
    answer:
      "SortPin unlocks hidden pin data, simplifies pin discovery, filters ads, and enables easy image and video downloads on Pinterest.",
  },
  {
    question: "How can I upgrade to the premium version of SortPin?",
    answer:
      "You can upgrade to the premium version of SortPin by visiting our website and following the subscription process.",
  },
  {
    question: "How do I access customer support for SortPin?",
    answer:
      "You can reach out to SortPin's customer support through live chat or email for assistance.",
  },
  {
    question: "Is my data safe with SortPin?",
    answer:
      "SortPin takes user data and privacy seriously. Your data is handled in accordance with our privacy policy.",
  },
  {
    question: "Is SortPin free to use?",
    answer:
      "SortPin offers both free and premium versions. Some advanced features may require a premium subscription.",
  },
  {
    question: "Is SortPin compatible with mobile devices?",
    answer:
      "Currently, SortPin is primarily designed for desktop browsers and may not be available on mobile devices.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 md:px-6 py-12 md:py-20">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-base md:text-lg">
          If you have anything else you want to ask,{" "}
          <a
            href="#contact"
            className="text-pink-600 hover:underline font-medium"
          >
            reach out to us
          </a>
          .
        </p>
      </div>

      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-b-2 border-gray-200  overflow-hidden  hover:shadow-md transition-all bg-white"
          >
            <button
              className="w-full flex justify-between items-center p-3 md:p-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-sm md:text-base font-semibold text-gray-900 pr-4">
                {faq.question}
              </h3>
              <ChevronDown
                className={`w-5 h-5 shrink-0 text-gray-500 transform transition-transform duration-300 ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`px-4 md:px-5 pb-4 md:pb-5 text-gray-600 text-sm transition-all duration-300 ${
                activeIndex === index
                  ? "max-h-40 opacity-100"
                  : "max-h-0 opacity-0 overflow-hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
