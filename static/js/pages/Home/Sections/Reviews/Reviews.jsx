import React, { useState } from "react";
import Classes from "./Reviews.module.css";
import SpotlightCard from "../../../../components/Navbar/reactbits/Components/SpotlightCard/SpotlightCard";
import { AnimatePresence, motion } from "framer-motion";

const PROJECTS = [
    {
        name: "Mane Coffee",
        type: "E-commerce Brand Website",
        tech: ["React.js", "Spring Boot", "MySQL", "AWS"],
        description: "Full-stack e-commerce platform for a coffee brand. Built responsive frontend with React.js, REST APIs with Spring Boot, MySQL for product/cart/order management. Deployed backend on AWS EC2 and frontend on Vercel.",
        link: "https://manecoffeee.com/",
        icon: "☕",
    },
    {
        name: "Emirates Gold",
        type: "Jewellery Business Website",
        tech: ["PHP", "MySQL", "HTML", "CSS"],
        description: "Dynamic jewellery business website using PHP and MySQL. Designed responsive frontend pages and implemented backend functionalities with database integration. Deployed on InfinityFree hosting.",
        link: "https://emirate.page.gd/",
        icon: "💎",
    },
    {
        name: "Sanatana Parampara",
        type: "E-commerce Platform",
        tech: ["React.js", "Spring Boot", "AWS"],
        description: "Scalable e-commerce platform with reusable React.js frontend components and Spring Boot backend APIs. Deployed on AWS cloud infrastructure with focus on scalability and performance.",
        link: null,
        icon: "🛍️",
    },
    {
        name: "PetAndCo",
        type: "Pet Shop E-commerce",
        tech: ["React.js", "Spring Boot", "MySQL"],
        description: "Complete e-commerce system with cart and order management for a pet shop. Integrated Spring Boot backend with MySQL database and hosted application on AWS infrastructure.",
        link: null,
        icon: "🐾",
    },
    {
        name: "Huura",
        type: "Karate Academy Website",
        tech: ["HTML", "CSS", "JavaScript"],
        description: "Responsive static website for a karate academy optimized for desktop and mobile devices. Clean UI with smooth animations deployed on Vercel hosting platform.",
        link: "https://karate-academy-two.vercel.app/",
        icon: "🥋",
    },
];

const ITEMS_PER_SLIDE = 3;
const totalSlides = Math.ceil(PROJECTS.length / ITEMS_PER_SLIDE);

export default function Reviews() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const goToPrev = () => setCurrentSlide((p) => Math.max(0, p - 1));
    const goToNext = () => setCurrentSlide((p) => Math.min(totalSlides - 1, p + 1));

    const startIdx = currentSlide * ITEMS_PER_SLIDE;
    const currentItems = PROJECTS.slice(startIdx, startIdx + ITEMS_PER_SLIDE);
    const delayMap = [0.05, 0.15, 0.2];

    return (
        <section className={Classes.hero} id="reviews-section">
            <div className={Classes.container}>
                <h2>
                    Featured <span>Projects</span>
                </h2>
                <p>
                    A selection of web applications I've built — from e-commerce platforms
                    to business websites, using modern full-stack technologies
                </p>

                <div className={Classes.carousel}>
                    <AnimatePresence mode="wait">
                        {currentItems.map((project, idx) => (
                            <motion.div
                                key={`${currentSlide}-${idx}`}
                                initial={{ y: -10, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 10, opacity: 0 }}
                                transition={{ delay: delayMap[idx] || 0.1, duration: 0.3 }}
                                style={{ display: "inline-block" }}
                            >
                                <SpotlightCard
                                    className="custom-spotlight-card"
                                    spotlightColor="rgb(225, 187, 251, 0.2)"
                                >
                                    <div className={Classes.card}>
                                        <div className={Classes.profile}>
                                            <div className={Classes.projectIcon}>{project.icon}</div>
                                            <div>
                                                <h4>{project.name}</h4>
                                                <span>{project.type}</span>
                                            </div>
                                        </div>

                                        <div className={Classes.techTags}>
                                            {project.tech.map((t) => (
                                                <span key={t} className={Classes.techTag}>{t}</span>
                                            ))}
                                        </div>

                                        <p className={Classes.reviewText}>{project.description}</p>

                                        {project.link && (
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={Classes.projectLink}
                                            >
                                                View Live →
                                            </a>
                                        )}

                                        <div className={Classes.cardBottom} />
                                    </div>
                                </SpotlightCard>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                <div className={Classes.btnWrapper}>
                    <button onClick={goToPrev} disabled={currentSlide === 0} style={{ opacity: currentSlide === 0 ? 0.5 : 1 }}>
                        <svg style={{ transform: "rotate(180deg)" }} width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#8F9BB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#8F9BB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <button onClick={goToNext} disabled={currentSlide === totalSlides - 1} style={{ opacity: currentSlide === totalSlides - 1 ? 0.5 : 1 }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                            <path d="M5 12H19" stroke="#8F9BB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12 5L19 12L12 19" stroke="#8F9BB7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}
