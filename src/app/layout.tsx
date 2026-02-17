import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
import StartProjectModal from "@/components/ui/StartProjectModal";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "DevDisplay — Digital Solutions That Matter",
    template: "%s | DevDisplay",
  },
  description:
    "DevDisplay designs and builds high-impact AI products, secure platforms, and modern web experiences.",
  applicationName: "DevDisplay",
  metadataBase: new URL("https://www.devdisplay.org"),
  openGraph: {
    title: "DevDisplay — Digital Solutions That Matter",
    description:
    "We empower organizations with AI that turns complex challenges into real-world outcomes.",
    url: "https://www.devdisplay.org",
    siteName: "DevDisplay",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "DevDisplay homepage",
      },
      {
        url: "/images/clientsLightCurve.jpg",
        width: 1458,
        height: 86,
        alt: "DevDisplay light curve graphic",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevDisplay — Digital Solutions That Matter",
    description:
      "We empower organizations with AI that turns complex challenges into real-world outcomes.",
    images: [
      { url: "/opengraph-image", alt: "Antimatter AI homepage" },
      { url: "/images/clientsLightCurve.jpg", alt: "Antimatter AI light curve graphic" },
    ],
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${geistSans.className} antialiased overflow-x-hidden`}>
        <NavBar />
        <div className="relative">
          <Providers>{children}</Providers>
        </div>
        <StartProjectModal />
        <Footer />
      </body>
    </html>
  );
}
