import { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { IBM_Plex_Sans } from "next/font/google";

const ibmPlexSans = IBM_Plex_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Harsat | Portfolio",
  description: "My portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${ibmPlexSans.className}`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
