import React from "react";

const videos = [
  {
    id: 1,
    title:
      "Make $1370+ Per WEEK With Pinterest Affiliate Marketing (NO WEBSITE!)",
    img: "https://img.youtube.com/vi/MqfsbLa1HUg/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=MqfsbLa1HUg",
  },
  {
    id: 2,
    title:
      "SECRET Method To Make Easy $86 a Day! Pinterest Affiliate Marketing (NEVER SHARED)",
    img: "https://img.youtube.com/vi/f1GxOoXA9Ao/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=f1GxOoXA9Ao",
  },
  {
    id: 3,
    title:
      "Underrated Print on Demand Niche Research No One Talks About!",
    img: "https://img.youtube.com/vi/yZ2aRqxALF4/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=yZ2aRqxALF4",
  },
  {
    id: 4,
    title:
      "How To Make $1000/week with Pinterest Affiliate Marketing & Chat GPT (The Lazy Way!)",
    img: "https://img.youtube.com/vi/CXZYxojabDw/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=CXZYxojabDw",
  },
  {
    id: 5,
    title:
      "$50/Day With NO Website, With FREE Software And Pinterest Affiliate Marketing",
    img: "https://img.youtube.com/vi/pY1PPvYwEmo/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=pY1PPvYwEmo",
  },
  {
    id: 6,
    title:
      "Day 25 Pinterest Affiliate Marketing | Affiliate Marketing For Beginners",
    img: "https://img.youtube.com/vi/fUkJz-RghPU/maxresdefault.jpg",
    url: "https://www.youtube.com/watch?v=fUkJz-RghPU",
  },
];

const ExpertsTalk = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-6 lg:px-20 bg-white text-center">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-pink-600 mb-8 md:mb-12">
        What the experts talk about us
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {videos.map((video) => (
          <div
            key={video.id}
            className="group w-full"
          >
            <a
              href={video.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
            >
              <div className="relative aspect-video">
                <img
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full rounded-2xl object-cover"
                />
                {/* Play icon overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-12 h-12 md:w-16 md:h-16 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>

            <h3 className="mt-4 text-sm md:text-base font-semibold text-gray-800 leading-snug px-2">
              {video.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExpertsTalk;
