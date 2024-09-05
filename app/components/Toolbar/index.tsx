import Image from 'next/image';
import Link from 'next/link';
import homeIcon from './home-icon.svg';
import Socials from '../Socials';
import Clock from './Clock';

const Toolbar: React.FC = () => {
  return (
    <nav className="bg-slate-200 text-slate-800 h-16 w-auto flex flex-row justify-between items-center absolute sticky top-0 z-50">
      <div className="flex flex-row items-center">
        <Link href="/">
          <button className="ml-8 mr-3 h-10 w-10 p-1 hover:bg-slate-300 rounded" type="button">
            <Image
              className="cursor-pointer"
              src={homeIcon}
              alt="Home"
            />
          </button>
        </Link>

        <Link href="/terminal">
          <button className="p-2 hover:bg-slate-300 rounded font-bold" type="button">
            <span>Terminal</span>
          </button>
        </Link>

        <Link href="/blog">
          <button className="ml-1 p-2 hover:bg-slate-300 rounded font-bold" type="button">
            <span>Blog</span>
          </button>
        </Link>
      </div>
      <div></div>
      <div className="flex flex-row">
        <div className="mr-4 mt-1">
          <Socials />
        </div>
        <Clock />
      </div>
    </nav>
  );
}

export default Toolbar;
