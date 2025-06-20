import Image from "next/image";
import { Section } from '../../utils/type';
import { sections } from '../../utils/privacyPolicy';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row items-start mb-8 gap-6">
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-gray-500">Last updated: September 1, 2023</p>
          <p className="mt-5">
            At FOMO Techno, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your personal information when you use our platform. By accessing or using FOMO Techno, you agree to the terms of this policy.
          </p>
        </div>
        <div className="w-64 h-64 md:w-80 md:h-80 relative">
          <Image
            src="/assets/images/privacy policy.png"
            alt="Privacy Illustration"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div className="space-y-6">
        {sections.map((section: Section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            {section.description && (
              <p className="text-base mb-2 text-gray-400">
                {section.description}
              </p>
            )}
            {section.items && (
              <ul className="list-disc list-inside space-y-1 text-base">
                {section.items.map((item: string, idx: number) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}
