import './index.css'
import Header from './components/Header'
import MainContent from './components/main/MainContent'


function App() {

  return (
    <>
    <main className='bg-Neutral-900 px-4 pt-4 pb-12 flex flex-col gap-12 md:px-6 md:pt-6 md:pb-20 lg:pt-12 lg:gap-16'>
        <Header />
        <h1 className='text-Neutral-0 font-bricolage font-bold text-title leading-[120%] tracking-wide text-center'>How's the sky looking today?</h1>
        <MainContent />
     </main>
    </>
  )
}

export default App
