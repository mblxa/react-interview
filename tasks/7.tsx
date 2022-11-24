import {useEffect, useState} from "react";

// Clearing intervals
export const Clock = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    })

    return (
        <div>{time.getSeconds()}</div>
    )
}
