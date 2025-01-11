import "../app/globals.css";
import { Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} pt-16`}>
        <Providers>
          <SiteHeader />
          {children}
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
