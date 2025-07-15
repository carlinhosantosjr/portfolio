import { About } from './components/sections/About'
import { Header } from './components/layout/Header'
import backgroundImage from './assets/background-image.jpg'
import { SidePanel } from './components/layout/SidePanel'
import { ProjectSpotlight } from './components/sections/ProjectSpotlight'
import { Contact } from './components/sections/Contact'

export function App() {
  return (
    <div
      className="bg-[url('/caminho/da/imagem.jpg')] bg-cover bg-right  min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[var(--gray-300)] pt-6 max-w-[976px] m-auto opacity-98 cursor-default">
        <Header />
        <div className="flex justify-between">
          <div className="pl-2.5">
            <About />
            <ProjectSpotlight />
            <Contact />
          </div>
          <SidePanel />
        </div>
      </div>
    </div>

  )
}
