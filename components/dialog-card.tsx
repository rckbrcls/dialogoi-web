import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Users } from "lucide-react";
import type { Dialog } from "@/lib/data";

interface DialogCardProps {
  dialog: Dialog;
}

export function DialogCard({ dialog }: DialogCardProps) {
  return (
    <Link href={`/dialogo/${dialog.id}`}>
      <Card className="hover:ring-primary/30 transition-all cursor-pointer hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg">{dialog.title}</CardTitle>
          <CardDescription className="line-clamp-2">
            {dialog.summary}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1.5">
              <Users className="size-4" />
              <span>{dialog.participants.length} participantes</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MessageCircle className="size-4" />
              <span>{dialog.messages.length} mensagens</span>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex flex-wrap gap-2">
          {dialog.tags?.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
          <span className="ml-auto text-xs text-muted-foreground">
            {new Date(dialog.createdAt).toLocaleDateString("pt-BR")}
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}
