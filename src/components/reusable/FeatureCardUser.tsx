/*  Similar cards - 
User 
a. Key features [Home dashboard]
 b. Wellbeing Resource [Survey and Wellbeing]
 Admin 
A. Org dashboard bottom cards [Org dashboard*/ 


import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import PolicyActionButton from "./ButtonAll";

export interface FeatureCardProps {
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  img: string; 
  isActive?: boolean;
  onClick?: () => void;
}

const AiPolicyCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  buttonText,
  img,
  isActive = false,
  onClick,
}) => {
  return (
    <div className=" sm:w-56 md:w-72 lg:w-80 xl:w-96">
      <Card className="w-full border border-[#FDE7D7] shadow-sm rounded-lg">
        <CardContent className="flex flex-col items-center text-center p-4 space-y-3">
          {/* Icon */}
          <div className="w-12 h-12 sm:w-10 sm:h-10 flex justify-center">
            <img src={img} alt={title} className="object-contain" />
          </div>

          {/* Title */}
          <h3 className="text-base font-semibold sm:text-sm">{title}</h3>

          {/* Description */}
          <p className="text-sm text-gray-600 leading-snug sm:text-xs">{description}</p>

          {/* Button */}
          <PolicyActionButton
            isActive={true}
            onClick={onClick || (() => {})}
            label={buttonText}
          />
        </CardContent>
      </Card>
    </div>
  );
};

export default AiPolicyCard;
