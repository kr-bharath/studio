import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'K R Bharath - Data Scientist & Automation Expert | DataGraph',
  description: 'Portfolio of K R Bharath, a data-driven technologist specializing in QA automation, data science, machine learning, and AI-powered solutions.',
  keywords: 'K R Bharath, Data Scientist, Automation Expert, QA Automation, Machine Learning, Python, SQL, TensorFlow, Cypress, Selenium, Portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
