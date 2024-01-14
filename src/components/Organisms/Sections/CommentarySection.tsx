import Card from '@/components/Molecules/Card/Card';
import Section from '@/components/atoms/Section';
import T from '@/components/atoms/Typography';
import { MdOutlineFormatQuote } from 'react-icons/md';

export default function CommentarySection() {
  const comment = [
    {
      id: 1,
      url: 'assets/images/Peoples/Clients/client01.jpg',
      note: '⭐⭐⭐⭐⭐',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      name: 'Lorem Ipsun.',
    },
    {
      id: 2,
      url: 'assets/images/Peoples/Clients/client02.jpg',
      note: '⭐⭐⭐⭐⭐',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo',
      name: 'Lorem Ipsun.',
    },
  ];
  return (
    <Section
      className='flex w-full items-center justify-center gap-12 rounded-t-[75px]  bg-[#f4f0e0] px-5 py-12'
      childrenClassName='flex flex-col h-full min-h-[60vh]   max-w-[1140px] items-center justify-center gap-8'
    >
      <div className='grid gap-4'>
        <div className='text-primary'>
          <MdOutlineFormatQuote style={{ fontSize: '60px' }} />
        </div>
        <T variant='p' styles='slogan' className='text-xs'>
          LOREN IPSUM
        </T>
        <T variant='h2' styles='h2' className='text-3xl text-black md:text-4xl'>
          Lorem ipsum dolor
        </T>
      </div>
      <div className='flex flex-col gap-4 md:flex-row'>
        {comment.map((comment) => (
          <Card
            imgURL={comment.url}
            key={comment.id}
            className='relative max-w-[360px]'
          >
            <p>{comment.note}</p>
            <T variant='p' styles='pSoft'>
              {comment.description}
            </T>
            <T variant='p' styles='pBold'>
              {comment.name}
            </T>
          </Card>
        ))}
      </div>
    </Section>
  );
}
