import React from "react";
import { Link } from "react-router-dom";
import { TrendingUp, BarChart3, Target, Sparkles } from "lucide-react";

const features = [
  {
    id: 1,
    title: "Uncover Hidden Insights",
    description:
      "Gain access to exclusive information on Pins, including their repin counts, likes, comments, and the follower count of the pin creator.",
    icon: <TrendingUp size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/01.mp4",
  },
  {
    id: 2,
    title: "Advanced Data Analytics",
    description:
      "Effortlessly examine Pins and uncover lucrative niches that spark inspiration for your own content.",
    icon: <BarChart3 size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/02.mp4",
  },
  {
    id: 3,
    title: "Seamless Media Download",
    description:
      "Swiftly download high-quality images and videos with a simple click.",
    icon: <Target size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/03.mp4",
  },
  {
    id: 4,
    title: "Trend Monitoring",
    description:
      "Keep a finger on the pulse of emerging trends on Pinterest and capitalize on them before they become mainstream—imagine being at the forefront of the next big product craze!",
    icon: <Sparkles size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/04.mp4",
  },
  {
    id: 5,
    title: "Competitive Ad Analysis",
    description:
      "Dive into the strategies of Pinterest advertisers by analyzing their ad campaigns, giving you the edge in staying ahead of the competition.",
    icon: <Target size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/05.mp4",
  },
  {
    id: 6,
    title: "Find Leads, Prospects, and Influencers",
    description:
      "Discover potential customers, influencers, and collaborators by analyzing their Pinterest profiles.",
    icon: <Sparkles size={22} />,
    video: "https://assets.ytuong.dev/sortpin_videos/06.mp4",
  },
];

const FeaturesSection = ({ showButtons = false }) => {
  return (
    <section id="features" className="bg-white py-12 md:py-16 lg:py-20 px-4 md:px-6 lg:px-16 xl:px-32">
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Features and Benefits</h2><br />
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-900 mb-8 md:mb-10 px-4">SortPin unlocks hidden pin data, streamlines discovery, filters ads, and eases downloads, enhancing your Pinterest experience.</p>
      </div>
      <div className="max-w-7xl mx-auto space-y-16 md:space-y-20 lg:space-y-24">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`flex flex-col ${
              index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center gap-16`}
          >
            {/* Left Text Section */}
            <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center justify-center bg-pink-600 text-white p-3 rounded-xl">
                {feature.icon}
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                {feature.title}
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                {feature.description}
              </p>
            </div>

            {/* Right Video Section */}
            <div className="flex-1 flex justify-center px-4 md:px-0">
              <div className="rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out max-w-lg w-full">
                <video
                  src={feature.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Bottom Navigation Buttons - Only show when showButtons is true */}
        {showButtons && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 pt-8 md:pt-12 px-4">
            <Link
              to="/experts"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-pink-600 text-white font-semibold rounded-xl hover:bg-pink-700 transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
            >
              View Expert Talks
            </Link>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl text-center"
            >
              View Pricing Plans
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
