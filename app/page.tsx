import { DialogFilters } from "@/components/dialog-filters";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <DialogFilters />
    </main>
  );
}
