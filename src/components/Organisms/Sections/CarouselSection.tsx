import CarouselWithSwiper from '@/components/Molecules/Carousel/CarouselWithSwiper';
import Section from '@/components/atoms/Section';
import T from '@/components/atoms/Typography';

export default function CarouselSections() {
  return (
    <Section
      className='bg-white px-12 py-16 text-center'
      childrenClassName='flex h-full flex-col gap-8 justify-center items-center'
    >
      <T variant='p' styles='slogan'>
        Lorem ipsum
      </T>
      <T variant='h3' styles='h2' className='text-black '>
        Lorem ipsum dolor sit amet
      </T>
      <CarouselWithSwiper />
    </Section>
  );
}
