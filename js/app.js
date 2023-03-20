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
  });
};
loadData();
