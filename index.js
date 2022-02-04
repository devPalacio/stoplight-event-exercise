let stopLight = document.getElementById("stopLight");
let slowLight = document.getElementById("slowLight");
let goLight = document.getElementById("goLight");
let controls = document.getElementById("controls");

function toggleLight(e) {
  console.log(e);
  if (e.target === controls) {
    return;
  }
  let command = e.target.textContent.toLowerCase();
  if (command == "stop") {
    stopLight.classList.toggle(`${command}`);
    return logLight(e.target.textContent, stopLight.classList.length);
  }
  if (command === "slow") {
    slowLight.classList.toggle(`${command}`);
    return logLight(e.target.textContent, slowLight.classList.length);
  }
  if (command === "go") {
    goLight.classList.toggle(`${command}`);
    return logLight(e.target.textContent, goLight.classList.length);
  }
  return logLight(e.target.textContent);
}

function logLight(lightColor, lightState) {
  let onOff;
  if (lightState === 1) {
    onOff = "off";
  } else {
    onOff = "on";
  }
  return console.log(lightColor + " bulb " + onOff);
}

function logMouse(e) {
  if (e.type === "mouseenter") {
    console.log(`Entered ${e.target.textContent} button`);
  }
  if (e.type === "mouseleave") {
    console.log(`Exited ${e.target.textContent} button`);
  }
}

controls.addEventListener("click", toggleLight);

Array.from(controls.children).forEach((light) =>
  light.addEventListener("mouseenter", logMouse)
);
Array.from(controls.children).forEach((light) =>
  light.addEventListener("mouseleave", logMouse)
);

// log state of each bulb

//   (function () {
//   "use strict";

//   // YOUR CODE HERE
// })();
