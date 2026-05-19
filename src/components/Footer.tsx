import { Link } from "react-router-dom";
import {
  Camera,
  Play,
  AtSign,
  Globe,
  Mail,
  ArrowUpLeft,
} from "lucide-react";
import { navItems } from "./Header";

export function Footer() {
  const quick = navItems.slice(0, 6);

  return (
    <footer className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lg font-extrabold text-white">
                BW
              </span>
              <div>
                <p className="text-base font-extrabold text-white">
                  أفضل تمارين وزن الجسم لبناء العضلات
                </p>
                <p className="text-sm text-white/60">
                  مجلة عربية حديثة لتمارين الكاليستنكس — بدون معدات، بنتائج قوية.
                </p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
              هدفنا: تعليم المبتدئين والمحترفين كيف يبنون عضلات حقيقية باستخدام وزن
              الجسم فقط. محتوى غني، خطوات واضحة، وبرامج جاهزة للتطبيق.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialLink icon={<Camera className="h-4 w-4" />} label="Instagram" />
              <SocialLink icon={<Play className="h-4 w-4" />} label="YouTube" />
              <SocialLink icon={<AtSign className="h-4 w-4" />} label="X / Twitter" />
              <SocialLink icon={<Globe className="h-4 w-4" />} label="Website" />
            </div>
          </div>

          <div className="lg:col-span-3">
            <p className="text-sm font-extrabold text-white">روابط سريعة</p>
            <ul className="mt-4 space-y-2">
              {quick.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
                  >
                    <ArrowUpLeft className="h-4 w-4 text-red-400" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
            <p className="text-sm font-extrabold text-white">تواصل</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-400" />
                support@example.com
              </p>
              <p>
                يمكن إضافة نماذج بريد/واتساب لاحقًا. الموقع جاهز لتركيب الإعلانات
                وMonetag.
              </p>
            </div>

            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-extrabold text-white">
                ملاحظة صحية
              </p>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                المعلومات لأغراض تعليمية. إذا كان لديك إصابة أو حالة صحية، استشر
                مختصًا قبل بدء أي برنامج.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} تمارين وزن الجسم — جميع الحقوق محفوظة.
          </p>
          <p className="text-xs text-white/55">
            تصميم واجهة حديثة — RTL — جاهز للنشر على Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href="#"
      onClick={(e) => e.preventDefault()}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/75 transition hover:border-red-500/30 hover:bg-red-500/10 hover:text-white"
      aria-label={label}
    >
      {icon}
      {label}
    </a>
  );
}
