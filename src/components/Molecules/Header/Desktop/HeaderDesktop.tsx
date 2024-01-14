import Image from '@/components/atoms/Image';
import Link from 'next/link';
import routes from '../../../../../data/routes';

export default function HeaderDesktop() {
  return (
    <div className=' hidden max-h-[70px] w-full items-center justify-between md:flex '>
      <a href='/'>
        <Image
          src='/assets/images/Logo/logo.png'
          alt='logo'
          width={215}
          height={215}
          className='hidden md:flex'
        />
      </a>
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
