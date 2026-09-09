# roadmap-ux-ui

Hoja de ruta visual, en español, para alguien que parte de cero y quiere su **primer trabajo** como Product Designer o UX/UI Designer.

No es un tracker de progreso ni un curso. Es un mapa tipo [roadmap.sh](https://roadmap.sh/ux-design): fases, nodos clicables, por qué cada tema importa a la hora de contratarte, un ejercicio concreto y recursos (marcados ES/EN).

## Cómo se usa

1. Recorre el camino de arriba abajo (10 fases, de orientación al primer trabajo).
2. El centro es lo imprescindible. Las ramas laterales son opcionales. Los nodos rellenos son proyectos.
3. Haz clic en un tema para abrir el panel con práctica y lecturas.

Ritmo orientativo: **9–12 meses** a media jornada, o unos **6 meses** si es intensivo. El entregable que abre puertas son **3 case studies de proceso**, no una galería de pantallas.

## Cómo ejecutarlo

Necesitas Node.js 20+.

```bash
npm install
npm run dev
```

La app queda en [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start
```

## Contenido

El currículo vive en [`content/roadmap.ts`](content/roadmap.ts): fases, nodos, ejercicios y enlaces. Si quieres añadir un tema, créalo ahí y colócalo en una fila (`left` / `center` / `right`) de su fase.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS y shadcn/ui.
