import checkout1 from "../../assets/bannerImg/checkout1.png";
import checkout2 from "../../assets/bannerImg/checkout2.png";
import checkout3 from "../../assets/bannerImg/checkout3.png";
import checkout4 from "../../assets/bannerImg/checkout4.png";
import checkout5 from "../../assets/bannerImg/checkout5.png";
export default function Checkout() {


  return (
    <div className="bg-white py-16 px-4 md:px-8">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Check out our blog posts
        </h2>
      </div>

      {/* Blog Posts Container */}
      <div className="flex flex-col lg:flex-row  gap-16 w-full px-6">
        {/* Main Blog Post Card */}
        <div className="bg-gray-100 rounded-xl shadow-lg overflow-hidden flex-1">
          <img src={checkout1} alt="Main Blog Post" className="w-full h-auto object-cover" />
          <div className="p-6">
            <p className="text-sm text-gray-500 mb-2">Jun 10, 2025</p>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              How to Create Technical Documentation with Examples
            </h3>
            <p className="text-gray-600 mb-4">
              All software products with simple or complex needs should be accompanied by technical documentation to help users, administrators, and stakeholders understand the system better...
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>Saravana Kumar</span>
              <span>19 Mins Read</span>
            </div>
          </div>
        </div>

        {/* Featured Posts List */}
        <div className="flex-1">
          <h4 className="text-lg font-bold text-gray-900 mb-4">Featured Posts</h4>
          <div className="grid gap-4">
            {/* Featured Post Item 1 - Removed shadow and added bottom border */}
            <div className="flex items-center gap-4 p-4 border-b border-[#2CBCA4]">
              <img src={checkout2} alt="Featured Post 1" className="w-24 h-auto rounded-md object-cover" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Jun 10, 2025</p>
                <h5 className="font-bold text-gray-900">How to Write Standard Operating Procedure with Examples & Template</h5>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Saravana Kumar</span>
                  <span>19 Mins Read</span>
                </div>
              </div>
            </div>

            {/* Featured Post Item 2 - Removed shadow and added bottom border */}
            <div className="flex items-center gap-4 p-4 border-b border-[#2CBCA4]">
              <img src={checkout3} alt="Featured Post 2" className="w-24 h-auto rounded-md object-cover" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Jun 10, 2025</p>
                <h5 className="font-bold text-gray-900">How to Write Standard Operating Procedure with Examples & Template</h5>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Saravana Kumar</span>
                  <span>19 Mins Read</span>
                </div>
              </div>
            </div>

            {/* Featured Post Item 3 - Removed shadow and added bottom border */}
            <div className="flex items-center gap-4 p-4 border-b border-[#2CBCA4]">
              <img src={checkout4} alt="Featured Post 3" className="w-24 h-auto rounded-md object-cover" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Jun 10, 2025</p>
                <h5 className="font-bold text-gray-900">How to Write Standard Operating Procedure with Examples & Template</h5>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Saravana Kumar</span>
                  <span>19 Mins Read</span>
                </div>
              </div>
            </div>

            {/* Featured Post Item 4 - Removed shadow and added bottom border */}
            <div className="flex items-center gap-4 p-4 border-b border-[#2CBCA4]">
              <img src={checkout5} alt="Featured Post 4" className="w-24 h-auto rounded-md object-cover" />
              <div>
                <p className="text-sm text-gray-500 mb-1">Jun 10, 2025</p>
                <h5 className="font-bold text-gray-900">How to Write Standard Operating Procedure with Examples & Template</h5>
                <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
                  <span>Saravana Kumar</span>
                  <span>19 Mins Read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
