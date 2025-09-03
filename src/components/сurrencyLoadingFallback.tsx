import { LoadingSpinner } from "./ui/loading-spinner";

export function CurrencyLoadingFallback() {
    return (
        <div className="flex flex-col justify-center h-screen p-4">
            <div className="max-w-2xl max-h-2xl w-full m-auto text-center">
                <div className="border rounded-lg p-8">
                    <div className="space-y-4">
                        <LoadingSpinner size="lg" />
                        <h2 className="text-xl font-semibold text-gray-700">
                            Loading currencies...
                        </h2>
                        <p className="text-gray-500">
                            Please wait while we get the latest data about currencies
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}