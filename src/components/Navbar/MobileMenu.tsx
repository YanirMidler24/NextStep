import { motion, AnimatePresence } from 'framer-motion';
import { MobileMenuItem } from './MobileMenuItem';
import { NAVBAR_CONTENT } from '@/constans';
export function MobileMenu({ isOpen, onItemClick }: { isOpen: boolean, onItemClick: (id: string) => void }) {
    const menuVariants = {
        open: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
            }
        },
        closed: {
            opacity: 0,
            y: -20,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 30,
                staggerChildren: 0.1,
                staggerDirection: -1
            }
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={menuVariants}
                    className="fixed top-16 left-0 right-0 bg-black/95 md:hidden"
                    style={{ height: 'calc(100vh - 4rem)' }}
                    role="dialog"
                    aria-modal="true"
                    aria-label={NAVBAR_CONTENT.mobileNavAriaLabel}
                >
                    <motion.div
                        className="flex flex-col items-center justify-center h-full space-y-6 p-4"
                    >
                        {NAVBAR_CONTENT.menuItems.map((item) => (
                            <MobileMenuItem
                                key={item.id}
                                item={item}
                                onClick={onItemClick}
                            />
                        ))}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}