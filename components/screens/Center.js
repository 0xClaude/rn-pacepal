import React, { useState } from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Running from '../Boxes/Running'

import COLORS from '../../styles'

import Infobox from '../Boxes/Infobox'
import Start from '../Button/Start'

const Center = ({ dark, running, setRunning }) => {

    const [interval, setInterval] = useState(0);
    const [run, setRun] = useState(0);
    const [breakTime, setBreakTime] = useState(0);

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
                    running={running}
                    setRunning={setRunning}
                    interval={interval}
                    setInterval={setInterval}
                    run={run}
                    setRun={setRun}
                    breakTime={breakTime}
                    setBreakTime={setBreakTime}
                />}
            <Start running={running} setRunning={setRunning} />
        </SafeAreaView>
    )
}

export default Center