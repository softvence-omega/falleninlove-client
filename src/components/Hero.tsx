import circleBg from "../assets/bannerImg/bg-left.png"; // left circle background
import gridBg from "../assets/bannerImg/bg-right.png"; // right grid background
import dashboard from "../assets/bannerImg/dashboard-banner.png"; // dashboard screenshot
import bgBlur from "../assets/bannerImg/bg-blur.png"; // blur background

export default function Hero() {
  return (
    <div className="relative  overflow-hidden h-[700px] lg:h-[800px] bg-gray-200">
      {/* Blur Background at Bottom */}
      <img
        src={bgBlur}
        alt="blur background"
        className="absolute bottom-0 left-0 w-full h-[300px] object-cover pointer-events-none select-none"
      />

      {/* Background Images */}
      <img
        src={circleBg}
        alt="circle background"
        className="absolute left-0 top-0 w-[300px] sm:w-[400px] lg:w-[500px] opacity-70 pointer-events-none select-none"
      />
      <img
        src={gridBg}
        alt="grid background"
        className="absolute right-0 top-0 w-[400px] sm:w-[500px] lg:w-[600px] opacity-60 pointer-events-none select-none"
      />

      {/* Main Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Revolutionizing Aged Care with <br className="hidden sm:block" />{" "}
              <span className="text-black">Intelligent AI Solutions</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-xl mx-auto lg:mx-0">
              Streamline your daily operations, strengthen regulatory compliance,
              and equip your team with powerful tools—all through CareSuite AI’s
              cutting-edge, intelligent platform designed to transform the way you
              deliver care.
            </p>
            <div className="mt-6">
              <button className="bg-[#2CBCA4] hover:bg-[#22a38c] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Dashboard Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={dashboard}
              alt="Dashboard preview"
              className="w-full max-w-md lg:max-w-xl rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
