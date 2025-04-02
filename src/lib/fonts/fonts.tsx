import localFont from "next/font/local";

import {
  Bricolage_Grotesque,
  Inter,
  Space_Grotesk,
  AR_One_Sans,
  Geist,
  Playfair_Display,
} from "next/font/google";

export const spectral = localFont({
  src: [
    {
      path: "./spectral/spectral-regular.woff",
      weight: "400",
    },
    {
      path: "./spectral/spectral-medium.woff",
      weight: "500",
    },
    {
      path: "./spectral/spectral-semibold.woff",
      weight: "600",
    },
    {
      path: "./spectral/spectral-bold.woff",
      weight: "700",
    },
    {
      path: "./spectral/spectral-extrabold.woff",
      weight: "800",
    },
  ],
});

export const bricolage = Bricolage_Grotesque({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export const inter = Inter({ subsets: ["latin"] });
export const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
export const arOneSans = AR_One_Sans({ subsets: ["latin"] });
export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
