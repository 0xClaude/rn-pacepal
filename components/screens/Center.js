import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Running from '../Boxes/Running'

import { Audio } from 'expo-av';

import COLORS from '../../styles'

import Infobox from '../Boxes/Infobox'
import Start from '../Button/Start'

const Center = ({ dark, running, setRunning }) => {

    const [interval, setInterval] = useState(1);
    const [run, setRun] = useState(1);
    const [breakTime, setBreakTime] = useState(1);

    const [startSound, setStartSound] = useState();
    const [endSound, setEndSound] = useState();
    const [breakSound, setBreakSound] = useState();

    const getStartingSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../../assets/sounds/start.wav"));
        setStartSound(sound);
    }

    const getRestingSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../../assets/sounds/break.wav"));
        setBreakSound(sound);
    }

    const getCompleteSound = async () => {
        const { sound } = await Audio.Sound.createAsync(require("../../assets/sounds/complete.wav"));
        setEndSound(sound);
    }

    const getAllSounds = async () => {
        await getStartingSound();
        await getRestingSound();
        await getCompleteSound();
    }

    const playStart = async () => {
        await startSound.playAsync();
    }

    const playBreak = async () => {
        await breakSound.playAsync();
    }

    const playComplete = async () => {
        await endSound.playAsync();
    }

    useEffect(() => {
        getAllSounds();

        return () => {
            if (startSound) {
                startSound.unloadAsync();
            }
            if (endSound) {
                endSound.unloadAsync();
            }
            if (breakSound) {
                breakSound.unloadAsync();
            }
        }
    }, []);

    return (
        <SafeAreaView
            style={{
                padding: 10,
                backgroundColor: dark ? COLORS.dark.body : COLORS.light.body,
                height: "100%"
            }}
        >
            {!running ?
                <Infobox
                    dark={dark}
                    running={running}
                    setRunning={setRunning}
                    interval={interval}
                    setInterval={setInterval}
                    run={run}
                    setRun={setRun}
                    breakTime={breakTime}
                    setBreakTime={setBreakTime}
                /> :
                <Running
                    playStart={playStart}
                    playBreak={playBreak}
                    playComplete={playComplete}
                    running={running}
                    setRunning={setRunning}
                    interval={interval}
                    setInterval={setInterval}
                    run={run}
                    setRun={setRun}
                    breakTime={breakTime}
                    setBreakTime={setBreakTime}
                />}
            <Start running={running} setRunning={setRunning} playStart={playStart} />
        </SafeAreaView>
    )
}

export default Center