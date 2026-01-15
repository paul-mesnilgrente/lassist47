import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LaunchOfferModal from "@/components/LaunchOfferModal";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cambria = localFont({
  src: [
    { path: "../fonts/cambria/cambria_for_windows.woff2" },
    { path: "../fonts/cambria/cambria_for_windows.woff" },
    { path: "../fonts/cambria/cambria_for_windows.ttf" },
  ],
  variable: "--font-cambria",
});

const bahnschrift = localFont({
  src: [
    { path: "../fonts/bahnschrift/bahnschrift.woff2" },
    { path: "../fonts/bahnschrift/bahnschrift.woff" },
    { path: "../fonts/bahnschrift/bahnschrift.ttf" },
  ],
  variable: "--font-bahnschrift",
});

export const metadata: Metadata = {
  title: {
    template: "%s | L'assist47",
    default: "L'assist47",
  },
  description: "TODO",
  icons: {
    other: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
        rel: "apple-touch-icon",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${cambria.variable} ${bahnschrift.variable} min-h-screen flex flex-col`}
      >
        <Header />
        <LaunchOfferModal />

        <main className="flex flex-col justify-center flex-grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
