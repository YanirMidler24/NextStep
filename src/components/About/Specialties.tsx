import { motion } from "framer-motion";
import { SpecialtyCard } from './SpecialtyCard';
import { ABOUT_CONTENT } from "@/common/constants";

export function Specialties() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-br from-purple-900/20 to-purple-600/20 rounded-lg p-6 border border-purple-500/20"
        >
            <h3 className="text-xl font-semibold text-purple-400 mb-4">{ABOUT_CONTENT.specialties.title}</h3>
            <div className="grid grid-cols-2 gap-4">
                {ABOUT_CONTENT.specialties.categories.map((category, index) => (
                    <SpecialtyCard
                        key={index}
                        title={category.name}
                        skills={category.skills}
                    />
                ))}
            </div>
        </motion.div>
    );
}