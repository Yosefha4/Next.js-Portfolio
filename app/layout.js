import "./globals.css";
import Navbar from "@/components/Navbar";
import Home from "./page";
import About from "@/components/About";
import Protfolio from "@/components/Protfolio";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Yosef Haimjan",
  description: "Yosef Haimjan Portfolio - Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="app">
          <section id="home">
            <Home />
          </section>
          <section id="portfolio">
            <Protfolio />
          </section>
          <section id="about">
            <About />
          </section>
      
     
          <section id="contact">
            <Contact />
          </section>
        </main>
      </body>
    </html>
  );
}
