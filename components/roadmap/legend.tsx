export function Legend() {
  return (
    <section
      id="mapa"
      className="mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 py-10 sm:px-6 sm:flex-row sm:items-end sm:justify-between"
    >
      <div className="max-w-xl">
        <h2 className="font-heading text-2xl tracking-tight sm:text-3xl">
          Cómo leer el mapa
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          El camino central es lo que te hace contratatable. Las ramas de los
          lados profundizan o puedes saltártelas. Los nodos rellenos son
          proyectos: cierran cada fase con algo que puedes enseñar.
        </p>
      </div>
      <ul className="flex flex-wrap gap-3 text-xs">
        <li className="flex items-center gap-2">
          <span className="inline-block h-8 min-w-24 rounded-lg border border-border bg-card px-2 py-1.5 font-medium shadow-sm">
            Principal
          </span>
          <span className="text-muted-foreground">hazlo</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-8 min-w-24 rounded-lg border-2 border-dashed border-foreground/35 bg-card/70 px-2 py-1.5 font-medium">
            Opcional
          </span>
          <span className="text-muted-foreground">si te da tiempo</span>
        </li>
        <li className="flex items-center gap-2">
          <span className="inline-block h-8 min-w-24 rounded-lg border border-transparent bg-primary px-2 py-1.5 font-medium text-primary-foreground">
            Proyecto
          </span>
          <span className="text-muted-foreground">para el portafolio</span>
        </li>
      </ul>
    </section>
  );
}
