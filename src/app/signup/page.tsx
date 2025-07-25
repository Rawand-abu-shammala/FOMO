// app/signup/page.tsx
import { redirect } from "next/navigation";

export default function SignupPage() {
  // Server-side redirect to /signup/student without client hooks
  redirect("/signup/student");
}
