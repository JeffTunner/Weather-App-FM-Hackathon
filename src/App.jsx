import './index.css'
import Header from './components/Header'
import MainContent from './components/main/MainContent'


function App() {

  return (
    <>
    <main className='h-full w-screen px-4 pt-4 pb-12 md:w-full bg-Neutral-900 flex flex-col lg:gap-16 gap-12'>
        <Header />
      <div className='flex flex-col items-center lg:gap-16 gap-12'>
        <h1 className='text-Neutral-0 font-bricolage font-bold text-title leading-[120%] tracking-wide text-center'>How's the sky looking today?</h1>
        <MainContent />
      </div>

     </main>
    </>
  )
}

export default App
