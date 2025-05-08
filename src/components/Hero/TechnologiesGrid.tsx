import { motion } from "framer-motion";
import { TechnologyCard } from "./TechnologyCard";

// Define the Technology interface
export interface Technology {
    name: string;
    category: string;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // מרווח קטן בין כל כרטיס
            delayChildren: 0.6,    // עיכוב לפני תחילת האנימציה
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

// Specify that technologies is an array of Technology objects
export function TechnologiesGrid({ technologies = [] as Technology[] }) {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
            {technologies.map((tech, index) => (
                <motion.div key={index} variants={itemVariants}>
                    <TechnologyCard
                        name={tech.name}
                        category={tech.category}
                    />
                </motion.div>
            ))}
        </motion.div>
    );
}