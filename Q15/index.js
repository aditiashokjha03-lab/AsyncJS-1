let seconds = parseInt(prompt("Enter countdown time in seconds:"), 10);

let countdown = setInterval(() => {
  console.log(`Time remaining: ${seconds} seconds`);
  seconds--;

  if (seconds < 0) {
    clearInterval(countdown);
    console.log("Countdown Complete!");
  }
}, 1000);

setTimeout(() => {
  document.addEventListener("keydown", (event) => {
    if (event.key === "s") {
      clearInterval(countdown);
      console.log("Countdown stopped by user!");
    }
  });
}, 2000);
