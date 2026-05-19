import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import type { Article } from "../data/articles";
import { Badge } from "./Badge";
import { cn } from "../utils/cn";

export function ArticleCard({
  article,
  featured,
  className,
}: {
  article: Article;
  featured?: boolean;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        "transition hover:border-red-500/30 hover:bg-white/[0.06]",
        className
      )}
    >
      <div className={cn("grid", featured ? "md:grid-cols-[1.2fr_1fr]" : "")}
      >
        <div className={cn("relative", featured ? "min-h-[220px]" : "min-h-[200px]")}
        >
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/15" />

          <div className="absolute bottom-4 right-4 left-4 flex flex-wrap items-center gap-2">
            <Badge tone="red">{article.category}</Badge>
            <Badge>{article.level}</Badge>
            <Badge>{article.readTime}</Badge>
          </div>
        </div>

        <div className={cn("p-5 sm:p-6", featured && "md:p-8")}
        >
          <h3
            className={cn(
              "text-base font-extrabold leading-snug text-white sm:text-lg",
              featured && "sm:text-xl"
            )}
          >
            {article.title}
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-white/70">
            {article.excerpt}
          </p>

          <div className="mt-5">
            <Link
              to={article.to}
              className={cn(
                "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5",
                "px-4 py-2 text-sm font-bold text-white/90",
                "transition hover:border-red-500/30 hover:bg-red-500/10"
              )}
            >
              اقرأ المزيد
              <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -left-20 top-10 h-48 w-48 rounded-full bg-red-500/10 blur-3xl transition group-hover:bg-red-500/15" />
    </article>
  );
}
