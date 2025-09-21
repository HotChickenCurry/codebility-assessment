import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/ui/navbar";
import Footer from "./components/ui/footer";

const poppins = Poppins ({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ["400","500","600","700"]
});

export const metadata: Metadata = {
  title: "Moola | Cash Back Gift Cards",
  description: "Send a gift and get a reward. Shop cash back gift cards. Buy for yourself, friends or family. Choose from over 250 brands and save up to 15%.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"/>
        </head>
        <body className={`${poppins.className} antialiased`}>
            <Navbar />
            {children}
            <Footer />
        </body>
    </html>
  );
}