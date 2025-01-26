import Navbar from "../components/Navbar";
import Footer from "../components/Footer-new";
import Pelanggan from "../components/Home/Pelanggan";
import Exp from "../components/Home/Exp";
import Why from "../components/Home/Why";
import Promote from "../components/Promote";
import Hero from "../components/About/Hero";
import Story from "../components/About/Story";
import Team from "../components/About/Team";
import QuoteSection from "../components/About/Quote";

function About() {
  return (
    <main className="flex flex-col">
      <Navbar />
      <div className="w-full mx-auto">
        <Hero />
        <Story />
        <QuoteSection />
        <Exp />
        <Team />
        <Why />
        <Pelanggan />
        <Promote />
      </div>
      <Footer />
    </main>
  );
}

export default About;
