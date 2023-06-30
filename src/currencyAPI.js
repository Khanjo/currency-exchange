export class CurrencyExchange {
    static async getExchange(code1) {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KE}/latest/${code1}`);
            const jsonResponse = await response.json();
            if (!response.ok) {
                const errorMessage = `sorry, your request could not be processed ${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }
            return jsonResponse;
        } catch (error) {
            document.getElementById("output").innerText = "There has been an error processing your request.";
        }
    }
}

export function conversion(currency, response) {
    return currency * response;
}