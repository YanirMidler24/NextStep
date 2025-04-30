import { motion } from "framer-motion";

interface HeroButtonProps {
    text: string;
    onClick: () => void;
}

export function HeroButton({ text, onClick }: HeroButtonProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
        >
            <button
                onClick={onClick}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold mb-10 py-4 px-8 rounded-lg text-lg transition-transform transform hover:scale-105"
                aria-label={text}
            >
                {text}
            </button>
        </motion.div>
    );
}
