export function scrollTo(destination) {
  document.getElementById(`${destination}`).scrollIntoView({
    behavior: "smooth",
  });
}

export function clickEvent(setTotalClicks) {
  let container = document.getElementById("dashContainer");
  let clicks = 0;

  function handleClicks() {
    clicks += 1;
    setTotalClicks(clicks);
    // console.log("DOM clicks: " + clicks);
  }
  container.addEventListener("click", handleClicks);
}

export function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
