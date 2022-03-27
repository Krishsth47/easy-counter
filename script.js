const btns = document.querySelectorAll(".btn");
const counter = document.getElementById("counter");

totalClicks = 0;

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const btns = e.currentTarget.classList;
    if (btns.contains("increase")) {
      totalClicks++;
    } else if (btns.contains("decrease")) {
      totalClicks--;
    } else {
      totalClicks = 0;
    }

    if (totalClicks > 0) {
      counter.style.color = "green";
    }
    if (totalClicks < 0) {
      counter.style.color = "red";
    }
    if (totalClicks == 0) {
      counter.style.color = "black";
    }
    counter.innerText = totalClicks;
  });
});
