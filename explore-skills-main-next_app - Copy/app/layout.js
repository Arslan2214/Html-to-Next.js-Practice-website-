import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Xplore Skill - Sagar Developer",
  description: "Xplore Skill is your gateway to unlocking the full spectrum of Sagar Developer's expertise. Dive into a world of comprehensive tutorials, insightful articles, and cutting-edge resources crafted by Sagar Developer. Elevate your skills, stay ahead in the ever-evolving tech landscape, and explore the vast realm of possibilities with Xplore Skill and Sagar Developer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;600;700&display=swap"
        />
        <style>{inter.styles}</style>
      </head>
      <body className={inter.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
