const joke = document.querySelector("#joke");
const get_joke = document.querySelector("#get_joke");

get_joke.addEventListener("click", fetchJoke);

async function fetchJoke() {
  const joke_response = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });

  const joke_data = await joke_response.json();

  joke.innerHTML = joke_data.joke;
}