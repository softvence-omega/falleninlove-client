import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import contact from "../../../assets/user/contact.png"

interface FormData {
    topic: string;
    message: string;
}

function ContactSupport() {
    const [formData, setFormData] = useState<FormData>({
        topic: '',
        message: ''
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const topics = [
        'Technical Issue',
        'Policy Clarification',
        'Training Support',
        'Account Management',

        'Other'
    ];

    const handleTopicSelect = (topic: string) => {
        setFormData(prev => ({ ...prev, topic }));
        setIsDropdownOpen(false);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, message: e.target.value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.topic && formData.message.trim()) {
            console.log('Form submitted:', formData);
            // Handle form submission here
            alert('Support request submitted successfully!');
            setFormData({ topic: '', message: '' });
        }
    };

    // const isFormValid = formData.topic && formData.message.trim().length > 0;

    return (
        <div className=" flex items-center justify-center p-4">
            <div className=" rounded-lg shadow-sm border border-[#FF6A0066] p-8 w-full ">
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                    <img src={contact} alt="contact" />
                    <h1 className="text-xl font-bold text-[#6B7280]">Contact Support</h1>
                </div>

                {/* Subtitle */}
                <p className="text-sm text-[#6B7280] mb-8 leading-relaxed">
                    If you can't find an answer to your question in our knowledge base or FAQs, please reach out to our support team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Topic Dropdown */}

                    <div>
                        <label htmlFor="topic" className="block text-sm font-medium text-[#6B7280] mb-2">
                            Topic:
                        </label>
                        <div className="relative border border-[#FF6A0066] rounded-lg ">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="w-full px-3 py-2.5 text-left rounded-lg shadow-sm flex justify-between items-center"
                            >
                                <span className={formData.topic ? "" : "text-[#6B7280]"}>
                                    {formData.topic || 'Select a topic'}
                                </span>
                                <ChevronDown className={`w-4 h-4 text-[#6B7280] transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {isDropdownOpen && (
                                <div className="absolute z-10 w-full mt-1 bg-white border border-[#FF6A0066] rounded-lg shadow-lg">
                                    <div className=" max-h-60 overflow-auto">
                                        {/* Placeholder on top */}
                                        {!formData.topic && (
                                            <div className="px-3 py-2 mb-1 rounded bg-[#2CBCA4] text-white text-sm font-medium">
                                                Select a topic
                                            </div>
                                        )}
                                        {topics.map((topic) => (
                                            <button
                                                key={topic}
                                                type="button"
                                                onClick={() => handleTopicSelect(topic)}
                                                className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors duration-150"
                                            >
                                                {topic}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>


                    {/* Message Textarea */}
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                            Your Message:
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            value={formData.message}
                            onChange={handleMessageChange}
                            placeholder="Describe your issue or question in detail"
                            className="w-full px-3 py-2.5 border border-[#FF6A0066] rounded-lg shadow-sm  "
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className={`w-2/5 py-3 px-4 rounded-lg font-medium text-white transition-all cursor-pointer duration-200 
      bg-[#2CBCA4]  shadow-sm hover:shadow-md active:scale-[0.98]`}
                        >
                            Submit Request
                        </button>
                    </div>

                </form>
            </div>

            {/* Click outside to close dropdown */}
            {isDropdownOpen && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setIsDropdownOpen(false)}
                />
            )}
        </div>
    );
}

export default ContactSupport;