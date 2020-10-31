import { selector } from "recoil";
import { themeState } from "./atoms";

export const changeMode = selector({
    key: 'changeTheme',
    get: ({ get }) => {
        const isModeDark = !get(themeState)
        return isModeDark
    },
    set: ({set}, newValue) => {
        console.log("newValue", newValue)
        localStorage.setItem('DARK_MODE', newValue.toString());
        set(themeState, newValue)
    }
})