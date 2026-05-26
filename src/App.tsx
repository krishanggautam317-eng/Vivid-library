import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Features from "@/sections/Features";
import SeatAvailability from "@/sections/SeatAvailability";
import Gallery from "@/sections/Gallery";
import Pricing from "@/sections/Pricing";
import Testimonials from "@/sections/Testimonials";
import FAQ from "@/sections/FAQ";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F5F7FB", color: "#062B63" }}>
      <Navbar />
      <Hero />
      <Features />
      <SeatAvailability />
      <Gallery />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
