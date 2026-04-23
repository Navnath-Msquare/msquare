import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "SmartDSACRM - MSquare Software",
  description: "SmartDSACRM - CRM for Direct Selling Agents.",
};

export default function SmartDSACRMPage() {
  return (
    <ProductUI
      title="SmartDSACRM"
      subtitle="CRM for Direct Selling Agents"
      description={
        <>
          <p className="mb-4">
            Our Direct Selling Agent SmartDSACRM platform is built to streamline
            operations for DSAs working with banks and financial institutions.
            With intuitive client management features, lead tracking, and
            partner portals, SmartDSACRM is the trusted choice for over 4,500
            DSAs across India.
          </p>
          <p>Discover how SmartDSACRM can transform your DSA operations</p>
        </>
      }
      productImage="/Images/smartdsa.jpg"
      visitLink="https://smartdsacrm.com/"
      themeColor="#3B82F6"
    />
  );
}
