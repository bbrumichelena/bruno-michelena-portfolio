import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TabNav from "@/components/TabNav";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Bruno Michelena — Portfolio",
  description: "Video & Fotografía — Portfolio profesional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none fixed inset-0 h-full w-full object-cover"
          style={{ zIndex: 0, opacity: 0.06 }}
        >
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 mx-auto max-w-[1400px] px-6 pt-10 pb-24 md:px-12">
          <TabNav />
          <main className="mt-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
