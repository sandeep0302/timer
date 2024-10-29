import React, { useEffect } from 'react';

function Clock({ time, setTime }) {
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      let h = now.getHours();
      let m = now.getMinutes();
      let s = now.getSeconds();
      const period = h >= 12 ? 'PM' : 'AM';
      
      // Convert to 12-hour format
      h = h % 12;
      h = h === 0 ? 12 : h;
      
      const clock = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")} ${period}`;
      setTime(clock);
    }, 1000);
    
    return () => clearInterval(timer);
  }, [setTime]);

  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Current Time</h2>
      <div className="inline-block bg-white rounded-lg shadow-lg px-6 py-3">
        <span className="text-3xl font-mono text-gray-700">{time}</span>
      </div>
    </div>
  );
}

export default Clock;