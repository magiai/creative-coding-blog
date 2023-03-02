'use client'

import React, { useState } from "react"

export const ThemeButton = () => {
    const [theme, setTheme] = useState<string>('theme--dark')

    const handleThemeChange = () => {
      let themeValue = theme === 'theme--dark' ? 'theme--light' : 'theme--dark' 
      setTheme(themeValue)
    }

    return (
        <button className = {theme} onClick = { handleThemeChange }>change theme</button>
    )
}