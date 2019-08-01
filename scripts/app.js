const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('icon img');

const updateUI = (data) => {

    // store info from city Object
    // const cityDetails = data.cityDetails;
    // const weatherInfo = data.weatherInfo;

    const {cityDetails, weatherInfo } = data;

    // update div details template with new info

 
    details.innerHTML = `
        <h5 class="my-3">${cityDetails.EnglishName}</h5>
        <div class="my-3">${weatherInfo.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weatherInfo.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
        `;

    // remove the d-none class if present
    if(card.classList.contains('d-none')) {
        card.classList.remove('d-none')
        // other syntax, better?
        //card.classList.contains('d-none') ? card.classList.remove('d-none') : 1
    }

}

const updateCity = async (city) => {

    const cityDetails = await getCity(city);
    const weatherInfo = await getWeather(cityDetails.Key)

    return {cityDetails, weatherInfo};
   
}

cityForm.addEventListener('submit', e => {
    e.preventDefault();
    // get city value
    const city = cityForm.city.value.trim();
    cityForm.reset();

    // update UI with new city info
    updateCity(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
})