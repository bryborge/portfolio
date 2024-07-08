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
  // Constants
  const greetingMessage = "Oh hai! 👋 Type 'help' for a list of commands.";
  const availableCommands = [
    { command: 'clear', description: 'Clears the terminal screen' },
    { command: 'help', description: 'Lists available commands' },
  ];

  // Typing effect
  useEffect(() => {
    const typingSpeed = 50;

    if (typingIndex < greetingMessage.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput) => {
          const newOutput = [...prevOutput];
          if (newOutput.length === 0) {
            newOutput.push(greetingMessage[typingIndex]);
          } else {
            newOutput[0] = newOutput[0] + greetingMessage[typingIndex];
          }
          return newOutput;
        });

        setTypingIndex(typingIndex + 1);
      }, typingSpeed);

      return () => clearTimeout(timeout);
    }
  }, [typingIndex]);

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

        if (input === 'help') {
          newOutput.push('Available commands:');
          newOutput.push('-------------------');
          availableCommands.forEach((cmd) =>
            newOutput.push(`${cmd.command} - ${cmd.description}`)
          );
        } else {
          newOutput.push(`brysh: command not found: ${input}`);
        }

        setOutput(newOutput);
      }

      setInput(''); // Clear the input
    }
  };

  return (
    <div className="bg-black text-green-500 p-5 font-mono rounded-lg w-full max-w-lg mx-auto">
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
    </div>
  );
};

export default Terminal;
