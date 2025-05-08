"use client";

import { useSearchParams } from "next/navigation";
import { CONTACT_CONTENT } from "@/common/constants";
import { ContactForm } from "../Shared/Contact/ContactForm";
import { InfoCard } from "./InfoCard";

function ContactFormContent() {
    const searchParams = useSearchParams();
    const packageName = searchParams.get("package") ?? undefined;

    return (
        <>
            <p className="text-gray-300 mb-8" itemProp="description">
                {CONTACT_CONTENT.description}
            </p>

            <ContactForm packageName={packageName} />

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                {CONTACT_CONTENT.infoCards.map((card, index) => (
                    <InfoCard
                        key={index}
                        title={card.title}
                        details={card.details}
                        itemProp={card.itemProp}
                    />
                ))}
            </div>
        </>
    );
}

export default ContactFormContent;