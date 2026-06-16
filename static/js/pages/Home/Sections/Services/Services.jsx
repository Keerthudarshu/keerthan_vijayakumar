import React from 'react';
import Classes from './Services.module.css';
import SkillsGrid from './MyScrollingServices.jsx';

export default function Services() {
    return (
        <section className={Classes.service} id="services-section">
            <div className={Classes.container}>
                <h2>
                    Technical <span>Skills</span>
                </h2>
                <p>
                    Technologies and tools I work with to build production-ready web applications
                </p>
            </div>
            <SkillsGrid />
        </section>
    );
}
