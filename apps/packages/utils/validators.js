/**
 * Form validation utilities.
 */

export const isValidEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const isRequired = (value) => {
  return value != null && value.toString().trim().length > 0;
};

export const isValidPassword = (password) => {
  return password && password.length >= 8;
};
