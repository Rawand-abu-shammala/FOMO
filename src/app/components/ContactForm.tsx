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
            placeholder="email123@gmail.com"
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
        <Button type="submit" disabled={status === 'sending'} className="w-full cursor-pointer">
          {status === 'sending' ? 'Sending...' : 'Send'}
        </Button>
        {status === 'sent' && (
          <p className="text-green-600 text-sm mt-2">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-600 text-sm mt-2">An error occurred. Please try again later.</p>
        )}
      </div>
    </form>
  );
}
