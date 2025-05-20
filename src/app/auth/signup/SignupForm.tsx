"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserIcon from "@/components/icons/frame";
import MailIcon from "@/components/icons/sms";
import LockIcon from "@/components/icons/lock";
import CalendarIcon from "@/components/icons/calender-svgrepo-com";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";

interface FormData {
  role: "student" | "mentor";
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  dob: { dd: string; mm: string; yyyy: string };
  pronoun: string;
  major: string;
  photo: File | null;
  goals: string;
  bio: string;
  linkedin: string;
}

export default function SignupForm() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [step, setStep] = useState<1 | 2>(1);
  const [data, setData] = useState<FormData>({
    role: "student",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: { dd: "", mm: "", yyyy: "" },
    pronoun: "",
    major: "",
    photo: null,
    goals: "",
    bio: "",
    linkedin: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    if (name.startsWith("dob.")) {
      const field = name.split(".")[1] as keyof FormData["dob"];
      setData((prev) => ({ ...prev, dob: { ...prev.dob, [field]: value } }));
    } else {
      setData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFile = (e: ChangeEvent<HTMLInputElement>) =>
    setData((prev) => ({ ...prev, photo: e.target.files?.[0] ?? null }));

  const onNext = (e: FormEvent) => {
    e.preventDefault();
    if (!data.firstName.trim()) return toast.error("First name required");
    if (!data.lastName.trim()) return toast.error("Last name required");
    if (!data.email.trim()) return toast.error("Email required");
    if (!data.password) return toast.error("Password required");
    if (data.password !== data.confirmPassword)
      return toast.error("Passwords must match");
    setStep(2);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!data.pronoun) return toast.error("Select pronoun");
    if (!data.major) return toast.error("Select major");

    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (key === "dob") {
          formData.append(
            "dob",
            `${data.dob.yyyy}-${data.dob.mm}-${data.dob.dd}`
          );
        } else if (key === "photo" && value instanceof File) {
          formData.append("photo", value);
        } else {
          formData.append(key, value as string);
        }
      });

      await axios.post("/api/signup", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      toast.success("Signed up successfully");
      router.replace("/home");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<{ message?: string }>;
        toast.error(axiosError.response?.data?.message || "Signup failed");
      } else {
        toast.error("Signup failed");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left Illustration */}
      <div className="md:w-1/2 w-full bg-blue-50 flex items-center justify-center p-6 md:p-12">
        <img
          src={
            step === 1
              ? "/assets/images/Sign up-amico 1.png"
              : "/assets/images/Sign up-rafiki 1.png"
          }
          alt="Signup Illustration"
          className="max-w-full h-auto"
        />
      </div>

      {/* Form Panel */}
      <div className="md:w-1/2 w-full flex items-start justify-center p-6 md:p-12">
        <form
          onSubmit={step === 1 ? onNext : onSubmit}
          className="w-full max-w-lg space-y-6"
        >
          <h1 className="text-3xl font-bold text-center">Sign Up</h1>
          <p className="text-gray-600 text-center">
            {step === 1
              ? "Join us today and unlock access to exclusive features. Sign up in just a few steps and start your journey with us!"
              : "Join us today for exclusive features—sign up in seconds!"}
          </p>

          {step === 1 && (
            <>
              <label className="block font-medium">I Went To</label>
              <div className="flex space-x-4">
                {(["student", "mentor"] as const).map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setData((p) => ({ ...p, role }))}
                    className={`flex-1 py-3 rounded-lg border text-center font-medium transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      data.role === role
                        ? "bg-white shadow border-none"
                        : "bg-gray-100 border-none"
                    }`}
                  >
                    {role === "student" ? "Student" : "Mentor"}
                  </button>
                ))}
              </div>

              <label className="block font-medium">First Name</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    name="firstName"
                    placeholder="First Name"
                    value={data.firstName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="relative">
                  <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    name="lastName"
                    placeholder="Last Name"
                    value={data.lastName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <label className="block font-medium">Email</label>
              <div className="relative">
                <MailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <label className="block font-medium">Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>

              <label className="block font-medium">Confirm Password</label>
              <div className="relative">
                <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={data.confirmPassword}
                  onChange={handleChange}
                  className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"

               
               />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((s) => !s)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                >
                  {showConfirmPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>

              <label className="block font-medium">Date Of Birth</label>
              <div className="grid grid-cols-3 gap-4">
                {(["dd", "mm", "yyyy"] as const).map((field) => (
                  <div key={field} className="relative">
                    <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      name={`dob.${field}`}
                      placeholder={field.toUpperCase()}
                      value={data.dob[field]}
                      onChange={handleChange}
                      className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>

              <button
                type="submit"
                className="w-full pt-3 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <label className="block font-medium">Pronoun</label>
              <select
                name="pronoun"
                value={data.pronoun}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select pronoun…</option>
                <option value="he">he</option>
                <option value="she">she</option>
                <option value="they">they</option>
              </select>

              <label className="block font-medium">Major</label>
              <select
                name="major"
                value={data.major}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select major…</option>
                <option value="software engineering">
                  software engineering
                </option>
                <option value="uxui design">uxui design</option>
                <option value="computer science">computer science</option>
              </select>

              <label className="block font-medium">Add Your Profile Photo</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="block font-medium">Goals</label>
              <input
                name="goals"
                placeholder="Goals"
                value={data.goals}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="block font-medium">Bio</label>
              <textarea
                name="bio"
                rows={3}
                placeholder="Bio"
                value={data.bio}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <label className="block font-medium">LinkedIn Profile</label>
              <input
                name="linkedin"
                placeholder="LinkedIn URL"
                value={data.linkedin}
                onChange={handleChange}
                className="w-full p-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <div className="text-sm text-gray-500">
                By clicking “Sign Up”, I agree to Terms of Service & Privacy
                Policy.
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                {loading ? "Signing…" : "Sign Up"}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}


