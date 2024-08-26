import Image from 'next/image';
import terminalIcon from './terminal-icon.svg';
import Socials from '../Socials';
import Clock from './Clock';

interface ToggleButtonProps {
  onTerminalAppClick: () => void;
}

const Toolbar: React.FC<ToggleButtonProps> = ({ onTerminalAppClick }) => {
  return (
    <div className="bg-slate-200 h-16 w-auto flex flex-row justify-between items-center absolute sticky top-0 z-50">
      <button className="ml-8 h-10 w-10 p-0.5 hover:bg-slate-300 rounded" type="button">
        <Image
          className="cursor-pointer"
          src={terminalIcon}
          alt="The 'terminal' app"
          onClick={onTerminalAppClick}
        />
      </button>
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
