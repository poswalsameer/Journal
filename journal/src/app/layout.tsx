import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import Header from "./appComponents/Header";
import JournalContextProvider from "./context/JournalContextProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        </body>
    </html>
    </JournalContextProvider>
  );
}
