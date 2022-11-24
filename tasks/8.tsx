import {useEffect, useState} from "react";

// Clearing intervals v2
export const Clock = () => {
    const [time, setTime] = useState(new Date())

    setTimeout(() => {
        setTime(new Date())
    }, 1000)

    return (
        <div>{time.getSeconds()}</div>
    )
}
