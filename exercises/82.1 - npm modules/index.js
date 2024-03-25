import wait from "waait";
import { faker } from '@faker-js/faker';
console.log("Test: it works");


const fakeEmojiArr = Array.from({length: 10}, () => faker.internet.emoji());
const fakePersons = Array.from({length: 10}, () => faker.person.fullName());
const fakerData = document.querySelector(".faker-data");

fakerData.innerHTML = `
  <p><strong>Random emoji generated with faker npm:</strong> ${fakeEmojiArr.join("")}</p>
  <p><strong>Random persons generated with faker npm:</strong> <i>${fakePersons.join(", ")}</i></p>
`;

async function go() {
  console.log("Going");
  await wait(2000);
  console.log("Ending");
}

go();