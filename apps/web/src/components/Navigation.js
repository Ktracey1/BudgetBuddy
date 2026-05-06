"use client";

import Link from "next/link";
import { ShoppingCart, User, LogOut, Menu } from "lucide-react";
import { useState } from "react";

// Mocking session for now to allow the app to run without full Auth setup
const session = null;
const status = "unauthenticated";
const signIn = () => console.log("Sign In clicked");
const signOut = () => console.log("Sign Out clicked");

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo & Brand */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-pink-600 p-1.5 rounded-lg">
                <ShoppingCart className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold text-gray-900 tracking-tight">
                Budget<span className="text-pink-600">Buddy</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/compare" className="text-gray-600 hover:text-pink-600 font-medium transition">
              Compare Stores
            </Link>

            {status === "authenticated" ? (
              <div className="flex items-center gap-4 pl-4 border-l border-gray-200">
                <div className="flex items-center gap-2">
                  <User className="w-8 h-8 p-1 bg-gray-100 rounded-full text-gray-600" />
                  <span className="text-sm font-semibold text-gray-700">
                    User
                  </span>
                </div>
                <button 
                  onClick={() => signOut()}
                  className="text-gray-400 hover:text-red-500 transition"
                  title="Sign Out"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-pink-600 text-white px-5 py-2 rounded-full font-medium hover:bg-pink-700 transition shadow-sm"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-b border-gray-200 px-4 py-4 space-y-4">
          <Link href="/compare" className="block text-gray-700 font-medium">Compare Stores</Link>
          <hr />
          {status === "authenticated" ? (
            <button onClick={() => signOut()} className="block text-red-600 font-medium">Sign Out</button>
          ) : (
            <Link href="/login" className="block text-pink-600 font-medium">Sign In</Link>
          )}
        </div>
      )}
    </nav>
  );
}
