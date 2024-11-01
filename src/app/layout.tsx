import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Shivam Gupta | @ashokasec",
  description:
    "I develop apps to fill gaps in existing solutions based on personal needs.",
  authors: [{ name: "Shivam Gupta", url: "https://ashokasec.com" }],
  alternates: {
    canonical: "https://www.ashokasec.com",
  },
  keywords:
    "shivam gupta, ashokasec, @ashokasec, website developer, reactjs, nextjs, mern stack, open source, formle",
  openGraph: {
    type: "website",
    url: "https://ashokasec.com",
    title: "Shivam Gupta | @ashokasec",
    description:
      "I develop apps to fill gaps in existing solutions based on personal needs.",
    siteName: "ashokasec",
    images: [
      {
        url: "https://raw.githubusercontent.com/ashokasec/my-website/main/public/screenshot.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
