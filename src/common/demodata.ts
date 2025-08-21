interface Plan {
  name: string; 
    price: number;
    description: string;
    features: string[];
    highlight: boolean;
}

export const plans: Plan[]  =  [
    {
      name: "Basic Plan",
      price: 39,
      description:
        "Save 20% offer of business consulting for our 05K clients worldwide.",
      features: [
        "AI Policy Assistant (Limited)",
        "Document Suite (Basic)",
        "5 Users",
      ],
      highlight: true,
    },
    {
      name: "Premium Plan",
      price: 49,
      description:
        "Save 20% offer of business consulting for our 05K clients worldwide.",
      features: [
        "AI Policy Assistant (Limited)",
        "Document Suite (Basic)",
        "5 Users",
      ],
      highlight: false,
    },
    {
      name: "Advanced Plan",
      price: 59,
      description:
        "Save 20% offer of business consulting for our 05K clients worldwide.",
      features: [
        "AI Policy Assistant (Limited)",
        "Document Suite (Basic)",
        "5 Users",
      ],
      highlight: false,
    },
    {
      name: "Business Plan",
      price: 99,
      description:
        "Save 20% offer of business consulting for our 05K clients worldwide.",
      features: [
        "AI Policy Assistant (Limited)",
        "Document Suite (Basic)",
        "5 Users",
      ],
      highlight: false,
    },
  ];