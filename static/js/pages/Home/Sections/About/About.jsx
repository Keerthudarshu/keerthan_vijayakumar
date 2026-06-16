import React from 'react';
import Classes from './About.module.css';

const EXPERIENCE = [
    {
        role: 'Software Developer',
        company: 'PJN Technologies, Bangalore',
        period: 'Jun 2025 – Mar 2026',
        points: [
            'Built full stack apps using React.js and Spring Boot',
            'Designed RESTful APIs; managed MySQL & PostgreSQL',
            'Responsive UI with cross-browser compatibility',
            'Testing, debugging, deployment & maintenance',
        ],
    },
    {
        role: 'Java Developer Intern',
        company: 'SNYCE Automations Pvt Ltd',
        period: 'Mar 2025 – Jun 2025',
        points: [
            'Backend services with Spring Boot for Work Permit System',
            'Integrated React frontend with backend APIs',
            'API testing, debugging & workflow optimization',
        ],
    },
    {
        role: 'QA Intern Trainee',
        company: 'Thought Frameworks',
        period: 'Apr 2025 – May 2025',
        points: [
            'Manual & functional testing for AI-based applications',
            'Created test cases; collaborated to resolve defects',
        ],
    },
];

export default function About() {
    return (
        <section className={Classes.about} id="about-section">
            <div className={Classes.container}>
                <h2>
                    About <span>Me</span>
                </h2>
                <p>
                    Full Stack Developer with 1+ year of experience in React.js, Next.js,
                    Java Spring Boot, and PHP — building scalable, responsive, cloud-deployed web applications
                </p>
            </div>

            <div className={Classes.featuresSection}>
                <div className={Classes.projects}>
                    <img src="/images/project.png" alt="about background" draggable={false} className={Classes.card_inner_img} />
                    <div className={Classes.projectsInner}>
                        <h2>1+ Year<br />of Experience</h2>
                        <p>
                            B.E. in Computer Science, K V G College of Engineering (CGPA 8.1/10).
                            Certified in Full Stack Web Development & C Programming.
                        </p>
                        <a href="mailto:keerthudarshu06@gmail.com">
                            <button><h5>Hire Me</h5></button>
                        </a>
                    </div>
                </div>

                <div className={Classes.featuresList}>
                    {EXPERIENCE.map((exp, i) => (
                        <div key={i} className={Classes.featureBox}>
                            <h3>{exp.role}</h3>
                            <p style={{ color: '#a365ff', marginBottom: '0.5rem', fontSize: '13px', fontWeight: '500' }}>
                                {exp.company} · {exp.period}
                            </p>
                            <ul style={{ paddingLeft: '1rem', listStyle: 'disc' }}>
                                {exp.points.map((pt, j) => (
                                    <li key={j} style={{ fontSize: '13px', fontWeight: '300', color: '#ccc', marginBottom: '3px' }}>{pt}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
