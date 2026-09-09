"use client";

import { useState, type ChangeEvent, type InputHTMLAttributes } from "react";

function formatBRPhone(raw: string) {
  const digits = raw.replace(/\D/g, "").slice(0, 11);

  if (digits.length === 0) return "";
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
}

type PhoneMaskInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type" | "value" | "onChange">;

export default function PhoneMaskInput(props: PhoneMaskInputProps) {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(formatBRPhone(e.target.value));
  };

  return (
    <input
      {...props}
      type="tel"
      inputMode="numeric"
      autoComplete="tel"
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder ?? "(71) 99999-9999"}
    />
  );
}
