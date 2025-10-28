
import SeriesGrid from "./components/cardsComponents/SeriesGrid"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {
  return (
    <>
    <Header/>
      <div className="text-white text-center pt-16 ">
        <Home />
        <main className="pt-8 pb-8 md:max-w-[1000px] sm:max-w-[800px] max-w-[400px]">
        <SeriesGrid/>
        </main>
      </div>
    </>
  )
}

export default App
