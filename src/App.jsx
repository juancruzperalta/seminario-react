
import SeriesGrid from "./components/cardsComponents/SeriesGrid"
import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { Home } from "./components/Home"

function App() {
  return (
    <>
      <div className="w-dvw flex flex-col min-h-screen items-center xl:max-w-[1200px] 2xl:max-w-[96vw] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] m-auto">
    <Header/>
      <div className="text-white text-center gap-8 flex items-center justify-center flex-col absolute top-0 m-auto left-0 right-0">
          <Home className="min-h-screen flex items-center justify-center" />
          
        <main className="xl:max-w-[1200px] 2xl:max-w-[96vw] lg:max-w-[1000px] md:max-w-[700px] sm:max-w-[600px] max-w-[400px] ">
        <SeriesGrid/>
        </main>
        <Footer className="mt-auto" />
        </div>
      </div>
    </>
  )
}

export default App
