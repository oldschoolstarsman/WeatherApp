const container = document.querySelector('.container')
const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img');


const updateUI = (data) => {
    // remove display: none to display card when data is available
    card.classList.contains('d-none') ? card.classList.remove('d-none') : true;

    if (data) {
        const { cityDetails, weatherInfo } = data;

        // update cards detauls with data fetched
        details.innerHTML = `
            <h5 class="my-3">${cityDetails.EnglishName}</h5>
            <div class="my-3">${weatherInfo.WeatherText}</div>
            <div class="display-4 my-4">
                <span>${weatherInfo.Temperature.Metric.Value}</span>
                <span>&deg;C</span>
            </div>
            `;

        updateWeatherImage(weatherInfo);

        updateWeatherIcon(weatherInfo);
    }

}

//display day or night image from entered location
const updateWeatherImage = (weatherInfo) => {

    let timeSrc = null;

    weatherInfo.IsDayTime ? timeSrc = 'img/day.svg' : timeSrc = 'img/night.svg';

    time.setAttribute('src', timeSrc);

}

//display weather icon image from entered location current weather
const updateWeatherIcon = (weatherInfo) => {

    const iconSrc = `img/icons/${weatherInfo.WeatherIcon}.svg`;

    icon.setAttribute('src', iconSrc);

}


const updateCity = async (city) => {
    const cityDetails = await getCity(city);
    const weatherInfo = await getWeather(cityDetails.Key)

    return { cityDetails, weatherInfo };

}

// handle form, get input, invoke functions to display info on page
cityForm.addEventListener('submit', e => {
    e.preventDefault();
    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => { console.log(err)
            // const errorMessage = 'Ooops';
            // const el = document.createElement('div')
            // container.appendChild(el).innerHTML = errorMessage;
            // container.classList.add('error')
        })
})


