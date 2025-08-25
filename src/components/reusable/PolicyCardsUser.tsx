import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { policiesData } from '@/common/demodata';

const categories = [
  'All Categories',
  'Care Delivery',
  'Safety & Quality',
  'Hr & Staffing',
  'Compliance & Regulatory',
  'Emergency Response',
  'Client Rights',
];

const PolicyCardsUser = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [visiblePoliciesCount, setVisiblePoliciesCount] = useState(6);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        event.target instanceof Node &&
        dropdownRef.current.contains(event.target)
      ) {
        // Click is inside dropdown, do nothing
        return;
      }
      setIsDropdownOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter policies based on search term and category
  const filteredPolicies = policiesData.filter(policy => {
    const matchesSearch = policy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      policy.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All Categories' || policy.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Policies to display
  const policiesToDisplay = filteredPolicies.slice(0, visiblePoliciesCount);

  // Load more policies functionality
  const handleLoadMore = () => {
    setVisiblePoliciesCount(prevCount => prevCount + 6);
  };

  return (
    <div className="min-h-screen w-full " style={{ fontFamily: "'Poppins', sans-serif" }}>
      <div className="min-h-screen p-4 sm:p-6 lg:p-8 w-full">
        {/* Header Section */}
        <div className="px-2 sm:px-6 lg:px-10 mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-[#2D2D2D] font-bold mb-2">
            Find Policies
          </h1>
        </div>

        {/* Main Content Card */}
        <div className="px-2 sm:px-4 lg:px-6 w-full">
          <div className="bg-white rounded-xl    p-6 sm:p-8 lg:p-10">
           <div className='bg-gray-100/60 p-5 rounded-lg mb-8 shadow'>
             <h2 className="text-xl sm:text-2xl font-bold text-slate-500 mb-6">Find Policies</h2>

            {/* Search and Filter Section */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search by keyword, policy name, or topic..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-yellow-400 rounded-lg  transition-colors"
                />
              </div>

              <div className="relative sm:w-52" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full px-4 py-3 flex justify-between items-center border border-yellow-400 rounded-lg text-orage-500 bg-white "
                >
                  <span className="truncate">{selectedCategory}</span>
                  <ChevronDown className={`ml-2 flex-shrink-0 transform transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} size={16} />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-300 rounded-lg shadow-xl z-20 overflow-hidden">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsDropdownOpen(false);
                        }}
                        className={`block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors ${
                          selectedCategory === category ? 'bg-teal-500 font-semibold text-white' : ''
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 whitespace-nowrap">
                Search
              </button>
            </div>
           </div>

            {/* Available Policies Section */}
            <h3 className="text-lg sm:text-xl font-bold text-slate-500 mb-6">Available Policies</h3>
            
            {policiesToDisplay.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {policiesToDisplay.map((policy) => (
                  <div 
                    key={policy.id} 
                    className="group bg-white border border-yellow-400 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                  >
                    <div className="p-4 sm:p-6 h-[315px] flex flex-col">
                      <div className="flex-1">
                        <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                          {policy.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                          {policy.description}
                        </p>
                        
                        <div className="space-y-2 text-xs text-gray-500 mb-6">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Category:</span>
                            <span className="text-right">{policy.category}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="font-medium">Last Updated:</span>
                            <span className="text-right">{policy.lastUpdated}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full px-4 py-2.5 bg-white border border-gray-300 text-gray-700 rounded-lg font-medium transition-all duration-300 group-hover:bg-teal-500 group-hover:text-white group-hover:border-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                        View Policy
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No policies found for your search.</p>
              </div>
            )}

            {/* Load More Button */}
            {filteredPolicies.length > visiblePoliciesCount && (
              <div className="flex justify-center mt-8 sm:mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Load More Policies
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyCardsUser;