import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native'


import formatTime from '../../utils/formatTime'

const Running = ({ playStart, playBreak, playComplete, interval, run, breakTime }) => {

    const [time, setTime] = useState(run * 60);
    const [currentInterval, setCurrentInterval] = useState("Running");
    const [nextInterval, setNextInterval] = useState("Break");
    const [intervalCount, setIntervalCount] = useState(0);
    const [restTime, setRestTime] = useState(breakTime * 60);


    useEffect(() => {
        const timer = setInterval(() => {
            if (intervalCount === interval + 1) {
                playComplete();
                setCurrentInterval("Done");
                setNextInterval("");
                setTime(0);
                return;
            }
            if (time > 0) {
                setTime(prev => prev - 1);
            } else {
                if (currentInterval === "Running") {
                    playBreak();
                    setCurrentInterval("Break");
                    setNextInterval("Running");
                    setTime(restTime);
                } else {
                    playStart();
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
                {currentInterval !== "Done" && formatTime(time)}
            </Text>
            <Text>
                {currentInterval !== "Done" ? (
                    `Next: ${nextInterval} (${currentInterval === 'Running' ? formatTime(restTime) : formatTime(run * 60)}) | Intervals left: ${interval - intervalCount}`
                ) : (
                    `You ran ${interval} intervals, ${(run)} minute running and ${breakTime} minutes break. Well done!`
                )}
            </Text>
        </View>
    )
}

export default Running