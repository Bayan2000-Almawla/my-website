import { cn } from "../utils/cn";

type AdSlotProps = {
  variant?: "top" | "inline" | "sidebar";
  label?: string;
  className?: string;
};

const sizes: Record<NonNullable<AdSlotProps["variant"]>, string> = {
  top: "h-16 sm:h-20",
  inline: "h-28 sm:h-32",
  sidebar: "h-60",
};

export function AdSlot({
  variant = "inline",
  label = "مساحة إعلان (قابلة للإضافة لاحقًا)",
  className,
}: AdSlotProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-dashed border-white/15 bg-white/5",
        "backdrop-blur-sm",
        sizes[variant],
        className
      )}
      role="complementary"
      aria-label={label}
    >
      <div className="absolute inset-0 bg-[radial-gradient(700px_200px_at_50%_0%,rgba(239,68,68,0.20),transparent_60%)]" />
      <div className="relative flex h-full items-center justify-center px-4 text-center">
        <div className="space-y-1">
          <p className="text-sm font-semibold text-white/80">{label}</p>
          <p className="text-xs text-white/55">
            Banner/Native/Sidebar — جاهز للتركيب
          </p>
        </div>
      </div>
    </div>
  );
}
