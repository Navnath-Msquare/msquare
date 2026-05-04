import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { 
  title: 'Outdoor Advertising Solutions - MSquare Software', 
  description: 'Revolutionizing OOH advertising management with smart billing and CRM systems like BillMyHoarding.com.' 
};

const features = [
  { 
    title: 'BillMyHoarding.com :', 
    description: 'A comprehensive platform built to handle the complexities of OOH advertising , including client CRM, billing management, and hoarding inventory.' 
  },
  { 
    title: 'Client Invoice Automation :', 
    description: 'Streamlines invoicing, reducing manual work and improving accuracy in financial reporting.' 
  },
  { 
    title: 'Hoarding Inventory Management :', 
    description: 'Provides real-time availability and booking management for hoarding locations, ensuring optimal asset utilization.' 
  },
  { 
    title: 'Business Partner Portal :', 
    description: 'A dedicated portal for partners to manage client interactions and sales incentives, enhancing the overall partner experience.' 
  },
];

export default function OutdoorAdvertisingPage() {
  return (
    <IndustryUI 
      title="Industries We Serve"
      subtitle="Discover Our Specialized Software Solutions Across Banking, Fitness, Advertising, and More"
      contentHeading="Industries We Impact"
      description="The complexities of managing hoarding locations, client relationships, and billing systems in Out-of-Home (OOH) advertising require intelligent and adaptive solutions. MSquare Software delivers cutting-edge solutions for OOH advertising agencies to manage these intricate processes with ease. Revolutionizing OOH Advertising Management with Smart Billing and CRM Systems."
      concludingText="BillMyHoarding.com transforms the way OOH advertising businesses operate, allowing them to focus on scaling while the platform handles the details of billing and client management."
      features={features}
      bgImage="/Images/billmy.jpg"
      contentImage="/Images/billmy.jpg"
    />
  );
}
