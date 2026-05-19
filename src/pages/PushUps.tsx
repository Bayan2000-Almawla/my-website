import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertTriangle, Zap } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function PushUps() {
  return (
    <div className="space-y-10">
      <PageHero
        title="تمارين الضغط: من مبتدئ إلى صدر قوي ومحدد"
        subtitle="دليل شامل لأنواع الضغط، الطريقة الصحيحة لاستهداف الصدر، التكرارات المناسبة للتضخيم، والتدرج حتى النسخ المتقدمة." 
        image="/images/pushup.jpg"
        cta={{ label: "ابدأ بخطة منزلية", to: "/beginners" }}
      />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <SectionHeading title="دليل سريع" subtitle="الضغط ليس تمرين واحد — الزاوية تغيّر الاستهداف." />

          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <Prose>
              <h2 id="variations">أنواع الضغط (مختصرة)</h2>
              <ul>
                <li><strong>Incline Push-up:</strong> للمبتدئ — يقلل الحمل.</li>
                <li><strong>Knee Push-up:</strong> خيار تعليمي (يفضل Incline غالبًا).</li>
                <li><strong>Standard Push-up:</strong> الأساس لبناء الصدر والترايسبس.</li>
                <li><strong>Diamond Push-up:</strong> تركيز أعلى على الترايسبس.</li>
                <li><strong>Wide Push-up:</strong> استهداف أكبر للصدر (بحذر للكتف).</li>
                <li><strong>Decline Push-up:</strong> صدر علوي/كتف أمامي.</li>
                <li><strong>Archer Push-up:</strong> تدرج للقوة والنسخ أحادية الذراع.</li>
                <li><strong>Pseudo Planche:</strong> متقدم جدًا — حمل كبير على الكتف.</li>
              </ul>

              <h2 id="form">الطريقة الصحيحة لاستهداف الصدر</h2>
              <ol>
                <li>
                  <strong>وضعية اليد:</strong> أسفل/خارج الكتف قليلًا (ليس تحت الرقبة).
                </li>
                <li>
                  <strong>زاوية الكوع:</strong> 30–60 درجة عن الجسم (لا تفتح 90°).
                </li>
                <li>
                  <strong>ميل خفيف للأمام:</strong> اجعل الصدر يقود الحركة، وركّز على
                  انقباض الصدر في الأعلى.
                </li>
                <li>
                  <strong>مدى كامل:</strong> الصدر قريب من الأرض ثم صعود كامل بدون
                  تقوّس أسفل الظهر.
                </li>
              </ol>

              <blockquote>
                <strong>اختبار سريع:</strong> إذا تشعر بالترايسبس فقط، غيّر زاوية
                الجسم للأمام قليلًا ووسّع اليدين بشكل بسيط.
              </blockquote>

              <h2 id="reps">عدد التكرارات المناسب للتضخيم</h2>
              <ul>
                <li>استهدف 8–15 تكرار في أغلب المجموعات.</li>
                <li>إن كنت تتجاوز 20 تكرار بسهولة: انتقل لنسخة أصعب (Decline/Archer) أو بطّئ النزول.</li>
                <li>اجعل 1–3 تكرارات قبل الفشل لمعظم المجموعات.</li>
              </ul>

              <h2 id="progression">التدرج من مبتدئ إلى متقدم</h2>
              <table>
                <thead>
                  <tr>
                    <th>المستوى</th>
                    <th>النسخة</th>
                    <th>الهدف</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>مبتدئ</td>
                    <td>Incline</td>
                    <td>3×8–12</td>
                  </tr>
                  <tr>
                    <td>مبتدئ+</td>
                    <td>Standard</td>
                    <td>4×8–15</td>
                  </tr>
                  <tr>
                    <td>متوسط</td>
                    <td>Decline / Wide</td>
                    <td>4×6–12</td>
                  </tr>
                  <tr>
                    <td>متقدم</td>
                    <td>Archer / Pseudo Planche</td>
                    <td>5×3–8</td>
                  </tr>
                </tbody>
              </table>

              <h2 id="mistakes">الأخطاء الشائعة</h2>
              <ul>
                <li>هبوط الورك للأسفل (ضغط على أسفل الظهر).</li>
                <li>مدى ناقص أو لمس الأرض بالرأس بدل الصدر.</li>
                <li>فتح الكوع 90° باستمرار (قد يزعج الكتف).</li>
                <li>سرعة مبالغ فيها بدون تحكم.</li>
              </ul>
            </Prose>
          </div>

          <AdSlot variant="inline" label="إعلان بين الأقسام داخل صفحة الضغط" />

          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="روتين ضغط مختصر (جاهز للتطبيق)"
              subtitle="3 أيام أسبوعيًا — مناسب للمبتدئ والمتوسط." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <RoutineCard
                title="جلسة A"
                items={["ضغط Standard 4×8–12", "ضغط Diamond 3×6–10", "بلانك 3×40ث"]}
              />
              <RoutineCard
                title="جلسة B"
                items={["ضغط Decline 4×6–10", "ضغط Wide 3×8–12", "Hollow Hold 3×25ث"]}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                شاهد برامج تدريب كاملة
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/abs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                أضف تمارين بطن
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">ملخص تكتيكي</p>
            <div className="mt-4 space-y-3">
              <SummaryItem
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="ميل للأمام"
                desc="يزيد استهداف الصدر بدل الترايسبس." 
              />
              <SummaryItem
                icon={<Zap className="h-4 w-4" />}
                title="إيقاع"
                desc="نزول 3 ثواني + توقف 1 ثانية = تضخيم أسرع." 
              />
              <SummaryItem
                icon={<AlertTriangle className="h-4 w-4" />}
                title="تفادى"
                desc="كوع 90° وهبوط الورك ومدى ناقص." 
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">شارات</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">صدر</Badge>
              <Badge>كتف</Badge>
              <Badge>ترايسبس</Badge>
              <Badge>مبتدئ → متقدم</Badge>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة الضغط" />
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
          <Badge tone="red">الضغط</Badge>
          <Badge>تضخيم</Badge>
          <Badge>بدون معدات</Badge>
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

function SummaryItem({
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

function RoutineCard({ title, items }: { title: string; items: string[] }) {
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
