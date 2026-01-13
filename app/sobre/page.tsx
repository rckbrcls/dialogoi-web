import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Mic, Users, FileText, Github, Tags } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Link passHref href="/">
              <Button variant="ghost" size="sm" className="gap-2 duration-500 cursor-pointer">
                <ArrowLeft className="size-4" />
                Voltar
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container  mx-auto px-4 py-12 max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Sobre o Dialogoi
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Um espaço para compartilhar conversas produtivas, de forma anônima.
        </p>

        <div className="relative h-[200px] mb-12 overflow-hidden">
          <Image
            src="/people.png"
            alt="Pessoas conversando"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* História */}
        <div className="space-y-4 mb-12">
          <p className="text-foreground leading-relaxed">
            O <strong>Dialogoi</strong> nasceu de uma vontade simples: compartilhar as conversas
            produtivas que tenho com meus amigos. Sabe aquelas discussões que surgem do nada,
            sobre filosofia, tecnologia, vida, e que te fazem pensar por dias? São essas que
            quero preservar e dividir.
          </p>

          <p className="text-foreground leading-relaxed">
            Mas existe um obstáculo: o medo de exposição. Nem eu, nem meus amigos, queremos
            ter nossas identidades ligadas a opiniões que podem ser mal interpretadas fora
            de contexto. Por isso, o Dialogoi apresenta todas as conversas de forma
            <strong> completamente anônima</strong>.
          </p>

          <p className="text-foreground leading-relaxed">
            Os nomes são fictícios, mas as ideias são reais. O objetivo é ver se, ao expor
            essas discussões, conseguimos contribuir com algo produtivo para quem lê.
          </p>
        </div>

        {/* Como funciona */}
        <h2 className="text-xl font-semibold text-foreground mb-6">
          Como funciona?
        </h2>

        <div className="grid gap-4 md:grid-cols-2 mb-12">
          <Card>
            <CardContent className="pt-6">
              <Mic className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Transcrição
              </h3>
              <p className="text-sm text-muted-foreground">
                O modelo de IA processa o áudio e gera uma transcrição textual completa e precisa de toda a conversa.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Users className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Divisão de Falantes
              </h3>
              <p className="text-sm text-muted-foreground">
                Identificação automática e separação das falas de cada participante através de diarização avançada.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <FileText className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Criação de Resumo
              </h3>
              <p className="text-sm text-muted-foreground">
                A IA analisa o conteúdo e gera um resumo estruturado, destacando os pontos principais do diálogo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <Tags className="size-8 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">
                Criação de Tags
              </h3>
              <p className="text-sm text-muted-foreground">
                Categorização automática do conteúdo com tags relevantes para organizar e facilitar a busca.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Por que fazer isso */}
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Por que fazer isso?
        </h2>

        <p className="text-foreground leading-relaxed mb-6">
          Acredito que muitas das melhores ideias surgem em conversas informais.
          Discussões entre amigos, sem a pressão de ser polido ou politicamente correto,
          onde cada um defende seu ponto de vista com honestidade. O Dialogoi é uma
          tentativa de capturar um pouco dessa magia e compartilhar com quem tiver
          interesse em ler.
        </p>

        <p className="text-muted-foreground text-sm italic mb-12">
          O nome vem do grego <em>διάλογοι</em> (diálogos), em homenagem aos diálogos
          de Platão – conversas que moldaram o pensamento ocidental.
        </p>

        {/* Modelo de IA */}
        <div className="border-t pt-12">
          <h2 className="text-xl font-semibold text-foreground mb-4">
            O Modelo
          </h2>

          <p className="text-foreground leading-relaxed mb-6">
            Estou desenvolvendo um modelo de IA open source que faz todo esse processo:
            transcrição com diarização, anonimização e geração de resumos. O objetivo é
            permitir que qualquer pessoa possa transformar suas próprias conversas em
            diálogos publicáveis.
          </p>

          <Card className="bg-muted/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <Github className="size-10 text-foreground shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Contribua ou use o modelo
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    O projeto é open source. Você pode usar para suas próprias conversas,
                    contribuir com melhorias ou adaptar para seu caso de uso.
                  </p>
                  <a
                    href="https://github.com/seu-usuario/dialogoi-model"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm" className="gap-2 cursor-pointer">
                      <Github className="size-4" />
                      Ver no GitHub
                    </Button>
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="border-t pt-8 mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            developed by{" "}
            <a
              href="https://www.polterware.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-primary transition-colors underline underline-offset-2"
            >
              polterware
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
