import React, { useEffect, useRef, useState } from 'react';
import './Time.css';

const Timer = ({ expire, setTimeUp }) => {
    const [days, setDays] = useState('00');
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setseconds] = useState('00');

    let interval = useRef();

    const startTimer = () => {
        const countdownDate = new Date(expire).getTime();
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            const day = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hour = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
            const minute = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
            const second = Math.floor((distance % (1000 * 60) / (1000)));

            if (distance < 0) {
                setTimeUp(true);
                clearInterval(interval.current)
            }
            else {
                setDays(day);
                setHours(hour);
                setMinutes(minute);
                setseconds(second);
                setTimeUp(false);
            }

        }, 1000);
    }

    useEffect(() => {
        startTimer();
        console.log(seconds);
        return () => {
            clearInterval(interval.current);
        }
    })


    return (
        <div className="d-flex justify-content-center">
            <div className="timer-box" >{days.toString().length === 1 ? "0" + days : days}</div>
            <div className="timer-box" >{hours.toString().length === 1 ? "0" + hours : hours}</div>
            <div className="timer-box" >{minutes.toString().length === 1 ? "0" + minutes : minutes}</div>
            <div className="timer-box" >{seconds.toString().length === 1 ? "0" + seconds : seconds}</div>
        </div>
    )


};

export default Timer;