import { handleResult } from "./handlers";
import { colorsByLength, isDark } from "./colors";

const colorsEl = document.querySelector(".colors");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

function start() {
  if(!("SpeechRecognition" in window)) {
    return alert("Sorry, your browser does not support Speech Recognition function");
  }
  console.log("Starting...");
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.onresult = handleResult;
  recognition.start();
}

function displayColors(colors) {
  return colors.map((color) => `<span class="color ${color} ${isDark(color) ? "dark" : ""}" style="background-color: ${color};">${color}</span>`).join("");
}

start();
colorsEl.innerHTML = displayColors(colorsByLength);