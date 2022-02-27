import { useEffect, useRef, useState } from 'react';

const formatDate = (now) => {
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    return `${hours}:${minutes}:${seconds}`
}

function useClock(props) {
    const [time, setTime] = useState();

    const refTime = useRef();

    useEffect(() => {

        refTime.current = setInterval(() => {
            const now = new Date();
            const newTime = formatDate(now)
            setTime(newTime)
        }, 1000)

        return () => {
            clearInterval(refTime.current)
        }
    }, []);
    console.log('Clock reload');
    return { time };
}

export default useClock;