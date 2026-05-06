"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ShoppingCart, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    // Mock authentication - test credentials
    if (username === "testuser" && password === "test123") {
      setMessageType("success");
      setMessage("Login successful! Redirecting...");
      setTimeout(() => {
        router.push("/compare");
      }, 800);
    } else {
      setMessageType("error");
      setMessage("Invalid credentials. Try username: 'testuser' and password: 'test123'");
    }

    setTimeout(() => setIsLoading(false), 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-pink-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-pink-600 rounded-2xl text-white mb-4 shadow-lg shadow-pink-200">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <h1 className="text-4xl font-black text-gray-900 tracking-tight italic">Sign In</h1>
          <p className="text-gray-500 mt-2">Welcome back to BudgetBuddy</p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          {message && (
            <div className={`mb-4 p-3 rounded-lg text-sm font-medium ${
              messageType === "success" 
                ? "bg-green-100 text-green-700" 
                : "bg-red-100 text-red-700"
            }`}>
              {message}
            </div>
          )}

          <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg text-xs text-blue-700">
            <strong>Test Credentials:</strong> Username: <code>testuser</code> | Password: <code>test123</code>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Username:</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  name="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Password:</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  name="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-lg text-black placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-pink-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? "Logging in..." : "Login"} {!isLoading && <ArrowRight className="w-5 h-5" />}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-sm">
              New here?{" "}
              <Link href="#" className="text-pink-600 font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}