import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "AutomateMySchool - MSquare Software",
  description: "Simplify Preprimary School Operations.",
};

export default function AutomateSchoolPage() {
  return (
    <ProductUI
      title="AutomateMySchool"
      subtitle="AutomateMySchool – Transforming Preprimary Education"
      description={
        <>
          <p className="mb-4">
            AutomateMySchool platform is designed to simplify operations for
            preprimary schools. With intuitive student management features,
            seamless communication tools, and real-time analytics,
            AutomateMySchool is the trusted choice for schools aiming to enhance
            efficiency and engagement.
          </p>
          <p>
            Discover how AutomateMySchool can revolutionize your school's
            operations
          </p>
        </>
      }
      productImage="/school1.png"
      visitLink="https://automatemyschool.com/"
      themeColor="#e78114ff"
    />
  );
}
