"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, Mail, User, Loader2 } from "lucide-react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [role, setRole] = useState("parent");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const getInputLabel = () => {
    if (role === "student") return "Roll Number / Admission No.";
    if (role === "teacher") return "Employee ID";
    return "Registered Email";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res?.error) {
        setError(res.error === "CredentialsSignin" ? "Invalid email or password" : res.error);
        setIsLoading(false);
      } else {
        // Login successful, dashboard par bhejein
        window.location.href = "/dashboard";
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      
      {/* Left Side - Image/Branding (Hidden on Mobile) */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a1128] items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
          alt="Campus" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="relative z-10 text-center px-12">
          <h1 className="text-4xl font-playfair font-bold text-white mb-6">Welcome to the<br/>Montfort Portal</h1>
          <p className="text-gray-300 text-lg">Access your academic progress, attendance, and fee details securely.</p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
          
          <div className="text-center">
            <h2 className="text-3xl font-playfair font-bold text-[#0a1128]">Portal Login</h2>
            <p className="mt-2 text-sm text-gray-500">
              Please select your role to continue.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-md text-sm text-center border border-red-100">
              {error}
            </div>
          )}

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            
            {/* Interactive Role Selection Tabs */}
            <div className="flex p-1.5 space-x-1 bg-gray-100 rounded-xl">
              <button 
                type="button" 
                onClick={() => setRole("parent")}
                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "parent" ? "bg-white text-[#0a1128] shadow-md" : "text-gray-500 hover:text-gray-800"}`}
              >
                Parent
              </button>
              <button 
                type="button" 
                onClick={() => setRole("student")}
                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "student" ? "bg-white text-[#0a1128] shadow-md" : "text-gray-500 hover:text-gray-800"}`}
              >
                Student
              </button>
              <button 
                type="button" 
                onClick={() => setRole("teacher")}
                className={`w-full py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${role === "teacher" ? "bg-white text-[#0a1128] shadow-md" : "text-gray-500 hover:text-gray-800"}`}
              >
                Teacher
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">{getInputLabel()}</label>
                <div className="relative">
                  {role === "parent" ? (
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  ) : (
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  )}
                  <input
                    type="text"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder={role === "parent" ? "parent@example.com" : role === "student" ? "e.g. 2024-001" : "e.g. EMP-102"}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
                    placeholder="••••••••"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input id="remember-me" type="checkbox" className="h-4 w-4 text-[#0a1128] focus:ring-[#d4af37] border-gray-300 rounded" />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">Remember me</label>
              </div>
              <a href="#" className="text-sm font-medium text-[#0a1128] hover:text-[#d4af37] transition-colors">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3.5 px-4 border border-transparent text-sm font-bold rounded-lg text-white bg-[#0a1128] hover:bg-[#d4af37] hover:text-[#0a1128] transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" /> Signing In...
                </>
              ) : (
                `Sign In as ${role.charAt(0).toUpperCase() + role.slice(1)}`
              )}
            </button>
          </form>
          
          <div className="text-center text-sm text-gray-500 mt-6 border-t border-gray-100 pt-6">
            New user? <Link href="/contact" className="font-bold text-[#0a1128] hover:text-[#d4af37]">Contact Admin</Link> for credentials.
          </div>
        </div>
      </div>

    </div>
  );
}