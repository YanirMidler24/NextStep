import { AboutDescription } from "@/components/About/AboutDescription";
import { ABOUT_CONTENT } from "@/constans";
import Image from "next/image";

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

        <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-8 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
          <Image
            src="/ProfileImage.jpg"
            alt="Profile picture"
            fill
            sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
            className="object-cover object-center scale-105"
            priority
            itemProp="image"
            style={{
              objectPosition: "50% 45%", // Adjust these values to center the face
            }}
          />
        </div>

        <AboutDescription />
      </div>
    </section>
  );
}

export default About;
