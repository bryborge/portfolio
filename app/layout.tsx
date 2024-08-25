import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

/**
 * App metadata
 */
export const metadata: Metadata = {
  title: "Bryan Borgeson",
  description: "Driving Technical Excellence through collaborative problem-solving and authentic leadership.",
  other: {
    // TODO: Add logic to construct separate view and download url links so that I can define these are variables in one place
    viewResumeLink: "https://drive.google.com/file/d/18ufroP5j3ALmdSiPGALKevLjIpwvo7kA/view",
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
        className={`${inter.className} bg-slate-100 selection:bg-violet-300 selection:text-violet-900`}>
        {children}
      </body>
    </html>
  );
}
