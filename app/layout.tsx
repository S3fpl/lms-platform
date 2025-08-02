import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
// import ResponsiveNav from '@/components/Home/Navbar/ResponsiveNav'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gakuen | Feature & Tech Courses",
  description: "Powered by Gakuen – Elevating future tech minds.",
  
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[hsl(245,58%,4%)] text-white relative overflow-hidden`}
        >
          <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none ">
            <div className="absolute w-[900px] h-[900px] bg-indigo-600 opacity-20 blur-[180px] rounded-full top-[-200px] left-[-200px] animate-[pulse_6s_ease-in-out_infinite]" />
            <div className="absolute w-[1000px] h-[1000px] bg-purple-700 opacity-20 blur-[200px] rounded-full bottom-[-300px] right-[-250px] animate-[pulse_6s_ease-in-out_infinite] delay-[2000ms]" />
          </div>

          {/* <ResponsiveNav /> */}

          <main className="">
            {children}
            </main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
