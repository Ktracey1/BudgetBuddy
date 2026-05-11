"use client";

import { useState } from "react";
import { ShoppingCart, Lock, User, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Mock login logic
    console.log("Form submitted");
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

        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                label="Username:"
                name="username"
                placeholder="Enter username"
                className="pl-11"
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-[42px] -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
              <Input
                label="Password:"
                name="password"
                type="password"
                placeholder="••••••••"
                className="pl-11"
                required
              />
            </div>

            <Button
              type="submit"
              className="w-full py-4 text-lg"
              isLoading={isLoading}
            >
              Login <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-600 text-sm">
              New here?{" "}
              <Link href="#" className="text-pink-600 font-bold hover:underline">
                Create an account
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}