import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Share Notes",
  description: "A simple way to share notes online",
};

const RootLayout = ({ children }) => {
  return (
    <html data-theme="cupcake" lang="en" className={inter.className}>
      <body>
        {/* <header className="bg-gray-800 text-white p-4">
          <nav className="container mx-auto">
            <h1 className="text-2xl font-bold">Share Notes</h1>
          </nav>
        </header> */}
        {/* <main className="container mx-auto p-4">{children}</main> */}
        <main className="">{children}</main>
        <footer className="bg-gray-800 text-white p-4 text-center">
          <p>&copy; 2024 ShareNotes. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
};

export default RootLayout;
