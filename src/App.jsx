import './index.css'
import Header from './components/Header'


function App() {

  return (
    <>
    <main className='h-screen bg-Neutral-900'>
      <Header />
      <h1 className='text-Neutral-0 font-bricolage font-bold text-title text-center'>How's the sky looking today?</h1>
      {/*
         Units

  Switch to Imperial/Metric

  Temperature

  Celsius (°C)
  Fahrenheit (°F)

  Wind Speed

  km/h
  mph

  Precipitation

  Millimeters (mm)
  Inches (in)

  How's the sky looking today?

  Search for a city, e.g., New York
  Search

  Feels like
  <!-- Insert temperature here -->

  Humidity
  <!-- Insert humidity here -->

  Wind
  <!-- Insert wind here -->   
  
  Precipitation
  <!-- Insert precipitation here -->

  Daily forecast
  <!-- Insert daily forecast for the next 7 days here -->

  Hourly forecast
  <!-- Insert hourly forecast for the selected day here -->

*/}</main>
    </>
  )
}

export default App
