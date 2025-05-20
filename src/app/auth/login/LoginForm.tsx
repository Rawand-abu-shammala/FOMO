
// "use client";
// // import Image from "next/image";
// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Link from "next/link";

// import EmailIcon from "@/components/icons/sms";
// import LockIcon from "@/components/icons/lock";
// import EyeIcon from "@/components/icons/eye-slash";
// import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
// import CheckIcon from "@/components/icons/check";

// export default function LoginPage() {
//   const router = useRouter();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [remember, setRemember] = useState(false);
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!email.trim()) return toast.error("Email is required");
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) return toast.error("Please enter a valid email address");
//     if (!password) return toast.error("Password is required");
//     if (password.length < 6) return toast.error("Password must be at least 6 characters long");

//     setLoading(true);
//     try {
//       await axios.post("/api/login", { email, password, remember });
//       toast.success("Logged in successfully");
//       router.replace("/home");
//     } catch {
//       toast.error("Login failed. Please check your credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
   
//           <form onSubmit={handleSubmit} className="space-y-6">
//             {/* Email field */}
//             <div className="relative">
//               <EmailIcon
                
//                 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
//               />

//               <input
//                 type="email"
//                 placeholder="Email Address"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//             </div>

//             {/* Password field */}
//             <div className="relative">
      

//               <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />

//               <input
//                 type={showPassword ? 'text' : 'password'}
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
//               />
//               <button
//                 type="button"
//                 onClick={() => setShowPassword((s) => !s)}
//                 className="absolute top-1/2 right-3 transform -translate-y-1/2"
//               >
//                 {showPassword ? (
//                   <EyeOffIcon />
//                 ) : (
//                   <EyeIcon />
//                 )}
//               </button>
//             </div>

//             {/* Remember & Forgot */}
//             <div className="flex items-center justify-between">
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="checkbox"
//                   checked={remember}
//                   onChange={(e) => setRemember(e.target.checked)}
//                   className="sr-only"
//                 />
//                 <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center">
//                   {remember && <CheckIcon className="w-5 h-5" fill="currentColor" />}
//                 </div>
//                 <span className="text-gray-700">Remember me?</span>
//               </label>
//               <Link href="/forgot" className="text-blue-600 hover:underline text-sm">
//                 Forgot?
//               </Link>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full py-3 rounded-lg font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50 transition"
//             >
//               {loading ? 'Loading…' : 'Log In'}
//             </button>
//           </form>
 
//   );
// }





"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

import EmailIcon from "@/components/icons/sms";
import LockIcon from "@/components/icons/lock";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
import CheckIcon from "@/components/icons/check";

export default function LoginForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    // Force target to HTMLInputElement to safely access `checked`
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, remember } = form;

    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/login", { email, password, remember });
      toast.success("Logged in successfully");
      router.replace("/home");
    } catch {
      toast.error("Login failed. Please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Email */}
      <div className="relative">
        <EmailIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          name="email"
          type="email"
          placeholder="you@example.com"
          value={form.email}
          onChange={handleChange}
          className="w-full pl-10 pr-4 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Password */}
      <div className="relative">
        <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full pl-10 pr-10 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={() => setShowPassword((s) => !s)}
          className="absolute top-1/2 right-3 transform -translate-y-1/2"
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      {/* Remember & Forgot */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            name="remember"
            type="checkbox"
            checked={form.remember}
            onChange={handleChange}
            className="sr-only"
          />
          {/* <div className="w-5 h-5 border border-gray-300 rounded flex items-center justify-center">
            {form.remember && (
              <CheckIcon className="w-4 h-4 text-blue-600" fill="currentColor" />
            )}
          </div> */}
          <div
          className={`w-5 h-5 rounded flex items-center justify-center ${
            form.remember ? 'border-0' : 'border border-gray-300'
          }`}
      >
           {form.remember && (
             <CheckIcon className="w-5 h-5 text-blue-600" fill="currentColor" />
          )}
          </div>
          <span className="text-gray-700">Remember me?</span>
        </label>
        <Link href="/forgot" className="text-blue-600 hover:underline text-sm">
          Forgot?
        </Link>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
      >
        {loading ? "Loading…" : "Log In"}
      </button>
    </form>
  );
}
