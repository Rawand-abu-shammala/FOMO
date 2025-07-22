import React, { useState } from 'react'

/**
 * Props for TextInput component
 */
interface TextInputProps {
  /** input name attribute */
  name: string
  /** placeholder/label text */
  label: string
  /** input type, e.g. "text", "email" */
  type?: string
  /** icon class identifier (e.g. themed CSS class) */
  icon?: string
  /** current input value */
  value: string
  /** change handler receiving field name and new value */
  onChange: (name: string, value: string) => void
}

export function TextInput({
  name,
  label,
  type = 'text',
  icon,
  value,
  onChange,
}: TextInputProps) {
  return (
    <div className="relative">
      {icon && (
        <span
          className={`icon-${icon} absolute left-3 top-1/2 -translate-y-1/2 text-gray-400`}
        />
      )}
      <input
        name={name}
        type={type}
        placeholder={label}
        value={value}
        onChange={e => onChange(name, e.target.value)}
        // className="w-full pl-10 p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
        className="w-full pl-10 pr-3 py-3 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  )
}

/**
 * Props for PasswordInput component
 */
interface PasswordInputProps {
  /** input name attribute */
  name: string
  /** placeholder/label text */
  label: string
  /** current password value */
  value: string
  /** change handler receiving field name and new value */
  onChange: (name: string, value: string) => void
}

export function PasswordInput({
  name,
  label,
  value,
  onChange,
}: PasswordInputProps) {
  const [show, setShow] = useState(false)
  return (
    <div className="relative">
      <input
        name={name}
        type={show ? 'text' : 'password'}
        placeholder={label}
        value={value}
        onChange={e => onChange(name, e.target.value)}
        className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="button"
        onClick={() => setShow(s => !s)}
        className="absolute right-3 top-1/2 -translate-y-1/2"
      >
        {show ? 'Hide' : 'Show'}
      </button>
    </div>
  )
}

/**
 * Shape of Date of Birth fields
 */
interface DOB {
  dd: string
  mm: string
  yyyy: string
}

/**
 * Props for DateOfBirth component
 */
interface DateOfBirthProps {
  /** object holding day, month, year */
  dob: DOB
  /** change handler receiving field key (e.g. "dob.dd") and new value */
  onChange: (field: string, value: string) => void
}

export function DateOfBirth({
  dob,
  onChange,
}: DateOfBirthProps) {
  const fields: (keyof DOB)[] = ['dd', 'mm', 'yyyy']
  return (
    <div className="grid grid-cols-3 gap-4">
      {fields.map(f => (
        <input
          key={f}
          name={`dob.${f}`}
          placeholder={f.toUpperCase()}
          value={dob[f]}
          onChange={e => onChange(`dob.${f}`, e.target.value)}
          className="p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      ))}
    </div>
  )
}






