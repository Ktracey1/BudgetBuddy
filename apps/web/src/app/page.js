import Link from "next/link";
import { ShoppingCart, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-64px)] flex-col items-center justify-center p-6 bg-white">
      <div className="max-w-3xl text-center space-y-8">
        <div className="inline-flex items-center justify-center p-4 bg-pink-100 rounded-2xl text-pink-600 mb-4">
          <ShoppingCart className="w-12 h-12" />
        </div>
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
          Shop Smarter with <span className="text-pink-600">BudgetBuddy</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-xl mx-auto">
          Compare prices across your favorite local stores in real-time and save more on every grocery run.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Link 
            href="/compare" 
            className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition shadow-lg shadow-pink-200 flex items-center gap-2 group"
          >
            Start Comparing <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </div>
    </main>
  );
}
