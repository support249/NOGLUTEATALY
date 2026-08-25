import type { Metadata } from "next";
import { FaqPageClient } from "@/components/FaqPageClient";
import { faqDisclaimer, faqGroups } from "@/content/faq";

export const metadata: Metadata = {
  title: "FAQ",
};

const disclaimerTitle = "LEGAL-SAFE & REASSURING DISCLAIMER";

export default function FaqPage() {
  return (
    <FaqPageClient
      groups={faqGroups}
      disclaimer={faqDisclaimer}
      disclaimerTitle={disclaimerTitle}
    />
  );
}
