import React from "react";
import Classes from "./ProjectsLoop.module.css";

const projects = [
    { id: 1, src: "/projects/1.webp", href: "https://manecoffeee.com/", alt: "Mane Coffee" },
    { id: 2, src: "/projects/2.webp", href: "https://emirate.page.gd/", alt: "Emirates Gold" },
    { id: 3, src: "/projects/3.webp", href: "https://karate-academy-two.vercel.app/", alt: "Huura Academy" },
    { id: 4, src: "/projects/4.webp", href: "#reviews-section", alt: "Sanatana Parampara" },
    { id: 5, src: "/projects/5.webp", href: "#reviews-section", alt: "PetAndCo" },
    { id: 6, src: "/projects/6.webp", href: "https://manecoffeee.com/", alt: "Full Stack Project" },
    { id: 7, src: "/projects/7.webp", href: "#reviews-section", alt: "Web Project" },
    { id: 8, src: "/projects/8.webp", href: "#reviews-section", alt: "App Project" },
];

const slides = [...projects, ...projects, ...projects];

export default function ProjectsLoop() {
    return (
        <div className={Classes.wrapper}>
            <div className={Classes.slider}>
                <div className={Classes.track}>
                    {slides.map((project, index) => (
                        <a
                            key={`${project.id}-${index}`}
                            href={project.href}
                            target={project.href.startsWith('http') ? "_blank" : undefined}
                            rel={project.href.startsWith('http') ? "noreferrer" : undefined}
                            className={Classes.slideLink}
                        >
                            <div className={Classes.imageWrapper}>
                                <img
                                    src={project.src}
                                    alt={project.alt}
                                    className={Classes.image}
                                    loading="lazy"
                                    draggable={false}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
