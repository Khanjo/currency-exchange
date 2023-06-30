# _Currency Exchanger_

#### _A webpage that exchanges currencies_

#### By _**Joshua Khan**_

## Description

_This webpage will take an amount enetered in US dollars and use the Exchange Rate API to give your currency back in various countries._

### Specs
| Spec | Input | Output |
| :----- | :------ | :------ |
| The program will take user inputted currency amount and user inputted choice of currencies and make an API call to calculate the rate of exchange | 100.00 / USD / EUR | 91.9 (at time of test exchange rate may have changed) |
| The program will display an error if the API call results in an error | 100.00 USD / EUR / Submit | There has been an error processing your request |
| The program will display an error if the user chooses a currency that does not exist | 100. USD / GGG / Submit | We do not have info on this currency. | 

## Setup/Installation Requirements

* Visit the following link: https://github.com/Khanjo/currency-exchange
* Clone the repository to your desired directory.
* Go to https://www.exchangerate-api.com/ and create a free account to get an API key
* Open currency-exchange directory with VS Code or your preferred code editor
* create a .env file in the root directory and add API_KEY = {YOUR_API_KEY} to it.

## Known Bugs

_No Known Bugs_

## Support and contact details

https://github.com/Khanjo

## Technologies Used

* HTML
* CSS
* Javascript
* Webpack
* ExchangeRate-API

### License

[MIT License.](https://opensource.org/license/mit/)

Copyright (c) 2023 **_Joshua Khan_**