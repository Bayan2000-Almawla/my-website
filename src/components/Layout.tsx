import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { AdSlot } from "./AdSlot";

export function Layout() {
  return (
    <div className="min-h-screen text-white">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:right-3 focus:z-[60] focus:rounded-xl focus:bg-red-500 focus:px-4 focus:py-2 focus:text-sm focus:font-extrabold"
      >
        تخطّي إلى المحتوى
      </a>

      <Header />

      <div className="mx-auto max-w-6xl px-4 pt-4">
        <AdSlot variant="top" label="مساحة بانر علوية للإعلانات" />
      </div>

      <main id="content" className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
