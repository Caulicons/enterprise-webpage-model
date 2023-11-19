import HeaderDesktop from './Desktop/HeaderDesktop';
import HeaderMobile from './Mobile/HeaderMobile';

export default function Header() {
  return (
    <header className=' flex h-full min-h-[60px] w-full items-center justify-center bg-secondary px-4 py-3'>
      <HeaderMobile />
      <HeaderDesktop />
    </header>
  );
}
