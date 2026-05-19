import { useMemo, useState } from "react";
import { Calculator, Flame, HeartPulse } from "lucide-react";
import { cn } from "../utils/cn";

type Sex = "ذكر" | "أنثى";

type Activity =
  | "خامل"
  | "خفيف (1-3 أيام)"
  | "متوسط (3-5 أيام)"
  | "عالي (6-7 أيام)"
  | "عالي جدًا (عمل بدني)";

const activityFactor: Record<Activity, number> = {
  "خامل": 1.2,
  "خفيف (1-3 أيام)": 1.375,
  "متوسط (3-5 أيام)": 1.55,
  "عالي (6-7 أيام)": 1.725,
  "عالي جدًا (عمل بدني)": 1.9,
};

export function Calculators() {
  // BMI
  const [heightCm, setHeightCm] = useState<number>(175);
  const [weightKg, setWeightKg] = useState<number>(75);

  // Calories
  const [sex, setSex] = useState<Sex>("ذكر");
  const [age, setAge] = useState<number>(25);
  const [activity, setActivity] = useState<Activity>("متوسط (3-5 أيام)");
  const [goal, setGoal] = useState<"تثبيت" | "تضخيم" | "تنشيف">("تثبيت");

  const bmi = useMemo(() => {
    const h = heightCm / 100;
    if (!h || !weightKg) return null;
    return weightKg / (h * h);
  }, [heightCm, weightKg]);

  const bmiLabel = useMemo(() => {
    if (!bmi) return null;
    if (bmi < 18.5) return "نحافة";
    if (bmi < 25) return "طبيعي";
    if (bmi < 30) return "زيادة وزن";
    return "سمنة";
  }, [bmi]);

  const calories = useMemo(() => {
    // Mifflin-St Jeor
    const bmr =
      sex === "ذكر"
        ? 10 * weightKg + 6.25 * heightCm - 5 * age + 5
        : 10 * weightKg + 6.25 * heightCm - 5 * age - 161;

    const tdee = bmr * activityFactor[activity];

    const adjusted =
      goal === "تضخيم" ? tdee + 250 : goal === "تنشيف" ? tdee - 350 : tdee;

    return {
      bmr,
      tdee,
      adjusted,
    };
  }, [sex, weightKg, heightCm, age, activity, goal]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <Card
        title="حاسبة BMI"
        subtitle="اعرف مؤشر كتلة الجسم بسرعة."
        icon={<HeartPulse className="h-5 w-5" />}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="الطول (سم)">
            <NumberInput value={heightCm} onChange={setHeightCm} />
          </Field>
          <Field label="الوزن (كجم)">
            <NumberInput value={weightKg} onChange={setWeightKg} />
          </Field>
        </div>

        <div className="mt-5 rounded-2xl border border-white/10 bg-black/30 p-4">
          <p className="text-sm text-white/70">النتيجة</p>
          <div className="mt-1 flex items-end justify-between gap-3">
            <p className="text-3xl font-extrabold text-white">
              {bmi ? bmi.toFixed(1) : "—"}
            </p>
            <span
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-extrabold",
                bmiLabel === "طبيعي"
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-200"
                  : "border-red-500/25 bg-red-500/10 text-red-200"
              )}
            >
              {bmiLabel ?? "—"}
            </span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-white/55">
            * التقييم تقريبي ولا يغني عن تقييم صحي متخصص.
          </p>
        </div>
      </Card>

      <Card
        title="حاسبة السعرات اليومية"
        subtitle="احسب احتياجك (BMR/TDEE) واضبط هدفك."
        icon={<Calculator className="h-5 w-5" />}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="الجنس">
            <Select
              value={sex}
              onChange={(v) => setSex(v as Sex)}
              options={["ذكر", "أنثى"]}
            />
          </Field>
          <Field label="العمر">
            <NumberInput value={age} onChange={setAge} min={10} max={80} />
          </Field>
          <Field label="الطول (سم)">
            <NumberInput value={heightCm} onChange={setHeightCm} />
          </Field>
          <Field label="الوزن (كجم)">
            <NumberInput value={weightKg} onChange={setWeightKg} />
          </Field>
          <Field label="النشاط" className="sm:col-span-2">
            <Select
              value={activity}
              onChange={(v) => setActivity(v as Activity)}
              options={Object.keys(activityFactor) as Activity[]}
            />
          </Field>
          <Field label="الهدف" className="sm:col-span-2">
            <Select
              value={goal}
              onChange={(v) => setGoal(v as any)}
              options={["تثبيت", "تضخيم", "تنشيف"]}
            />
          </Field>
        </div>

        <div className="mt-5 grid gap-3 sm:grid-cols-3">
          <Result label="BMR" value={Math.round(calories.bmr)} hint="حرق الراحة" />
          <Result label="TDEE" value={Math.round(calories.tdee)} hint="مع النشاط" />
          <Result
            label="هدفك"
            value={Math.round(calories.adjusted)}
            hint={goal === "تثبيت" ? "ثبات" : goal === "تضخيم" ? "+250" : "-350"}
            highlight
          />
        </div>

        <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex items-center gap-2">
            <Flame className="h-4 w-4 text-red-400" />
            <p className="text-sm font-extrabold text-white">نصيحة سريعة</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            للتضخيم: ثبّت البروتين (1.6–2.2 جم/كجم) وراقب الوزن أسبوعيًا.
            للتنشيف: حافظ على الأداء وأعطِ الأولوية للشبع (خضار/ألياف).
          </p>
        </div>
      </Card>
    </div>
  );
}

function Card({
  title,
  subtitle,
  icon,
  children,
}: {
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 sm:p-6">
      <header className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-extrabold text-white sm:text-lg">
            {title}
          </h3>
          {subtitle ? (
            <p className="mt-1 text-sm text-white/60">{subtitle}</p>
          ) : null}
        </div>
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-red-300">
          {icon}
        </span>
      </header>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("space-y-2", className)}>
      <span className="block text-xs font-bold text-white/70">{label}</span>
      {children}
    </label>
  );
}

function NumberInput({
  value,
  onChange,
  min,
  max,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <input
      type="number"
      min={min}
      max={max}
      value={Number.isFinite(value) ? value : 0}
      onChange={(e) => onChange(Number(e.target.value))}
      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
    />
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: string[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
    >
      {options.map((opt) => (
        <option key={opt} value={opt} className="bg-black text-white">
          {opt}
        </option>
      ))}
    </select>
  );
}

function Result({
  label,
  value,
  hint,
  highlight,
}: {
  label: string;
  value: number;
  hint: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-black/30 p-4",
        highlight && "border-red-500/25 bg-red-500/10"
      )}
    >
      <p className="text-xs font-bold text-white/60">{label}</p>
      <p className="mt-1 text-2xl font-extrabold text-white">{value}</p>
      <p className="mt-1 text-xs text-white/55">{hint}</p>
    </div>
  );
}
