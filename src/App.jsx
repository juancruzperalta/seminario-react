
import SeriesGrid from "./components/cardsComponents/SeriesGrid"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {
  return (
    <>
      <div className="w-dvw flex items-center xl:max-w-[1200px] 2xl:max-w-[96vw] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px]  m-auto">
    <Header/>
      <div className="text-white text-center gap-8 flex items-center justify-center flex-col absolute top-0 m-auto left-0 right-0">
        <Home />
        <main className="xl:max-w-[1200px] 2xl:max-w-[96vw] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] ">
        <SeriesGrid/>
        </main>
      </div>
      </div>
    </>
  )
}

export default App
