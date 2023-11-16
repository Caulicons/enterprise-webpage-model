import Card from '@/components/Molecules/Card/Card';
import Button from '@/components/atoms/Button';
import Image from '@/components/atoms/Image';
import T from '@/components/atoms/Typography';
import { GiFullPizza } from 'react-icons/gi';
import { MdAutoGraph } from 'react-icons/md';
import { BsBank } from 'react-icons/bs';

export default function MoreInfoHome() {
  return (
    <section>
      {/* First session */}
      <div className=' flex flex-col items-center gap-14 bg-gradient-to-b from-white to-gray-700 px-8 py-14 md:flex-row '>
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
            luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
            nec ullamcorper mattis, pulvinar dapibus leo.Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </T>
          <T className='text-2xl font-light'>- Loren Ipsun</T>
          <Button type='button' icon={'📜'}>
            More infos
          </Button>
        </div>
      </div>
      {/* Second session */}
      <div className='flex flex-col  gap-9 bg-gradient-to-b from-gray-700 to-secondary px-12 py-14 text-center'>
        <T variant='p' styles='slogan'>
          Lorem ipsum
        </T>
        <T variant='h3' styles='h2'>
          Lorem ipsum dolor sit amet
        </T>
        <div className='flex flex-col gap-8 md:flex-row'>
          <Card Icon={GiFullPizza}>
            <T styles={'pSoft'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </T>
            <Button type='button' icon={'💡'} variant='secondary'>
              More infos
            </Button>
          </Card>
          <Card Icon={MdAutoGraph}>
            <T styles={'pSoft'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </T>
            <Button type='button' icon={'💡'} variant='secondary'>
              More infos
            </Button>
          </Card>
          <Card Icon={BsBank}>
            <T styles={'pSoft'}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </T>
            <Button type='button' icon={'💡'} variant='secondary'>
              More infos
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}
