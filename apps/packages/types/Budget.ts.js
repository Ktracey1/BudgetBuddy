/**
 * @typedef {Object} Budget
 * @property {string} id - Unique identifier for the budget
 * @property {string} userId - ID of the user this budget belongs to
 * @property {number} limit - Total budget limit for the period
 * @property {number} spent - Amount already spent
 * @property {string} period - Budget period (e.g., 'monthly', 'weekly')
 * @property {string} category - Category (e.g., 'Groceries', 'All')
 */

export const BudgetPeriod = {
    WEEKLY: "weekly",
    MONTHLY: "monthly",
    YEARLY: "yearly",
};
