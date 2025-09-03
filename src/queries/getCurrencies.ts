import type { Currency } from "@/app/types";

export async function getCurrencies():Promise<Currency[]> {
    try {
        const response = await fetch(`https://api.currencybeacon.com/v1/currencies?api_key=RG8qIxwzU91ta9cOhkxEiR8419ICNcjF`);
        if (!response.ok) {
            throw new Error('Failed to fetch currencies');
        }
        const result = Object.values(await response.json());
        return result as Currency[];
    } catch (error) {
        console.error('Error fetching currencies:', error);
        throw new Error('Failed to fetch currencies');
    }
}
