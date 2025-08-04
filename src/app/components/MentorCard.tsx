import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function MentorCard() {
  return (
    <Card className="w-64 flex-shrink-0">
      <CardContent className="relative">
        <Image
          src="/images/mentor1.jpg"
          alt="Mentor"
          width={64}
          height={64}
          className="rounded-full mx-auto"
        />
        <div className="mt-4 text-center">
          <p className="font-semibold">Ethan Cole</p>
          <p className="text-sm text-gray-500">Senior UX/UI</p>
          <p className="mt-2 text-sm">5 سنوات خبرة</p>
          <p className="text-sm text-yellow-500">★ 4.5 (29)</p>
        </div>
        <ArrowUpRight className="absolute top-3 right-3 w-5 h-5 text-blue-500" />
      </CardContent>
      <CardFooter className="flex justify-between">
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">Design Thinking</span>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">UCD</span>
        <span className="text-xs px-2 py-1 bg-gray-100 rounded">more+</span>
      </CardFooter>
    </Card>
  );
}