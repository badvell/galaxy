import { Footer } from '../components/Footer';
import { HeroImage } from '../components/HeroImage';
import { Navbar } from '../components/Navbar';
import { Form } from '../components/Form';

export const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImage heading='CONTACT' text='Contact GLX Travel.' />
      <Form />
      <Footer />
    </div>
  );
};