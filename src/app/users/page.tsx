import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

// TODO Delete this data after
import data from "@/app/data.json";

export default function Users() {
  return (
    <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
      <SectionCards />
      <DataTable data={data} />
    </div>
  );
}
