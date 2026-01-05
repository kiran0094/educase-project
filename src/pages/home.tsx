export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-sm border border-gray-200 p-8 relative overflow-hidden min-h-[600px] flex flex-col">               
        <div className="mt-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome to PopX</h1>
          <p className="text-gray-500 text-sm mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>         
          <div className="space-y-3">
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
             <a href="/signup">             
              Create Account
             </a>
            </button>
            <button className="w-full bg-purple-200 hover:bg-purple-300 text-purple-900 font-medium py-3 px-4 rounded-lg transition-colors">
              <a href="/signin">
              Already Registered? Login
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
