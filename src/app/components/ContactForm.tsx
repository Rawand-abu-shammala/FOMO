       

// // // components/ContactForm.tsx
// // 'use client';
// // import { useState } from 'react';
// // import { Input } from '@/components/ui/input';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Button } from '@/components/ui/button';
// // import { Label } from '@/components/ui/label';

// // export default function ContactForm() {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setStatus('sending');
// //     try {
// //       // يمكنك استبدال هذا بمنطق إرسال فعلي، مثل استدعاء API route
// //       await new Promise(res => setTimeout(res, 1000));
// //       setStatus('sent');
// //       setFullName('');
// //       setEmail('');
// //       setMessage('');
// //     } catch (err) {
// //       console.error(err);
// //       setStatus('error');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
// //       <div>
// //         <Label htmlFor="fullName">Full Name</Label>
// //         <Input id="fullName" placeholder="Jason Mark" value={fullName} onChange={e => setFullName(e.target.value)} required />
// //       </div>
// //       <div>
// //         <Label htmlFor="email">Email</Label>
// //         <Input id="email" type="email" placeholder="fakeemail123@gmail.com" value={email} onChange={e => setEmail(e.target.value)} required />
// //       </div>
// //       <div>
// //         <Label htmlFor="message">Message</Label>
// //         <Textarea id="message" placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)} required className="h-32" />
// //       </div>
// //       <Button type="submit" disabled={status === 'sending'} className="w-full">
// //         {status === 'sending' ? 'Sending...' : 'Send'}
// //       </Button>
// //       {status === 'sent' && <p className="text-green-600 text-sm">تم الإرسال بنجاح!</p>}
// //       {status === 'error' && <p className="text-red-600 text-sm">حدث خطأ، حاول لاحقاً.</p>}
// //     </form>
// //   );
// // }




// // components/ContactForm.tsx
// // 'use client';
// // import { useState } from 'react';
// // import { Input } from '@/components/ui/input';
// // import { Textarea } from '@/components/ui/textarea';
// // import { Button } from '@/components/ui/button';
// // import { Label } from '@/components/ui/label';

// // export default function ContactForm() {
// //   const [fullName, setFullName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setStatus('sending');
// //     try {
// //       // استبدل بالـ API route الخاص بك لإرسال البيانات
// //       await new Promise(res => setTimeout(res, 1000));
// //       setStatus('sent');
// //       setFullName('');
// //       setEmail('');
// //       setMessage('');
// //     } catch (err) {
// //       console.error(err);
// //       setStatus('error');
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow">
// //       <div>
// //         <Label htmlFor="fullName">Full Name</Label>
// //         <Input id="fullName" placeholder="Jason Mark" value={fullName} onChange={e => setFullName(e.target.value)} required />
// //       </div>
// //       <div>
// //         <Label htmlFor="email">Email</Label>
// //         <Input id="email" type="email" placeholder="fakeemail123@gmail.com" value={email} onChange={e => setEmail(e.target.value)} required />
// //       </div>
// //       <div>
// //         <Label htmlFor="message">Message</Label>
// //         <Textarea id="message" placeholder="Your message..." value={message} onChange={e => setMessage(e.target.value)} required className="h-32" />
// //       </div>
// //       <Button type="submit" disabled={status === 'sending'} className="w-full">
// //         {status === 'sending' ? 'Sending...' : 'Send'}
// //       </Button>
// //       {status === 'sent' && <p className="text-green-600 text-sm">تم الإرسال بنجاح!</p>}
// //       {status === 'error' && <p className="text-red-600 text-sm">حدث خطأ، حاول لاحقاً.</p>}
// //     </form>
// //   );
// // }




// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Button } from '@/components/ui/button';
// import { Label } from '@/components/ui/label';

// export default function ContactPage() {
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setStatus('sending');
//     try {
//       // استبدل بالـ API route الخاص بك لإرسال البيانات
//       await new Promise(res => setTimeout(res, 1000));
//       setStatus('sent');
//       setFullName('');
//       setEmail('');
//       setMessage('');
//     } catch (err) {
//       console.error(err);
//       setStatus('error');
//     }
//   };

