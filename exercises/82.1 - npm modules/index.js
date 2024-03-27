import wait from "waait";
import { faker } from '@faker-js/faker';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
console.log("Test: it works");


const fakeEmojiArr = Array.from({length: 10}, () => faker.internet.emoji());
const fakePersons = Array.from({length: 10}, () => faker.person.fullName());
const fakerData = document.querySelector(".faker-data");
const dateFnsData = document.querySelector(".date-fns-data");

fakerData.innerHTML = `
  <p><strong>Random emoji generated with faker npm:</strong> ${fakeEmojiArr.join("")}</p>
  <p><strong>Random persons generated with faker npm:</strong> <i>${fakePersons.join(", ")}</i></p>
  <br/>
`;

async function go() {
  console.log("Going");
  await wait(2000);
  console.log("Ending");
}

go();

const dateDiff = formatDistance(
  new Date(1995, 7, 19),
  new Date()
)

const date = new Date();
const formatedDate = format(date, `LLLL 'the' do y`);

dateFnsData.innerHTML = `
<div class="date-fns-data">
  <p>Formated date, using <strong>date-fns modules</strong>: <i>${formatedDate}</i></p>
</div>
<br/>
`

console.log(formatedDate);

console.log(dateDiff);