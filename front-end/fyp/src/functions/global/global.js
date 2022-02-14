export function scrollTo(destination) {
  document.getElementById(`${destination}`).scrollIntoView({
    behavior: "smooth",
  });
}

export function clickEvent(setTotalClicks) {
  let container = document.getElementById("dashContainer");
  let clicks = 0;
  container.addEventListener("click", function () {
    clicks += 1;
    setTotalClicks(clicks);
    console.log("DOM clicks: " + clicks);
  });
}
