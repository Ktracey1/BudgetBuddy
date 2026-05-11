import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata = {
  title: "BudgetBuddy - Budget Buddy",
  description: "Find the best deals across your local stores.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}