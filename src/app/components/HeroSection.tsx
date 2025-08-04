import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="text-center">
      <h1 className="text-5xl font-extrabold">ابدأ رحلتك التقنية بثقة!</h1>
      <p className="mt-4 text-gray-600">
        سواء كنت طالبًا جامعيًا، خريجًا جديدًا، أو ترغب في تغيير مسارك الوظيفي،
        ستوجهك FOMO Techno نحو المسار التقني المناسب.
      </p>
      <Button className="mt-6">انضم الآن مجانًا</Button>
      {/* TODO: إضافة شبكة صور حول العنوان */}
    </section>
  );
}