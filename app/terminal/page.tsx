"use client";

import { useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from "react";
import * as constants from './constants';
import { buildResumeDownloadUrl } from '@/lib/resume';

const Terminal: React.FC = () => {
  // Router
  const router = useRouter();
  // State
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLInputElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  // Constants
  const PROMPT = 'root@root:~$';
  const cmdOutput: string[] = [];

  const [typingIndex, setTypingIndex] = useState(0);
  const TYPING_SPEED = 25;

  useEffect(() => {
    if (typingIndex < constants.initialMessageLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput: any) => [...prevOutput, constants.initialMessageLines[typingIndex]]);
        setTypingIndex(typingIndex + 1);
      }, TYPING_SPEED);

      return () => clearTimeout(timeout);
    }
  }, [setOutput, typingIndex]);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef]);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output]);
  
  const writeCmdOutput = (output: string[]) => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < output.length) {
        setOutput(prevOutput => [...prevOutput, output[index]]);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, TYPING_SPEED);
  }

  const handleClearBuffer = (): void => {
    setOutput([]);
  }

  const handleExit = (): void => {
    router.push('/');
  }

  const handleHelp = (): void => {
    cmdOutput.push("\xa0");
    cmdOutput.push('------------------');
    cmdOutput.push('AVAILABLE COMMANDS');
    cmdOutput.push('------------------');
    cmdOutput.push("\xa0");
    cmdOutput.push("* clear:\xa0\xa0\xa0\xa0Clear the terminal screen");
    cmdOutput.push("* help:\xa0\xa0\xa0\xa0\xa0Show this help message");
    cmdOutput.push("* hire:\xa0\xa0\xa0\xa0\xa0Download Bryan's resume");
    cmdOutput.push("* projects:\xa0List Bryan's code project repositories");
    cmdOutput.push("* uptime:\xa0\xa0\xa0Print how long Bryan has been coding");
    cmdOutput.push("* exit:\xa0\xa0\xa0\xa0\xa0Exit current terminal session");
    
    writeCmdOutput(cmdOutput);    
  }

  const handleHire = (): void => {
    cmdOutput.push("\xa0");
    cmdOutput.push("Resume downloading! Feel free to continue looking around...");

    if (downloadLinkRef.current) {
      downloadLinkRef.current.click();
    }

    writeCmdOutput(cmdOutput);
  }

  const handleProjects = (): void => {
    cmdOutput.push("\xa0");
    cmdOutput.push("----------------------------");
    cmdOutput.push("Bryan's Project Repositories");
    cmdOutput.push("----------------------------");
    cmdOutput.push("\xa0");
    cmdOutput.push("* Github: https://github.com/bryborge?tab=repositories");
    cmdOutput.push("* Gitlab: https://gitlab.com/users/bryborge/projects");
  
    writeCmdOutput(cmdOutput);
  }

  const handleUptime = (): void => {
    cmdOutput.push("\xa0");
    cmdOutput.push(`Bryan has been coding for ${constants.daysOfCoding()} days! Please DO NOT reset him!`);
  
    writeCmdOutput(cmdOutput);
  }

  const handleUnknown = (): void => {
    setOutput([...output, `brysh: command not found: ${input}`]);
  }

  const terminalCommands: Record<string, () => void> = {
    clear: handleClearBuffer as () => void,
    exit: handleExit as () => void,
    help: handleHelp as () => void,
    hire: handleHire as () => void,
    projects: handleProjects as () => void,
    uptime: handleUptime as () => void,
    unknown: handleUnknown as () => void,
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setOutput([...output, `${PROMPT} ${input}`]);
      setInput('');

      if (input.match('rm')) {
        cmdOutput.push("\xa0");
        cmdOutput.push(`That is truly appalling behavior and you should be ashamed of yourself.`);
        writeCmdOutput(cmdOutput);
      } else if (input.match('whoami') || input.match('whois')) {
        cmdOutput.push("\xa0");
        cmdOutput.push(`Cogito, ergo sum.`);
        cmdOutput.push(`According to Rene Descartes, this is the first principle from which one might begin to answer that question.`);
        writeCmdOutput(cmdOutput);
      } else if (constants.linuxList.findIndex((i) => input.includes(i)) != -1) {
        cmdOutput.push("\xa0");
        cmdOutput.push("What do you think this is, your personal playground? :P")
        writeCmdOutput(cmdOutput);
      } else {
        const handler = terminalCommands[input] || terminalCommands['unknown'];
        handler();
      }
    }
  }

  const resume = buildResumeDownloadUrl();

  // TODO: Break down into smaller components
  return (
    <main className="mx-auto font-sans absolute sticky top-0 w-full">
      <div className="bg-black text-green-500 p-5 pt-20 font-mono min-h-screen overflow-x-auto mx-auto">
        {/* "terminal output" */}
        <div className=" mb-4 whitespace-nowrap">
          {output.map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </div>

        {/* "terminal input" */}
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
      <div className="absolute bottom-0" ref={bottomRef} />
    </main>
  );
};

export default Terminal;
