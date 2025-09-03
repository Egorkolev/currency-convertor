import type { UseFormReturn } from "react-hook-form";

export type Currency = {
    code: string;
    decimal_mark: string;
    id: number;
    name: string;
    precision: number;
    short_code: string;
    subunit: number;
    symbol: string;
    symbol_first: boolean;
    thousands_separator: string;
}

export type ConversionResponse = {
    amount: number;
    date: string;
    from: string;
    timestamp: number;
    to: string;
    value: number;
}

 export interface ViewProps {
     form: UseFormReturn<{
        currencyFrom: string;
        currencyTo: string;
        amount: number;
    }>;
    conversion: ConversionResponse | null;
    handleSubmit: (data: { currencyFrom: string, currencyTo: string, amount: number }) => Promise<void>;
    currencies: Currency[];
    isLoading: boolean;
}
