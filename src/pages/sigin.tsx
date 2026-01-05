"use client"
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { FloatingInput } from "@/pages/components.tsx/FloatingInput";

const Sigin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  
  const isButtonDisabled = !email.trim() || !password.trim();
  const navigate=useNavigate()

  const handlesubmit=(e:any)=>{
    e.preventDefault(),
    console.log({
        "email":email,
        "password":password
    })
    navigate('/settings'); 
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden min-h-[600px] flex flex-col">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Signin to your</h1>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">PopX account</h1>

        <p className="text-gray-500 text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="space-y-6 mt-10" onSubmit={handlesubmit}>
          <FloatingInput
            label="Email Address"
            isstar={true}
            placeholder="Enter email address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FloatingInput
            label="Password"
            isstar={true}
            placeholder="Enter password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            disabled={isButtonDisabled}
            className={`w-full font-medium py-3.5 rounded-md transition-colors  ${
              isButtonDisabled 
                ? "bg-gray-300 cursor-not-allowed text-gray-500" 
                : "bg-purple-600 hover:bg-purple-700 text-white"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sigin;