export type ArticleCategory =
  | "العقلة"
  | "الضغط"
  | "البطن"
  | "التغذية"
  | "برامج"
  | "نصائح";

export type Article = {
  id: string;
  title: string;
  excerpt: string;
  category: ArticleCategory;
  image: string;
  to: string;
  readTime: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
};

export const featured: Article = {
  id: "pullups-blueprint",
  title: "خطة العقلة لبناء ظهر عريض: من الصفر إلى 10 تكرارات نظيفة",
  excerpt:
    "دليل عملي للتدرج: تعلّم كيف تبني قوة السحب بدون جيم مع أخطاء شائعة، وتمارين مساعدة، وبرنامج أسبوعي مختصر.",
  category: "العقلة",
  image: "/images/pullup.jpg",
  to: "/pullups",
  readTime: "9 دقائق",
  level: "مبتدئ",
};

export const articles: Article[] = [
  featured,
  {
    id: "pushups-chest",
    title: "الضغط لاستهداف الصدر: الزاوية التي تغيّر كل شيء",
    excerpt:
      "تفاصيل وضعية الكتف والكوع وتوزيع الوزن حتى تشعر بالصدر بدلًا من الترايسبس فقط.",
    category: "الضغط",
    image: "/images/pushup.jpg",
    to: "/pushups",
    readTime: "7 دقائق",
    level: "مبتدئ",
  },
  {
    id: "abs-weekly",
    title: "برنامج بطن أسبوعي بوزن الجسم (بدون تمارين مكررة)",
    excerpt:
      "خطة 3 أيام أسبوعيًا تجمع بين Hollow Hold ورفع الأرجل والبلانك لبناء عضلات بطن قوية ووظيفية.",
    category: "البطن",
    image: "/images/abs.jpg",
    to: "/abs",
    readTime: "6 دقائق",
    level: "مبتدئ",
  },
  {
    id: "bulking-diet",
    title: "نظام غذائي للتضخيم النظيف: سعرات وبروتين بدون تعقيد",
    excerpt:
      "كيف تحسب احتياجك اليومي وتختار أطعمة عالية البروتين بميزانية معقولة.",
    category: "التغذية",
    image: "/images/nutrition.jpg",
    to: "/nutrition",
    readTime: "8 دقائق",
    level: "متوسط",
  },
  {
    id: "beginner-calisthenics",
    title: "خطة كاليستنكس للمبتدئين 4 أسابيع (بدون معدات)",
    excerpt:
      "جدول تدريبي منزلي يعلّمك الأساسيات: ضغط، سحب بديل، سكوات، وكور — مع تدرج واضح.",
    category: "برامج",
    image: "/images/beginners.jpg",
    to: "/beginners",
    readTime: "10 دقائق",
    level: "مبتدئ",
  },
  {
    id: "pullups-common-mistakes",
    title: "أخطاء العقلة التي تمنعك من التطور (وكيف تصلحها)",
    excerpt:
      "تأرجح الجسم، كوع مفتوح، ومدى حركة ناقص… تصحيحات سريعة تعطيك تكرارات أقوى.",
    category: "العقلة",
    image: "/images/pullup.jpg",
    to: "/pullups#mistakes",
    readTime: "5 دقائق",
    level: "متوسط",
  },
  {
    id: "pushups-variations",
    title: "أفضل 8 أنواع ضغط لبناء العضلات بوزن الجسم",
    excerpt:
      "من الـ Incline للمبتدئ إلى الـ Archer وPseudo Planche للمتقدم — اختَر النوع حسب هدفك.",
    category: "الضغط",
    image: "/images/pushup.jpg",
    to: "/pushups#variations",
    readTime: "6 دقائق",
    level: "متوسط",
  },
  {
    id: "abs-hollow",
    title: "Hollow Hold: تمرين صغير بنتائج كبيرة",
    excerpt:
      "كيف تضبط الحوض والضلوع لتفعّل الكور بشكل صحيح وتزيد المدة تدريجيًا.",
    category: "البطن",
    image: "/images/abs.jpg",
    to: "/abs#hollow",
    readTime: "4 دقائق",
    level: "مبتدئ",
  },
  {
    id: "fatloss-basics",
    title: "أساسيات حرق الدهون: عجز السعرات بدون حرمان",
    excerpt:
      "دلائل عملية لتوزيع الوجبات، اختيار الأطعمة المشبعة، وتثبيت البروتين.",
    category: "التغذية",
    image: "/images/nutrition.jpg",
    to: "/nutrition#fatloss",
    readTime: "7 دقائق",
    level: "مبتدئ",
  },
  {
    id: "home-program",
    title: "برنامج منزلي كامل: 3 أيام أسبوعيًا لبناء جسم رياضي",
    excerpt:
      "خطة بسيطة وفعالة للمبتدئ والمتوسط مع بدائل سهلة في حال عدم وجود عقلة.",
    category: "برامج",
    image: "/images/beginners.jpg",
    to: "/programs",
    readTime: "9 دقائق",
    level: "متوسط",
  },
  {
    id: "progressive-overload",
    title: "التقدم في وزن الجسم: كيف تطبق Progressive Overload بدون أوزان",
    excerpt:
      "التكرارات، المدى، الإيقاع، والنسخ الأصعب… دليل سريع لزيادة الحمل تدريجيًا.",
    category: "نصائح",
    image: "/images/hero-athlete.jpg",
    to: "/programs#overload",
    readTime: "6 دقائق",
    level: "متوسط",
  },
  {
    id: "protein-cheap",
    title: "أطعمة عالية البروتين ورخيصة (قائمة تسوّق واقعية)",
    excerpt:
      "بيض، تونة، عدس، زبادي يوناني… خيارات تساعدك تلتزم وتبني عضلات بميزانية.",
    category: "التغذية",
    image: "/images/nutrition.jpg",
    to: "/nutrition#protein",
    readTime: "5 دقائق",
    level: "مبتدئ",
  },
];
