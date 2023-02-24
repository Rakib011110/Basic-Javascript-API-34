const loadCountries = () => {

    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))



}


const displayCountries = countries => {

    // console.log(countries.cca2);

    const countryContainer = document.getElementById('all-countryContainer')

    // for (const counrty of countries) {

    // }
    countries.forEach(country => {
        console.log(country.cca2);
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = ` 
        
        <h3> Name: ${country.name.common} </h3>
        <p>Capital: ${country.capital ? country.capital[0] : "no capital"} </p>
<button onclick='loadCountryDetails("${country.cca2}")'>  Details</button>
        
        `
        countryContainer.appendChild(countryDiv)

    })


}

const loadCountryDetails = code => {

    const url = `https://restcountries.com/v2/alpha/${code}
`


    fetch(url)

        .then(res => res.json())
        .then(data => displayCountryDetails(data))
    console.log('details commning', url);

}

const displayCountryDetails = (country) => {
    console.log(country);
    const detailContainer = document.getElementById('countyDetail')
    detailContainer.innerHTML = ` 
<h2>Name:   ${country.name}</h2>
<p>Capital</p> 
 <img src='${country.flags.png}' alt="">

`


}


loadCountries()