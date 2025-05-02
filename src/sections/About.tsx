import { AboutDescription } from "@/components/About/AboutDescription";
import { ABOUT_CONTENT } from "@/constans";

export function About() {
    return (
        <section
            id="about"
            className="py-20 px-4"
            aria-labelledby="about-heading"
            itemScope
            itemType="https://schema.org/Person"
        >
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-4">
                <h2
                    id="about-heading"
                    className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent mb-8"
                    itemProp="jobTitle"
                >
                    {ABOUT_CONTENT.title}
                </h2>

                <AboutDescription />
            </div>
        </section>
    );
}

export default About;
