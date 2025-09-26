
async function getLocation() {
    let name = 'Delhi'
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${name}&count=5&language=en&format=json`;
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log(data.results[0].name, data.results[0].latitude, data.results[0].longitude);
    } catch (error) {
        console.error(error.message);
    }
}

getLocation();