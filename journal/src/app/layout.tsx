import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import JournalContextProvider from "./context/JournalContextProvider";
import { Analytics } from '@vercel/analytics/next';
import "./globals.css";

const outfit = Outfit({
  weight  : "400",
  style: "normal",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Journal",
  description: "Write down your daily thoughts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <JournalContextProvider>
    <html lang="en">
        <body
          className={outfit.className + ` bg-black m-4 `}
        >
          <div>{children}</div>
          <Analytics />
        </body>
    </html>
    </JournalContextProvider>
  );
}
