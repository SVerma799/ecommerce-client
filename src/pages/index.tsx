import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <main
        className={`flex flex-col items-center justify-between ${inter.className}`}
      >
        <h1>
          Welcome to the Client Side of the Ecommerce of the Ecommerce Project
        </h1>
      </main>
    </div>
  );
}
