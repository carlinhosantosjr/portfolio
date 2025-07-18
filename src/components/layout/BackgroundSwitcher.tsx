import React from 'react'
import backgroundImageDay from '../../assets/background-day.png'
import backgroundImageNight from '../../assets/background-night.png'

interface BackgroundSwitcherProps {
  isDarkMode: boolean
}

export const BackgroundSwitcher: React.FC<BackgroundSwitcherProps> = ({ isDarkMode }) => {
  return (
    <>
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
          isDarkMode
? 'opacity-100'
: 'opacity-0'
        }`}
        style={{ backgroundImage: `url(${backgroundImageNight})` }}
      />
      <div
        className={`fixed inset-0 -z-10 bg-cover bg-center bg-fixed transition-opacity duration-1000 ${
          isDarkMode
? 'opacity-0'
: 'opacity-100'
        }`}
        style={{ backgroundImage: `url(${backgroundImageDay})` }}
      />
    </>
  )
}
