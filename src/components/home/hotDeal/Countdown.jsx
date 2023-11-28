import React from 'react';


const Countdown = () => {
    let sec = 59;
    let min = 59;
    let hour = 23;
    let day = 29;
    setInterval(() => {
      if (sec > 0) {
        sec--;
        if (sec == 0) {
          min--;
          sec = 59;
          if (min == 0) {
            hour--;
            min = 59;
            if (hour == 0) {
              day--;
              hour = 23;
            }
          }
        }
      }
      document.getElementById('countdown-sec').style.setProperty('--value', sec)
      document.getElementById('countdown-min').style.setProperty('--value', min)
      document.getElementById('countdown-hour').style.setProperty('--value', hour)
      document.getElementById('countdown-day').style.setProperty('--value', day)

    }, 1000)
    return (
        <div>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span id='countdown-day' style={{ "--value": 15 }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span id='countdown-hour' style={{ "--value": 10 }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span id='countdown-min' style={{ "--value": 24 }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span id='countdown-sec' style={{ "--value": 36 }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default Countdown;