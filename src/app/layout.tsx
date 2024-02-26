import "@/styles/globals.css";

import { Header } from "@/app/_components/layout/Header";
import { Footer } from "@/app/_components/layout/Footer";
import { TRPCReactProvider } from "@/trpc/react";
import { Inter } from "next/font/google";
import { AppSetting } from "@/const/setting";

export const metadata = {
  title: AppSetting.title,
  description: AppSetting.description,
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={`font-sans ${inter.variable}`}>
        <TRPCReactProvider>
          <div className="flex min-h-screen flex-col bg-base-100">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
