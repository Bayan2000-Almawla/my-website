import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "../components/SectionHeading";
import { Badge } from "../components/Badge";
import { AdSlot } from "../components/AdSlot";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-7 sm:p-10">
        <div className="absolute inset-0 bg-[radial-gradient(900px_260px_at_20%_0%,rgba(239,68,68,0.25),transparent_60%)]" />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="red">اتصل بنا</Badge>
            <Badge>بدون Backend</Badge>
          </div>
          <h1 className="mt-5 text-2xl font-extrabold text-white sm:text-4xl">
            تواصل معنا
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            لديك سؤال عن التدرج أو التغذية أو البرامج؟ اكتب لنا وسنضيف جوابك ضمن
            المقالات/FAQ لاحقًا.
          </p>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="rounded-[2.25rem] border border-white/10 bg-white/[0.04] p-6 sm:p-8">
            <SectionHeading
              title="نموذج التواصل"
              subtitle="حاليًا: محاكاة إرسال فقط (UI) — جاهز للربط لاحقًا." 
            />

            {sent ? (
              <div className="mt-6 rounded-3xl border border-emerald-500/25 bg-emerald-500/10 p-5">
                <div className="flex items-center gap-2 text-emerald-200">
                  <CheckCircle2 className="h-5 w-5" />
                  <p className="text-sm font-extrabold">تم إرسال الرسالة!</p>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  شكرًا لك. (هذه تجربة واجهة فقط — لا يتم إرسال بيانات فعلية.)
                </p>
              </div>
            ) : null}

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                setTimeout(() => setSent(false), 4000);
                setName("");
                setEmail("");
                setMessage("");
              }}
            >
              <Field label="الاسم">
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
                />
              </Field>
              <Field label="البريد الإلكتروني">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
                />
              </Field>
              <Field label="رسالتك">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm font-bold text-white outline-none transition focus:border-red-500/40"
                />
              </Field>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-red-500 px-6 py-4 text-sm font-extrabold text-white transition hover:bg-red-400"
              >
                إرسال
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <aside className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">معلومات تواصل</p>
            <div className="mt-4 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-red-400" /> support@example.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-red-400" /> +000 000 0000
              </p>
              <p className="text-xs text-white/55">
                * بيانات تجريبية — استبدلها عند النشر.
              </p>
            </div>
          </div>

          <AdSlot variant="sidebar" label="إعلان جانبي داخل صفحة التواصل" />

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
            <p className="text-sm font-extrabold text-white">اقتراحات سريعة</p>
            <ul className="mt-4 space-y-2 pr-6 text-sm text-white/70">
              <li className="list-disc">اطلب موضوعًا تريد مقاله (عقلة/ضغط/بطن).</li>
              <li className="list-disc">أرسل مستوى تكراراتك الحالي لنقترح تدرجًا.</li>
              <li className="list-disc">اذكر إن كان لديك إصابة/ألم.</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="space-y-2">
      <span className="block text-xs font-bold text-white/70">{label}</span>
      {children}
    </label>
  );
}
