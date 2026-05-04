import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { 
  title: 'Custom Software Solution - MSquare Software', 
  description: 'Tailored software solutions and specialized platforms like Greenybook and Pralekh.' 
};

const features = [
  { 
    title: 'Greenybook.com :', 
    description: 'A specialized social platform for environmental enthusiasts, fostering communities focused on tree planting and sustainability. Fully customizable, Greenybook.com can be adapted to various industries and user bases, ensuring that it meets the specific needs of your community.' 
  },
  { 
    title: 'Pralekh.co.in :', 
    description: '"Pralekh:Your Go-To App for Hassle-Free Documentation" is an intuitive platform for managing and applying for essential documents. From rent agreements to marriage certificates, birth certificates, FSSAI certificates, Udyam registrations, and Shop Act licenses, Pralekh simplifies these complex processes. Developed by MSquare as a customizable solution, Pralekh adapts to client requirements and provides businesses with a hassle-free, efficient way to handle documentation and compliance needs.' 
  },
];

export default function CustomSoftwareSolutionPage() {
  return (
    <IndustryUI 
      title="Industries We Serve"
      subtitle="Discover Our Specialized Software Solutions Across Banking, Fitness, Advertising, and More"
      contentHeading="Industries We Impact"
      description="At MSquare Software, we understand that no two businesses are alike, and off-the-shelf solutions may not meet all your needs. That’s why we offer highly customizable platforms designed to adapt to the specific requirements of your business. Tailored Software Solutions for Unique Business Requirements."
      concludingText="Both Greenybook.com and Pralekh.co.in are examples of MSquare’s capability to create scalable, flexible solutions that meet the precise requirements of businesses across various sectors."
      features={features}
      bgImage="/Images/banklnd-img.jpg"
      contentImage="/Images/banklnd-img.jpg"
    />
  );
}
