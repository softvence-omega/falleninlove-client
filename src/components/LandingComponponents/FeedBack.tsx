import feedback from "../../assets/bannerImg/feedback1.png";
import feedback2 from "../../assets/bannerImg/feedback2.png";
import feedback3 from "../../assets/bannerImg/feedback3.png";
import feedback4 from "../../assets/bannerImg/feedback4.png";
import feedback5 from "../../assets/bannerImg/feedback5.png";
export default function FeedBack() {


  return (
    <section className="bg-[#454F5B] py-16 px-4 md:px-8 text-white">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-2">Feedback From Our Valued Users</h2>
        <p className="text-gray-400 text-lg">
          Our clients aren't just business owners; they're builders, innovators, and visionaries:
        </p>
      </div>

      {/* Main Feedback Content Container */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4">
        {/* Main Feedback Card */}
        <div className="flex flex-col md:flex-row items-center bg-white text-gray-800 p-8 rounded-xl shadow-lg flex-1">
          {/* Main User Image */}
          <div className="w-24 h-24 md:w-48 md:h-full mb-6 md:mb-0 md:mr-8 flex-shrink-0">
            <img src={feedback} className="w-full h-full object-cover rounded-xl shadow-md" />
          </div>

          {/* Feedback Text and Info */}
          <div className="flex-1 text-center md:text-left">
            {/* Star Ratings */}
            <div className="flex justify-center md:justify-start text-yellow-500 text-lg mb-3">
              <span className="mr-1">★</span>
              <span className="mr-1">★</span>
              <span className="mr-1">★</span>
              <span className="mr-1">★</span>
              <span className="mr-1">★</span>
            </div>

            {/* Testimonial */}
            <p className="text-lg font-medium mb-4">
              "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straight-forward payments."
            </p>

            {/* User Name and Title */}
            <div>
              <p className="font-bold text-gray-900">Ethan Williams</p>
              <p className="text-sm text-gray-500">DIGITAL MARKETING SPECIALIST</p>
            </div>
          </div>
        </div>

        {/* Other User Images Container */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8 lg:mt-0 items-stretch flex-1">
          <img src={feedback2} className="w-full h-full rounded-xl object-cover shadow-md" />
          <img src={feedback3} className="w-full h-full rounded-xl object-cover shadow-md" />
          <img src={feedback4} className="w-full h-full rounded-xl object-cover shadow-md" />
          <img src={feedback5} className="w-full h-full rounded-xl object-cover shadow-md" />
        </div>
      </div>
    </section>
  );
}
