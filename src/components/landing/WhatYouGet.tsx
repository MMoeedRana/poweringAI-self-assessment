import { Blend, ListOrdered, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const cards = [
  {
    icon: Blend,
    title: "Priority Heat Map",
    body: "Every lever, color coded from red to green, so you see at a glance where the biggest gaps are.",
  },
  {
    icon: ListOrdered,
    title: "Top 3 Levers",
    body: "Ranked by the size of the gap between today and your ambition, closing these first pays off.",
  },
  {
    icon: Compass,
    title: "Recommended Next Steps",
    body: "Concrete actions for each priority lever, plus Powering's approach to closing the gap.",
  },
];

export function WhatYouGet() {
  return (
    <section className="bg-[#FFFCF4] px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-6xl text-center">
        <span className="mb-4 inline-block rounded-md bg-accent px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          What You Get
        </span>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          A Detailed Report, Ready <span className="text-primary">To Act</span>{" "}
          On
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          A heatmap, your top 3 levers, and clear recommended next steps sent
          straight to your inbox as a PDF.
        </p>

        <div className="mt-14 grid gap-5 text-left sm:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-md border border-primary/50 bg-transparent p-6 transition-colors hover:border-primary/50"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-accent text-primary">
                <Icon className="size-5" />
              </div>
              <h3 className="text-[15px] font-bold text-foreground">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <Link href="/assessment">
            <Button
              size="lg"
              className="cursor-pointer h-11 rounded px-6 text-[15px] font-semibold"
            >
              Start The Assessment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
