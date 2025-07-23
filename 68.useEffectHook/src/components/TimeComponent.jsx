import React, { useEffect, useInsertionEffect, useState } from "react";

function TimeComponent() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prveSeconds) => prveSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Seconds : {seconds} </h1>
    </div>
  );
}

export default TimeComponent;
