// Tipos para o Dialogoi
export interface Participant {
  id: string;
  name: string;
  avatar?: string;
  color: string; // Cor para identificar o participante no chat
}

export interface Message {
  id: string;
  participantId: string;
  content: string;
  order: number; // Para ordenar as mensagens
  timestamp?: string;
}

export interface Dialog {
  id: string;
  title: string;
  summary: string;
  participants: Participant[];
  messages: Message[];
  createdAt: string;
  tags?: string[];
}

// Mock de dados
export const mockParticipants: Participant[] = [
  { id: "erick", name: "Erick", color: "hsl(220, 70%, 50%)" },
  { id: "lucas", name: "Lucas", color: "hsl(150, 70%, 40%)" },
  { id: "maria", name: "Maria", color: "hsl(340, 70%, 50%)" },
  { id: "pedro", name: "Pedro", color: "hsl(30, 70%, 50%)" },
];

export const mockDialogs: Dialog[] = [
  {
    id: "1",
    title: "O futuro da inteligência artificial",
    summary:
      "Uma discussão sobre os impactos da IA no mercado de trabalho e na sociedade. Debatemos sobre automação, criatividade humana e os limites éticos da tecnologia.",
    participants: [
      mockParticipants[0],
      mockParticipants[1],
      mockParticipants[2],
    ],
    messages: [
      {
        id: "m1",
        participantId: "erick",
        content:
          "Vocês viram as últimas novidades sobre IA generativa? Tô impressionado com a velocidade que isso tá avançando.",
        order: 1,
      },
      {
        id: "m2",
        participantId: "lucas",
        content:
          "Sim! Mas confesso que tô um pouco preocupado. Muita gente vai perder emprego com isso...",
        order: 2,
      },
      {
        id: "m3",
        participantId: "maria",
        content:
          "Eu discordo um pouco. Acho que vai criar mais empregos do que destruir. Sempre foi assim com tecnologia.",
        order: 3,
      },
      {
        id: "m4",
        participantId: "erick",
        content:
          "Concordo com a Maria. O ponto é que os empregos vão mudar. Quem se adaptar vai se dar bem.",
        order: 4,
      },
      {
        id: "m5",
        participantId: "lucas",
        content:
          "Tá, mas e as pessoas que não conseguem se adaptar? Nem todo mundo tem acesso a educação de qualidade.",
        order: 5,
      },
      {
        id: "m6",
        participantId: "maria",
        content:
          "Isso é verdade. O papel do governo vai ser essencial nessa transição.",
        order: 6,
      },
      {
        id: "m7",
        participantId: "erick",
        content:
          "Exatamente. Renda básica universal pode ser uma solução interessante.",
        order: 7,
      },
      {
        id: "m8",
        participantId: "lucas",
        content: "Hmm, nunca tinha pensado por esse lado. Faz sentido!",
        order: 8,
      },
    ],
    createdAt: "2024-01-10",
    tags: ["tecnologia", "IA", "futuro"],
  },
  {
    id: "2",
    title: "Minimalismo digital",
    summary:
      "Conversamos sobre como reduzir o tempo de tela e viver de forma mais intencional na era digital. Compartilhamos dicas e experiências pessoais.",
    participants: [mockParticipants[0], mockParticipants[3]],
    messages: [
      {
        id: "m1",
        participantId: "erick",
        content:
          "Cara, tô tentando reduzir meu tempo de tela. Tava gastando 6 horas por dia no celular!",
        order: 1,
      },
      {
        id: "m2",
        participantId: "pedro",
        content:
          "Eu também passei por isso. O que me ajudou foi desativar todas as notificações.",
        order: 2,
      },
      {
        id: "m3",
        participantId: "erick",
        content:
          "Boa ideia! Também pensei em deixar o celular em preto e branco.",
        order: 3,
      },
      {
        id: "m4",
        participantId: "pedro",
        content:
          "Isso funciona demais! As cores são feitas pra viciar a gente.",
        order: 4,
      },
      {
        id: "m5",
        participantId: "erick",
        content: "Vou tentar por uma semana e te conto como foi.",
        order: 5,
      },
      {
        id: "m6",
        participantId: "pedro",
        content:
          "Vai fundo! Outra dica: define horários específicos pra checar redes sociais.",
        order: 6,
      },
    ],
    createdAt: "2024-01-08",
    tags: ["produtividade", "bem-estar", "digital"],
  },
  {
    id: "3",
    title: "Filosofia do dia a dia",
    summary:
      "Uma conversa descontraída sobre como aplicar conceitos filosóficos na vida cotidiana. Falamos sobre estoicismo, mindfulness e propósito de vida.",
    participants: [
      mockParticipants[1],
      mockParticipants[2],
      mockParticipants[3],
    ],
    messages: [
      {
        id: "m1",
        participantId: "lucas",
        content:
          "Comecei a ler sobre estoicismo e tô achando muito útil pro dia a dia.",
        order: 1,
      },
      {
        id: "m2",
        participantId: "maria",
        content: "Marco Aurélio é incrível! Meditações mudou minha vida.",
        order: 2,
      },
      {
        id: "m3",
        participantId: "pedro",
        content: "Vocês acham que dá pra ser estoico no mundo moderno?",
        order: 3,
      },
      {
        id: "m4",
        participantId: "lucas",
        content:
          "Acho que sim. A essência é focar no que você controla e aceitar o resto.",
        order: 4,
      },
      {
        id: "m5",
        participantId: "maria",
        content:
          "Exato! Não é sobre reprimir emoções, é sobre responder ao invés de reagir.",
        order: 5,
      },
      {
        id: "m6",
        participantId: "pedro",
        content: "Interessante. Vou dar uma chance então!",
        order: 6,
      },
      {
        id: "m7",
        participantId: "lucas",
        content: "Recomendo o livro 'A Arte de Viver' do Epicteto pra começar.",
        order: 7,
      },
    ],
    createdAt: "2024-01-05",
    tags: ["filosofia", "estoicismo", "vida"],
  },
];

// Função helper para buscar um diálogo por ID
export function getDialogById(id: string): Dialog | undefined {
  return mockDialogs.find((dialog) => dialog.id === id);
}

// Função helper para buscar participante por ID
export function getParticipantById(
  dialog: Dialog,
  participantId: string
): Participant | undefined {
  return dialog.participants.find((p) => p.id === participantId);
}
