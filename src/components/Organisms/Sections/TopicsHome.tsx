import Card from '@/components/Molecules/Card/Card';
import T from '@/components/atoms/Typography';
import { FaIdCard } from 'react-icons/fa6';
import { SlGraph } from 'react-icons/sl';
import Animation from '@/components/atoms/Animation';
export default function TopicsHome() {
  const cards = [{}];

  return (
    <section className='grid h-full min-h-screen w-full place-content-center gap-8 bg-gradient-to-b from-secondary/75 to-white px-6 py-16 text-center'>
      <T variant='p' styles='slogan'>
        Loren inpsum
      </T>
      <T variant='h2' styles='h2' className='text-black'>
        Lorem ipsum dolor sit amet
      </T>
      <Animation
        direction='left-to-right'
        className='mx-auto flex  flex-col gap-8 text-center md:w-11/12 md:flex-row '
      >
        {/* This can be a list */}
        <Card Icon={FaIdCard}>
          <T styles={'pSoft'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </T>
        </Card>
        <Card Icon={SlGraph}>
          <T styles={'pSoft'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </T>
        </Card>
        <Card Icon={FaIdCard}>
          <T styles={'pSoft'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </T>
        </Card>
        <Card Icon={SlGraph}>
          <T styles={'pSoft'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </T>
        </Card>
      </Animation>
    </section>
  );
}
