import type { Metadata } from "next";
import { Questrial, Bagel_Fat_One } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ScaleProvider } from "@/lib/state/context";
import { ZoomControls } from "@/components/zoom-controls";

const questrial = Questrial({
  variable: "--font-questrial",
  subsets: ["latin"],
  weight: "400",
});

const bagelFatOne = Bagel_Fat_One({
  variable: "--font-bagel-fat-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Anaiya Sheikhawat Artist",
  description: "Anaiya Sheikhawat Artist Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bagelFatOne.variable} ${questrial.variable} antialiased`}
        style={{
          backgroundColor: "#F9F8EF",
        }}
      >
        <ScaleProvider
          initialScale={0.5}
          scaleStep={0.1}
          scaleMin={0.3}
          scaleMax={1}
        >
          <Header />
          {children}
          <ZoomControls />
        </ScaleProvider>
      </body>
    </html>
  );
}
