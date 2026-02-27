// const button = document.getElementById("unicornbtn");
// const message = document.getElementById("message");

// button.addEventListener("click", function() {
//   message.textContent = "YAY!!! You win!";
// });

// // aaaaaaaaaaaaaaaaaaaaaaaaaaaa
// let points = 0;

// const button = document.getElementById("scoreBtn");
// const scoreText = document.getElementById("score");

// button.addEventListener("click", function() {
//   points = points + 1;
//   scoreText.textContent = points;
// });


const unicornButton = document.getElementById("unicornbtn");
const message = document.getElementById("message");

unicornButton.addEventListener("click", function() {
  message.textContent = "YAY!!! You win!";
});



let points = 0;

const scoreButton = document.getElementById("scoreBtn");
const scoreText = document.getElementById("score");

scoreButton.addEventListener("click", function() {
  points = points + 1;
  scoreText.textContent = points;
});
