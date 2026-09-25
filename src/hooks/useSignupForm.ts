"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import type { Role, StepOneData, StepThreeData, StepTwoData } from "@/app/utils/signup";

interface UseSignupFormOptions {
  initialRole: Role;
  onSwitchRole: (role: Role) => void;
}

export function useSignupForm({
  initialRole,
  onSwitchRole,
}: UseSignupFormOptions) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [loading, setLoading] = useState(false);
  const [stepOneData, setStepOneData] = useState<StepOneData>({
    role: initialRole,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: { dd: "", mm: "", yyyy: "" },
  });
  const [stepTwoData, setStepTwoData] = useState<StepTwoData>({
    pronoun: "",
    major: "",
    photo: null,
    goals: "",
    bio: "",
    linkedin: "",
    experience: "",
    specialties: "",
  });
  const [stepThreeData, setStepThreeData] = useState<StepThreeData>({
    tracks: "",
    skills: "",
    welcome: "",
    experienceYears: "",
    linkedin: "",
    termsAccepted: false,
    bio: "",
    experience: "",
    specialties: "",
    loading: false,
  });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (step === 3 && !stepThreeData.termsAccepted) {
      return toast.error("Accept terms");
    }

    setLoading(true);
    try {
      const formData = new FormData();
      const dateOfBirth = stepOneData.dob;
      formData.append("dob", `${dateOfBirth.yyyy}-${dateOfBirth.mm}-${dateOfBirth.dd}`);
      Object.entries(stepOneData).forEach(([key, value]) => {
        if (key !== "dob") formData.append(key, String(value));
      });
      Object.entries(stepTwoData).forEach(([key, value]) => {
        if (key === "photo" && value instanceof File) formData.append("photo", value);
        else formData.append(key, String(value));
      });
      if (step === 3) {
        Object.entries(stepThreeData).forEach(([key, value]) =>
          formData.append(key, String(value))
        );
      }

      await fetch("/api/signup", { method: "POST", body: formData });
      toast.success("Signed up successfully");

      const roleToUse = stepOneData.role || initialRole || "student";
      document.cookie = `userRole=${roleToUse}; path=/; max-age=${60 * 60 * 24 * 30}`;
      router.push(`/home/${roleToUse}`);
    } catch (error) {
      console.error(error);
      toast.error("Signup failed");
    } finally {
      setLoading(false);
    }
  };

  const handleNext = (event: FormEvent) => {
    event.preventDefault();
    if (!stepOneData.firstName.trim()) return toast.error("First name required");
    if (!stepOneData.lastName.trim()) return toast.error("Last name required");
    if (!/\S+@\S+\.\S+/.test(stepOneData.email)) return toast.error("Valid email required");
    if (stepOneData.password.length < 6) return toast.error("Password must be >=6 chars");
    if (stepOneData.password !== stepOneData.confirmPassword) {
      return toast.error("Passwords must match");
    }
    setStep(2);
  };

  const handleContinue = (event: FormEvent) => {
    event.preventDefault();
    if (!stepTwoData.pronoun) return toast.error("Select pronoun");
    if (!stepTwoData.major) return toast.error("Select major");

    if (stepOneData.role === "mentor") {
      setStep(3);
    } else {
      handleSubmit(event);
    }
  };

  const handleStepOneChange = (
    field: keyof StepOneData | `dob.${keyof StepOneData["dob"]}`,
    value: string
  ) => {
    if (field === "role") {
      const role = value as Role;
      onSwitchRole(role);
      setStepOneData((currentData) => ({ ...currentData, role }));
      return;
    }

    if (field.startsWith("dob.")) {
      const dateField = field.split(".")[1] as keyof StepOneData["dob"];
      setStepOneData((currentData) => ({
        ...currentData,
        dob: { ...currentData.dob, [dateField]: value },
      }));
      return;
    }

    setStepOneData((currentData) => ({ ...currentData, [field]: value }));
  };

  const handleStepTwoChange = <K extends keyof StepTwoData>(
    field: K,
    value: StepTwoData[K]
  ) => {
    setStepTwoData((currentData) => ({ ...currentData, [field]: value }));
  };

  const handleStepThreeChange = (field: keyof StepThreeData, value: string) => {
    setStepThreeData((currentData) => ({ ...currentData, [field]: value }));
  };

  return {
    step,
    loading,
    stepOneData,
    stepTwoData,
    stepThreeData,
    handleNext,
    handleContinue,
    handleSubmit,
    handleStepOneChange,
    handleStepTwoChange,
    handleStepThreeChange,
  };
}
