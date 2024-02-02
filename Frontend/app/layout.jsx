import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";
import ReduxProvider from "@/redux/Provider";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/themeprovider";

export const metadata = {
  title: "DevsKonnekt",
  description: "Generated by create next app",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${poppins.className} bg-background text-primary dark:bg-gray-700 dark:text-background`}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="max-w-[1440px] w-full mx-auto flex flex-col min-h-screen justify-between">
              <ReduxProvider>
                <NavBar />
                {children}
                <Footer />
              </ReduxProvider>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
