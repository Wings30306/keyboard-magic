const page = document.querySelector("body");
const pressed = [];
const secretCode = "hufflepuff";
window.addEventListener("keyup", e => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  if (pressed.join("").includes("hufflepuff")) {
    console.log("Honesty before glory");
    page.classList.remove("slytherin", "gryffindor", "ravenclaw");
    page.classList.add("hufflepuff");
  } else if (pressed.join("").includes("ravenclaw")) {
    console.log("Wit beyond measure is man's greatest treasure");
    page.classList.remove("hufflepuff", "gryffindor", "slytherin");
    page.classList.add("ravenclaw");
  } else if (pressed.join("").includes("gryffindor")) {
    console.log("GO GO GRYFFINDOR");
    page.classList.remove("hufflepuff", "slytherin", "ravenclaw");
    page.classList.add("gryffindor");
  } else if (pressed.join("").includes("slytherin")) {
    console.log("");
    page.classList.remove("hufflepuff", "gryffindor", "ravenclaw");
    page.classList.add("slytherin");
  } else {
    console.log("Draco dormiens nunquam titillandus");
    page.classList.remove("hufflepuff", "gryffindor", "ravenclaw", "slytherin");
  }
});
