import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/redux/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/themeprovider";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { fileRouter } from "./api/uploadthing/core";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
  title: "DevsKonnekt",
  description:
    "DevsKonnekt is a platform where software developers can connect, network, share ideas, and find new opportunities. DevsKonnekt aims to create a vibrant and supportive community of developers who can learn, grow, and have fun together. This repository contains the source code and documentation for the DevsKonnekt platform.",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
      >
        <body
          className={`${poppins.className} bg-background text-primary dark:bg-gray-700 dark:text-background`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Toaster />
            <div className="max-w-[1440px] w-full mx-auto flex flex-col min-h-screen justify-between">
              <ReduxProvider>
                <NextSSRPlugin routerConfig={extractRouterConfig(fileRouter)} />
                <NavBar />
                {children}
                <Footer />
              </ReduxProvider>
            </div>
          </ThemeProvider>
          <SpeedInsights />
        </body>
      </html>
    </ClerkProvider>
  );
}
