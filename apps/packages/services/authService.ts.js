import { apiClient } from "./apiClient.ts";

/**
 * Authentication service for handling login, logout, and registration.
 */
export const authService = {
    login: async (credentials) => {
        return apiClient.post("/auth/login", credentials);
    },
    register: async (userData) => {
        return apiClient.post("/auth/register", userData);
    },
    getCurrentUser: async () => {
        return apiClient.get("/auth/me");
    },
};
