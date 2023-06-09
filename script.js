const body = document.querySelector("body");

body.onclick = function (e) {
  // get distance from left and top on click
  let x = e.pageX - e.target.offsetLeft;
  let y = e.pageY - e.target.offsetTop;

  const splash = document.createElement("span");

  // get random color eachtime
  splash.style.background = randomColor();

  // get random width between 50 and 400
  splash.style.width = Math.floor(Math.random() * (400 - 100) + 50) + "px";

  // get random rotation (0 to 360)
  // const randomRotation = Math.floor(Math.random() * 360);
  // set the random rotation to the image
  // splash.style.transform = `rotate(${randomRotation}deg)`;

  // set left and top distance to svg
  splash.style.left = x + "px";
  splash.style.top = y + "px";

  body.appendChild(splash);

  setTimeout(() => {
    splash.remove();
  }, 4000);
};

function randomColor() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const rgb = `rgb(${red}, ${green}, ${blue})`;

  return rgb;
}
