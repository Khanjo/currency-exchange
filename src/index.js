import "./css/styles.css";
import { CurrencyExchange } from "./currencyAPI";
import { conversion } from "./currencyAPI";

// Business Logic

async function exchangeRate(currency, code1, code2) {
    const response = await CurrencyExchange.getExchange(code1);
    const checkArray = Object.keys(response.conversion_rates);
    const output = document.getElementById("output");
    if (!response) {
        printError(response);
    } else if (Number.isNaN(currency)) {
        output.innerText = 'Please enter a number in "Currency amount".';
    } else if (!checkArray.includes(code1, code2)) {
        output.innerText = "We do not have info on this currency.";
    } else {
        printRate(currency, response, code1, code2);
    }
}

// UI Logic

function printRate(currency, response, code1, code2) {
    document.getElementById("output").innerText = `${code1} ${currency} equals ${code2} ${conversion(currency, response.conversion_rates[code2])}.`;
}

function printError(error) {
    document.getElementById("output").innerText = `There was an error processing your request: ${error.errorMessage}`;
}

function formSubmit(event) {
    event.preventDefault();
    const currency = document.getElementById("amount").value;
    const code1 = document.getElementById("code1").value.toUpperCase();
    const code2 = document.getElementById("code2").value.toUpperCase();
    document.getElementById("amount").value = null;
    document.getElementById("code1").value = null;
    document.getElementById("code2").value = null;
    exchangeRate(currency, code1, code2);
}

window.addEventListener("load", function () {
    this.document.querySelector('form').addEventListener("submit", formSubmit);
});