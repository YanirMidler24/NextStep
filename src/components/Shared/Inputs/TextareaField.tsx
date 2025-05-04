import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import { useState } from "react";
import { blacklistPatterns } from "@/constans";

interface TextareaFieldProps {
    id: string;
    label: string;
    register: UseFormRegisterReturn;
    error?: string;
}

export function TextareaField({
    id,
    label,
    register,
    error,
}: TextareaFieldProps) {
    const [charCount, setCharCount] = useState(0);

    const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
        const value = e.currentTarget.value;

        let sanitized = value;
        for (const pattern of blacklistPatterns) {
            sanitized = sanitized.replace(pattern, "");
        }

        e.currentTarget.value = sanitized;
        setCharCount(sanitized.length);
    };

    const describedBy = `${id}-description${error ? ` ${id}-error` : ""}`;

    return (
        <div className="space-y-1">
            <Label
                htmlFor={id}
                className="block text-purple-400 font-medium mb-2 text-right"
            >
                {label}
            </Label>

            <Textarea
                id={id}
                rows={5}
                maxLength={150}
                onInput={handleInput}
                {...register}
                className={clsx(
                    "w-full p-3 text-white bg-black border border-border rounded-lg focus:ring-2 focus:ring-purple-500",
                    error && "border-red-500"
                )}
                role="textbox"
                autoComplete="off"
                aria-label={label}
                aria-required="true"
                aria-invalid={!!error}
                aria-describedby={describedBy}
            />

            <div className="flex justify-between text-xs text-gray-400 mt-1" id={`${id}-description`}>
                <span className="sr-only">ניתן להקליד עד 150 תווים</span>
                <span>{charCount}/150</span>
            </div>

            {error && (
                <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
