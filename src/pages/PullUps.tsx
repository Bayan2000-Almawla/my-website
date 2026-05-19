import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, AlertTriangle, TrendingUp } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function PullUps() {
  return (
    <div className="space-y-10">
      <PageHero
        title="تمارين العقلة: الدليل الكامل لبناء الظهر والبايسبس"
        subtitle="من الصفر إلى تكرارات نظيفة. تكنيك صحيح + تدرج للمبتدئ + عدد تكرارات للتضخيم + نسخ متقدمة." 
        image="/images/pullup.jpg"
        cta={{ label: "اذهب لبرنامج المبتدئين", to: "/beginners" }}
      />

      <AdSlot variant="inline" label="إعلان داخل صفحة العقلة" />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <SectionHeading title="محتوى الصفحة" subtitle="استخدم الروابط للوصول السريع." />
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <TocLink to="#what" label="ما هو تمرين العقلة؟" />
            <TocLink to="#muscles" label="العضلات المستهدفة" />
            <TocLink to="#form" label="الطريقة الصحيحة خطوة بخطوة" />
            <TocLink to="#mistakes" label="الأخطاء الشائعة" />
            <TocLink to="#progression" label="التدرج للمبتدئين" />
            <TocLink to="#reps" label="أفضل عدد تكرارات للتضخيم" />
            <TocLink to="#advanced" label="أنواع متقدمة" />
          </div>

          <div className="mt-8 rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <Prose>
              <h2 id="what">ما هو تمرين العقلة؟</h2>
              <p>
                العقلة (Pull-up / Chin-up) هي أقوى تمرين سحب بوزن الجسم. تعتمد على
                تعليق الجسم على بار ثم سحب الصدر/الذقن باتجاه البار. هذا التمرين
                يبني ظهرًا أعرض، ويحسّن قوة القبضة والبايسبس، ويُعتبر أساسًا لكل
                مهارات الكاليستنكس.
              </p>

              <blockquote>
                <strong>قاعدة ذهبية:</strong> تكرار واحد نظيف بمدى كامل أفضل من 5
                تكرارات مع تأرجح ومدى ناقص.
              </blockquote>

              <h2 id="muscles">العضلات المستهدفة</h2>
              <ul>
                <li>اللاتس (Latissimus Dorsi) — عرض الظهر.</li>
                <li>العضلة ذات الرأسين (Biceps) — قوة الذراع.</li>
                <li>الترابيس/الرومبويد — تثبيت لوح الكتف.</li>
                <li>الساعد والقبضة — تحمل وتعليق أقوى.</li>
                <li>الكور — لتثبيت الجسم ومنع التأرجح.</li>
              </ul>

              <h2 id="form">الطريقة الصحيحة (خطوة بخطوة)</h2>
              <ol>
                <li>
                  <strong>قبضة:</strong> امسك البار بعرض الكتفين تقريبًا. ابدأ
                  بـ Pull-up (راحة اليد للأمام) أو Chin-up (راحة اليد نحوك).
                </li>
                <li>
                  <strong>تثبيت لوح الكتف:</strong> قبل السحب، اسحب الكتفين لأسفل
                  وخلف (Scapular Depression).
                </li>
                <li>
                  <strong>السحب:</strong> فكّر أن الصدر يتجه للبار وليس الذقن فقط.
                  اجعل الكوع ينزل للأسفل بجانب الجسم.
                </li>
                <li>
                  <strong>النزول:</strong> انزل ببطء 2–3 ثواني حتى تمد الذراعين
                  بالكامل.
                </li>
              </ol>

              <h3>إشارات (Cues) سريعة</h3>
              <ul>
                <li>"اكسر البار" بيديك لزيادة الثبات.</li>
                <li>"ضع الكوع في جيبك" لتوجيه السحب للظهر.</li>
                <li>جسمك خط واحد (بدون رفس).</li>
              </ul>

              <h2 id="mistakes">الأخطاء الشائعة</h2>
              <ul>
                <li>تأرجح الجسم (Kipping) بدل سحب عضلي.</li>
                <li>مدى ناقص: عدم النزول الكامل أو عدم الاقتراب من البار.</li>
                <li>رفع الأكتاف للأذن أثناء السحب (فقدان تثبيت لوح الكتف).</li>
                <li>كوع مفتوح جدًا مما يقلل استهداف اللاتس.</li>
              </ul>

              <h2 id="progression">التدرج للمبتدئين (بدون عقلة واحدة)</h2>
              <p>
                إذا لا تستطيع عقلة واحدة، اتبع هذا التسلسل 2–3 مرات أسبوعيًا:
              </p>
              <ul>
                <li>
                  <strong>Scapular Pull-ups:</strong> 3×8–12
                </li>
                <li>
                  <strong>Negatives:</strong> 4×3–5 (نزول 4–6 ثواني)
                </li>
                <li>
                  <strong>Holds أعلى الحركة:</strong> 4×10–20 ثانية
                </li>
              </ul>

              <h3>جدول بسيط (4 أسابيع)</h3>
              <table>
                <thead>
                  <tr>
                    <th>الأسبوع</th>
                    <th>التمرين</th>
                    <th>المجموعات × التكرارات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Scapular + Negatives</td>
                    <td>3×10 + 4×3</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Negatives أبطأ + Holds</td>
                    <td>4×4 + 4×15ث</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>محاولة عقلة + Negatives</td>
                    <td>6 محاولات + 3×3</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>عقلة نظيفة</td>
                    <td>5×1–3</td>
                  </tr>
                </tbody>
              </table>

              <h2 id="reps">أفضل عدد تكرارات لبناء العضلات</h2>
              <ul>
                <li>
                  <strong>للتضخيم:</strong> 6–12 تكرار (قريب من الفشل مع تكنيك
                  نظيف).
                </li>
                <li>
                  <strong>للقوة:</strong> 3–6 تكرارات مع راحة أطول.
                </li>
                <li>
                  <strong>للمبتدئ:</strong> حتى 15 تكرار على نسخ سهلة مثل Inverted
                  Rows أو Band-assisted.
                </li>
              </ul>

              <blockquote>
                إذا تجاوزت 15–20 تكرار بسهولة، انتقل لنسخة أصعب: قبضة أوسع/أبطأ/
                توقف أعلى الحركة.
              </blockquote>

              <h2 id="advanced">أنواع العقلة المتقدمة</h2>
              <ul>
                <li>Chest-to-bar Pull-ups</li>
                <li>Archer Pull-ups</li>
                <li>L-sit Pull-ups</li>
                <li>Typewriter Pull-ups</li>
                <li>Muscle-up (مهارة متقدمة)</li>
              </ul>
            </Prose>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">ملخص سريع</p>
            <div className="mt-4 space-y-3">
              <SummaryItem
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="الأولوية: تكنيك"
                desc="تثبيت لوح الكتف + نزول بطيء." 
              />
              <SummaryItem
                icon={<TrendingUp className="h-4 w-4" />}
                title="التدرج"
                desc="Negatives + Holds حتى تحصل على أول تكرار." 
              />
              <SummaryItem
                icon={<AlertTriangle className="h-4 w-4" />}
                title="تجنب"
                desc="التأرجح، ومدى ناقص، ورفع الأكتاف." 
              />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">أفضل انتقال بعد العقلة</p>
            <p className="mt-2 text-sm text-white/70">
              بعد أن تصل لـ 8–12 تكرار نظيف، انتقل لنسخ متقدمة أو زِد الحمل عبر
              إبطاء النزول.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">Chest-to-bar</Badge>
              <Badge>Archer</Badge>
              <Badge>L-sit</Badge>
            </div>
            <div className="mt-5">
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 rounded-2xl bg-red-500 px-4 py-3 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                شاهد برامج التدريب
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة العقلة" />
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
          <Badge tone="red">العقلة</Badge>
          <Badge>بناء عضلات</Badge>
          <Badge>بدون جيم</Badge>
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

function TocLink({ to, label }: { to: string; label: string }) {
  return (
    <a
      href={to}
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-extrabold text-white/85 transition hover:border-red-500/25 hover:bg-white/5"
    >
      {label}
    </a>
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
