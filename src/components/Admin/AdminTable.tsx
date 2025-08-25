import { categories, documents, sortOptions } from "@/common/demodata";
import { ChevronDown } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function AdminTable() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Sort by :');
  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [sortDropdownOpen, setSortDropdownOpen] = useState(false);
  
  const getVersionColor = () => {
    return 'text-teal-600';
  };

  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null); 
  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setCategoryDropdownOpen(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setSortDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'text-yellow-600';
      case 'Expiring Soon':
        return 'text-teal-600';
      case 'Expired':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };
  return (
    <div>
      {/* Document Library Card */}
        <div className="bg-white rounded-lg border border-orange-300">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Your Document Library</h2>
            
            {/* Filters */}
            <div className="flex gap-4 mb-6">
              {/* Category Dropdown */}
              <div className="relative" ref={categoryRef}>
                <button
                  onClick={() => setCategoryDropdownOpen(!categoryDropdownOpen)}
                  className="flex items-center justify-between bg-white border border-gray-400 rounded-md px-4 py-2.5 pr-10 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-700 min-w-[200px]"
                >
                  <span>{selectedCategory}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                
                {categoryDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[200px]">
                    {/* Header */}
                    <div className="bg-teal-500 text-white px-4 py-2 text-sm font-medium rounded-t-md">
                      All Categories
                    </div>
                    {/* Options */}
                    <div className="max-h-60 overflow-y-auto">
                      {categories.map((category) => (
                        <button
                          key={category}
                          onClick={() => {
                            setSelectedCategory(category);
                            setCategoryDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedCategory === category ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                          }`}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Sort Dropdown */}
              <div className="relative" ref={sortRef}>
                <button
                  onClick={() => setSortDropdownOpen(!sortDropdownOpen)}
                  className="flex items-center justify-between bg-white border border-gray-400 rounded-md px-4 py-2.5 pr-10 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none text-gray-700 min-w-[150px]"
                >
                  <span>{sortBy}</span>
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                </button>
                
                {sortDropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[150px]">
                    {/* Header */}
                    <div className="bg-teal-500 text-white px-4 py-2 text-sm font-medium rounded-t-md">
                      Sort by
                    </div>
                    {/* Options */}
                    <div className="max-h-60 overflow-y-auto">
                      {sortOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setSortBy(option);
                            setSortDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            sortBy === option ? 'bg-teal-50 text-teal-700' : 'text-gray-700'
                          }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Table Headers */}
            <div className="grid grid-cols-6 gap-4 pb-3 mb-4 border-b border-gray-200 bg-gray-300/30 p-2 rounded-xl">
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Title</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Category</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Tags</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Version</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Expiry Date</div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">Status</div>
            </div>

            {/* Document Rows */}
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="grid grid-cols-6 gap-4 py-3 hover:bg-gray-50 transition-colors  border-b border-orange-300">
                  <div className="font-medium text-gray-900 text-sm">
                    {doc.title}
                  </div>
                  <div className="text-sm text-gray-700">
                    {doc.category}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {doc.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs text-gray-600"
                      >
                        {tag}{tagIndex < doc.tags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </div>
                  <div className={`text-sm font-medium ${getVersionColor()}`}>
                    {doc.version}
                  </div>
                  <div className="text-sm text-gray-700">
                    {doc.expiryDate}
                  </div>
                  <div className={`text-sm font-medium  ${getStatusColor(doc.status)}`}>
                    {doc.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="px-6 pb-6 my-4">
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="bg-orange-700  h-3 rounded-full" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default AdminTable