"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import Link from 'next/link';
import { ArrowRight } from '@/components/icons';
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
import UploadCloud from "@/components/icons/gallery-export";

export default function EditProfilePage() {
  const router = useRouter();

  const [avatarPreview, setAvatarPreview] = useState<string>(
    "/assets/images/profile-avatar.svg"
  );
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    pronoun: "she",
    major: "uxui design",
    linkedin: "https://www.linkedin.com/in/fakeprofile123/",
    goals: "AI-powered applications that enhance user experiences.",
    bio: `Passionate software engineer with a strong background in full-stack development and AI-driven solutions. She enjoys building scalable and user-friendly applications that integrate cutting-edge AI technologies to enhance digital experiences. With expertise in JavaScript, Python, and cloud computing, she constantly explores new ways to optimize software performance and usability. Always eager to learn, innovate, and contribute, Sarah actively participates in tech communities, hackathons, and open-source projects to stay ahead in the ever-evolving world of technology.`,
  });

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatarPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    router.push("/my-profile");
  };

  return (
    <>
    <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">

        <Link href="/my-profile" className="hover:underline">
          My Profile
        </Link>
        <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
        <span className="text-gray-700">Edit</span>
    </div>
    <div className="text-sm text-gray-500 mb-4 flex items-center pl-6">
    
    <div className="max-w-5xl ml-0 py-10 px-4 sm:px-6 lg:px-8">
 

      <div className="flex flex-col md:flex-row items-stretch divide-y md:divide-y-0 md:divide-x divide-gray-200 gap-8">
        {/* Avatar Column */}
        <div className="w-full md:w-1/3 flex flex-col items-center space-y-4 md:pr-6">
          <div className="relative w-[120px] h-[120px]">
            <Image
              src={avatarPreview}
              alt="Avatar Preview"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <label className="flex items-center text-blue-600 cursor-pointer space-x-1">
            <UploadCloud className="h-5 w-5" />
            <span className="text-sm">Replace</span>
            <input type="file" accept="image/*" onChange={handleAvatarChange} className="sr-only" />
          </label>
          <div className="hidden md:block">
            <label
              htmlFor="cover-upload"
              className="mt-2 w-full max-w-md flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer hover:border-blue-600"
            >
              <UploadCloud className="h-6 w-6 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</span>
              <span className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</span>
              <input id="cover-upload" type="file" accept="image/*" className="hidden" />
            </label>
          </div>
        </div>

        {/* Form Column */}
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-6 md:pl-6">
          <div className="md:hidden">
            <label
              htmlFor="cover-upload"
              className="w-full max-w-md flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg h-32 cursor-pointer hover:border-blue-600"
            >
              <UploadCloud className="h-6 w-6 text-gray-400" />
              <span className="mt-2 text-sm text-gray-500">Click to upload or drag and drop</span>
              <span className="text-xs text-gray-400">SVG, PNG, JPG or GIF (max. 800x400px)</span>
              <input id="cover-upload" type="file" accept="image/*" className="hidden" />
            </label>
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative w-full max-w-md">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="border border-gray-300 w-full pr-10"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-2 flex items-center"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? (
                  <EyeOffIcon className="h-5 w-5 text-gray-400" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Pronoun Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Pronoun</label>
            <Select
              value={formData.pronoun}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, pronoun: value }))
              }
            >
              <SelectTrigger className="w-full max-w-md border border-gray-300">
                <SelectValue placeholder="Select pronoun" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg z-50">
                <SelectItem value="she">she</SelectItem>
                <SelectItem value="he">he</SelectItem>
                <SelectItem value="they">they</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Major Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Major</label>
            <Select
              value={formData.major}
              onValueChange={(value) =>
                setFormData((prev) => ({ ...prev, major: value }))
              }
            >
              <SelectTrigger className="w-full max-w-md border border-gray-300">
                <SelectValue placeholder="Select major" />
              </SelectTrigger>
              <SelectContent className="bg-white shadow-lg z-50">
                <SelectItem value="uxui design">UX/UI Design</SelectItem>
                <SelectItem value="software engineering">Software Engineering</SelectItem>
                <SelectItem value="computer science">Computer Science</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* LinkedIn Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile</label>
            <Input
              name="linkedin"
              type="url"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder="https://www.linkedin.com/in/..."
              className="border border-gray-300 w-full max-w-md"
            />
          </div>

          {/* Goals Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Goals</label>
            <Textarea
              name="goals"
              value={formData.goals}
              onChange={handleInputChange}
              rows={2}
              placeholder="AI-powered applications that enhance user experiences."
              className="border border-gray-300 w-full max-w-md"
            />
          </div>

          {/* Bio Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <Textarea
              name="bio"
              value={formData.bio}
              onChange={handleInputChange}
              rows={5}
              placeholder="Write your bio..."
              className="border border-gray-300 w-full max-w-md"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 pt-4 w-full max-w-md">
            <Button type="submit" className="flex-1 bg-blue-600 text-white hover:bg-blue-700">
              Save Change
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/my-profile")}
              className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>

  );
}
