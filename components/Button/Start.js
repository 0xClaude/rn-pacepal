import React from 'react'
import { Text, TouchableOpacity, Image, View } from 'react-native'


import COLORS from '../../styles'
import { useContext } from 'react'
import { ThemeContext } from '../../styles/Theme'

const Start = ({ running, setRunning, playStart }) => {


    const theme = useContext(ThemeContext);
    const { dark } = theme;

    return (
        <TouchableOpacity
            style={{
                marginTop: 20,
                backgroundColor: dark ? COLORS.dark.green : COLORS.light.green,
                padding: 20,
                flexDirection: "row",
                gap: 10,
            }}
            onPress={() => {
                setRunning(previous => !previous);
                !running ? playStart() : null;
            }}

        >
            <Image
                source={
                    !running ? require("../../assets/icons/shuttle.png") : require("../../assets/icons/stop-button.png")
                }
                style={{
                    width: 16,
                    height: 16,
                    tintColor: dark ? "#FFFFFF" : "#000000",
                }}
            />
            <Text
                style={{
                    color: dark ? "#FFFFFF" : "#000000",
                }}>
                {!running ? "Start" : "Stop"}
            </Text>
        </TouchableOpacity>
    )
}

export default Start