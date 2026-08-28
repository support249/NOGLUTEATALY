import type { Metadata } from "next";
import { FaqPageClient } from "@/components/FaqPageClient";
import { faqDisclaimer, faqGroups } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "FAQ",
  path: "/faq/",
});

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
