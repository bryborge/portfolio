// import Image from 'next/image';
import Link from 'next/link';
// import blogIcon from './blog-icon.svg';
// import homeIcon from './home-icon.svg';
// import terminalIcon from './terminal-icon.svg';
import Socials from '../Socials';
import Clock from './Clock';

const Toolbar: React.FC = () => {
  return (
    <div className="bg-slate-200 h-16 w-auto flex flex-row justify-between items-center absolute sticky top-0 z-50">
      <div>
        <Link href="/">
          <button className="ml-8 hover:bg-slate-300 rounded" type="button">
            {/* <Image
              className="cursor-pointer"
              src={homeIcon}
              alt="Home"
            /> */}
            <span>Home</span>
          </button>
        </Link>
        <Link href="/terminal">
          <button className="ml-3 hover:bg-slate-300 rounded" type="button">
            {/* <Image
              className="cursor-pointer"
              src={terminalIcon}
              alt="The 'terminal' app"
            /> */}
            <span>Terminal</span>
          </button>
        </Link>
        <Link href="/articles">
          <button className="ml-3 hover:bg-slate-300 rounded" type="button">
            {/* <Image
              className="cursor-pointer"
              src={blogIcon}
              alt="Articles"
            /> */}
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
    </div>
  );
}

export default Toolbar;
