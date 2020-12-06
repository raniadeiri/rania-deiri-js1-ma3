const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-ratings";

const resultsContainer = document.querySelector(".results");

async function playStation() {

    const response = await fetch(url);

    const games = results.all;

    resultsContainer.innerHTML = "";

    for (let i = 0; i < games.length; i++) {
        console.log(games[i].name .rating .count);

        if (i === 8) {
        
        }

        resultsContainer.innerHTML += `<div class="result">${games[i].text}</div>`;
    }
    catch (error) {
        console.log("An error occurred");
        resultsContainer.innerHTML = displayError(" error ");
    }
}

playStation();