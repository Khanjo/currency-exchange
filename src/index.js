import "./css/styles.css";
import CurrencyExchange from "./currencyAPI";

// Business Logic

async function exchangeRate() {
    const response = await CurrencyExchange.getExchange();
    if (response.main) {
        printRate();
    } else {
        printError();
    }
}

// UI Logic

function printRate() {

}

function printError() {

}

function formSubmit(event) {
    event.preventDefault();
    exchangeRate();
}

window.addEventListener("load", function () {
    this.document.querySelector('form').addEventListener("submit", formSubmit);
});