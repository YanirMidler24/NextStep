import { motion } from 'framer-motion';
import React from 'react';

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
            className="w-full max-w-sm text-white text-xl py-5 px-8 rounded-xl
                transition-all duration-300 text-center 
                bg-gradient-to-r 
                focus:outline-none focus:ring-2 focus:ring-purple-400 
                focus:ring-offset-2 focus:ring-offset-black"
            aria-label={`עבור לסעיף ${item.label}`}
            whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.1), 0 4px 6px -4px rgba(139, 92, 246, 0.1)"
            }}
            whileTap={{ scale: 0.98 }}
            role="menuitem"
        >
            <div className="flex items-center justify-between">
                <span className="text-right font-medium">{item.label}</span>
                <svg
                    className="h-5 w-5 ml-2 inline-block transform rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </motion.button>
    );
}