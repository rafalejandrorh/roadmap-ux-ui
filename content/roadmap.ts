export type ResourceLang = "ES" | "EN";
export type ResourceType =
  | "curso"
  | "articulo"
  | "libro"
  | "video"
  | "herramienta"
  | "guia";
export type TopicKind = "main" | "optional" | "project";
export type PhaseAccent =
  | "orientation"
  | "foundations"
  | "figma"
  | "research"
  | "architecture"
  | "ui"
  | "prototype"
  | "a11y"
  | "portfolio"
  | "job";

export interface Resource {
  title: string;
  url: string;
  lang: ResourceLang;
  type: ResourceType;
}

export interface Topic {
  id: string;
  title: string;
  kind: TopicKind;
  summary: string;
  whyItMatters: string;
  howToPractice: string;
  resources: Resource[];
}

export interface RoadmapRow {
  left?: string;
  center?: string;
  right?: string;
}

export interface Phase {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  timing: string;
  accent: PhaseAccent;
  rows: RoadmapRow[];
}

const topics: Record<string, Topic> = {
  "que-es-product-design": {
    id: "que-es-product-design",
    title: "Qué es Product Design",
    kind: "main",
    summary:
      "Un product designer cubre el ciclo completo: entender el problema, proponer una solución, diseñarla y comprobar que funciona. En la mayoría de startups y equipos medianos, este es el rol junior más contratable.",
    whyItMatters:
      "Las ofertas de “UX/UI Designer” casi siempre piden a alguien que investigue, wireframee, diseñe UI y entregue a desarrollo. Si te presentas solo como “hago pantallas bonitas”, te filtran.",
    howToPractice:
      "Elige una app que uses cada día. Anota tres momentos en los que te frustre y tres en los que fluya. Para cada uno, escribe: ¿quién es el usuario, qué intenta hacer y dónde se rompe la experiencia?",
    resources: [
      {
        title: "Google UX Design Certificate — Course 1 (Coursera)",
        url: "https://www.coursera.org/professional-certificates/google-ux-design",
        lang: "ES",
        type: "curso",
      },
      {
        title: "The Design of Everyday Things — Don Norman",
        url: "https://jnd.org/the-design-of-everyday-things/",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "ux-vs-ui": {
    id: "ux-vs-ui",
    title: "UX vs UI vs Product",
    kind: "main",
    summary:
      "UX es cómo funciona el producto. UI es cómo se ve y se siente. Product Design une ambos y añade criterio de negocio: qué vale la pena construir.",
    whyItMatters:
      "Si no puedes explicar esta diferencia en una entrevista, el reclutador asume que solo imitas Dribbble. Las empresas pequeñas quieren generalistas; las grandes especializan después.",
    howToPractice:
      "Toma una pantalla de una app conocida. En una columna escribe decisiones de UX (flujo, jerarquía de tareas, copy). En otra, decisiones de UI (tipo, color, spacing, componentes). Compártelo con alguien no diseñador y mira si entiende la diferencia.",
    resources: [
      {
        title: "UX vs UI — Nielsen Norman Group",
        url: "https://www.nngroup.com/articles/ux-vs-ui/",
        lang: "EN",
        type: "articulo",
      },
      {
        title: "Laws of UX",
        url: "https://lawsofux.com/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "como-se-contrata": {
    id: "como-se-contrata",
    title: "Cómo se contrata a un junior",
    kind: "main",
    summary:
      "Nadie te pide un título. Te piden 2 o 3 case studies que muestren proceso, evidencia y criterio. El portafolio es la entrevista antes de la entrevista.",
    whyItMatters:
      "Gasta energía donde se decide el sí: casos con problema real, research, iteración y resultado. Diez mockups sin contexto no consiguen llamadas.",
    howToPractice:
      "Lee 8 ofertas de “Junior Product Designer” o “UX/UI Designer” en tu mercado. Anota las 10 habilidades que más se repiten. Ese es tu temario, no el de un curso al azar.",
    resources: [
      {
        title: "What Hiring Managers Look For — NN/g",
        url: "https://www.nngroup.com/articles/ux-job-interviews/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "mentalidad-proceso": {
    id: "mentalidad-proceso",
    title: "Proceso, no pantallas",
    kind: "main",
    summary:
      "El trabajo no es “inventar una interfaz”. Es reducir incertidumbre: entender usuarios, plantear hipótesis, prototipar barato y aprender con evidencia.",
    whyItMatters:
      "Los hiring managers evalúan si razonas con restricciones. Un portafolio “feo” con research real gana a uno pixel-perfect sin problema que resolver.",
    howToPractice:
      "Durante una semana, cada vez que critiques un diseño (el de un cajero, una web, una app), escribe el problema del usuario antes de proponer una solución. Prohibido saltar al “yo lo haría así”.",
    resources: [
      {
        title: "Don't Make Me Think — Steve Krug",
        url: "https://sensible.com/dont-make-me-think/",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "observar-mal-diseno": {
    id: "observar-mal-diseno",
    title: "El músculo de observar",
    kind: "optional",
    summary:
      "Los diseñadores entrenan la atención: puertas que no se entienden, checkouts que abandonas, formularios que piden de más. Esa mirada es el oficio.",
    whyItMatters:
      "Si no ves problemas, no tienes de qué hablar en un case study. La observación cotidiana alimenta tu criterio más que cualquier tutorial de Figma.",
    howToPractice:
      "Lleva una nota en el móvil: “fricción del día”. Cada noche, captura una foto o screenshot y una frase: qué intentabas hacer y qué te lo impidió.",
    resources: [
      {
        title: "The Design of Everyday Things — ejemplos de Norman",
        url: "https://jnd.org/the-design-of-everyday-things/",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "proyecto-auditoria": {
    id: "proyecto-auditoria",
    title: "Auditar una app",
    kind: "project",
    summary:
      "Elige una app que uses. Recorre un flujo completo (registrarse, pedir, pagar, cancelar) y documenta fricciones con evidencia, no con gustos.",
    whyItMatters:
      "Es tu primer artefacto de portafolio: demuestra que puedes mirar un producto con método. No rediseñes todavía; primero diagnostica.",
    howToPractice:
      "Haz 8–12 capturas de un flujo. Para cada una: tarea del usuario, qué espera, qué ocurre, severidad (alta/media/baja) y una hipótesis de causa. En 2 páginas máximo.",
    resources: [
      {
        title: "Heuristic Evaluation — NN/g",
        url: "https://www.nngroup.com/articles/how-to-conduct-a-heuristic-evaluation/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "design-thinking": {
    id: "design-thinking",
    title: "Design Thinking",
    kind: "main",
    summary:
      "Empatizar, definir, idear, prototipar y testear. No es un ritual sagrado: es una forma de no enamorarte de la primera idea.",
    whyItMatters:
      "Cada case study junior se lee con estas etapas en mente. Si saltas de “idea” a “UI final”, parece que no diseñaste: decoraste.",
    howToPractice:
      "Coge un problema pequeño (por ejemplo, “perder el ticket del parking”). Recorre las cinco etapas en un FigJam de una hora. Documenta las ideas que descartaste y por qué.",
    resources: [
      {
        title: "d.school Design Thinking Bootleg",
        url: "https://dschool.stanford.edu/resources/design-thinking-bootleg",
        lang: "EN",
        type: "guia",
      },
      {
        title: "IDEO Design Thinking",
        url: "https://designthinking.ideo.com/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "principios-visuales": {
    id: "principios-visuales",
    title: "Principios visuales",
    kind: "main",
    summary:
      "Contraste, repetición, alineación, proximidad. Con estos cuatro ejes puedes ordenar casi cualquier interfaz sin “tener buen gusto”.",
    whyItMatters:
      "Aunque te enfoques en UX, vas a entregar UI. Un junior que no controla alineación y jerarquía no sobrevive a una critique.",
    howToPractice:
      "Redibuja un flyer's caótico (un evento local, un PDF de administración). Aplica solo alineación y jerarquía, sin cambiar el contenido. Antes/después lado a lado.",
    resources: [
      {
        title: "Refactoring UI — tips gratuitos",
        url: "https://www.refactoringui.com/",
        lang: "EN",
        type: "guia",
      },
      {
        title: "Hack Design — lecciones gratuitas",
        url: "https://hackdesign.org/",
        lang: "EN",
        type: "curso",
      },
    ],
  },
  gestalt: {
    id: "gestalt",
    title: "Principios de Gestalt",
    kind: "main",
    summary:
      "Proximidad, similitud, cierre, continuidad y destino común: cómo el ojo agrupa. La UI es percepción, no decoración.",
    whyItMatters:
      "Explicar “por qué estos botones van juntos” con Gestalt te hace sonar a diseñador, no a alguien que mueve capas al azar.",
    howToPractice:
      "Abre Settings de tu teléfono. Marca tres agrupaciones que funcionan por proximidad o similitud y una que falle. Rediseña solo esa agrupación en papel.",
    resources: [
      {
        title: "Laws of UX — Gestalt",
        url: "https://lawsofux.com/law-of-proximity/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  tipografia: {
    id: "tipografia",
    title: "Tipografía para UI",
    kind: "main",
    summary:
      "Jerarquía con tamaño, peso y color — no con cinco fuentes. Interlineado, medida (ancho de línea) y un scale tipográfico (por ejemplo 12 / 14 / 16 / 20 / 28).",
    whyItMatters:
      "La tipografía carga el 80% de una interfaz. Un body ilegible o títulos gritones delatan a un junior más rápido que una paleta dudosa.",
    howToPractice:
      "Elige una sola familia (Inter, Source Serif + sans, o la de un sistema). Compón un artículo corto en móvil: título, bajada, body, caption, botón. Nada de fuentes display.",
    resources: [
      {
        title: "Practical Typography — Butterick",
        url: "https://practicaltypography.com/",
        lang: "EN",
        type: "guia",
      },
      {
        title: "Material Design — Typography",
        url: "https://m3.material.io/styles/typography/overview",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "color-contraste": {
    id: "color-contraste",
    title: "Color y contraste",
    kind: "main",
    summary:
      "Una paleta de producto: primario, neutros, semántico (éxito, error, aviso). Contraste WCAG AA 4.5:1 en texto. El color no es el único canal de significado.",
    whyItMatters:
      "Las auditorías de accesibilidad empiezan por contraste. Un junior que entrega gris claro sobre blanco obliga a engineering a rehacer el trabajo.",
    howToPractice:
      "Crea una paleta de 1 acento + 7 neutros + 3 semánticos. Comprueba cada combinación texto/fondo en WebAIM. Diseña un alert de error que funcione también en escala de grises.",
    resources: [
      {
        title: "WebAIM Contrast Checker",
        url: "https://webaim.org/resources/contrastchecker/",
        lang: "EN",
        type: "herramienta",
      },
      {
        title: "Color in Design Systems",
        url: "https://m3.material.io/styles/color/overview",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "espacio-grilla": {
    id: "espacio-grilla",
    title: "Espacio y grilla 8pt",
    kind: "main",
    summary:
      "Spacing en múltiplos de 4 u 8. La grilla no es burocracia: es consistencia. El vacío es un elemento, no “lo que queda”.",
    whyItMatters:
      "Las interfaces amateur se reconocen por padding irregular. Auto Layout + 8pt es lo mínimo para que un archivo Figma parezca de un equipo.",
    howToPractice:
      "Toma una card de producto (foto, título, precio, CTA). Reconstrúyela usando solo 4, 8, 12, 16, 24 y 32. Cero valores raros como 13 o 27.",
    resources: [
      {
        title: "The 8-point grid — Spec.fm",
        url: "https://spec.fm/specifics/8-pt-grid",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "jerarquia-visual": {
    id: "jerarquia-visual",
    title: "Jerarquía visual",
    kind: "main",
    summary:
      "Qué se ve primero, segundo y tercero. Tamaño, contraste, posición y espacio dirigen la mirada. Una pantalla, una acción principal.",
    whyItMatters:
      "En un flujo de pago o un onboarding, si todo grita, nada se entiende. Los juniors que priorizan la acción correcta se notan en cinco segundos.",
    howToPractice:
      "Diseña un hero de landing con una sola CTA. Enseñaselo a alguien 3 segundos y pregúntale qué debería hacer. Si no acierta, la jerarquía falló.",
    resources: [
      {
        title: "Visual Hierarchy — NN/g",
        url: "https://www.nngroup.com/articles/visual-hierarchy-ux-definition/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "proyecto-cartel": {
    id: "proyecto-cartel",
    title: "Recomponer un cartel",
    kind: "project",
    summary:
      "Elige un cartel, menú o PDF público mal diseñado. Recompón la información con jerarquía, tipo y espacio. Mismo contenido, otra lectura.",
    whyItMatters:
      "Entrena el ojo sin la complejidad de un producto. Es un before/after claro que puedes guardar como calentamiento, no como case study principal.",
    howToPractice:
      "Antes y después en un solo frame de Figma. Escribe 5 decisiones (tipo, alineación, agrupación, contraste, CTA). Sin inventar copy nuevo.",
    resources: [
      {
        title: "Refactoring UI — visual examples",
        url: "https://www.refactoringui.com/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "figma-frames": {
    id: "figma-frames",
    title: "Frames, capas y constraints",
    kind: "main",
    summary:
      "Figma es el estándar de la industria. Empieza por frames (no groups), capas con nombre, constraints y páginas ordenadas: Explore, Wireframes, UI, Prototype.",
    whyItMatters:
      "Un archivo caótico es una bandera roja en una prueba técnica. Te van a pedir que te muevas por Figma en la entrevista.",
    howToPractice:
      "Clona una pantalla de login en iPhone (390×844). Nombra cada capa. Aplica constraints para que el botón se quede abajo al estirar el frame.",
    resources: [
      {
        title: "Figma Learn — Guía de inicio",
        url: "https://help.figma.com/hc/es-es/articles/14526128832151",
        lang: "ES",
        type: "guia",
      },
      {
        title: "Figma for beginners (oficial)",
        url: "https://www.youtube.com/playlist?list=PLXDU_eVOJTx7QHLShNqIXL1Cgbxj7HH43",
        lang: "EN",
        type: "video",
      },
    ],
  },
  "auto-layout": {
    id: "auto-layout",
    title: "Auto Layout",
    kind: "main",
    summary:
      "Padding, gap, hug/fill, wrap y min/max. Auto Layout es cómo se construye UI profesional en 2026. Sin esto, cada cambio rompe el archivo.",
    whyItMatters:
      "Las pruebas técnicas de Figma casi siempre incluyen “añade un item a esta lista” o “haz esta card responsive”. Eso es Auto Layout.",
    howToPractice:
      "Construye una card de receta: imagen, título, meta, chips, CTA. Debe crecer si el título tiene 2 líneas y apilarse bien en 320 y 768.",
    resources: [
      {
        title: "Auto layout — Figma Help",
        url: "https://help.figma.com/hc/en-us/articles/5731482952599-Using-auto-layout",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "componentes-variantes": {
    id: "componentes-variantes",
    title: "Componentes y variantes",
    kind: "main",
    summary:
      "Un botón no es 12 rectángulos: es un componente con variantes (size, state, icon). Properties booleanas para iconos y texto.",
    whyItMatters:
      "Los equipos viven de librerías. Si no piensas en componentes, no puedes entrar a un design system ni entregar consistente.",
    howToPractice:
      "Crea un Button con variantes: primary/secondary/ghost × sm/md/lg × default/hover/disabled × icon left/none. Úsalo en 3 pantallas distintas.",
    resources: [
      {
        title: "Components, variants, and properties",
        url: "https://help.figma.com/hc/en-us/articles/360038662654",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "estilos-variables": {
    id: "estilos-variables",
    title: "Estilos, variables y tokens",
    kind: "main",
    summary:
      "Color, type y spacing como variables, no como valores sueltos. Es el puente hacia un design system y hacia el handoff con desarrollo.",
    whyItMatters:
      "Cuando el producto pida “modo oscuro” o un rebrand, las variables te salvan. Los juniors que hardcodean hex en cada capa no escalan.",
    howToPractice:
      "Define variables: color/bg, color/text, color/accent, space/100–800, radius/sm–lg. Conéctalas a tu librería de botones y a una pantalla.",
    resources: [
      {
        title: "Variables in Figma",
        url: "https://help.figma.com/hc/en-us/articles/15339657135383",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "prototipos-basicos": {
    id: "prototipos-basicos",
    title: "Prototipos en Figma",
    kind: "main",
    summary:
      "Hotspots, overlays, smart animate, scrolling y flujos. Un prototipo clickable vale más que 20 PNGs en un case study.",
    whyItMatters:
      "En entrevistas te pedirán “enséñame el flujo”. Si no navega, el reclutador imagina el resto — y suele imaginar mal.",
    howToPractice:
      "Prototipa un onboarding de 4 pasos + un skip + un estado de error de email. Graba el play en vídeo de 30 segundos para el portafolio.",
    resources: [
      {
        title: "Prototyping in Figma",
        url: "https://help.figma.com/hc/en-us/articles/360040314193",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  figjam: {
    id: "figjam",
    title: "FigJam para pensar",
    kind: "optional",
    summary:
      "FigJam es el lienzo de research, flows y workshops. Separar “pensar” de “pixelar” evita que empieces a diseñar UI demasiado pronto.",
    whyItMatters:
      "En un equipo, mucho del trabajo ocurre en pizarras: affinity maps, crazy 8s, flows. FigJam es la herramienta que vas a abrir en kickoffs.",
    howToPractice:
      "Haz un board: problema, 8 ideas rápidas (Crazy 8s), un flow de 6 pasos y 3 preguntas abiertas para research. Invita a un amigo a comentar.",
    resources: [
      {
        title: "FigJam — guía oficial",
        url: "https://help.figma.com/hc/en-us/articles/15023125855511",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "plugins-comunidad": {
    id: "plugins-comunidad",
    title: "Plugins y Community",
    kind: "optional",
    summary:
      "Content Reel, Contrast, Iconify, Unsplash, Stark. Útiles, no mágicos. La Community sirve para estudiar archivos, no para copiar un UI kit y llamarlo portafolio.",
    whyItMatters:
      "Saber moverte por la Community acelera. Presentar un template de otro como trabajo propio te saca de procesos de selección.",
    howToPractice:
      "Abre 3 archivos populares de Community. Anota cómo nombran páginas y componentes. No los uses en tu portafolio; copia la higiene del archivo.",
    resources: [
      {
        title: "Figma Community",
        url: "https://www.figma.com/community",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "proyecto-clon": {
    id: "proyecto-clon",
    title: "Clonar 3 pantallas",
    kind: "project",
    summary:
      "Copia con precisión tres pantallas de un producto real (no Dribbble). El objetivo es el ojo y la herramienta, no la originalidad.",
    whyItMatters:
      "Clonar calibra spacing, tipo y componentes. No lo pongas como case study principal; es entrenamiento. El portafolio pide problemas, no copias.",
    howToPractice:
      "Elige una app con buena UI (por ejemplo, un banco o una app de notas). Clona home, detalle y un formulario. Overlay al 50% para medir desviación.",
    resources: [
      {
        title: "Figma Learn",
        url: "https://help.figma.com/hc/en-us/categories/360002051613",
        lang: "ES",
        type: "guia",
      },
    ],
  },
  entrevistas: {
    id: "entrevistas",
    title: "Entrevistas a usuarios",
    kind: "main",
    summary:
      "La técnica más potente para un junior: 45 minutos, preguntas abiertas, silencio, no vender tu idea. Buscas el porqué, no validación.",
    whyItMatters:
      "Un portafolio con citas reales (“deje el carrito porque…”) se toma en serio. Las personas inventadas se notan a la legua.",
    howToPractice:
      "Entrevista a 5 personas sobre un hábito (pedir comida, estudiar, gestionar dinero). Guion de 8 preguntas. Graba (con permiso) y transcribe insights, no resúmenes vagos.",
    resources: [
      {
        title: "User Interviews 101 — NN/g",
        url: "https://www.nngroup.com/articles/user-interviews/",
        lang: "EN",
        type: "articulo",
      },
      {
        title: "Just Enough Research — Erika Hall",
        url: "https://abookapart.com/products/just-enough-research",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "preguntas-abiertas": {
    id: "preguntas-abiertas",
    title: "Preguntas que no sesgan",
    kind: "main",
    summary:
      "Nada de “¿te gusta esta pantalla?”. Pregunta por el último vez que hicieron la tarea, qué intentaron, dónde se atascó, qué evitaron.",
    whyItMatters:
      "Las preguntas conducidas fabrican el insight que querías oír. En una critique te van a preguntar cómo evitaste sesgar.",
    howToPractice:
      " Reescribe 10 preguntas cerradas en abiertas. Practica con un amigo: cada vez que preguntes “¿sí o no?”, te para. Repite hasta que salga natural.",
    resources: [
      {
        title: "Leading questions — NN/g",
        url: "https://www.nngroup.com/articles/leading-questions/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  encuestas: {
    id: "encuestas",
    title: "Encuestas (con cuidado)",
    kind: "optional",
    summary:
      "Sirven para cuantificar lo que ya viste en entrevistas, no para descubrir el problema. Pocas preguntas, una idea por ítem, muestra sesgada si es tu círculo.",
    whyItMatters:
      "Muchos juniors rellenan el case study con “encuesta a 40 amigos” que no prueba nada. Saber cuándo no usar una encuesta es madurez.",
    howToPractice:
      "Después de 5 entrevistas, lanza 5 preguntas a 20 personas para validar frecuencia de un pain. Reporta el sesgo de la muestra con honestidad.",
    resources: [
      {
        title: "Surveys in UX — NN/g",
        url: "https://www.nngroup.com/articles/surveys-ux-research/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "analisis-competitivo": {
    id: "analisis-competitivo",
    title: "Análisis competitivo",
    kind: "main",
    summary:
      "No es un moodboard. Es comparar cómo 4 productos resuelven la misma tarea: onboarding, búsqueda, checkout, empty states. Patrones y huecos.",
    whyItMatters:
      "Te evita reinventar un date picker. En el portafolio demuestra que diseñas con contexto de mercado, no en el vacío.",
    howToPractice:
      "Elige una tarea (reservar una cita). Captura el flujo en 4 apps. Tabla: pasos, qué funciona, fricción, oportunidad. Una conclusión de 5 líneas.",
    resources: [
      {
        title: "Competitive usability evaluations — NN/g",
        url: "https://www.nngroup.com/articles/competitive-usability-evaluations/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "sintesis-insights": {
    id: "sintesis-insights",
    title: "Síntesis: de notas a insights",
    kind: "main",
    summary:
      "El research no sirve si se queda en una carpeta. Affinity mapping: agrupas observaciones, nombras patrones, escribes insights accionables.",
    whyItMatters:
      "Un insight no es “los usuarios quieren que sea simple”. Es “cancelar una cita requiere 6 toques y 4 personas abandonaron en el paso 3”.",
    howToPractice:
      "Pasa tus 5 entrevistas a notas atómicas (una idea por sticky). Agrupa. Escribe 5 insights en formato: observación + evidencia + implicación de diseño.",
    resources: [
      {
        title: "Affinity diagramming — NN/g",
        url: "https://www.nngroup.com/articles/affinity-diagram/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "personas-jtbd": {
    id: "personas-jtbd",
    title: "Personas y JTBD",
    kind: "main",
    summary:
      "Personas útiles: comportamientos y restricciones, no fotos de stock y “le gusta el café”. Jobs To Be Done: qué “contratan” del producto.",
    whyItMatters:
      "Las personas de ficción restan credibilidad. Un job bien escrito (“cuando llego tarde, quiero pedir sin pensar”) guía decisiones de UI.",
    howToPractice:
      "A partir de tus entrevistas, escribe 2 proto-personas de media página y 3 jobs en el formato “Cuando… quiero… para…”. Tíralas si no las usas al diseñar.",
    resources: [
      {
        title: "Personas — NN/g",
        url: "https://www.nngroup.com/articles/persona/",
        lang: "EN",
        type: "articulo",
      },
      {
        title: "Jobs To Be Done (Resumen)",
        url: "https://jtbd.info/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "journey-map": {
    id: "journey-map",
    title: "Journey map",
    kind: "main",
    summary:
      "El viaje del usuario a lo largo del tiempo: etapas, acciones, emociones, puntos de dolor y oportunidades. Sirve para elegir dónde diseñar.",
    whyItMatters:
      "Impide que rediseñes la home cuando el dolor está en el email de recuperación de contraseña. Muestra pensamiento de producto.",
    howToPractice:
      "Mapea el journey de “pedir comida un viernes noche” de principio a fin, incluido lo que pasa fuera de la app. Marca 3 oportunidades y elige una.",
    resources: [
      {
        title: "Journey mapping 101 — NN/g",
        url: "https://www.nngroup.com/articles/journey-mapping-101/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "proyecto-estudio-5": {
    id: "proyecto-estudio-5",
    title: "Estudio con 5 personas",
    kind: "project",
    summary:
      "Un estudio completo y pequeño: recluta, entrevista o testea, sintetiza y recomienda. Cinco usuarios bien observados valen más que 50 opiniones.",
    whyItMatters:
      "NN/g documentó que 5 usuarios descubren la mayoría de problemas de usabilidad. Es el formato junior más creíble.",
    howToPractice:
      "Elige una app real. 5 personas, 3 tareas cada una. Anota éxitos, errores, tiempo percibido. Entrega un informe de 3 páginas + 5 recomendaciones priorizadas.",
    resources: [
      {
        title: "Why you only need to test with 5 users — NN/g",
        url: "https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "arquitectura-informacion": {
    id: "arquitectura-informacion",
    title: "Arquitectura de información",
    kind: "main",
    summary:
      "Cómo se organiza el contenido para que la gente encuentre y entienda. Navegación, etiquetas, jerarquía, búsqueda.",
    whyItMatters:
      "Una UI pulida sobre una estructura confusa sigue siendo un mal producto. Los juniors que piensan en IA evitan el “menú con 14 ítems”.",
    howToPractice:
      "Lista todas las destinos de una app que uses. Redibuja la navegación con como máximo 5 ítems de primer nivel. Justifica cada etiqueta con palabras de tus entrevistas.",
    resources: [
      {
        title: "IA 101 — NN/g",
        url: "https://www.nngroup.com/articles/ia-explained/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  sitemaps: {
    id: "sitemaps",
    title: "Sitemaps",
    kind: "main",
    summary:
      "El mapa de pantallas o páginas y sus relaciones. No es un deliverable para lucir: es para no perderte y para alinear con product y engineering.",
    whyItMatters:
      "En un case study, un sitemap enseña alcance y decisiones de agrupación. Sin él, parece que diseñaste pantallas sueltas.",
    howToPractice:
      "Haz el sitemap de un producto existente (solo las áreas que tocas) y el de tu propuesta. Marca qué se fusiona, qué se elimina y qué es nuevo.",
    resources: [
      {
        title: "Sitemaps — IxDF",
        url: "https://www.interaction-design.org/literature/topics/sitemaps",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "card-sorting": {
    id: "card-sorting",
    title: "Card sorting",
    kind: "optional",
    summary:
      "Las personas agrupan contenidos con sus palabras. Abierto (ellos nombran) o cerrado (tú das categorías). Ideal antes de rediseñar navegación.",
    whyItMatters:
      "Evita menús escritos en jerga interna (“Soluciones / Recursos / Insights”). Las etiquetas salen del usuario.",
    howToPractice:
      "Escribe 20 contenidos de un sitio (cursos, precios, blog, FAQ…). Pide a 5 personas que los agrupen en Optimal Workshop (plan free) o con papeles.",
    resources: [
      {
        title: "Card sorting — NN/g",
        url: "https://www.nngroup.com/articles/card-sorting-definition/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "user-flows": {
    id: "user-flows",
    title: "User flows",
    kind: "main",
    summary:
      "El camino para completar un objetivo: entrada, decisiones, errores, éxito. Se dibuja antes de los wireframes para no diseñar callejones sin salida.",
    whyItMatters:
      "Un flow de “recuperar contraseña” o “guest checkout” es exactamente el tipo de problema que te pondrán en una prueba de 2 horas.",
    howToPractice:
      "Dibuja el flow de comprar sin cuenta, con cuenta y con error de pago. Incluye estados vacíos y “¿y si el usuario pulsa atrás?”.",
    resources: [
      {
        title: "User flows — NN/g",
        url: "https://www.nngroup.com/articles/user-flow-diagrams/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "wireframes-lofi": {
    id: "wireframes-lofi",
    title: "Wireframes lo-fi",
    kind: "main",
    summary:
      "Estructura, no estética. Grises, cajas, texto real cuando importe. Lo-fi invita a cambiar; el hi-fi invita a opinar del color.",
    whyItMatters:
      "Si empiezas en hi-fi, te casas con la UI y dejas de explorar. Los equipos piden ver el thinking en wireframes, no solo el render final.",
    howToPractice:
      "Wireframea en papel o en Figma (una librería de cajas) el flujo de checkout en 6 pantallas. Revisión con un amigo antes de cualquier color.",
    resources: [
      {
        title: "Wireframing — IxDF",
        url: "https://www.interaction-design.org/literature/topics/wireframing",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  sketching: {
    id: "sketching",
    title: "Sketching rápido",
    kind: "optional",
    summary:
      "8 variaciones en 8 minutos (Crazy 8s). El lápiz es más barato que Figma. No necesitas “saber dibujar”: necesitas explorar.",
    whyItMatters:
      "En un whiteboard interview te van a pedir que dibujes. Quien solo sabe Figma se queda bloqueado con el rotulador.",
    howToPractice:
      "Cada día, 10 minutos: un problema, 6 thumbnails. Elige uno y explícalo en voz alta en 60 segundos como si fuera una critique.",
    resources: [
      {
        title: "Crazy 8s — Design Sprint",
        url: "https://designsprintkit.withgoogle.com/methodology/phase3-sketch/crazy-8s",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "proyecto-checkout": {
    id: "proyecto-checkout",
    title: "Flujo de checkout",
    kind: "project",
    summary:
      "Diseña (en lo-fi) un checkout con guest, cupón, error de pago y confirmación. Es un clásico de prueba técnica y de portafolio.",
    whyItMatters:
      "Combina IA, flow, estados de error y criterio de negocio. Es más valioso que rediseñar la splash de Instagram.",
    howToPractice:
      "Sitemap + flow + wireframes de 6–8 pantallas + 3 estados de error. Anota 5 decisiones y 5 cosas que no resolviste a propósito (alcance).",
    resources: [
      {
        title: "Checkout usability — Baymard",
        url: "https://baymard.com/blog/checkout-usability",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "patrones-ui": {
    id: "patrones-ui",
    title: "Patrones de UI",
    kind: "main",
    summary:
      "Navegación, formularios, listas, búsqueda, tabs, sheets, empty states, skeletons. No inventes un patrón si existe uno aprendido.",
    whyItMatters:
      "La gente trae modelos mentales de iOS, Android y la web. Un patrón raro se siente “innovador” en Dribbble y caro en producción.",
    howToPractice:
      "Para tu checkout, documenta qué patrón usas en cada pantalla y de dónde sale (HIG, Material, un producto de referencia). Una tabla basta.",
    resources: [
      {
        title: "UI Patterns",
        url: "https://ui-patterns.com/",
        lang: "EN",
        type: "guia",
      },
      {
        title: "Mobbin — referencia de flujos",
        url: "https://mobbin.com/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "componentes-ui": {
    id: "componentes-ui",
    title: "UI de componentes",
    kind: "main",
    summary:
      "Inputs, selects, checkboxes, toggles, cards, nav bars: estados default, hover, focus, error, disabled. La calidad junior se ve en los estados, no en el hero.",
    whyItMatters:
      "Un input sin estado de error o un botón sin disabled no está listo para engineering. Te lo van a marcar en la prueba.",
    howToPractice:
      "Construye un formulario de perfil con validación visible: vacío, typing, error, éxito. Todos los estados en una sola página de specs.",
    resources: [
      {
        title: "Material 3 components",
        url: "https://m3.material.io/components",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "design-tokens": {
    id: "design-tokens",
    title: "Design tokens",
    kind: "main",
    summary:
      "El lenguaje compartido con desarrollo: color.bg.default, space.200, radius.md. Aunque no construyas un sistema entero, piensa en tokens.",
    whyItMatters:
      "Los equipos maduros no se pasan hexadecimales por Slack. Un junior que nombra tokens se integra más rápido.",
    howToPractice:
      "Exporta (o lista) los tokens de tu UI kit en una tabla: nombre, valor, uso. Aplica un cambio de acento cambiando un solo token.",
    resources: [
      {
        title: "Design tokens — W3C community",
        url: "https://design-tokens.github.io/community-group/format/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "material-hig": {
    id: "material-hig",
    title: "Material y HIG",
    kind: "main",
    summary:
      "Las plataformas ya resolvieron navegación, gestos y controles. Material 3 (Android/web) y Human Interface Guidelines (Apple) son lectura obligatoria.",
    whyItMatters:
      "Diseñar un back gesture inventado en iOS es un error de junior. Conocer las plataformas te ahorra discusiones y te da vocabulario con iOS/Android engineers.",
    howToPractice:
      "Rediseña una pantalla para iOS y otra para Android respetando nav nativa (Tab Bar vs Navigation bar). Lista 5 diferencias que aplicaste.",
    resources: [
      {
        title: "Apple Human Interface Guidelines",
        url: "https://developer.apple.com/design/human-interface-guidelines",
        lang: "EN",
        type: "guia",
      },
      {
        title: "Material Design 3",
        url: "https://m3.material.io/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  responsive: {
    id: "responsive",
    title: "Responsive y adaptación",
    kind: "main",
    summary:
      "Móvil primero, luego tablet y desktop. No es “encoger”: es re-priorizar contenido, navegación y densidad. Constraints y min/max en Figma.",
    whyItMatters:
      "Muchos productos se usan en ambos. Un portafolio solo de iPhone 14 parece incompleto. Las ofertas piden “web y mobile”.",
    howToPractice:
      "Toma una home. Tres anchos: 360, 768, 1280. Qué se apila, qué se vuelve tabla, qué desaparece. Nada de scale uniforme.",
    resources: [
      {
        title: "Responsive design — MDN",
        url: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Responsive_Design",
        lang: "ES",
        type: "guia",
      },
    ],
  },
  iconografia: {
    id: "iconografia",
    title: "Iconografía",
    kind: "optional",
    summary:
      "Una familia, un trazo, un grid. Los iconos no sustituyen etiquetas en acciones críticas. Lucide, Phosphor o SF Symbols, no un icono de cada pack.",
    whyItMatters:
      "Mezclar estilos de icono es un clásico de portafolio amateur. Consistencia > originalidad.",
    howToPractice:
      "Elige un set. Reemplaza todos los iconos de tu UI kit. Donde el icono no se entienda solo, añade label. Test de 5 segundos con un amigo.",
    resources: [
      {
        title: "Lucide Icons",
        url: "https://lucide.dev/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "motion-basico": {
    id: "motion-basico",
    title: "Motion básico",
    kind: "optional",
    summary:
      "Duración corta, easing suave, propósito: orientación, feedback, jerarquía. El motion de Dribbble (todo rebota) rara vez entra a producción.",
    whyItMatters:
      "Un micro-feedback en un botón o un transicionado de lista bien hecho eleva la percepción de calidad. El exceso distrae y mareas de accesibilidad.",
    howToPractice:
      "Anima en Figma un overlay de confirmación y un estado de éxito. 200–300 ms. Grábalo. Pregunta si ayuda a entender o solo “se mueve”.",
    resources: [
      {
        title: "Material motion",
        url: "https://m3.material.io/styles/motion/overview",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "proyecto-ui-kit": {
    id: "proyecto-ui-kit",
    title: "UI kit de 12 componentes",
    kind: "project",
    summary:
      "Botón, input, select, checkbox, toggle, chip, card, navbar, tabs, modal, toast, empty state. Con variantes y tokens. Es tu base para los case studies.",
    whyItMatters:
      "Reutilizar un kit propio acelera los proyectos de portafolio y demuestra pensamiento de sistema, una skill que separa juniors.",
    howToPractice:
      "Una página de Figma tipo “inventory”: cada componente con sus estados. Luego úsalo en una pantalla real. Si no sirve en contexto, el kit está mal.",
    resources: [
      {
        title: "Intro to design systems — Figma",
        url: "https://www.figma.com/resource-library/what-is-a-design-system/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "proto-hifi": {
    id: "proto-hifi",
    title: "Prototipos de alta fidelidad",
    kind: "main",
    summary:
      "Ya hay UI, ya navega, ya hay copy real. Sirve para testear comprensión, no para impresionar. Incluye estados vacíos y de error, no solo el happy path.",
    whyItMatters:
      "Los testers se callan si el prototipo parece inacabado o si solo muestra el camino feliz. Un hi-fi honesto saca problemas de verdad.",
    howToPractice:
      "Convierte tu checkout lo-fi en hi-fi usando el UI kit. Prototipo con error de tarjeta y empty cart. Enlace de Figma listo para compartir.",
    resources: [
      {
        title: "Paper to digital prototypes — NN/g",
        url: "https://www.nngroup.com/articles/paper-prototyping/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  microinteracciones: {
    id: "microinteracciones",
    title: "Microinteracciones",
    kind: "optional",
    summary:
      "El pull-to-refresh, el like, el toggle: un trigger, una regla, un feedback, un loop. Pequeñas, coherentes, no un show.",
    whyItMatters:
      "Bien hechas, dan sensación de producto cuidado. Mal hechas, retrasan la tarea. En junior, menos es más.",
    howToPractice:
      "Diseña el feedback de “añadir al carrito” en tres niveles: mínimo (toast), medio (badge + toast), máximo (animación). Elige uno y justifica.",
    resources: [
      {
        title: "Microinteractions — Dan Saffer (resumen IxDF)",
        url: "https://www.interaction-design.org/literature/book/microinteractions-full-color-edition",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "usability-testing": {
    id: "usability-testing",
    title: "Tests de usabilidad",
    kind: "main",
    summary:
      "Tareas, no opiniones. “Reserva una mesa para 4 el sábado”. Observa, calla, toma notas de comportamiento. 5 usuarios, 3 tareas, 1 hora cada uno.",
    whyItMatters:
      "Es la evidencia que convierte un case study de “yo creo” a “vi que 4 de 5 no encontraron el filtro”. Eso es lo que contrata.",
    howToPractice:
      "Prepara un guion: contexto, consentimiento, 3 tareas, debrief. Testea tu prototipo con 5 personas (Meet + compartir Figma). Graba si te dejan.",
    resources: [
      {
        title: "Usability testing 101 — NN/g",
        url: "https://www.nngroup.com/articles/usability-testing-101/",
        lang: "EN",
        type: "articulo",
      },
      {
        title: "Rocket Surgery Made Easy — Steve Krug",
        url: "https://sensible.com/rocket-surgery-made-easy/",
        lang: "EN",
        type: "libro",
      },
    ],
  },
  "moderado-vs-no": {
    id: "moderado-vs-no",
    title: "Moderado vs no moderado",
    kind: "optional",
    summary:
      "Moderado: estás, preguntas, profundizas. No moderado (Maze, Useberry): más muestra, menos porqué. Como junior, empieza moderando tú.",
    whyItMatters:
      "Saber elegir el método demuestra criterio. Un Maze mal planteado produce métricas vanidosas (“82% success”) sin aprendizaje.",
    howToPractice:
      "Haz 3 tests moderados y, si puedes, 5 no moderados de la misma tarea. Compara qué descubriste en cada uno. Escríbelo en el case study.",
    resources: [
      {
        title: "Unmoderated user testing — NN/g",
        url: "https://www.nngroup.com/articles/unmoderated-user-testing-tools/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "iterar-evidencia": {
    id: "iterar-evidencia",
    title: "Iterar con evidencia",
    kind: "main",
    summary:
      "Prioriza hallazgos por severidad e impacto. Cambia el diseño. Vuelve a testear lo crítico. El before/after es el corazón del case study.",
    whyItMatters:
      "Sin iteración, el research es teatro. Los hiring managers buscan “qué cambiaste porque lo viste en usuarios”.",
    howToPractice:
      "De tu test, elige los 3 problemas más graves. Rediseña solo eso. Enseña el before/after a 3 personas nuevas. Documenta lo que se arregló y lo que no.",
    resources: [
      {
        title: "Severity ratings — NN/g",
        url: "https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "proyecto-test-redisenar": {
    id: "proyecto-test-redisenar",
    title: "Testear y rediseñar",
    kind: "project",
    summary:
      "Cierra el ciclo: prototipo → 5 tests → hallazgos → iteración → prototipo v2. Este proyecto puede ser uno de tus 3 case studies.",
    whyItMatters:
      "Es exactamente el loop del trabajo real. Un solo proyecto así bien contado pesa más que tres rediseños estéticos.",
    howToPractice:
      "Usa el checkout o una app local (gimnasio, clínica, marketplace de tu ciudad). Entrega: guion, tabla de hallazgos, v1 vs v2, 5 capturas clave.",
    resources: [
      {
        title: "Growth.design — case studies comentados",
        url: "https://growth.design/case-studies",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "wcag-aa": {
    id: "wcag-aa",
    title: "WCAG AA",
    kind: "main",
    summary:
      "El suelo legal y ético: perceivable, operable, understandable, robust. Como junior, apunta a AA en contraste, foco, alternativas de texto y no usar color solo.",
    whyItMatters:
      "Cada vez más ofertas piden accesibilidad explícita. Un case study con decisiones a11y te diferencia de la mayoría de bootcamps.",
    howToPractice:
      "Pasa tu pantalla principal por una checklist AA: contraste, labels, orden de foco, tamaño de hit area (≥24 px, mejor 44), motion reducible.",
    resources: [
      {
        title: "WCAG 2.2 (W3C)",
        url: "https://www.w3.org/WAI/WCAG22/quickref/",
        lang: "EN",
        type: "guia",
      },
      {
        title: "Introducción a la accesibilidad web — W3C",
        url: "https://www.w3.org/WAI/fundamentals/accessibility-intro/es",
        lang: "ES",
        type: "articulo",
      },
    ],
  },
  "contraste-tipo-a11y": {
    id: "contraste-tipo-a11y",
    title: "Texto y contraste accesible",
    kind: "main",
    summary:
      "4.5:1 body, 3:1 textos grandes e UI no textual. No pongas placeholder como único label. El placeholder desaparece al escribir.",
    whyItMatters:
      "Es el fallo más común en UI junior: gris sobre gris, o placeholders que son el label. Fácil de arreglar, fácil de detectar.",
    howToPractice:
      "Audita tu UI kit con Stark o el contrast checker. Corrige tokens, no pantallas sueltas. Documenta 3 cambios en el case study.",
    resources: [
      {
        title: "WebAIM Contrast Checker",
        url: "https://webaim.org/resources/contrastchecker/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "estados-foco-teclado": {
    id: "estados-foco-teclado",
    title: "Foco, teclado y estados",
    kind: "main",
    summary:
      "Si no se ve el foco, no existe. Orden lógico, skip links en web, hit areas. Diseña el focus ring; no dejes el default del browser como accidente.",
    whyItMatters:
      "Los engineers te van a preguntar qué pasa con Tab. Si no lo pensaste, el handoff está incompleto.",
    howToPractice:
      "En Figma, añade una variante `focused` a botón, input y link. Dibuja el recorrido Tab de un formulario. Enséñaselo a alguien que use teclado.",
    resources: [
      {
        title: "Keyboard accessibility — WebAIM",
        url: "https://webaim.org/techniques/keyboard/",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "handoff-devs": {
    id: "handoff-devs",
    title: "Handoff a desarrollo",
    kind: "main",
    summary:
      "Inspect, specs de spacing, comportamientos, estados vacíos, copy final, qué es componente y qué es one-off. Redacta supuestos. Habla con engineering pronto.",
    whyItMatters:
      "El diseño que no se puede construir no existe. Un junior que anticipa dudas (breakpoints, empty, errores, copy) se gana al equipo.",
    howToPractice:
      "Prepara una página “Dev handoff” en Figma: flujos, tokens, componentes, 5 FAQs. Pídele a un developer amigo que marque lo ambiguo. Arregla eso.",
    resources: [
      {
        title: "Inspect in Figma",
        url: "https://help.figma.com/hc/en-us/articles/360040450013",
        lang: "EN",
        type: "guia",
      },
    ],
  },
  "html-css-basico": {
    id: "html-css-basico",
    title: "HTML y CSS básico",
    kind: "optional",
    summary:
      "No para ser frontend. Para hablar: display, flex, grid, heading order, botones vs links, formularios nativos. Suficiente para respetar restricciones reales.",
    whyItMatters:
      "Quien entiende flexbox no pide magia. En startups se agradece un diseñador que no diseñe lo imposible en una semana.",
    howToPractice:
      "Reconstruye en CodePen una card de tu UI kit con HTML semántico y CSS. Nada de frameworks. Objetivo: que un dev no se ría del markup.",
    resources: [
      {
        title: "MDN — HTML y CSS",
        url: "https://developer.mozilla.org/es/docs/Learn_web_development",
        lang: "ES",
        type: "curso",
      },
    ],
  },
  "proyecto-a11y": {
    id: "proyecto-a11y",
    title: "Auditoría a11y",
    kind: "project",
    summary:
      "Audita un flujo (el tuyo o uno público) contra AA. Prioriza, corrige, documenta. Puede ser un capítulo fuerte dentro de un case study, no hace falta un case entero.",
    whyItMatters:
      "Muestra rigor y empatía más allá de “diseñé para millennials”. Es memorable en entrevistas.",
    howToPractice:
      "10 hallazgos con criterio, evidencia (screenshot + ratio de contraste o problema de foco), severidad y arreglo propuesto. Implementa 5 en Figma.",
    resources: [
      {
        title: "WAVE Web Accessibility Evaluation",
        url: "https://wave.webaim.org/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "que-busca-hiring": {
    id: "que-busca-hiring",
    title: "Qué mira un hiring manager",
    kind: "main",
    summary:
      "Problema claro, restricciones, research real, alternativas, decisión, UI, test, iteración, resultado. En 2 minutos tiene que entender el caso.",
    whyItMatters:
      "Revisan portafolios en diagonal. Si la primera pantalla es un mockup sin contexto, cierran. La primera mitad de página decide.",
    howToPractice:
      "Enseña un case a alguien que no es diseñador. Cronometra cuánto tarda en decir de qué va. Si pasa de 30 segundos, reescribe la apertura.",
    resources: [
      {
        title: "UX Portfolios — NN/g",
        url: "https://www.nngroup.com/articles/ux-portfolios/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "estructura-case": {
    id: "estructura-case",
    title: "Estructura de un case study",
    kind: "main",
    summary:
      "Contexto y rol · problema · research · insights · ideación · wireframes · UI · test · iteración · aprendizajes. Imágenes al servicio del argumento, no al revés.",
    whyItMatters:
      "Es el género literario del diseñador. Sin estructura, tu trabajo bueno se lee como un moodboard.",
    howToPractice:
      "Escribe el outline de un caso en 12 titulares, sin imágenes. Si el outline no se sostiene, el case tampoco. Luego sí, mete capturas.",
    resources: [
      {
        title: "How to write a UX case study — UX Design.cc",
        url: "https://uxdesign.cc/how-to-write-a-ux-case-study-d0f4a10d2c8",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "tres-proyectos": {
    id: "tres-proyectos",
    title: "Tres proyectos, no diez",
    kind: "main",
    summary:
      "Calidad y variedad: uno con research fuerte, uno con UI y sistema, uno con un flujo complejo (o un proyecto real de un conocido). Cura. Esconde el resto.",
    whyItMatters:
      "Diez rediseños de apps famosas gritan “bootcamp”. Tres casos distintos gritan criterio.",
    howToPractice:
      "Lista todo lo que has hecho. Quédate con 3. Para cada uno, una frase de “qué demuestro aquí”. Si dos demuestran lo mismo, corta uno.",
    resources: [
      {
        title: "Portfolio critiques — Open Doors",
        url: "https://blog.opendoorscareers.com/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "evitar-redisenos-famosos": {
    id: "evitar-redisenos-famosos",
    title: "Evita el rediseño de Spotify",
    kind: "main",
    summary:
      "Rediseñar Instagram, Spotify o Airbnb sin acceso a datos ni usuarios es un cliché. Si lo haces, acota un problema real y verifica con gente que use el producto.",
    whyItMatters:
      "Los reclutadores han visto mil “Airbnb, but dark mode”. Un problema local (la web de tu clínica, el comedor universitario, una ONG) es más creíble.",
    howToPractice:
      "Habla con un comercio, asociación o herramienta interna de un amigo. Ofrece un estudio gratuito a cambio de poder publicar el proceso (con datos anonimizados).",
    resources: [
      {
        title: "Unsolicited redesigns — discusión clásica",
        url: "https://www.nngroup.com/articles/unsolicited-design-advice/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "sitio-portafolio": {
    id: "sitio-portafolio",
    title: "El sitio del portafolio",
    kind: "main",
    summary:
      "Home con quién eres y para qué rol · 3 casos · about breve · contacto. Rápido, legible, móvil. El portafolio también es un artefacto de UX.",
    whyItMatters:
      "Si tu web es lenta, ilegible o solo desktop, estás suspendiendo tu propio examen. Menos Framer candy, más claridad.",
    howToPractice:
      "Wireframea tu portafolio en una tarde. Testea la home con 3 amigos: “¿a qué puestos debería aplicar esta persona?”. Ajusta copy, no solo el hero.",
    resources: [
      {
        title: "UX portfolio websites — NN/g",
        url: "https://www.nngroup.com/articles/ux-portfolio-websites/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "framer-notion": {
    id: "framer-notion",
    title: "Framer, Notion o similar",
    kind: "optional",
    summary:
      "Framer, Notion, Webflow o incluso un Google Site bien escrito. La herramienta no puntúa. Publicar sí. No esperes a “saber código” para tener URL.",
    whyItMatters:
      "Sin URL no hay proceso de selección. Un Notion limpio supera a un sitio a medias eterno.",
    howToPractice:
      "Publica una versión 0.1 esta semana: home + 1 case incompleto marcado como “en progreso”. Itera. El perfeccionismo es la trampa.",
    resources: [
      {
        title: "Framer Academy",
        url: "https://www.framer.com/academy/",
        lang: "EN",
        type: "curso",
      },
    ],
  },
  "proyecto-publicar-cases": {
    id: "proyecto-publicar-cases",
    title: "Publicar 3 cases",
    kind: "project",
    summary:
      "Tres historias en la web, con prototipo Figma y un PDF o página por caso. Copy revisado. Fotos de proceso (paper, boards), no solo UI final.",
    whyItMatters:
      "Hasta que no está publicado, no existe para el mercado. Este es el entregable que habilita el resto de la búsqueda.",
    howToPractice:
      "Checklist por caso: problema en 3 líneas, tu rol, timeline, 1 insight con cita, 1 flow, 1 UI, 1 hallazgo de test, 1 iteración, 1 aprendizaje incómodo.",
    resources: [
      {
        title: "Case study examples — Growth.design",
        url: "https://growth.design/case-studies",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "linkedin-presencia": {
    id: "linkedin-presencia",
    title: "LinkedIn y presencia",
    kind: "main",
    summary:
      "Titular con el rol que buscas (“Product Designer junior | UX/UI”). Banner limpio, about con historia y prueba, 3 casos en featured, red de diseñadores de tu ciudad.",
    whyItMatters:
      "Muchos recruiters ni llegan a tu web si el LinkedIn no dice qué eres. Publicar un proceso (no un mockup huérfano) atrae conversaciones.",
    howToPractice:
      "Reescribe titular y about. Pide a 2 diseñadores que te critiquen el perfil 15 minutos. Publica un post con un hallazgo de tu test, no con “estoy open to work” solo.",
    resources: [
      {
        title: "LinkedIn for designers — NN/g career",
        url: "https://www.nngroup.com/articles/ux-career-advice/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "cv-disenador": {
    id: "cv-disenador",
    title: "CV de diseñador",
    kind: "main",
    summary:
      "Una página. Rol objetivo, skills verificables, 3 proyectos con resultado, herramientas (Figma). El CV no es un poster: tiene que pasar ATS y ojos humanos.",
    whyItMatters:
      "Un CV-ilustración ilegible es un meme antiguo. Claridad tipográfica y palabras de la oferta (research, prototyping, design systems) sí importan.",
    howToPractice:
      "Redacta una versión en Google Docs semántico + una visual simple en Figma. Pásalo por un ATS checker. Pide feedback a alguien de RR. HH. si puedes.",
    resources: [
      {
        title: "Resumes for UX — NN/g",
        url: "https://www.nngroup.com/articles/ux-resume/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "donde-aplicar": {
    id: "donde-aplicar",
    title: "Dónde aplicar",
    kind: "main",
    summary:
      "LinkedIn, webs de estudio, startups (Wellfound), empleo local, referidos. Menos spray-and-pray, más 10 candidaturas hechas a medida a la semana.",
    whyItMatters:
      "100 CVs genéricos cansan y no convierten. 10 cartas que conectan tu case con el producto de esa empresa sí.",
    howToPractice:
      "Arma una lista de 30 empresas. Para 10, escribe 8 líneas: por qué tú, qué case encaja, qué harías en los 90 primeros días. Aplica con eso.",
    resources: [
      {
        title: "Wellfound (AngelList Talent)",
        url: "https://wellfound.com/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  "entrevista-diseno": {
    id: "entrevista-diseno",
    title: "La entrevista de diseño",
    kind: "main",
    summary:
      "Walkthrough de portafolio, preguntas de proceso, collaboration, conflicto con PMs, cómo mides éxito. Prepara 3 historias STAR y un caso que puedas contar en 10 minutos.",
    whyItMatters:
      "Diseñar y explicar diseño son skills distintas. Muchos juniors se hunden aquí con casos que en la web se leían bien.",
    howToPractice:
      "Grábate presentando un case en 8 minutos. Transcribe. Corta muletillas y el tour de todas las pantallas. Quédate con problema, 2 decisiones, 1 resultado.",
    resources: [
      {
        title: "UX interview questions — NN/g",
        url: "https://www.nngroup.com/articles/ux-job-interviews/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  whiteboard: {
    id: "whiteboard",
    title: "Whiteboard challenge",
    kind: "main",
    summary:
      "Te dan un prompt (“diseña un cajero para turistas”). Piensa en voz alta: usuarios, restricciones, flujo, un happy path, un edge case. No pixels.",
    whyItMatters:
      "Miden cómo razonas con poca información. Quien se calla y dibuja una UI preciosa pierde. Quien pregunta y estructura gana.",
    howToPractice:
      "Una vez por semana, 25 minutos: un prompt, papel, timer. Estructura: preguntas, usuarios, flow, 2 pantallas, riesgos. Repite el mismo prompt una semana después.",
    resources: [
      {
        title: "Whiteboard challenges — ADPList / community guides",
        url: "https://www.nngroup.com/articles/design-critique/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  critique: {
    id: "critique",
    title: "Critique y feedback",
    kind: "main",
    summary:
      "Pedir crítica específica (“¿se entiende la tarea principal?”). Dar crítica sin rediseñar por el otro. Separar gusto, usabilidad y negocio.",
    whyItMatters:
      "El trabajo es hiper colaborativo. Un junior defensivo o que nunca pide feedback se estanca. En la entrevista te van a preguntar por un desacuerdo.",
    howToPractice:
      "Entra a un Discord/ADPList y pide critique de un case. Anota 5 comentarios. Implementa 2, descarta 2 con argumentos, deja 1 para más research.",
    resources: [
      {
        title: "Design critique — NN/g",
        url: "https://www.nngroup.com/articles/design-critique/",
        lang: "EN",
        type: "articulo",
      },
      {
        title: "ADPList — mentorías",
        url: "https://adplist.org/",
        lang: "EN",
        type: "herramienta",
      },
    ],
  },
  especializaciones: {
    id: "especializaciones",
    title: "Especializaciones (después)",
    kind: "optional",
    summary:
      "UX research, design systems, interaction/motion, content design, product design pesado de datos. Primero generalista junior; especializa cuando el mercado te empuje.",
    whyItMatters:
      "Especializarte en el mes 2 te cierra puertas. El primer trabajo enseña el contexto que luego permite elegir.",
    howToPractice:
      "Después de 3 cases, apunta qué parte disfrutaste más. Lee 5 ofertas de esa especialidad. ¿Qué piden que aún no tienes? Eso es un plan B, no el plan A.",
    resources: [
      {
        title: "UX career paths — NN/g",
        url: "https://www.nngroup.com/articles/ux-career-guide/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "ia-en-diseno": {
    id: "ia-en-diseno",
    title: "IA en el flujo de diseño",
    kind: "optional",
    summary:
      "Úsala para transcribir entrevistas, agrupar notas, variar copy, explorar layouts. No para generar el portafolio entero. Tú eres responsable del criterio y de la ética de los datos.",
    whyItMatters:
      "En 2026 esperan que sepas acelerar con IA sin sustituir research real. Un case “lo generó Midjourney” no se sostiene en una whiteboard.",
    howToPractice:
      "Toma una entrevista transcrita. Pide a un LLM que proponga clusters. Contrasta con tu affinity map manual. Anota qué acertó y qué alucinó. Esa nota va al case.",
    resources: [
      {
        title: "NN/g — AI for UX",
        url: "https://www.nngroup.com/articles/ai-tools-ux/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
  "primeras-semanas": {
    id: "primeras-semanas",
    title: "Primeras semanas en el rol",
    kind: "main",
    summary:
      "Escuchar, mapear el producto, aprender el design system ajeno, preguntar cómo se mide éxito. El primer trabajo no es para imponer tu UI kit.",
    whyItMatters:
      "Te contratan por potencial y por no ser un riesgo. Humildad operativa + criterio: esa es la reputación que consigue el segundo trabajo.",
    howToPractice:
      "Simula un “día 1”: elige un producto, lista de 15 preguntas para PM, research y engineering, y un plan de 30/60/90 días de una página. Úsalo en entrevistas (“así empezaría”).",
    resources: [
      {
        title: "Starting a new UX job — NN/g",
        url: "https://www.nngroup.com/articles/new-ux-job/",
        lang: "EN",
        type: "articulo",
      },
    ],
  },
};

export const phases: Phase[] = [
  {
    id: "orientacion",
    number: "01",
    title: "Orientación",
    subtitle: "Qué oficio es este y cómo se entra",
    timing: "Semanas 1–2",
    accent: "orientation",
    rows: [
      { left: "ux-vs-ui", center: "que-es-product-design", right: "como-se-contrata" },
      { center: "mentalidad-proceso", left: "observar-mal-diseno" },
      { center: "proyecto-auditoria" },
    ],
  },
  {
    id: "fundamentos",
    number: "02",
    title: "Fundamentos",
    subtitle: "Pensar y ver como diseñador",
    timing: "Mes 1–2",
    accent: "foundations",
    rows: [
      { center: "design-thinking", right: "gestalt" },
      { left: "jerarquia-visual", center: "principios-visuales", right: "tipografia" },
      { left: "color-contraste", center: "espacio-grilla" },
      { center: "proyecto-cartel" },
    ],
  },
  {
    id: "figma",
    number: "03",
    title: "Figma",
    subtitle: "La herramienta con la que te van a probar",
    timing: "Mes 2–3",
    accent: "figma",
    rows: [
      { center: "figma-frames", right: "figjam" },
      { center: "auto-layout", left: "plugins-comunidad" },
      { left: "estilos-variables", center: "componentes-variantes", right: "prototipos-basicos" },
      { center: "proyecto-clon" },
    ],
  },
  {
    id: "investigacion",
    number: "04",
    title: "Investigación UX",
    subtitle: "Dejar de adivinar",
    timing: "Mes 4–5",
    accent: "research",
    rows: [
      { left: "preguntas-abiertas", center: "entrevistas", right: "encuestas" },
      { center: "analisis-competitivo", right: "personas-jtbd" },
      { left: "journey-map", center: "sintesis-insights" },
      { center: "proyecto-estudio-5" },
    ],
  },
  {
    id: "arquitectura",
    number: "05",
    title: "Arquitectura y flujos",
    subtitle: "Antes de pixelar",
    timing: "Mes 5–6",
    accent: "architecture",
    rows: [
      { left: "sitemaps", center: "arquitectura-informacion", right: "card-sorting" },
      { left: "sketching", center: "user-flows" },
      { center: "wireframes-lofi" },
      { center: "proyecto-checkout" },
    ],
  },
  {
    id: "ui-sistemas",
    number: "06",
    title: "UI y sistemas",
    subtitle: "De wireframe a interfaz consistente",
    timing: "Mes 6–7",
    accent: "ui",
    rows: [
      { center: "patrones-ui", right: "iconografia" },
      { left: "material-hig", center: "componentes-ui", right: "design-tokens" },
      { left: "motion-basico", center: "responsive" },
      { center: "proyecto-ui-kit" },
    ],
  },
  {
    id: "prototipar",
    number: "07",
    title: "Prototipar y probar",
    subtitle: "Evidencia, no opiniones",
    timing: "Mes 7–8",
    accent: "prototype",
    rows: [
      { right: "microinteracciones", center: "proto-hifi" },
      { left: "moderado-vs-no", center: "usability-testing" },
      { center: "iterar-evidencia" },
      { center: "proyecto-test-redisenar" },
    ],
  },
  {
    id: "accesibilidad",
    number: "08",
    title: "Accesibilidad y entrega",
    subtitle: "Que se pueda usar y construir",
    timing: "Mes 8",
    accent: "a11y",
    rows: [
      { left: "contraste-tipo-a11y", center: "wcag-aa", right: "estados-foco-teclado" },
      { left: "html-css-basico", center: "handoff-devs" },
      { center: "proyecto-a11y" },
    ],
  },
  {
    id: "portafolio",
    number: "09",
    title: "Portafolio",
    subtitle: "El artefacto que te consigue la llamada",
    timing: "Mes 9–10",
    accent: "portfolio",
    rows: [
      { center: "que-busca-hiring", right: "evitar-redisenos-famosos" },
      { left: "tres-proyectos", center: "estructura-case" },
      { left: "framer-notion", center: "sitio-portafolio" },
      { center: "proyecto-publicar-cases" },
    ],
  },
  {
    id: "primer-trabajo",
    number: "10",
    title: "Primer trabajo",
    subtitle: "Posicionarte y aguantar el proceso",
    timing: "Mes 10–12",
    accent: "job",
    rows: [
      { left: "cv-disenador", center: "linkedin-presencia", right: "donde-aplicar" },
      { left: "whiteboard", center: "entrevista-diseno", right: "critique" },
      { left: "especializaciones", center: "primeras-semanas", right: "ia-en-diseno" },
    ],
  },
];

export const topicById = topics;

export function getTopic(id: string | undefined | null): Topic | undefined {
  if (!id) return undefined;
  return topics[id];
}

export function getPhaseForTopic(topicId: string): Phase | undefined {
  return phases.find((phase) =>
    phase.rows.some(
      (row) =>
        row.left === topicId ||
        row.center === topicId ||
        row.right === topicId,
    ),
  );
}

export const kindLabel: Record<TopicKind, string> = {
  main: "Camino principal",
  optional: "Opcional",
  project: "Proyecto",
};

export const resourceTypeLabel: Record<ResourceType, string> = {
  curso: "Curso",
  articulo: "Artículo",
  libro: "Libro",
  video: "Vídeo",
  herramienta: "Herramienta",
  guia: "Guía",
};
