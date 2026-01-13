import { Card, CardContent } from "@/components/ui/card";
import type { Dialog } from "@/lib/data";

interface SummaryCardProps {
  dialog: Dialog;
}

export function SummaryCard({ dialog }: SummaryCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
          Resumo
        </h2>
        <p className="text-foreground leading-relaxed">
          {dialog.summary}
        </p>

        {/* Participantes */}
        <div className="mt-4 pt-4 border-t">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            Participantes
          </h3>
          <div className="flex flex-wrap gap-2">
            {dialog.participants.map((participant) => (
              <div
                key={participant.id}
                className="flex items-center gap-2 bg-muted px-3 py-1.5 rounded-full"
              >
                <div
                  className="size-5 rounded-full flex items-center justify-center text-white text-xs font-medium"
                  style={{ backgroundColor: participant.color }}
                >
                  {participant.name.charAt(0)}
                </div>
                <span className="text-sm">{participant.name}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
