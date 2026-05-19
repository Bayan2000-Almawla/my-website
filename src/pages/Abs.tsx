import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Flame, ShieldCheck } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function Abs() {
  return (
    <div className="space-y-10">
      <PageHero
        title="تمارين البطن بوزن الجسم: كور قوي وشكل أفضل"
        subtitle="أفضل تمارين كور بدون معدات: رفع الأرجل، Hollow Hold، البلانك، Knee Raises — مع تكرارات مقترحة وبرنامج أسبوعي." 
        image="/images/abs.jpg"
        cta={{ label: "أضف التغذية لنتائج أسرع", to: "/nutrition" }}
      />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <Prose>
              <h2>أفضل تمارين بطن بوزن الجسم</h2>
              <p>
                هدف تمارين البطن ليس فقط "حرق" العضلات، بل بناء ثبات (Stability)
                وقوة نقل الحركة. الكور القوي يحسن العقلة والضغط والسكوات.
              </p>

              <h2 id="legraises">1) رفع الأرجل (Leg Raises)</h2>
              <ul>
                <li>نسخة أرضية للمبتدئ ثم نسخة معلّقة للمتوسط.</li>
                <li>حافظ على أسفل الظهر ثابتًا ولا ترمِ الرجلين.</li>
                <li>استهدف 3–4 مجموعات × 8–15.</li>
              </ul>

              <h2 id="hollow">2) Hollow Hold</h2>
              <p>
                من أهم تمارين الكور في الكاليستنكس. الفكرة: ضلوع لأسفل، حوض مائل
                للخلف قليلًا، وأسفل الظهر ملاصق للأرض.
              </p>
              <ul>
                <li>ابدأ 3×15–25 ثانية.</li>
                <li>ارفع مستوى الصعوبة بتمديد الذراعين والرجلين.</li>
              </ul>

              <h2 id="plank">3) البلانك (Plank)</h2>
              <ul>
                <li>اجعل الجسم خطًا مستقيمًا (لا ترفع ولا تهبط بالورك).</li>
                <li>استهدف 3×30–60 ثانية.</li>
                <li>جرّب RKC plank لشدّ أكبر.</li>
              </ul>

              <h2 id="knee">4) Knee Raises (معلّقة أو على Parallel)</h2>
              <ul>
                <li>ارفع الركبتين نحو الصدر مع تحكم (بدون تأرجح).</li>
                <li>3–4 مجموعات × 8–15 تكرار.</li>
              </ul>

              <h2>عدد التكرارات المقترح</h2>
              <ul>
                <li><strong>حركات ديناميكية:</strong> 8–15 تكرار.</li>
                <li><strong>ثبات:</strong> 20–60 ثانية.</li>
                <li>اجعل آخر تكرارات صعبة لكن بتكنيك نظيف.</li>
              </ul>

              <h2>برنامج أسبوعي للبطن (3 أيام)</h2>
              <table>
                <thead>
                  <tr>
                    <th>اليوم</th>
                    <th>التمارين</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>اليوم 1</td>
                    <td>Hollow Hold 3×25ث + Leg Raises 4×10</td>
                  </tr>
                  <tr>
                    <td>اليوم 2</td>
                    <td>Plank 3×50ث + Knee Raises 4×8–12</td>
                  </tr>
                  <tr>
                    <td>اليوم 3</td>
                    <td>Leg Raises 4×12 + Hollow Hold 4×20ث</td>
                  </tr>
                </tbody>
              </table>

              <blockquote>
                عضلات البطن تظهر أكثر مع نظام غذائي مناسب (عجز سعرات) — لذلك اطلع
                على قسم التغذية.
              </blockquote>
            </Prose>
          </div>

          <AdSlot variant="inline" label="إعلان داخل صفحة تمارين البطن" />

          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="دمج البطن مع برنامجك"
              subtitle="أفضل طريقة: 10–15 دقيقة بعد جلسة السحب/الدفع." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="التكرار"
                desc="3 أيام أسبوعيًا كافية لمعظم الناس." 
              />
              <InfoCard
                icon={<ShieldCheck className="h-4 w-4" />}
                title="الأمان"
                desc="تجنب رمي الجسم في رفع الأرجل. تحكم > سرعة." 
              />
              <InfoCard
                icon={<Flame className="h-4 w-4" />}
                title="التقدم"
                desc="زد المدة أو التكرار أو النسخة الأصعب كل أسبوع." 
              />
              <InfoCard
                icon={<Flame className="h-4 w-4" />}
                title="التحكم بالتغذية"
                desc="الدهون تنخفض عبر عجز السعرات وليس تمارين بطن فقط." 
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/beginners"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                برنامج مبتدئين كامل
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/pullups"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                ارجع لقسم العقلة
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">شارات</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">كور</Badge>
              <Badge>ثبات</Badge>
              <Badge>بدون معدات</Badge>
              <Badge>برنامج أسبوعي</Badge>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة البطن" />

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">اختيار سريع</p>
            <p className="mt-2 text-sm text-white/70">
              لو تريد تمرينين فقط:
            </p>
            <ul className="mt-3 space-y-2 pr-6 text-sm text-white/70">
              <li className="list-disc">Hollow Hold</li>
              <li className="list-disc">Leg Raises</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

function PageHero({
  title,
  subtitle,
  image,
  cta,
}: {
  title: string;
  subtitle: string;
  image: string;
  cta: { label: string; to: string };
}) {
  return (
    <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04]">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/55 to-black/30" />
      </div>
      <div className="relative p-7 sm:p-10">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone="red">البطن</Badge>
          <Badge>Core</Badge>
          <Badge>3 أيام أسبوعيًا</Badge>
        </div>
        <h1 className="mt-5 text-2xl font-extrabold text-white sm:text-4xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/75 sm:text-base">
          {subtitle}
        </p>
        <div className="mt-7">
          <Link
            to={cta.to}
            className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
          >
            {cta.label}
            <ArrowLeft className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
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
