import React from 'react';
import Classes from '../Hero.module.css';
import { motion } from 'framer-motion';

export default function Toolbar() {
    return (
        <a
            href="https://linkedin.com/in/keerthan-v"
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div
                whileTap={{ scale: 0.95 }}
                className={Classes.miniBanner}
            >
                <button type="button"><h5>Open to Work</h5></button>
                <h5>View LinkedIn Profile {'>'}</h5>
            </motion.div>
        </a>
    );
}
