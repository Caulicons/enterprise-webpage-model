import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import T from '@/components/atoms/Typography';
import Section from '@/components/atoms/Section';

export default function MoreInfoHome() {
  return (
    <Section
      className='grid place-content-center bg-gradient-to-b from-white to-gray-700 px-8 py-14'
      childrenClassName='flex h-full flex-col items-center gap-14 md:flex-row'
    >
      <Image
        src={'/assets/images/Random/reunion2.jpg'}
        alt='logo'
        width={400}
        height={500}
        className='rounded-3xl'
      />
      <div className='flex flex-col gap-6 '>
        <T variant='p' styles='slogan' className='text-secondary'>
          Lorem ipsum
        </T>
        <T variant='h3' styles='h2' className='text-black'>
          Lorem ipsum dolor sit amet
        </T>
        <T>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,
          luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
          ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </T>
        <T className='text-2xl font-light'>- Loren Ipsun</T>
        <Button type='button' icon={'📜'}>
          More infos
        </Button>
      </div>
    </Section>
  );
}
