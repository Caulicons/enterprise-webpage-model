import Banner from '../Molecules/Banner/Banner';
import ContactSection from '../Organisms/Sections/ContactSection';
import T from '../atoms/Typography';

export default function ContactPage() {
  return (
    <main>
      <Banner parentClass='h-[60vh]'>
        <T variant='h1' styles='h1'>
          Contact
        </T>
      </Banner>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d1020990.6198203549!2d-62.2552774!3d-1.6093034!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x920e5e60246fc7f1%3A0x1ec2242f089f7a57!2sBarcelos%2C%20State%20of%20Amazonas%2C%2069700-000!3m2!1d-1.6949389!2d-62.5443612!5e0!3m2!1sen!2sbr!4v1650041236642!5m2!1sen!2sbr'
        width='100%'
        height='300'
        loading='lazy'
      />
      <ContactSection />
    </main>
  );
}
