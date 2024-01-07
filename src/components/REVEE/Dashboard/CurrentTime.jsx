import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once when the component mounts

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  const formattedTime = `${currentHour}:${currentMinute < 10 ? '0' : ''}${currentMinute}`;

  return (
    <div>
      <p>{formattedTime}</p>
    </div>
  );
};

export default CurrentTime;
