import React, { useState } from "react";

const sidebarItems = [
  {
    section: "GETTING STARTED",
    items: [
      {
        icon: "💡",
        label: "Introduction",
        content: (
          <div className="space-y-4">
            <p>
              SortPin is a comprehensive online platform meticulously crafted to
              aid users in efficiently discovering, collecting, and organizing
              digital content across the web. It serves as a digital repository
              where users can curate and categorize a myriad of online resources,
              including websites, articles, and multimedia content, tailored to
              their unique preferences and interests.
            </p>

            <p className="font-semibold text-gray-800">
              At its core, SortPin offers a robust set of features aimed at enhancing
              the user experience:
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>
                <b>Bookmarking Capability:</b> Effortlessly save URLs of websites,
                articles, and resources directly to your SortPin account for easy access.
              </li>
              <li>
                <b>Advanced Organization Tools:</b> Organize saved content into
                customizable folders and categories for seamless navigation.
              </li>
              <li>
                <b>Intuitive Tagging System:</b> Assign descriptive tags for enhanced
                search functionality and content discovery.
              </li>
              <li>
                <b>Seamless Sharing Options:</b> Share curated collections with friends,
                colleagues, or the online community to foster collaboration.
              </li>
              <li>
                <b>Robust Search Functionality:</b> Quickly locate desired content within
                your extensive bookmark collection.
              </li>
            </ul>

            <p>
              In essence, SortPin endeavors to streamline the process of online content
              management and retrieval, offering a centralized hub where users can
              effortlessly organize, discover, and access their favorite digital
              resources. Whether for personal use or professional endeavors, SortPin
              stands as an indispensable tool for individuals seeking to stay organized,
              informed, and connected in an ever-expanding digital landscape.
            </p>
          </div>
        ),
      },
      { icon: "😊", label: "How to install SortPin.com Extension", content: "Step-by-step instructions for installing the SortPin Chrome Extension." },
      { icon: "🥳", label: "Overview of Key Features", content: "A summary of SortPin's core functionalities and advantages." },
      { icon: "👩‍💻", label: "Chat Support", content: "Get instant support through the built-in SortPin live chat assistant." },
      {
        icon: "🔐",
        label: "Manage License & Devices",
        content: (
          <div className="space-y-4">
            <p>To manage your linked devices, follow these steps:</p>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>
                Navigate to the{" "}
                <a
                  href="https://app.lemonsqueezy.com/my-orders/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 underline hover:text-pink-700"
                >
                  My Orders
                </a>{" "}
                page and log in with your purchase email.
              </li>
              <li>Click on the order associated with your purchase.</li>
              <li>Select the license key to view all linked devices.</li>
              <li>Click “Deactivate” next to any device you wish to unlink.</li>
            </ol>
          </div>
        ),
      },
      { icon: "💳", label: "Manage your subscription", content: "Learn how to view, modify, or cancel your SortPin subscription." },
    ],
  },
  {
    section: "FEATURES",
    items: [
      { icon: "🖼️", label: "Free Pinterest Images, Video and Story Downloader", content: "Download any Pinterest image, video, or story instantly using SortPin." },
      { icon: "🤖", label: "Telegram Bot: Pinterest Images, Video and Story Downloader", content: "Use SortPin's Telegram Bot to fetch Pinterest media directly inside Telegram." },
    ],
  },
  {
    section: "FAQS",
    items: [
      { icon: "🧐", label: "Does this extension works on macbook and ipad when you use chrome?", content: "Yes, SortPin supports Chrome on macOS and iPadOS." },
      { icon: "🧐", label: "If sortpin is not working despite being installed, what should I do?", content: "Try reinstalling or clearing cache; make sure you’re using the latest version." },
      { icon: "🤓", label: "How to grow a Pinterest account without getting locked?", content: "Avoid spammy behavior and keep pinning organically with high-quality images." },
      { icon: "🫥", label: "How to Create a New Profile for Chrome?", content: "Go to Chrome Settings → Manage Profiles → Add Profile → Sign in with a new email." },
      { icon: "😢", label: "How to Uninstall?", content: "Right-click the SortPin icon → Remove from Chrome." },
      { icon: "🥸", label: "Can I pay with Alipay?", content: "Yes, Alipay is accepted as a payment method." },
      { icon: "ℹ️", label: "How to Temporarily Disable SortPin.com Extension Info", content: "Go to Chrome Extensions → Toggle off SortPin to disable it temporarily." },
      { icon: "⚙️", label: "How to Clear Cache to Speed Up the SortPin.com Extension", content: "Clear extension cache from Chrome Developer Tools or restart Chrome." },
      { icon: "🧐", label: "The reason the pin creation date differs from the comment", content: "This happens due to Pinterest caching differences across regions." },
      { icon: "✉️", label: "How to get email addresses for email marketing for free?", content: "SortPin provides a free email extraction tool for verified accounts." },
      { icon: "🙁", label: "Displaying data slowly", content: "Try clearing cache or disabling other extensions that may slow it down." },
    ],
  },
  {
    section: "CASE STUDY",
    items: [
      { icon: "🥳", label: "Secret Free Traffic Methods – This Got Me 1000 Visitors/Day Visitors Fast!", content: "Learn hidden Pinterest traffic methods that bring 1,000+ visitors daily." },
      { icon: "😉", label: "How do you make money on Pinterest", content: "Monetize Pinterest through affiliate links, sponsored posts, and digital products." },
    ],
  },
];

const UserGuied = () => {
  const [selectedItem, setSelectedItem] = useState(sidebarItems[0].items[0]);

  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="flex items-center justify-between px-4 md:px-6 py-3 bg-white border-b border-gray-200 shadow-sm">
        <div className="flex items-center gap-2 md:ml-20">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden mr-2 text-gray-700 hover:text-pink-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <img
            src="https://www.sortpin.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.974adfe7.png&w=2048&q=75"
            alt="Logo"
            className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-sm"
          />
          <span className="text-lg md:text-xl font-semibold text-gray-800">
            SortPin
          </span>
        </div>
        <div className="hidden sm:flex items-center bg-gray-100 rounded-md px-3 py-1.5 w-48 md:w-64 md:mr-10">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none text-sm w-full text-gray-700"
          />
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Sidebar Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Sidebar */}
        <aside className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:relative z-50 w-72 bg-white border-r border-gray-200 flex flex-col h-full transition-transform duration-300 ease-in-out`}>
          <div className="flex-1 overflow-y-auto p-4 space-y-6 pb-24">
            {sidebarItems.map((section, idx) => (
              <div key={idx}>
                <p className="text-xs font-semibold text-gray-500 uppercase mb-2">
                  {section.section}
                </p>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      onClick={() => {
                        setSelectedItem(item);
                        setSidebarOpen(false);
                      }}
                      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition ${
                        selectedItem.label === item.label
                          ? "bg-pink-100 text-pink-700 font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="text-sm">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Fixed Footer */}
          <div className="border-t text-sm p-4 bg-white flex items-center justify-center sticky bottom-0 shadow-inner">
            <span className="text-pink-600 font-medium">⚡ Powered by GitBook</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-2">
            <span>{selectedItem.icon}</span>
            <span className="wrap-break-word">{selectedItem.label}</span>
          </h1>

          <div className="bg-gray-100 p-4 md:p-6 rounded-lg text-gray-700 shadow-sm leading-relaxed">
            {typeof selectedItem.content === "string" ? (
              <p>{selectedItem.content}</p>
            ) : (
              selectedItem.content
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserGuied;
