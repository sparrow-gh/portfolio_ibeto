import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "موقع تصاميمي - Portfolio Design - ايبيتو",
  description: "معرض تصاميمي الشخصي - مجموعة متنوعة من التصاميم الإبداعية والمشاريع الفنية",
  keywords: ["تصاميم", "portfolio", "design", "creative", "art", "graphics", "web design", "UI/UX"],
  authors: [{ name: "موقع تصاميمي" }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: '16x16' }
    ],
    shortcut: '/favicon.svg',
    apple: '/icon.svg'
  },
  openGraph: {
    title: "موقع تصاميمي - Portfolio Design - ايبيتو",
    description: "معرض تصاميمي الشخصي - مجموعة متنوعة من التصاميم الإبداعية والمشاريع الفنية",
    url: "http://localhost:3000",
    siteName: "موقع تصاميمي",
    type: "website",
    images: [
      {
        url: '/logo.svg',
        width: 1200,
        height: 630,
        alt: 'موقع تصاميمي Portfolio'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'موقع تصاميمي - Portfolio Design',
    description: 'معرض تصاميمي الشخصي - مجموعة متنوعة من التصاميم الإبداعية والمشاريع الفنية',
    images: ['/logo.svg']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
