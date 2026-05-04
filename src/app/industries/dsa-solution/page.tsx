import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { 
  title: 'Direct Selling Agent (DSA) Solution - MSquare Software', 
  description: 'Smart CRM and commission tracking systems for Direct Selling Agents Management System.' 
};

const features = [
  { 
    title: 'BharatKADSA.com', 
    description: 'A comprehensive Customer Relationship Management (CRM) platform designed to streamline processes, manage leads, and increase sales efficiency specifically for Direct Selling Agents Management System.' 
  },
  { 
    title: 'Lead Management', 
    description: 'Automates lead tracking, follow-ups, and reminders, ensuring no opportunity is missed. It helps agents stay organized and close deals faster through structured workflows.' 
  },
  { 
    title: 'Sales Pipeline Visualization', 
    description: 'Provides real-time insights into the entire sales cycle, from initial contact to closing, allowing agents to visualize their progress and optimize their sales strategy.' 
  },
  { 
    title: 'Custom Reporting', 
    description: 'Create detailed reports to track performance, client interactions, and sales outcomes, providing actionable data to drive business growth and agent success.' 
  },
];

export default function DSASolutionPage() {
  return (
    <IndustryUI 
      title="Industries We Serve"
      subtitle="Discover Our Specialized Software Solutions Across Banking, Fitness, Advertising, and More"
      contentHeading="Industries We Impact"
      description="Direct Selling Agents (DSAs) serve as vital extensions of financial institutions, driving customer engagement and acquisition. MSquare Software delivers powerful CRM solutions designed specifically to cater to the unique demands of DSAs. Optimizing CRM Solutions for Direct Selling Agents."
      concludingText="By utilizing BharatKADSA, DSAs can focus on growing their client base while maintaining seamless communication and workflow management."
      features={features}
      bgImage="/Images/crm (1).jpg"
      contentImage="/Images/crm (1).jpg"
    />
  );
}
