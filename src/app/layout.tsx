import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter, Poppins, Roboto } from 'next/font/google';

// Configure your custom fonts
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});

// Note: Gotham is a commercial font. 
// For production, purchase and add Gotham font files to /public/fonts/
// and update @font-face in globals.css
// Current setup uses system font fallbacks (Inter/Helvetica)

export const metadata: Metadata = {
  title: {
    default: "CRWD - Ieși mai des, cheltui mai puțin.",
    template: "%s | CRWD",
  },
  description:
    "Platforma care conectează oamenii cu cele mai interesante cafenele, baruri și restaurante din oraș. Alătură-te waitlist-ului pentru early access!",
  keywords: ["cafenele", "baruri", "restaurante", "networking", "social", "evenimente"],
  authors: [{ name: "CRWD Team" }],
  creator: "CRWD",
  publisher: "CRWD",
  metadataBase: new URL("https://crwd.ro"),
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://crwd.ro",
    siteName: "CRWD",
    title: "CRWD - Ieși mai des, cheltui mai puțin.",
    description:
      "Platforma care conectează oamenii cu cele mai interesante cafenele, baruri și restaurante din oraș.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "CRWD",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CRWD - Ieși mai des, cheltui mai puțin.",
    description:
      "Platforma care conectează oamenii cu cele mai interesante cafenele, baruri și restaurante din oraș.",
    images: ["/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body className={`bg-black text-white ${inter.variable} ${poppins.variable}`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

