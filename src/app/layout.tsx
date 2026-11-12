import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "reislabbd — Premium Digital Creative Agency | Dhaka, Bangladesh",
  description:
    "reislabbd is a digital creative agency based in Uttara, Dhaka. We offer web development, graphic design, video editing, AI video generation, audio editing, document translation, advertising, and social media management.",
  keywords: [
    "web development Bangladesh",
    "graphic design Dhaka",
    "video editing agency",
    "AI video generation",
    "reislabbd",
    "digital agency Uttara",
  ],
  openGraph: {
    title: "reislabbd — Premium Digital Creative Agency",
    description:
      "Cinematic digital experiences. Web, design, video, AI & more — from Dhaka, Bangladesh.",
    url: "https://reislab.com",
    siteName: "reislabbd",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-black text-cream font-sans">
        {children}
      </body>
    </html>
  );
}
