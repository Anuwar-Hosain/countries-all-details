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
    <img src="Flag-Bangladesh.webp" alt="" />
    <h1 class="card-title">Bangladesh</h1>
    <p class="para">Population: <samp class="result">555555</samp></p>
    <p class="para">Currency: <samp class="result">555555</samp></p>
    <p class="para">Region: <samp class="result">asia</samp></p>
    <p class="para">Capital: <samp class="result">dhaka</samp></p>
    `;
    cards.appendChild(card);
  });
};
loadData();
