import Image from 'next/image';

const steps = [
  { num: '1', title: 'استكشف المسارات', desc: 'اكتشف مجالات مثل AI، Web Dev، Cybersecurity والمزيد.' },
  { num: '2', title: 'تعلم من محتوى الخبراء', desc: 'مقالات، فيديوهات، كتب، ورؤى من المحترفين.' },
  { num: '3', title: 'طوّر مهاراتك بطريقتك', desc: 'نصائح ذكية وأدوات AI للتعلم أسرع.' },
  { num: '4', title: 'احجز جلسة مع مرشد', desc: 'تواصل مع مرشدين عرب للإرشاد خطوة بخطوة.' },
];

export default function HowItWorks() {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-12">
      <div className="flex-1 space-y-6">
        <h2 className="text-3xl font-bold">كيف تستخدم FOMO Techno؟</h2>
        <ol className="space-y-4">
          {steps.map(s => (
            <li key={s.num} className="flex items-start gap-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center font-semibold">{s.num}</div>
              <div>
                <p className="font-semibold">{s.title}</p>
                <p className="text-sm text-gray-600">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="flex-1">
        <Image
          src="/assets/images/Laptop.svg"
          alt="Demo"
          width={500}
          height={300}
          className="mx-auto"
        />
      </div>
    </section>
  );
}