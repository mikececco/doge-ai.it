import type { Metadata } from "next";
import SectionWrapper from "@/components/ui/SectionWrapper";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Cookie Policy de Il Doge di Venezia.",
};

export default function CookiePolicy() {
  return (
    <SectionWrapper className="pt-40 pb-20">
      <h1 className="text-section">Cookie Policy</h1>
      <p className="text-xl text-grigio-scuro mt-6">In aggiornamento.</p>
    </SectionWrapper>
  );
}
