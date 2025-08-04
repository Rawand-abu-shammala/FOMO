import { Lightbulb } from 'lucide-react';
import { Compass, FileText, BookOpen, TrendingUp } from 'lucide-react';

const features = [
  {
    icon: Compass,
    title: 'توجيه لاختيار المسار المناسب',
    desc: 'نساعدك على تحديد التخصص التقني الذي يناسب مهاراتك وطموحاتك.',
  },
  {
    icon: FileText,
    title: 'مصادر موثوقة من الخبراء',
    desc: 'تعلم من مصادر موثوقة ومحتوى معد بعناية من المحترفين.',
  },
  {
    icon: Lightbulb,
    title: 'نصائح لاستخدام الذكاء الاصطناعي',
    desc: 'استفد من أحدث الأدوات الذكية لتعزيز مهاراتك.',
  },
  {
    icon: TrendingUp,
    title: 'تحسين لغتك الإنجليزية التقنية',
    desc: 'نوفر لك تقنيات وموارد لتحسين مهاراتك باللغة الإنجليزية.',
  },
  {
    icon: BookOpen,
    title: 'حجز جلسات فردية مع المرشدين',
    desc: 'جدولة جلسات توجيه فردية مع خبراء لمساعدتك.',
  },
];

export default function Features() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {features.map((f, i) => (
        <div key={i} className="p-6 bg-white rounded-lg shadow-sm text-center">
          <f.icon className="mx-auto w-8 h-8 text-blue-500" />
          <h3 className="mt-4 font-semibold">{f.title}</h3>
          <p className="mt-2 text-sm text-gray-600">{f.desc}</p>
        </div>
      ))}
    </section>
  );
}