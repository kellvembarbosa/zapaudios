// styled.d.ts
import 'styled-components';
interface IPalette {
  main: string
  contrastText: string
}
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
        primaryColor: string,
        secundaryColor: string,
        MainBackgroundColor: string,
        SecundaryBackgroundColor : string,
        cardColor: string,

        textColor: string,
        secundaryTextColor: string,

        textDarkColor: string,
        secundaryTextDarkColor: string
    },
    breakpoints: {
        sm: string,
        md: string,
        lg: string,
        xl: string,
    }
  }
}