// Next.js packages
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// App components
import Toolbar from "./components/Toolbar";
// Styles
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * App metadata
 */
export const metadata: Metadata = {
  title: "Bryan Borgeson",
  description: "Driving Technical Excellence through collaborative problem-solving and authentic leadership.",
};

/**
 * Renders the root layout with the specified children.
 *
 * @param {Readonly<{ children: React.ReactNode; }>} children - The child components to render.
 * @return {JSX.Element} The rendered root layout.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>): JSX.Element {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-100 selection:bg-violet-300 selection:text-violet-900`}>
        <Toolbar />
        {/* onTerminalAppClick={handleTerminalToggle} */}
        <main className="mx-auto min-h-screen font-sans">
          {children}
        </main>
        {/* TODO: Move footer component here */}
      </body>
    </html>
  );
}