//   return (
//     <section className="container mx-auto px-4 py-12">
//       <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
//       <p className="mb-8 text-gray-600">
//         A clean and modern interface for seamless communication, reflecting professionalism and accessibility.
//       </p>

//       {/* Parent flex مع items-stretch لضمان تساوي ارتفاع القسمين */}
//       <div className="flex flex-col lg:flex-row gap-8 items-stretch">
//         {/* قسم الفورم */}
//         <div className="flex-1 bg-white p-6 rounded-lg shadow flex flex-col">
//           <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between">
//             <div className="space-y-5">
//               {/* Full Name */}
//               <div className="flex flex-col">
//                 <Label htmlFor="fullName" className="mb-1">Full Name</Label>
//                 <Input
//                   id="fullName"
//                   placeholder="Jason Mark"
//                   value={fullName}
//                   onChange={e => setFullName(e.target.value)}
//                   required
//                   className="bg-gray-100"
//                 />
//               </div>

//               {/* Email */}
//               <div className="flex flex-col">
//                 <Label htmlFor="email" className="mb-1">Email</Label>
//                 <Input
//                   id="email"
//                   type="email"
//                   placeholder="fakeemail123@gmail.com"
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                   required
//                   className="bg-gray-100"
//                 />
//               </div>

//               {/* Message */}
//               <div className="flex flex-col">
//                 <Label htmlFor="message" className="mb-1">Message</Label>
//                 <Textarea
//                   id="message"
//                   placeholder="Your message..."
//                   value={message}
//                   onChange={e => setMessage(e.target.value)}
//                   required
//                   className="bg-gray-100 h-32 resize-none"
//                 />
//               </div>
//             </div>

//             <div className="mt-6">
//               <Button type="submit" disabled={status === 'sending'} className="w-full">
//                 {status === 'sending' ? 'Sending...' : 'Send'}
//               </Button>
//               {status === 'sent' && (
//                 <p className="text-green-600 text-sm mt-2">تم الإرسال بنجاح!</p>
//               )}
//               {status === 'error' && (
//                 <p className="text-red-600 text-sm mt-2">حدث خطأ، حاول لاحقاً.</p>
//               )}
//             </div>
//           </form>
//         </div>

//         {/* قسم الصورة */}
//         <div className="flex-1 flex items-center justify-center bg-white p-6 rounded-lg shadow">
//           {/* نجعل الحاوي relative وh-full ليمتد على نفس ارتفاع الفورم */}
//           <div className="relative w-full h-full">
//             <Image
//               src="/assets/images/contact.svg"
//               alt="Contact Us Illustration"
//               fill
//               className="object-contain rounded-lg"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }








// components/ContactForm.tsx
'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      // استبدل بالـ API route الخاص بك لإرسال البيانات
      await new Promise(res => setTimeout(res, 1000));
      setStatus('sent');
      setFullName('');
      setEmail('');
      setMessage('');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col flex-1 justify-between">
      <div className="space-y-6">
        {/* Full Name */}
        <div className="flex flex-col">
          <Label htmlFor="fullName" className="mb-2">Full Name</Label>
          <Input
            id="fullName"
            placeholder="Jason Mark"
            value={fullName}
            onChange={e => setFullName(e.target.value)}
            required
            className="bg-gray-100 border-0 focus:ring-0 focus:border-0"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col">
          <Label htmlFor="email" className="mb-2">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="fakeemail123@gmail.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="bg-gray-100 border-0 focus:ring-0 focus:border-0"
          />
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <Label htmlFor="message" className="mb-2">Message</Label>
          <Textarea
            id="message"
            placeholder="Your message..."
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className="bg-gray-100 border-0 focus:ring-0 focus:border-0 h-32 resize-none"
          />
        </div>
      </div>

      <div className="mt-6">
        <Button type="submit" disabled={status === 'sending'} className="w-full">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </Button>
        {status === 'sent' && (
          <p className="text-green-600 text-sm mt-2">تم الإرسال بنجاح!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">حدث خطأ، حاول لاحقاً.</p>
        )}
      </div>
    </form>
  );
}
