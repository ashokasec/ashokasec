import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Gupta | @ashokasec",
  description:
    "I develop apps to fill gaps in existing solutions based on personal needs.",
  authors: [{ name: "Shivam Gupta", url: "https://ashokasec.com" }],
  keywords:
    "shivam gupta, ashokasec, @ashokasec, website developer, reactjs, nextjs, mern stack, open source",
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
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
