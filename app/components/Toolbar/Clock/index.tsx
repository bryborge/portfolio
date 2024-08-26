"use client"

import { useEffect, useState } from "react";

const Clock = (): JSX.Element => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Note: We are using suppressHydrationWarning because it was causing the
  //       following error periodically:
  //       >  Text content does not match server-rendered HTML.
  // Further Reading: https://nextjs.org/docs/messages/react-hydration-error
  return (
    <div className="mr-8 w-16 text-lg" suppressHydrationWarning>
      { currentTime.getHours()}:{currentTime.getMinutes().toString().padStart(2, '0')}:{currentTime.getSeconds().toString().padStart(2, '0') }
    </div>
  );
}

export default Clock;
