import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "BharatkaDSA - MSquare Software",
  description: "BharatkaDSA - Direct Selling Agents Management System.",
};

export default function BharatkaDSAPage() {
  return (
    <ProductUI
      title="BharatkaDSA"
      subtitle="Direct Selling Agents Management System"
      description={
        <>
          <p className="mb-4">
            Our Direct Selling Agent BharatkaDSA platform is built to streamline
            operations for DSAs working with banks and financial institutions.
            With intuitive client management features, lead tracking, and
            partner portals, BharatkaDSA is the trusted choice for over 4,500
            DSAs across India.
          </p>
          <p>Discover how BharatkaDSA can transform your DSA operations</p>
        </>
      }
      productImage="/bharat.png"
      visitLink="https://bharatkadsa.com/"
      themeColor="#e78114"
    />
  );
}
