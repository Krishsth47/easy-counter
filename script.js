const click = document.querySelector(".click");
const counter = document.getElementById("counter");

totalClicks = 0;

click.addEventListener("click", () => {
  totalClicks++;
  counter.innerText = totalClicks;
});
