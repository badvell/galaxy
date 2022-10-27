import { Navbar } from "../components/Navbar";
import { HeroImage } from "../components/HeroImage";
import { PricingCards } from "../components/PricingCards";
import { Footer } from "../components/Footer";

export const Pricing = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='PRICING' text='Choose your trip.' />
      <PricingCards />
      <Footer />
    </div>
  );
};