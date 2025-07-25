import Image from "next/image";
import LoginForm from "./LoginForm";
import Link from 'next/link'
import Logo from '@/components/icons/logosignin'



export default function LoginPage() {
  return (
    // <div className="min-h-screen flex">
    //   <div className="hidden xl:flex flex-1 bg-blue-50 items-center justify-center p-10">
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left illustration */}
      <div className="md:w-1/2 w-full bg-blue-50 flex items-center justify-center p-6 md:p-12">
        <Image
          src="/assets/images/Login-pana 1.svg"
          alt="login"
            width={500}
          height={500}
        />
      </div>
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
     

          <div className="flex justify-center items-center space-x-2 mb-4 text-blue-500">
      <Logo className="w-22 h-22" />
      <span className="text-xl font-bold">FOMO</span>
    </div>

          <h1 className="text-2xl font-semibold text-center mb-2">Log In</h1>
          <p className="text-center text-sm text-gray-600 mb-8">
            Log in to explore expert insights, career guidance, and tech resources tailored for aspiring professionals.
          </p>
          <LoginForm />
          <p className="text-center text-sm text-gray-600 mt-6">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
         
          </p>
        </div>
      </div>
    </div>
  );
}
