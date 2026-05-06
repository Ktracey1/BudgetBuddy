import { apiClient } from "./apiClient.ts";

/**
 * Grocery service for managing store prices and product comparisons.
 */
export const groceryService = {
  // Fetch all available stores
  getStores: async () => {
    return apiClient.get("/stores");
  },

  // Fetch products from a specific store
  getStoreProducts: async (storeId) => {
    return apiClient.get(`/stores/${storeId}/products`);
  },

  // Fetch current prices for an item by name from the backend price lookup API
  getPricesByItemName: async (itemName) => {
    return apiClient.get(`/price?item=${encodeURIComponent(itemName)}`);
  },

  // Compare prices across stores for a list of products
  comparePrices: async (productIds) => {
    const stores = await groceryService.getStores();
    const comparison = {};

    for (const product of productIds) {
      comparison[product] = {};
      for (const store of stores) {
        const products = await groceryService.getStoreProducts(store.id);
        const found = products.find((p) => p.id === product);
        if (found) {
          comparison[product][store.id] = {
            store: store.name,
            price: found.price,
          };
        }
      }
    }

    return comparison;
  },

  // Find the best deal for a specific product
  findBestDeal: async (productId) => {
    const stores = await groceryService.getStores();
    let bestDeal = null;
    let lowestPrice = Infinity;

    for (const store of stores) {
      const products = await groceryService.getStoreProducts(store.id);
      const product = products.find((p) => p.id === productId);
      if (product && product.price < lowestPrice) {
        lowestPrice = product.price;
        bestDeal = {
          storeId: store.id,
          storeName: store.name,
          productId: product.id,
          productName: product.name,
          price: product.price,
          savings: 0,
        };
      }
    }

    return bestDeal;
  },

  // Calculate total cart price at each store
  compareCartTotal: async (cartItems) => {
    const stores = await groceryService.getStores();
    const storeTotals = [];

    for (const store of stores) {
      let total = 0;
      const products = await groceryService.getStoreProducts(store.id);

      for (const cartItem of cartItems) {
        const product = products.find((p) => p.id === cartItem.productId);
        if (product) {
          total += product.price * (cartItem.quantity || 1);
        }
      }

      storeTotals.push({
        storeId: store.id,
        storeName: store.name,
        total: total.toFixed(2),
      });
    }

    return storeTotals.sort((a, b) => a.total - b.total);
  },
};