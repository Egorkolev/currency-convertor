"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingSpinner } from "@/components/ui/loading-spinner";
import { Form, FormField } from "@/components/ui/form";
import type { Currency, ViewProps } from "./types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";


export default function View({ currencies, conversion, handleSubmit, form, isLoading }: ViewProps) {
    return (
        <div className="flex flex-col justify-cente h-screen p-4">
            <Card className="max-w-2xl max-h-2xl w-full m-auto text-center">
                <CardHeader>
                    <CardTitle>Currency Conversion Tool</CardTitle>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form
                            className="flex flex-wrap gap-4 justify-center items-center md:justify-start md:items-start"
                            onSubmit={form.handleSubmit(handleSubmit)}
                        >
                            <div className="flex flex-col gap-4">
                                <FormField
                                    control={form.control}
                                    name="currencyFrom"
                                    rules={{ 
                                        required: "Please select a currency to convert from" 
                                    }}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-col gap-2">
                                            <Label>From</Label>
                                            <select 
                                                required 
                                                onChange={(e) => field.onChange(e.target.value)} 
                                                value={field.value}
                                                className="w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select a currency from</option>
                                                {currencies.map((currency: Currency, index: number) => (
                                                    <option key={`${index}-${currency.id}`} value={currency.short_code}>
                                                        {currency.name} ({currency.symbol})
                                                    </option>
                                                ))}
                                            </select>
                                            {fieldState.error && (
                                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="currencyTo"
                                    rules={{ 
                                        required: "Please select a currency to convert to" 
                                    }}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-col gap-2">
                                            <Label>To</Label>
                                            <select 
                                                required 
                                                onChange={(e) => field.onChange(e.target.value)} 
                                                value={field.value}
                                                className="w-[200px] px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            >
                                                <option value="">Select a currency to</option>
                                                {currencies.map((currency: Currency, index: number) => (
                                                    <option key={`to-${index}-${currency.id}`} value={currency.short_code}>
                                                        {currency.name} ({currency.symbol})
                                                    </option>
                                                ))}
                                            </select>
                                            {fieldState.error && (
                                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="amount"
                                    rules={{ 
                                        required: "Please enter an amount",
                                        min: { 
                                            value: 0.01, 
                                            message: "Amount must be greater than 0" 
                                        }
                                    }}
                                    render={({ field, fieldState }) => (
                                        <div className="flex flex-col gap-2">
                                            <Label>Amount</Label>
                                            <Input 
                                                required 
                                                {...field} 
                                                type="number" 
                                                step="0.01"
                                                min="0.01"
                                                placeholder="Enter amount" 
                                                className="w-[200px]" 
                                            />
                                            {fieldState.error && (
                                                <p className="text-red-500 text-sm mt-1">{fieldState.error.message}</p>
                                            )}
                                        </div>
                                    )}
                                />
                            </div>
                            <div className="flex gap-4 self-end items-center">
                            <Button type="submit" disabled={isLoading}>
                                {isLoading ? (
                                    <div className="flex items-center gap-2">
                                        <LoadingSpinner size="sm" />
                                        Loading conversion...
                                    </div>
                                ) : (
                                    "Convert"
                                )}
                            </Button>
                                {conversion && !isLoading && 
                                <p className="text-2xl font-bold">{conversion.value} {conversion.to}</p>}
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    );
}
