import Image from '@/components/atoms/Image';
import Section from '@/components/atoms/Section';
import T from '@/components/atoms/Typography';

import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default function Functionary() {
  const functionaries = [
    {
      id: 1,
      url: 'assets/images/Peoples/Functionary/functionary01.jpg',
      name: 'John Doe',
      role: 'Sony CEO',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 2,
      url: 'assets/images/Peoples/Functionary/functionary02.jpg',
      name: 'Mia Chistian',
      role: 'Manager',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
    {
      id: 3,
      url: 'assets/images/Peoples/Functionary/functionary03.jpg',
      name: 'Robert Dewniey',
      role: 'Design',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
    },
  ];

  return (
    <Section
      className=' rounded-b-[33px] bg-gradient-to-b from-[#f4f0e0] to-secondary max-'
      childrenClassName='flex flex-col py-10 gap-10 w-full h-full min-h-screen items-center justify-end px-7'
    >
      <div>
        <T variant='p' styles='slogan'>
          Lorem ipsum
        </T>
        <T variant='h3' styles='h2' className='text-black'>
          Lorem ipsum dolor sit amet
        </T>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-12 text-center md:flex-row'>
        {functionaries.map((functionary) => (
          <div
            key={functionary.id}
            className='flex w-11/12 flex-col items-center gap-4 text-center max-w-[500px] '
          >
            <Image
              src={functionary.url}
              alt={functionary.name}
              width={300}
              height={300}
              className='w-full rounded-t-[33px]'
            />
            <div className='flex w-4/5 flex-col items-center justify-center gap-2 text-center '>
              <div>
                <T className='text:[21px] text-white md:text-[21px]'>
                  {functionary.name}
                </T>
                <T className='text:[21px] text-[#bebeb6] md:text-[21px]'>
                  {functionary.role}
                </T>
              </div>
              <span className='h-[1px] w-3 bg-secondary' />
              <T className='text:[21px] text-white md:text-[21px]'>
                {functionary.description}
              </T>
            </div>
            <ul className='flex gap-7 text-3xl text-primary [&_li]:rounded-full [&_li]:border [&_li]:border-primary [&_li]:p-2 [&_li]:transition-all hover:[&_li]:scale-[1.1] [&_li]:cursor-pointer'>
              <li className=''>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
