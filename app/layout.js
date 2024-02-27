import { Rubik } from "next/font/google";
import "@/styles/globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "ULA",
  description: "ULA Healthcare Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>{children}</body>
    </html>
  );
}
