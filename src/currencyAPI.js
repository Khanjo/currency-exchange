export default class CurrencyExchange {
    static async getExchange() {
        try {
            const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/USD`);
            const jsonResponse = await response.json();
            if (!response.ok) {
                const errorMessage = `sorry, your request could not be processed ${response.status} ${response.statusText}`;
                throw new Error(errorMessage);
            }
            return jsonResponse;
        } catch (error) {
            return error;
        }
    }
}