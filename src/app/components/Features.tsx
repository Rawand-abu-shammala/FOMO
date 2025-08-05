import CompassIcon from '@/components/icons/compass';
import FileTextIcon from '@/components/icons/file-text';
import CpuIcon from '@/components/icons/cpu';
import TrendingUpIcon from '@/components/icons/trending-up';
import BookOpenIcon from '@/components/icons/book-open';

export default function Features() {
  const items = [
    {
      icon: CompassIcon,
      title: 'Guidance to Choose the Right Career Path',
      desc: 'We help you identify the technical specialization that matches your skills and ambitions.',
    },
    {
      icon: FileTextIcon,
      title: 'Trusted Resources from Industry Experts',
      desc: 'Learn from reliable sources and carefully prepared content by professionals.',
    },
    {
      icon: CpuIcon,
      title: 'Tips on Using AI for Learning',
      desc: 'Benefit from the latest smart tools to enhance your learning skills.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Improve Your English for Tech Purposes',
      desc: 'We support you with techniques and resources to improve your technical English skills.',
    },
    {
      icon: BookOpenIcon,
      title: 'Book One-on-One Sessions with Mentors',
      desc: 'Schedule individual mentoring sessions with experts to assist you on your path.',
    },
  ];

  return (
    <section className="py-20 px-4">
      <h2 className="text-2xl font-bold mb-6">
        Why Join FOMO Techno?
      </h2>
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {items.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="bg-[#F0FCFF] p-6 rounded-xl text-center flex flex-col items-center"
          >
            <Icon className="mb-4 flex-shrink-0" width={32} height={32} />
            <h4 className="font-semibold mb-2 text-base text-gray-800 leading-tight">
              {title}
            </h4>
            <p className="text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
