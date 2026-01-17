import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar.jsx";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./global.css";

// Optimize Inter font loading
const inter = Inter({
  subsets: ["latin"],
  display: "swap", // ← Critical: prevents blocking render
  preload: true,
  variable: "--font-inter",
  fallback: ["system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
  adjustFontFallback: true, // Reduces layout shift
});

export const metadata = {
  title: "Urban Sky Media | Strategic Marketing & Digital Solutions",
  description:
    "Elevating brands through data-driven creativity and cutting-edge digital solutions.",
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  // Add Open Graph for better social sharing
  openGraph: {
    title: "Urban Sky Media | Strategic Marketing & Digital Solutions",
    description:
      "Elevating brands through data-driven creativity and cutting-edge digital solutions.",
    type: "website",
    images: ["/images/og-image.jpg"], // Create this if you don't have it
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="preload"
          href="/images/logo.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} bg-white antialiased`}>
        <SmoothScroll>
          <NavBar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
