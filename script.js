const btns = document.querySelectorAll(".btn");
const counter = document.getElementById("counter");

totalClicks = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btns = e.currentTarget.classList;
    if (btns.contains("increase")) {
      totalClicks++;
    }
    if (btns.contains("decrease")) {
      totalClicks--;
    }
    counter.innerText = totalClicks;
  });
});
