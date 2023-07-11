import { Inter } from "next/font/google";
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
      </main>
    </div>
  );
}
