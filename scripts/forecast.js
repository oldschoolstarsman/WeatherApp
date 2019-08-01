const key = '	1Nj6UWhFQw9HWcc0IB4TeASYoPySCQEZ';

//get weather info
const getWeather = async (id) => {
    const base = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`

    const response = await fetch(base + query);
    const data = await response.json();

    return data[0];

}
// getWeather('349727');



const getCity = async (city) => {
    const base = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${city}`;

    const response = await fetch(base + query);
    const data = await response.json();
    return( data[0] )
};


// getCity('Manchester')
//     .then(data => getWeather(data.Key))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
