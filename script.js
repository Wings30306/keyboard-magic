const page = document.querySelector("body");
const pressed = [];
const secretCode = "hufflepuff";
const houses = ["hufflepuff", "ravenclaw", "gryffindor", "slytherin"]
window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  houses.forEach(house => {
    console.log(pressed.join)
    if (pressed.join("").includes(house)) {
      houses.forEach(house => {
        page.classList.remove(house);
      })    
    page.classList.add(house);
  } else {
    page.classList.remove(houses.forEach(house => house))
  }
})});
