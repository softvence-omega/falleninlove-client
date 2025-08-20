import parter1 from "../../assets/bannerImg/partern1.png";
import parter2 from "../../assets/bannerImg/partner2.png";
import parter3 from "../../assets/bannerImg/partner3.png";
import parter4 from "../../assets/bannerImg/partner4.png";
import parter5 from "../../assets/bannerImg/partner5.png";
import parter6 from "../../assets/bannerImg/partner.png";
import parter7 from "../../assets/bannerImg/partner7.png";
import parter8 from "../../assets/bannerImg/partner8.png";
import parter9 from "../../assets/bannerImg/partner9.png";
import parter10 from "../../assets/bannerImg/partner10.png";

export default function Partner() {
  return (
    <div className="bg-white py-12 shadow ">
      {/* Section Title */}
      <h2 className="text-center text-lg sm:text-xl font-medium text-gray-800 my-6">
        Chosen by top Organization Worldwide
      </h2>
      {/* Top Row */}
      <div className="flex flex-wrap justify-center items-center gap-10 mb-8">
        <img src={parter2} alt="Partner 2" className="h-8 sm:h-10 object-contain" />
        <img src={parter3} alt="Partner 3" className="h-8 sm:h-10 object-contain" />
        <img src={parter1} alt="Partner 1" className="h-8 sm:h-10 object-contain" />
        <img src={parter4} alt="Partner 4" className="h-8 sm:h-10 object-contain" />
        <img src={parter5} alt="Partner 5" className="h-8 sm:h-10 object-contain" />
        <img src={parter6} alt="Partner 6" className="h-8 sm:h-10 object-contain" />
      </div>

      {/* Bottom Row */}
      <div className="flex flex-wrap justify-center items-center gap-10">
        <img src={parter7} alt="Partner 7" className="h-8 sm:h-10 object-contain" />
        <img src={parter8} alt="Partner 8" className="h-8 sm:h-10 object-contain" />
        <img src={parter9} alt="Partner 9" className="h-8 sm:h-10 object-contain" />
        <img src={parter10} alt="Partner 10" className="h-8 sm:h-10 object-contain" />
      </div>
    </div>
  );
}
