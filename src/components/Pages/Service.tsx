import Banner from '../Molecules/Banner/Banner';
import CarouselWithSwiper from '../Molecules/Carousel/CarouselWithSwiper';
import CarouselSections from '../Organisms/Sections/CarouselSection';
import ContactSection from '../Organisms/Sections/ContactSection';
import MoreInfoHome from '../Organisms/Sections/MoreInfoHome';
import TopicsHome2 from '../Organisms/Sections/TopicsHome2';
import T from '../atoms/Typography';

export default function ServicePage() {
  return (
    <main>
      <Banner parentClass='h-[300px]'>
        <T variant='h1' styles='h1'>
          Services
        </T>
      </Banner>
      <MoreInfoHome />
      <TopicsHome2 />
      <CarouselSections />
      <ContactSection />
    </main>
  );
}
