import React, { createContext } from 'react'
import { 
    brandColor, brandColorDark, 
    neturalColor, neturalColorDark,
    successColor, successColorDark,
    errorColor, errorColorDark,
    secondaryColor, secondaryColorDark} from '../../constants/colors';
    
export const ThemContext = createContext();

function ThemProvider({ children }) {



    return (
        <ThemContext.Provider value={{
            brandColor, brandColorDark,
            neturalColor, neturalColorDark,
            successColor, successColorDark,
            errorColor, errorColorDark,
            secondaryColor, secondaryColorDark
        }}>{children}</ThemContext.Provider>
    )
}

export default ThemProvider