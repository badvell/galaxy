import { Navbar } from "../components/Navbar";
import { HeroImage } from "../components/HeroImage";
import { TrainingSection } from "../components/TrainingSection";
import { Footer } from "../components/Footer";


export const Training = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='TRAINING.' text='Pre-Flight & In-Flight Training.' />
      <TrainingSection />
      <Footer />
    </div>
  );
};