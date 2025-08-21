import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import chatContent from "../../assets/bannerImg/AiChat.png";
import twisTarrow from "../../assets/bannerImg/twist-arrow.png";

type FeatureCardProps = {
  percentage: number;
  label: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ percentage, label }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <div className="w-30 h-30">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          strokeWidth={10}
          styles={buildStyles({
            pathColor: "#FC6F54",
            trailColor: "#6B7280",
            textColor: "#6B7280",
            strokeLinecap: "square",
          })}
        />
      </div>
      <p className="mt-3 text-center font-semibold text-gray-900">{label}</p>
    </div>
  );
};

const ChatProgress: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6 sm:p-10 flex justify-center items-center font-sans">
      <div className="flex flex-col lg:flex-row w-full max-w-7xl bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">

        {/* LEFT: Chat image (relative for overlays) */}
        <div className="relative w-full lg:w-3/5 bg-gray-50 flex items-center justify-center p-6">
          <img
            src={chatContent}
            alt="AI Policy Assistant Preview"
            className="w-full h-auto object-contain rounded-xl"
          />

         
        </div>
         {/* Twisted arrow – left bottom, pointing to card */}
          <img src={twisTarrow}  className="hidden md:block absolute left-100 -bottom-400  h-20 pointer-events-none z-10" width={250} alt="" />
         {/* Floating card – overlaps the chat image near bottom center */}
          <div className="hidden md:block absolute -bottom-420 left-[45%]  -translate-x-1/2 w-[360px] max-w-[88%] bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.14)] border border-gray-200 p-5 z-20">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              AI Policy Assistant
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book.
            </p>
          </div>

        {/* RIGHT: Features */}
        <div className="w-full lg:w-2/5 bg-gray-100 p-8 lg:p-12">
          <h2 className="text-2xl font-bold text-[#FC6F54] mb-4">
            Our Comprehensive Features
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8">
            At CareSuite AI, we understand the complexities of aged care
            management. Our platform is built to simplify your operations,
            enhance compliance, and empower your team with intelligent, intuitive
            tools. Discover how our features can transform your organization.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <FeatureCard percentage={95} label="Satisfaction Rate" />
            <FeatureCard percentage={87} label="Customizable" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatProgress;
