import { cn } from "../utils/cn";

export function Prose({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "prose-ar",
        "space-y-4",
        "[&>h2]:mt-10 [&>h2]:text-xl [&>h2]:font-extrabold",
        "[&>h3]:mt-7 [&>h3]:text-lg [&>h3]:font-extrabold",
        "[&>p]:text-sm [&>p]:leading-relaxed [&>p]:text-white/70",
        "[&>ul]:list-disc [&>ul]:pr-6 [&>ul>li]:text-sm [&>ul>li]:leading-relaxed [&>ul>li]:text-white/70",
        "[&>ol]:list-decimal [&>ol]:pr-6 [&>ol>li]:text-sm [&>ol>li]:leading-relaxed [&>ol>li]:text-white/70",
        "[&>blockquote]:rounded-3xl [&>blockquote]:border [&>blockquote]:border-white/10 [&>blockquote]:bg-white/[0.04] [&>blockquote]:p-5",
        "[&>blockquote]:text-white/75",
        "[&>table]:w-full [&>table]:overflow-hidden [&>table]:rounded-3xl [&>table]:border [&>table]:border-white/10",
        "[&>table_th]:bg-white/5",
        "[&>table_th]:p-3 [&>table_td]:p-3",
        className
      )}
    >
      {children}
    </div>
  );
}
