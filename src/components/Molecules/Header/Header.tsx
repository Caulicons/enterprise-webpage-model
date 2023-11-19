import HeaderDesktop from './Desktop/HeaderDesktop';
import HeaderMobile from './Mobile/HeaderMobile';

export default function Header() {
  return (
    <header className='flex w-full items-center justify-center bg-secondary'>
      <div className=' max-w-[1440px] min-h-[60px] w-full px-4 py-3'>
        <HeaderMobile />
        <HeaderDesktop />
      </div>
    </header>
  );
}
