import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../utils/cn";

export type NavItem = { label: string; to: string };

export const navItems: NavItem[] = [
  { label: "الرئيسية", to: "/" },
  { label: "تمارين العقلة", to: "/pullups" },
  { label: "تمارين الضغط", to: "/pushups" },
  { label: "تمارين البطن", to: "/abs" },
  { label: "الدايت والتغذية", to: "/nutrition" },
  { label: "برامج تدريب", to: "/programs" },
  { label: "للمبتدئين", to: "/beginners" },
  { label: "اتصل بنا", to: "/contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  const activeClass = useMemo(
    () =>
      "text-white bg-white/10 border-white/15",
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/35 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between gap-3">
          <Link to="/" className="group flex items-center gap-3">
            <span className="relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <span className="absolute inset-0 bg-[radial-gradient(120px_60px_at_50%_0%,rgba(239,68,68,0.55),transparent_70%)]" />
              <span className="relative text-lg font-extrabold text-white">BW</span>
            </span>
            <div className="leading-tight">
              <p className="text-sm font-extrabold text-white">
                تمارين وزن الجسم
              </p>
              <p className="text-xs text-white/60">مجلة كاليستنكس عربية</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-2 lg:flex" aria-label="التنقل الرئيسي">
            {navItems.slice(0, 6).map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full border border-transparent px-3 py-2 text-sm font-bold text-white/75",
                    "transition hover:border-white/10 hover:bg-white/5 hover:text-white",
                    isActive && activeClass
                  )
                }
                end={item.to === "/"}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/beginners"
              className={cn(
                "mr-2 inline-flex items-center rounded-full bg-red-500 px-4 py-2",
                "text-sm font-extrabold text-white shadow-lg shadow-red-500/20",
                "transition hover:bg-red-400"
              )}
            >
              برنامج المبتدئين
            </Link>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-2 text-white/80 lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open ? (
          <div className="pb-4 lg:hidden">
            <div className="grid gap-2 rounded-3xl border border-white/10 bg-black/40 p-3">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "rounded-2xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-bold text-white/85",
                      "transition hover:bg-white/10",
                      isActive && "border-red-500/30 bg-red-500/10"
                    )
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/beginners"
                className="rounded-2xl bg-red-500 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                ابدأ التمارين الآن
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
