import "@radix-ui/themes/styles.css";
import "./theme-config.css";
import "./globals.css";

import { Theme, ThemePanel } from "@radix-ui/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./NavBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Issue Tracker",
  description: "for tracking the Issue",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme appearance="light" accentColor="iris" grayColor="mauve">
          <NavBar />
          <main className="text-black p-5">{children}</main>
          {/* used for custamizing radix ui theme <ThemePanel /> */}
        </Theme>
      </body>
    </html>
  );
}
