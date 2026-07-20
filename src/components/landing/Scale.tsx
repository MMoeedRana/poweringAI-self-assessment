import { scaleStops } from "@/shared/HeatmapData";

export function Scale() {
  return (
    <section className="bg-cream px-6 py-24 lg:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span className="mb-4 inline-block rounded-md bg-white/20 border-gray-700 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary">
          The Scale
        </span>
        <h2 className="font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          Six Stages, <span className="text-primary">Color Coded</span> Scale
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Every lever today and your ambition is rated on the same six stage
          scale, so results are always comparable across your whole
          organization.
        </p>

        <div className="relative mt-16">
          <div
            className="absolute left-0 right-0 top-6 h-0.75 rounded-full sm:top-7"
            style={{
              background:
                "linear-gradient(90deg, #C13B2A, #E8A24A, #E2B77A, #A9B15C, #5C9E72, #1F6F5C)",
            }}
          />
          <div className="relative grid grid-cols-3 gap-y-10 sm:grid-cols-6 sm:gap-y-0">
            {scaleStops.map((stop) => (
              <div key={stop.value} className="flex flex-col items-center">
                <div
                  className="flex size-12 items-center justify-center rounded-full text-base font-extrabold text-white shadow-md sm:size-14 sm:text-lg"
                  style={{ background: stop.color }}
                >
                  {stop.value}
                </div>
                <p className="mt-3 max-w-28 text-xs font-semibold leading-snug text-foreground">
                  {stop.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
