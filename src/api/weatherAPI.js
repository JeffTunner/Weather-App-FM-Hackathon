
async function getWeather(lat, lon) {

    // temperature_unit= fahrenheit OR celsius
    // wind_speed_unit= mph OR kmh
    // precipitation_unit= inch OR mm
   /* let windSpeedUnit ='';
    let preciUnit = '';

    if(unit === "celsius") {
         windSpeedUnit = 'kmh';
         preciUnit = 'mm';
    } else if(unit === "fahrenheit") {
         windSpeedUnit = 'mph';
         preciUnit = 'inch';
    } else if(unit === null) {
        unit = 'celsius';
        windSpeedUnit = 'kmh';
        preciUnit = 'mm';
    }*/

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&wind_speed_unit=kmh&temperature_unit=celsius&precipitation_unit=mm`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}
export default getWeather;