import "./css/styles.css";
import { CurrencyExchange } from "./currencyAPI";
import { conversion } from "./currencyAPI";

// Business Logic

async function exchangeRate(currency, code) {
    const response = await CurrencyExchange.getExchange();
    const checkArray = Object.keys(response.conversion_rates);
    const output = document.getElementById("output");
    if (!response) {
        output.innerText = "There has been an error processing your request";
    } else if (Number.isNaN(currency)) {
        output.innerText = "Please enter a number";
    } else if (!checkArray.includes(code)) {
        output.innerText = "We do not have info on this currency";
    } else {
        printRate(currency, response, code);
    }
}

// UI Logic

function printRate(currency, response, code) {
    document.getElementById("output").innerText = `exchanging ${currency} USD would get you ${conversion(currency, response.conversion_rates[code])} ${code}`;
}

function formSubmit(event) {
    event.preventDefault();
    const currency = document.getElementById("USD").value;
    const code = document.getElementById("code").value;
    exchangeRate(currency, code);
}

window.addEventListener("load", function () {
    this.document.querySelector('form').addEventListener("submit", formSubmit);
});