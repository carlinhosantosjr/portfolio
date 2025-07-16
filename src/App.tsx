import { About } from './components/sections/About'
import { Header } from './components/layout/Header'
import backgroundImage from './assets/background.jpg'
import { SidePanel } from './components/layout/SidePanel'
import { ProjectSpotlight } from './components/sections/ProjectSpotlight'
import { Contact } from './components/sections/Contact'
import { useEffect } from 'react'
import { Achievements } from './components/sections/Achievements'

export function App() {
  useEffect(() => {
    const el = document.getElementById('app')
    el?.classList.remove('opacity-0')
  }, [])
  return (
    <div
      className="bg-cover bg-right  min-h-screen  transition-opacity duration-700 ease-in-out"
      style={{ backgroundImage: `url(${backgroundImage})` }}
      id="app"
    >
      <div className="bg-[var(--gray-300)] pt-6 max-w-[976px] m-auto opacity-98 cursor-default">
        <Header />
        <div className="flex justify-between">
          <div className="pl-2.5">
            <About />
            <ProjectSpotlight />
            <Achievements />
            <Contact />
          </div>
          <SidePanel />
        </div>
      </div>
    </div>

  )
}
