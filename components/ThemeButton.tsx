'use client'

import React, { useState } from "react"

export const ThemeButton = () => {
    const [theme, setTheme] = useState<string>('dark')

    const handleThemeChange = () => {
      let themeValue = theme === 'dark' ? 'light' : 'dark' 
      setTheme(themeValue)
    }

    return (
        <button className = { `theme--${theme}` } onClick = { handleThemeChange }> { theme }</button>
    )
}