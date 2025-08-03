import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/shared/Header";
import { Footer } from "@/components/shared/Footer";
import Script from "next/script";
import { ThemeProvider } from "@/components/ThemeProvider";

const fontInter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const fontPoppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Amplify AI - From Idea to Impact. Instantly.",
  description: "AI-powered marketing content generation for modern agencies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* This style tag defines our color variables for light and dark themes */}
        <style
          id="theme-variables"
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --background: 0 0% 100%;
              --foreground: 240 10% 3.9%;
              --card: 0 0% 100%;
              --card-foreground: 240 10% 3.9%;
              --popover: 0 0% 100%;
              --popover-foreground: 240 10% 3.9%;
              --primary: 262.1 83.3% 57.8%;
              --primary-foreground: 0 0% 98%;
              --secondary: 240 4.8% 95.9%;
              --secondary-foreground: 240 5.9% 10%;
              --muted: 240 4.8% 95.9%;
              --muted-foreground: 240 3.8% 46.1%;
              --accent: 240 4.8% 95.9%;
              --accent-foreground: 240 5.9% 10%;
              --destructive: 0 84.2% 60.2%;
              --destructive-foreground: 0 0% 98%;
              --border: 240 5.9% 90%;
              --input: 240 5.9% 90%;
              --ring: 262.1 83.3% 57.8%;
              --radius: 0.5rem;
            }
            .dark {
              --background: 240 10% 3.9%;
              --foreground: 0 0% 98%;
              --card: 240 10% 3.9%;
              --card-foreground: 0 0% 98%;
              --popover: 240 10% 3.9%;
              --popover-foreground: 0 0% 98%;
              --primary: 262.1 83.3% 57.8%;
              --primary-foreground: 0 0% 98%;
              --secondary: 240 3.7% 15.9%;
              --secondary-foreground: 0 0% 98%;
              --muted: 240 3.7% 15.9%;
              --muted-foreground: 0 0% 62.9%;
              --accent: 240 3.7% 15.9%;
              --accent-foreground: 0 0% 98%;
              --destructive: 0 62.8% 30.6%;
              --destructive-foreground: 0 0% 98%;
              --border: 240 3.7% 15.9%;
              --input: 240 3.7% 15.9%;
              --ring: 262.1 83.3% 57.8%;
            }
          `,
          }}
        />
        <Script 
          src="https://cdn.tailwindcss.com" 
          strategy="beforeInteractive" 
        />
        {/* This script configures Tailwind to USE the CSS variables */}
        <script
          id="tailwind-config"
          dangerouslySetInnerHTML={{
            __html: `
            tailwind.config = {
              darkMode: "class",
              theme: {
                container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
                extend: {
                  fontFamily: {
                    sans: ["var(--font-inter)", "sans-serif"],
                    heading: ["var(--font-poppins)", "sans-serif"],
                  },
                  colors: {
                    border: 'hsl(var(--border))',
                    input: 'hsl(var(--input))',
                    ring: 'hsl(var(--ring))',
                    background: 'hsl(var(--background))',
                    foreground: 'hsl(var(--foreground))',
                    primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
                    secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
                    destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
                    muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
                    accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
                    popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
                    card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
                  },
                  borderRadius: { lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)" }
                }
              }
            }
          `,
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased transition-colors duration-300"
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false} // Allow our transitions
        >
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}