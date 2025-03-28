import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
