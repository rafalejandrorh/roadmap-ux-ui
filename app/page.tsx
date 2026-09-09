import { Hero } from "@/components/roadmap/hero";
import { Legend } from "@/components/roadmap/legend";
import { RoadmapCanvas } from "@/components/roadmap/roadmap-canvas";

export default function Home() {
  return (
    <div className="roadmap-grain flex min-h-full flex-1 flex-col">
      <a
        href="#mapa"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-card focus:px-3 focus:py-2"
      >
        Saltar al mapa
      </a>
      <Hero />
      <Legend />
      <main>
        <h2 className="sr-only">Camino de habilidades</h2>
        <RoadmapCanvas />
      </main>
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Mapa para un principiante que busca su primer rol. No sustituye
            práctica con usuarios reales.
          </p>
          <p className="font-mono text-[11px] tracking-wider uppercase">
            roadmap-ux-ui
          </p>
        </div>
      </footer>
    </div>
  );
}
