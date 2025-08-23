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

   export interface PolicyData {
  id: number;
  title: string;
  description: string;
  category: string;
  lastUpdated: string;
  }

   export const policiesData: PolicyData[] = [
  {
    id: 1,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Care Delivery',
    lastUpdated: '2024-06-15',
  },
  {
    id: 2,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Care Delivery',
    lastUpdated: '2024-06-15',
  },
  {
    id: 3,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Safety & Quality',
    lastUpdated: '2024-06-15',
  },
  {
    id: 4,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Safety & Quality',
    lastUpdated: '2024-06-15',
  },
  {
    id: 5,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Compliance & Regulatory',
    lastUpdated: '2024-06-15',
  },
  {
    id: 6,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Compliance & Regulatory',
    lastUpdated: '2024-06-15',
  },
  {
    id: 7,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Hr & Staffing',
    lastUpdated: '2024-06-15',
  },
  {
    id: 8,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Hr & Staffing',
    lastUpdated: '2024-06-15',
  },
  {
    id: 9,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Emergency Response',
    lastUpdated: '2024-06-15',
  },
  {
    id: 10,
    title: 'Medication Management Policy',
    description: 'Outlines procedures for safe medication administration and storage',
    category: 'Emergency Response',
    lastUpdated: '2024-06-15',
  },
];