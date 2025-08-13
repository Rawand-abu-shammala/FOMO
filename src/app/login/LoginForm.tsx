"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
// import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

import EmailIcon from "@/components/icons/sms";
import LockIcon from "@/components/icons/lock";
import EyeIcon from "@/components/icons/eye-slash";
import EyeOffIcon from "@/components/icons/eye-svgrepo-com";
import CheckIcon from "@/components/icons/check";

export default function LoginForm() {
  // ensures useRouter works in a Client Component
  const router = useRouter();

  // form state
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  // toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // loading state
  const [loading, setLoading] = useState(false);

  // update form fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // on login button click
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // const { email, password, remember } = form;
    const { email, password } = form;

    // validate fields
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email");
      return;
    }
    if (!password) {
      toast.error("Password is required");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);

    try {
      // API request for login
      await 
      // axios.post("/api/login", { email, password, remember });
      toast.success("Logged in successfully");

      // navigate to Home page
      router.push("/home"); // or "/" depending on actual route
    } catch (err) {
      console.error(err);
      toast.error("Login failed. Please check your credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* email field */}
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

      {/* password field */}
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
          className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer"
        >
          {showPassword ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      {/* remember me option and forgot password link */}
      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2">
          <input
            name="remember"
            type="checkbox"
            checked={form.remember}
            onChange={handleChange}
            className="sr-only"
          />
          <div
            className={`w-5 h-5 rounded flex items-center justify-center ${
              form.remember ? "border-0" : "border border-gray-300"
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

      {/* submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 transition cursor-pointer"
      >
        {loading ? "Loading…" : "Login"}
      </button>
    </form>
  );
}
