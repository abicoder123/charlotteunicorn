const button = document.getElementById("unicornbtn");
const message = document.getElementById("message");
unicorn.addEventListener("click", function() {
  message.textContent = "YAY!!! You win!";
  gameOver = true;
  clearInterval(moveInterval); // 🛑 stops movement
});
button.addEventListener("click", function() {
  message.textContent = "YAY!!! You win!";
});


