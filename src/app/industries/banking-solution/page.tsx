import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { 
  title: 'Banking Solution - MSquare Software', 
  description: 'Banking and financial technology solutions for co-operative banks, Nidhi banks, and microfinance institutions.' 
};

const features = [
  { 
    title: 'BankLnD.com', 
    description: 'A robust Learning and Development (L&D) platform tailored to the unique needs of co-operative banks, credit societies, Nidhi banks, and Microfinance Institutions (MFIs). BankLnD.com offers a comprehensive suite of tools for training employees, ensuring regulatory compliance, and staying updated with the latest trends and industry standards.' 
  },
  { 
    title: 'Flexible Offerings', 
    description: 'From SaaS solutions to fully customizable enterprise modules, BankLnD adapts to institutions of all sizes and complexities.' 
  },
  { 
    title: 'Compliance and Reporting', 
    description: 'Ensure your teams are fully compliant with regulatory frameworks through real-time tracking and automated reporting.' 
  },
  { 
    title: 'Customizable Learning Paths', 
    description: 'Tailor training modules to align with the specific objectives of your institution, ensuring precise learning outcomes.' 
  },
];

export default function BankingSolutionPage() {
  return (
    <IndustryUI 
      title="Industries We Serve"
      subtitle="Discover Our Specialized Software Solutions Across Banking, Fitness, Advertising, and More"
      contentHeading="Industries We Impact"
      description="Through BankLnD.com and BharatKADSA.com, we serve co-operative banks, Nidhi banks, and microfinance institutions (MFIs), offering tailored solutions that improve operational efficiency and compliance."
      concludingText="MSquare Software is committed to enabling banking institutions to achieve seamless operational efficiency, compliance, and workforce excellence with BankLnD."
      features={features}
      bgImage="/Images/banking-solution.jpg"
      contentImage="/Images/banking-solution.jpg"
    />
  );
}
