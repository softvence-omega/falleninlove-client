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


// Document type definition(admin policy)
export interface DocumentItem {
  id: number;
  title: string;
  category: string;
  tags: string[];
  version: string;
  expiryDate: string; // ISO date format (YYYY-MM-DD)
  status: "Active" | "Expiring Soon" | "Expired"; // strict union type
}

// Documents data
export const documents: DocumentItem[] = [
  {
    id: 1,
    title: "Medication Management Policy V3.1",
    category: "Clinical",
    tags: ["ACOS", "Safety"],
    version: "3.1",
    expiryDate: "2026-01-15",
    status: "Active",
  },
  {
    id: 2,
    title: "Emergency Procedures Handbook",
    category: "Safety",
    tags: ["ACOs"],
    version: "2.0",
    expiryDate: "2025-11-01",
    status: "Active",
  },
  {
    id: 3,
    title: "Staff Onboarding Checklist",
    category: "HR",
    tags: ["Induction"],
    version: "1.2",
    expiryDate: "2026-01-15",
    status: "Expiring Soon",
  },
];

// Categories data
export const categories: string[] = [
  "All Categories",
  "Clinical",
  "Human Resource",
  "Information Technology",
  "Facility & Maintenance",
  "Finance",
  "Lifestyle",
  "Governance & Risk",
  "Incident Management",
  "Work Health & Safety",
  "Others",
];

// Sort options data
export const sortOptions: string[] = [
  "Policy",
  "Procedure",
  "Guideline",
  "SOP",
  "Checklist",
  "Work Instruction",
  "Training Material",
  "Others",
];


// Types 
export interface Flow {
  id: string;
  name: string;
  description: string;
  assignedRoles: string[];
  steps: number;
  status: "Publish" | "Draft" | "Inactive";
  createdBy?: string;
}

export interface PerformanceOverview {
  totalFlows: number;
  activeFlows: number;
  draftFlows: number;
}

// Mock data (replace with API later)
export const mockPerformanceData: PerformanceOverview = {
  totalFlows: 7,
  activeFlows: 4,
  draftFlows: 3,
};

export const mockFlows: Flow[] = [
  {
    id: "1",
    name: "New Carer Induction",
    description: "Standard induction for all new care staff.",
    assignedRoles: ["Carer", "Support Worker"],
    steps: 12,
    status: "Publish",
  },
  {
    id: "2",
    name: "Facility Manager Onboarding",
    description: "Specific induction for facility managers.",
    assignedRoles: ["Facility Manager"],
    steps: 8,
    status: "Draft",
  },
  {
    id: "3",
    name: "New Carer Induction",
    description: "Standard induction for all new care staff.",
    assignedRoles: ["Carer", "Support Worker"],
    steps: 12,
    status: "Publish",
  },
];


// complianceData

export interface ComplianceAlert {
  id: string;
  type: string;
  description: string;
  date: string;
  severity: 'High' | 'Medium' | 'Low';
  status: 'Open' | 'Resolved';
}

// Exporting mock data
export const mockAlerts: ComplianceAlert[] = [
  {
    id: 'CA-001',
    type: 'Policy Expiry',
    description: '"Fire Safety Procedures" policy due for review.',
    date: '2025-07-15',
    severity: 'High',
    status: 'Open'
  },
  {
    id: 'CA-002',
    type: 'Training Gap',
    description: '3 staff members require "Infection Control" training.',
    date: '2025-07-10',
    severity: 'Medium',
    status: 'Open'
  },
  {
    id: 'CA-003',
    type: 'Incident Report',
    description: 'Minor incident reported in Unit 3.',
    date: '2025-07-08',
    severity: 'Low',
    status: 'Resolved'
  }
];



// insightsData
// Priority levels
export type InsightPriority = 'Urgent' | 'High' | 'Medium' | 'Low';

// Interface for insights
export interface Insight {
  priority: InsightPriority;
  text: string;
  isUrgent: boolean;
}

// Exported insights data
export const insights: Insight[] = [
  {
    priority: 'Urgent',
    text: 'Review "Fire Safety Procedures" policy (CA-001) immediately.',
    isUrgent: true,
  },
  {
    priority: 'High',
    text: 'Assign "Infection Control" refresher training to 3 identified staff members.',
    isUrgent: false,
  },
  {
    priority: 'Medium',
    text: 'Consider scheduling a comprehensive audit for Safety & Emergency Policies due to lower compliance.',
    isUrgent: false,
  },
  {
    priority: 'Low',
    text: 'Ensure all new policies are tagged with relevant ACQS/NDIS standards for better tracking.',
    isUrgent: false,
  },
];
