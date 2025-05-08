import { ContactServer } from "@/components/Contact/ContactServer";
import { CONTACT_CONTENT } from "@/common/constants";


export function Contact() {
    return (
        <section
            id="contact"
            className="py-20 px-4"
            aria-labelledby="contact-heading"
            itemScope
            itemType="https://schema.org/ContactPoint"
        >
            <div className="max-w-7xl mx-auto text-center">
                <h2
                    id="contact-heading"
                    className="text-3xl md:text-4xl font-bold mb-12 bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent"
                >
                    {CONTACT_CONTENT.title}
                </h2>
                <ContactServer />
            </div>
        </section>
    );
}

export default Contact;