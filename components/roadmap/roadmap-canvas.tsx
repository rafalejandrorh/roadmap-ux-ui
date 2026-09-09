"use client";

import { useEffect, useState } from "react";
import { TopicNode } from "@/components/roadmap/topic-node";
import { TopicSheet } from "@/components/roadmap/topic-sheet";
import {
  getTopic,
  phases,
  type Phase,
  type RoadmapRow,
} from "@/content/roadmap";

function Connector({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={
        side === "left"
          ? "absolute top-1/2 right-0 hidden h-0.5 w-8 -translate-y-1/2 bg-foreground/30 md:block"
          : "absolute top-1/2 left-0 hidden h-0.5 w-8 -translate-y-1/2 bg-foreground/30 md:block"
      }
    />
  );
}

function RowLanes({
  row,
  onSelect,
}: {
  row: RoadmapRow;
  onSelect: (id: string) => void;
}) {
  const left = getTopic(row.left);
  const center = getTopic(row.center);
  const right = getTopic(row.right);

  return (
    <>
      <div className="hidden md:grid md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:items-center">
        <div className="relative flex justify-end pr-8">
          {left ? <TopicNode topic={left} onSelect={onSelect} /> : null}
          {left ? <Connector side="left" /> : null}
        </div>
        <div className="relative z-10 flex min-h-12 justify-center py-2">
          {center ? (
            <TopicNode topic={center} onSelect={onSelect} />
          ) : (
            <span
              aria-hidden
              className="size-2.5 self-center rounded-full bg-foreground/35"
            />
          )}
        </div>
        <div className="relative flex justify-start pl-8">
          {right ? <Connector side="right" /> : null}
          {right ? <TopicNode topic={right} onSelect={onSelect} /> : null}
        </div>
      </div>

      <div className="flex flex-col items-stretch gap-3 md:hidden">
        {center ? <TopicNode topic={center} onSelect={onSelect} /> : null}
        {left ? <TopicNode topic={left} onSelect={onSelect} /> : null}
        {right ? <TopicNode topic={right} onSelect={onSelect} /> : null}
      </div>
    </>
  );
}

function PhaseBlock({
  phase,
  onSelect,
}: {
  phase: Phase;
  onSelect: (id: string) => void;
}) {
  return (
    <section
      id={phase.id}
      data-accent={phase.accent}
      className="relative scroll-mt-24 py-8"
    >
      <header className="relative z-10 mx-auto mb-8 max-w-md text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] text-[var(--node-accent)] uppercase">
          {phase.number} · {phase.timing}
        </p>
        <h2 className="font-heading mt-1 text-3xl tracking-tight sm:text-4xl">
          {phase.title}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">{phase.subtitle}</p>
      </header>
      <div className="flex flex-col gap-4">
        {phase.rows.map((row, index) => (
          <RowLanes
            key={`${phase.id}-${index}`}
            row={row}
            onSelect={onSelect}
          />
        ))}
      </div>
    </section>
  );
}

export function RoadmapCanvas() {
  const [topicId, setTopicId] = useState<string | null>(null);

  useEffect(() => {
    const applyHash = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id || id === "mapa" || phases.some((phase) => phase.id === id)) {
        return;
      }
      setTopicId(id);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const selectTopic = (id: string) => {
    setTopicId(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTopicId(null);
      window.history.replaceState(null, "", window.location.pathname);
    }
  };

  return (
    <>
      <div className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6">
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 bottom-10 left-4 w-0.5 bg-foreground/20 md:left-1/2 md:-translate-x-px"
        />
        {phases.map((phase) => (
          <PhaseBlock key={phase.id} phase={phase} onSelect={selectTopic} />
        ))}
      </div>
      <TopicSheet topicId={topicId} onOpenChange={handleOpenChange} />
    </>
  );
}
