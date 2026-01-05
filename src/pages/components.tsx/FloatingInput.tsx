import { Input } from "@/pages/components.tsx/input";
import { useId } from "react";

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isstar?: boolean;
}

export function FloatingInput({ label, isstar, ...props }: FloatingInputProps) {
  const id = useId();
  return (
    <div className="group relative w-full">
      <label
        htmlFor={id}
        className="absolute top-0 -translate-y-1/2 left-3 px-1 text-xs font-medium text-purple-600 pointer-events-none cursor-default z-10"
      >
        <span className="inline-flex bg-white px-1">
          {label} {isstar && <span className="text-red-500 ml-0.5">*</span>}
        </span>
      </label>
      <Input 
        id={id} 
        {...props} 
        className="h-12 border-gray-300 focus-visible:ring-purple-600 focus-visible:ring-1" 
      />
    </div>
  );
}