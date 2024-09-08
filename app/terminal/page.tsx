"use client";

import { useRouter } from 'next/navigation';
import { useState, useRef } from "react";
import * as constants from './constants';
import { buildResumeDownloadUrl } from '@/lib/resume';
import { useInputFocus, useTypingIndex } from '@/lib/terminal';

const Terminal: React.FC = () => {
  // Router
  const router = useRouter();
  // State
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  // Constants
  const PROMPT = 'root@root:~$';

  // Terminal library functions
  useTypingIndex(setOutput);
  useInputFocus(inputRef);
  
  /**
   * Handles the keydown event for the input element. If the pressed key is 'Enter',
   * it checks the value of the input and performs different actions based on its value.
   *
   * @param {React.KeyboardEvent<HTMLInputElement>} e - The keydown event object.
   * @return {void} This function does not return anything.
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const linuxCommandInputted = constants.linuxList.findIndex((i) => input.includes(i));

      if (input === 'clear') {
        setOutput([]); // Clear the output
      } else if (input === 'exit') {
        router.push('/');
      } else {
        const newOutput = [...output, `${PROMPT} ${input}`];

        if (input === '' || input.trim().length === 0) {
          newOutput.push(`${input}`);
        } else if (input === 'help') {
          newOutput.push('------------------');
          newOutput.push('AVAILABLE COMMANDS');
          newOutput.push('------------------');
          newOutput.push("\xa0");
          constants.availableCommands.forEach((cmd) =>
            newOutput.push(`* ${cmd.command}: ${cmd.description}`),
          );
        } else if (input === 'hire') {
          newOutput.push('Resume downloading! Feel free to continue looking around...');
          if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
          }
        } else if (input === 'projects') {
          newOutput.push("----------------------------");
          newOutput.push("Bryan's Project Repositories");
          newOutput.push("----------------------------");
          newOutput.push("\xa0");
          newOutput.push("* Github: https://github.com/bryborge?tab=repositories");
          newOutput.push("* Gitlab: https://gitlab.com/users/bryborge/projects");
        } else if (input === 'uptime') {
          newOutput.push(`Bryan has been coding for ${constants.daysOfCoding()} days! Please DO NOT reset him!`);
        } else if (input.match('rm')) {
          newOutput.push(`That is truly appalling behavior and you should be ashamed of yourself.`);
        } else if (linuxCommandInputted != -1) {
          newOutput.push("What do you think this is, your personal playground? :P")
        } else if (input.match('whoami') || input.match('whois')) {
          newOutput.push(`Cogito, ergo sum.`);
          newOutput.push(`According to Rene Descartes, this is the first principle from which one might begin to answer that question.`);
        } else {
          newOutput.push(`brysh: command not found: ${input}`);
        }

        setOutput(newOutput);
      }

      setInput(''); // Clear the input
    }
  };

  const resume = buildResumeDownloadUrl();

  return (
    <main className="mx-auto min-h-screen font-sans absolute w-full">
      <div className="bg-black text-green-500 p-5 font-mono min-h-screen mx-auto">
        <div className=" mb-4 overflow-scroll whitespace-nowrap">
          { output.map((line, index) => (
            <div key={index}>{line}</div>
          )) }
        </div>
        <div className="flex items-center">
          <span>{`${PROMPT} `}</span>
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
          href={resume}
          download
          style={{ display: 'none' }}>
          Download Resume
        </a>
      </div>
    </main>
  );
};

export default Terminal;
