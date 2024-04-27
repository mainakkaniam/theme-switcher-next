import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Theme-Switcher-Next",
  description:"Multi App with theme toggling enabled"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Providers>
      <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </Providers>
    </html>
  );
}
