import NavDesktop from './NavDesktop/NavDesktop';
import NavMobile from './NavMobile/NavMobile';

type NavBarProps = {} & React.HTMLAttributes<HTMLDivElement>;
export default function Nav() {
  return (
    <header className=' flex h-full min-h-[60px] w-full items-center justify-center bg-secondary px-4 py-3'>
      <NavMobile />
      <NavDesktop />
    </header>
  );
}
