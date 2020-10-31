import { atom, selector } from "recoil";
import { DEFAULT_THEME } from "../constants/data";

 export const themeState = atom({
     key: 'themeState',
     default: DEFAULT_THEME
 })