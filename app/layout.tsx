import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: 'DITO RISE | Official Platform',
  description: 'Equipping visionary entrepreneurs, students, and dreamers with mindset transformation.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Load Paystack Inline JS Library for Mobile Money & Card Payments */}
        <Script 
          src="https://js.paystack.co/v1/inline.js" 
          strategy="lazyOnload" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}