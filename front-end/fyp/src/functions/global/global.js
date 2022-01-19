export function scrollTo(destination) {
  document.getElementById(`${destination}`).scrollIntoView({
    behavior: "smooth",
  });
}
