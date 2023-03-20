const cards = document.getElementById("card-all");
let URL = "https://restcountries.com/v3.1/all";
// data load api
const loadData = (URL) => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => displayData(data));
};
// API data display
const displayData = (data) => {
  data.forEach((element) => {
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

// search button action
const searchBtn = () => {
  cards.innerHTML = "";
  console.log(URL);
  const inputValue = document.getElementById("inputField");
  const value = inputValue.value;
  console.log(value);
  const URL1 = `https://restcountries.com/v3.1/name/${value}`;
  //   fetch(URL)
  //     .then((res) => res.json())
  //     .then((data) => displayData(data));
  loadData(URL1);
};
// logo action
document.getElementById("logo").addEventListener("click", function () {
  cards.innerHTML = "";
  loadData(URL);
});
loadData(URL);
