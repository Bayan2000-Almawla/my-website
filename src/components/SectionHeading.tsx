import { cn } from "../utils/cn";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "start" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "start",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={cn(isCenter ? "text-center" : "text-right", className)}>
      <div className={cn("inline-flex items-center gap-3", isCenter && "mx-auto")}
      >
        <span className="h-6 w-[2px] rounded-full bg-red-500" />
        <h2 className="text-xl font-extrabold tracking-tight text-white sm:text-2xl">
          {title}
        </h2>
      </div>
      {subtitle ? (
        <p
          className={cn(
            "mt-2 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base",
            isCenter && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
