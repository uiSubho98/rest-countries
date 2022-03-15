const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries=countries =>{
    // console.log(countries)
    const countriesHTML = countries.map(country =>getCountryHTML(country));
    // console.log(allCountriesHTML[0]);
    const container =document.getElementById('countries')
    container.innerHTML=countriesHTML;
}

const getCountryHTML = country =>{
    return `
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src ="${country.flags.png}</img>"
        </div>
    `
}

loadCountries()