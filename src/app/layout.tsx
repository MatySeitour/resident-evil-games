import "./globals.css";
import { Inter, Oswald } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const oswald = Oswald({
  weight: "500",
  subsets: ["latin"],
});

export const metadata = {
  title: "Resident Evil Archives",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll" lang="en">
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
