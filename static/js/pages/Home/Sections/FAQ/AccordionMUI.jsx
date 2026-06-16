import React from 'react';
import { motion } from 'framer-motion';
import Classes from './Faq.module.css';

const CONTACT_ITEMS = [
    {
        icon: '✉️',
        label: 'Email',
        value: 'keerthudarshu06@gmail.com',
        href: 'mailto:keerthudarshu06@gmail.com',
        desc: 'Best way to reach me — I reply within 24 hours',
    },
    {
        icon: '📞',
        label: 'Phone',
        value: '+91-7892783668',
        href: 'tel:+917892783668',
        desc: 'Available Mon–Sat, 9 AM – 7 PM IST',
    },
    {
        icon: '💼',
        label: 'LinkedIn',
        value: 'linkedin.com/in/keerthan-v',
        href: 'https://linkedin.com/in/keerthan-v',
        desc: 'Connect with me professionally',
    },
    {
        icon: '🐙',
        label: 'GitHub',
        value: 'github.com/keerthan-developer',
        href: 'https://github.com/keerthan-developer',
        desc: 'Check out my open source projects',
    },
    {
        icon: '📍',
        label: 'Location',
        value: 'Bangalore, Karnataka, India',
        href: null,
        desc: 'Open to remote work and relocation',
    },
    {
        icon: '🎓',
        label: 'Education',
        value: 'B.E. Computer Science — CGPA 8.1/10',
        href: null,
        desc: 'K V G College of Engineering, 2021–2025',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function ContactCards() {
    return (
        <motion.div
            className={Classes.contactGrid}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
        >
            {CONTACT_ITEMS.map((item) => (
                <motion.div key={item.label} variants={cardVariants}>
                    {item.href ? (
                        <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{ textDecoration: 'none' }}>
                            <div className={`${Classes.contactCard} ${Classes.contactCardLink}`}>
                                <span className={Classes.contactIcon}>{item.icon}</span>
                                <div>
                                    <p className={Classes.contactLabel}>{item.label}</p>
                                    <p className={Classes.contactValue}>{item.value}</p>
                                    <p className={Classes.contactDesc}>{item.desc}</p>
                                </div>
                            </div>
                        </a>
                    ) : (
                        <div className={Classes.contactCard}>
                            <span className={Classes.contactIcon}>{item.icon}</span>
                            <div>
                                <p className={Classes.contactLabel}>{item.label}</p>
                                <p className={Classes.contactValue}>{item.value}</p>
                                <p className={Classes.contactDesc}>{item.desc}</p>
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </motion.div>
    );
}
