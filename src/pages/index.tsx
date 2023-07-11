import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
      >
        <h1>
          Welcome to the Client Side of the Ecommerce of the Ecommerce Project
        </h1>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <Link href="/auth/signin">Sign In</Link>
        </button>
      </main>
    </div>
  );
}
