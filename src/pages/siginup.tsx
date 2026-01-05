"use client"

import { useState } from "react";
import { FloatingInput } from "@/pages/components.tsx/FloatingInput";

export default function SignupPage() {
  
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
    isAgency: "yes", 
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden min-h-[600px] flex flex-col">
        
        <div className="flex flex-col gap-2 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            Create your<br />PopX account
          </h1>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <FloatingInput 
            label="Full Name" 
            name="fullName" 
            isstar={true} 
            value={formData.fullName} 
            onChange={handleChange} 
            placeholder="Marry Doe" 
          />
          
          <FloatingInput 
            label="Phone number" 
            name="phoneNumber" 
            isstar={true} 
            value={formData.phoneNumber} 
            onChange={handleChange} 
            placeholder="123456789" 
            type="tel" 
          />
          
          <FloatingInput 
            label="Email address" 
            name="email" 
            isstar={true} 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="alix@gmail.com" 
            type="email" 
          />
          
          <FloatingInput 
            label="Password" 
            name="password" 
            isstar={true} 
            value={formData.password} 
            onChange={handleChange} 
            placeholder="******" 
            type="password" 
          />
          
          <FloatingInput 
            label="Company name" 
            name="companyName" 
            isstar={false} 
            value={formData.companyName} 
            onChange={handleChange} 
            placeholder="Abc.pvt.lmt" 
          />

          <div className="pt-2">
            <label className="block text-sm font-medium text-gray-900 mb-3">
              Are you an Agency?*
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === "yes"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-purple-600"
                />
                <span className="text-sm text-gray-900">Yes</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === "no"}
                  onChange={handleChange}
                  className="w-4 h-4 accent-purple-600"
                />
                <span className="text-sm text-gray-900">No</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3.5 rounded-lg transition-colors mt-auto"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}