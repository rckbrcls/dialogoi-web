import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";
import { getDialogById, getParticipantById } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SummaryCard } from "@/components/summary-card";
import { ChatMessage } from "@/components/chat-message";

interface DialogPageProps {
  params: Promise<{ id: string }>;
}

export default async function DialogPage({ params }: DialogPageProps) {
  const { id } = await params;
  const dialog = getDialogById(id);

  if (!dialog) {
    notFound();
  }

  // Ordena as mensagens por order
  const sortedMessages = [...dialog.messages].sort((a, b) => a.order - b.order);

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="size-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Título */}
        <div className="mb-6">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
            {dialog.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Calendar className="size-4" />
              <span>{new Date(dialog.createdAt).toLocaleDateString("pt-BR", {
                day: "numeric",
                month: "long",
                year: "numeric"
              })}</span>
            </div>
            {dialog.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Summary Card */}
        <div className="mb-8">
          <SummaryCard dialog={dialog} />
        </div>

        {/* Chat Section */}
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
            Conversa
          </h2>

          <div className="bg-muted/30 rounded-2xl p-4 md:p-6 space-y-5">
            {sortedMessages.map((message) => {
              const participant = getParticipantById(dialog, message.participantId);
              if (!participant) return null;

              return (
                <ChatMessage
                  key={message.id}
                  message={message}
                  participant={participant}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
