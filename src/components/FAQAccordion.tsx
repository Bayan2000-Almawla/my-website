import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils/cn";
import type { FAQItem } from "../data/faq";

export function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className="space-y-3">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        const panelId = `${baseId}-panel-${idx}`;
        const buttonId = `${baseId}-btn-${idx}`;
        return (
          <div
            key={idx}
            className={cn(
              "overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]",
              "transition hover:border-red-500/25"
            )}
          >
            <button
              id={buttonId}
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => setOpenIndex((v) => (v === idx ? null : idx))}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right"
            >
              <span className="text-sm font-extrabold text-white sm:text-base">
                {item.q}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-white/70 transition",
                  isOpen && "rotate-180"
                )}
              />
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden px-5 pb-5">
                <p className="text-sm leading-relaxed text-white/70">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
