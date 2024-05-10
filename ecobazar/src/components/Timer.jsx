import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState({ days: 1, hours: 23, minutes: 34, seconds: 57 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prevTime => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          seconds = 59;
          minutes -= 1;
        } else if (hours > 0) {
          seconds = 59;
          minutes = 59;
          hours -=1;
        } else if (days >0){
            seconds=59;
            minutes=59;
            hours=23;
            days-=1
        }

        return { days,hours,minutes ,seconds};
      });
    },1000);

    return () => clearInterval(interval);
}, []);

return (
<div className="flex space-x-4">
<div className="flex flex-col items-center">
<span className="text-2xl">{time.days.toString().padStart(2,'0')}     :</span>
<span className='text-slate-400'>DAYS</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl">{time.hours.toString().padStart(2,'0')}     :</span>
<span className='text-slate-400'>HOURS</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl">{time.minutes.toString().padStart(2,'0')}     :</span>
<span className='text-slate-400'>MINS</span>
</div>
<div className="flex flex-col items-center">
<span className="text-2xl">{time.seconds.toString().padStart(2,'0')}</span>
<span className='text-slate-400'>SECS</span></div></div>);
};

export default Timer;
