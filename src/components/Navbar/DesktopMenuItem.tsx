import { motion } from 'framer-motion';

interface DesktopMenuItemProps {
    item: { id: string; label: string };
    index: number;
    onClick: (id: string) => void;
}

export function DesktopMenuItem({ item, index, onClick }: DesktopMenuItemProps) {
    return (
        <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => onClick(item.id)}
            className="relative text-white hover:text-purple-400 px-3 py-2 rounded-lg transition-colors group"
            aria-label={`עבור לסעיף ${item.label}`}
        >
            {item.label}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-purple-500 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
            />
        </motion.button>
    );
}
