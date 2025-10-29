
import SeriesGrid from "./components/cardsComponents/SeriesGrid"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {
  return (
    <>
    <Header/>
      <div className="text-white text-center md:max-w-[1200px] pt-18 sm:max-w-[800px] max-w-[400px] gap-8 flex items-center justify-center flex-col">
        <Home />
        <main>
        <SeriesGrid/>
        </main>
      </div>
    </>
  )
}

export default App
