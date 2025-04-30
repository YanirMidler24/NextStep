import { motion } from 'framer-motion';

export function MobileMenuItem({ item, onClick }: { item: { id: string; label: string }, onClick: (id: string) => void }) {
    return (
        <motion.button
            variants={{
                open: {
                    opacity: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                },
                closed: {
                    opacity: 0,
                    y: 20,
                    transition: { type: "spring", stiffness: 300, damping: 30 }
                }
            }}
            onClick={() => onClick(item.id)}
            className="w-full max-w-sm text-white text-xl py-4 px-6 rounded-lg 
                transition-colors text-center hover:bg-purple-500/20
                border-b border-purple-500/20"
            aria-label={`עבור לסעיף ${item.label}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            {item.label}
        </motion.button>
    );
}