"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  getPhaseForTopic,
  getTopic,
  kindLabel,
  resourceTypeLabel,
} from "@/content/roadmap";
import { ArrowUpRight, BookOpen, CircleAlert } from "lucide-react";

export function TopicSheet({
  topicId,
  onOpenChange,
}: {
  topicId: string | null;
  onOpenChange: (open: boolean) => void;
}) {
  const open = Boolean(topicId);
  const topic = getTopic(topicId);
  const phase = topic ? getPhaseForTopic(topic.id) : undefined;
  const missing = open && !topic;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full gap-0 overflow-hidden p-0 sm:max-w-lg"
        data-accent={phase?.accent}
      >
        {missing ? (
          <div className="flex h-full flex-col items-start justify-center gap-3 p-6">
            <CircleAlert className="size-8 text-destructive" aria-hidden />
            <SheetHeader className="p-0">
              <SheetTitle className="font-heading text-2xl font-normal">
                No encontramos este tema
              </SheetTitle>
              <SheetDescription>
                El enlace apunta a un nodo que no existe en la hoja de ruta.
                Cierra el panel y elige un tema del camino.
              </SheetDescription>
            </SheetHeader>
          </div>
        ) : topic ? (
          <>
            <SheetHeader className="border-b border-border p-5 pr-12">
              <div className="flex flex-wrap items-center gap-2">
                {phase ? (
                  <Badge variant="outline" className="font-mono text-[10px]">
                    {phase.number} · {phase.title}
                  </Badge>
                ) : null}
                <Badge
                  variant={topic.kind === "project" ? "default" : "secondary"}
                  className="text-[10px]"
                >
                  {kindLabel[topic.kind]}
                </Badge>
              </div>
              <SheetTitle className="font-heading text-2xl leading-tight font-normal tracking-tight">
                {topic.title}
              </SheetTitle>
              <SheetDescription className="text-sm leading-relaxed text-foreground/80">
                {topic.summary}
              </SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-0 min-h-0 flex-1">
              <div className="flex flex-col gap-6 p-5">
                <section>
                  <h3 className="font-heading text-lg italic">
                    Por qué te contratan por esto
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {topic.whyItMatters}
                  </p>
                </section>
                <Separator />
                <section>
                  <h3 className="font-heading text-lg italic">Cómo practicarlo</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {topic.howToPractice}
                  </p>
                </section>
                <Separator />
                <section>
                  <h3 className="font-heading text-lg italic">Recursos</h3>
                  {topic.resources.length === 0 ? (
                    <p className="mt-3 rounded-lg border border-dashed border-border bg-muted/40 px-3 py-4 text-sm text-muted-foreground">
                      Todavía no hay recursos curados para este tema. Practica
                      con el ejercicio de arriba y vuelve más adelante.
                    </p>
                  ) : (
                    <ul className="mt-3 flex flex-col gap-2">
                      {topic.resources.map((resource) => (
                        <li key={resource.url}>
                          <a
                            href={resource.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-start gap-3 rounded-xl border border-border bg-card px-3 py-3 transition-colors hover:border-primary/40 hover:bg-accent/40"
                          >
                            <BookOpen
                              className="mt-0.5 size-4 shrink-0 text-[var(--node-accent)]"
                              aria-hidden
                            />
                            <span className="min-w-0 flex-1">
                              <span className="flex flex-wrap items-center gap-1.5">
                                <span className="text-sm font-medium group-hover:underline">
                                  {resource.title}
                                </span>
                                <ArrowUpRight className="size-3.5 opacity-50" />
                              </span>
                              <span className="mt-1 flex gap-1.5">
                                <Badge variant="outline" className="h-5 text-[10px]">
                                  {resource.lang}
                                </Badge>
                                <Badge variant="secondary" className="h-5 text-[10px]">
                                  {resourceTypeLabel[resource.type]}
                                </Badge>
                              </span>
                            </span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </div>
            </ScrollArea>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}
