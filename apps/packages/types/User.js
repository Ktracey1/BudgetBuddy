/**
 * @typedef {Object} User
 * @property {string} id - Unique identifier for the user
 * @property {string} name - Full name of the user
 * @property {string} email - Email address of the user
 * @property {string} [image] - URL to the user's profile image
 * @property {string[]} [favoriteStores] - IDs of stores the user follows
 * @property {Object} [settings] - User-specific application settings
 * @property {boolean} [settings.notifications] - Whether notifications are enabled
 * @property {string} [settings.currency] - Preferred currency (e.g., 'USD')
 */

export const UserSchema = {
    id: "",
    name: "",
    email: "",
    image: "",
    role: "user",
    favoriteStores: [],
    settings: {
        notifications: true,
        currency: "USD",
    },
};
