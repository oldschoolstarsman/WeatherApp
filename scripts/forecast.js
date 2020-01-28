const key = 'KZ5KBAkqLhZJkLiPm4G87ULeiNryPiZk';

//get weather info
const getWeather = async (id) => {
    const baseUrl = 'https://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`

    const response = await fetch(baseUrl + query);
    const data = await response.json();

    return data[0];

}


const getCity = async (city) => {

    const baseUrl = 'https://dataservice.accuweather.com/locations/v1/cities/search';

    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(baseUrl + query);
    const data = await response.json();
    return (data[0])
};




