import { phases } from "@/content/roadmap";

export function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
        <p className="font-mono text-[11px] tracking-[0.22em] text-primary uppercase">
          Hoja de ruta · Product / UX / UI Design
        </p>
        <div className="max-w-3xl">
          <h1 className="font-heading text-4xl leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Del cero al primer trabajo como diseñador de producto.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Un camino visual para quien parte de cero y quiere un rol junior de
            Product Designer o UX/UI Designer. No es un curso: es el mapa de
            qué aprender, en qué orden, y qué evidencia pide un hiring manager.
          </p>
        </div>
        <dl className="grid max-w-3xl gap-4 text-sm sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Ritmo
            </dt>
            <dd className="mt-1 font-heading text-xl">9–12 meses</dd>
            <p className="mt-1 text-muted-foreground">
              Unas 6 si estudias a tiempo casi completo.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Destino
            </dt>
            <dd className="mt-1 font-heading text-xl">Generalista junior</dd>
            <p className="mt-1 text-muted-foreground">
              Research, UI, Figma y 3 case studies de proceso.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card/70 p-4">
            <dt className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
              Cómo se usa
            </dt>
            <dd className="mt-1 font-heading text-xl">Clic en un nodo</dd>
            <p className="mt-1 text-muted-foreground">
              Abre el porqué, un ejercicio y recursos (ES/EN).
            </p>
          </div>
        </dl>
        <nav aria-label="Fases de la hoja de ruta" className="flex flex-wrap gap-2">
          {phases.map((phase) => (
            <a
              key={phase.id}
              href={`#${phase.id}`}
              className="rounded-full border border-border bg-card px-3 py-1.5 font-mono text-[11px] tracking-wide text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {phase.number} {phase.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
