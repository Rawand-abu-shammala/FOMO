"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function SettingsPage() {
  const router = useRouter();
 // start data; In its production it is brought from API
  const userInfo = {
    name: "Rawand Abu Shammala",
    role: "Student",
    birthday: "May 02, 2002",
    email: "rawand.johnson@example.com",
  };

  const handleLogout = () => {
    console.log("Logging out...");
    router.push("/login");
  };

  const handleDeleteAccount = () => {
    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      console.log("Deleting account...");
      router.push("/");
    }
  };

  return (
<>
      <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6">

     {/* <div className="text-sm text-gray-500 flex items-center mb-6 pl-6"> */}
          <Link href="/my-profile" className="hover:underline">
            My Profile
          </Link>
          <ArrowRight className="w-4 h-4 mx-2 text-gray-400" />
          <span className="text-gray-800 font-medium">Settings</span>
        </div>

    
    <div className="min-h-screen">
      <div className="w-full py-10 pl-6">

       
      <div className="container mx-auto px-4 text-sm text-gray-500 mb-4 space-y-5 text-gray-700">

        {/* <div className="space-y-5 text-gray-700"> */}
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Name</span>
            <span className="ml-2">{userInfo.name}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Role</span>
            <span className="ml-2">{userInfo.role}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Birthday</span>
            <span className="ml-2">{userInfo.birthday}</span>
          </div>
          <div className="flex items-center">
            <span className="font-medium text-gray-900">Email</span>
            <span className="ml-2">{userInfo.email}</span>
          </div>
        </div>

        {/* <div className="container mx-auto px-4 py-8 text-sm text-gray-500 mb-4 flex items-center pl-6"> */}


        <div className="container mx-auto mt-10 flex space-x-4 pl-3">
          <Button
            onClick={handleLogout}
            className="w-36 py-3 rounded-md bg-blue-600 hover:bg-blue-700 text-white cursor-pointer"
          >
            Log Out
          </Button>
          <Button
            variant="outline"
            onClick={handleDeleteAccount}
            className="w-36 py-3 rounded-md border-red-500 text-red-500 hover:bg-red-50 cursor-pointer"
          >
            delete account
          </Button>
        </div>
      </div>
    </div>
    </>
  );
}


