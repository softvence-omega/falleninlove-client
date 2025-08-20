import doc1 from "../../assets/bannerImg/doc1.png"
import doc2 from "../../assets/bannerImg/doc2.png"
import doc3 from "../../assets/bannerImg/doc3.png"
import careBg from "../../assets/bannerImg/care-bg.png"
// Main component as requested by the user.
export default function Document() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 mt-10">
      {/* Main container with max width and center alignment */}
      <div className="mx-auto max-w-7xl">
        {/* Main grid layout for the two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column for the feature cards */}
          <div className="relative">
            {/* Background pattern for visual flair. This can be customized or replaced. */}
            <div className="absolute top-50 left-0 w-full h-full transform -translate-x-1/4 -translate-y-1/4">
                <img 
                    src={careBg} 
                    alt="Background pattern" 
                    className="w-1/2 h-1/2 object-cover opacity-20 rounded-3xl" 
                />
            </div>
            
            {/* The two-column grid for the cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* Left Stacked Cards */}
              <div className="flex flex-col space-y-8">
                {/* Card 1: Smart Document Management */}
                <div className="bg-white border border-gray-500/30  p-6 rounded-3xl shadow-lg flex flex-col items-center space-y-4 text-center">
                  <img 
                    src={doc1}
                    alt="Smart Document Management icon" 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl p-2 bg-gradient-to-br from-pink-100 to-purple-100" 
                  />
                  <p className="text-xl font-semibold text-gray-900">Smart Document Management</p>
                </div>

                {/* Card 2: Intuitive Induction & Training */}
                <div className="bg-white p-6 rounded-3xl border border-gray-500/30 shadow-lg flex flex-col items-center space-y-4 text-center">
                  <img 
                    src={doc2}
                    alt="Intuitive Induction & Training icon" 
                    className="flex-shrink-0 w-16 h-16 rounded-2xl p-2 bg-gradient-to-br from-indigo-100 to-sky-100" 
                  />
                  <p className="text-xl font-semibold text-gray-900">Intuitive Induction & Training</p>
                </div>
              </div>
              
              {/* Right Full-Height Card */}
              <div className="bg-gray-50 p-6 rounded-3xl border border-gray-500/30 shadow-lg flex flex-col items-center space-y-4 text-center">
                <img 
                  src={doc3}
                  alt="AI-Powered Compliance and Insights icon" 
                  className="flex-shrink-0 w-16 h-16 rounded-2xl p-2 bg-gradient-to-br from-purple-100 to-cyan-100" 
                />
                <div className="flex flex-col">
                  <p className="text-xl font-semibold text-gray-900">AI-Powered Compliance & Insights</p>
                  <p className="mt-2 text-gray-500">
                    Leverage AI to gain real-time compliance insights, identify risks,
                    and ensure adherence to the latest regulations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column for the main text content */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
              Why Choose CareSuite AI?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Our platform is meticulously designed to meet the unique challenges
              of the aged care sector, offering unparalleled efficiency and insight.
            </p>

            {/* Feature list with checkmarks */}
            <ul className="mt-6 space-y-4">
              {/* Feature 1 */}
              <li className="flex items-start space-x-3">
                {/* Checkmark icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Policy Initialization</span>
                </p>
              </li>
              
              {/* Feature 2 */}
              <li className="flex items-start space-x-3">
                {/* Checkmark icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">Realtime Best Data Solutions.</span>
                </p>
              </li>

              {/* Feature 3 */}
              <li className="flex items-start space-x-3">
                {/* Checkmark icon SVG */}
                <svg xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-lg text-gray-800">
                  <span className="font-semibold">100% Authentic result provide.</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
