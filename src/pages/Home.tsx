import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Dumbbell,
  Target,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  Timer,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { ArticleCard } from "../components/ArticleCard";
import { AdSlot } from "../components/AdSlot";
import { Calculators } from "../components/Calculators";
import { FAQAccordion } from "../components/FAQAccordion";
import { Badge } from "../components/Badge";
import { articles, featured } from "../data/articles";
import { faq } from "../data/faq";
import { cn } from "../utils/cn";

export default function Home() {
  const latest = articles.slice(0, 6);
  const more = articles.slice(6, 12);

  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04]">
        <div className="absolute inset-0">
          <img
            src="/images/hero-athlete.jpg"
            alt="رياضي كاليستنكس"
            className="h-full w-full object-cover opacity-70"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/40" />
          <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_20%_20%,rgba(239,68,68,0.35),transparent_60%)]" />
        </div>

        <div className="relative grid gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Badge tone="red">مجلة تمارين وزن الجسم</Badge>
              <Badge>RTL</Badge>
              <Badge>مهيّأ للموبايل أولًا</Badge>
            </div>

            <h1 className="mt-5 text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl">
              أفضل تمارين وزن الجسم لبناء العضلات
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
              تعلّم كيف تبني عضلات قوية بدون أجهزة جيم — باستخدام العقلة، الضغط،
              تمارين البطن والكور، مع تغذية مناسبة وبرامج تدريب خطوة بخطوة.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/beginners"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-red-500/20 transition hover:bg-red-400"
              >
                ابدأ التمارين
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/pullups"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                أفضل تمارين العقلة
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-black/30 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-white/20 hover:bg-white/5"
              >
                برامج تدريب
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <MiniKpi icon={<Target className="h-4 w-4" />} title="بدون معدات" desc="نتائج من المنزل" />
              <MiniKpi icon={<Timer className="h-4 w-4" />} title="20–45 دقيقة" desc="جلسات واقعية" />
              <MiniKpi icon={<ShieldCheck className="h-4 w-4" />} title="تكنيك صحيح" desc="أمان + تضخيم" />
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/10 bg-black/35 p-5 backdrop-blur sm:p-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-white">خريطة البداية</p>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-red-200">
                  <Dumbbell className="h-5 w-5" />
                </span>
              </div>
              <ol className="mt-4 space-y-3 pr-5 text-sm text-white/75">
                <li className="list-decimal">
                  ابدأ ببرنامج مبتدئين 4 أسابيع — ركّز على الأساسيات.
                </li>
                <li className="list-decimal">
                  طبّق التدرج: تكرارات أكثر أو نسخة أصعب كل أسبوع.
                </li>
                <li className="list-decimal">
                  احسب سعراتك وبروتينك لتسريع بناء العضلات.
                </li>
              </ol>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <Link
                  to="/beginners"
                  className="rounded-2xl bg-white/5 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-white/10"
                >
                  برنامج المبتدئين
                </Link>
                <Link
                  to="/nutrition"
                  className="rounded-2xl bg-white/5 px-4 py-3 text-center text-sm font-extrabold text-white transition hover:bg-white/10"
                >
                  التغذية والسعرات
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* مجلة/مقالات */}
      <section className="space-y-6">
        <SectionHeading
          title="مقالات مختارة"
          subtitle="محتوى غني مثل المدونات الاحترافية: شرح + تدرج + أخطاء شائعة + برامج." 
        />

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 space-y-6">
            <ArticleCard article={featured} featured />

            <div className="grid gap-6 sm:grid-cols-2">
              {latest.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>

            <AdSlot variant="inline" label="إعلان بين المقالات (Native/Responsive)" />

            <div className="grid gap-6 sm:grid-cols-2">
              {more.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>

          <aside className="lg:col-span-4 space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-extrabold text-white">الأكثر قراءة</p>
              <div className="mt-4 space-y-3">
                {articles.slice(0, 5).map((a, idx) => (
                  <Link
                    key={a.id}
                    to={a.to}
                    className="group flex items-start gap-3 rounded-2xl border border-white/5 bg-black/30 p-3 transition hover:border-red-500/25 hover:bg-white/5"
                  >
                    <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-xl bg-red-500/15 text-xs font-extrabold text-red-200">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-extrabold text-white/90 group-hover:text-white">
                        {a.title}
                      </p>
                      <p className="mt-1 text-xs text-white/60">
                        {a.category} • {a.readTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <AdSlot variant="sidebar" label="إعلان جانبي (300x600 أو Responsive)" />

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm font-extrabold text-white">نصائح سريعة</p>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-red-200">
                  <Sparkles className="h-5 w-5" />
                </span>
              </div>
              <ul className="mt-4 space-y-3 pr-6 text-sm text-white/75">
                <li className="list-disc">اترك 1–3 تكرارات في الجعبة (RIR) لمعظم المجموعات.</li>
                <li className="list-disc">زد الحمل عبر الإيقاع: نزول 3 ثواني + توقف 1 ثانية.</li>
                <li className="list-disc">النوم 7–9 ساعات هو مكمل طبيعي لبناء العضلات.</li>
                <li className="list-disc">صوّر تكراراتك لتصحّح التكنيك بسرعة.</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
              <p className="text-sm font-extrabold text-white">نشرة بريدية (اختياري)</p>
              <p className="mt-2 text-sm text-white/70">
                ضع بريدك لتصلك تحديثات البرامج (مكان جاهز — بدون Backend حاليًا).
              </p>
              <div className="mt-4 flex gap-2">
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
                />
                <button
                  className="shrink-0 rounded-2xl bg-red-500 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-red-400"
                  onClick={() => alert("تم حفظ البريد محليًا كتجربة UI فقط.")}
                >
                  اشترك
                </button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* مكتبة التمارين */}
      <section className="space-y-6">
        <SectionHeading
          title="مكتبة التمارين الأساسية"
          subtitle="ابدأ بهذه الأقسام لبناء جسم قوي ومتوازن: سحب + دفع + كور + تغذية." 
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <NavCard
            to="/pullups"
            title="العقلة"
            desc="ظهر + بايسبس + قبضة قوية"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <NavCard
            to="/pushups"
            title="الضغط"
            desc="صدر + كتف + ترايسبس"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <NavCard
            to="/abs"
            title="البطن والكور"
            desc="قوة وثبات — شكل ووظيفة"
            icon={<TrendingUp className="h-5 w-5" />}
          />
          <NavCard
            to="/nutrition"
            title="التغذية"
            desc="سعرات + بروتين + توقيت"
            icon={<TrendingUp className="h-5 w-5" />}
          />
        </div>
      </section>

      {/* إحصائيات */}
      <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading
              title="إحصائيات لياقة — بشكل مجلة"
              subtitle="أرقام تجريبية لإضفاء طابع احترافي (يمكن ربطها ببيانات حقيقية لاحقًا)."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Stat value="+120" label="نسخة تمرين" />
              <Stat value="+15" label="برنامج تدريبي" />
              <Stat value="4" label="مسارات تدرج" />
              <Stat value="100%" label="بدون أجهزة" />
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <Feature
                icon={<BookOpen className="h-5 w-5" />}
                title="محتوى خطوة بخطوة"
                desc="شرح تكنيك + أخطاء + تدرج + عدد تكرارات." 
              />
              <Feature
                icon={<Target className="h-5 w-5" />}
                title="استهداف عضلي واضح"
                desc="تعلم كيف تغيّر الزوايا لتحوّل نفس التمرين لنتيجة مختلفة." 
              />
              <Feature
                icon={<ShieldCheck className="h-5 w-5" />}
                title="أمان أولًا"
                desc="توصيات للحماية من الألم/الإصابة مع بدائل للمبتدئ." 
              />
              <Feature
                icon={<Sparkles className="h-5 w-5" />}
                title="تصميم حديث"
                desc="خلفية داكنة فخمة مع الأحمر والأبيض — متجاوب بالكامل." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* أدوات */}
      <section id="tools" className="space-y-6">
        <SectionHeading
          title="أدوات سريعة"
          subtitle="حاسبات تساعدك على اتخاذ قرار: BMI واحتياج السعرات اليومية." 
        />
        <Calculators />
      </section>

      {/* نصائح للمبتدئين */}
      <section className="space-y-6">
        <SectionHeading
          title="نصائح للمبتدئين (مختصرة وقوية)"
          subtitle="طبّق هذه القواعد أسبوعين فقط وستلاحظ فرقًا كبيرًا في القوة والشكل." 
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Tip title="المدى الكامل" desc="تكرارات نظيفة بمدى كامل أفضل من تكرارات كثيرة بمدى ناقص." />
          <Tip title="قرب من الفشل" desc="اترك تكرار أو اثنين فقط قبل الفشل لمعظم المجموعات الأساسية." />
          <Tip title="التدرج الأسبوعي" desc="إما زِد تكرارًا، أو بطّئ النزول، أو انتقل لنسخة أصعب." />
          <Tip title="تغذية بسيطة" desc="بروتين كافي + سعرات مناسبة + ماء. لا تحتاج تعقيد." />
          <Tip title="راحة ونوم" desc="النمو يحدث خارج التمرين. اجعل النوم أولوية." />
          <Tip title="سجّل تقدمك" desc="اكتب المجموعات/التكرارات لتعرف هل تتطور فعلًا." />
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-6">
        <SectionHeading
          title="الأسئلة الشائعة"
          subtitle="إجابات عملية لأكثر الأسئلة تكرارًا عند بداية الكاليستنكس." 
        />
        <FAQAccordion items={faq} />
      </section>

      {/* CTA نهائي */}
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_250px_at_50%_0%,rgba(239,68,68,0.25),transparent_70%)]" />
        <div className="relative grid gap-6 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              جاهز تبدأ؟
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
              ادخل برنامج المبتدئين، طبّق 3 حصص أسبوعيًا، واحسب سعراتك — وستلاحظ
              تطورًا حقيقيًا خلال أسابيع.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              to="/beginners"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
            >
              برنامج المبتدئين
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
            >
              تواصل معنا
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function MiniKpi({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur">
      <div className="flex items-center gap-2 text-red-200">
        {icon}
        <p className="text-xs font-extrabold text-white/85">{title}</p>
      </div>
      <p className="mt-2 text-xs text-white/60">{desc}</p>
    </div>
  );
}

function NavCard({
  to,
  title,
  desc,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <Link
      to={to}
      className={cn(
        "group rounded-3xl border border-white/10 bg-white/[0.04] p-5",
        "transition hover:border-red-500/25 hover:bg-white/[0.06]"
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-base font-extrabold text-white">{title}</p>
          <p className="mt-1 text-sm text-white/65">{desc}</p>
        </div>
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-red-200 transition group-hover:bg-red-500/10">
          {icon}
        </span>
      </div>
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-white/80">
        افتح الدليل
        <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
      </div>
    </Link>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/30 p-5">
      <p className="text-3xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-sm font-bold text-white/65">{label}</p>
    </div>
  );
}

function Feature({
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
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}

function Tip({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-red-500/25 hover:bg-white/[0.06]">
      <p className="text-sm font-extrabold text-white">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  );
}
