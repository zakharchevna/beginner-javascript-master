import { isValidColor } from "./colors";

function logWords(results) {
  console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  console.log(words);
  let color = words.toLowerCase();
  color = color.replace(/\s/g, "");
  if(!isValidColor(color)) return;
  const colorSpan = document.querySelector(`.${color}`);
  console.log(colorSpan);
  colorSpan.classList.add("got");
  document.body.style.backgroundColor = color;
}