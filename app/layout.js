import { Montserrat } from "next/font/google";
import "@/styles/globals.css";

const font = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ula Heathcare",
  description: "ULA Healthcare Systems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
