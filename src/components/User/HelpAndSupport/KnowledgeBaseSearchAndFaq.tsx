import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';


import contact from "../../../assets/user/contact.png"

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "How do I update my personal information?",
    answer: "You can update your personal information by logging into your account and navigating to the 'Profile Settings' section. From there, you can edit your name, email, phone number, and other personal details. Make sure to save your changes before leaving the page."
  },
  {
    id: 2,
    question: "Where can I find the latest policy updates?",
    answer: "The latest policy updates can be found in the 'Policy Updates' section of your dashboard. We also send email notifications when significant policy changes are made. You can adjust your notification preferences in your account settings."
  },
  {
    id: 3,
    question: "How do I report a technical issue with the platform?",
    answer: "To report a technical issue, you can use the 'Contact Support' button in the main menu, or send an email directly to support@company.com. Please include a detailed description of the issue, any error messages you've seen, and steps to reproduce the problem."
  }
];

function KnowledgeBaseSearchAndFaq() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSearch = () => {
    console.log('Searching for:', searchQuery);
    // Implement search functionality here
  };

  const toggleFAQ = (id: number) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className=" py-8 px-4">
      <div className=" mx-auto">
        {/* Search Section */}
        <div className=" rounded-lg shadow-sm border border-[#FF6A0066] p-6 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Search className="w-5 h-5 text-gray-500" />
            <h1 className="text-xl font-medium text-[#6B7280]">Search Our Knowledge Base</h1>
          </div>
          
         <div className="flex flex-col md:flex-row gap-3">
  <div className="flex-1 relative">
    <input
      type="text"
      placeholder="Search by keyword, policy name, or topic..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      onKeyPress={handleKeyPress}
      className="w-full px-4 py-3 text-[#777777] border border-[#FF6A0066] rounded-xl "
    />
  </div>
  <button
    onClick={handleSearch}
    className="px-6 py-3 min-w-[200px] bg-[#2CBCA4] text-white font-medium rounded-xl cursor-pointer transition-colors duration-200 "
  >
    Search
  </button>
</div>

        </div>

        {/* FAQ Section */}
        <div className=" rounded-xl shadow-sm border border-[#FF6A0066] p-6">
          <div className="flex items-center gap-3 mb-6">
            <img src={contact} alt="contact" />
            <h2 className="text-xl font-bold text-[#6B7280]">Frequently Asked Questions (FAQs)</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border border-[#FF6A0066] rounded-xl overflow-hidden transition-shadow duration-200 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-4 py-4 text-left flex items-center justify-between  transition-colors duration-200 "
                >
                  <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedFAQ === faq.id
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-4 py-4 bg-white border-t border-[#FF6A0066]">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default KnowledgeBaseSearchAndFaq;