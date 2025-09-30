
async function getWeather(lat, lon, wind, temp, rain) {

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weather_code,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,weather_code&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,apparent_temperature&wind_speed_unit=${wind}&temperature_unit=${temp}&precipitation_unit=${rain}`;

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status: ${response.status}`)
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}
export default getWeather;