'use client';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import UserIcon from '@/components/icons/frame';
import MailIcon from '@/components/icons/sms';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // TODO: hook up to API
    console.log(form);
  };

  return (
    <div className="container mx-auto flex-grow flex flex-col md:flex-row items-start gap-8px-4 py-8 sm:p-6">
      {/* Form Section */}
      <div className="flex-1 w-full max-w-lg">
        <h2 className="mt-6 text-2xl md:text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-gray-600 mb-6 text-sm md:text-base">
          A clean and modern interface for seamless communication, reflecting professionalism and accessibility.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Full Name
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Jason Mark"
                className="bg-gray-100 border-none focus:ring-0 pl-10 w-full"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <div className="relative">
              <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email123@gmail.com"
                className="bg-gray-100 border-none focus:ring-0 pl-10 w-full"
              />
            </div>
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={12}
              className="bg-gray-100 border-none focus:ring-0 p-3 w-full h-auto min-h-48"
            />
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-center px-6 py-3 transition-colors cursor-pointer"
          >
            Send
          </Button>
        </form>
      </div>

      {/* Image Section */}
      <div className="flex-1 w-full flex justify-center md:justify-end">
        <Image
          src="/assets/images/contact.svg"
          alt="Contact Us illustration"
          width={800}
          height={600}
          className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl h-auto"
        />
      </div>
    </div>
  );
}










