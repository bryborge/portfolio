import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * App metadata
 */
export const metadata: Metadata = {
  title: "Bryan Borgeson",
  description: "I lead teams, solve problems, and make things happen.",
  other: {
    subTitle: "Senior Software Engineer",
    viewResumeLink: "https://drive.google.com/file/d/1KyJ0m44D0yPw2UXUXa7qGerzz9OLZikQ/view",
    contactAddress: "Portland, OR 97213, US",
    contactEmail: "bryborge@gmail.com",
    contactPhone: "+1 (360) 713-4088",
  }
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
      <body
        className={`${inter.className} bg-gradient-to-r from-slate-950 to-slate-800 text-slate-400 antialiased selection:bg-violet-300 selection:text-violet-900`}>
        {children}
      </body>
    </html>
  );
}
