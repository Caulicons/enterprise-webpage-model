import Banner from '../Molecules/Banner/Banner';
import CommentarySection from '../Organisms/Sections/CommentarySection';
import ContactSection from '../Organisms/Sections/ContactSection';
import Functionary from '../Organisms/Sections/Functionary';
import T from '../atoms/Typography';

export default function AboutPage() {
  return (
    <main>
      <Banner parentClass='h-[300px]'>
        <T variant='h1' styles='h1'>
          About
        </T>
      </Banner>
      <CommentarySection />
      <Functionary />
      <ContactSection />
    </main>
  );
}
