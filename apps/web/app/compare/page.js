"use client";

import { useState } from "react";
import { Search, Plus, ArrowRight, Tag } from "lucide-react";

export default function CompareScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  const [items, setItems] = useState([
    {
      name: "Whole Milk",
      prices: { Kroger: 3.49, Walmart: 3.22, Costco: 3.35 },
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newItemName, setNewItemName] = useState("");
  const [showAddForm, setShowAddForm] = useState(true);
  const [isFetchingPrice, setIsFetchingPrice] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [wishlist, setWishlist] = useState([]);

  // Mock data for demonstration
  const stores = [
    { name: "Kroger", color: "border-blue-600" },
    { name: "Walmart", color: "border-orange-500" },
    { name: "Costco", color: "border-green-600" },
  ];

  const addItemToList = (item) => {
    setItems((prev) => {
      const next = [...prev, item];
      setSelectedIndex(next.length - 1);
      return next;
    });
  };

  const handleLookupItem = async (e) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    setIsFetchingPrice(true);
    setLookupError("");

    try {
      const response = await fetch(`/api/price?item=${encodeURIComponent(newItemName.trim())}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Price lookup failed");
      }

      addItemToList({
        name: data.itemName,
        prices: {
          Kroger: data.prices.Kroger || 0,
          Walmart: data.prices.Walmart || 0,
          Costco: data.prices.Costco || 0,
        },
      });

      setNewItemName("");
    } catch (error) {
      setLookupError(error.message || "Unable to fetch prices for that item.");
    } finally {
      setIsFetchingPrice(false);
    }
  };

  const handleRemoveItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
    setSelectedIndex((current) => {
      if (indexToRemove === current) return 0;
      if (indexToRemove < current) return current - 1;
      return current;
    });
  };

  const selectedItem = items[selectedIndex] || items[0];

  const storePrices = stores
    .map((store) => ({
      name: store.name,
      price: selectedItem.prices[store.name] || 0,
    }))
    .filter((item) => item.price > 0);

  const cheapestStore = storePrices.reduce(
    (best, current) => (current.price < best.price ? current : best),
    storePrices[0] || { name: "", price: 0 }
  );

  const mostExpensiveStore = storePrices.reduce(
    (best, current) => (current.price > best.price ? current : best),
    storePrices[0] || { name: "", price: 0 }
  );

  const cheapestPrice = storePrices.length ? Math.min(...storePrices.map((item) => item.price)) : 0;
  const cheapestStoreNames = storePrices
    .filter((item) => item.price === cheapestPrice)
    .map((item) => item.name);

  const savingsAmount = Math.max(0, mostExpensiveStore.price - cheapestStore.price);
  const savingsText = storePrices.length > 1
    ? `Save $${savingsAmount.toFixed(2)} by shopping at ${cheapestStore.name}`
    : "Add more store prices to see savings.";

  const handleAddCheapestToWishlist = () => {
    if (!selectedItem || storePrices.length === 0) return;

    const itemId = `${selectedItem.name}-${cheapestPrice}-${cheapestStoreNames.join("-")}`;
    const wishlistItem = {
      id: itemId,
      name: selectedItem.name,
      price: cheapestPrice,
      stores: cheapestStoreNames,
    };

    setWishlist((prev) => {
      if (prev.some((item) => item.id === wishlistItem.id)) return prev;
      return [...prev, wishlistItem];
    });
  };

  const handleRemoveWishlistItem = (itemId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== itemId));
  };

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

        {/* Add Item Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 border-b border-gray-50">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Compare Store Items</h2>
                <p className="text-sm text-gray-500">Type an item name and lookup current store pricing automatically.</p>
              </div>
              <button
                type="button"
                onClick={() => setShowAddForm((prev) => !prev)}
                className="inline-flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition"
              >
                <Plus className="w-5 h-5" />
                {showAddForm ? "Hide add form" : "Add more items"}
              </button>
            </div>
            {showAddForm && (
              <form onSubmit={handleLookupItem} className="grid grid-cols-1 gap-3 w-full md:w-auto md:grid-cols-[1.5fr_1fr] mt-4">
                <input
                  type="text"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                  placeholder="Item name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 text-black"
                />
                <div className="grid grid-cols-1 gap-3 md:col-span-2">
                  <button
                    type="submit"
                    className="w-full px-5 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition disabled:opacity-60"
                    disabled={isFetchingPrice}
                  >
                    {isFetchingPrice ? "Looking up prices..." : "Lookup prices automatically"}
                  </button>
                  {lookupError && (
                    <p className="text-sm text-red-600">{lookupError}</p>
                  )}
                </div>
              </form>
            )}
          </div>
            {items.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((item, idx) => (
                  <div
                    key={`${item.name}-${idx}`}
                    className={`group relative inline-flex items-center gap-2 text-sm px-3 py-1 rounded-full transition ${selectedIndex === idx ? "bg-pink-100 text-pink-700" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(idx)}
                      className="font-medium"
                    >
                      {item.name}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleRemoveItem(idx)}
                      className="hidden group-hover:inline-flex items-center justify-center rounded-full bg-red-500 text-white w-5 h-5 text-xs font-bold"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

          <div className="p-4 border-b border-gray-50 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">{selectedItem.name || "Item"}</span>
            </div>
            <button
              type="button"
              onClick={() => setShowAddForm((prev) => !prev)}
              className="text-pink-600 p-1 hover:bg-pink-50 rounded-full transition"
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
          {/* Store Comparison Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {stores.map((store) => (
              <div key={store.name} className="p-6 flex flex-col items-center text-center">
                <span className={`text-xs font-bold uppercase tracking-wider mb-2 px-3 py-1 rounded-full border ${store.color} text-black`}>
                  {store.name}
                </span>
                <div className="text-3xl font-bold text-gray-900">${selectedItem.prices[store.name]?.toFixed(2) ?? "—"}</div>
                <button className="flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline">
                  View Aisle <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Savings Insight */}
        <div className="bg-pink-600 rounded-2xl p-4 text-white flex flex-col gap-4 shadow-lg shadow-pink-200">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs opacity-90">Potential Savings</p>
              <p className="font-bold text-lg">{savingsText}</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-2xl font-black">${savingsAmount.toFixed(2)}</div>
            <button
              type="button"
              onClick={handleAddCheapestToWishlist}
              disabled={storePrices.length === 0}
              className="w-full sm:w-auto px-4 py-3 bg-white text-pink-600 rounded-2xl font-semibold hover:bg-white/90 transition disabled:opacity-50"
            >
              Add cheapest price to wishlist
            </button>
          </div>
        </div>

        {wishlist.length > 0 && (
          <section className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">Wishlist</h2>
                <p className="text-sm text-gray-500">Saved cheapest item prices and the stores that carry them.</p>
              </div>
            </div>
            <ul className="space-y-3">
              {wishlist.map((entry) => (
                <li key={entry.id} className="rounded-2xl border border-gray-100 p-4 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div>
                    <p className="font-semibold text-gray-900">{entry.name}</p>
                    <p className="text-sm text-gray-600">
                      ${entry.price.toFixed(2)} belongs to {entry.stores.join(", ")}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveWishlistItem(entry.id)}
                    className="self-start sm:self-center rounded-full border border-gray-200 px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </section>
        )}

      </main>
    </div>
  );
}
