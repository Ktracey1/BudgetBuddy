/**
 * Grocery list management utilities.
 */

export const calculateTotal = (items) => {
  return items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
};

export const findBestStore = (list, stores) => {
  let bestStore = null;
  let lowestPrice = Infinity;
  
  stores.forEach((store) => {
    const storeItems = list.filter((item) => item.store === store.id);
    const storeTotal = calculateTotal(storeItems);
    if (storeTotal < lowestPrice) {
      lowestPrice = storeTotal;
      bestStore = { ...store, total: storeTotal };
    }
  });
  
  return bestStore;
};
