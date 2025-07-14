// app/layout.tsx
import './globals.css';
import { Poppins } from 'next/font/google';

// You can select font weights here
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'], // Add more if needed
  display: 'swap',
});

export const metadata = {
  title: 'Glammed by Omaa',
  description: 'Makeup Artist Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
