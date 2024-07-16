import React, { useRef, useState } from "react";

export default function Timer({ date }) {
  const [day, setDay] = useState("0");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [second, setsecond] = useState("00");
  let intrval = useRef();

  const startTime = () => {
    const count = new Date(date).getTime();

    intrval = setInterval(() => {
      const now = new Date().getTime();
      const distance = count - now;
      const timeDay = Math.floor(distance / (1000 * 60 * 60 * 24));
      const timeHour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const timeMin = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const timeSecond = Math.floor((distance % (1000 * 60)) / 1000);
      if (distance < 0) {
        clearInterval(intrval.current);
      } else {
        setDay(timeDay);
        setHours(timeHour);
        setMinutes(timeMin);
        setsecond(timeSecond);
      }
    }, 1000);
  };
  React.useEffect(() => {
    startTime();
    return () => {
      clearInterval(intrval.current);
    };
  }, []);
  return (
    <>
      {/* <div className="flex max-sm:justify-center gap-5 text-primary">
        {day != "00" && (
          <div>
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": day }}></span>
            </span>
            day
          </div>
        )}
        <div>
          <span class="countdown font-mono text-2xl">
            <span style={{ "--value": hours }}></span>
          </span>
          hours
        </div>
        <div>
          <span class="countdown font-mono text-2xl">
            <span style={{ "--value": minutes }}></span>
          </span>
          min
        </div>
        <div>
          <span class="countdown font-mono text-2xl">
            <span style={{ "--value": second }}></span>
          </span>
          sec
        </div>
      </div> */}
      <br />
      <div className="flex max-sm:justify-center text-2xl font-bold gap-5 text-primary">
        {day != "00" && (
          <div>
            <span className="countdown font-mono text-2xl">
              <span style={{ "--value": day }}></span>
            </span>
            day
          </div>
        )}
        <div>
          <span className="countdown font-mono text-2xl">
            <span style={{ "--value": hours }}></span>:
            <span style={{ "--value": minutes }}></span>:
            <span style={{ "--value": second }}></span>
          </span>
          {/* hours */}
        </div>
      </div>
    </>
  );
}
