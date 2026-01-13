import Link from "next/link";
import { mockDialogs } from "@/lib/data";
import { DialogCard } from "@/components/dialog-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-thin text-foreground">Dialogoi</h1>
            <Link href="/sobre" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Sobre
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-1">
            Diálogos recentes
          </h2>
          <p className="text-sm text-muted-foreground">
            Explore as discussões mais recentes entre amigos
          </p>
        </div>

        {/* Grid de diálogos */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockDialogs.map((dialog) => (
            <DialogCard key={dialog.id} dialog={dialog} />
          ))}
        </div>
      </div>
    </main>
  );
}
