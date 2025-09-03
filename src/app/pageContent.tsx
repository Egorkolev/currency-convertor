"use client";

import { Currency, type ConversionResponse } from "./types";
import { getConvert } from "@/queries/getConvert";
import { useForm } from "react-hook-form"
import { useState } from "react";
import View from "./view";

export default function Container({ currencies }: { currencies: Currency[] }) {
    const [conversion, setConversion] = useState<ConversionResponse | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const form = useForm({
        defaultValues: {
            currencyFrom: "",
            currencyTo: "",
            amount: 0
        },
        mode: "onSubmit"
    });

    const handleSubmit = async (data: { currencyFrom: string, currencyTo: string, amount: number }) => {
        setIsLoading(true);
        try {
            const response = await getConvert(data);
            setConversion(response);
            form.reset({
                currencyFrom: "",
                currencyTo: "",
                amount: 0
            });
        } catch (error) {
            setConversion(null);
            console.error('Error during conversion:', error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <View 
            handleSubmit={handleSubmit}
            currencies={currencies}
            conversion={conversion}
            form={form}
            isLoading={isLoading}
        />
    );
}