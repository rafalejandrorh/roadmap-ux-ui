"use client";

import { kindLabel, type Topic, type TopicKind } from "@/content/roadmap";
import { cn } from "@/lib/utils";

const kindClass: Record<TopicKind, string> = {
  main: "border-border bg-card text-card-foreground shadow-sm hover:border-[var(--node-accent)] hover:shadow-md",
  optional:
    "border-2 border-dashed border-foreground/35 bg-card/70 text-card-foreground hover:border-[var(--node-accent)] hover:bg-card",
  project:
    "border-transparent bg-[var(--node-accent)] text-primary-foreground shadow-sm hover:brightness-110",
};

export function TopicNode({
  topic,
  onSelect,
}: {
  topic: Topic;
  onSelect: (id: string) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onSelect(topic.id)}
      className={cn(
        "w-full rounded-xl border px-3 py-2.5 text-left transition-all outline-none md:w-auto md:max-w-60 md:min-w-44",
        "focus-visible:ring-3 focus-visible:ring-ring/50",
        kindClass[topic.kind],
      )}
    >
      <span
        className={cn(
          "mb-1 block font-mono text-[10px] tracking-[0.14em] uppercase",
          topic.kind === "project"
            ? "text-primary-foreground/80"
            : "text-muted-foreground",
        )}
      >
        {kindLabel[topic.kind]}
      </span>
      <span className="block text-sm leading-snug font-medium">{topic.title}</span>
    </button>
  );
}
