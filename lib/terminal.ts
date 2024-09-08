import { useState, useEffect } from "react";
import * as constants from '../app/terminal/constants';

/**
 * A hook that manages the state of the typing effect in the terminal.
 * It will automatically type out the initial message lines and then
 * stop.
 *
 * @param {function} setOutput - The function to call to update the output
 * @returns {number} The typing index
 */
export const useTypingIndex = (setOutput: any) => {
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    if (typingIndex < constants.initialMessageLines.length) {
      const timeout = setTimeout(() => {
        setOutput((prevOutput: any) => [...prevOutput, constants.initialMessageLines[typingIndex]]);
        setTypingIndex(typingIndex + 1);
      }, 25); // Adjust typing speed here
      return () => clearTimeout(timeout);
    }
  }, [typingIndex, setOutput]);
}

/**
 * A hook that automatically focuses the terminal input element when the
 * component is rendered.
 *
 * @param {React.MutableRefObject<HTMLInputElement | null>} ref - The ref to the input element
 * @returns {void}
 */
export const useInputFocus = (ref: any) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
