import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, CalendarDays, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function Beginners() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="خطة كاليستنكس للمبتدئين (4 أسابيع)"
              subtitle="3 حصص أسبوعيًا — أساسيات تبني عضلات وقوة بسرعة." 
            />

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
              <table className="w-full text-right text-sm">
                <thead className="bg-white/5">
                  <tr>
                    <th className="p-3 font-extrabold text-white">اليوم</th>
                    <th className="p-3 font-extrabold text-white">تمرين</th>
                    <th className="p-3 font-extrabold text-white">الهدف</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  <tr>
                    <td className="p-3 text-white/80">A</td>
                    <td className="p-3 text-white/70">ضغط Incline/Standard + سكوات + بلانك</td>
                    <td className="p-3 text-white/70">4×8–12</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white/80">B</td>
                    <td className="p-3 text-white/70">بدائل سحب + Lunges + Hollow</td>
                    <td className="p-3 text-white/70">4×8–12</td>
                  </tr>
                  <tr>
                    <td className="p-3 text-white/80">C</td>
                    <td className="p-3 text-white/70">ضغط + سكوات + Knee Raises</td>
                    <td className="p-3 text-white/70">4×8–15</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Prose className="mt-8">
              <h2>كيف تطبّق الخطة</h2>
              <ul>
                <li>الأسبوع 1–2: ركّز على تكنيك نظيف.</li>
                <li>الأسبوع 3: زد مجموعة إضافية أو تكرارات.</li>
                <li>الأسبوع 4: استخدم إيقاع أبطأ (نزول 3 ثواني).</li>
              </ul>

              <h2>برنامج منزلي بدون معدات</h2>
              <p>
                إذا لا يوجد بار عقلة: استخدم بديل سحب مثل سحب بالمنشفة (آمن فقط
                إذا كان الباب ثابتًا) أو ركّز على الدفع والأرجل والكور حتى توفر
                بار.
              </p>
              <ul>
                <li>ضغط 5×8–15</li>
                <li>سكوات 5×12–20</li>
                <li>Lunges 4×10/رجل</li>
                <li>بلانك 3×45–60 ثانية</li>
              </ul>

              <blockquote>
                لا تبحث عن المثالية. ابحث عن الاستمرارية. 12 حصة خلال شهر ستغير
                جسمك.
              </blockquote>
            </Prose>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <Pill icon={<CalendarDays className="h-4 w-4" />} title="3 أيام" desc="التزام واقعي" />
              <Pill icon={<ShieldCheck className="h-4 w-4" />} title="تكنيك" desc="أمان أولًا" />
              <Pill icon={<CheckCircle2 className="h-4 w-4" />} title="تدرج" desc="كل أسبوع" />
            </div>
          </section>

          <AdSlot variant="inline" label="إعلان بين أقسام صفحة المبتدئين" />

          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="ماذا بعد 4 أسابيع؟"
              subtitle="عندما يصبح الأداء أسهل، انتقل للنسخ الأصعب أو لبرنامج 4 أيام." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <NextCard
                title="ترقية الضغط"
                items={["Standard → Decline", "إيقاع أبطأ", "Archer لاحقًا"]}
                link={{ to: "/pushups", label: "دليل الضغط" }}
              />
              <NextCard
                title="ترقية العقلة"
                items={["Negatives → Pull-ups", "Holds", "Chest-to-bar"]}
                link={{ to: "/pullups", label: "دليل العقلة" }}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/nutrition"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                اضبط التغذية
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                برامج تدريب
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">قائمة تحقق</p>
            <ul className="mt-4 space-y-2 pr-6 text-sm text-white/70">
              <li className="list-disc">صور تكراراتك لتصحّح التكنيك.</li>
              <li className="list-disc">بروتين يومي ثابت.</li>
              <li className="list-disc">راحة بين الجلسات.</li>
              <li className="list-disc">سجّل تقدمك.</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">شارات</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">مبتدئين</Badge>
              <Badge>4 أسابيع</Badge>
              <Badge>بدون معدات</Badge>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة المبتدئين" />
        </aside>
      </section>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04]">
      <div className="absolute inset-0">
        <img
          src="/images/beginners.jpg"
          alt="برنامج المبتدئين"
          className="h-full w-full object-cover opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30" />
      </div>
      <div className="relative p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="red">للمبتدئين</Badge>
          <Badge>خطة 4 أسابيع</Badge>
          <Badge>من المنزل</Badge>
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-white sm:text-4xl">
          برنامج مبتدئين: ابني عضلاتك بدون جيم
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          إذا كنت تبدأ من الصفر — هذا المسار يعطيك جدولًا واضحًا، تدرجًا آمنًا،
          وخطوات عملية لتبني قوة حقيقية خلال 4 أسابيع.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="#plan"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
          >
            شاهد الجدول
            <ArrowLeft className="h-4 w-4" />
          </a>
          <Link
            to="/nutrition"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
          >
            التغذية للتضخيم
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Pill({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      <div className="flex items-center gap-2 text-red-200">
        {icon}
        <p className="text-sm font-extrabold text-white">{title}</p>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}

function NextCard({
  title,
  items,
  link,
}: {
  title: string;
  items: string[];
  link: { to: string; label: string };
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      <p className="text-sm font-extrabold text-white">{title}</p>
      <ul className="mt-3 space-y-2 pr-6 text-sm text-white/70">
        {items.map((it) => (
          <li key={it} className="list-disc">{it}</li>
        ))}
      </ul>
      <div className="mt-4">
        <Link
          to={link.to}
          className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
        >
          {link.label}
          <ArrowLeft className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
