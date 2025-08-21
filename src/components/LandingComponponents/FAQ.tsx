import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import FAQimg from "../../assets/bannerImg/FAQ.png"
import faqArrow from "../../assets/bannerImg//FAQ-arrow.png";
const faqData = [
  {
    question: "Where can I get software help?",
    answer: "You can get software help through our dedicated support team available 24/7. We offer live chat, email support, and comprehensive documentation to help you with any technical issues or questions you might have."
  },
  {
    question: "How do I reset my password?",
    answer: "To reset your password, go to the login page and click 'Forgot Password'. Enter your email address and we'll send you a secure link to create a new password. The link expires in 24 hours for security."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, bank transfers, and digital wallets like Apple Pay and Google Pay. All transactions are secured with 256-bit SSL encryption."
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach our customer support team through multiple channels: live chat on our website, email at support@company.com, phone at 1-800-123-4567, or through our mobile app's help section."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
        src={FAQimg}
          alt="Healthcare consultation background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating FAQ Card */}
      <div className="relative z-10 lg:top-102 top-102 flex items-center justify-end min-h-[600px] p-4 pr-8 md:pr-16">
        <div className="relative">
          {/* Curved Arrow */}
          <div className="absolute -top-16 -left-80 hidden md:block">
            <img src={faqArrow} className='-rotate-90 w-1/3' alt="" />
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-12 max-w-lg md:max-w-2xl w-full h-[1020px] backdrop-blur-sm">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
                Want to ask <br />
                <span className="text-gray-600">something from us?</span>
              </h2>
            </div>

            <div className="space-y-1">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-[#2CBCA4] last:border-b-0"
                >
                  <button
                    className="w-full py-4 px-2 text-left hover:bg-gray-50 rounded-lg transition-colors duration-200"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-base md:text-lg font-medium text-gray-800 pr-4">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`h-5 w-5 text-gray-500 transform transition-transform duration-300 flex-shrink-0 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      openIndex === index 
                        ? "max-h-96 opacity-100" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pb-4 px-2">
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}