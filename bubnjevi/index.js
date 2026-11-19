const bubnjevi = document.querySelectorAll(".drum");

bubnjevi.forEach((bubanj) => {
  bubanj.addEventListener("click", function () {
    let key = this.textContent;
    makeSound(key);
  });
});

document.addEventListener("keyup", function (event) {
  makeSound(event.key);
});

function makeSound(key) {
  buttonAnimation(key);
  let audio;
  switch (key) {
    case "w":
      audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "k":
      audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "l":
      audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      break;
  }
}

function buttonAnimation(key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 100);
}
