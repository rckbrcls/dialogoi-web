import type { Message, Participant } from "@/lib/data";

interface ChatMessageProps {
  message: Message;
  participant: Participant;
}

export function ChatMessage({ message, participant }: ChatMessageProps) {
  return (
    <div className="flex gap-3">
      {/* Avatar */}
      <div
        className="size-10 rounded-full flex items-center justify-center text-white font-medium shrink-0"
        style={{ backgroundColor: participant.color }}
      >
        {participant.name.charAt(0).toUpperCase()}
      </div>

      {/* Message content */}
      <div className="flex flex-col gap-1">
        <span className="text-xs font-medium" style={{ color: participant.color }}>
          {participant.name}
        </span>
        <p className="text-sm leading-relaxed text-foreground">
          {message.content}
        </p>
      </div>
    </div>
  );
}
