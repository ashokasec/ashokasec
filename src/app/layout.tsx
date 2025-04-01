import type { Metadata } from "next";
import "./globals.css";
import { geistSans } from "@/lib/fonts/fonts";
import { ADMIN, HEADLINE } from "@/lib/const/admin";

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
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
