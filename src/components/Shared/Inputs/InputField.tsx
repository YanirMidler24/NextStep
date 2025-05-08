import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LucideIcon, Mail, Phone, User } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";
import clsx from "clsx";
import { blacklistPatterns } from "@/common/constants";

interface InputFieldProps {
    id: string;
    label: string;
    register: UseFormRegisterReturn;
    type?: string;
    error?: string;
    icon?: "user" | "phone" | "mail";
}

const iconMap: Record<string, LucideIcon> = {
    user: User,
    phone: Phone,
    mail: Mail,
};

export function InputField({
    id,
    label,
    type = "text",
    register,
    error,
    icon,
}: InputFieldProps) {
    const Icon = icon ? iconMap[icon] : null;

    const sanitizeInput = (e: React.FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        let sanitized = value;
        for (const pattern of blacklistPatterns) {
            sanitized = sanitized.replace(pattern, "");
        }

        e.currentTarget.value = sanitized;
    };

    const describedBy = error ? `${id}-error` : undefined;
    const autoComplete = type === "email" ? "email" : type === "tel" ? "tel" : "on";

    return (
        <div className="space-y-1">
            <Label
                htmlFor={id}
                className="block text-purple-400 font-medium mb-2 text-right"
            >
                {label}
            </Label>

            <div className="relative">
                <Input
                    id={id}
                    type={type}
                    {...register}
                    onInput={sanitizeInput}
                    role="textbox"
                    autoComplete={autoComplete}
                    className={clsx(
                        "w-full h-12 pl-4 pr-12 text-white bg-black border border-border rounded-lg focus:ring-2 focus:ring-purple-500",
                        error && "border-red-500"
                    )}
                    aria-label={label}
                    aria-required="true"
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    aria-labelledby={id}
                />

                {Icon && (
                    <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                        <Icon size={20} className="text-purple-400" />
                    </div>
                )}
            </div>

            {error && (
                <p id={`${id}-error`} className="text-sm text-red-500" role="alert">
                    {error}
                </p>
            )}
        </div>
    );
}
