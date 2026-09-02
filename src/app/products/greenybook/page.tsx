import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "Greenybook - MSquare Software",
  description: "Environmental sustainability platform.",
};

export default function GreenybookPage() {
  return (
    <ProductUI
      title="Green Book"
      subtitle="Social Media Platform"
      description={
        <>
          <p className="mb-4">
            A dynamic social media platform dedicated to environmental
            enthusiasts. Capture, share, and celebrate your planting journey and
            join us in making a lasting impact
          </p>
          <p></p>
        </>
      }
      productImage="/Images/greenybook-hero.png"
      visitLink="https://greenybook.com/"
      themeColor="#e78114"
    />
  );
}
