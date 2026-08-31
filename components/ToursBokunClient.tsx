"use client";

import { BokunProductListWidget } from "@/components/BokunProductListWidget";

/** Client boundary so the Bokun embed never runs during RSC/SSR. */
export function ToursBokunClient() {
  return <BokunProductListWidget />;
}
