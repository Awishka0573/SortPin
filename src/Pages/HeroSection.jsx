import React from 'react';

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center bg-white px-4 py-12 mt-10">
        <div className="text-center text-gray-900 max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Sorting made simple
          </h1>

          {/* Subheading with pink underline behind "Pinterest" */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gray-700 relative inline-block">
            for{' '}
            <span className="relative inline-block">
              <span className="text-pink-600 relative z-10">Pinterest lovers.</span>
              <span
                className="absolute left-0 bottom-0 w-full h-[0.8em] bg-no-repeat bg-contain bg-bottom"
                style={{
                  backgroundImage: "url('/pink3.png')",
                  backgroundSize: '100% 220%',
                  transform: 'translateY(0.8em)',
                }}
              ></span>
            </span>{' '}
            
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl mb-6 leading-relaxed max-w-3xl mx-auto text-gray-600">
            Unlock the Power of Pins: Unearth trends, insights, and lead the niche with data-driven creativity. Download, analyze, and out-pin the competition!
          </p>

          {/* Pricing */}
          <div className="bg-gray-100 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-lg font-semibold mb-2">$9/month, $29/year, or $59 lifetime.</p>
            <p className="text-sm text-gray-600">Supports up to 5 devices, includes all features and updates.</p>
          </div>

          {/* Free CTA */}
          <div className="mb-8">
            <p className="text-xl font-bold mb-4">Free. No card required.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Add to Chrome - It's Free
              </button>
              <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-green-600 transition-colors">
                Install for Firefox - It's Free
              </button>
            </div>
          </div>

          {/* Trust Badge */}
          <div className="pt-6">
            <p className="text-lg font-semibold text-gray-700">
              Trusted by over 40,000+ <span className="text-pink-600">Pinterest</span> Lovers.
            </p>
          </div>
        </div>
      </section>

      {/* Example extra section */}
      <section className="h-screen w-full flex items-center justify-center">
        <img
          src="/image.png"
          alt=""
          className="max-w-6xl w-full h-auto rounded-2xl border-4 border-gray-300 object-contain"
        />
      </section>
    </>
  );
};

export default HeroSection;
