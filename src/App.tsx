import { Header } from './components/Header'

export function App() {
  return (
    <div className="bg-[var(--background-darker)] min-w-fit min-h-screen">
      <div className="bg-[var(--background-maincard)] pt-6 max-w-[976px] m-auto">
        <Header />
      </div>
    </div>

  )
}
