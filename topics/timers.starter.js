/*
  __  .__                             
_/  |_|__| _____   ___________  ______
\   __\  |/     \_/ __ \_  __ \/  ___/
 |  | |  |  Y Y  \  ___/|  | \/\___ \ 
 |__| |__|__|_|  /\___  >__|  /____  >
               \/     \/           \/ 
*/

// 1 — start a timer and show a ⏰ in #clock after 10 seconds
setTimeout(() => {
  document.querySelector("#clock").textContent = "⏰";
}, 10000); // 10000 is 10000ms en is 10 seconden

// 2 — click the start button to show a ticking clock in #timer that goes up every second
// clicking stop should clear and stop the timer and reset the clock to 0
let count = 0;
let timerInterval;

document.querySelector("#start").addEventListener("click", function () {
  if (!timerInterval) {
    // Voorkomt meerdere intervals tegelijk
    timerInterval = setInterval(function () {
      count++;
      document.querySelector("#timer").textContent = count;
    }, 1000);
  }
});

document.querySelector("#stop").addEventListener("click", function () {
  clearInterval(timerInterval);
  timerInterval = null; // Reset interval
  count = 0; // Reset de teller naar 0
  document.querySelector("#timer").textContent = count; // Update de weergave
});

// 3 — create an image gallery that shows a new image every 5 seconds and repeats that cycle
// use the images gallery1.jpg, gallery2.jpg, gallery3.jpg in the images/timers_intervals folder
// use only one img tag in the html and change its src attribute (#slideshow)
let images = [
  "../images/timers_intervals/gallery1.jpg",
  "../images/timers_intervals/gallery2.jpg",
  "../images/timers_intervals/gallery3.jpg",
];

let index = 0;
setInterval(function () {
  index = (index + 1) % images.length; // Loopt terug naar 0 na de laatste afbeelding
  document.querySelector("#slideshow").src = images[index];
}, 3000);
