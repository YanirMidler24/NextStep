import { HeroTitleProps } from "@/common";
import { highlightWords } from "@/common/constants";
import { motion } from "framer-motion";


export function HeroTitle({ title, subTitle, description }: HeroTitleProps) {

  const highlightText = (text: string) => {
    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, "g");
      result = result.replace(regex, `<span class="text-purple-400 font-bold">$1</span>`);
    });
    return result;
  };

  const motionProps = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
  };

  return (
    <>
      <motion.h1
        {...motionProps}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent leading-relaxed md:leading-relaxed"
        itemProp="name"
      >
        {title}
      </motion.h1>

      <motion.h2
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-l from-purple-600 to-purple-400 bg-clip-text text-transparent leading-relaxed md:leading-relaxed"
      >
        {subTitle}
      </motion.h2>

      <motion.p
        {...motionProps}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
        itemProp="description"
      >
        {description?.map((line, i) => (
          <span key={i} dangerouslySetInnerHTML={{ __html: highlightText(line) }} />
        ))}
      </motion.p>
    </>
  );
}