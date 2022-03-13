import Contact from "../components/Contact";
import Download from "../components/Download";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="font-Poppins">
      <NavBar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home;