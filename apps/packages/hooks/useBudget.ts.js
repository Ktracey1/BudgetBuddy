import { useState, useEffect } from 'react';

/**
 * Custom hook to manage budget state and logic.
 * Provides current spending, remaining balance, and status indicators.
 */
export const useBudget = (initialLimit = 500) => {
  const [limit, setLimit] = useState(initialLimit);
  const [spent, setSpent] = useState(0);

  const remaining = limit - spent;
  const percentageSpent = limit > 0 ? (spent / limit) * 100 : 0;

  /**
   * Returns a status string based on spending percentage.
   */
  const getStatus = () => {
    if (percentageSpent >= 100) return 'exceeded';
    if (percentageSpent >= 80) return 'warning';
    return 'good';
  };

  /**
   * Returns a tailwind color class based on status.
   */
  const getStatusColor = () => {
    if (percentageSpent >= 100) return 'text-red-600';
    if (percentageSpent >= 80) return 'text-yellow-600';
    return 'text-pink-600';
  };

  return {
    limit,
    spent,
    remaining,
    percentageSpent,
    status: getStatus(),
    statusColor: getStatusColor(),
    setLimit,
    setSpent,
    addExpense: (amount) => setSpent((prev) => prev + amount),
    resetBudget: () => setSpent(0),
  };
};
