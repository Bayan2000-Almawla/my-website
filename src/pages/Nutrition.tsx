import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2, Flame, Wallet } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Prose } from "../components/Prose";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function Nutrition() {
  return (
    <div className="space-y-10">
      <PageHero
        title="الدايت والتغذية: السعرات والبروتين لبناء العضلات"
        subtitle="بدون تعقيد: نظام تضخيم، نظام تنشيف، أطعمة بروتين، توقيت الوجبات، وأساسيات السعرات." 
        image="/images/nutrition.jpg"
        cta={{ label: "احسب سعراتك الآن", to: "/#tools" }}
      />

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-8 space-y-6">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <Prose>
              <h2>أساسيات السعرات وبناء العضلات</h2>
              <ul>
                <li>
                  <strong>التضخيم:</strong> فائض بسيط 150–300 سعرة يوميًا.
                </li>
                <li>
                  <strong>التنشيف:</strong> عجز 250–500 سعرة مع الحفاظ على البروتين.
                </li>
                <li>
                  <strong>البروتين:</strong> 1.6–2.2 جم/كجم وزن الجسم.
                </li>
                <li>
                  <strong>الكارب:</strong> مهم للطاقة والأداء خصوصًا في تمارين السحب.
                </li>
              </ul>

              <blockquote>
                أفضل دايت هو الذي تستطيع الالتزام به. اجعل 80% من طعامك صحيًا و20%
                مرنًا.
              </blockquote>

              <h2 id="bulking">نظام غذائي للتضخيم (مثال يومي)</h2>
              <ul>
                <li>فطور: 3 بيض + خبز/شوفان + فاكهة</li>
                <li>غداء: رز/مكرونة + دجاج/لحم + خضار</li>
                <li>سناك: زبادي + عسل + مكسرات</li>
                <li>عشاء: تونة/عدس + بطاطس + سلطة</li>
              </ul>

              <h2 id="fatloss">نظام لحرق الدهون (بدون حرمان)</h2>
              <ul>
                <li>ثبّت البروتين أولًا لزيادة الشبع.</li>
                <li>ارفع الألياف: خضار + بقوليات + فواكه.</li>
                <li>قلّل السوائل عالية السعرات (عصائر/مشروبات محلاة).</li>
                <li>حافظ على الأداء في التمرين قدر الإمكان.</li>
              </ul>

              <h2 id="protein">أطعمة عالية البروتين</h2>
              <table>
                <thead>
                  <tr>
                    <th>الطعام</th>
                    <th>ملاحظات</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>بيض</td>
                    <td>سهل ورخيص نسبيًا — ممتاز للفطور.</td>
                  </tr>
                  <tr>
                    <td>دجاج</td>
                    <td>أفضل خيار للتضخيم النظيف.</td>
                  </tr>
                  <tr>
                    <td>تونة</td>
                    <td>حل سريع — راقب الصوديوم.</td>
                  </tr>
                  <tr>
                    <td>عدس/حمص</td>
                    <td>بروتين + ألياف — ممتاز للتنشيف.</td>
                  </tr>
                  <tr>
                    <td>زبادي/لبن</td>
                    <td>بروتين + كالسيوم — سناك جيد.</td>
                  </tr>
                </tbody>
              </table>

              <h2 id="cheap">أطعمة صحية رخيصة</h2>
              <ul>
                <li>شوفان + موز</li>
                <li>بطاطس + بيض</li>
                <li>عدس + رز</li>
                <li>خضار مجمدة (اقتصادية وعملية)</li>
              </ul>

              <h2 id="timing">توقيت الوجبات (عملي)</h2>
              <ul>
                <li>
                  قبل التمرين بـ 60–90 دقيقة: كارب سهل + بروتين خفيف.
                </li>
                <li>
                  بعد التمرين: وجبة بروتين + كارب لدعم التعافي (ليس لازم فورًا).
                </li>
                <li>
                  وزّع البروتين على 3–4 وجبات يوميًا لنتائج أفضل.
                </li>
              </ul>
            </Prose>
          </div>

          <AdSlot variant="inline" label="إعلان داخل صفحة التغذية" />

          <section className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="خلاصة سريعة"
              subtitle="إذا تريد نتيجة واضحة خلال 30 يومًا… اتبع هذا." 
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Summary
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="بروتين يومي"
                desc="1.6–2.2 جم/كجم وزن الجسم." 
              />
              <Summary
                icon={<Flame className="h-4 w-4" />}
                title="سعرات مضبوطة"
                desc="تضخيم: +250 | تنشيف: -350 تقريبًا." 
              />
              <Summary
                icon={<Wallet className="h-4 w-4" />}
                title="ميزانية"
                desc="بيض + عدس + شوفان + تونة = أساس ممتاز." 
              />
              <Summary
                icon={<CheckCircle2 className="h-4 w-4" />}
                title="التزام"
                desc="أبسط خطة تستطيع الالتزام بها أفضل من خطة مثالية لا تُطبق." 
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/beginners"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                ابدأ برنامج المبتدئين
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <Link
                to="/programs"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-extrabold text-white/90 transition hover:border-red-500/30 hover:bg-red-500/10"
              >
                شاهد برامج تدريب
                <ArrowLeft className="h-4 w-4" />
              </Link>
            </div>
          </section>
        </div>

        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">روابط داخلية</p>
            <div className="mt-4 grid gap-2">
              <AnchorLink href="#bulking" label="نظام التضخيم" />
              <AnchorLink href="#fatloss" label="حرق الدهون" />
              <AnchorLink href="#protein" label="أطعمة بروتين" />
              <AnchorLink href="#cheap" label="أطعمة رخيصة" />
              <AnchorLink href="#timing" label="توقيت الوجبات" />
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">شارات</p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="red">سعرات</Badge>
              <Badge>بروتين</Badge>
              <Badge>تضخيم</Badge>
              <Badge>تنشيف</Badge>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة التغذية" />
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
          <Badge tone="red">التغذية</Badge>
          <Badge>سعرات</Badge>
          <Badge>بروتين</Badge>
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

function Summary({
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

function AnchorLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-extrabold text-white/85 transition hover:border-red-500/25 hover:bg-white/5"
    >
      {label}
    </a>
  );
}
