import { CurrencyLoadingFallback } from "@/components/сurrencyLoadingFallback";
import CurrencyContainer from "./pageContainer";
import { Suspense } from "react";

export default function Home() {
    return (
        <div>
            <Suspense fallback={<CurrencyLoadingFallback />}>
                <CurrencyContainer />
            </Suspense>
        </div>
    );
}
