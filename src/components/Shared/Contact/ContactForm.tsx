"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { InputField } from "../Inputs/InputField";
import { TextareaField } from "../Inputs/TextareaField";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Loader from "../Loader/Loader";
import { useSearchParams } from "next/navigation";

type ContactFields = {
    fullName: string;
    phone: string;
    email: string;
    message: string;
};

export function ContactForm() {
    const searchParams = useSearchParams();
    const packageName = searchParams.get("package");
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFields>();

    const { fullName, phone, email, message } = watch();
    const isFormEmpty = !fullName || !phone || !email || !message;




    const onSubmit = async (data: ContactFields) => {
        const { fullName, phone, email, message } = data;
        if (!fullName || !phone || !email || !message) {
            toast.error("יש למלא את כל השדות");
            return;
        }

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ fullName, phone, email, message, packageName }),
            });

            if (!res.ok) throw new Error("Failed to send");

            toast.success("ההודעה נשלחה בהצלחה!");

            const url = new URL(window.location.href);
            url.searchParams.delete("package");
            window.history.replaceState({}, "", url.pathname);

            reset();
        } catch {
            toast.error("שליחה נכשלה. נסה שוב.");
        }
    };


    return (
        <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-xl mx-auto rounded-3xl border border-border bg-black/40 backdrop-blur-lg p-10 shadow-2xl space-y-8"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                    id="fullName"
                    label="שם מלא"
                    register={register("fullName", {
                        required: "שדה חובה",
                        pattern: {
                            value: /^[^0-9]+$/,
                            message: "שם לא יכול להכיל מספרים",
                        },
                    })}
                    error={errors.fullName?.message}
                    icon="user"
                />

                <InputField
                    id="phone"
                    label="מספר טלפון"
                    type="tel"
                    register={register("phone", {
                        required: "שדה חובה",
                        minLength: {
                            value: 10,
                            message: "מספר טלפון חייב להכיל 10 ספרות",
                        },
                        maxLength: {
                            value: 10,
                            message: "מספר טלפון חייב להכיל 10 ספרות",
                        },
                        pattern: {
                            value: /^[0-9]+$/,
                            message: "רק ספרות מותרות",
                        },
                    })}
                    error={errors.phone?.message}
                    icon="phone"
                />
            </div>

            <InputField
                id="email"
                label="מייל"
                type="email"
                register={register("email", {
                    required: "שדה חובה",
                    pattern: {
                        value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                        message: "כתובת מייל לא תקינה",
                    },
                })}
                error={errors.email?.message}
                icon="mail"
            />

            <TextareaField
                id="message"
                label="מה תרצה להוסיף?"
                register={register("message", { required: "שדה חובה" })}
                error={errors.message?.message}
            />


            <Button
                type="submit"
                disabled={isFormEmpty || isSubmitting || Object.keys(errors).length > 0}
                className="w-full text-lg py-4 font-semibold tracking-wide bg-gradient-to-l from-purple-600 to-purple-400 text-white rounded-xl hover:brightness-110 transition opacity-100 disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
            >
                {isSubmitting ? <Loader /> : "שלח/י הודעה"}
            </Button>

        </motion.form>
    );
}
