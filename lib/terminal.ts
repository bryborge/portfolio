import { Dispatch, SetStateAction, useState, useEffect, RefObject } from "react";
import * as constants from '../app/terminal/constants';


  /**
   * A hook that prints out the initial lines of text in the terminal, one at a time.
   *
   * @param {Dispatch<SetStateAction<string[]>>} setOutput - The function to update the output state.
   */
export const useTypingIndex = (setOutput: Dispatch<SetStateAction<string[]>>) => {
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
export const useInputFocus = (ref: RefObject<HTMLInputElement>) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
