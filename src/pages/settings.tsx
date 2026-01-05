"use client"
import { useState } from "react"
import { Camera } from "lucide-react"

export default function SettingsPage() {
    const [previewImage, setPreviewImage] = useState<string>("/job.png")

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreviewImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }
  return (
    <div className="min-h-screen flex justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border min-h-3/4 border-gray-200 p-8">
    <div className="mb-auto">
        <div className="shadow-2xl">
        <h1 className="text-xl font-semibold text-gray-900 mb-6">Account Settings</h1>
        </div>        
        <div className="flex items-start gap-4 mb-6">        
          <div className="relative">
            <img
              src={previewImage}
              alt="Profile"
              className="w-16 h-16 rounded-full object-cover"
              />
            <label
              htmlFor="profile-upload"
              className="absolute bottom-0 right-0 w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors"
              >
              <Camera className="w-3.5 h-3.5 text-white" />
            </label>
            <input type="file" id="profile-upload" accept="image/*" onChange={handleImageChange} className="hidden" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-gray-900">Marry Doe</h2>
            <p className="text-sm text-gray-800">Marry@Gmail.com</p>
          </div>
        </div>
        <p className="text-sm text-gray-800 leading-relaxed">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>
     </div>        
      </div>
    </div>
  )
}