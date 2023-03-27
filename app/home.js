import { View } from "react-native"
import { useContext, useState } from "react";

import {
    useFonts,
    Poppins_400Regular,
} from "@expo-google-fonts/poppins";

import { ThemeContext } from "../styles/Theme";

import Navbar from "../components/screens/Navbar";
import Center from "../components/screens/Center";


const Home = () => {

    const { dark, setDark } = useContext(ThemeContext);
    const [running, setRunning] = useState(false);

    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View>
            <Navbar
                dark={dark}
                setDark={setDark}
            />
            <Center
                dark={dark}
                running={running}
                setRunning={setRunning}
            />
        </View>
    )
}

export default Home;