import Hero from "./hero";
import Feature from "./feature";
import Services from "./service";
import Menu from "./menu";
import Survey from "./survey";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Home() {
  return (
   
    <main>
      <Navbar/>
      <Hero />
      <Feature />
      <Services />
      <Menu />
      <Survey />
      <Footer/>
    </main>
   
  );
}
