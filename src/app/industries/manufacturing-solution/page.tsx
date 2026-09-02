import type { Metadata } from 'next';
import IndustryUI from '@/components/IndustryUI';

export const metadata: Metadata = { 
  title: 'Manufacturing Solution - MSquare Software', 
  description: 'Advanced ERP and supply chain systems for production optimization and manufacturing management.' 
};

const features = [
  { 
    title: 'MagiXERP', 
    description: 'Powered by the NextERP Frappe Platform, MagiXERP is a comprehensive ERP solution that caters to a wide range of manufacturing needs, with a focus on medical oxygen, nitrogen, and industrial gas production. Successfully implemented with Sagar Gasses Pvt. Ltd., it offers an all-encompassing system for production and inventory.' 
  },
  { 
    title: 'Complete Integration', 
    description: 'Includes advanced features such as RFID and Barcode technology to enhance operational accuracy and traceability throughout the manufacturing process.' 
  },
  { 
    title: 'Mobile Accessibility', 
    description: 'Real-time mobile access ensures that manufacturing processes can be monitored and managed on the go, improving responsiveness and decision-making.' 
  },
  { 
    title: 'Scalable Solution', 
    description: 'Adaptable to various manufacturing sectors, providing end-to-end visibility and control over production lines, inventory, and logistics.' 
  },
];

export default function ManufacturingSolutionPage() {
  return (
    <IndustryUI 
      title="Industries We Serve"
      subtitle="Discover Our Specialized Software Solutions Across Banking, Fitness, Advertising, and More"
      contentHeading="Industries We Impact"
      description="Efficiency, precision, and control are the cornerstones of successful manufacturing operations. MSquare Software brings cutting-edge ERP technology to the manufacturing sector, enabling streamlined processes and real-time data management. Transforming Manufacturing Operations with Integrated ERP Solutions."
      concludingText="With MagiXERP, manufacturers can boost productivity, reduce waste, and optimize their entire supply chain."
      features={features}
      bgImage="/Images/erp.jpg"
      contentImage="/Images/erp.jpg"
    />
  );
}
