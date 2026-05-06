/**
 * Basic budgeting logic for BudgetBuddy.
 */

export const calculateRemaining = (budget) => {
  return budget.limit - budget.spent;
};

export const getBudgetStatus = (budget) => {
  const percentage = (budget.spent / budget.limit) * 100;
  if (percentage >= 100) return "exceeded";
  if (percentage >= 80) return "warning";
  return "ok";
};
