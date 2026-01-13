import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-10 h-[88px] max-sm:h-[68px] flex items-center">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="relative size-10 max-sm:size-8">
              <Image
                src="/logo.png"
                alt="Dialogoi"
                fill
                className="object-contain"
                priority
              />
            </div>
            <h1 className="text-4xl max-sm:text-2xl font-thin text-foreground tracking-tight">Dialogoi</h1>
          </div>

          <Link
            href="/sobre"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Sobre
          </Link>
        </div>
      </div>
    </header>
  );
}
