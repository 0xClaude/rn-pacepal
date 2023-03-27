import React from 'react'
import { Text, View } from 'react-native'
import Slider from '@react-native-community/slider';

import COLORS from '../../styles';

const Infobox = ({ dark, interval, setInterval, run, setRun, breakTime, setBreakTime }) => {

    return (
        <View
            style={{
                backgroundColor: dark ? COLORS.dark.body : COLORS.light.body,
                padding: 20,
                borderRadius: 4,
                shadowOpacity: 0.99,
                shadowRadius: 10,
                shadowColor: "#000000",
                shadowOffset: { height: 0, width: 0 },
            }}
        >
            <View>
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}>
                    Intervals
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Slider
                    style={{
                        width: 200,
                        height: 40,
                    }}
                    minimumValue={2}
                    maximumValue={10}
                    minimumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    maximumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    step={1}
                    onValueChange={(value) => setInterval(value)}
                    value={interval}
                />
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}
                >
                    {interval}
                </Text>

            </View >
            <View>
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}
                >
                    Running Time
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Slider
                    style={{
                        width: 200,
                        height: 40
                    }}
                    minimumValue={1}
                    maximumValue={10}
                    minimumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    maximumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    step={1}
                    onValueChange={(value) => setRun(value)}
                    value={run}
                />
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}
                >
                    {run} minutes
                </Text>

            </View >
            <View>
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}
                >
                    Break
                </Text>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                }}
            >
                <Slider
                    style={{
                        width: 200,
                        height: 40
                    }}
                    minimumValue={1}
                    maximumValue={10}
                    minimumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    maximumTrackTintColor={dark ? COLORS.dark.color : COLORS.light.color}
                    step={1}
                    value={breakTime}
                    onValueChange={(value) => setBreakTime(value)}
                />
                <Text
                    style={{
                        color: dark ? COLORS.dark.color : COLORS.light.color,
                    }}
                >
                    {breakTime} minutes
                </Text>

            </View >

        </View>
    )
}

export default Infobox