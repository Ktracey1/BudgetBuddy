/**
 * Formats a number as a currency string.
 * @param {number} amount - The numeric value to format.
 * @param {string} [currency='USD'] - The currency code (default: 'USD').
 * @param {string} [locale='en-US'] - The locale for formatting (default: 'en-US').
 * @returns {string} The formatted currency string.
 */
export const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency,
    }).format(amount);
};
