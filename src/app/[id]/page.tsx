// import Image from "next/image";
import { cards } from '../utils/data';
import { Card } from '../utils/type';

interface CardPageProps {
  params: { id: string };
}

export default function CardPage({ params }: CardPageProps) {
  const { id } = params;
  const card: Card | undefined = cards.find(c => c.id === id);

  if (!card) {
    return <p>Card not found.</p>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold capitalize">{card.title}</h1>
      <img src={card.image} alt={card.title} className="w-full max-h-100 object-cover my-4" />
      <p>تفاصيل محتوى البطاقة &quot;{card.title}&quot; ستظهر هنا.</p>
    </div>
  );
}




