import React, {useState, useEffect, useRef, useContext} from 'react';
import addPomodoro from './addPomodoro';
import {IsLoginContext} from "../App";


const Pomodoro = () => {
    const userInfo = useContext(IsLoginContext)
    const [h, setH] = useState(0);
    const [m, setM] = useState(0);
    const [s, setS] = useState(0);

    const sec = 1000;
    const min = sec * 60;
    const hour = min * 60;
    const day = hour * 24;

    const [isStarted, setIsStarted] = useState(false);
    const [countdownClock, setCountdownClock] = useState("00:00:00");
    const [timeStamp, setTimeStamp] = useState(0);
    const intervalRef = useRef(null);

    // let start
    let end

    const setTime = (timeStamp, start) => {
        if (timeStamp <= 0) {
            clearInterval(intervalRef.current);
            setIsStarted(false);
            end = new Date()
            addPomodoro(userInfo.userID, start, end)
            setCountdownClock("00:00:00");
            return;
        }

        const clockHour = Math.floor((timeStamp % day) / hour).toString().padStart(2, "0");
        const clockMin = Math.floor((timeStamp % hour) / min).toString().padStart(2, "0");
        const clockSecond = Math.floor((timeStamp % min) / sec).toString().padStart(2, "0");
        const countdownTime = `${clockHour}:${clockMin}:${clockSecond}`;
        setCountdownClock(countdownTime);
    };

    const startTime = () => {
        setTimeStamp((h * hour) + (m * min) + (s * sec));

        setIsStarted(true);
    };

    const pauseTime = () => {
        setIsStarted(false);
    };

    useEffect(() => {
        if (isStarted) {
            let start = new Date()
            intervalRef.current = setInterval(() => {
                setTimeStamp((prevTimeStamp) => {
                    const newTimeStamp = prevTimeStamp - 1000;
                    setTime(newTimeStamp, start);
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

    const validateInput = (event) => {
        const {name, value} = event.target;
        if (value === '' || /^[0-9\b]+$/.test(value)) {
            const numValue = parseInt(value) || 0;
            if (name === 'hour') {
                if (numValue >= 0 && numValue <= 23) {
                    setH(numValue);
                }
            } else if (name === 'minute' || name === 'second') {
                if (numValue >= 0 && numValue <= 59) {
                    name === 'minute' ? setM(numValue) : setS(numValue);
                }
            }
        }
    };

    return (
        <div id="countdown">
            <div id="countdown-clock">{countdownClock}</div>
            <div id="input-wrapper">
                <input
                    type="text"
                    placeholder="Hour"
                    name="hour"
                    value={h}
                    onChange={validateInput}
                />
                <input
                    type="text"
                    placeholder="Minute"
                    name="minute"
                    value={m}
                    onChange={validateInput}
                />
                <input
                    type="text"
                    placeholder="Second"
                    name="second"
                    value={s}
                    onChange={validateInput}
                />
            </div>
            <div className="button-wrapper">
                <div className="countdown-button" id="start-button" onClick={startTime}>Start</div>
                <div className="countdown-button" id="pause-button" onClick={pauseTime}>Pause</div>
            </div>
        </div>
    );
};

export default Pomodoro;
