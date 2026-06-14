import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "IT World Limited — IT Consulting & Software Development",
  description:
    "UK-based IT Consulting and Software Development company specialising in SAP, Salesforce, Workday, Cloud, AI and Digital Transformation across UK, Europe and India.",
  keywords:
    "IT Consulting, SAP, Salesforce, Workday, Cloud Migration, Digital Transformation, Software Development, London",
  openGraph: {
    title: "IT World Limited",
    description: "Enterprise IT Consulting & Software Development",
    url: "https://www.itworldltd.com",
    siteName: "IT World Limited",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
