import React from 'react';

import announce from "../../../assets/user/annouce.png"

const AnnouncementAndContacts: React.FC = () => {
  return (
    <div className="  p-4 ">
      <div className=" space-y-8 ">
        {/* Urgent Announcements Section */}
        <div className=" rounded-xl  border border-[#FF6A0066] p-6">
          <div className="flex items-center gap-3 mb-4">
            <img src={announce} alt="announce" />
            <h1 className="text-2xl font-semibold text-gray-900">Urgent Announcements</h1>
          </div>

          <div className="space-y-3">
            <div className="flex flex-wrap items-start gap-1">
              <span className="text-[#2CBCA4] font-semibold">ATTENTION:</span>
              <span className="text-[#FF715B]  font-medium">
                All staff, please review the updated COVID-19 Outbreak Management Plan (Version 3.1) immediately. Access via "Infection Control Protocol".
              </span>
            </div>
            <div className="text-sm text-[#6B7280]">
              Last updated: 15 July 2024, 10:00 AM AEST
            </div>
          </div>
        </div>

        {/* Key Emergency Contacts Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#6B7280] mb-6">Key Emergency Contacts</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Emergency Services Card */}
            <div  style={{ boxShadow: '0 4px 6px 0 #BFBFBF40' }} className=" rounded-xl  border border-[#FF6A0066] p-6   transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Emergency Services
                <span className="block text-base font-normal text-gray-600">(Australia)</span>
              </h3>
              <div className="text-4xl font-bold text-[#FFBB33] mb-2">000</div>
              <p className="text-gray-600 text-sm">Police, Fire, Ambulance</p>
            </div>

            {/* On-Duty Manager Card */}
            <div  style={{ boxShadow: '0 4px 6px 0 #BFBFBF40' }} className=" rounded-xl  border border-[#FF6A0066] p-6 transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">On-Duty Manager</h3>
              <div className="text-2xl font-bold text-[#2F80ED] mb-2">04XX XXX XXX</div>
              <p className="text-gray-600 text-sm">For immediate operational emergencies</p>
            </div>

            {/* After-Hours Support Line Card */}
            <div  style={{ boxShadow: '0 4px 6px 0 #BFBFBF40' }} className=" rounded-xl  border border-[#FF6A0066] p-6  transition-shadow duration-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">After-Hours Support Line</h3>
              <div className="text-2xl font-bold text-[#2F80ED] mb-2">1800 XXX XXX</div>
              <p className="text-gray-600 text-sm">For non-critical urgent support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementAndContacts;

