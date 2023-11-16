/* import Image from '@/components/atoms/Image'; */
import Image from 'next/image';
import HamburgerMenu from './HamburgerMenu';

export default function NavMobile() {
  return (
    <div className='flex w-full items-center justify-between md:hidden z-10'>
      <Image
        src='/assets/images/Logo/logoIcon.png'
        alt='logo'
        width={40}
        height={40}
        className=''
      />
      <HamburgerMenu />
    </div>
  );
}
