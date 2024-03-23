const currencies = {
  USD: 'United States Dollar',
  AUD: 'Australian Dollar',
  BGN: 'Bulgarian Lev',
  BRL: 'Brazilian Real',
  CAD: 'Canadian Dollar',
  CHF: 'Swiss Franc',
  CNY: 'Chinese Yuan',
  CZK: 'Czech Republic Koruna',
  DKK: 'Danish Krone',
  GBP: 'British Pound Sterling',
  HKD: 'Hong Kong Dollar',
  HRK: 'Croatian Kuna',
  HUF: 'Hungarian Forint',
  IDR: 'Indonesian Rupiah',
  ILS: 'Israeli New Sheqel',
  INR: 'Indian Rupee',
  JPY: 'Japanese Yen',
  KRW: 'South Korean Won',
  MXN: 'Mexican Peso',
  MYR: 'Malaysian Ringgit',
  NOK: 'Norwegian Krone',
  NZD: 'New Zealand Dollar',
  PHP: 'Philippine Peso',
  PLN: 'Polish Zloty',
  RON: 'Romanian Leu',
  RUB: 'Russian Ruble',
  SEK: 'Swedish Krona',
  SGD: 'Singapore Dollar',
  THB: 'Thai Baht',
  TRY: 'Turkish Lira',
  ZAR: 'South African Rand',
  EUR: 'Euro',
};

const endpoint = "https://api.apilayer.com/exchangerates_data/latest";

const fromInput = document.querySelector("[name='from-amount']");
const fromSelect = document.querySelector("[name='from-currency']");
const toSelect = document.querySelector("[name='to-currency']");
const output = document.querySelector(".to-amount");
const form = document.querySelector('.app form');


const myHeaders = new Headers();
myHeaders.append("apikey", "7Sen3aLSTjgAUDdeht0kesqul75JVZJO");

const requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function generateOptions(options) {
  return Object.entries(options)
  .map(([currencyCode, currencyName]) =>
    `<option value="${currencyCode}">${currencyCode} - ${currencyName}</option>`)
    .join("");
}

const optionsHTML = generateOptions(currencies);

fromSelect.innerHTML = optionsHTML;
toSelect.innerHTML = optionsHTML;

async function fetchRates(base = "USD", symbols = "EUR") {
  const res = await fetch(`${endpoint}?symbols=${symbols}&base=${base}`, requestOptions);
  const rates = await res.json()
  .catch(error => console.log('error', error));
  return rates;
}

async function convert(amount, from, to) {
  const rates = await fetchRates(from, to);
  const rate = rates.rates[to];
  const convertedAmount = amount * rate;
  console.log(`${amount} ${from} is ${convertedAmount} in ${to}`);
  return convertedAmount;
}

async function handleInput(e) {
  const rawAmount = await convert(
    fromInput.value,
    fromSelect.value,
    toSelect.value
  )
  // output.textContent = formatCurrency(rawAmount, toSelect.value);
  output.textContent = rawAmount.toFixed(2);
}

// function formatCurrency(amount, currency) {
//   return Intl.NumberFormat("en-US", {
//     style: 'currency',
//     currency
//   }).format(amount);
// }

form.addEventListener("input", handleInput);
