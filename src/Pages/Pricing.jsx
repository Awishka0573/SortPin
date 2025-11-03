import React from "react";
import { CheckCircle, CreditCard, Wallet } from "lucide-react";

const plans = [
  {
    name: "Monthly – 1 Month",
    price: "$9",
    highlight: false,
    badge: "Save 20%: 20OFF",
    bg: "bg-white",
    textColor: "text-gray-900",
    btnStyle: "bg-gray-900 text-white hover:bg-gray-800",
  },
  {
    name: "Annually – 1 Year",
    price: "$29",
    highlight: true,
    badge: "Save 20%: 20OFF",
    extraBadge: "Most popular",
    bg: "bg-gray-900 text-white",
    textColor: "text-white",
    btnStyle: "bg-pink-600 hover:bg-pink-700 text-white",
  },
  {
    name: "Lifetime – Pay once, own it forever",
    price: "$59",
    highlight: false,
    badge: "Save 20%: 20OFF",
    bg: "bg-white",
    textColor: "text-gray-900",
    btnStyle: "bg-gray-900 text-white hover:bg-gray-800",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-12 md:py-20 bg-gray-50">
      <div className="text-center mb-12 md:mb-16 px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Transparent Pricing
        </h2>
        <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
          Unlock all the features of SortPin.com Extension and{" "}
          <span className="text-pink-600 font-semibold">
            support an indie dev.
          </span>
        </p>
        <p className="mt-3 text-gray-800 font-medium">
          $9/month, $29/year, or $59 lifetime. Supports up to 5 devices,
          includes all features and updates.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-6">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative ${plan.bg} rounded-3xl shadow-md border border-gray-200 overflow-hidden transition-transform duration-300 hover:scale-105`}
          >
            {/* Top Badge */}
            <div className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="https://www.sortpin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.974adfe7.png&w=2048&q=75"
                    alt="Logo"
                    className="w-7 h-7 rounded-full"
                  />
                  <h3 className={`text-lg font-semibold ${plan.textColor}`}>
                    {plan.name}
                  </h3>
                </div>

                {plan.extraBadge && (
                  <span className="text-xs bg-pink-600 text-white px-3 py-1 rounded-full">
                    {plan.extraBadge}
                  </span>
                )}
              </div>

              <div className="flex items-baseline gap-2 mt-4">
                <span className={`text-4xl font-bold ${plan.textColor}`}>
                  {plan.price}
                </span>
                <span className="text-xs text-pink-600 bg-pink-100 px-2 py-1 rounded-full font-medium">
                  {plan.badge}
                </span>
              </div>

              <p
                className={`mt-3 text-sm ${
                  plan.highlight ? "text-gray-300" : "text-gray-600"
                }`}
              >
                Unlock all features of SortPin.com Web Extension.
              </p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 mt-6">
                <button
                  className={`w-full ${plan.btnStyle} font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition`}
                >
                  <CreditCard className="w-4 h-4" /> Pay with Card
                </button>
              </div>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  License for up to 5 devices
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-pink-600" />
                  Unlock all features
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-gray-500 text-sm mt-8 md:mt-10 px-4">
        Trusted by over <span className="font-semibold">40,000+</span> Pinterest
        lovers ⭐⭐⭐⭐⭐
      </p>
      <div className="text-center mx-4 md:mx-10 mt-6 md:mt-10">
        <p className="mt-4 p-6 md:p-10 rounded-2xl text-gray-600 max-w-2xl mx-auto bg-pink-100 text-sm md:text-base">
          Risk-free! 14-day Money Back Guarantee If you're not happy with the
          product, we will refund. No hassles, no question asked! Send us an
          email at hey@sortpin.com
        </p>
      </div>
    </section>
  );
};

export default Pricing;
