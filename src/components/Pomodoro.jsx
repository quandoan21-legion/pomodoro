import React, {useState, useEffect, useRef} from 'react';

const Pomodoro = () => {
    // Biến số thêm vào để tạo deadline
    const h = 0;
    const m = 19;
    const s = 10;

    // day, hour, min second value
    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const [isStarted, setIsStarted] = useState(false);
    const [countdownClock, setCountdownClock] = useState("00:00:00");
    const [timeStamp, setTimeStamp] = useState((h * hour) + (m * min) + (s * sec));
    const intervalRef = useRef(null);

    function setTime(timeStamp) {
        let clockHour = Math.floor((timeStamp % day) / hour).toString().padStart(2, "0");
        let clockMin = Math.floor((timeStamp % hour) / min).toString().padStart(2, "0");
        let clockSecond = Math.floor((timeStamp % min) / sec).toString().padStart(2, "0");
        let countdownTime = clockHour + ":" + clockMin + ":" + clockSecond;
        setCountdownClock(countdownTime);
    }

    function startTime() {
        setIsStarted(true);
    }

    function pauseTime() {
        setIsStarted(false);
    }

    useEffect(() => {
        if (isStarted) {
            intervalRef.current = setInterval(() => {
                setTimeStamp(prevTimeStamp => {
                    const newTimeStamp = prevTimeStamp - 1000;
                    setTime(newTimeStamp);
                    return newTimeStamp;
                });
            }, 1000);
        } else {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [isStarted]);

    return (
        <div id={"countdown"}>
            <div id="countdown-clock">{countdownClock}</div>
            <div className="button-wrapper">
                <div className={"countdown-button"} id={"start-button"} onClick={startTime}>Start</div>
                <div className={"countdown-button"} id={"pause-button"} onClick={pauseTime}>Pause</div>
            </div>
        </div>
    );
};

export default Pomodoro;
