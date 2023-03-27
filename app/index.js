import React, { useState, createContext } from 'react'

import Home from "./home";
import { ThemeContext } from '../styles/Theme';

const index = () => {

    const [dark, setDark] = useState(false);

    return (
        <ThemeContext.Provider value={{ dark, setDark }}>
            <Home />
        </ThemeContext.Provider>)
}

export default index