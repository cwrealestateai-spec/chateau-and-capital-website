import { capitalStack } from "@/lib/content";
import { Reveal } from "@/components/Reveal";

/*
  The capital stack, drawn rather than described: four layers from
  senior debt at the base to partnership equity at the crown.
*/
export function CapitalStack() {
  const widths = ["100%", "82%", "64%", "46%"];
  return (
    <div className="flex flex-col-reverse items-center gap-2">
      {capitalStack.map((layer, i) => (
        <Reveal key={layer.label} delay={0.08 * i} className="w-full">
          <div className="flex justify-center">
            <div
              style={{ width: `clamp(230px, ${widths[i]}, 100%)` }}
              className={`border px-5 py-4 text-center md:px-8 md:py-5 ${
                i === 0
                  ? "border-on-slate-mist/50 bg-slate-deep text-on-slate"
                  : i === 3
                    ? "border-accent/70 bg-travertine text-ink"
                    : "border-line-strong bg-surface text-ink"
              }`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <span className="font-serif text-base md:text-lg">
                  {layer.label}
                </span>
                <span
                  className={`eyebrow ${
                    i === 0 ? "text-on-slate-mist" : "text-accent"
                  }`}
                >
                  {layer.share}
                </span>
              </div>
              <p
                className={`mt-2 text-left text-xs leading-relaxed md:text-sm ${
                  i === 0 ? "text-on-slate-mist" : "text-mist"
                }`}
              >
                {layer.note}
              </p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
