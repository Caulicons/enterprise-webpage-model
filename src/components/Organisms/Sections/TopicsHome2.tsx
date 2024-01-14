import Card from '@/components/Molecules/Card/Card';
import Animation from '@/components/atoms/Animation';
import Button from '@/components/atoms/Button';
import T from '@/components/atoms/Typography';
import { BsBank } from 'react-icons/bs';
import { GiFullPizza } from 'react-icons/gi';
import { MdAutoGraph } from 'react-icons/md';

export default function TopicsHome2() {
  const carts = [
    {
      id: 1,
      icon: GiFullPizza,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 2,
      icon: MdAutoGraph,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    {
      id: 3,
      icon: BsBank,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
  ];

  return (
    <Animation className='grid place-content-center rounded-b-[75px] bg-gradient-to-b from-gray-700 to-secondary px-12 py-14 text-center'>
      <div className='flex flex-col gap-9 '>
        <T variant='p' styles='slogan'>
          Lorem ipsum
        </T>
        <T variant='h3' styles='h2'>
          Lorem ipsum dolor sit amet
        </T>
        <div className='flex flex-col gap-8 md:flex-row'>
          {carts.map((cart) => (
            <Card key={cart.id} Icon={cart.icon}>
              <T styles={'pSoft'}>{cart.description}</T>
              <Button type='button' icon={'💡'} variant='secondary'>
                More infos
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </Animation>
  );
}
