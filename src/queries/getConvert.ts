import type { ConversionResponse } from "@/app/types";

export async function getConvert(data: { currencyFrom: string, currencyTo: string, amount: number }): Promise<ConversionResponse> {
    const { currencyFrom, currencyTo, amount } = data;
    try {
        const response = await fetch(`https://api.currencybeacon.com/v1/convert?from=${currencyFrom}&to=${currencyTo}&amount=${amount}&api_key=${process.env.NEXT_PUBLIC_CURRENCYBEACON_API_KEY}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        return result.response as ConversionResponse;
    } catch (error) {
        console.error("Error during conversion:", error);
        throw new Error('Failed to fetch convert');
    }
}