import React, { useContext, useEffect, useState } from "react";
import { DARK_THEME, LIGHT_THEME } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { DEFAULT_THEME } from "../constants/data";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { themeState } from "../recoils/atoms";
import { changeMode } from "../recoils/selectors";

function ThemeRecoilProvider({ children }) {
    const [isDarkMode, setDarkMode] = useRecoilState(themeState)
    const [monted, setMonted] = useState(false)

    useEffect(() => {
        const themeLocalID = localStorage.getItem('DARK_MODE')
        setDarkMode(themeLocalID === 'true')
        setMonted(true)
    }, [])

    if(!monted){
        return <div />
    }
    
    return (
        <ThemeProvider theme={isDarkMode ? DARK_THEME : LIGHT_THEME }>
            { children}
        </ThemeProvider>
    )
}

export default ThemeRecoilProvider