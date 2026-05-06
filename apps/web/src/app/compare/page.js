"use client";

import { useState } from "react";
import { Search, Plus, ArrowRight, Tag } from "lucide-react";

export default function CompareScreen() {
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data for demonstration
  const stores = [
    { name: "Kroger", price: 3.49, unit: "1 gal", inStock: true, color: "border-blue-600" },
    { name: "Walmart", price: 3.22, unit: "1 gal", inStock: true, color: "border-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header Section */}
      <header className="bg-white p-6 shadow-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-800">Compare Prices</h1>
          <p className="text-gray-500 text-sm">Find the best deals across your local stores.</p>

          {/* Search Bar */}
          <div className="mt-6 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for milk, eggs, bread..."
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="p-4 max-w-4xl mx-auto space-y-6 mt-6">

        {/* Results Card */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Whole Milk</span>
              <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">Dairy</span>
            </div>
            <button className="text-pink-600 p-1 hover:bg-pink-50 rounded-full transition">
              <Plus className="w-6 h-6" />
            </button>
          </div>

          {/* Store Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stores.map((store) => (
              <div key={store.name} className="p-6 flex flex-col items-center text-center">
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full border ${store.color}`}>
                  {store.name}
                </span>
                <div className="text-3xl font-bold text-gray-900">${store.price}</div>
                <div className="text-gray-400 text-xs mb-4">{store.unit}</div>
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                  View Aisle <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Savings Insight */}
        <div className="bg-pink-600 rounded-2xl p-4 text-white flex items-center justify-between shadow-lg shadow-pink-200">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs opacity-90">Potential Savings</p>
              <p className="font-bold text-lg">Walmart is cheaper today</p>
            </div>
          </div>
          <div className="text-2xl font-black">-$0.27</div>
        </div>

      </main>
    </div>
  );
}
