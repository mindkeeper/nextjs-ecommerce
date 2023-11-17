import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/core/theme-provider';
import Nav from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'E-Commerce',
  description: 'We Made Your Wallet Cry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <main className="flex flex-col px-10 py-6">
            <Nav />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
