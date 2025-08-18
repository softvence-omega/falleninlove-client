import { QuickSummaryCardProps } from '@/components/QuickSummaryCard';
import UserhomedashFeature1 from "../assets/UserHomedashFeature/UserHomedashFeature1.png";
import UserhomedashFeature2 from "../assets/UserHomedashFeature/UserHomedashFeature2.png";
import UserhomedashFeature3 from "../assets/UserHomedashFeature/UserHomedashFeature3.png";
import UserhomedashFeature4 from "../assets/UserHomedashFeature/UserHomedashFeature4.png";
import UserhomedashFeature5 from "../assets/UserHomedashFeature/UserHomedashFeature5.png";
import UserhomedashFeature6 from "../assets/UserHomedashFeature/UserHomedashFeature6.png";
import { FeatureCardProps } from "@/components/FeatureCard";
 import { PolicyCardsProps } from '@/components/PolicyCardsUser';
export const quickSummaryData: QuickSummaryCardProps[] = [
  {
    title: "Assigned Policies",
    value: "12",
    linkText: "View All",
    linkHref: "#",
    color: "blue",
  },
  {
    title: "Pending Induction",
    value: "03",
    linkText: "Start Now",
    linkHref: "#",
    color: "red",
  },
  {
    title: "Survey & Wellbeing",
    value: "05",
    linkText: "See Details",
    linkHref: "#",
    color: "green",
  },
  {
    title: "Alerts",
    value: "01",
    linkText: "Resolve",
    linkHref: "#",
    color: "yellow",
  },
];

export const featuresData: FeatureCardProps[] = [
  {
    title: "AI Policy Assistant",
    description: "Get instant, contextual guidance on policies and procedures.",
    buttonText: "Ask the AI",
    buttonColor: "green",
    img: UserhomedashFeature1,
  },
  {
    title: "Voice Companion",
    description: "Access information hands-free with voice commands.",
    buttonText: "Activate Voice",
    buttonColor: "yellow",
    img: UserhomedashFeature2,
  },
  {
    title: "Induction & Training",
    description: "Manage your learning modules and track progress.",
    buttonText: "Go to Training",
    buttonColor: "blue",
    img: UserhomedashFeature3,
  },
  {
    title: "Surveys & Wellbeing",
    description: "Share your feedback and access wellbeing resources.",
    buttonText: "Take Survey",
    buttonColor: "yellow",
    img: UserhomedashFeature4,
  },
  {
    title: "Language & Accessibility",
    description: "Adjust language settings and accessibility options.",
    buttonText: "Settings",
    buttonColor: "yellow",
    img: UserhomedashFeature5,
  },
  {
    title: "Help & Support",
    description: "Find answers to your questions and get assistance.",
    buttonText: "Go Help",
    buttonColor: "blue",
    img: UserhomedashFeature6,
  },
];

export const policies : PolicyCardsProps[] = [
    {
      id: 1,
      title: "Medication Management Policy",
      description: "Outlines procedures for safe medication administration and storage",
      category: "Care",
      delivery: "Delivery",
      lastUpdated: "2024-06-15",
      isPrimary: true,
    },
    {
      id: 2,
      title: "Medication Management Policy",
      description: "Outlines procedures for safe medication administration and storage",
      category: "Care",
      delivery: "Delivery",
      lastUpdated: "2024-06-15",
    },
    {
      id: 3,
      title: "Medication Management Policy",
      description: "Outlines procedures for safe medication administration and storage",
      category: "Care",
      delivery: "Delivery",
      lastUpdated: "2024-06-15",
    },
    {
      id: 4,
      title: "Medication Management Policy",
      description: "Outlines procedures for safe medication administration and storage",
      category: "Care",
      delivery: "Delivery",
      lastUpdated: "2024-06-15",
    },
  ];