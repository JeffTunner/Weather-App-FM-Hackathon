import './index.css'
import './api/geocoding'
import Header from './components/Header'
import MainContent from './components/main/MainContent'
import { useWeather } from './context/WeatherContext.jsx'
import errorIcon from "./assets/images/icon-error.svg"


function App() {

  const {error} = useWeather();

  return (
    <>
    <main className='bg-Neutral-900 px-4 pt-4 pb-12 flex flex-col gap-12 md:px-6 md:pt-6 md:pb-20 lg:pt-12 lg:gap-16'>
        <Header />
        {!error ? (
          <>
            <h1 className='text-Neutral-0 font-bricolage font-bold text-title leading-[120%] tracking-wide text-center'>How's the sky looking today?</h1>
            <MainContent />
          </>
        ) : (
          <section className='h-screen flex flex-col items-center gap-6 pt-10'>
            <div>
              <img src={errorIcon} alt="error" width={42} height={50}/>
            </div>
            <h1 className='font-bricolage font-bold text-Neutral-0 text-[52px] leading-[120%]'>Something went wrong</h1>
            <p className='font-dm font-medium text-Neutral-200 text-xl leading-[120%] max-w-[554px] text-center'>We couldn't connect to the server (API error). Please try again in a few moments.</p>
            <button className='bg-Neutral-700 px-4 py-3 rounded-lg font-dm font-medium text-Neutral-0 text-[16px] leading-[120%] cursor-pointer hover:bg-Neutral-800'>Retry</button>
          </section>
        )}

     </main>
    </>
  )
}

export default App
