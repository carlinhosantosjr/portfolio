import { About } from './components/About'
import { Header } from './components/Header'
import backgroundImage from './assets/background-image.jpg'
import { SidePanel } from './components/SidePanel'

export function App() {
  return (
    <div
      className="bg-[url('/caminho/da/imagem.jpg')] bg-cover bg-center min-w-fit min-h-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="bg-[var(--gray-300)] pt-6 max-w-[976px] m-auto opacity-98">
        <Header />
        <div className="flex justify-between">
          <div className="pl-2.5">
            <About />
          </div>
          <SidePanel />
        </div>
      </div>
    </div>

  )
}
