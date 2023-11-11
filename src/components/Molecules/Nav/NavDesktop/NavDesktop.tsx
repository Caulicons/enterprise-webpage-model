import Image from '@/components/atoms/Image';
import Link from 'next/link';
import routes from '../../../../../data/routes';

export default function NavDesktop() {
  return (
    <div className=' hidden w-full items-center justify-between md:flex'>
      <Image
        src='/assets/images/Logo/logo.png'
        alt='logo'
        width={215}
        height={215}
        className='hidden md:flex'
      ></Image>
      <div>
        <ul className='flex'>
          {routes.map((route) => (
            <li
              className='mr-4 text-xl font-bold text-white hover:text-primary'
              key={route.name}
            >
              <Link href={route.href}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
