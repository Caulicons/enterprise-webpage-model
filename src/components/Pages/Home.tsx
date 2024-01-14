import T from '../atoms/Typography';
import Banner from '../Molecules/Banner/Banner';
import TopicsHome from '../Organisms/Sections/TopicsHome';
import MoreInfoHome from '../Organisms/Sections/MoreInfoHome';
import CarouselSection from '../Organisms/Sections/CarouselSection';
import TopicsHome2 from '../Organisms/Sections/TopicsHome2';
import CommentarySection from '../Organisms/Sections/CommentarySection';
import Functionary from '../Organisms/Sections/Functionary';
import ContactSection from '../Organisms/Sections/ContactSection';

export default function Home() {
  return (
    /* Tag to wrap all the content */
    <main>
      <Banner animation={true}>
        <T variant='p' styles='slogan'>
          Loren inpsum
        </T>
        <T variant='h1' styles='h1'>
          Lorem ipsum dolor sit amet, consectetur adispcing elit
        </T>
      </Banner>
      <TopicsHome />
      <MoreInfoHome />
      <TopicsHome2 />
      <CarouselSection />
      <CommentarySection />
      <Functionary />
      <ContactSection />
    </main>
  );
}
