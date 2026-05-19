import { cn } from "../utils/cn";

export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "red" | "white";
  className?: string;
}) {
  const tones: Record<NonNullable<typeof tone>, string> = {
    neutral: "bg-white/10 text-white/80 border-white/10",
    red: "bg-red-500/15 text-red-200 border-red-500/20",
    white: "bg-white/15 text-white border-white/15",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
