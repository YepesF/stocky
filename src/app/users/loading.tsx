import { SectionCardsSkeleton } from "@/components/section-cards-skeleton";
import React from "react";

export default function loading() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCardsSkeleton />
    </div>
  );
}
