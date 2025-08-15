/* This button can be used throughout the whole website, styling is same, you might just need to adjust the size of the button.*/

import React from "react";
import { Button } from "@/components/ui/button";

interface PolicyActionButtonProps {
  isActive: boolean;
  onClick: () => void;
  label?: string;
}

const PolicyActionButton: React.FC<PolicyActionButtonProps> = ({ isActive, onClick, label = "View Policy" }) => {
  return (
    <Button
      onClick={onClick}
      variant={isActive ? "default" : "outline"}
      className={`w-full text-sm h-10 rounded-md ${
        isActive
          ? "bg-teal-500 hover:bg-teal-600 text-white"
          : "border-gray-300 text-gray-700 hover:bg-gray-100"
      }`}
    >
      {label}
    </Button>
  );
};

export default PolicyActionButton;
