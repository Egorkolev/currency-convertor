"use server";

import { getCurrencies } from "@/queries/getCurrencies";
import Container from "./pageContent";

export default async function CurrencyContainer() {
    const currencies = await getCurrencies();
    return <Container currencies={currencies} />;
}
