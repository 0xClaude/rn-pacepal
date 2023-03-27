import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import COLORS from '../../styles'

const Navbar = ({ dark, setDark }) => {
    return (
        <SafeAreaView
            style={{
                padding: 10,
                backgroundColor: dark ? COLORS.dark.green : COLORS.light.green,
                columnGap: 10,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        columnGap: 10,
                    }}
                >
                    <Image
                        source={
                            require("../../assets/icons/shoes.png")
                        }
                        style={{
                            width: 16,
                            height: 16,
                            tintColor: dark ? "#FFFFFF" : "#000000",
                        }}
                    />
                    <Text
                        style={{
                            fontFamily: "Poppins_400Regular",
                            color: dark ? "#FFFFFF" : "#000000",

                        }}
                    >
                        RunPal
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        onPress={() => setDark(previous => !previous)}
                    >
                        <Image
                            source={
                                dark ? require("../../assets/icons/sun.png") : require("../../assets/icons/moon.png")
                            }
                            style={{
                                width: 16,
                                height: 16,
                                tintColor: dark ? "#FFFFFF" : "#000000",

                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Navbar
