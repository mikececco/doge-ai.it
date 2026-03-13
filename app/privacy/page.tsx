import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy de Il Doge di Venezia.",
};

export default function Privacy() {
  return (
    <SectionWrapper className="pt-40 pb-20">
      <h1 className="text-section">Privacy Policy</h1>
      <p className="text-xl text-grigio-scuro mt-6">In aggiornamento.</p>
    </SectionWrapper>
  );
}
