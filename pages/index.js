import Download from "../components/Download";
import Features from "../components/Features";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <div className="font-Poppins">
      <NavBar />
      <Hero />
      <Features />
      <Download />
    </div>
  )
}

export default Home;