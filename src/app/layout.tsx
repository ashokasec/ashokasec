import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import { ADMIN, HEADLINE } from "@/lib/config";

export const metadata: Metadata = {
  title: `${ADMIN.name} | @${ADMIN.username}`,
  description: HEADLINE,
  authors: [{ name: ADMIN.name, url: "https://ashokasec.com" }],
  alternates: {
    canonical: "https://www.ashokasec.com",
  },
  keywords:
    "shivam gupta, ashokasec, @ashokasec, website developer, reactjs, nextjs, mern stack, open source, formle",
  openGraph: {
    type: "website",
    url: "https://ashokasec.com",
    title: `${ADMIN.name} | @${ADMIN.username}`,
    description: HEADLINE,
    siteName: ADMIN.username,
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
    <html lang="en" className="dark">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
