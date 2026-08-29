import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Velora | Premium Private Transport',
  description: 'Luxury private transportation service with executive airport transfers, corporate travel, event transportation, and hourly charters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}