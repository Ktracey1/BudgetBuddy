import { signIn, signOut, useSession } from "next-auth/react";

/**
 * Custom hook to handle authentication state and actions.
 */
export const useAuth = () => {
  const { data: session, status } = useSession();

  const isAuthenticated = status === "authenticated";
  const isLoading = status === "loading";
  const user = session?.user;

  return {
    user,
    isAuthenticated,
    isLoading,
    login: () => signIn(),
    logout: () => signOut({ callbackUrl: "/" }),
  };
  fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        username: 'emilys',
        password: 'emilyspass',
        expiresInMins: 30,
    }),
    credentials: 'include'
})
.then(res => res.json())
.then(console.log);

};
