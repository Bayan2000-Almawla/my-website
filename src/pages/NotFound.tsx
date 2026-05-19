import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
      <h1 className="text-2xl font-extrabold text-white sm:text-4xl">404</h1>
      <p className="mt-3 text-sm text-white/70 sm:text-base">
        الصفحة غير موجودة. ربما تم تغيير الرابط أو كتابته بشكل خاطئ.
      </p>
      <div className="mt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
        >
          العودة للرئيسية
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
