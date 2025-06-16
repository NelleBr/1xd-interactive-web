/*
          __                                      
  _______/  |_  ________________     ____   ____  
 /  ___/\   __\/  _ \_  __ \__  \   / ___\_/ __ \ 
 \___ \  |  | (  <_> )  | \// __ \_/ /_/  >  ___/ 
/____  > |__|  \____/|__|  (____  /\___  / \___  >
     \/                         \//_____/      \/ 
*/

// 1 - click on the button, then add your name to localstorage in the key "myName"
document.querySelector("#btn1").addEventListener("click", function () {
  let name = prompt("Voer je naam in:");
  if (name) {
    localStorage.setItem("myName", name);
  }
});

// 2 - click on the button to read the value of "myName" from localstorage and display it span#myName
document.querySelector("#btn2").addEventListener("click", () => {
  let name = localStorage.getItem("myName");
  document.querySelector("#myName").textContent = name
    ? name
    : "Geen naam opgeslagen";
});

// 3 - click on remove button to remove "myName" from localstorage
document.querySelector("#btn3").addEventListener("click", () => {
  localStorage.removeItem("myName");
  document.querySelector("#myName").textContent = "Geen naam opgeslagen";
});

// 4 - click on the button to add a movie to the localstorage in the key "movies", show movies in the ul#movieList
// hint: the value of movies should be an array of strings
// hint: you can use JSON.stringify to convert an array to string
// hint: you can use JSON.parse to convert a string to array
// hint: you can use appendChild to add a new li to the ul#movieList
document.querySelector("#btn4").addEventListener("click", () => {
  let input = document.querySelector("#movie");
  let movie = input.value.trim();

  if (movie) {
    let movies = localStorage.getItem("movies");
    movies = movies ? JSON.parse(movies) : [];

    movies.push(movie);

    localStorage.setItem("movies", JSON.stringify(movies));

    let li = document.createElement("li");
    li.textContent = movie;
    document.querySelector("#movieList").appendChild(li);

    input.value = "";
  }
});
