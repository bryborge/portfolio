"use client";

import { useState, useEffect, useRef } from 'react';

/**
 * Renders a terminal component with a greeting message and a command prompt.
 * The user can type commands and see the output in the terminal.
 *
 * @return {JSX.Element} The terminal component.
 */
const Terminal = () => {
  // State
  const [input, setInput] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [typingIndex, setTypingIndex] = useState(0);
  // Refs
  const inputRef = useRef<HTMLInputElement>(null);
  const downloadLinkRef = useRef<HTMLAnchorElement>(null);
  // Constants
  const asciiArt = `
    ░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0\xa0░░░\xa0\xa0░░░░\xa0\xa0░░░\xa0\xa0\xa0\xa0\xa0\xa0░░░░\xa0\xa0\xa0\xa0\xa0\xa0░░
    ▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒\xa0\xa0▒▒▒▒\xa0\xa0▒▒\xa0\xa0▒▒▒▒▒▒▒
    ▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0\xa0▓▓▓▓▓\xa0\xa0\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓▓\xa0\xa0▓▓▓\xa0\xa0\xa0\xa0\xa0\xa0▓▓
    █\xa0\xa0████\xa0\xa0██\xa0\xa0███\xa0\xa0██████\xa0\xa0█████\xa0\xa0████\xa0\xa0████████\xa0\xa0█
    █\xa0\xa0\xa0\xa0\xa0\xa0\xa0███\xa0\xa0████\xa0\xa0█████\xa0\xa0██████\xa0\xa0\xa0\xa0\xa0\xa0████\xa0\xa0\xa0\xa0\xa0\xa0██
  `;
  const availableCommands = [
    { command: 'clear', description: 'Clears the terminal screen' },
    { command: 'help', description: 'Lists available commands' },
    { command: 'hire', description: 'Downloads resume' },
  ];

  // Typing effect
  useEffect(() => {
    const systemInfo = [
      `\xa0`,
      'System Information:',
      '-------------------',
      'OS: BryOS 1.0',
      'Kernel: 5.4.0-42-bleeding-edge',
      'Uptime: 3416 day, 5 hours',
      'Packages: 42',
      'Shell: brysh 0.1',
      '-------------------',
      `\xa0`,
      'Type "help" for a list of available commands.',
      `\xa0`,
    ];
    const initialMessageLines = asciiArt.trim().split('\n').concat(systemInfo);

    if (typingIndex < initialMessageLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput) => [...prevOutput, initialMessageLines[typingIndex]]);
        setTypingIndex(typingIndex + 1);
      }, 150); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, asciiArt]);

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
      } else {
        const newOutput = [...output, `$ ${input}`];

        if (input === '' || input.trim().length === 0) {
          newOutput.push(`${input}`);
        } else if (input === 'help') {
          newOutput.push('Commands:');
          availableCommands.forEach((cmd) =>
            newOutput.push(`- ${cmd.command}: ${cmd.description}`)
          );
        } else if (input === 'hire') {
          newOutput.push('Resume downloaded!');
          if (downloadLinkRef.current) {
            downloadLinkRef.current.click();
          }
        } else {
          newOutput.push(`brysh: command not found: ${input}`);
        }

        setOutput(newOutput);
      }

      setInput(''); // Clear the input
    }
  };

  return (
    <div className="bg-black text-green-500 p-5 font-mono rounded-lg w-full max-w-lg mx-auto overflow-scroll">
      <div className="min-h-48 mb-4">
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
          className="bg-transparent border-none text-green-500 outline-none flex-grow font-mono px-2"
        />
      </div>
      <a
        ref={downloadLinkRef}
        href="https://drive.google.com/uc?export=download&id=1KyJ0m44D0yPw2UXUXa7qGerzz9OLZikQ"
        download
        style={{ display: 'none' }}
      >
        Download Resume
      </a>
    </div>
  );
};

export default Terminal;
