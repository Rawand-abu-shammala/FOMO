import React from "react";
import Image from "next/image";
import Link from "next/link";
import EditIcon from "@/components/icons/edit";
import SettingsIcon from "@/components/icons/setting";

export default function ProfilePage() {
// User data
  const user = {
    name: "Rawand Abu Shammala",
    major: "Software Engineering",
    goals: "To develop innovative AI-powered applications that enhance user experiences.",
    bio: `Passionate software engineer with a strong background in full-stack development and AI-driven solutions. She enjoys building scalable and user-friendly applications that integrate cutting-edge AI technologies to enhance digital experiences. With expertise in JavaScript, Python, and cloud computing, she constantly explores new ways to optimize software performance and usability. Always eager to learn, innovate, and contribute, Sarah actively participates in tech communities, hackathons, and open-source projects to stay ahead in the ever-evolving world of technology.`,
    avatarUrl: "/assets/images/profile-avatar2.svg",
  };

  return (
    <main className="w-11/12 mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 lg:space-x-32">
        <div className="w-full lg:w-2/3">
          <div className="space-y-6">
            <p>
              <span className="font-medium">Name:</span>{" "}
              <span className="text-gray-700">{user.name}</span>
            </p>
            <p>
              <span className="font-medium">Major:</span>{" "}
              <span className="text-gray-700">{user.major}</span>
            </p>
            <p>
              <span className="font-medium">Goals:</span>{" "}
              <span className="text-gray-700">{user.goals}</span>
            </p>
            <div>
              <span className="font-medium">Bio:</span>
              <p className="mt-1 text-gray-700 whitespace-pre-line">{user.bio}</p>
            </div>
          </div>
      
           <div className="flex space-x-4 pt-6">
              <Link href="/my-profile/settings">
                <SettingsIcon className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </Link>
              <Link href="/my-profile/edit">
               <EditIcon className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              </Link>
            </div>
        </div>

        <div className="w-full lg:w-1/3">
          <Image
            src={user.avatarUrl}
            alt="Avatar"
            layout="responsive"
            width={300}
            height={400}
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
