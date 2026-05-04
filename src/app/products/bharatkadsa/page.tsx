import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "BharatKADSA - MSquare Software",
  description: "BharatKADSA - Direct Selling Agents Management System.",
};

export default function BharatKADSAPage() {
  return (
    <ProductUI
      title="BharatKADSA"
      subtitle="Direct Selling Agents Management System"
      description={
        <>
          <p className="mb-4">
            Our Direct Selling Agent BharatKADSA platform is built to streamline
            operations for DSAs working with banks and financial institutions.
            With intuitive client management features, lead tracking, and
            partner portals, BharatKADSA is the trusted choice for over 4,500
            DSAs across India.
          </p>
          <p>Discover how BharatKADSA can transform your DSA operations</p>
        </>
      }
      productImage="/bharat.png"
      visitLink="https://bharatkadsa.com/"
      themeColor="#EF4444"
    />
  );
}
