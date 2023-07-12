import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./components/Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        href="https://fonts.googleapis.com/css2?family=Signika:wght@400;500;700&family=Ubuntu:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <body className="font-signika">
        <Navbar />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
