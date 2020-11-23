const selectedCurrency = document.getElementById('selected-currency');

selectedCurrency.addEventListener('change', async () => {
    const existingCountryList = document.getElementById('country-list');
    if(existingCountryList) document.body.removeChild(existingCountryList);

    const countryData = await fetch(`https://restcountries.eu/rest/v2/currency/${selectedCurrency.value}`).then(res => res.json());

    const country = document.createElement('div');
    country.setAttribute('id', 'country-list');
    country.setAttribute('class', 'country-list-container')
    const appendData = countryData.map((data) => {
        return `
        <div class='country-container'>
            <div class='img-container'>
                <img src=${data.flag} class='img' />
            </div>
            <h5>${data.name}</h5>
        </div>`;
    }).join('');
    country.innerHTML = appendData;

    document.body.appendChild(country);
})
