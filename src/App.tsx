import React, { useEffect, useState } from 'react'
import { About } from './components/sections/About'
import { Header } from './components/layout/Header'
import { SidePanel } from './components/layout/SidePanel'
import { ProjectSpotlight } from './components/sections/ProjectSpotlight'
import { Contact } from './components/sections/Contact'
import { Achievements } from './components/sections/Achievements'
import { BackgroundSwitcher } from './components/layout/BackgroundSwitcher'
import { CustomModal } from './components/ui/CustomModal'

export function App() {
  const [visible, setVisible] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalContent, setModalContent] = useState<React.ReactNode>(null)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  function getInitialDarkMode() {
    const hour = new Date().getHours()
    return hour >= 18 || hour < 6
  }

  function handleOpenModal(content: React.ReactNode) {
    setModalContent(content)
    setIsModalOpen(true)
  }

  function handleCloseModal() {
    setIsModalOpen(false)
    setModalContent(null)
  }

  const handleThemeToggle = () => setIsDarkMode(prev => !prev)

  return (
    <div className="relative min-h-screen overflow-hidden">

      <CustomModal isOpen={isModalOpen} onClose={handleCloseModal}>
        {modalContent}
      </CustomModal>

      <button
        onClick={handleThemeToggle}
        className="fixed top-4 right-4 flex pl-2 px-3 py-2 bg-[var(--gray-600)] text-white rounded-full shadow-md z-50 hover:bg-[var(--gray-400)]"
      >
        {isDarkMode
          ? '🌞 Light'
          : '🌙 Dark'}
      </button>
      <BackgroundSwitcher isDarkMode={isDarkMode} />

      <div
        id="app"
        className={`relative z-10 bg-[var(--gray-300)] pt-6 max-w-[976px] m-auto cursor-default transition-opacity duration-1500 ${
          visible
? 'opacity-99'
: 'opacity-0'
        }`}
      >

        <Header />
        <div className="flex justify-between">
          <div className="pl-2.5">
            <About />
            <ProjectSpotlight />
            <Achievements openModal={handleOpenModal} />
            <Contact />
          </div>
          <SidePanel />
        </div>
      </div>
    </div>
  )
}
