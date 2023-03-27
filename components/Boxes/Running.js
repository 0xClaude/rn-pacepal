import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

import formatTime from '../../utils/formatTime'

const Running = ({ interval, run, breakTime }) => {

    const [time, setTime] = useState(run * 60);
    const [currentInterval, setCurrentInterval] = useState("Running");
    const [nextInterval, setNextInterval] = useState("Break");
    const [intervalCount, setIntervalCount] = useState(0);
    const [restTime, setRestTime] = useState(breakTime * 60);

    const oneSession = ["Running", "Break"];

    useEffect(() => {
        const timer = setInterval(() => {
            if (intervalCount === interval) {
                setCurrentInterval("Done");
                setNextInterval("");
                setTime(0);
                return;
            }
            if (time > 0) {
                // TODO - Play sound
                setTime(prev => prev - 1);
            } else {
                if (currentInterval === "Running") {
                    setCurrentInterval("Break");
                    setNextInterval("Running");
                    setTime(restTime);
                } else {
                    setCurrentInterval("Running");
                    setNextInterval("Break");
                    setIntervalCount(prev => prev + 1);
                    setTime(run * 60);
                }
            }
        }, 1000);

        return () => {
            clearInterval(timer);
        }
    }, [time]);

    return (
        <View
            style={{
                backgroundColor: "#FFFFFF",
                padding: 20,
            }}
        >
            <Text
                style={{
                    fontSize: 40,
                }}
            >
                {currentInterval}
            </Text>
            <Text
                style={{
                    fontSize: 50,
                }}>
                {formatTime(time)}
            </Text>
            <Text>
                Next: {currentInterval === "Running" ? "Break" : "Running"} ({currentInterval === "Running" ? formatTime(restTime) : formatTime(run * 60)}) | Intervals left: {interval - intervalCount}
            </Text>
        </View>
    )
}

export default Running