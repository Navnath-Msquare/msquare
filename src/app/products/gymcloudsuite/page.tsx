import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "Fitness Management Platform - ",
  // description: "Complete Fitness Management Platform.",
};

export default function GymCloudSuitePage() {
  return (
    <ProductUI
      title="
      GymCloudSuite"
      subtitle="Fitness Management Platform"
      description={
        <>
          <p className="mb-4">
            A comprehensive CRM platform designed specifically for gyms and
            fitness centers. GymCloudSuite offers membership management,
            automated billing, attendance tracking, and personalized customer
            apps that enhance user experience. Whether you’re a small fitness
            studio or a multi-location franchise, GymCloudSuite scales with your
            business.
          </p>
          <p>
            For more information on how BankLnD can support your workforce,
            visit our platform.
          </p>
        </>
      }
      productImage="/gym1.png"
      visitLink="https://gymcloudsuite.com/"
      themeColor="#e78114"
    />
  );
}
