import React from 'react';
import { motion } from 'framer-motion';

export default function BottomToTop({
    children,
    fromY = 50,
    toY = 0,
    fromOpacity = 0,
    toOpacity = 1,
    duration = 0.5,
    ease = 'easeInOut',
    delay = 0
}) {
    return (
        <motion.div
            initial={{ y: fromY, opacity: fromOpacity }}
            animate={{ y: toY, opacity: toOpacity }}
            transition={{
                duration,
                ease,
                // Cap delays on mobile so content appears faster
                delay: typeof window !== 'undefined' && window.innerWidth < 768
                    ? Math.min(delay, 0.1)
                    : delay
            }}
        >
            {children}
        </motion.div>
    );
}