import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar.jsx";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./global.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Urban Sky Media | Strategic Marketing & Digital Solutions",
  description: "Elevating brands through data-driven creativity and cutting-edge digital solutions.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
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
