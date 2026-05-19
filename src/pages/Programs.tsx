import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, TrendingUp, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function Programs() {
  return (
    <div className="space-y-10">
      <Hero />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="برنامج 3 أيام أسبوعيًا (Full Body)"
              subtitle="أفضل خيار لمعظم المبتدئين والمتوسطين لبناء عضلات بوزن الجسم." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <DayCard
                title="اليوم 1 (سحب + دفع)"
                items={["عقلة/بديل 4×6–10", "ضغط 4×8–15", "Knee Raises 4×10"]}
              />
              <DayCard
                title="اليوم 2 (أرجل + كور)"
                items={["سكوات 5×10–20", "Lunges 4×10/رجل", "Plank 3×60ث"]}
              />
              <DayCard
                title="اليوم 3 (سحب + دفع)"
                items={["Chin-ups 4×6–10", "Decline Push-ups 4×6–12", "Hollow 4×25ث"]}
              />
              <DayCard
                title="ملاحظة"
                items={["راحة يوم بين الجلسات", "قرب من الفشل RIR 1–3", "زد الحمل أسبوعيًا"]}
              />
            </div>
          </section>

          <AdSlot variant="inline" label="إعلان بين أقسام البرامج" />

          <section
            id="overload"
            className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8"
          >
            <SectionHeading
              title="Progressive Overload بدون أوزان"
              subtitle="كيف تتطور في وزن الجسم حتى لو تتمرن في المنزل." 
            />
            <Prose className="mt-6">
              <p>
                في تمارين وزن الجسم، التقدم ليس فقط "أزيد تكرارات". لديك عدة
                أدوات لزيادة الحمل بشكل ذكي:
              </p>
              <ul>
                <li><strong>التكرارات:</strong> زد تكرارًا واحدًا أسبوعيًا.</li>
                <li><strong>الإيقاع:</strong> نزول بطيء 3–5 ثواني.</li>
                <li><strong>التوقف:</strong> توقف 1–2 ثانية في أصعب نقطة.</li>
                <li><strong>المدى:</strong> مدى كامل + تحكم.</li>
                <li><strong>النسخة الأصعب:</strong> Incline → Standard → Decline → Archer.</li>
                <li><strong>الأحمال لاحقًا:</strong> حقيبة ظهر/حزام (اختياري).</li>
              </ul>

              <blockquote>
                اجعل معيارك هو الجودة. لا تنتقل لنسخة أصعب إلا عندما تستطيع أداء
                النسخة الحالية بتكنيك قوي.
              </blockquote>
            </Prose>
          </section>

          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="برنامج منزلي بدون معدات (نسخة بسيطة)"
              subtitle="إذا لا يوجد بار عقلة — استخدم بدائل." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <DayCard
                title="A"
                items={["ضغط 5×8–15", "سكوات 5×12–20", "بلانك 3×45ث"]}
              />
              <DayCard
                title="B"
                items={["ضغط Decline 4×6–12", "Lunges 4×10/رجل", "Hollow 4×20ث"]}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/beginners"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                خُذ برنامج المبتدئين
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/pullups"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                طوّر العقلة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">مبادئ الالتزام</p>
            <div className="mt-4 space-y-3">
              <SideNote
                icon={<CalendarDays className="h-4 w-4" />}
                title="ثبّت الأيام"
                desc="نفس الأيام أسبوعيًا تساعدك على الالتزام." 
              />
              <SideNote
                icon={<TrendingUp className="h-4 w-4" />}
                title="سجّل الأرقام"
                desc="المجموعات والتكرارات = بوصلة التقدم." 
              />
              <SideNote
                icon={<ShieldCheck className="h-4 w-4" />}
                title="تعافٍ"
                desc="إذا الأداء يهبط: قلّل الحجم أسبوعًا واحدًا." 
              />
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة البرامج" />

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">شارات</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">جداول أسبوعية</Badge>
              <Badge>تدرج</Badge>
              <Badge>منزل</Badge>
            </div>
          </div>
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
          src="/images/hero-athlete.jpg"
          alt="برامج تدريب وزن الجسم"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30" />
      </div>
      <div className="relative p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="red">برامج تدريب</Badge>
          <Badge>Progressive Overload</Badge>
          <Badge>بدون أجهزة</Badge>
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-white sm:text-4xl">
          برامج تدريب وزن الجسم
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          جداول جاهزة للتطبيق: 3 أيام أسبوعيًا، برنامج منزلي، ومبادئ التدرج حتى
          تستمر في بناء العضلات بدون توقف.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            to="/beginners"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
          >
            برنامج المبتدئين
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <a
            href="#overload"
            className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
          >
            Progressive Overload
            <ArrowLeft className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function DayCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      <p className="text-sm font-extrabold text-white">{title}</p>
      <ul className="mt-3 space-y-2 pr-6 text-sm text-white/70">
        {items.map((it) => (
          <li key={it} className="list-disc">{it}</li>
        ))}
      </ul>
    </div>
  );
}

function SideNote({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
      <div className="flex items-center gap-2 text-red-200">
        {icon}
        <p className="text-sm font-extrabold text-white">{title}</p>
      </div>
      <p className="mt-2 text-sm text-white/70">{desc}</p>
    </div>
  );
}
