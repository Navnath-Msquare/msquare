import type { Metadata } from "next";
import ProductUI from "@/components/ProductUI";

export const metadata: Metadata = {
  title: "ZeroTicket - MSquare Software",
  description: "Ticket & Project Management Platform.",
};

export default function ZeroTicketPage() {
  return (
    <ProductUI
      title="ZeroTicket"
      subtitle="ZeroTicket – Simplifying Ticket &
      Project Management"
      description={
        <>
          <p className="mb-4">
            Our ZeroTicket platform is designed to streamline operations for
            businesses and teams handling support tickets, projects, and
            workflow tasks. With intuitive ticket management, project tracking.
            ZeroTicket is the trusted choice for organizations seeking
            efficiency and faster resolution.
          </p>
        </>
      }
      productImage="/zero-tecket.png"
      visitLink="https://zero-ticket.com/"
      themeColor="#e78114"
    />
  );
}
