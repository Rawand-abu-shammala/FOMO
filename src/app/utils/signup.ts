// src/signup.ts
// export type Pronoun = '' | 'he' | 'she' | 'they'
// export type Major = '' | 'software engineering' | 'uxui design' | 'computer science'

// export interface StepTwoData {
//   pronoun: Pronoun
//   major: Major
//   photo: File | null
//   goals: string
//   bio: string
//   linkedin: string
//   experience: string
//   specialties: string
  

// }

export interface StepOneProps {
  data: StepOneData
  onChange: (field: keyof StepOneData, value: string) => void
}


export interface StepTwoData {
  pronoun: '' | 'he' | 'she' | 'they';
  major: '' | 'software engineering' | 'uxui design' | 'computer science';
  photo: File | null;
  goals: string;
  // ← NEW fields
  bio: string;
  linkedin: string;
}

// src/utils/signup.ts

// دور المستخدم المدعوم
export type Role = 'student' | 'mentor'

// الشكل الخاص بالخطوة الأولى
export interface StepOneData {
  role: Role
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  dob: {
    dd: string
    mm: string
    yyyy: string
  }
}

interface DOB { dd: string; mm: string; yyyy: string }


// Combined signup data for all steps
export interface SignupData extends StepTwoData {
  role: Role
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  dob: DOB
  experience: string
  specialties: string
}

// Add StepThree types
export interface StepThreeData {
  tracks: string
  skills: string
  welcome: string  // welcome statement
  experienceYears: string
  termsAccepted: boolean
    bio: string
  experience: string
  specialties: string
  loading: boolean 
}








// utils/signup.ts
export type Pronoun = '' | 'he' | 'she' | 'they'
export type Major = '' | 'software engineering' | 'uxui design' | 'computer science'

export interface StepOneData {
  role: 'student' | 'mentor'
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  dob: { dd: string; mm: string; yyyy: string }
}

export interface StepTwoData {
  pronoun: Pronoun
  major: Major
  photo: File | null
  goals: string
  bio: string
  linkedin: string
  // mentor‑only extras if you moved them here:
  experience?: string
  specialties?: string
}

/**
 * For Step 3 (mentor only). Matches your StepThreeForm props:
 */
export interface StepThreeData {
  tracks: string
  skills: string
  welcome: string
  experienceYears: string
  linkedin: string
  termsAccepted: boolean
}












// ثم يمكنك استيراده في صفحة التسجيل:
// import type { StepOneData } from '../../utils/signup'


// interface DOB { dd: string; mm: string; yyyy: string }

// type Role = 'student' | 'mentor'

// export interface SignupData {
//   role: Role
//   firstName: string
//   lastName: string
//   email: string
//   password: string
//   confirmPassword: string
//   dob: DOB
//   pronoun: string
//   major: string
//   photo: File | null
//   goals: string
//   bio: string
//   linkedin: string
//   experience: string
//   specialties: string
// }