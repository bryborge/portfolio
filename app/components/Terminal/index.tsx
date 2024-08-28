"use client";

import { useState, useEffect, useRef } from 'react';
import * as constants from './constants';

/**
 * Renders a terminal component with a greeting message and a command prompt.
 * The user can type commands and see the output in the terminal.
 *
 * @return {JSX.Element} The terminal component.
 */
interface ToggleButtonProps {
  onExitCommand: () => void;
}

const Terminal: React.FC<ToggleButtonProps> = ({ onExitCommand }) => {
  // State
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);

  // React hooks
  useEffect(() => {
    if (typingIndex < constants.initialMessageLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput) => [...prevOutput, constants.initialMessageLines[typingIndex]]);
        setTypingIndex(typingIndex + 1);
      }, 25); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  /**
   * Handles the keydown event for the input element. If the pressed key is 'Enter',
   * it checks the value of the input and performs different actions based on its value.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keydown event object.
   * @return {void} This function does not return anything.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      if (input === 'clear') {
        setOutput([]); // Clear the output
      } else if (input === 'exit') {
        onExitCommand();
      } else {
        const newOutput = [...output, `$ ${input}`];

        if (input === '' || input.trim().length === 0) {
          newOutput.push(`${input}`);
        } else if (input === 'help') {
          newOutput.push('Commands:');
          constants.availableCommands.forEach((cmd) =>
            newOutput.push(`- ${cmd.command}: ${cmd.description}`),
            newOutput.push(`\xa0`)
          );
        } else if (input === 'hire') {
          newOutput.push('Resume downloading! Feel free to continue looking around...');
          if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
          }
        } else if (input === 'projects') {
          newOutput.push("Bryan's Top Projects:");
          newOutput.push("---------------------");
          newOutput.push("Github: https://github.com/bryborge?tab=repositories");
          newOutput.push("Gitlab: https://github.com/bryborge?tab=repositories");
        } else if (input === 'uptime') {
          newOutput.push(`Bryan has been coding for ${constants.daysOfCoding()} days! Please DO NOT reset him!`);
        } else if (constants.linuxList.includes(input)) {
          newOutput.push("What do you think this is ... linux? 🐧 Try 'help'")
        } else if (input === 'whoami') {
          newOutput.push(`Who is ... anyone, really...? 🤔🧘`);
        } else {
          newOutput.push(`brysh: command not found: ${input}`);
        }

        setOutput(newOutput);
      }

      setInput(''); // Clear the input
    }
  };

  // TODO: Variablize resume link url
  return (
    <div className="bg-black text-green-500 p-5 font-mono w-full min-h-screen mx-auto">
      <div className=" mb-4 overflow-scroll whitespace-nowrap">
        { output.map((line, index) => (
          <div key={index}>{line}</div>
        )) }
      </div>
      <div className="flex items-center">
        <span>root@root:~$ </span>
        <input
          type="text"
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent border-none text-green-500 outline-none flex-grow font-mono px-2" />
      </div>
      <a
        ref={downloadLinkRef}
        href="https://drive.google.com/uc?export=download&id=18ufroP5j3ALmdSiPGALKevLjIpwvo7kA"
        download
        style={{ display: 'none' }}>
        Download Resume
      </a>
    </div>
  );
};

export default Terminal;
