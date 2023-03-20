const cards = document.getElementById("card-all");

// data load api
const loadData = () => {
  const URL = "https://restcountries.com/v3.1/all";
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
// API data display
const displayData = (data) => {
  data.forEach((element) => {
    console.log(element);
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <img src="${element.flags.png}" alt="" />
    <h1 class="card-title">${element.name.common}</h1>
    <p class="para">Population: <samp class="result">${element.population}</samp></p>
    <p class="para">Official-Name: <samp class="result">${element.name.official}</samp></p>
    <p class="para">Region: <samp class="result">${element.region}</samp></p>
    <p class="para">Capital: <samp class="result">${element.capital}</samp></p>
    `;
    cards.appendChild(card);
  });
};
loadData();
