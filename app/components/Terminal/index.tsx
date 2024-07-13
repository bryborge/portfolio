"use client";

import { useState, useEffect, useRef } from 'react';

/**
 * Renders a terminal component with a greeting message and a command prompt.
 * The user can type commands and see the output in the terminal.
 *
 * @return {JSX.Element} The terminal component.
 */
const Terminal = (): JSX.Element => {
  // State
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  // Functions
  const daysOfCoding = () => {
    const today: any                 = new Date();
    const dateStartedCoding: any     = new Date("03/02/2015");
    const millisecondsPerDay: number = 24 * 60 * 60 * 1000;

    return Math.floor((today - dateStartedCoding) / (millisecondsPerDay));
  }
  // Constants
  const asciiArt = `
    ░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0░░░░\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0░░░░\xa0\xa0\xa0\xa0\xa0\xa0░░
    ▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒▒▒▒
    ▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓▓▓\xa0\xa0\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0▓▓
    █\xa0\xa0████\xa0\xa0██\xa0\xa0███\xa0\xa0██████\xa0\xa0█████\xa0\xa0████\xa0\xa0████████\xa0\xa0█
    █\xa0\xa0\xa0\xa0\xa0\xa0\xa0███\xa0\xa0████\xa0\xa0█████\xa0\xa0██████\xa0\xa0\xa0\xa0\xa0\xa0████\xa0\xa0\xa0\xa0\xa0\xa0██
  `;
  const availableCommands = [
    { command: 'clear', description: 'Clears the terminal' },
    { command: 'help', description: 'Lists available commands' },
    { command: 'hire', description: "Download Bryan's resume" },
    { command: 'projects', description: 'List top projects' },
    { command: 'uptime', description: 'Show how long Bryan has been coding' },
  ];
  const projectList = [
    {
      project: 'Portfolio (this app)',
      description: '🗂️ My personal portfolio website.',
      link: 'https://github.com/bryborge/portfolio'
    },
    {
      project: 'Cosmos',
      description: '🪐 🔭 A monorepo where I define and manage infrastructure in my homelab and on various cloud provider platforms.',
      link: 'https://github.com/bryborge/cosmos'
    },
    {
      project: 'Comicdex',
      description: '💭 A platform for managing comic book collections.',
      link: 'https://github.com/bryborge/comicdex'
    }
  ];
  const linuxList = ['ps', 'pwd', 'touch', 'mv', 'grep', 'sed', 'awk', 'tail', 'sudo', 'kill', 'killall', 'kill -9', 'top', 'htop', 'free', 'df', 'du', 'du -h', 'df -h', 'ls', 'ls -a', 'ls -l', 'ls -a -l', 'cat', 'cat README.md', 'cat LICENSE', 'cat package.json', 'cat package-lock.json', 'hostname', 'curl'];
  const systemInfo = [
    `\xa0`,
    'System Information:',
    '-------------------',
    'OS: BryOS 1.0',
    'Kernel: 5.4.0-bleeding-edge',
    `Uptime: ${daysOfCoding()} days`,
    'Packages: 42',
    'Shell: brysh 0.1',
    '-------------------',
    `\xa0`,
    'Type "help" for a list of available commands.',
    `\xa0`,
  ];
  const initialMessageLines = asciiArt.trim().split('\n').concat(systemInfo);

  // React hooks

  // Set the initial message
  useEffect(() => {
    if (typingIndex < initialMessageLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput) => [...prevOutput, initialMessageLines[typingIndex]]);
        setTypingIndex(typingIndex + 1);
      }, 150); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, asciiArt, initialMessageLines]);

  // Focus the terminal input element
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
        setOutput([]); // Clear the output
        setTypingIndex(0); // Reset typing index
      } else {
        const newOutput = [...output, `$ ${input}`];

        if (input === '' || input.trim().length === 0) {
          newOutput.push(`${input}`);
        } else if (input === 'help') {
          newOutput.push('Commands:');
          availableCommands.forEach((cmd) =>
            newOutput.push(`- ${cmd.command}: ${cmd.description}`),
            newOutput.push(`\xa0`)
          );
        } else if (input === 'hire') {
          newOutput.push('Resume downloaded!');
          if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
          }
        } else if (input === 'projects') {
          newOutput.push("Bryan's Top Projects:");
          newOutput.push("-------------------------");
          projectList.forEach((cmd) => {
            newOutput.push(`\xa0`),
            newOutput.push(`* ${cmd.project}: (${cmd.link})`),
            newOutput.push(`\xa0`),
            newOutput.push(`${cmd.description}`)
          })
        } else if (input === 'uptime') {
          newOutput.push(`Bryan has been coding for ${daysOfCoding()} days! Please DO NOT reset him! 😜`);
        } else if (linuxList.includes(input)) {
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

  return (
    <div className="bg-black text-green-500 p-5 mb-12 font-mono rounded-lg w-full mx-auto overflow-scroll">
      <div className="min-h-[420px] mb-4">
        { output.map((line, index) => (
          <div key={index}>{line}</div>
        )) }
      </div>
      <div className="flex items-center">
        <span>$ </span>
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
        href="https://drive.google.com/uc?export=download&id=1KyJ0m44D0yPw2UXUXa7qGerzz9OLZikQ"
        download
        style={{ display: 'none' }}>
        Download Resume
      </a>
    </div>
  );
};

export default Terminal;
